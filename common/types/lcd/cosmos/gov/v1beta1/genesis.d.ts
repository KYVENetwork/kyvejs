import _m0 from "protobufjs/minimal";
import { Deposit, DepositParams, Proposal, TallyParams, Vote, VotingParams } from "./gov";
export declare const protobufPackage = "cosmos.gov.v1beta1";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    starting_proposal_id: string;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    deposit_params?: DepositParams;
    /** params defines all the paramaters of related to voting. */
    voting_params?: VotingParams;
    /** params defines all the paramaters of related to tally. */
    tally_params?: TallyParams;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        starting_proposal_id?: string | undefined;
        deposits?: {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        votes?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        proposals?: {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: Date | undefined;
            deposit_end_time?: Date | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: Date | undefined;
            voting_end_time?: Date | undefined;
        }[] | undefined;
        deposit_params?: {
            min_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            max_deposit_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        voting_params?: {
            voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        tally_params?: {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
        } | undefined;
    } & {
        starting_proposal_id?: string | undefined;
        deposits?: ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["deposits"][number], keyof Deposit>]: never; })[] & { [K_3 in Exclude<keyof I["deposits"], keyof {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        votes?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] & ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & { [K_4 in Exclude<keyof I["votes"][number]["options"][number], keyof import("./gov").WeightedVoteOption>]: never; })[] & { [K_5 in Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["votes"][number], keyof Vote>]: never; })[] & { [K_7 in Exclude<keyof I["votes"], keyof {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        proposals?: ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: Date | undefined;
            deposit_end_time?: Date | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: Date | undefined;
            voting_end_time?: Date | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: Date | undefined;
            deposit_end_time?: Date | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: Date | undefined;
            voting_end_time?: Date | undefined;
        } & {
            proposal_id?: string | undefined;
            content?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_8 in Exclude<keyof I["proposals"][number]["content"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: ({
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & { [K_9 in Exclude<keyof I["proposals"][number]["final_tally_result"], keyof import("./gov").TallyResult>]: never; }) | undefined;
            submit_time?: Date | undefined;
            deposit_end_time?: Date | undefined;
            total_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_10 in Exclude<keyof I["proposals"][number]["total_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_11 in Exclude<keyof I["proposals"][number]["total_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            voting_start_time?: Date | undefined;
            voting_end_time?: Date | undefined;
        } & { [K_12 in Exclude<keyof I["proposals"][number], keyof Proposal>]: never; })[] & { [K_13 in Exclude<keyof I["proposals"], keyof {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: Date | undefined;
            deposit_end_time?: Date | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: Date | undefined;
            voting_end_time?: Date | undefined;
        }[]>]: never; }) | undefined;
        deposit_params?: ({
            min_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            max_deposit_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            min_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_14 in Exclude<keyof I["deposit_params"]["min_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_15 in Exclude<keyof I["deposit_params"]["min_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            max_deposit_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & { [K_16 in Exclude<keyof I["deposit_params"]["max_deposit_period"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["deposit_params"], keyof DepositParams>]: never; }) | undefined;
        voting_params?: ({
            voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            voting_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & { [K_18 in Exclude<keyof I["voting_params"]["voting_period"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
        } & { [K_19 in Exclude<keyof I["voting_params"], "voting_period">]: never; }) | undefined;
        tally_params?: ({
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
        } & {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
        } & { [K_20 in Exclude<keyof I["tally_params"], keyof TallyParams>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
