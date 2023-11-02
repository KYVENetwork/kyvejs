import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "kyve.pool.v1beta1";
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
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
    } & {
      params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & { [K in Exclude<keyof I["params"], keyof Params>]: never })
        | undefined;
    } & { [K_1 in Exclude<keyof I, "params">]: never }
  >(
    base?: I | undefined
  ): QueryParamsResponse;
  fromPartial<
    I_1 extends {
      params?:
        | {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
    } & {
      params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & { [K_2 in Exclude<keyof I_1["params"], keyof Params>]: never })
        | undefined;
    } & { [K_3 in Exclude<keyof I_1, "params">]: never }
  >(
    object: I_1
  ): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const QueryServiceName = "kyve.pool.v1beta1.Query";
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
