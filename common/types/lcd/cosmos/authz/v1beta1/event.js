"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRevoke = exports.EventGrant = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.authz.v1beta1";
function createBaseEventGrant() {
    return { msg_type_url: "", granter: "", grantee: "" };
}
exports.EventGrant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventGrant();
        message.msg_type_url = (_a = object.msg_type_url) !== null && _a !== void 0 ? _a : "";
        message.granter = (_b = object.granter) !== null && _b !== void 0 ? _b : "";
        message.grantee = (_c = object.grantee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventRevoke() {
    return { msg_type_url: "", granter: "", grantee: "" };
}
exports.EventRevoke = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventRevoke();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventRevoke();
        message.msg_type_url = (_a = object.msg_type_url) !== null && _a !== void 0 ? _a : "";
        message.granter = (_b = object.granter) !== null && _b !== void 0 ? _b : "";
        message.grantee = (_c = object.grantee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=event.js.map