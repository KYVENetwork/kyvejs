import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/** BundleStatus ... */
export declare enum BundleStatus {
    /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
    BUNDLE_STATUS_UNSPECIFIED = "BUNDLE_STATUS_UNSPECIFIED",
    /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
    BUNDLE_STATUS_VALID = "BUNDLE_STATUS_VALID",
    /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
    BUNDLE_STATUS_INVALID = "BUNDLE_STATUS_INVALID",
    /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
    BUNDLE_STATUS_NO_FUNDS = "BUNDLE_STATUS_NO_FUNDS",
    /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
    BUNDLE_STATUS_NO_QUORUM = "BUNDLE_STATUS_NO_QUORUM",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function bundleStatusFromJSON(object: any): BundleStatus;
export declare function bundleStatusToJSON(object: BundleStatus): string;
export declare function bundleStatusToNumber(object: BundleStatus): number;
/** BundleProposal ... */
export interface BundleProposal {
    /** pool_id ... */
    pool_id: string;
    /** storage_id ... */
    storage_id: string;
    /** uploader ... */
    uploader: string;
    /** next_uploader ... */
    next_uploader: string;
    /** data_size ... */
    data_size: string;
    /** bundle_size ... */
    bundle_size: string;
    /** to_key ... */
    to_key: string;
    /** bundle_summary ... */
    bundle_summary: string;
    /** data_hash ... */
    data_hash: string;
    /** updated_at ... */
    updated_at: string;
    /** voters_valid ... */
    voters_valid: string[];
    /** voters_invalid ... */
    voters_invalid: string[];
    /** voters_abstain ... */
    voters_abstain: string[];
    /** from_key ... */
    from_key: string;
    /** storage_provider_id ... */
    storage_provider_id: number;
    /** compression_id ... */
    compression_id: number;
}
/** Proposal ... */
export interface FinalizedBundle {
    /** pool_id ... */
    pool_id: string;
    /** id ... */
    id: string;
    /** storage_id ... */
    storage_id: string;
    /** uploader ... */
    uploader: string;
    /** from_index ... */
    from_index: string;
    /** to_index ... */
    to_index: string;
    /** to_key ... */
    to_key: string;
    /** bundle_summary ... */
    bundle_summary: string;
    /** bundle_hash ... */
    data_hash: string;
    /** finalized_at ... */
    finalized_at: string;
    /** from_key ... */
    from_key: string;
    /** storage_provider_id ... */
    storage_provider_id: number;
    /** compression_id ... */
    compression_id: number;
}
export declare const BundleProposal: {
    encode(message: BundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal;
    fromJSON(object: any): BundleProposal;
    toJSON(message: BundleProposal): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        storage_id?: string | undefined;
        uploader?: string | undefined;
        next_uploader?: string | undefined;
        data_size?: string | undefined;
        bundle_size?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
        data_hash?: string | undefined;
        updated_at?: string | undefined;
        voters_valid?: string[] | undefined;
        voters_invalid?: string[] | undefined;
        voters_abstain?: string[] | undefined;
        from_key?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & {
        pool_id?: string | undefined;
        storage_id?: string | undefined;
        uploader?: string | undefined;
        next_uploader?: string | undefined;
        data_size?: string | undefined;
        bundle_size?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
        data_hash?: string | undefined;
        updated_at?: string | undefined;
        voters_valid?: (string[] & string[] & { [K in Exclude<keyof I["voters_valid"], keyof string[]>]: never; }) | undefined;
        voters_invalid?: (string[] & string[] & { [K_1 in Exclude<keyof I["voters_invalid"], keyof string[]>]: never; }) | undefined;
        voters_abstain?: (string[] & string[] & { [K_2 in Exclude<keyof I["voters_abstain"], keyof string[]>]: never; }) | undefined;
        from_key?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & { [K_3 in Exclude<keyof I, keyof BundleProposal>]: never; }>(object: I): BundleProposal;
};
export declare const FinalizedBundle: {
    encode(message: FinalizedBundle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedBundle;
    fromJSON(object: any): FinalizedBundle;
    toJSON(message: FinalizedBundle): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        id?: string | undefined;
        storage_id?: string | undefined;
        uploader?: string | undefined;
        from_index?: string | undefined;
        to_index?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
        data_hash?: string | undefined;
        finalized_at?: string | undefined;
        from_key?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & {
        pool_id?: string | undefined;
        id?: string | undefined;
        storage_id?: string | undefined;
        uploader?: string | undefined;
        from_index?: string | undefined;
        to_index?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
        data_hash?: string | undefined;
        finalized_at?: string | undefined;
        from_key?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof FinalizedBundle>]: never; }>(object: I): FinalizedBundle;
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
