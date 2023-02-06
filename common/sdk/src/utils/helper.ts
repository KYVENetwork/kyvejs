import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/amino/build/signdoc";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { coins, SigningStargateClient } from "@cosmjs/stargate";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";

type signTxResponseType = {
  tx: EncodeObject[];
  txRawBytes: Uint8Array;
  fee: StdFee;
};
export class TxPromise {
  private nativeClient: SigningStargateClient;
  private txBytes: Uint8Array;
  readonly txHash: string;
  readonly fee: StdFee;
  readonly tx: EncodeObject[];
  constructor(nativeClient: SigningStargateClient, tx: signTxResponseType) {
    this.nativeClient = nativeClient;
    this.txBytes = tx.txRawBytes;
    this.fee = tx.fee;
    this.tx = tx.tx;
    this.txHash = toHex(sha256(this.txBytes)).toUpperCase();
  }
  async execute() {
    return await this.nativeClient.broadcastTx(this.txBytes);
  }
}
async function calcFee(gasEstimation: number, fee: "auto" | number) {
  const multiplier = typeof fee === "number" ? fee : 1.5;
  // calculateFee(Math.round(gasEstimation * multiplier), "5000000tkyve");
  return {
    amount: coins("5000000", "tkyve"),
    gas: Math.floor(gasEstimation * multiplier).toString(),
  };
}

export async function signTx(
  nativeClient: SigningStargateClient,
  address: string,
  tx: EncodeObject | EncodeObject[],
  options?: {
    fee?: StdFee | "auto" | number;
    memo?: string;
  }
): Promise<signTxResponseType> {
  const txArr = Array.isArray(tx) ? tx : [tx];
  if (!options || options.fee == undefined) {
    const gasEstimation = await nativeClient.simulate(
      address,
      txArr,
      undefined
    );
    const fee = await calcFee(gasEstimation, "auto");
    const txRaw = await nativeClient.sign(
      address,
      txArr,
      fee,
      options?.memo ? options?.memo : ""
    );
    return {
      txRawBytes: TxRaw.encode(txRaw).finish(),
      fee,
      tx: txArr,
    };
  } else if (options.fee === "auto" || typeof options.fee == "number") {
    const gasEstimation = await nativeClient.simulate(
      address,
      txArr,
      options?.memo
    );
    const fee = await calcFee(gasEstimation, options.fee);
    const txRaw = await nativeClient.sign(
      address,
      txArr,
      fee,
      options?.memo ? options?.memo : ""
    );
    return {
      txRawBytes: TxRaw.encode(txRaw).finish(),
      fee,
      tx: txArr,
    };
  } else {
    const txRaw = await nativeClient.sign(
      address,
      txArr,
      options.fee,
      options?.memo ? options?.memo : ""
    );
    return {
      tx: txArr,
      txRawBytes: TxRaw.encode(txRaw).finish(),
      fee: options.fee,
    };
  }
}
