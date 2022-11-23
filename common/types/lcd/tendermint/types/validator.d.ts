import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
export declare const protobufPackage = "tendermint.types";
export interface ValidatorSet {
    validators: Validator[];
    proposer?: Validator;
    total_voting_power: string;
}
export interface Validator {
    address: Uint8Array;
    pub_key?: PublicKey;
    voting_power: string;
    proposer_priority: string;
}
export interface SimpleValidator {
    pub_key?: PublicKey;
    voting_power: string;
}
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial<I extends {
        validators?: {
            address?: Uint8Array | undefined;
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[] | undefined;
        proposer?: {
            address?: Uint8Array | undefined;
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } | undefined;
        total_voting_power?: string | undefined;
    } & {
        validators?: ({
            address?: Uint8Array | undefined;
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & {
            address?: Uint8Array | undefined;
            pub_key?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["validators"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & { [K_1 in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_2 in Exclude<keyof I["validators"], keyof {
            address?: Uint8Array | undefined;
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[]>]: never; }) | undefined;
        proposer?: ({
            address?: Uint8Array | undefined;
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & {
            address?: Uint8Array | undefined;
            pub_key?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & { [K_3 in Exclude<keyof I["proposer"]["pub_key"], keyof PublicKey>]: never; }) | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & { [K_4 in Exclude<keyof I["proposer"], keyof Validator>]: never; }) | undefined;
        total_voting_power?: string | undefined;
    } & { [K_5 in Exclude<keyof I, keyof ValidatorSet>]: never; }>(object: I): ValidatorSet;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: Uint8Array | undefined;
        pub_key?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        voting_power?: string | undefined;
        proposer_priority?: string | undefined;
    } & {
        address?: Uint8Array | undefined;
        pub_key?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["pub_key"], keyof PublicKey>]: never; }) | undefined;
        voting_power?: string | undefined;
        proposer_priority?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Validator>]: never; }>(object: I): Validator;
};
export declare const SimpleValidator: {
    encode(message: SimpleValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator;
    fromJSON(object: any): SimpleValidator;
    toJSON(message: SimpleValidator): unknown;
    fromPartial<I extends {
        pub_key?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        voting_power?: string | undefined;
    } & {
        pub_key?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["pub_key"], keyof PublicKey>]: never; }) | undefined;
        voting_power?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SimpleValidator>]: never; }>(object: I): SimpleValidator;
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
