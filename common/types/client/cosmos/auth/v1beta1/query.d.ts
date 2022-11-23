import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params } from "./auth";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: Any;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
    accounts: Any[];
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequest {
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponse {
    bech32_prefix: string;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequest {
    address_bytes: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponse {
    address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequest {
    address_string: string;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponse {
    address_bytes: Uint8Array;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial<I extends {
        accounts?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        accounts?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["accounts"][number], keyof Any>]: never; })[] & { [K_1 in Exclude<keyof I["accounts"], keyof {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryAccountsResponse>]: never; }>(object: I): QueryAccountsResponse;
};
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(object: I): QueryAccountRequest;
};
export declare const QueryModuleAccountsRequest: {
    encode(_: QueryModuleAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromJSON(_: any): QueryModuleAccountsRequest;
    toJSON(_: QueryModuleAccountsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryModuleAccountsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            max_memo_characters?: string | undefined;
            tx_sig_limit?: string | undefined;
            tx_size_cost_per_byte?: string | undefined;
            sig_verify_cost_ed25519?: string | undefined;
            sig_verify_cost_secp256k1?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            max_memo_characters?: string | undefined;
            tx_sig_limit?: string | undefined;
            tx_size_cost_per_byte?: string | undefined;
            sig_verify_cost_ed25519?: string | undefined;
            sig_verify_cost_secp256k1?: string | undefined;
        } & {
            max_memo_characters?: string | undefined;
            tx_sig_limit?: string | undefined;
            tx_size_cost_per_byte?: string | undefined;
            sig_verify_cost_ed25519?: string | undefined;
            sig_verify_cost_secp256k1?: string | undefined;
        } & { [K in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(object: I): QueryParamsResponse;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial<I extends {
        account?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        account?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["account"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "account">]: never; }>(object: I): QueryAccountResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryParamsRequest;
};
export declare const QueryModuleAccountsResponse: {
    encode(message: QueryModuleAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromJSON(object: any): QueryModuleAccountsResponse;
    toJSON(message: QueryModuleAccountsResponse): unknown;
    fromPartial<I extends {
        accounts?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        accounts?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["accounts"][number], keyof Any>]: never; })[] & { [K_1 in Exclude<keyof I["accounts"], keyof {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "accounts">]: never; }>(object: I): QueryModuleAccountsResponse;
};
export declare const Bech32PrefixRequest: {
    encode(_: Bech32PrefixRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromJSON(_: any): Bech32PrefixRequest;
    toJSON(_: Bech32PrefixRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): Bech32PrefixRequest;
};
export declare const Bech32PrefixResponse: {
    encode(message: Bech32PrefixResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromJSON(object: any): Bech32PrefixResponse;
    toJSON(message: Bech32PrefixResponse): unknown;
    fromPartial<I extends {
        bech32_prefix?: string | undefined;
    } & {
        bech32_prefix?: string | undefined;
    } & { [K in Exclude<keyof I, "bech32_prefix">]: never; }>(object: I): Bech32PrefixResponse;
};
export declare const AddressBytesToStringRequest: {
    encode(message: AddressBytesToStringRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromJSON(object: any): AddressBytesToStringRequest;
    toJSON(message: AddressBytesToStringRequest): unknown;
    fromPartial<I extends {
        address_bytes?: Uint8Array | undefined;
    } & {
        address_bytes?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "address_bytes">]: never; }>(object: I): AddressBytesToStringRequest;
};
export declare const AddressBytesToStringResponse: {
    encode(message: AddressBytesToStringResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromJSON(object: any): AddressBytesToStringResponse;
    toJSON(message: AddressBytesToStringResponse): unknown;
    fromPartial<I extends {
        address_string?: string | undefined;
    } & {
        address_string?: string | undefined;
    } & { [K in Exclude<keyof I, "address_string">]: never; }>(object: I): AddressBytesToStringResponse;
};
export declare const AddressStringToBytesRequest: {
    encode(message: AddressStringToBytesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromJSON(object: any): AddressStringToBytesRequest;
    toJSON(message: AddressStringToBytesRequest): unknown;
    fromPartial<I extends {
        address_string?: string | undefined;
    } & {
        address_string?: string | undefined;
    } & { [K in Exclude<keyof I, "address_string">]: never; }>(object: I): AddressStringToBytesRequest;
};
export declare const AddressStringToBytesResponse: {
    encode(message: AddressStringToBytesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromJSON(object: any): AddressStringToBytesResponse;
    toJSON(message: AddressStringToBytesResponse): unknown;
    fromPartial<I extends {
        address_bytes?: Uint8Array | undefined;
    } & {
        address_bytes?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "address_bytes">]: never; }>(object: I): AddressStringToBytesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    ModuleAccounts(request: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    AddressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    AddressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    ModuleAccounts(request: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    Bech32Prefix(request: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    AddressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    AddressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
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
