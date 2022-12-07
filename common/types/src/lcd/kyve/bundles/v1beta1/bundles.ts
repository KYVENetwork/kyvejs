/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.bundles.v1beta1";

/**
 * BundleStatus represents the status of an evaluated bundle
 * proposal.
 */
export enum BundleStatus {
  /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
  BUNDLE_STATUS_UNSPECIFIED = "BUNDLE_STATUS_UNSPECIFIED",
  /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
  BUNDLE_STATUS_VALID = "BUNDLE_STATUS_VALID",
  /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
  BUNDLE_STATUS_INVALID = "BUNDLE_STATUS_INVALID",
  /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
  BUNDLE_STATUS_NO_FUNDS = "BUNDLE_STATUS_NO_FUNDS",
  /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
  BUNDLE_STATUS_NO_QUORUM = "BUNDLE_STATUS_NO_QUORUM",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function bundleStatusFromJSON(object: any): BundleStatus {
  switch (object) {
    case 0:
    case "BUNDLE_STATUS_UNSPECIFIED":
      return BundleStatus.BUNDLE_STATUS_UNSPECIFIED;
    case 1:
    case "BUNDLE_STATUS_VALID":
      return BundleStatus.BUNDLE_STATUS_VALID;
    case 2:
    case "BUNDLE_STATUS_INVALID":
      return BundleStatus.BUNDLE_STATUS_INVALID;
    case 3:
    case "BUNDLE_STATUS_NO_FUNDS":
      return BundleStatus.BUNDLE_STATUS_NO_FUNDS;
    case 4:
    case "BUNDLE_STATUS_NO_QUORUM":
      return BundleStatus.BUNDLE_STATUS_NO_QUORUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BundleStatus.UNRECOGNIZED;
  }
}

export function bundleStatusToJSON(object: BundleStatus): string {
  switch (object) {
    case BundleStatus.BUNDLE_STATUS_UNSPECIFIED:
      return "BUNDLE_STATUS_UNSPECIFIED";
    case BundleStatus.BUNDLE_STATUS_VALID:
      return "BUNDLE_STATUS_VALID";
    case BundleStatus.BUNDLE_STATUS_INVALID:
      return "BUNDLE_STATUS_INVALID";
    case BundleStatus.BUNDLE_STATUS_NO_FUNDS:
      return "BUNDLE_STATUS_NO_FUNDS";
    case BundleStatus.BUNDLE_STATUS_NO_QUORUM:
      return "BUNDLE_STATUS_NO_QUORUM";
    case BundleStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function bundleStatusToNumber(object: BundleStatus): number {
  switch (object) {
    case BundleStatus.BUNDLE_STATUS_UNSPECIFIED:
      return 0;
    case BundleStatus.BUNDLE_STATUS_VALID:
      return 1;
    case BundleStatus.BUNDLE_STATUS_INVALID:
      return 2;
    case BundleStatus.BUNDLE_STATUS_NO_FUNDS:
      return 3;
    case BundleStatus.BUNDLE_STATUS_NO_QUORUM:
      return 4;
    case BundleStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposal {
  /** pool_id is the id of the pool for which this proposal is for */
  pool_id: string;
  /** storage_id is the id with which the data can be retrieved from */
  storage_id: string;
  /** uploader is the address of the staker who submitted the current proposal */
  uploader: string;
  /** next_uploader is the address of the staker who should upload the next proposal */
  next_uploader: string;
  /** data_size the size of the data in bytes */
  data_size: string;
  /** bundle_size the size of the bundle (amount of data items) */
  bundle_size: string;
  /** to_key the key of the last data item in the bundle proposal */
  to_key: string;
  /** bundle_summary a string summary of the current proposal */
  bundle_summary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  data_hash: string;
  /** updated_at the last time this proposal was edited */
  updated_at: string;
  /** voters_valid list of all stakers who voted in favor for current proposal */
  voters_valid: string[];
  /** voters_invalid list of all stakers who voted against for current proposal */
  voters_invalid: string[];
  /** voters_abstain list of all stakers who voted abstain for current proposal */
  voters_abstain: string[];
  /** from_key the key of the first data item in the bundle proposal */
  from_key: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: number;
}

/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundle {
  /** pool_id is the id of the pool for which this proposal is for */
  pool_id: string;
  /** id is a unique identifier for each finalized bundle in a pool */
  id: string;
  /** storage_id is the id with which the data can be retrieved from */
  storage_id: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  from_index: string;
  /** to_index is the index to which the bundle goes (exclusive) */
  to_index: string;
  /** to_key the key of the last data item in the bundle proposal */
  to_key: string;
  /** bundle_summary a string summary of the current proposal */
  bundle_summary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  data_hash: string;
  /** finalized_at is the block height at which this bundle got finalized */
  finalized_at: string;
  /** from_key the key of the first data item in the bundle proposal */
  from_key: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: number;
}

function createBaseBundleProposal(): BundleProposal {
  return {
    pool_id: "0",
    storage_id: "",
    uploader: "",
    next_uploader: "",
    data_size: "0",
    bundle_size: "0",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    updated_at: "0",
    voters_valid: [],
    voters_invalid: [],
    voters_abstain: [],
    from_key: "",
    storage_provider_id: 0,
    compression_id: 0,
  };
}

export const BundleProposal = {
  encode(message: BundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.storage_id !== "") {
      writer.uint32(18).string(message.storage_id);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    if (message.next_uploader !== "") {
      writer.uint32(34).string(message.next_uploader);
    }
    if (message.data_size !== "0") {
      writer.uint32(40).uint64(message.data_size);
    }
    if (message.bundle_size !== "0") {
      writer.uint32(48).uint64(message.bundle_size);
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
    if (message.updated_at !== "0") {
      writer.uint32(80).uint64(message.updated_at);
    }
    for (const v of message.voters_valid) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.voters_invalid) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.voters_abstain) {
      writer.uint32(106).string(v!);
    }
    if (message.from_key !== "") {
      writer.uint32(114).string(message.from_key);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(120).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(128).uint32(message.compression_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.storage_id = reader.string();
          break;
        case 3:
          message.uploader = reader.string();
          break;
        case 4:
          message.next_uploader = reader.string();
          break;
        case 5:
          message.data_size = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.bundle_size = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.to_key = reader.string();
          break;
        case 8:
          message.bundle_summary = reader.string();
          break;
        case 9:
          message.data_hash = reader.string();
          break;
        case 10:
          message.updated_at = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.voters_valid.push(reader.string());
          break;
        case 12:
          message.voters_invalid.push(reader.string());
          break;
        case 13:
          message.voters_abstain.push(reader.string());
          break;
        case 14:
          message.from_key = reader.string();
          break;
        case 15:
          message.storage_provider_id = reader.uint32();
          break;
        case 16:
          message.compression_id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BundleProposal {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      next_uploader: isSet(object.next_uploader) ? String(object.next_uploader) : "",
      data_size: isSet(object.data_size) ? String(object.data_size) : "0",
      bundle_size: isSet(object.bundle_size) ? String(object.bundle_size) : "0",
      to_key: isSet(object.to_key) ? String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
      updated_at: isSet(object.updated_at) ? String(object.updated_at) : "0",
      voters_valid: Array.isArray(object?.voters_valid) ? object.voters_valid.map((e: any) => String(e)) : [],
      voters_invalid: Array.isArray(object?.voters_invalid) ? object.voters_invalid.map((e: any) => String(e)) : [],
      voters_abstain: Array.isArray(object?.voters_abstain) ? object.voters_abstain.map((e: any) => String(e)) : [],
      from_key: isSet(object.from_key) ? String(object.from_key) : "",
      storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
    };
  },

  toJSON(message: BundleProposal): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.next_uploader !== undefined && (obj.next_uploader = message.next_uploader);
    message.data_size !== undefined && (obj.data_size = message.data_size);
    message.bundle_size !== undefined && (obj.bundle_size = message.bundle_size);
    message.to_key !== undefined && (obj.to_key = message.to_key);
    message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
    message.data_hash !== undefined && (obj.data_hash = message.data_hash);
    message.updated_at !== undefined && (obj.updated_at = message.updated_at);
    if (message.voters_valid) {
      obj.voters_valid = message.voters_valid.map((e) => e);
    } else {
      obj.voters_valid = [];
    }
    if (message.voters_invalid) {
      obj.voters_invalid = message.voters_invalid.map((e) => e);
    } else {
      obj.voters_invalid = [];
    }
    if (message.voters_abstain) {
      obj.voters_abstain = message.voters_abstain.map((e) => e);
    } else {
      obj.voters_abstain = [];
    }
    message.from_key !== undefined && (obj.from_key = message.from_key);
    message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
    message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BundleProposal>, I>>(object: I): BundleProposal {
    const message = createBaseBundleProposal();
    message.pool_id = object.pool_id ?? "0";
    message.storage_id = object.storage_id ?? "";
    message.uploader = object.uploader ?? "";
    message.next_uploader = object.next_uploader ?? "";
    message.data_size = object.data_size ?? "0";
    message.bundle_size = object.bundle_size ?? "0";
    message.to_key = object.to_key ?? "";
    message.bundle_summary = object.bundle_summary ?? "";
    message.data_hash = object.data_hash ?? "";
    message.updated_at = object.updated_at ?? "0";
    message.voters_valid = object.voters_valid?.map((e) => e) || [];
    message.voters_invalid = object.voters_invalid?.map((e) => e) || [];
    message.voters_abstain = object.voters_abstain?.map((e) => e) || [];
    message.from_key = object.from_key ?? "";
    message.storage_provider_id = object.storage_provider_id ?? 0;
    message.compression_id = object.compression_id ?? 0;
    return message;
  },
};

function createBaseFinalizedBundle(): FinalizedBundle {
  return {
    pool_id: "0",
    id: "0",
    storage_id: "",
    uploader: "",
    from_index: "0",
    to_index: "0",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    finalized_at: "0",
    from_key: "",
    storage_provider_id: 0,
    compression_id: 0,
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
    if (message.to_key !== "") {
      writer.uint32(58).string(message.to_key);
    }
    if (message.bundle_summary !== "") {
      writer.uint32(66).string(message.bundle_summary);
    }
    if (message.data_hash !== "") {
      writer.uint32(74).string(message.data_hash);
    }
    if (message.finalized_at !== "0") {
      writer.uint32(80).uint64(message.finalized_at);
    }
    if (message.from_key !== "") {
      writer.uint32(90).string(message.from_key);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(96).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(104).uint32(message.compression_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedBundle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinalizedBundle();
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
          message.from_index = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.to_index = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.to_key = reader.string();
          break;
        case 8:
          message.bundle_summary = reader.string();
          break;
        case 9:
          message.data_hash = reader.string();
          break;
        case 10:
          message.finalized_at = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.from_key = reader.string();
          break;
        case 12:
          message.storage_provider_id = reader.uint32();
          break;
        case 13:
          message.compression_id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FinalizedBundle {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      from_index: isSet(object.from_index) ? String(object.from_index) : "0",
      to_index: isSet(object.to_index) ? String(object.to_index) : "0",
      to_key: isSet(object.to_key) ? String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
      finalized_at: isSet(object.finalized_at) ? String(object.finalized_at) : "0",
      from_key: isSet(object.from_key) ? String(object.from_key) : "",
      storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
    };
  },

  toJSON(message: FinalizedBundle): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.id !== undefined && (obj.id = message.id);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.from_index !== undefined && (obj.from_index = message.from_index);
    message.to_index !== undefined && (obj.to_index = message.to_index);
    message.to_key !== undefined && (obj.to_key = message.to_key);
    message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
    message.data_hash !== undefined && (obj.data_hash = message.data_hash);
    message.finalized_at !== undefined && (obj.finalized_at = message.finalized_at);
    message.from_key !== undefined && (obj.from_key = message.from_key);
    message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
    message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FinalizedBundle>, I>>(object: I): FinalizedBundle {
    const message = createBaseFinalizedBundle();
    message.pool_id = object.pool_id ?? "0";
    message.id = object.id ?? "0";
    message.storage_id = object.storage_id ?? "";
    message.uploader = object.uploader ?? "";
    message.from_index = object.from_index ?? "0";
    message.to_index = object.to_index ?? "0";
    message.to_key = object.to_key ?? "";
    message.bundle_summary = object.bundle_summary ?? "";
    message.data_hash = object.data_hash ?? "";
    message.finalized_at = object.finalized_at ?? "0";
    message.from_key = object.from_key ?? "";
    message.storage_provider_id = object.storage_provider_id ?? 0;
    message.compression_id = object.compression_id ?? 0;
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
