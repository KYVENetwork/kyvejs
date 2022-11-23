"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonDescriptor = exports.SecondaryIndexDescriptor = exports.PrimaryKeyDescriptor = exports.TableDescriptor = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.orm.v1";
function createBaseTableDescriptor() {
    return { primary_key: undefined, index: [], id: 0 };
}
exports.TableDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.primary_key !== undefined) {
            exports.PrimaryKeyDescriptor.encode(message.primary_key, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.index; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTableDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primary_key = exports.PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(exports.SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
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
            primary_key: isSet(object.primary_key) ? exports.PrimaryKeyDescriptor.fromJSON(object.primary_key) : undefined,
            index: Array.isArray(object === null || object === void 0 ? void 0 : object.index) ? object.index.map(function (e) { return exports.SecondaryIndexDescriptor.fromJSON(e); }) : [],
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.primary_key !== undefined &&
            (obj.primary_key = message.primary_key ? exports.PrimaryKeyDescriptor.toJSON(message.primary_key) : undefined);
        if (message.index) {
            obj.index = message.index.map(function (e) { return e ? exports.SecondaryIndexDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.index = [];
        }
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTableDescriptor();
        message.primary_key = (object.primary_key !== undefined && object.primary_key !== null)
            ? exports.PrimaryKeyDescriptor.fromPartial(object.primary_key)
            : undefined;
        message.index = ((_a = object.index) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SecondaryIndexDescriptor.fromPartial(e); })) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePrimaryKeyDescriptor() {
    return { fields: "", auto_increment: false };
}
exports.PrimaryKeyDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.auto_increment === true) {
            writer.uint32(16).bool(message.auto_increment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.auto_increment = reader.bool();
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
            fields: isSet(object.fields) ? String(object.fields) : "",
            auto_increment: isSet(object.auto_increment) ? Boolean(object.auto_increment) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.auto_increment !== undefined && (obj.auto_increment = message.auto_increment);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePrimaryKeyDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.auto_increment = (_b = object.auto_increment) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSecondaryIndexDescriptor() {
    return { fields: "", id: 0, unique: false };
}
exports.SecondaryIndexDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
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
            fields: isSet(object.fields) ? String(object.fields) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.unique !== undefined && (obj.unique = message.unique);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSecondaryIndexDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        message.unique = (_c = object.unique) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseSingletonDescriptor() {
    return { id: 0 };
}
exports.SingletonDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSingletonDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=orm.js.map