import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/** SlashType ... */
export declare enum SlashType {
    /** SLASH_TYPE_UNSPECIFIED - SLASH_TYPE_UNSPECIFIED ... */
    SLASH_TYPE_UNSPECIFIED = 0,
    /** SLASH_TYPE_TIMEOUT - SLASH_TYPE_TIMEOUT ... */
    SLASH_TYPE_TIMEOUT = 1,
    /** SLASH_TYPE_VOTE - SLASH_TYPE_VOTE ... */
    SLASH_TYPE_VOTE = 2,
    /** SLASH_TYPE_UPLOAD - SLASH_TYPE_UPLOAD ... */
    SLASH_TYPE_UPLOAD = 3,
    UNRECOGNIZED = -1
}
export declare function slashTypeFromJSON(object: any): SlashType;
export declare function slashTypeToJSON(object: SlashType): string;
/** Staker ... */
export interface Staker {
    /** address ... */
    address: string;
    /** commission ... */
    commission: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo ... */
    logo: string;
}
/** Valaccount ... */
export interface Valaccount {
    /** pool_id ... */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** valaddress ... */
    valaddress: string;
    /** points ... */
    points: string;
    /** isLeaving ... */
    is_leaving: boolean;
}
/** CommissionChangeEntry ... */
export interface CommissionChangeEntry {
    /** index ... */
    index: string;
    /** staker ... */
    staker: string;
    /** commission ... */
    commission: string;
    /** creation_date ... */
    creation_date: string;
}
/** UnbondingStakeEntry ... */
export interface UnbondingStakeEntry {
    /** index ... */
    index: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: string;
    /** creation_date ... */
    creation_date: string;
}
/** LeavePoolEntry ... */
export interface LeavePoolEntry {
    /** index ... */
    index: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** creation_date ... */
    creation_date: string;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
    /** low_index ... */
    low_index: string;
    /** high_index ... */
    high_index: string;
}
export declare const Staker: {
    encode(message: Staker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Staker;
    fromJSON(object: any): Staker;
    toJSON(message: Staker): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & {
        address?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Staker>]: never; }>(object: I): Staker;
};
export declare const Valaccount: {
    encode(message: Valaccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Valaccount;
    fromJSON(object: any): Valaccount;
    toJSON(message: Valaccount): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        valaddress?: string | undefined;
        points?: string | undefined;
        is_leaving?: boolean | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        valaddress?: string | undefined;
        points?: string | undefined;
        is_leaving?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof Valaccount>]: never; }>(object: I): Valaccount;
};
export declare const CommissionChangeEntry: {
    encode(message: CommissionChangeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeEntry;
    fromJSON(object: any): CommissionChangeEntry;
    toJSON(message: CommissionChangeEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        commission?: string | undefined;
        creation_date?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        commission?: string | undefined;
        creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommissionChangeEntry>]: never; }>(object: I): CommissionChangeEntry;
};
export declare const UnbondingStakeEntry: {
    encode(message: UnbondingStakeEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStakeEntry;
    fromJSON(object: any): UnbondingStakeEntry;
    toJSON(message: UnbondingStakeEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
        creation_date?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
        creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnbondingStakeEntry>]: never; }>(object: I): UnbondingStakeEntry;
};
export declare const LeavePoolEntry: {
    encode(message: LeavePoolEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LeavePoolEntry;
    fromJSON(object: any): LeavePoolEntry;
    toJSON(message: LeavePoolEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        creation_date?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LeavePoolEntry>]: never; }>(object: I): LeavePoolEntry;
};
export declare const QueueState: {
    encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueueState;
    fromJSON(object: any): QueueState;
    toJSON(message: QueueState): unknown;
    fromPartial<I extends {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueueState>]: never; }>(object: I): QueueState;
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
