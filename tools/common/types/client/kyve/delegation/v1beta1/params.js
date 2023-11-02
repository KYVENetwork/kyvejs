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
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseParams() {
  return {
    unbonding_delegation_time: "0",
    redelegation_cooldown: "0",
    redelegation_max_amount: "0",
    vote_slash: "",
    upload_slash: "",
    timeout_slash: "",
  };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.unbonding_delegation_time !== "0") {
      writer.uint32(8).uint64(message.unbonding_delegation_time);
    }
    if (message.redelegation_cooldown !== "0") {
      writer.uint32(16).uint64(message.redelegation_cooldown);
    }
    if (message.redelegation_max_amount !== "0") {
      writer.uint32(24).uint64(message.redelegation_max_amount);
    }
    if (message.vote_slash !== "") {
      writer.uint32(34).string(message.vote_slash);
    }
    if (message.upload_slash !== "") {
      writer.uint32(42).string(message.upload_slash);
    }
    if (message.timeout_slash !== "") {
      writer.uint32(50).string(message.timeout_slash);
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
          message.unbonding_delegation_time = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.redelegation_cooldown = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.redelegation_max_amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.vote_slash = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.upload_slash = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.timeout_slash = reader.string();
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
      unbonding_delegation_time: isSet(object.unbonding_delegation_time)
        ? globalThis.String(object.unbonding_delegation_time)
        : "0",
      redelegation_cooldown: isSet(object.redelegation_cooldown)
        ? globalThis.String(object.redelegation_cooldown)
        : "0",
      redelegation_max_amount: isSet(object.redelegation_max_amount)
        ? globalThis.String(object.redelegation_max_amount)
        : "0",
      vote_slash: isSet(object.vote_slash)
        ? globalThis.String(object.vote_slash)
        : "",
      upload_slash: isSet(object.upload_slash)
        ? globalThis.String(object.upload_slash)
        : "",
      timeout_slash: isSet(object.timeout_slash)
        ? globalThis.String(object.timeout_slash)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.unbonding_delegation_time !== "0") {
      obj.unbonding_delegation_time = message.unbonding_delegation_time;
    }
    if (message.redelegation_cooldown !== "0") {
      obj.redelegation_cooldown = message.redelegation_cooldown;
    }
    if (message.redelegation_max_amount !== "0") {
      obj.redelegation_max_amount = message.redelegation_max_amount;
    }
    if (message.vote_slash !== "") {
      obj.vote_slash = message.vote_slash;
    }
    if (message.upload_slash !== "") {
      obj.upload_slash = message.upload_slash;
    }
    if (message.timeout_slash !== "") {
      obj.timeout_slash = message.timeout_slash;
    }
    return obj;
  },
  create: function (base) {
    return exports.Params.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseParams();
    message.unbonding_delegation_time =
      (_a = object.unbonding_delegation_time) !== null && _a !== void 0
        ? _a
        : "0";
    message.redelegation_cooldown =
      (_b = object.redelegation_cooldown) !== null && _b !== void 0 ? _b : "0";
    message.redelegation_max_amount =
      (_c = object.redelegation_max_amount) !== null && _c !== void 0
        ? _c
        : "0";
    message.vote_slash =
      (_d = object.vote_slash) !== null && _d !== void 0 ? _d : "";
    message.upload_slash =
      (_e = object.upload_slash) !== null && _e !== void 0 ? _e : "";
    message.timeout_slash =
      (_f = object.timeout_slash) !== null && _f !== void 0 ? _f : "";
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
