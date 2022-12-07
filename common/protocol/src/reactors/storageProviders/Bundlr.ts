import BundlrClient from "@bundlr-network/client";
import { JWKInterface } from "arweave/node/lib/wallet";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types";

export class Bundlr implements IStorageProvider {
  public name = "Bundlr";
  public decimals = 12;

  private jwk!: JWKInterface;
  private client!: BundlrClient;

  async init(storagePriv: string) {
    this.jwk = JSON.parse(storagePriv);

    this.client = new BundlrClient(
      "http://node1.bundlr.network",
      "arweave",
      this.jwk
    );

    return this;
  }

  async getAddress() {
    return this.client.address;
  }

  async getBalance() {
    const atomicUnits = await this.client.getLoadedBalance();
    return atomicUnits.toString();
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    const transactionOptions = {
      tags: [
        {
          name: "Content-Type",
          value: "text/plain",
        },
        ...tags,
      ],
    };

    const transaction = this.client.createTransaction(
      bundle,
      transactionOptions
    );

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
