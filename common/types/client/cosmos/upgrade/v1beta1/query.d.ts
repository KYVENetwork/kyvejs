import _m0 from "protobufjs/minimal";
import { ModuleVersion, Plan } from "./upgrade";
export declare const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
    /** plan is the current upgrade plan. */
    plan?: Plan;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
    /** name is the name of the applied plan to query for. */
    name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
    /** height is the block height at which the plan was applied. */
    height: string;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateRequest {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    last_height: string;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Since: cosmos-sdk 0.43 */
    upgraded_consensus_state: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
    /**
     * module_name is a field to query a specific module
     * consensus version from state. Leaving this empty will
     * fetch the full list of module versions from state
     */
    module_name: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
    /** module_versions is a list of module names with their consensus versions. */
    module_versions: ModuleVersion[];
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
    address: string;
}
export declare const QueryCurrentPlanRequest: {
    encode(_: QueryCurrentPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanRequest;
    fromJSON(_: any): QueryCurrentPlanRequest;
    toJSON(_: QueryCurrentPlanRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryCurrentPlanRequest;
};
export declare const QueryCurrentPlanResponse: {
    encode(message: QueryCurrentPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanResponse;
    fromJSON(object: any): QueryCurrentPlanResponse;
    toJSON(message: QueryCurrentPlanResponse): unknown;
    fromPartial<I extends {
        plan?: {
            name?: string | undefined;
            time?: Date | undefined;
            height?: string | undefined;
            info?: string | undefined;
            upgraded_client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        plan?: ({
            name?: string | undefined;
            time?: Date | undefined;
            height?: string | undefined;
            info?: string | undefined;
            upgraded_client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            time?: Date | undefined;
            height?: string | undefined;
            info?: string | undefined;
            upgraded_client_state?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["plan"]["upgraded_client_state"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["plan"], keyof Plan>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "plan">]: never; }>(object: I): QueryCurrentPlanResponse;
};
export declare const QueryAppliedPlanRequest: {
    encode(message: QueryAppliedPlanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanRequest;
    fromJSON(object: any): QueryAppliedPlanRequest;
    toJSON(message: QueryAppliedPlanRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & { [K in Exclude<keyof I, "name">]: never; }>(object: I): QueryAppliedPlanRequest;
};
export declare const QueryAppliedPlanResponse: {
    encode(message: QueryAppliedPlanResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanResponse;
    fromJSON(object: any): QueryAppliedPlanResponse;
    toJSON(message: QueryAppliedPlanResponse): unknown;
    fromPartial<I extends {
        height?: string | undefined;
    } & {
        height?: string | undefined;
    } & { [K in Exclude<keyof I, "height">]: never; }>(object: I): QueryAppliedPlanResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(message: QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(object: any): QueryUpgradedConsensusStateRequest;
    toJSON(message: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial<I extends {
        last_height?: string | undefined;
    } & {
        last_height?: string | undefined;
    } & { [K in Exclude<keyof I, "last_height">]: never; }>(object: I): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial<I extends {
        upgraded_consensus_state?: Uint8Array | undefined;
    } & {
        upgraded_consensus_state?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "upgraded_consensus_state">]: never; }>(object: I): QueryUpgradedConsensusStateResponse;
};
export declare const QueryModuleVersionsRequest: {
    encode(message: QueryModuleVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsRequest;
    fromJSON(object: any): QueryModuleVersionsRequest;
    toJSON(message: QueryModuleVersionsRequest): unknown;
    fromPartial<I extends {
        module_name?: string | undefined;
    } & {
        module_name?: string | undefined;
    } & { [K in Exclude<keyof I, "module_name">]: never; }>(object: I): QueryModuleVersionsRequest;
};
export declare const QueryModuleVersionsResponse: {
    encode(message: QueryModuleVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsResponse;
    fromJSON(object: any): QueryModuleVersionsResponse;
    toJSON(message: QueryModuleVersionsResponse): unknown;
    fromPartial<I extends {
        module_versions?: {
            name?: string | undefined;
            version?: string | undefined;
        }[] | undefined;
    } & {
        module_versions?: ({
            name?: string | undefined;
            version?: string | undefined;
        }[] & ({
            name?: string | undefined;
            version?: string | undefined;
        } & {
            name?: string | undefined;
            version?: string | undefined;
        } & { [K in Exclude<keyof I["module_versions"][number], keyof ModuleVersion>]: never; })[] & { [K_1 in Exclude<keyof I["module_versions"], keyof {
            name?: string | undefined;
            version?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "module_versions">]: never; }>(object: I): QueryModuleVersionsResponse;
};
export declare const QueryAuthorityRequest: {
    encode(_: QueryAuthorityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityRequest;
    fromJSON(_: any): QueryAuthorityRequest;
    toJSON(_: QueryAuthorityRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryAuthorityRequest;
};
export declare const QueryAuthorityResponse: {
    encode(message: QueryAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityResponse;
    fromJSON(object: any): QueryAuthorityResponse;
    toJSON(message: QueryAuthorityResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(object: I): QueryAuthorityResponse;
};
/** Query defines the gRPC upgrade querier service. */
export interface Query {
    /** CurrentPlan queries the current upgrade plan. */
    CurrentPlan(request: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     *
     * @deprecated
     */
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * Since: cosmos-sdk 0.43
     */
    ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    /** Returns the account with authority to conduct upgrades */
    Authority(request: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CurrentPlan(request: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    Authority(request: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
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
