/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.pool.v1beta1";

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
  /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
  POOL_STATUS_NOT_ENOUGH_DELEGATION = "POOL_STATUS_NOT_ENOUGH_DELEGATION",
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
    case PoolStatus.POOL_STATUS_PAUSED:
      return "POOL_STATUS_PAUSED";
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
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      return 4;
    case PoolStatus.POOL_STATUS_UPGRADING:
      return 5;
    case PoolStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Protocol ... */
export interface Protocol {
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
  /** last_upgrade ... */
  last_upgrade: string;
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

/** Funder ... */
export interface Funder {
  /** address ... */
  address: string;
  /** amount ... */
  amount: string;
}

/** Pool ... */
export interface Pool {
  /** id ... */
  id: string;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /** config ... */
  config: string;
  /** start_key ... */
  start_key: string;
  /** current_key ... */
  current_key: string;
  /** current_summary ... */
  current_summary: string;
  /** current_index ... */
  current_index: string;
  /** total_bundles ... */
  total_bundles: string;
  /** upload_interval ... */
  upload_interval: string;
  /** operating_cost ... */
  operating_cost: string;
  /** min_delegation ... */
  min_delegation: string;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /** paused ... */
  paused: boolean;
  /** funders ... */
  funders: Funder[];
  /** total_funds ... */
  total_funds: string;
  /** protocol ... */
  protocol?: Protocol;
  /** upgrade_plan ... */
  upgrade_plan?: UpgradePlan;
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
    };
  },

  toJSON(message: Protocol): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    message.last_upgrade !== undefined && (obj.last_upgrade = message.last_upgrade);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
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
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: Funder): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
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
    paused: false,
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
    if (message.paused === true) {
      writer.uint32(120).bool(message.paused);
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
          message.current_key = reader.string();
          break;
        case 8:
          message.current_summary = reader.string();
          break;
        case 9:
          message.current_index = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.total_bundles = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.upload_interval = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.operating_cost = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.min_delegation = longToString(reader.uint64() as Long);
          break;
        case 14:
          message.max_bundle_size = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.paused = reader.bool();
          break;
        case 16:
          message.funders.push(Funder.decode(reader, reader.uint32()));
          break;
        case 17:
          message.total_funds = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.protocol = Protocol.decode(reader, reader.uint32());
          break;
        case 19:
          message.upgrade_plan = UpgradePlan.decode(reader, reader.uint32());
          break;
        case 20:
          message.current_storage_provider_id = reader.uint32();
          break;
        case 21:
          message.current_compression_id = reader.uint32();
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
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      config: isSet(object.config) ? String(object.config) : "",
      start_key: isSet(object.start_key) ? String(object.start_key) : "",
      current_key: isSet(object.current_key) ? String(object.current_key) : "",
      current_summary: isSet(object.current_summary) ? String(object.current_summary) : "",
      current_index: isSet(object.current_index) ? String(object.current_index) : "0",
      total_bundles: isSet(object.total_bundles) ? String(object.total_bundles) : "0",
      upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
      operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
      min_delegation: isSet(object.min_delegation) ? String(object.min_delegation) : "0",
      max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      funders: Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromJSON(e)) : [],
      total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
      protocol: isSet(object.protocol) ? Protocol.fromJSON(object.protocol) : undefined,
      upgrade_plan: isSet(object.upgrade_plan) ? UpgradePlan.fromJSON(object.upgrade_plan) : undefined,
      current_storage_provider_id: isSet(object.current_storage_provider_id)
        ? Number(object.current_storage_provider_id)
        : 0,
      current_compression_id: isSet(object.current_compression_id) ? Number(object.current_compression_id) : 0,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.config !== undefined && (obj.config = message.config);
    message.start_key !== undefined && (obj.start_key = message.start_key);
    message.current_key !== undefined && (obj.current_key = message.current_key);
    message.current_summary !== undefined && (obj.current_summary = message.current_summary);
    message.current_index !== undefined && (obj.current_index = message.current_index);
    message.total_bundles !== undefined && (obj.total_bundles = message.total_bundles);
    message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
    message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
    message.min_delegation !== undefined && (obj.min_delegation = message.min_delegation);
    message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
    message.paused !== undefined && (obj.paused = message.paused);
    if (message.funders) {
      obj.funders = message.funders.map((e) => e ? Funder.toJSON(e) : undefined);
    } else {
      obj.funders = [];
    }
    message.total_funds !== undefined && (obj.total_funds = message.total_funds);
    message.protocol !== undefined && (obj.protocol = message.protocol ? Protocol.toJSON(message.protocol) : undefined);
    message.upgrade_plan !== undefined &&
      (obj.upgrade_plan = message.upgrade_plan ? UpgradePlan.toJSON(message.upgrade_plan) : undefined);
    message.current_storage_provider_id !== undefined &&
      (obj.current_storage_provider_id = Math.round(message.current_storage_provider_id));
    message.current_compression_id !== undefined &&
      (obj.current_compression_id = Math.round(message.current_compression_id));
    return obj;
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
    message.paused = object.paused ?? false;
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
