import Prando from "prando";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";
import { major, minor, patch, prerelease } from "semver";

import { Validator, standardizeError } from "../..";

/**
 * setupValidator ensures the node starts as a valid validator
 * and logs some basic validator starting information
 *
 * @method setupValidator
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function setupValidator(this: Validator): Promise<void> {
  try {
    // log basic node info on startup
    this.logger.info(`Chain ID = ${this.chainId}`);
    this.logger.info(`Pool ID = ${this.poolId}`);
    this.logger.info(`Runtime = ${this.runtime.name}`);
    this.logger.info(`Valaddress = ${this.client[0].account.address}\n`);

    this.logger.info(`${this.runtime.name} = v${this.runtime.version}`);
    this.logger.info(`@kyvejs/protocol = v${this.protocolVersion}\n`);

    // A Valname is likea human readable hash  based on chainId, pool id,
    // runtime, runtime version and valaddress.

    // for the version we take the major, minor and prerelease version,
    // because if one of those changes the valname should not match anymore,
    // with the patch version it is different, here the remote version dictates
    // the min patch version, the valname should only differ, if the local patch
    // version is smaller, therefore we take the min out of remote and local
    // patch version
    const valnameSeed = `${this.chainId}-${this.poolId}-${
      this.runtime.name
    }-${major(this.runtime.version)}-${minor(this.runtime.version)}-${Math.min(
      patch(this.runtime.version),
      patch(this.pool.data!.protocol!.version)
    )}-${JSON.stringify(prerelease(this.runtime.version))}-${
      this.client[0].account.address
    }`;

    this.logger.debug(`Creating seed for valname generation`);
    this.logger.debug(valnameSeed);

    const r = new Prando(valnameSeed);

    this.logger.debug(`Generate valname with seed`);

    this.name = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: "-",
      length: 3,
      style: "lowerCase",
      seed: r.nextInt(0, adjectives.length * colors.length * animals.length),
    }).replace(" ", "-");

    this.logger.debug(`Valname "${this.name}" got created`);

    // check if pool account was already authorized by a validator
    await this.waitForAuthorization();

    this.logger.info(`Successfully joined pool: ${this.poolId}`);
    this.logger.info(`Running for validator: ${this.staker}\n`);

    this.m.cache_current_items.set(0);
  } catch (err) {
    this.logger.fatal(`Failed to setup validator. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    process.exit(1);
  }
}
