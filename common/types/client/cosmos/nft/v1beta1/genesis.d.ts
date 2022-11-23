import _m0 from "protobufjs/minimal";
import { Class, NFT } from "./nft";
export declare const protobufPackage = "cosmos.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    entries: Entry[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
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
        entries?: {
            owner?: string | undefined;
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
        }[] | undefined;
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
        entries?: ({
            owner?: string | undefined;
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
        }[] & ({
            owner?: string | undefined;
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
        } & {
            owner?: string | undefined;
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
                } & { [K_3 in Exclude<keyof I["entries"][number]["nfts"][number]["data"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["entries"][number]["nfts"][number], keyof NFT>]: never; })[] & { [K_5 in Exclude<keyof I["entries"][number]["nfts"], keyof {
                class_id?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                uri_hash?: string | undefined;
                data?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["entries"][number], keyof Entry>]: never; })[] & { [K_7 in Exclude<keyof I["entries"], keyof {
            owner?: string | undefined;
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
        }[]>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
export declare const Entry: {
    encode(message: Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Entry;
    fromJSON(object: any): Entry;
    toJSON(message: Entry): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
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
    } & {
        owner?: string | undefined;
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
    } & { [K_3 in Exclude<keyof I, keyof Entry>]: never; }>(object: I): Entry;
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
