"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisOwners = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var capability_1 = require("./capability");
exports.protobufPackage = "cosmos.capability.v1beta1";
function createBaseGenesisOwners() {
    return { index: "0", index_owners: undefined };
}
exports.GenesisOwners = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.index_owners !== undefined) {
            capability_1.CapabilityOwners.encode(message.index_owners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisOwners();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.index_owners = capability_1.CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? String(object.index) : "0",
            index_owners: isSet(object.index_owners) ? capability_1.CapabilityOwners.fromJSON(object.index_owners) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.index_owners !== undefined &&
            (obj.index_owners = message.index_owners ? capability_1.CapabilityOwners.toJSON(message.index_owners) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGenesisOwners();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.index_owners = (object.index_owners !== undefined && object.index_owners !== null)
            ? capability_1.CapabilityOwners.fromPartial(object.index_owners)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { index: "0", owners: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        for (var _i = 0, _a = message.owners; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.owners.push(exports.GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? String(object.index) : "0",
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map(function (e) { return exports.GenesisOwners.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        if (message.owners) {
            obj.owners = message.owners.map(function (e) { return e ? exports.GenesisOwners.toJSON(e) : undefined; });
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.owners = ((_b = object.owners) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.GenesisOwners.fromPartial(e); })) || [];
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
//# sourceMappingURL=genesis.js.map