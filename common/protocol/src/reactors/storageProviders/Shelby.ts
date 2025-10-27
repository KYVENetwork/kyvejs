import { Account, Ed25519PrivateKey, Network } from "@aptos-labs/ts-sdk";
import { ShelbyNodeClient } from "@shelby-protocol/sdk/node";
import { v4 as uuidv4 } from "uuid";

import dotenv from "dotenv";
import { BundleTag, IStorageProvider } from "../../types/index.js";

const TIME_TO_LIVE = 60 * 60 * 1_000_000;

dotenv.config();

export class Shelby implements IStorageProvider {
  public name = "Shelby";
  public coinDecimals = 18;

  private readonly client: ShelbyNodeClient;
  private readonly signer: Account;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error(
        "Aptos private key is empty. Please provide a valid key!"
      );
    }

    if (!process.env.SHELBY_API_KEY) {
      throw new Error(
        "Shelby storage provider requires SHELBY_API_KEY environment variable"
      );
    }

    this.signer = Account.fromPrivateKey({
      privateKey: new Ed25519PrivateKey(storagePriv),
    });

    this.client = new ShelbyNodeClient({
      network: Network.SHELBYNET,
      apiKey: process.env.SHELBY_API_KEY,
    });
  }

  async getAddress() {
    return this.signer.accountAddress.toString();
  }

  async getBalance() {
    return "";
  }

  async getPrice(_: number) {
    return "0";
  }

  async saveBundle(bundle: Buffer, _tags: BundleTag[]) {
    const storageId = uuidv4();

    await this.client.upload({
      blobData: Uint8Array.from(bundle),
      signer: this.signer,
      blobName: storageId,
      expirationMicros: Date.now() * 1000 + TIME_TO_LIVE,
    });

    return {
      storageId,
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, _timeout: number) {
    const { readable } = await this.client.download({
      account: this.signer.accountAddress.toString(),
      blobName: storageId,
    });

    // Convert ReadableStream to Buffer
    const reader = readable.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    const storageData = Buffer.concat(chunks);

    return { storageId, storageData };
  }
}
