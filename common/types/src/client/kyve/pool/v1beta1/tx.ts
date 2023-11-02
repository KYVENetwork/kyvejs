/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.pool.v1beta1";

/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  id: string;
  /** amount ... */
  amount: string;
}

/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {
}

/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
  /** creator ... */
  creator: string;
  /** id ... */
  id: string;
  /** amount ... */
  amount: string;
}

/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {
}

/** MsgCreatePool defines a SDK message for creating a new pool. */
export interface MsgCreatePool {
  /** authority is the address of the governance account. */
  authority: string;
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
  /** storage_provider_id ... */
  storage_provider_id: number;
  /** compression_id ... */
  compression_id: number;
}

/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}

/** MsgUpdatePool defines a SDK message for updating an existing pool. */
export interface MsgUpdatePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
  /** payload ... */
  payload: string;
}

/** MsgUpdatePoolResponse defines the Msg/UpdatePool response type. */
export interface MsgUpdatePoolResponse {
}

/** MsgDisablePool defines a SDK message for disabling an existing pool. */
export interface MsgDisablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
}

/** MsgDisablePoolResponse defines the Msg/DisablePool response type. */
export interface MsgDisablePoolResponse {
}

/** MsgEnablePool defines a SDK message for enabling an existing pool. */
export interface MsgEnablePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** id ... */
  id: string;
}

/** MsgEnablePoolResponse defines the Msg/EnablePool response type. */
export interface MsgEnablePoolResponse {
}

/** MsgScheduleRuntimeUpgrade defines a SDK message for scheduling a runtime upgrade. */
export interface MsgScheduleRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
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

/** MsgScheduleRuntimeUpgradeResponse defines the Msg/ScheduleRuntimeUpgrade response type. */
export interface MsgScheduleRuntimeUpgradeResponse {
}

/** MsgCancelRuntimeUpgrade defines a SDK message for cancelling a runtime upgrade. */
export interface MsgCancelRuntimeUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** runtime ... */
  runtime: string;
}

/** MsgCancelRuntimeUpgradeResponse defines the Msg/CancelRuntimeUpgrade response type. */
export interface MsgCancelRuntimeUpgradeResponse {
}

/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}

/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgFundPool(): MsgFundPool {
  return { creator: "", id: "0", amount: "0" };
}

export const MsgFundPool = {
  encode(message: MsgFundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): MsgFundPool {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgFundPool): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFundPool>, I>>(base?: I): MsgFundPool {
    return MsgFundPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundPool>, I>>(object: I): MsgFundPool {
    const message = createBaseMsgFundPool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgFundPoolResponse(): MsgFundPoolResponse {
  return {};
}

export const MsgFundPoolResponse = {
  encode(_: MsgFundPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgFundPoolResponse {
    return {};
  },

  toJSON(_: MsgFundPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFundPoolResponse>, I>>(base?: I): MsgFundPoolResponse {
    return MsgFundPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundPoolResponse>, I>>(_: I): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  },
};

function createBaseMsgDefundPool(): MsgDefundPool {
  return { creator: "", id: "0", amount: "0" };
}

export const MsgDefundPool = {
  encode(message: MsgDefundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): MsgDefundPool {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgDefundPool): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDefundPool>, I>>(base?: I): MsgDefundPool {
    return MsgDefundPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDefundPool>, I>>(object: I): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgDefundPoolResponse(): MsgDefundPoolResponse {
  return {};
}

export const MsgDefundPoolResponse = {
  encode(_: MsgDefundPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefundPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDefundPoolResponse {
    return {};
  },

  toJSON(_: MsgDefundPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDefundPoolResponse>, I>>(base?: I): MsgDefundPoolResponse {
    return MsgDefundPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDefundPoolResponse>, I>>(_: I): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
  },
};

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    authority: "",
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

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
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

  fromJSON(object: any): MsgCreatePool {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
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

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
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

  create<I extends Exact<DeepPartial<MsgCreatePool>, I>>(base?: I): MsgCreatePool {
    return MsgCreatePool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(object: I): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.authority = object.authority ?? "";
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

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(base?: I): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(_: I): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
};

function createBaseMsgUpdatePool(): MsgUpdatePool {
  return { authority: "", id: "0", payload: "" };
}

export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
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

  fromJSON(object: any): MsgUpdatePool {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdatePool>, I>>(base?: I): MsgUpdatePool {
    return MsgUpdatePool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdatePool>, I>>(object: I): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}

export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },

  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdatePoolResponse>, I>>(base?: I): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdatePoolResponse>, I>>(_: I): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
};

function createBaseMsgDisablePool(): MsgDisablePool {
  return { authority: "", id: "0" };
}

export const MsgDisablePool = {
  encode(message: MsgDisablePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisablePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisablePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
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

  fromJSON(object: any): MsgDisablePool {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
    };
  },

  toJSON(message: MsgDisablePool): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDisablePool>, I>>(base?: I): MsgDisablePool {
    return MsgDisablePool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDisablePool>, I>>(object: I): MsgDisablePool {
    const message = createBaseMsgDisablePool();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseMsgDisablePoolResponse(): MsgDisablePoolResponse {
  return {};
}

export const MsgDisablePoolResponse = {
  encode(_: MsgDisablePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisablePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisablePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDisablePoolResponse {
    return {};
  },

  toJSON(_: MsgDisablePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDisablePoolResponse>, I>>(base?: I): MsgDisablePoolResponse {
    return MsgDisablePoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDisablePoolResponse>, I>>(_: I): MsgDisablePoolResponse {
    const message = createBaseMsgDisablePoolResponse();
    return message;
  },
};

function createBaseMsgEnablePool(): MsgEnablePool {
  return { authority: "", id: "0" };
}

export const MsgEnablePool = {
  encode(message: MsgEnablePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnablePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnablePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
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

  fromJSON(object: any): MsgEnablePool {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
    };
  },

  toJSON(message: MsgEnablePool): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEnablePool>, I>>(base?: I): MsgEnablePool {
    return MsgEnablePool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgEnablePool>, I>>(object: I): MsgEnablePool {
    const message = createBaseMsgEnablePool();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseMsgEnablePoolResponse(): MsgEnablePoolResponse {
  return {};
}

export const MsgEnablePoolResponse = {
  encode(_: MsgEnablePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnablePoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnablePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgEnablePoolResponse {
    return {};
  },

  toJSON(_: MsgEnablePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEnablePoolResponse>, I>>(base?: I): MsgEnablePoolResponse {
    return MsgEnablePoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgEnablePoolResponse>, I>>(_: I): MsgEnablePoolResponse {
    const message = createBaseMsgEnablePoolResponse();
    return message;
  },
};

function createBaseMsgScheduleRuntimeUpgrade(): MsgScheduleRuntimeUpgrade {
  return { authority: "", runtime: "", version: "", scheduled_at: "0", duration: "0", binaries: "" };
}

export const MsgScheduleRuntimeUpgrade = {
  encode(message: MsgScheduleRuntimeUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(32).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(40).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(50).string(message.binaries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleRuntimeUpgrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgScheduleRuntimeUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.scheduled_at = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.duration = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.binaries = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgScheduleRuntimeUpgrade {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      scheduled_at: isSet(object.scheduled_at) ? globalThis.String(object.scheduled_at) : "0",
      duration: isSet(object.duration) ? globalThis.String(object.duration) : "0",
      binaries: isSet(object.binaries) ? globalThis.String(object.binaries) : "",
    };
  },

  toJSON(message: MsgScheduleRuntimeUpgrade): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
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
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgScheduleRuntimeUpgrade>, I>>(base?: I): MsgScheduleRuntimeUpgrade {
    return MsgScheduleRuntimeUpgrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgScheduleRuntimeUpgrade>, I>>(object: I): MsgScheduleRuntimeUpgrade {
    const message = createBaseMsgScheduleRuntimeUpgrade();
    message.authority = object.authority ?? "";
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduled_at = object.scheduled_at ?? "0";
    message.duration = object.duration ?? "0";
    message.binaries = object.binaries ?? "";
    return message;
  },
};

function createBaseMsgScheduleRuntimeUpgradeResponse(): MsgScheduleRuntimeUpgradeResponse {
  return {};
}

export const MsgScheduleRuntimeUpgradeResponse = {
  encode(_: MsgScheduleRuntimeUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleRuntimeUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgScheduleRuntimeUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgScheduleRuntimeUpgradeResponse {
    return {};
  },

  toJSON(_: MsgScheduleRuntimeUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgScheduleRuntimeUpgradeResponse>, I>>(
    base?: I,
  ): MsgScheduleRuntimeUpgradeResponse {
    return MsgScheduleRuntimeUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgScheduleRuntimeUpgradeResponse>, I>>(
    _: I,
  ): MsgScheduleRuntimeUpgradeResponse {
    const message = createBaseMsgScheduleRuntimeUpgradeResponse();
    return message;
  },
};

function createBaseMsgCancelRuntimeUpgrade(): MsgCancelRuntimeUpgrade {
  return { authority: "", runtime: "" };
}

export const MsgCancelRuntimeUpgrade = {
  encode(message: MsgCancelRuntimeUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRuntimeUpgrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRuntimeUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runtime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelRuntimeUpgrade {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
    };
  },

  toJSON(message: MsgCancelRuntimeUpgrade): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelRuntimeUpgrade>, I>>(base?: I): MsgCancelRuntimeUpgrade {
    return MsgCancelRuntimeUpgrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelRuntimeUpgrade>, I>>(object: I): MsgCancelRuntimeUpgrade {
    const message = createBaseMsgCancelRuntimeUpgrade();
    message.authority = object.authority ?? "";
    message.runtime = object.runtime ?? "";
    return message;
  },
};

function createBaseMsgCancelRuntimeUpgradeResponse(): MsgCancelRuntimeUpgradeResponse {
  return {};
}

export const MsgCancelRuntimeUpgradeResponse = {
  encode(_: MsgCancelRuntimeUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRuntimeUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRuntimeUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCancelRuntimeUpgradeResponse {
    return {};
  },

  toJSON(_: MsgCancelRuntimeUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelRuntimeUpgradeResponse>, I>>(base?: I): MsgCancelRuntimeUpgradeResponse {
    return MsgCancelRuntimeUpgradeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelRuntimeUpgradeResponse>, I>>(_: I): MsgCancelRuntimeUpgradeResponse {
    const message = createBaseMsgCancelRuntimeUpgradeResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", payload: "" };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** FundPool ... */
  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
  /** DefundPool ... */
  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
  /**
   * CreatePool defines a governance operation for creating a new pool.
   * The authority is hard-coded to the x/gov module account.
   */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /**
   * UpdatePool defines a governance operation for updating an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  /**
   * DisablePool defines a governance operation for disabling an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  DisablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse>;
  /**
   * EnablePool defines a governance operation for enabling an existing pool.
   * The authority is hard-coded to the x/gov module account.
   */
  EnablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse>;
  /**
   * ScheduleRuntimeUpgrade defines a governance operation for scheduling a runtime upgrade.
   * The authority is hard-coded to the x/gov module account.
   */
  ScheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse>;
  /**
   * CancelRuntimeUpgrade defines a governance operation for cancelling a runtime upgrade.
   * The authority is hard-coded to the x/gov module account.
   */
  CancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/pool module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = "kyve.pool.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.FundPool = this.FundPool.bind(this);
    this.DefundPool = this.DefundPool.bind(this);
    this.CreatePool = this.CreatePool.bind(this);
    this.UpdatePool = this.UpdatePool.bind(this);
    this.DisablePool = this.DisablePool.bind(this);
    this.EnablePool = this.EnablePool.bind(this);
    this.ScheduleRuntimeUpgrade = this.ScheduleRuntimeUpgrade.bind(this);
    this.CancelRuntimeUpgrade = this.CancelRuntimeUpgrade.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse> {
    const data = MsgFundPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundPool", data);
    return promise.then((data) => MsgFundPoolResponse.decode(_m0.Reader.create(data)));
  }

  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse> {
    const data = MsgDefundPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "DefundPool", data);
    return promise.then((data) => MsgDefundPoolResponse.decode(_m0.Reader.create(data)));
  }

  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreatePool", data);
    return promise.then((data) => MsgCreatePoolResponse.decode(_m0.Reader.create(data)));
  }

  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdatePool", data);
    return promise.then((data) => MsgUpdatePoolResponse.decode(_m0.Reader.create(data)));
  }

  DisablePool(request: MsgDisablePool): Promise<MsgDisablePoolResponse> {
    const data = MsgDisablePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "DisablePool", data);
    return promise.then((data) => MsgDisablePoolResponse.decode(_m0.Reader.create(data)));
  }

  EnablePool(request: MsgEnablePool): Promise<MsgEnablePoolResponse> {
    const data = MsgEnablePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnablePool", data);
    return promise.then((data) => MsgEnablePoolResponse.decode(_m0.Reader.create(data)));
  }

  ScheduleRuntimeUpgrade(request: MsgScheduleRuntimeUpgrade): Promise<MsgScheduleRuntimeUpgradeResponse> {
    const data = MsgScheduleRuntimeUpgrade.encode(request).finish();
    const promise = this.rpc.request(this.service, "ScheduleRuntimeUpgrade", data);
    return promise.then((data) => MsgScheduleRuntimeUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  CancelRuntimeUpgrade(request: MsgCancelRuntimeUpgrade): Promise<MsgCancelRuntimeUpgradeResponse> {
    const data = MsgCancelRuntimeUpgrade.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelRuntimeUpgrade", data);
    return promise.then((data) => MsgCancelRuntimeUpgradeResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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
