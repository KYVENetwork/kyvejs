import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgUpdateCommission } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgUpdateStakeFraction } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgJoinPool } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgLeavePool } from "@kyvejs/types/client/kyve/stakers/v1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";

export default class KyveStakersMethods extends KyveSigning {
  public updateCommission(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public updateStakeFraction(
    value: Omit<MsgUpdateStakeFraction, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.updateStakeFraction({
      ...value,
      creator: this.account.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public joinPool(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public leavePool(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
