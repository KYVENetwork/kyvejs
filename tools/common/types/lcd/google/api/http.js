"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern =
  exports.HttpRule =
  exports.Http =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.api";
function createBaseHttp() {
  return { rules: [], fully_decode_reserved_expansion: false };
}
exports.Http = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.rules; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.fully_decode_reserved_expansion === true) {
      writer.uint32(16).bool(message.fully_decode_reserved_expansion);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHttp();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.fully_decode_reserved_expansion = reader.bool();
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
      rules: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.rules
      )
        ? object.rules.map(function (e) {
            return exports.HttpRule.fromJSON(e);
          })
        : [],
      fully_decode_reserved_expansion: isSet(
        object.fully_decode_reserved_expansion
      )
        ? globalThis.Boolean(object.fully_decode_reserved_expansion)
        : false,
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if ((_a = message.rules) === null || _a === void 0 ? void 0 : _a.length) {
      obj.rules = message.rules.map(function (e) {
        return exports.HttpRule.toJSON(e);
      });
    }
    if (message.fully_decode_reserved_expansion === true) {
      obj.fully_decode_reserved_expansion =
        message.fully_decode_reserved_expansion;
    }
    return obj;
  },
  create: function (base) {
    return exports.Http.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseHttp();
    message.rules =
      ((_a = object.rules) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.HttpRule.fromPartial(e);
          })) || [];
    message.fully_decode_reserved_expansion =
      (_b = object.fully_decode_reserved_expansion) !== null && _b !== void 0
        ? _b
        : false;
    return message;
  },
};
function createBaseHttpRule() {
  return {
    selector: "",
    get: undefined,
    put: undefined,
    post: undefined,
    delete: undefined,
    patch: undefined,
    custom: undefined,
    body: "",
    response_body: "",
    additional_bindings: [],
  };
}
exports.HttpRule = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.get !== undefined) {
      writer.uint32(18).string(message.get);
    }
    if (message.put !== undefined) {
      writer.uint32(26).string(message.put);
    }
    if (message.post !== undefined) {
      writer.uint32(34).string(message.post);
    }
    if (message.delete !== undefined) {
      writer.uint32(42).string(message.delete);
    }
    if (message.patch !== undefined) {
      writer.uint32(50).string(message.patch);
    }
    if (message.custom !== undefined) {
      exports.CustomHttpPattern.encode(
        message.custom,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    if (message.response_body !== "") {
      writer.uint32(98).string(message.response_body);
    }
    for (var _i = 0, _a = message.additional_bindings; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHttpRule();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.selector = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.get = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.put = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.post = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.delete = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.patch = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.custom = exports.CustomHttpPattern.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.body = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.response_body = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.additional_bindings.push(
            exports.HttpRule.decode(reader, reader.uint32())
          );
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
      selector: isSet(object.selector)
        ? globalThis.String(object.selector)
        : "",
      get: isSet(object.get) ? globalThis.String(object.get) : undefined,
      put: isSet(object.put) ? globalThis.String(object.put) : undefined,
      post: isSet(object.post) ? globalThis.String(object.post) : undefined,
      delete: isSet(object.delete)
        ? globalThis.String(object.delete)
        : undefined,
      patch: isSet(object.patch) ? globalThis.String(object.patch) : undefined,
      custom: isSet(object.custom)
        ? exports.CustomHttpPattern.fromJSON(object.custom)
        : undefined,
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      response_body: isSet(object.response_body)
        ? globalThis.String(object.response_body)
        : "",
      additional_bindings: globalThis.Array.isArray(
        object === null || object === void 0
          ? void 0
          : object.additional_bindings
      )
        ? object.additional_bindings.map(function (e) {
            return exports.HttpRule.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.get !== undefined) {
      obj.get = message.get;
    }
    if (message.put !== undefined) {
      obj.put = message.put;
    }
    if (message.post !== undefined) {
      obj.post = message.post;
    }
    if (message.delete !== undefined) {
      obj.delete = message.delete;
    }
    if (message.patch !== undefined) {
      obj.patch = message.patch;
    }
    if (message.custom !== undefined) {
      obj.custom = exports.CustomHttpPattern.toJSON(message.custom);
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.response_body !== "") {
      obj.response_body = message.response_body;
    }
    if (
      (_a = message.additional_bindings) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.additional_bindings = message.additional_bindings.map(function (e) {
        return exports.HttpRule.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.HttpRule.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var message = createBaseHttpRule();
    message.selector =
      (_a = object.selector) !== null && _a !== void 0 ? _a : "";
    message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
    message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
    message.post =
      (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
    message.delete =
      (_e = object.delete) !== null && _e !== void 0 ? _e : undefined;
    message.patch =
      (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
    message.custom =
      object.custom !== undefined && object.custom !== null
        ? exports.CustomHttpPattern.fromPartial(object.custom)
        : undefined;
    message.body = (_g = object.body) !== null && _g !== void 0 ? _g : "";
    message.response_body =
      (_h = object.response_body) !== null && _h !== void 0 ? _h : "";
    message.additional_bindings =
      ((_j = object.additional_bindings) === null || _j === void 0
        ? void 0
        : _j.map(function (e) {
            return exports.HttpRule.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseCustomHttpPattern() {
  return { kind: "", path: "" };
}
exports.CustomHttpPattern = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCustomHttpPattern();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.path = reader.string();
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
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },
  create: function (base) {
    return exports.CustomHttpPattern.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseCustomHttpPattern();
    message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : "";
    message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=http.js.map
