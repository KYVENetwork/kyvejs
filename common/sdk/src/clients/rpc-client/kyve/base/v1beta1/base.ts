import { StdFee } from "@cosmjs/amino/build/signdoc";

import {
  IBasePendingTx,
  KyveSigning,
  PendingSignedTx,
  PendingTx,
} from "../../../signing";
export default class KyveBaseMsg extends KyveSigning {
  txsAll(
    txs: PendingSignedTx[] | IBasePendingTx[],
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const txMessages = txs.map((tx) => tx.tx).flat();

    return new PendingTx({ tx: txMessages }, () =>
      this.getPendingSignedTx(txMessages, options)
    );
  }
}
