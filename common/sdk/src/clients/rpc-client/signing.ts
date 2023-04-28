import { StdFee } from "@cosmjs/amino/build/signdoc";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { AccountData, EncodeObject } from "@cosmjs/proto-signing";
import {
  calculateFee,
  GasPrice,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { GAS_MULTIPLIER, IConfig } from "../../constants";
export interface IBasePendingTx {
  tx: EncodeObject[];
}
export class PendingTx<T> implements PromiseLike<T>, IBasePendingTx {
  public readonly tx: EncodeObject[];
  private executor: () => Promise<T>;
  constructor(options: { tx: EncodeObject[] }, executor: () => Promise<T>) {
    this.tx = options.tx;
    this.executor = executor;
  }
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => PromiseLike<TResult1> | TResult1)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => PromiseLike<TResult2> | TResult2)
      | undefined
      | null
  ): Promise<TResult1 | TResult2> {
    return this.executor().then(onfulfilled, onrejected);
  }
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => PromiseLike<TResult> | TResult)
      | undefined
      | null
  ): Promise<T | TResult> {
    return this.executor().catch(onrejected);
  }
  finally(onfinally?: (() => void) | undefined | null): Promise<T> {
    return this.executor().finally(onfinally);
  }
}

type SignedTx = {
  tx: EncodeObject[];
  txRawBytes: Uint8Array;
  fee: StdFee;
};

export class PendingSignedTx implements IBasePendingTx {
  private nativeClient: SigningStargateClient;
  private txBytes: Uint8Array;
  readonly txHash: string;
  readonly fee: StdFee;
  readonly tx: EncodeObject[];

  constructor(nativeClient: SigningStargateClient, tx: SignedTx) {
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
export class KyveSigning {
  public nativeClient: SigningStargateClient;
  public readonly account: AccountData;
  public readonly config: IConfig;

  constructor(
    client: SigningStargateClient,
    account: AccountData,
    config: IConfig
  ) {
    this.nativeClient = client;
    this.account = account;
    this.config = config;
  }

  async getPendingSignedTx(
    tx: EncodeObject | EncodeObject[],
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ): Promise<PendingSignedTx> {
    return new PendingSignedTx(
      this.nativeClient,
      await this.signTx(tx, options)
    );
  }

  async signTx(
    tx: EncodeObject | EncodeObject[],
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ): Promise<SignedTx> {
    const txArr = Array.isArray(tx) ? tx : [tx];

    if (!options) {
      const gasEstimation = await this.nativeClient.simulate(
        this.account.address,
        txArr,
        undefined
      );
      const multiplier = GAS_MULTIPLIER;

      const fee = calculateFee(
        Math.round(gasEstimation * multiplier),
        GasPrice.fromString(`${this.config.gasPrice}${this.config.coinDenom}`)
      );

      const txRaw = await this.nativeClient.sign(
        this.account.address,
        txArr,
        fee,
        ""
      );

      return {
        txRawBytes: TxRaw.encode(txRaw).finish(),
        fee,
        tx: txArr,
      };
    } else if (options.fee === "auto" || typeof options.fee === "number") {
      const gasEstimation = await this.nativeClient.simulate(
        this.account.address,
        txArr,
        options.memo
      );
      const multiplier =
        typeof options.fee === "number" ? options.fee : GAS_MULTIPLIER;

      const fee = calculateFee(
        Math.round(gasEstimation * multiplier),
        GasPrice.fromString(`${this.config.gasPrice}${this.config.coinDenom}`)
      );

      const txRaw = await this.nativeClient.sign(
        this.account.address,
        txArr,
        fee,
        options.memo || ""
      );

      return {
        txRawBytes: TxRaw.encode(txRaw).finish(),
        fee,
        tx: txArr,
      };
    } else {
      const txRaw = await this.nativeClient.sign(
        this.account.address,
        txArr,
        options.fee as StdFee,
        options.memo || ""
      );

      return {
        txRawBytes: TxRaw.encode(txRaw).finish(),
        tx: txArr,
        fee: options.fee as StdFee,
      };
    }
  }
}
