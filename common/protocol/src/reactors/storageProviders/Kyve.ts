import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { BundleTag, IStorageProvider } from "../../types";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { makeADR36AminoSignDoc } from "@keplr-wallet/cosmos";

require("dotenv").config();

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

    if (poolId === null || poolId === undefined) {
      throw new Error("PoolId is empty.");
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
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(this.valaccount, {
      prefix: "kyve",
    });
    const [account] = await signer.getAccounts();
    return account.address;
  }

  async getBalance() {
    return "";
  }

  async getPrice(_: number) {
    return "0";
  }

  async saveBundle(bundle: Buffer, _: BundleTag[]) {
    const storageId = uuidv4();
    const timestamp = new Date().valueOf().toString();

    const signer = await Secp256k1HdWallet.fromMnemonic(this.valaccount, {
      prefix: "kyve",
    });

    const [account] = await signer.getAccounts();

    const signDoc = makeADR36AminoSignDoc(
      account.address,
      JSON.stringify({
        chainId: this.chainId,
        poolId: this.poolId.toString(),
        staker: this.staker,
        valaccount: account.address,
        timestamp,
      })
    );
    const { signature } = await signer.signAmino(account.address, signDoc);

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
          "kyve-public-key": signature.pub_key.value,
          "kyve-timestamp": timestamp,
          "kyve-signature": signature.signature,
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
