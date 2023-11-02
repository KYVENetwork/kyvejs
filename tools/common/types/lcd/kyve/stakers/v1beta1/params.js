"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseParams() {
  return { commission_change_time: "0", leave_pool_time: "0" };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.commission_change_time !== "0") {
      writer.uint32(8).uint64(message.commission_change_time);
    }
    if (message.leave_pool_time !== "0") {
      writer.uint32(16).uint64(message.leave_pool_time);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.commission_change_time = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.leave_pool_time = longToString(reader.uint64());
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
      commission_change_time: isSet(object.commission_change_time)
        ? globalThis.String(object.commission_change_time)
        : "0",
      leave_pool_time: isSet(object.leave_pool_time)
        ? globalThis.String(object.leave_pool_time)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.commission_change_time !== "0") {
      obj.commission_change_time = message.commission_change_time;
    }
    if (message.leave_pool_time !== "0") {
      obj.leave_pool_time = message.leave_pool_time;
    }
    return obj;
  },
  create: function (base) {
    return exports.Params.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseParams();
    message.commission_change_time =
      (_a = object.commission_change_time) !== null && _a !== void 0 ? _a : "0";
    message.leave_pool_time =
      (_b = object.leave_pool_time) !== null && _b !== void 0 ? _b : "0";
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
