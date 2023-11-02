import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.funders.v1beta1";
/** Funder is the object which holds info about a single pool funder */
export interface Funder {
  /** address ... */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface Funding {
  /** funder_id is the id of the funder */
  funder_address: string;
  /** pool_id is the id of the pool this funding is for */
  pool_id: string;
  /** amount is the amount of funds in ukyve the funder has left */
  amount: string;
  /** amount_per_bundle is the amount of funds in ukyve the funder pays per bundle */
  amount_per_bundle: string;
  /** total_funded is the total amount of funds in ukyve the funder has funded */
  total_funded: string;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingState {
  /** pool_id is the id of the pool this funding is for */
  pool_id: string;
  /** active_funder_addresses is the list of all active fundings */
  active_funder_addresses: string[];
}
export declare const Funder: {
  encode(message: Funder, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Funder;
  fromJSON(object: any): Funder;
  toJSON(message: Funder): unknown;
  create<
    I extends {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Funder>]: never }
  >(
    base?: I | undefined
  ): Funder;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Funder>]: never }
  >(
    object: I_1
  ): Funder;
};
export declare const Funding: {
  encode(message: Funding, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Funding;
  fromJSON(object: any): Funding;
  toJSON(message: Funding): unknown;
  create<
    I extends {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Funding>]: never }
  >(
    base?: I | undefined
  ): Funding;
  fromPartial<
    I_1 extends {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Funding>]: never }
  >(
    object: I_1
  ): Funding;
};
export declare const FundingState: {
  encode(message: FundingState, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): FundingState;
  fromJSON(object: any): FundingState;
  toJSON(message: FundingState): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      active_funder_addresses?: string[] | undefined;
    } & {
      pool_id?: string | undefined;
      active_funder_addresses?:
        | (string[] &
            string[] & {
              [K in Exclude<
                keyof I["active_funder_addresses"],
                keyof string[]
              >]: never;
            })
        | undefined;
    } & { [K_1 in Exclude<keyof I, keyof FundingState>]: never }
  >(
    base?: I | undefined
  ): FundingState;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      active_funder_addresses?: string[] | undefined;
    } & {
      pool_id?: string | undefined;
      active_funder_addresses?:
        | (string[] &
            string[] & {
              [K_2 in Exclude<
                keyof I_1["active_funder_addresses"],
                keyof string[]
              >]: never;
            })
        | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof FundingState>]: never }
  >(
    object: I_1
  ): FundingState;
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
