import lighthouse from "@lighthouse-web3/sdk";
import axios from "arbundles/node_modules/axios";

import { BundleTag, IStorageProvider } from "../../types";

export class Lighthouse implements IStorageProvider {
  public name = "Lighthouse";
  public decimals = 0;

  private readonly address: string;
  private readonly apiKey: string;

  constructor() {
    if (!process.env.LIGHTHOUSE_ADDRESS) {
      throw new Error(
        'Env variable "LIGHTHOUSE_ADDRESS" empty. No address found for storage provider Lighthouse'
      );
    }

    if (!process.env.LIGHTHOUSE_API_KEY) {
      throw new Error(
        'Env variable "LIGHTHOUSE_API_KEY" empty. No api key found for storage provider Lighthouse'
      );
    }

    this.address = process.env.LIGHTHOUSE_ADDRESS;
    this.apiKey = process.env.LIGHTHOUSE_API_KEY;
  }

  async getAddress() {
    return this.address;
  }

  async getBalance() {
    const { data } = await lighthouse.getBalance(this.address);
    return (data.dataLimit - data.dataUsed).toString();
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    const mimeType =
      tags.find((tag) => tag.name === "Content-Type")?.value ?? "";

    const { data } = await lighthouse.uploadBuffer(
      bundle,
      this.apiKey,
      mimeType
    );

    return {
      storageId: data.Hash,
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, timeout: number) {
    const { data: storageData } = await axios.get(
      `https://gateway.lighthouse.storage/ipfs/${storageId}`,
      { responseType: "arraybuffer", timeout }
    );

    return { storageId, storageData: Buffer.from(storageData) };
  }
}
