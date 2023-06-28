import ArweaveClient from "arweave";
import { JWKInterface } from "arweave/node/lib/wallet";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types";

export class Arweave implements IStorageProvider {
  public name = "Arweave";
  public coinDecimals = 12;

  private readonly storagePriv: string;

  constructor(storagePriv: string) {
    this.storagePriv = storagePriv;
  }

  private get arweaveKeyfile(): JWKInterface {
    return JSON.parse(this.storagePriv);
  }

  private get arweaveClient(): ArweaveClient {
    return new ArweaveClient({
      host: "arweave.net",
      protocol: "https",
    });
  }

  async getAddress() {
    return await this.arweaveClient.wallets.getAddress(this.arweaveKeyfile);
  }

  async getBalance() {
    const account = await this.getAddress();
    return await this.arweaveClient.wallets.getBalance(account);
  }

  async getPrice(bytes: number) {
    const { data: price } = await axios.get(
      `${this.arweaveClient.getConfig().api.protocol}://${
        this.arweaveClient.getConfig().api.host
      }/price/${bytes}`
    );
    return price;
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    const transaction = await this.arweaveClient.createTransaction({
      data: bundle,
    });

    for (const tag of tags) {
      transaction.addTag(tag.name, tag.value);
    }

    await this.arweaveClient.transactions.sign(
      transaction,
      this.arweaveKeyfile
    );

    const balance = await this.getBalance();

    if (parseInt(transaction.reward) > parseInt(balance)) {
      throw Error(
        `Not enough funds in Arweave wallet. Found = ${balance} required = ${transaction.reward}`
      );
    }

    await this.arweaveClient.transactions.post(transaction);

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
