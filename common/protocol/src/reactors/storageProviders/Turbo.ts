import { Readable } from "node:stream";

import {
  privateKeyFromKyveMnemonic,
  TurboAuthenticatedClient,
  TurboFactory,
} from "@ardrive/turbo-sdk";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types/index.js";

export class Turbo implements IStorageProvider {
  public name = "Turbo";

  private readonly storagePriv: string;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error("storagePriv is empty.");
    }

    this.storagePriv = storagePriv;
  }

  private async authenticatedTurbo(): Promise<TurboAuthenticatedClient> {
    try {
      return TurboFactory.authenticated({
        privateKey: await privateKeyFromKyveMnemonic(this.storagePriv),
        token: "kyve",
      });
    } catch (err: any) {
      if (err.message === "Invalid mnemonic format") {
        return TurboFactory.authenticated({
          privateKey: JSON.parse(this.storagePriv),
        });
      }

      throw err;
    }
  }

  async isBalanceSufficient(size: number) {
    const turbo = await this.authenticatedTurbo();
    const { winc: balance } = await turbo.getBalance();
    const [{ winc: cost }] = await turbo.getUploadCosts({
      bytes: [size],
    });

    if (BigInt(cost) > BigInt(balance)) {
      return {
        sufficient: false,
        message: `Not enough funds in Turbo wallet. Current Balance = ${balance} required = ${cost}`,
      };
    }

    return {
      sufficient: true,
      message: "",
    };
  }

  public async saveBundle(dataBuffer: Buffer, tags: BundleTag[]) {
    const turbo = await this.authenticatedTurbo();

    const { id } = await turbo.uploadFile({
      fileStreamFactory: () => Readable.from(dataBuffer),
      fileSizeFactory: () => dataBuffer.byteLength,
      dataItemOpts: { tags },
    });

    return {
      storageId: id,
      storageData: dataBuffer,
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
