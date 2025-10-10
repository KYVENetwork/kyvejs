import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

import { BundleTag, IStorageProvider } from "../../types";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/dist/cjs/client";
import { WalrusClient } from "@mysten/walrus/dist/cjs/client";

export class Walrus implements IStorageProvider {
  public name = "Walrus";
  public coinDecimals = 18;

  private readonly keypair: Ed25519Keypair;
  private readonly suiClient: SuiClient;
  private readonly walrusClient: WalrusClient;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error("SUI key is empty. Please provide a valid key!");
    }

    this.keypair = Ed25519Keypair.fromSecretKey(storagePriv);
    this.suiClient = new SuiClient({
      url: getFullnodeUrl("mainnet"),
    });
    this.walrusClient = new WalrusClient({
      network: "mainnet",
      suiClient: this.suiClient,
    });
  }

  async getAddress() {
    return this.keypair.toSuiAddress();
  }

  async getBalance() {
    const walBalance = await this.suiClient.getBalance({
      owner: this.keypair.toSuiAddress(),
      coinType: `0x8270feb7375eee355e64fdb69c50abb6b5f9393a722883c1cf45f8e26048810a::wal::WAL`,
    });
    return walBalance.totalBalance;
  }

  async getPrice(bytes: number) {
    const tip = await this.walrusClient.calculateUploadRelayTip({
      size: bytes,
    });
    return tip.toString();
  }

  async saveBundle(bundle: Buffer, _tags: BundleTag[]) {
    const { blobId } = await this.walrusClient.writeBlob({
      blob: Uint8Array.from(bundle),
      epochs: 25,
      deletable: false,
      signer: this.keypair,
    });

    return {
      storageId: blobId,
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, _timeout: number) {
    const blob = await this.walrusClient.readBlob({ blobId: storageId });

    return { storageId, storageData: Buffer.from(blob) };
  }
}
