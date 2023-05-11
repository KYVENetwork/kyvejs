import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgDelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgWithdrawRewards } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUndelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgRedelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning } from "../../../signing";
export default class KyveDelegationMethods extends KyveSigning {
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

    return await this.getPendingSignedTx(tx, options);
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

    return await this.getPendingSignedTx(tx, options);
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

    return await this.getPendingSignedTx(tx, options);
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

    return await this.getPendingSignedTx(tx, options);
  }
}
