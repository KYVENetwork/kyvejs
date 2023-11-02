"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventClaimAuthorityRewards =
  exports.EventClaimInflationRewards =
  exports.EventClaimedUnlocked =
  exports.EventClawback =
  exports.EventCreateTeamVestingAccount =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.team.v1beta1";
function createBaseEventCreateTeamVestingAccount() {
  return { authority: "", id: "0", total_allocation: "0", commencement: "0" };
}
exports.EventCreateTeamVestingAccount = {
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
    if (message.total_allocation !== "0") {
      writer.uint32(24).uint64(message.total_allocation);
    }
    if (message.commencement !== "0") {
      writer.uint32(32).uint64(message.commencement);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreateTeamVestingAccount();
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
          message.total_allocation = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
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
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
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
    if (message.id !== "0") {
      obj.id = message.id;
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
    return exports.EventCreateTeamVestingAccount.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventCreateTeamVestingAccount();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.total_allocation =
      (_c = object.total_allocation) !== null && _c !== void 0 ? _c : "0";
    message.commencement =
      (_d = object.commencement) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseEventClawback() {
  return { authority: "", id: "0", clawback: "0", amount: "0" };
}
exports.EventClawback = {
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
    var message = createBaseEventClawback();
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      clawback: isSet(object.clawback)
        ? globalThis.String(object.clawback)
        : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
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
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventClawback.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventClawback();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.clawback =
      (_c = object.clawback) !== null && _c !== void 0 ? _c : "0";
    message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseEventClaimedUnlocked() {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}
exports.EventClaimedUnlocked = {
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
    var message = createBaseEventClaimedUnlocked();
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
    return exports.EventClaimedUnlocked.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventClaimedUnlocked();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.recipient =
      (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseEventClaimInflationRewards() {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}
exports.EventClaimInflationRewards = {
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
    var message = createBaseEventClaimInflationRewards();
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
    return exports.EventClaimInflationRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventClaimInflationRewards();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.recipient =
      (_d = object.recipient) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseEventClaimAuthorityRewards() {
  return { authority: "", amount: "0", recipient: "" };
}
exports.EventClaimAuthorityRewards = {
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
    var message = createBaseEventClaimAuthorityRewards();
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
    return exports.EventClaimAuthorityRewards.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventClaimAuthorityRewards();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    message.recipient =
      (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
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
