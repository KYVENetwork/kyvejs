import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { CommissionRates, Description } from "./staking";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description?: Description;
    commission?: CommissionRates;
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey?: Any;
    value?: Coin;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description?: Description;
    validator_address: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commission_rate: string;
    min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegator_address: string;
    validator_address: string;
    amount?: Coin;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount?: Coin;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completion_time?: Date;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegator_address: string;
    validator_address: string;
    amount?: Coin;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completion_time?: Date;
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial<I extends {
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        commission?: {
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } | undefined;
        min_self_delegation?: string | undefined;
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        pubkey?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        value?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        description?: ({
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & { [K in Exclude<keyof I["description"], keyof Description>]: never; }) | undefined;
        commission?: ({
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } & {
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } & { [K_1 in Exclude<keyof I["commission"], keyof CommissionRates>]: never; }) | undefined;
        min_self_delegation?: string | undefined;
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        pubkey?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I["pubkey"], keyof Any>]: never; }) | undefined;
        value?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_3 in Exclude<keyof I["value"], keyof Coin>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof MsgCreateValidator>]: never; }>(object: I): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCreateValidatorResponse;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator;
    fromJSON(object: any): MsgEditValidator;
    toJSON(message: MsgEditValidator): unknown;
    fromPartial<I extends {
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        validator_address?: string | undefined;
        commission_rate?: string | undefined;
        min_self_delegation?: string | undefined;
    } & {
        description?: ({
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & { [K in Exclude<keyof I["description"], keyof Description>]: never; }) | undefined;
        validator_address?: string | undefined;
        commission_rate?: string | undefined;
        min_self_delegation?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgEditValidator>]: never; }>(object: I): MsgEditValidator;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromJSON(_: any): MsgEditValidatorResponse;
    toJSON(_: MsgEditValidatorResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgEditValidatorResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgDelegate>]: never; }>(object: I): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgDelegateResponse;
};
export declare const MsgBeginRedelegate: {
    encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate;
    fromJSON(object: any): MsgBeginRedelegate;
    toJSON(message: MsgBeginRedelegate): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgBeginRedelegate>]: never; }>(object: I): MsgBeginRedelegate;
};
export declare const MsgBeginRedelegateResponse: {
    encode(message: MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse;
    fromJSON(object: any): MsgBeginRedelegateResponse;
    toJSON(message: MsgBeginRedelegateResponse): unknown;
    fromPartial<I extends {
        completion_time?: Date | undefined;
    } & {
        completion_time?: Date | undefined;
    } & { [K in Exclude<keyof I, "completion_time">]: never; }>(object: I): MsgBeginRedelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgUndelegate>]: never; }>(object: I): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial<I extends {
        completion_time?: Date | undefined;
    } & {
        completion_time?: Date | undefined;
    } & { [K in Exclude<keyof I, "completion_time">]: never; }>(object: I): MsgUndelegateResponse;
};
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateValidator defines a method for creating a new validator. */
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    BeginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    BeginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
