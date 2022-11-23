"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAminoPubKey = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.crypto.multisig";
function createBaseLegacyAminoPubKey() {
    return { threshold: 0, public_keys: [] };
}
exports.LegacyAminoPubKey = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (var _i = 0, _a = message.public_keys; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.public_keys.push(any_1.Any.decode(reader, reader.uint32()));
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
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
            public_keys: Array.isArray(object === null || object === void 0 ? void 0 : object.public_keys) ? object.public_keys.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLegacyAminoPubKey();
        message.threshold = (_a = object.threshold) !== null && _a !== void 0 ? _a : 0;
        message.public_keys = ((_b = object.public_keys) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=keys.js.map