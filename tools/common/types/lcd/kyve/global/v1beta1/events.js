"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var global_1 = require("./global");
exports.protobufPackage = "kyve.global.v1beta1";
function createBaseEventUpdateParams() {
  return { old_params: undefined, new_params: undefined, payload: "" };
}
exports.EventUpdateParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.old_params !== undefined) {
      global_1.Params.encode(
        message.old_params,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.new_params !== undefined) {
      global_1.Params.encode(
        message.new_params,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.old_params = global_1.Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.new_params = global_1.Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.payload = reader.string();
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
      old_params: isSet(object.old_params)
        ? global_1.Params.fromJSON(object.old_params)
        : undefined,
      new_params: isSet(object.new_params)
        ? global_1.Params.fromJSON(object.new_params)
        : undefined,
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.old_params !== undefined) {
      obj.old_params = global_1.Params.toJSON(message.old_params);
    }
    if (message.new_params !== undefined) {
      obj.new_params = global_1.Params.toJSON(message.new_params);
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventUpdateParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseEventUpdateParams();
    message.old_params =
      object.old_params !== undefined && object.old_params !== null
        ? global_1.Params.fromPartial(object.old_params)
        : undefined;
    message.new_params =
      object.new_params !== undefined && object.new_params !== null
        ? global_1.Params.fromPartial(object.new_params)
        : undefined;
    message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=events.js.map
