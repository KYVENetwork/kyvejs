import { Validator, standardizeError } from "../..";

/**
 * isNodeValidator checks if the staker of the node is in the
 * active validator set of the pool. If the staker is not a validator
 * the node will exit.
 *
 * @method isNodeValidator
 * @param {Validator} this
 * @return {boolean}
 */
export function isNodeValidator(this: Validator): boolean {
  try {
    this.logger.debug(
      `Validating if node operator is included in pool stakers`
    );

    if (!this.pool.stakers.includes(this.staker)) {
      this.logger.fatal(
        `Validator is not in the active validator set! Exiting ...`
      );
      return false;
    }

    this.logger.info(
      `Validator running as validator in storage pool = ${this.pool.data!.name}`
    );

    return true;
  } catch (err) {
    this.logger.fatal(
      `Error while validating if node is a validator. Exiting ...`
    );
    this.logger.fatal(standardizeError(err));

    return false;
  }
}
