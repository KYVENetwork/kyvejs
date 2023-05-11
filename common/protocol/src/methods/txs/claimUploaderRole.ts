import { Validator, standardizeJSON } from "../..";

/**
 * claimUploaderRole tries to claim the uploader role for the next bundle proposal
 * round. If successfully claimed it returns true, otherwise it will
 * return false. The claim is only successful if there is currently no next
 * uploader on the bundle proposal, otherwise if already claimed by another
 * node the tx will just be ignored.
 *
 * @method claimUploaderRole
 * @param {Validator} this
 * @return {Promise<boolean>}
 */
export async function claimUploaderRole(this: Validator): Promise<boolean> {
  for (let c = 0; c < this.client.length; c++) {
    try {
      // if next uploader is already defined abort
      if (this.pool.bundle_proposal!.next_uploader) {
        return false;
      }

      this.logger.debug(this.rpc[c]);
      this.logger.debug(
        `this.client.kyve.bundles.v1beta1.claimUploaderRole({staker: ${
          this.staker
        },pool_id: ${this.poolId.toString()}})`
      );

      const tx = await this.client[c].kyve.bundles.v1beta1.claimUploaderRole({
        staker: this.staker,
        pool_id: this.poolId.toString(),
      });

      this.logger.debug(`ClaimUploaderRole = ${tx.txHash}`);

      const receipt = await tx.execute();

      this.logger.debug(
        JSON.stringify({ ...receipt, rawLog: null, data: null })
      );

      if (receipt.code === 0) {
        this.logger.info(`Successfully claimed uploader role`);
        this.m.tx_claim_uploader_role_successful.inc();
        this.m.fees_claim_uploader_role.inc(parseInt(tx.fee.amount[0].amount));

        return true;
      } else {
        this.logger.info(`Could not claim uploader role. Continuing ...`);
        this.m.tx_claim_uploader_role_unsuccessful.inc();

        return false;
      }
    } catch (err) {
      this.logger.error(`RPC call to "${this.rpc[c]}" failed`);
      this.logger.error(standardizeJSON(err));
    }
  }

  this.logger.error("Failed to claim uploader role. Continuing ...");
  this.m.tx_claim_uploader_role_failed.inc();

  return false;
}
