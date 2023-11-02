"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLeavePool =
  exports.EventJoinPool =
  exports.EventClaimCommissionRewards =
  exports.EventUpdateCommission =
  exports.EventUpdateMetadata =
  exports.EventCreateStaker =
  exports.EventUpdateParams =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var params_1 = require("./params");
exports.protobufPackage = "kyve.stakers.v1beta1";
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
function createBaseEventCreateStaker() {
  return { staker: "", amount: "0", commission: "" };
}
exports.EventCreateStaker = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreateStaker();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.commission = reader.string();
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
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      commission: isSet(object.commission)
        ? globalThis.String(object.commission)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventCreateStaker.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventCreateStaker();
    message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    message.commission =
      (_c = object.commission) !== null && _c !== void 0 ? _c : "";
    return message;
  },
};
function createBaseEventUpdateMetadata() {
  return {
    staker: "",
    moniker: "",
    website: "",
    identity: "",
    security_contact: "",
    details: "",
  };
}
exports.EventUpdateMetadata = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.security_contact !== "") {
      writer.uint32(42).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.moniker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.website = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.identity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.security_contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.details = reader.string();
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
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      identity: isSet(object.identity)
        ? globalThis.String(object.identity)
        : "",
      security_contact: isSet(object.security_contact)
        ? globalThis.String(object.security_contact)
        : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.security_contact !== "") {
      obj.security_contact = message.security_contact;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventUpdateMetadata.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseEventUpdateMetadata();
    message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
    message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
    message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
    message.identity =
      (_d = object.identity) !== null && _d !== void 0 ? _d : "";
    message.security_contact =
      (_e = object.security_contact) !== null && _e !== void 0 ? _e : "";
    message.details = (_f = object.details) !== null && _f !== void 0 ? _f : "";
    return message;
  },
};
function createBaseEventUpdateCommission() {
  return { staker: "", commission: "" };
}
exports.EventUpdateCommission = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.commission = reader.string();
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
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      commission: isSet(object.commission)
        ? globalThis.String(object.commission)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventUpdateCommission.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseEventUpdateCommission();
    message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
    message.commission =
      (_b = object.commission) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseEventClaimCommissionRewards() {
  return { staker: "", amount: "0" };
}
exports.EventClaimCommissionRewards = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventClaimCommissionRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventClaimCommissionRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseEventClaimCommissionRewards();
    message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseEventJoinPool() {
  return { pool_id: "0", staker: "", valaddress: "", amount: "0" };
}
exports.EventJoinPool = {
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
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
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
    var message = createBaseEventJoinPool();
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
          if (tag !== 26) {
            break;
          }
          message.valaddress = reader.string();
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      valaddress: isSet(object.valaddress)
        ? globalThis.String(object.valaddress)
        : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
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
    if (message.valaddress !== "") {
      obj.valaddress = message.valaddress;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventJoinPool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventJoinPool();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.valaddress =
      (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
    message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseEventLeavePool() {
  return { pool_id: "0", staker: "" };
}
exports.EventLeavePool = {
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
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventLeavePool();
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
    return obj;
  },
  create: function (base) {
    return exports.EventLeavePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseEventLeavePool();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
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
