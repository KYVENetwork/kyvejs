/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "kyve.pool.v1beta1";

/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  old_params?: Params;
  /** new_params is the module's new parameters. */
  new_params?: Params;
  /** payload is the parameter updates that were performed. */
  payload: string;
}

/**
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePool {
  /** id is the unique ID of the pool. */
  id: string;
  /** name is the human readable name of the pool */
  name: string;
  /** runtime is the runtime name of the pool */
  runtime: string;
  /** logo is the logo url of the pool */
  logo: string;
  /**
   * config is either a json stringified config or an
   * external link pointing to the config
   */
  config: string;
  /**
   * start_key is the first key the pool should start
   * indexing
   */
  start_key: string;
  /**
   * upload_interval is the interval the pool should validate
   * bundles with
   */
  upload_interval: string;
  /**
   * operating_cost is the fixed cost which gets paid out
   * to every successful uploader
   */
  operating_cost: string;
  /**
   * min_delegation is the minimum amount of $KYVE the pool has
   * to have in order to produce bundles
   */
  min_delegation: string;
  /**
   * max_bundle_size is the max size a data bundle can have
   * (amount of data items)
   */
  max_bundle_size: string;
  /** version is the current version of the protocol nodes */
  version: string;
  /** binaries points to the current binaries of the protocol node */
  binaries: string;
  /**
   * storage_provider_id is the unique id of the storage provider
   * the pool is archiving the data on
   */
  storage_provider_id: number;
  /**
   * compression_id is the unique id of the compression type the bundles
   * get compressed with
   */
  compression_id: number;
}

/**
 * EventPoolEnabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolEnabled {
  /** id is the unique ID of the affected pool. */
  id: string;
}

/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabled {
  /** id is the unique ID of the affected pool. */
  id: string;
}

/**
 * EventRuntimeUpgradeScheduled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeScheduled {
  /** runtime is the name of the runtime that will be upgraded. */
  runtime: string;
  /** version is the new version that the runtime will be upgraded to. */
  version: string;
  /** scheduled_at is the time in UNIX seconds when the upgrade will occur. */
  scheduled_at: string;
  /**
   * duration is the amount of seconds the pool will be paused after the
   * scheduled time is reached. This will give node operators time to upgrade
   * their node.
   */
  duration: string;
  /** binaries contain download links for prebuilt binaries (in JSON format). */
  binaries: string;
  /** affected_pools contains all IDs of pools that will be affected by this runtime upgrade. */
  affected_pools: string[];
}

/**
 * EventRuntimeUpgradeCancelled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeCancelled {
  /** runtime is the name of the runtime that will be upgraded. */
  runtime: string;
  /**
   * affected_pools contains all IDs of pools that are affected by the
   * cancellation of this runtime upgrade.
   */
  affected_pools: string[];
}

/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdated {
  /** id is the unique ID of the pool. */
  id: string;
  /** raw update string */
  raw_update_string: string;
  /** name is the human readable name of the pool */
  name: string;
  /** runtime is the runtime name of the pool */
  runtime: string;
  /** logo is the logo url of the pool */
  logo: string;
  /**
   * config is either a json stringified config or an
   * external link pointing to the config
   */
  config: string;
  /**
   * upload_interval is the interval the pool should validate
   * bundles with
   */
  upload_interval: string;
  /**
   * operating_cost is the fixed cost which gets paid out
   * to every successful uploader
   */
  operating_cost: string;
  /**
   * min_delegation is the minimum amount of $KYVE the pool has
   * to have in order to produce bundles
   */
  min_delegation: string;
  /**
   * max_bundle_size is the max size a data bundle can have
   * (amount of data items)
   */
  max_bundle_size: string;
  /**
   * storage_provider_id is the unique id of the storage provider
   * the pool is archiving the data on
   */
  storage_provider_id: number;
  /**
   * compression_id is the unique id of the compression type the bundles
   * get compressed with
   */
  compression_id: number;
}

/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has funded */
  amount: string;
}

/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount: string;
}

/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashed {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the validator has lost due to the slash */
  amount: string;
}

/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.old_params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.new_params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateParams {
    return {
      old_params: isSet(object.old_params) ? Params.fromJSON(object.old_params) : undefined,
      new_params: isSet(object.new_params) ? Params.fromJSON(object.new_params) : undefined,
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: EventUpdateParams): unknown {
    const obj: any = {};
    message.old_params !== undefined &&
      (obj.old_params = message.old_params ? Params.toJSON(message.old_params) : undefined);
    message.new_params !== undefined &&
      (obj.new_params = message.new_params ? Params.toJSON(message.new_params) : undefined);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
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

function createBaseEventCreatePool(): EventCreatePool {
  return {
    id: "0",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    start_key: "",
    upload_interval: "0",
    operating_cost: "0",
    min_delegation: "0",
    max_bundle_size: "0",
    version: "",
    binaries: "",
    storage_provider_id: 0,
    compression_id: 0,
  };
}

export const EventCreatePool = {
  encode(message: EventCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.config !== "") {
      writer.uint32(42).string(message.config);
    }
    if (message.start_key !== "") {
      writer.uint32(50).string(message.start_key);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(56).uint64(message.upload_interval);
    }
    if (message.operating_cost !== "0") {
      writer.uint32(64).uint64(message.operating_cost);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(72).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(80).uint64(message.max_bundle_size);
    }
    if (message.version !== "") {
      writer.uint32(90).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(98).string(message.binaries);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(104).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(112).uint32(message.compression_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        case 4:
          message.logo = reader.string();
          break;
        case 5:
          message.config = reader.string();
          break;
        case 6:
          message.start_key = reader.string();
          break;
        case 7:
          message.upload_interval = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.operating_cost = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.min_delegation = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.max_bundle_size = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.version = reader.string();
          break;
        case 12:
          message.binaries = reader.string();
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

  fromJSON(object: any): EventCreatePool {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      start_key: isSet(object.start_key) ? String(object.start_key) : "",
      upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
      min_delegation: isSet(object.min_delegation) ? String(object.min_delegation) : "0",
      max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
    };
  },

  toJSON(message: EventCreatePool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.config !== undefined && (obj.config = message.config);
    message.start_key !== undefined && (obj.start_key = message.start_key);
    message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
    message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
    message.min_delegation !== undefined && (obj.min_delegation = message.min_delegation);
    message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
    message.version !== undefined && (obj.version = message.version);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
    message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreatePool>, I>>(object: I): EventCreatePool {
    const message = createBaseEventCreatePool();
    message.id = object.id ?? "0";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.start_key = object.start_key ?? "";
    message.upload_interval = object.upload_interval ?? "0";
    message.operating_cost = object.operating_cost ?? "0";
    message.min_delegation = object.min_delegation ?? "0";
    message.max_bundle_size = object.max_bundle_size ?? "0";
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.storage_provider_id = object.storage_provider_id ?? 0;
    message.compression_id = object.compression_id ?? 0;
    return message;
  },
};

function createBaseEventPoolEnabled(): EventPoolEnabled {
  return { id: "0" };
}

export const EventPoolEnabled = {
  encode(message: EventPoolEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolEnabled {
    return { id: isSet(object.id) ? String(object.id) : "0" };
  },

  toJSON(message: EventPoolEnabled): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolEnabled>, I>>(object: I): EventPoolEnabled {
    const message = createBaseEventPoolEnabled();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseEventPoolDisabled(): EventPoolDisabled {
  return { id: "0" };
}

export const EventPoolDisabled = {
  encode(message: EventPoolDisabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolDisabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolDisabled {
    return { id: isSet(object.id) ? String(object.id) : "0" };
  },

  toJSON(message: EventPoolDisabled): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolDisabled>, I>>(object: I): EventPoolDisabled {
    const message = createBaseEventPoolDisabled();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseEventRuntimeUpgradeScheduled(): EventRuntimeUpgradeScheduled {
  return { runtime: "", version: "", scheduled_at: "0", duration: "0", binaries: "", affected_pools: [] };
}

export const EventRuntimeUpgradeScheduled = {
  encode(message: EventRuntimeUpgradeScheduled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(24).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(42).string(message.binaries);
    }
    writer.uint32(50).fork();
    for (const v of message.affected_pools) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRuntimeUpgradeScheduled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRuntimeUpgradeScheduled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.runtime = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.scheduled_at = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.duration = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.binaries = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affected_pools.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.affected_pools.push(longToString(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRuntimeUpgradeScheduled {
    return {
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      version: isSet(object.version) ? String(object.version) : "",
      scheduled_at: isSet(object.scheduled_at) ? String(object.scheduled_at) : "0",
      duration: isSet(object.duration) ? String(object.duration) : "0",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      affected_pools: Array.isArray(object?.affected_pools) ? object.affected_pools.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: EventRuntimeUpgradeScheduled): unknown {
    const obj: any = {};
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.version !== undefined && (obj.version = message.version);
    message.scheduled_at !== undefined && (obj.scheduled_at = message.scheduled_at);
    message.duration !== undefined && (obj.duration = message.duration);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    if (message.affected_pools) {
      obj.affected_pools = message.affected_pools.map((e) => e);
    } else {
      obj.affected_pools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRuntimeUpgradeScheduled>, I>>(object: I): EventRuntimeUpgradeScheduled {
    const message = createBaseEventRuntimeUpgradeScheduled();
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduled_at = object.scheduled_at ?? "0";
    message.duration = object.duration ?? "0";
    message.binaries = object.binaries ?? "";
    message.affected_pools = object.affected_pools?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventRuntimeUpgradeCancelled(): EventRuntimeUpgradeCancelled {
  return { runtime: "", affected_pools: [] };
}

export const EventRuntimeUpgradeCancelled = {
  encode(message: EventRuntimeUpgradeCancelled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    writer.uint32(18).fork();
    for (const v of message.affected_pools) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRuntimeUpgradeCancelled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRuntimeUpgradeCancelled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.runtime = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affected_pools.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.affected_pools.push(longToString(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRuntimeUpgradeCancelled {
    return {
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      affected_pools: Array.isArray(object?.affected_pools) ? object.affected_pools.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: EventRuntimeUpgradeCancelled): unknown {
    const obj: any = {};
    message.runtime !== undefined && (obj.runtime = message.runtime);
    if (message.affected_pools) {
      obj.affected_pools = message.affected_pools.map((e) => e);
    } else {
      obj.affected_pools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRuntimeUpgradeCancelled>, I>>(object: I): EventRuntimeUpgradeCancelled {
    const message = createBaseEventRuntimeUpgradeCancelled();
    message.runtime = object.runtime ?? "";
    message.affected_pools = object.affected_pools?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventPoolUpdated(): EventPoolUpdated {
  return {
    id: "0",
    raw_update_string: "",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    upload_interval: "0",
    operating_cost: "0",
    min_delegation: "0",
    max_bundle_size: "0",
    storage_provider_id: 0,
    compression_id: 0,
  };
}

export const EventPoolUpdated = {
  encode(message: EventPoolUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.raw_update_string !== "") {
      writer.uint32(18).string(message.raw_update_string);
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
    if (message.config !== "") {
      writer.uint32(50).string(message.config);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(56).uint64(message.upload_interval);
    }
    if (message.operating_cost !== "0") {
      writer.uint32(64).uint64(message.operating_cost);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(72).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(80).uint64(message.max_bundle_size);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(88).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(96).uint32(message.compression_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.raw_update_string = reader.string();
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
          message.config = reader.string();
          break;
        case 7:
          message.upload_interval = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.operating_cost = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.min_delegation = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.max_bundle_size = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.storage_provider_id = reader.uint32();
          break;
        case 12:
          message.compression_id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPoolUpdated {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      raw_update_string: isSet(object.raw_update_string) ? String(object.raw_update_string) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
      min_delegation: isSet(object.min_delegation) ? String(object.min_delegation) : "0",
      max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
      storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
    };
  },

  toJSON(message: EventPoolUpdated): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.raw_update_string !== undefined && (obj.raw_update_string = message.raw_update_string);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.config !== undefined && (obj.config = message.config);
    message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
    message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
    message.min_delegation !== undefined && (obj.min_delegation = message.min_delegation);
    message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
    message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
    message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolUpdated>, I>>(object: I): EventPoolUpdated {
    const message = createBaseEventPoolUpdated();
    message.id = object.id ?? "0";
    message.raw_update_string = object.raw_update_string ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.upload_interval = object.upload_interval ?? "0";
    message.operating_cost = object.operating_cost ?? "0";
    message.min_delegation = object.min_delegation ?? "0";
    message.max_bundle_size = object.max_bundle_size ?? "0";
    message.storage_provider_id = object.storage_provider_id ?? 0;
    message.compression_id = object.compression_id ?? 0;
    return message;
  },
};

function createBaseEventFundPool(): EventFundPool {
  return { pool_id: "0", address: "", amount: "0" };
}

export const EventFundPool = {
  encode(message: EventFundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFundPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): EventFundPool {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventFundPool): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventFundPool>, I>>(object: I): EventFundPool {
    const message = createBaseEventFundPool();
    message.pool_id = object.pool_id ?? "0";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventDefundPool(): EventDefundPool {
  return { pool_id: "0", address: "", amount: "0" };
}

export const EventDefundPool = {
  encode(message: EventDefundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDefundPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDefundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): EventDefundPool {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventDefundPool): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDefundPool>, I>>(object: I): EventDefundPool {
    const message = createBaseEventDefundPool();
    message.pool_id = object.pool_id ?? "0";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventPoolFundsSlashed(): EventPoolFundsSlashed {
  return { pool_id: "0", address: "", amount: "0" };
}

export const EventPoolFundsSlashed = {
  encode(message: EventPoolFundsSlashed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolFundsSlashed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolFundsSlashed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): EventPoolFundsSlashed {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventPoolFundsSlashed): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolFundsSlashed>, I>>(object: I): EventPoolFundsSlashed {
    const message = createBaseEventPoolFundsSlashed();
    message.pool_id = object.pool_id ?? "0";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventPoolOutOfFunds(): EventPoolOutOfFunds {
  return { pool_id: "0" };
}

export const EventPoolOutOfFunds = {
  encode(message: EventPoolOutOfFunds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolOutOfFunds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolOutOfFunds();
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

  fromJSON(object: any): EventPoolOutOfFunds {
    return { pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0" };
  },

  toJSON(message: EventPoolOutOfFunds): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolOutOfFunds>, I>>(object: I): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    message.pool_id = object.pool_id ?? "0";
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
