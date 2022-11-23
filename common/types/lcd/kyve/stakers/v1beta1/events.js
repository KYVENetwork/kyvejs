"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLeavePool = exports.EventJoinPool = exports.EventUpdateCommission = exports.EventSlash = exports.EventUpdateMetadata = exports.EventCreateStaker = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var stakers_1 = require("./stakers");
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseEventCreateStaker() {
    return { staker: "", amount: "0" };
}
exports.EventCreateStaker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.amount !== "0") {
            writer.uint32(16).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateStaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEventCreateStaker();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseEventUpdateMetadata() {
    return { staker: "", moniker: "", website: "", logo: "" };
}
exports.EventUpdateMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.logo !== "") {
            writer.uint32(34).string(message.logo);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventUpdateMetadata();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
        message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventSlash() {
    return { pool_id: "0", staker: "", amount: "0", slash_type: stakers_1.SlashType.SLASH_TYPE_UNSPECIFIED };
}
exports.EventSlash = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.slash_type !== stakers_1.SlashType.SLASH_TYPE_UNSPECIFIED) {
            writer.uint32(32).int32((0, stakers_1.slashTypeToNumber)(message.slash_type));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventSlash();
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
                    message.amount = longToString(reader.uint64());
                    break;
                case 4:
                    message.slash_type = (0, stakers_1.slashTypeFromJSON)(reader.int32());
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            slash_type: isSet(object.slash_type) ? (0, stakers_1.slashTypeFromJSON)(object.slash_type) : stakers_1.SlashType.SLASH_TYPE_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        message.slash_type !== undefined && (obj.slash_type = (0, stakers_1.slashTypeToJSON)(message.slash_type));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventSlash();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        message.slash_type = (_d = object.slash_type) !== null && _d !== void 0 ? _d : stakers_1.SlashType.SLASH_TYPE_UNSPECIFIED;
        return message;
    },
};
function createBaseEventUpdateCommission() {
    return { staker: "", commission: "" };
}
exports.EventUpdateCommission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.commission !== "") {
            writer.uint32(18).string(message.commission);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.commission = reader.string();
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            commission: isSet(object.commission) ? String(object.commission) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.commission !== undefined && (obj.commission = message.commission);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEventUpdateCommission();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.commission = (_b = object.commission) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventJoinPool() {
    return { pool_id: "0", staker: "", valaddress: "", amount: "0" };
}
exports.EventJoinPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.valaddress !== "") {
            writer.uint32(26).string(message.valaddress);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventJoinPool();
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
                    message.valaddress = reader.string();
                    break;
                case 4:
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.valaddress !== undefined && (obj.valaddress = message.valaddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventJoinPool();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.valaddress = (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseEventLeavePool() {
    return { pool_id: "0", staker: "" };
}
exports.EventLeavePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventLeavePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
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
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEventLeavePool();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
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