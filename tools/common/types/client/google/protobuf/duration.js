"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
function createBaseDuration() {
  return { seconds: "0", nanos: 0 };
}
exports.Duration = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.seconds !== "0") {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDuration();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.seconds = longToString(reader.int64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.nanos = reader.int32();
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
      seconds: isSet(object.seconds) ? globalThis.String(object.seconds) : "0",
      nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.seconds !== "0") {
      obj.seconds = message.seconds;
    }
    if (message.nanos !== 0) {
      obj.nanos = Math.round(message.nanos);
    }
    return obj;
  },
  create: function (base) {
    return exports.Duration.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseDuration();
    message.seconds =
      (_a = object.seconds) !== null && _a !== void 0 ? _a : "0";
    message.nanos = (_b = object.nanos) !== null && _b !== void 0 ? _b : 0;
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
//# sourceMappingURL=duration.js.map
