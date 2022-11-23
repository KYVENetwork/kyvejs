"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseSendAuthorization() {
    return { spend_limit: [] };
}
exports.SendAuthorization = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.spend_limit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSendAuthorization();
        message.spend_limit = ((_a = object.spend_limit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
//# sourceMappingURL=authz.js.map