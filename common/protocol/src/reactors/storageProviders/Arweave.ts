import ArweaveClient from "arweave";
import { JWKInterface } from "arweave/node/lib/wallet";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types";

export class Arweave implements IStorageProvider {
  public name = "Arweave";
  public decimals = 12;

  private jwk!: JWKInterface;
  private client = new ArweaveClient({
    host: "arweave.net",
    protocol: "https",
  });

  async init(storagePriv: string) {
    this.jwk = JSON.parse(storagePriv);
    return this;
  }

  async getAddress() {
    return await this.client.wallets.getAddress(this.jwk);
  }

  async getBalance() {
    const account = await this.getAddress();
    return await this.client.wallets.getBalance(account);
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    const transaction = await this.client.createTransaction({
      data: bundle,
    });

    for (const tag of tags) {
      transaction.addTag(tag.name, tag.value);
    }

    await this.client.transactions.sign(transaction, this.jwk);

    const balance = await this.getBalance();

    if (parseInt(transaction.reward) > parseInt(balance)) {
      throw Error(
        `Not enough funds in Arweave wallet. Found = ${balance} required = ${transaction.reward}`
      );
    }

    await this.client.transactions.post(transaction);

    return {
      storageId: transaction.id,
      storageData: Buffer.from(transaction.data),
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
