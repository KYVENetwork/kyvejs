import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.crypto.hd.v1";
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44Params {
    /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
    purpose: number;
    /** coin_type is a constant that improves privacy */
    coin_type: number;
    /** account splits the key space into independent user identities */
    account: number;
    /**
     * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
     * chain.
     */
    change: boolean;
    /** address_index is used as child index in BIP32 derivation */
    address_index: number;
}
export declare const BIP44Params: {
    encode(message: BIP44Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BIP44Params;
    fromJSON(object: any): BIP44Params;
    toJSON(message: BIP44Params): unknown;
    fromPartial<I extends {
        purpose?: number | undefined;
        coin_type?: number | undefined;
        account?: number | undefined;
        change?: boolean | undefined;
        address_index?: number | undefined;
    } & {
        purpose?: number | undefined;
        coin_type?: number | undefined;
        account?: number | undefined;
        change?: boolean | undefined;
        address_index?: number | undefined;
    } & { [K in Exclude<keyof I, keyof BIP44Params>]: never; }>(object: I): BIP44Params;
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
