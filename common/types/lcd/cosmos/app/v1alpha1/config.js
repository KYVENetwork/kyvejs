"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleConfig = exports.Config = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.app.v1alpha1";
function createBaseConfig() {
    return { modules: [] };
}
exports.Config = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.modules; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(exports.ModuleConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { modules: Array.isArray(object === null || object === void 0 ? void 0 : object.modules) ? object.modules.map(function (e) { return exports.ModuleConfig.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.modules) {
            obj.modules = message.modules.map(function (e) { return e ? exports.ModuleConfig.toJSON(e) : undefined; });
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfig();
        message.modules = ((_a = object.modules) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleConfig.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseModuleConfig() {
    return { name: "", config: undefined };
}
exports.ModuleConfig = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            any_1.Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = any_1.Any.decode(reader, reader.uint32());
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
            config: isSet(object.config) ? any_1.Any.fromJSON(object.config) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.config !== undefined && (obj.config = message.config ? any_1.Any.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseModuleConfig();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.config = (object.config !== undefined && object.config !== null)
            ? any_1.Any.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=config.js.map