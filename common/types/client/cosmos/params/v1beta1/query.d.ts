import _m0 from "protobufjs/minimal";
import { ParamChange } from "./params";
export declare const protobufPackage = "cosmos.params.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /** subspace defines the module to query the parameter for. */
    subspace: string;
    /** key defines the key of the parameter in the subspace. */
    key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** param defines the queried parameter. */
    param?: ParamChange;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequest {
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponse {
    subspaces: Subspace[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface Subspace {
    subspace: string;
    keys: string[];
}
export declare const QueryParamsRequest: {
    encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial<I extends {
        subspace?: string | undefined;
        key?: string | undefined;
    } & {
        subspace?: string | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryParamsRequest>]: never; }>(object: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        param?: {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } | undefined;
    } & {
        param?: ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & { [K in Exclude<keyof I["param"], keyof ParamChange>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "param">]: never; }>(object: I): QueryParamsResponse;
};
export declare const QuerySubspacesRequest: {
    encode(_: QuerySubspacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesRequest;
    fromJSON(_: any): QuerySubspacesRequest;
    toJSON(_: QuerySubspacesRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QuerySubspacesRequest;
};
export declare const QuerySubspacesResponse: {
    encode(message: QuerySubspacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubspacesResponse;
    fromJSON(object: any): QuerySubspacesResponse;
    toJSON(message: QuerySubspacesResponse): unknown;
    fromPartial<I extends {
        subspaces?: {
            subspace?: string | undefined;
            keys?: string[] | undefined;
        }[] | undefined;
    } & {
        subspaces?: ({
            subspace?: string | undefined;
            keys?: string[] | undefined;
        }[] & ({
            subspace?: string | undefined;
            keys?: string[] | undefined;
        } & {
            subspace?: string | undefined;
            keys?: (string[] & string[] & { [K in Exclude<keyof I["subspaces"][number]["keys"], keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["subspaces"][number], keyof Subspace>]: never; })[] & { [K_2 in Exclude<keyof I["subspaces"], keyof {
            subspace?: string | undefined;
            keys?: string[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "subspaces">]: never; }>(object: I): QuerySubspacesResponse;
};
export declare const Subspace: {
    encode(message: Subspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Subspace;
    fromJSON(object: any): Subspace;
    toJSON(message: Subspace): unknown;
    fromPartial<I extends {
        subspace?: string | undefined;
        keys?: string[] | undefined;
    } & {
        subspace?: string | undefined;
        keys?: (string[] & string[] & { [K in Exclude<keyof I["keys"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Subspace>]: never; }>(object: I): Subspace;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */
    Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
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
