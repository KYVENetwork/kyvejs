import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/** Params defines the stakers module parameters. */
export interface Params {
    /** vote_slash ... */
    vote_slash: string;
    /** upload_slash ... */
    upload_slash: string;
    /** timeout_slash ... */
    timeout_slash: string;
    /** commission_change_time ... */
    commission_change_time: string;
    /** commission_change_time ... */
    leave_pool_time: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        vote_slash?: string | undefined;
        upload_slash?: string | undefined;
        timeout_slash?: string | undefined;
        commission_change_time?: string | undefined;
        leave_pool_time?: string | undefined;
    } & {
        vote_slash?: string | undefined;
        upload_slash?: string | undefined;
        timeout_slash?: string | undefined;
        commission_change_time?: string | undefined;
        leave_pool_time?: string | undefined;
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
