import { Validator } from "../..";
import { callWithBackoffStrategy, sleep, standardizeJSON } from "../../utils";

const INFINITY_LOOP = true;

/**
 * canPropose checks if the node is able to propose the next
 * bundle proposal by calling a special chain query called "canPropose".
 * It runs indefinitely until the query returns a valid response
 *
 * @method canPropose
 * @param {Validator} this
 * @param {number} updatedAt the last update time of the current bundle proposal
 * @return {Promise<boolean>}
 */
export async function canPropose(
  this: Validator,
  updatedAt: number
): Promise<boolean> {
  try {
    const canPropose = await callWithBackoffStrategy(
      async () => {
        for (let l = 0; l < this.lcd.length; l++) {
          try {
            await this.syncPoolState();

            // get the index from where the bundle should get created
            const fromIndex =
              parseInt(this.pool.data!.current_index) +
              parseInt(this.pool.bundle_proposal!.bundle_size);

            // abort if staker is the current uploader
            if (this.pool.bundle_proposal!.next_uploader !== this.staker) {
              return {
                possible: false,
                reason:
                  "Validator is not next uploader of this bundle proposal",
              };
            }

            // abort if a new bundle proposal was found
            if (parseInt(this.pool.bundle_proposal!.updated_at) > updatedAt) {
              return {
                possible: false,
                reason: "New bundle proposal was found",
              };
            }

            // loop until a valid response has been returned. The invalid
            // response here is the "upload interval not surpassed". If the query
            // returns an "upload interval not surpassed" that usually
            // means we have to wait for the next block in the blockchain
            // because the chain time only updates on every new block
            while (INFINITY_LOOP) {
              this.logger.debug(this.rest[l]);
              this.logger.debug(
                `this.lcd.kyve.query.v1beta1.canPropose({pool_id: ${this.poolId.toString()},staker: ${
                  this.staker
                },proposer: ${
                  this.client[0].account.address
                },from_index: ${fromIndex.toString()}})`
              );

              const canPropose = await this.lcd[
                l
              ].kyve.query.v1beta1.canPropose({
                pool_id: this.poolId.toString(),
                staker: this.staker,
                proposer: this.client[0].account.address,
                from_index: fromIndex.toString(),
              });

              // wait until a new block with an updated block time has been
              // produced by the blockchain
              if (
                !canPropose.possible &&
                canPropose.reason.endsWith("upload interval not surpassed")
              ) {
                await sleep(1000);
                continue;
              }

              return canPropose;
            }
          } catch (err) {
            this.logger.error(`REST call to "${this.rest[l]}" failed`);
            this.logger.error(standardizeJSON(err));
          }
        }

        throw new Error();
      },
      { limitTimeoutMs: 5 * 60 * 1000, increaseByMs: 10 * 1000 },
      async (err: any, ctx) => {
        this.logger.info(
          `Requesting query canPropose was unsuccessful. Retrying in ${(
            ctx.nextTimeoutInMs / 1000
          ).toFixed(2)}s ...`
        );
        this.logger.debug(standardizeJSON(err));
        this.m.query_can_propose_failed.inc();
      }
    );

    this.logger.debug(JSON.stringify(canPropose));
    this.m.query_can_propose_successful.inc();

    if (canPropose?.possible) {
      this.logger.info(`Can propose next bundle proposal`);
      return true;
    } else {
      this.logger.info(
        `Skipping proposal. Reason: ${canPropose?.reason ?? "unknown"}`
      );
      return false;
    }
  } catch (err) {
    this.logger.error(`Failed to call canPropose`);
    this.logger.error(standardizeJSON(err));

    return false;
  }
}
