import { StdFee } from "@cosmjs/amino/build/signdoc";
import { AccountData } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgDelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgWithdrawRewards } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUndelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgRedelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { signTx, TxPromise } from "../../../../../utils/helper";
export default class {
  private nativeClient: SigningStargateClient;
  public readonly account: AccountData;

  constructor(client: SigningStargateClient, account: AccountData) {
    this.account = account;
    this.nativeClient = client;
  }

  public async delegate(
    value: Omit<MsgDelegate, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.delegate({
      ...value,
      creator: this.account.address,
    });
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
  public async withdrawRewards(
    value: Omit<MsgWithdrawRewards, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.withdrawRewards({
      ...value,
      creator: this.account.address,
    });
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async undelegate(
    value: Omit<MsgUndelegate, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.undelegate({
      ...value,
      creator: this.account.address,
    });
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async redelegate(
    value: Omit<MsgRedelegate, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.redelegate({
      ...value,
      creator: this.account.address,
    });
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
}
