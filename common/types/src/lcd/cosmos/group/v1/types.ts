/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.group.v1";

/** VoteOption enumerates the valid vote options for a given proposal. */
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

/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
  PROPOSAL_STATUS_UNSPECIFIED = "PROPOSAL_STATUS_UNSPECIFIED",
  /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
  PROPOSAL_STATUS_SUBMITTED = "PROPOSAL_STATUS_SUBMITTED",
  /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
  PROPOSAL_STATUS_CLOSED = "PROPOSAL_STATUS_CLOSED",
  /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
  PROPOSAL_STATUS_ABORTED = "PROPOSAL_STATUS_ABORTED",
  /**
   * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
   * is Withdrawn.
   */
  PROPOSAL_STATUS_WITHDRAWN = "PROPOSAL_STATUS_WITHDRAWN",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_CLOSED":
      return ProposalStatus.PROPOSAL_STATUS_CLOSED;
    case 3:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 4:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
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
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_CLOSED:
      return "PROPOSAL_STATUS_CLOSED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function proposalStatusToNumber(object: ProposalStatus): number {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return 0;
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return 1;
    case ProposalStatus.PROPOSAL_STATUS_CLOSED:
      return 2;
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return 3;
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return 4;
    case ProposalStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ProposalResult defines types of proposal results. */
export enum ProposalResult {
  /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
  PROPOSAL_RESULT_UNSPECIFIED = "PROPOSAL_RESULT_UNSPECIFIED",
  /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
  PROPOSAL_RESULT_UNFINALIZED = "PROPOSAL_RESULT_UNFINALIZED",
  /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
  PROPOSAL_RESULT_ACCEPTED = "PROPOSAL_RESULT_ACCEPTED",
  /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
  PROPOSAL_RESULT_REJECTED = "PROPOSAL_RESULT_REJECTED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function proposalResultFromJSON(object: any): ProposalResult {
  switch (object) {
    case 0:
    case "PROPOSAL_RESULT_UNSPECIFIED":
      return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_RESULT_UNFINALIZED":
      return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
    case 2:
    case "PROPOSAL_RESULT_ACCEPTED":
      return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
    case 3:
    case "PROPOSAL_RESULT_REJECTED":
      return ProposalResult.PROPOSAL_RESULT_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalResult.UNRECOGNIZED;
  }
}

export function proposalResultToJSON(object: ProposalResult): string {
  switch (object) {
    case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
      return "PROPOSAL_RESULT_UNSPECIFIED";
    case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
      return "PROPOSAL_RESULT_UNFINALIZED";
    case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
      return "PROPOSAL_RESULT_ACCEPTED";
    case ProposalResult.PROPOSAL_RESULT_REJECTED:
      return "PROPOSAL_RESULT_REJECTED";
    case ProposalResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function proposalResultToNumber(object: ProposalResult): number {
  switch (object) {
    case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
      return 0;
    case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
      return 1;
    case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
      return 2;
    case ProposalResult.PROPOSAL_RESULT_REJECTED:
      return 3;
    case ProposalResult.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ProposalExecutorResult defines types of proposal executor results. */
export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED",
  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN",
  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = "PROPOSAL_EXECUTOR_RESULT_SUCCESS",
  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = "PROPOSAL_EXECUTOR_RESULT_FAILURE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}

export function proposalExecutorResultToJSON(object: ProposalExecutorResult): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function proposalExecutorResultToNumber(object: ProposalExecutorResult): number {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return 0;
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return 1;
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return 2;
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return 3;
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return -1;
  }
}

/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface Member {
  /** address is the member's account address. */
  address: string;
  /** weight is the member's voting weight that should be greater than 0. */
  weight: string;
  /** metadata is any arbitrary metadata to attached to the member. */
  metadata: string;
  /** added_at is a timestamp specifying when a member was added. */
  added_at?: Date;
}

/** Members defines a repeated slice of Member objects. */
export interface Members {
  /** members is the list of members. */
  members: Member[];
}

/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicy {
  /** threshold is the minimum weighted sum of yes votes that must be met or exceeded for a proposal to succeed. */
  threshold: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/** PercentageDecisionPolicy implements the DecisionPolicy interface */
export interface PercentageDecisionPolicy {
  /** percentage is the minimum percentage the weighted sum of yes votes must meet for a proposal to succeed. */
  percentage: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
}

/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  voting_period?: Duration;
  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   *
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   */
  min_execution_period?: Duration;
}

/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
  /** id is the unique ID of the group. */
  id: string;
  /** admin is the account address of the group's admin. */
  admin: string;
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   */
  version: string;
  /** total_weight is the sum of the group members' weights. */
  total_weight: string;
  /** created_at is a timestamp specifying when a group was created. */
  created_at?: Date;
}

/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** member is the member data. */
  member?: Member;
}

/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfo {
  /** address is the account address of group policy. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** admin is the account address of the group admin. */
  admin: string;
  /** metadata is any arbitrary metadata to attached to the group policy. */
  metadata: string;
  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   */
  version: string;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: Any;
  /** created_at is a timestamp specifying when a group policy was created. */
  created_at?: Date;
}

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface Proposal {
  /** id is the unique id of the proposal. */
  id: string;
  /** address is the account address of group policy. */
  address: string;
  /** metadata is any arbitrary metadata to attached to the proposal. */
  metadata: string;
  /** proposers are the account addresses of the proposers. */
  proposers: string[];
  /** submit_time is a timestamp specifying when a proposal was submitted. */
  submit_time?: Date;
  /**
   * group_version tracks the version of the group that this proposal corresponds to.
   * When group membership is changed, existing proposals from previous group versions will become invalid.
   */
  group_version: string;
  /**
   * group_policy_version tracks the version of the group policy that this proposal corresponds to.
   * When a decision policy is changed, existing proposals from previous policy versions will become invalid.
   */
  group_policy_version: string;
  /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
  status: ProposalStatus;
  /**
   * result is the final result based on the votes and election rule. Initial value is unfinalized.
   * The result is persisted so that clients can always rely on this state and not have to replicate the logic.
   */
  result: ProposalResult;
  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option, after tallying. When querying a proposal
   * via gRPC, this field is not populated until the proposal's voting period
   * has ended.
   */
  final_tally_result?: TallyResult;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successfull MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`, as well
   * as `status` and `result` fields will be accordingly updated.
   */
  voting_period_end?: Date;
  /** executor_result is the final result based on the votes and election rule. Initial value is NotRun. */
  executor_result: ProposalExecutorResult;
  /** messages is a list of Msgs that will be executed if the proposal passes. */
  messages: Any[];
}

/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResult {
  /** yes_count is the weighted sum of yes votes. */
  yes_count: string;
  /** abstain_count is the weighted sum of abstainers. */
  abstain_count: string;
  /** no is the weighted sum of no votes. */
  no_count: string;
  /** no_with_veto_count is the weighted sum of veto. */
  no_with_veto_count: string;
}

/** Vote represents a vote for a proposal. */
export interface Vote {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** voter is the account address of the voter. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata to attached to the vote. */
  metadata: string;
  /** submit_time is the timestamp when the vote was submitted. */
  submit_time?: Date;
}

function createBaseMember(): Member {
  return { address: "", weight: "", metadata: "", added_at: undefined };
}

export const Member = {
  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.added_at !== undefined) {
      Timestamp.encode(toTimestamp(message.added_at), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.added_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      added_at: isSet(object.added_at) ? fromJsonTimestamp(object.added_at) : undefined,
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.added_at !== undefined && (obj.added_at = message.added_at.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.added_at = object.added_at ?? undefined;
    return message;
  },
};

function createBaseMembers(): Members {
  return { members: [] };
}

export const Members = {
  encode(message: Members, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Members {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Members {
    return { members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromJSON(e)) : [] };
  },

  toJSON(message: Members): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Members>, I>>(object: I): Members {
    const message = createBaseMembers();
    message.members = object.members?.map((e) => Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return { threshold: "", windows: undefined };
}

export const ThresholdDecisionPolicy = {
  encode(message: ThresholdDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.threshold !== "") {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ThresholdDecisionPolicy {
    return {
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined,
    };
  },

  toJSON(message: ThresholdDecisionPolicy): unknown {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.windows !== undefined &&
      (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ThresholdDecisionPolicy>, I>>(object: I): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    message.windows = (object.windows !== undefined && object.windows !== null)
      ? DecisionPolicyWindows.fromPartial(object.windows)
      : undefined;
    return message;
  },
};

function createBasePercentageDecisionPolicy(): PercentageDecisionPolicy {
  return { percentage: "", windows: undefined };
}

export const PercentageDecisionPolicy = {
  encode(message: PercentageDecisionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PercentageDecisionPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PercentageDecisionPolicy {
    return {
      percentage: isSet(object.percentage) ? String(object.percentage) : "",
      windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined,
    };
  },

  toJSON(message: PercentageDecisionPolicy): unknown {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.windows !== undefined &&
      (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PercentageDecisionPolicy>, I>>(object: I): PercentageDecisionPolicy {
    const message = createBasePercentageDecisionPolicy();
    message.percentage = object.percentage ?? "";
    message.windows = (object.windows !== undefined && object.windows !== null)
      ? DecisionPolicyWindows.fromPartial(object.windows)
      : undefined;
    return message;
  },
};

function createBaseDecisionPolicyWindows(): DecisionPolicyWindows {
  return { voting_period: undefined, min_execution_period: undefined };
}

export const DecisionPolicyWindows = {
  encode(message: DecisionPolicyWindows, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    if (message.min_execution_period !== undefined) {
      Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecisionPolicyWindows {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voting_period = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.min_execution_period = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecisionPolicyWindows {
    return {
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined,
      min_execution_period: isSet(object.min_execution_period)
        ? Duration.fromJSON(object.min_execution_period)
        : undefined,
    };
  },

  toJSON(message: DecisionPolicyWindows): unknown {
    const obj: any = {};
    message.voting_period !== undefined &&
      (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
    message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period
      ? Duration.toJSON(message.min_execution_period)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DecisionPolicyWindows>, I>>(object: I): DecisionPolicyWindows {
    const message = createBaseDecisionPolicyWindows();
    message.voting_period = (object.voting_period !== undefined && object.voting_period !== null)
      ? Duration.fromPartial(object.voting_period)
      : undefined;
    message.min_execution_period = (object.min_execution_period !== undefined && object.min_execution_period !== null)
      ? Duration.fromPartial(object.min_execution_period)
      : undefined;
    return message;
  },
};

function createBaseGroupInfo(): GroupInfo {
  return { id: "0", admin: "", metadata: "", version: "0", total_weight: "", created_at: undefined };
}

export const GroupInfo = {
  encode(message: GroupInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.version !== "0") {
      writer.uint32(32).uint64(message.version);
    }
    if (message.total_weight !== "") {
      writer.uint32(42).string(message.total_weight);
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.total_weight = reader.string();
          break;
        case 6:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? String(object.version) : "0",
      total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
    };
  },

  toJSON(message: GroupInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = message.version);
    message.total_weight !== undefined && (obj.total_weight = message.total_weight);
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupInfo>, I>>(object: I): GroupInfo {
    const message = createBaseGroupInfo();
    message.id = object.id ?? "0";
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version ?? "0";
    message.total_weight = object.total_weight ?? "";
    message.created_at = object.created_at ?? undefined;
    return message;
  },
};

function createBaseGroupMember(): GroupMember {
  return { group_id: "0", member: undefined };
}

export const GroupMember = {
  encode(message: GroupMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMember {
    return {
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
    };
  },

  toJSON(message: GroupMember): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = message.group_id);
    message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMember>, I>>(object: I): GroupMember {
    const message = createBaseGroupMember();
    message.group_id = object.group_id ?? "0";
    message.member = (object.member !== undefined && object.member !== null)
      ? Member.fromPartial(object.member)
      : undefined;
    return message;
  },
};

function createBaseGroupPolicyInfo(): GroupPolicyInfo {
  return {
    address: "",
    group_id: "0",
    admin: "",
    metadata: "",
    version: "0",
    decision_policy: undefined,
    created_at: undefined,
  };
}

export const GroupPolicyInfo = {
  encode(message: GroupPolicyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.group_id !== "0") {
      writer.uint32(16).uint64(message.group_id);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.version !== "0") {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decision_policy !== undefined) {
      Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
    }
    if (message.created_at !== undefined) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupPolicyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.group_id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.decision_policy = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupPolicyInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      admin: isSet(object.admin) ? String(object.admin) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      version: isSet(object.version) ? String(object.version) : "0",
      decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined,
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
    };
  },

  toJSON(message: GroupPolicyInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.group_id !== undefined && (obj.group_id = message.group_id);
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = message.version);
    message.decision_policy !== undefined &&
      (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
    message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupPolicyInfo>, I>>(object: I): GroupPolicyInfo {
    const message = createBaseGroupPolicyInfo();
    message.address = object.address ?? "";
    message.group_id = object.group_id ?? "0";
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    message.version = object.version ?? "0";
    message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
      ? Any.fromPartial(object.decision_policy)
      : undefined;
    message.created_at = object.created_at ?? undefined;
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    id: "0",
    address: "",
    metadata: "",
    proposers: [],
    submit_time: undefined,
    group_version: "0",
    group_policy_version: "0",
    status: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
    result: ProposalResult.PROPOSAL_RESULT_UNSPECIFIED,
    final_tally_result: undefined,
    voting_period_end: undefined,
    executor_result: ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED,
    messages: [],
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
    }
    if (message.group_version !== "0") {
      writer.uint32(48).uint64(message.group_version);
    }
    if (message.group_policy_version !== "0") {
      writer.uint32(56).uint64(message.group_policy_version);
    }
    if (message.status !== ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED) {
      writer.uint32(64).int32(proposalStatusToNumber(message.status));
    }
    if (message.result !== ProposalResult.PROPOSAL_RESULT_UNSPECIFIED) {
      writer.uint32(72).int32(proposalResultToNumber(message.result));
    }
    if (message.final_tally_result !== undefined) {
      TallyResult.encode(message.final_tally_result, writer.uint32(82).fork()).ldelim();
    }
    if (message.voting_period_end !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_period_end), writer.uint32(90).fork()).ldelim();
    }
    if (message.executor_result !== ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED) {
      writer.uint32(96).int32(proposalExecutorResultToNumber(message.executor_result));
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.group_version = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.group_policy_version = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.status = proposalStatusFromJSON(reader.int32());
          break;
        case 9:
          message.result = proposalResultFromJSON(reader.int32());
          break;
        case 10:
          message.final_tally_result = TallyResult.decode(reader, reader.uint32());
          break;
        case 11:
          message.voting_period_end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.executor_result = proposalExecutorResultFromJSON(reader.int32());
          break;
        case 13:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      group_version: isSet(object.group_version) ? String(object.group_version) : "0",
      group_policy_version: isSet(object.group_policy_version) ? String(object.group_policy_version) : "0",
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
      result: isSet(object.result) ? proposalResultFromJSON(object.result) : ProposalResult.PROPOSAL_RESULT_UNSPECIFIED,
      final_tally_result: isSet(object.final_tally_result)
        ? TallyResult.fromJSON(object.final_tally_result)
        : undefined,
      voting_period_end: isSet(object.voting_period_end) ? fromJsonTimestamp(object.voting_period_end) : undefined,
      executor_result: isSet(object.executor_result)
        ? proposalExecutorResultFromJSON(object.executor_result)
        : ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map((e) => e);
    } else {
      obj.proposers = [];
    }
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    message.group_version !== undefined && (obj.group_version = message.group_version);
    message.group_policy_version !== undefined && (obj.group_policy_version = message.group_policy_version);
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
    message.final_tally_result !== undefined &&
      (obj.final_tally_result = message.final_tally_result
        ? TallyResult.toJSON(message.final_tally_result)
        : undefined);
    message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end.toISOString());
    message.executor_result !== undefined &&
      (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.id = object.id ?? "0";
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? "";
    message.proposers = object.proposers?.map((e) => e) || [];
    message.submit_time = object.submit_time ?? undefined;
    message.group_version = object.group_version ?? "0";
    message.group_policy_version = object.group_policy_version ?? "0";
    message.status = object.status ?? ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    message.result = object.result ?? ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
    message.final_tally_result = (object.final_tally_result !== undefined && object.final_tally_result !== null)
      ? TallyResult.fromPartial(object.final_tally_result)
      : undefined;
    message.voting_period_end = object.voting_period_end ?? undefined;
    message.executor_result = object.executor_result ?? ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes_count = reader.string();
          break;
        case 2:
          message.abstain_count = reader.string();
          break;
        case 3:
          message.no_count = reader.string();
          break;
        case 4:
          message.no_with_veto_count = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyResult {
    return {
      yes_count: isSet(object.yes_count) ? String(object.yes_count) : "",
      abstain_count: isSet(object.abstain_count) ? String(object.abstain_count) : "",
      no_count: isSet(object.no_count) ? String(object.no_count) : "",
      no_with_veto_count: isSet(object.no_with_veto_count) ? String(object.no_with_veto_count) : "",
    };
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yes_count !== undefined && (obj.yes_count = message.yes_count);
    message.abstain_count !== undefined && (obj.abstain_count = message.abstain_count);
    message.no_count !== undefined && (obj.no_count = message.no_count);
    message.no_with_veto_count !== undefined && (obj.no_with_veto_count = message.no_with_veto_count);
    return obj;
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
  return {
    proposal_id: "0",
    voter: "",
    option: VoteOption.VOTE_OPTION_UNSPECIFIED,
    metadata: "",
    submit_time: undefined,
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== VoteOption.VOTE_OPTION_UNSPECIFIED) {
      writer.uint32(24).int32(voteOptionToNumber(message.option));
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submit_time !== undefined) {
      Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = voteOptionFromJSON(reader.int32());
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : VoteOption.VOTE_OPTION_UNSPECIFIED,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.proposal_id = object.proposal_id ?? "0";
    message.voter = object.voter ?? "";
    message.option = object.option ?? VoteOption.VOTE_OPTION_UNSPECIFIED;
    message.metadata = object.metadata ?? "";
    message.submit_time = object.submit_time ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
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
