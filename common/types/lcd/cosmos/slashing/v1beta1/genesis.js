"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var slashing_1 = require("./slashing");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, signing_infos: [], missed_blocks: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signing_infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.missed_blocks; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signing_infos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missed_blocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined,
            signing_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signing_infos)
                ? object.signing_infos.map(function (e) { return exports.SigningInfo.fromJSON(e); })
                : [],
            missed_blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks)
                ? object.missed_blocks.map(function (e) { return exports.ValidatorMissedBlocks.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map(function (e) { return e ? exports.SigningInfo.toJSON(e) : undefined; });
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(function (e) { return e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined; });
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? slashing_1.Params.fromPartial(object.params)
            : undefined;
        message.signing_infos = ((_a = object.signing_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningInfo.fromPartial(e); })) || [];
        message.missed_blocks = ((_b = object.missed_blocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ValidatorMissedBlocks.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSigningInfo() {
    return { address: "", validator_signing_info: undefined };
}
exports.SigningInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validator_signing_info !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validator_signing_info = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            validator_signing_info: isSet(object.validator_signing_info)
                ? slashing_1.ValidatorSigningInfo.fromJSON(object.validator_signing_info)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validator_signing_info !== undefined && (obj.validator_signing_info = message.validator_signing_info
            ? slashing_1.ValidatorSigningInfo.toJSON(message.validator_signing_info)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.validator_signing_info =
            (object.validator_signing_info !== undefined && object.validator_signing_info !== null)
                ? slashing_1.ValidatorSigningInfo.fromPartial(object.validator_signing_info)
                : undefined;
        return message;
    },
};
function createBaseValidatorMissedBlocks() {
    return { address: "", missed_blocks: [] };
}
exports.ValidatorMissedBlocks = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.missed_blocks; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missed_blocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            missed_blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks)
                ? object.missed_blocks.map(function (e) { return exports.MissedBlock.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(function (e) { return e ? exports.MissedBlock.toJSON(e) : undefined; });
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorMissedBlocks();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.missed_blocks = ((_b = object.missed_blocks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MissedBlock.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMissedBlock() {
    return { index: "0", missed: false };
}
exports.MissedBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMissedBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.int64());
                    break;
                case 2:
                    message.missed = reader.bool();
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
            missed: isSet(object.missed) ? Boolean(object.missed) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMissedBlock();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.missed = (_b = object.missed) !== null && _b !== void 0 ? _b : false;
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