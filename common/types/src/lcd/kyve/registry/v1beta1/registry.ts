/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.registry.v1beta1";

/** PoolStatus ... */
export enum PoolStatus {
  /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
  POOL_STATUS_UNSPECIFIED = "POOL_STATUS_UNSPECIFIED",
  /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
  POOL_STATUS_ACTIVE = "POOL_STATUS_ACTIVE",
  /** POOL_STATUS_PAUSED - POOL_STATUS_PAUSED ... */
  POOL_STATUS_PAUSED = "POOL_STATUS_PAUSED",
  /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
  POOL_STATUS_NO_FUNDS = "POOL_STATUS_NO_FUNDS",
  /** POOL_STATUS_NOT_ENOUGH_VALIDATORS - POOL_STATUS_NOT_ENOUGH_VALIDATORS ... */
  POOL_STATUS_NOT_ENOUGH_VALIDATORS = "POOL_STATUS_NOT_ENOUGH_VALIDATORS",
  /** POOL_STATUS_NOT_ENOUGH_STAKE - POOL_STATUS_NOT_ENOUGH_STAKE ... */
  POOL_STATUS_NOT_ENOUGH_STAKE = "POOL_STATUS_NOT_ENOUGH_STAKE",
  /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
  POOL_STATUS_UPGRADING = "POOL_STATUS_UPGRADING",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function poolStatusFromJSON(object: any): PoolStatus {
  switch (object) {
    case 0:
    case "POOL_STATUS_UNSPECIFIED":
      return PoolStatus.POOL_STATUS_UNSPECIFIED;
    case 1:
    case "POOL_STATUS_ACTIVE":
      return PoolStatus.POOL_STATUS_ACTIVE;
    case 2:
    case "POOL_STATUS_PAUSED":
      return PoolStatus.POOL_STATUS_PAUSED;
    case 3:
    case "POOL_STATUS_NO_FUNDS":
      return PoolStatus.POOL_STATUS_NO_FUNDS;
    case 4:
    case "POOL_STATUS_NOT_ENOUGH_VALIDATORS":
      return PoolStatus.POOL_STATUS_NOT_ENOUGH_VALIDATORS;
    case 5:
    case "POOL_STATUS_NOT_ENOUGH_STAKE":
      return PoolStatus.POOL_STATUS_NOT_ENOUGH_STAKE;
    case 6:
    case "POOL_STATUS_UPGRADING":
      return PoolStatus.POOL_STATUS_UPGRADING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolStatus.UNRECOGNIZED;
  }
}

export function poolStatusToJSON(object: PoolStatus): string {
  switch (object) {
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      return "POOL_STATUS_UNSPECIFIED";
    case PoolStatus.POOL_STATUS_ACTIVE:
      return "POOL_STATUS_ACTIVE";
    case PoolStatus.POOL_STATUS_PAUSED:
      return "POOL_STATUS_PAUSED";
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return "POOL_STATUS_NO_FUNDS";
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_VALIDATORS:
      return "POOL_STATUS_NOT_ENOUGH_VALIDATORS";
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_STAKE:
      return "POOL_STATUS_NOT_ENOUGH_STAKE";
    case PoolStatus.POOL_STATUS_UPGRADING:
      return "POOL_STATUS_UPGRADING";
    case PoolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function poolStatusToNumber(object: PoolStatus): number {
  switch (object) {
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      return 0;
    case PoolStatus.POOL_STATUS_ACTIVE:
      return 1;
    case PoolStatus.POOL_STATUS_PAUSED:
      return 2;
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return 3;
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_VALIDATORS:
      return 4;
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_STAKE:
      return 5;
    case PoolStatus.POOL_STATUS_UPGRADING:
      return 6;
    case PoolStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** StakerStatus ... */
export enum StakerStatus {
  /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
  STAKER_STATUS_UNSPECIFIED = "STAKER_STATUS_UNSPECIFIED",
  /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
  STAKER_STATUS_ACTIVE = "STAKER_STATUS_ACTIVE",
  /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
  STAKER_STATUS_INACTIVE = "STAKER_STATUS_INACTIVE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function stakerStatusFromJSON(object: any): StakerStatus {
  switch (object) {
    case 0:
    case "STAKER_STATUS_UNSPECIFIED":
      return StakerStatus.STAKER_STATUS_UNSPECIFIED;
    case 1:
    case "STAKER_STATUS_ACTIVE":
      return StakerStatus.STAKER_STATUS_ACTIVE;
    case 2:
    case "STAKER_STATUS_INACTIVE":
      return StakerStatus.STAKER_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakerStatus.UNRECOGNIZED;
  }
}

export function stakerStatusToJSON(object: StakerStatus): string {
  switch (object) {
    case StakerStatus.STAKER_STATUS_UNSPECIFIED:
      return "STAKER_STATUS_UNSPECIFIED";
    case StakerStatus.STAKER_STATUS_ACTIVE:
      return "STAKER_STATUS_ACTIVE";
    case StakerStatus.STAKER_STATUS_INACTIVE:
      return "STAKER_STATUS_INACTIVE";
    case StakerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function stakerStatusToNumber(object: StakerStatus): number {
  switch (object) {
    case StakerStatus.STAKER_STATUS_UNSPECIFIED:
      return 0;
    case StakerStatus.STAKER_STATUS_ACTIVE:
      return 1;
    case StakerStatus.STAKER_STATUS_INACTIVE:
      return 2;
    case StakerStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** BundleProposal ... */
export interface BundleProposal {
  /** uploader ... */
  uploader: string;
  /** next_uploader ... */
  next_uploader: string;
  /** storage_id ... */
  storage_id: string;
  /** byte_size ... */
  byte_size: string;
  /**
   * from_height ...
   *
   * @deprecated
   */
  from_height: string;
  /** to_height ... */
  to_height: string;
  /** created_at ... */
  created_at: string;
  /** voters_valid ... */
  voters_valid: string[];
  /** voters_invalid ... */
  voters_invalid: string[];
  /** voters_abstain ... */
  voters_abstain: string[];
  /** to_key ... */
  to_key: string;
  /** to_value ... */
  to_value: string;
  /** bundle_hash ... */
  bundle_hash: string;
}

/** Protocol ... */
export interface Protocol {
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** last_upgrade ... */
  last_upgrade: string;
  /** test */
  test: string;
}

/** Upgrade ... */
export interface UpgradePlan {
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** scheduled_at ... */
  scheduled_at: string;
  /** duration ... */
  duration: string;
}

/** DelegationEntries ... */
export interface DelegationEntries {
  /** id ... */
  id: string;
  /** balance ... */
  balance: string;
  /** staker ... */
  staker: string;
  /** k_index ... */
  k_index: string;
}

/** DelegationPoolData ... */
export interface DelegationPoolData {
  /** id ... */
  id: string;
  /** staker ... */
  staker: string;
  /** current_rewards ... */
  current_rewards: string;
  /** total_delegation ... */
  total_delegation: string;
  /** latest_index_k ... */
  latest_index_k: string;
  /** delegator_count ... */
  delegator_count: string;
  /** latest_index_was_undelegation ... */
  latest_index_was_undelegation: boolean;
}

/** Delegator ... */
export interface Delegator {
  /** id ... */
  id: string;
  /** k_index ... */
  k_index: string;
  /** delegation_amount ... */
  delegation_amount: string;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
}

/** Funder ... */
export interface Funder {
  /** account ... */
  account: string;
  /** fund_id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
}

/** Pool ... */
export interface Pool {
  /** id ... */
  id: string;
  /** creator ... */
  creator: string;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /**
   * versions ...
   *
   * @deprecated
   */
  versions: string;
  /** config ... */
  config: string;
  /** current_height ... */
  current_height: string;
  /** total_bytes ... */
  total_bytes: string;
  /** total_bundles ... */
  total_bundles: string;
  /** total_bundle_rewards ... */
  total_bundle_rewards: string;
  /**
   * start_height ...
   *
   * @deprecated
   */
  start_height: string;
  /** upload_interval ... */
  upload_interval: string;
  /** operating_cost ... */
  operating_cost: string;
  /** paused ... */
  paused: boolean;
  /** funders ... */
  funders: string[];
  /** lowest_funder ... */
  lowest_funder: string;
  /** total_funds ... */
  total_funds: string;
  /** stakers ... */
  stakers: string[];
  /** lowest_staker ... */
  lowest_staker: string;
  /** total_stake ... */
  total_stake: string;
  /** total_delegation ... */
  total_delegation: string;
  /** bundle_proposal ... */
  bundle_proposal?: BundleProposal;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /** protocol ... */
  protocol?: Protocol;
  /** upgrade_plan ... */
  upgrade_plan?: UpgradePlan;
  /** start_key ... */
  start_key: string;
  /** current_key ... */
  current_key: string;
  /** current_value ... */
  current_value: string;
  /** inactive_stakers ... */
  inactive_stakers: string[];
  /** total_inactive_stake ... */
  total_inactive_stake: string;
  /** min_stake ... */
  min_stake: string;
  /** status ... */
  status: PoolStatus;
}

/** Proposal ... */
export interface Proposal {
  /** storage_id ... */
  storage_id: string;
  /** pool_id ... */
  pool_id: string;
  /** uploader ... */
  uploader: string;
  /** from_height ... */
  from_height: string;
  /** to_height ... */
  to_height: string;
  /** finalized_at ... */
  finalized_at: string;
  /** id ... */
  id: string;
  /** key ... */
  key: string;
  /** value ... */
  value: string;
  /** bundle_hash ... */
  bundle_hash: string;
}

/** Staker ... */
export interface Staker {
  /** staker ... */
  account: string;
  /** pool_id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
  /** unbonding_amount ... */
  unbonding_amount: string;
  /** commission ... */
  commission: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** logo */
  logo: string;
  /** points */
  points: string;
  /** status */
  status: StakerStatus;
}

/**
 * UnbondingStakingEntry
 * Creates an entry for an upcoming unbonding of a staker which is put in the unbonding fifo queue and
 * executed after the unbonding time is over.
 */
export interface UnbondingStakingQueueEntry {
  /** index is a monotonically increasing integer to order the entries */
  index: string;
  /** staker ... */
  staker: string;
  /** pool_id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
  /** creation_time ... */
  creation_time: string;
}

/**
 * UnbondingStakingEntry
 * Creates an entry for an upcoming unbonding of a staker which is put in the unbonding fifo queue and
 * executed after the unbonding time is over.
 */
export interface UnbondingStaker {
  /** staker ... */
  staker: string;
  /** pool_id ... */
  pool_id: string;
  /** amount ... */
  unbonding_amount: string;
}

/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface UnbondingStakingQueueState {
  /** low_index ... */
  low_index: string;
  /** high_index ... */
  high_index: string;
}

/**
 * UnbondingStakingEntry
 * Creates an entry for an upcoming unbonding of a staker which is put in the unbonding fifo queue and
 * executed after the unbonding time is over.
 */
export interface UnbondingDelegationQueueEntry {
  /** index is a monotonically increasing integer to order the entries */
  index: string;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
  /** pool_id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
  /** creation_time ... */
  creation_time: string;
}

/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface UnbondingDelegationQueueState {
  /** low_index ... */
  low_index: string;
  /** high_index ... */
  high_index: string;
}

/** RedelegationCooldown ... */
export interface RedelegationCooldown {
  /** low_index ... */
  address: string;
  /** high_index ... */
  creation_date: string;
}

/** CommissionChangeQueueEntry ... */
export interface CommissionChangeQueueEntry {
  /** index is a monotonically increasing integer to order the entries */
  index: string;
  /** staker ... */
  staker: string;
  /** pool_id ... */
  pool_id: string;
  /** commission ... */
  commission: string;
  /** commission ... */
  creation_date: string;
}

/** CommissionChangeQueueState ... */
export interface CommissionChangeQueueState {
  /** low_index ... */
  low_index: string;
  /** high_index ... */
  high_index: string;
}

function createBaseBundleProposal(): BundleProposal {
  return {
    uploader: "",
    next_uploader: "",
    storage_id: "",
    byte_size: "0",
    from_height: "0",
    to_height: "0",
    created_at: "0",
    voters_valid: [],
    voters_invalid: [],
    voters_abstain: [],
    to_key: "",
    to_value: "",
    bundle_hash: "",
  };
}

export const BundleProposal = {
  encode(message: BundleProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploader !== "") {
      writer.uint32(10).string(message.uploader);
    }
    if (message.next_uploader !== "") {
      writer.uint32(18).string(message.next_uploader);
    }
    if (message.storage_id !== "") {
      writer.uint32(26).string(message.storage_id);
    }
    if (message.byte_size !== "0") {
      writer.uint32(32).uint64(message.byte_size);
    }
    if (message.from_height !== "0") {
      writer.uint32(40).uint64(message.from_height);
    }
    if (message.to_height !== "0") {
      writer.uint32(48).uint64(message.to_height);
    }
    if (message.created_at !== "0") {
      writer.uint32(56).uint64(message.created_at);
    }
    for (const v of message.voters_valid) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.voters_invalid) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.voters_abstain) {
      writer.uint32(82).string(v!);
    }
    if (message.to_key !== "") {
      writer.uint32(90).string(message.to_key);
    }
    if (message.to_value !== "") {
      writer.uint32(98).string(message.to_value);
    }
    if (message.bundle_hash !== "") {
      writer.uint32(106).string(message.bundle_hash);
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
          message.uploader = reader.string();
          break;
        case 2:
          message.next_uploader = reader.string();
          break;
        case 3:
          message.storage_id = reader.string();
          break;
        case 4:
          message.byte_size = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.from_height = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.to_height = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.created_at = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.voters_valid.push(reader.string());
          break;
        case 9:
          message.voters_invalid.push(reader.string());
          break;
        case 10:
          message.voters_abstain.push(reader.string());
          break;
        case 11:
          message.to_key = reader.string();
          break;
        case 12:
          message.to_value = reader.string();
          break;
        case 13:
          message.bundle_hash = reader.string();
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
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      next_uploader: isSet(object.next_uploader) ? String(object.next_uploader) : "",
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      byte_size: isSet(object.byte_size) ? String(object.byte_size) : "0",
      from_height: isSet(object.from_height) ? String(object.from_height) : "0",
      to_height: isSet(object.to_height) ? String(object.to_height) : "0",
      created_at: isSet(object.created_at) ? String(object.created_at) : "0",
      voters_valid: Array.isArray(object?.voters_valid) ? object.voters_valid.map((e: any) => String(e)) : [],
      voters_invalid: Array.isArray(object?.voters_invalid) ? object.voters_invalid.map((e: any) => String(e)) : [],
      voters_abstain: Array.isArray(object?.voters_abstain) ? object.voters_abstain.map((e: any) => String(e)) : [],
      to_key: isSet(object.to_key) ? String(object.to_key) : "",
      to_value: isSet(object.to_value) ? String(object.to_value) : "",
      bundle_hash: isSet(object.bundle_hash) ? String(object.bundle_hash) : "",
    };
  },

  toJSON(message: BundleProposal): unknown {
    const obj: any = {};
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.next_uploader !== undefined && (obj.next_uploader = message.next_uploader);
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.byte_size !== undefined && (obj.byte_size = message.byte_size);
    message.from_height !== undefined && (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.created_at !== undefined && (obj.created_at = message.created_at);
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
    message.to_key !== undefined && (obj.to_key = message.to_key);
    message.to_value !== undefined && (obj.to_value = message.to_value);
    message.bundle_hash !== undefined && (obj.bundle_hash = message.bundle_hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BundleProposal>, I>>(object: I): BundleProposal {
    const message = createBaseBundleProposal();
    message.uploader = object.uploader ?? "";
    message.next_uploader = object.next_uploader ?? "";
    message.storage_id = object.storage_id ?? "";
    message.byte_size = object.byte_size ?? "0";
    message.from_height = object.from_height ?? "0";
    message.to_height = object.to_height ?? "0";
    message.created_at = object.created_at ?? "0";
    message.voters_valid = object.voters_valid?.map((e) => e) || [];
    message.voters_invalid = object.voters_invalid?.map((e) => e) || [];
    message.voters_abstain = object.voters_abstain?.map((e) => e) || [];
    message.to_key = object.to_key ?? "";
    message.to_value = object.to_value ?? "";
    message.bundle_hash = object.bundle_hash ?? "";
    return message;
  },
};

function createBaseProtocol(): Protocol {
  return { version: "", binaries: "", last_upgrade: "0", test: "" };
}

export const Protocol = {
  encode(message: Protocol, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.last_upgrade !== "0") {
      writer.uint32(24).uint64(message.last_upgrade);
    }
    if (message.test !== "") {
      writer.uint32(34).string(message.test);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Protocol {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.binaries = reader.string();
          break;
        case 3:
          message.last_upgrade = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.test = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Protocol {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      last_upgrade: isSet(object.last_upgrade) ? String(object.last_upgrade) : "0",
      test: isSet(object.test) ? String(object.test) : "",
    };
  },

  toJSON(message: Protocol): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    message.last_upgrade !== undefined && (obj.last_upgrade = message.last_upgrade);
    message.test !== undefined && (obj.test = message.test);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Protocol>, I>>(object: I): Protocol {
    const message = createBaseProtocol();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.last_upgrade = object.last_upgrade ?? "0";
    message.test = object.test ?? "";
    return message;
  },
};

function createBaseUpgradePlan(): UpgradePlan {
  return { version: "", binaries: "", scheduled_at: "0", duration: "0" };
}

export const UpgradePlan = {
  encode(message: UpgradePlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(24).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.binaries = reader.string();
          break;
        case 3:
          message.scheduled_at = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.duration = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpgradePlan {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      scheduled_at: isSet(object.scheduled_at) ? String(object.scheduled_at) : "0",
      duration: isSet(object.duration) ? String(object.duration) : "0",
    };
  },

  toJSON(message: UpgradePlan): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    message.scheduled_at !== undefined && (obj.scheduled_at = message.scheduled_at);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpgradePlan>, I>>(object: I): UpgradePlan {
    const message = createBaseUpgradePlan();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.scheduled_at = object.scheduled_at ?? "0";
    message.duration = object.duration ?? "0";
    return message;
  },
};

function createBaseDelegationEntries(): DelegationEntries {
  return { id: "0", balance: "", staker: "", k_index: "0" };
}

export const DelegationEntries = {
  encode(message: DelegationEntries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    if (message.k_index !== "0") {
      writer.uint32(32).uint64(message.k_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.staker = reader.string();
          break;
        case 4:
          message.k_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationEntries {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      balance: isSet(object.balance) ? String(object.balance) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      k_index: isSet(object.k_index) ? String(object.k_index) : "0",
    };
  },

  toJSON(message: DelegationEntries): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.balance !== undefined && (obj.balance = message.balance);
    message.staker !== undefined && (obj.staker = message.staker);
    message.k_index !== undefined && (obj.k_index = message.k_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationEntries>, I>>(object: I): DelegationEntries {
    const message = createBaseDelegationEntries();
    message.id = object.id ?? "0";
    message.balance = object.balance ?? "";
    message.staker = object.staker ?? "";
    message.k_index = object.k_index ?? "0";
    return message;
  },
};

function createBaseDelegationPoolData(): DelegationPoolData {
  return {
    id: "0",
    staker: "",
    current_rewards: "0",
    total_delegation: "0",
    latest_index_k: "0",
    delegator_count: "0",
    latest_index_was_undelegation: false,
  };
}

export const DelegationPoolData = {
  encode(message: DelegationPoolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.current_rewards !== "0") {
      writer.uint32(24).uint64(message.current_rewards);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(32).uint64(message.total_delegation);
    }
    if (message.latest_index_k !== "0") {
      writer.uint32(40).uint64(message.latest_index_k);
    }
    if (message.delegator_count !== "0") {
      writer.uint32(48).uint64(message.delegator_count);
    }
    if (message.latest_index_was_undelegation === true) {
      writer.uint32(56).bool(message.latest_index_was_undelegation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationPoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationPoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.current_rewards = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.latest_index_k = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.delegator_count = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.latest_index_was_undelegation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationPoolData {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      current_rewards: isSet(object.current_rewards) ? String(object.current_rewards) : "0",
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      latest_index_k: isSet(object.latest_index_k) ? String(object.latest_index_k) : "0",
      delegator_count: isSet(object.delegator_count) ? String(object.delegator_count) : "0",
      latest_index_was_undelegation: isSet(object.latest_index_was_undelegation)
        ? Boolean(object.latest_index_was_undelegation)
        : false,
    };
  },

  toJSON(message: DelegationPoolData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.current_rewards !== undefined && (obj.current_rewards = message.current_rewards);
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.latest_index_k !== undefined && (obj.latest_index_k = message.latest_index_k);
    message.delegator_count !== undefined && (obj.delegator_count = message.delegator_count);
    message.latest_index_was_undelegation !== undefined &&
      (obj.latest_index_was_undelegation = message.latest_index_was_undelegation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationPoolData>, I>>(object: I): DelegationPoolData {
    const message = createBaseDelegationPoolData();
    message.id = object.id ?? "0";
    message.staker = object.staker ?? "";
    message.current_rewards = object.current_rewards ?? "0";
    message.total_delegation = object.total_delegation ?? "0";
    message.latest_index_k = object.latest_index_k ?? "0";
    message.delegator_count = object.delegator_count ?? "0";
    message.latest_index_was_undelegation = object.latest_index_was_undelegation ?? false;
    return message;
  },
};

function createBaseDelegator(): Delegator {
  return { id: "0", k_index: "0", delegation_amount: "0", staker: "", delegator: "" };
}

export const Delegator = {
  encode(message: Delegator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.k_index !== "0") {
      writer.uint32(16).uint64(message.k_index);
    }
    if (message.delegation_amount !== "0") {
      writer.uint32(24).uint64(message.delegation_amount);
    }
    if (message.staker !== "") {
      writer.uint32(34).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(42).string(message.delegator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.k_index = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.delegation_amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.staker = reader.string();
          break;
        case 5:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegator {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      k_index: isSet(object.k_index) ? String(object.k_index) : "0",
      delegation_amount: isSet(object.delegation_amount) ? String(object.delegation_amount) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
    };
  },

  toJSON(message: Delegator): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.k_index !== undefined && (obj.k_index = message.k_index);
    message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount);
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegator>, I>>(object: I): Delegator {
    const message = createBaseDelegator();
    message.id = object.id ?? "0";
    message.k_index = object.k_index ?? "0";
    message.delegation_amount = object.delegation_amount ?? "0";
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    return message;
  },
};

function createBaseFunder(): Funder {
  return { account: "", pool_id: "0", amount: "0" };
}

export const Funder = {
  encode(message: Funder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.account = reader.string();
          break;
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Funder {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: Funder): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Funder>, I>>(object: I): Funder {
    const message = createBaseFunder();
    message.account = object.account ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBasePool(): Pool {
  return {
    id: "0",
    creator: "",
    name: "",
    runtime: "",
    logo: "",
    versions: "",
    config: "",
    current_height: "0",
    total_bytes: "0",
    total_bundles: "0",
    total_bundle_rewards: "0",
    start_height: "0",
    upload_interval: "0",
    operating_cost: "0",
    paused: false,
    funders: [],
    lowest_funder: "",
    total_funds: "0",
    stakers: [],
    lowest_staker: "",
    total_stake: "0",
    total_delegation: "0",
    bundle_proposal: undefined,
    max_bundle_size: "0",
    protocol: undefined,
    upgrade_plan: undefined,
    start_key: "",
    current_key: "",
    current_value: "",
    inactive_stakers: [],
    total_inactive_stake: "0",
    min_stake: "0",
    status: PoolStatus.POOL_STATUS_UNSPECIFIED,
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(34).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(42).string(message.logo);
    }
    if (message.versions !== "") {
      writer.uint32(50).string(message.versions);
    }
    if (message.config !== "") {
      writer.uint32(58).string(message.config);
    }
    if (message.current_height !== "0") {
      writer.uint32(64).uint64(message.current_height);
    }
    if (message.total_bytes !== "0") {
      writer.uint32(72).uint64(message.total_bytes);
    }
    if (message.total_bundles !== "0") {
      writer.uint32(80).uint64(message.total_bundles);
    }
    if (message.total_bundle_rewards !== "0") {
      writer.uint32(88).uint64(message.total_bundle_rewards);
    }
    if (message.start_height !== "0") {
      writer.uint32(96).uint64(message.start_height);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(104).uint64(message.upload_interval);
    }
    if (message.operating_cost !== "0") {
      writer.uint32(112).uint64(message.operating_cost);
    }
    if (message.paused === true) {
      writer.uint32(120).bool(message.paused);
    }
    for (const v of message.funders) {
      writer.uint32(130).string(v!);
    }
    if (message.lowest_funder !== "") {
      writer.uint32(138).string(message.lowest_funder);
    }
    if (message.total_funds !== "0") {
      writer.uint32(144).uint64(message.total_funds);
    }
    for (const v of message.stakers) {
      writer.uint32(154).string(v!);
    }
    if (message.lowest_staker !== "") {
      writer.uint32(162).string(message.lowest_staker);
    }
    if (message.total_stake !== "0") {
      writer.uint32(168).uint64(message.total_stake);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(176).uint64(message.total_delegation);
    }
    if (message.bundle_proposal !== undefined) {
      BundleProposal.encode(message.bundle_proposal, writer.uint32(186).fork()).ldelim();
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(192).uint64(message.max_bundle_size);
    }
    if (message.protocol !== undefined) {
      Protocol.encode(message.protocol, writer.uint32(202).fork()).ldelim();
    }
    if (message.upgrade_plan !== undefined) {
      UpgradePlan.encode(message.upgrade_plan, writer.uint32(210).fork()).ldelim();
    }
    if (message.start_key !== "") {
      writer.uint32(218).string(message.start_key);
    }
    if (message.current_key !== "") {
      writer.uint32(226).string(message.current_key);
    }
    if (message.current_value !== "") {
      writer.uint32(234).string(message.current_value);
    }
    for (const v of message.inactive_stakers) {
      writer.uint32(242).string(v!);
    }
    if (message.total_inactive_stake !== "0") {
      writer.uint32(248).uint64(message.total_inactive_stake);
    }
    if (message.min_stake !== "0") {
      writer.uint32(256).uint64(message.min_stake);
    }
    if (message.status !== PoolStatus.POOL_STATUS_UNSPECIFIED) {
      writer.uint32(264).int32(poolStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.runtime = reader.string();
          break;
        case 5:
          message.logo = reader.string();
          break;
        case 6:
          message.versions = reader.string();
          break;
        case 7:
          message.config = reader.string();
          break;
        case 8:
          message.current_height = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.total_bytes = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.total_bundles = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.total_bundle_rewards = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.start_height = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.upload_interval = longToString(reader.uint64() as Long);
          break;
        case 14:
          message.operating_cost = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.paused = reader.bool();
          break;
        case 16:
          message.funders.push(reader.string());
          break;
        case 17:
          message.lowest_funder = reader.string();
          break;
        case 18:
          message.total_funds = longToString(reader.uint64() as Long);
          break;
        case 19:
          message.stakers.push(reader.string());
          break;
        case 20:
          message.lowest_staker = reader.string();
          break;
        case 21:
          message.total_stake = longToString(reader.uint64() as Long);
          break;
        case 22:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 23:
          message.bundle_proposal = BundleProposal.decode(reader, reader.uint32());
          break;
        case 24:
          message.max_bundle_size = longToString(reader.uint64() as Long);
          break;
        case 25:
          message.protocol = Protocol.decode(reader, reader.uint32());
          break;
        case 26:
          message.upgrade_plan = UpgradePlan.decode(reader, reader.uint32());
          break;
        case 27:
          message.start_key = reader.string();
          break;
        case 28:
          message.current_key = reader.string();
          break;
        case 29:
          message.current_value = reader.string();
          break;
        case 30:
          message.inactive_stakers.push(reader.string());
          break;
        case 31:
          message.total_inactive_stake = longToString(reader.uint64() as Long);
          break;
        case 32:
          message.min_stake = longToString(reader.uint64() as Long);
          break;
        case 33:
          message.status = poolStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      versions: isSet(object.versions) ? String(object.versions) : "",
      config: isSet(object.config) ? String(object.config) : "",
      current_height: isSet(object.current_height) ? String(object.current_height) : "0",
      total_bytes: isSet(object.total_bytes) ? String(object.total_bytes) : "0",
      total_bundles: isSet(object.total_bundles) ? String(object.total_bundles) : "0",
      total_bundle_rewards: isSet(object.total_bundle_rewards) ? String(object.total_bundle_rewards) : "0",
      start_height: isSet(object.start_height) ? String(object.start_height) : "0",
      upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      funders: Array.isArray(object?.funders) ? object.funders.map((e: any) => String(e)) : [],
      lowest_funder: isSet(object.lowest_funder) ? String(object.lowest_funder) : "",
      total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => String(e)) : [],
      lowest_staker: isSet(object.lowest_staker) ? String(object.lowest_staker) : "",
      total_stake: isSet(object.total_stake) ? String(object.total_stake) : "0",
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      bundle_proposal: isSet(object.bundle_proposal) ? BundleProposal.fromJSON(object.bundle_proposal) : undefined,
      max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
      protocol: isSet(object.protocol) ? Protocol.fromJSON(object.protocol) : undefined,
      upgrade_plan: isSet(object.upgrade_plan) ? UpgradePlan.fromJSON(object.upgrade_plan) : undefined,
      start_key: isSet(object.start_key) ? String(object.start_key) : "",
      current_key: isSet(object.current_key) ? String(object.current_key) : "",
      current_value: isSet(object.current_value) ? String(object.current_value) : "",
      inactive_stakers: Array.isArray(object?.inactive_stakers)
        ? object.inactive_stakers.map((e: any) => String(e))
        : [],
      total_inactive_stake: isSet(object.total_inactive_stake) ? String(object.total_inactive_stake) : "0",
      min_stake: isSet(object.min_stake) ? String(object.min_stake) : "0",
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : PoolStatus.POOL_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.versions !== undefined && (obj.versions = message.versions);
    message.config !== undefined && (obj.config = message.config);
    message.current_height !== undefined && (obj.current_height = message.current_height);
    message.total_bytes !== undefined && (obj.total_bytes = message.total_bytes);
    message.total_bundles !== undefined && (obj.total_bundles = message.total_bundles);
    message.total_bundle_rewards !== undefined && (obj.total_bundle_rewards = message.total_bundle_rewards);
    message.start_height !== undefined && (obj.start_height = message.start_height);
    message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
    message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
    message.paused !== undefined && (obj.paused = message.paused);
    if (message.funders) {
      obj.funders = message.funders.map((e) => e);
    } else {
      obj.funders = [];
    }
    message.lowest_funder !== undefined && (obj.lowest_funder = message.lowest_funder);
    message.total_funds !== undefined && (obj.total_funds = message.total_funds);
    if (message.stakers) {
      obj.stakers = message.stakers.map((e) => e);
    } else {
      obj.stakers = [];
    }
    message.lowest_staker !== undefined && (obj.lowest_staker = message.lowest_staker);
    message.total_stake !== undefined && (obj.total_stake = message.total_stake);
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.bundle_proposal !== undefined &&
      (obj.bundle_proposal = message.bundle_proposal ? BundleProposal.toJSON(message.bundle_proposal) : undefined);
    message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
    message.protocol !== undefined && (obj.protocol = message.protocol ? Protocol.toJSON(message.protocol) : undefined);
    message.upgrade_plan !== undefined &&
      (obj.upgrade_plan = message.upgrade_plan ? UpgradePlan.toJSON(message.upgrade_plan) : undefined);
    message.start_key !== undefined && (obj.start_key = message.start_key);
    message.current_key !== undefined && (obj.current_key = message.current_key);
    message.current_value !== undefined && (obj.current_value = message.current_value);
    if (message.inactive_stakers) {
      obj.inactive_stakers = message.inactive_stakers.map((e) => e);
    } else {
      obj.inactive_stakers = [];
    }
    message.total_inactive_stake !== undefined && (obj.total_inactive_stake = message.total_inactive_stake);
    message.min_stake !== undefined && (obj.min_stake = message.min_stake);
    message.status !== undefined && (obj.status = poolStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = object.id ?? "0";
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.versions = object.versions ?? "";
    message.config = object.config ?? "";
    message.current_height = object.current_height ?? "0";
    message.total_bytes = object.total_bytes ?? "0";
    message.total_bundles = object.total_bundles ?? "0";
    message.total_bundle_rewards = object.total_bundle_rewards ?? "0";
    message.start_height = object.start_height ?? "0";
    message.upload_interval = object.upload_interval ?? "0";
    message.operating_cost = object.operating_cost ?? "0";
    message.paused = object.paused ?? false;
    message.funders = object.funders?.map((e) => e) || [];
    message.lowest_funder = object.lowest_funder ?? "";
    message.total_funds = object.total_funds ?? "0";
    message.stakers = object.stakers?.map((e) => e) || [];
    message.lowest_staker = object.lowest_staker ?? "";
    message.total_stake = object.total_stake ?? "0";
    message.total_delegation = object.total_delegation ?? "0";
    message.bundle_proposal = (object.bundle_proposal !== undefined && object.bundle_proposal !== null)
      ? BundleProposal.fromPartial(object.bundle_proposal)
      : undefined;
    message.max_bundle_size = object.max_bundle_size ?? "0";
    message.protocol = (object.protocol !== undefined && object.protocol !== null)
      ? Protocol.fromPartial(object.protocol)
      : undefined;
    message.upgrade_plan = (object.upgrade_plan !== undefined && object.upgrade_plan !== null)
      ? UpgradePlan.fromPartial(object.upgrade_plan)
      : undefined;
    message.start_key = object.start_key ?? "";
    message.current_key = object.current_key ?? "";
    message.current_value = object.current_value ?? "";
    message.inactive_stakers = object.inactive_stakers?.map((e) => e) || [];
    message.total_inactive_stake = object.total_inactive_stake ?? "0";
    message.min_stake = object.min_stake ?? "0";
    message.status = object.status ?? PoolStatus.POOL_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    storage_id: "",
    pool_id: "0",
    uploader: "",
    from_height: "0",
    to_height: "0",
    finalized_at: "0",
    id: "0",
    key: "",
    value: "",
    bundle_hash: "",
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storage_id !== "") {
      writer.uint32(10).string(message.storage_id);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    if (message.from_height !== "0") {
      writer.uint32(32).uint64(message.from_height);
    }
    if (message.to_height !== "0") {
      writer.uint32(40).uint64(message.to_height);
    }
    if (message.finalized_at !== "0") {
      writer.uint32(48).uint64(message.finalized_at);
    }
    if (message.id !== "0") {
      writer.uint32(56).uint64(message.id);
    }
    if (message.key !== "") {
      writer.uint32(66).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(74).string(message.value);
    }
    if (message.bundle_hash !== "") {
      writer.uint32(82).string(message.bundle_hash);
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
          message.storage_id = reader.string();
          break;
        case 2:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.uploader = reader.string();
          break;
        case 4:
          message.from_height = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.to_height = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.finalized_at = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.key = reader.string();
          break;
        case 9:
          message.value = reader.string();
          break;
        case 10:
          message.bundle_hash = reader.string();
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
      storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      from_height: isSet(object.from_height) ? String(object.from_height) : "0",
      to_height: isSet(object.to_height) ? String(object.to_height) : "0",
      finalized_at: isSet(object.finalized_at) ? String(object.finalized_at) : "0",
      id: isSet(object.id) ? String(object.id) : "0",
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      bundle_hash: isSet(object.bundle_hash) ? String(object.bundle_hash) : "",
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.storage_id !== undefined && (obj.storage_id = message.storage_id);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.from_height !== undefined && (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.finalized_at !== undefined && (obj.finalized_at = message.finalized_at);
    message.id !== undefined && (obj.id = message.id);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.bundle_hash !== undefined && (obj.bundle_hash = message.bundle_hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.storage_id = object.storage_id ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.uploader = object.uploader ?? "";
    message.from_height = object.from_height ?? "0";
    message.to_height = object.to_height ?? "0";
    message.finalized_at = object.finalized_at ?? "0";
    message.id = object.id ?? "0";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.bundle_hash = object.bundle_hash ?? "";
    return message;
  },
};

function createBaseStaker(): Staker {
  return {
    account: "",
    pool_id: "0",
    amount: "0",
    unbonding_amount: "0",
    commission: "",
    moniker: "",
    website: "",
    logo: "",
    points: "0",
    status: StakerStatus.STAKER_STATUS_UNSPECIFIED,
  };
}

export const Staker = {
  encode(message: Staker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.unbonding_amount !== "0") {
      writer.uint32(32).uint64(message.unbonding_amount);
    }
    if (message.commission !== "") {
      writer.uint32(42).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(58).string(message.website);
    }
    if (message.logo !== "") {
      writer.uint32(66).string(message.logo);
    }
    if (message.points !== "0") {
      writer.uint32(72).uint64(message.points);
    }
    if (message.status !== StakerStatus.STAKER_STATUS_UNSPECIFIED) {
      writer.uint32(80).int32(stakerStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.unbonding_amount = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.commission = reader.string();
          break;
        case 6:
          message.moniker = reader.string();
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.logo = reader.string();
          break;
        case 9:
          message.points = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.status = stakerStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Staker {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      unbonding_amount: isSet(object.unbonding_amount) ? String(object.unbonding_amount) : "0",
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      points: isSet(object.points) ? String(object.points) : "0",
      status: isSet(object.status) ? stakerStatusFromJSON(object.status) : StakerStatus.STAKER_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: Staker): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.unbonding_amount !== undefined && (obj.unbonding_amount = message.unbonding_amount);
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    message.points !== undefined && (obj.points = message.points);
    message.status !== undefined && (obj.status = stakerStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Staker>, I>>(object: I): Staker {
    const message = createBaseStaker();
    message.account = object.account ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amount = object.amount ?? "0";
    message.unbonding_amount = object.unbonding_amount ?? "0";
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
    message.points = object.points ?? "0";
    message.status = object.status ?? StakerStatus.STAKER_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseUnbondingStakingQueueEntry(): UnbondingStakingQueueEntry {
  return { index: "0", staker: "", pool_id: "0", amount: "0", creation_time: "0" };
}

export const UnbondingStakingQueueEntry = {
  encode(message: UnbondingStakingQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.creation_time !== "0") {
      writer.uint32(40).uint64(message.creation_time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStakingQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingStakingQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.creation_time = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingStakingQueueEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
    };
  },

  toJSON(message: UnbondingStakingQueueEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creation_time !== undefined && (obj.creation_time = message.creation_time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingStakingQueueEntry>, I>>(object: I): UnbondingStakingQueueEntry {
    const message = createBaseUnbondingStakingQueueEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amount = object.amount ?? "0";
    message.creation_time = object.creation_time ?? "0";
    return message;
  },
};

function createBaseUnbondingStaker(): UnbondingStaker {
  return { staker: "", pool_id: "0", unbonding_amount: "0" };
}

export const UnbondingStaker = {
  encode(message: UnbondingStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.unbonding_amount !== "0") {
      writer.uint32(24).uint64(message.unbonding_amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.unbonding_amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingStaker {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      unbonding_amount: isSet(object.unbonding_amount) ? String(object.unbonding_amount) : "0",
    };
  },

  toJSON(message: UnbondingStaker): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.unbonding_amount !== undefined && (obj.unbonding_amount = message.unbonding_amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingStaker>, I>>(object: I): UnbondingStaker {
    const message = createBaseUnbondingStaker();
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.unbonding_amount = object.unbonding_amount ?? "0";
    return message;
  },
};

function createBaseUnbondingStakingQueueState(): UnbondingStakingQueueState {
  return { low_index: "0", high_index: "0" };
}

export const UnbondingStakingQueueState = {
  encode(message: UnbondingStakingQueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low_index !== "0") {
      writer.uint32(8).uint64(message.low_index);
    }
    if (message.high_index !== "0") {
      writer.uint32(16).uint64(message.high_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStakingQueueState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingStakingQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low_index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.high_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingStakingQueueState {
    return {
      low_index: isSet(object.low_index) ? String(object.low_index) : "0",
      high_index: isSet(object.high_index) ? String(object.high_index) : "0",
    };
  },

  toJSON(message: UnbondingStakingQueueState): unknown {
    const obj: any = {};
    message.low_index !== undefined && (obj.low_index = message.low_index);
    message.high_index !== undefined && (obj.high_index = message.high_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingStakingQueueState>, I>>(object: I): UnbondingStakingQueueState {
    const message = createBaseUnbondingStakingQueueState();
    message.low_index = object.low_index ?? "0";
    message.high_index = object.high_index ?? "0";
    return message;
  },
};

function createBaseUnbondingDelegationQueueEntry(): UnbondingDelegationQueueEntry {
  return { index: "0", staker: "", delegator: "", pool_id: "0", amount: "0", creation_time: "0" };
}

export const UnbondingDelegationQueueEntry = {
  encode(message: UnbondingDelegationQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(32).uint64(message.pool_id);
    }
    if (message.amount !== "0") {
      writer.uint32(40).uint64(message.amount);
    }
    if (message.creation_time !== "0") {
      writer.uint32(48).uint64(message.creation_time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.delegator = reader.string();
          break;
        case 4:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.creation_time = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegationQueueEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
    };
  },

  toJSON(message: UnbondingDelegationQueueEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creation_time !== undefined && (obj.creation_time = message.creation_time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingDelegationQueueEntry>, I>>(
    object: I,
  ): UnbondingDelegationQueueEntry {
    const message = createBaseUnbondingDelegationQueueEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amount = object.amount ?? "0";
    message.creation_time = object.creation_time ?? "0";
    return message;
  },
};

function createBaseUnbondingDelegationQueueState(): UnbondingDelegationQueueState {
  return { low_index: "0", high_index: "0" };
}

export const UnbondingDelegationQueueState = {
  encode(message: UnbondingDelegationQueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low_index !== "0") {
      writer.uint32(8).uint64(message.low_index);
    }
    if (message.high_index !== "0") {
      writer.uint32(16).uint64(message.high_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegationQueueState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low_index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.high_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegationQueueState {
    return {
      low_index: isSet(object.low_index) ? String(object.low_index) : "0",
      high_index: isSet(object.high_index) ? String(object.high_index) : "0",
    };
  },

  toJSON(message: UnbondingDelegationQueueState): unknown {
    const obj: any = {};
    message.low_index !== undefined && (obj.low_index = message.low_index);
    message.high_index !== undefined && (obj.high_index = message.high_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingDelegationQueueState>, I>>(
    object: I,
  ): UnbondingDelegationQueueState {
    const message = createBaseUnbondingDelegationQueueState();
    message.low_index = object.low_index ?? "0";
    message.high_index = object.high_index ?? "0";
    return message;
  },
};

function createBaseRedelegationCooldown(): RedelegationCooldown {
  return { address: "", creation_date: "0" };
}

export const RedelegationCooldown = {
  encode(message: RedelegationCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creation_date !== "0") {
      writer.uint32(16).uint64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationCooldown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.creation_date = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationCooldown {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: RedelegationCooldown): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationCooldown>, I>>(object: I): RedelegationCooldown {
    const message = createBaseRedelegationCooldown();
    message.address = object.address ?? "";
    message.creation_date = object.creation_date ?? "0";
    return message;
  },
};

function createBaseCommissionChangeQueueEntry(): CommissionChangeQueueEntry {
  return { index: "0", staker: "", pool_id: "0", commission: "", creation_date: "0" };
}

export const CommissionChangeQueueEntry = {
  encode(message: CommissionChangeQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.commission !== "") {
      writer.uint32(34).string(message.commission);
    }
    if (message.creation_date !== "0") {
      writer.uint32(40).int64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionChangeQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.commission = reader.string();
          break;
        case 5:
          message.creation_date = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommissionChangeQueueEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      commission: isSet(object.commission) ? String(object.commission) : "",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: CommissionChangeQueueEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.commission !== undefined && (obj.commission = message.commission);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommissionChangeQueueEntry>, I>>(object: I): CommissionChangeQueueEntry {
    const message = createBaseCommissionChangeQueueEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.commission = object.commission ?? "";
    message.creation_date = object.creation_date ?? "0";
    return message;
  },
};

function createBaseCommissionChangeQueueState(): CommissionChangeQueueState {
  return { low_index: "0", high_index: "0" };
}

export const CommissionChangeQueueState = {
  encode(message: CommissionChangeQueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low_index !== "0") {
      writer.uint32(8).uint64(message.low_index);
    }
    if (message.high_index !== "0") {
      writer.uint32(16).uint64(message.high_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeQueueState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionChangeQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low_index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.high_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommissionChangeQueueState {
    return {
      low_index: isSet(object.low_index) ? String(object.low_index) : "0",
      high_index: isSet(object.high_index) ? String(object.high_index) : "0",
    };
  },

  toJSON(message: CommissionChangeQueueState): unknown {
    const obj: any = {};
    message.low_index !== undefined && (obj.low_index = message.low_index);
    message.high_index !== undefined && (obj.high_index = message.high_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommissionChangeQueueState>, I>>(object: I): CommissionChangeQueueState {
    const message = createBaseCommissionChangeQueueState();
    message.low_index = object.low_index ?? "0";
    message.high_index = object.high_index ?? "0";
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
