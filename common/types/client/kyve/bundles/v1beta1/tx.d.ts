import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/** VoteType ... */
export declare enum VoteType {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
    VOTE_TYPE_UNSPECIFIED = 0,
    /** VOTE_TYPE_VALID - VOTE_TYPE_VALID ... */
    VOTE_TYPE_VALID = 1,
    /** VOTE_TYPE_INVALID - VOTE_TYPE_INVALID ... */
    VOTE_TYPE_INVALID = 2,
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
    VOTE_TYPE_ABSTAIN = 3,
    UNRECOGNIZED = -1
}
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposal {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** storage_id ... */
    storage_id: string;
    /** data_size ... */
    data_size: string;
    /** data_hash ... */
    data_hash: string;
    /** from_index ... */
    from_index: string;
    /** bundle_size ... */
    bundle_size: string;
    /** from_key */
    from_key: string;
    /** to_key ... */
    to_key: string;
    /** bundle_summary ... */
    bundle_summary: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposal {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** id ... */
    pool_id: string;
    /** storage_id ... */
    storage_id: string;
    /** vote ... */
    vote: VoteType;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponse {
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRole {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** id ... */
    pool_id: string;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRole {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** from_index ... */
    from_index: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponse {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/bundles parameters to update. */
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgSubmitBundleProposal: {
    encode(message: MsgSubmitBundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBundleProposal;
    fromJSON(object: any): MsgSubmitBundleProposal;
    toJSON(message: MsgSubmitBundleProposal): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        storage_id?: string | undefined;
        data_size?: string | undefined;
        data_hash?: string | undefined;
        from_index?: string | undefined;
        bundle_size?: string | undefined;
        from_key?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
    } & {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        storage_id?: string | undefined;
        data_size?: string | undefined;
        data_hash?: string | undefined;
        from_index?: string | undefined;
        bundle_size?: string | undefined;
        from_key?: string | undefined;
        to_key?: string | undefined;
        bundle_summary?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgSubmitBundleProposal>]: never; }>(object: I): MsgSubmitBundleProposal;
};
export declare const MsgSubmitBundleProposalResponse: {
    encode(_: MsgSubmitBundleProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBundleProposalResponse;
    fromJSON(_: any): MsgSubmitBundleProposalResponse;
    toJSON(_: MsgSubmitBundleProposalResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSubmitBundleProposalResponse;
};
export declare const MsgVoteBundleProposal: {
    encode(message: MsgVoteBundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteBundleProposal;
    fromJSON(object: any): MsgVoteBundleProposal;
    toJSON(message: MsgVoteBundleProposal): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        storage_id?: string | undefined;
        vote?: VoteType | undefined;
    } & {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        storage_id?: string | undefined;
        vote?: VoteType | undefined;
    } & { [K in Exclude<keyof I, keyof MsgVoteBundleProposal>]: never; }>(object: I): MsgVoteBundleProposal;
};
export declare const MsgVoteBundleProposalResponse: {
    encode(_: MsgVoteBundleProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteBundleProposalResponse;
    fromJSON(_: any): MsgVoteBundleProposalResponse;
    toJSON(_: MsgVoteBundleProposalResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgVoteBundleProposalResponse;
};
export declare const MsgClaimUploaderRole: {
    encode(message: MsgClaimUploaderRole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUploaderRole;
    fromJSON(object: any): MsgClaimUploaderRole;
    toJSON(message: MsgClaimUploaderRole): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
    } & {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgClaimUploaderRole>]: never; }>(object: I): MsgClaimUploaderRole;
};
export declare const MsgClaimUploaderRoleResponse: {
    encode(_: MsgClaimUploaderRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUploaderRoleResponse;
    fromJSON(_: any): MsgClaimUploaderRoleResponse;
    toJSON(_: MsgClaimUploaderRoleResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgClaimUploaderRoleResponse;
};
export declare const MsgSkipUploaderRole: {
    encode(message: MsgSkipUploaderRole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSkipUploaderRole;
    fromJSON(object: any): MsgSkipUploaderRole;
    toJSON(message: MsgSkipUploaderRole): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        from_index?: string | undefined;
    } & {
        creator?: string | undefined;
        staker?: string | undefined;
        pool_id?: string | undefined;
        from_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgSkipUploaderRole>]: never; }>(object: I): MsgSkipUploaderRole;
};
export declare const MsgSkipUploaderRoleResponse: {
    encode(_: MsgSkipUploaderRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSkipUploaderRoleResponse;
    fromJSON(_: any): MsgSkipUploaderRoleResponse;
    toJSON(_: MsgSkipUploaderRoleResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSkipUploaderRoleResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        payload?: string | undefined;
    } & {
        authority?: string | undefined;
        payload?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateParamsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** SubmitBundleProposal ... */
    SubmitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse>;
    /** VoteBundleProposal ... */
    VoteBundleProposal(request: MsgVoteBundleProposal): Promise<MsgVoteBundleProposalResponse>;
    /** ClaimUploaderRole ... */
    ClaimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse>;
    /** SkipUploaderRole ... */
    SkipUploaderRole(request: MsgSkipUploaderRole): Promise<MsgSkipUploaderRoleResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/bundles module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SubmitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse>;
    VoteBundleProposal(request: MsgVoteBundleProposal): Promise<MsgVoteBundleProposalResponse>;
    ClaimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse>;
    SkipUploaderRole(request: MsgSkipUploaderRole): Promise<MsgSkipUploaderRoleResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
