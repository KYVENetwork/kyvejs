import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.delegation.v1beta1";
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface Delegator {
    /** staker corresponds to a KYVE-staker on the protocol-side */
    staker: string;
    /**
     * delegator the user who delegate to the staker.
     * If staker and delegator are the same we call it: self-delegation
     */
    delegator: string;
    /** k_index is an internal index for the f1-distribution algorithm */
    k_index: string;
    /**
     * initial_amount of stake the user had when it delegated.
     * slashes can cause that the actual stake is lower.
     */
    initial_amount: string;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntry {
    /** staker on protocol level */
    staker: string;
    /** k_index is the of the period this entry ends */
    k_index: string;
    /** value is the quotient of collected rewards and total stake according to F1-distribution */
    value: string;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationData {
    /** Every staker has one DelegationData */
    staker: string;
    /** current_rewards ... */
    current_rewards: string;
    /** total_delegation ... */
    total_delegation: string;
    /** latest_index_k ... */
    latest_index_k: string;
    /** delegator_count the amount of different addresses delegating to the staker */
    delegator_count: string;
    /** latest_index_was_undelegation helps indicates when an entry can be deleted */
    latest_index_was_undelegation: boolean;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlash {
    /** staker who got slashed */
    staker: string;
    /** k_index for f1-algorithm */
    k_index: string;
    /** fraction that got slashed */
    fraction: string;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntry {
    /** index ... */
    index: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** amount ... */
    amount: string;
    /** creation_time ... */
    creation_time: string;
}
/** QueueState ... */
export interface QueueState {
    /** low_index ... */
    low_index: string;
    /** high_index ... */
    high_index: string;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldown {
    /** low_index ... */
    address: string;
    /** high_index ... */
    creation_date: string;
}
export declare const Delegator: {
    encode(message: Delegator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegator;
    fromJSON(object: any): Delegator;
    toJSON(message: Delegator): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        delegator?: string | undefined;
        k_index?: string | undefined;
        initial_amount?: string | undefined;
    } & {
        staker?: string | undefined;
        delegator?: string | undefined;
        k_index?: string | undefined;
        initial_amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Delegator>]: never; }>(object: I): Delegator;
};
export declare const DelegationEntry: {
    encode(message: DelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntry;
    fromJSON(object: any): DelegationEntry;
    toJSON(message: DelegationEntry): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        k_index?: string | undefined;
        value?: string | undefined;
    } & {
        staker?: string | undefined;
        k_index?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DelegationEntry>]: never; }>(object: I): DelegationEntry;
};
export declare const DelegationData: {
    encode(message: DelegationData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationData;
    fromJSON(object: any): DelegationData;
    toJSON(message: DelegationData): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        current_rewards?: string | undefined;
        total_delegation?: string | undefined;
        latest_index_k?: string | undefined;
        delegator_count?: string | undefined;
        latest_index_was_undelegation?: boolean | undefined;
    } & {
        staker?: string | undefined;
        current_rewards?: string | undefined;
        total_delegation?: string | undefined;
        latest_index_k?: string | undefined;
        delegator_count?: string | undefined;
        latest_index_was_undelegation?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof DelegationData>]: never; }>(object: I): DelegationData;
};
export declare const DelegationSlash: {
    encode(message: DelegationSlash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationSlash;
    fromJSON(object: any): DelegationSlash;
    toJSON(message: DelegationSlash): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        k_index?: string | undefined;
        fraction?: string | undefined;
    } & {
        staker?: string | undefined;
        k_index?: string | undefined;
        fraction?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DelegationSlash>]: never; }>(object: I): DelegationSlash;
};
export declare const UndelegationQueueEntry: {
    encode(message: UndelegationQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationQueueEntry;
    fromJSON(object: any): UndelegationQueueEntry;
    toJSON(message: UndelegationQueueEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        amount?: string | undefined;
        creation_time?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        amount?: string | undefined;
        creation_time?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UndelegationQueueEntry>]: never; }>(object: I): UndelegationQueueEntry;
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
export declare const RedelegationCooldown: {
    encode(message: RedelegationCooldown, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationCooldown;
    fromJSON(object: any): RedelegationCooldown;
    toJSON(message: RedelegationCooldown): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        creation_date?: string | undefined;
    } & {
        address?: string | undefined;
        creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RedelegationCooldown>]: never; }>(object: I): RedelegationCooldown;
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
