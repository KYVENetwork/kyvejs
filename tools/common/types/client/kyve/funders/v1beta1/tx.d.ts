import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.funders.v1beta1";
/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunder {
  /** creator ... */
  creator: string;
  /** moniker */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website */
  website: string;
  /** contact */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponse {}
/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunder {
  /** creator ... */
  creator: string;
  /** moniker */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website */
  website: string;
  /** contact */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponse {}
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  pool_id: string;
  /** amount is the total amount available for distribution */
  amount: string;
  /** amount_per_bundle defines the amount of tokens that are distributed per submitted bundle */
  amount_per_bundle: string;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export declare const MsgCreateFunder: {
  encode(message: MsgCreateFunder, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFunder;
  fromJSON(object: any): MsgCreateFunder;
  toJSON(message: MsgCreateFunder): unknown;
  create<
    I extends {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateFunder>]: never }
  >(
    base?: I | undefined
  ): MsgCreateFunder;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreateFunder>]: never }
  >(
    object: I_1
  ): MsgCreateFunder;
};
export declare const MsgCreateFunderResponse: {
  encode(_: MsgCreateFunderResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateFunderResponse;
  fromJSON(_: any): MsgCreateFunderResponse;
  toJSON(_: MsgCreateFunderResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgCreateFunderResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgCreateFunderResponse;
};
export declare const MsgUpdateFunder: {
  encode(message: MsgUpdateFunder, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFunder;
  fromJSON(object: any): MsgUpdateFunder;
  toJSON(message: MsgUpdateFunder): unknown;
  create<
    I extends {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateFunder>]: never }
  >(
    base?: I | undefined
  ): MsgUpdateFunder;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & {
      creator?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateFunder>]: never }
  >(
    object: I_1
  ): MsgUpdateFunder;
};
export declare const MsgUpdateFunderResponse: {
  encode(_: MsgUpdateFunderResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateFunderResponse;
  fromJSON(_: any): MsgUpdateFunderResponse;
  toJSON(_: MsgUpdateFunderResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUpdateFunderResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUpdateFunderResponse;
};
export declare const MsgFundPool: {
  encode(message: MsgFundPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPool;
  fromJSON(object: any): MsgFundPool;
  toJSON(message: MsgFundPool): unknown;
  create<
    I extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgFundPool>]: never }
  >(
    base?: I | undefined
  ): MsgFundPool;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgFundPool>]: never }
  >(
    object: I_1
  ): MsgFundPool;
};
export declare const MsgFundPoolResponse: {
  encode(_: MsgFundPoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPoolResponse;
  fromJSON(_: any): MsgFundPoolResponse;
  toJSON(_: MsgFundPoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgFundPoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgFundPoolResponse;
};
export declare const MsgDefundPool: {
  encode(message: MsgDefundPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPool;
  fromJSON(object: any): MsgDefundPool;
  toJSON(message: MsgDefundPool): unknown;
  create<
    I extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDefundPool>]: never }
  >(
    base?: I | undefined
  ): MsgDefundPool;
  fromPartial<
    I_1 extends {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
    } & {
      creator?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDefundPool>]: never }
  >(
    object: I_1
  ): MsgDefundPool;
};
export declare const MsgDefundPoolResponse: {
  encode(_: MsgDefundPoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDefundPoolResponse;
  fromJSON(_: any): MsgDefundPoolResponse;
  toJSON(_: MsgDefundPoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgDefundPoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgDefundPoolResponse;
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
  /** CreateFunder ... */
  CreateFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse>;
  /** UpdateFunder ... */
  UpdateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse>;
  /** FundPool ... */
  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
  /** DefundPool ... */
  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/delegation module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgServiceName = "kyve.funders.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  CreateFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse>;
  UpdateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse>;
  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
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
