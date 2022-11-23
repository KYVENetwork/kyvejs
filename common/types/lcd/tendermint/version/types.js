"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consensus = exports.App = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.version";
function createBaseApp() {
    return { protocol: "0", software: "" };
}
exports.App = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.protocol !== "0") {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseApp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = longToString(reader.uint64());
                    break;
                case 2:
                    message.software = reader.string();
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
            protocol: isSet(object.protocol) ? String(object.protocol) : "0",
            software: isSet(object.software) ? String(object.software) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.protocol !== undefined && (obj.protocol = message.protocol);
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseApp();
        message.protocol = (_a = object.protocol) !== null && _a !== void 0 ? _a : "0";
        message.software = (_b = object.software) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseConsensus() {
    return { block: "0", app: "0" };
}
exports.Consensus = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block !== "0") {
            writer.uint32(8).uint64(message.block);
        }
        if (message.app !== "0") {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = longToString(reader.uint64());
                    break;
                case 2:
                    message.app = longToString(reader.uint64());
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
            block: isSet(object.block) ? String(object.block) : "0",
            app: isSet(object.app) ? String(object.app) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block !== undefined && (obj.block = message.block);
        message.app !== undefined && (obj.app = message.app);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseConsensus();
        message.block = (_a = object.block) !== null && _a !== void 0 ? _a : "0";
        message.app = (_b = object.app) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=types.js.map