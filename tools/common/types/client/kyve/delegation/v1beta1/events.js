"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSlash =
  exports.EventWithdrawRewards =
  exports.EventRedelegate =
  exports.EventUndelegate =
  exports.EventStartUndelegation =
  exports.EventDelegate =
  exports.EventUpdateParams =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var delegation_1 = require("./delegation");
var params_1 = require("./params");
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseEventUpdateParams() {
  return { old_params: undefined, new_params: undefined, payload: "" };
}
exports.EventUpdateParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.old_params !== undefined) {
      params_1.Params.encode(
        message.old_params,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.new_params !== undefined) {
      params_1.Params.encode(
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
          message.old_params = params_1.Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.new_params = params_1.Params.decode(reader, reader.uint32());
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
        ? params_1.Params.fromJSON(object.old_params)
        : undefined,
      new_params: isSet(object.new_params)
        ? params_1.Params.fromJSON(object.new_params)
        : undefined,
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.old_params !== undefined) {
      obj.old_params = params_1.Params.toJSON(message.old_params);
    }
    if (message.new_params !== undefined) {
      obj.new_params = params_1.Params.toJSON(message.new_params);
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
        ? params_1.Params.fromPartial(object.old_params)
        : undefined;
    message.new_params =
      object.new_params !== undefined && object.new_params !== null
        ? params_1.Params.fromPartial(object.new_params)
        : undefined;
    message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseEventDelegate() {
  return { address: "", staker: "", amount: "0" };
}
exports.EventDelegate = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventDelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventDelegate.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventDelegate();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseEventStartUndelegation() {
  return {
    address: "",
    staker: "",
    amount: "0",
    estimated_undelegation_date: "0",
  };
}
exports.EventStartUndelegation = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.estimated_undelegation_date !== "0") {
      writer.uint32(32).uint64(message.estimated_undelegation_date);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventStartUndelegation();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.estimated_undelegation_date = longToString(reader.uint64());
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      estimated_undelegation_date: isSet(object.estimated_undelegation_date)
        ? globalThis.String(object.estimated_undelegation_date)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.estimated_undelegation_date !== "0") {
      obj.estimated_undelegation_date = message.estimated_undelegation_date;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventStartUndelegation.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventStartUndelegation();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.estimated_undelegation_date =
      (_d = object.estimated_undelegation_date) !== null && _d !== void 0
        ? _d
        : "0";
    return message;
  },
};
function createBaseEventUndelegate() {
  return { address: "", staker: "", amount: "0" };
}
exports.EventUndelegate = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUndelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventUndelegate.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventUndelegate();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseEventRedelegate() {
  return { address: "", from_staker: "", to_staker: "", amount: "0" };
}
exports.EventRedelegate = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.from_staker !== "") {
      writer.uint32(18).string(message.from_staker);
    }
    if (message.to_staker !== "") {
      writer.uint32(26).string(message.to_staker);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventRedelegate();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.from_staker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.to_staker = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.amount = longToString(reader.uint64());
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      from_staker: isSet(object.from_staker)
        ? globalThis.String(object.from_staker)
        : "",
      to_staker: isSet(object.to_staker)
        ? globalThis.String(object.to_staker)
        : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.from_staker !== "") {
      obj.from_staker = message.from_staker;
    }
    if (message.to_staker !== "") {
      obj.to_staker = message.to_staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventRedelegate.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventRedelegate();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.from_staker =
      (_b = object.from_staker) !== null && _b !== void 0 ? _b : "";
    message.to_staker =
      (_c = object.to_staker) !== null && _c !== void 0 ? _c : "";
    message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseEventWithdrawRewards() {
  return { address: "", staker: "", amount: "0" };
}
exports.EventWithdrawRewards = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventWithdrawRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventWithdrawRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventWithdrawRewards();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseEventSlash() {
  return { pool_id: "0", staker: "", amount: "0", slash_type: 0 };
}
exports.EventSlash = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.slash_type !== 0) {
      writer.uint32(32).int32(message.slash_type);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventSlash();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.slash_type = reader.int32();
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      slash_type: isSet(object.slash_type)
        ? (0, delegation_1.slashTypeFromJSON)(object.slash_type)
        : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.slash_type !== 0) {
      obj.slash_type = (0, delegation_1.slashTypeToJSON)(message.slash_type);
    }
    return obj;
  },
  create: function (base) {
    return exports.EventSlash.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventSlash();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.slash_type =
      (_d = object.slash_type) !== null && _d !== void 0 ? _d : 0;
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
//# sourceMappingURL=events.js.map
