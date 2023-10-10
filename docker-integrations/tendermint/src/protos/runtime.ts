/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

/**
 * The main data entity served by the gRPC service
 * Contains the block key and the block value as a serialized value
 */
export interface DataItem {
  key: string;
  value: string;
}

/** Configuration entity containing serialized info about connection to the respective chain */
export interface RuntimeConfig {
  serialized_config: string;
}

export interface GetRuntimeNameRequest {
}

export interface GetRuntimeNameResponse {
  name: string;
}

/**
 * getRuntimeName
 * Request returning the version of the runtime
 * returns the runtime version as a string
 */
export interface GetRuntimeVersionRequest {
}

export interface GetRuntimeVersionResponse {
  version: string;
}

/**
 * validateSetConfig
 * Request validating a configuration string to connect to the respective chain
 * returns a validated serialized configuration object
 */
export interface ValidateSetConfigRequest {
  raw_config: string;
}

export interface ValidateSetConfigResponse {
  serialized_config: string;
}

/**
 * getDataItem
 * Request retrieving and returning a block from the respective chain
 * Returns the requested block as a dataItem
 */
export interface GetDataItemRequest {
  config: RuntimeConfig | undefined;
  key: string;
}

export interface GetDataItemResponse {
  data_item: DataItem | undefined;
}

/**
 * prevalidateDataItem
 * Request pre-validating a dataItem that is about to be validated
 * returns the pre-validation result as a boolean
 */
export interface PrevalidateDataItemRequest {
  config: RuntimeConfig | undefined;
  data_item: DataItem | undefined;
}

export interface PrevalidateDataItemResponse {
  valid: boolean;
}

/**
 * transformDataItem
 * Request transforming the given data item into a preferred format
 * returns the transformed dataItem
 */
export interface TransformDataItemRequest {
  config: RuntimeConfig | undefined;
  data_item: DataItem | undefined;
}

export interface TransformDataItemResponse {
  transformed_data_item: DataItem | undefined;
}

/**
 * validateDataItem
 * Request validating a dataItem
 * returns the validation result as a boolean
 */
export interface ValidateDataItemRequest {
  config: RuntimeConfig | undefined;
  proposed_data_item: DataItem | undefined;
  validation_data_item: DataItem | undefined;
}

export interface ValidateDataItemResponse {
  valid: boolean;
}

/**
 * summarizeDataBundle
 * Request summarizing a dataBundle
 * returns the bundle summary as a string
 */
export interface SummarizeDataBundleRequest {
  config: RuntimeConfig | undefined;
  bundle: DataItem[];
}

export interface SummarizeDataBundleResponse {
  summary: string;
}

/**
 * nextKey
 * Request retrieving the next key on the chain
 * returns the key as a string
 */
export interface NextKeyRequest {
  config: RuntimeConfig | undefined;
  key: string;
}

export interface NextKeyResponse {
  next_key: string;
}

function createBaseDataItem(): DataItem {
  return { key: "", value: "" };
}

export const DataItem = {
  encode(message: DataItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataItem {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: DataItem): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataItem>, I>>(base?: I): DataItem {
    return DataItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DataItem>, I>>(object: I): DataItem {
    const message = createBaseDataItem();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRuntimeConfig(): RuntimeConfig {
  return { serialized_config: "" };
}

export const RuntimeConfig = {
  encode(message: RuntimeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serialized_config !== "") {
      writer.uint32(10).string(message.serialized_config);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuntimeConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuntimeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serialized_config = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuntimeConfig {
    return { serialized_config: isSet(object.serialized_config) ? globalThis.String(object.serialized_config) : "" };
  },

  toJSON(message: RuntimeConfig): unknown {
    const obj: any = {};
    if (message.serialized_config !== "") {
      obj.serialized_config = message.serialized_config;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RuntimeConfig>, I>>(base?: I): RuntimeConfig {
    return RuntimeConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RuntimeConfig>, I>>(object: I): RuntimeConfig {
    const message = createBaseRuntimeConfig();
    message.serialized_config = object.serialized_config ?? "";
    return message;
  },
};

function createBaseGetRuntimeNameRequest(): GetRuntimeNameRequest {
  return {};
}

export const GetRuntimeNameRequest = {
  encode(_: GetRuntimeNameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRuntimeNameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRuntimeNameRequest();
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

  fromJSON(_: any): GetRuntimeNameRequest {
    return {};
  },

  toJSON(_: GetRuntimeNameRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRuntimeNameRequest>, I>>(base?: I): GetRuntimeNameRequest {
    return GetRuntimeNameRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRuntimeNameRequest>, I>>(_: I): GetRuntimeNameRequest {
    const message = createBaseGetRuntimeNameRequest();
    return message;
  },
};

function createBaseGetRuntimeNameResponse(): GetRuntimeNameResponse {
  return { name: "" };
}

export const GetRuntimeNameResponse = {
  encode(message: GetRuntimeNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRuntimeNameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRuntimeNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRuntimeNameResponse {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetRuntimeNameResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRuntimeNameResponse>, I>>(base?: I): GetRuntimeNameResponse {
    return GetRuntimeNameResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRuntimeNameResponse>, I>>(object: I): GetRuntimeNameResponse {
    const message = createBaseGetRuntimeNameResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetRuntimeVersionRequest(): GetRuntimeVersionRequest {
  return {};
}

export const GetRuntimeVersionRequest = {
  encode(_: GetRuntimeVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRuntimeVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRuntimeVersionRequest();
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

  fromJSON(_: any): GetRuntimeVersionRequest {
    return {};
  },

  toJSON(_: GetRuntimeVersionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRuntimeVersionRequest>, I>>(base?: I): GetRuntimeVersionRequest {
    return GetRuntimeVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRuntimeVersionRequest>, I>>(_: I): GetRuntimeVersionRequest {
    const message = createBaseGetRuntimeVersionRequest();
    return message;
  },
};

function createBaseGetRuntimeVersionResponse(): GetRuntimeVersionResponse {
  return { version: "" };
}

export const GetRuntimeVersionResponse = {
  encode(message: GetRuntimeVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRuntimeVersionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRuntimeVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRuntimeVersionResponse {
    return { version: isSet(object.version) ? globalThis.String(object.version) : "" };
  },

  toJSON(message: GetRuntimeVersionResponse): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRuntimeVersionResponse>, I>>(base?: I): GetRuntimeVersionResponse {
    return GetRuntimeVersionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRuntimeVersionResponse>, I>>(object: I): GetRuntimeVersionResponse {
    const message = createBaseGetRuntimeVersionResponse();
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseValidateSetConfigRequest(): ValidateSetConfigRequest {
  return { raw_config: "" };
}

export const ValidateSetConfigRequest = {
  encode(message: ValidateSetConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.raw_config !== "") {
      writer.uint32(10).string(message.raw_config);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateSetConfigRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateSetConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.raw_config = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateSetConfigRequest {
    return { raw_config: isSet(object.raw_config) ? globalThis.String(object.raw_config) : "" };
  },

  toJSON(message: ValidateSetConfigRequest): unknown {
    const obj: any = {};
    if (message.raw_config !== "") {
      obj.raw_config = message.raw_config;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateSetConfigRequest>, I>>(base?: I): ValidateSetConfigRequest {
    return ValidateSetConfigRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateSetConfigRequest>, I>>(object: I): ValidateSetConfigRequest {
    const message = createBaseValidateSetConfigRequest();
    message.raw_config = object.raw_config ?? "";
    return message;
  },
};

function createBaseValidateSetConfigResponse(): ValidateSetConfigResponse {
  return { serialized_config: "" };
}

export const ValidateSetConfigResponse = {
  encode(message: ValidateSetConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serialized_config !== "") {
      writer.uint32(10).string(message.serialized_config);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateSetConfigResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateSetConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serialized_config = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateSetConfigResponse {
    return { serialized_config: isSet(object.serialized_config) ? globalThis.String(object.serialized_config) : "" };
  },

  toJSON(message: ValidateSetConfigResponse): unknown {
    const obj: any = {};
    if (message.serialized_config !== "") {
      obj.serialized_config = message.serialized_config;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateSetConfigResponse>, I>>(base?: I): ValidateSetConfigResponse {
    return ValidateSetConfigResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateSetConfigResponse>, I>>(object: I): ValidateSetConfigResponse {
    const message = createBaseValidateSetConfigResponse();
    message.serialized_config = object.serialized_config ?? "";
    return message;
  },
};

function createBaseGetDataItemRequest(): GetDataItemRequest {
  return { config: undefined, key: "" };
}

export const GetDataItemRequest = {
  encode(message: GetDataItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDataItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDataItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RuntimeConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDataItemRequest {
    return {
      config: isSet(object.config) ? RuntimeConfig.fromJSON(object.config) : undefined,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
    };
  },

  toJSON(message: GetDataItemRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RuntimeConfig.toJSON(message.config);
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDataItemRequest>, I>>(base?: I): GetDataItemRequest {
    return GetDataItemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDataItemRequest>, I>>(object: I): GetDataItemRequest {
    const message = createBaseGetDataItemRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RuntimeConfig.fromPartial(object.config)
      : undefined;
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseGetDataItemResponse(): GetDataItemResponse {
  return { data_item: undefined };
}

export const GetDataItemResponse = {
  encode(message: GetDataItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data_item !== undefined) {
      DataItem.encode(message.data_item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDataItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDataItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data_item = DataItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDataItemResponse {
    return { data_item: isSet(object.data_item) ? DataItem.fromJSON(object.data_item) : undefined };
  },

  toJSON(message: GetDataItemResponse): unknown {
    const obj: any = {};
    if (message.data_item !== undefined) {
      obj.data_item = DataItem.toJSON(message.data_item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDataItemResponse>, I>>(base?: I): GetDataItemResponse {
    return GetDataItemResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDataItemResponse>, I>>(object: I): GetDataItemResponse {
    const message = createBaseGetDataItemResponse();
    message.data_item = (object.data_item !== undefined && object.data_item !== null)
      ? DataItem.fromPartial(object.data_item)
      : undefined;
    return message;
  },
};

function createBasePrevalidateDataItemRequest(): PrevalidateDataItemRequest {
  return { config: undefined, data_item: undefined };
}

export const PrevalidateDataItemRequest = {
  encode(message: PrevalidateDataItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.data_item !== undefined) {
      DataItem.encode(message.data_item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrevalidateDataItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrevalidateDataItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RuntimeConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data_item = DataItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrevalidateDataItemRequest {
    return {
      config: isSet(object.config) ? RuntimeConfig.fromJSON(object.config) : undefined,
      data_item: isSet(object.data_item) ? DataItem.fromJSON(object.data_item) : undefined,
    };
  },

  toJSON(message: PrevalidateDataItemRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RuntimeConfig.toJSON(message.config);
    }
    if (message.data_item !== undefined) {
      obj.data_item = DataItem.toJSON(message.data_item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrevalidateDataItemRequest>, I>>(base?: I): PrevalidateDataItemRequest {
    return PrevalidateDataItemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrevalidateDataItemRequest>, I>>(object: I): PrevalidateDataItemRequest {
    const message = createBasePrevalidateDataItemRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RuntimeConfig.fromPartial(object.config)
      : undefined;
    message.data_item = (object.data_item !== undefined && object.data_item !== null)
      ? DataItem.fromPartial(object.data_item)
      : undefined;
    return message;
  },
};

function createBasePrevalidateDataItemResponse(): PrevalidateDataItemResponse {
  return { valid: false };
}

export const PrevalidateDataItemResponse = {
  encode(message: PrevalidateDataItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrevalidateDataItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrevalidateDataItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.valid = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrevalidateDataItemResponse {
    return { valid: isSet(object.valid) ? globalThis.Boolean(object.valid) : false };
  },

  toJSON(message: PrevalidateDataItemResponse): unknown {
    const obj: any = {};
    if (message.valid === true) {
      obj.valid = message.valid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrevalidateDataItemResponse>, I>>(base?: I): PrevalidateDataItemResponse {
    return PrevalidateDataItemResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrevalidateDataItemResponse>, I>>(object: I): PrevalidateDataItemResponse {
    const message = createBasePrevalidateDataItemResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseTransformDataItemRequest(): TransformDataItemRequest {
  return { config: undefined, data_item: undefined };
}

export const TransformDataItemRequest = {
  encode(message: TransformDataItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.data_item !== undefined) {
      DataItem.encode(message.data_item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransformDataItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransformDataItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RuntimeConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data_item = DataItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransformDataItemRequest {
    return {
      config: isSet(object.config) ? RuntimeConfig.fromJSON(object.config) : undefined,
      data_item: isSet(object.data_item) ? DataItem.fromJSON(object.data_item) : undefined,
    };
  },

  toJSON(message: TransformDataItemRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RuntimeConfig.toJSON(message.config);
    }
    if (message.data_item !== undefined) {
      obj.data_item = DataItem.toJSON(message.data_item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransformDataItemRequest>, I>>(base?: I): TransformDataItemRequest {
    return TransformDataItemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransformDataItemRequest>, I>>(object: I): TransformDataItemRequest {
    const message = createBaseTransformDataItemRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RuntimeConfig.fromPartial(object.config)
      : undefined;
    message.data_item = (object.data_item !== undefined && object.data_item !== null)
      ? DataItem.fromPartial(object.data_item)
      : undefined;
    return message;
  },
};

function createBaseTransformDataItemResponse(): TransformDataItemResponse {
  return { transformed_data_item: undefined };
}

export const TransformDataItemResponse = {
  encode(message: TransformDataItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transformed_data_item !== undefined) {
      DataItem.encode(message.transformed_data_item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransformDataItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransformDataItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transformed_data_item = DataItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransformDataItemResponse {
    return {
      transformed_data_item: isSet(object.transformed_data_item)
        ? DataItem.fromJSON(object.transformed_data_item)
        : undefined,
    };
  },

  toJSON(message: TransformDataItemResponse): unknown {
    const obj: any = {};
    if (message.transformed_data_item !== undefined) {
      obj.transformed_data_item = DataItem.toJSON(message.transformed_data_item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransformDataItemResponse>, I>>(base?: I): TransformDataItemResponse {
    return TransformDataItemResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransformDataItemResponse>, I>>(object: I): TransformDataItemResponse {
    const message = createBaseTransformDataItemResponse();
    message.transformed_data_item =
      (object.transformed_data_item !== undefined && object.transformed_data_item !== null)
        ? DataItem.fromPartial(object.transformed_data_item)
        : undefined;
    return message;
  },
};

function createBaseValidateDataItemRequest(): ValidateDataItemRequest {
  return { config: undefined, proposed_data_item: undefined, validation_data_item: undefined };
}

export const ValidateDataItemRequest = {
  encode(message: ValidateDataItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposed_data_item !== undefined) {
      DataItem.encode(message.proposed_data_item, writer.uint32(18).fork()).ldelim();
    }
    if (message.validation_data_item !== undefined) {
      DataItem.encode(message.validation_data_item, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateDataItemRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateDataItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RuntimeConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposed_data_item = DataItem.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validation_data_item = DataItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateDataItemRequest {
    return {
      config: isSet(object.config) ? RuntimeConfig.fromJSON(object.config) : undefined,
      proposed_data_item: isSet(object.proposed_data_item) ? DataItem.fromJSON(object.proposed_data_item) : undefined,
      validation_data_item: isSet(object.validation_data_item)
        ? DataItem.fromJSON(object.validation_data_item)
        : undefined,
    };
  },

  toJSON(message: ValidateDataItemRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RuntimeConfig.toJSON(message.config);
    }
    if (message.proposed_data_item !== undefined) {
      obj.proposed_data_item = DataItem.toJSON(message.proposed_data_item);
    }
    if (message.validation_data_item !== undefined) {
      obj.validation_data_item = DataItem.toJSON(message.validation_data_item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateDataItemRequest>, I>>(base?: I): ValidateDataItemRequest {
    return ValidateDataItemRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateDataItemRequest>, I>>(object: I): ValidateDataItemRequest {
    const message = createBaseValidateDataItemRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RuntimeConfig.fromPartial(object.config)
      : undefined;
    message.proposed_data_item = (object.proposed_data_item !== undefined && object.proposed_data_item !== null)
      ? DataItem.fromPartial(object.proposed_data_item)
      : undefined;
    message.validation_data_item = (object.validation_data_item !== undefined && object.validation_data_item !== null)
      ? DataItem.fromPartial(object.validation_data_item)
      : undefined;
    return message;
  },
};

function createBaseValidateDataItemResponse(): ValidateDataItemResponse {
  return { valid: false };
}

export const ValidateDataItemResponse = {
  encode(message: ValidateDataItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateDataItemResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateDataItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.valid = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateDataItemResponse {
    return { valid: isSet(object.valid) ? globalThis.Boolean(object.valid) : false };
  },

  toJSON(message: ValidateDataItemResponse): unknown {
    const obj: any = {};
    if (message.valid === true) {
      obj.valid = message.valid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateDataItemResponse>, I>>(base?: I): ValidateDataItemResponse {
    return ValidateDataItemResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateDataItemResponse>, I>>(object: I): ValidateDataItemResponse {
    const message = createBaseValidateDataItemResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseSummarizeDataBundleRequest(): SummarizeDataBundleRequest {
  return { config: undefined, bundle: [] };
}

export const SummarizeDataBundleRequest = {
  encode(message: SummarizeDataBundleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bundle) {
      DataItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SummarizeDataBundleRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummarizeDataBundleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RuntimeConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bundle.push(DataItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SummarizeDataBundleRequest {
    return {
      config: isSet(object.config) ? RuntimeConfig.fromJSON(object.config) : undefined,
      bundle: globalThis.Array.isArray(object?.bundle) ? object.bundle.map((e: any) => DataItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: SummarizeDataBundleRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RuntimeConfig.toJSON(message.config);
    }
    if (message.bundle?.length) {
      obj.bundle = message.bundle.map((e) => DataItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SummarizeDataBundleRequest>, I>>(base?: I): SummarizeDataBundleRequest {
    return SummarizeDataBundleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SummarizeDataBundleRequest>, I>>(object: I): SummarizeDataBundleRequest {
    const message = createBaseSummarizeDataBundleRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RuntimeConfig.fromPartial(object.config)
      : undefined;
    message.bundle = object.bundle?.map((e) => DataItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSummarizeDataBundleResponse(): SummarizeDataBundleResponse {
  return { summary: "" };
}

export const SummarizeDataBundleResponse = {
  encode(message: SummarizeDataBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== "") {
      writer.uint32(10).string(message.summary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SummarizeDataBundleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummarizeDataBundleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.summary = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SummarizeDataBundleResponse {
    return { summary: isSet(object.summary) ? globalThis.String(object.summary) : "" };
  },

  toJSON(message: SummarizeDataBundleResponse): unknown {
    const obj: any = {};
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SummarizeDataBundleResponse>, I>>(base?: I): SummarizeDataBundleResponse {
    return SummarizeDataBundleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SummarizeDataBundleResponse>, I>>(object: I): SummarizeDataBundleResponse {
    const message = createBaseSummarizeDataBundleResponse();
    message.summary = object.summary ?? "";
    return message;
  },
};

function createBaseNextKeyRequest(): NextKeyRequest {
  return { config: undefined, key: "" };
}

export const NextKeyRequest = {
  encode(message: NextKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = RuntimeConfig.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NextKeyRequest {
    return {
      config: isSet(object.config) ? RuntimeConfig.fromJSON(object.config) : undefined,
      key: isSet(object.key) ? globalThis.String(object.key) : "",
    };
  },

  toJSON(message: NextKeyRequest): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = RuntimeConfig.toJSON(message.config);
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NextKeyRequest>, I>>(base?: I): NextKeyRequest {
    return NextKeyRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NextKeyRequest>, I>>(object: I): NextKeyRequest {
    const message = createBaseNextKeyRequest();
    message.config = (object.config !== undefined && object.config !== null)
      ? RuntimeConfig.fromPartial(object.config)
      : undefined;
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseNextKeyResponse(): NextKeyResponse {
  return { next_key: "" };
}

export const NextKeyResponse = {
  encode(message: NextKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.next_key !== "") {
      writer.uint32(10).string(message.next_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.next_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NextKeyResponse {
    return { next_key: isSet(object.next_key) ? globalThis.String(object.next_key) : "" };
  },

  toJSON(message: NextKeyResponse): unknown {
    const obj: any = {};
    if (message.next_key !== "") {
      obj.next_key = message.next_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NextKeyResponse>, I>>(base?: I): NextKeyResponse {
    return NextKeyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NextKeyResponse>, I>>(object: I): NextKeyResponse {
    const message = createBaseNextKeyResponse();
    message.next_key = object.next_key ?? "";
    return message;
  },
};

export type RuntimeService = typeof RuntimeService;
export const RuntimeService = {
  getRuntimeName: {
    path: "/Runtime/GetRuntimeName",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRuntimeNameRequest) => Buffer.from(GetRuntimeNameRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRuntimeNameRequest.decode(value),
    responseSerialize: (value: GetRuntimeNameResponse) => Buffer.from(GetRuntimeNameResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRuntimeNameResponse.decode(value),
  },
  getRuntimeVersion: {
    path: "/Runtime/GetRuntimeVersion",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRuntimeVersionRequest) => Buffer.from(GetRuntimeVersionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRuntimeVersionRequest.decode(value),
    responseSerialize: (value: GetRuntimeVersionResponse) =>
      Buffer.from(GetRuntimeVersionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetRuntimeVersionResponse.decode(value),
  },
  validateSetConfig: {
    path: "/Runtime/ValidateSetConfig",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ValidateSetConfigRequest) => Buffer.from(ValidateSetConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ValidateSetConfigRequest.decode(value),
    responseSerialize: (value: ValidateSetConfigResponse) =>
      Buffer.from(ValidateSetConfigResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ValidateSetConfigResponse.decode(value),
  },
  getDataItem: {
    path: "/Runtime/GetDataItem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetDataItemRequest) => Buffer.from(GetDataItemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetDataItemRequest.decode(value),
    responseSerialize: (value: GetDataItemResponse) => Buffer.from(GetDataItemResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetDataItemResponse.decode(value),
  },
  prevalidateDataItem: {
    path: "/Runtime/PrevalidateDataItem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PrevalidateDataItemRequest) =>
      Buffer.from(PrevalidateDataItemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PrevalidateDataItemRequest.decode(value),
    responseSerialize: (value: PrevalidateDataItemResponse) =>
      Buffer.from(PrevalidateDataItemResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PrevalidateDataItemResponse.decode(value),
  },
  transformDataItem: {
    path: "/Runtime/TransformDataItem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TransformDataItemRequest) => Buffer.from(TransformDataItemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TransformDataItemRequest.decode(value),
    responseSerialize: (value: TransformDataItemResponse) =>
      Buffer.from(TransformDataItemResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TransformDataItemResponse.decode(value),
  },
  validateDataItem: {
    path: "/Runtime/ValidateDataItem",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ValidateDataItemRequest) => Buffer.from(ValidateDataItemRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ValidateDataItemRequest.decode(value),
    responseSerialize: (value: ValidateDataItemResponse) =>
      Buffer.from(ValidateDataItemResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ValidateDataItemResponse.decode(value),
  },
  summarizeDataBundle: {
    path: "/Runtime/SummarizeDataBundle",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SummarizeDataBundleRequest) =>
      Buffer.from(SummarizeDataBundleRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SummarizeDataBundleRequest.decode(value),
    responseSerialize: (value: SummarizeDataBundleResponse) =>
      Buffer.from(SummarizeDataBundleResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SummarizeDataBundleResponse.decode(value),
  },
  nextKey: {
    path: "/Runtime/NextKey",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: NextKeyRequest) => Buffer.from(NextKeyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => NextKeyRequest.decode(value),
    responseSerialize: (value: NextKeyResponse) => Buffer.from(NextKeyResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NextKeyResponse.decode(value),
  },
} as const;

export interface RuntimeServer extends UntypedServiceImplementation {
  getRuntimeName: handleUnaryCall<GetRuntimeNameRequest, GetRuntimeNameResponse>;
  getRuntimeVersion: handleUnaryCall<GetRuntimeVersionRequest, GetRuntimeVersionResponse>;
  validateSetConfig: handleUnaryCall<ValidateSetConfigRequest, ValidateSetConfigResponse>;
  getDataItem: handleUnaryCall<GetDataItemRequest, GetDataItemResponse>;
  prevalidateDataItem: handleUnaryCall<PrevalidateDataItemRequest, PrevalidateDataItemResponse>;
  transformDataItem: handleUnaryCall<TransformDataItemRequest, TransformDataItemResponse>;
  validateDataItem: handleUnaryCall<ValidateDataItemRequest, ValidateDataItemResponse>;
  summarizeDataBundle: handleUnaryCall<SummarizeDataBundleRequest, SummarizeDataBundleResponse>;
  nextKey: handleUnaryCall<NextKeyRequest, NextKeyResponse>;
}

export interface RuntimeClient extends Client {
  getRuntimeName(
    request: GetRuntimeNameRequest,
    callback: (error: ServiceError | null, response: GetRuntimeNameResponse) => void,
  ): ClientUnaryCall;
  getRuntimeName(
    request: GetRuntimeNameRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRuntimeNameResponse) => void,
  ): ClientUnaryCall;
  getRuntimeName(
    request: GetRuntimeNameRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRuntimeNameResponse) => void,
  ): ClientUnaryCall;
  getRuntimeVersion(
    request: GetRuntimeVersionRequest,
    callback: (error: ServiceError | null, response: GetRuntimeVersionResponse) => void,
  ): ClientUnaryCall;
  getRuntimeVersion(
    request: GetRuntimeVersionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetRuntimeVersionResponse) => void,
  ): ClientUnaryCall;
  getRuntimeVersion(
    request: GetRuntimeVersionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetRuntimeVersionResponse) => void,
  ): ClientUnaryCall;
  validateSetConfig(
    request: ValidateSetConfigRequest,
    callback: (error: ServiceError | null, response: ValidateSetConfigResponse) => void,
  ): ClientUnaryCall;
  validateSetConfig(
    request: ValidateSetConfigRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ValidateSetConfigResponse) => void,
  ): ClientUnaryCall;
  validateSetConfig(
    request: ValidateSetConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ValidateSetConfigResponse) => void,
  ): ClientUnaryCall;
  getDataItem(
    request: GetDataItemRequest,
    callback: (error: ServiceError | null, response: GetDataItemResponse) => void,
  ): ClientUnaryCall;
  getDataItem(
    request: GetDataItemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetDataItemResponse) => void,
  ): ClientUnaryCall;
  getDataItem(
    request: GetDataItemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetDataItemResponse) => void,
  ): ClientUnaryCall;
  prevalidateDataItem(
    request: PrevalidateDataItemRequest,
    callback: (error: ServiceError | null, response: PrevalidateDataItemResponse) => void,
  ): ClientUnaryCall;
  prevalidateDataItem(
    request: PrevalidateDataItemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PrevalidateDataItemResponse) => void,
  ): ClientUnaryCall;
  prevalidateDataItem(
    request: PrevalidateDataItemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PrevalidateDataItemResponse) => void,
  ): ClientUnaryCall;
  transformDataItem(
    request: TransformDataItemRequest,
    callback: (error: ServiceError | null, response: TransformDataItemResponse) => void,
  ): ClientUnaryCall;
  transformDataItem(
    request: TransformDataItemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TransformDataItemResponse) => void,
  ): ClientUnaryCall;
  transformDataItem(
    request: TransformDataItemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TransformDataItemResponse) => void,
  ): ClientUnaryCall;
  validateDataItem(
    request: ValidateDataItemRequest,
    callback: (error: ServiceError | null, response: ValidateDataItemResponse) => void,
  ): ClientUnaryCall;
  validateDataItem(
    request: ValidateDataItemRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ValidateDataItemResponse) => void,
  ): ClientUnaryCall;
  validateDataItem(
    request: ValidateDataItemRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ValidateDataItemResponse) => void,
  ): ClientUnaryCall;
  summarizeDataBundle(
    request: SummarizeDataBundleRequest,
    callback: (error: ServiceError | null, response: SummarizeDataBundleResponse) => void,
  ): ClientUnaryCall;
  summarizeDataBundle(
    request: SummarizeDataBundleRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SummarizeDataBundleResponse) => void,
  ): ClientUnaryCall;
  summarizeDataBundle(
    request: SummarizeDataBundleRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SummarizeDataBundleResponse) => void,
  ): ClientUnaryCall;
  nextKey(
    request: NextKeyRequest,
    callback: (error: ServiceError | null, response: NextKeyResponse) => void,
  ): ClientUnaryCall;
  nextKey(
    request: NextKeyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: NextKeyResponse) => void,
  ): ClientUnaryCall;
  nextKey(
    request: NextKeyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: NextKeyResponse) => void,
  ): ClientUnaryCall;
}

export const RuntimeClient = makeGenericClientConstructor(RuntimeService, "Runtime") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RuntimeClient;
  service: typeof RuntimeService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
