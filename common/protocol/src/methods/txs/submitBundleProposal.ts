import { Validator, standardizeJSON } from "../..";

/**
 * submitBundleProposal submits a bundle proposal to the
 * network. By submitting a new bundle proposal the current
 * one gets finalized and the next uploader is automatically
 * chosen.
 *
 * @method submitBundleProposal
 * @param {Validator} this
 * @param {string} storageId the storage id of the data stored in storage provider
 * @param {number} dataSize the raw byte size of the data stored in storage provider
 * @param {string} dataHash the sha256 hash of the raw data stored in storage provider
 * @param {number} fromIndex the index from where the bundle was created
 * @param {number} bundleSize the size of the bundle
 * @param {string} fromKey the start key the bundle got created from
 * @param {string} toKey the key of the last data item in the bundle
 * @param {string} bundleSummary a summary of the bundle in a short string which gets stored on-chain
 * @return {Promise<boolean>}
 */
export async function submitBundleProposal(
  this: Validator,
  storageId: string,
  dataSize: number,
  dataHash: string,
  fromIndex: number,
  bundleSize: number,
  fromKey: string,
  toKey: string,
  bundleSummary: string
): Promise<boolean> {
  for (let c = 0; c < this.client.length; c++) {
    try {
      this.logger.debug(this.rpc[c]);
      this.logger.debug(
        `this.client.kyve.bundles.v1beta1.submitBundleProposal({staker: ${
          this.staker
        },pool_id: ${this.poolId.toString()},storage_id: ${storageId},data_size: ${dataSize.toString()},data_hash: ${dataHash},from_index: ${fromIndex.toString()},bundle_size: ${bundleSize.toString()},from_key: ${fromKey},to_key: ${toKey},bundle_summary: ${bundleSummary}})`
      );

      const tx = await this.client[c].kyve.bundles.v1beta1.submitBundleProposal(
        {
          staker: this.staker,
          pool_id: this.poolId.toString(),
          storage_id: storageId,
          data_size: dataSize.toString(),
          data_hash: dataHash,
          from_index: fromIndex.toString(),
          bundle_size: bundleSize.toString(),
          from_key: fromKey,
          to_key: toKey,
          bundle_summary: bundleSummary,
        }
      );

      this.logger.debug(`SubmitBundleProposal = ${tx.txHash}`);

      const receipt = await tx.execute();

      this.logger.debug(
        JSON.stringify({ ...receipt, rawLog: null, data: null })
      );

      if (receipt.code === 0) {
        this.m.tx_submit_bundle_proposal_successful.inc();
        this.m.fees_submit_bundle_proposal.inc(
          parseInt(tx.fee.amount[0].amount)
        );

        this.m.bundles_proposed.inc();
        this.m.bundles_amount.inc();
        this.m.bundles_data_items.set(bundleSize);
        this.m.bundles_byte_size.set(dataSize);

        return true;
      } else {
        this.logger.info(`Could not submit bundle proposal. Continuing ...`);
        this.m.tx_submit_bundle_proposal_unsuccessful.inc();

        return false;
      }
    } catch (err) {
      this.logger.error(`RPC call to "${this.rpc[c]}" failed`);
      this.logger.error(standardizeJSON(err));
    }
  }

  this.logger.error(`Failed to submit bundle proposal. Continuing ...`);
  this.m.tx_submit_bundle_proposal_failed.inc();

  return false;
}
