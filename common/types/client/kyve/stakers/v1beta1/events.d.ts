import _m0 from "protobufjs/minimal";
import { SlashType } from "./stakers";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStaker {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
}
/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadata {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo ... */
    logo: string;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
    /** slash_type */
    slash_type: SlashType;
}
/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommission {
    /** staker is the account address of the protocol node. */
    staker: string;
    /** commission ... */
    commission: string;
}
/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
    /** pool_id ... */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** valaddress ... */
    valaddress: string;
    /** amount ... */
    amount: string;
}
/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
    /** pool_id ... */
    pool_id: string;
    /** staker ... */
    staker: string;
}
export declare const EventCreateStaker: {
    encode(message: EventCreateStaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateStaker;
    fromJSON(object: any): EventCreateStaker;
    toJSON(message: EventCreateStaker): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        amount?: string | undefined;
    } & {
        staker?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreateStaker>]: never; }>(object: I): EventCreateStaker;
};
export declare const EventUpdateMetadata: {
    encode(message: EventUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMetadata;
    fromJSON(object: any): EventUpdateMetadata;
    toJSON(message: EventUpdateMetadata): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & {
        staker?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateMetadata>]: never; }>(object: I): EventUpdateMetadata;
};
export declare const EventSlash: {
    encode(message: EventSlash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash;
    fromJSON(object: any): EventSlash;
    toJSON(message: EventSlash): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
        slash_type?: SlashType | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
        slash_type?: SlashType | undefined;
    } & { [K in Exclude<keyof I, keyof EventSlash>]: never; }>(object: I): EventSlash;
};
export declare const EventUpdateCommission: {
    encode(message: EventUpdateCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCommission;
    fromJSON(object: any): EventUpdateCommission;
    toJSON(message: EventUpdateCommission): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        commission?: string | undefined;
    } & {
        staker?: string | undefined;
        commission?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateCommission>]: never; }>(object: I): EventUpdateCommission;
};
export declare const EventJoinPool: {
    encode(message: EventJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventJoinPool;
    fromJSON(object: any): EventJoinPool;
    toJSON(message: EventJoinPool): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        valaddress?: string | undefined;
        amount?: string | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        valaddress?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventJoinPool>]: never; }>(object: I): EventJoinPool;
};
export declare const EventLeavePool: {
    encode(message: EventLeavePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeavePool;
    fromJSON(object: any): EventLeavePool;
    toJSON(message: EventLeavePool): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventLeavePool>]: never; }>(object: I): EventLeavePool;
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
