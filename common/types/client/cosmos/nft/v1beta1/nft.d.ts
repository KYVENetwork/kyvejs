import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** Class defines the class of the nft type. */
export interface Class {
    /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
    id: string;
    /** name defines the human-readable name of the NFT classification. Optional */
    name: string;
    /** symbol is an abbreviated name for nft classification. Optional */
    symbol: string;
    /** description is a brief description of nft classification. Optional */
    description: string;
    /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri. Optional */
    uri_hash: string;
    /** data is the app specific metadata of the NFT class. Optional */
    data?: Any;
}
/** NFT defines the NFT. */
export interface NFT {
    /** class_id associated with the NFT, similar to the contract address of ERC721 */
    class_id: string;
    /** id is a unique identifier of the NFT */
    id: string;
    /** uri for the NFT metadata stored off chain */
    uri: string;
    /** uri_hash is a hash of the document pointed by uri */
    uri_hash: string;
    /** data is an app specific data of the NFT. Optional */
    data?: Any;
}
export declare const Class: {
    encode(message: Class, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["data"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Class>]: never; }>(object: I): Class;
};
export declare const NFT: {
    encode(message: NFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NFT;
    fromJSON(object: any): NFT;
    toJSON(message: NFT): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["data"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof NFT>]: never; }>(object: I): NFT;
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
