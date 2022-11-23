/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.bundles.v1beta1";

/** VoteType ... */
export enum VoteType {
  /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
  VOTE_TYPE_UNSPECIFIED = 0,
  /** VOTE_TYPE_VALID - VOTE_TYPE_VALID ... */
  VOTE_TYPE_VALID = 1,
  /** VOTE_TYPE_INVALID - VOTE_TYPE_INVALID ... */
  VOTE_TYPE_INVALID = 2,
  /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
  VOTE_TYPE_ABSTAIN = 3,
  UNRECOGNIZED = -1,
}

export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_UNSPECIFIED":
      return VoteType.VOTE_TYPE_UNSPECIFIED;
    case 1:
    case "VOTE_TYPE_VALID":
      return VoteType.VOTE_TYPE_VALID;
    case 2:
    case "VOTE_TYPE_INVALID":
      return VoteType.VOTE_TYPE_INVALID;
    case 3:
    case "VOTE_TYPE_ABSTAIN":
      return VoteType.VOTE_TYPE_ABSTAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}

export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_UNSPECIFIED:
      return "VOTE_TYPE_UNSPECIFIED";
    case VoteType.VOTE_TYPE_VALID:
      return "VOTE_TYPE_VALID";
    case VoteType.VOTE_TYPE_INVALID:
      return "VOTE_TYPE_INVALID";
    case VoteType.VOTE_TYPE_ABSTAIN:
      return "VOTE_TYPE_ABSTAIN";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

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

function createBaseMsgSubmitBundleProposal(): MsgSubmitBundleProposal {
  return {
    creator: "",
    staker: "",
    pool_id: "0",
    storage_id: "",
    data_size: "0",
    data_hash: "",
    from_index: "0",
    bundle_size: "0",
    from_key: "",
    to_key: "",
    bundle_summary: "",
  };
}

export const MsgSubmitBundleProposal = {
  encode(message: MsgSubmitBundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.storage_id !== "") {
      writer.uint32(34).string(message.storage_id);
    }
    if (message.data_size !== "0") {
      writer.uint32(40).uint64(message.data_size);
    }
    if (message.data_hash !== "") {
      writer.uint32(50).string(message.data_hash);
    }
    if (message.from_index !== "0") {
      writer.uint32(56).uint64(message.from_index);
    }
    if (message.bundle_size !== "0") {
      writer.uint32(64).uint64(message.bundle_size);
    }
    if (message.from_key !== "") {
      writer.uint32(74).string(message.from_key);
    }
    if (message.to_key !== "") {
      writer.uint32(82).string(message.to_key);
    }
    if (message.bundle_summary !== "") {
      writer.uint32(90).string(message.bundle_summary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBundleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.storage_id = reader.string();
          break;
        case 5:
          message.data_size = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.data_hash = reader.string();
          break;
        case 7:
          message.from_index = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.bundle_size = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.from_key = reader.string();
          break;
        case 10:
          message.to_key = reader.string();
          break;
        case 11:
          message.bundle_summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitBundleProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      data_size: isSet(object.data_size) ? String(object.data_size) : "0",
      data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
      from_index: isSet(object.from_index) ? String(object.from_index) : "0",
      bundle_size: isSet(object.bundle_size) ? String(object.bundle_size) : "0",
      from_key: isSet(object.from_key) ? String(object.from_key) : "",
      to_key: isSet(object.to_key) ? String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
    };
  },

  toJSON(message: MsgSubmitBundleProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.data_size !== undefined && (obj.data_size = message.data_size);
    message.data_hash !== undefined && (obj.data_hash = message.data_hash);
    message.from_index !== undefined && (obj.from_index = message.from_index);
    message.bundle_size !== undefined && (obj.bundle_size = message.bundle_size);
    message.from_key !== undefined && (obj.from_key = message.from_key);
    message.to_key !== undefined && (obj.to_key = message.to_key);
    message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitBundleProposal>, I>>(object: I): MsgSubmitBundleProposal {
    const message = createBaseMsgSubmitBundleProposal();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.storage_id = object.storage_id ?? "";
    message.data_size = object.data_size ?? "0";
    message.data_hash = object.data_hash ?? "";
    message.from_index = object.from_index ?? "0";
    message.bundle_size = object.bundle_size ?? "0";
    message.from_key = object.from_key ?? "";
    message.to_key = object.to_key ?? "";
    message.bundle_summary = object.bundle_summary ?? "";
    return message;
  },
};

function createBaseMsgSubmitBundleProposalResponse(): MsgSubmitBundleProposalResponse {
  return {};
}

export const MsgSubmitBundleProposalResponse = {
  encode(_: MsgSubmitBundleProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBundleProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBundleProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitBundleProposalResponse {
    return {};
  },

  toJSON(_: MsgSubmitBundleProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitBundleProposalResponse>, I>>(_: I): MsgSubmitBundleProposalResponse {
    const message = createBaseMsgSubmitBundleProposalResponse();
    return message;
  },
};

function createBaseMsgVoteBundleProposal(): MsgVoteBundleProposal {
  return { creator: "", staker: "", pool_id: "0", storage_id: "", vote: 0 };
}

export const MsgVoteBundleProposal = {
  encode(message: MsgVoteBundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.storage_id !== "") {
      writer.uint32(34).string(message.storage_id);
    }
    if (message.vote !== 0) {
      writer.uint32(40).int32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteBundleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.storage_id = reader.string();
          break;
        case 5:
          message.vote = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoteBundleProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0,
    };
  },

  toJSON(message: MsgVoteBundleProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.vote !== undefined && (obj.vote = voteTypeToJSON(message.vote));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteBundleProposal>, I>>(object: I): MsgVoteBundleProposal {
    const message = createBaseMsgVoteBundleProposal();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.storage_id = object.storage_id ?? "";
    message.vote = object.vote ?? 0;
    return message;
  },
};

function createBaseMsgVoteBundleProposalResponse(): MsgVoteBundleProposalResponse {
  return {};
}

export const MsgVoteBundleProposalResponse = {
  encode(_: MsgVoteBundleProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteBundleProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteBundleProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgVoteBundleProposalResponse {
    return {};
  },

  toJSON(_: MsgVoteBundleProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteBundleProposalResponse>, I>>(_: I): MsgVoteBundleProposalResponse {
    const message = createBaseMsgVoteBundleProposalResponse();
    return message;
  },
};

function createBaseMsgClaimUploaderRole(): MsgClaimUploaderRole {
  return { creator: "", staker: "", pool_id: "0" };
}

export const MsgClaimUploaderRole = {
  encode(message: MsgClaimUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUploaderRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
    };
  },

  toJSON(message: MsgClaimUploaderRole): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUploaderRole>, I>>(object: I): MsgClaimUploaderRole {
    const message = createBaseMsgClaimUploaderRole();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    return message;
  },
};

function createBaseMsgClaimUploaderRoleResponse(): MsgClaimUploaderRoleResponse {
  return {};
}

export const MsgClaimUploaderRoleResponse = {
  encode(_: MsgClaimUploaderRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUploaderRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUploaderRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimUploaderRoleResponse {
    return {};
  },

  toJSON(_: MsgClaimUploaderRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUploaderRoleResponse>, I>>(_: I): MsgClaimUploaderRoleResponse {
    const message = createBaseMsgClaimUploaderRoleResponse();
    return message;
  },
};

function createBaseMsgSkipUploaderRole(): MsgSkipUploaderRole {
  return { creator: "", staker: "", pool_id: "0", from_index: "0" };
}

export const MsgSkipUploaderRole = {
  encode(message: MsgSkipUploaderRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.from_index !== "0") {
      writer.uint32(32).uint64(message.from_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSkipUploaderRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSkipUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.from_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSkipUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      from_index: isSet(object.from_index) ? String(object.from_index) : "0",
    };
  },

  toJSON(message: MsgSkipUploaderRole): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.from_index !== undefined && (obj.from_index = message.from_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSkipUploaderRole>, I>>(object: I): MsgSkipUploaderRole {
    const message = createBaseMsgSkipUploaderRole();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.from_index = object.from_index ?? "0";
    return message;
  },
};

function createBaseMsgSkipUploaderRoleResponse(): MsgSkipUploaderRoleResponse {
  return {};
}

export const MsgSkipUploaderRoleResponse = {
  encode(_: MsgSkipUploaderRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSkipUploaderRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSkipUploaderRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSkipUploaderRoleResponse {
    return {};
  },

  toJSON(_: MsgSkipUploaderRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSkipUploaderRoleResponse>, I>>(_: I): MsgSkipUploaderRoleResponse {
    const message = createBaseMsgSkipUploaderRoleResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", payload: "" };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
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

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.bundles.v1beta1.Msg";
    this.rpc = rpc;
    this.SubmitBundleProposal = this.SubmitBundleProposal.bind(this);
    this.VoteBundleProposal = this.VoteBundleProposal.bind(this);
    this.ClaimUploaderRole = this.ClaimUploaderRole.bind(this);
    this.SkipUploaderRole = this.SkipUploaderRole.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SubmitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse> {
    const data = MsgSubmitBundleProposal.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitBundleProposal", data);
    return promise.then((data) => MsgSubmitBundleProposalResponse.decode(new _m0.Reader(data)));
  }

  VoteBundleProposal(request: MsgVoteBundleProposal): Promise<MsgVoteBundleProposalResponse> {
    const data = MsgVoteBundleProposal.encode(request).finish();
    const promise = this.rpc.request(this.service, "VoteBundleProposal", data);
    return promise.then((data) => MsgVoteBundleProposalResponse.decode(new _m0.Reader(data)));
  }

  ClaimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse> {
    const data = MsgClaimUploaderRole.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimUploaderRole", data);
    return promise.then((data) => MsgClaimUploaderRoleResponse.decode(new _m0.Reader(data)));
  }

  SkipUploaderRole(request: MsgSkipUploaderRole): Promise<MsgSkipUploaderRoleResponse> {
    const data = MsgSkipUploaderRole.encode(request).finish();
    const promise = this.rpc.request(this.service, "SkipUploaderRole", data);
    return promise.then((data) => MsgSkipUploaderRoleResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
