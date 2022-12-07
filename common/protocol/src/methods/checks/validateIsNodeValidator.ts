import { Validator, standardizeJSON } from "../..";

/**
 * validateIsNodeValidator checks if the staker of the node is in the
 * active validator set of the pool. If the staker is not a validator
 * the node will exit.
 *
 * @method validateIsNodeValidator
 * @param {Validator} this
 * @return {void}
 */
export function validateIsNodeValidator(this: Validator): void {
  try {
    this.logger.debug(
      `Validating if node operator is included in pool stakers`
    );

    if (!this.pool.stakers.includes(this.staker)) {
      this.logger.fatal(
        `Validator is not in the active validator set! Exiting ...`
      );
      process.exit(1);
    }

    this.logger.info(
      `Validator running as validator in storage pool = ${this.pool.data!.name}`
    );
  } catch (err) {
    this.logger.fatal(
      `Error while validating if node is a validator. Exiting ...`
    );
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
