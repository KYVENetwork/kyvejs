"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.Class = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseClass() {
    return { id: "", name: "", symbol: "", description: "", uri: "", uri_hash: "", data: undefined };
}
exports.Class = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.uri !== "") {
            writer.uint32(42).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(50).string(message.uri_hash);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClass();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.uri = reader.string();
                    break;
                case 6:
                    message.uri_hash = reader.string();
                    break;
                case 7:
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            description: isSet(object.description) ? String(object.description) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined && (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseClass();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.symbol = (_c = object.symbol) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.uri = (_e = object.uri) !== null && _e !== void 0 ? _e : "";
        message.uri_hash = (_f = object.uri_hash) !== null && _f !== void 0 ? _f : "";
        message.data = (object.data !== undefined && object.data !== null) ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
};
function createBaseNFT() {
    return { class_id: "", id: "", uri: "", uri_hash: "", data: undefined };
}
exports.NFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(34).string(message.uri_hash);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNFT();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.uri_hash = reader.string();
                    break;
                case 10:
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseNFT();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.uri = (_c = object.uri) !== null && _c !== void 0 ? _c : "";
        message.uri_hash = (_d = object.uri_hash) !== null && _d !== void 0 ? _d : "";
        message.data = (object.data !== undefined && object.data !== null) ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=nft.js.map