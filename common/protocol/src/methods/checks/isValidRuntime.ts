import { Validator, standardizeError } from "../..";

/**
 * isValidRuntime checks if the runtime of the pool matches with the runtime of
 * the node. If it does not match the node will exit.
 *
 * @method isValidRuntime
 * @param {Validator} this
 * @return {boolean}
 */
export function isValidRuntime(this: Validator): boolean {
  try {
    if (this.pool.data!.runtime !== this.runtime.name) {
      this.logger.fatal(
        `Specified pool does not match the integration runtime! Exiting ...`
      );
      this.logger.fatal(
        `Found = ${this.runtime.name} required = ${this.pool.data!.runtime}`
      );

      return false;
    }

    return true;
  } catch (err) {
    this.logger.fatal(`Error while validating runtime. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    return false;
  }
}
