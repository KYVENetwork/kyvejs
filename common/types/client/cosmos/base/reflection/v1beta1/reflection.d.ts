import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.reflection.v1beta1";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementation_message_names: string[];
}
export declare const ListAllInterfacesRequest: {
    encode(_: ListAllInterfacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesRequest;
    fromJSON(_: any): ListAllInterfacesRequest;
    toJSON(_: ListAllInterfacesRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): ListAllInterfacesRequest;
};
export declare const ListAllInterfacesResponse: {
    encode(message: ListAllInterfacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListAllInterfacesResponse;
    fromJSON(object: any): ListAllInterfacesResponse;
    toJSON(message: ListAllInterfacesResponse): unknown;
    fromPartial<I extends {
        interface_names?: string[] | undefined;
    } & {
        interface_names?: (string[] & string[] & { [K in Exclude<keyof I["interface_names"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "interface_names">]: never; }>(object: I): ListAllInterfacesResponse;
};
export declare const ListImplementationsRequest: {
    encode(message: ListImplementationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsRequest;
    fromJSON(object: any): ListImplementationsRequest;
    toJSON(message: ListImplementationsRequest): unknown;
    fromPartial<I extends {
        interface_name?: string | undefined;
    } & {
        interface_name?: string | undefined;
    } & { [K in Exclude<keyof I, "interface_name">]: never; }>(object: I): ListImplementationsRequest;
};
export declare const ListImplementationsResponse: {
    encode(message: ListImplementationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListImplementationsResponse;
    fromJSON(object: any): ListImplementationsResponse;
    toJSON(message: ListImplementationsResponse): unknown;
    fromPartial<I extends {
        implementation_message_names?: string[] | undefined;
    } & {
        implementation_message_names?: (string[] & string[] & { [K in Exclude<keyof I["implementation_message_names"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "implementation_message_names">]: never; }>(object: I): ListImplementationsResponse;
};
/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
    /**
     * ListAllInterfaces lists all the interfaces registered in the interface
     * registry.
     */
    ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
    /**
     * ListImplementations list all the concrete types that implement a given
     * interface.
     */
    ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    ListAllInterfaces(request: ListAllInterfacesRequest): Promise<ListAllInterfacesResponse>;
    ListImplementations(request: ListImplementationsRequest): Promise<ListImplementationsResponse>;
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
