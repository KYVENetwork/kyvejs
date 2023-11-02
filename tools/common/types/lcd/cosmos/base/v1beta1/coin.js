"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecProto =
  exports.IntProto =
  exports.DecCoin =
  exports.Coin =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.v1beta1";
function createBaseCoin() {
  return { denom: "", amount: "" };
}
exports.Coin = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCoin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.amount = reader.string();
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
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.Coin.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseCoin();
    message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseDecCoin() {
  return { denom: "", amount: "" };
}
exports.DecCoin = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDecCoin();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.amount = reader.string();
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
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.DecCoin.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseDecCoin();
    message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseIntProto() {
  return { int: "" };
}
exports.IntProto = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIntProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.int = reader.string();
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
    return { int: isSet(object.int) ? globalThis.String(object.int) : "" };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.int !== "") {
      obj.int = message.int;
    }
    return obj;
  },
  create: function (base) {
    return exports.IntProto.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseIntProto();
    message.int = (_a = object.int) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseDecProto() {
  return { dec: "" };
}
exports.DecProto = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDecProto();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.dec = reader.string();
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
    return { dec: isSet(object.dec) ? globalThis.String(object.dec) : "" };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.dec !== "") {
      obj.dec = message.dec;
    }
    return obj;
  },
  create: function (base) {
    return exports.DecProto.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseDecProto();
    message.dec = (_a = object.dec) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=coin.js.map
