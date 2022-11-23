import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FinalizedBundle } from "../../bundles/v1beta1/bundles";
export declare const protobufPackage = "kyve.query.v1beta1";
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    pool_id: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
    /** finalized_bundles ... */
    finalized_bundles: FinalizedBundle[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
    /** pool_id ... */
    pool_id: string;
    /** id ... */
    id: string;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
    /** finalized_bundle ... */
    finalized_bundle?: FinalizedBundle;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleByStorageIdRequest {
    /** pool_id ... */
    storage_id: string;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleByStorageIdResponse {
    /** finalized_bundle ... */
    finalized_bundle?: FinalizedBundle;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesByHeightRequest {
    /** pool_id ... */
    pool_id: string;
    /** id ... */
    height: string;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesByHeightResponse {
    /** finalized_bundle ... */
    finalized_bundle?: FinalizedBundle;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
    /** pool_id ... */
    pool_id: string;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
    /** valid ... */
    valid: string;
    /** invalid ... */
    invalid: string;
    /** abstain ... */
    abstain: string;
    /** total ... */
    total: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** valaddress ... */
    valaddress: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** proposer ... */
    proposer: string;
    /** from_index ... */
    from_index: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** voter ... */
    voter: string;
    /** storage_id ... */
    storage_id: string;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
export declare const QueryFinalizedBundlesRequest: {
    encode(message: QueryFinalizedBundlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesRequest;
    fromJSON(object: any): QueryFinalizedBundlesRequest;
    toJSON(message: QueryFinalizedBundlesRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        pool_id?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
        pool_id?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryFinalizedBundlesRequest>]: never; }>(object: I): QueryFinalizedBundlesRequest;
};
export declare const QueryFinalizedBundlesResponse: {
    encode(message: QueryFinalizedBundlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesResponse;
    fromJSON(object: any): QueryFinalizedBundlesResponse;
    toJSON(message: QueryFinalizedBundlesResponse): unknown;
    fromPartial<I extends {
        finalized_bundles?: {
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
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        finalized_bundles?: ({
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
        }[] & ({
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
        } & { [K in Exclude<keyof I["finalized_bundles"][number], keyof FinalizedBundle>]: never; })[] & { [K_1 in Exclude<keyof I["finalized_bundles"], keyof {
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
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryFinalizedBundlesResponse>]: never; }>(object: I): QueryFinalizedBundlesResponse;
};
export declare const QueryFinalizedBundleRequest: {
    encode(message: QueryFinalizedBundleRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleRequest;
    fromJSON(object: any): QueryFinalizedBundleRequest;
    toJSON(message: QueryFinalizedBundleRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        id?: string | undefined;
    } & {
        pool_id?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryFinalizedBundleRequest>]: never; }>(object: I): QueryFinalizedBundleRequest;
};
export declare const QueryFinalizedBundleResponse: {
    encode(message: QueryFinalizedBundleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleResponse;
    fromJSON(object: any): QueryFinalizedBundleResponse;
    toJSON(message: QueryFinalizedBundleResponse): unknown;
    fromPartial<I extends {
        finalized_bundle?: {
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
        } | undefined;
    } & {
        finalized_bundle?: ({
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
        } & { [K in Exclude<keyof I["finalized_bundle"], keyof FinalizedBundle>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "finalized_bundle">]: never; }>(object: I): QueryFinalizedBundleResponse;
};
export declare const QueryFinalizedBundleByStorageIdRequest: {
    encode(message: QueryFinalizedBundleByStorageIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleByStorageIdRequest;
    fromJSON(object: any): QueryFinalizedBundleByStorageIdRequest;
    toJSON(message: QueryFinalizedBundleByStorageIdRequest): unknown;
    fromPartial<I extends {
        storage_id?: string | undefined;
    } & {
        storage_id?: string | undefined;
    } & { [K in Exclude<keyof I, "storage_id">]: never; }>(object: I): QueryFinalizedBundleByStorageIdRequest;
};
export declare const QueryFinalizedBundleByStorageIdResponse: {
    encode(message: QueryFinalizedBundleByStorageIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleByStorageIdResponse;
    fromJSON(object: any): QueryFinalizedBundleByStorageIdResponse;
    toJSON(message: QueryFinalizedBundleByStorageIdResponse): unknown;
    fromPartial<I extends {
        finalized_bundle?: {
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
        } | undefined;
    } & {
        finalized_bundle?: ({
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
        } & { [K in Exclude<keyof I["finalized_bundle"], keyof FinalizedBundle>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "finalized_bundle">]: never; }>(object: I): QueryFinalizedBundleByStorageIdResponse;
};
export declare const QueryFinalizedBundlesByHeightRequest: {
    encode(message: QueryFinalizedBundlesByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesByHeightRequest;
    fromJSON(object: any): QueryFinalizedBundlesByHeightRequest;
    toJSON(message: QueryFinalizedBundlesByHeightRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        height?: string | undefined;
    } & {
        pool_id?: string | undefined;
        height?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryFinalizedBundlesByHeightRequest>]: never; }>(object: I): QueryFinalizedBundlesByHeightRequest;
};
export declare const QueryFinalizedBundlesByHeightResponse: {
    encode(message: QueryFinalizedBundlesByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesByHeightResponse;
    fromJSON(object: any): QueryFinalizedBundlesByHeightResponse;
    toJSON(message: QueryFinalizedBundlesByHeightResponse): unknown;
    fromPartial<I extends {
        finalized_bundle?: {
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
        } | undefined;
    } & {
        finalized_bundle?: ({
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
        } & { [K in Exclude<keyof I["finalized_bundle"], keyof FinalizedBundle>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "finalized_bundle">]: never; }>(object: I): QueryFinalizedBundlesByHeightResponse;
};
export declare const QueryCurrentVoteStatusRequest: {
    encode(message: QueryCurrentVoteStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentVoteStatusRequest;
    fromJSON(object: any): QueryCurrentVoteStatusRequest;
    toJSON(message: QueryCurrentVoteStatusRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
    } & {
        pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, "pool_id">]: never; }>(object: I): QueryCurrentVoteStatusRequest;
};
export declare const QueryCurrentVoteStatusResponse: {
    encode(message: QueryCurrentVoteStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentVoteStatusResponse;
    fromJSON(object: any): QueryCurrentVoteStatusResponse;
    toJSON(message: QueryCurrentVoteStatusResponse): unknown;
    fromPartial<I extends {
        valid?: string | undefined;
        invalid?: string | undefined;
        abstain?: string | undefined;
        total?: string | undefined;
    } & {
        valid?: string | undefined;
        invalid?: string | undefined;
        abstain?: string | undefined;
        total?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCurrentVoteStatusResponse>]: never; }>(object: I): QueryCurrentVoteStatusResponse;
};
export declare const QueryCanValidateRequest: {
    encode(message: QueryCanValidateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanValidateRequest;
    fromJSON(object: any): QueryCanValidateRequest;
    toJSON(message: QueryCanValidateRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        valaddress?: string | undefined;
    } & {
        pool_id?: string | undefined;
        valaddress?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanValidateRequest>]: never; }>(object: I): QueryCanValidateRequest;
};
export declare const QueryCanValidateResponse: {
    encode(message: QueryCanValidateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanValidateResponse;
    fromJSON(object: any): QueryCanValidateResponse;
    toJSON(message: QueryCanValidateResponse): unknown;
    fromPartial<I extends {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanValidateResponse>]: never; }>(object: I): QueryCanValidateResponse;
};
export declare const QueryCanProposeRequest: {
    encode(message: QueryCanProposeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeRequest;
    fromJSON(object: any): QueryCanProposeRequest;
    toJSON(message: QueryCanProposeRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        proposer?: string | undefined;
        from_index?: string | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        proposer?: string | undefined;
        from_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanProposeRequest>]: never; }>(object: I): QueryCanProposeRequest;
};
export declare const QueryCanProposeResponse: {
    encode(message: QueryCanProposeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeResponse;
    fromJSON(object: any): QueryCanProposeResponse;
    toJSON(message: QueryCanProposeResponse): unknown;
    fromPartial<I extends {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanProposeResponse>]: never; }>(object: I): QueryCanProposeResponse;
};
export declare const QueryCanVoteRequest: {
    encode(message: QueryCanVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteRequest;
    fromJSON(object: any): QueryCanVoteRequest;
    toJSON(message: QueryCanVoteRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        voter?: string | undefined;
        storage_id?: string | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        voter?: string | undefined;
        storage_id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanVoteRequest>]: never; }>(object: I): QueryCanVoteRequest;
};
export declare const QueryCanVoteResponse: {
    encode(message: QueryCanVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteResponse;
    fromJSON(object: any): QueryCanVoteResponse;
    toJSON(message: QueryCanVoteResponse): unknown;
    fromPartial<I extends {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanVoteResponse>]: never; }>(object: I): QueryCanVoteResponse;
};
/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryBundles {
    /** FinalizedBundles ... */
    FinalizedBundles(request: QueryFinalizedBundlesRequest): Promise<QueryFinalizedBundlesResponse>;
    /** FinalizedBundle ... */
    FinalizedBundle(request: QueryFinalizedBundleRequest): Promise<QueryFinalizedBundleResponse>;
    /** StorageID -> single */
    FinalizedBundleByStorageId(request: QueryFinalizedBundleByStorageIdRequest): Promise<QueryFinalizedBundleByStorageIdResponse>;
    /** Queries the bundle which contains the data given height */
    FinalizedBundlesByHeight(request: QueryFinalizedBundlesByHeightRequest): Promise<QueryFinalizedBundlesByHeightResponse>;
    /** CurrentVoteStatus ... */
    CurrentVoteStatus(request: QueryCurrentVoteStatusRequest): Promise<QueryCurrentVoteStatusResponse>;
    /** CanValidate ... */
    CanValidate(request: QueryCanValidateRequest): Promise<QueryCanValidateResponse>;
    /** CanPropose ... */
    CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
    /** CanVote checks if voter on pool can still vote for the given bundle */
    CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
}
export declare class QueryBundlesClientImpl implements QueryBundles {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    FinalizedBundles(request: QueryFinalizedBundlesRequest): Promise<QueryFinalizedBundlesResponse>;
    FinalizedBundle(request: QueryFinalizedBundleRequest): Promise<QueryFinalizedBundleResponse>;
    FinalizedBundleByStorageId(request: QueryFinalizedBundleByStorageIdRequest): Promise<QueryFinalizedBundleByStorageIdResponse>;
    FinalizedBundlesByHeight(request: QueryFinalizedBundlesByHeightRequest): Promise<QueryFinalizedBundlesByHeightResponse>;
    CurrentVoteStatus(request: QueryCurrentVoteStatusRequest): Promise<QueryCurrentVoteStatusResponse>;
    CanValidate(request: QueryCanValidateRequest): Promise<QueryCanValidateResponse>;
    CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
    CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
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
