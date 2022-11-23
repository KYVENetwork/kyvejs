"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantQueueItem = exports.GrantAuthorization = exports.Grant = exports.GenericAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.authz.v1beta1";
function createBaseGenericAuthorization() {
    return { msg: "" };
}
exports.GenericAuthorization = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { msg: isSet(object.msg) ? String(object.msg) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGenericAuthorization();
        message.msg = (_a = object.msg) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGrant() {
    return { authorization: undefined, expiration: undefined };
}
exports.Grant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.expiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            authorization: isSet(object.authorization) ? any_1.Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authorization !== undefined &&
            (obj.authorization = message.authorization ? any_1.Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGrant();
        message.authorization = (object.authorization !== undefined && object.authorization !== null)
            ? any_1.Any.fromPartial(object.authorization)
            : undefined;
        message.expiration = (_a = object.expiration) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseGrantAuthorization() {
    return { granter: "", grantee: "", authorization: undefined, expiration: undefined };
}
exports.GrantAuthorization = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            any_1.Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrantAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.authorization = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.expiration = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            authorization: isSet(object.authorization) ? any_1.Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.authorization !== undefined &&
            (obj.authorization = message.authorization ? any_1.Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGrantAuthorization();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.authorization = (object.authorization !== undefined && object.authorization !== null)
            ? any_1.Any.fromPartial(object.authorization)
            : undefined;
        message.expiration = (_c = object.expiration) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGrantQueueItem() {
    return { msg_type_urls: [] };
}
exports.GrantQueueItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.msg_type_urls; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGrantQueueItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type_urls.push(reader.string());
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
            msg_type_urls: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_type_urls) ? object.msg_type_urls.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(function (e) { return e; });
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGrantQueueItem();
        message.msg_type_urls = ((_a = object.msg_type_urls) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function toTimestamp(date) {
    var seconds = Math.trunc(date.getTime() / 1000).toString();
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=authz.js.map