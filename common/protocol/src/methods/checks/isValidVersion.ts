import { Validator, standardizeJSON } from "../..";
import { valid, major, minor, prerelease } from "semver";

/**
 * isValidVersion checks if the major and minor version of the pool matches
 * with the runtime version of the node. If it does not match the node will exit.
 *
 * @method isValidVersion
 * @param {Validator} this
 * @return {boolean}
 */
export function isValidVersion(this: Validator): boolean {
  try {
    this.logger.debug(
      `Comparing remote runtime version with local runtime version`
    );

    const remoteVersion = valid(this.pool.data!.protocol!.version);

    // exit if remote version is invalid
    if (remoteVersion === null) {
      this.logger.fatal(
        `Error while validating remote runtime version. Exiting ...`
      );
      this.logger.fatal(`Remote version: ${this.pool.data!.protocol!.version}`);

      return false;
    }

    const localVersion = valid(this.runtime.version);

    // exit if local version is invalid
    if (localVersion === null) {
      this.logger.fatal(
        `Error while validating local runtime version. Exiting ...`
      );
      this.logger.fatal(`Local version: ${this.pool.data!.protocol!.version}`);

      return false;
    }

    // exit if major version does not match
    if (major(remoteVersion) !== major(localVersion)) {
      this.logger.fatal(`Running an invalid version. Exiting ...`);
      this.logger.fatal(
        `Found Runtime version = ${this.runtime.version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      return false;
    }

    // exit if minor version does not match
    if (minor(remoteVersion) !== minor(localVersion)) {
      this.logger.fatal(`Running an invalid version. Exiting ...`);
      this.logger.fatal(
        `Found Runtime version = ${this.runtime.version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      return false;
    }

    // exit if prerelease version does not match
    if (
      JSON.stringify(prerelease(remoteVersion)) !==
      JSON.stringify(prerelease(localVersion))
    ) {
      this.logger.fatal(`Running an invalid version. Exiting ...`);
      this.logger.fatal(
        `Found Runtime version = ${this.runtime.version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      return false;
    }

    // patch version can be different, continue in this case
    this.logger.info(
      `Validator running on valid runtime version = ${this.runtime.version}`
    );

    return true;
  } catch (err) {
    this.logger.fatal(`Error while validating runtime version. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    return false;
  }
}
