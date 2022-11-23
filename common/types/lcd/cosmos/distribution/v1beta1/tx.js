"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseMsgSetWithdrawAddress() {
    return { delegator_address: "", withdraw_address: "" };
}
exports.MsgSetWithdrawAddress = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetWithdrawAddress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.withdraw_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgSetWithdrawAddress();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.withdraw_address = (_b = object.withdraw_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
exports.MsgSetWithdrawAddressResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSetWithdrawAddressResponse();
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
        var message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
};
function createBaseMsgWithdrawDelegatorReward() {
    return { delegator_address: "", validator_address: "" };
}
exports.MsgWithdrawDelegatorReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawDelegatorReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgWithdrawDelegatorReward();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return { amount: [] };
}
exports.MsgWithdrawDelegatorRewardResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawDelegatorRewardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMsgWithdrawValidatorCommission() {
    return { validator_address: "" };
}
exports.MsgWithdrawValidatorCommission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawValidatorCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { validator_address: isSet(object.validator_address) ? String(object.validator_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgWithdrawValidatorCommission();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return { amount: [] };
}
exports.MsgWithdrawValidatorCommissionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawValidatorCommissionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMsgFundCommunityPool() {
    return { amount: [], depositor: "" };
}
exports.MsgFundCommunityPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundCommunityPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.depositor = reader.string();
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgFundCommunityPool();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
exports.MsgFundCommunityPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundCommunityPoolResponse();
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
        var message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.distribution.v1beta1.Msg";
        this.rpc = rpc;
        this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
        this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
        this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);
        this.FundCommunityPool = this.FundCommunityPool.bind(this);
    }
    MsgClientImpl.prototype.SetWithdrawAddress = function (request) {
        var data = exports.MsgSetWithdrawAddress.encode(request).finish();
        var promise = this.rpc.request(this.service, "SetWithdrawAddress", data);
        return promise.then(function (data) { return exports.MsgSetWithdrawAddressResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.WithdrawDelegatorReward = function (request) {
        var data = exports.MsgWithdrawDelegatorReward.encode(request).finish();
        var promise = this.rpc.request(this.service, "WithdrawDelegatorReward", data);
        return promise.then(function (data) { return exports.MsgWithdrawDelegatorRewardResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.WithdrawValidatorCommission = function (request) {
        var data = exports.MsgWithdrawValidatorCommission.encode(request).finish();
        var promise = this.rpc.request(this.service, "WithdrawValidatorCommission", data);
        return promise.then(function (data) { return exports.MsgWithdrawValidatorCommissionResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.FundCommunityPool = function (request) {
        var data = exports.MsgFundCommunityPool.encode(request).finish();
        var promise = this.rpc.request(this.service, "FundCommunityPool", data);
        return promise.then(function (data) { return exports.MsgFundCommunityPoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map