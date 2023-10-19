/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.pool.v1beta1";

/** PoolStatus ... */
export enum PoolStatus {
  /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
  POOL_STATUS_UNSPECIFIED = 0,
  /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
  POOL_STATUS_ACTIVE = 1,
  /** POOL_STATUS_DISABLED - POOL_STATUS_DISABLED ... */
  POOL_STATUS_DISABLED = 2,
  /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
  POOL_STATUS_NO_FUNDS = 3,
  /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
  POOL_STATUS_NOT_ENOUGH_DELEGATION = 4,
  /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
  POOL_STATUS_UPGRADING = 5,
  UNRECOGNIZED = -1,
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
    case "POOL_STATUS_DISABLED":
      return PoolStatus.POOL_STATUS_DISABLED;
    case 3:
    case "POOL_STATUS_NO_FUNDS":
      return PoolStatus.POOL_STATUS_NO_FUNDS;
    case 4:
    case "POOL_STATUS_NOT_ENOUGH_DELEGATION":
      return PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION;
    case 5:
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
    case PoolStatus.POOL_STATUS_DISABLED:
      return "POOL_STATUS_DISABLED";
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return "POOL_STATUS_NO_FUNDS";
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      return "POOL_STATUS_NOT_ENOUGH_DELEGATION";
    case PoolStatus.POOL_STATUS_UPGRADING:
      return "POOL_STATUS_UPGRADING";
    case PoolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Protocol holds all info about the current pool version and the
 * available binaries for participating as a validator in a pool
 */
export interface Protocol {
  /** version holds the current software version tag of the pool binaries */
  version: string;
  /**
   * binaries is a stringified json object which holds binaries in the
   * current version for multiple platforms and architectures
   */
  binaries: string;
  /** last_upgrade is the unix time the pool was upgraded the last time */
  last_upgrade: string;
}

/** Upgrade holds all info when a pool has a scheduled upgrade */
export interface UpgradePlan {
  /** version is the new software version tag of the upgrade */
  version: string;
  /**
   * binaries is the new stringified json object which holds binaries in the
   * upgrade version for multiple platforms and architectures
   */
  binaries: string;
  /** scheduled_at is the unix time the upgrade is supposed to be done */
  scheduled_at: string;
  /**
   * duration is the time in seconds how long the pool should halt
   * during the upgrade to give all validators a chance of switching
   * to the new binaries
   */
  duration: string;
}

/** Funder is the object which holds info about a single pool funder */
export interface Funder {
  /** address is the address of the funder */
  address: string;
  /**
   * amount is the current amount of funds in ukyve the funder has
   * still funded the pool with
   */
  amount: string;
}

/** Pool ... */
export interface Pool {
  /** id - unique identifier of the pool, can not be changed */
  id: string;
  /** name is a human readable name for the pool */
  name: string;
  /** runtime specified which protocol and which version needs is required */
  runtime: string;
  /** logo is a link to an image file */
  logo: string;
  /**
   * config is either a JSON encoded string or a link to an external storage provider.
   * This is up to the implementation of the protocol node.
   */
  config: string;
  /** start_key ... */
  start_key: string;
  /** current_key ... */
  current_key: string;
  /** current_summary ... */
  current_summary: string;
  /** current_index ... */
  current_index: string;
  /** total_bundles is the number of total finalized bundles */
  total_bundles: string;
  /** upload_interval ... */
  upload_interval: string;
  /** operating_cost ... */
  operating_cost: string;
  /** min_delegation ... */
  min_delegation: string;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /**
   * disabled is true when the pool is disabled.
   * Can only be done via governance.
   */
  disabled: boolean;
  /** funders ... */
  funders: Funder[];
  /** total_funds ... */
  total_funds: string;
  /** protocol ... */
  protocol?:
    | Protocol
    | undefined;
  /** upgrade_plan ... */
  upgrade_plan?:
    | UpgradePlan
    | undefined;
  /** storage_provider_id ... */
  current_storage_provider_id: number;
  /** compression_id ... */
  current_compression_id: number;
}

function createBaseProtocol(): Protocol {
  return { version: "", binaries: "", last_upgrade: "0" };
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Protocol {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.binaries = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.last_upgrade = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Protocol {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      binaries: isSet(object.binaries) ? globalThis.String(object.binaries) : "",
      last_upgrade: isSet(object.last_upgrade) ? globalThis.String(object.last_upgrade) : "0",
    };
  },

  toJSON(message: Protocol): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.last_upgrade !== "0") {
      obj.last_upgrade = message.last_upgrade;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Protocol>, I>>(base?: I): Protocol {
    return Protocol.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Protocol>, I>>(object: I): Protocol {
    const message = createBaseProtocol();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.last_upgrade = object.last_upgrade ?? "0";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.binaries = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpgradePlan {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      binaries: isSet(object.binaries) ? globalThis.String(object.binaries) : "",
      scheduled_at: isSet(object.scheduled_at) ? globalThis.String(object.scheduled_at) : "0",
      duration: isSet(object.duration) ? globalThis.String(object.duration) : "0",
    };
  },

  toJSON(message: UpgradePlan): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.scheduled_at !== "0") {
      obj.scheduled_at = message.scheduled_at;
    }
    if (message.duration !== "0") {
      obj.duration = message.duration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpgradePlan>, I>>(base?: I): UpgradePlan {
    return UpgradePlan.fromPartial(base ?? ({} as any));
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

function createBaseFunder(): Funder {
  return { address: "", amount: "0" };
}

export const Funder = {
  encode(message: Funder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunder();
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

  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: Funder): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Funder>, I>>(base?: I): Funder {
    return Funder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Funder>, I>>(object: I): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBasePool(): Pool {
  return {
    id: "0",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    start_key: "",
    current_key: "",
    current_summary: "",
    current_index: "0",
    total_bundles: "0",
    upload_interval: "0",
    operating_cost: "0",
    min_delegation: "0",
    max_bundle_size: "0",
    disabled: false,
    funders: [],
    total_funds: "0",
    protocol: undefined,
    upgrade_plan: undefined,
    current_storage_provider_id: 0,
    current_compression_id: 0,
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.current_key !== "") {
      writer.uint32(58).string(message.current_key);
    }
    if (message.current_summary !== "") {
      writer.uint32(66).string(message.current_summary);
    }
    if (message.current_index !== "0") {
      writer.uint32(72).uint64(message.current_index);
    }
    if (message.total_bundles !== "0") {
      writer.uint32(80).uint64(message.total_bundles);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(88).uint64(message.upload_interval);
    }
    if (message.operating_cost !== "0") {
      writer.uint32(96).uint64(message.operating_cost);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(104).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(112).uint64(message.max_bundle_size);
    }
    if (message.disabled === true) {
      writer.uint32(120).bool(message.disabled);
    }
    for (const v of message.funders) {
      Funder.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.total_funds !== "0") {
      writer.uint32(136).uint64(message.total_funds);
    }
    if (message.protocol !== undefined) {
      Protocol.encode(message.protocol, writer.uint32(146).fork()).ldelim();
    }
    if (message.upgrade_plan !== undefined) {
      UpgradePlan.encode(message.upgrade_plan, writer.uint32(154).fork()).ldelim();
    }
    if (message.current_storage_provider_id !== 0) {
      writer.uint32(160).uint32(message.current_storage_provider_id);
    }
    if (message.current_compression_id !== 0) {
      writer.uint32(168).uint32(message.current_compression_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
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
          if (tag !== 58) {
            break;
          }

          message.current_key = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.current_summary = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.current_index = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.total_bundles = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.upload_interval = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.operating_cost = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.min_delegation = longToString(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.max_bundle_size = longToString(reader.uint64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.disabled = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.funders.push(Funder.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.total_funds = longToString(reader.uint64() as Long);
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.protocol = Protocol.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.upgrade_plan = UpgradePlan.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.current_storage_provider_id = reader.uint32();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.current_compression_id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      start_key: isSet(object.start_key) ? globalThis.String(object.start_key) : "",
      current_key: isSet(object.current_key) ? globalThis.String(object.current_key) : "",
      current_summary: isSet(object.current_summary) ? globalThis.String(object.current_summary) : "",
      current_index: isSet(object.current_index) ? globalThis.String(object.current_index) : "0",
      total_bundles: isSet(object.total_bundles) ? globalThis.String(object.total_bundles) : "0",
      upload_interval: isSet(object.upload_interval) ? globalThis.String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? globalThis.String(object.operating_cost) : "0",
      min_delegation: isSet(object.min_delegation) ? globalThis.String(object.min_delegation) : "0",
      max_bundle_size: isSet(object.max_bundle_size) ? globalThis.String(object.max_bundle_size) : "0",
      disabled: isSet(object.disabled) ? globalThis.Boolean(object.disabled) : false,
      funders: globalThis.Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromJSON(e)) : [],
      total_funds: isSet(object.total_funds) ? globalThis.String(object.total_funds) : "0",
      protocol: isSet(object.protocol) ? Protocol.fromJSON(object.protocol) : undefined,
      upgrade_plan: isSet(object.upgrade_plan) ? UpgradePlan.fromJSON(object.upgrade_plan) : undefined,
      current_storage_provider_id: isSet(object.current_storage_provider_id)
        ? globalThis.Number(object.current_storage_provider_id)
        : 0,
      current_compression_id: isSet(object.current_compression_id)
        ? globalThis.Number(object.current_compression_id)
        : 0,
    };
  },

  toJSON(message: Pool): unknown {
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
    if (message.current_key !== "") {
      obj.current_key = message.current_key;
    }
    if (message.current_summary !== "") {
      obj.current_summary = message.current_summary;
    }
    if (message.current_index !== "0") {
      obj.current_index = message.current_index;
    }
    if (message.total_bundles !== "0") {
      obj.total_bundles = message.total_bundles;
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
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    if (message.funders?.length) {
      obj.funders = message.funders.map((e) => Funder.toJSON(e));
    }
    if (message.total_funds !== "0") {
      obj.total_funds = message.total_funds;
    }
    if (message.protocol !== undefined) {
      obj.protocol = Protocol.toJSON(message.protocol);
    }
    if (message.upgrade_plan !== undefined) {
      obj.upgrade_plan = UpgradePlan.toJSON(message.upgrade_plan);
    }
    if (message.current_storage_provider_id !== 0) {
      obj.current_storage_provider_id = Math.round(message.current_storage_provider_id);
    }
    if (message.current_compression_id !== 0) {
      obj.current_compression_id = Math.round(message.current_compression_id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pool>, I>>(base?: I): Pool {
    return Pool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = object.id ?? "0";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.config = object.config ?? "";
    message.start_key = object.start_key ?? "";
    message.current_key = object.current_key ?? "";
    message.current_summary = object.current_summary ?? "";
    message.current_index = object.current_index ?? "0";
    message.total_bundles = object.total_bundles ?? "0";
    message.upload_interval = object.upload_interval ?? "0";
    message.operating_cost = object.operating_cost ?? "0";
    message.min_delegation = object.min_delegation ?? "0";
    message.max_bundle_size = object.max_bundle_size ?? "0";
    message.disabled = object.disabled ?? false;
    message.funders = object.funders?.map((e) => Funder.fromPartial(e)) || [];
    message.total_funds = object.total_funds ?? "0";
    message.protocol = (object.protocol !== undefined && object.protocol !== null)
      ? Protocol.fromPartial(object.protocol)
      : undefined;
    message.upgrade_plan = (object.upgrade_plan !== undefined && object.upgrade_plan !== null)
      ? UpgradePlan.fromPartial(object.upgrade_plan)
      : undefined;
    message.current_storage_provider_id = object.current_storage_provider_id ?? 0;
    message.current_compression_id = object.current_compression_id ?? 0;
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
