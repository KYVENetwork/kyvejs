import _m0 from "protobufjs/minimal";
import { Params } from "./global";
export declare const protobufPackage = "kyve.global.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params | undefined;
}
export declare const QueryParamsRequest: {
  encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
  fromJSON(_: any): QueryParamsRequest;
  toJSON(_: QueryParamsRequest): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): QueryParamsRequest;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
  encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
  fromJSON(object: any): QueryParamsResponse;
  toJSON(message: QueryParamsResponse): unknown;
  create<
    I extends {
      params?:
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
    } & {
      params?:
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
                      keyof I["params"]["gas_adjustments"][number],
                      keyof import("./global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_1 in Exclude<
                      keyof I["params"]["gas_adjustments"],
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
                      keyof I["params"]["gas_refunds"][number],
                      keyof import("./global").GasRefund
                    >]: never;
                  })[] & {
                    [K_3 in Exclude<
                      keyof I["params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & { [K_4 in Exclude<keyof I["params"], keyof Params>]: never })
        | undefined;
    } & { [K_5 in Exclude<keyof I, "params">]: never }
  >(
    base?: I | undefined
  ): QueryParamsResponse;
  fromPartial<
    I_1 extends {
      params?:
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
    } & {
      params?:
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
                    [K_6 in Exclude<
                      keyof I_1["params"]["gas_adjustments"][number],
                      keyof import("./global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_7 in Exclude<
                      keyof I_1["params"]["gas_adjustments"],
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
                    [K_8 in Exclude<
                      keyof I_1["params"]["gas_refunds"][number],
                      keyof import("./global").GasRefund
                    >]: never;
                  })[] & {
                    [K_9 in Exclude<
                      keyof I_1["params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & { [K_10 in Exclude<keyof I_1["params"], keyof Params>]: never })
        | undefined;
    } & { [K_11 in Exclude<keyof I_1, "params">]: never }
  >(
    object: I_1
  ): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const QueryServiceName = "kyve.global.v1beta1.Query";
export declare class QueryClientImpl implements Query {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
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
