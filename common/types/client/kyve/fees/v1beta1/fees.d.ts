import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.fees.v1beta1";
/** Params defines the fees module parameters. */
export interface Params {
    /** min_gas_price defines the minimum gas price value for all transactions. */
    min_gas_price: string;
    /** burn_ratio defines the ratio of transaction fees burnt. */
    burn_ratio: string;
    /** gas_adjustments ... */
    gas_adjustments: GasAdjustment[];
    /** gas_refunds ... */
    gas_refunds: GasRefund[];
    /** min_initial_deposit_ratio ... */
    min_initial_deposit_ratio: string;
}
/** GasAdjustment ... */
export interface GasAdjustment {
    /** type ... */
    type: string;
    /** amount ... */
    amount: string;
}
/** GasRefund ... */
export interface GasRefund {
    /** type ... */
    type: string;
    /** fraction ... */
    fraction: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        min_gas_price?: string | undefined;
        burn_ratio?: string | undefined;
        gas_adjustments?: {
            type?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        gas_refunds?: {
            type?: string | undefined;
            fraction?: string | undefined;
        }[] | undefined;
        min_initial_deposit_ratio?: string | undefined;
    } & {
        min_gas_price?: string | undefined;
        burn_ratio?: string | undefined;
        gas_adjustments?: ({
            type?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            type?: string | undefined;
            amount?: string | undefined;
        } & {
            type?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["gas_adjustments"][number], keyof GasAdjustment>]: never; })[] & { [K_1 in Exclude<keyof I["gas_adjustments"], keyof {
            type?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        gas_refunds?: ({
            type?: string | undefined;
            fraction?: string | undefined;
        }[] & ({
            type?: string | undefined;
            fraction?: string | undefined;
        } & {
            type?: string | undefined;
            fraction?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gas_refunds"][number], keyof GasRefund>]: never; })[] & { [K_3 in Exclude<keyof I["gas_refunds"], keyof {
            type?: string | undefined;
            fraction?: string | undefined;
        }[]>]: never; }) | undefined;
        min_initial_deposit_ratio?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Params>]: never; }>(object: I): Params;
};
export declare const GasAdjustment: {
    encode(message: GasAdjustment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasAdjustment;
    fromJSON(object: any): GasAdjustment;
    toJSON(message: GasAdjustment): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        amount?: string | undefined;
    } & {
        type?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GasAdjustment>]: never; }>(object: I): GasAdjustment;
};
export declare const GasRefund: {
    encode(message: GasRefund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasRefund;
    fromJSON(object: any): GasRefund;
    toJSON(message: GasRefund): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        fraction?: string | undefined;
    } & {
        type?: string | undefined;
        fraction?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GasRefund>]: never; }>(object: I): GasRefund;
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
