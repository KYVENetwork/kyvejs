import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.store.v1beta1";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    store_key: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export declare const StoreKVPair: {
    encode(message: StoreKVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    fromPartial<I extends {
        store_key?: string | undefined;
        delete?: boolean | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        store_key?: string | undefined;
        delete?: boolean | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof StoreKVPair>]: never; }>(object: I): StoreKVPair;
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
