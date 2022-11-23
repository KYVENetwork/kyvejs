"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseParams() {
    return { unbonding_delegation_time: "0", redelegation_cooldown: "0", redelegation_max_amount: "0" };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.unbonding_delegation_time !== "0") {
            writer.uint32(8).uint64(message.unbonding_delegation_time);
        }
        if (message.redelegation_cooldown !== "0") {
            writer.uint32(16).uint64(message.redelegation_cooldown);
        }
        if (message.redelegation_max_amount !== "0") {
            writer.uint32(24).uint64(message.redelegation_max_amount);
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
                    message.unbonding_delegation_time = longToString(reader.uint64());
                    break;
                case 2:
                    message.redelegation_cooldown = longToString(reader.uint64());
                    break;
                case 3:
                    message.redelegation_max_amount = longToString(reader.uint64());
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
            unbonding_delegation_time: isSet(object.unbonding_delegation_time)
                ? String(object.unbonding_delegation_time)
                : "0",
            redelegation_cooldown: isSet(object.redelegation_cooldown) ? String(object.redelegation_cooldown) : "0",
            redelegation_max_amount: isSet(object.redelegation_max_amount) ? String(object.redelegation_max_amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.unbonding_delegation_time !== undefined &&
            (obj.unbonding_delegation_time = message.unbonding_delegation_time);
        message.redelegation_cooldown !== undefined && (obj.redelegation_cooldown = message.redelegation_cooldown);
        message.redelegation_max_amount !== undefined && (obj.redelegation_max_amount = message.redelegation_max_amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseParams();
        message.unbonding_delegation_time = (_a = object.unbonding_delegation_time) !== null && _a !== void 0 ? _a : "0";
        message.redelegation_cooldown = (_b = object.redelegation_cooldown) !== null && _b !== void 0 ? _b : "0";
        message.redelegation_max_amount = (_c = object.redelegation_max_amount) !== null && _c !== void 0 ? _c : "0";
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