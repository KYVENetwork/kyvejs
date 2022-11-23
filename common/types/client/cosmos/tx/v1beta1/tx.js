"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var coin_1 = require("../../base/v1beta1/coin");
var multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
var signing_1 = require("../signing/v1beta1/signing");
exports.protobufPackage = "cosmos.tx.v1beta1";
function createBaseTx() {
    return { body: undefined, auth_info: undefined, signatures: [] };
}
exports.Tx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth_info !== undefined) {
            exports.AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth_info = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
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
            body: isSet(object.body) ? exports.TxBody.fromJSON(object.body) : undefined,
            auth_info: isSet(object.auth_info) ? exports.AuthInfo.fromJSON(object.auth_info) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) { return bytesFromBase64(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.body !== undefined && (obj.body = message.body ? exports.TxBody.toJSON(message.body) : undefined);
        message.auth_info !== undefined &&
            (obj.auth_info = message.auth_info ? exports.AuthInfo.toJSON(message.auth_info) : undefined);
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
        var message = createBaseTx();
        message.body = (object.body !== undefined && object.body !== null) ? exports.TxBody.fromPartial(object.body) : undefined;
        message.auth_info = (object.auth_info !== undefined && object.auth_info !== null)
            ? exports.AuthInfo.fromPartial(object.auth_info)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseTxRaw() {
    return { body_bytes: new Uint8Array(), auth_info_bytes: new Uint8Array(), signatures: [] };
}
exports.TxRaw = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxRaw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
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
            body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
            auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) { return bytesFromBase64(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.body_bytes !== undefined &&
            (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.auth_info_bytes !== undefined &&
            (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return base64FromBytes(e !== undefined ? e : new Uint8Array()); });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseTxRaw();
        message.body_bytes = (_a = object.body_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.auth_info_bytes = (_b = object.auth_info_bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseSignDoc() {
    return { body_bytes: new Uint8Array(), auth_info_bytes: new Uint8Array(), chain_id: "", account_number: "0" };
}
exports.SignDoc = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.account_number !== "0") {
            writer.uint32(32).uint64(message.account_number);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDoc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = longToString(reader.uint64());
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
            body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
            auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            account_number: isSet(object.account_number) ? String(object.account_number) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.body_bytes !== undefined &&
            (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.auth_info_bytes !== undefined &&
            (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined && (obj.account_number = message.account_number);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSignDoc();
        message.body_bytes = (_a = object.body_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.auth_info_bytes = (_b = object.auth_info_bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.chain_id = (_c = object.chain_id) !== null && _c !== void 0 ? _c : "";
        message.account_number = (_d = object.account_number) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseSignDocDirectAux() {
    return {
        body_bytes: new Uint8Array(),
        public_key: undefined,
        chain_id: "",
        account_number: "0",
        sequence: "0",
        tip: undefined,
    };
}
exports.SignDocDirectAux = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.account_number !== "0") {
            writer.uint32(32).uint64(message.account_number);
        }
        if (message.sequence !== "0") {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = longToString(reader.uint64());
                    break;
                case 5:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 6:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
            body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
            public_key: isSet(object.public_key) ? any_1.Any.fromJSON(object.public_key) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            account_number: isSet(object.account_number) ? String(object.account_number) : "0",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            tip: isSet(object.tip) ? exports.Tip.fromJSON(object.tip) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.body_bytes !== undefined &&
            (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.public_key !== undefined &&
            (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined && (obj.account_number = message.account_number);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSignDocDirectAux();
        message.body_bytes = (_a = object.body_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.public_key = (object.public_key !== undefined && object.public_key !== null)
            ? any_1.Any.fromPartial(object.public_key)
            : undefined;
        message.chain_id = (_b = object.chain_id) !== null && _b !== void 0 ? _b : "";
        message.account_number = (_c = object.account_number) !== null && _c !== void 0 ? _c : "0";
        message.sequence = (_d = object.sequence) !== null && _d !== void 0 ? _d : "0";
        message.tip = (object.tip !== undefined && object.tip !== null) ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
};
function createBaseTxBody() {
    return { messages: [], memo: "", timeout_height: "0", extension_options: [], non_critical_extension_options: [] };
}
exports.TxBody = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeout_height !== "0") {
            writer.uint32(24).uint64(message.timeout_height);
        }
        for (var _b = 0, _c = message.extension_options; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (var _d = 0, _e = message.non_critical_extension_options; _d < _e.length; _d++) {
            var v = _e[_d];
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeout_height = longToString(reader.uint64());
                    break;
                case 1023:
                    message.extension_options.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.non_critical_extension_options.push(any_1.Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
            memo: isSet(object.memo) ? String(object.memo) : "",
            timeout_height: isSet(object.timeout_height) ? String(object.timeout_height) : "0",
            extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_options)
                ? object.extension_options.map(function (e) { return any_1.Any.fromJSON(e); })
                : [],
            non_critical_extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.non_critical_extension_options)
                ? object.non_critical_extension_options.map(function (e) { return any_1.Any.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.messages = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height);
        if (message.extension_options) {
            obj.extension_options = message.extension_options.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.extension_options = [];
        }
        if (message.non_critical_extension_options) {
            obj.non_critical_extension_options = message.non_critical_extension_options.map(function (e) {
                return e ? any_1.Any.toJSON(e) : undefined;
            });
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseTxBody();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.memo = (_b = object.memo) !== null && _b !== void 0 ? _b : "";
        message.timeout_height = (_c = object.timeout_height) !== null && _c !== void 0 ? _c : "0";
        message.extension_options = ((_d = object.extension_options) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.non_critical_extension_options = ((_e = object.non_critical_extension_options) === null || _e === void 0 ? void 0 : _e.map(function (e) { return any_1.Any.fromPartial(e); })) ||
            [];
        return message;
    },
};
function createBaseAuthInfo() {
    return { signer_infos: [], fee: undefined, tip: undefined };
}
exports.AuthInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.signer_infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer_infos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
            signer_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signer_infos)
                ? object.signer_infos.map(function (e) { return exports.SignerInfo.fromJSON(e); })
                : [],
            fee: isSet(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
            tip: isSet(object.tip) ? exports.Tip.fromJSON(object.tip) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.signer_infos) {
            obj.signer_infos = message.signer_infos.map(function (e) { return e ? exports.SignerInfo.toJSON(e) : undefined; });
        }
        else {
            obj.signer_infos = [];
        }
        message.fee !== undefined && (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAuthInfo();
        message.signer_infos = ((_a = object.signer_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SignerInfo.fromPartial(e); })) || [];
        message.fee = (object.fee !== undefined && object.fee !== null) ? exports.Fee.fromPartial(object.fee) : undefined;
        message.tip = (object.tip !== undefined && object.tip !== null) ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
};
function createBaseSignerInfo() {
    return { public_key: undefined, mode_info: undefined, sequence: "0" };
}
exports.SignerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.mode_info !== undefined) {
            exports.ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_info = exports.ModeInfo.decode(reader, reader.uint32());
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
            mode_info: isSet(object.mode_info) ? exports.ModeInfo.fromJSON(object.mode_info) : undefined,
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.public_key !== undefined &&
            (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.mode_info !== undefined &&
            (obj.mode_info = message.mode_info ? exports.ModeInfo.toJSON(message.mode_info) : undefined);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSignerInfo();
        message.public_key = (object.public_key !== undefined && object.public_key !== null)
            ? any_1.Any.fromPartial(object.public_key)
            : undefined;
        message.mode_info = (object.mode_info !== undefined && object.mode_info !== null)
            ? exports.ModeInfo.fromPartial(object.mode_info)
            : undefined;
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseModeInfo() {
    return { single: undefined, multi: undefined };
}
exports.ModeInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
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
            single: isSet(object.single) ? exports.ModeInfo_Single.fromJSON(object.single) : undefined,
            multi: isSet(object.multi) ? exports.ModeInfo_Multi.fromJSON(object.multi) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.single !== undefined && (obj.single = message.single ? exports.ModeInfo_Single.toJSON(message.single) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.ModeInfo_Multi.toJSON(message.multi) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseModeInfo();
        message.single = (object.single !== undefined && object.single !== null)
            ? exports.ModeInfo_Single.fromPartial(object.single)
            : undefined;
        message.multi = (object.multi !== undefined && object.multi !== null)
            ? exports.ModeInfo_Multi.fromPartial(object.multi)
            : undefined;
        return message;
    },
};
function createBaseModeInfo_Single() {
    return { mode: 0 };
}
exports.ModeInfo_Single = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { mode: isSet(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseModeInfo_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseModeInfo_Multi() {
    return { bitarray: undefined, mode_infos: [] };
}
exports.ModeInfo_Multi = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.mode_infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_infos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
            mode_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.mode_infos) ? object.mode_infos.map(function (e) { return exports.ModeInfo.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bitarray !== undefined &&
            (obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toJSON(message.bitarray) : undefined);
        if (message.mode_infos) {
            obj.mode_infos = message.mode_infos.map(function (e) { return e ? exports.ModeInfo.toJSON(e) : undefined; });
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseModeInfo_Multi();
        message.bitarray = (object.bitarray !== undefined && object.bitarray !== null)
            ? multisig_1.CompactBitArray.fromPartial(object.bitarray)
            : undefined;
        message.mode_infos = ((_a = object.mode_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModeInfo.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseFee() {
    return { amount: [], gas_limit: "0", payer: "", granter: "" };
}
exports.Fee = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gas_limit !== "0") {
            writer.uint32(16).uint64(message.gas_limit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFee();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gas_limit = longToString(reader.uint64());
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
            gas_limit: isSet(object.gas_limit) ? String(object.gas_limit) : "0",
            payer: isSet(object.payer) ? String(object.payer) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        message.gas_limit !== undefined && (obj.gas_limit = message.gas_limit);
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.gas_limit = (_b = object.gas_limit) !== null && _b !== void 0 ? _b : "0";
        message.payer = (_c = object.payer) !== null && _c !== void 0 ? _c : "";
        message.granter = (_d = object.granter) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseTip() {
    return { amount: [], tipper: "" };
}
exports.Tip = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTip();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
            tipper: isSet(object.tipper) ? String(object.tipper) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        message.tipper !== undefined && (obj.tipper = message.tipper);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTip();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.tipper = (_b = object.tipper) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAuxSignerData() {
    return { address: "", sign_doc: undefined, mode: 0, sig: new Uint8Array() };
}
exports.AuxSignerData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.sign_doc !== undefined) {
            exports.SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuxSignerData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.sign_doc = exports.SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
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
            sign_doc: isSet(object.sign_doc) ? exports.SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
            mode: isSet(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : 0,
            sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.sign_doc !== undefined &&
            (obj.sign_doc = message.sign_doc ? exports.SignDocDirectAux.toJSON(message.sign_doc) : undefined);
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        message.sig !== undefined &&
            (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAuxSignerData();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.sign_doc = (object.sign_doc !== undefined && object.sign_doc !== null)
            ? exports.SignDocDirectAux.fromPartial(object.sign_doc)
            : undefined;
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        message.sig = (_c = object.sig) !== null && _c !== void 0 ? _c : new Uint8Array();
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
//# sourceMappingURL=tx.js.map