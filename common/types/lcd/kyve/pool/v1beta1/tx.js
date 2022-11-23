"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCancelRuntimeUpgradeResponse = exports.MsgCancelRuntimeUpgrade = exports.MsgScheduleRuntimeUpgradeResponse = exports.MsgScheduleRuntimeUpgrade = exports.MsgUnpausePoolResponse = exports.MsgUnpausePool = exports.MsgPausePoolResponse = exports.MsgPausePool = exports.MsgUpdatePoolResponse = exports.MsgUpdatePool = exports.MsgCreatePoolResponse = exports.MsgCreatePool = exports.MsgDefundPoolResponse = exports.MsgDefundPool = exports.MsgFundPoolResponse = exports.MsgFundPool = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseMsgFundPool() {
    return { creator: "", id: "0", amount: "0" };
}
exports.MsgFundPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgFundPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseMsgFundPoolResponse() {
    return {};
}
exports.MsgFundPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundPoolResponse();
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
        var message = createBaseMsgFundPoolResponse();
        return message;
    },
};
function createBaseMsgDefundPool() {
    return { creator: "", id: "0", amount: "0" };
}
exports.MsgDefundPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDefundPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgDefundPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseMsgDefundPoolResponse() {
    return {};
}
exports.MsgDefundPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDefundPoolResponse();
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
        var message = createBaseMsgDefundPoolResponse();
        return message;
    },
};
function createBaseMsgCreatePool() {
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
exports.MsgCreatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
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
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 8:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 9:
                    message.min_delegation = longToString(reader.uint64());
                    break;
                case 10:
                    message.max_bundle_size = longToString(reader.uint64());
                    break;
                case 11:
                    message.version = reader.string();
                    break;
                case 12:
                    message.binaries = reader.string();
                    break;
                case 13:
                    message.storage_provider_id = reader.uint32();
                    break;
                case 14:
                    message.compression_id = reader.uint32();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
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
            storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
            compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
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
        message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
        message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var message = createBaseMsgCreatePool();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        message.config = (_e = object.config) !== null && _e !== void 0 ? _e : "";
        message.start_key = (_f = object.start_key) !== null && _f !== void 0 ? _f : "";
        message.upload_interval = (_g = object.upload_interval) !== null && _g !== void 0 ? _g : "0";
        message.operating_cost = (_h = object.operating_cost) !== null && _h !== void 0 ? _h : "0";
        message.min_delegation = (_j = object.min_delegation) !== null && _j !== void 0 ? _j : "0";
        message.max_bundle_size = (_k = object.max_bundle_size) !== null && _k !== void 0 ? _k : "0";
        message.version = (_l = object.version) !== null && _l !== void 0 ? _l : "";
        message.binaries = (_m = object.binaries) !== null && _m !== void 0 ? _m : "";
        message.storage_provider_id = (_o = object.storage_provider_id) !== null && _o !== void 0 ? _o : 0;
        message.compression_id = (_p = object.compression_id) !== null && _p !== void 0 ? _p : 0;
        return message;
    },
};
function createBaseMsgCreatePoolResponse() {
    return {};
}
exports.MsgCreatePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePoolResponse();
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
        var message = createBaseMsgCreatePoolResponse();
        return message;
    },
};
function createBaseMsgUpdatePool() {
    return { authority: "", id: "0", payload: "" };
}
exports.MsgUpdatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.payload = reader.string();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            payload: isSet(object.payload) ? String(object.payload) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.id !== undefined && (obj.id = message.id);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUpdatePool();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdatePoolResponse() {
    return {};
}
exports.MsgUpdatePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdatePoolResponse();
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
        var message = createBaseMsgUpdatePoolResponse();
        return message;
    },
};
function createBaseMsgPausePool() {
    return { authority: "", id: "0" };
}
exports.MsgPausePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPausePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            id: isSet(object.id) ? String(object.id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgPausePool();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgPausePoolResponse() {
    return {};
}
exports.MsgPausePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgPausePoolResponse();
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
        var message = createBaseMsgPausePoolResponse();
        return message;
    },
};
function createBaseMsgUnpausePool() {
    return { authority: "", id: "0" };
}
exports.MsgUnpausePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnpausePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            id: isSet(object.id) ? String(object.id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUnpausePool();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgUnpausePoolResponse() {
    return {};
}
exports.MsgUnpausePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnpausePoolResponse();
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
        var message = createBaseMsgUnpausePoolResponse();
        return message;
    },
};
function createBaseMsgScheduleRuntimeUpgrade() {
    return { authority: "", runtime: "", version: "", scheduled_at: "0", duration: "0", binaries: "" };
}
exports.MsgScheduleRuntimeUpgrade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgScheduleRuntimeUpgrade();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.runtime = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.scheduled_at = longToString(reader.uint64());
                    break;
                case 5:
                    message.duration = longToString(reader.uint64());
                    break;
                case 6:
                    message.binaries = reader.string();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            version: isSet(object.version) ? String(object.version) : "",
            scheduled_at: isSet(object.scheduled_at) ? String(object.scheduled_at) : "0",
            duration: isSet(object.duration) ? String(object.duration) : "0",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.version !== undefined && (obj.version = message.version);
        message.scheduled_at !== undefined && (obj.scheduled_at = message.scheduled_at);
        message.duration !== undefined && (obj.duration = message.duration);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMsgScheduleRuntimeUpgrade();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.scheduled_at = (_d = object.scheduled_at) !== null && _d !== void 0 ? _d : "0";
        message.duration = (_e = object.duration) !== null && _e !== void 0 ? _e : "0";
        message.binaries = (_f = object.binaries) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgScheduleRuntimeUpgradeResponse() {
    return {};
}
exports.MsgScheduleRuntimeUpgradeResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgScheduleRuntimeUpgradeResponse();
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
        var message = createBaseMsgScheduleRuntimeUpgradeResponse();
        return message;
    },
};
function createBaseMsgCancelRuntimeUpgrade() {
    return { authority: "", runtime: "" };
}
exports.MsgCancelRuntimeUpgrade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.runtime !== "") {
            writer.uint32(18).string(message.runtime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelRuntimeUpgrade();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.runtime = reader.string();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgCancelRuntimeUpgrade();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgCancelRuntimeUpgradeResponse() {
    return {};
}
exports.MsgCancelRuntimeUpgradeResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelRuntimeUpgradeResponse();
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
        var message = createBaseMsgCancelRuntimeUpgradeResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.pool.v1beta1.Msg";
        this.rpc = rpc;
        this.FundPool = this.FundPool.bind(this);
        this.DefundPool = this.DefundPool.bind(this);
        this.CreatePool = this.CreatePool.bind(this);
        this.UpdatePool = this.UpdatePool.bind(this);
        this.PausePool = this.PausePool.bind(this);
        this.UnpausePool = this.UnpausePool.bind(this);
        this.ScheduleRuntimeUpgrade = this.ScheduleRuntimeUpgrade.bind(this);
        this.CancelRuntimeUpgrade = this.CancelRuntimeUpgrade.bind(this);
    }
    MsgClientImpl.prototype.FundPool = function (request) {
        var data = exports.MsgFundPool.encode(request).finish();
        var promise = this.rpc.request(this.service, "FundPool", data);
        return promise.then(function (data) { return exports.MsgFundPoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.DefundPool = function (request) {
        var data = exports.MsgDefundPool.encode(request).finish();
        var promise = this.rpc.request(this.service, "DefundPool", data);
        return promise.then(function (data) { return exports.MsgDefundPoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CreatePool = function (request) {
        var data = exports.MsgCreatePool.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreatePool", data);
        return promise.then(function (data) { return exports.MsgCreatePoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdatePool = function (request) {
        var data = exports.MsgUpdatePool.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdatePool", data);
        return promise.then(function (data) { return exports.MsgUpdatePoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.PausePool = function (request) {
        var data = exports.MsgPausePool.encode(request).finish();
        var promise = this.rpc.request(this.service, "PausePool", data);
        return promise.then(function (data) { return exports.MsgPausePoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UnpausePool = function (request) {
        var data = exports.MsgUnpausePool.encode(request).finish();
        var promise = this.rpc.request(this.service, "UnpausePool", data);
        return promise.then(function (data) { return exports.MsgUnpausePoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.ScheduleRuntimeUpgrade = function (request) {
        var data = exports.MsgScheduleRuntimeUpgrade.encode(request).finish();
        var promise = this.rpc.request(this.service, "ScheduleRuntimeUpgrade", data);
        return promise.then(function (data) { return exports.MsgScheduleRuntimeUpgradeResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CancelRuntimeUpgrade = function (request) {
        var data = exports.MsgCancelRuntimeUpgrade.encode(request).finish();
        var promise = this.rpc.request(this.service, "CancelRuntimeUpgrade", data);
        return promise.then(function (data) { return exports.MsgCancelRuntimeUpgradeResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map