import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgCreateStaker } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateMetadata } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateCommission } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgJoinPool } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgLeavePool } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning } from "../../../signing";

export default class KyveStakersMethods extends KyveSigning {
  public async createStaker(
    value: Omit<MsgCreateStaker, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.createStaker({
      ...value,
      creator: this.account.address,
    });

    return await this.getPendingSignedTx(tx, options);
  }

  public async updateMetadata(
    value: Omit<MsgUpdateMetadata, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.updateMetadata({
      ...value,
      creator: this.account.address,
    });

    return await this.getPendingSignedTx(tx, options);
  }

  public async updateCommission(
    value: Omit<MsgUpdateCommission, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.updateCommission({
      ...value,
      creator: this.account.address,
    });

    return await this.getPendingSignedTx(tx, options);
  }

  public async joinPool(
    value: Omit<MsgJoinPool, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.joinPool({
      ...value,
      creator: this.account.address,
    });

    return await this.getPendingSignedTx(tx, options);
  }

  public async leavePool(
    value: Omit<MsgLeavePool, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.leavePool({
      ...value,
      creator: this.account.address,
    });

    return await this.getPendingSignedTx(tx, options);
  }
}
