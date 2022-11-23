import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.delegation.v1beta1";
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegate {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegate {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegate {
    /** address is the account address of the delegator. */
    address: string;
    /** from_staker ... */
    from_staker: string;
    /** to_staker is the account address of the new staker in the the pool */
    to_staker: string;
    /** amount ... */
    amount: string;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewards {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node the users withdraws from. */
    staker: string;
    /** amount ... */
    amount: string;
}
export declare const EventDelegate: {
    encode(message: EventDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegate;
    fromJSON(object: any): EventDelegate;
    toJSON(message: EventDelegate): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & {
        address?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventDelegate>]: never; }>(object: I): EventDelegate;
};
export declare const EventUndelegate: {
    encode(message: EventUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegate;
    fromJSON(object: any): EventUndelegate;
    toJSON(message: EventUndelegate): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & {
        address?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUndelegate>]: never; }>(object: I): EventUndelegate;
};
export declare const EventRedelegate: {
    encode(message: EventRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegate;
    fromJSON(object: any): EventRedelegate;
    toJSON(message: EventRedelegate): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        from_staker?: string | undefined;
        to_staker?: string | undefined;
        amount?: string | undefined;
    } & {
        address?: string | undefined;
        from_staker?: string | undefined;
        to_staker?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventRedelegate>]: never; }>(object: I): EventRedelegate;
};
export declare const EventWithdrawRewards: {
    encode(message: EventWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawRewards;
    fromJSON(object: any): EventWithdrawRewards;
    toJSON(message: EventWithdrawRewards): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & {
        address?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventWithdrawRewards>]: never; }>(object: I): EventWithdrawRewards;
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
