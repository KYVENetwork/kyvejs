import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
    class_id: string;
    owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
    amount: string;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    class_id: string;
    id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
    class_id: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: string;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
    class_id: string;
    owner: string;
    pagination?: PageRequest;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
    nfts: NFT[];
    pagination?: PageResponse;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    class_id: string;
    id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft?: NFT;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
    class_id: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
    class?: Class;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
    classes: Class[];
    pagination?: PageResponse;
}
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial<I extends {
        class_id?: string | undefined;
        owner?: string | undefined;
    } & {
        class_id?: string | undefined;
        owner?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryBalanceRequest>]: never; }>(object: I): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
    } & {
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, "amount">]: never; }>(object: I): QueryBalanceResponse;
};
export declare const QueryOwnerRequest: {
    encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerRequest;
    fromJSON(object: any): QueryOwnerRequest;
    toJSON(message: QueryOwnerRequest): unknown;
    fromPartial<I extends {
        class_id?: string | undefined;
        id?: string | undefined;
    } & {
        class_id?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryOwnerRequest>]: never; }>(object: I): QueryOwnerRequest;
};
export declare const QueryOwnerResponse: {
    encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerResponse;
    fromJSON(object: any): QueryOwnerResponse;
    toJSON(message: QueryOwnerResponse): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
    } & {
        owner?: string | undefined;
    } & { [K in Exclude<keyof I, "owner">]: never; }>(object: I): QueryOwnerResponse;
};
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(object: any): QuerySupplyRequest;
    toJSON(message: QuerySupplyRequest): unknown;
    fromPartial<I extends {
        class_id?: string | undefined;
    } & {
        class_id?: string | undefined;
    } & { [K in Exclude<keyof I, "class_id">]: never; }>(object: I): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
    } & {
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, "amount">]: never; }>(object: I): QuerySupplyResponse;
};
export declare const QueryNFTsRequest: {
    encode(message: QueryNFTsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsRequest;
    fromJSON(object: any): QueryNFTsRequest;
    toJSON(message: QueryNFTsRequest): unknown;
    fromPartial<I extends {
        class_id?: string | undefined;
        owner?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        class_id?: string | undefined;
        owner?: string | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof QueryNFTsRequest>]: never; }>(object: I): QueryNFTsRequest;
};
export declare const QueryNFTsResponse: {
    encode(message: QueryNFTsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTsResponse;
    fromJSON(object: any): QueryNFTsResponse;
    toJSON(message: QueryNFTsResponse): unknown;
    fromPartial<I extends {
        nfts?: {
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        nfts?: ({
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["nfts"][number], keyof NFT>]: never; })[] & { [K_2 in Exclude<keyof I["nfts"], keyof {
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryNFTsResponse>]: never; }>(object: I): QueryNFTsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest;
    fromJSON(object: any): QueryNFTRequest;
    toJSON(message: QueryNFTRequest): unknown;
    fromPartial<I extends {
        class_id?: string | undefined;
        id?: string | undefined;
    } & {
        class_id?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryNFTRequest>]: never; }>(object: I): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse;
    fromJSON(object: any): QueryNFTResponse;
    toJSON(message: QueryNFTResponse): unknown;
    fromPartial<I extends {
        nft?: {
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        nft?: ({
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            class_id?: string | undefined;
            id?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["nft"]["data"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["nft"], keyof NFT>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "nft">]: never; }>(object: I): QueryNFTResponse;
};
export declare const QueryClassRequest: {
    encode(message: QueryClassRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassRequest;
    fromJSON(object: any): QueryClassRequest;
    toJSON(message: QueryClassRequest): unknown;
    fromPartial<I extends {
        class_id?: string | undefined;
    } & {
        class_id?: string | undefined;
    } & { [K in Exclude<keyof I, "class_id">]: never; }>(object: I): QueryClassRequest;
};
export declare const QueryClassResponse: {
    encode(message: QueryClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassResponse;
    fromJSON(object: any): QueryClassResponse;
    toJSON(message: QueryClassResponse): unknown;
    fromPartial<I extends {
        class?: {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        class?: ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["class"]["data"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["class"], keyof Class>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "class">]: never; }>(object: I): QueryClassResponse;
};
export declare const QueryClassesRequest: {
    encode(message: QueryClassesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesRequest;
    fromJSON(object: any): QueryClassesRequest;
    toJSON(message: QueryClassesRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): QueryClassesRequest;
};
export declare const QueryClassesResponse: {
    encode(message: QueryClassesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClassesResponse;
    fromJSON(object: any): QueryClassesResponse;
    toJSON(message: QueryClassesResponse): unknown;
    fromPartial<I extends {
        classes?: {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        classes?: ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["classes"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["classes"][number], keyof Class>]: never; })[] & { [K_2 in Exclude<keyof I["classes"], keyof {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryClassesResponse>]: never; }>(object: I): QueryClassesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
    Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
    NFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>;
    NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
    Class(request: QueryClassRequest): Promise<QueryClassResponse>;
    Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
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
