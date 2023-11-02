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
  exports.MsgDefundPoolResponse =
  exports.MsgDefundPool =
  exports.MsgFundPoolResponse =
  exports.MsgFundPool =
  exports.MsgUpdateFunderResponse =
  exports.MsgUpdateFunder =
  exports.MsgCreateFunderResponse =
  exports.MsgCreateFunder =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.funders.v1beta1";
function createBaseMsgCreateFunder() {
  return {
    creator: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: "",
  };
}
exports.MsgCreateFunder = {
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
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateFunder();
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
          message.identity = reader.string();
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
          message.contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      identity: isSet(object.identity)
        ? globalThis.String(object.identity)
        : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      contact: isSet(object.contact) ? globalThis.String(object.contact) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
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
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.contact !== "") {
      obj.contact = message.contact;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgCreateFunder.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseMsgCreateFunder();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
    message.identity =
      (_c = object.identity) !== null && _c !== void 0 ? _c : "";
    message.website = (_d = object.website) !== null && _d !== void 0 ? _d : "";
    message.contact = (_e = object.contact) !== null && _e !== void 0 ? _e : "";
    message.description =
      (_f = object.description) !== null && _f !== void 0 ? _f : "";
    return message;
  },
};
function createBaseMsgCreateFunderResponse() {
  return {};
}
exports.MsgCreateFunderResponse = {
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
    var message = createBaseMsgCreateFunderResponse();
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
    return exports.MsgCreateFunderResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgCreateFunderResponse();
    return message;
  },
};
function createBaseMsgUpdateFunder() {
  return {
    creator: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: "",
  };
}
exports.MsgUpdateFunder = {
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
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateFunder();
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
          message.identity = reader.string();
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
          message.contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      identity: isSet(object.identity)
        ? globalThis.String(object.identity)
        : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      contact: isSet(object.contact) ? globalThis.String(object.contact) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
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
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.contact !== "") {
      obj.contact = message.contact;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateFunder.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseMsgUpdateFunder();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
    message.identity =
      (_c = object.identity) !== null && _c !== void 0 ? _c : "";
    message.website = (_d = object.website) !== null && _d !== void 0 ? _d : "";
    message.contact = (_e = object.contact) !== null && _e !== void 0 ? _e : "";
    message.description =
      (_f = object.description) !== null && _f !== void 0 ? _f : "";
    return message;
  },
};
function createBaseMsgUpdateFunderResponse() {
  return {};
}
exports.MsgUpdateFunderResponse = {
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
    var message = createBaseMsgUpdateFunderResponse();
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
    return exports.MsgUpdateFunderResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdateFunderResponse();
    return message;
  },
};
function createBaseMsgFundPool() {
  return { creator: "", pool_id: "0", amount: "0", amount_per_bundle: "0" };
}
exports.MsgFundPool = {
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
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amount_per_bundle !== "0") {
      writer.uint32(32).uint64(message.amount_per_bundle);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgFundPool();
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
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.amount_per_bundle = longToString(reader.uint64());
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
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      amount_per_bundle: isSet(object.amount_per_bundle)
        ? globalThis.String(object.amount_per_bundle)
        : "0",
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
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.amount_per_bundle !== "0") {
      obj.amount_per_bundle = message.amount_per_bundle;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgFundPool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgFundPool();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.pool_id =
      (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.amount_per_bundle =
      (_d = object.amount_per_bundle) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseMsgFundPoolResponse() {
  return {};
}
exports.MsgFundPoolResponse = {
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
    var message = createBaseMsgFundPoolResponse();
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
    return exports.MsgFundPoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgFundPoolResponse();
    return message;
  },
};
function createBaseMsgDefundPool() {
  return { creator: "", pool_id: "0", amount: "0" };
}
exports.MsgDefundPool = {
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
    var message = createBaseMsgDefundPool();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
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
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgDefundPool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgDefundPool();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.pool_id =
      (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseMsgDefundPoolResponse() {
  return {};
}
exports.MsgDefundPoolResponse = {
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
    var message = createBaseMsgDefundPoolResponse();
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
    return exports.MsgDefundPoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgDefundPoolResponse();
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
exports.MsgServiceName = "kyve.funders.v1beta1.Msg";
var MsgClientImpl = /** @class */ (function () {
  function MsgClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.MsgServiceName;
    this.rpc = rpc;
    this.CreateFunder = this.CreateFunder.bind(this);
    this.UpdateFunder = this.UpdateFunder.bind(this);
    this.FundPool = this.FundPool.bind(this);
    this.DefundPool = this.DefundPool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MsgClientImpl.prototype.CreateFunder = function (request) {
    var data = exports.MsgCreateFunder.encode(request).finish();
    var promise = this.rpc.request(this.service, "CreateFunder", data);
    return promise.then(function (data) {
      return exports.MsgCreateFunderResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdateFunder = function (request) {
    var data = exports.MsgUpdateFunder.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdateFunder", data);
    return promise.then(function (data) {
      return exports.MsgUpdateFunderResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.FundPool = function (request) {
    var data = exports.MsgFundPool.encode(request).finish();
    var promise = this.rpc.request(this.service, "FundPool", data);
    return promise.then(function (data) {
      return exports.MsgFundPoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.DefundPool = function (request) {
    var data = exports.MsgDefundPool.encode(request).finish();
    var promise = this.rpc.request(this.service, "DefundPool", data);
    return promise.then(function (data) {
      return exports.MsgDefundPoolResponse.decode(
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
