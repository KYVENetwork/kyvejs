"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponse = exports.PageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.query.v1beta1";
function createBasePageRequest() {
  return {
    key: new Uint8Array(0),
    offset: "0",
    limit: "0",
    count_total: false,
    reverse: false,
  };
}
exports.PageRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== "0") {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.limit !== "0") {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.count_total === true) {
      writer.uint32(32).bool(message.count_total);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.offset = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.limit = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.count_total = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.reverse = reader.bool();
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
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      offset: isSet(object.offset) ? globalThis.String(object.offset) : "0",
      limit: isSet(object.limit) ? globalThis.String(object.limit) : "0",
      count_total: isSet(object.count_total)
        ? globalThis.Boolean(object.count_total)
        : false,
      reverse: isSet(object.reverse)
        ? globalThis.Boolean(object.reverse)
        : false,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.offset !== "0") {
      obj.offset = message.offset;
    }
    if (message.limit !== "0") {
      obj.limit = message.limit;
    }
    if (message.count_total === true) {
      obj.count_total = message.count_total;
    }
    if (message.reverse === true) {
      obj.reverse = message.reverse;
    }
    return obj;
  },
  create: function (base) {
    return exports.PageRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e;
    var message = createBasePageRequest();
    message.key =
      (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array(0);
    message.offset = (_b = object.offset) !== null && _b !== void 0 ? _b : "0";
    message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : "0";
    message.count_total =
      (_d = object.count_total) !== null && _d !== void 0 ? _d : false;
    message.reverse =
      (_e = object.reverse) !== null && _e !== void 0 ? _e : false;
    return message;
  },
};
function createBasePageResponse() {
  return { next_key: new Uint8Array(0), total: "0" };
}
exports.PageResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.next_key.length !== 0) {
      writer.uint32(10).bytes(message.next_key);
    }
    if (message.total !== "0") {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePageResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.next_key = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.total = longToString(reader.uint64());
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
      next_key: isSet(object.next_key)
        ? bytesFromBase64(object.next_key)
        : new Uint8Array(0),
      total: isSet(object.total) ? globalThis.String(object.total) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.next_key.length !== 0) {
      obj.next_key = base64FromBytes(message.next_key);
    }
    if (message.total !== "0") {
      obj.total = message.total;
    }
    return obj;
  },
  create: function (base) {
    return exports.PageResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBasePageResponse();
    message.next_key =
      (_a = object.next_key) !== null && _a !== void 0 ? _a : new Uint8Array(0);
    message.total = (_b = object.total) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=pagination.js.map
