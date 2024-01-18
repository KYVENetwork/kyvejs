import { Validator } from "../..";
import { callWithBackoffStrategy, standardizeError } from "../../utils";

/**
 * canVote checks if the node is able to vote on the current
 * bundle proposal by calling a special chain query called "canVote".
 * It runs indefinitely until the query returns a valid response
 *
 * @method canVote
 * @param {Validator} this
 * @param {number} updatedAt the last update time of the current bundle proposal
 * @return {Promise<boolean>}
 */
export async function canVote(
  this: Validator,
  updatedAt: number
): Promise<boolean> {
  try {
    const canVote = await callWithBackoffStrategy(
      async () => {
        for (let l = 0; l < this.lcd.length; l++) {
          try {
            await this.syncPoolState();

            // abort if staker is the current uploader
            if (this.pool.bundle_proposal!.uploader === this.staker) {
              return {
                possible: false,
                reason: "Validator is uploader of this bundle proposal",
              };
            }

            // abort if bundle proposal is empty
            if (!this.pool.bundle_proposal!.storage_id) {
              return {
                possible: false,
                reason: "Current bundle proposal is empty",
              };
            }

            // abort if a different bundle proposal was found
            if (parseInt(this.pool.bundle_proposal!.updated_at) !== updatedAt) {
              return {
                possible: false,
                reason: "Different bundle proposal was found",
              };
            }

            this.logger.debug(this.rest[l]);
            this.logger.debug(
              `this.lcd.kyve.query.v1beta1.canVote({pool_id: ${this.poolId.toString()},staker: ${
                this.staker
              },voter: ${this.client[0].account.address},storage_id: ${
                this.pool.bundle_proposal!.storage_id
              }})`
            );

            return await this.lcd[l].kyve.query.v1beta1.canVote({
              pool_id: this.poolId.toString(),
              staker: this.staker,
              voter: this.client[0].account.address,
              storage_id: this.pool.bundle_proposal!.storage_id,
            });
          } catch (err) {
            this.logger.error(`REST call to "${this.rest[l]}" failed`);
            this.logger.error(standardizeError(err));
          }
        }

        throw new Error();
      },
      { limitTimeoutMs: 5 * 60 * 1000, increaseByMs: 10 * 1000 },
      async (err: any, ctx) => {
        this.logger.info(
          `Requesting query canVote was unsuccessful. Retrying in ${(
            ctx.nextTimeoutInMs / 1000
          ).toFixed(2)}s ...`
        );
        this.logger.debug(standardizeError(err));
        this.m.query_can_vote_failed.inc();
      }
    );

    this.logger.debug(JSON.stringify(canVote));
    this.m.query_can_vote_successful.inc();

    if (canVote.possible) {
      this.logger.info(`Can vote on bundle proposal`);
      return true;
    } else {
      this.logger.info(`Skipping vote. Reason: ${canVote.reason}`);
      return false;
    }
  } catch (err) {
    this.logger.error(`Failed to call canVote`);
    this.logger.error(standardizeError(err));

    return false;
  }
}
