import { Validator } from "../..";
import { callWithBackoffStrategy, standardizeError } from "../../utils";

/**
 * syncPoolState fetches the state of the pool the node is running on.
 * The query gets called with a backoff strategy which increases by
 * 10 seconds with every failed call.
 * This method will run indefinitely if the query fails all the time
 * because without the newest state the node can't continue.
 *
 * @method syncPoolState
 * @param {Validator} this
 * @param {boolean} exitOnConfigError exits if the config is invalid
 * @return {Promise<void>}
 */
export async function syncPoolState(
  this: Validator,
  exitOnConfigError: boolean = false
): Promise<void> {
  await callWithBackoffStrategy(
    async () => {
      for (let l = 0; l < this.lcd.length; l++) {
        try {
          this.logger.debug(this.rest[l]);
          this.logger.debug(
            `this.lcd.kyve.query.v1beta1.pool({id: ${this.poolId.toString()}})`
          );

          const prevConfig = this.pool?.data?.config ?? "";

          const { pool } = await this.lcd[l].kyve.query.v1beta1.pool({
            id: this.poolId.toString(),
          });
          this.pool = pool!;
          this.m.query_pool_successful.inc();

          // perform validation checks
          if (!this.isValidRuntime()) {
            process.exit(1);
          }

          if (!this.isValidVersion()) {
            process.exit(1);
          }

          // if config link has changed sync the config
          if (prevConfig !== this.pool.data!.config) {
            try {
              this.logger.debug(
                `this.runtime.validateSetConfig(${this.pool.data!.config})`
              );

              // validate, parse and set config in runtime
              await this.runtime.validateSetConfig(this.pool.data!.config);

              // error if config was not set on runtime
              if (!this.runtime.config) {
                throw new Error(`Config was not set on runtime`);
              }

              this.logger.info(`Successfully synced runtime config`);
            } catch (err) {
              this.logger.fatal(
                `Failed to sync runtime config. Either the config could not be parsed or was invalid.`
              );
              this.logger.fatal(standardizeError(err));

              if (exitOnConfigError) process.exit(1);
            }
          }

          return;
        } catch (err) {
          this.logger.error(`REST call to "${this.rest[l]}" failed`);
          this.logger.error(standardizeError(err));
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
      this.logger.debug(standardizeError(err));

      this.m.query_pool_failed.inc();
    }
  );
}
