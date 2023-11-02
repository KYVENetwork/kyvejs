import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStaker {
  /** creator is the address of the staker. */
  creator: string;
  /** amount is the initial self-stake of the staker. */
  amount: string;
  /**
   * commission is the percentage that is deducted from rewards before
   * distributing the staker's delegators.
   */
  commission: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
  /** creator ... */
  creator: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity from keybase.io */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
  /** creator ... */
  creator: string;
  /** commission ... */
  commission: string;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {}
/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewards {
  /** creator ... */
  creator: string;
  /** amount ... */
  amount: string;
}
/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponse {}
/** MsgJoinPool ... */
export interface MsgJoinPool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  pool_id: string;
  /** valaddress ... */
  valaddress: string;
  /** amount ... */
  amount: string;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {}
/** MsgLeavePool ... */
export interface MsgLeavePool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  pool_id: string;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export declare const MsgCreateStaker: {
  encode(message: MsgCreateStaker, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStaker;
  fromJSON(object: any): MsgCreateStaker;
  toJSON(message: MsgCreateStaker): unknown;
  create<
    I extends {
      creator?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & {
      creator?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateStaker>]: never }
  >(
    base?: I | undefined
  ): MsgCreateStaker;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & {
      creator?: string | undefined;
      amount?: string | undefined;
      commission?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateStaker>]: never }
  >(
    object: I_1
  ): MsgCreateStaker;
};
export declare const MsgCreateStakerResponse: {
  encode(_: MsgCreateStakerResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateStakerResponse;
  fromJSON(_: any): MsgCreateStakerResponse;
  toJSON(_: MsgCreateStakerResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgCreateStakerResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgCreateStakerResponse;
};
export declare const MsgUpdateMetadata: {
  encode(message: MsgUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata;
  fromJSON(object: any): MsgUpdateMetadata;
  toJSON(message: MsgUpdateMetadata): unknown;
  create<
    I extends {
      creator?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & {
      creator?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateMetadata>]: never }
  >(
    base?: I | undefined
  ): MsgUpdateMetadata;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & {
      creator?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateMetadata>]: never }
  >(
    object: I_1
  ): MsgUpdateMetadata;
};
export declare const MsgUpdateMetadataResponse: {
  encode(_: MsgUpdateMetadataResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMetadataResponse;
  fromJSON(_: any): MsgUpdateMetadataResponse;
  toJSON(_: MsgUpdateMetadataResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUpdateMetadataResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUpdateMetadataResponse;
};
export declare const MsgUpdateCommission: {
  encode(message: MsgUpdateCommission, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommission;
  fromJSON(object: any): MsgUpdateCommission;
  toJSON(message: MsgUpdateCommission): unknown;
  create<
    I extends {
      creator?: string | undefined;
      commission?: string | undefined;
    } & {
      creator?: string | undefined;
      commission?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateCommission>]: never }
  >(
    base?: I | undefined
  ): MsgUpdateCommission;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      commission?: string | undefined;
    } & {
      creator?: string | undefined;
      commission?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateCommission>]: never }
  >(
    object: I_1
  ): MsgUpdateCommission;
};
export declare const MsgUpdateCommissionResponse: {
  encode(_: MsgUpdateCommissionResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateCommissionResponse;
  fromJSON(_: any): MsgUpdateCommissionResponse;
  toJSON(_: MsgUpdateCommissionResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUpdateCommissionResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUpdateCommissionResponse;
};
export declare const MsgClaimCommissionRewards: {
  encode(message: MsgClaimCommissionRewards, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimCommissionRewards;
  fromJSON(object: any): MsgClaimCommissionRewards;
  toJSON(message: MsgClaimCommissionRewards): unknown;
  create<
    I extends {
      creator?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgClaimCommissionRewards>]: never }
  >(
    base?: I | undefined
  ): MsgClaimCommissionRewards;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgClaimCommissionRewards>]: never }
  >(
    object: I_1
  ): MsgClaimCommissionRewards;
};
export declare const MsgClaimCommissionRewardsResponse: {
  encode(_: MsgClaimCommissionRewardsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimCommissionRewardsResponse;
  fromJSON(_: any): MsgClaimCommissionRewardsResponse;
  toJSON(_: MsgClaimCommissionRewardsResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgClaimCommissionRewardsResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgClaimCommissionRewardsResponse;
};
export declare const MsgJoinPool: {
  encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
  fromJSON(object: any): MsgJoinPool;
  toJSON(message: MsgJoinPool): unknown;
  create<
    I extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgJoinPool>]: never }
  >(
    base?: I | undefined
  ): MsgJoinPool;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
      valaddress?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgJoinPool>]: never }
  >(
    object: I_1
  ): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
  encode(_: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
  fromJSON(_: any): MsgJoinPoolResponse;
  toJSON(_: MsgJoinPoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgJoinPoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgJoinPoolResponse;
};
export declare const MsgLeavePool: {
  encode(message: MsgLeavePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeavePool;
  fromJSON(object: any): MsgLeavePool;
  toJSON(message: MsgLeavePool): unknown;
  create<
    I extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgLeavePool>]: never }
  >(
    base?: I | undefined
  ): MsgLeavePool;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgLeavePool>]: never }
  >(
    object: I_1
  ): MsgLeavePool;
};
export declare const MsgLeavePoolResponse: {
  encode(_: MsgLeavePoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeavePoolResponse;
  fromJSON(_: any): MsgLeavePoolResponse;
  toJSON(_: MsgLeavePoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgLeavePoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgLeavePoolResponse;
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
  /** CreateStaker ... */
  CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
  /** UpdateMetadata ... */
  UpdateMetadata(
    request: MsgUpdateMetadata
  ): Promise<MsgUpdateMetadataResponse>;
  /** UpdateCommission ... */
  UpdateCommission(
    request: MsgUpdateCommission
  ): Promise<MsgUpdateCommissionResponse>;
  /** ClaimCommissionRewards ... */
  ClaimCommissionRewards(
    request: MsgClaimCommissionRewards
  ): Promise<MsgClaimCommissionRewardsResponse>;
  /** JoinPool ... */
  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  /** LeavePool ... */
  LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/stakers module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgServiceName = "kyve.stakers.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
  UpdateMetadata(
    request: MsgUpdateMetadata
  ): Promise<MsgUpdateMetadataResponse>;
  UpdateCommission(
    request: MsgUpdateCommission
  ): Promise<MsgUpdateCommissionResponse>;
  ClaimCommissionRewards(
    request: MsgClaimCommissionRewards
  ): Promise<MsgClaimCommissionRewardsResponse>;
  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
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
