"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventWithdrawRewards = exports.EventRedelegate = exports.EventUndelegate = exports.EventDelegate = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseEventDelegate() {
    return { address: "", staker: "", amount: "0" };
}
exports.EventDelegate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventDelegate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventDelegate();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventUndelegate() {
    return { address: "", staker: "", amount: "0" };
}
exports.EventUndelegate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUndelegate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventUndelegate();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventRedelegate() {
    return { address: "", from_staker: "", to_staker: "", amount: "0" };
}
exports.EventRedelegate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.from_staker !== "") {
            writer.uint32(18).string(message.from_staker);
        }
        if (message.to_staker !== "") {
            writer.uint32(26).string(message.to_staker);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventRedelegate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.from_staker = reader.string();
                    break;
                case 3:
                    message.to_staker = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            from_staker: isSet(object.from_staker) ? String(object.from_staker) : "",
            to_staker: isSet(object.to_staker) ? String(object.to_staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.from_staker !== undefined && (obj.from_staker = message.from_staker);
        message.to_staker !== undefined && (obj.to_staker = message.to_staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventRedelegate();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.from_staker = (_b = object.from_staker) !== null && _b !== void 0 ? _b : "";
        message.to_staker = (_c = object.to_staker) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseEventWithdrawRewards() {
    return { address: "", staker: "", amount: "0" };
}
exports.EventWithdrawRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventWithdrawRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventWithdrawRewards();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
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