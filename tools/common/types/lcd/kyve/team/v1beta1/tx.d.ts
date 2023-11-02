import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.team.v1beta1";
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlocked {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponse {}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewards {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponse {}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewards {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponse {}
/** MsgClawback ... */
export interface MsgClawback {
  /** authority is the foundation which is allowed to modify team accounts */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
  clawback: string;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponse {}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccount {
  /** authority ... */
  authority: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponse {}
export declare const MsgClaimUnlocked: {
  encode(message: MsgClaimUnlocked, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUnlocked;
  fromJSON(object: any): MsgClaimUnlocked;
  toJSON(message: MsgClaimUnlocked): unknown;
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
    } & { [K in Exclude<keyof I, keyof MsgClaimUnlocked>]: never }
  >(
    base?: I | undefined
  ): MsgClaimUnlocked;
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
    } & { [K_1 in Exclude<keyof I_1, keyof MsgClaimUnlocked>]: never }
  >(
    object: I_1
  ): MsgClaimUnlocked;
};
export declare const MsgClaimUnlockedResponse: {
  encode(_: MsgClaimUnlockedResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimUnlockedResponse;
  fromJSON(_: any): MsgClaimUnlockedResponse;
  toJSON(_: MsgClaimUnlockedResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgClaimUnlockedResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgClaimUnlockedResponse;
};
export declare const MsgClaimAuthorityRewards: {
  encode(message: MsgClaimAuthorityRewards, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimAuthorityRewards;
  fromJSON(object: any): MsgClaimAuthorityRewards;
  toJSON(message: MsgClaimAuthorityRewards): unknown;
  create<
    I extends {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgClaimAuthorityRewards>]: never }
  >(
    base?: I | undefined
  ): MsgClaimAuthorityRewards;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & {
      authority?: string | undefined;
      amount?: string | undefined;
      recipient?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgClaimAuthorityRewards>]: never }
  >(
    object: I_1
  ): MsgClaimAuthorityRewards;
};
export declare const MsgClaimAuthorityRewardsResponse: {
  encode(_: MsgClaimAuthorityRewardsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimAuthorityRewardsResponse;
  fromJSON(_: any): MsgClaimAuthorityRewardsResponse;
  toJSON(_: MsgClaimAuthorityRewardsResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgClaimAuthorityRewardsResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgClaimAuthorityRewardsResponse;
};
export declare const MsgClaimAccountRewards: {
  encode(message: MsgClaimAccountRewards, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimAccountRewards;
  fromJSON(object: any): MsgClaimAccountRewards;
  toJSON(message: MsgClaimAccountRewards): unknown;
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
    } & { [K in Exclude<keyof I, keyof MsgClaimAccountRewards>]: never }
  >(
    base?: I | undefined
  ): MsgClaimAccountRewards;
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
    } & { [K_1 in Exclude<keyof I_1, keyof MsgClaimAccountRewards>]: never }
  >(
    object: I_1
  ): MsgClaimAccountRewards;
};
export declare const MsgClaimAccountRewardsResponse: {
  encode(_: MsgClaimAccountRewardsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimAccountRewardsResponse;
  fromJSON(_: any): MsgClaimAccountRewardsResponse;
  toJSON(_: MsgClaimAccountRewardsResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgClaimAccountRewardsResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgClaimAccountRewardsResponse;
};
export declare const MsgClawback: {
  encode(message: MsgClawback, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawback;
  fromJSON(object: any): MsgClawback;
  toJSON(message: MsgClawback): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgClawback>]: never }
  >(
    base?: I | undefined
  ): MsgClawback;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      clawback?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgClawback>]: never }
  >(
    object: I_1
  ): MsgClawback;
};
export declare const MsgClawbackResponse: {
  encode(_: MsgClawbackResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawbackResponse;
  fromJSON(_: any): MsgClawbackResponse;
  toJSON(_: MsgClawbackResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgClawbackResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgClawbackResponse;
};
export declare const MsgCreateTeamVestingAccount: {
  encode(message: MsgCreateTeamVestingAccount, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateTeamVestingAccount;
  fromJSON(object: any): MsgCreateTeamVestingAccount;
  toJSON(message: MsgCreateTeamVestingAccount): unknown;
  create<
    I extends {
      authority?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & {
      authority?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateTeamVestingAccount>]: never }
  >(
    base?: I | undefined
  ): MsgCreateTeamVestingAccount;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & {
      authority?: string | undefined;
      total_allocation?: string | undefined;
      commencement?: string | undefined;
    } & {
      [K_1 in Exclude<keyof I_1, keyof MsgCreateTeamVestingAccount>]: never;
    }
  >(
    object: I_1
  ): MsgCreateTeamVestingAccount;
};
export declare const MsgCreateTeamVestingAccountResponse: {
  encode(
    _: MsgCreateTeamVestingAccountResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateTeamVestingAccountResponse;
  fromJSON(_: any): MsgCreateTeamVestingAccountResponse;
  toJSON(_: MsgCreateTeamVestingAccountResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgCreateTeamVestingAccountResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgCreateTeamVestingAccountResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
  /** ClaimUnlocked ... */
  ClaimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse>;
  /** Clawback ... */
  Clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
  /** CreateTeamVestingAccount ... */
  CreateTeamVestingAccount(
    request: MsgCreateTeamVestingAccount
  ): Promise<MsgCreateTeamVestingAccountResponse>;
  /** ClaimAuthorityRewards ... */
  ClaimAuthorityRewards(
    request: MsgClaimAuthorityRewards
  ): Promise<MsgClaimAuthorityRewardsResponse>;
  /** ClaimInflationRewards ... */
  ClaimAccountRewards(
    request: MsgClaimAccountRewards
  ): Promise<MsgClaimAccountRewardsResponse>;
}
export declare const MsgServiceName = "kyve.team.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  ClaimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse>;
  Clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
  CreateTeamVestingAccount(
    request: MsgCreateTeamVestingAccount
  ): Promise<MsgCreateTeamVestingAccountResponse>;
  ClaimAuthorityRewards(
    request: MsgClaimAuthorityRewards
  ): Promise<MsgClaimAuthorityRewardsResponse>;
  ClaimAccountRewards(
    request: MsgClaimAccountRewards
  ): Promise<MsgClaimAccountRewardsResponse>;
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
