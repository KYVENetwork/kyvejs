import { Validator } from "../..";
import { IDLE_TIME, sleep } from "../../utils";

/**
 * runNode is the main execution thread for validating and proposing bundles.
 * It runs indefintitely in rounds and should only exit when basic validation
 * checks fail.
 *
 * Each round looks the same. It starts by retrieving the latest
 * state from the chain and checking if the pool is still active. After that
 * it tries to claim the uploader role, then it tries to validate the current
 * bundle proposal and last but not least it tries to upload the next bundle
 * proposal. Between those actions are special waiting times and timeouts to
 * stay in sync with the network.
 *
 * @method runNode
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function runNode(this: Validator): Promise<void> {
  // run rounds indefinitely, continueRound returns always
  // true and is only used by unit tests to control the termination of
  // rounds by mocking it
  while (this.continueRound()) {
    // record entire proposal round time for metrics
    const endTimeRound = this.m.bundles_round_time.startTimer();

    // get latest state of the chain to start round
    await this.syncPoolState();
    await this.getBalancesForMetrics();

    if (!this.isNodeValidator()) {
      process.exit(1);
    }

    // log warnings if storage provider balance is low
    await this.isStorageBalanceLow();

    // perform basic logic checks if pool is up and running, if it fails
    // idle until pool is active again
    if (!this.isPoolActive()) {
      await sleep(IDLE_TIME);
      endTimeRound();
      continue;
    }

    // temp save proposal creation time to detect if a new proposal is
    // available in the meantime
    const updatedAt = parseInt(this.pool.bundle_proposal!.updated_at);

    // try to claim the uploader role of the current proposal round
    if (await this.claimUploaderRole()) {
      // get newest state of the chain if the claim was successful
      await this.syncPoolState();
    }

    // log out the role of this node in this particular round
    if (this.pool.bundle_proposal!.next_uploader === this.staker) {
      this.logger.info(
        `Participating in bundle proposal round ${
          this.pool.data!.total_bundles
        } as UPLOADER`
      );
    } else {
      this.logger.info(
        `Participating in bundle proposal round ${
          this.pool.data!.total_bundles
        } as VALIDATOR`
      );
    }

    // checks if the node is able to vote on the current bundle proposal
    // by calling a special query from chain
    if (await this.canVote(updatedAt)) {
      // if the node can vote the node validates the current bundle proposal
      const success = await this.validateBundleProposal(updatedAt);

      if (!success) {
        this.logger.info(`Retrying to validate bundle proposal`);
        continue;
      }
    }

    // wait until the upload interval has passed to continue with the proposal
    // of a new bundle. the node waits because a new round won't start during
    // that time
    await this.waitForUploadInterval();

    // checks if the node is able to propose the bundle for the next round
    // by calling a special query from chain
    if (await this.canPropose(updatedAt)) {
      // if node can propose the next bundle a proposal gets assembled,
      // uploaded and submitted to the network
      await this.createBundleProposal();
    }

    // wait until next bundle proposal is actually registered, until then idle
    await this.waitForNextBundleProposal(updatedAt);

    // end bundle round time for metrics
    endTimeRound();
  }
}
