import { BundleTag, IStorageProvider } from "../../types/index.js";
import { Synapse, RPC_URLS, TOKENS } from "@filoz/synapse-sdk";

export class FilecoinOnchainCloud implements IStorageProvider {
  public name = "FilecoinOnchainCloud";
  public coinDecimals = 18;

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
      rpcURL: RPC_URLS.calibration.websocket,
    });
  }

  async getAddress() {
    const synapse = await this.createSynapse();
    return synapse.getPaymentsAddress();
  }

  async getBalance() {
    const synapse = await this.createSynapse();

    const { funds } = await synapse.payments.accountInfo(TOKENS.USDFC);
    return funds.toString();
  }

  async getPrice(bytes: number) {
    const synapse = await this.createSynapse();
    const preflight = await synapse.storage.preflightUpload(bytes);
    return preflight.estimatedCost.perMonth.toString();
  }

  async saveBundle(bundle: Buffer, _tags: BundleTag[]) {
    const synapse = await this.createSynapse();

    const netInfo = await synapse.storage.getStorageInfo();
    console.log("netInfo", netInfo);

    const preflight = await synapse.storage.preflightUpload(bundle.length);
    console.log(`funds sufficient: ${preflight.allowanceCheck.sufficient}`);

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
