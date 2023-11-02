import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.global.v1beta1";
/** Params defines the global module parameters. */
export interface Params {
  /** min_gas_price defines the minimum gas price value for all transactions. */
  min_gas_price: string;
  /** burn_ratio defines the ratio of transaction fees burnt. */
  burn_ratio: string;
  /**
   * gas_adjustments can add a constant amount of gas to a specific message type.
   * This gives more control to make certain messages more expensive to avoid spamming
   * of certain types of messages.
   */
  gas_adjustments: GasAdjustment[];
  /**
   * gas_refunds lets the governance specify a fraction of how much gas
   * a user gets refunded for a certain type of transaction.
   * This could be used to make transactions which support to network cheaper.
   * Gas refunds only work if the transaction only included one message.
   */
  gas_refunds: GasRefund[];
  /**
   * min_initial_deposit_ratio sets a minimum fraction of initial deposit for a
   * governance proposal. This is used to avoid spamming of proposals and
   * polluting the proposals page.
   *
   * @deprecated
   */
  min_initial_deposit_ratio: string;
}
/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustment {
  /** type of the sdk-message */
  type: string;
  /** amount of gas which is added to the message */
  amount: string;
}
/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefund {
  /** type of the sdk-message */
  type: string;
  /** fraction in decimal representation between 0 and 1 */
  fraction: string;
}
export declare const Params: {
  encode(message: Params, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Params;
  fromJSON(object: any): Params;
  toJSON(message: Params): unknown;
  create<
    I extends {
      min_gas_price?: string | undefined;
      burn_ratio?: string | undefined;
      gas_adjustments?:
        | {
            type?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      gas_refunds?:
        | {
            type?: string | undefined;
            fraction?: string | undefined;
          }[]
        | undefined;
      min_initial_deposit_ratio?: string | undefined;
    } & {
      min_gas_price?: string | undefined;
      burn_ratio?: string | undefined;
      gas_adjustments?:
        | ({
            type?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              type?: string | undefined;
              amount?: string | undefined;
            } & {
              type?: string | undefined;
              amount?: string | undefined;
            } & {
              [K in Exclude<
                keyof I["gas_adjustments"][number],
                keyof GasAdjustment
              >]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["gas_adjustments"],
                keyof {
                  type?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      gas_refunds?:
        | ({
            type?: string | undefined;
            fraction?: string | undefined;
          }[] &
            ({
              type?: string | undefined;
              fraction?: string | undefined;
            } & {
              type?: string | undefined;
              fraction?: string | undefined;
            } & {
              [K_2 in Exclude<
                keyof I["gas_refunds"][number],
                keyof GasRefund
              >]: never;
            })[] & {
              [K_3 in Exclude<
                keyof I["gas_refunds"],
                keyof {
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      min_initial_deposit_ratio?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Params>]: never }
  >(
    base?: I | undefined
  ): Params;
  fromPartial<
    I_1 extends {
      min_gas_price?: string | undefined;
      burn_ratio?: string | undefined;
      gas_adjustments?:
        | {
            type?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      gas_refunds?:
        | {
            type?: string | undefined;
            fraction?: string | undefined;
          }[]
        | undefined;
      min_initial_deposit_ratio?: string | undefined;
    } & {
      min_gas_price?: string | undefined;
      burn_ratio?: string | undefined;
      gas_adjustments?:
        | ({
            type?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              type?: string | undefined;
              amount?: string | undefined;
            } & {
              type?: string | undefined;
              amount?: string | undefined;
            } & {
              [K_5 in Exclude<
                keyof I_1["gas_adjustments"][number],
                keyof GasAdjustment
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I_1["gas_adjustments"],
                keyof {
                  type?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      gas_refunds?:
        | ({
            type?: string | undefined;
            fraction?: string | undefined;
          }[] &
            ({
              type?: string | undefined;
              fraction?: string | undefined;
            } & {
              type?: string | undefined;
              fraction?: string | undefined;
            } & {
              [K_7 in Exclude<
                keyof I_1["gas_refunds"][number],
                keyof GasRefund
              >]: never;
            })[] & {
              [K_8 in Exclude<
                keyof I_1["gas_refunds"],
                keyof {
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      min_initial_deposit_ratio?: string | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Params>]: never }
  >(
    object: I_1
  ): Params;
};
export declare const GasAdjustment: {
  encode(message: GasAdjustment, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GasAdjustment;
  fromJSON(object: any): GasAdjustment;
  toJSON(message: GasAdjustment): unknown;
  create<
    I extends {
      type?: string | undefined;
      amount?: string | undefined;
    } & {
      type?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GasAdjustment>]: never }
  >(
    base?: I | undefined
  ): GasAdjustment;
  fromPartial<
    I_1 extends {
      type?: string | undefined;
      amount?: string | undefined;
    } & {
      type?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GasAdjustment>]: never }
  >(
    object: I_1
  ): GasAdjustment;
};
export declare const GasRefund: {
  encode(message: GasRefund, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GasRefund;
  fromJSON(object: any): GasRefund;
  toJSON(message: GasRefund): unknown;
  create<
    I extends {
      type?: string | undefined;
      fraction?: string | undefined;
    } & {
      type?: string | undefined;
      fraction?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GasRefund>]: never }
  >(
    base?: I | undefined
  ): GasRefund;
  fromPartial<
    I_1 extends {
      type?: string | undefined;
      fraction?: string | undefined;
    } & {
      type?: string | undefined;
      fraction?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GasRefund>]: never }
  >(
    object: I_1
  ): GasRefund;
};
type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {
      [K in keyof P]: Exact<P[K], I[K]>;
    } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };
export {};
