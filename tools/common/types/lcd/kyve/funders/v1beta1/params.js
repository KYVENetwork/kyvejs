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
exports.protobufPackage = "kyve.funders.v1beta1";
function createBaseParams() {
  return {
    min_funding_amount: "0",
    min_funding_amount_per_bundle: "0",
    min_funding_multiple: "0",
  };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.min_funding_amount !== "0") {
      writer.uint32(8).uint64(message.min_funding_amount);
    }
    if (message.min_funding_amount_per_bundle !== "0") {
      writer.uint32(16).uint64(message.min_funding_amount_per_bundle);
    }
    if (message.min_funding_multiple !== "0") {
      writer.uint32(24).uint64(message.min_funding_multiple);
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
          message.min_funding_amount = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.min_funding_amount_per_bundle = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.min_funding_multiple = longToString(reader.uint64());
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
      min_funding_amount: isSet(object.min_funding_amount)
        ? globalThis.String(object.min_funding_amount)
        : "0",
      min_funding_amount_per_bundle: isSet(object.min_funding_amount_per_bundle)
        ? globalThis.String(object.min_funding_amount_per_bundle)
        : "0",
      min_funding_multiple: isSet(object.min_funding_multiple)
        ? globalThis.String(object.min_funding_multiple)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.min_funding_amount !== "0") {
      obj.min_funding_amount = message.min_funding_amount;
    }
    if (message.min_funding_amount_per_bundle !== "0") {
      obj.min_funding_amount_per_bundle = message.min_funding_amount_per_bundle;
    }
    if (message.min_funding_multiple !== "0") {
      obj.min_funding_multiple = message.min_funding_multiple;
    }
    return obj;
  },
  create: function (base) {
    return exports.Params.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseParams();
    message.min_funding_amount =
      (_a = object.min_funding_amount) !== null && _a !== void 0 ? _a : "0";
    message.min_funding_amount_per_bundle =
      (_b = object.min_funding_amount_per_bundle) !== null && _b !== void 0
        ? _b
        : "0";
    message.min_funding_multiple =
      (_c = object.min_funding_multiple) !== null && _c !== void 0 ? _c : "0";
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
