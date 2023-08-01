import Prando from "prando";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";
import { major, minor } from "semver";

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

    // generate deterministic valname based on chainId, pool id,
    // runtime, runtime version and valaddress
    const valnameSeed = `${this.chainId}-${this.poolId}-${
      this.runtime.name
    }-${major(this.runtime.version)}-${minor(this.runtime.version)}-${
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

    // check if valaccount was already authorized by a validator
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
