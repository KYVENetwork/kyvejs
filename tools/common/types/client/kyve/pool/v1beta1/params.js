"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseParams() {
  return { protocol_inflation_share: "", pool_inflation_payout_rate: "" };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.protocol_inflation_share !== "") {
      writer.uint32(10).string(message.protocol_inflation_share);
    }
    if (message.pool_inflation_payout_rate !== "") {
      writer.uint32(18).string(message.pool_inflation_payout_rate);
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
          if (tag !== 10) {
            break;
          }
          message.protocol_inflation_share = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.pool_inflation_payout_rate = reader.string();
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
      protocol_inflation_share: isSet(object.protocol_inflation_share)
        ? globalThis.String(object.protocol_inflation_share)
        : "",
      pool_inflation_payout_rate: isSet(object.pool_inflation_payout_rate)
        ? globalThis.String(object.pool_inflation_payout_rate)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.protocol_inflation_share !== "") {
      obj.protocol_inflation_share = message.protocol_inflation_share;
    }
    if (message.pool_inflation_payout_rate !== "") {
      obj.pool_inflation_payout_rate = message.pool_inflation_payout_rate;
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
    message.protocol_inflation_share =
      (_a = object.protocol_inflation_share) !== null && _a !== void 0
        ? _a
        : "";
    message.pool_inflation_payout_rate =
      (_b = object.pool_inflation_payout_rate) !== null && _b !== void 0
        ? _b
        : "";
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map
