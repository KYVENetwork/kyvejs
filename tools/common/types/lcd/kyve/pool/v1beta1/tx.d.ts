import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /** config ... */
  config: string;
  /** start_key ... */
  start_key: string;
  /** upload_interval ... */
  upload_interval: string;
  /** inflation_share_weight ... */
  inflation_share_weight: string;
  /** min_delegation ... */
  min_delegation: string;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** storage_provider_id ... */
  storage_provider_id: number;
  /** compression_id ... */
  compression_id: number;
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {}
/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
  /** payload ... */
  payload: string;
}
/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponse {}
/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
}
/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponse {}
/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
}
/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponse {}
/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
  /** version ... */
  version: string;
  /** scheduled_at ... */
  scheduled_at: string;
  /** duration ... */
  duration: string;
  /** binaries ... */
  binaries: string;
}
/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponse {}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export declare const MsgCreatePool: {
  encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool;
  fromJSON(object: any): MsgCreatePool;
  toJSON(message: MsgCreatePool): unknown;
  create<
    I extends {
      authority?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      authority?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreatePool>]: never }
  >(
    base?: I | undefined
  ): MsgCreatePool;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      authority?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCreatePool>]: never }
  >(
    object: I_1
  ): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
  encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse;
  fromJSON(_: any): MsgCreatePoolResponse;
  toJSON(_: MsgCreatePoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgCreatePoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgCreatePoolResponse;
};
export declare const MsgUpdatePool: {
  encode(message: MsgUpdatePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool;
  fromJSON(object: any): MsgUpdatePool;
  toJSON(message: MsgUpdatePool): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
      payload?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      payload?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdatePool>]: never }
  >(
    base?: I | undefined
  ): MsgUpdatePool;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
      payload?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
      payload?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdatePool>]: never }
  >(
    object: I_1
  ): MsgUpdatePool;
};
export declare const MsgUpdatePoolResponse: {
  encode(_: MsgUpdatePoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePoolResponse;
  fromJSON(_: any): MsgUpdatePoolResponse;
  toJSON(_: MsgUpdatePoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUpdatePoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUpdatePoolResponse;
};
export declare const MsgDisablePool: {
  encode(message: MsgDisablePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisablePool;
  fromJSON(object: any): MsgDisablePool;
  toJSON(message: MsgDisablePool): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDisablePool>]: never }
  >(
    base?: I | undefined
  ): MsgDisablePool;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDisablePool>]: never }
  >(
    object: I_1
  ): MsgDisablePool;
};
export declare const MsgDisablePoolResponse: {
  encode(_: MsgDisablePoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDisablePoolResponse;
  fromJSON(_: any): MsgDisablePoolResponse;
  toJSON(_: MsgDisablePoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgDisablePoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgDisablePoolResponse;
};
export declare const MsgEnablePool: {
  encode(message: MsgEnablePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnablePool;
  fromJSON(object: any): MsgEnablePool;
  toJSON(message: MsgEnablePool): unknown;
  create<
    I extends {
      authority?: string | undefined;
      id?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgEnablePool>]: never }
  >(
    base?: I | undefined
  ): MsgEnablePool;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      id?: string | undefined;
    } & {
      authority?: string | undefined;
      id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgEnablePool>]: never }
  >(
    object: I_1
  ): MsgEnablePool;
};
export declare const MsgEnablePoolResponse: {
  encode(_: MsgEnablePoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEnablePoolResponse;
  fromJSON(_: any): MsgEnablePoolResponse;
  toJSON(_: MsgEnablePoolResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgEnablePoolResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgEnablePoolResponse;
};
export declare const MsgScheduleRuntimeUpgrade: {
  encode(message: MsgScheduleRuntimeUpgrade, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgScheduleRuntimeUpgrade;
  fromJSON(object: any): MsgScheduleRuntimeUpgrade;
  toJSON(message: MsgScheduleRuntimeUpgrade): unknown;
  create<
    I extends {
      authority?: string | undefined;
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
    } & {
      authority?: string | undefined;
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgScheduleRuntimeUpgrade>]: never }
  >(
    base?: I | undefined
  ): MsgScheduleRuntimeUpgrade;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
    } & {
      authority?: string | undefined;
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgScheduleRuntimeUpgrade>]: never }
  >(
    object: I_1
  ): MsgScheduleRuntimeUpgrade;
};
export declare const MsgScheduleRuntimeUpgradeResponse: {
  encode(_: MsgScheduleRuntimeUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgScheduleRuntimeUpgradeResponse;
  fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse;
  toJSON(_: MsgScheduleRuntimeUpgradeResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgScheduleRuntimeUpgradeResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgScheduleRuntimeUpgradeResponse;
};
export declare const MsgCancelRuntimeUpgrade: {
  encode(message: MsgCancelRuntimeUpgrade, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelRuntimeUpgrade;
  fromJSON(object: any): MsgCancelRuntimeUpgrade;
  toJSON(message: MsgCancelRuntimeUpgrade): unknown;
  create<
    I extends {
      authority?: string | undefined;
      runtime?: string | undefined;
    } & {
      authority?: string | undefined;
      runtime?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCancelRuntimeUpgrade>]: never }
  >(
    base?: I | undefined
  ): MsgCancelRuntimeUpgrade;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      runtime?: string | undefined;
    } & {
      authority?: string | undefined;
      runtime?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgCancelRuntimeUpgrade>]: never }
  >(
    object: I_1
  ): MsgCancelRuntimeUpgrade;
};
export declare const MsgCancelRuntimeUpgradeResponse: {
  encode(_: MsgCancelRuntimeUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelRuntimeUpgradeResponse;
  fromJSON(_: any): MsgCancelRuntimeUpgradeResponse;
  toJSON(_: MsgCancelRuntimeUpgradeResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgCancelRuntimeUpgradeResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgCancelRuntimeUpgradeResponse;
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
  /**
   * CreatePool defines a governance operation for creating a new pool.
   * The authority is hard-coded to the x/gov module account.
   */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /**
   * UpdatePool defines a governance operation for updating an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  /**
   * DisablePool defines a governance operation for disabling an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  DisablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse>;
  /**
   * EnablePool defines a governance operation for enabling an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  EnablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse>;
  /**
   * ScheduleRuntimeUpgrade defines a governance operation for scheduling a runtime upgrade.
   * The authority is hard-coded to the x/gov module account.
   */
  ScheduleRuntimeUpgrade(
    request: MsgScheduleRuntimeUpgrade
  ): Promise<MsgScheduleRuntimeUpgradeResponse>;
  /**
   * CancelRuntimeUpgrade defines a governance operation for cancelling a runtime upgrade.
   * The authority is hard-coded to the x/gov module account.
   */
  CancelRuntimeUpgrade(
    request: MsgCancelRuntimeUpgrade
  ): Promise<MsgCancelRuntimeUpgradeResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/pool module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgServiceName = "kyve.pool.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  DisablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse>;
  EnablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse>;
  ScheduleRuntimeUpgrade(
    request: MsgScheduleRuntimeUpgrade
  ): Promise<MsgScheduleRuntimeUpgradeResponse>;
  CancelRuntimeUpgrade(
    request: MsgCancelRuntimeUpgrade
  ): Promise<MsgCancelRuntimeUpgradeResponse>;
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
