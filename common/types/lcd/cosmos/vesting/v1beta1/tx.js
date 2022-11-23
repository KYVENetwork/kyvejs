"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
var vesting_1 = require("./vesting");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseMsgCreateVestingAccount() {
    return { from_address: "", to_address: "", amount: [], end_time: "0", delayed: false };
}
exports.MsgCreateVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.end_time !== "0") {
            writer.uint32(32).int64(message.end_time);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.end_time = longToString(reader.int64());
                    break;
                case 5:
                    message.delayed = reader.bool();
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
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
            end_time: isSet(object.end_time) ? String(object.end_time) : "0",
            delayed: isSet(object.delayed) ? Boolean(object.delayed) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        message.end_time !== undefined && (obj.end_time = message.end_time);
        message.delayed !== undefined && (obj.delayed = message.delayed);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgCreateVestingAccount();
        message.from_address = (_a = object.from_address) !== null && _a !== void 0 ? _a : "";
        message.to_address = (_b = object.to_address) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.end_time = (_d = object.end_time) !== null && _d !== void 0 ? _d : "0";
        message.delayed = (_e = object.delayed) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateVestingAccountResponse();
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
        var message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
};
function createBaseMsgCreatePermanentLockedAccount() {
    return { from_address: "", to_address: "", amount: [] };
}
exports.MsgCreatePermanentLockedAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePermanentLockedAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
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
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgCreatePermanentLockedAccount();
        message.from_address = (_a = object.from_address) !== null && _a !== void 0 ? _a : "";
        message.to_address = (_b = object.to_address) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
exports.MsgCreatePermanentLockedAccountResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        var message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
};
function createBaseMsgCreatePeriodicVestingAccount() {
    return { from_address: "", to_address: "", start_time: "0", vesting_periods: [] };
}
exports.MsgCreatePeriodicVestingAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        if (message.start_time !== "0") {
            writer.uint32(24).int64(message.start_time);
        }
        for (var _i = 0, _a = message.vesting_periods; _i < _a.length; _i++) {
            var v = _a[_i];
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePeriodicVestingAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.start_time = longToString(reader.int64());
                    break;
                case 4:
                    message.vesting_periods.push(vesting_1.Period.decode(reader, reader.uint32()));
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
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            start_time: isSet(object.start_time) ? String(object.start_time) : "0",
            vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods)
                ? object.vesting_periods.map(function (e) { return vesting_1.Period.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(function (e) { return e ? vesting_1.Period.toJSON(e) : undefined; });
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgCreatePeriodicVestingAccount();
        message.from_address = (_a = object.from_address) !== null && _a !== void 0 ? _a : "";
        message.to_address = (_b = object.to_address) !== null && _b !== void 0 ? _b : "";
        message.start_time = (_c = object.start_time) !== null && _c !== void 0 ? _c : "0";
        message.vesting_periods = ((_d = object.vesting_periods) === null || _d === void 0 ? void 0 : _d.map(function (e) { return vesting_1.Period.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
exports.MsgCreatePeriodicVestingAccountResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        var message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.vesting.v1beta1.Msg";
        this.rpc = rpc;
        this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
        this.CreatePermanentLockedAccount = this.CreatePermanentLockedAccount.bind(this);
        this.CreatePeriodicVestingAccount = this.CreatePeriodicVestingAccount.bind(this);
    }
    MsgClientImpl.prototype.CreateVestingAccount = function (request) {
        var data = exports.MsgCreateVestingAccount.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateVestingAccount", data);
        return promise.then(function (data) { return exports.MsgCreateVestingAccountResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CreatePermanentLockedAccount = function (request) {
        var data = exports.MsgCreatePermanentLockedAccount.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreatePermanentLockedAccount", data);
        return promise.then(function (data) { return exports.MsgCreatePermanentLockedAccountResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CreatePeriodicVestingAccount = function (request) {
        var data = exports.MsgCreatePeriodicVestingAccount.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreatePeriodicVestingAccount", data);
        return promise.then(function (data) { return exports.MsgCreatePeriodicVestingAccountResponse.decode(new minimal_1.default.Reader(data)); });
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