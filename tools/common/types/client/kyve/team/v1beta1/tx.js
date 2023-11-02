"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl =
  exports.MsgServiceName =
  exports.MsgCreateTeamVestingAccountResponse =
  exports.MsgCreateTeamVestingAccount =
  exports.MsgClawbackResponse =
  exports.MsgClawback =
  exports.MsgClaimAccountRewardsResponse =
  exports.MsgClaimAccountRewards =
  exports.MsgClaimAuthorityRewardsResponse =
  exports.MsgClaimAuthorityRewards =
  exports.MsgClaimUnlockedResponse =
  exports.MsgClaimUnlocked =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.team.v1beta1";
function createBaseMsgClaimUnlocked() {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}
exports.MsgClaimUnlocked = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClaimUnlocked();
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
          if (tag !== 16) {
            break;
          }
          message.id = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.recipient = reader.string();
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
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      recipient: isSet(object.recipient)
        ? globalThis.String(object.recipient)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgClaimUnlocked.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgClaimUnlocked();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.recipient =
      (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseMsgClaimUnlockedResponse() {
  return {};
}
exports.MsgClaimUnlockedResponse = {
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
    var message = createBaseMsgClaimUnlockedResponse();
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
    return exports.MsgClaimUnlockedResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgClaimUnlockedResponse();
    return message;
  },
};
function createBaseMsgClaimAuthorityRewards() {
  return { authority: "", amount: "0", recipient: "" };
}
exports.MsgClaimAuthorityRewards = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClaimAuthorityRewards();
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
          if (tag !== 16) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.recipient = reader.string();
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
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      recipient: isSet(object.recipient)
        ? globalThis.String(object.recipient)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgClaimAuthorityRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgClaimAuthorityRewards();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    message.recipient =
      (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
    return message;
  },
};
function createBaseMsgClaimAuthorityRewardsResponse() {
  return {};
}
exports.MsgClaimAuthorityRewardsResponse = {
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
    var message = createBaseMsgClaimAuthorityRewardsResponse();
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
    return exports.MsgClaimAuthorityRewardsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgClaimAuthorityRewardsResponse();
    return message;
  },
};
function createBaseMsgClaimAccountRewards() {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}
exports.MsgClaimAccountRewards = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClaimAccountRewards();
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
          if (tag !== 16) {
            break;
          }
          message.id = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.recipient = reader.string();
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
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      recipient: isSet(object.recipient)
        ? globalThis.String(object.recipient)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgClaimAccountRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgClaimAccountRewards();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.recipient =
      (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseMsgClaimAccountRewardsResponse() {
  return {};
}
exports.MsgClaimAccountRewardsResponse = {
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
    var message = createBaseMsgClaimAccountRewardsResponse();
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
    return exports.MsgClaimAccountRewardsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgClaimAccountRewardsResponse();
    return message;
  },
};
function createBaseMsgClawback() {
  return { authority: "", id: "0", clawback: "0" };
}
exports.MsgClawback = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.clawback !== "0") {
      writer.uint32(24).uint64(message.clawback);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgClawback();
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
          if (tag !== 16) {
            break;
          }
          message.id = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.clawback = longToString(reader.uint64());
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
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      clawback: isSet(object.clawback)
        ? globalThis.String(object.clawback)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.clawback !== "0") {
      obj.clawback = message.clawback;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgClawback.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgClawback();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.clawback =
      (_c = object.clawback) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseMsgClawbackResponse() {
  return {};
}
exports.MsgClawbackResponse = {
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
    var message = createBaseMsgClawbackResponse();
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
    return exports.MsgClawbackResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgClawbackResponse();
    return message;
  },
};
function createBaseMsgCreateTeamVestingAccount() {
  return { authority: "", total_allocation: "0", commencement: "0" };
}
exports.MsgCreateTeamVestingAccount = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.total_allocation !== "0") {
      writer.uint32(16).uint64(message.total_allocation);
    }
    if (message.commencement !== "0") {
      writer.uint32(24).uint64(message.commencement);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateTeamVestingAccount();
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
          if (tag !== 16) {
            break;
          }
          message.total_allocation = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.commencement = longToString(reader.uint64());
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
      total_allocation: isSet(object.total_allocation)
        ? globalThis.String(object.total_allocation)
        : "0",
      commencement: isSet(object.commencement)
        ? globalThis.String(object.commencement)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.total_allocation !== "0") {
      obj.total_allocation = message.total_allocation;
    }
    if (message.commencement !== "0") {
      obj.commencement = message.commencement;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgCreateTeamVestingAccount.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgCreateTeamVestingAccount();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.total_allocation =
      (_b = object.total_allocation) !== null && _b !== void 0 ? _b : "0";
    message.commencement =
      (_c = object.commencement) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseMsgCreateTeamVestingAccountResponse() {
  return {};
}
exports.MsgCreateTeamVestingAccountResponse = {
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
    var message = createBaseMsgCreateTeamVestingAccountResponse();
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
    return exports.MsgCreateTeamVestingAccountResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgCreateTeamVestingAccountResponse();
    return message;
  },
};
exports.MsgServiceName = "kyve.team.v1beta1.Msg";
var MsgClientImpl = /** @class */ (function () {
  function MsgClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.MsgServiceName;
    this.rpc = rpc;
    this.ClaimUnlocked = this.ClaimUnlocked.bind(this);
    this.Clawback = this.Clawback.bind(this);
    this.CreateTeamVestingAccount = this.CreateTeamVestingAccount.bind(this);
    this.ClaimAuthorityRewards = this.ClaimAuthorityRewards.bind(this);
    this.ClaimAccountRewards = this.ClaimAccountRewards.bind(this);
  }
  MsgClientImpl.prototype.ClaimUnlocked = function (request) {
    var data = exports.MsgClaimUnlocked.encode(request).finish();
    var promise = this.rpc.request(this.service, "ClaimUnlocked", data);
    return promise.then(function (data) {
      return exports.MsgClaimUnlockedResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.Clawback = function (request) {
    var data = exports.MsgClawback.encode(request).finish();
    var promise = this.rpc.request(this.service, "Clawback", data);
    return promise.then(function (data) {
      return exports.MsgClawbackResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.CreateTeamVestingAccount = function (request) {
    var data = exports.MsgCreateTeamVestingAccount.encode(request).finish();
    var promise = this.rpc.request(
      this.service,
      "CreateTeamVestingAccount",
      data
    );
    return promise.then(function (data) {
      return exports.MsgCreateTeamVestingAccountResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.ClaimAuthorityRewards = function (request) {
    var data = exports.MsgClaimAuthorityRewards.encode(request).finish();
    var promise = this.rpc.request(this.service, "ClaimAuthorityRewards", data);
    return promise.then(function (data) {
      return exports.MsgClaimAuthorityRewardsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.ClaimAccountRewards = function (request) {
    var data = exports.MsgClaimAccountRewards.encode(request).finish();
    var promise = this.rpc.request(this.service, "ClaimAccountRewards", data);
    return promise.then(function (data) {
      return exports.MsgClaimAccountRewardsResponse.decode(
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
