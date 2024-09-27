import { Readable } from "node:stream";

import {
  privateKeyFromKyveMnemonic,
  TurboAuthenticatedClient,
  TurboFactory,
  TurboUnauthenticatedClient,
} from "@ardrive/turbo-sdk";
import axios from "axios";

import { BundleTag, IStorageProvider } from "../../types";

type KyveMnemonic = string;
export class Turbo implements IStorageProvider {
  public name = "Turbo";
  public coinDecimals = 12;

  private readonly valaccount: string;

  constructor(valaccount: KyveMnemonic) {
    if (!valaccount) {
      throw new Error("Valaccount mnemonic is empty.");
    }

    this.valaccount = valaccount;
  }

  private async authenticatedTurbo(): Promise<TurboAuthenticatedClient> {
    return TurboFactory.authenticated({
      privateKey: await privateKeyFromKyveMnemonic(this.valaccount),
      token: "kyve",
    });
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

  private async readableToBuffer(dataItem: Buffer | Readable) {
    if (dataItem instanceof Buffer) {
      return dataItem; // It's already a Buffer, so return as is.
    } else if (dataItem instanceof Readable) {
      // Convert Readable to Buffer
      const chunks: Buffer[] = [];
      for await (const chunk of dataItem) {
        chunks.push(chunk);
      }
      return Buffer.concat(chunks);
    } else {
      throw new Error("dataItem must be either a Buffer or a Readable stream");
    }
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

  public async saveBundleAlternative(dataBuffer: Buffer, tags: BundleTag[]) {
    const turbo = await this.authenticatedTurbo();
    const fileSize = dataBuffer.byteLength;

    const dataItem: Buffer | Readable = (
      await turbo.signer.signDataItem({
        fileStreamFactory: () => Readable.from(dataBuffer),
        fileSizeFactory: () => fileSize,
        dataItemOpts: { tags },
      })
    ).dataItemStreamFactory() as Buffer | Readable;

    const dataItemBuffer = await this.readableToBuffer(dataItem);

    const { id } = await turbo.uploadSignedDataItem({
      dataItemStreamFactory: () => Readable.from(dataBuffer),
      dataItemSizeFactory: () => fileSize,
    });

    return {
      storageId: id,
      storageData: dataItemBuffer, // This alternative is returning the raw data of the ANS-104 data item if needed
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
