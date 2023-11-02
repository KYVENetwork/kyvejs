import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** Params defines the pool module parameters. */
export interface Params {
  /** protocol_inflation_share ... */
  protocol_inflation_share: string;
  /** pool_inflation_payout_rate ... */
  pool_inflation_payout_rate: string;
}
export declare const Params: {
  encode(message: Params, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Params;
  fromJSON(object: any): Params;
  toJSON(message: Params): unknown;
  create<
    I extends {
      protocol_inflation_share?: string | undefined;
      pool_inflation_payout_rate?: string | undefined;
    } & {
      protocol_inflation_share?: string | undefined;
      pool_inflation_payout_rate?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Params>]: never }
  >(
    base?: I | undefined
  ): Params;
  fromPartial<
    I_1 extends {
      protocol_inflation_share?: string | undefined;
      pool_inflation_payout_rate?: string | undefined;
    } & {
      protocol_inflation_share?: string | undefined;
      pool_inflation_payout_rate?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Params>]: never }
  >(
    object: I_1
  ): Params;
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
