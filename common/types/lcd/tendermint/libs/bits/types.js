"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitArray = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.libs.bits";
function createBaseBitArray() {
    return { bits: "0", elems: [] };
}
exports.BitArray = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.bits !== "0") {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.elems; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBitArray();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = longToString(reader.int64());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.elems.push(longToString(reader.uint64()));
                    }
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
            bits: isSet(object.bits) ? String(object.bits) : "0",
            elems: Array.isArray(object === null || object === void 0 ? void 0 : object.elems) ? object.elems.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bits !== undefined && (obj.bits = message.bits);
        if (message.elems) {
            obj.elems = message.elems.map(function (e) { return e; });
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBitArray();
        message.bits = (_a = object.bits) !== null && _a !== void 0 ? _a : "0";
        message.elems = ((_b = object.elems) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
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
//# sourceMappingURL=types.js.map