import _m0 from "protobufjs/minimal";
import { Minter, Params } from "./mint";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter?: Minter;
    /** params defines all the paramaters of the module. */
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        minter?: {
            inflation?: string | undefined;
            annual_provisions?: string | undefined;
        } | undefined;
        params?: {
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } | undefined;
    } & {
        minter?: ({
            inflation?: string | undefined;
            annual_provisions?: string | undefined;
        } & {
            inflation?: string | undefined;
            annual_provisions?: string | undefined;
        } & { [K in Exclude<keyof I["minter"], keyof Minter>]: never; }) | undefined;
        params?: ({
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } & {
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } & { [K_1 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
