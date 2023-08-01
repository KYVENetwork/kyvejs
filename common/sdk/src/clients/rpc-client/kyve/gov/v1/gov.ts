import { StdFee } from "@cosmjs/amino/build/signdoc";
import { coins } from "@cosmjs/stargate";
import { VoteOption } from "@kyvejs/types/client/cosmos/gov/v1/gov";
import { MsgUpdateParams as MsgUpdateParamsBundles } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsDelegation } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsGlobal } from "@kyvejs/types/client/kyve/global/v1beta1/tx";
import {
  MsgCancelRuntimeUpgrade,
  MsgCreatePool,
  MsgDisablePool,
  MsgEnablePool,
  MsgScheduleRuntimeUpgrade,
  MsgUpdatePool,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsStakers } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";

import { GOV_AUTHORITY } from "../../../../../constants";
import { encodeTxMsg } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";

export default class KyveGovMsg extends KyveSigning {
  private createGovTx(
    content: { type_url: string; value: unknown },
    deposit: string,
    metadata?: string
  ) {
    return {
      typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
      value: {
        messages: [content],
        initial_deposit: coins(deposit.toString(), this.config.coinDenom),
        proposer: this.account.address,
        metadata,
      },
    };
  }

  public createPool(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public updatePool(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public disablePool(
    value: Omit<MsgDisablePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.disablePool({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public enablePool(
    value: Omit<MsgEnablePool, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.enablePool({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public scheduleRuntimeUpgrade(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public cancelRuntimeUpgrade(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public updateParamsStakers(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public updateParamsDelegation(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public updateParamsBundles(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public updateParamsGlobal(
    value: Omit<MsgUpdateParamsGlobal, "authority">,
    deposit: string,
    metadata?: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = this.createGovTx(
      encodeTxMsg.updateParamsGlobal({
        ...value,
        authority: GOV_AUTHORITY,
      }),
      deposit,
      metadata
    );

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public vote(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
