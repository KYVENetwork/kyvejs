"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseGenesisState() {
    return { evidence: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.evidence; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
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
                case 1:
                    message.evidence.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map(function (e) { return any_1.Any.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.evidence = ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map