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
  exports.MsgRedelegateResponse =
  exports.MsgRedelegate =
  exports.MsgUndelegateResponse =
  exports.MsgUndelegate =
  exports.MsgWithdrawRewardsResponse =
  exports.MsgWithdrawRewards =
  exports.MsgDelegateResponse =
  exports.MsgDelegate =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseMsgDelegate() {
  return { creator: "", staker: "", amount: "0" };
}
exports.MsgDelegate = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgDelegate();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return exports.MsgDelegate.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgDelegate();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseMsgDelegateResponse() {
  return {};
}
exports.MsgDelegateResponse = {
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
    var message = createBaseMsgDelegateResponse();
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
    return exports.MsgDelegateResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgDelegateResponse();
    return message;
  },
};
function createBaseMsgWithdrawRewards() {
  return { creator: "", staker: "" };
}
exports.MsgWithdrawRewards = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgWithdrawRewards();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgWithdrawRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgWithdrawRewards();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseMsgWithdrawRewardsResponse() {
  return {};
}
exports.MsgWithdrawRewardsResponse = {
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
    var message = createBaseMsgWithdrawRewardsResponse();
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
    return exports.MsgWithdrawRewardsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgWithdrawRewardsResponse();
    return message;
  },
};
function createBaseMsgUndelegate() {
  return { creator: "", staker: "", amount: "0" };
}
exports.MsgUndelegate = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgUndelegate();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return exports.MsgUndelegate.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgUndelegate();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseMsgUndelegateResponse() {
  return {};
}
exports.MsgUndelegateResponse = {
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
    var message = createBaseMsgUndelegateResponse();
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
    return exports.MsgUndelegateResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUndelegateResponse();
    return message;
  },
};
function createBaseMsgRedelegate() {
  return { creator: "", from_staker: "", to_staker: "", amount: "0" };
}
exports.MsgRedelegate = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    var message = createBaseMsgRedelegate();
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
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
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
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return exports.MsgRedelegate.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgRedelegate();
    message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
    message.from_staker =
      (_b = object.from_staker) !== null && _b !== void 0 ? _b : "";
    message.to_staker =
      (_c = object.to_staker) !== null && _c !== void 0 ? _c : "";
    message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseMsgRedelegateResponse() {
  return {};
}
exports.MsgRedelegateResponse = {
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
    var message = createBaseMsgRedelegateResponse();
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
    return exports.MsgRedelegateResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgRedelegateResponse();
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
exports.MsgServiceName = "kyve.delegation.v1beta1.Msg";
var MsgClientImpl = /** @class */ (function () {
  function MsgClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.MsgServiceName;
    this.rpc = rpc;
    this.Delegate = this.Delegate.bind(this);
    this.WithdrawRewards = this.WithdrawRewards.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.Redelegate = this.Redelegate.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MsgClientImpl.prototype.Delegate = function (request) {
    var data = exports.MsgDelegate.encode(request).finish();
    var promise = this.rpc.request(this.service, "Delegate", data);
    return promise.then(function (data) {
      return exports.MsgDelegateResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.WithdrawRewards = function (request) {
    var data = exports.MsgWithdrawRewards.encode(request).finish();
    var promise = this.rpc.request(this.service, "WithdrawRewards", data);
    return promise.then(function (data) {
      return exports.MsgWithdrawRewardsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.Undelegate = function (request) {
    var data = exports.MsgUndelegate.encode(request).finish();
    var promise = this.rpc.request(this.service, "Undelegate", data);
    return promise.then(function (data) {
      return exports.MsgUndelegateResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.Redelegate = function (request) {
    var data = exports.MsgRedelegate.encode(request).finish();
    var promise = this.rpc.request(this.service, "Redelegate", data);
    return promise.then(function (data) {
      return exports.MsgRedelegateResponse.decode(
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
