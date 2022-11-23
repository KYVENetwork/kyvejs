"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityOwners = exports.Owner = exports.Capability = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.capability.v1beta1";
function createBaseCapability() {
    return { index: "0" };
}
exports.Capability = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCapability();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { index: isSet(object.index) ? String(object.index) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCapability();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseOwner() {
    return { module: "", name: "" };
}
exports.Owner = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOwner();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            module: isSet(object.module) ? String(object.module) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOwner();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCapabilityOwners() {
    return { owners: [] };
}
exports.CapabilityOwners = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.owners; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Owner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCapabilityOwners();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owners.push(exports.Owner.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map(function (e) { return exports.Owner.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(function (e) { return e ? exports.Owner.toJSON(e) : undefined; });
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCapabilityOwners();
        message.owners = ((_a = object.owners) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Owner.fromPartial(e); })) || [];
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
//# sourceMappingURL=capability.js.map