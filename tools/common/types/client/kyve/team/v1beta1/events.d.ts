import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.team.v1beta1";
/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccount {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
}
/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawback {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /**
   * clawback is a unix timestamp of a clawback. If timestamp is zero
   * it means that the account has not received a clawback
   */
  clawback: string;
  /** amount which got clawed back. */
  amount: string;
}
/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlocked {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** amount is the number of tokens claimed from the unlocked amount. */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
}
/**
 * EventClaimInflationRewards is an event emitted when the authority claims inflation rewards for a recipient.
 * emitted_by: MsgClaimInflationRewards
 */
export interface EventClaimInflationRewards {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** amount is the amount of inflation rewards the authority should claim for the account holder */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
}
/**
 * EventClaimAuthorityRewards is an event emitted when the authority claims its inflation rewards for a recipient.
 * emitted_by: MsgClaimAuthorityRewards
 */
export interface EventClaimAuthorityRewards {
  /** authority which initiated this action */
  authority: string;
  /** amount is the amount of inflation rewards the authority should claim for the account holder */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
}
export declare const EventCreateTeamVestingAccount: {
  encode(
    message: EventCreateTeamVestingAccount,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventCreateTeamVestingAccount;
  fromJSON(object: any): EventCreateTeamVestingAccount;
  toJSON(message: EventCreateTeamVestingAccount): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreateTeamVestingAccount>]: never }
  >(
    base?: I | undefined
  ): EventCreateTeamVestingAccount;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & {
      [K_1 in Exclude<keyof I_1, keyof EventCreateTeamVestingAccount>]: never;
    }
  >(
    object: I_1
  ): EventCreateTeamVestingAccount;
};
export declare const EventClawback: {
  encode(message: EventClawback, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventClawback;
  fromJSON(object: any): EventClawback;
  toJSON(message: EventClawback): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
      amount?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClawback>]: never }
  >(
    base?: I | undefined
  ): EventClawback;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
      amount?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventClawback>]: never }
  >(
    object: I_1
  ): EventClawback;
};
export declare const EventClaimedUnlocked: {
  encode(message: EventClaimedUnlocked, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimedUnlocked;
  fromJSON(object: any): EventClaimedUnlocked;
  toJSON(message: EventClaimedUnlocked): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClaimedUnlocked>]: never }
  >(
    base?: I | undefined
  ): EventClaimedUnlocked;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventClaimedUnlocked>]: never }
  >(
    object: I_1
  ): EventClaimedUnlocked;
};
export declare const EventClaimInflationRewards: {
  encode(message: EventClaimInflationRewards, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventClaimInflationRewards;
  fromJSON(object: any): EventClaimInflationRewards;
  toJSON(message: EventClaimInflationRewards): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClaimInflationRewards>]: never }
  >(
    base?: I | undefined
  ): EventClaimInflationRewards;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventClaimInflationRewards>]: never }
  >(
    object: I_1
  ): EventClaimInflationRewards;
};
export declare const EventClaimAuthorityRewards: {
  encode(message: EventClaimAuthorityRewards, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventClaimAuthorityRewards;
  fromJSON(object: any): EventClaimAuthorityRewards;
  toJSON(message: EventClaimAuthorityRewards): unknown;
  create<
    I extends {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClaimAuthorityRewards>]: never }
  >(
    base?: I | undefined
  ): EventClaimAuthorityRewards;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventClaimAuthorityRewards>]: never }
  >(
    object: I_1
  ): EventClaimAuthorityRewards;
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
