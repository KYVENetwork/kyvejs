/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storage_id = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.data_size = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.data_hash = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.from_index = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.bundle_size = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.from_key = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.to_key = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.bundle_summary = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitBundleProposal {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
      data_size: isSet(object.data_size) ? globalThis.String(object.data_size) : "0",
      data_hash: isSet(object.data_hash) ? globalThis.String(object.data_hash) : "",
      from_index: isSet(object.from_index) ? globalThis.String(object.from_index) : "0",
      bundle_size: isSet(object.bundle_size) ? globalThis.String(object.bundle_size) : "0",
      from_key: isSet(object.from_key) ? globalThis.String(object.from_key) : "",
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? globalThis.String(object.bundle_summary) : "",
    };
  },

  toJSON(message: MsgSubmitBundleProposal): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.data_size !== "0") {
      obj.data_size = message.data_size;
    }
    if (message.data_hash !== "") {
      obj.data_hash = message.data_hash;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitBundleProposal>, I>>(base?: I): MsgSubmitBundleProposal {
    return MsgSubmitBundleProposal.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBundleProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgSubmitBundleProposalResponse>, I>>(base?: I): MsgSubmitBundleProposalResponse {
    return MsgSubmitBundleProposalResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storage_id = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.vote = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVoteBundleProposal {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0,
    };
  },

  toJSON(message: MsgVoteBundleProposal): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.vote !== 0) {
      obj.vote = voteTypeToJSON(message.vote);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVoteBundleProposal>, I>>(base?: I): MsgVoteBundleProposal {
    return MsgVoteBundleProposal.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteBundleProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgVoteBundleProposalResponse>, I>>(base?: I): MsgVoteBundleProposalResponse {
    return MsgVoteBundleProposalResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClaimUploaderRole {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
    };
  },

  toJSON(message: MsgClaimUploaderRole): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimUploaderRole>, I>>(base?: I): MsgClaimUploaderRole {
    return MsgClaimUploaderRole.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUploaderRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgClaimUploaderRoleResponse>, I>>(base?: I): MsgClaimUploaderRoleResponse {
    return MsgClaimUploaderRoleResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSkipUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.from_index = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSkipUploaderRole {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      from_index: isSet(object.from_index) ? globalThis.String(object.from_index) : "0",
    };
  },

  toJSON(message: MsgSkipUploaderRole): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSkipUploaderRole>, I>>(base?: I): MsgSkipUploaderRole {
    return MsgSkipUploaderRole.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSkipUploaderRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgSkipUploaderRoleResponse>, I>>(base?: I): MsgSkipUploaderRoleResponse {
    return MsgSkipUploaderRoleResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export type MsgService = typeof MsgService;
export const MsgService = {
  /** SubmitBundleProposal ... */
  submitBundleProposal: {
    path: "/kyve.bundles.v1beta1.Msg/SubmitBundleProposal",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgSubmitBundleProposal) => Buffer.from(MsgSubmitBundleProposal.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgSubmitBundleProposal.decode(value),
    responseSerialize: (value: MsgSubmitBundleProposalResponse) =>
      Buffer.from(MsgSubmitBundleProposalResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgSubmitBundleProposalResponse.decode(value),
  },
  /** VoteBundleProposal ... */
  voteBundleProposal: {
    path: "/kyve.bundles.v1beta1.Msg/VoteBundleProposal",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgVoteBundleProposal) => Buffer.from(MsgVoteBundleProposal.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgVoteBundleProposal.decode(value),
    responseSerialize: (value: MsgVoteBundleProposalResponse) =>
      Buffer.from(MsgVoteBundleProposalResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgVoteBundleProposalResponse.decode(value),
  },
  /** ClaimUploaderRole ... */
  claimUploaderRole: {
    path: "/kyve.bundles.v1beta1.Msg/ClaimUploaderRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgClaimUploaderRole) => Buffer.from(MsgClaimUploaderRole.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgClaimUploaderRole.decode(value),
    responseSerialize: (value: MsgClaimUploaderRoleResponse) =>
      Buffer.from(MsgClaimUploaderRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgClaimUploaderRoleResponse.decode(value),
  },
  /** SkipUploaderRole ... */
  skipUploaderRole: {
    path: "/kyve.bundles.v1beta1.Msg/SkipUploaderRole",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgSkipUploaderRole) => Buffer.from(MsgSkipUploaderRole.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgSkipUploaderRole.decode(value),
    responseSerialize: (value: MsgSkipUploaderRoleResponse) =>
      Buffer.from(MsgSkipUploaderRoleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgSkipUploaderRoleResponse.decode(value),
  },
  /**
   * UpdateParams defines a governance operation for updating the x/bundles module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams: {
    path: "/kyve.bundles.v1beta1.Msg/UpdateParams",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MsgUpdateParams) => Buffer.from(MsgUpdateParams.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MsgUpdateParams.decode(value),
    responseSerialize: (value: MsgUpdateParamsResponse) => Buffer.from(MsgUpdateParamsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MsgUpdateParamsResponse.decode(value),
  },
} as const;

export interface MsgServer extends UntypedServiceImplementation {
  /** SubmitBundleProposal ... */
  submitBundleProposal: handleUnaryCall<MsgSubmitBundleProposal, MsgSubmitBundleProposalResponse>;
  /** VoteBundleProposal ... */
  voteBundleProposal: handleUnaryCall<MsgVoteBundleProposal, MsgVoteBundleProposalResponse>;
  /** ClaimUploaderRole ... */
  claimUploaderRole: handleUnaryCall<MsgClaimUploaderRole, MsgClaimUploaderRoleResponse>;
  /** SkipUploaderRole ... */
  skipUploaderRole: handleUnaryCall<MsgSkipUploaderRole, MsgSkipUploaderRoleResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/bundles module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams: handleUnaryCall<MsgUpdateParams, MsgUpdateParamsResponse>;
}

export interface MsgClient extends Client {
  /** SubmitBundleProposal ... */
  submitBundleProposal(
    request: MsgSubmitBundleProposal,
    callback: (error: ServiceError | null, response: MsgSubmitBundleProposalResponse) => void,
  ): ClientUnaryCall;
  submitBundleProposal(
    request: MsgSubmitBundleProposal,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgSubmitBundleProposalResponse) => void,
  ): ClientUnaryCall;
  submitBundleProposal(
    request: MsgSubmitBundleProposal,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgSubmitBundleProposalResponse) => void,
  ): ClientUnaryCall;
  /** VoteBundleProposal ... */
  voteBundleProposal(
    request: MsgVoteBundleProposal,
    callback: (error: ServiceError | null, response: MsgVoteBundleProposalResponse) => void,
  ): ClientUnaryCall;
  voteBundleProposal(
    request: MsgVoteBundleProposal,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgVoteBundleProposalResponse) => void,
  ): ClientUnaryCall;
  voteBundleProposal(
    request: MsgVoteBundleProposal,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgVoteBundleProposalResponse) => void,
  ): ClientUnaryCall;
  /** ClaimUploaderRole ... */
  claimUploaderRole(
    request: MsgClaimUploaderRole,
    callback: (error: ServiceError | null, response: MsgClaimUploaderRoleResponse) => void,
  ): ClientUnaryCall;
  claimUploaderRole(
    request: MsgClaimUploaderRole,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgClaimUploaderRoleResponse) => void,
  ): ClientUnaryCall;
  claimUploaderRole(
    request: MsgClaimUploaderRole,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgClaimUploaderRoleResponse) => void,
  ): ClientUnaryCall;
  /** SkipUploaderRole ... */
  skipUploaderRole(
    request: MsgSkipUploaderRole,
    callback: (error: ServiceError | null, response: MsgSkipUploaderRoleResponse) => void,
  ): ClientUnaryCall;
  skipUploaderRole(
    request: MsgSkipUploaderRole,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgSkipUploaderRoleResponse) => void,
  ): ClientUnaryCall;
  skipUploaderRole(
    request: MsgSkipUploaderRole,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgSkipUploaderRoleResponse) => void,
  ): ClientUnaryCall;
  /**
   * UpdateParams defines a governance operation for updating the x/bundles module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(
    request: MsgUpdateParams,
    callback: (error: ServiceError | null, response: MsgUpdateParamsResponse) => void,
  ): ClientUnaryCall;
  updateParams(
    request: MsgUpdateParams,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MsgUpdateParamsResponse) => void,
  ): ClientUnaryCall;
  updateParams(
    request: MsgUpdateParams,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MsgUpdateParamsResponse) => void,
  ): ClientUnaryCall;
}

export const MsgClient = makeGenericClientConstructor(MsgService, "kyve.bundles.v1beta1.Msg") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MsgClient;
  service: typeof MsgService;
  serviceName: string;
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
