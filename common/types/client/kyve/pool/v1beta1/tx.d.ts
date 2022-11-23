import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** amount ... */
    amount: string;
}
/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** amount ... */
    amount: string;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {
}
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
    /** operating_cost ... */
    operating_cost: string;
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
export interface MsgCreatePoolResponse {
}
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
export interface MsgUpdatePoolResponse {
}
/** MsgPausePool defines a SDK message for pausing an existing pool. */
export interface MsgPausePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: string;
}
/** MsgPausePoolResponse defines the Msg/PausePool response type. */
export interface MsgPausePoolResponse {
}
/** MsgUnpausePool defines a SDK message for unpausing an existing pool. */
export interface MsgUnpausePool {
    /** authority is the address of the governance account. */
    authority: string;
    /** id ... */
    id: string;
}
/** MsgUnpausePoolResponse defines the Msg/UnpausePool response type. */
export interface MsgUnpausePoolResponse {
}
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
export interface MsgScheduleRuntimeUpgradeResponse {
}
/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** runtime ... */
    runtime: string;
}
/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {
}
export declare const MsgFundPool: {
    encode(message: MsgFundPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPool;
    fromJSON(object: any): MsgFundPool;
    toJSON(message: MsgFundPool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgFundPool>]: never; }>(object: I): MsgFundPool;
};
export declare const MsgFundPoolResponse: {
    encode(_: MsgFundPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPoolResponse;
    fromJSON(_: any): MsgFundPoolResponse;
    toJSON(_: MsgFundPoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgFundPoolResponse;
};
export declare const MsgDefundPool: {
    encode(message: MsgDefundPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPool;
    fromJSON(object: any): MsgDefundPool;
    toJSON(message: MsgDefundPool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDefundPool>]: never; }>(object: I): MsgDefundPool;
};
export declare const MsgDefundPoolResponse: {
    encode(_: MsgDefundPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPoolResponse;
    fromJSON(_: any): MsgDefundPoolResponse;
    toJSON(_: MsgDefundPoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgDefundPoolResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        config?: string | undefined;
        start_key?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
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
        operating_cost?: string | undefined;
        min_delegation?: string | undefined;
        max_bundle_size?: string | undefined;
        version?: string | undefined;
        binaries?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreatePool>]: never; }>(object: I): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(_: any): MsgCreatePoolResponse;
    toJSON(_: MsgCreatePoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCreatePoolResponse;
};
export declare const MsgUpdatePool: {
    encode(message: MsgUpdatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool;
    fromJSON(object: any): MsgUpdatePool;
    toJSON(message: MsgUpdatePool): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        id?: string | undefined;
        payload?: string | undefined;
    } & {
        authority?: string | undefined;
        id?: string | undefined;
        payload?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdatePool>]: never; }>(object: I): MsgUpdatePool;
};
export declare const MsgUpdatePoolResponse: {
    encode(_: MsgUpdatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse;
    fromJSON(_: any): MsgUpdatePoolResponse;
    toJSON(_: MsgUpdatePoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdatePoolResponse;
};
export declare const MsgPausePool: {
    encode(message: MsgPausePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPausePool;
    fromJSON(object: any): MsgPausePool;
    toJSON(message: MsgPausePool): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        id?: string | undefined;
    } & {
        authority?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgPausePool>]: never; }>(object: I): MsgPausePool;
};
export declare const MsgPausePoolResponse: {
    encode(_: MsgPausePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPausePoolResponse;
    fromJSON(_: any): MsgPausePoolResponse;
    toJSON(_: MsgPausePoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgPausePoolResponse;
};
export declare const MsgUnpausePool: {
    encode(message: MsgUnpausePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnpausePool;
    fromJSON(object: any): MsgUnpausePool;
    toJSON(message: MsgUnpausePool): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        id?: string | undefined;
    } & {
        authority?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUnpausePool>]: never; }>(object: I): MsgUnpausePool;
};
export declare const MsgUnpausePoolResponse: {
    encode(_: MsgUnpausePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnpausePoolResponse;
    fromJSON(_: any): MsgUnpausePoolResponse;
    toJSON(_: MsgUnpausePoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUnpausePoolResponse;
};
export declare const MsgScheduleRuntimeUpgrade: {
    encode(message: MsgScheduleRuntimeUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleRuntimeUpgrade;
    fromJSON(object: any): MsgScheduleRuntimeUpgrade;
    toJSON(message: MsgScheduleRuntimeUpgrade): unknown;
    fromPartial<I extends {
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
    } & { [K in Exclude<keyof I, keyof MsgScheduleRuntimeUpgrade>]: never; }>(object: I): MsgScheduleRuntimeUpgrade;
};
export declare const MsgScheduleRuntimeUpgradeResponse: {
    encode(_: MsgScheduleRuntimeUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleRuntimeUpgradeResponse;
    fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse;
    toJSON(_: MsgScheduleRuntimeUpgradeResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgScheduleRuntimeUpgradeResponse;
};
export declare const MsgCancelRuntimeUpgrade: {
    encode(message: MsgCancelRuntimeUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRuntimeUpgrade;
    fromJSON(object: any): MsgCancelRuntimeUpgrade;
    toJSON(message: MsgCancelRuntimeUpgrade): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        runtime?: string | undefined;
    } & {
        authority?: string | undefined;
        runtime?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCancelRuntimeUpgrade>]: never; }>(object: I): MsgCancelRuntimeUpgrade;
};
export declare const MsgCancelRuntimeUpgradeResponse: {
    encode(_: MsgCancelRuntimeUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRuntimeUpgradeResponse;
    fromJSON(_: any): MsgCancelRuntimeUpgradeResponse;
    toJSON(_: MsgCancelRuntimeUpgradeResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCancelRuntimeUpgradeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** FundPool ... */
    FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    /** DefundPool ... */
    DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
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
     * PausingPool defines a governance operation for pausing an existing pool.
     * The authority is hard-coded to the x/gov module account.
     */
    PausePool(request: MsgPausePool): Promise<MsgPausePoolResponse>;
    /**
     * UnpausePool defines a governance operation for unpausing an existing pool.
     * The authority is hard-coded to the x/gov module account.
     */
    UnpausePool(request: MsgUnpausePool): Promise<MsgUnpausePoolResponse>;
    /**
     * ScheduleRuntimeUpgrade defines a governance operation for scheduling a runtime upgrade.
     * The authority is hard-coded to the x/gov module account.
     */
    ScheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse>;
    /**
     * CancelRuntimeUpgrade defines a governance operation for cancelling a runtime upgrade.
     * The authority is hard-coded to the x/gov module account.
     */
    CancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    PausePool(request: MsgPausePool): Promise<MsgPausePoolResponse>;
    UnpausePool(request: MsgUnpausePool): Promise<MsgUnpausePoolResponse>;
    ScheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse>;
    CancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
