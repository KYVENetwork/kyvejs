"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBurn = exports.EventMint = exports.EventSend = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseEventSend() {
    return { class_id: "", id: "", sender: "", receiver: "" };
}
exports.EventSend = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventSend();
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
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventSend();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        message.receiver = (_d = object.receiver) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventMint() {
    return { class_id: "", id: "", owner: "" };
}
exports.EventMint = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventMint();
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
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventMint();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventBurn() {
    return { class_id: "", id: "", owner: "" };
}
exports.EventBurn = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventBurn();
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
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventBurn();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=event.js.map