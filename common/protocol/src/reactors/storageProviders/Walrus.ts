import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

import { BundleTag, IStorageProvider } from "../../types/index.js";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { WalrusClient } from "@mysten/walrus";

export class Walrus implements IStorageProvider {
  public name = "Walrus";

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

  async isBalanceSufficient(size: number) {
    const suiBalance = await this.suiClient.getBalance({
      owner: this.keypair.toSuiAddress(),
    });
    const walBalance = await this.suiClient.getBalance({
      owner: this.keypair.toSuiAddress(),
      coinType: `0x356a26eb9e012a68958082340d4c4116e7f55615cf27affcff209cf0ae544f59::wal::WAL`,
    });

    const suiCost = 6000000;
    const walCost = await this.walrusClient.calculateUploadRelayTip({
      size,
    });

    if (BigInt(suiCost) > BigInt(suiBalance.totalBalance)) {
      return {
        sufficient: false,
        message: `Not enough SUI funds in SUI wallet. Current Balance = ${suiBalance.totalBalance} required = ${suiCost}`,
      };
    }

    if (BigInt(walCost) > BigInt(walBalance.totalBalance)) {
      return {
        sufficient: false,
        message: `Not enough WAL funds in SUI wallet. Current Balance = ${suiBalance.totalBalance} required = ${suiCost}`,
      };
    }

    return {
      sufficient: false,
      message: "",
    };
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
