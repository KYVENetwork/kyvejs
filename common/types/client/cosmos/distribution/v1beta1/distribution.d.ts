import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/** Params defines the set of params for the distribution module. */
export interface Params {
    community_tax: string;
    base_proposer_reward: string;
    bonus_proposer_reward: string;
    withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
    cumulative_reward_ratio: DecCoin[];
    reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
    rewards: DecCoin[];
    period: string;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
    commission: DecCoin[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
    rewards: DecCoin[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
    validator_period: string;
    fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
    validator_slash_events: ValidatorSlashEvent[];
}
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
    community_pool: DecCoin[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposal {
    title: string;
    description: string;
    recipient: string;
    amount: Coin[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
    previous_period: string;
    stake: string;
    height: string;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
    validator_address: string;
    reward: DecCoin[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
    title: string;
    description: string;
    recipient: string;
    amount: string;
    deposit: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        community_tax?: string | undefined;
        base_proposer_reward?: string | undefined;
        bonus_proposer_reward?: string | undefined;
        withdraw_addr_enabled?: boolean | undefined;
    } & {
        community_tax?: string | undefined;
        base_proposer_reward?: string | undefined;
        bonus_proposer_reward?: string | undefined;
        withdraw_addr_enabled?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof Params>]: never; }>(object: I): Params;
};
export declare const ValidatorHistoricalRewards: {
    encode(message: ValidatorHistoricalRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards;
    fromJSON(object: any): ValidatorHistoricalRewards;
    toJSON(message: ValidatorHistoricalRewards): unknown;
    fromPartial<I extends {
        cumulative_reward_ratio?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        reference_count?: number | undefined;
    } & {
        cumulative_reward_ratio?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["cumulative_reward_ratio"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["cumulative_reward_ratio"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        reference_count?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ValidatorHistoricalRewards>]: never; }>(object: I): ValidatorHistoricalRewards;
};
export declare const ValidatorCurrentRewards: {
    encode(message: ValidatorCurrentRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards;
    fromJSON(object: any): ValidatorCurrentRewards;
    toJSON(message: ValidatorCurrentRewards): unknown;
    fromPartial<I extends {
        rewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        period?: string | undefined;
    } & {
        rewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["rewards"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        period?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ValidatorCurrentRewards>]: never; }>(object: I): ValidatorCurrentRewards;
};
export declare const ValidatorAccumulatedCommission: {
    encode(message: ValidatorAccumulatedCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission;
    fromJSON(object: any): ValidatorAccumulatedCommission;
    toJSON(message: ValidatorAccumulatedCommission): unknown;
    fromPartial<I extends {
        commission?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        commission?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["commission"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["commission"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "commission">]: never; }>(object: I): ValidatorAccumulatedCommission;
};
export declare const ValidatorOutstandingRewards: {
    encode(message: ValidatorOutstandingRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards;
    fromJSON(object: any): ValidatorOutstandingRewards;
    toJSON(message: ValidatorOutstandingRewards): unknown;
    fromPartial<I extends {
        rewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        rewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["rewards"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "rewards">]: never; }>(object: I): ValidatorOutstandingRewards;
};
export declare const ValidatorSlashEvent: {
    encode(message: ValidatorSlashEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent;
    fromJSON(object: any): ValidatorSlashEvent;
    toJSON(message: ValidatorSlashEvent): unknown;
    fromPartial<I extends {
        validator_period?: string | undefined;
        fraction?: string | undefined;
    } & {
        validator_period?: string | undefined;
        fraction?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ValidatorSlashEvent>]: never; }>(object: I): ValidatorSlashEvent;
};
export declare const ValidatorSlashEvents: {
    encode(message: ValidatorSlashEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents;
    fromJSON(object: any): ValidatorSlashEvents;
    toJSON(message: ValidatorSlashEvents): unknown;
    fromPartial<I extends {
        validator_slash_events?: {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        }[] | undefined;
    } & {
        validator_slash_events?: ({
            validator_period?: string | undefined;
            fraction?: string | undefined;
        }[] & ({
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } & {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } & { [K in Exclude<keyof I["validator_slash_events"][number], keyof ValidatorSlashEvent>]: never; })[] & { [K_1 in Exclude<keyof I["validator_slash_events"], keyof {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "validator_slash_events">]: never; }>(object: I): ValidatorSlashEvents;
};
export declare const FeePool: {
    encode(message: FeePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeePool;
    fromJSON(object: any): FeePool;
    toJSON(message: FeePool): unknown;
    fromPartial<I extends {
        community_pool?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        community_pool?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["community_pool"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["community_pool"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "community_pool">]: never; }>(object: I): FeePool;
};
export declare const CommunityPoolSpendProposal: {
    encode(message: CommunityPoolSpendProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal;
    fromJSON(object: any): CommunityPoolSpendProposal;
    toJSON(message: CommunityPoolSpendProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CommunityPoolSpendProposal>]: never; }>(object: I): CommunityPoolSpendProposal;
};
export declare const DelegatorStartingInfo: {
    encode(message: DelegatorStartingInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo;
    fromJSON(object: any): DelegatorStartingInfo;
    toJSON(message: DelegatorStartingInfo): unknown;
    fromPartial<I extends {
        previous_period?: string | undefined;
        stake?: string | undefined;
        height?: string | undefined;
    } & {
        previous_period?: string | undefined;
        stake?: string | undefined;
        height?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DelegatorStartingInfo>]: never; }>(object: I): DelegatorStartingInfo;
};
export declare const DelegationDelegatorReward: {
    encode(message: DelegationDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward;
    fromJSON(object: any): DelegationDelegatorReward;
    toJSON(message: DelegationDelegatorReward): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        reward?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        validator_address?: string | undefined;
        reward?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["reward"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["reward"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof DelegationDelegatorReward>]: never; }>(object: I): DelegationDelegatorReward;
};
export declare const CommunityPoolSpendProposalWithDeposit: {
    encode(message: CommunityPoolSpendProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit;
    fromJSON(object: any): CommunityPoolSpendProposalWithDeposit;
    toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        deposit?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        deposit?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommunityPoolSpendProposalWithDeposit>]: never; }>(object: I): CommunityPoolSpendProposalWithDeposit;
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
