import { Validator, standardizeJSON } from "../..";
import { valid, major, minor, patch, prerelease } from "semver";

/**
 * isValidVersion checks if the major and minor version of the pool matches
 * with the runtime version of the node. If it does not match the node will exit.
 *
 * @method isValidVersion
 * @param {Validator} this
 * @return {Promise<boolean>}
 */
export async function isValidVersion(this: Validator): Promise<boolean> {
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

    const version = await this.runtime.getVersion();
    const localVersion = valid(version);

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
        `Found Runtime version = ${version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      return false;
    }

    // exit if minor version does not match
    if (minor(remoteVersion) !== minor(localVersion)) {
      this.logger.fatal(`Running an invalid version. Exiting ...`);
      this.logger.fatal(
        `Found Runtime version = ${version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      return false;
    }

    // exit if local patch version is behind remote
    if (patch(remoteVersion) > patch(localVersion)) {
      this.logger.fatal(`Running an invalid version. Exiting ...`);
      this.logger.fatal(
        `Found Runtime version = ${version} required = ${
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
        `Found Runtime version = ${version} required = ${
          this.pool.data!.protocol!.version
        }`
      );
      return false;
    }

    // patch version can be different, continue in this case
    this.logger.info(`Validator running on valid runtime version = ${version}`);

    return true;
  } catch (err) {
    this.logger.fatal(`Error while validating runtime version. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    return false;
  }
}
