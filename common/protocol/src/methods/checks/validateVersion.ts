import { Validator, standardizeJSON } from "../..";

/**
 * validateVersion checks if the version of the pool matches with the runtime
 * version of the node. If it does not match the node will exit.
 *
 * @method validateVersion
 * @param {Validator} this
 * @return {void}
 */
export function validateVersion(this: Validator): void {
  try {
    this.logger.debug(
      `Comparing pool runtime version with protocol node runtime version`
    );

    if (this.pool.data!.protocol!.version !== this.runtime.version) {
      this.logger.fatal(`Running an invalid version. Exiting ...`);
      this.logger.fatal(
        `Found Runtime version = ${this.runtime.version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      process.exit(1);
    }

    this.logger.info(
      `Validator running on runtime version = ${this.runtime.version}`
    );
  } catch (err) {
    this.logger.fatal(`Error while validating runtime version. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
