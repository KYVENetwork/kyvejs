import Prando from "prando";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";

import { Node, standardizeJSON } from "../..";

/**
 * setupValidator ensures the node starts as a valid validator
 * and logs some basic validator starting information
 *
 * @method setupValidator
 * @param {Node} this
 * @return {Promise<void>}
 */
export async function setupValidator(this: Node): Promise<void> {
  try {
    // generate deterministic valname based on network, pool id,
    // runtime, runtime version and valaddress
    const valnameSeed = `${this.network}-${this.poolId}-${this.runtime.name}-${this.runtime.version}-${this.client.account.address}`;

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

    // log basic node info on startup
    this.logger.info("Starting node ...\n");
    this.logger.info(`Valaddress \t = ${this.client.account.address}`);
    this.logger.info(`Staker \t\t = ${this.staker}`);
    this.logger.info(`Valname \t\t = ${this.name}\n`);

    this.logger.info(`Pool ID \t\t = ${this.poolId}`);
    this.logger.info(`Runtime \t\t = ${this.runtime.name}`);
    this.logger.info(`Network \t\t = ${this.network}\n`);

    this.logger.info(`@kyve/core \t = v${this.coreVersion}`);
    this.logger.info(`${this.runtime.name} \t = v${this.runtime.version}\n`);

    this.m.cache_current_items.set(0);
  } catch (err) {
    this.logger.fatal(`Failed to setup validator. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
