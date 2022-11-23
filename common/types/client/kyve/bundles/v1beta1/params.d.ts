import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/** Params defines the bundles module parameters. */
export interface Params {
    /** upload_timeout ... */
    upload_timeout: string;
    /** storage_cost ... */
    storage_cost: string;
    /** network_fee ... */
    network_fee: string;
    /** max_points ... */
    max_points: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        upload_timeout?: string | undefined;
        storage_cost?: string | undefined;
        network_fee?: string | undefined;
        max_points?: string | undefined;
    } & {
        upload_timeout?: string | undefined;
        storage_cost?: string | undefined;
        network_fee?: string | undefined;
        max_points?: string | undefined;
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
