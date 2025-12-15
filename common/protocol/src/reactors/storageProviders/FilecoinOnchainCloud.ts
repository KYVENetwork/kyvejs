import { BundleTag, IStorageProvider } from "../../types/index.js";
import { Synapse, RPC_URLS } from "@filoz/synapse-sdk";

export class FilecoinOnchainCloud implements IStorageProvider {
  public name = "FilecoinOnchainCloud";

  private readonly storagePriv: string;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error("Filecoin key is empty. Please provide a valid key!");
    }

    this.storagePriv = storagePriv;
  }

  private async createSynapse(): Promise<Synapse> {
    return Synapse.create({
      privateKey: this.storagePriv,
      rpcURL: RPC_URLS.calibration.http,
    });
  }

  async isBalanceSufficient(size: number) {
    const synapse = await this.createSynapse();
    const { allowanceCheck } = await synapse.storage.preflightUpload(
      size < 128 ? 128 : size
    );

    return {
      sufficient: allowanceCheck.sufficient,
      message: allowanceCheck.message || "",
    };
  }

  async saveBundle(bundle: Buffer, _tags: BundleTag[]) {
    const synapse = await this.createSynapse();

    const { pieceCid } = await synapse.storage.upload(Uint8Array.from(bundle));

    return {
      storageId: pieceCid.toString(),
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, _timeout: number) {
    const synapse = await this.createSynapse();
    const data = await synapse.storage.download(storageId);

    return { storageId, storageData: Buffer.from(data) };
  }
}
