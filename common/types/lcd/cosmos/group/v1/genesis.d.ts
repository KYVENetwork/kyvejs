import _m0 from "protobufjs/minimal";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
export declare const protobufPackage = "cosmos.group.v1";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
    /**
     * group_seq is the group table orm.Sequence,
     * it is used to get the next group ID.
     */
    group_seq: string;
    /** groups is the list of groups info. */
    groups: GroupInfo[];
    /** group_members is the list of groups members. */
    group_members: GroupMember[];
    /**
     * group_policy_seq is the group policy table orm.Sequence,
     * it is used to generate the next group policy account address.
     */
    group_policy_seq: string;
    /** group_policies is the list of group policies info. */
    group_policies: GroupPolicyInfo[];
    /**
     * proposal_seq is the proposal table orm.Sequence,
     * it is used to get the next proposal ID.
     */
    proposal_seq: string;
    /** proposals is the list of proposals. */
    proposals: Proposal[];
    /** votes is the list of votes. */
    votes: Vote[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        group_seq?: string | undefined;
        groups?: {
            id?: string | undefined;
            admin?: string | undefined;
            metadata?: string | undefined;
            version?: string | undefined;
            total_weight?: string | undefined;
            created_at?: Date | undefined;
        }[] | undefined;
        group_members?: {
            group_id?: string | undefined;
            member?: {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } | undefined;
        }[] | undefined;
        group_policy_seq?: string | undefined;
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
        proposal_seq?: string | undefined;
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
        votes?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[] | undefined;
    } & {
        group_seq?: string | undefined;
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
        group_members?: ({
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
            } & { [K_2 in Exclude<keyof I["group_members"][number]["member"], keyof import("./types").Member>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["group_members"][number], keyof GroupMember>]: never; })[] & { [K_4 in Exclude<keyof I["group_members"], keyof {
            group_id?: string | undefined;
            member?: {
                address?: string | undefined;
                weight?: string | undefined;
                metadata?: string | undefined;
                added_at?: Date | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        group_policy_seq?: string | undefined;
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
            } & { [K_5 in Exclude<keyof I["group_policies"][number]["decision_policy"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            created_at?: Date | undefined;
        } & { [K_6 in Exclude<keyof I["group_policies"][number], keyof GroupPolicyInfo>]: never; })[] & { [K_7 in Exclude<keyof I["group_policies"], keyof {
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
        proposal_seq?: string | undefined;
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
            proposers?: (string[] & string[] & { [K_8 in Exclude<keyof I["proposals"][number]["proposers"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_9 in Exclude<keyof I["proposals"][number]["final_tally_result"], keyof import("./types").TallyResult>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I["proposals"][number]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_11 in Exclude<keyof I["proposals"][number]["messages"], keyof {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["proposals"][number], keyof Proposal>]: never; })[] & { [K_13 in Exclude<keyof I["proposals"], keyof {
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
        } & { [K_14 in Exclude<keyof I["votes"][number], keyof Vote>]: never; })[] & { [K_15 in Exclude<keyof I["votes"], keyof {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./types").VoteOption | undefined;
            metadata?: string | undefined;
            submit_time?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
