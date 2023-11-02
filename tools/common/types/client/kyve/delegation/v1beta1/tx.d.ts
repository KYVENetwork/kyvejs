import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.delegation.v1beta1";
/** MsgDelegate ... */
export interface MsgDelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponse {}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewards {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponse {}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponse {}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  from_staker: string;
  /** staker ... */
  to_staker: string;
  /** amount ... */
  amount: string;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponse {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export declare const MsgDelegate: {
  encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
  fromJSON(object: any): MsgDelegate;
  toJSON(message: MsgDelegate): unknown;
  create<
    I extends {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDelegate>]: never }
  >(
    base?: I | undefined
  ): MsgDelegate;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDelegate>]: never }
  >(
    object: I_1
  ): MsgDelegate;
};
export declare const MsgDelegateResponse: {
  encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
  fromJSON(_: any): MsgDelegateResponse;
  toJSON(_: MsgDelegateResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgDelegateResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgDelegateResponse;
};
export declare const MsgWithdrawRewards: {
  encode(message: MsgWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards;
  fromJSON(object: any): MsgWithdrawRewards;
  toJSON(message: MsgWithdrawRewards): unknown;
  create<
    I extends {
      creator?: string | undefined;
      staker?: string | undefined;
    } & {
      creator?: string | undefined;
      staker?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgWithdrawRewards>]: never }
  >(
    base?: I | undefined
  ): MsgWithdrawRewards;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      staker?: string | undefined;
    } & {
      creator?: string | undefined;
      staker?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgWithdrawRewards>]: never }
  >(
    object: I_1
  ): MsgWithdrawRewards;
};
export declare const MsgWithdrawRewardsResponse: {
  encode(_: MsgWithdrawRewardsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawRewardsResponse;
  fromJSON(_: any): MsgWithdrawRewardsResponse;
  toJSON(_: MsgWithdrawRewardsResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgWithdrawRewardsResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgWithdrawRewardsResponse;
};
export declare const MsgUndelegate: {
  encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
  fromJSON(object: any): MsgUndelegate;
  toJSON(message: MsgUndelegate): unknown;
  create<
    I extends {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUndelegate>]: never }
  >(
    base?: I | undefined
  ): MsgUndelegate;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUndelegate>]: never }
  >(
    object: I_1
  ): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
  encode(_: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUndelegateResponse;
  fromJSON(_: any): MsgUndelegateResponse;
  toJSON(_: MsgUndelegateResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUndelegateResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUndelegateResponse;
};
export declare const MsgRedelegate: {
  encode(message: MsgRedelegate, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate;
  fromJSON(object: any): MsgRedelegate;
  toJSON(message: MsgRedelegate): unknown;
  create<
    I extends {
      creator?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgRedelegate>]: never }
  >(
    base?: I | undefined
  ): MsgRedelegate;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      from_staker?: string | undefined;
      to_staker?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRedelegate>]: never }
  >(
    object: I_1
  ): MsgRedelegate;
};
export declare const MsgRedelegateResponse: {
  encode(_: MsgRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRedelegateResponse;
  fromJSON(_: any): MsgRedelegateResponse;
  toJSON(_: MsgRedelegateResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgRedelegateResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgRedelegateResponse;
};
export declare const MsgUpdateParams: {
  encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
  fromJSON(object: any): MsgUpdateParams;
  toJSON(message: MsgUpdateParams): unknown;
  create<
    I extends {
      authority?: string | undefined;
      payload?: string | undefined;
    } & {
      authority?: string | undefined;
      payload?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateParams>]: never }
  >(
    base?: I | undefined
  ): MsgUpdateParams;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      payload?: string | undefined;
    } & {
      authority?: string | undefined;
      payload?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never }
  >(
    object: I_1
  ): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
  encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse;
  fromJSON(_: any): MsgUpdateParamsResponse;
  toJSON(_: MsgUpdateParamsResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUpdateParamsResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUpdateParamsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
  /** Delegate ... */
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /** Withdraw ... */
  WithdrawRewards(
    request: MsgWithdrawRewards
  ): Promise<MsgWithdrawRewardsResponse>;
  /** Undelegate ... */
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /** Redelegate ... */
  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/delegation module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgServiceName = "kyve.delegation.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  WithdrawRewards(
    request: MsgWithdrawRewards
  ): Promise<MsgWithdrawRewardsResponse>;
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
