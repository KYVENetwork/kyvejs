/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "kyve.query.v1beta1";

/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundle {
  /** pool_id in which the bundle was created */
  pool_id: string;
  /** id is is integrated with each valid bundle produced. */
  id: string;
  /** storage_id is the id with which the data can be retrieved from the configured data provider */
  storage_id: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  from_index: string;
  /** to_index is the index to which the bundle goes (exclusive) */
  to_index: string;
  /** from_key is the key of the first data item in the bundle proposal */
  from_key: string;
  /** to_key the key of the last data item in the bundle */
  to_key: string;
  /** bundle_summary is a summary of the bundle. */
  bundle_summary: string;
  /** data_hash is a sha256 hash of the uploaded data. */
  data_hash: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalized_at?:
    | FinalizedAt
    | undefined;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: string;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: string;
  /**
   * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
   * This field was added in schema version 2. Bundles finalized before that return `null`.
   */
  stake_security?: StakeSecurity | undefined;
}

/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAt {
  /** height is the block height in which the bundle got finalized. */
  height: string;
  /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
  timestamp: string;
}

/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecurity {
  /** valid_vote_power gives the amount of $KYVE stake that voted `valid`. */
  valid_vote_power: string;
  /**
   * total_vote_power gives the amount of total $KYVE stake that was present in the pool
   * during finalization.
   */
  total_vote_power: string;
}

/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** pool_id ... */
  pool_id: string;
  /**
   * index is an optional parameter which tells the server to only show
   * the bundle with the given index. This can not be combined with pagination.
   */
  index: string;
}

/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
  /** finalized_bundles ... */
  finalized_bundles: FinalizedBundle[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
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
  /** finalized_bundles ... */
  finalized_bundles?: FinalizedBundle | undefined;
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

function createBaseFinalizedBundle(): FinalizedBundle {
  return {
    pool_id: "0",
    id: "0",
    storage_id: "",
    uploader: "",
    from_index: "0",
    to_index: "0",
    from_key: "",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    finalized_at: undefined,
    storage_provider_id: "0",
    compression_id: "0",
    stake_security: undefined,
  };
}

export const FinalizedBundle = {
  encode(message: FinalizedBundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.from_index !== "0") {
      writer.uint32(40).uint64(message.from_index);
    }
    if (message.to_index !== "0") {
      writer.uint32(48).uint64(message.to_index);
    }
    if (message.from_key !== "") {
      writer.uint32(90).string(message.from_key);
    }
    if (message.to_key !== "") {
      writer.uint32(58).string(message.to_key);
    }
    if (message.bundle_summary !== "") {
      writer.uint32(66).string(message.bundle_summary);
    }
    if (message.data_hash !== "") {
      writer.uint32(74).string(message.data_hash);
    }
    if (message.finalized_at !== undefined) {
      FinalizedAt.encode(message.finalized_at, writer.uint32(82).fork()).ldelim();
    }
    if (message.storage_provider_id !== "0") {
      writer.uint32(96).uint64(message.storage_provider_id);
    }
    if (message.compression_id !== "0") {
      writer.uint32(104).uint64(message.compression_id);
    }
    if (message.stake_security !== undefined) {
      StakeSecurity.encode(message.stake_security, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedBundle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizedBundle();
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

          message.from_index = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.to_index = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.from_key = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.to_key = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.bundle_summary = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.data_hash = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.finalized_at = FinalizedAt.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.storage_provider_id = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.compression_id = longToString(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.stake_security = StakeSecurity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalizedBundle {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
      uploader: isSet(object.uploader) ? globalThis.String(object.uploader) : "",
      from_index: isSet(object.from_index) ? globalThis.String(object.from_index) : "0",
      to_index: isSet(object.to_index) ? globalThis.String(object.to_index) : "0",
      from_key: isSet(object.from_key) ? globalThis.String(object.from_key) : "",
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? globalThis.String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? globalThis.String(object.data_hash) : "",
      finalized_at: isSet(object.finalized_at) ? FinalizedAt.fromJSON(object.finalized_at) : undefined,
      storage_provider_id: isSet(object.storage_provider_id) ? globalThis.String(object.storage_provider_id) : "0",
      compression_id: isSet(object.compression_id) ? globalThis.String(object.compression_id) : "0",
      stake_security: isSet(object.stake_security) ? StakeSecurity.fromJSON(object.stake_security) : undefined,
    };
  },

  toJSON(message: FinalizedBundle): unknown {
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
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    if (message.to_index !== "0") {
      obj.to_index = message.to_index;
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
    if (message.finalized_at !== undefined) {
      obj.finalized_at = FinalizedAt.toJSON(message.finalized_at);
    }
    if (message.storage_provider_id !== "0") {
      obj.storage_provider_id = message.storage_provider_id;
    }
    if (message.compression_id !== "0") {
      obj.compression_id = message.compression_id;
    }
    if (message.stake_security !== undefined) {
      obj.stake_security = StakeSecurity.toJSON(message.stake_security);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalizedBundle>, I>>(base?: I): FinalizedBundle {
    return FinalizedBundle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalizedBundle>, I>>(object: I): FinalizedBundle {
    const message = createBaseFinalizedBundle();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.storage_id = object.storage_id ?? "";
    message.uploader = object.uploader ?? "";
    message.from_index = object.from_index ?? "0";
    message.to_index = object.to_index ?? "0";
    message.from_key = object.from_key ?? "";
    message.to_key = object.to_key ?? "";
    message.bundle_summary = object.bundle_summary ?? "";
    message.data_hash = object.data_hash ?? "";
    message.finalized_at = (object.finalized_at !== undefined && object.finalized_at !== null)
      ? FinalizedAt.fromPartial(object.finalized_at)
      : undefined;
    message.storage_provider_id = object.storage_provider_id ?? "0";
    message.compression_id = object.compression_id ?? "0";
    message.stake_security = (object.stake_security !== undefined && object.stake_security !== null)
      ? StakeSecurity.fromPartial(object.stake_security)
      : undefined;
    return message;
  },
};

function createBaseFinalizedAt(): FinalizedAt {
  return { height: "", timestamp: "" };
}

export const FinalizedAt = {
  encode(message: FinalizedAt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedAt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizedAt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.height = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timestamp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FinalizedAt {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "",
    };
  },

  toJSON(message: FinalizedAt): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    if (message.timestamp !== "") {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalizedAt>, I>>(base?: I): FinalizedAt {
    return FinalizedAt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalizedAt>, I>>(object: I): FinalizedAt {
    const message = createBaseFinalizedAt();
    message.height = object.height ?? "";
    message.timestamp = object.timestamp ?? "";
    return message;
  },
};

function createBaseStakeSecurity(): StakeSecurity {
  return { valid_vote_power: "", total_vote_power: "" };
}

export const StakeSecurity = {
  encode(message: StakeSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid_vote_power !== "") {
      writer.uint32(10).string(message.valid_vote_power);
    }
    if (message.total_vote_power !== "") {
      writer.uint32(18).string(message.total_vote_power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeSecurity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeSecurity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.valid_vote_power = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.total_vote_power = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakeSecurity {
    return {
      valid_vote_power: isSet(object.valid_vote_power) ? globalThis.String(object.valid_vote_power) : "",
      total_vote_power: isSet(object.total_vote_power) ? globalThis.String(object.total_vote_power) : "",
    };
  },

  toJSON(message: StakeSecurity): unknown {
    const obj: any = {};
    if (message.valid_vote_power !== "") {
      obj.valid_vote_power = message.valid_vote_power;
    }
    if (message.total_vote_power !== "") {
      obj.total_vote_power = message.total_vote_power;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakeSecurity>, I>>(base?: I): StakeSecurity {
    return StakeSecurity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakeSecurity>, I>>(object: I): StakeSecurity {
    const message = createBaseStakeSecurity();
    message.valid_vote_power = object.valid_vote_power ?? "";
    message.total_vote_power = object.total_vote_power ?? "";
    return message;
  },
};

function createBaseQueryFinalizedBundlesRequest(): QueryFinalizedBundlesRequest {
  return { pagination: undefined, pool_id: "0", index: "" };
}

export const QueryFinalizedBundlesRequest = {
  encode(message: QueryFinalizedBundlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundlesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.index = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundlesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      index: isSet(object.index) ? globalThis.String(object.index) : "",
    };
  },

  toJSON(message: QueryFinalizedBundlesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.index !== "") {
      obj.index = message.index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFinalizedBundlesRequest>, I>>(base?: I): QueryFinalizedBundlesRequest {
    return QueryFinalizedBundlesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundlesRequest>, I>>(object: I): QueryFinalizedBundlesRequest {
    const message = createBaseQueryFinalizedBundlesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.pool_id = object.pool_id ?? "0";
    message.index = object.index ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.finalized_bundles.push(FinalizedBundle.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundlesResponse {
    return {
      finalized_bundles: globalThis.Array.isArray(object?.finalized_bundles)
        ? object.finalized_bundles.map((e: any) => FinalizedBundle.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryFinalizedBundlesResponse): unknown {
    const obj: any = {};
    if (message.finalized_bundles?.length) {
      obj.finalized_bundles = message.finalized_bundles.map((e) => FinalizedBundle.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFinalizedBundlesResponse>, I>>(base?: I): QueryFinalizedBundlesResponse {
    return QueryFinalizedBundlesResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundleRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundleRequest {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
    };
  },

  toJSON(message: QueryFinalizedBundleRequest): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFinalizedBundleRequest>, I>>(base?: I): QueryFinalizedBundleRequest {
    return QueryFinalizedBundleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundleRequest>, I>>(object: I): QueryFinalizedBundleRequest {
    const message = createBaseQueryFinalizedBundleRequest();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseQueryFinalizedBundleResponse(): QueryFinalizedBundleResponse {
  return { finalized_bundles: undefined };
}

export const QueryFinalizedBundleResponse = {
  encode(message: QueryFinalizedBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.finalized_bundles !== undefined) {
      FinalizedBundle.encode(message.finalized_bundles, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFinalizedBundleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFinalizedBundleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.finalized_bundles = FinalizedBundle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFinalizedBundleResponse {
    return {
      finalized_bundles: isSet(object.finalized_bundles)
        ? FinalizedBundle.fromJSON(object.finalized_bundles)
        : undefined,
    };
  },

  toJSON(message: QueryFinalizedBundleResponse): unknown {
    const obj: any = {};
    if (message.finalized_bundles !== undefined) {
      obj.finalized_bundles = FinalizedBundle.toJSON(message.finalized_bundles);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFinalizedBundleResponse>, I>>(base?: I): QueryFinalizedBundleResponse {
    return QueryFinalizedBundleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFinalizedBundleResponse>, I>>(object: I): QueryFinalizedBundleResponse {
    const message = createBaseQueryFinalizedBundleResponse();
    message.finalized_bundles = (object.finalized_bundles !== undefined && object.finalized_bundles !== null)
      ? FinalizedBundle.fromPartial(object.finalized_bundles)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentVoteStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): QueryCurrentVoteStatusRequest {
    return { pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0" };
  },

  toJSON(message: QueryCurrentVoteStatusRequest): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentVoteStatusRequest>, I>>(base?: I): QueryCurrentVoteStatusRequest {
    return QueryCurrentVoteStatusRequest.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentVoteStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.valid = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.invalid = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.abstain = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentVoteStatusResponse {
    return {
      valid: isSet(object.valid) ? globalThis.String(object.valid) : "0",
      invalid: isSet(object.invalid) ? globalThis.String(object.invalid) : "0",
      abstain: isSet(object.abstain) ? globalThis.String(object.abstain) : "0",
      total: isSet(object.total) ? globalThis.String(object.total) : "0",
    };
  },

  toJSON(message: QueryCurrentVoteStatusResponse): unknown {
    const obj: any = {};
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
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCurrentVoteStatusResponse>, I>>(base?: I): QueryCurrentVoteStatusResponse {
    return QueryCurrentVoteStatusResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanValidateRequest();
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

          message.valaddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCanValidateRequest {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      valaddress: isSet(object.valaddress) ? globalThis.String(object.valaddress) : "",
    };
  },

  toJSON(message: QueryCanValidateRequest): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.valaddress !== "") {
      obj.valaddress = message.valaddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCanValidateRequest>, I>>(base?: I): QueryCanValidateRequest {
    return QueryCanValidateRequest.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.possible = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCanValidateResponse {
    return {
      possible: isSet(object.possible) ? globalThis.Boolean(object.possible) : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanValidateResponse): unknown {
    const obj: any = {};
    if (message.possible === true) {
      obj.possible = message.possible;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCanValidateResponse>, I>>(base?: I): QueryCanValidateResponse {
    return QueryCanValidateResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanProposeRequest();
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

          message.proposer = reader.string();
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

  fromJSON(object: any): QueryCanProposeRequest {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      proposer: isSet(object.proposer) ? globalThis.String(object.proposer) : "",
      from_index: isSet(object.from_index) ? globalThis.String(object.from_index) : "0",
    };
  },

  toJSON(message: QueryCanProposeRequest): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCanProposeRequest>, I>>(base?: I): QueryCanProposeRequest {
    return QueryCanProposeRequest.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanProposeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.possible = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCanProposeResponse {
    return {
      possible: isSet(object.possible) ? globalThis.Boolean(object.possible) : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanProposeResponse): unknown {
    const obj: any = {};
    if (message.possible === true) {
      obj.possible = message.possible;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCanProposeResponse>, I>>(base?: I): QueryCanProposeResponse {
    return QueryCanProposeResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanVoteRequest();
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

          message.voter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.storage_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCanVoteRequest {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
    };
  },

  toJSON(message: QueryCanVoteRequest): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.voter !== "") {
      obj.voter = message.voter;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCanVoteRequest>, I>>(base?: I): QueryCanVoteRequest {
    return QueryCanVoteRequest.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.possible = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryCanVoteResponse {
    return {
      possible: isSet(object.possible) ? globalThis.Boolean(object.possible) : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanVoteResponse): unknown {
    const obj: any = {};
    if (message.possible === true) {
      obj.possible = message.possible;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCanVoteResponse>, I>>(base?: I): QueryCanVoteResponse {
    return QueryCanVoteResponse.fromPartial(base ?? ({} as any));
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
  FinalizedBundlesQuery(request: QueryFinalizedBundlesRequest): Promise<QueryFinalizedBundlesResponse>;
  /** FinalizedBundle ... */
  FinalizedBundleQuery(request: QueryFinalizedBundleRequest): Promise<FinalizedBundle>;
  /** CurrentVoteStatus ... */
  CurrentVoteStatus(request: QueryCurrentVoteStatusRequest): Promise<QueryCurrentVoteStatusResponse>;
  /** CanValidate ... */
  CanValidate(request: QueryCanValidateRequest): Promise<QueryCanValidateResponse>;
  /** CanPropose ... */
  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
  /** CanVote checks if voter on pool can still vote for the given bundle */
  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
}

export const QueryBundlesServiceName = "kyve.query.v1beta1.QueryBundles";
export class QueryBundlesClientImpl implements QueryBundles {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryBundlesServiceName;
    this.rpc = rpc;
    this.FinalizedBundlesQuery = this.FinalizedBundlesQuery.bind(this);
    this.FinalizedBundleQuery = this.FinalizedBundleQuery.bind(this);
    this.CurrentVoteStatus = this.CurrentVoteStatus.bind(this);
    this.CanValidate = this.CanValidate.bind(this);
    this.CanPropose = this.CanPropose.bind(this);
    this.CanVote = this.CanVote.bind(this);
  }
  FinalizedBundlesQuery(request: QueryFinalizedBundlesRequest): Promise<QueryFinalizedBundlesResponse> {
    const data = QueryFinalizedBundlesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinalizedBundlesQuery", data);
    return promise.then((data) => QueryFinalizedBundlesResponse.decode(_m0.Reader.create(data)));
  }

  FinalizedBundleQuery(request: QueryFinalizedBundleRequest): Promise<FinalizedBundle> {
    const data = QueryFinalizedBundleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinalizedBundleQuery", data);
    return promise.then((data) => FinalizedBundle.decode(_m0.Reader.create(data)));
  }

  CurrentVoteStatus(request: QueryCurrentVoteStatusRequest): Promise<QueryCurrentVoteStatusResponse> {
    const data = QueryCurrentVoteStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentVoteStatus", data);
    return promise.then((data) => QueryCurrentVoteStatusResponse.decode(_m0.Reader.create(data)));
  }

  CanValidate(request: QueryCanValidateRequest): Promise<QueryCanValidateResponse> {
    const data = QueryCanValidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanValidate", data);
    return promise.then((data) => QueryCanValidateResponse.decode(_m0.Reader.create(data)));
  }

  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse> {
    const data = QueryCanProposeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanPropose", data);
    return promise.then((data) => QueryCanProposeResponse.decode(_m0.Reader.create(data)));
  }

  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse> {
    const data = QueryCanVoteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanVote", data);
    return promise.then((data) => QueryCanVoteResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
