import { Account, Ed25519PrivateKey, Network } from "@aptos-labs/ts-sdk";
import {
  buildRequestUrl,
  NetworkToShelbyRPCBaseUrl,
  ShelbyNodeClient,
} from "@shelby-protocol/sdk/node";
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

  private readonly baseUrl: string;
  private readonly apiKey: string;

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

    const network = Network.SHELBYNET;

    this.client = new ShelbyNodeClient({
      network,
      apiKey: process.env.SHELBY_API_KEY,
    });

    this.baseUrl = NetworkToShelbyRPCBaseUrl[network];
    this.apiKey = process.env.SHELBY_API_KEY;
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
    const url = buildRequestUrl(
      `/v1/blobs/${this.signer.accountAddress.toString()}/${storageId}`,
      this.baseUrl
    );

    const headers = new Headers();
    headers.set("Range", `bytes=0-`);

    const response = await fetch(url, {
      headers: {
        ...headers,
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to download blob: ${response.status} ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is null");
    }
    const contentLengthHeader = response.headers.get("content-length");
    if (contentLengthHeader === null) {
      throw new Error(
        "Response did not have content-length header, which is required"
      );
    }
    const expectedContentLength = Number.parseInt(contentLengthHeader, 10);
    if (Number.isNaN(expectedContentLength)) {
      throw new Error(
        `Invalid content-length header received: ${contentLengthHeader}`
      );
    }

    const stream = response.body;
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const storageData = Buffer.concat(chunks);

    return { storageId, storageData };
  }
}
