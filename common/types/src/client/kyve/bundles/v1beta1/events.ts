/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BundleStatus, bundleStatusFromJSON, bundleStatusToJSON } from "./bundles";
import { VoteType, voteTypeFromJSON, voteTypeToJSON } from "./tx";

export const protobufPackage = "kyve.bundles.v1beta1";

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

function createBaseEventBundleVote(): EventBundleVote {
  return { pool_id: "0", staker: "", storage_id: "", vote: 0 };
}

export const EventBundleVote = {
  encode(message: EventBundleVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.storage_id !== "") {
      writer.uint32(26).string(message.storage_id);
    }
    if (message.vote !== 0) {
      writer.uint32(32).int32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBundleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.storage_id = reader.string();
          break;
        case 4:
          message.vote = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBundleVote {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0,
    };
  },

  toJSON(message: EventBundleVote): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.vote !== undefined && (obj.vote = voteTypeToJSON(message.vote));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBundleVote>, I>>(object: I): EventBundleVote {
    const message = createBaseEventBundleVote();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.storage_id = object.storage_id ?? "";
    message.vote = object.vote ?? 0;
    return message;
  },
};

function createBaseEventBundleProposed(): EventBundleProposed {
  return {
    pool_id: "0",
    id: "0",
    storage_id: "",
    uploader: "",
    data_size: "0",
    from_index: "0",
    bundle_size: "0",
    from_key: "",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    proposed_at: "0",
    storage_provider_id: 0,
    compression_id: 0,
  };
}

export const EventBundleProposed = {
  encode(message: EventBundleProposed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.storage_id !== "") {
      writer.uint32(26).string(message.storage_id);
    }
    if (message.uploader !== "") {
      writer.uint32(34).string(message.uploader);
    }
    if (message.data_size !== "0") {
      writer.uint32(40).uint64(message.data_size);
    }
    if (message.from_index !== "0") {
      writer.uint32(48).uint64(message.from_index);
    }
    if (message.bundle_size !== "0") {
      writer.uint32(56).uint64(message.bundle_size);
    }
    if (message.from_key !== "") {
      writer.uint32(66).string(message.from_key);
    }
    if (message.to_key !== "") {
      writer.uint32(74).string(message.to_key);
    }
    if (message.bundle_summary !== "") {
      writer.uint32(82).string(message.bundle_summary);
    }
    if (message.data_hash !== "") {
      writer.uint32(90).string(message.data_hash);
    }
    if (message.proposed_at !== "0") {
      writer.uint32(96).uint64(message.proposed_at);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(104).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(112).uint32(message.compression_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleProposed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBundleProposed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.storage_id = reader.string();
          break;
        case 4:
          message.uploader = reader.string();
          break;
        case 5:
          message.data_size = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.from_index = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.bundle_size = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.from_key = reader.string();
          break;
        case 9:
          message.to_key = reader.string();
          break;
        case 10:
          message.bundle_summary = reader.string();
          break;
        case 11:
          message.data_hash = reader.string();
          break;
        case 12:
          message.proposed_at = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.storage_provider_id = reader.uint32();
          break;
        case 14:
          message.compression_id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBundleProposed {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      data_size: isSet(object.data_size) ? String(object.data_size) : "0",
      from_index: isSet(object.from_index) ? String(object.from_index) : "0",
      bundle_size: isSet(object.bundle_size) ? String(object.bundle_size) : "0",
      from_key: isSet(object.from_key) ? String(object.from_key) : "",
      to_key: isSet(object.to_key) ? String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
      proposed_at: isSet(object.proposed_at) ? String(object.proposed_at) : "0",
      storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
    };
  },

  toJSON(message: EventBundleProposed): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.id !== undefined && (obj.id = message.id);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.data_size !== undefined && (obj.data_size = message.data_size);
    message.from_index !== undefined && (obj.from_index = message.from_index);
    message.bundle_size !== undefined && (obj.bundle_size = message.bundle_size);
    message.from_key !== undefined && (obj.from_key = message.from_key);
    message.to_key !== undefined && (obj.to_key = message.to_key);
    message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
    message.data_hash !== undefined && (obj.data_hash = message.data_hash);
    message.proposed_at !== undefined && (obj.proposed_at = message.proposed_at);
    message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
    message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBundleProposed>, I>>(object: I): EventBundleProposed {
    const message = createBaseEventBundleProposed();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.storage_id = object.storage_id ?? "";
    message.uploader = object.uploader ?? "";
    message.data_size = object.data_size ?? "0";
    message.from_index = object.from_index ?? "0";
    message.bundle_size = object.bundle_size ?? "0";
    message.from_key = object.from_key ?? "";
    message.to_key = object.to_key ?? "";
    message.bundle_summary = object.bundle_summary ?? "";
    message.data_hash = object.data_hash ?? "";
    message.proposed_at = object.proposed_at ?? "0";
    message.storage_provider_id = object.storage_provider_id ?? 0;
    message.compression_id = object.compression_id ?? 0;
    return message;
  },
};

function createBaseEventBundleFinalized(): EventBundleFinalized {
  return {
    pool_id: "0",
    id: "0",
    valid: "0",
    invalid: "0",
    abstain: "0",
    total: "0",
    status: 0,
    reward_treasury: "0",
    reward_uploader: "0",
    reward_delegation: "0",
    reward_total: "0",
    finalized_at: "0",
    uploader: "",
    next_uploader: "",
  };
}

export const EventBundleFinalized = {
  encode(message: EventBundleFinalized, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.valid !== "0") {
      writer.uint32(24).uint64(message.valid);
    }
    if (message.invalid !== "0") {
      writer.uint32(32).uint64(message.invalid);
    }
    if (message.abstain !== "0") {
      writer.uint32(40).uint64(message.abstain);
    }
    if (message.total !== "0") {
      writer.uint32(48).uint64(message.total);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.reward_treasury !== "0") {
      writer.uint32(64).uint64(message.reward_treasury);
    }
    if (message.reward_uploader !== "0") {
      writer.uint32(72).uint64(message.reward_uploader);
    }
    if (message.reward_delegation !== "0") {
      writer.uint32(80).uint64(message.reward_delegation);
    }
    if (message.reward_total !== "0") {
      writer.uint32(88).uint64(message.reward_total);
    }
    if (message.finalized_at !== "0") {
      writer.uint32(96).uint64(message.finalized_at);
    }
    if (message.uploader !== "") {
      writer.uint32(106).string(message.uploader);
    }
    if (message.next_uploader !== "") {
      writer.uint32(114).string(message.next_uploader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleFinalized {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBundleFinalized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.valid = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.invalid = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.abstain = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.total = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.reward_treasury = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.reward_uploader = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.reward_delegation = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.reward_total = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.finalized_at = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.uploader = reader.string();
          break;
        case 14:
          message.next_uploader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBundleFinalized {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
      valid: isSet(object.valid) ? String(object.valid) : "0",
      invalid: isSet(object.invalid) ? String(object.invalid) : "0",
      abstain: isSet(object.abstain) ? String(object.abstain) : "0",
      total: isSet(object.total) ? String(object.total) : "0",
      status: isSet(object.status) ? bundleStatusFromJSON(object.status) : 0,
      reward_treasury: isSet(object.reward_treasury) ? String(object.reward_treasury) : "0",
      reward_uploader: isSet(object.reward_uploader) ? String(object.reward_uploader) : "0",
      reward_delegation: isSet(object.reward_delegation) ? String(object.reward_delegation) : "0",
      reward_total: isSet(object.reward_total) ? String(object.reward_total) : "0",
      finalized_at: isSet(object.finalized_at) ? String(object.finalized_at) : "0",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      next_uploader: isSet(object.next_uploader) ? String(object.next_uploader) : "",
    };
  },

  toJSON(message: EventBundleFinalized): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.id !== undefined && (obj.id = message.id);
    message.valid !== undefined && (obj.valid = message.valid);
    message.invalid !== undefined && (obj.invalid = message.invalid);
    message.abstain !== undefined && (obj.abstain = message.abstain);
    message.total !== undefined && (obj.total = message.total);
    message.status !== undefined && (obj.status = bundleStatusToJSON(message.status));
    message.reward_treasury !== undefined && (obj.reward_treasury = message.reward_treasury);
    message.reward_uploader !== undefined && (obj.reward_uploader = message.reward_uploader);
    message.reward_delegation !== undefined && (obj.reward_delegation = message.reward_delegation);
    message.reward_total !== undefined && (obj.reward_total = message.reward_total);
    message.finalized_at !== undefined && (obj.finalized_at = message.finalized_at);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.next_uploader !== undefined && (obj.next_uploader = message.next_uploader);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBundleFinalized>, I>>(object: I): EventBundleFinalized {
    const message = createBaseEventBundleFinalized();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.valid = object.valid ?? "0";
    message.invalid = object.invalid ?? "0";
    message.abstain = object.abstain ?? "0";
    message.total = object.total ?? "0";
    message.status = object.status ?? 0;
    message.reward_treasury = object.reward_treasury ?? "0";
    message.reward_uploader = object.reward_uploader ?? "0";
    message.reward_delegation = object.reward_delegation ?? "0";
    message.reward_total = object.reward_total ?? "0";
    message.finalized_at = object.finalized_at ?? "0";
    message.uploader = object.uploader ?? "";
    message.next_uploader = object.next_uploader ?? "";
    return message;
  },
};

function createBaseEventClaimedUploaderRole(): EventClaimedUploaderRole {
  return { pool_id: "0", id: "0", new_uploader: "" };
}

export const EventClaimedUploaderRole = {
  encode(message: EventClaimedUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.new_uploader !== "") {
      writer.uint32(26).string(message.new_uploader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimedUploaderRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimedUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.new_uploader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventClaimedUploaderRole {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
      new_uploader: isSet(object.new_uploader) ? String(object.new_uploader) : "",
    };
  },

  toJSON(message: EventClaimedUploaderRole): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.id !== undefined && (obj.id = message.id);
    message.new_uploader !== undefined && (obj.new_uploader = message.new_uploader);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaimedUploaderRole>, I>>(object: I): EventClaimedUploaderRole {
    const message = createBaseEventClaimedUploaderRole();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.new_uploader = object.new_uploader ?? "";
    return message;
  },
};

function createBaseEventSkippedUploaderRole(): EventSkippedUploaderRole {
  return { pool_id: "0", id: "0", previous_uploader: "", new_uploader: "" };
}

export const EventSkippedUploaderRole = {
  encode(message: EventSkippedUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.previous_uploader !== "") {
      writer.uint32(26).string(message.previous_uploader);
    }
    if (message.new_uploader !== "") {
      writer.uint32(34).string(message.new_uploader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSkippedUploaderRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSkippedUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.previous_uploader = reader.string();
          break;
        case 4:
          message.new_uploader = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSkippedUploaderRole {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
      previous_uploader: isSet(object.previous_uploader) ? String(object.previous_uploader) : "",
      new_uploader: isSet(object.new_uploader) ? String(object.new_uploader) : "",
    };
  },

  toJSON(message: EventSkippedUploaderRole): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.id !== undefined && (obj.id = message.id);
    message.previous_uploader !== undefined && (obj.previous_uploader = message.previous_uploader);
    message.new_uploader !== undefined && (obj.new_uploader = message.new_uploader);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSkippedUploaderRole>, I>>(object: I): EventSkippedUploaderRole {
    const message = createBaseEventSkippedUploaderRole();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.previous_uploader = object.previous_uploader ?? "";
    message.new_uploader = object.new_uploader ?? "";
    return message;
  },
};

function createBaseEventPointIncreased(): EventPointIncreased {
  return { pool_id: "0", staker: "", current_points: "0" };
}

export const EventPointIncreased = {
  encode(message: EventPointIncreased, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.current_points !== "0") {
      writer.uint32(24).uint64(message.current_points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPointIncreased {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPointIncreased();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.current_points = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPointIncreased {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      current_points: isSet(object.current_points) ? String(object.current_points) : "0",
    };
  },

  toJSON(message: EventPointIncreased): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.current_points !== undefined && (obj.current_points = message.current_points);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPointIncreased>, I>>(object: I): EventPointIncreased {
    const message = createBaseEventPointIncreased();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.current_points = object.current_points ?? "0";
    return message;
  },
};

function createBaseEventPointsReset(): EventPointsReset {
  return { pool_id: "0", staker: "" };
}

export const EventPointsReset = {
  encode(message: EventPointsReset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPointsReset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPointsReset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPointsReset {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: EventPointsReset): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPointsReset>, I>>(object: I): EventPointsReset {
    const message = createBaseEventPointsReset();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
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
