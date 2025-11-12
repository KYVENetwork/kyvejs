import ArweaveClient from "arweave";
import { JWKInterface } from "arweave/node/lib/wallet.js";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types/index.js";

export class Arweave implements IStorageProvider {
  public name = "Arweave";

  private readonly arweaveKeyfile: JWKInterface;
  private readonly arweaveClient: ArweaveClient;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error(
        "Arweave Keyfile is empty. Please provide a valid keyfile!"
      );
    }

    this.arweaveKeyfile = JSON.parse(storagePriv);
    this.arweaveClient = new ArweaveClient({
      host: "arweave.net",
      protocol: "https",
    });
  }

  async isBalanceSufficient(size: number) {
    const address = await this.arweaveClient.wallets.getAddress(
      this.arweaveKeyfile
    );
    const balance = await this.arweaveClient.wallets.getBalance(address);

    const { data: cost } = await axios.get(
      `${this.arweaveClient.getConfig().api.protocol}://${
        this.arweaveClient.getConfig().api.host
      }/price/${size}`
    );

    if (BigInt(cost) > BigInt(balance)) {
      return {
        sufficient: false,
        message: `Not enough funds in Arweave wallet. Current Balance = ${balance} required = ${cost}`,
      };
    }

    return {
      sufficient: true,
      message: "",
    };
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
