"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseParams() {
    return { vote_slash: "", upload_slash: "", timeout_slash: "", commission_change_time: "0", leave_pool_time: "0" };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.vote_slash !== "") {
            writer.uint32(10).string(message.vote_slash);
        }
        if (message.upload_slash !== "") {
            writer.uint32(18).string(message.upload_slash);
        }
        if (message.timeout_slash !== "") {
            writer.uint32(26).string(message.timeout_slash);
        }
        if (message.commission_change_time !== "0") {
            writer.uint32(32).uint64(message.commission_change_time);
        }
        if (message.leave_pool_time !== "0") {
            writer.uint32(40).uint64(message.leave_pool_time);
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
                    message.vote_slash = reader.string();
                    break;
                case 2:
                    message.upload_slash = reader.string();
                    break;
                case 3:
                    message.timeout_slash = reader.string();
                    break;
                case 4:
                    message.commission_change_time = longToString(reader.uint64());
                    break;
                case 5:
                    message.leave_pool_time = longToString(reader.uint64());
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
            vote_slash: isSet(object.vote_slash) ? String(object.vote_slash) : "",
            upload_slash: isSet(object.upload_slash) ? String(object.upload_slash) : "",
            timeout_slash: isSet(object.timeout_slash) ? String(object.timeout_slash) : "",
            commission_change_time: isSet(object.commission_change_time) ? String(object.commission_change_time) : "0",
            leave_pool_time: isSet(object.leave_pool_time) ? String(object.leave_pool_time) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote_slash !== undefined && (obj.vote_slash = message.vote_slash);
        message.upload_slash !== undefined && (obj.upload_slash = message.upload_slash);
        message.timeout_slash !== undefined && (obj.timeout_slash = message.timeout_slash);
        message.commission_change_time !== undefined && (obj.commission_change_time = message.commission_change_time);
        message.leave_pool_time !== undefined && (obj.leave_pool_time = message.leave_pool_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseParams();
        message.vote_slash = (_a = object.vote_slash) !== null && _a !== void 0 ? _a : "";
        message.upload_slash = (_b = object.upload_slash) !== null && _b !== void 0 ? _b : "";
        message.timeout_slash = (_c = object.timeout_slash) !== null && _c !== void 0 ? _c : "";
        message.commission_change_time = (_d = object.commission_change_time) !== null && _d !== void 0 ? _d : "0";
        message.leave_pool_time = (_e = object.leave_pool_time) !== null && _e !== void 0 ? _e : "0";
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