import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** PoolStatus ... */
export declare enum PoolStatus {
    /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
    POOL_STATUS_UNSPECIFIED = "POOL_STATUS_UNSPECIFIED",
    /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
    POOL_STATUS_ACTIVE = "POOL_STATUS_ACTIVE",
    /** POOL_STATUS_PAUSED - POOL_STATUS_PAUSED ... */
    POOL_STATUS_PAUSED = "POOL_STATUS_PAUSED",
    /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
    POOL_STATUS_NO_FUNDS = "POOL_STATUS_NO_FUNDS",
    /** POOL_STATUS_NOT_ENOUGH_VALIDATORS - POOL_STATUS_NOT_ENOUGH_VALIDATORS ... */
    POOL_STATUS_NOT_ENOUGH_VALIDATORS = "POOL_STATUS_NOT_ENOUGH_VALIDATORS",
    /** POOL_STATUS_NOT_ENOUGH_STAKE - POOL_STATUS_NOT_ENOUGH_STAKE ... */
    POOL_STATUS_NOT_ENOUGH_STAKE = "POOL_STATUS_NOT_ENOUGH_STAKE",
    /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
    POOL_STATUS_UPGRADING = "POOL_STATUS_UPGRADING",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function poolStatusFromJSON(object: any): PoolStatus;
export declare function poolStatusToJSON(object: PoolStatus): string;
export declare function poolStatusToNumber(object: PoolStatus): number;
/** StakerStatus ... */
export declare enum StakerStatus {
    /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
    STAKER_STATUS_UNSPECIFIED = "STAKER_STATUS_UNSPECIFIED",
    /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
    STAKER_STATUS_ACTIVE = "STAKER_STATUS_ACTIVE",
    /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
    STAKER_STATUS_INACTIVE = "STAKER_STATUS_INACTIVE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function stakerStatusFromJSON(object: any): StakerStatus;
export declare function stakerStatusToJSON(object: StakerStatus): string;
export declare function stakerStatusToNumber(object: StakerStatus): number;
/** BundleProposal ... */
export interface BundleProposal {
    /** uploader ... */
    uploader: string;
    /** next_uploader ... */
    next_uploader: string;
    /** storage_id ... */
    storage_id: string;
    /** byte_size ... */
    byte_size: string;
    /**
     * from_height ...
     *
     * @deprecated
     */
    from_height: string;
    /** to_height ... */
    to_height: string;
    /** created_at ... */
    created_at: string;
    /** voters_valid ... */
    voters_valid: string[];
    /** voters_invalid ... */
    voters_invalid: string[];
    /** voters_abstain ... */
    voters_abstain: string[];
    /** to_key ... */
    to_key: string;
    /** to_value ... */
    to_value: string;
    /** bundle_hash ... */
    bundle_hash: string;
}
/** Protocol ... */
export interface Protocol {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** last_upgrade ... */
    last_upgrade: string;
    /** test */
    test: string;
}
/** Upgrade ... */
export interface UpgradePlan {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** scheduled_at ... */
    scheduled_at: string;
    /** duration ... */
    duration: string;
}
/** DelegationEntries ... */
export interface DelegationEntries {
    /** id ... */
    id: string;
    /** balance ... */
    balance: string;
    /** staker ... */
    staker: string;
    /** k_index ... */
    k_index: string;
}
/** DelegationPoolData ... */
export interface DelegationPoolData {
    /** id ... */
    id: string;
    /** staker ... */
    staker: string;
    /** current_rewards ... */
    current_rewards: string;
    /** total_delegation ... */
    total_delegation: string;
    /** latest_index_k ... */
    latest_index_k: string;
    /** delegator_count ... */
    delegator_count: string;
    /** latest_index_was_undelegation ... */
    latest_index_was_undelegation: boolean;
}
/** Delegator ... */
export interface Delegator {
    /** id ... */
    id: string;
    /** k_index ... */
    k_index: string;
    /** delegation_amount ... */
    delegation_amount: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
}
/** Funder ... */
export interface Funder {
    /** account ... */
    account: string;
    /** fund_id ... */
    pool_id: string;
    /** amount ... */
    amount: string;
}
/** Pool ... */
export interface Pool {
    /** id ... */
    id: string;
    /** creator ... */
    creator: string;
    /** name ... */
    name: string;
    /** runtime ... */
    runtime: string;
    /** logo ... */
    logo: string;
    /**
     * versions ...
     *
     * @deprecated
     */
    versions: string;
    /** config ... */
    config: string;
    /** current_height ... */
    current_height: string;
    /** total_bytes ... */
    total_bytes: string;
    /** total_bundles ... */
    total_bundles: string;
    /** total_bundle_rewards ... */
    total_bundle_rewards: string;
    /**
     * start_height ...
     *
     * @deprecated
     */
    start_height: string;
    /** upload_interval ... */
    upload_interval: string;
    /** operating_cost ... */
    operating_cost: string;
    /** paused ... */
    paused: boolean;
    /** funders ... */
    funders: string[];
    /** lowest_funder ... */
    lowest_funder: string;
    /** total_funds ... */
    total_funds: string;
    /** stakers ... */
    stakers: string[];
    /** lowest_staker ... */
    lowest_staker: string;
    /** total_stake ... */
    total_stake: string;
    /** total_delegation ... */
    total_delegation: string;
    /** bundle_proposal ... */
    bundle_proposal?: BundleProposal;
    /** max_bundle_size ... */
    max_bundle_size: string;
    /** protocol ... */
    protocol?: Protocol;
    /** upgrade_plan ... */
    upgrade_plan?: UpgradePlan;
    /** start_key ... */
    start_key: string;
    /** current_key ... */
    current_key: string;
    /** current_value ... */
    current_value: string;
    /** inactive_stakers ... */
    inactive_stakers: string[];
    /** total_inactive_stake ... */
    total_inactive_stake: string;
    /** min_stake ... */
    min_stake: string;
    /** status ... */
    status: PoolStatus;
}
/** Proposal ... */
export interface Proposal {
    /** storage_id ... */
    storage_id: string;
    /** pool_id ... */
    pool_id: string;
    /** uploader ... */
    uploader: string;
    /** from_height ... */
    from_height: string;
    /** to_height ... */
    to_height: string;
    /** finalized_at ... */
    finalized_at: string;
    /** id ... */
    id: string;
    /** key ... */
    key: string;
    /** value ... */
    value: string;
    /** bundle_hash ... */
    bundle_hash: string;
}
/** Staker ... */
export interface Staker {
    /** staker ... */
    account: string;
    /** pool_id ... */
    pool_id: string;
    /** amount ... */
    amount: string;
    /** unbonding_amount ... */
    unbonding_amount: string;
    /** commission ... */
    commission: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo */
    logo: string;
    /** points */
    points: string;
    /** status */
    status: StakerStatus;
}
/**
 * UnbondingStakingEntry
 * Creates an entry for an upcoming unbonding of a staker which is put in the unbonding fifo queue and
 * executed after the unbonding time is over.
 */
export interface UnbondingStakingQueueEntry {
    /** index is a monotonically increasing integer to order the entries */
    index: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** amount ... */
    amount: string;
    /** creation_time ... */
    creation_time: string;
}
/**
 * UnbondingStakingEntry
 * Creates an entry for an upcoming unbonding of a staker which is put in the unbonding fifo queue and
 * executed after the unbonding time is over.
 */
export interface UnbondingStaker {
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** amount ... */
    unbonding_amount: string;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface UnbondingStakingQueueState {
    /** low_index ... */
    low_index: string;
    /** high_index ... */
    high_index: string;
}
/**
 * UnbondingStakingEntry
 * Creates an entry for an upcoming unbonding of a staker which is put in the unbonding fifo queue and
 * executed after the unbonding time is over.
 */
export interface UnbondingDelegationQueueEntry {
    /** index is a monotonically increasing integer to order the entries */
    index: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** pool_id ... */
    pool_id: string;
    /** amount ... */
    amount: string;
    /** creation_time ... */
    creation_time: string;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface UnbondingDelegationQueueState {
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
/** CommissionChangeQueueEntry ... */
export interface CommissionChangeQueueEntry {
    /** index is a monotonically increasing integer to order the entries */
    index: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** commission ... */
    commission: string;
    /** commission ... */
    creation_date: string;
}
/** CommissionChangeQueueState ... */
export interface CommissionChangeQueueState {
    /** low_index ... */
    low_index: string;
    /** high_index ... */
    high_index: string;
}
export declare const BundleProposal: {
    encode(message: BundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal;
    fromJSON(object: any): BundleProposal;
    toJSON(message: BundleProposal): unknown;
    fromPartial<I extends {
        uploader?: string | undefined;
        next_uploader?: string | undefined;
        storage_id?: string | undefined;
        byte_size?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        created_at?: string | undefined;
        voters_valid?: string[] | undefined;
        voters_invalid?: string[] | undefined;
        voters_abstain?: string[] | undefined;
        to_key?: string | undefined;
        to_value?: string | undefined;
        bundle_hash?: string | undefined;
    } & {
        uploader?: string | undefined;
        next_uploader?: string | undefined;
        storage_id?: string | undefined;
        byte_size?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        created_at?: string | undefined;
        voters_valid?: (string[] & string[] & { [K in Exclude<keyof I["voters_valid"], keyof string[]>]: never; }) | undefined;
        voters_invalid?: (string[] & string[] & { [K_1 in Exclude<keyof I["voters_invalid"], keyof string[]>]: never; }) | undefined;
        voters_abstain?: (string[] & string[] & { [K_2 in Exclude<keyof I["voters_abstain"], keyof string[]>]: never; }) | undefined;
        to_key?: string | undefined;
        to_value?: string | undefined;
        bundle_hash?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof BundleProposal>]: never; }>(object: I): BundleProposal;
};
export declare const Protocol: {
    encode(message: Protocol, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Protocol;
    fromJSON(object: any): Protocol;
    toJSON(message: Protocol): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        binaries?: string | undefined;
        last_upgrade?: string | undefined;
        test?: string | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        last_upgrade?: string | undefined;
        test?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Protocol>]: never; }>(object: I): Protocol;
};
export declare const UpgradePlan: {
    encode(message: UpgradePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradePlan;
    fromJSON(object: any): UpgradePlan;
    toJSON(message: UpgradePlan): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UpgradePlan>]: never; }>(object: I): UpgradePlan;
};
export declare const DelegationEntries: {
    encode(message: DelegationEntries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntries;
    fromJSON(object: any): DelegationEntries;
    toJSON(message: DelegationEntries): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        balance?: string | undefined;
        staker?: string | undefined;
        k_index?: string | undefined;
    } & {
        id?: string | undefined;
        balance?: string | undefined;
        staker?: string | undefined;
        k_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DelegationEntries>]: never; }>(object: I): DelegationEntries;
};
export declare const DelegationPoolData: {
    encode(message: DelegationPoolData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationPoolData;
    fromJSON(object: any): DelegationPoolData;
    toJSON(message: DelegationPoolData): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        staker?: string | undefined;
        current_rewards?: string | undefined;
        total_delegation?: string | undefined;
        latest_index_k?: string | undefined;
        delegator_count?: string | undefined;
        latest_index_was_undelegation?: boolean | undefined;
    } & {
        id?: string | undefined;
        staker?: string | undefined;
        current_rewards?: string | undefined;
        total_delegation?: string | undefined;
        latest_index_k?: string | undefined;
        delegator_count?: string | undefined;
        latest_index_was_undelegation?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof DelegationPoolData>]: never; }>(object: I): DelegationPoolData;
};
export declare const Delegator: {
    encode(message: Delegator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegator;
    fromJSON(object: any): Delegator;
    toJSON(message: Delegator): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        k_index?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & {
        id?: string | undefined;
        k_index?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Delegator>]: never; }>(object: I): Delegator;
};
export declare const Funder: {
    encode(message: Funder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Funder;
    fromJSON(object: any): Funder;
    toJSON(message: Funder): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
    } & {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Funder>]: never; }>(object: I): Funder;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        creator?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        current_height?: string | undefined;
        total_bytes?: string | undefined;
        total_bundles?: string | undefined;
        total_bundle_rewards?: string | undefined;
        start_height?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        paused?: boolean | undefined;
        funders?: string[] | undefined;
        lowest_funder?: string | undefined;
        total_funds?: string | undefined;
        stakers?: string[] | undefined;
        lowest_staker?: string | undefined;
        total_stake?: string | undefined;
        total_delegation?: string | undefined;
        bundle_proposal?: {
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            storage_id?: string | undefined;
            byte_size?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            created_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            to_key?: string | undefined;
            to_value?: string | undefined;
            bundle_hash?: string | undefined;
        } | undefined;
        max_bundle_size?: string | undefined;
        protocol?: {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
            test?: string | undefined;
        } | undefined;
        upgrade_plan?: {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
        } | undefined;
        start_key?: string | undefined;
        current_key?: string | undefined;
        current_value?: string | undefined;
        inactive_stakers?: string[] | undefined;
        total_inactive_stake?: string | undefined;
        min_stake?: string | undefined;
        status?: PoolStatus | undefined;
    } & {
        id?: string | undefined;
        creator?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        current_height?: string | undefined;
        total_bytes?: string | undefined;
        total_bundles?: string | undefined;
        total_bundle_rewards?: string | undefined;
        start_height?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        paused?: boolean | undefined;
        funders?: (string[] & string[] & { [K in Exclude<keyof I["funders"], keyof string[]>]: never; }) | undefined;
        lowest_funder?: string | undefined;
        total_funds?: string | undefined;
        stakers?: (string[] & string[] & { [K_1 in Exclude<keyof I["stakers"], keyof string[]>]: never; }) | undefined;
        lowest_staker?: string | undefined;
        total_stake?: string | undefined;
        total_delegation?: string | undefined;
        bundle_proposal?: ({
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            storage_id?: string | undefined;
            byte_size?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            created_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            to_key?: string | undefined;
            to_value?: string | undefined;
            bundle_hash?: string | undefined;
        } & {
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            storage_id?: string | undefined;
            byte_size?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            created_at?: string | undefined;
            voters_valid?: (string[] & string[] & { [K_2 in Exclude<keyof I["bundle_proposal"]["voters_valid"], keyof string[]>]: never; }) | undefined;
            voters_invalid?: (string[] & string[] & { [K_3 in Exclude<keyof I["bundle_proposal"]["voters_invalid"], keyof string[]>]: never; }) | undefined;
            voters_abstain?: (string[] & string[] & { [K_4 in Exclude<keyof I["bundle_proposal"]["voters_abstain"], keyof string[]>]: never; }) | undefined;
            to_key?: string | undefined;
            to_value?: string | undefined;
            bundle_hash?: string | undefined;
        } & { [K_5 in Exclude<keyof I["bundle_proposal"], keyof BundleProposal>]: never; }) | undefined;
        max_bundle_size?: string | undefined;
        protocol?: ({
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
            test?: string | undefined;
        } & {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
            test?: string | undefined;
        } & { [K_6 in Exclude<keyof I["protocol"], keyof Protocol>]: never; }) | undefined;
        upgrade_plan?: ({
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
        } & {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
        } & { [K_7 in Exclude<keyof I["upgrade_plan"], keyof UpgradePlan>]: never; }) | undefined;
        start_key?: string | undefined;
        current_key?: string | undefined;
        current_value?: string | undefined;
        inactive_stakers?: (string[] & string[] & { [K_8 in Exclude<keyof I["inactive_stakers"], keyof string[]>]: never; }) | undefined;
        total_inactive_stake?: string | undefined;
        min_stake?: string | undefined;
        status?: PoolStatus | undefined;
    } & { [K_9 in Exclude<keyof I, keyof Pool>]: never; }>(object: I): Pool;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends {
        storage_id?: string | undefined;
        pool_id?: string | undefined;
        uploader?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        finalized_at?: string | undefined;
        id?: string | undefined;
        key?: string | undefined;
        value?: string | undefined;
        bundle_hash?: string | undefined;
    } & {
        storage_id?: string | undefined;
        pool_id?: string | undefined;
        uploader?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        finalized_at?: string | undefined;
        id?: string | undefined;
        key?: string | undefined;
        value?: string | undefined;
        bundle_hash?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Proposal>]: never; }>(object: I): Proposal;
};
export declare const Staker: {
    encode(message: Staker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Staker;
    fromJSON(object: any): Staker;
    toJSON(message: Staker): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        unbonding_amount?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
        status?: StakerStatus | undefined;
    } & {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        unbonding_amount?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
        status?: StakerStatus | undefined;
    } & { [K in Exclude<keyof I, keyof Staker>]: never; }>(object: I): Staker;
};
export declare const UnbondingStakingQueueEntry: {
    encode(message: UnbondingStakingQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStakingQueueEntry;
    fromJSON(object: any): UnbondingStakingQueueEntry;
    toJSON(message: UnbondingStakingQueueEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        creation_time?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        creation_time?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnbondingStakingQueueEntry>]: never; }>(object: I): UnbondingStakingQueueEntry;
};
export declare const UnbondingStaker: {
    encode(message: UnbondingStaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStaker;
    fromJSON(object: any): UnbondingStaker;
    toJSON(message: UnbondingStaker): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        pool_id?: string | undefined;
        unbonding_amount?: string | undefined;
    } & {
        staker?: string | undefined;
        pool_id?: string | undefined;
        unbonding_amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnbondingStaker>]: never; }>(object: I): UnbondingStaker;
};
export declare const UnbondingStakingQueueState: {
    encode(message: UnbondingStakingQueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStakingQueueState;
    fromJSON(object: any): UnbondingStakingQueueState;
    toJSON(message: UnbondingStakingQueueState): unknown;
    fromPartial<I extends {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnbondingStakingQueueState>]: never; }>(object: I): UnbondingStakingQueueState;
};
export declare const UnbondingDelegationQueueEntry: {
    encode(message: UnbondingDelegationQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationQueueEntry;
    fromJSON(object: any): UnbondingDelegationQueueEntry;
    toJSON(message: UnbondingDelegationQueueEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        creation_time?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        creation_time?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnbondingDelegationQueueEntry>]: never; }>(object: I): UnbondingDelegationQueueEntry;
};
export declare const UnbondingDelegationQueueState: {
    encode(message: UnbondingDelegationQueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationQueueState;
    fromJSON(object: any): UnbondingDelegationQueueState;
    toJSON(message: UnbondingDelegationQueueState): unknown;
    fromPartial<I extends {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnbondingDelegationQueueState>]: never; }>(object: I): UnbondingDelegationQueueState;
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
export declare const CommissionChangeQueueEntry: {
    encode(message: CommissionChangeQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeQueueEntry;
    fromJSON(object: any): CommissionChangeQueueEntry;
    toJSON(message: CommissionChangeQueueEntry): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        commission?: string | undefined;
        creation_date?: string | undefined;
    } & {
        index?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        commission?: string | undefined;
        creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommissionChangeQueueEntry>]: never; }>(object: I): CommissionChangeQueueEntry;
};
export declare const CommissionChangeQueueState: {
    encode(message: CommissionChangeQueueState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeQueueState;
    fromJSON(object: any): CommissionChangeQueueState;
    toJSON(message: CommissionChangeQueueState): unknown;
    fromPartial<I extends {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommissionChangeQueueState>]: never; }>(object: I): CommissionChangeQueueState;
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
