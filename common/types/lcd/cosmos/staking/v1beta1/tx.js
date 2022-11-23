"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var coin_1 = require("../../base/v1beta1/coin");
var staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseMsgCreateValidator() {
    return {
        description: undefined,
        commission: undefined,
        min_self_delegation: "",
        delegator_address: "",
        validator_address: "",
        pubkey: undefined,
        value: undefined,
    };
}
exports.MsgCreateValidator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(26).string(message.min_self_delegation);
        }
        if (message.delegator_address !== "") {
            writer.uint32(34).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(42).string(message.validator_address);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = staking_1.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.min_self_delegation = reader.string();
                    break;
                case 4:
                    message.delegator_address = reader.string();
                    break;
                case 5:
                    message.validator_address = reader.string();
                    break;
                case 6:
                    message.pubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
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
            description: isSet(object.description) ? staking_1.Description.fromJSON(object.description) : undefined,
            commission: isSet(object.commission) ? staking_1.CommissionRates.fromJSON(object.commission) : undefined,
            min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            pubkey: isSet(object.pubkey) ? any_1.Any.fromJSON(object.pubkey) : undefined,
            value: isSet(object.value) ? coin_1.Coin.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.description !== undefined &&
            (obj.description = message.description ? staking_1.Description.toJSON(message.description) : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission ? staking_1.CommissionRates.toJSON(message.commission) : undefined);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.pubkey !== undefined && (obj.pubkey = message.pubkey ? any_1.Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined && (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgCreateValidator();
        message.description = (object.description !== undefined && object.description !== null)
            ? staking_1.Description.fromPartial(object.description)
            : undefined;
        message.commission = (object.commission !== undefined && object.commission !== null)
            ? staking_1.CommissionRates.fromPartial(object.commission)
            : undefined;
        message.min_self_delegation = (_a = object.min_self_delegation) !== null && _a !== void 0 ? _a : "";
        message.delegator_address = (_b = object.delegator_address) !== null && _b !== void 0 ? _b : "";
        message.validator_address = (_c = object.validator_address) !== null && _c !== void 0 ? _c : "";
        message.pubkey = (object.pubkey !== undefined && object.pubkey !== null)
            ? any_1.Any.fromPartial(object.pubkey)
            : undefined;
        message.value = (object.value !== undefined && object.value !== null) ? coin_1.Coin.fromPartial(object.value) : undefined;
        return message;
    },
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
exports.MsgCreateValidatorResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateValidatorResponse();
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
        var message = createBaseMsgCreateValidatorResponse();
        return message;
    },
};
function createBaseMsgEditValidator() {
    return { description: undefined, validator_address: "", commission_rate: "", min_self_delegation: "" };
}
exports.MsgEditValidator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.commission_rate !== "") {
            writer.uint32(26).string(message.commission_rate);
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(34).string(message.min_self_delegation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgEditValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.commission_rate = reader.string();
                    break;
                case 4:
                    message.min_self_delegation = reader.string();
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
            description: isSet(object.description) ? staking_1.Description.fromJSON(object.description) : undefined,
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
            min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.description !== undefined &&
            (obj.description = message.description ? staking_1.Description.toJSON(message.description) : undefined);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgEditValidator();
        message.description = (object.description !== undefined && object.description !== null)
            ? staking_1.Description.fromPartial(object.description)
            : undefined;
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.commission_rate = (_b = object.commission_rate) !== null && _b !== void 0 ? _b : "";
        message.min_self_delegation = (_c = object.min_self_delegation) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
exports.MsgEditValidatorResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgEditValidatorResponse();
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
        var message = createBaseMsgEditValidatorResponse();
        return message;
    },
};
function createBaseMsgDelegate() {
    return { delegator_address: "", validator_address: "", amount: undefined };
}
exports.MsgDelegate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelegate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgDelegate();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgDelegateResponse() {
    return {};
}
exports.MsgDelegateResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelegateResponse();
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
        var message = createBaseMsgDelegateResponse();
        return message;
    },
};
function createBaseMsgBeginRedelegate() {
    return { delegator_address: "", validator_src_address: "", validator_dst_address: "", amount: undefined };
}
exports.MsgBeginRedelegate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBeginRedelegate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgBeginRedelegate();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_src_address = (_b = object.validator_src_address) !== null && _b !== void 0 ? _b : "";
        message.validator_dst_address = (_c = object.validator_dst_address) !== null && _c !== void 0 ? _c : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgBeginRedelegateResponse() {
    return { completion_time: undefined };
}
exports.MsgBeginRedelegateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgBeginRedelegateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgBeginRedelegateResponse();
        message.completion_time = (_a = object.completion_time) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMsgUndelegate() {
    return { delegator_address: "", validator_address: "", amount: undefined };
}
exports.MsgUndelegate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUndelegate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUndelegate();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgUndelegateResponse() {
    return { completion_time: undefined };
}
exports.MsgUndelegateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUndelegateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgUndelegateResponse();
        message.completion_time = (_a = object.completion_time) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.staking.v1beta1.Msg";
        this.rpc = rpc;
        this.CreateValidator = this.CreateValidator.bind(this);
        this.EditValidator = this.EditValidator.bind(this);
        this.Delegate = this.Delegate.bind(this);
        this.BeginRedelegate = this.BeginRedelegate.bind(this);
        this.Undelegate = this.Undelegate.bind(this);
    }
    MsgClientImpl.prototype.CreateValidator = function (request) {
        var data = exports.MsgCreateValidator.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateValidator", data);
        return promise.then(function (data) { return exports.MsgCreateValidatorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.EditValidator = function (request) {
        var data = exports.MsgEditValidator.encode(request).finish();
        var promise = this.rpc.request(this.service, "EditValidator", data);
        return promise.then(function (data) { return exports.MsgEditValidatorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.Delegate = function (request) {
        var data = exports.MsgDelegate.encode(request).finish();
        var promise = this.rpc.request(this.service, "Delegate", data);
        return promise.then(function (data) { return exports.MsgDelegateResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.BeginRedelegate = function (request) {
        var data = exports.MsgBeginRedelegate.encode(request).finish();
        var promise = this.rpc.request(this.service, "BeginRedelegate", data);
        return promise.then(function (data) { return exports.MsgBeginRedelegateResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.Undelegate = function (request) {
        var data = exports.MsgUndelegate.encode(request).finish();
        var promise = this.rpc.request(this.service, "Undelegate", data);
        return promise.then(function (data) { return exports.MsgUndelegateResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map