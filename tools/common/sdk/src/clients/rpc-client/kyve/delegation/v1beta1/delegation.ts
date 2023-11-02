import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgDelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgWithdrawRewards } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUndelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgRedelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";
export default class KyveDelegationMethods extends KyveSigning {
  public delegate(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
  public withdrawRewards(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public undelegate(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public redelegate(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
