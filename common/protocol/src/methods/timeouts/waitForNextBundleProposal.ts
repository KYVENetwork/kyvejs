import { Validator } from "../..";
import { REFRESH_TIME, sleep, standardizeError } from "../../utils";

/**
 * waitForNextBundleProposal waits until the the next bundle proposal has
 * been submitted. It waits because the node has performed all actions
 * in this round and is done. The node checks that by comparing the
 * creation time of the proposal, if it is bigger than the current one
 * the node knows someone submitted a new proposal.
 *
 * @method waitForNextBundleProposal
 * @param {Validator} this
 * @param {number} updatedAt
 * @return {Promise<void>}
 */
export async function waitForNextBundleProposal(
  this: Validator,
  updatedAt: number
): Promise<void> {
  try {
    this.logger.info("Waiting for next bundle proposal");

    // track waiting time for metrics
    const endTimeNextBundleProposal =
      this.m.bundles_wait_for_next_round_time.startTimer();

    // continue if the creation time of the bundle proposal increased
    while (parseInt(this.pool.bundle_proposal!.updated_at) <= updatedAt) {
      await this.syncPoolState();

      // if pool got not active in the meantime abort
      if (!this.isPoolActive()) {
        break;
      }

      await sleep(REFRESH_TIME);
    }

    endTimeNextBundleProposal();

    this.logger.info(`Found new bundle proposal`);
  } catch (err) {
    this.logger.error(
      `Failed to wait for next bundle proposal. Continuing ...`
    );
    this.logger.error(standardizeError(err));
  }
}
