import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.libs.bits";
export interface BitArray {
    bits: string;
    elems: string[];
}
export declare const BitArray: {
    encode(message: BitArray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BitArray;
    fromJSON(object: any): BitArray;
    toJSON(message: BitArray): unknown;
    fromPartial<I extends {
        bits?: string | undefined;
        elems?: string[] | undefined;
    } & {
        bits?: string | undefined;
        elems?: (string[] & string[] & { [K in Exclude<keyof I["elems"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof BitArray>]: never; }>(object: I): BitArray;
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
