import { StdFee } from "@cosmjs/amino/build/signdoc";
import { AccountData } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgDefundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgFundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";

import { SDKConfig } from "../../../../../constants";
import { withTypeUrl } from "../../../../../registry/tx.registry";
import { signTx, TxPromise } from "../../../../../utils/helper";

export default class {
  private nativeClient: SigningStargateClient;
  public readonly account: AccountData;
  public readonly config: SDKConfig;

  constructor(
    client: SigningStargateClient,
    account: AccountData,
    config: SDKConfig
  ) {
    this.account = account;
    this.config = config;
    this.nativeClient = client;
  }

  public async fundPool(
    value: Omit<MsgFundPool, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.fundPool({
      ...value,
      creator: this.account.address,
    });

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async defundPool(
    value: Omit<MsgDefundPool, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.defundPool({
      ...value,
      creator: this.account.address,
    });
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
}
