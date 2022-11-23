"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pool_1 = require("./pool");
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseGenesisState() {
    return { pool_list: [], pool_count: "0" };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.pool_list; _i < _a.length; _i++) {
            var v = _a[_i];
            pool_1.Pool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pool_count !== "0") {
            writer.uint32(24).uint64(message.pool_count);
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
                case 2:
                    message.pool_list.push(pool_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pool_count = longToString(reader.uint64());
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
            pool_list: Array.isArray(object === null || object === void 0 ? void 0 : object.pool_list) ? object.pool_list.map(function (e) { return pool_1.Pool.fromJSON(e); }) : [],
            pool_count: isSet(object.pool_count) ? String(object.pool_count) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pool_list) {
            obj.pool_list = message.pool_list.map(function (e) { return e ? pool_1.Pool.toJSON(e) : undefined; });
        }
        else {
            obj.pool_list = [];
        }
        message.pool_count !== undefined && (obj.pool_count = message.pool_count);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.pool_list = ((_a = object.pool_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return pool_1.Pool.fromPartial(e); })) || [];
        message.pool_count = (_b = object.pool_count) !== null && _b !== void 0 ? _b : "0";
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