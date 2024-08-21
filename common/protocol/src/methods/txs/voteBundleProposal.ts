import { Validator, standardizeError } from "../..";
import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

/**
 * voteBundleProposal submits a vote on the current bundle proposal.
 * The storage id is used to check on chain if the vote is still
 * dedicated to that proposal, because in rare instances while
 * the tx is mining the next proposal could already start, thus
 * resulting in an unwanted vote.
 *
 * @method voteBundleProposal
 * @param {Validator} this
 * @param {string} storageId storage id of the current bundle proposal
 * @param {number} vote can be 1 = VALID, 2 = INVALID or 3 = ABSTAIN
 * @return {Promise<boolean>}
 */
export async function voteBundleProposal(
  this: Validator,
  storageId: string,
  vote: number
): Promise<boolean> {
  for (let c = 0; c < this.client.length; c++) {
    try {
      let voteMessage = "";

      // determine vote type for verbose logging
      if (vote === VoteType.VOTE_TYPE_VALID) {
        voteMessage = "valid";
      } else if (vote === VoteType.VOTE_TYPE_INVALID) {
        voteMessage = "invalid";
      } else if (vote === VoteType.VOTE_TYPE_ABSTAIN) {
        voteMessage = "abstain";
      } else {
        throw Error(`Invalid vote: ${vote}`);
      }

      let tx: any;
      let receipt = {
        code: 0,
      };

      if (!this.dryRun) {
        this.logger.debug(this.rpc[c]);
        this.logger.debug(
          `this.client.kyve.bundles.v1beta1.voteBundleProposal({staker: ${
            this.staker
          },pool_id: ${this.poolId.toString()},storage_id: ${storageId},vote: ${vote}})`
        );

        // use a higher gas multiplier of 1.5 because while voting the gas can drastically increase,
        // making late submitted votes fail due to not enough gas
        tx = await this.client[c].kyve.bundles.v1beta1.voteBundleProposal(
          {
            staker: this.staker,
            pool_id: this.poolId.toString(),
            storage_id: storageId,
            vote,
          },
          {
            fee: 1.6,
          }
        );

        this.logger.debug(`VoteProposal = ${tx.txHash}`);

        receipt = await tx.execute();

        this.logger.debug(
          JSON.stringify({ ...receipt, rawLog: null, data: null })
        );
      }

      if (receipt.code === 0) {
        if (this.dryRun) {
          this.logger.warn(
            `Node would have voted ${voteMessage} on bundle "${storageId}"`
          );
        } else {
          this.logger.info(`Voted ${voteMessage} on bundle "${storageId}"`);
        }

        this.m.tx_vote_bundle_proposal_successful.inc();
        this.m.fees_vote_bundle_proposal.inc(
          parseInt(tx?.fee?.amount[0]?.amount ?? 0)
        );

        if (vote === 1) {
          this.m.bundles_voted_valid.inc();
        } else if (vote === 2) {
          this.m.bundles_voted_invalid.inc();
        } else if (vote === 3) {
          this.m.bundles_voted_abstain.inc();
        }

        return true;
      } else {
        this.logger.info(`Could not vote on proposal. Continuing ...`);
        this.m.tx_vote_bundle_proposal_unsuccessful.inc();

        return false;
      }
    } catch (err) {
      this.logger.error(`RPC call to "${this.rpc[c]}" failed`);
      this.logger.error(standardizeError(err));
    }
  }

  this.logger.error(`Failed to vote on bundle proposal. Continuing ...`);
  this.m.tx_vote_bundle_proposal_failed.inc();

  return false;
}
