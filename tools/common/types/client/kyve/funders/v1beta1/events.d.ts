import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "kyve.funders.v1beta1";
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
/**
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunder {
  /** address is the account address of the funder. */
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
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunder {
  /** address is the account address of the funder. */
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
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has funded */
  amount: string;
  /** amount_per_bundle is the amount in ukyve the funder has funded per bundle */
  amount_per_bundle: string;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount: string;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
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
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & { [K in Exclude<keyof I["old_params"], keyof Params>]: never })
        | undefined;
      new_params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & { [K_1 in Exclude<keyof I["new_params"], keyof Params>]: never })
        | undefined;
      payload?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventUpdateParams>]: never }
  >(
    base?: I | undefined
  ): EventUpdateParams;
  fromPartial<
    I_1 extends {
      old_params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["old_params"], keyof Params>]: never;
          })
        | undefined;
      new_params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            [K_4 in Exclude<keyof I_1["new_params"], keyof Params>]: never;
          })
        | undefined;
      payload?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof EventUpdateParams>]: never }
  >(
    object: I_1
  ): EventUpdateParams;
};
export declare const EventCreateFunder: {
  encode(message: EventCreateFunder, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateFunder;
  fromJSON(object: any): EventCreateFunder;
  toJSON(message: EventCreateFunder): unknown;
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
    } & { [K in Exclude<keyof I, keyof EventCreateFunder>]: never }
  >(
    base?: I | undefined
  ): EventCreateFunder;
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
    } & { [K_1 in Exclude<keyof I_1, keyof EventCreateFunder>]: never }
  >(
    object: I_1
  ): EventCreateFunder;
};
export declare const EventUpdateFunder: {
  encode(message: EventUpdateFunder, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateFunder;
  fromJSON(object: any): EventUpdateFunder;
  toJSON(message: EventUpdateFunder): unknown;
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
    } & { [K in Exclude<keyof I, keyof EventUpdateFunder>]: never }
  >(
    base?: I | undefined
  ): EventUpdateFunder;
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
    } & { [K_1 in Exclude<keyof I_1, keyof EventUpdateFunder>]: never }
  >(
    object: I_1
  ): EventUpdateFunder;
};
export declare const EventFundPool: {
  encode(message: EventFundPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventFundPool;
  fromJSON(object: any): EventFundPool;
  toJSON(message: EventFundPool): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventFundPool>]: never }
  >(
    base?: I | undefined
  ): EventFundPool;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventFundPool>]: never }
  >(
    object: I_1
  ): EventFundPool;
};
export declare const EventDefundPool: {
  encode(message: EventDefundPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDefundPool;
  fromJSON(object: any): EventDefundPool;
  toJSON(message: EventDefundPool): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventDefundPool>]: never }
  >(
    base?: I | undefined
  ): EventDefundPool;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventDefundPool>]: never }
  >(
    object: I_1
  ): EventDefundPool;
};
export declare const EventPoolOutOfFunds: {
  encode(message: EventPoolOutOfFunds, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolOutOfFunds;
  fromJSON(object: any): EventPoolOutOfFunds;
  toJSON(message: EventPoolOutOfFunds): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, "pool_id">]: never }
  >(
    base?: I | undefined
  ): EventPoolOutOfFunds;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "pool_id">]: never }
  >(
    object: I_1
  ): EventPoolOutOfFunds;
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
