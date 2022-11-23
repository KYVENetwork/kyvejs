"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactBitArray = exports.MultiSignature = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.crypto.multisig.v1beta1";
function createBaseMultiSignature() {
    return { signatures: [] };
}
exports.MultiSignature = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMultiSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) { return bytesFromBase64(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return base64FromBytes(e !== undefined ? e : new Uint8Array()); });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMultiSignature();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseCompactBitArray() {
    return { extra_bits_stored: 0, elems: new Uint8Array() };
}
exports.CompactBitArray = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.extra_bits_stored !== 0) {
            writer.uint32(8).uint32(message.extra_bits_stored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCompactBitArray();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extra_bits_stored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
            extra_bits_stored: isSet(object.extra_bits_stored) ? Number(object.extra_bits_stored) : 0,
            elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.extra_bits_stored !== undefined && (obj.extra_bits_stored = Math.round(message.extra_bits_stored));
        message.elems !== undefined &&
            (obj.elems = base64FromBytes(message.elems !== undefined ? message.elems : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCompactBitArray();
        message.extra_bits_stored = (_a = object.extra_bits_stored) !== null && _a !== void 0 ? _a : 0;
        message.elems = (_b = object.elems) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin_1.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=multisig.js.map