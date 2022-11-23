"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.api";
function createBaseHttp() {
    return { rules: [], fully_decode_reserved_expansion: false };
}
exports.Http = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.rules; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fully_decode_reserved_expansion === true) {
            writer.uint32(16).bool(message.fully_decode_reserved_expansion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fully_decode_reserved_expansion = reader.bool();
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
            rules: Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map(function (e) { return exports.HttpRule.fromJSON(e); }) : [],
            fully_decode_reserved_expansion: isSet(object.fully_decode_reserved_expansion)
                ? Boolean(object.fully_decode_reserved_expansion)
                : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(function (e) { return e ? exports.HttpRule.toJSON(e) : undefined; });
        }
        else {
            obj.rules = [];
        }
        message.fully_decode_reserved_expansion !== undefined &&
            (obj.fully_decode_reserved_expansion = message.fully_decode_reserved_expansion);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.HttpRule.fromPartial(e); })) || [];
        message.fully_decode_reserved_expansion = (_b = object.fully_decode_reserved_expansion) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        response_body: "",
        additional_bindings: [],
    };
}
exports.HttpRule = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.response_body !== "") {
            writer.uint32(98).string(message.response_body);
        }
        for (var _i = 0, _a = message.additional_bindings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHttpRule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message.delete = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.response_body = reader.string();
                    break;
                case 11:
                    message.additional_bindings.push(exports.HttpRule.decode(reader, reader.uint32()));
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
            selector: isSet(object.selector) ? String(object.selector) : "",
            get: isSet(object.get) ? String(object.get) : undefined,
            put: isSet(object.put) ? String(object.put) : undefined,
            post: isSet(object.post) ? String(object.post) : undefined,
            delete: isSet(object.delete) ? String(object.delete) : undefined,
            patch: isSet(object.patch) ? String(object.patch) : undefined,
            custom: isSet(object.custom) ? exports.CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: isSet(object.body) ? String(object.body) : "",
            response_body: isSet(object.response_body) ? String(object.response_body) : "",
            additional_bindings: Array.isArray(object === null || object === void 0 ? void 0 : object.additional_bindings)
                ? object.additional_bindings.map(function (e) { return exports.HttpRule.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.get !== undefined && (obj.get = message.get);
        message.put !== undefined && (obj.put = message.put);
        message.post !== undefined && (obj.post = message.post);
        message.delete !== undefined && (obj.delete = message.delete);
        message.patch !== undefined && (obj.patch = message.patch);
        message.custom !== undefined &&
            (obj.custom = message.custom ? exports.CustomHttpPattern.toJSON(message.custom) : undefined);
        message.body !== undefined && (obj.body = message.body);
        message.response_body !== undefined && (obj.response_body = message.response_body);
        if (message.additional_bindings) {
            obj.additional_bindings = message.additional_bindings.map(function (e) { return e ? exports.HttpRule.toJSON(e) : undefined; });
        }
        else {
            obj.additional_bindings = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseHttpRule();
        message.selector = (_a = object.selector) !== null && _a !== void 0 ? _a : "";
        message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
        message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
        message.post = (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
        message.delete = (_e = object.delete) !== null && _e !== void 0 ? _e : undefined;
        message.patch = (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
        message.custom = (object.custom !== undefined && object.custom !== null)
            ? exports.CustomHttpPattern.fromPartial(object.custom)
            : undefined;
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : "";
        message.response_body = (_h = object.response_body) !== null && _h !== void 0 ? _h : "";
        message.additional_bindings = ((_j = object.additional_bindings) === null || _j === void 0 ? void 0 : _j.map(function (e) { return exports.HttpRule.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCustomHttpPattern() {
    return { kind: "", path: "" };
}
exports.CustomHttpPattern = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { kind: isSet(object.kind) ? String(object.kind) : "", path: isSet(object.path) ? String(object.path) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.kind !== undefined && (obj.kind = message.kind);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCustomHttpPattern();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=http.js.map