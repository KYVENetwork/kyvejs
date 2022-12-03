import { Node, standardizeJSON, VOTE } from "../..";

/**
 * voteBundleProposal submits a vote on the current bundle proposal.
 * The storage id is used to check on chain if the vote is still
 * dedicated to that proposal, because in rare instances while
 * the tx is mining the next proposal could already start, thus
 * resulting in an unwanted vote.
 *
 * @method voteBundleProposal
 * @param {Node} this
 * @param {string} storageId storage id of the current bundle proposal
 * @param {number} vote can be 1 = VALID, 2 = INVALID or 3 = ABSTAIN
 * @return {Promise<boolean>}
 */
export async function voteBundleProposal(
  this: Node,
  storageId: string,
  vote: number
): Promise<boolean> {
  try {
    let voteMessage = "";

    // determine vote type for verbose logging
    if (vote === VOTE.VALID) {
      voteMessage = "valid";
    } else if (vote === VOTE.INVALID) {
      voteMessage = "invalid";
    } else if (vote === VOTE.ABSTAIN) {
      voteMessage = "abstain";
    } else {
      throw Error(`Invalid vote: ${vote}`);
    }

    this.logger.debug(
      `this.client.kyve.bundles.v1beta1.voteBundleProposal({staker: ${
        this.staker
      },pool_id: ${this.poolId.toString()},storage_id: ${storageId},vote: ${vote}})`
    );

    const tx = await this.client.kyve.bundles.v1beta1.voteBundleProposal({
      staker: this.staker,
      pool_id: this.poolId.toString(),
      storage_id: storageId,
      vote,
    });

    this.logger.debug(`VoteProposal = ${tx.txHash}`);

    const receipt = await tx.execute();

    this.logger.debug(JSON.stringify({ ...receipt, rawLog: null, data: null }));

    if (receipt.code === 0) {
      this.logger.info(`Voted ${voteMessage} on bundle "${storageId}"`);

      this.m.tx_vote_bundle_proposal_successful.inc();
      this.m.gas_vote_bundle_proposal.set(receipt.gasUsed);

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
    this.logger.error(`Failed to vote on bundle proposal. Continuing ...`);
    this.logger.error(standardizeJSON(err));
    this.m.tx_vote_bundle_proposal_failed.inc();

    return false;
  }
}
