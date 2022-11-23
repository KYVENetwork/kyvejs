"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var duration_1 = require("../../../google/protobuf/duration");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseBasicAllowance() {
    return { spend_limit: [], expiration: undefined };
}
exports.BasicAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.spend_limit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBasicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.spend_limit) ? object.spend_limit.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.spend_limit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBasicAllowance();
        message.spend_limit = ((_a = object.spend_limit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.expiration = (_b = object.expiration) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePeriodicAllowance() {
    return { basic: undefined, period: undefined, period_spend_limit: [], period_can_spend: [], period_reset: undefined };
}
exports.PeriodicAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.period_spend_limit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.period_can_spend; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.period_reset !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.period_reset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.period_spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.period_can_spend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.period_reset = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            basic: isSet(object.basic) ? exports.BasicAllowance.fromJSON(object.basic) : undefined,
            period: isSet(object.period) ? duration_1.Duration.fromJSON(object.period) : undefined,
            period_spend_limit: Array.isArray(object === null || object === void 0 ? void 0 : object.period_spend_limit)
                ? object.period_spend_limit.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            period_can_spend: Array.isArray(object === null || object === void 0 ? void 0 : object.period_can_spend)
                ? object.period_can_spend.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            period_reset: isSet(object.period_reset) ? fromJsonTimestamp(object.period_reset) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? exports.BasicAllowance.toJSON(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? duration_1.Duration.toJSON(message.period) : undefined);
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.period_can_spend = [];
        }
        message.period_reset !== undefined && (obj.period_reset = message.period_reset.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePeriodicAllowance();
        message.basic = (object.basic !== undefined && object.basic !== null)
            ? exports.BasicAllowance.fromPartial(object.basic)
            : undefined;
        message.period = (object.period !== undefined && object.period !== null)
            ? duration_1.Duration.fromPartial(object.period)
            : undefined;
        message.period_spend_limit = ((_a = object.period_spend_limit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.period_can_spend = ((_b = object.period_can_spend) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.period_reset = (_c = object.period_reset) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseAllowedMsgAllowance() {
    return { allowance: undefined, allowed_messages: [] };
}
exports.AllowedMsgAllowance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.allowed_messages; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allowed_messages.push(reader.string());
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
            allowance: isSet(object.allowance) ? any_1.Any.fromJSON(object.allowance) : undefined,
            allowed_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_messages)
                ? object.allowed_messages.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? any_1.Any.toJSON(message.allowance) : undefined);
        if (message.allowed_messages) {
            obj.allowed_messages = message.allowed_messages.map(function (e) { return e; });
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAllowedMsgAllowance();
        message.allowance = (object.allowance !== undefined && object.allowance !== null)
            ? any_1.Any.fromPartial(object.allowance)
            : undefined;
        message.allowed_messages = ((_a = object.allowed_messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseGrant() {
    return { granter: "", grantee: "", allowance: undefined };
}
exports.Grant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = any_1.Any.decode(reader, reader.uint32());
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            allowance: isSet(object.allowance) ? any_1.Any.fromJSON(object.allowance) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? any_1.Any.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGrant();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.allowance = (object.allowance !== undefined && object.allowance !== null)
            ? any_1.Any.fromPartial(object.allowance)
            : undefined;
        return message;
    },
};
function toTimestamp(date) {
    var seconds = Math.trunc(date.getTime() / 1000).toString();
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=feegrant.js.map