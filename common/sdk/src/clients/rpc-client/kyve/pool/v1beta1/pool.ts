import { StdFee } from "@cosmjs/amino/build/signdoc";
import { AccountData } from "@cosmjs/amino/build/signer";
import { coins, SigningStargateClient } from "@cosmjs/stargate";
import {
  MsgCreatePool,
  MsgDefundPool,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgFundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";

import { DENOM, GOV_AUTHORITY } from "../../../../../constants";
import { encodeTxMsg, withTypeUrl } from "../../../../../registry/tx.registry";
import { signTx, TxPromise } from "../../../../../utils/helper";

export default class {
  private nativeClient: SigningStargateClient;
  public readonly account: AccountData;

  constructor(client: SigningStargateClient, account: AccountData) {
    this.account = account;
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

  public async createPoolProposal(
    value: Omit<MsgCreatePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = {
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value: {
        messages: [
          encodeTxMsg.createPool({
            ...value,
            authority: GOV_AUTHORITY,
          }),
        ],
        initial_deposit: coins(deposit.toString(), DENOM),
        proposer: this.account.address,
        metadata,
      },
    };

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
}
