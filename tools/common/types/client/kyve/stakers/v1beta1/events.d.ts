import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "kyve.stakers.v1beta1";
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
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStaker {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
  /** commission */
  commission: string;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadata {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity ... */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommission {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** commission ... */
  commission: string;
}
/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewards {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
  /** pool_id is the pool the staker joined */
  pool_id: string;
  /** staker is the address of the staker */
  staker: string;
  /**
   * valaddress is the address of the protocol node which
   * votes in favor of the staker
   */
  valaddress: string;
  /** amount is the amount of funds transferred to the valaddress */
  amount: string;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
  /** pool_id ... */
  pool_id: string;
  /** staker ... */
  staker: string;
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
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & { [K in Exclude<keyof I["old_params"], keyof Params>]: never })
        | undefined;
      new_params?:
        | ({
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
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
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["old_params"], keyof Params>]: never;
          })
        | undefined;
      new_params?:
        | ({
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
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
export declare const EventCreateStaker: {
  encode(message: EventCreateStaker, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateStaker;
  fromJSON(object: any): EventCreateStaker;
  toJSON(message: EventCreateStaker): unknown;
  create<
    I extends {
      staker?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & {
      staker?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreateStaker>]: never }
  >(
    base?: I | undefined
  ): EventCreateStaker;
  fromPartial<
    I_1 extends {
      staker?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & {
      staker?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventCreateStaker>]: never }
  >(
    object: I_1
  ): EventCreateStaker;
};
export declare const EventUpdateMetadata: {
  encode(message: EventUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMetadata;
  fromJSON(object: any): EventUpdateMetadata;
  toJSON(message: EventUpdateMetadata): unknown;
  create<
    I extends {
      staker?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & {
      staker?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateMetadata>]: never }
  >(
    base?: I | undefined
  ): EventUpdateMetadata;
  fromPartial<
    I_1 extends {
      staker?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & {
      staker?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventUpdateMetadata>]: never }
  >(
    object: I_1
  ): EventUpdateMetadata;
};
export declare const EventUpdateCommission: {
  encode(message: EventUpdateCommission, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventUpdateCommission;
  fromJSON(object: any): EventUpdateCommission;
  toJSON(message: EventUpdateCommission): unknown;
  create<
    I extends {
      staker?: string | undefined;
      commission?: string | undefined;
    } & {
      staker?: string | undefined;
      commission?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateCommission>]: never }
  >(
    base?: I | undefined
  ): EventUpdateCommission;
  fromPartial<
    I_1 extends {
      staker?: string | undefined;
      commission?: string | undefined;
    } & {
      staker?: string | undefined;
      commission?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventUpdateCommission>]: never }
  >(
    object: I_1
  ): EventUpdateCommission;
};
export declare const EventClaimCommissionRewards: {
  encode(message: EventClaimCommissionRewards, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventClaimCommissionRewards;
  fromJSON(object: any): EventClaimCommissionRewards;
  toJSON(message: EventClaimCommissionRewards): unknown;
  create<
    I extends {
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClaimCommissionRewards>]: never }
  >(
    base?: I | undefined
  ): EventClaimCommissionRewards;
  fromPartial<
    I_1 extends {
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      [K_1 in Exclude<keyof I_1, keyof EventClaimCommissionRewards>]: never;
    }
  >(
    object: I_1
  ): EventClaimCommissionRewards;
};
export declare const EventJoinPool: {
  encode(message: EventJoinPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventJoinPool;
  fromJSON(object: any): EventJoinPool;
  toJSON(message: EventJoinPool): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventJoinPool>]: never }
  >(
    base?: I | undefined
  ): EventJoinPool;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventJoinPool>]: never }
  >(
    object: I_1
  ): EventJoinPool;
};
export declare const EventLeavePool: {
  encode(message: EventLeavePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeavePool;
  fromJSON(object: any): EventLeavePool;
  toJSON(message: EventLeavePool): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventLeavePool>]: never }
  >(
    base?: I | undefined
  ): EventLeavePool;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventLeavePool>]: never }
  >(
    object: I_1
  ): EventLeavePool;
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
