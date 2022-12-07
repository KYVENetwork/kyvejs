/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FinalizedBundle } from "../../bundles/v1beta1/bundles";

export const protobufPackage = "kyve.query.v1beta1";

/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** pool_id ... */
  pool_id: string;
}

/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
  /** finalized_bundles ... */
  finalized_bundles: FinalizedBundle[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
  /** pool_id ... */
  pool_id: string;
  /** id ... */
  id: string;
}

/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
  /** finalized_bundle ... */
  finalized_bundle?: FinalizedBundle;
}

/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesByHeightRequest {
  /** pool_id ... */
  pool_id: string;
  /** id ... */
  height: string;
}

/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesByHeightResponse {
  /** finalized_bundle ... */
  finalized_bundle?: FinalizedBundle;
}

/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
  /** pool_id ... */
  pool_id: string;
}

/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
  /** valid ... */
  valid: string;
  /** invalid ... */
  invalid: string;
  /** abstain ... */
  abstain: string;
  /** total ... */
  total: string;
}

/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
  /** pool_id defines the unique ID of the pool. */
  pool_id: string;
  /** valaddress ... */
  valaddress: string;
}

/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}

/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
  /** pool_id defines the unique ID of the pool. */
  pool_id: string;
  /** staker ... */
  staker: string;
  /** proposer ... */
  proposer: string;
  /** from_index ... */
  from_index: string;
}

/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}

/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
  /** pool_id defines the unique ID of the pool. */
  pool_id: string;
  /** staker ... */
  staker: string;
  /** voter ... */
  voter: string;
  /** storage_id ... */
  storage_id: string;
}

/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}

function createBaseQueryFinalizedBundlesRequest(): QueryFinalizedBundlesRequest {
  return { pagination: undefined, pool_id: "0" };
}

export const QueryFinalizedBundlesRequest = {
  encode(message: QueryFinalizedBundlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundlesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
    };
  },

  toJSON(message: QueryFinalizedBundlesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundlesRequest>, I>>(object: I): QueryFinalizedBundlesRequest {
    const message = createBaseQueryFinalizedBundlesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.pool_id = object.pool_id ?? "0";
    return message;
  },
};

function createBaseQueryFinalizedBundlesResponse(): QueryFinalizedBundlesResponse {
  return { finalized_bundles: [], pagination: undefined };
}

export const QueryFinalizedBundlesResponse = {
  encode(message: QueryFinalizedBundlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.finalized_bundles) {
      FinalizedBundle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalized_bundles.push(FinalizedBundle.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundlesResponse {
    return {
      finalized_bundles: Array.isArray(object?.finalized_bundles)
        ? object.finalized_bundles.map((e: any) => FinalizedBundle.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryFinalizedBundlesResponse): unknown {
    const obj: any = {};
    if (message.finalized_bundles) {
      obj.finalized_bundles = message.finalized_bundles.map((e) => e ? FinalizedBundle.toJSON(e) : undefined);
    } else {
      obj.finalized_bundles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundlesResponse>, I>>(
    object: I,
  ): QueryFinalizedBundlesResponse {
    const message = createBaseQueryFinalizedBundlesResponse();
    message.finalized_bundles = object.finalized_bundles?.map((e) => FinalizedBundle.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryFinalizedBundleRequest(): QueryFinalizedBundleRequest {
  return { pool_id: "0", id: "0" };
}

export const QueryFinalizedBundleRequest = {
  encode(message: QueryFinalizedBundleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundleRequest {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: QueryFinalizedBundleRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundleRequest>, I>>(object: I): QueryFinalizedBundleRequest {
    const message = createBaseQueryFinalizedBundleRequest();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseQueryFinalizedBundleResponse(): QueryFinalizedBundleResponse {
  return { finalized_bundle: undefined };
}

export const QueryFinalizedBundleResponse = {
  encode(message: QueryFinalizedBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.finalized_bundle !== undefined) {
      FinalizedBundle.encode(message.finalized_bundle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalized_bundle = FinalizedBundle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundleResponse {
    return {
      finalized_bundle: isSet(object.finalized_bundle) ? FinalizedBundle.fromJSON(object.finalized_bundle) : undefined,
    };
  },

  toJSON(message: QueryFinalizedBundleResponse): unknown {
    const obj: any = {};
    message.finalized_bundle !== undefined &&
      (obj.finalized_bundle = message.finalized_bundle ? FinalizedBundle.toJSON(message.finalized_bundle) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundleResponse>, I>>(object: I): QueryFinalizedBundleResponse {
    const message = createBaseQueryFinalizedBundleResponse();
    message.finalized_bundle = (object.finalized_bundle !== undefined && object.finalized_bundle !== null)
      ? FinalizedBundle.fromPartial(object.finalized_bundle)
      : undefined;
    return message;
  },
};

function createBaseQueryFinalizedBundlesByHeightRequest(): QueryFinalizedBundlesByHeightRequest {
  return { pool_id: "0", height: "0" };
}

export const QueryFinalizedBundlesByHeightRequest = {
  encode(message: QueryFinalizedBundlesByHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.height !== "0") {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundlesByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.height = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundlesByHeightRequest {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: QueryFinalizedBundlesByHeightRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundlesByHeightRequest>, I>>(
    object: I,
  ): QueryFinalizedBundlesByHeightRequest {
    const message = createBaseQueryFinalizedBundlesByHeightRequest();
    message.pool_id = object.pool_id ?? "0";
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseQueryFinalizedBundlesByHeightResponse(): QueryFinalizedBundlesByHeightResponse {
  return { finalized_bundle: undefined };
}

export const QueryFinalizedBundlesByHeightResponse = {
  encode(message: QueryFinalizedBundlesByHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.finalized_bundle !== undefined) {
      FinalizedBundle.encode(message.finalized_bundle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundlesByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.finalized_bundle = FinalizedBundle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundlesByHeightResponse {
    return {
      finalized_bundle: isSet(object.finalized_bundle) ? FinalizedBundle.fromJSON(object.finalized_bundle) : undefined,
    };
  },

  toJSON(message: QueryFinalizedBundlesByHeightResponse): unknown {
    const obj: any = {};
    message.finalized_bundle !== undefined &&
      (obj.finalized_bundle = message.finalized_bundle ? FinalizedBundle.toJSON(message.finalized_bundle) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundlesByHeightResponse>, I>>(
    object: I,
  ): QueryFinalizedBundlesByHeightResponse {
    const message = createBaseQueryFinalizedBundlesByHeightResponse();
    message.finalized_bundle = (object.finalized_bundle !== undefined && object.finalized_bundle !== null)
      ? FinalizedBundle.fromPartial(object.finalized_bundle)
      : undefined;
    return message;
  },
};

function createBaseQueryCurrentVoteStatusRequest(): QueryCurrentVoteStatusRequest {
  return { pool_id: "0" };
}

export const QueryCurrentVoteStatusRequest = {
  encode(message: QueryCurrentVoteStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentVoteStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentVoteStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentVoteStatusRequest {
    return { pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0" };
  },

  toJSON(message: QueryCurrentVoteStatusRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentVoteStatusRequest>, I>>(
    object: I,
  ): QueryCurrentVoteStatusRequest {
    const message = createBaseQueryCurrentVoteStatusRequest();
    message.pool_id = object.pool_id ?? "0";
    return message;
  },
};

function createBaseQueryCurrentVoteStatusResponse(): QueryCurrentVoteStatusResponse {
  return { valid: "0", invalid: "0", abstain: "0", total: "0" };
}

export const QueryCurrentVoteStatusResponse = {
  encode(message: QueryCurrentVoteStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid !== "0") {
      writer.uint32(8).uint64(message.valid);
    }
    if (message.invalid !== "0") {
      writer.uint32(16).uint64(message.invalid);
    }
    if (message.abstain !== "0") {
      writer.uint32(24).uint64(message.abstain);
    }
    if (message.total !== "0") {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentVoteStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentVoteStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.invalid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.abstain = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.total = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentVoteStatusResponse {
    return {
      valid: isSet(object.valid) ? String(object.valid) : "0",
      invalid: isSet(object.invalid) ? String(object.invalid) : "0",
      abstain: isSet(object.abstain) ? String(object.abstain) : "0",
      total: isSet(object.total) ? String(object.total) : "0",
    };
  },

  toJSON(message: QueryCurrentVoteStatusResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.invalid !== undefined && (obj.invalid = message.invalid);
    message.abstain !== undefined && (obj.abstain = message.abstain);
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentVoteStatusResponse>, I>>(
    object: I,
  ): QueryCurrentVoteStatusResponse {
    const message = createBaseQueryCurrentVoteStatusResponse();
    message.valid = object.valid ?? "0";
    message.invalid = object.invalid ?? "0";
    message.abstain = object.abstain ?? "0";
    message.total = object.total ?? "0";
    return message;
  },
};

function createBaseQueryCanValidateRequest(): QueryCanValidateRequest {
  return { pool_id: "0", valaddress: "" };
}

export const QueryCanValidateRequest = {
  encode(message: QueryCanValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.valaddress !== "") {
      writer.uint32(18).string(message.valaddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanValidateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.valaddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanValidateRequest {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
    };
  },

  toJSON(message: QueryCanValidateRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.valaddress !== undefined && (obj.valaddress = message.valaddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanValidateRequest>, I>>(object: I): QueryCanValidateRequest {
    const message = createBaseQueryCanValidateRequest();
    message.pool_id = object.pool_id ?? "0";
    message.valaddress = object.valaddress ?? "";
    return message;
  },
};

function createBaseQueryCanValidateResponse(): QueryCanValidateResponse {
  return { possible: false, reason: "" };
}

export const QueryCanValidateResponse = {
  encode(message: QueryCanValidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanValidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.possible = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanValidateResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanValidateResponse): unknown {
    const obj: any = {};
    message.possible !== undefined && (obj.possible = message.possible);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanValidateResponse>, I>>(object: I): QueryCanValidateResponse {
    const message = createBaseQueryCanValidateResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseQueryCanProposeRequest(): QueryCanProposeRequest {
  return { pool_id: "0", staker: "", proposer: "", from_index: "0" };
}

export const QueryCanProposeRequest = {
  encode(message: QueryCanProposeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.from_index !== "0") {
      writer.uint32(32).uint64(message.from_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanProposeRequest();
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
          message.proposer = reader.string();
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

  fromJSON(object: any): QueryCanProposeRequest {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      from_index: isSet(object.from_index) ? String(object.from_index) : "0",
    };
  },

  toJSON(message: QueryCanProposeRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.from_index !== undefined && (obj.from_index = message.from_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanProposeRequest>, I>>(object: I): QueryCanProposeRequest {
    const message = createBaseQueryCanProposeRequest();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.proposer = object.proposer ?? "";
    message.from_index = object.from_index ?? "0";
    return message;
  },
};

function createBaseQueryCanProposeResponse(): QueryCanProposeResponse {
  return { possible: false, reason: "" };
}

export const QueryCanProposeResponse = {
  encode(message: QueryCanProposeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanProposeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.possible = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanProposeResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanProposeResponse): unknown {
    const obj: any = {};
    message.possible !== undefined && (obj.possible = message.possible);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanProposeResponse>, I>>(object: I): QueryCanProposeResponse {
    const message = createBaseQueryCanProposeResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseQueryCanVoteRequest(): QueryCanVoteRequest {
  return { pool_id: "0", staker: "", voter: "", storage_id: "" };
}

export const QueryCanVoteRequest = {
  encode(message: QueryCanVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    if (message.storage_id !== "") {
      writer.uint32(34).string(message.storage_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanVoteRequest();
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
          message.voter = reader.string();
          break;
        case 4:
          message.storage_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanVoteRequest {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
    };
  },

  toJSON(message: QueryCanVoteRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.voter !== undefined && (obj.voter = message.voter);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanVoteRequest>, I>>(object: I): QueryCanVoteRequest {
    const message = createBaseQueryCanVoteRequest();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.voter = object.voter ?? "";
    message.storage_id = object.storage_id ?? "";
    return message;
  },
};

function createBaseQueryCanVoteResponse(): QueryCanVoteResponse {
  return { possible: false, reason: "" };
}

export const QueryCanVoteResponse = {
  encode(message: QueryCanVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.possible = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanVoteResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanVoteResponse): unknown {
    const obj: any = {};
    message.possible !== undefined && (obj.possible = message.possible);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanVoteResponse>, I>>(object: I): QueryCanVoteResponse {
    const message = createBaseQueryCanVoteResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryBundles {
  /** FinalizedBundles ... */
  FinalizedBundles(request: QueryFinalizedBundlesRequest): Promise<QueryFinalizedBundlesResponse>;
  /** FinalizedBundle ... */
  FinalizedBundle(request: QueryFinalizedBundleRequest): Promise<QueryFinalizedBundleResponse>;
  /** Queries the bundle which contains the data given height */
  FinalizedBundlesByHeight(
    request: QueryFinalizedBundlesByHeightRequest,
  ): Promise<QueryFinalizedBundlesByHeightResponse>;
  /** CurrentVoteStatus ... */
  CurrentVoteStatus(request: QueryCurrentVoteStatusRequest): Promise<QueryCurrentVoteStatusResponse>;
  /** CanValidate ... */
  CanValidate(request: QueryCanValidateRequest): Promise<QueryCanValidateResponse>;
  /** CanPropose ... */
  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
  /** CanVote checks if voter on pool can still vote for the given bundle */
  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
}

export class QueryBundlesClientImpl implements QueryBundles {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.query.v1beta1.QueryBundles";
    this.rpc = rpc;
    this.FinalizedBundles = this.FinalizedBundles.bind(this);
    this.FinalizedBundle = this.FinalizedBundle.bind(this);
    this.FinalizedBundlesByHeight = this.FinalizedBundlesByHeight.bind(this);
    this.CurrentVoteStatus = this.CurrentVoteStatus.bind(this);
    this.CanValidate = this.CanValidate.bind(this);
    this.CanPropose = this.CanPropose.bind(this);
    this.CanVote = this.CanVote.bind(this);
  }
  FinalizedBundles(request: QueryFinalizedBundlesRequest): Promise<QueryFinalizedBundlesResponse> {
    const data = QueryFinalizedBundlesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinalizedBundles", data);
    return promise.then((data) => QueryFinalizedBundlesResponse.decode(new _m0.Reader(data)));
  }

  FinalizedBundle(request: QueryFinalizedBundleRequest): Promise<QueryFinalizedBundleResponse> {
    const data = QueryFinalizedBundleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinalizedBundle", data);
    return promise.then((data) => QueryFinalizedBundleResponse.decode(new _m0.Reader(data)));
  }

  FinalizedBundlesByHeight(
    request: QueryFinalizedBundlesByHeightRequest,
  ): Promise<QueryFinalizedBundlesByHeightResponse> {
    const data = QueryFinalizedBundlesByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinalizedBundlesByHeight", data);
    return promise.then((data) => QueryFinalizedBundlesByHeightResponse.decode(new _m0.Reader(data)));
  }

  CurrentVoteStatus(request: QueryCurrentVoteStatusRequest): Promise<QueryCurrentVoteStatusResponse> {
    const data = QueryCurrentVoteStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentVoteStatus", data);
    return promise.then((data) => QueryCurrentVoteStatusResponse.decode(new _m0.Reader(data)));
  }

  CanValidate(request: QueryCanValidateRequest): Promise<QueryCanValidateResponse> {
    const data = QueryCanValidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanValidate", data);
    return promise.then((data) => QueryCanValidateResponse.decode(new _m0.Reader(data)));
  }

  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse> {
    const data = QueryCanProposeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanPropose", data);
    return promise.then((data) => QueryCanProposeResponse.decode(new _m0.Reader(data)));
  }

  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse> {
    const data = QueryCanVoteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanVote", data);
    return promise.then((data) => QueryCanVoteResponse.decode(new _m0.Reader(data)));
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
