"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueState =
  exports.LeavePoolEntry =
  exports.CommissionChangeEntry =
  exports.Valaccount =
  exports.Staker =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseStaker() {
  return {
    address: "",
    commission: "",
    moniker: "",
    website: "",
    identity: "",
    security_contact: "",
    details: "",
    commission_rewards: "0",
  };
}
exports.Staker = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(26).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(42).string(message.identity);
    }
    if (message.security_contact !== "") {
      writer.uint32(50).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(58).string(message.details);
    }
    if (message.commission_rewards !== "0") {
      writer.uint32(64).uint64(message.commission_rewards);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStaker();
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
          message.commission = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.moniker = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.identity = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.security_contact = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.details = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.commission_rewards = longToString(reader.uint64());
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
      commission: isSet(object.commission)
        ? globalThis.String(object.commission)
        : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      identity: isSet(object.identity)
        ? globalThis.String(object.identity)
        : "",
      security_contact: isSet(object.security_contact)
        ? globalThis.String(object.security_contact)
        : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
      commission_rewards: isSet(object.commission_rewards)
        ? globalThis.String(object.commission_rewards)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
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
    if (message.commission_rewards !== "0") {
      obj.commission_rewards = message.commission_rewards;
    }
    return obj;
  },
  create: function (base) {
    return exports.Staker.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var message = createBaseStaker();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.commission =
      (_b = object.commission) !== null && _b !== void 0 ? _b : "";
    message.moniker = (_c = object.moniker) !== null && _c !== void 0 ? _c : "";
    message.website = (_d = object.website) !== null && _d !== void 0 ? _d : "";
    message.identity =
      (_e = object.identity) !== null && _e !== void 0 ? _e : "";
    message.security_contact =
      (_f = object.security_contact) !== null && _f !== void 0 ? _f : "";
    message.details = (_g = object.details) !== null && _g !== void 0 ? _g : "";
    message.commission_rewards =
      (_h = object.commission_rewards) !== null && _h !== void 0 ? _h : "0";
    return message;
  },
};
function createBaseValaccount() {
  return {
    pool_id: "0",
    staker: "",
    valaddress: "",
    points: "0",
    is_leaving: false,
  };
}
exports.Valaccount = {
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
    if (message.points !== "0") {
      writer.uint32(32).uint64(message.points);
    }
    if (message.is_leaving === true) {
      writer.uint32(40).bool(message.is_leaving);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseValaccount();
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
          message.points = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.is_leaving = reader.bool();
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
      points: isSet(object.points) ? globalThis.String(object.points) : "0",
      is_leaving: isSet(object.is_leaving)
        ? globalThis.Boolean(object.is_leaving)
        : false,
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
    if (message.points !== "0") {
      obj.points = message.points;
    }
    if (message.is_leaving === true) {
      obj.is_leaving = message.is_leaving;
    }
    return obj;
  },
  create: function (base) {
    return exports.Valaccount.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e;
    var message = createBaseValaccount();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.valaddress =
      (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
    message.points = (_d = object.points) !== null && _d !== void 0 ? _d : "0";
    message.is_leaving =
      (_e = object.is_leaving) !== null && _e !== void 0 ? _e : false;
    return message;
  },
};
function createBaseCommissionChangeEntry() {
  return { index: "0", staker: "", commission: "", creation_date: "0" };
}
exports.CommissionChangeEntry = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    if (message.creation_date !== "0") {
      writer.uint32(32).int64(message.creation_date);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCommissionChangeEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.index = longToString(reader.uint64());
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
          message.commission = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.creation_date = longToString(reader.int64());
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
      index: isSet(object.index) ? globalThis.String(object.index) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      commission: isSet(object.commission)
        ? globalThis.String(object.commission)
        : "",
      creation_date: isSet(object.creation_date)
        ? globalThis.String(object.creation_date)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.index !== "0") {
      obj.index = message.index;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    if (message.creation_date !== "0") {
      obj.creation_date = message.creation_date;
    }
    return obj;
  },
  create: function (base) {
    return exports.CommissionChangeEntry.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseCommissionChangeEntry();
    message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.commission =
      (_c = object.commission) !== null && _c !== void 0 ? _c : "";
    message.creation_date =
      (_d = object.creation_date) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseLeavePoolEntry() {
  return { index: "0", staker: "", pool_id: "0", creation_date: "0" };
}
exports.LeavePoolEntry = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.creation_date !== "0") {
      writer.uint32(32).int64(message.creation_date);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseLeavePoolEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.index = longToString(reader.uint64());
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
          message.pool_id = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.creation_date = longToString(reader.int64());
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
      index: isSet(object.index) ? globalThis.String(object.index) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      creation_date: isSet(object.creation_date)
        ? globalThis.String(object.creation_date)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.index !== "0") {
      obj.index = message.index;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.creation_date !== "0") {
      obj.creation_date = message.creation_date;
    }
    return obj;
  },
  create: function (base) {
    return exports.LeavePoolEntry.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseLeavePoolEntry();
    message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.pool_id =
      (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
    message.creation_date =
      (_d = object.creation_date) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseQueueState() {
  return { low_index: "0", high_index: "0" };
}
exports.QueueState = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.low_index !== "0") {
      writer.uint32(8).uint64(message.low_index);
    }
    if (message.high_index !== "0") {
      writer.uint32(16).uint64(message.high_index);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueueState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.low_index = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.high_index = longToString(reader.uint64());
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
      low_index: isSet(object.low_index)
        ? globalThis.String(object.low_index)
        : "0",
      high_index: isSet(object.high_index)
        ? globalThis.String(object.high_index)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.low_index !== "0") {
      obj.low_index = message.low_index;
    }
    if (message.high_index !== "0") {
      obj.high_index = message.high_index;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueueState.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueueState();
    message.low_index =
      (_a = object.low_index) !== null && _a !== void 0 ? _a : "0";
    message.high_index =
      (_b = object.high_index) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=stakers.js.map
