import { Validator } from "../..";
import { callWithBackoffStrategy, standardizeJSON } from "../../utils";

/**
 * syncPoolState fetches the state of the pool the node is running on.
 * The query gets called with a backoff strategy which increases by
 * 10 seconds with every failed call.
 * This method will run indefinitely if the query fails all the time
 * because without the newest state the node can't continue.
 *
 * @method syncPoolState
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function syncPoolState(this: Validator): Promise<void> {
  await callWithBackoffStrategy(
    async () => {
      for (let l = 0; l < this.lcd.length; l++) {
        try {
          this.logger.debug(this.rest[l]);
          this.logger.debug(
            `this.lcd.kyve.query.v1beta1.pool({id: ${this.poolId.toString()}})`
          );

          const prevPoolConfig = this.pool?.data?.config ?? "";

          const { pool } = await this.lcd[l].kyve.query.v1beta1.pool({
            id: this.poolId.toString(),
          });
          this.pool = pool!;

          this.m.query_pool_successful.inc();

          // if config link has changed sync the config
          if (prevPoolConfig !== this.pool.data!.config) {
            await this.syncPoolConfig();
          }

          return;
        } catch (err) {
          this.logger.error(`REST call to "${this.rest[l]}" failed`);
          this.logger.error(standardizeJSON(err));
        }
      }

      throw new Error();
    },
    { limitTimeoutMs: 5 * 60 * 1000, increaseByMs: 10 * 1000 },
    (err: any, ctx) => {
      this.logger.info(
        `Requesting query pool was unsuccessful. Retrying in ${(
          ctx.nextTimeoutInMs / 1000
        ).toFixed(2)}s ...`
      );
      this.logger.debug(standardizeJSON(err));

      this.m.query_pool_failed.inc();
    }
  );
}
