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
  /** BUNDLE_STATUS_DISABLED - BUNDLE_STATUS_DISABLED  ... */
  BUNDLE_STATUS_DISABLED = "BUNDLE_STATUS_DISABLED",
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
    case 5:
    case "BUNDLE_STATUS_DISABLED":
      return BundleStatus.BUNDLE_STATUS_DISABLED;
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
    case BundleStatus.BUNDLE_STATUS_DISABLED:
      return "BUNDLE_STATUS_DISABLED";
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
    case BundleStatus.BUNDLE_STATUS_DISABLED:
      return 5;
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
  /** finalized_at contains details of the block that finalized this bundle. */
  finalized_at?:
    | FinalizedAt
    | undefined;
  /** from_key the key of the first data item in the bundle proposal */
  from_key: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: number;
  /** stake_security */
  stake_security?: StakeSecurity | undefined;
}

/** FinalizedAt ... */
export interface FinalizedAt {
  /** height ... */
  height: string;
  /** timestamp ... */
  timestamp: string;
}

/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurity {
  /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
  valid_vote_power: string;
  /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
  total_vote_power: string;
}

/** BundleVersionEntry ... */
export interface BundleVersionEntry {
  /** height ... */
  height: string;
  /** version ... */
  version: number;
}

/** BundleVersionMap ... */
export interface BundleVersionMap {
  /** versions ... */
  versions: BundleVersionEntry[];
}

/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgress {
  /** address ... */
  address: string;
  /** progress ... */
  progress: string;
}

/** RoundRobinProgress ... */
export interface RoundRobinProgress {
  /** pool_id ... */
  pool_id: string;
  /** progress_list ... */
  progress_list: RoundRobinSingleValidatorProgress[];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleProposal();
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

          message.storage_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uploader = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.next_uploader = reader.string();
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

          message.bundle_size = longToString(reader.uint64() as Long);
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
          if (tag !== 80) {
            break;
          }

          message.updated_at = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.voters_valid.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.voters_invalid.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.voters_abstain.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.from_key = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.storage_provider_id = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
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

  fromJSON(object: any): BundleProposal {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id) ? globalThis.String(object.storage_id) : "",
      uploader: isSet(object.uploader) ? globalThis.String(object.uploader) : "",
      next_uploader: isSet(object.next_uploader) ? globalThis.String(object.next_uploader) : "",
      data_size: isSet(object.data_size) ? globalThis.String(object.data_size) : "0",
      bundle_size: isSet(object.bundle_size) ? globalThis.String(object.bundle_size) : "0",
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? globalThis.String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? globalThis.String(object.data_hash) : "",
      updated_at: isSet(object.updated_at) ? globalThis.String(object.updated_at) : "0",
      voters_valid: globalThis.Array.isArray(object?.voters_valid)
        ? object.voters_valid.map((e: any) => globalThis.String(e))
        : [],
      voters_invalid: globalThis.Array.isArray(object?.voters_invalid)
        ? object.voters_invalid.map((e: any) => globalThis.String(e))
        : [],
      voters_abstain: globalThis.Array.isArray(object?.voters_abstain)
        ? object.voters_abstain.map((e: any) => globalThis.String(e))
        : [],
      from_key: isSet(object.from_key) ? globalThis.String(object.from_key) : "",
      storage_provider_id: isSet(object.storage_provider_id) ? globalThis.Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? globalThis.Number(object.compression_id) : 0,
    };
  },

  toJSON(message: BundleProposal): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.uploader !== "") {
      obj.uploader = message.uploader;
    }
    if (message.next_uploader !== "") {
      obj.next_uploader = message.next_uploader;
    }
    if (message.data_size !== "0") {
      obj.data_size = message.data_size;
    }
    if (message.bundle_size !== "0") {
      obj.bundle_size = message.bundle_size;
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
    if (message.updated_at !== "0") {
      obj.updated_at = message.updated_at;
    }
    if (message.voters_valid?.length) {
      obj.voters_valid = message.voters_valid;
    }
    if (message.voters_invalid?.length) {
      obj.voters_invalid = message.voters_invalid;
    }
    if (message.voters_abstain?.length) {
      obj.voters_abstain = message.voters_abstain;
    }
    if (message.from_key !== "") {
      obj.from_key = message.from_key;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BundleProposal>, I>>(base?: I): BundleProposal {
    return BundleProposal.fromPartial(base ?? ({} as any));
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
    finalized_at: undefined,
    from_key: "",
    storage_provider_id: 0,
    compression_id: 0,
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
    if (message.from_key !== "") {
      writer.uint32(90).string(message.from_key);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(96).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(104).uint32(message.compression_id);
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
        case 11:
          if (tag !== 90) {
            break;
          }

          message.from_key = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.storage_provider_id = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.compression_id = reader.uint32();
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
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary) ? globalThis.String(object.bundle_summary) : "",
      data_hash: isSet(object.data_hash) ? globalThis.String(object.data_hash) : "",
      finalized_at: isSet(object.finalized_at) ? FinalizedAt.fromJSON(object.finalized_at) : undefined,
      from_key: isSet(object.from_key) ? globalThis.String(object.from_key) : "",
      storage_provider_id: isSet(object.storage_provider_id) ? globalThis.Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? globalThis.Number(object.compression_id) : 0,
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
    if (message.from_key !== "") {
      obj.from_key = message.from_key;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
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
    message.to_key = object.to_key ?? "";
    message.bundle_summary = object.bundle_summary ?? "";
    message.data_hash = object.data_hash ?? "";
    message.finalized_at = (object.finalized_at !== undefined && object.finalized_at !== null)
      ? FinalizedAt.fromPartial(object.finalized_at)
      : undefined;
    message.from_key = object.from_key ?? "";
    message.storage_provider_id = object.storage_provider_id ?? 0;
    message.compression_id = object.compression_id ?? 0;
    message.stake_security = (object.stake_security !== undefined && object.stake_security !== null)
      ? StakeSecurity.fromPartial(object.stake_security)
      : undefined;
    return message;
  },
};

function createBaseFinalizedAt(): FinalizedAt {
  return { height: "0", timestamp: "0" };
}

export const FinalizedAt = {
  encode(message: FinalizedAt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.timestamp !== "0") {
      writer.uint32(16).uint64(message.timestamp);
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
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timestamp = longToString(reader.uint64() as Long);
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
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: FinalizedAt): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.timestamp !== "0") {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinalizedAt>, I>>(base?: I): FinalizedAt {
    return FinalizedAt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FinalizedAt>, I>>(object: I): FinalizedAt {
    const message = createBaseFinalizedAt();
    message.height = object.height ?? "0";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseStakeSecurity(): StakeSecurity {
  return { valid_vote_power: "0", total_vote_power: "0" };
}

export const StakeSecurity = {
  encode(message: StakeSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid_vote_power !== "0") {
      writer.uint32(8).uint64(message.valid_vote_power);
    }
    if (message.total_vote_power !== "0") {
      writer.uint32(16).uint64(message.total_vote_power);
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
          if (tag !== 8) {
            break;
          }

          message.valid_vote_power = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_vote_power = longToString(reader.uint64() as Long);
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
      valid_vote_power: isSet(object.valid_vote_power) ? globalThis.String(object.valid_vote_power) : "0",
      total_vote_power: isSet(object.total_vote_power) ? globalThis.String(object.total_vote_power) : "0",
    };
  },

  toJSON(message: StakeSecurity): unknown {
    const obj: any = {};
    if (message.valid_vote_power !== "0") {
      obj.valid_vote_power = message.valid_vote_power;
    }
    if (message.total_vote_power !== "0") {
      obj.total_vote_power = message.total_vote_power;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakeSecurity>, I>>(base?: I): StakeSecurity {
    return StakeSecurity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakeSecurity>, I>>(object: I): StakeSecurity {
    const message = createBaseStakeSecurity();
    message.valid_vote_power = object.valid_vote_power ?? "0";
    message.total_vote_power = object.total_vote_power ?? "0";
    return message;
  },
};

function createBaseBundleVersionEntry(): BundleVersionEntry {
  return { height: "0", version: 0 };
}

export const BundleVersionEntry = {
  encode(message: BundleVersionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleVersionEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleVersionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.version = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleVersionEntry {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
    };
  },

  toJSON(message: BundleVersionEntry): unknown {
    const obj: any = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BundleVersionEntry>, I>>(base?: I): BundleVersionEntry {
    return BundleVersionEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BundleVersionEntry>, I>>(object: I): BundleVersionEntry {
    const message = createBaseBundleVersionEntry();
    message.height = object.height ?? "0";
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseBundleVersionMap(): BundleVersionMap {
  return { versions: [] };
}

export const BundleVersionMap = {
  encode(message: BundleVersionMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      BundleVersionEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleVersionMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleVersionMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.versions.push(BundleVersionEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleVersionMap {
    return {
      versions: globalThis.Array.isArray(object?.versions)
        ? object.versions.map((e: any) => BundleVersionEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BundleVersionMap): unknown {
    const obj: any = {};
    if (message.versions?.length) {
      obj.versions = message.versions.map((e) => BundleVersionEntry.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BundleVersionMap>, I>>(base?: I): BundleVersionMap {
    return BundleVersionMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BundleVersionMap>, I>>(object: I): BundleVersionMap {
    const message = createBaseBundleVersionMap();
    message.versions = object.versions?.map((e) => BundleVersionEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRoundRobinSingleValidatorProgress(): RoundRobinSingleValidatorProgress {
  return { address: "", progress: "0" };
}

export const RoundRobinSingleValidatorProgress = {
  encode(message: RoundRobinSingleValidatorProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.progress !== "0") {
      writer.uint32(16).int64(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoundRobinSingleValidatorProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoundRobinSingleValidatorProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.progress = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoundRobinSingleValidatorProgress {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      progress: isSet(object.progress) ? globalThis.String(object.progress) : "0",
    };
  },

  toJSON(message: RoundRobinSingleValidatorProgress): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.progress !== "0") {
      obj.progress = message.progress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoundRobinSingleValidatorProgress>, I>>(
    base?: I,
  ): RoundRobinSingleValidatorProgress {
    return RoundRobinSingleValidatorProgress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoundRobinSingleValidatorProgress>, I>>(
    object: I,
  ): RoundRobinSingleValidatorProgress {
    const message = createBaseRoundRobinSingleValidatorProgress();
    message.address = object.address ?? "";
    message.progress = object.progress ?? "0";
    return message;
  },
};

function createBaseRoundRobinProgress(): RoundRobinProgress {
  return { pool_id: "0", progress_list: [] };
}

export const RoundRobinProgress = {
  encode(message: RoundRobinProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    for (const v of message.progress_list) {
      RoundRobinSingleValidatorProgress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoundRobinProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoundRobinProgress();
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

          message.progress_list.push(RoundRobinSingleValidatorProgress.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoundRobinProgress {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      progress_list: globalThis.Array.isArray(object?.progress_list)
        ? object.progress_list.map((e: any) => RoundRobinSingleValidatorProgress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RoundRobinProgress): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.progress_list?.length) {
      obj.progress_list = message.progress_list.map((e) => RoundRobinSingleValidatorProgress.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoundRobinProgress>, I>>(base?: I): RoundRobinProgress {
    return RoundRobinProgress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoundRobinProgress>, I>>(object: I): RoundRobinProgress {
    const message = createBaseRoundRobinProgress();
    message.pool_id = object.pool_id ?? "0";
    message.progress_list = object.progress_list?.map((e) => RoundRobinSingleValidatorProgress.fromPartial(e)) || [];
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
