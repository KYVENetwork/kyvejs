"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeServiceClientImpl = exports.RuntimeServiceServiceName = exports.NextKeyResponse = exports.NextKeyRequest = exports.SummarizeDataBundleResponse = exports.SummarizeDataBundleRequest = exports.ValidateDataItemResponse = exports.ValidateDataItemRequest = exports.TransformDataItemResponse = exports.TransformDataItemRequest = exports.PrevalidateDataItemResponse = exports.PrevalidateDataItemRequest = exports.GetDataItemResponse = exports.GetDataItemRequest = exports.ValidateSetConfigResponse = exports.ValidateSetConfigRequest = exports.GetRuntimeVersionResponse = exports.GetRuntimeVersionRequest = exports.GetRuntimeNameResponse = exports.GetRuntimeNameRequest = exports.RuntimeConfig = exports.DataItem = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "";
function createBaseDataItem() {
    return { key: "", value: "" };
}
exports.DataItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDataItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create: function (base) {
        return exports.DataItem.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDataItem();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRuntimeConfig() {
    return { serialized_config: "" };
}
exports.RuntimeConfig = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.serialized_config !== "") {
            writer.uint32(10).string(message.serialized_config);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRuntimeConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { serialized_config: isSet(object.serialized_config) ? String(object.serialized_config) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.serialized_config !== "") {
            obj.serialized_config = message.serialized_config;
        }
        return obj;
    },
    create: function (base) {
        return exports.RuntimeConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRuntimeConfig();
        message.serialized_config = (_a = object.serialized_config) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetRuntimeNameRequest() {
    return {};
}
exports.GetRuntimeNameRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetRuntimeNameRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.GetRuntimeNameRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetRuntimeNameRequest();
        return message;
    },
};
function createBaseGetRuntimeNameResponse() {
    return { name: "" };
}
exports.GetRuntimeNameResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetRuntimeNameResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetRuntimeNameResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetRuntimeNameResponse();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetRuntimeVersionRequest() {
    return {};
}
exports.GetRuntimeVersionRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetRuntimeVersionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.GetRuntimeVersionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetRuntimeVersionRequest();
        return message;
    },
};
function createBaseGetRuntimeVersionResponse() {
    return { version: "" };
}
exports.GetRuntimeVersionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetRuntimeVersionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { version: isSet(object.version) ? String(object.version) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetRuntimeVersionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetRuntimeVersionResponse();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseValidateSetConfigRequest() {
    return { raw_config: "" };
}
exports.ValidateSetConfigRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.raw_config !== "") {
            writer.uint32(10).string(message.raw_config);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidateSetConfigRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { raw_config: isSet(object.raw_config) ? String(object.raw_config) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.raw_config !== "") {
            obj.raw_config = message.raw_config;
        }
        return obj;
    },
    create: function (base) {
        return exports.ValidateSetConfigRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidateSetConfigRequest();
        message.raw_config = (_a = object.raw_config) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseValidateSetConfigResponse() {
    return { serialized_config: "" };
}
exports.ValidateSetConfigResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.serialized_config !== "") {
            writer.uint32(10).string(message.serialized_config);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidateSetConfigResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { serialized_config: isSet(object.serialized_config) ? String(object.serialized_config) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.serialized_config !== "") {
            obj.serialized_config = message.serialized_config;
        }
        return obj;
    },
    create: function (base) {
        return exports.ValidateSetConfigResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidateSetConfigResponse();
        message.serialized_config = (_a = object.serialized_config) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetDataItemRequest() {
    return { config: undefined, key: "" };
}
exports.GetDataItemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetDataItemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.config = exports.RuntimeConfig.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            config: isSet(object.config) ? exports.RuntimeConfig.fromJSON(object.config) : undefined,
            key: isSet(object.key) ? String(object.key) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.config !== undefined) {
            obj.config = exports.RuntimeConfig.toJSON(message.config);
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetDataItemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetDataItemRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.RuntimeConfig.fromPartial(object.config)
            : undefined;
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetDataItemResponse() {
    return { data_item: undefined };
}
exports.GetDataItemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.data_item !== undefined) {
            exports.DataItem.encode(message.data_item, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetDataItemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data_item = exports.DataItem.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { data_item: isSet(object.data_item) ? exports.DataItem.fromJSON(object.data_item) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.data_item !== undefined) {
            obj.data_item = exports.DataItem.toJSON(message.data_item);
        }
        return obj;
    },
    create: function (base) {
        return exports.GetDataItemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetDataItemResponse();
        message.data_item = (object.data_item !== undefined && object.data_item !== null)
            ? exports.DataItem.fromPartial(object.data_item)
            : undefined;
        return message;
    },
};
function createBasePrevalidateDataItemRequest() {
    return { config: undefined, data_item: undefined };
}
exports.PrevalidateDataItemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.data_item !== undefined) {
            exports.DataItem.encode(message.data_item, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrevalidateDataItemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.config = exports.RuntimeConfig.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data_item = exports.DataItem.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            config: isSet(object.config) ? exports.RuntimeConfig.fromJSON(object.config) : undefined,
            data_item: isSet(object.data_item) ? exports.DataItem.fromJSON(object.data_item) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.config !== undefined) {
            obj.config = exports.RuntimeConfig.toJSON(message.config);
        }
        if (message.data_item !== undefined) {
            obj.data_item = exports.DataItem.toJSON(message.data_item);
        }
        return obj;
    },
    create: function (base) {
        return exports.PrevalidateDataItemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBasePrevalidateDataItemRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.RuntimeConfig.fromPartial(object.config)
            : undefined;
        message.data_item = (object.data_item !== undefined && object.data_item !== null)
            ? exports.DataItem.fromPartial(object.data_item)
            : undefined;
        return message;
    },
};
function createBasePrevalidateDataItemResponse() {
    return { valid: false };
}
exports.PrevalidateDataItemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.valid === true) {
            writer.uint32(8).bool(message.valid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrevalidateDataItemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { valid: isSet(object.valid) ? Boolean(object.valid) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.valid === true) {
            obj.valid = message.valid;
        }
        return obj;
    },
    create: function (base) {
        return exports.PrevalidateDataItemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePrevalidateDataItemResponse();
        message.valid = (_a = object.valid) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseTransformDataItemRequest() {
    return { config: undefined, data_item: undefined };
}
exports.TransformDataItemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.data_item !== undefined) {
            exports.DataItem.encode(message.data_item, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransformDataItemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.config = exports.RuntimeConfig.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data_item = exports.DataItem.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            config: isSet(object.config) ? exports.RuntimeConfig.fromJSON(object.config) : undefined,
            data_item: isSet(object.data_item) ? exports.DataItem.fromJSON(object.data_item) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.config !== undefined) {
            obj.config = exports.RuntimeConfig.toJSON(message.config);
        }
        if (message.data_item !== undefined) {
            obj.data_item = exports.DataItem.toJSON(message.data_item);
        }
        return obj;
    },
    create: function (base) {
        return exports.TransformDataItemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseTransformDataItemRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.RuntimeConfig.fromPartial(object.config)
            : undefined;
        message.data_item = (object.data_item !== undefined && object.data_item !== null)
            ? exports.DataItem.fromPartial(object.data_item)
            : undefined;
        return message;
    },
};
function createBaseTransformDataItemResponse() {
    return { transformed_data_item: undefined };
}
exports.TransformDataItemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.transformed_data_item !== undefined) {
            exports.DataItem.encode(message.transformed_data_item, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransformDataItemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transformed_data_item = exports.DataItem.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            transformed_data_item: isSet(object.transformed_data_item)
                ? exports.DataItem.fromJSON(object.transformed_data_item)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.transformed_data_item !== undefined) {
            obj.transformed_data_item = exports.DataItem.toJSON(message.transformed_data_item);
        }
        return obj;
    },
    create: function (base) {
        return exports.TransformDataItemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseTransformDataItemResponse();
        message.transformed_data_item =
            (object.transformed_data_item !== undefined && object.transformed_data_item !== null)
                ? exports.DataItem.fromPartial(object.transformed_data_item)
                : undefined;
        return message;
    },
};
function createBaseValidateDataItemRequest() {
    return { config: undefined, proposed_data_item: undefined, validation_data_item: undefined };
}
exports.ValidateDataItemRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposed_data_item !== undefined) {
            exports.DataItem.encode(message.proposed_data_item, writer.uint32(18).fork()).ldelim();
        }
        if (message.validation_data_item !== undefined) {
            exports.DataItem.encode(message.validation_data_item, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidateDataItemRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.config = exports.RuntimeConfig.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proposed_data_item = exports.DataItem.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.validation_data_item = exports.DataItem.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            config: isSet(object.config) ? exports.RuntimeConfig.fromJSON(object.config) : undefined,
            proposed_data_item: isSet(object.proposed_data_item) ? exports.DataItem.fromJSON(object.proposed_data_item) : undefined,
            validation_data_item: isSet(object.validation_data_item)
                ? exports.DataItem.fromJSON(object.validation_data_item)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.config !== undefined) {
            obj.config = exports.RuntimeConfig.toJSON(message.config);
        }
        if (message.proposed_data_item !== undefined) {
            obj.proposed_data_item = exports.DataItem.toJSON(message.proposed_data_item);
        }
        if (message.validation_data_item !== undefined) {
            obj.validation_data_item = exports.DataItem.toJSON(message.validation_data_item);
        }
        return obj;
    },
    create: function (base) {
        return exports.ValidateDataItemRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseValidateDataItemRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.RuntimeConfig.fromPartial(object.config)
            : undefined;
        message.proposed_data_item = (object.proposed_data_item !== undefined && object.proposed_data_item !== null)
            ? exports.DataItem.fromPartial(object.proposed_data_item)
            : undefined;
        message.validation_data_item = (object.validation_data_item !== undefined && object.validation_data_item !== null)
            ? exports.DataItem.fromPartial(object.validation_data_item)
            : undefined;
        return message;
    },
};
function createBaseValidateDataItemResponse() {
    return { valid: false };
}
exports.ValidateDataItemResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.valid === true) {
            writer.uint32(8).bool(message.valid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidateDataItemResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { valid: isSet(object.valid) ? Boolean(object.valid) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.valid === true) {
            obj.valid = message.valid;
        }
        return obj;
    },
    create: function (base) {
        return exports.ValidateDataItemResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidateDataItemResponse();
        message.valid = (_a = object.valid) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseSummarizeDataBundleRequest() {
    return { config: undefined, bundle: [] };
}
exports.SummarizeDataBundleRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.bundle; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DataItem.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSummarizeDataBundleRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.config = exports.RuntimeConfig.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bundle.push(exports.DataItem.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            config: isSet(object.config) ? exports.RuntimeConfig.fromJSON(object.config) : undefined,
            bundle: Array.isArray(object === null || object === void 0 ? void 0 : object.bundle) ? object.bundle.map(function (e) { return exports.DataItem.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if (message.config !== undefined) {
            obj.config = exports.RuntimeConfig.toJSON(message.config);
        }
        if ((_a = message.bundle) === null || _a === void 0 ? void 0 : _a.length) {
            obj.bundle = message.bundle.map(function (e) { return exports.DataItem.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.SummarizeDataBundleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSummarizeDataBundleRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.RuntimeConfig.fromPartial(object.config)
            : undefined;
        message.bundle = ((_a = object.bundle) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DataItem.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSummarizeDataBundleResponse() {
    return { summary: "" };
}
exports.SummarizeDataBundleResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.summary !== "") {
            writer.uint32(10).string(message.summary);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSummarizeDataBundleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { summary: isSet(object.summary) ? String(object.summary) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.summary !== "") {
            obj.summary = message.summary;
        }
        return obj;
    },
    create: function (base) {
        return exports.SummarizeDataBundleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSummarizeDataBundleResponse();
        message.summary = (_a = object.summary) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseNextKeyRequest() {
    return { config: undefined, key: "" };
}
exports.NextKeyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.config !== undefined) {
            exports.RuntimeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNextKeyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.config = exports.RuntimeConfig.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            config: isSet(object.config) ? exports.RuntimeConfig.fromJSON(object.config) : undefined,
            key: isSet(object.key) ? String(object.key) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.config !== undefined) {
            obj.config = exports.RuntimeConfig.toJSON(message.config);
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        return obj;
    },
    create: function (base) {
        return exports.NextKeyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseNextKeyRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.RuntimeConfig.fromPartial(object.config)
            : undefined;
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseNextKeyResponse() {
    return { next_key: "" };
}
exports.NextKeyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.next_key !== "") {
            writer.uint32(10).string(message.next_key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNextKeyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return { next_key: isSet(object.next_key) ? String(object.next_key) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.next_key !== "") {
            obj.next_key = message.next_key;
        }
        return obj;
    },
    create: function (base) {
        return exports.NextKeyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseNextKeyResponse();
        message.next_key = (_a = object.next_key) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
exports.RuntimeServiceServiceName = "RuntimeService";
var RuntimeServiceClientImpl = /** @class */ (function () {
    function RuntimeServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.RuntimeServiceServiceName;
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
    RuntimeServiceClientImpl.prototype.GetRuntimeName = function (request) {
        var data = exports.GetRuntimeNameRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetRuntimeName", data);
        return promise.then(function (data) { return exports.GetRuntimeNameResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.GetRuntimeVersion = function (request) {
        var data = exports.GetRuntimeVersionRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetRuntimeVersion", data);
        return promise.then(function (data) { return exports.GetRuntimeVersionResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.ValidateSetConfig = function (request) {
        var data = exports.ValidateSetConfigRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ValidateSetConfig", data);
        return promise.then(function (data) { return exports.ValidateSetConfigResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.GetDataItem = function (request) {
        var data = exports.GetDataItemRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetDataItem", data);
        return promise.then(function (data) { return exports.GetDataItemResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.PrevalidateDataItem = function (request) {
        var data = exports.PrevalidateDataItemRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "PrevalidateDataItem", data);
        return promise.then(function (data) { return exports.PrevalidateDataItemResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.TransformDataItem = function (request) {
        var data = exports.TransformDataItemRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "TransformDataItem", data);
        return promise.then(function (data) { return exports.TransformDataItemResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.ValidateDataItem = function (request) {
        var data = exports.ValidateDataItemRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ValidateDataItem", data);
        return promise.then(function (data) { return exports.ValidateDataItemResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.SummarizeDataBundle = function (request) {
        var data = exports.SummarizeDataBundleRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "SummarizeDataBundle", data);
        return promise.then(function (data) { return exports.SummarizeDataBundleResponse.decode(_m0.Reader.create(data)); });
    };
    RuntimeServiceClientImpl.prototype.NextKey = function (request) {
        var data = exports.NextKeyRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "NextKey", data);
        return promise.then(function (data) { return exports.NextKeyResponse.decode(_m0.Reader.create(data)); });
    };
    return RuntimeServiceClientImpl;
}());
exports.RuntimeServiceClientImpl = RuntimeServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
