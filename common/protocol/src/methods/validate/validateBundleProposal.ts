import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

import { Validator } from "../..";
import { sha256, standardizeError } from "../../utils";

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
 * @return {Promise<boolean>} whether the validation was successful or has to be repeated
 */
export async function validateBundleProposal(
  this: Validator,
  updatedAt: number
): Promise<boolean> {
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
      return true;
    }

    // decompress the bundle with the specified compression type
    // and convert the bytes into a JSON format
    const proposedBundle = await this.parseProposedBundle(
      storageProviderResult
    ).catch((err) => {
      this.logger.error(
        `Unexpected error decompressing bundle. Voting abstain ...`
      );
      this.logger.error(standardizeError(err));

      this.archiveDebugBundle(VoteType.VOTE_TYPE_ABSTAIN, [], [], {
        reason: "unexpected error decompressing bundle",
        err: err,
      });

      return null;
    });

    // vote abstain if proposedBundle is null
    if (proposedBundle === null) {
      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_ABSTAIN
      );
      return success;
    }

    // vote invalid if bundle size is zero
    this.logger.debug(`Validating bundle proposal by bundle size`);
    this.logger.debug(`Proposed = ${this.pool.bundle_proposal!.bundle_size}`);

    if (parseInt(this.pool.bundle_proposal!.bundle_size) === 0) {
      this.logger.info(
        `Found no data items on bundle downloaded from storage provider`
      );

      this.archiveDebugBundle(VoteType.VOTE_TYPE_INVALID, [], [], {
        reason: "proposed bundle has bundle size of zero",
        proposed: parseInt(this.pool.bundle_proposal!.bundle_size),
      });

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_INVALID
      );
      return success;
    }

    this.logger.info(
      `Found data items = ${this.pool.bundle_proposal!.bundle_size}`
    );

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

      this.archiveDebugBundle(VoteType.VOTE_TYPE_INVALID, [], [], {
        reason:
          "found different byte size on bundle downloaded from storage provider",
        proposed: parseInt(this.pool.bundle_proposal!.data_size),
        validation: storageProviderResult.byteLength,
      });

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_INVALID
      );
      return success;
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

      this.archiveDebugBundle(VoteType.VOTE_TYPE_ABSTAIN, [], [], {
        reason:
          "found different hash on bundle downloaded from storage provider",
        proposed: this.pool.bundle_proposal!.data_hash,
        validation: sha256(storageProviderResult),
      });

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_ABSTAIN
      );
      return success;
    }

    this.logger.info(
      `Found matching data hash = ${this.pool.bundle_proposal!.data_hash}`
    );

    // now that every check for the metadata has been made we can
    // continue with the validations where the validation bundle
    // is needed
    const validationBundle = await this.saveLoadValidationBundle(updatedAt);

    // if no bundle got returned it means that the pool is not active anymore
    // or a new bundle proposal round has started
    if (validationBundle === null) {
      return true;
    }

    // vote invalid if bundle key does not match with proposed from key
    this.logger.debug(`Validating bundle proposal by bundle from_key`);
    this.logger.debug(`Proposed = ${this.pool.bundle_proposal!.from_key}`);
    this.logger.debug(`Actual   = ${validationBundle.at(0)?.key}`);

    if (this.pool.bundle_proposal!.from_key !== validationBundle.at(0)?.key) {
      this.logger.info(`Found different value on proposed bundle from_key`);

      this.archiveDebugBundle(
        VoteType.VOTE_TYPE_INVALID,
        proposedBundle,
        validationBundle,
        {
          reason:
            "found different from_key on bundle downloaded from storage provider",
          proposed: this.pool.bundle_proposal!.from_key,
          validation: validationBundle.at(0)?.key,
        }
      );

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_INVALID
      );
      return success;
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

      this.archiveDebugBundle(
        VoteType.VOTE_TYPE_INVALID,
        proposedBundle,
        validationBundle,
        {
          reason:
            "found different to_key on bundle downloaded from storage provider",
          proposed: this.pool.bundle_proposal!.to_key,
          validation: validationBundle.at(-1)?.key,
        }
      );

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_INVALID
      );
      return success;
    }

    this.logger.info(
      `Found matching to key = ${this.pool.bundle_proposal!.to_key}`
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
          const vote = await this.runtime.validateDataItem(
            this,
            proposedBundle[i],
            validationBundle[i]
          );

          // vote abstain if data item validation returned abstain
          if (vote === VoteType.VOTE_TYPE_ABSTAIN) {
            const success = await this.voteBundleProposal(
              this.pool.bundle_proposal!.storage_id,
              VoteType.VOTE_TYPE_ABSTAIN
            );
            return success;
          }

          if (vote === VoteType.VOTE_TYPE_VALID) {
            valid = true;
          } else if (vote === VoteType.VOTE_TYPE_INVALID) {
            valid = false;
          }

          // only log if data item validation returned invalid
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

      // only continue with bundle summary validation if proposed bundle is valid
      if (valid) {
        // vote invalid if bundle summary does not match with proposed summary
        this.logger.debug(`Validating bundle proposal by bundle summary`);
        this.logger.debug(`this.runtime.summarizeDataBundle($PROPOSED_BUNDLE)`);

        const bundleSummary = await this.runtime
          .summarizeDataBundle(this, proposedBundle)
          .catch((err) => {
            this.logger.error(
              `Unexpected error summarizing bundle with runtime. Voting abstain ...`
            );
            this.logger.error(standardizeError(err));

            return null;
          });

        // vote abstain if bundleSummary is null
        if (bundleSummary === null) {
          const success = await this.voteBundleProposal(
            this.pool.bundle_proposal!.storage_id,
            VoteType.VOTE_TYPE_ABSTAIN
          );
          return success;
        }

        this.logger.debug(
          `Proposed = ${this.pool.bundle_proposal!.bundle_summary}`
        );
        this.logger.debug(`Actual   = ${bundleSummary}`);

        // validate bundle summary by equal comparison
        valid = this.pool.bundle_proposal!.bundle_summary === bundleSummary;

        this.logger.debug(
          `Finished validating bundle by bundle summary. Result = ${valid}`
        );

        if (!valid) {
          // archive local invalid bundle for debug purposes
          this.archiveDebugBundle(
            VoteType.VOTE_TYPE_INVALID,
            proposedBundle,
            validationBundle,
            {
              reason:
                "custom data item validation failed or bundle summary mismatches",
              proposed: this.pool.bundle_proposal!.bundle_summary,
              validation: bundleSummary,
            }
          );
        }
      }

      // vote with either valid or invalid
      const vote = valid
        ? VoteType.VOTE_TYPE_VALID
        : VoteType.VOTE_TYPE_INVALID;

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        vote
      );

      // update metrics
      this.m.bundles_amount.inc();
      this.m.bundles_data_items.set(proposedBundle.length);
      this.m.bundles_byte_size.set(storageProviderResult.byteLength);

      return success;
    } catch (err) {
      this.logger.error(
        `Unexpected error validating data items with runtime. Voting abstain ...`
      );
      this.logger.error(standardizeError(err));

      const success = await this.voteBundleProposal(
        this.pool.bundle_proposal!.storage_id,
        VoteType.VOTE_TYPE_ABSTAIN
      );
      return success;
    }
  } catch (err) {
    this.logger.error(
      `Unexpected error validating bundle proposal. Skipping validation ...`
    );
    this.logger.error(standardizeError(err));
    return false;
  }
}
