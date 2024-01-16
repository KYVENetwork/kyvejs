import { Validator, standardizeError } from "../..";

/**
 * isValidRuntime checks if the runtime of the pool matches with the runtime of
 * the node. If it does not match the node will exit.
 *
 * @method isValidRuntime
 * @param {Validator} this
 * @return {Promise<boolean>}
 */
export async function isValidRuntime(this: Validator): Promise<boolean> {
  try {
    const name = await this.runtime.getName();

    if (this.pool.data!.runtime !== name) {
      this.logger.fatal(
        `Specified pool does not match the integration runtime! Exiting ...`
      );
      this.logger.fatal(
        `Found = ${name} required = ${this.pool.data!.runtime}`
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
