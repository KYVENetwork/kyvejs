import { StdFee } from "@cosmjs/amino/build/signdoc";
import { AccountData } from "@cosmjs/amino/build/signer";
import { coins, SigningStargateClient } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";
import { SDKConfig } from "../../../../../constants";

import { signTx, TxPromise } from "../../../../../utils/helper";

export default class KyveBaseMsg {
  private nativeClient: SigningStargateClient;
  public readonly account: AccountData;
  public readonly config: SDKConfig;

  constructor(
    client: SigningStargateClient,
    account: AccountData,
    config: SDKConfig
  ) {
    this.account = account;
    this.nativeClient = client;
    this.config = config;
  }

  async transfer(
    recipient: string,
    amount: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: this.account.address,
        toAddress: recipient,
        amount: coins(amount, this.config.coinDenom),
      },
    };

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  async multiTransfer(recipient: string[], amount: string) {
    const allAmount = new BigNumber(amount).multipliedBy(recipient.length);
    const tx = {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: {
        inputs: [
          {
            address: this.account.address,
            coins: coins(allAmount.toString(), this.config.coinDenom),
          },
        ],
        outputs: recipient.map((address) => ({
          address,
          coins: coins(amount, this.config.coinDenom),
        })),
      },
    };

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx)
    );
  }

  async getKyveBalance() {
    const data = await this.nativeClient.getBalance(
      this.account.address,
      this.config.coinDenom
    );
    return data.amount;
  }
}
