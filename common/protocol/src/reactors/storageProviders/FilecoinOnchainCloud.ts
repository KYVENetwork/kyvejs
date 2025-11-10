import { BundleTag, IStorageProvider } from "../../types/index.js";
import { Synapse, RPC_URLS } from "@filoz/synapse-sdk";

export class FilecoinOnchainCloud implements IStorageProvider {
  public name = "FilecoinOnchainCloud";
  public coinDecimals = 18;

  private readonly synapse: Promise<Synapse>;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error("Filecoin key is empty. Please provide a valid key!");
    }

    this.synapse = Synapse.create({
      privateKey: storagePriv,
      rpcURL: RPC_URLS.calibration.websocket,
    });
  }

  async getAddress() {
    return (await this.synapse).getPaymentsAddress();
  }

  async getBalance() {
    const paymentsAddress = await this.getAddress();
    const currentAllowance = await (
      await this.synapse
    ).payments.allowance(paymentsAddress);
    return currentAllowance.toString();
  }

  async getPrice(bytes: number) {
    const preflight = await (await this.synapse).storage.preflightUpload(bytes);
    return preflight.estimatedCost.perMonth.toString();
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    console.log(await this.getPrice(bundle.length));

    const { pieceCid } = await (
      await this.synapse
    ).storage.upload(Uint8Array.from(bundle), {
      metadata: tags.reduce(
        (acc, { name, value }) => ({ ...acc, [name]: value }),
        {}
      ),
    });

    return {
      storageId: pieceCid.toString(),
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, _timeout: number) {
    const data = await (await this.synapse).storage.download(storageId);

    return { storageId, storageData: Buffer.from(data) };
  }
}
