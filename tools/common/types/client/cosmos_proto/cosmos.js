"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarDescriptor =
  exports.InterfaceDescriptor =
  exports.scalarTypeToJSON =
  exports.scalarTypeFromJSON =
  exports.ScalarType =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos_proto";
var ScalarType;
(function (ScalarType) {
  ScalarType[(ScalarType["SCALAR_TYPE_UNSPECIFIED"] = 0)] =
    "SCALAR_TYPE_UNSPECIFIED";
  ScalarType[(ScalarType["SCALAR_TYPE_STRING"] = 1)] = "SCALAR_TYPE_STRING";
  ScalarType[(ScalarType["SCALAR_TYPE_BYTES"] = 2)] = "SCALAR_TYPE_BYTES";
  ScalarType[(ScalarType["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED";
})((ScalarType = exports.ScalarType || (exports.ScalarType = {})));
function scalarTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "SCALAR_TYPE_UNSPECIFIED":
      return ScalarType.SCALAR_TYPE_UNSPECIFIED;
    case 1:
    case "SCALAR_TYPE_STRING":
      return ScalarType.SCALAR_TYPE_STRING;
    case 2:
    case "SCALAR_TYPE_BYTES":
      return ScalarType.SCALAR_TYPE_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScalarType.UNRECOGNIZED;
  }
}
exports.scalarTypeFromJSON = scalarTypeFromJSON;
function scalarTypeToJSON(object) {
  switch (object) {
    case ScalarType.SCALAR_TYPE_UNSPECIFIED:
      return "SCALAR_TYPE_UNSPECIFIED";
    case ScalarType.SCALAR_TYPE_STRING:
      return "SCALAR_TYPE_STRING";
    case ScalarType.SCALAR_TYPE_BYTES:
      return "SCALAR_TYPE_BYTES";
    case ScalarType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
exports.scalarTypeToJSON = scalarTypeToJSON;
function createBaseInterfaceDescriptor() {
  return { name: "", description: "" };
}
exports.InterfaceDescriptor = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.description = reader.string();
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },
  create: function (base) {
    return exports.InterfaceDescriptor.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseInterfaceDescriptor();
    message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
    message.description =
      (_b = object.description) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseScalarDescriptor() {
  return { name: "", description: "", field_type: [] };
}
exports.ScalarDescriptor = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (var _i = 0, _a = message.field_type; _i < _a.length; _i++) {
      var v = _a[_i];
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseScalarDescriptor();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.description = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.field_type.push(reader.int32());
            continue;
          }
          if (tag === 26) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.field_type.push(reader.int32());
            }
            continue;
          }
          break;
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      field_type: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.field_type
      )
        ? object.field_type.map(function (e) {
            return scalarTypeFromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (
      (_a = message.field_type) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.field_type = message.field_type.map(function (e) {
        return scalarTypeToJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.ScalarDescriptor.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseScalarDescriptor();
    message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
    message.description =
      (_b = object.description) !== null && _b !== void 0 ? _b : "";
    message.field_type =
      ((_c = object.field_type) === null || _c === void 0
        ? void 0
        : _c.map(function (e) {
            return e;
          })) || [];
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=cosmos.js.map
