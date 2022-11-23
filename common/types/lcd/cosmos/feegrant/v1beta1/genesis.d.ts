import _m0 from "protobufjs/minimal";
import { Grant } from "./feegrant";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
    allowances: Grant[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        allowances?: {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        allowances?: ({
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["allowances"][number]["allowance"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["allowances"][number], keyof Grant>]: never; })[] & { [K_2 in Exclude<keyof I["allowances"], keyof {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "allowances">]: never; }>(object: I): GenesisState;
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
