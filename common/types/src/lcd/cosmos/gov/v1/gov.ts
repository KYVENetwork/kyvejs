/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";

export const protobufPackage = "cosmos.gov.v1";

/** Since: cosmos-sdk 0.46 */

/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
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

export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}

export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function voteOptionToNumber(object: VoteOption): number {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return 0;
    case VoteOption.VOTE_OPTION_YES:
      return 1;
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return 2;
    case VoteOption.VOTE_OPTION_NO:
      return 3;
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return 4;
    case VoteOption.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
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

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}

export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function proposalStatusToNumber(object: ProposalStatus): number {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return 0;
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return 1;
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return 2;
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return 3;
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return 4;
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return 5;
    case ProposalStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  option: VoteOption;
  weight: string;
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  proposal_id: string;
  depositor: string;
  amount: Coin[];
}

/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  id: string;
  messages: Any[];
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResult | undefined;
  submit_time?: Date | undefined;
  deposit_end_time?: Date | undefined;
  total_deposit: Coin[];
  voting_start_time?: Date | undefined;
  voting_end_time?:
    | Date
    | undefined;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
}

/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  yes_count: string;
  abstain_count: string;
  no_count: string;
  no_with_veto_count: string;
}

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  proposal_id: string;
  voter: string;
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
   *  months.
   */
  max_deposit_period?: Duration | undefined;
}

/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Length of the voting period. */
  voting_period?: Duration | undefined;
}

/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
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
}

function createBaseWeightedVoteOption(): WeightedVoteOption {
  return { option: VoteOption.VOTE_OPTION_UNSPECIFIED, weight: "" };
}

export const WeightedVoteOption = {
  encode(message: WeightedVoteOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.option !== VoteOption.VOTE_OPTION_UNSPECIFIED) {
      writer.uint32(8).int32(voteOptionToNumber(message.option));
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.option = voteOptionFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.weight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : VoteOption.VOTE_OPTION_UNSPECIFIED,
      weight: isSet(object.weight) ? globalThis.String(object.weight) : "",
    };
  },

  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    if (message.option !== VoteOption.VOTE_OPTION_UNSPECIFIED) {
      obj.option = voteOptionToJSON(message.option);
    }
    if (message.weight !== "") {
      obj.weight = message.weight;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WeightedVoteOption>, I>>(base?: I): WeightedVoteOption {
    return WeightedVoteOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WeightedVoteOption>, I>>(object: I): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? VoteOption.VOTE_OPTION_UNSPECIFIED;
    message.weight = object.weight ?? "";
    return message;
  },
};

function createBaseDeposit(): Deposit {
  return { proposal_id: "0", depositor: "", amount: [] };
}

export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Deposit {
    return {
      proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0",
      depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
      amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.amount?.length) {
      obj.amount = message.amount.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Deposit>, I>>(base?: I): Deposit {
    return Deposit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Deposit>, I>>(object: I): Deposit {
    const message = createBaseDeposit();
    message.proposal_id = object.proposal_id ?? "0";
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    id: "0",
    messages: [],
    status: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
    final_tally_result: undefined,
    submit_time: undefined,
    deposit_end_time: undefined,
    total_deposit: [],
    voting_start_time: undefined,
    voting_end_time: undefined,
    metadata: "",
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED) {
      writer.uint32(24).int32(proposalStatusToNumber(message.status));
    }
    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
    }
    if (message.deposit_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.total_deposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.voting_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
    }
    if (message.voting_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.messages.push(Any.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = proposalStatusFromJSON(reader.int32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deposit_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.total_deposit.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.voting_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.voting_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
      final_tally_result: isSet(object.final_tally_result)
        ? TallyResult.fromJSON(object.final_tally_result)
        : undefined,
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      deposit_end_time: isSet(object.deposit_end_time) ? fromJsonTimestamp(object.deposit_end_time) : undefined,
      total_deposit: globalThis.Array.isArray(object?.total_deposit)
        ? object.total_deposit.map((e: any) => Coin.fromJSON(e))
        : [],
      voting_start_time: isSet(object.voting_start_time) ? fromJsonTimestamp(object.voting_start_time) : undefined,
      voting_end_time: isSet(object.voting_end_time) ? fromJsonTimestamp(object.voting_end_time) : undefined,
      metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : "",
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Any.toJSON(e));
    }
    if (message.status !== ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED) {
      obj.status = proposalStatusToJSON(message.status);
    }
    if (message.final_tally_result !== undefined) {
      obj.final_tally_result = TallyResult.toJSON(message.final_tally_result);
    }
    if (message.submit_time !== undefined) {
      obj.submit_time = message.submit_time.toISOString();
    }
    if (message.deposit_end_time !== undefined) {
      obj.deposit_end_time = message.deposit_end_time.toISOString();
    }
    if (message.total_deposit?.length) {
      obj.total_deposit = message.total_deposit.map((e) => Coin.toJSON(e));
    }
    if (message.voting_start_time !== undefined) {
      obj.voting_start_time = message.voting_start_time.toISOString();
    }
    if (message.voting_end_time !== undefined) {
      obj.voting_end_time = message.voting_end_time.toISOString();
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposal>, I>>(base?: I): Proposal {
    return Proposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.id = object.id ?? "0";
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.status = object.status ?? ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    message.final_tally_result = (object.final_tally_result !== undefined && object.final_tally_result !== null)
      ? TallyResult.fromPartial(object.final_tally_result)
      : undefined;
    message.submit_time = object.submit_time ?? undefined;
    message.deposit_end_time = object.deposit_end_time ?? undefined;
    message.total_deposit = object.total_deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.voting_start_time = object.voting_start_time ?? undefined;
    message.voting_end_time = object.voting_end_time ?? undefined;
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseTallyResult(): TallyResult {
  return { yes_count: "", abstain_count: "", no_count: "", no_with_veto_count: "" };
}

export const TallyResult = {
  encode(message: TallyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yes_count !== "") {
      writer.uint32(10).string(message.yes_count);
    }
    if (message.abstain_count !== "") {
      writer.uint32(18).string(message.abstain_count);
    }
    if (message.no_count !== "") {
      writer.uint32(26).string(message.no_count);
    }
    if (message.no_with_veto_count !== "") {
      writer.uint32(34).string(message.no_with_veto_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.yes_count = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.abstain_count = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.no_count = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.no_with_veto_count = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TallyResult {
    return {
      yes_count: isSet(object.yes_count) ? globalThis.String(object.yes_count) : "",
      abstain_count: isSet(object.abstain_count) ? globalThis.String(object.abstain_count) : "",
      no_count: isSet(object.no_count) ? globalThis.String(object.no_count) : "",
      no_with_veto_count: isSet(object.no_with_veto_count) ? globalThis.String(object.no_with_veto_count) : "",
    };
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    if (message.yes_count !== "") {
      obj.yes_count = message.yes_count;
    }
    if (message.abstain_count !== "") {
      obj.abstain_count = message.abstain_count;
    }
    if (message.no_count !== "") {
      obj.no_count = message.no_count;
    }
    if (message.no_with_veto_count !== "") {
      obj.no_with_veto_count = message.no_with_veto_count;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TallyResult>, I>>(base?: I): TallyResult {
    return TallyResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TallyResult>, I>>(object: I): TallyResult {
    const message = createBaseTallyResult();
    message.yes_count = object.yes_count ?? "";
    message.abstain_count = object.abstain_count ?? "";
    message.no_count = object.no_count ?? "";
    message.no_with_veto_count = object.no_with_veto_count ?? "";
    return message;
  },
};

function createBaseVote(): Vote {
  return { proposal_id: "0", voter: "", options: [], metadata: "" };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proposal_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.voter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      proposal_id: isSet(object.proposal_id) ? globalThis.String(object.proposal_id) : "0",
      voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
      options: globalThis.Array.isArray(object?.options)
        ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e))
        : [],
      metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : "",
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.voter !== "") {
      obj.voter = message.voter;
    }
    if (message.options?.length) {
      obj.options = message.options.map((e) => WeightedVoteOption.toJSON(e));
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Vote>, I>>(base?: I): Vote {
    return Vote.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.proposal_id = object.proposal_id ?? "0";
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseDepositParams(): DepositParams {
  return { min_deposit: [], max_deposit_period: undefined };
}

export const DepositParams = {
  encode(message: DepositParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.min_deposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_deposit_period !== undefined) {
      Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.min_deposit.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.max_deposit_period = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositParams {
    return {
      min_deposit: globalThis.Array.isArray(object?.min_deposit)
        ? object.min_deposit.map((e: any) => Coin.fromJSON(e))
        : [],
      max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined,
    };
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.min_deposit?.length) {
      obj.min_deposit = message.min_deposit.map((e) => Coin.toJSON(e));
    }
    if (message.max_deposit_period !== undefined) {
      obj.max_deposit_period = Duration.toJSON(message.max_deposit_period);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DepositParams>, I>>(base?: I): DepositParams {
    return DepositParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DepositParams>, I>>(object: I): DepositParams {
    const message = createBaseDepositParams();
    message.min_deposit = object.min_deposit?.map((e) => Coin.fromPartial(e)) || [];
    message.max_deposit_period = (object.max_deposit_period !== undefined && object.max_deposit_period !== null)
      ? Duration.fromPartial(object.max_deposit_period)
      : undefined;
    return message;
  },
};

function createBaseVotingParams(): VotingParams {
  return { voting_period: undefined };
}

export const VotingParams = {
  encode(message: VotingParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voting_period = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VotingParams {
    return { voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined };
  },

  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    if (message.voting_period !== undefined) {
      obj.voting_period = Duration.toJSON(message.voting_period);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VotingParams>, I>>(base?: I): VotingParams {
    return VotingParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VotingParams>, I>>(object: I): VotingParams {
    const message = createBaseVotingParams();
    message.voting_period = (object.voting_period !== undefined && object.voting_period !== null)
      ? Duration.fromPartial(object.voting_period)
      : undefined;
    return message;
  },
};

function createBaseTallyParams(): TallyParams {
  return { quorum: "", threshold: "", veto_threshold: "" };
}

export const TallyParams = {
  encode(message: TallyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(26).string(message.veto_threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quorum = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.threshold = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.veto_threshold = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TallyParams {
    return {
      quorum: isSet(object.quorum) ? globalThis.String(object.quorum) : "",
      threshold: isSet(object.threshold) ? globalThis.String(object.threshold) : "",
      veto_threshold: isSet(object.veto_threshold) ? globalThis.String(object.veto_threshold) : "",
    };
  },

  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    if (message.quorum !== "") {
      obj.quorum = message.quorum;
    }
    if (message.threshold !== "") {
      obj.threshold = message.threshold;
    }
    if (message.veto_threshold !== "") {
      obj.veto_threshold = message.veto_threshold;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TallyParams>, I>>(base?: I): TallyParams {
    return TallyParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TallyParams>, I>>(object: I): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.veto_threshold = object.veto_threshold ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
