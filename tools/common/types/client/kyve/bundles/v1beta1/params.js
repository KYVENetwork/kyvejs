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
exports.protobufPackage = "kyve.bundles.v1beta1";
function createBaseParams() {
  return {
    upload_timeout: "0",
    storage_cost: "",
    network_fee: "",
    max_points: "0",
  };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.upload_timeout !== "0") {
      writer.uint32(8).uint64(message.upload_timeout);
    }
    if (message.storage_cost !== "") {
      writer.uint32(18).string(message.storage_cost);
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
          message.upload_timeout = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.storage_cost = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.network_fee = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.max_points = longToString(reader.uint64());
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
      upload_timeout: isSet(object.upload_timeout)
        ? globalThis.String(object.upload_timeout)
        : "0",
      storage_cost: isSet(object.storage_cost)
        ? globalThis.String(object.storage_cost)
        : "",
      network_fee: isSet(object.network_fee)
        ? globalThis.String(object.network_fee)
        : "",
      max_points: isSet(object.max_points)
        ? globalThis.String(object.max_points)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.upload_timeout !== "0") {
      obj.upload_timeout = message.upload_timeout;
    }
    if (message.storage_cost !== "") {
      obj.storage_cost = message.storage_cost;
    }
    if (message.network_fee !== "") {
      obj.network_fee = message.network_fee;
    }
    if (message.max_points !== "0") {
      obj.max_points = message.max_points;
    }
    return obj;
  },
  create: function (base) {
    return exports.Params.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseParams();
    message.upload_timeout =
      (_a = object.upload_timeout) !== null && _a !== void 0 ? _a : "0";
    message.storage_cost =
      (_b = object.storage_cost) !== null && _b !== void 0 ? _b : "";
    message.network_fee =
      (_c = object.network_fee) !== null && _c !== void 0 ? _c : "";
    message.max_points =
      (_d = object.max_points) !== null && _d !== void 0 ? _d : "0";
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
