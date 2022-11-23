"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPoolOutOfFunds = exports.EventPoolFundsSlashed = exports.EventDefundPool = exports.EventFundPool = exports.EventCreatePool = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseEventCreatePool() {
    return {
        id: "0",
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
exports.EventCreatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
        var message = createBaseEventCreatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
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
            id: isSet(object.id) ? String(object.id) : "0",
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
        message.id !== undefined && (obj.id = message.id);
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
        var message = createBaseEventCreatePool();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
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
function createBaseEventFundPool() {
    return { pool_id: "0", address: "", amount: "0" };
}
exports.EventFundPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventFundPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            address: isSet(object.address) ? String(object.address) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.address !== undefined && (obj.address = message.address);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventFundPool();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventDefundPool() {
    return { pool_id: "0", address: "", amount: "0" };
}
exports.EventDefundPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventDefundPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            address: isSet(object.address) ? String(object.address) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.address !== undefined && (obj.address = message.address);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventDefundPool();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventPoolFundsSlashed() {
    return { pool_id: "0", address: "", amount: "0" };
}
exports.EventPoolFundsSlashed = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventPoolFundsSlashed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            address: isSet(object.address) ? String(object.address) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.address !== undefined && (obj.address = message.address);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventPoolFundsSlashed();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventPoolOutOfFunds() {
    return { pool_id: "0" };
}
exports.EventPoolOutOfFunds = {
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
        var message = createBaseEventPoolOutOfFunds();
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
        var message = createBaseEventPoolOutOfFunds();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
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
//# sourceMappingURL=events.js.map