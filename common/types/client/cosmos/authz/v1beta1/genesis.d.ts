import _m0 from "protobufjs/minimal";
import { GrantAuthorization } from "./authz";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
    authorization: GrantAuthorization[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        authorization?: {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: Date | undefined;
        }[] | undefined;
    } & {
        authorization?: ({
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: Date | undefined;
        }[] & ({
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: Date | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["authorization"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            expiration?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["authorization"][number], keyof GrantAuthorization>]: never; })[] & { [K_2 in Exclude<keyof I["authorization"], keyof {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "authorization">]: never; }>(object: I): GenesisState;
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
