import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.store.v1beta1";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
    version: string;
    store_infos: StoreInfo[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
    name: string;
    commit_id?: CommitID;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
    version: string;
    hash: Uint8Array;
}
export declare const CommitInfo: {
    encode(message: CommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo;
    fromJSON(object: any): CommitInfo;
    toJSON(message: CommitInfo): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        store_infos?: {
            name?: string | undefined;
            commit_id?: {
                version?: string | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        version?: string | undefined;
        store_infos?: ({
            name?: string | undefined;
            commit_id?: {
                version?: string | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            commit_id?: {
                version?: string | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            commit_id?: ({
                version?: string | undefined;
                hash?: Uint8Array | undefined;
            } & {
                version?: string | undefined;
                hash?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["store_infos"][number]["commit_id"], keyof CommitID>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["store_infos"][number], keyof StoreInfo>]: never; })[] & { [K_2 in Exclude<keyof I["store_infos"], keyof {
            name?: string | undefined;
            commit_id?: {
                version?: string | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof CommitInfo>]: never; }>(object: I): CommitInfo;
};
export declare const StoreInfo: {
    encode(message: StoreInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo;
    fromJSON(object: any): StoreInfo;
    toJSON(message: StoreInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        commit_id?: {
            version?: string | undefined;
            hash?: Uint8Array | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        commit_id?: ({
            version?: string | undefined;
            hash?: Uint8Array | undefined;
        } & {
            version?: string | undefined;
            hash?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["commit_id"], keyof CommitID>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StoreInfo>]: never; }>(object: I): StoreInfo;
};
export declare const CommitID: {
    encode(message: CommitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommitID;
    fromJSON(object: any): CommitID;
    toJSON(message: CommitID): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        hash?: Uint8Array | undefined;
    } & {
        version?: string | undefined;
        hash?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof CommitID>]: never; }>(object: I): CommitID;
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
