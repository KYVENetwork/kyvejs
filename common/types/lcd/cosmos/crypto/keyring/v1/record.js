"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record_Offline = exports.Record_Multi = exports.Record_Ledger = exports.Record_Local = exports.Record = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../../google/protobuf/any");
var hd_1 = require("../../hd/v1/hd");
exports.protobufPackage = "cosmos.crypto.keyring.v1";
function createBaseRecord() {
    return { name: "", pub_key: undefined, local: undefined, ledger: undefined, multi: undefined, offline: undefined };
}
exports.Record = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            exports.Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            exports.Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            exports.Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = exports.Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = exports.Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = exports.Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = exports.Record_Offline.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            pub_key: isSet(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            local: isSet(object.local) ? exports.Record_Local.fromJSON(object.local) : undefined,
            ledger: isSet(object.ledger) ? exports.Record_Ledger.fromJSON(object.ledger) : undefined,
            multi: isSet(object.multi) ? exports.Record_Multi.fromJSON(object.multi) : undefined,
            offline: isSet(object.offline) ? exports.Record_Offline.fromJSON(object.offline) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.local !== undefined && (obj.local = message.local ? exports.Record_Local.toJSON(message.local) : undefined);
        message.ledger !== undefined && (obj.ledger = message.ledger ? exports.Record_Ledger.toJSON(message.ledger) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.Record_Multi.toJSON(message.multi) : undefined);
        message.offline !== undefined &&
            (obj.offline = message.offline ? exports.Record_Offline.toJSON(message.offline) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRecord();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
            ? any_1.Any.fromPartial(object.pub_key)
            : undefined;
        message.local = (object.local !== undefined && object.local !== null)
            ? exports.Record_Local.fromPartial(object.local)
            : undefined;
        message.ledger = (object.ledger !== undefined && object.ledger !== null)
            ? exports.Record_Ledger.fromPartial(object.ledger)
            : undefined;
        message.multi = (object.multi !== undefined && object.multi !== null)
            ? exports.Record_Multi.fromPartial(object.multi)
            : undefined;
        message.offline = (object.offline !== undefined && object.offline !== null)
            ? exports.Record_Offline.fromPartial(object.offline)
            : undefined;
        return message;
    },
};
function createBaseRecord_Local() {
    return { priv_key: undefined, priv_key_type: "" };
}
exports.Record_Local = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.priv_key !== undefined) {
            any_1.Any.encode(message.priv_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.priv_key_type !== "") {
            writer.uint32(18).string(message.priv_key_type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Local();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priv_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.priv_key_type = reader.string();
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
            priv_key: isSet(object.priv_key) ? any_1.Any.fromJSON(object.priv_key) : undefined,
            priv_key_type: isSet(object.priv_key_type) ? String(object.priv_key_type) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.priv_key !== undefined && (obj.priv_key = message.priv_key ? any_1.Any.toJSON(message.priv_key) : undefined);
        message.priv_key_type !== undefined && (obj.priv_key_type = message.priv_key_type);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRecord_Local();
        message.priv_key = (object.priv_key !== undefined && object.priv_key !== null)
            ? any_1.Any.fromPartial(object.priv_key)
            : undefined;
        message.priv_key_type = (_a = object.priv_key_type) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRecord_Ledger() {
    return { path: undefined };
}
exports.Record_Ledger = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.path !== undefined) {
            hd_1.BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = hd_1.BIP44Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { path: isSet(object.path) ? hd_1.BIP44Params.fromJSON(object.path) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path ? hd_1.BIP44Params.toJSON(message.path) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseRecord_Ledger();
        message.path = (object.path !== undefined && object.path !== null)
            ? hd_1.BIP44Params.fromPartial(object.path)
            : undefined;
        return message;
    },
};
function createBaseRecord_Multi() {
    return {};
}
exports.Record_Multi = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Multi();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseRecord_Multi();
        return message;
    },
};
function createBaseRecord_Offline() {
    return {};
}
exports.Record_Offline = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecord_Offline();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseRecord_Offline();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=record.js.map