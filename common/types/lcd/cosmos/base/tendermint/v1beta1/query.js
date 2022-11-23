"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientImpl = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../../google/protobuf/any");
var types_1 = require("../../../../tendermint/p2p/types");
var block_1 = require("../../../../tendermint/types/block");
var types_2 = require("../../../../tendermint/types/types");
var pagination_1 = require("../../query/v1beta1/pagination");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return { height: "0", pagination: undefined };
}
exports.GetValidatorSetByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            height: isSet(object.height) ? String(object.height) : "0",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetValidatorSetByHeightRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetValidatorSetByHeightResponse() {
    return { block_height: "0", validators: [], pagination: undefined };
}
exports.GetValidatorSetByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block_height !== "0") {
            writer.uint32(8).int64(message.block_height);
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToString(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            block_height: isSet(object.block_height) ? String(object.block_height) : "0",
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block_height !== undefined && (obj.block_height = message.block_height);
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetValidatorSetByHeightResponse();
        message.block_height = (_a = object.block_height) !== null && _a !== void 0 ? _a : "0";
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetRequest() {
    return { pagination: undefined };
}
exports.GetLatestValidatorSetRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestValidatorSetRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetLatestValidatorSetRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetResponse() {
    return { block_height: "0", validators: [], pagination: undefined };
}
exports.GetLatestValidatorSetResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block_height !== "0") {
            writer.uint32(8).int64(message.block_height);
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToString(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            block_height: isSet(object.block_height) ? String(object.block_height) : "0",
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block_height !== undefined && (obj.block_height = message.block_height);
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetLatestValidatorSetResponse();
        message.block_height = (_a = object.block_height) !== null && _a !== void 0 ? _a : "0";
        message.validators = ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseValidator() {
    return { address: "", pub_key: undefined, voting_power: "0", proposer_priority: "0" };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== "0") {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== "0") {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = longToString(reader.int64());
                    break;
                case 4:
                    message.proposer_priority = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            pub_key: isSet(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power) ? String(object.voting_power) : "0",
            proposer_priority: isSet(object.proposer_priority) ? String(object.proposer_priority) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = message.voting_power);
        message.proposer_priority !== undefined && (obj.proposer_priority = message.proposer_priority);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
            ? any_1.Any.fromPartial(object.pub_key)
            : undefined;
        message.voting_power = (_b = object.voting_power) !== null && _b !== void 0 ? _b : "0";
        message.proposer_priority = (_c = object.proposer_priority) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseGetBlockByHeightRequest() {
    return { height: "0" };
}
exports.GetBlockByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { height: isSet(object.height) ? String(object.height) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBlockByHeightRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseGetBlockByHeightResponse() {
    return { block_id: undefined, block: undefined };
}
exports.GetBlockByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block_id !== undefined) {
            types_2.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_2.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            block_id: isSet(object.block_id) ? types_2.BlockID.fromJSON(object.block_id) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? types_2.BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetBlockByHeightResponse();
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? types_2.BlockID.fromPartial(object.block_id)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        return message;
    },
};
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
    fromPartial: function (_) {
        var message = createBaseGetLatestBlockRequest();
        return message;
    },
};
function createBaseGetLatestBlockResponse() {
    return { block_id: undefined, block: undefined };
}
exports.GetLatestBlockResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block_id !== undefined) {
            types_2.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_2.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            block_id: isSet(object.block_id) ? types_2.BlockID.fromJSON(object.block_id) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? types_2.BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetLatestBlockResponse();
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? types_2.BlockID.fromPartial(object.block_id)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        return message;
    },
};
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetSyncingRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
    fromPartial: function (_) {
        var message = createBaseGetSyncingRequest();
        return message;
    },
};
function createBaseGetSyncingResponse() {
    return { syncing: false };
}
exports.GetSyncingResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { syncing: isSet(object.syncing) ? Boolean(object.syncing) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetSyncingResponse();
        message.syncing = (_a = object.syncing) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetNodeInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
    fromPartial: function (_) {
        var message = createBaseGetNodeInfoRequest();
        return message;
    },
};
function createBaseGetNodeInfoResponse() {
    return { node_info: undefined, application_version: undefined };
}
exports.GetNodeInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.node_info !== undefined) {
            types_1.NodeInfo.encode(message.node_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.application_version !== undefined) {
            exports.VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.node_info = types_1.NodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.application_version = exports.VersionInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            node_info: isSet(object.node_info) ? types_1.NodeInfo.fromJSON(object.node_info) : undefined,
            application_version: isSet(object.application_version)
                ? exports.VersionInfo.fromJSON(object.application_version)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.node_info !== undefined &&
            (obj.node_info = message.node_info ? types_1.NodeInfo.toJSON(message.node_info) : undefined);
        message.application_version !== undefined && (obj.application_version = message.application_version
            ? exports.VersionInfo.toJSON(message.application_version)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetNodeInfoResponse();
        message.node_info = (object.node_info !== undefined && object.node_info !== null)
            ? types_1.NodeInfo.fromPartial(object.node_info)
            : undefined;
        message.application_version = (object.application_version !== undefined && object.application_version !== null)
            ? exports.VersionInfo.fromPartial(object.application_version)
            : undefined;
        return message;
    },
};
function createBaseVersionInfo() {
    return {
        name: "",
        app_name: "",
        version: "",
        git_commit: "",
        build_tags: "",
        go_version: "",
        build_deps: [],
        cosmos_sdk_version: "",
    };
}
exports.VersionInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.app_name !== "") {
            writer.uint32(18).string(message.app_name);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.git_commit !== "") {
            writer.uint32(34).string(message.git_commit);
        }
        if (message.build_tags !== "") {
            writer.uint32(42).string(message.build_tags);
        }
        if (message.go_version !== "") {
            writer.uint32(50).string(message.go_version);
        }
        for (var _i = 0, _a = message.build_deps; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmos_sdk_version !== "") {
            writer.uint32(66).string(message.cosmos_sdk_version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVersionInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.app_name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.git_commit = reader.string();
                    break;
                case 5:
                    message.build_tags = reader.string();
                    break;
                case 6:
                    message.go_version = reader.string();
                    break;
                case 7:
                    message.build_deps.push(exports.Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmos_sdk_version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            app_name: isSet(object.app_name) ? String(object.app_name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            git_commit: isSet(object.git_commit) ? String(object.git_commit) : "",
            build_tags: isSet(object.build_tags) ? String(object.build_tags) : "",
            go_version: isSet(object.go_version) ? String(object.go_version) : "",
            build_deps: Array.isArray(object === null || object === void 0 ? void 0 : object.build_deps) ? object.build_deps.map(function (e) { return exports.Module.fromJSON(e); }) : [],
            cosmos_sdk_version: isSet(object.cosmos_sdk_version) ? String(object.cosmos_sdk_version) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.app_name !== undefined && (obj.app_name = message.app_name);
        message.version !== undefined && (obj.version = message.version);
        message.git_commit !== undefined && (obj.git_commit = message.git_commit);
        message.build_tags !== undefined && (obj.build_tags = message.build_tags);
        message.go_version !== undefined && (obj.go_version = message.go_version);
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map(function (e) { return e ? exports.Module.toJSON(e) : undefined; });
        }
        else {
            obj.build_deps = [];
        }
        message.cosmos_sdk_version !== undefined && (obj.cosmos_sdk_version = message.cosmos_sdk_version);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseVersionInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.app_name = (_b = object.app_name) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.git_commit = (_d = object.git_commit) !== null && _d !== void 0 ? _d : "";
        message.build_tags = (_e = object.build_tags) !== null && _e !== void 0 ? _e : "";
        message.go_version = (_f = object.go_version) !== null && _f !== void 0 ? _f : "";
        message.build_deps = ((_g = object.build_deps) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.Module.fromPartial(e); })) || [];
        message.cosmos_sdk_version = (_h = object.cosmos_sdk_version) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseModule() {
    return { path: "", version: "", sum: "" };
}
exports.Module = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseModule();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.sum = (_c = object.sum) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.base.tendermint.v1beta1.Service";
        this.rpc = rpc;
        this.GetNodeInfo = this.GetNodeInfo.bind(this);
        this.GetSyncing = this.GetSyncing.bind(this);
        this.GetLatestBlock = this.GetLatestBlock.bind(this);
        this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
        this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
        this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
    }
    ServiceClientImpl.prototype.GetNodeInfo = function (request) {
        var data = exports.GetNodeInfoRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetNodeInfo", data);
        return promise.then(function (data) { return exports.GetNodeInfoResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetSyncing = function (request) {
        var data = exports.GetSyncingRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetSyncing", data);
        return promise.then(function (data) { return exports.GetSyncingResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetLatestBlock = function (request) {
        var data = exports.GetLatestBlockRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetLatestBlock", data);
        return promise.then(function (data) { return exports.GetLatestBlockResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetBlockByHeight = function (request) {
        var data = exports.GetBlockByHeightRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetBlockByHeight", data);
        return promise.then(function (data) { return exports.GetBlockByHeightResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetLatestValidatorSet = function (request) {
        var data = exports.GetLatestValidatorSetRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetLatestValidatorSet", data);
        return promise.then(function (data) { return exports.GetLatestValidatorSetResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetValidatorSetByHeight = function (request) {
        var data = exports.GetValidatorSetByHeightRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetValidatorSetByHeight", data);
        return promise.then(function (data) { return exports.GetValidatorSetByHeightResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map