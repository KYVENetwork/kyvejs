"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Minter = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.mint.v1beta1";
function createBaseMinter() {
    return { inflation: "", annual_provisions: "" };
}
exports.Minter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.inflation !== "") {
            writer.uint32(10).string(message.inflation);
        }
        if (message.annual_provisions !== "") {
            writer.uint32(18).string(message.annual_provisions);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMinter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.string();
                    break;
                case 2:
                    message.annual_provisions = reader.string();
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
            inflation: isSet(object.inflation) ? String(object.inflation) : "",
            annual_provisions: isSet(object.annual_provisions) ? String(object.annual_provisions) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.inflation !== undefined && (obj.inflation = message.inflation);
        message.annual_provisions !== undefined && (obj.annual_provisions = message.annual_provisions);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMinter();
        message.inflation = (_a = object.inflation) !== null && _a !== void 0 ? _a : "";
        message.annual_provisions = (_b = object.annual_provisions) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseParams() {
    return {
        mint_denom: "",
        inflation_rate_change: "",
        inflation_max: "",
        inflation_min: "",
        goal_bonded: "",
        blocks_per_year: "0",
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.mint_denom !== "") {
            writer.uint32(10).string(message.mint_denom);
        }
        if (message.inflation_rate_change !== "") {
            writer.uint32(18).string(message.inflation_rate_change);
        }
        if (message.inflation_max !== "") {
            writer.uint32(26).string(message.inflation_max);
        }
        if (message.inflation_min !== "") {
            writer.uint32(34).string(message.inflation_min);
        }
        if (message.goal_bonded !== "") {
            writer.uint32(42).string(message.goal_bonded);
        }
        if (message.blocks_per_year !== "0") {
            writer.uint32(48).uint64(message.blocks_per_year);
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
                    message.mint_denom = reader.string();
                    break;
                case 2:
                    message.inflation_rate_change = reader.string();
                    break;
                case 3:
                    message.inflation_max = reader.string();
                    break;
                case 4:
                    message.inflation_min = reader.string();
                    break;
                case 5:
                    message.goal_bonded = reader.string();
                    break;
                case 6:
                    message.blocks_per_year = longToString(reader.uint64());
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
            mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
            inflation_rate_change: isSet(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
            inflation_max: isSet(object.inflation_max) ? String(object.inflation_max) : "",
            inflation_min: isSet(object.inflation_min) ? String(object.inflation_min) : "",
            goal_bonded: isSet(object.goal_bonded) ? String(object.goal_bonded) : "",
            blocks_per_year: isSet(object.blocks_per_year) ? String(object.blocks_per_year) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
        message.inflation_rate_change !== undefined && (obj.inflation_rate_change = message.inflation_rate_change);
        message.inflation_max !== undefined && (obj.inflation_max = message.inflation_max);
        message.inflation_min !== undefined && (obj.inflation_min = message.inflation_min);
        message.goal_bonded !== undefined && (obj.goal_bonded = message.goal_bonded);
        message.blocks_per_year !== undefined && (obj.blocks_per_year = message.blocks_per_year);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseParams();
        message.mint_denom = (_a = object.mint_denom) !== null && _a !== void 0 ? _a : "";
        message.inflation_rate_change = (_b = object.inflation_rate_change) !== null && _b !== void 0 ? _b : "";
        message.inflation_max = (_c = object.inflation_max) !== null && _c !== void 0 ? _c : "";
        message.inflation_min = (_d = object.inflation_min) !== null && _d !== void 0 ? _d : "";
        message.goal_bonded = (_e = object.goal_bonded) !== null && _e !== void 0 ? _e : "";
        message.blocks_per_year = (_f = object.blocks_per_year) !== null && _f !== void 0 ? _f : "0";
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
//# sourceMappingURL=mint.js.map