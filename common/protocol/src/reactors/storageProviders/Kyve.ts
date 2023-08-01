import KyveSDK from "@kyvejs/sdk";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { BundleTag, IStorageProvider } from "../../types";

export class Kyve implements IStorageProvider {
  public name = "Kyve";
  public coinDecimals = 0;

  private chainId: string;
  private poolId: number;
  private staker: string;
  private valaccount: string;

  constructor(
    chainId: string,
    poolId: number,
    staker: string,
    valaccount: string
  ) {
    if (!chainId) {
      throw new Error("ChainId is empty.");
    }

    if (!poolId) {
      throw new Error("PoolId is empty.");
    }

    if (!staker) {
      throw new Error("Staker is empty.");
    }

    if (!valaccount) {
      throw new Error("Valaccount mnemonic is empty.");
    }

    this.chainId = chainId;
    this.poolId = poolId;
    this.staker = staker;
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
    const address = await this.getAddress();
    const timestamp = new Date().valueOf().toString();

    const { signature, pub_key } = await sdk.signString(
      JSON.stringify({
        chainId: this.chainId,
        poolId: this.poolId,
        staker: this.staker,
        valaccount: address,
        timestamp,
      })
    );

    await axios.post(
      "https://storage-provider.kyve.network/upload",
      {
        name: storageId,
        data: bundle,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "chain-id": this.chainId,
          "pool-id": this.poolId.toString(),
          staker: this.staker,
          "public-key": pub_key.value,
          timestamp: timestamp,
          signature: signature,
        },
      }
    );

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
