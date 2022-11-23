"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var auth_1 = require("../../auth/v1beta1/auth");
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseBaseVestingAccount() {
    return { base_account: undefined, original_vesting: [], delegated_free: [], delegated_vesting: [], end_time: "0" };
}
exports.BaseVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.base_account !== undefined) {
            auth_1.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.original_vesting; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.delegated_free; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegated_vesting; _d < _e.length; _d++) {
            var v = _e[_d];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.end_time !== "0") {
            writer.uint32(40).int64(message.end_time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.original_vesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegated_free.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegated_vesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.end_time = longToString(reader.int64());
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
            base_account: isSet(object.base_account) ? auth_1.BaseAccount.fromJSON(object.base_account) : undefined,
            original_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.original_vesting)
                ? object.original_vesting.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            delegated_free: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_free)
                ? object.delegated_free.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            delegated_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_vesting)
                ? object.delegated_vesting.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            end_time: isSet(object.end_time) ? String(object.end_time) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base_account !== undefined &&
            (obj.base_account = message.base_account ? auth_1.BaseAccount.toJSON(message.base_account) : undefined);
        if (message.original_vesting) {
            obj.original_vesting = message.original_vesting.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegated_free) {
            obj.delegated_free = message.delegated_free.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegated_vesting) {
            obj.delegated_vesting = message.delegated_vesting.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.delegated_vesting = [];
        }
        message.end_time !== undefined && (obj.end_time = message.end_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseBaseVestingAccount();
        message.base_account = (object.base_account !== undefined && object.base_account !== null)
            ? auth_1.BaseAccount.fromPartial(object.base_account)
            : undefined;
        message.original_vesting = ((_a = object.original_vesting) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.delegated_free = ((_b = object.delegated_free) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.delegated_vesting = ((_c = object.delegated_vesting) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.end_time = (_d = object.end_time) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseContinuousVestingAccount() {
    return { base_vesting_account: undefined, start_time: "0" };
}
exports.ContinuousVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== "0") {
            writer.uint32(16).int64(message.start_time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = longToString(reader.int64());
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
            start_time: isSet(object.start_time) ? String(object.start_time) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account
            ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
            : undefined);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseContinuousVestingAccount();
        message.base_vesting_account = (object.base_vesting_account !== undefined && object.base_vesting_account !== null)
            ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
            : undefined;
        message.start_time = (_a = object.start_time) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseDelayedVestingAccount() {
    return { base_vesting_account: undefined };
}
exports.DelayedVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account
            ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseDelayedVestingAccount();
        message.base_vesting_account = (object.base_vesting_account !== undefined && object.base_vesting_account !== null)
            ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
            : undefined;
        return message;
    },
};
function createBasePeriod() {
    return { length: "0", amount: [] };
}
exports.Period = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.length !== "0") {
            writer.uint32(8).int64(message.length);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = longToString(reader.int64());
                    break;
                case 2:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            length: isSet(object.length) ? String(object.length) : "0",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.length !== undefined && (obj.length = message.length);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePeriod();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : "0";
        message.amount = ((_b = object.amount) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePeriodicVestingAccount() {
    return { base_vesting_account: undefined, start_time: "0", vesting_periods: [] };
}
exports.PeriodicVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== "0") {
            writer.uint32(16).int64(message.start_time);
        }
        for (var _i = 0, _a = message.vesting_periods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = longToString(reader.int64());
                    break;
                case 3:
                    message.vesting_periods.push(exports.Period.decode(reader, reader.uint32()));
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
            start_time: isSet(object.start_time) ? String(object.start_time) : "0",
            vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods)
                ? object.vesting_periods.map(function (e) { return exports.Period.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account
            ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
            : undefined);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(function (e) { return e ? exports.Period.toJSON(e) : undefined; });
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePeriodicVestingAccount();
        message.base_vesting_account = (object.base_vesting_account !== undefined && object.base_vesting_account !== null)
            ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
            : undefined;
        message.start_time = (_a = object.start_time) !== null && _a !== void 0 ? _a : "0";
        message.vesting_periods = ((_b = object.vesting_periods) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Period.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePermanentLockedAccount() {
    return { base_vesting_account: undefined };
}
exports.PermanentLockedAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account
            ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBasePermanentLockedAccount();
        message.base_vesting_account = (object.base_vesting_account !== undefined && object.base_vesting_account !== null)
            ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
            : undefined;
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
//# sourceMappingURL=vesting.js.map