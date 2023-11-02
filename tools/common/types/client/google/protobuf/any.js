"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Any = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
function createBaseAny() {
  return { type_url: "", value: new Uint8Array(0) };
}
exports.Any = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.type_url !== "") {
      writer.uint32(10).string(message.type_url);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAny();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.type_url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.value = reader.bytes();
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
      type_url: isSet(object.type_url)
        ? globalThis.String(object.type_url)
        : "",
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(0),
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.type_url !== "") {
      obj.type_url = message.type_url;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },
  create: function (base) {
    return exports.Any.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseAny();
    message.type_url =
      (_a = object.type_url) !== null && _a !== void 0 ? _a : "";
    message.value =
      (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array(0);
    return message;
  },
};
function bytesFromBase64(b64) {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    var bin = globalThis.atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}
function base64FromBytes(arr) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    var bin_1 = [];
    arr.forEach(function (byte) {
      bin_1.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin_1.join(""));
  }
}
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=any.js.map
