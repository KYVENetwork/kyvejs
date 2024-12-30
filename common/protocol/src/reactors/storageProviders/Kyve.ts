import KyveSDK from "@kyvejs/sdk";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { BundleTag, IStorageProvider } from "../../types";

require("dotenv").config();

export class Kyve implements IStorageProvider {
  public name = "Kyve";
  public coinDecimals = 0;

  private chainId: string;
  private poolId: number;
  private staker: string;
  private poolAccount: string;

  constructor(
    chainId: string,
    poolId: number,
    staker: string,
    poolAccount: string
  ) {
    if (!chainId) {
      throw new Error("ChainId is empty.");
    }

    if (poolId === null || poolId === undefined) {
      throw new Error("PoolId is empty.");
    }

    if (!poolAccount) {
      throw new Error("Pool account mnemonic is empty.");
    }

    this.chainId = chainId;
    this.poolId = poolId;
    this.staker = staker;
    this.poolAccount = poolAccount;
  }

  async getAddress() {
    return (await new KyveSDK().fromMnemonic(this.poolAccount)).account.address;
  }

  async getBalance() {
    return "";
  }

  async getPrice(_: number) {
    return "0";
  }

  async saveBundle(bundle: Buffer, _: BundleTag[]) {
    const storageId = uuidv4();
    const sdk = await new KyveSDK().fromMnemonic(this.poolAccount);
    const address = await this.getAddress();
    const timestamp = new Date().valueOf().toString();

    const { signature, pub_key } = await sdk.signString(
      JSON.stringify({
        chainId: this.chainId,
        poolId: this.poolId.toString(),
        staker: this.staker,
        valaccount: address,
        timestamp,
      })
    );

    await axios.post(
      "https://upload.storage.kyve.network/upload",
      {
        name: storageId,
        data: bundle.toString("base64"),
      },
      {
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
        headers: {
          "kyve-api-key": process.env.KYVE_STORAGE_PROVIDER_API_KEY || "",
          "kyve-chain-id": this.chainId,
          "kyve-pool-id": this.poolId.toString(),
          "kyve-staker": this.staker,
          "kyve-public-key": pub_key.value,
          "kyve-timestamp": timestamp,
          "kyve-signature": signature,
        },
      }
    );

    return {
      storageId: storageId,
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, timeout: number) {
    const { data: storageData } = await axios.get(
      `https://storage.kyve.network/${storageId}`,
      { responseType: "arraybuffer", timeout }
    );

    return {
      storageId,
      storageData,
    };
  }
}
