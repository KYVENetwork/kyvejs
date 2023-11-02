import _m0 from "protobufjs/minimal";
import { SlashType } from "./delegation";
import { Params } from "./params";
export declare const protobufPackage = "kyve.delegation.v1beta1";
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
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegation {
  /** address is the address of the delegator. */
  address: string;
  /** staker is the address of the protocol node. */
  staker: string;
  /** amount is the amount to be undelegated from the protocol node. */
  amount: string;
  /**
   * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
   * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
   */
  estimated_undelegation_date: string;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** from_staker ... */
  from_staker: string;
  /** to_staker is the account address of the new staker in the the pool */
  to_staker: string;
  /** amount ... */
  amount: string;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewards {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node the users withdraws from. */
  staker: string;
  /** amount ... */
  amount: string;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
  /** slash_type */
  slash_type: SlashType;
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
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & { [K in Exclude<keyof I["old_params"], keyof Params>]: never })
        | undefined;
      new_params?:
        | ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
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
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["old_params"], keyof Params>]: never;
          })
        | undefined;
      new_params?:
        | ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
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
export declare const EventDelegate: {
  encode(message: EventDelegate, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegate;
  fromJSON(object: any): EventDelegate;
  toJSON(message: EventDelegate): unknown;
  create<
    I extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventDelegate>]: never }
  >(
    base?: I | undefined
  ): EventDelegate;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventDelegate>]: never }
  >(
    object: I_1
  ): EventDelegate;
};
export declare const EventStartUndelegation: {
  encode(message: EventStartUndelegation, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventStartUndelegation;
  fromJSON(object: any): EventStartUndelegation;
  toJSON(message: EventStartUndelegation): unknown;
  create<
    I extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      estimated_undelegation_date?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      estimated_undelegation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventStartUndelegation>]: never }
  >(
    base?: I | undefined
  ): EventStartUndelegation;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      estimated_undelegation_date?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      estimated_undelegation_date?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventStartUndelegation>]: never }
  >(
    object: I_1
  ): EventStartUndelegation;
};
export declare const EventUndelegate: {
  encode(message: EventUndelegate, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegate;
  fromJSON(object: any): EventUndelegate;
  toJSON(message: EventUndelegate): unknown;
  create<
    I extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUndelegate>]: never }
  >(
    base?: I | undefined
  ): EventUndelegate;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventUndelegate>]: never }
  >(
    object: I_1
  ): EventUndelegate;
};
export declare const EventRedelegate: {
  encode(message: EventRedelegate, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegate;
  fromJSON(object: any): EventRedelegate;
  toJSON(message: EventRedelegate): unknown;
  create<
    I extends {
      address?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventRedelegate>]: never }
  >(
    base?: I | undefined
  ): EventRedelegate;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventRedelegate>]: never }
  >(
    object: I_1
  ): EventRedelegate;
};
export declare const EventWithdrawRewards: {
  encode(message: EventWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawRewards;
  fromJSON(object: any): EventWithdrawRewards;
  toJSON(message: EventWithdrawRewards): unknown;
  create<
    I extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventWithdrawRewards>]: never }
  >(
    base?: I | undefined
  ): EventWithdrawRewards;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      address?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventWithdrawRewards>]: never }
  >(
    object: I_1
  ): EventWithdrawRewards;
};
export declare const EventSlash: {
  encode(message: EventSlash, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash;
  fromJSON(object: any): EventSlash;
  toJSON(message: EventSlash): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      slash_type?: SlashType | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      slash_type?: SlashType | undefined;
    } & { [K in Exclude<keyof I, keyof EventSlash>]: never }
  >(
    base?: I | undefined
  ): EventSlash;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      slash_type?: SlashType | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
      slash_type?: SlashType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventSlash>]: never }
  >(
    object: I_1
  ): EventSlash;
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
