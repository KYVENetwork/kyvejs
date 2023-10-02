/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DataItem {
  key: string;
  value: string;
}

export interface RuntimeConfig {
  serialized_config: string;
}

/** getRuntimeName */
export interface GetRuntimeNameRequest {
}

export interface GetRuntimeNameResponse {
  name: string;
}

/** getRuntimeVersion */
export interface GetRuntimeVersionRequest {
}

export interface GetRuntimeVersionResponse {
  version: string;
}

/** validateSetConfig */
export interface ValidateSetConfigRequest {
  raw_config: string;
}

export interface ValidateSetConfigResponse {
  serialized_config: string;
}

/** getDataItem */
export interface GetDataItemRequest {
  config: RuntimeConfig | undefined;
  key: string;
}

export interface GetDataItemResponse {
  data_item: DataItem | undefined;
}

/** prevalidateDataItem */
export interface PrevalidateDataItemRequest {
  config: RuntimeConfig | undefined;
  data_item: DataItem | undefined;
}

export interface PrevalidateDataItemResponse {
  valid: boolean;
}

/** transformDataItem */
export interface TransformDataItemRequest {
  config: RuntimeConfig | undefined;
  data_item: DataItem | undefined;
}

export interface TransformDataItemResponse {
  transformed_data_item: DataItem | undefined;
}

/** validateDataItem */
export interface ValidateDataItemRequest {
  config: RuntimeConfig | undefined;
  proposed_data_item: DataItem | undefined;
  validation_data_item: DataItem | undefined;
}

export interface ValidateDataItemResponse {
  valid: boolean;
}

/** summarizeDataBundle */
export interface SummarizeDataBundleRequest {
  config: RuntimeConfig | undefined;
  bundle: DataItem[];
}

export interface SummarizeDataBundleResponse {
  summary: string;
}

/** nextKey */
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

export interface RuntimeService {
  GetRuntimeName(request: GetRuntimeNameRequest): Promise<GetRuntimeNameResponse>;
  GetRuntimeVersion(request: GetRuntimeVersionRequest): Promise<GetRuntimeVersionResponse>;
  ValidateSetConfig(request: ValidateSetConfigRequest): Promise<ValidateSetConfigResponse>;
  GetDataItem(request: GetDataItemRequest): Promise<GetDataItemResponse>;
  PrevalidateDataItem(request: PrevalidateDataItemRequest): Promise<PrevalidateDataItemResponse>;
  TransformDataItem(request: TransformDataItemRequest): Promise<TransformDataItemResponse>;
  ValidateDataItem(request: ValidateDataItemRequest): Promise<ValidateDataItemResponse>;
  SummarizeDataBundle(request: SummarizeDataBundleRequest): Promise<SummarizeDataBundleResponse>;
  NextKey(request: NextKeyRequest): Promise<NextKeyResponse>;
}

export const RuntimeServiceServiceName = "RuntimeService";
export class RuntimeServiceClientImpl implements RuntimeService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || RuntimeServiceServiceName;
    this.rpc = rpc;
    this.GetRuntimeName = this.GetRuntimeName.bind(this);
    this.GetRuntimeVersion = this.GetRuntimeVersion.bind(this);
    this.ValidateSetConfig = this.ValidateSetConfig.bind(this);
    this.GetDataItem = this.GetDataItem.bind(this);
    this.PrevalidateDataItem = this.PrevalidateDataItem.bind(this);
    this.TransformDataItem = this.TransformDataItem.bind(this);
    this.ValidateDataItem = this.ValidateDataItem.bind(this);
    this.SummarizeDataBundle = this.SummarizeDataBundle.bind(this);
    this.NextKey = this.NextKey.bind(this);
  }
  GetRuntimeName(request: GetRuntimeNameRequest): Promise<GetRuntimeNameResponse> {
    const data = GetRuntimeNameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRuntimeName", data);
    return promise.then((data) => GetRuntimeNameResponse.decode(_m0.Reader.create(data)));
  }

  GetRuntimeVersion(request: GetRuntimeVersionRequest): Promise<GetRuntimeVersionResponse> {
    const data = GetRuntimeVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRuntimeVersion", data);
    return promise.then((data) => GetRuntimeVersionResponse.decode(_m0.Reader.create(data)));
  }

  ValidateSetConfig(request: ValidateSetConfigRequest): Promise<ValidateSetConfigResponse> {
    const data = ValidateSetConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidateSetConfig", data);
    return promise.then((data) => ValidateSetConfigResponse.decode(_m0.Reader.create(data)));
  }

  GetDataItem(request: GetDataItemRequest): Promise<GetDataItemResponse> {
    const data = GetDataItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDataItem", data);
    return promise.then((data) => GetDataItemResponse.decode(_m0.Reader.create(data)));
  }

  PrevalidateDataItem(request: PrevalidateDataItemRequest): Promise<PrevalidateDataItemResponse> {
    const data = PrevalidateDataItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PrevalidateDataItem", data);
    return promise.then((data) => PrevalidateDataItemResponse.decode(_m0.Reader.create(data)));
  }

  TransformDataItem(request: TransformDataItemRequest): Promise<TransformDataItemResponse> {
    const data = TransformDataItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TransformDataItem", data);
    return promise.then((data) => TransformDataItemResponse.decode(_m0.Reader.create(data)));
  }

  ValidateDataItem(request: ValidateDataItemRequest): Promise<ValidateDataItemResponse> {
    const data = ValidateDataItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidateDataItem", data);
    return promise.then((data) => ValidateDataItemResponse.decode(_m0.Reader.create(data)));
  }

  SummarizeDataBundle(request: SummarizeDataBundleRequest): Promise<SummarizeDataBundleResponse> {
    const data = SummarizeDataBundleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SummarizeDataBundle", data);
    return promise.then((data) => SummarizeDataBundleResponse.decode(_m0.Reader.create(data)));
  }

  NextKey(request: NextKeyRequest): Promise<NextKeyResponse> {
    const data = NextKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NextKey", data);
    return promise.then((data) => NextKeyResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
