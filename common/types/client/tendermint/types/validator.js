"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var keys_1 = require("../crypto/keys");
exports.protobufPackage = "tendermint.types";
function createBaseValidatorSet() {
    return { validators: [], proposer: undefined, total_voting_power: "0" };
}
exports.ValidatorSet = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== "0") {
            writer.uint32(24).int64(message.total_voting_power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = longToString(reader.int64());
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return exports.Validator.fromJSON(e); }) : [],
            proposer: isSet(object.proposer) ? exports.Validator.fromJSON(object.proposer) : undefined,
            total_voting_power: isSet(object.total_voting_power) ? String(object.total_voting_power) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined &&
            (obj.proposer = message.proposer ? exports.Validator.toJSON(message.proposer) : undefined);
        message.total_voting_power !== undefined && (obj.total_voting_power = message.total_voting_power);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorSet();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.proposer = (object.proposer !== undefined && object.proposer !== null)
            ? exports.Validator.fromPartial(object.proposer)
            : undefined;
        message.total_voting_power = (_b = object.total_voting_power) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseValidator() {
    return { address: new Uint8Array(), pub_key: undefined, voting_power: "0", proposer_priority: "0" };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== "0") {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== "0") {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = longToString(reader.int64());
                    break;
                case 4:
                    message.proposer_priority = longToString(reader.int64());
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            pub_key: isSet(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power) ? String(object.voting_power) : "0",
            proposer_priority: isSet(object.proposer_priority) ? String(object.proposer_priority) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = message.voting_power);
        message.proposer_priority !== undefined && (obj.proposer_priority = message.proposer_priority);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
            ? keys_1.PublicKey.fromPartial(object.pub_key)
            : undefined;
        message.voting_power = (_b = object.voting_power) !== null && _b !== void 0 ? _b : "0";
        message.proposer_priority = (_c = object.proposer_priority) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseSimpleValidator() {
    return { pub_key: undefined, voting_power: "0" };
}
exports.SimpleValidator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.voting_power !== "0") {
            writer.uint32(16).int64(message.voting_power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimpleValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voting_power = longToString(reader.int64());
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
            pub_key: isSet(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power) ? String(object.voting_power) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = message.voting_power);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSimpleValidator();
        message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
            ? keys_1.PublicKey.fromPartial(object.pub_key)
            : undefined;
        message.voting_power = (_a = object.voting_power) !== null && _a !== void 0 ? _a : "0";
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
//# sourceMappingURL=validator.js.map