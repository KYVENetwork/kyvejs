import _m0 from "protobufjs/minimal";
import { CapabilityOwners } from "./capability";
export declare const protobufPackage = "cosmos.capability.v1beta1";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
    /** index is the index of the capability owner. */
    index: string;
    /** index_owners are the owners at the given index. */
    index_owners?: CapabilityOwners;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** index is the capability global index. */
    index: string;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwners[];
}
export declare const GenesisOwners: {
    encode(message: GenesisOwners, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners;
    fromJSON(object: any): GenesisOwners;
    toJSON(message: GenesisOwners): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        index_owners?: {
            owners?: {
                module?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        index?: string | undefined;
        index_owners?: ({
            owners?: {
                module?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
        } & {
            owners?: ({
                module?: string | undefined;
                name?: string | undefined;
            }[] & ({
                module?: string | undefined;
                name?: string | undefined;
            } & {
                module?: string | undefined;
                name?: string | undefined;
            } & { [K in Exclude<keyof I["index_owners"]["owners"][number], keyof import("./capability").Owner>]: never; })[] & { [K_1 in Exclude<keyof I["index_owners"]["owners"], keyof {
                module?: string | undefined;
                name?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["index_owners"], "owners">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GenesisOwners>]: never; }>(object: I): GenesisOwners;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        owners?: {
            index?: string | undefined;
            index_owners?: {
                owners?: {
                    module?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        index?: string | undefined;
        owners?: ({
            index?: string | undefined;
            index_owners?: {
                owners?: {
                    module?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            index?: string | undefined;
            index_owners?: {
                owners?: {
                    module?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            index?: string | undefined;
            index_owners?: ({
                owners?: {
                    module?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
            } & {
                owners?: ({
                    module?: string | undefined;
                    name?: string | undefined;
                }[] & ({
                    module?: string | undefined;
                    name?: string | undefined;
                } & {
                    module?: string | undefined;
                    name?: string | undefined;
                } & { [K in Exclude<keyof I["owners"][number]["index_owners"]["owners"][number], keyof import("./capability").Owner>]: never; })[] & { [K_1 in Exclude<keyof I["owners"][number]["index_owners"]["owners"], keyof {
                    module?: string | undefined;
                    name?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["owners"][number]["index_owners"], "owners">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["owners"][number], keyof GenesisOwners>]: never; })[] & { [K_4 in Exclude<keyof I["owners"], keyof {
            index?: string | undefined;
            index_owners?: {
                owners?: {
                    module?: string | undefined;
                    name?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
