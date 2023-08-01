import KyveSDK from "@kyvejs/sdk";
import { v4 as uuidv4 } from "uuid";
import { BundleTag, IStorageProvider } from "../../types";

export class Kyve implements IStorageProvider {
  public name = "Kyve";
  public coinDecimals = 0;

  private chainId: string;
  private poolId: number;
  private valaccount: string;

  constructor(chainId: string, poolId: number, valaccount: string) {
    if (!chainId) {
      throw new Error("ChainId is empty.");
    }

    if (!poolId) {
      throw new Error("PoolId is empty.");
    }

    if (!valaccount) {
      throw new Error("Valaccount mnemonic is empty.");
    }

    this.chainId = chainId;
    this.poolId = poolId;
    this.valaccount = valaccount;
  }

  async getAddress() {
    return (await new KyveSDK().fromMnemonic(this.valaccount)).account.address;
  }

  async getBalance() {
    return "";
  }

  async getPrice(_: number) {
    return "0";
  }

  async saveBundle(bundle: Buffer, _: BundleTag[]) {
    const storageId = uuidv4();
    const sdk = await new KyveSDK().fromMnemonic(this.valaccount);

    const auth = sdk.signString(
      JSON.stringify({
        chainId: this.chainId,
        poolId: this.poolId,
        time: Date.now(),
      })
    );

    // TODO: post to KYVE

    return {
      storageId: storageId,
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, _: number) {
    // TODO: fetch from KYVE

    return {
      storageId,
      storageData: Buffer.from(""),
    };
  }
}
