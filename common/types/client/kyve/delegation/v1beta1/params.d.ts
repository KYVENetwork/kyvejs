import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.delegation.v1beta1";
/** Params defines the delegation module parameters. */
export interface Params {
    /** unbonding_delegation_time ... */
    unbonding_delegation_time: string;
    /** unbonding_delegation_time ... */
    redelegation_cooldown: string;
    /** unbonding_delegation_time ... */
    redelegation_max_amount: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        unbonding_delegation_time?: string | undefined;
        redelegation_cooldown?: string | undefined;
        redelegation_max_amount?: string | undefined;
    } & {
        unbonding_delegation_time?: string | undefined;
        redelegation_cooldown?: string | undefined;
        redelegation_max_amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Params>]: never; }>(object: I): Params;
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
