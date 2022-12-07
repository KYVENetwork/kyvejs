import { Validator, standardizeJSON } from "../..";

/**
 * skipUploaderRole is called by the current next uploader of the
 * current bundle proposal and is called when the node is not able
 * to create a valid bundle proposal. This can be due to not having
 * enough data collected or the storage provider being offline for
 * some reason.
 *
 * The fromIndex of the current bundle proposal is
 * included so that the chain can check if the next uploader
 * still wants to skip his role on his specified proposal,
 * because in rare instances while the tx is mining the next
 * proposal can start, thus resulting in an unwanted skip.
 *
 * @method skipUploaderRole
 * @param {Validator} this
 * @param {number} fromIndex
 * @return {Promise<boolean>}
 */
export async function skipUploaderRole(
  this: Validator,
  fromIndex: number
): Promise<boolean> {
  try {
    this.logger.debug(
      `this.client.kyve.bundles.v1beta1.skipUploaderRole({staker: ${
        this.staker
      },pool_id: ${this.poolId.toString()},from_index: ${fromIndex.toString()}})`
    );

    const tx = await this.client.kyve.bundles.v1beta1.skipUploaderRole({
      staker: this.staker,
      pool_id: this.poolId.toString(),
      from_index: fromIndex.toString(),
    });

    this.logger.debug(`SkipUploaderRole = ${tx.txHash}`);

    const receipt = await tx.execute();

    this.logger.debug(JSON.stringify({ ...receipt, rawLog: null, data: null }));

    if (receipt.code === 0) {
      this.logger.info(`Successfully skipped uploader role`);
      this.m.tx_skip_uploader_role_successful.inc();
      this.m.gas_skip_uploader_role.set(receipt?.gasUsed ?? 0);

      return true;
    } else {
      this.logger.info(`Could not skip uploader role. Continuing ...`);
      this.m.tx_skip_uploader_role_unsuccessful.inc();

      return false;
    }
  } catch (err) {
    this.logger.error("Failed to skip uploader role. Continuing ...");
    this.logger.error(standardizeJSON(err));
    this.m.tx_skip_uploader_role_failed.inc();

    return false;
  }
}
