"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var params_1 = require("./params");
var pool_1 = require("./pool");
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseGenesisState() {
  return { params: undefined, pool_list: [], pool_count: "0" };
}
exports.GenesisState = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.params !== undefined) {
      params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
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
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.params = params_1.Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.pool_list.push(pool_1.Pool.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.pool_count = longToString(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      params: isSet(object.params)
        ? params_1.Params.fromJSON(object.params)
        : undefined,
      pool_list: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.pool_list
      )
        ? object.pool_list.map(function (e) {
            return pool_1.Pool.fromJSON(e);
          })
        : [],
      pool_count: isSet(object.pool_count)
        ? globalThis.String(object.pool_count)
        : "0",
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.params !== undefined) {
      obj.params = params_1.Params.toJSON(message.params);
    }
    if (
      (_a = message.pool_list) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.pool_list = message.pool_list.map(function (e) {
        return pool_1.Pool.toJSON(e);
      });
    }
    if (message.pool_count !== "0") {
      obj.pool_count = message.pool_count;
    }
    return obj;
  },
  create: function (base) {
    return exports.GenesisState.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? params_1.Params.fromPartial(object.params)
        : undefined;
    message.pool_list =
      ((_a = object.pool_list) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return pool_1.Pool.fromPartial(e);
          })) || [];
    message.pool_count =
      (_b = object.pool_count) !== null && _b !== void 0 ? _b : "0";
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
