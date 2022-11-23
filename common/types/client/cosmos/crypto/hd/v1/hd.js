"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIP44Params = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.crypto.hd.v1";
function createBaseBIP44Params() {
    return { purpose: 0, coin_type: 0, account: 0, change: false, address_index: 0 };
}
exports.BIP44Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coin_type !== 0) {
            writer.uint32(16).uint32(message.coin_type);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change === true) {
            writer.uint32(32).bool(message.change);
        }
        if (message.address_index !== 0) {
            writer.uint32(40).uint32(message.address_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBIP44Params();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.uint32();
                    break;
                case 2:
                    message.coin_type = reader.uint32();
                    break;
                case 3:
                    message.account = reader.uint32();
                    break;
                case 4:
                    message.change = reader.bool();
                    break;
                case 5:
                    message.address_index = reader.uint32();
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
            purpose: isSet(object.purpose) ? Number(object.purpose) : 0,
            coin_type: isSet(object.coin_type) ? Number(object.coin_type) : 0,
            account: isSet(object.account) ? Number(object.account) : 0,
            change: isSet(object.change) ? Boolean(object.change) : false,
            address_index: isSet(object.address_index) ? Number(object.address_index) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
        message.coin_type !== undefined && (obj.coin_type = Math.round(message.coin_type));
        message.account !== undefined && (obj.account = Math.round(message.account));
        message.change !== undefined && (obj.change = message.change);
        message.address_index !== undefined && (obj.address_index = Math.round(message.address_index));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseBIP44Params();
        message.purpose = (_a = object.purpose) !== null && _a !== void 0 ? _a : 0;
        message.coin_type = (_b = object.coin_type) !== null && _b !== void 0 ? _b : 0;
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : 0;
        message.change = (_d = object.change) !== null && _d !== void 0 ? _d : false;
        message.address_index = (_e = object.address_index) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=hd.js.map