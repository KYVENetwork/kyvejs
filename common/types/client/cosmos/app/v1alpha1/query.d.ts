import _m0 from "protobufjs/minimal";
import { Config } from "./config";
export declare const protobufPackage = "cosmos.app.v1alpha1";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
    /** config is the current app config. */
    config?: Config;
}
export declare const QueryConfigRequest: {
    encode(_: QueryConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest;
    fromJSON(_: any): QueryConfigRequest;
    toJSON(_: QueryConfigRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryConfigRequest;
};
export declare const QueryConfigResponse: {
    encode(message: QueryConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse;
    fromJSON(object: any): QueryConfigResponse;
    toJSON(message: QueryConfigResponse): unknown;
    fromPartial<I extends {
        config?: {
            modules?: {
                name?: string | undefined;
                config?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        config?: ({
            modules?: {
                name?: string | undefined;
                config?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            modules?: ({
                name?: string | undefined;
                config?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                name?: string | undefined;
                config?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                config?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["config"]["modules"][number]["config"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["config"]["modules"][number], keyof import("./config").ModuleConfig>]: never; })[] & { [K_2 in Exclude<keyof I["config"]["modules"], keyof {
                name?: string | undefined;
                config?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["config"], "modules">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "config">]: never; }>(object: I): QueryConfigResponse;
};
/** Query is the app module query service. */
export interface Query {
    /** Config returns the current app config. */
    Config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
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
