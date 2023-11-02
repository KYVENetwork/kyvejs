import BigNumber from "bignumber.js";

import { Validator } from "../..";
import { callWithBackoffStrategy, standardizeError, VOTE } from "../../utils";

/**
 * saveBundleDownload downloads a bundle from the storage provider.
 * The download should be aborted if the pool is not
 * active anymore or a new bundle proposal has been found
 * or the node is the current uploader and the upload interval
 * has passed.
 *
 * If there is an error retrieving the bundle from the storage provider
 * the node instantly votes with abstain and continues to try to retrieve
 * the bundle.
 *
 * @method saveBundleDownload
 * @param {Validator} this
 * @param {number} updatedAt
 * @return {Promise<Buffer | null>}
 */
export async function saveBundleDownload(
  this: Validator,
  updatedAt: number
): Promise<Buffer | null> {
  return await callWithBackoffStrategy(
    async () => {
      await this.syncPoolState();

      const unixNow = new BigNumber(Date.now());
      const unixIntervalEnd = new BigNumber(
        this.pool.bundle_proposal!.updated_at
      )
        .plus(this.pool.data!.upload_interval)
        .multipliedBy(1000);

      // check if new proposal is available in the meantime
      if (parseInt(this.pool.bundle_proposal!.updated_at) > updatedAt) {
        return null;
      }

      // check if pool got inactive in the meantime
      if (!this.isPoolActive()) {
        return null;
      }

      // check if validator needs to upload
      if (
        this.pool.bundle_proposal!.next_uploader === this.staker &&
        unixNow.gte(unixIntervalEnd)
      ) {
        return null;
      }

      // get storage provider the proposed bundle was saved to
      this.logger.debug(`this.storageProviderFactory()`);
      const storageProvider = this.storageProviderFactory();

      // calculate download timeout for storage provider
      // the timeout should always be 20 seconds less than the upload interval
      // so that the node still has enough time to vote abstain when the
      // download timeout is reached
      const downloadTimeoutSec = Math.max(
        0,
        parseInt(this.pool.data!.upload_interval) - 20
      );

      this.logger.debug(
        `this.storageProvider.retrieveBundle(${
          this.pool.bundle_proposal!.storage_id
        },${downloadTimeoutSec * 1000})`
      );

      const { storageData } = await storageProvider.retrieveBundle(
        this.pool.bundle_proposal!.storage_id,
        downloadTimeoutSec * 1000
      );

      this.m.storage_provider_retrieve_successful.inc();

      this.logger.info(
        `Successfully downloaded bundle with id ${
          this.pool.bundle_proposal!.storage_id
        } from StorageProvider:${storageProvider.name}`
      );

      return storageData;
    },
    { limitTimeoutMs: 5 * 60 * 1000, increaseByMs: 10 * 1000 },
    async (err: any, ctx) => {
      this.logger.info(
        `Retrieving bundle from StorageProvider was unsuccessful. Retrying in ${(
          ctx.nextTimeoutInMs / 1000
        ).toFixed(2)}s ...`
      );
      this.logger.debug(standardizeError(err));

      this.m.storage_provider_retrieve_failed.inc();

      // vote abstain if bundle could not be retrieved from storage
      // provider. With voting abstain the network knows that the node
      // is still online but just could not vote
      if (!this.pool.bundle_proposal?.voters_abstain.includes(this.staker)) {
        await this.voteBundleProposal(
          this.pool.bundle_proposal!.storage_id,
          VOTE.ABSTAIN
        );
      }
    }
  );
}
