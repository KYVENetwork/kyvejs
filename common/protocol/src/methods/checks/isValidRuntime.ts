import { Validator, standardizeJSON } from "../..";

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
    this.logger.debug(`Comparing pool runtime with protocol node runtime`);

    if (this.pool.data!.runtime !== this.runtime.name) {
      this.logger.fatal(
        `Specified pool does not match the integration runtime! Exiting ...`
      );
      this.logger.fatal(
        `Found = ${this.runtime.name} required = ${this.pool.data!.runtime}`
      );

      return false;
    }

    this.logger.info(`Validator running on runtime = ${this.runtime.name}`);

    return true;
  } catch (err) {
    this.logger.fatal(`Error while validating runtime. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    return false;
  }
}
