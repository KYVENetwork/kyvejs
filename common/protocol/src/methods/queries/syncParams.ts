import { Validator } from "../..";
import { callWithBackoffStrategy, standardizeError } from "../../utils";

/**
 * syncParams fetches the all protocol params from chain
 *
 * @method syncParams
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function syncParams(this: Validator): Promise<void> {
  await callWithBackoffStrategy(
    async () => {
      for (let l = 0; l < this.lcd.length; l++) {
        try {
          this.logger.debug(this.rest[l]);
          this.logger.debug(`this.lcd.kyve.query.v1beta1.params()`);

          this.params = await this.lcd[l].kyve.query.v1beta1.params();

          this.m.query_params_successful.inc();
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
        `Requesting query params was unsuccessful. Retrying in ${(
          ctx.nextTimeoutInMs / 1000
        ).toFixed(2)}s ...`
      );
      this.logger.debug(standardizeError(err));

      this.m.query_params_failed.inc();
    }
  );
}
