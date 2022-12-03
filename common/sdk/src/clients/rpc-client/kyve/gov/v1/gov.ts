import { StdFee } from "@cosmjs/amino/build/signdoc";
import { AccountData } from "@cosmjs/amino/build/signer";
import { coins, SigningStargateClient } from "@cosmjs/stargate";
import { VoteOption } from "@kyvejs/types/client/cosmos/gov/v1/gov";
import { MsgUpdateParams as MsgUpdateParamsBundles } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsDelegation } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsFees } from "@kyvejs/types/client/kyve/fees/v1beta1/tx";
import {
  MsgCancelRuntimeUpgrade,
  MsgCreatePool,
  MsgPausePool,
  MsgScheduleRuntimeUpgrade,
  MsgUnpausePool,
  MsgUpdatePool,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsStakers } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";

import { DENOM, GOV_AUTHORITY } from "../../../../../constants";
import { encodeTxMsg } from "../../../../../registry/tx.registry";
import { signTx, TxPromise } from "../../../../../utils/helper";

export default class KyveGovMsg {
  protected nativeClient: SigningStargateClient;
  public readonly account: AccountData;

  constructor(client: SigningStargateClient, account: AccountData) {
    this.account = account;
    this.nativeClient = client;
  }

  private createGovTx(
    content: { type_url: string; value: unknown },
    deposit: string,
    metadata?: string
  ) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value: {
        messages: [content],
        initial_deposit: coins(deposit.toString(), DENOM),
        proposer: this.account.address,
        metadata,
      },
    };
  }

  public async createPool(
    value: Omit<MsgCreatePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.createPool({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async updatePool(
    value: Omit<MsgUpdatePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.updatePool({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async pausePool(
    value: Omit<MsgPausePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.pausePool({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async unpausePool(
    value: Omit<MsgUnpausePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.unpausePool({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async scheduleRuntimeUpgrade(
    value: Omit<MsgScheduleRuntimeUpgrade, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.scheduleRuntimeUpgrade({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async cancelRuntimeUpgrade(
    value: Omit<MsgCancelRuntimeUpgrade, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.cancelRuntimeUpgrade({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async updateParamsStakers(
    value: Omit<MsgUpdateParamsStakers, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.updateParamsStakers({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async updateParamsDelegation(
    value: Omit<MsgUpdateParamsDelegation, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.updateParamsDelegation({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async updateParamsBundles(
    value: Omit<MsgUpdateParamsBundles, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.updateParamsBundles({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async updateParamsFees(
    value: Omit<MsgUpdateParamsFees, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.updateParamsFees({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async vote(
    id: string,
    voteOption: "Yes" | "Abstain" | "No" | "NoWithVeto",
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    let _option = VoteOption.VOTE_OPTION_UNSPECIFIED;

    switch (voteOption) {
      case "Yes":
        _option = VoteOption.VOTE_OPTION_YES;
        break;
      case "Abstain":
        _option = VoteOption.VOTE_OPTION_ABSTAIN;
        break;
      case "No":
        _option = VoteOption.VOTE_OPTION_NO;
        break;
      case "NoWithVeto":
        _option = VoteOption.VOTE_OPTION_NO_WITH_VETO;
        break;
    }

    const tx = {
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value: {
        proposal_id: id,
        voter: this.account.address,
        option: _option,
      },
    };

    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
}
