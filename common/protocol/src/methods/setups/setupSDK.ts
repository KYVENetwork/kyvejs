import KyveSDK, { constants } from "@kyvejs/sdk";
import { KYVE_NETWORK } from "@kyvejs/sdk/dist/constants";

import { Validator, standardizeJSON } from "../..";

/**
 * setupSDK creates the main KYVE SDK and the client which is used for transactions
 * and the lcd client which is used for queries
 *
 * @method setupSDK
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function setupSDK(this: Validator): Promise<void> {
  try {
    this.logger.debug(`Initializing KyveSDK with network ${this.network}`);

    // get KYVE network settings from network parameter
    // TODO @regenisis: use chain-id as new network property
    let network = constants.KYVE_ENDPOINTS[this.network as KYVE_NETWORK];

    if (this.rpc) {
      network = { ...network, rpc: this.rpc };
    }

    if (this.rest) {
      network = { ...network, rest: this.rest };
    }

    this.sdk = new KyveSDK(network);

    this.logger.debug(`Initializing KyveClient from valaccount mnemonic`);

    this.client = await this.sdk.fromMnemonic(this.valaccount);

    this.logger.debug(`Initializing KyveLCD from sdk`);
    this.lcd = this.sdk.createLCDClient();
  } catch (err) {
    this.logger.fatal(`Failed to init KYVE SDK. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
