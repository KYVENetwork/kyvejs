import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote } from "./types";
export declare const protobufPackage = "cosmos.group.v1";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
    /** info is the GroupInfo for the group. */
    info?: GroupInfo;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
    /** address is the account address of the group policy. */
    address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
    /** info is the GroupPolicyInfo for the group policy. */
    info?: GroupPolicyInfo;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
    /** members are the members of the group with given group_id. */
    members: GroupMember[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
    /** group_id is the unique ID of the group policy's group. */
    group_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
    /** group_policies are the group policies info associated with the provided group. */
    group_policies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
    /** admin is the admin address of the group policy. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
    /** group_policies are the group policies info with provided admin. */
    group_policies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
    /** proposal is the proposal info. */
    proposal?: Proposal;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
    /** address is the account address of the group policy related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
    /** proposals are the proposals with given group policy. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
    /** voter is a proposal voter account address. */
    voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
    /** vote is the vote with given proposal_id and voter. */
    vote?: Vote;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
    /** votes are the list of votes for given proposal_id. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
    /** votes are the list of votes by given voter. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
    /** address is the group member address. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
    /** groups are the groups info with the provided group member. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
    /** proposal_id is the unique id of a proposal. */
    proposal_id: string;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
export declare const QueryGroupInfoRequest: {
    encode(message: QueryGroupInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoRequest;
    fromJSON(object: any): QueryGroupInfoRequest;
    toJSON(message: QueryGroupInfoRequest): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
    } & {
        group_id?: string | undefined;
    } & { [K in Exclude<keyof I, "group_id">]: never; }>(object: I): QueryGroupInfoRequest;
};
export declare const QueryGroupInfoResponse: {
    encode(message: QueryGroupInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoResponse;
    fromJSON(object: any): QueryGroupInfoResponse;
    toJSON(message: QueryGroupInfoResponse): unknown;
    fromPartial<I extends {
        info?: {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } | undefined;
    } & {
        info?: ({
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } & {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } & { [K in Exclude<keyof I["info"], keyof GroupInfo>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "info">]: never; }>(object: I): QueryGroupInfoResponse;
};
export declare const QueryGroupPolicyInfoRequest: {
    encode(message: QueryGroupPolicyInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest;
    fromJSON(object: any): QueryGroupPolicyInfoRequest;
    toJSON(message: QueryGroupPolicyInfoRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(object: I): QueryGroupPolicyInfoRequest;
};
export declare const QueryGroupPolicyInfoResponse: {
    encode(message: QueryGroupPolicyInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse;
    fromJSON(object: any): QueryGroupPolicyInfoResponse;
    toJSON(message: QueryGroupPolicyInfoResponse): unknown;
    fromPartial<I extends {
        info?: {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        } | undefined;
    } & {
        info?: ({
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        } & {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["info"]["decision_policy"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            created_at?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["info"], keyof GroupPolicyInfo>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "info">]: never; }>(object: I): QueryGroupPolicyInfoResponse;
};
export declare const QueryGroupMembersRequest: {
    encode(message: QueryGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersRequest;
    fromJSON(object: any): QueryGroupMembersRequest;
    toJSON(message: QueryGroupMembersRequest): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        group_id?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryGroupMembersRequest>]: never; }>(object: I): QueryGroupMembersRequest;
};
export declare const QueryGroupMembersResponse: {
    encode(message: QueryGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersResponse;
    fromJSON(object: any): QueryGroupMembersResponse;
    toJSON(message: QueryGroupMembersResponse): unknown;
    fromPartial<I extends {
        members?: {
            group_id?: string | undefined;
            member?: {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        members?: ({
            group_id?: string | undefined;
            member?: {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } | undefined;
        }[] & ({
            group_id?: string | undefined;
            member?: {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } | undefined;
        } & {
            group_id?: string | undefined;
            member?: ({
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } & {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } & { [K in Exclude<keyof I["members"][number]["member"], keyof import("./types").Member>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["members"][number], keyof GroupMember>]: never; })[] & { [K_2 in Exclude<keyof I["members"], keyof {
            group_id?: string | undefined;
            member?: {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryGroupMembersResponse>]: never; }>(object: I): QueryGroupMembersResponse;
};
export declare const QueryGroupsByAdminRequest: {
    encode(message: QueryGroupsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminRequest;
    fromJSON(object: any): QueryGroupsByAdminRequest;
    toJSON(message: QueryGroupsByAdminRequest): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        admin?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryGroupsByAdminRequest>]: never; }>(object: I): QueryGroupsByAdminRequest;
};
export declare const QueryGroupsByAdminResponse: {
    encode(message: QueryGroupsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminResponse;
    fromJSON(object: any): QueryGroupsByAdminResponse;
    toJSON(message: QueryGroupsByAdminResponse): unknown;
    fromPartial<I extends {
        groups?: {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        groups?: ({
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[] & ({
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } & {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } & { [K in Exclude<keyof I["groups"][number], keyof GroupInfo>]: never; })[] & { [K_1 in Exclude<keyof I["groups"], keyof {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryGroupsByAdminResponse>]: never; }>(object: I): QueryGroupsByAdminResponse;
};
export declare const QueryGroupPoliciesByGroupRequest: {
    encode(message: QueryGroupPoliciesByGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest;
    fromJSON(object: any): QueryGroupPoliciesByGroupRequest;
    toJSON(message: QueryGroupPoliciesByGroupRequest): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        group_id?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryGroupPoliciesByGroupRequest>]: never; }>(object: I): QueryGroupPoliciesByGroupRequest;
};
export declare const QueryGroupPoliciesByGroupResponse: {
    encode(message: QueryGroupPoliciesByGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse;
    fromJSON(object: any): QueryGroupPoliciesByGroupResponse;
    toJSON(message: QueryGroupPoliciesByGroupResponse): unknown;
    fromPartial<I extends {
        group_policies?: {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        group_policies?: ({
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        }[] & ({
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        } & {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["group_policies"][number]["decision_policy"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            created_at?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["group_policies"][number], keyof GroupPolicyInfo>]: never; })[] & { [K_2 in Exclude<keyof I["group_policies"], keyof {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryGroupPoliciesByGroupResponse>]: never; }>(object: I): QueryGroupPoliciesByGroupResponse;
};
export declare const QueryGroupPoliciesByAdminRequest: {
    encode(message: QueryGroupPoliciesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest;
    fromJSON(object: any): QueryGroupPoliciesByAdminRequest;
    toJSON(message: QueryGroupPoliciesByAdminRequest): unknown;
    fromPartial<I extends {
        admin?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        admin?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryGroupPoliciesByAdminRequest>]: never; }>(object: I): QueryGroupPoliciesByAdminRequest;
};
export declare const QueryGroupPoliciesByAdminResponse: {
    encode(message: QueryGroupPoliciesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse;
    fromJSON(object: any): QueryGroupPoliciesByAdminResponse;
    toJSON(message: QueryGroupPoliciesByAdminResponse): unknown;
    fromPartial<I extends {
        group_policies?: {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        group_policies?: ({
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        }[] & ({
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        } & {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["group_policies"][number]["decision_policy"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            created_at?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["group_policies"][number], keyof GroupPolicyInfo>]: never; })[] & { [K_2 in Exclude<keyof I["group_policies"], keyof {
            address?: string | undefined;
            group_id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            decision_policy?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            created_at?: Date | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryGroupPoliciesByAdminResponse>]: never; }>(object: I): QueryGroupPoliciesByAdminResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: string[] | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        proposal?: ({
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: string[] | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: (string[] & string[] & { [K in Exclude<keyof I["proposal"]["proposers"], keyof string[]>]: never; }) | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: ({
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } & {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } & { [K_1 in Exclude<keyof I["proposal"]["final_tally_result"], keyof TallyResult>]: never; }) | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_2 in Exclude<keyof I["proposal"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_3 in Exclude<keyof I["proposal"]["messages"], keyof {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["proposal"], keyof Proposal>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "proposal">]: never; }>(object: I): QueryProposalResponse;
};
export declare const QueryProposalsByGroupPolicyRequest: {
    encode(message: QueryProposalsByGroupPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest;
    fromJSON(object: any): QueryProposalsByGroupPolicyRequest;
    toJSON(message: QueryProposalsByGroupPolicyRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryProposalsByGroupPolicyRequest>]: never; }>(object: I): QueryProposalsByGroupPolicyRequest;
};
export declare const QueryProposalsByGroupPolicyResponse: {
    encode(message: QueryProposalsByGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse;
    fromJSON(object: any): QueryProposalsByGroupPolicyResponse;
    toJSON(message: QueryProposalsByGroupPolicyResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: string[] | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        proposals?: ({
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: string[] | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[] & ({
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: string[] | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: (string[] & string[] & { [K in Exclude<keyof I["proposals"][number]["proposers"], keyof string[]>]: never; }) | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: ({
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } & {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } & { [K_1 in Exclude<keyof I["proposals"][number]["final_tally_result"], keyof TallyResult>]: never; }) | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_2 in Exclude<keyof I["proposals"][number]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_3 in Exclude<keyof I["proposals"][number]["messages"], keyof {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["proposals"][number], keyof Proposal>]: never; })[] & { [K_5 in Exclude<keyof I["proposals"], keyof {
            id?: string | undefined;
            address?: string | undefined;
            metadata?: string | undefined;
            proposers?: string[] | undefined;
            submit_time?: Date | undefined;
            group_version?: string | undefined;
            group_policy_version?: string | undefined;
            status?: import("./types").ProposalStatus | undefined;
            result?: import("./types").ProposalResult | undefined;
            final_tally_result?: {
                yes_count?: string | undefined;
                abstain_count?: string | undefined;
                no_count?: string | undefined;
                no_with_veto_count?: string | undefined;
            } | undefined;
            voting_period_end?: Date | undefined;
            executor_result?: import("./types").ProposalExecutorResult | undefined;
            messages?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_6 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof QueryProposalsByGroupPolicyResponse>]: never; }>(object: I): QueryProposalsByGroupPolicyResponse;
};
export declare const QueryVoteByProposalVoterRequest: {
    encode(message: QueryVoteByProposalVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest;
    fromJSON(object: any): QueryVoteByProposalVoterRequest;
    toJSON(message: QueryVoteByProposalVoterRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        voter?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        voter?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryVoteByProposalVoterRequest>]: never; }>(object: I): QueryVoteByProposalVoterRequest;
};
export declare const QueryVoteByProposalVoterResponse: {
    encode(message: QueryVoteByProposalVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse;
    fromJSON(object: any): QueryVoteByProposalVoterResponse;
    toJSON(message: QueryVoteByProposalVoterResponse): unknown;
    fromPartial<I extends {
        vote?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } | undefined;
    } & {
        vote?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } & { [K in Exclude<keyof I["vote"], keyof Vote>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "vote">]: never; }>(object: I): QueryVoteByProposalVoterResponse;
};
export declare const QueryVotesByProposalRequest: {
    encode(message: QueryVotesByProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalRequest;
    fromJSON(object: any): QueryVotesByProposalRequest;
    toJSON(message: QueryVotesByProposalRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        proposal_id?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryVotesByProposalRequest>]: never; }>(object: I): QueryVotesByProposalRequest;
};
export declare const QueryVotesByProposalResponse: {
    encode(message: QueryVotesByProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalResponse;
    fromJSON(object: any): QueryVotesByProposalResponse;
    toJSON(message: QueryVotesByProposalResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        votes?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } & { [K in Exclude<keyof I["votes"][number], keyof Vote>]: never; })[] & { [K_1 in Exclude<keyof I["votes"], keyof {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryVotesByProposalResponse>]: never; }>(object: I): QueryVotesByProposalResponse;
};
export declare const QueryVotesByVoterRequest: {
    encode(message: QueryVotesByVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterRequest;
    fromJSON(object: any): QueryVotesByVoterRequest;
    toJSON(message: QueryVotesByVoterRequest): unknown;
    fromPartial<I extends {
        voter?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        voter?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryVotesByVoterRequest>]: never; }>(object: I): QueryVotesByVoterRequest;
};
export declare const QueryVotesByVoterResponse: {
    encode(message: QueryVotesByVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterResponse;
    fromJSON(object: any): QueryVotesByVoterResponse;
    toJSON(message: QueryVotesByVoterResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        votes?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        } & { [K in Exclude<keyof I["votes"][number], keyof Vote>]: never; })[] & { [K_1 in Exclude<keyof I["votes"], keyof {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryVotesByVoterResponse>]: never; }>(object: I): QueryVotesByVoterResponse;
};
export declare const QueryGroupsByMemberRequest: {
    encode(message: QueryGroupsByMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberRequest;
    fromJSON(object: any): QueryGroupsByMemberRequest;
    toJSON(message: QueryGroupsByMemberRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryGroupsByMemberRequest>]: never; }>(object: I): QueryGroupsByMemberRequest;
};
export declare const QueryGroupsByMemberResponse: {
    encode(message: QueryGroupsByMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberResponse;
    fromJSON(object: any): QueryGroupsByMemberResponse;
    toJSON(message: QueryGroupsByMemberResponse): unknown;
    fromPartial<I extends {
        groups?: {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        groups?: ({
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[] & ({
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } & {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        } & { [K in Exclude<keyof I["groups"][number], keyof GroupInfo>]: never; })[] & { [K_1 in Exclude<keyof I["groups"], keyof {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryGroupsByMemberResponse>]: never; }>(object: I): QueryGroupsByMemberResponse;
};
export declare const QueryTallyResultRequest: {
    encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
    encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial<I extends {
        tally?: {
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
        } | undefined;
    } & {
        tally?: ({
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
        } & {
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
        } & { [K in Exclude<keyof I["tally"], keyof TallyResult>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "tally">]: never; }>(object: I): QueryTallyResultResponse;
};
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
    /** GroupInfo queries group info based on group id. */
    GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    GroupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    /** GroupMembers queries members of a group */
    GroupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    /** GroupsByAdmin queries groups by admin address. */
    GroupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    /** GroupPoliciesByGroup queries group policies by group id. */
    GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    /** GroupsByAdmin queries group policies by admin address. */
    GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    /** Proposal queries a proposal based on proposal id. */
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    VoteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    /** VotesByProposal queries a vote by proposal. */
    VotesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    /** VotesByVoter queries a vote by voter. */
    VotesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    /** GroupsByMember queries groups by member address. */
    GroupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    /** TallyResult queries the tally of a proposal votes. */
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    GroupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    GroupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    GroupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    GroupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    GroupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    ProposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    VoteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    VotesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    VotesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    GroupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
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
