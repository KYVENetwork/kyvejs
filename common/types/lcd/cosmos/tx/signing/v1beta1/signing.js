"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureDescriptor_Data_Multi = exports.SignatureDescriptor_Data_Single = exports.SignatureDescriptor_Data = exports.SignatureDescriptor = exports.SignatureDescriptors = exports.signModeToNumber = exports.signModeToJSON = exports.signModeFromJSON = exports.SignMode = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../../google/protobuf/any");
var multisig_1 = require("../../../crypto/multisig/v1beta1/multisig");
exports.protobufPackage = "cosmos.tx.signing.v1beta1";
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
var SignMode;
(function (SignMode) {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     */
    SignMode["SIGN_MODE_UNSPECIFIED"] = "SIGN_MODE_UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     */
    SignMode["SIGN_MODE_DIRECT"] = "SIGN_MODE_DIRECT";
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     */
    SignMode["SIGN_MODE_TEXTUAL"] = "SIGN_MODE_TEXTUAL";
    /**
     * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    SignMode["SIGN_MODE_DIRECT_AUX"] = "SIGN_MODE_DIRECT_AUX";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     */
    SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = "SIGN_MODE_LEGACY_AMINO_JSON";
    SignMode["UNRECOGNIZED"] = "UNRECOGNIZED";
})(SignMode = exports.SignMode || (exports.SignMode = {}));
function signModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGN_MODE_UNSPECIFIED":
            return SignMode.SIGN_MODE_UNSPECIFIED;
        case 1:
        case "SIGN_MODE_DIRECT":
            return SignMode.SIGN_MODE_DIRECT;
        case 2:
        case "SIGN_MODE_TEXTUAL":
            return SignMode.SIGN_MODE_TEXTUAL;
        case 3:
        case "SIGN_MODE_DIRECT_AUX":
            return SignMode.SIGN_MODE_DIRECT_AUX;
        case 127:
        case "SIGN_MODE_LEGACY_AMINO_JSON":
            return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignMode.UNRECOGNIZED;
    }
}
exports.signModeFromJSON = signModeFromJSON;
function signModeToJSON(object) {
    switch (object) {
        case SignMode.SIGN_MODE_UNSPECIFIED:
            return "SIGN_MODE_UNSPECIFIED";
        case SignMode.SIGN_MODE_DIRECT:
            return "SIGN_MODE_DIRECT";
        case SignMode.SIGN_MODE_TEXTUAL:
            return "SIGN_MODE_TEXTUAL";
        case SignMode.SIGN_MODE_DIRECT_AUX:
            return "SIGN_MODE_DIRECT_AUX";
        case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
            return "SIGN_MODE_LEGACY_AMINO_JSON";
        case SignMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signModeToJSON = signModeToJSON;
function signModeToNumber(object) {
    switch (object) {
        case SignMode.SIGN_MODE_UNSPECIFIED:
            return 0;
        case SignMode.SIGN_MODE_DIRECT:
            return 1;
        case SignMode.SIGN_MODE_TEXTUAL:
            return 2;
        case SignMode.SIGN_MODE_DIRECT_AUX:
            return 3;
        case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
            return 127;
        case SignMode.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.signModeToNumber = signModeToNumber;
function createBaseSignatureDescriptors() {
    return { signatures: [] };
}
exports.SignatureDescriptors = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptors();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(exports.SignatureDescriptor.decode(reader, reader.uint32()));
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
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map(function (e) { return exports.SignatureDescriptor.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return e ? exports.SignatureDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSignatureDescriptors();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignatureDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSignatureDescriptor() {
    return { public_key: undefined, data: undefined, sequence: "0" };
}
exports.SignatureDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            exports.SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = exports.SignatureDescriptor_Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = longToString(reader.uint64());
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
            public_key: isSet(object.public_key) ? any_1.Any.fromJSON(object.public_key) : undefined,
            data: isSet(object.data) ? exports.SignatureDescriptor_Data.fromJSON(object.data) : undefined,
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.public_key !== undefined &&
            (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.data !== undefined && (obj.data = message.data ? exports.SignatureDescriptor_Data.toJSON(message.data) : undefined);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSignatureDescriptor();
        message.public_key = (object.public_key !== undefined && object.public_key !== null)
            ? any_1.Any.fromPartial(object.public_key)
            : undefined;
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.SignatureDescriptor_Data.fromPartial(object.data)
            : undefined;
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseSignatureDescriptor_Data() {
    return { single: undefined, multi: undefined };
}
exports.SignatureDescriptor_Data = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.single !== undefined) {
            exports.SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor_Data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
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
            single: isSet(object.single) ? exports.SignatureDescriptor_Data_Single.fromJSON(object.single) : undefined,
            multi: isSet(object.multi) ? exports.SignatureDescriptor_Data_Multi.fromJSON(object.multi) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.single !== undefined &&
            (obj.single = message.single ? exports.SignatureDescriptor_Data_Single.toJSON(message.single) : undefined);
        message.multi !== undefined &&
            (obj.multi = message.multi ? exports.SignatureDescriptor_Data_Multi.toJSON(message.multi) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSignatureDescriptor_Data();
        message.single = (object.single !== undefined && object.single !== null)
            ? exports.SignatureDescriptor_Data_Single.fromPartial(object.single)
            : undefined;
        message.multi = (object.multi !== undefined && object.multi !== null)
            ? exports.SignatureDescriptor_Data_Multi.fromPartial(object.multi)
            : undefined;
        return message;
    },
};
function createBaseSignatureDescriptor_Data_Single() {
    return { mode: SignMode.SIGN_MODE_UNSPECIFIED, signature: new Uint8Array() };
}
exports.SignatureDescriptor_Data_Single = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.mode !== SignMode.SIGN_MODE_UNSPECIFIED) {
            writer.uint32(8).int32(signModeToNumber(message.mode));
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor_Data_Single();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = signModeFromJSON(reader.int32());
                    break;
                case 2:
                    message.signature = reader.bytes();
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
            mode: isSet(object.mode) ? signModeFromJSON(object.mode) : SignMode.SIGN_MODE_UNSPECIFIED,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSignatureDescriptor_Data_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : SignMode.SIGN_MODE_UNSPECIFIED;
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseSignatureDescriptor_Data_Multi() {
    return { bitarray: undefined, signatures: [] };
}
exports.SignatureDescriptor_Data_Multi = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignatureDescriptor_Data_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(exports.SignatureDescriptor_Data.decode(reader, reader.uint32()));
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
            bitarray: isSet(object.bitarray) ? multisig_1.CompactBitArray.fromJSON(object.bitarray) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map(function (e) { return exports.SignatureDescriptor_Data.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bitarray !== undefined &&
            (obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toJSON(message.bitarray) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return e ? exports.SignatureDescriptor_Data.toJSON(e) : undefined; });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSignatureDescriptor_Data_Multi();
        message.bitarray = (object.bitarray !== undefined && object.bitarray !== null)
            ? multisig_1.CompactBitArray.fromPartial(object.bitarray)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignatureDescriptor_Data.fromPartial(e); })) || [];
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
//# sourceMappingURL=signing.js.map