import BigNumber from "bignumber.js";

import { Validator } from "../..";
import { DataItem } from "../../types";
import { callWithBackoffStrategy, standardizeJSON, VOTE } from "../../utils";

/**
 * saveLoadValidationBundle loads the bundle from the local
 * cache for validation with the proposed bundle. If there is
 * an error loading the bundle from cache the node instantly votes
 * with abstain and continues to try to load the bundle
 *
 * @method saveLoadValidationBundle
 * @param {Validator} this
 * @param {number} updatedAt
 * @return {Promise<DataItem[] | null>}
 */
export async function saveLoadValidationBundle(
  this: Validator,
  updatedAt: number
): Promise<DataItem[] | null> {
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
      if (this.validateIsPoolActive()) {
        return null;
      }

      // check if validator needs to upload
      if (
        this.pool.bundle_proposal!.next_uploader === this.staker &&
        unixNow.gte(unixIntervalEnd)
      ) {
        return null;
      }

      // load bundle from current pool current index to proposed index
      const proposalStartIndex = parseInt(this.pool.data!.current_index);
      const proposalTargetIndex =
        proposalStartIndex + parseInt(this.pool.bundle_proposal!.bundle_size);

      // attempt to load bundle from cache
      const bundle: DataItem[] = [];

      // in order to get the same bundle for validation as the one
      // proposed the bundle is loaded with the proposed heights
      this.logger.debug(
        `Loading bundle from index ${proposalStartIndex} to index ${proposalTargetIndex}`
      );

      for (let i = proposalStartIndex; i < proposalTargetIndex; i++) {
        try {
          // try to get the data item from local cache
          this.logger.debug(`this.cacheProvider.get(${i.toString()})`);
          const item = await this.cacheProvider.get(i.toString());
          bundle.push(item);
        } catch {
          // if a request data item can not be found abort and
          // try again after a backoff time
          throw new Error(
            `Requested bundle could not be loaded from cache yet.`
          );
        }
      }

      this.logger.info(
        `Successfully loaded validation bundle from CacheProvider:${this.cacheProvider.name}`
      );

      return standardizeJSON(bundle);
    },
    { limitTimeoutMs: 5 * 60 * 1000, increaseByMs: 10 * 1000 },
    async (_: any, ctx) => {
      this.logger.info(
        `Loading validation bundle from CacheProvider:${
          this.cacheProvider.name
        } was unsuccessful. Retrying in ${(ctx.nextTimeoutInMs / 1000).toFixed(
          2
        )}s ...`
      );

      // vote abstain if validation bundle could not be loaded from cache.
      // With voting abstain the network knows that the node
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
