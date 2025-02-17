import { Validator } from "../..";
import {
  callWithBackoffStrategy,
  REFRESH_TIME,
  sleep,
  standardizeError,
} from "../../utils";

const INFINITY_LOOP = true;

/**
 * waitForAuthorization ensures that the node starts with a valid validator
 * who authorized this pool account. If the pool account was not authorized
 * by the validator yet it logs out the information to authorize it.
 * After authorization the node can continue running.
 *
 * @method waitForAuthorization
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function waitForAuthorization(this: Validator): Promise<void> {
  try {
    const poolAddress = this.client[0].account.address;

    // call canValidate query to check if pool account
    // was already authorized to run
    const canValidate = await callWithBackoffStrategy(
      async () => {
        for (let l = 0; l < this.lcd.length; l++) {
          try {
            this.logger.debug(this.rest[l]);
            this.logger.debug(
              `this.lcd.kyve.query.v1beta1.canValidate({pool_id: ${this.poolId.toString()},poolAddress: ${
                this.client[0].account.address
              }})`
            );

            return await this.lcd[l].kyve.query.v1beta1.canValidate({
              pool_id: this.poolId.toString(),
              pool_address: poolAddress,
            });
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
          `Requesting query canValidate was unsuccessful. Retrying in ${(
            ctx.nextTimeoutInMs / 1000
          ).toFixed(2)}s ...`
        );
        this.logger.debug(standardizeError(err));
        this.m.query_can_validate_failed.inc();
      }
    );

    this.logger.debug(JSON.stringify(canValidate));
    this.m.query_can_validate_successful.inc();

    // assign validator staker address if staker has authorized this pool account
    if (canValidate.possible) {
      this.staker = canValidate.reason;
      return;
    } else {
      // log information so that staker can authorize this pool account
      this.logger.info(
        `Pool account has not joined the pool with id ${this.poolId} yet`
      );
      this.logger.info(
        `Visit https://app.kyve.network and join the pool from your validator account:\n`
      );

      this.logger.info(`Pool Address:  ${poolAddress}`);
      this.logger.info(`Valname:       ${this.name}\n`);

      this.logger.info(
        `The node will not continue until the account is authorized\n`
      );

      await sleep(REFRESH_TIME);
    }

    // wait until pool account got authorized
    while (INFINITY_LOOP) {
      const canValidate = await callWithBackoffStrategy(
        async () => {
          for (let l = 0; l < this.lcd.length; l++) {
            try {
              this.logger.debug(this.rest[l]);
              this.logger.debug(
                `this.lcd.kyve.query.v1beta1.canValidate({pool_id: ${this.poolId.toString()},pool_address: ${poolAddress}})`
              );

              return await this.lcd[l].kyve.query.v1beta1.canValidate({
                pool_id: this.poolId.toString(),
                pool_address: poolAddress,
              });
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
            `Requesting query canValidate was unsuccessful. Retrying in ${(
              ctx.nextTimeoutInMs / 1000
            ).toFixed(2)}s ...`
          );
          this.logger.debug(standardizeError(err));
          this.m.query_can_validate_failed.inc();
        }
      );

      this.logger.debug(JSON.stringify(canValidate));
      this.m.query_can_validate_successful.inc();

      if (canValidate.possible) {
        this.staker = canValidate.reason;
        break;
      } else {
        await sleep(REFRESH_TIME);
      }
    }
  } catch (err) {
    this.logger.fatal(`Failed to authorize pool account. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    process.exit(1);
  }
}
