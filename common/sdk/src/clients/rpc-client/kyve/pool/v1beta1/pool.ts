import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgDefundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgFundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";

export default class KyvePoolMethods extends KyveSigning {
  public fundPool(
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

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public defundPool(
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
    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
