import { Readable } from "node:stream";

import {
  privateKeyFromKyveMnemonic,
  TurboAuthenticatedClient,
  TurboFactory,
  TurboUnauthenticatedClient,
} from "@ardrive/turbo-sdk";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types";

export class Turbo implements IStorageProvider {
  public name = "Turbo";
  public coinDecimals = 12;

  private readonly privateKey: string;

  constructor(privateKey: string) {
    if (!privateKey) {
      throw new Error("PrivateKey is empty.");
    }

    this.privateKey = privateKey;
  }

  private async authenticatedTurbo(): Promise<TurboAuthenticatedClient> {
    try {
      return TurboFactory.authenticated({
        privateKey: await privateKeyFromKyveMnemonic(this.privateKey),
        token: "kyve",
      });
    } catch (err: any) {
      if (err.message === "Invalid mnemonic format") {
        return TurboFactory.authenticated({
          privateKey: JSON.parse(this.privateKey),
        });
      }

      throw err;
    }
  }

  private unauthenticatedTurbo(): TurboUnauthenticatedClient {
    return TurboFactory.unauthenticated({
      token: "kyve",
    });
  }

  async getAddress() {
    return (await this.authenticatedTurbo()).signer.getNativeAddress();
  }

  async getBalance() {
    const { winc } = await (await this.authenticatedTurbo()).getBalance();
    return winc;
  }

  async getPrice(bytes: number) {
    const [{ winc }] = await this.unauthenticatedTurbo().getUploadCosts({
      bytes: [bytes],
    });
    return winc;
  }

  public async saveBundle(dataBuffer: Buffer, tags: BundleTag[]) {
    const { id } = await (
      await this.authenticatedTurbo()
    ).uploadFile({
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
