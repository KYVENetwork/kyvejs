import _m0 from "protobufjs/minimal";
import { Params } from "./global";
export declare const protobufPackage = "kyve.global.v1beta1";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  old_params?: Params | undefined;
  /** new_params is the module's new parameters. */
  new_params?: Params | undefined;
  /** payload is the parameter updates that were performed. */
  payload: string;
}
export declare const EventUpdateParams: {
  encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateParams;
  fromJSON(object: any): EventUpdateParams;
  toJSON(message: EventUpdateParams): unknown;
  create<
    I extends {
      old_params?:
        | {
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
          }
        | undefined;
      new_params?:
        | {
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
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
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
                      keyof I["old_params"]["gas_adjustments"][number],
                      keyof import("./global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_1 in Exclude<
                      keyof I["old_params"]["gas_adjustments"],
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
                      keyof I["old_params"]["gas_refunds"][number],
                      keyof import("./global").GasRefund
                    >]: never;
                  })[] & {
                    [K_3 in Exclude<
                      keyof I["old_params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & { [K_4 in Exclude<keyof I["old_params"], keyof Params>]: never })
        | undefined;
      new_params?:
        | ({
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
                      keyof I["new_params"]["gas_adjustments"][number],
                      keyof import("./global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_6 in Exclude<
                      keyof I["new_params"]["gas_adjustments"],
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
                      keyof I["new_params"]["gas_refunds"][number],
                      keyof import("./global").GasRefund
                    >]: never;
                  })[] & {
                    [K_8 in Exclude<
                      keyof I["new_params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & { [K_9 in Exclude<keyof I["new_params"], keyof Params>]: never })
        | undefined;
      payload?: string | undefined;
    } & { [K_10 in Exclude<keyof I, keyof EventUpdateParams>]: never }
  >(
    base?: I | undefined
  ): EventUpdateParams;
  fromPartial<
    I_1 extends {
      old_params?:
        | {
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
          }
        | undefined;
      new_params?:
        | {
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
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
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
                    [K_11 in Exclude<
                      keyof I_1["old_params"]["gas_adjustments"][number],
                      keyof import("./global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_12 in Exclude<
                      keyof I_1["old_params"]["gas_adjustments"],
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
                    [K_13 in Exclude<
                      keyof I_1["old_params"]["gas_refunds"][number],
                      keyof import("./global").GasRefund
                    >]: never;
                  })[] & {
                    [K_14 in Exclude<
                      keyof I_1["old_params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & {
            [K_15 in Exclude<keyof I_1["old_params"], keyof Params>]: never;
          })
        | undefined;
      new_params?:
        | ({
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
                    [K_16 in Exclude<
                      keyof I_1["new_params"]["gas_adjustments"][number],
                      keyof import("./global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_17 in Exclude<
                      keyof I_1["new_params"]["gas_adjustments"],
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
                    [K_18 in Exclude<
                      keyof I_1["new_params"]["gas_refunds"][number],
                      keyof import("./global").GasRefund
                    >]: never;
                  })[] & {
                    [K_19 in Exclude<
                      keyof I_1["new_params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & {
            [K_20 in Exclude<keyof I_1["new_params"], keyof Params>]: never;
          })
        | undefined;
      payload?: string | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof EventUpdateParams>]: never }
  >(
    object: I_1
  ): EventUpdateParams;
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
