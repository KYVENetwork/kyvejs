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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.runtime = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.logo = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.config = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.start_key = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.upload_interval = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.operating_cost = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.min_delegation = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.max_bundle_size = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.version = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.binaries = reader.string();
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

  fromJSON(object: any): EventCreatePool {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      start_key: isSet(object.start_key) ? globalThis.String(object.start_key) : "",
      upload_interval: isSet(object.upload_interval) ? globalThis.String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? globalThis.String(object.operating_cost) : "0",
      min_delegation: isSet(object.min_delegation) ? globalThis.String(object.min_delegation) : "0",
      max_bundle_size: isSet(object.max_bundle_size) ? globalThis.String(object.max_bundle_size) : "0",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      binaries: isSet(object.binaries) ? globalThis.String(object.binaries) : "",
      storage_provider_id: isSet(object.storage_provider_id) ? globalThis.Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? globalThis.Number(object.compression_id) : 0,
    };
  },

  toJSON(message: EventCreatePool): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.logo !== "") {
      obj.logo = message.logo;
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.start_key !== "") {
      obj.start_key = message.start_key;
    }
    if (message.upload_interval !== "0") {
      obj.upload_interval = message.upload_interval;
    }
    if (message.operating_cost !== "0") {
      obj.operating_cost = message.operating_cost;
    }
    if (message.min_delegation !== "0") {
      obj.min_delegation = message.min_delegation;
    }
    if (message.max_bundle_size !== "0") {
      obj.max_bundle_size = message.max_bundle_size;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventCreatePool>, I>>(base?: I): EventCreatePool {
    return EventCreatePool.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): EventPoolEnabled {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "0" };
  },

  toJSON(message: EventPoolEnabled): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolEnabled>, I>>(base?: I): EventPoolEnabled {
    return EventPoolEnabled.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): EventPoolDisabled {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "0" };
  },

  toJSON(message: EventPoolDisabled): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolDisabled>, I>>(base?: I): EventPoolDisabled {
    return EventPoolDisabled.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRuntimeUpgradeScheduled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.runtime = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.scheduled_at = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.duration = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.binaries = reader.string();
          continue;
        case 6:
          if (tag === 48) {
            message.affected_pools.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affected_pools.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRuntimeUpgradeScheduled {
    return {
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      scheduled_at: isSet(object.scheduled_at) ? globalThis.String(object.scheduled_at) : "0",
      duration: isSet(object.duration) ? globalThis.String(object.duration) : "0",
      binaries: isSet(object.binaries) ? globalThis.String(object.binaries) : "",
      affected_pools: globalThis.Array.isArray(object?.affected_pools)
        ? object.affected_pools.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: EventRuntimeUpgradeScheduled): unknown {
    const obj: any = {};
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.scheduled_at !== "0") {
      obj.scheduled_at = message.scheduled_at;
    }
    if (message.duration !== "0") {
      obj.duration = message.duration;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.affected_pools?.length) {
      obj.affected_pools = message.affected_pools;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRuntimeUpgradeScheduled>, I>>(base?: I): EventRuntimeUpgradeScheduled {
    return EventRuntimeUpgradeScheduled.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRuntimeUpgradeCancelled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.runtime = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.affected_pools.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affected_pools.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventRuntimeUpgradeCancelled {
    return {
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      affected_pools: globalThis.Array.isArray(object?.affected_pools)
        ? object.affected_pools.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: EventRuntimeUpgradeCancelled): unknown {
    const obj: any = {};
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.affected_pools?.length) {
      obj.affected_pools = message.affected_pools;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventRuntimeUpgradeCancelled>, I>>(base?: I): EventRuntimeUpgradeCancelled {
    return EventRuntimeUpgradeCancelled.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.raw_update_string = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.runtime = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.logo = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.config = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.upload_interval = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.operating_cost = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.min_delegation = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.max_bundle_size = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.storage_provider_id = reader.uint32();
          continue;
        case 12:
          if (tag !== 96) {
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

  fromJSON(object: any): EventPoolUpdated {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      raw_update_string: isSet(object.raw_update_string) ? globalThis.String(object.raw_update_string) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      upload_interval: isSet(object.upload_interval) ? globalThis.String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? globalThis.String(object.operating_cost) : "0",
      min_delegation: isSet(object.min_delegation) ? globalThis.String(object.min_delegation) : "0",
      max_bundle_size: isSet(object.max_bundle_size) ? globalThis.String(object.max_bundle_size) : "0",
      storage_provider_id: isSet(object.storage_provider_id) ? globalThis.Number(object.storage_provider_id) : 0,
      compression_id: isSet(object.compression_id) ? globalThis.Number(object.compression_id) : 0,
    };
  },

  toJSON(message: EventPoolUpdated): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.raw_update_string !== "") {
      obj.raw_update_string = message.raw_update_string;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.logo !== "") {
      obj.logo = message.logo;
    }
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.upload_interval !== "0") {
      obj.upload_interval = message.upload_interval;
    }
    if (message.operating_cost !== "0") {
      obj.operating_cost = message.operating_cost;
    }
    if (message.min_delegation !== "0") {
      obj.min_delegation = message.min_delegation;
    }
    if (message.max_bundle_size !== "0") {
      obj.max_bundle_size = message.max_bundle_size;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolUpdated>, I>>(base?: I): EventPoolUpdated {
    return EventPoolUpdated.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFundPool();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventFundPool {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: EventFundPool): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventFundPool>, I>>(base?: I): EventFundPool {
    return EventFundPool.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDefundPool();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventDefundPool {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: EventDefundPool): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventDefundPool>, I>>(base?: I): EventDefundPool {
    return EventDefundPool.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolFundsSlashed();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPoolFundsSlashed {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: EventPoolFundsSlashed): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolFundsSlashed>, I>>(base?: I): EventPoolFundsSlashed {
    return EventPoolFundsSlashed.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolOutOfFunds();
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

  fromJSON(object: any): EventPoolOutOfFunds {
    return { pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0" };
  },

  toJSON(message: EventPoolOutOfFunds): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolOutOfFunds>, I>>(base?: I): EventPoolOutOfFunds {
    return EventPoolOutOfFunds.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventPoolOutOfFunds>, I>>(object: I): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    message.pool_id = object.pool_id ?? "0";
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
