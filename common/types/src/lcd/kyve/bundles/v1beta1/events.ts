/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BundleStatus, bundleStatusFromJSON, bundleStatusToJSON, bundleStatusToNumber } from "./bundles";
import { Params } from "./params";
import { VoteType, voteTypeFromJSON, voteTypeToJSON, voteTypeToNumber } from "./tx";

export const protobufPackage = "kyve.bundles.v1beta1";

/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  old_params?:
    | Params
    | undefined;
  /** new_params is the module's new parameters. */
  new_params?:
    | Params
    | undefined;
  /** payload is the parameter updates that were performed. */
  payload: string;
}

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
  /** vote is for what the validator voted with */
  vote: VoteType;
}

/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposed {
  /** pool_id is the unique ID of the pool. */
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
  /** data_size size in bytes of the data */
  data_size: string;
  /** from_index starting index of the bundle (inclusive) */
  from_index: string;
  /** bundle_size amount of data items in the bundle */
  bundle_size: string;
  /** from_key the key of the first data item in the bundle */
  from_key: string;
  /** to_key the key of the last data item in the bundle */
  to_key: string;
  /**
   * bundle_summary is a short string holding some useful information of
   * the bundle which will get stored on-chain
   */
  bundle_summary: string;
  /** data_hash is a sha256 hash of the raw compressed data */
  data_hash: string;
  /** proposed_at the unix time when the bundle was proposed */
  proposed_at: string;
  /**
   * storage_provider_id the unique id of the storage provider where
   * the data of the bundle is tored
   */
  storage_provider_id: number;
  /**
   * compression_id  the unique id of the compression type the data
   * of the bundle was compressed with
   */
  compression_id: number;
}

/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** internal id for the KYVE-bundle */
  id: string;
  /** total voting power which voted for valid */
  valid: string;
  /** total voting power which voted for invalid */
  invalid: string;
  /** total voting power which voted for abstain */
  abstain: string;
  /** total voting power of the pool */
  total: string;
  /** status of the finalized bundle */
  status: BundleStatus;
  /** amount which funders provided to the total bundle reward (in ukyve) */
  funders_payout: string;
  /** amount which the inflation pool provided to the total reward (in ukyve) */
  inflation_payout: string;
  /** rewards transferred to treasury (in ukyve) */
  reward_treasury: string;
  /** rewardUploader rewards directly transferred to uploader (in ukyve) */
  reward_uploader: string;
  /** rewardDelegation rewards distributed among all delegators (in ukyve) */
  reward_delegation: string;
  /** rewardTotal the total bundle reward */
  reward_total: string;
  /** finalized_at the block height where the bundle got finalized */
  finalized_at: string;
  /** uploader the address of the uploader of this bundle */
  uploader: string;
  /** next_uploader the address of the next uploader after this bundle */
  next_uploader: string;
}

/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** id internal id for the KYVE-bundle */
  id: string;
  /**
   * new_uploader the address of the participant who claimed
   * the free uploader role
   */
  new_uploader: string;
}

/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** id internal id for the KYVE-bundle */
  id: string;
  /** previous_uploader is the address of the staker who skipped his uploader role */
  previous_uploader: string;
  /** new_uploader is the address of the new uploader who got automatically selected */
  new_uploader: string;
}

/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the address of the staker who received the point */
  staker: string;
  /** current_points is the amount of points the staker has now */
  current_points: string;
}

/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the address of the staker who has zero points now */
  staker: string;
}

function createBaseEventUpdateParams(): EventUpdateParams {
  return { old_params: undefined, new_params: undefined, payload: "" };
}

export const EventUpdateParams = {
  encode(message: EventUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.old_params !== undefined) {
      Params.encode(message.old_params, writer.uint32(10).fork()).ldelim();
    }
    if (message.new_params !== undefined) {
      Params.encode(message.new_params, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.old_params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.new_params = Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateParams {
    return {
      old_params: isSet(object.old_params) ? Params.fromJSON(object.old_params) : undefined,
      new_params: isSet(object.new_params) ? Params.fromJSON(object.new_params) : undefined,
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: EventUpdateParams): unknown {
    const obj: any = {};
    if (message.old_params !== undefined) {
      obj.old_params = Params.toJSON(message.old_params);
    }
    if (message.new_params !== undefined) {
      obj.new_params = Params.toJSON(message.new_params);
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateParams>, I>>(base?: I): EventUpdateParams {
    return EventUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateParams>, I>>(object: I): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.old_params = (object.old_params !== undefined && object.old_params !== null)
      ? Params.fromPartial(object.old_params)
      : undefined;
    message.new_params = (object.new_params !== undefined && object.new_params !== null)
      ? Params.fromPartial(object.new_params)
      : undefined;
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseEventBundleVote(): EventBundleVote {
  return { pool_id: "0", staker: "", storage_id: "", vote: VoteType.VOTE_TYPE_UNSPECIFIED };
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
    if (message.vote !== VoteType.VOTE_TYPE_UNSPECIFIED) {
      writer.uint32(32).int32(voteTypeToNumber(message.vote));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBundleVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.storage_id = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.vote = voteTypeFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBundleVote {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : VoteType.VOTE_TYPE_UNSPECIFIED,
    };
  },

  toJSON(message: EventBundleVote): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.vote !== VoteType.VOTE_TYPE_UNSPECIFIED) {
      obj.vote = voteTypeToJSON(message.vote);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBundleVote>, I>>(base?: I): EventBundleVote {
    return EventBundleVote.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBundleVote>, I>>(object: I): EventBundleVote {
    const message = createBaseEventBundleVote();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.storage_id = object.storage_id ?? "";
    message.vote = object.vote ?? VoteType.VOTE_TYPE_UNSPECIFIED;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBundleProposed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.storage_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uploader = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.data_size = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.from_index = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.bundle_size = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.from_key = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.to_key = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.bundle_summary = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.data_hash = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.proposed_at = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.storage_provider_id = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.compression_id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBundleProposed {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
      uploader: isSet(object.uploader) ? globalThis.String(object.uploader) : "",
      data_size: isSet(object.data_size) ? globalThis.String(object.data_size) : "0",
      from_index: isSet(object.from_index) ? globalThis.String(object.from_index) : "0",
      bundle_size: isSet(object.bundle_size) ? globalThis.String(object.bundle_size) : "0",
      from_key: isSet(object.from_key) ? globalThis.String(object.from_key) : "",
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? globalThis.String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? globalThis.String(object.data_hash) : "",
      proposed_at: isSet(object.proposed_at) ? globalThis.String(object.proposed_at) : "0",
      storage_provider_id: isSet(object.storage_provider_id) ? globalThis.Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? globalThis.Number(object.compression_id) : 0,
    };
  },

  toJSON(message: EventBundleProposed): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.uploader !== "") {
      obj.uploader = message.uploader;
    }
    if (message.data_size !== "0") {
      obj.data_size = message.data_size;
    }
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    if (message.bundle_size !== "0") {
      obj.bundle_size = message.bundle_size;
    }
    if (message.from_key !== "") {
      obj.from_key = message.from_key;
    }
    if (message.to_key !== "") {
      obj.to_key = message.to_key;
    }
    if (message.bundle_summary !== "") {
      obj.bundle_summary = message.bundle_summary;
    }
    if (message.data_hash !== "") {
      obj.data_hash = message.data_hash;
    }
    if (message.proposed_at !== "0") {
      obj.proposed_at = message.proposed_at;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBundleProposed>, I>>(base?: I): EventBundleProposed {
    return EventBundleProposed.fromPartial(base ?? ({} as any));
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
    status: BundleStatus.BUNDLE_STATUS_UNSPECIFIED,
    funders_payout: "0",
    inflation_payout: "0",
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
    if (message.status !== BundleStatus.BUNDLE_STATUS_UNSPECIFIED) {
      writer.uint32(56).int32(bundleStatusToNumber(message.status));
    }
    if (message.funders_payout !== "0") {
      writer.uint32(64).uint64(message.funders_payout);
    }
    if (message.inflation_payout !== "0") {
      writer.uint32(72).uint64(message.inflation_payout);
    }
    if (message.reward_treasury !== "0") {
      writer.uint32(80).uint64(message.reward_treasury);
    }
    if (message.reward_uploader !== "0") {
      writer.uint32(88).uint64(message.reward_uploader);
    }
    if (message.reward_delegation !== "0") {
      writer.uint32(96).uint64(message.reward_delegation);
    }
    if (message.reward_total !== "0") {
      writer.uint32(104).uint64(message.reward_total);
    }
    if (message.finalized_at !== "0") {
      writer.uint32(112).uint64(message.finalized_at);
    }
    if (message.uploader !== "") {
      writer.uint32(122).string(message.uploader);
    }
    if (message.next_uploader !== "") {
      writer.uint32(130).string(message.next_uploader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleFinalized {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBundleFinalized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.valid = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.invalid = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.abstain = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.total = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = bundleStatusFromJSON(reader.int32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.funders_payout = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.inflation_payout = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.reward_treasury = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.reward_uploader = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.reward_delegation = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.reward_total = longToString(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.finalized_at = longToString(reader.uint64() as Long);
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.uploader = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.next_uploader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventBundleFinalized {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      valid: isSet(object.valid) ? globalThis.String(object.valid) : "0",
      invalid: isSet(object.invalid) ? globalThis.String(object.invalid) : "0",
      abstain: isSet(object.abstain) ? globalThis.String(object.abstain) : "0",
      total: isSet(object.total) ? globalThis.String(object.total) : "0",
      status: isSet(object.status) ? bundleStatusFromJSON(object.status) : BundleStatus.BUNDLE_STATUS_UNSPECIFIED,
      funders_payout: isSet(object.funders_payout) ? globalThis.String(object.funders_payout) : "0",
      inflation_payout: isSet(object.inflation_payout) ? globalThis.String(object.inflation_payout) : "0",
      reward_treasury: isSet(object.reward_treasury) ? globalThis.String(object.reward_treasury) : "0",
      reward_uploader: isSet(object.reward_uploader) ? globalThis.String(object.reward_uploader) : "0",
      reward_delegation: isSet(object.reward_delegation) ? globalThis.String(object.reward_delegation) : "0",
      reward_total: isSet(object.reward_total) ? globalThis.String(object.reward_total) : "0",
      finalized_at: isSet(object.finalized_at) ? globalThis.String(object.finalized_at) : "0",
      uploader: isSet(object.uploader) ? globalThis.String(object.uploader) : "",
      next_uploader: isSet(object.next_uploader) ? globalThis.String(object.next_uploader) : "",
    };
  },

  toJSON(message: EventBundleFinalized): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.valid !== "0") {
      obj.valid = message.valid;
    }
    if (message.invalid !== "0") {
      obj.invalid = message.invalid;
    }
    if (message.abstain !== "0") {
      obj.abstain = message.abstain;
    }
    if (message.total !== "0") {
      obj.total = message.total;
    }
    if (message.status !== BundleStatus.BUNDLE_STATUS_UNSPECIFIED) {
      obj.status = bundleStatusToJSON(message.status);
    }
    if (message.funders_payout !== "0") {
      obj.funders_payout = message.funders_payout;
    }
    if (message.inflation_payout !== "0") {
      obj.inflation_payout = message.inflation_payout;
    }
    if (message.reward_treasury !== "0") {
      obj.reward_treasury = message.reward_treasury;
    }
    if (message.reward_uploader !== "0") {
      obj.reward_uploader = message.reward_uploader;
    }
    if (message.reward_delegation !== "0") {
      obj.reward_delegation = message.reward_delegation;
    }
    if (message.reward_total !== "0") {
      obj.reward_total = message.reward_total;
    }
    if (message.finalized_at !== "0") {
      obj.finalized_at = message.finalized_at;
    }
    if (message.uploader !== "") {
      obj.uploader = message.uploader;
    }
    if (message.next_uploader !== "") {
      obj.next_uploader = message.next_uploader;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventBundleFinalized>, I>>(base?: I): EventBundleFinalized {
    return EventBundleFinalized.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventBundleFinalized>, I>>(object: I): EventBundleFinalized {
    const message = createBaseEventBundleFinalized();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.valid = object.valid ?? "0";
    message.invalid = object.invalid ?? "0";
    message.abstain = object.abstain ?? "0";
    message.total = object.total ?? "0";
    message.status = object.status ?? BundleStatus.BUNDLE_STATUS_UNSPECIFIED;
    message.funders_payout = object.funders_payout ?? "0";
    message.inflation_payout = object.inflation_payout ?? "0";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimedUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_uploader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventClaimedUploaderRole {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      new_uploader: isSet(object.new_uploader) ? globalThis.String(object.new_uploader) : "",
    };
  },

  toJSON(message: EventClaimedUploaderRole): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.new_uploader !== "") {
      obj.new_uploader = message.new_uploader;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventClaimedUploaderRole>, I>>(base?: I): EventClaimedUploaderRole {
    return EventClaimedUploaderRole.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSkippedUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.previous_uploader = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.new_uploader = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventSkippedUploaderRole {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      previous_uploader: isSet(object.previous_uploader) ? globalThis.String(object.previous_uploader) : "",
      new_uploader: isSet(object.new_uploader) ? globalThis.String(object.new_uploader) : "",
    };
  },

  toJSON(message: EventSkippedUploaderRole): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.previous_uploader !== "") {
      obj.previous_uploader = message.previous_uploader;
    }
    if (message.new_uploader !== "") {
      obj.new_uploader = message.new_uploader;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSkippedUploaderRole>, I>>(base?: I): EventSkippedUploaderRole {
    return EventSkippedUploaderRole.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPointIncreased();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.current_points = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPointIncreased {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      current_points: isSet(object.current_points) ? globalThis.String(object.current_points) : "0",
    };
  },

  toJSON(message: EventPointIncreased): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.current_points !== "0") {
      obj.current_points = message.current_points;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPointIncreased>, I>>(base?: I): EventPointIncreased {
    return EventPointIncreased.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPointsReset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPointsReset {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },

  toJSON(message: EventPointsReset): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPointsReset>, I>>(base?: I): EventPointsReset {
    return EventPointsReset.fromPartial(base ?? ({} as any));
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
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
