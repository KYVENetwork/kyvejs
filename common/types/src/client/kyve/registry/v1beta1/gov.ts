/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.registry.v1beta1";

/**
 * CreatePoolProposal is a gov Content type for creating a pool.
 *
 * @deprecated
 */
export interface CreatePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
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
  /** upload_interval ... */
  upload_interval: string;
  /** operating_cost ... */
  operating_cost: string;
  /** min_delegation ... */
  min_delegation: string;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /** version ... */
  version: string;
  /** binaries ... */
  binaries: string;
}

/**
 * UpdatePoolProposal is a gov Content type for updating a pool.
 *
 * @deprecated
 */
export interface UpdatePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** id ... */
  id: string;
  /** payload */
  payload: string;
}

/**
 * PausePoolProposal is a gov Content type for pausing a pool.
 *
 * @deprecated
 */
export interface PausePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** id ... */
  id: string;
}

/**
 * UnpausePoolProposal is a gov Content type for unpausing a pool.
 *
 * @deprecated
 */
export interface UnpausePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** id ... */
  id: string;
}

/**
 * SchedulePoolUpgradeProposal is a gov Content type for upgrading a pool by the runtime.
 *
 * @deprecated
 */
export interface SchedulePoolUpgradeProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** runtime ... */
  runtime: string;
  /** version ... */
  version: string;
  /** scheduled_at ... */
  scheduled_at: string;
  /** duration ... */
  duration: string;
  /** binaries ... */
  binaries: string;
}

/**
 * CancelPoolUpgradeProposal is a gov Content type for cancelling a scheduled pool upgrade by the runtime.
 *
 * @deprecated
 */
export interface CancelPoolUpgradeProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** runtime ... */
  runtime: string;
}

function createBaseCreatePoolProposal(): CreatePoolProposal {
  return {
    title: "",
    description: "",
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
  };
}

export const CreatePoolProposal = {
  encode(message: CreatePoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
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
    if (message.start_key !== "") {
      writer.uint32(58).string(message.start_key);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(64).uint64(message.upload_interval);
    }
    if (message.operating_cost !== "0") {
      writer.uint32(72).uint64(message.operating_cost);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(80).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(88).uint64(message.max_bundle_size);
    }
    if (message.version !== "") {
      writer.uint32(98).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(106).string(message.binaries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
          message.start_key = reader.string();
          break;
        case 8:
          message.upload_interval = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.operating_cost = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.min_delegation = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.max_bundle_size = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.version = reader.string();
          break;
        case 13:
          message.binaries = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
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
    };
  },

  toJSON(message: CreatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePoolProposal>, I>>(object: I): CreatePoolProposal {
    const message = createBaseCreatePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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
    return message;
  },
};

function createBaseUpdatePoolProposal(): UpdatePoolProposal {
  return { title: "", description: "", id: "0", payload: "" };
}

export const UpdatePoolProposal = {
  encode(message: UpdatePoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== "0") {
      writer.uint32(24).uint64(message.id);
    }
    if (message.payload !== "") {
      writer.uint32(34).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: UpdatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.id !== undefined && (obj.id = message.id);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePoolProposal>, I>>(object: I): UpdatePoolProposal {
    const message = createBaseUpdatePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? "0";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBasePausePoolProposal(): PausePoolProposal {
  return { title: "", description: "", id: "0" };
}

export const PausePoolProposal = {
  encode(message: PausePoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== "0") {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PausePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePausePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PausePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: PausePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PausePoolProposal>, I>>(object: I): PausePoolProposal {
    const message = createBasePausePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseUnpausePoolProposal(): UnpausePoolProposal {
  return { title: "", description: "", id: "0" };
}

export const UnpausePoolProposal = {
  encode(message: UnpausePoolProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== "0") {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpausePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpausePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpausePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: UnpausePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnpausePoolProposal>, I>>(object: I): UnpausePoolProposal {
    const message = createBaseUnpausePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseSchedulePoolUpgradeProposal(): SchedulePoolUpgradeProposal {
  return { title: "", description: "", runtime: "", version: "", scheduled_at: "0", duration: "0", binaries: "" };
}

export const SchedulePoolUpgradeProposal = {
  encode(message: SchedulePoolUpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(40).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(48).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(58).string(message.binaries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchedulePoolUpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedulePoolUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.scheduled_at = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.duration = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.binaries = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchedulePoolUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      version: isSet(object.version) ? String(object.version) : "",
      scheduled_at: isSet(object.scheduled_at) ? String(object.scheduled_at) : "0",
      duration: isSet(object.duration) ? String(object.duration) : "0",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
    };
  },

  toJSON(message: SchedulePoolUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.version !== undefined && (obj.version = message.version);
    message.scheduled_at !== undefined && (obj.scheduled_at = message.scheduled_at);
    message.duration !== undefined && (obj.duration = message.duration);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SchedulePoolUpgradeProposal>, I>>(object: I): SchedulePoolUpgradeProposal {
    const message = createBaseSchedulePoolUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduled_at = object.scheduled_at ?? "0";
    message.duration = object.duration ?? "0";
    message.binaries = object.binaries ?? "";
    return message;
  },
};

function createBaseCancelPoolUpgradeProposal(): CancelPoolUpgradeProposal {
  return { title: "", description: "", runtime: "" };
}

export const CancelPoolUpgradeProposal = {
  encode(message: CancelPoolUpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelPoolUpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelPoolUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelPoolUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
    };
  },

  toJSON(message: CancelPoolUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelPoolUpgradeProposal>, I>>(object: I): CancelPoolUpgradeProposal {
    const message = createBaseCancelPoolUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runtime = object.runtime ?? "";
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
