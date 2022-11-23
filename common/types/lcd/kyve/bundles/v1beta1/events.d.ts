import _m0 from "protobufjs/minimal";
import { BundleStatus } from "./bundles";
import { VoteType } from "./tx";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVote {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** staker is the account staker of the protocol node. */
    staker: string;
    /** storage_id is the unique ID of the bundle. */
    storage_id: string;
    /** vote is the vote type of the protocol node. */
    vote: VoteType;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposed {
    /** pool_id ... */
    pool_id: string;
    /** internal id for the KYVE-bundle */
    id: string;
    /**
     * storage_id is the ID to retrieve to data item from the configured storage provider
     * e.g. the ARWEAVE-id
     */
    storage_id: string;
    /** Address of the uploader/proposer of the bundle */
    uploader: string;
    /** data_size ... */
    data_size: string;
    /** from_index ... */
    from_index: string;
    /** bundle_size ... */
    bundle_size: string;
    /** from_key ... */
    from_key: string;
    /** to_key ... */
    to_key: string;
    /** bundle_summary ... */
    bundle_summary: string;
    /** data_hash ... */
    data_hash: string;
    /** proposed_at ... */
    proposed_at: string;
    /** storage_provider_id ... */
    storage_provider_id: number;
    /** compression_id ... */
    compression_id: number;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
    /** pool_id ... */
    pool_id: string;
    /** internal id for the KYVE-bundle */
    id: string;
    /** Voting Power "valid" in ukyve */
    valid: string;
    /** Voting Power "invalid" in ukyve */
    invalid: string;
    /** Voting Power "abstain" in ukyve */
    abstain: string;
    /** Total Voting Power in ukyve */
    total: string;
    /** status ... */
    status: BundleStatus;
    /** rewards transferred to treasury (in ukyve) */
    reward_treasury: string;
    /** rewardUploader ... */
    reward_uploader: string;
    /** rewardDelegation ... */
    reward_delegation: string;
    /** rewardTotal ... */
    reward_total: string;
    /**
     * finalized_at ...
     * could be removed as it is included in the block itself
     */
    finalized_at: string;
    /** uploader ... */
    uploader: string;
    /** next_uploader ... */
    next_uploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
    /** pool_id ... */
    pool_id: string;
    /** id ... */
    id: string;
    /** new_uploader ... */
    new_uploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
    /** pool_id ... */
    pool_id: string;
    /** id ... */
    id: string;
    /** previous_uploader ... */
    previous_uploader: string;
    /** new_uploader ... */
    new_uploader: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
    /** pool_id ... */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** current_points ... */
    current_points: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
    /** pool_id ... */
    pool_id: string;
    /** staker ... */
    staker: string;
}
export declare const EventBundleVote: {
    encode(message: EventBundleVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleVote;
    fromJSON(object: any): EventBundleVote;
    toJSON(message: EventBundleVote): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        storage_id?: string | undefined;
        vote?: VoteType | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        storage_id?: string | undefined;
        vote?: VoteType | undefined;
    } & { [K in Exclude<keyof I, keyof EventBundleVote>]: never; }>(object: I): EventBundleVote;
};
export declare const EventBundleProposed: {
    encode(message: EventBundleProposed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleProposed;
    fromJSON(object: any): EventBundleProposed;
    toJSON(message: EventBundleProposed): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        id?: string | undefined;
        storage_id?: string | undefined;
        uploader?: string | undefined;
        data_size?: string | undefined;
        from_index?: string | undefined;
        bundle_size?: string | undefined;
        from_key?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
        data_hash?: string | undefined;
        proposed_at?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & {
        pool_id?: string | undefined;
        id?: string | undefined;
        storage_id?: string | undefined;
        uploader?: string | undefined;
        data_size?: string | undefined;
        from_index?: string | undefined;
        bundle_size?: string | undefined;
        from_key?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
        data_hash?: string | undefined;
        proposed_at?: string | undefined;
        storage_provider_id?: number | undefined;
        compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventBundleProposed>]: never; }>(object: I): EventBundleProposed;
};
export declare const EventBundleFinalized: {
    encode(message: EventBundleFinalized, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleFinalized;
    fromJSON(object: any): EventBundleFinalized;
    toJSON(message: EventBundleFinalized): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        id?: string | undefined;
        valid?: string | undefined;
        invalid?: string | undefined;
        abstain?: string | undefined;
        total?: string | undefined;
        status?: BundleStatus | undefined;
        reward_treasury?: string | undefined;
        reward_uploader?: string | undefined;
        reward_delegation?: string | undefined;
        reward_total?: string | undefined;
        finalized_at?: string | undefined;
        uploader?: string | undefined;
        next_uploader?: string | undefined;
    } & {
        pool_id?: string | undefined;
        id?: string | undefined;
        valid?: string | undefined;
        invalid?: string | undefined;
        abstain?: string | undefined;
        total?: string | undefined;
        status?: BundleStatus | undefined;
        reward_treasury?: string | undefined;
        reward_uploader?: string | undefined;
        reward_delegation?: string | undefined;
        reward_total?: string | undefined;
        finalized_at?: string | undefined;
        uploader?: string | undefined;
        next_uploader?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventBundleFinalized>]: never; }>(object: I): EventBundleFinalized;
};
export declare const EventClaimedUploaderRole: {
    encode(message: EventClaimedUploaderRole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimedUploaderRole;
    fromJSON(object: any): EventClaimedUploaderRole;
    toJSON(message: EventClaimedUploaderRole): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        id?: string | undefined;
        new_uploader?: string | undefined;
    } & {
        pool_id?: string | undefined;
        id?: string | undefined;
        new_uploader?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClaimedUploaderRole>]: never; }>(object: I): EventClaimedUploaderRole;
};
export declare const EventSkippedUploaderRole: {
    encode(message: EventSkippedUploaderRole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSkippedUploaderRole;
    fromJSON(object: any): EventSkippedUploaderRole;
    toJSON(message: EventSkippedUploaderRole): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        id?: string | undefined;
        previous_uploader?: string | undefined;
        new_uploader?: string | undefined;
    } & {
        pool_id?: string | undefined;
        id?: string | undefined;
        previous_uploader?: string | undefined;
        new_uploader?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventSkippedUploaderRole>]: never; }>(object: I): EventSkippedUploaderRole;
};
export declare const EventPointIncreased: {
    encode(message: EventPointIncreased, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPointIncreased;
    fromJSON(object: any): EventPointIncreased;
    toJSON(message: EventPointIncreased): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        current_points?: string | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
        current_points?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventPointIncreased>]: never; }>(object: I): EventPointIncreased;
};
export declare const EventPointsReset: {
    encode(message: EventPointsReset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPointsReset;
    fromJSON(object: any): EventPointsReset;
    toJSON(message: EventPointsReset): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & {
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventPointsReset>]: never; }>(object: I): EventPointsReset;
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
