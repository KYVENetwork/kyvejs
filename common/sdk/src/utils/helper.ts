import { EncodeObject } from "@cosmjs/proto-signing";
import { cosmos } from "@keplr-wallet/cosmos";
import TxRaw = cosmos.tx.v1beta1.TxRaw;
import { StdFee } from "@cosmjs/amino/build/signdoc";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { coins, SigningStargateClient } from "@cosmjs/stargate";

type signTxResponseType = {
  txRawBytes: Uint8Array;
  fee: StdFee;
};
export class TxPromise {
  private nativeClient: SigningStargateClient;
  private txBytes: Uint8Array;
  readonly txHash: string;
  readonly fee: StdFee;
  constructor(nativeClient: SigningStargateClient, tx: signTxResponseType) {
    this.nativeClient = nativeClient;
    this.txBytes = tx.txRawBytes;
    this.fee = tx.fee;
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
  tx: EncodeObject,
  options?: {
    fee?: StdFee | "auto" | number;
    memo?: string;
  }
): Promise<signTxResponseType> {
  if (!options || options.fee == undefined) {
    const gasEstimation = await nativeClient.simulate(address, [tx], undefined);
    const fee = await calcFee(gasEstimation, "auto");
    const txRaw = await nativeClient.sign(
      address,
      [tx],
      fee,
      options?.memo ? options?.memo : ""
    );
    return {
      txRawBytes: TxRaw.encode(txRaw).finish(),
      fee,
    };
  } else if (options.fee === "auto" || typeof options.fee == "number") {
    const gasEstimation = await nativeClient.simulate(
      address,
      [tx],
      options?.memo
    );
    const fee = await calcFee(gasEstimation, options.fee);
    const txRaw = await nativeClient.sign(
      address,
      [tx],
      fee,
      options?.memo ? options?.memo : ""
    );
    return {
      txRawBytes: TxRaw.encode(txRaw).finish(),
      fee,
    };
  } else {
    const txRaw = await nativeClient.sign(
      address,
      [tx],
      options.fee,
      options?.memo ? options?.memo : ""
    );
    return {
      txRawBytes: TxRaw.encode(txRaw).finish(),
      fee: options.fee,
    };
  }
}
