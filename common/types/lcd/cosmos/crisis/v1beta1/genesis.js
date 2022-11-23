"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.crisis.v1beta1";
function createBaseGenesisState() {
    return { constant_fee: undefined };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.constant_fee !== undefined) {
            coin_1.Coin.encode(message.constant_fee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.constant_fee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { constant_fee: isSet(object.constant_fee) ? coin_1.Coin.fromJSON(object.constant_fee) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.constant_fee !== undefined &&
            (obj.constant_fee = message.constant_fee ? coin_1.Coin.toJSON(message.constant_fee) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisState();
        message.constant_fee = (object.constant_fee !== undefined && object.constant_fee !== null)
            ? coin_1.Coin.fromPartial(object.constant_fee)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map