import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Member, VoteOption } from "./types";
export declare const protobufPackage = "cosmos.group.v1";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    group_id: string;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    member_updates: Member[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** new_admin is the group new admin account address. */
    new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: Any;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of the group policy. */
    address: string;
    /** new_admin is the new group policy admin. */
    new_admin: string;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    group_metadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    group_policy_metadata: string;
    /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
    group_policy_as_admin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: Any;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
    /** group_id is the unique ID of the newly created group with policy. */
    group_id: string;
    /** group_policy_address is the account address of the newly created group policy. */
    group_policy_address: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** decision_policy is the updated group policy's decision policy. */
    decision_policy?: Any;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
    /** address is the account address of group policy. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}
export declare const MsgCreateGroup: {
    encode(message: MsgCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroup;
    fromJSON(object: any): MsgCreateGroup;
    toJSON(message: MsgCreateGroup): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        members?: {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[] | undefined;
        metadata?: string | undefined;
    } & {
        admin?: string | undefined;
        members?: ({
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        } & { [K in Exclude<keyof I["members"][number], keyof Member>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[]>]: never; }) | undefined;
        metadata?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateGroup>]: never; }>(object: I): MsgCreateGroup;
};
export declare const MsgCreateGroupResponse: {
    encode(message: MsgCreateGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupResponse;
    fromJSON(object: any): MsgCreateGroupResponse;
    toJSON(message: MsgCreateGroupResponse): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
    } & {
        group_id?: string | undefined;
    } & { [K in Exclude<keyof I, "group_id">]: never; }>(object: I): MsgCreateGroupResponse;
};
export declare const MsgUpdateGroupMembers: {
    encode(message: MsgUpdateGroupMembers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembers;
    fromJSON(object: any): MsgUpdateGroupMembers;
    toJSON(message: MsgUpdateGroupMembers): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        group_id?: string | undefined;
        member_updates?: {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[] | undefined;
    } & {
        admin?: string | undefined;
        group_id?: string | undefined;
        member_updates?: ({
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        } & { [K in Exclude<keyof I["member_updates"][number], keyof Member>]: never; })[] & { [K_1 in Exclude<keyof I["member_updates"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgUpdateGroupMembers>]: never; }>(object: I): MsgUpdateGroupMembers;
};
export declare const MsgUpdateGroupMembersResponse: {
    encode(_: MsgUpdateGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse;
    fromJSON(_: any): MsgUpdateGroupMembersResponse;
    toJSON(_: MsgUpdateGroupMembersResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateGroupMembersResponse;
};
export declare const MsgUpdateGroupAdmin: {
    encode(message: MsgUpdateGroupAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdmin;
    fromJSON(object: any): MsgUpdateGroupAdmin;
    toJSON(message: MsgUpdateGroupAdmin): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        group_id?: string | undefined;
        new_admin?: string | undefined;
    } & {
        admin?: string | undefined;
        group_id?: string | undefined;
        new_admin?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateGroupAdmin>]: never; }>(object: I): MsgUpdateGroupAdmin;
};
export declare const MsgUpdateGroupAdminResponse: {
    encode(_: MsgUpdateGroupAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse;
    fromJSON(_: any): MsgUpdateGroupAdminResponse;
    toJSON(_: MsgUpdateGroupAdminResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateGroupAdminResponse;
};
export declare const MsgUpdateGroupMetadata: {
    encode(message: MsgUpdateGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadata;
    fromJSON(object: any): MsgUpdateGroupMetadata;
    toJSON(message: MsgUpdateGroupMetadata): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        group_id?: string | undefined;
        metadata?: string | undefined;
    } & {
        admin?: string | undefined;
        group_id?: string | undefined;
        metadata?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateGroupMetadata>]: never; }>(object: I): MsgUpdateGroupMetadata;
};
export declare const MsgUpdateGroupMetadataResponse: {
    encode(_: MsgUpdateGroupMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupMetadataResponse;
    toJSON(_: MsgUpdateGroupMetadataResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateGroupMetadataResponse;
};
export declare const MsgCreateGroupPolicy: {
    encode(message: MsgCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicy;
    fromJSON(object: any): MsgCreateGroupPolicy;
    toJSON(message: MsgCreateGroupPolicy): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        group_id?: string | undefined;
        metadata?: string | undefined;
        decision_policy?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        admin?: string | undefined;
        group_id?: string | undefined;
        metadata?: string | undefined;
        decision_policy?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["decision_policy"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgCreateGroupPolicy>]: never; }>(object: I): MsgCreateGroupPolicy;
};
export declare const MsgCreateGroupPolicyResponse: {
    encode(message: MsgCreateGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse;
    fromJSON(object: any): MsgCreateGroupPolicyResponse;
    toJSON(message: MsgCreateGroupPolicyResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(object: I): MsgCreateGroupPolicyResponse;
};
export declare const MsgUpdateGroupPolicyAdmin: {
    encode(message: MsgUpdateGroupPolicyAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin;
    fromJSON(object: any): MsgUpdateGroupPolicyAdmin;
    toJSON(message: MsgUpdateGroupPolicyAdmin): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        address?: string | undefined;
        new_admin?: string | undefined;
    } & {
        admin?: string | undefined;
        address?: string | undefined;
        new_admin?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateGroupPolicyAdmin>]: never; }>(object: I): MsgUpdateGroupPolicyAdmin;
};
export declare const MsgCreateGroupWithPolicy: {
    encode(message: MsgCreateGroupWithPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicy;
    fromJSON(object: any): MsgCreateGroupWithPolicy;
    toJSON(message: MsgCreateGroupWithPolicy): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        members?: {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[] | undefined;
        group_metadata?: string | undefined;
        group_policy_metadata?: string | undefined;
        group_policy_as_admin?: boolean | undefined;
        decision_policy?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        admin?: string | undefined;
        members?: ({
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        } & { [K in Exclude<keyof I["members"][number], keyof Member>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
            metadata?: string | undefined;
            added_at?: Date | undefined;
        }[]>]: never; }) | undefined;
        group_metadata?: string | undefined;
        group_policy_metadata?: string | undefined;
        group_policy_as_admin?: boolean | undefined;
        decision_policy?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I["decision_policy"], keyof Any>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgCreateGroupWithPolicy>]: never; }>(object: I): MsgCreateGroupWithPolicy;
};
export declare const MsgCreateGroupWithPolicyResponse: {
    encode(message: MsgCreateGroupWithPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse;
    fromJSON(object: any): MsgCreateGroupWithPolicyResponse;
    toJSON(message: MsgCreateGroupWithPolicyResponse): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
        group_policy_address?: string | undefined;
    } & {
        group_id?: string | undefined;
        group_policy_address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateGroupWithPolicyResponse>]: never; }>(object: I): MsgCreateGroupWithPolicyResponse;
};
export declare const MsgUpdateGroupPolicyAdminResponse: {
    encode(_: MsgUpdateGroupPolicyAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse;
    toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateGroupPolicyAdminResponse;
};
export declare const MsgUpdateGroupPolicyDecisionPolicy: {
    encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy;
    fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy;
    toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        address?: string | undefined;
        decision_policy?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        admin?: string | undefined;
        address?: string | undefined;
        decision_policy?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["decision_policy"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgUpdateGroupPolicyDecisionPolicy>]: never; }>(object: I): MsgUpdateGroupPolicyDecisionPolicy;
};
export declare const MsgUpdateGroupPolicyDecisionPolicyResponse: {
    encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse;
    toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateGroupPolicyDecisionPolicyResponse;
};
export declare const MsgUpdateGroupPolicyMetadata: {
    encode(message: MsgUpdateGroupPolicyMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata;
    fromJSON(object: any): MsgUpdateGroupPolicyMetadata;
    toJSON(message: MsgUpdateGroupPolicyMetadata): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        address?: string | undefined;
        metadata?: string | undefined;
    } & {
        admin?: string | undefined;
        address?: string | undefined;
        metadata?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateGroupPolicyMetadata>]: never; }>(object: I): MsgUpdateGroupPolicyMetadata;
};
export declare const MsgUpdateGroupPolicyMetadataResponse: {
    encode(_: MsgUpdateGroupPolicyMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse;
    fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse;
    toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateGroupPolicyMetadataResponse;
};
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        proposers?: string[] | undefined;
        metadata?: string | undefined;
        messages?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        exec?: Exec | undefined;
    } & {
        address?: string | undefined;
        proposers?: (string[] & string[] & { [K in Exclude<keyof I["proposers"], keyof string[]>]: never; }) | undefined;
        metadata?: string | undefined;
        messages?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["messages"][number], keyof Any>]: never; })[] & { [K_2 in Exclude<keyof I["messages"], keyof {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
        exec?: Exec | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgSubmitProposal>]: never; }>(object: I): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): MsgSubmitProposalResponse;
};
export declare const MsgWithdrawProposal: {
    encode(message: MsgWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposal;
    fromJSON(object: any): MsgWithdrawProposal;
    toJSON(message: MsgWithdrawProposal): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        address?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgWithdrawProposal>]: never; }>(object: I): MsgWithdrawProposal;
};
export declare const MsgWithdrawProposalResponse: {
    encode(_: MsgWithdrawProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawProposalResponse;
    fromJSON(_: any): MsgWithdrawProposalResponse;
    toJSON(_: MsgWithdrawProposalResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgWithdrawProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        voter?: string | undefined;
        option?: VoteOption | undefined;
        metadata?: string | undefined;
        exec?: Exec | undefined;
    } & {
        proposal_id?: string | undefined;
        voter?: string | undefined;
        option?: VoteOption | undefined;
        metadata?: string | undefined;
        exec?: Exec | undefined;
    } & { [K in Exclude<keyof I, keyof MsgVote>]: never; }>(object: I): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgVoteResponse;
};
export declare const MsgExec: {
    encode(message: MsgExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExec;
    fromJSON(object: any): MsgExec;
    toJSON(message: MsgExec): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        signer?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        signer?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgExec>]: never; }>(object: I): MsgExec;
};
export declare const MsgExecResponse: {
    encode(_: MsgExecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecResponse;
    fromJSON(_: any): MsgExecResponse;
    toJSON(_: MsgExecResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgExecResponse;
};
export declare const MsgLeaveGroup: {
    encode(message: MsgLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroup;
    fromJSON(object: any): MsgLeaveGroup;
    toJSON(message: MsgLeaveGroup): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        group_id?: string | undefined;
    } & {
        address?: string | undefined;
        group_id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgLeaveGroup>]: never; }>(object: I): MsgLeaveGroup;
};
export declare const MsgLeaveGroupResponse: {
    encode(_: MsgLeaveGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaveGroupResponse;
    fromJSON(_: any): MsgLeaveGroupResponse;
    toJSON(_: MsgLeaveGroupResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgLeaveGroupResponse;
};
/** Msg is the cosmos.group.v1 Msg service. */
export interface Msg {
    /** CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
    CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    /** UpdateGroupMembers updates the group members with given group id and admin address. */
    UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    /** UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
    UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    /** UpdateGroupMetadata updates the group metadata with given group id and admin address. */
    UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    /** CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
    CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
    /** CreateGroupWithPolicy creates a new group with policy. */
    CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
    /** UpdateGroupPolicyAdmin updates a group policy admin. */
    UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
    /** UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
    UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    /** UpdateGroupPolicyMetadata updates a group policy metadata. */
    UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    /** SubmitProposal submits a new proposal. */
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /** WithdrawProposal aborts a proposal. */
    WithdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
    /** Vote allows a voter to vote on a proposal. */
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    /** Exec executes a proposal. */
    Exec(request: MsgExec): Promise<MsgExecResponse>;
    /** LeaveGroup allows a group member to leave the group. */
    LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    UpdateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    UpdateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    UpdateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    CreateGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
    CreateGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
    UpdateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
    UpdateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    UpdateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    WithdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    Exec(request: MsgExec): Promise<MsgExecResponse>;
    LeaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
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
