"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ModuleAccount = exports.BaseAccount = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseBaseAccount() {
    return { address: "", pub_key: undefined, account_number: "0", sequence: "0" };
}
exports.BaseAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.account_number !== "0") {
            writer.uint32(24).uint64(message.account_number);
        }
        if (message.sequence !== "0") {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBaseAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.account_number = longToString(reader.uint64());
                    break;
                case 4:
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
            address: isSet(object.address) ? String(object.address) : "",
            pub_key: isSet(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            account_number: isSet(object.account_number) ? String(object.account_number) : "0",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.account_number !== undefined && (obj.account_number = message.account_number);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseBaseAccount();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
            ? any_1.Any.fromPartial(object.pub_key)
            : undefined;
        message.account_number = (_b = object.account_number) !== null && _b !== void 0 ? _b : "0";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseModuleAccount() {
    return { base_account: undefined, name: "", permissions: [] };
}
exports.ModuleAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.base_account !== undefined) {
            exports.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (var _i = 0, _a = message.permissions; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
            base_account: isSet(object.base_account) ? exports.BaseAccount.fromJSON(object.base_account) : undefined,
            name: isSet(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions) ? object.permissions.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.base_account !== undefined &&
            (obj.base_account = message.base_account ? exports.BaseAccount.toJSON(message.base_account) : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map(function (e) { return e; });
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseModuleAccount();
        message.base_account = (object.base_account !== undefined && object.base_account !== null)
            ? exports.BaseAccount.fromPartial(object.base_account)
            : undefined;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.permissions = ((_b = object.permissions) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        max_memo_characters: "0",
        tx_sig_limit: "0",
        tx_size_cost_per_byte: "0",
        sig_verify_cost_ed25519: "0",
        sig_verify_cost_secp256k1: "0",
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.max_memo_characters !== "0") {
            writer.uint32(8).uint64(message.max_memo_characters);
        }
        if (message.tx_sig_limit !== "0") {
            writer.uint32(16).uint64(message.tx_sig_limit);
        }
        if (message.tx_size_cost_per_byte !== "0") {
            writer.uint32(24).uint64(message.tx_size_cost_per_byte);
        }
        if (message.sig_verify_cost_ed25519 !== "0") {
            writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
        }
        if (message.sig_verify_cost_secp256k1 !== "0") {
            writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_memo_characters = longToString(reader.uint64());
                    break;
                case 2:
                    message.tx_sig_limit = longToString(reader.uint64());
                    break;
                case 3:
                    message.tx_size_cost_per_byte = longToString(reader.uint64());
                    break;
                case 4:
                    message.sig_verify_cost_ed25519 = longToString(reader.uint64());
                    break;
                case 5:
                    message.sig_verify_cost_secp256k1 = longToString(reader.uint64());
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
            max_memo_characters: isSet(object.max_memo_characters) ? String(object.max_memo_characters) : "0",
            tx_sig_limit: isSet(object.tx_sig_limit) ? String(object.tx_sig_limit) : "0",
            tx_size_cost_per_byte: isSet(object.tx_size_cost_per_byte) ? String(object.tx_size_cost_per_byte) : "0",
            sig_verify_cost_ed25519: isSet(object.sig_verify_cost_ed25519) ? String(object.sig_verify_cost_ed25519) : "0",
            sig_verify_cost_secp256k1: isSet(object.sig_verify_cost_secp256k1)
                ? String(object.sig_verify_cost_secp256k1)
                : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.max_memo_characters !== undefined && (obj.max_memo_characters = message.max_memo_characters);
        message.tx_sig_limit !== undefined && (obj.tx_sig_limit = message.tx_sig_limit);
        message.tx_size_cost_per_byte !== undefined && (obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte);
        message.sig_verify_cost_ed25519 !== undefined && (obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519);
        message.sig_verify_cost_secp256k1 !== undefined &&
            (obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseParams();
        message.max_memo_characters = (_a = object.max_memo_characters) !== null && _a !== void 0 ? _a : "0";
        message.tx_sig_limit = (_b = object.tx_sig_limit) !== null && _b !== void 0 ? _b : "0";
        message.tx_size_cost_per_byte = (_c = object.tx_size_cost_per_byte) !== null && _c !== void 0 ? _c : "0";
        message.sig_verify_cost_ed25519 = (_d = object.sig_verify_cost_ed25519) !== null && _d !== void 0 ? _d : "0";
        message.sig_verify_cost_secp256k1 = (_e = object.sig_verify_cost_secp256k1) !== null && _e !== void 0 ? _e : "0";
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
//# sourceMappingURL=auth.js.map