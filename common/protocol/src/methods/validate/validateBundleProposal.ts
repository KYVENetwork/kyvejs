import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

import { Validator } from "../..";
import { sha256, standardizeJSON, VOTE } from "../../utils";

/**
 * validateBundleProposal validates a proposed bundle proposal
 * by first downloading the proposed data bundle from the storage
 * provider and then comparing it with a locally created validation
 * bundle. Furthermore, custom validation from the runtime is applied
 * at the end.
 *
 * @method validateBundleProposal
 * @param {Validator} this
 * @param {number} updatedAt
 * @return {Promise<void>}
 */
export async function validateBundleProposal(
  this: Validator,
  updatedAt: number
): Promise<void> {
  try {
    this.logger.info(
      `Validating bundle proposal = ${this.pool.bundle_proposal!.storage_id}`
    );

    // retrieve the data of the bundle proposal in a save way
    // by retrying the retrieval if it fails
    const storageProviderResult = await this.saveBundleDownload(updatedAt);

    // if no bundle got returned it means that the pool is not active anymore
    // or a new bundle proposal round has started
    if (storageProviderResult === null) {
      return;
    }

    // vote invalid if data size does not match with proposed data size
    this.logger.debug(`Validating bundle proposal by data size`);
    this.logger.debug(`Proposed = ${this.pool.bundle_proposal!.data_size}`);
    this.logger.debug(`Actual   = ${storageProviderResult.byteLength}`);

    if (
      parseInt(this.pool.bundle_proposal!.data_size) !==
      storageProviderResult.byteLength
    ) {
      this.logger.info(
        `Found different byte size on bundle downloaded from storage provider`
      );

      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VOTE.INVALID
      );
      return;
    }

    this.logger.info(
      `Found matching data size = ${this.pool.bundle_proposal!.data_size} Bytes`
    );

    // vote abstain if data hash does not match with proposed data hash.
    // we vote abstain on a differing hash since it could be the fault of the
    // storage provider that the data integrity was broken
    this.logger.debug(`Validating bundle proposal by data hash`);
    this.logger.debug(`Proposed = ${this.pool.bundle_proposal!.data_hash}`);
    this.logger.debug(`Actual   = ${sha256(storageProviderResult)}`);

    if (
      this.pool.bundle_proposal!.data_hash !== sha256(storageProviderResult)
    ) {
      this.logger.info(
        `Found different hash on bundle downloaded from storage provider`
      );

      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VOTE.ABSTAIN
      );
      return;
    }

    this.logger.info(
      `Found matching data hash = ${this.pool.bundle_proposal!.data_hash}`
    );

    const validationBundle = await this.saveLoadValidationBundle(updatedAt);

    // if no bundle got returned it means that the pool is not active anymore
    // or a new bundle proposal round has started
    if (validationBundle === null) {
      return;
    }

    // vote invalid if bundle key does not match with proposed from key
    this.logger.debug(`Validating bundle proposal by bundle from_key`);
    this.logger.debug(`Proposed = ${this.pool.bundle_proposal!.from_key}`);
    this.logger.debug(`Actual   = ${validationBundle.at(0)?.key}`);

    if (this.pool.bundle_proposal!.from_key !== validationBundle.at(0)?.key) {
      this.logger.info(`Found different value on proposed bundle from_key`);

      // archive local invalid bundle for debug purposes
      this.archiveDebugBundle(validationBundle);

      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VOTE.INVALID
      );
      return;
    }

    this.logger.info(
      `Found matching from key = ${this.pool.bundle_proposal!.from_key}`
    );

    // vote invalid if bundle key does not match with proposed to key
    this.logger.debug(`Validating bundle proposal by bundle to_key`);
    this.logger.debug(`Proposed = ${this.pool.bundle_proposal!.to_key}`);
    this.logger.debug(`Actual   = ${validationBundle.at(-1)?.key}`);

    if (this.pool.bundle_proposal!.to_key !== validationBundle.at(-1)?.key) {
      this.logger.info(`Found different value on proposed bundle to_key`);

      // archive local invalid bundle for debug purposes
      this.archiveDebugBundle(validationBundle);

      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VOTE.INVALID
      );
      return;
    }

    this.logger.info(
      `Found matching to key = ${this.pool.bundle_proposal!.to_key}`
    );

    // vote invalid if bundle summary does not match with proposed summary
    this.logger.debug(`Validating bundle proposal by bundle summary`);
    this.logger.debug(`this.runtime.summarizeDataBundle($VALIDATION_BUNDLE)`);

    const bundleSummary = await this.runtime
      .summarizeDataBundle(this, validationBundle)
      .catch((err) => {
        this.logger.error(
          `Unexpected error summarizing bundle with runtime. Voting abstain ...`
        );
        this.logger.error(standardizeJSON(err));

        return null;
      });

    // vote abstain if bundleSummary is null
    if (bundleSummary === null) {
      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VOTE.ABSTAIN
      );
      return;
    }

    this.logger.debug(
      `Proposed = ${this.pool.bundle_proposal!.bundle_summary}`
    );
    this.logger.debug(`Actual   = ${bundleSummary}`);

    if (this.pool.bundle_proposal!.bundle_summary !== bundleSummary) {
      this.logger.info(`Found different value on proposed bundle summary`);

      // archive local invalid bundle for debug purposes
      this.archiveDebugBundle(validationBundle);

      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VOTE.INVALID
      );
      return;
    }

    this.logger.info(
      `Found matching bundle summary = ${
        this.pool.bundle_proposal!.bundle_summary
      }`
    );

    // if storage provider result is empty skip runtime validation
    if (storageProviderResult.byteLength) {
      // decompress the bundle with the specified compression type
      // and convert the bytes into a JSON format
      const proposedBundle = await this.saveBundleDecompress(
        storageProviderResult
      );

      try {
        // perform custom runtime bundle validation
        this.logger.debug(
          `Validating bundle proposal by custom runtime validation`
        );

        // validate if bundle size matches
        let valid = proposedBundle.length === validationBundle.length;

        // validate each data item in bundle with custom runtime validation
        for (let i = 0; i < proposedBundle.length; i++) {
          if (valid) {
            this.logger.debug(
              `this.runtime.validateDataItem($THIS, $PROPOSED_DATA_ITEM, $VALIDATION_DATA_ITEM)`
            );
            valid = await this.runtime.validateDataItem(
              this,
              proposedBundle[i],
              validationBundle[i]
            );

            if (!valid) {
              this.logger.info(
                `Validated data item: index:${i} - key:${proposedBundle[i].key} - result:${valid}`
              );
            }
          } else {
            // abort further validation if an invalid data item was
            // found in bundle
            break;
          }
        }

        this.logger.debug(
          `Finished validating bundle by custom runtime validation. Result = ${valid}`
        );

        if (!valid) {
          // archive local invalid bundle for debug purposes
          this.archiveDebugBundle(validationBundle);
        }

        // vote with either valid or invalid
        const vote = valid
          ? VoteType.VOTE_TYPE_VALID
          : VoteType.VOTE_TYPE_INVALID;

        await this.voteBundleProposal(
          this.pool.bundle_proposal!.storage_id,
          vote
        );
      } catch (err) {
        this.logger.error(
          `Unexpected error validating data items with runtime. Voting abstain ...`
        );
        this.logger.error(standardizeJSON(err));

        await this.voteBundleProposal(
          this.pool.bundle_proposal!.storage_id,
          VoteType.VOTE_TYPE_ABSTAIN
        );
      }

      // update metrics
      this.m.bundles_amount.inc();
      this.m.bundles_data_items.set(proposedBundle.length);
      this.m.bundles_byte_size.set(storageProviderResult.byteLength);
    } else {
      await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_VALID
      );

      // update metrics
      this.m.bundles_amount.inc();
      this.m.bundles_data_items.set(
        parseInt(this.pool.bundle_proposal!.bundle_size)
      );
      this.m.bundles_byte_size.set(storageProviderResult.byteLength);
    }
  } catch (err) {
    this.logger.error(
      `Unexpected error validating bundle proposal. Skipping validation ...`
    );
    this.logger.error(standardizeJSON(err));
  }
}
