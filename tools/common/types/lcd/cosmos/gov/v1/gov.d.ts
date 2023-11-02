import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.gov.v1";
/** Since: cosmos-sdk 0.46 */
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export declare enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = "VOTE_OPTION_UNSPECIFIED",
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = "VOTE_OPTION_YES",
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = "VOTE_OPTION_ABSTAIN",
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = "VOTE_OPTION_NO",
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = "VOTE_OPTION_NO_WITH_VETO",
  UNRECOGNIZED = "UNRECOGNIZED",
}
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
export declare function voteOptionToNumber(object: VoteOption): number;
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = "PROPOSAL_STATUS_UNSPECIFIED",
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = "PROPOSAL_STATUS_DEPOSIT_PERIOD",
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = "PROPOSAL_STATUS_VOTING_PERIOD",
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = "PROPOSAL_STATUS_PASSED",
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = "PROPOSAL_STATUS_REJECTED",
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = "PROPOSAL_STATUS_FAILED",
  UNRECOGNIZED = "UNRECOGNIZED",
}
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
export declare function proposalStatusToNumber(object: ProposalStatus): number;
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** id defines the unique id of the proposal. */
  id: string;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: Any[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResult | undefined;
  /** submit_time is the time of proposal submission. */
  submit_time?: Date | undefined;
  /** deposit_end_time is the end time for deposition. */
  deposit_end_time?: Date | undefined;
  /** total_deposit is the total deposit on the proposal. */
  total_deposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  voting_start_time?: Date | undefined;
  /** voting_end_time is the end time of voting on a proposal. */
  voting_end_time?: Date | undefined;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /**
   * title is the title of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * Proposer is the address of the proposal sumbitter
   *
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes_count is the number of yes votes on a proposal. */
  yes_count: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstain_count: string;
  /** no_count is the number of no votes on a proposal. */
  no_count: string;
  /** no_with_veto_count is the number of no with veto votes on a proposal. */
  no_with_veto_count: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOption[];
  /** metadata is any  arbitrary metadata to attached to the vote. */
  metadata: string;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: Duration | undefined;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Duration of the voting period. */
  voting_period?: Duration | undefined;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  veto_threshold: string;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface Params {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: Duration | undefined;
  /** Duration of the voting period. */
  voting_period?: Duration | undefined;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  veto_threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  min_initial_deposit_ratio: string;
  /** burn deposits if a proposal does not meet quorum */
  burn_vote_quorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burn_proposal_deposit_prevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */
  burn_vote_veto: boolean;
}
export declare const WeightedVoteOption: {
  encode(message: WeightedVoteOption, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption;
  fromJSON(object: any): WeightedVoteOption;
  toJSON(message: WeightedVoteOption): unknown;
  create<
    I extends {
      option?: VoteOption | undefined;
      weight?: string | undefined;
    } & {
      option?: VoteOption | undefined;
      weight?: string | undefined;
    } & { [K in Exclude<keyof I, keyof WeightedVoteOption>]: never }
  >(
    base?: I | undefined
  ): WeightedVoteOption;
  fromPartial<
    I_1 extends {
      option?: VoteOption | undefined;
      weight?: string | undefined;
    } & {
      option?: VoteOption | undefined;
      weight?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof WeightedVoteOption>]: never }
  >(
    object: I_1
  ): WeightedVoteOption;
};
export declare const Deposit: {
  encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
  fromJSON(object: any): Deposit;
  toJSON(message: Deposit): unknown;
  create<
    I extends {
      proposal_id?: string | undefined;
      depositor?: string | undefined;
      amount?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
    } & {
      proposal_id?: string | undefined;
      depositor?: string | undefined;
      amount?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K in Exclude<keyof I["amount"][number], keyof Coin>]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["amount"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Deposit>]: never }
  >(
    base?: I | undefined
  ): Deposit;
  fromPartial<
    I_1 extends {
      proposal_id?: string | undefined;
      depositor?: string | undefined;
      amount?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
    } & {
      proposal_id?: string | undefined;
      depositor?: string | undefined;
      amount?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K_3 in Exclude<keyof I_1["amount"][number], keyof Coin>]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I_1["amount"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Deposit>]: never }
  >(
    object: I_1
  ): Deposit;
};
export declare const Proposal: {
  encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
  fromJSON(object: any): Proposal;
  toJSON(message: Proposal): unknown;
  create<
    I extends {
      id?: string | undefined;
      messages?:
        | {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
          }[]
        | undefined;
      status?: ProposalStatus | undefined;
      final_tally_result?:
        | {
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
          }
        | undefined;
      submit_time?: Date | undefined;
      deposit_end_time?: Date | undefined;
      total_deposit?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      voting_start_time?: Date | undefined;
      voting_end_time?: Date | undefined;
      metadata?: string | undefined;
      title?: string | undefined;
      summary?: string | undefined;
      proposer?: string | undefined;
    } & {
      id?: string | undefined;
      messages?:
        | ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
          }[] &
            ({
              type_url?: string | undefined;
              value?: Uint8Array | undefined;
            } & {
              type_url?: string | undefined;
              value?: Uint8Array | undefined;
            } & {
              [K in Exclude<keyof I["messages"][number], keyof Any>]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["messages"],
                keyof {
                  type_url?: string | undefined;
                  value?: Uint8Array | undefined;
                }[]
              >]: never;
            })
        | undefined;
      status?: ProposalStatus | undefined;
      final_tally_result?:
        | ({
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
          } & {
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
          } & {
            [K_2 in Exclude<
              keyof I["final_tally_result"],
              keyof TallyResult
            >]: never;
          })
        | undefined;
      submit_time?: Date | undefined;
      deposit_end_time?: Date | undefined;
      total_deposit?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I["total_deposit"][number],
                keyof Coin
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["total_deposit"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      voting_start_time?: Date | undefined;
      voting_end_time?: Date | undefined;
      metadata?: string | undefined;
      title?: string | undefined;
      summary?: string | undefined;
      proposer?: string | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Proposal>]: never }
  >(
    base?: I | undefined
  ): Proposal;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
      messages?:
        | {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
          }[]
        | undefined;
      status?: ProposalStatus | undefined;
      final_tally_result?:
        | {
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
          }
        | undefined;
      submit_time?: Date | undefined;
      deposit_end_time?: Date | undefined;
      total_deposit?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      voting_start_time?: Date | undefined;
      voting_end_time?: Date | undefined;
      metadata?: string | undefined;
      title?: string | undefined;
      summary?: string | undefined;
      proposer?: string | undefined;
    } & {
      id?: string | undefined;
      messages?:
        | ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
          }[] &
            ({
              type_url?: string | undefined;
              value?: Uint8Array | undefined;
            } & {
              type_url?: string | undefined;
              value?: Uint8Array | undefined;
            } & {
              [K_6 in Exclude<keyof I_1["messages"][number], keyof Any>]: never;
            })[] & {
              [K_7 in Exclude<
                keyof I_1["messages"],
                keyof {
                  type_url?: string | undefined;
                  value?: Uint8Array | undefined;
                }[]
              >]: never;
            })
        | undefined;
      status?: ProposalStatus | undefined;
      final_tally_result?:
        | ({
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
          } & {
            yes_count?: string | undefined;
            abstain_count?: string | undefined;
            no_count?: string | undefined;
            no_with_veto_count?: string | undefined;
          } & {
            [K_8 in Exclude<
              keyof I_1["final_tally_result"],
              keyof TallyResult
            >]: never;
          })
        | undefined;
      submit_time?: Date | undefined;
      deposit_end_time?: Date | undefined;
      total_deposit?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K_9 in Exclude<
                keyof I_1["total_deposit"][number],
                keyof Coin
              >]: never;
            })[] & {
              [K_10 in Exclude<
                keyof I_1["total_deposit"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      voting_start_time?: Date | undefined;
      voting_end_time?: Date | undefined;
      metadata?: string | undefined;
      title?: string | undefined;
      summary?: string | undefined;
      proposer?: string | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof Proposal>]: never }
  >(
    object: I_1
  ): Proposal;
};
export declare const TallyResult: {
  encode(message: TallyResult, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult;
  fromJSON(object: any): TallyResult;
  toJSON(message: TallyResult): unknown;
  create<
    I extends {
      yes_count?: string | undefined;
      abstain_count?: string | undefined;
      no_count?: string | undefined;
      no_with_veto_count?: string | undefined;
    } & {
      yes_count?: string | undefined;
      abstain_count?: string | undefined;
      no_count?: string | undefined;
      no_with_veto_count?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TallyResult>]: never }
  >(
    base?: I | undefined
  ): TallyResult;
  fromPartial<
    I_1 extends {
      yes_count?: string | undefined;
      abstain_count?: string | undefined;
      no_count?: string | undefined;
      no_with_veto_count?: string | undefined;
    } & {
      yes_count?: string | undefined;
      abstain_count?: string | undefined;
      no_count?: string | undefined;
      no_with_veto_count?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TallyResult>]: never }
  >(
    object: I_1
  ): TallyResult;
};
export declare const Vote: {
  encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
  fromJSON(object: any): Vote;
  toJSON(message: Vote): unknown;
  create<
    I extends {
      proposal_id?: string | undefined;
      voter?: string | undefined;
      options?:
        | {
            option?: VoteOption | undefined;
            weight?: string | undefined;
          }[]
        | undefined;
      metadata?: string | undefined;
    } & {
      proposal_id?: string | undefined;
      voter?: string | undefined;
      options?:
        | ({
            option?: VoteOption | undefined;
            weight?: string | undefined;
          }[] &
            ({
              option?: VoteOption | undefined;
              weight?: string | undefined;
            } & {
              option?: VoteOption | undefined;
              weight?: string | undefined;
            } & {
              [K in Exclude<
                keyof I["options"][number],
                keyof WeightedVoteOption
              >]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["options"],
                keyof {
                  option?: VoteOption | undefined;
                  weight?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      metadata?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Vote>]: never }
  >(
    base?: I | undefined
  ): Vote;
  fromPartial<
    I_1 extends {
      proposal_id?: string | undefined;
      voter?: string | undefined;
      options?:
        | {
            option?: VoteOption | undefined;
            weight?: string | undefined;
          }[]
        | undefined;
      metadata?: string | undefined;
    } & {
      proposal_id?: string | undefined;
      voter?: string | undefined;
      options?:
        | ({
            option?: VoteOption | undefined;
            weight?: string | undefined;
          }[] &
            ({
              option?: VoteOption | undefined;
              weight?: string | undefined;
            } & {
              option?: VoteOption | undefined;
              weight?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I_1["options"][number],
                keyof WeightedVoteOption
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I_1["options"],
                keyof {
                  option?: VoteOption | undefined;
                  weight?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      metadata?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Vote>]: never }
  >(
    object: I_1
  ): Vote;
};
export declare const DepositParams: {
  encode(message: DepositParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams;
  fromJSON(object: any): DepositParams;
  toJSON(message: DepositParams): unknown;
  create<
    I extends {
      min_deposit?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      max_deposit_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
    } & {
      min_deposit?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K in Exclude<keyof I["min_deposit"][number], keyof Coin>]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["min_deposit"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      max_deposit_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_2 in Exclude<
              keyof I["max_deposit_period"],
              keyof Duration
            >]: never;
          })
        | undefined;
    } & { [K_3 in Exclude<keyof I, keyof DepositParams>]: never }
  >(
    base?: I | undefined
  ): DepositParams;
  fromPartial<
    I_1 extends {
      min_deposit?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      max_deposit_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
    } & {
      min_deposit?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K_4 in Exclude<
                keyof I_1["min_deposit"][number],
                keyof Coin
              >]: never;
            })[] & {
              [K_5 in Exclude<
                keyof I_1["min_deposit"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      max_deposit_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_6 in Exclude<
              keyof I_1["max_deposit_period"],
              keyof Duration
            >]: never;
          })
        | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof DepositParams>]: never }
  >(
    object: I_1
  ): DepositParams;
};
export declare const VotingParams: {
  encode(message: VotingParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams;
  fromJSON(object: any): VotingParams;
  toJSON(message: VotingParams): unknown;
  create<
    I extends {
      voting_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
    } & {
      voting_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K in Exclude<keyof I["voting_period"], keyof Duration>]: never;
          })
        | undefined;
    } & { [K_1 in Exclude<keyof I, "voting_period">]: never }
  >(
    base?: I | undefined
  ): VotingParams;
  fromPartial<
    I_1 extends {
      voting_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
    } & {
      voting_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_2 in Exclude<keyof I_1["voting_period"], keyof Duration>]: never;
          })
        | undefined;
    } & { [K_3 in Exclude<keyof I_1, "voting_period">]: never }
  >(
    object: I_1
  ): VotingParams;
};
export declare const TallyParams: {
  encode(message: TallyParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams;
  fromJSON(object: any): TallyParams;
  toJSON(message: TallyParams): unknown;
  create<
    I extends {
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
    } & {
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TallyParams>]: never }
  >(
    base?: I | undefined
  ): TallyParams;
  fromPartial<
    I_1 extends {
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
    } & {
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TallyParams>]: never }
  >(
    object: I_1
  ): TallyParams;
};
export declare const Params: {
  encode(message: Params, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Params;
  fromJSON(object: any): Params;
  toJSON(message: Params): unknown;
  create<
    I extends {
      min_deposit?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      max_deposit_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
      voting_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
      min_initial_deposit_ratio?: string | undefined;
      burn_vote_quorum?: boolean | undefined;
      burn_proposal_deposit_prevote?: boolean | undefined;
      burn_vote_veto?: boolean | undefined;
    } & {
      min_deposit?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K in Exclude<keyof I["min_deposit"][number], keyof Coin>]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["min_deposit"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      max_deposit_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_2 in Exclude<
              keyof I["max_deposit_period"],
              keyof Duration
            >]: never;
          })
        | undefined;
      voting_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_3 in Exclude<keyof I["voting_period"], keyof Duration>]: never;
          })
        | undefined;
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
      min_initial_deposit_ratio?: string | undefined;
      burn_vote_quorum?: boolean | undefined;
      burn_proposal_deposit_prevote?: boolean | undefined;
      burn_vote_veto?: boolean | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Params>]: never }
  >(
    base?: I | undefined
  ): Params;
  fromPartial<
    I_1 extends {
      min_deposit?:
        | {
            denom?: string | undefined;
            amount?: string | undefined;
          }[]
        | undefined;
      max_deposit_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
      voting_period?:
        | {
            seconds?: string | undefined;
            nanos?: number | undefined;
          }
        | undefined;
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
      min_initial_deposit_ratio?: string | undefined;
      burn_vote_quorum?: boolean | undefined;
      burn_proposal_deposit_prevote?: boolean | undefined;
      burn_vote_veto?: boolean | undefined;
    } & {
      min_deposit?:
        | ({
            denom?: string | undefined;
            amount?: string | undefined;
          }[] &
            ({
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              denom?: string | undefined;
              amount?: string | undefined;
            } & {
              [K_5 in Exclude<
                keyof I_1["min_deposit"][number],
                keyof Coin
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I_1["min_deposit"],
                keyof {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      max_deposit_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_7 in Exclude<
              keyof I_1["max_deposit_period"],
              keyof Duration
            >]: never;
          })
        | undefined;
      voting_period?:
        | ({
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
          } & {
            [K_8 in Exclude<keyof I_1["voting_period"], keyof Duration>]: never;
          })
        | undefined;
      quorum?: string | undefined;
      threshold?: string | undefined;
      veto_threshold?: string | undefined;
      min_initial_deposit_ratio?: string | undefined;
      burn_vote_quorum?: boolean | undefined;
      burn_proposal_deposit_prevote?: boolean | undefined;
      burn_vote_veto?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Params>]: never }
  >(
    object: I_1
  ): Params;
};
type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {
      [K in keyof P]: Exact<P[K], I[K]>;
    } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };
export {};
