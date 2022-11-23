"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBundlesClientImpl = exports.QueryCanVoteResponse = exports.QueryCanVoteRequest = exports.QueryCanProposeResponse = exports.QueryCanProposeRequest = exports.QueryCanValidateResponse = exports.QueryCanValidateRequest = exports.QueryCurrentVoteStatusResponse = exports.QueryCurrentVoteStatusRequest = exports.QueryFinalizedBundlesByHeightResponse = exports.QueryFinalizedBundlesByHeightRequest = exports.QueryFinalizedBundleByStorageIdResponse = exports.QueryFinalizedBundleByStorageIdRequest = exports.QueryFinalizedBundleResponse = exports.QueryFinalizedBundleRequest = exports.QueryFinalizedBundlesResponse = exports.QueryFinalizedBundlesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
var bundles_1 = require("../../bundles/v1beta1/bundles");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseQueryFinalizedBundlesRequest() {
    return { pagination: undefined, pool_id: "0" };
}
exports.QueryFinalizedBundlesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundlesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryFinalizedBundlesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryFinalizedBundlesResponse() {
    return { finalized_bundles: [], pagination: undefined };
}
exports.QueryFinalizedBundlesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.finalized_bundles; _i < _a.length; _i++) {
            var v = _a[_i];
            bundles_1.FinalizedBundle.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundlesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.finalized_bundles.push(bundles_1.FinalizedBundle.decode(reader, reader.uint32()));
                    break;
                case 2:
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
            finalized_bundles: Array.isArray(object === null || object === void 0 ? void 0 : object.finalized_bundles)
                ? object.finalized_bundles.map(function (e) { return bundles_1.FinalizedBundle.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.finalized_bundles) {
            obj.finalized_bundles = message.finalized_bundles.map(function (e) { return e ? bundles_1.FinalizedBundle.toJSON(e) : undefined; });
        }
        else {
            obj.finalized_bundles = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryFinalizedBundlesResponse();
        message.finalized_bundles = ((_a = object.finalized_bundles) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bundles_1.FinalizedBundle.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryFinalizedBundleRequest() {
    return { pool_id: "0", id: "0" };
}
exports.QueryFinalizedBundleRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundleRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            id: isSet(object.id) ? String(object.id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryFinalizedBundleRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseQueryFinalizedBundleResponse() {
    return { finalized_bundle: undefined };
}
exports.QueryFinalizedBundleResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.finalized_bundle !== undefined) {
            bundles_1.FinalizedBundle.encode(message.finalized_bundle, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.finalized_bundle = bundles_1.FinalizedBundle.decode(reader, reader.uint32());
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
            finalized_bundle: isSet(object.finalized_bundle) ? bundles_1.FinalizedBundle.fromJSON(object.finalized_bundle) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.finalized_bundle !== undefined &&
            (obj.finalized_bundle = message.finalized_bundle ? bundles_1.FinalizedBundle.toJSON(message.finalized_bundle) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryFinalizedBundleResponse();
        message.finalized_bundle = (object.finalized_bundle !== undefined && object.finalized_bundle !== null)
            ? bundles_1.FinalizedBundle.fromPartial(object.finalized_bundle)
            : undefined;
        return message;
    },
};
function createBaseQueryFinalizedBundleByStorageIdRequest() {
    return { storage_id: "" };
}
exports.QueryFinalizedBundleByStorageIdRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.storage_id !== "") {
            writer.uint32(10).string(message.storage_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundleByStorageIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { storage_id: isSet(object.storage_id) ? String(object.storage_id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryFinalizedBundleByStorageIdRequest();
        message.storage_id = (_a = object.storage_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFinalizedBundleByStorageIdResponse() {
    return { finalized_bundle: undefined };
}
exports.QueryFinalizedBundleByStorageIdResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.finalized_bundle !== undefined) {
            bundles_1.FinalizedBundle.encode(message.finalized_bundle, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundleByStorageIdResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.finalized_bundle = bundles_1.FinalizedBundle.decode(reader, reader.uint32());
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
            finalized_bundle: isSet(object.finalized_bundle) ? bundles_1.FinalizedBundle.fromJSON(object.finalized_bundle) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.finalized_bundle !== undefined &&
            (obj.finalized_bundle = message.finalized_bundle ? bundles_1.FinalizedBundle.toJSON(message.finalized_bundle) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryFinalizedBundleByStorageIdResponse();
        message.finalized_bundle = (object.finalized_bundle !== undefined && object.finalized_bundle !== null)
            ? bundles_1.FinalizedBundle.fromPartial(object.finalized_bundle)
            : undefined;
        return message;
    },
};
function createBaseQueryFinalizedBundlesByHeightRequest() {
    return { pool_id: "0", height: "0" };
}
exports.QueryFinalizedBundlesByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.height !== "0") {
            writer.uint32(16).uint64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundlesByHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.height = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryFinalizedBundlesByHeightRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseQueryFinalizedBundlesByHeightResponse() {
    return { finalized_bundle: undefined };
}
exports.QueryFinalizedBundlesByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.finalized_bundle !== undefined) {
            bundles_1.FinalizedBundle.encode(message.finalized_bundle, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFinalizedBundlesByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.finalized_bundle = bundles_1.FinalizedBundle.decode(reader, reader.uint32());
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
            finalized_bundle: isSet(object.finalized_bundle) ? bundles_1.FinalizedBundle.fromJSON(object.finalized_bundle) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.finalized_bundle !== undefined &&
            (obj.finalized_bundle = message.finalized_bundle ? bundles_1.FinalizedBundle.toJSON(message.finalized_bundle) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryFinalizedBundlesByHeightResponse();
        message.finalized_bundle = (object.finalized_bundle !== undefined && object.finalized_bundle !== null)
            ? bundles_1.FinalizedBundle.fromPartial(object.finalized_bundle)
            : undefined;
        return message;
    },
};
function createBaseQueryCurrentVoteStatusRequest() {
    return { pool_id: "0" };
}
exports.QueryCurrentVoteStatusRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCurrentVoteStatusRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryCurrentVoteStatusRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryCurrentVoteStatusResponse() {
    return { valid: "0", invalid: "0", abstain: "0", total: "0" };
}
exports.QueryCurrentVoteStatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.valid !== "0") {
            writer.uint32(8).uint64(message.valid);
        }
        if (message.invalid !== "0") {
            writer.uint32(16).uint64(message.invalid);
        }
        if (message.abstain !== "0") {
            writer.uint32(24).uint64(message.abstain);
        }
        if (message.total !== "0") {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCurrentVoteStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valid = longToString(reader.uint64());
                    break;
                case 2:
                    message.invalid = longToString(reader.uint64());
                    break;
                case 3:
                    message.abstain = longToString(reader.uint64());
                    break;
                case 4:
                    message.total = longToString(reader.uint64());
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
            valid: isSet(object.valid) ? String(object.valid) : "0",
            invalid: isSet(object.invalid) ? String(object.invalid) : "0",
            abstain: isSet(object.abstain) ? String(object.abstain) : "0",
            total: isSet(object.total) ? String(object.total) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.valid !== undefined && (obj.valid = message.valid);
        message.invalid !== undefined && (obj.invalid = message.invalid);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.total !== undefined && (obj.total = message.total);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseQueryCurrentVoteStatusResponse();
        message.valid = (_a = object.valid) !== null && _a !== void 0 ? _a : "0";
        message.invalid = (_b = object.invalid) !== null && _b !== void 0 ? _b : "0";
        message.abstain = (_c = object.abstain) !== null && _c !== void 0 ? _c : "0";
        message.total = (_d = object.total) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseQueryCanValidateRequest() {
    return { pool_id: "0", valaddress: "" };
}
exports.QueryCanValidateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.valaddress !== "") {
            writer.uint32(18).string(message.valaddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanValidateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.valaddress = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.valaddress !== undefined && (obj.valaddress = message.valaddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryCanValidateRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.valaddress = (_b = object.valaddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryCanValidateResponse() {
    return { possible: false, reason: "" };
}
exports.QueryCanValidateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.possible === true) {
            writer.uint32(8).bool(message.possible);
        }
        if (message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanValidateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.possible = reader.bool();
                    break;
                case 2:
                    message.reason = reader.string();
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
            possible: isSet(object.possible) ? Boolean(object.possible) : false,
            reason: isSet(object.reason) ? String(object.reason) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.possible !== undefined && (obj.possible = message.possible);
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryCanValidateResponse();
        message.possible = (_a = object.possible) !== null && _a !== void 0 ? _a : false;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryCanProposeRequest() {
    return { pool_id: "0", staker: "", proposer: "", from_index: "0" };
}
exports.QueryCanProposeRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        if (message.from_index !== "0") {
            writer.uint32(32).uint64(message.from_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanProposeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.proposer = reader.string();
                    break;
                case 4:
                    message.from_index = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            from_index: isSet(object.from_index) ? String(object.from_index) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.from_index !== undefined && (obj.from_index = message.from_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseQueryCanProposeRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.proposer = (_c = object.proposer) !== null && _c !== void 0 ? _c : "";
        message.from_index = (_d = object.from_index) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseQueryCanProposeResponse() {
    return { possible: false, reason: "" };
}
exports.QueryCanProposeResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.possible === true) {
            writer.uint32(8).bool(message.possible);
        }
        if (message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanProposeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.possible = reader.bool();
                    break;
                case 2:
                    message.reason = reader.string();
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
            possible: isSet(object.possible) ? Boolean(object.possible) : false,
            reason: isSet(object.reason) ? String(object.reason) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.possible !== undefined && (obj.possible = message.possible);
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryCanProposeResponse();
        message.possible = (_a = object.possible) !== null && _a !== void 0 ? _a : false;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryCanVoteRequest() {
    return { pool_id: "0", staker: "", voter: "", storage_id: "" };
}
exports.QueryCanVoteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.voter !== "") {
            writer.uint32(26).string(message.voter);
        }
        if (message.storage_id !== "") {
            writer.uint32(34).string(message.storage_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanVoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.voter = reader.string();
                    break;
                case 4:
                    message.storage_id = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            voter: isSet(object.voter) ? String(object.voter) : "",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.voter !== undefined && (obj.voter = message.voter);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseQueryCanVoteRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.voter = (_c = object.voter) !== null && _c !== void 0 ? _c : "";
        message.storage_id = (_d = object.storage_id) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseQueryCanVoteResponse() {
    return { possible: false, reason: "" };
}
exports.QueryCanVoteResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.possible === true) {
            writer.uint32(8).bool(message.possible);
        }
        if (message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanVoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.possible = reader.bool();
                    break;
                case 2:
                    message.reason = reader.string();
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
            possible: isSet(object.possible) ? Boolean(object.possible) : false,
            reason: isSet(object.reason) ? String(object.reason) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.possible !== undefined && (obj.possible = message.possible);
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryCanVoteResponse();
        message.possible = (_a = object.possible) !== null && _a !== void 0 ? _a : false;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
var QueryBundlesClientImpl = /** @class */ (function () {
    function QueryBundlesClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.query.v1beta1.QueryBundles";
        this.rpc = rpc;
        this.FinalizedBundles = this.FinalizedBundles.bind(this);
        this.FinalizedBundle = this.FinalizedBundle.bind(this);
        this.FinalizedBundleByStorageId = this.FinalizedBundleByStorageId.bind(this);
        this.FinalizedBundlesByHeight = this.FinalizedBundlesByHeight.bind(this);
        this.CurrentVoteStatus = this.CurrentVoteStatus.bind(this);
        this.CanValidate = this.CanValidate.bind(this);
        this.CanPropose = this.CanPropose.bind(this);
        this.CanVote = this.CanVote.bind(this);
    }
    QueryBundlesClientImpl.prototype.FinalizedBundles = function (request) {
        var data = exports.QueryFinalizedBundlesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "FinalizedBundles", data);
        return promise.then(function (data) { return exports.QueryFinalizedBundlesResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.FinalizedBundle = function (request) {
        var data = exports.QueryFinalizedBundleRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "FinalizedBundle", data);
        return promise.then(function (data) { return exports.QueryFinalizedBundleResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.FinalizedBundleByStorageId = function (request) {
        var data = exports.QueryFinalizedBundleByStorageIdRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "FinalizedBundleByStorageId", data);
        return promise.then(function (data) { return exports.QueryFinalizedBundleByStorageIdResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.FinalizedBundlesByHeight = function (request) {
        var data = exports.QueryFinalizedBundlesByHeightRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "FinalizedBundlesByHeight", data);
        return promise.then(function (data) { return exports.QueryFinalizedBundlesByHeightResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.CurrentVoteStatus = function (request) {
        var data = exports.QueryCurrentVoteStatusRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CurrentVoteStatus", data);
        return promise.then(function (data) { return exports.QueryCurrentVoteStatusResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.CanValidate = function (request) {
        var data = exports.QueryCanValidateRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CanValidate", data);
        return promise.then(function (data) { return exports.QueryCanValidateResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.CanPropose = function (request) {
        var data = exports.QueryCanProposeRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CanPropose", data);
        return promise.then(function (data) { return exports.QueryCanProposeResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryBundlesClientImpl.prototype.CanVote = function (request) {
        var data = exports.QueryCanVoteRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CanVote", data);
        return promise.then(function (data) { return exports.QueryCanVoteResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryBundlesClientImpl;
}());
exports.QueryBundlesClientImpl = QueryBundlesClientImpl;
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
//# sourceMappingURL=bundles.js.map