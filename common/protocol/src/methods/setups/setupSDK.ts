import KyveSDK from "@kyvejs/sdk";
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
    this.logger.debug(`Initializing KyveSDK with chain ID ${this.chainId}`);

    if (!this.rpc.length || !this.rest.length) {
      throw new Error("rpc and rest endpoints must be specified");
    }

    if (this.rpc.length !== this.rest.length) {
      throw new Error("rpc and rest endpoints must have same lengths");
    }

    this.sdk = this.rpc.map(
      (_, i) =>
        new KyveSDK(this.chainId, {
          rpc: this.rpc[i],
          rest: this.rest[i],
          coinDenom: this.coinDenom,
          coinDecimals: this.coinDecimals,
          gasPrice: this.gasPrice,
        })
    );

    this.logger.debug(`Initializing KyveClient from valaccount mnemonic`);
    this.client = await Promise.all(
      this.sdk.map(async (sdk) => await sdk.fromMnemonic(this.valaccount))
    );

    this.logger.debug(`Initializing KyveLCD from sdk`);
    this.lcd = this.sdk.map((sdk) => sdk.createLCDClient());
  } catch (err) {
    this.logger.fatal(`Failed to init KYVE SDK. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
