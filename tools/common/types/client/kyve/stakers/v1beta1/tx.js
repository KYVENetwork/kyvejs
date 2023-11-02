"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl =
  exports.MsgServiceName =
  exports.MsgUpdateParamsResponse =
  exports.MsgUpdateParams =
  exports.MsgLeavePoolResponse =
  exports.MsgLeavePool =
  exports.MsgJoinPoolResponse =
  exports.MsgJoinPool =
  exports.MsgClaimCommissionRewardsResponse =
  exports.MsgClaimCommissionRewards =
  exports.MsgUpdateCommissionResponse =
  exports.MsgUpdateCommission =
  exports.MsgUpdateMetadataResponse =
  exports.MsgUpdateMetadata =
  exports.MsgCreateStakerResponse =
  exports.MsgCreateStaker =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseMsgCreateStaker() {
  return { creator: "", amount: "0", commission: "" };
}
exports.MsgCreateStaker = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgCreateStaker();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.creator = reader.string();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      commission: isSet(object.commission)
        ? globalThis.String(object.commission)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return exports.MsgCreateStaker.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgCreateStaker();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    message.commission =
      (_c = object.commission) !== null && _c !== void 0 ? _c : "";
    return message;
  },
};
function createBaseMsgCreateStakerResponse() {
  return {};
}
exports.MsgCreateStakerResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateStakerResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgCreateStakerResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgCreateStakerResponse();
    return message;
  },
};
function createBaseMsgUpdateMetadata() {
  return {
    creator: "",
    moniker: "",
    website: "",
    identity: "",
    security_contact: "",
    details: "",
  };
}
exports.MsgUpdateMetadata = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.creator = reader.string();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
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
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return exports.MsgUpdateMetadata.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseMsgUpdateMetadata();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
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
function createBaseMsgUpdateMetadataResponse() {
  return {};
}
exports.MsgUpdateMetadataResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateMetadataResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
};
function createBaseMsgUpdateCommission() {
  return { creator: "", commission: "" };
}
exports.MsgUpdateCommission = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgUpdateCommission();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.creator = reader.string();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      commission: isSet(object.commission)
        ? globalThis.String(object.commission)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateCommission.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgUpdateCommission();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.commission =
      (_b = object.commission) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseMsgUpdateCommissionResponse() {
  return {};
}
exports.MsgUpdateCommissionResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateCommissionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateCommissionResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdateCommissionResponse();
    return message;
  },
};
function createBaseMsgClaimCommissionRewards() {
  return { creator: "", amount: "0" };
}
exports.MsgClaimCommissionRewards = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgClaimCommissionRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.creator = reader.string();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgClaimCommissionRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgClaimCommissionRewards();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseMsgClaimCommissionRewardsResponse() {
  return {};
}
exports.MsgClaimCommissionRewardsResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClaimCommissionRewardsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgClaimCommissionRewardsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgClaimCommissionRewardsResponse();
    return message;
  },
};
function createBaseMsgJoinPool() {
  return { creator: "", pool_id: "0", valaddress: "", amount: "0" };
}
exports.MsgJoinPool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
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
    var message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      valaddress: isSet(object.valaddress)
        ? globalThis.String(object.valaddress)
        : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
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
    return exports.MsgJoinPool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgJoinPool();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.pool_id =
      (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
    message.valaddress =
      (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
    message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseMsgJoinPoolResponse() {
  return {};
}
exports.MsgJoinPoolResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgJoinPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgJoinPoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgJoinPoolResponse();
    return message;
  },
};
function createBaseMsgLeavePool() {
  return { creator: "", pool_id: "0" };
}
exports.MsgLeavePool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLeavePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgLeavePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgLeavePool();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.pool_id =
      (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseMsgLeavePoolResponse() {
  return {};
}
exports.MsgLeavePoolResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgLeavePoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgLeavePoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgLeavePoolResponse();
    return message;
  },
};
function createBaseMsgUpdateParams() {
  return { authority: "", payload: "" };
}
exports.MsgUpdateParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgUpdateParams();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
exports.MsgUpdateParamsResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (_) {
    return {};
  },
  toJSON: function (_) {
    var obj = {};
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateParamsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
exports.MsgServiceName = "kyve.stakers.v1beta1.Msg";
var MsgClientImpl = /** @class */ (function () {
  function MsgClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.MsgServiceName;
    this.rpc = rpc;
    this.CreateStaker = this.CreateStaker.bind(this);
    this.UpdateMetadata = this.UpdateMetadata.bind(this);
    this.UpdateCommission = this.UpdateCommission.bind(this);
    this.ClaimCommissionRewards = this.ClaimCommissionRewards.bind(this);
    this.JoinPool = this.JoinPool.bind(this);
    this.LeavePool = this.LeavePool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MsgClientImpl.prototype.CreateStaker = function (request) {
    var data = exports.MsgCreateStaker.encode(request).finish();
    var promise = this.rpc.request(this.service, "CreateStaker", data);
    return promise.then(function (data) {
      return exports.MsgCreateStakerResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdateMetadata = function (request) {
    var data = exports.MsgUpdateMetadata.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdateMetadata", data);
    return promise.then(function (data) {
      return exports.MsgUpdateMetadataResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdateCommission = function (request) {
    var data = exports.MsgUpdateCommission.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdateCommission", data);
    return promise.then(function (data) {
      return exports.MsgUpdateCommissionResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.ClaimCommissionRewards = function (request) {
    var data = exports.MsgClaimCommissionRewards.encode(request).finish();
    var promise = this.rpc.request(
      this.service,
      "ClaimCommissionRewards",
      data
    );
    return promise.then(function (data) {
      return exports.MsgClaimCommissionRewardsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.JoinPool = function (request) {
    var data = exports.MsgJoinPool.encode(request).finish();
    var promise = this.rpc.request(this.service, "JoinPool", data);
    return promise.then(function (data) {
      return exports.MsgJoinPoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.LeavePool = function (request) {
    var data = exports.MsgLeavePool.encode(request).finish();
    var promise = this.rpc.request(this.service, "LeavePool", data);
    return promise.then(function (data) {
      return exports.MsgLeavePoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdateParams = function (request) {
    var data = exports.MsgUpdateParams.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then(function (data) {
      return exports.MsgUpdateParamsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return MsgClientImpl;
})();
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map
