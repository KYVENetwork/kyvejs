"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var global_1 = require("./global");
exports.protobufPackage = "kyve.global.v1beta1";
function createBaseGenesisState() {
  return { params: undefined };
}
exports.GenesisState = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.params !== undefined) {
      global_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = global_1.Params.decode(reader, reader.uint32());
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
        ? global_1.Params.fromJSON(object.params)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.params !== undefined) {
      obj.params = global_1.Params.toJSON(message.params);
    }
    return obj;
  },
  create: function (base) {
    return exports.GenesisState.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? global_1.Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map
