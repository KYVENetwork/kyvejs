import { StdFee } from "@cosmjs/amino/build/signdoc";
import { coins } from "@cosmjs/stargate";
import BigNumber from "bignumber.js";

import {
  IBasePendingTx,
  KyveSigning,
  PendingSignedTx,
  PendingTx,
} from "../../../signing";
export default class KyveBaseMsg extends KyveSigning {
  transfer(
    recipient: string,
    amount: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: this.account.address,
        toAddress: recipient,
        amount: coins(amount, this.config.coinDenom),
      },
    };

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  multiTransfer(
    recipient: string[],
    amount: string,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const allAmount = new BigNumber(amount).multipliedBy(recipient.length);
    const tx = {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: {
        inputs: [
          {
            address: this.account.address,
            coins: coins(allAmount.toString(), this.config.coinDenom),
          },
        ],
        outputs: recipient.map((address) => ({
          address,
          coins: coins(amount, this.config.coinDenom),
        })),
      },
    };
    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

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
