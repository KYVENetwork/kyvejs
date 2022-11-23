"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKey = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.crypto";
function createBasePublicKey() {
    return { ed25519: undefined, secp256k1: undefined };
}
exports.PublicKey = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
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
            ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined,
            secp256k1: isSet(object.secp256k1) ? bytesFromBase64(object.secp256k1) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ed25519 !== undefined &&
            (obj.ed25519 = message.ed25519 !== undefined ? base64FromBytes(message.ed25519) : undefined);
        message.secp256k1 !== undefined &&
            (obj.secp256k1 = message.secp256k1 !== undefined ? base64FromBytes(message.secp256k1) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePublicKey();
        message.ed25519 = (_a = object.ed25519) !== null && _a !== void 0 ? _a : undefined;
        message.secp256k1 = (_b = object.secp256k1) !== null && _b !== void 0 ? _b : undefined;
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
//# sourceMappingURL=keys.js.map