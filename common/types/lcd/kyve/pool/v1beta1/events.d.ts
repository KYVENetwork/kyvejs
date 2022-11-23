import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.pool.v1beta1";
/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePool {
    /** id ... */
    id: string;
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
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount ... */
    amount: string;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount ... */
    amount: string;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashed {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount ... */
    amount: string;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
}
export declare const EventCreatePool: {
    encode(message: EventCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePool;
    fromJSON(object: any): EventCreatePool;
    toJSON(message: EventCreatePool): unknown;
    fromPartial<I extends {
        id?: string | undefined;
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
        id?: string | undefined;
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
    } & { [K in Exclude<keyof I, keyof EventCreatePool>]: never; }>(object: I): EventCreatePool;
};
export declare const EventFundPool: {
    encode(message: EventFundPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFundPool;
    fromJSON(object: any): EventFundPool;
    toJSON(message: EventFundPool): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        address?: string | undefined;
        amount?: string | undefined;
    } & {
        pool_id?: string | undefined;
        address?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventFundPool>]: never; }>(object: I): EventFundPool;
};
export declare const EventDefundPool: {
    encode(message: EventDefundPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDefundPool;
    fromJSON(object: any): EventDefundPool;
    toJSON(message: EventDefundPool): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        address?: string | undefined;
        amount?: string | undefined;
    } & {
        pool_id?: string | undefined;
        address?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventDefundPool>]: never; }>(object: I): EventDefundPool;
};
export declare const EventPoolFundsSlashed: {
    encode(message: EventPoolFundsSlashed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolFundsSlashed;
    fromJSON(object: any): EventPoolFundsSlashed;
    toJSON(message: EventPoolFundsSlashed): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        address?: string | undefined;
        amount?: string | undefined;
    } & {
        pool_id?: string | undefined;
        address?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventPoolFundsSlashed>]: never; }>(object: I): EventPoolFundsSlashed;
};
export declare const EventPoolOutOfFunds: {
    encode(message: EventPoolOutOfFunds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolOutOfFunds;
    fromJSON(object: any): EventPoolOutOfFunds;
    toJSON(message: EventPoolOutOfFunds): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
    } & {
        pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, "pool_id">]: never; }>(object: I): EventPoolOutOfFunds;
};
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
