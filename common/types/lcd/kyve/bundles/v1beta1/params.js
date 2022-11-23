"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.bundles.v1beta1";
function createBaseParams() {
    return { upload_timeout: "0", storage_cost: "0", network_fee: "", max_points: "0" };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.upload_timeout !== "0") {
            writer.uint32(8).uint64(message.upload_timeout);
        }
        if (message.storage_cost !== "0") {
            writer.uint32(16).uint64(message.storage_cost);
        }
        if (message.network_fee !== "") {
            writer.uint32(26).string(message.network_fee);
        }
        if (message.max_points !== "0") {
            writer.uint32(32).uint64(message.max_points);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upload_timeout = longToString(reader.uint64());
                    break;
                case 2:
                    message.storage_cost = longToString(reader.uint64());
                    break;
                case 3:
                    message.network_fee = reader.string();
                    break;
                case 4:
                    message.max_points = longToString(reader.uint64());
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
            upload_timeout: isSet(object.upload_timeout) ? String(object.upload_timeout) : "0",
            storage_cost: isSet(object.storage_cost) ? String(object.storage_cost) : "0",
            network_fee: isSet(object.network_fee) ? String(object.network_fee) : "",
            max_points: isSet(object.max_points) ? String(object.max_points) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.upload_timeout !== undefined && (obj.upload_timeout = message.upload_timeout);
        message.storage_cost !== undefined && (obj.storage_cost = message.storage_cost);
        message.network_fee !== undefined && (obj.network_fee = message.network_fee);
        message.max_points !== undefined && (obj.max_points = message.max_points);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseParams();
        message.upload_timeout = (_a = object.upload_timeout) !== null && _a !== void 0 ? _a : "0";
        message.storage_cost = (_b = object.storage_cost) !== null && _b !== void 0 ? _b : "0";
        message.network_fee = (_c = object.network_fee) !== null && _c !== void 0 ? _c : "";
        message.max_points = (_d = object.max_points) !== null && _d !== void 0 ? _d : "0";
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
//# sourceMappingURL=params.js.map