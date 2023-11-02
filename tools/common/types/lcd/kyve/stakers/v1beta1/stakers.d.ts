import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface Staker {
  /** address ... */
  address: string;
  /** commission ... */
  commission: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details are some additional notes the staker finds important */
  details: string;
  /** commission_rewards are the rewards in $KYVE earned through commission */
  commission_rewards: string;
}
/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface Valaccount {
  /**
   * pool_id defines the pool in which the address
   * is allowed to vote in.
   */
  pool_id: string;
  /** staker is the address the valaccount is voting for. */
  staker: string;
  /**
   * valaddress is the account stored on the protocol
   * node which votes for the staker in the given pool
   */
  valaddress: string;
  /**
   * When a node is inactive (does not vote at all)
   * A point is added, after a certain amount of points
   * is reached the node gets kicked out.
   */
  points: string;
  /** isLeaving indicates if a staker is leaving the given pool. */
  is_leaving: boolean;
}
/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntry {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: string;
  /** staker is the address of the affected staker */
  staker: string;
  /**
   * commission is the new commission which will
   * be applied after the waiting time is over.
   */
  commission: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creation_date: string;
}
/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntry {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: string;
  /** staker is the address of the affected staker */
  staker: string;
  /** pool_id indicates the pool the staker wants to leave */
  pool_id: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creation_date: string;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
  /**
   * low_index is the tail of the queue. It is the
   * oldest entry in the queue. If this entry isn't
   * due, non of the other entries is.
   */
  low_index: string;
  /**
   * high_index is the head of the queue. New entries
   * are added to the top.
   */
  high_index: string;
}
export declare const Staker: {
  encode(message: Staker, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Staker;
  fromJSON(object: any): Staker;
  toJSON(message: Staker): unknown;
  create<
    I extends {
      address?: string | undefined;
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      commission_rewards?: string | undefined;
    } & {
      address?: string | undefined;
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      commission_rewards?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Staker>]: never }
  >(
    base?: I | undefined
  ): Staker;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      commission_rewards?: string | undefined;
    } & {
      address?: string | undefined;
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      commission_rewards?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Staker>]: never }
  >(
    object: I_1
  ): Staker;
};
export declare const Valaccount: {
  encode(message: Valaccount, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Valaccount;
  fromJSON(object: any): Valaccount;
  toJSON(message: Valaccount): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof Valaccount>]: never }
  >(
    base?: I | undefined
  ): Valaccount;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      valaddress?: string | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Valaccount>]: never }
  >(
    object: I_1
  ): Valaccount;
};
export declare const CommissionChangeEntry: {
  encode(message: CommissionChangeEntry, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommissionChangeEntry;
  fromJSON(object: any): CommissionChangeEntry;
  toJSON(message: CommissionChangeEntry): unknown;
  create<
    I extends {
      index?: string | undefined;
      staker?: string | undefined;
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & {
      index?: string | undefined;
      staker?: string | undefined;
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommissionChangeEntry>]: never }
  >(
    base?: I | undefined
  ): CommissionChangeEntry;
  fromPartial<
    I_1 extends {
      index?: string | undefined;
      staker?: string | undefined;
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & {
      index?: string | undefined;
      staker?: string | undefined;
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CommissionChangeEntry>]: never }
  >(
    object: I_1
  ): CommissionChangeEntry;
};
export declare const LeavePoolEntry: {
  encode(message: LeavePoolEntry, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): LeavePoolEntry;
  fromJSON(object: any): LeavePoolEntry;
  toJSON(message: LeavePoolEntry): unknown;
  create<
    I extends {
      index?: string | undefined;
      staker?: string | undefined;
      pool_id?: string | undefined;
      creation_date?: string | undefined;
    } & {
      index?: string | undefined;
      staker?: string | undefined;
      pool_id?: string | undefined;
      creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LeavePoolEntry>]: never }
  >(
    base?: I | undefined
  ): LeavePoolEntry;
  fromPartial<
    I_1 extends {
      index?: string | undefined;
      staker?: string | undefined;
      pool_id?: string | undefined;
      creation_date?: string | undefined;
    } & {
      index?: string | undefined;
      staker?: string | undefined;
      pool_id?: string | undefined;
      creation_date?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LeavePoolEntry>]: never }
  >(
    object: I_1
  ): LeavePoolEntry;
};
export declare const QueueState: {
  encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueueState;
  fromJSON(object: any): QueueState;
  toJSON(message: QueueState): unknown;
  create<
    I extends {
      low_index?: string | undefined;
      high_index?: string | undefined;
    } & {
      low_index?: string | undefined;
      high_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueueState>]: never }
  >(
    base?: I | undefined
  ): QueueState;
  fromPartial<
    I_1 extends {
      low_index?: string | undefined;
      high_index?: string | undefined;
    } & {
      low_index?: string | undefined;
      high_index?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueueState>]: never }
  >(
    object: I_1
  ): QueueState;
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
