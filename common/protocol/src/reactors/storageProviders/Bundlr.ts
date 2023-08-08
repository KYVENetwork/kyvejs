import BundlrClient from "@bundlr-network/client";
import { JWKInterface } from "arweave/node/lib/wallet";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types";

export class Bundlr implements IStorageProvider {
  public name = "Bundlr";
  public coinDecimals = 12;

  private readonly storagePriv: string;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error(
        "Arweave Keyfile is empty. Please provide a valid keyfile!"
      );
    }

    this.storagePriv = storagePriv;
  }

  private get bundlrKeyfile(): JWKInterface {
    return JSON.parse(this.storagePriv);
  }

  private get bundlrClient(): BundlrClient {
    return new BundlrClient(
      "http://node1.bundlr.network",
      "arweave",
      this.bundlrKeyfile
    );
  }

  async getAddress() {
    return this.bundlrClient.address;
  }

  async getBalance() {
    const atomicUnits = await this.bundlrClient.getLoadedBalance();
    return atomicUnits.toString();
  }

  async getPrice(bytes: number) {
    const price = await this.bundlrClient.getPrice(bytes);
    return price.toString();
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    const transaction = this.bundlrClient.createTransaction(bundle, { tags });

    await transaction.sign();
    await transaction.upload();

    return {
      storageId: transaction.id,
      storageData: transaction.rawData,
    };
  }

  async retrieveBundle(storageId: string, timeout: number) {
    const { data: storageData } = await axios.get(
      `https://arweave.net/${storageId}`,
      { responseType: "arraybuffer", timeout }
    );

    return { storageId, storageData };
  }
}
