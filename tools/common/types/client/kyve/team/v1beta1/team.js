"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamVestingAccount =
  exports.Authority =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.team.v1beta1";
function createBaseAuthority() {
  return { total_rewards: "0", rewards_claimed: "0" };
}
exports.Authority = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.total_rewards !== "0") {
      writer.uint32(8).uint64(message.total_rewards);
    }
    if (message.rewards_claimed !== "0") {
      writer.uint32(16).uint64(message.rewards_claimed);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAuthority();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.total_rewards = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.rewards_claimed = longToString(reader.uint64());
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
      total_rewards: isSet(object.total_rewards)
        ? globalThis.String(object.total_rewards)
        : "0",
      rewards_claimed: isSet(object.rewards_claimed)
        ? globalThis.String(object.rewards_claimed)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.total_rewards !== "0") {
      obj.total_rewards = message.total_rewards;
    }
    if (message.rewards_claimed !== "0") {
      obj.rewards_claimed = message.rewards_claimed;
    }
    return obj;
  },
  create: function (base) {
    return exports.Authority.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseAuthority();
    message.total_rewards =
      (_a = object.total_rewards) !== null && _a !== void 0 ? _a : "0";
    message.rewards_claimed =
      (_b = object.rewards_claimed) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseTeamVestingAccount() {
  return {
    id: "0",
    total_allocation: "0",
    commencement: "0",
    clawback: "0",
    unlocked_claimed: "0",
    last_claimed_time: "0",
    total_rewards: "0",
    rewards_claimed: "0",
  };
}
exports.TeamVestingAccount = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.total_allocation !== "0") {
      writer.uint32(16).uint64(message.total_allocation);
    }
    if (message.commencement !== "0") {
      writer.uint32(24).uint64(message.commencement);
    }
    if (message.clawback !== "0") {
      writer.uint32(32).uint64(message.clawback);
    }
    if (message.unlocked_claimed !== "0") {
      writer.uint32(40).uint64(message.unlocked_claimed);
    }
    if (message.last_claimed_time !== "0") {
      writer.uint32(48).uint64(message.last_claimed_time);
    }
    if (message.total_rewards !== "0") {
      writer.uint32(56).uint64(message.total_rewards);
    }
    if (message.rewards_claimed !== "0") {
      writer.uint32(64).uint64(message.rewards_claimed);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTeamVestingAccount();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = longToString(reader.uint64());
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
        case 4:
          if (tag !== 32) {
            break;
          }
          message.clawback = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.unlocked_claimed = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.last_claimed_time = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.total_rewards = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.rewards_claimed = longToString(reader.uint64());
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
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      total_allocation: isSet(object.total_allocation)
        ? globalThis.String(object.total_allocation)
        : "0",
      commencement: isSet(object.commencement)
        ? globalThis.String(object.commencement)
        : "0",
      clawback: isSet(object.clawback)
        ? globalThis.String(object.clawback)
        : "0",
      unlocked_claimed: isSet(object.unlocked_claimed)
        ? globalThis.String(object.unlocked_claimed)
        : "0",
      last_claimed_time: isSet(object.last_claimed_time)
        ? globalThis.String(object.last_claimed_time)
        : "0",
      total_rewards: isSet(object.total_rewards)
        ? globalThis.String(object.total_rewards)
        : "0",
      rewards_claimed: isSet(object.rewards_claimed)
        ? globalThis.String(object.rewards_claimed)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.total_allocation !== "0") {
      obj.total_allocation = message.total_allocation;
    }
    if (message.commencement !== "0") {
      obj.commencement = message.commencement;
    }
    if (message.clawback !== "0") {
      obj.clawback = message.clawback;
    }
    if (message.unlocked_claimed !== "0") {
      obj.unlocked_claimed = message.unlocked_claimed;
    }
    if (message.last_claimed_time !== "0") {
      obj.last_claimed_time = message.last_claimed_time;
    }
    if (message.total_rewards !== "0") {
      obj.total_rewards = message.total_rewards;
    }
    if (message.rewards_claimed !== "0") {
      obj.rewards_claimed = message.rewards_claimed;
    }
    return obj;
  },
  create: function (base) {
    return exports.TeamVestingAccount.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var message = createBaseTeamVestingAccount();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.total_allocation =
      (_b = object.total_allocation) !== null && _b !== void 0 ? _b : "0";
    message.commencement =
      (_c = object.commencement) !== null && _c !== void 0 ? _c : "0";
    message.clawback =
      (_d = object.clawback) !== null && _d !== void 0 ? _d : "0";
    message.unlocked_claimed =
      (_e = object.unlocked_claimed) !== null && _e !== void 0 ? _e : "0";
    message.last_claimed_time =
      (_f = object.last_claimed_time) !== null && _f !== void 0 ? _f : "0";
    message.total_rewards =
      (_g = object.total_rewards) !== null && _g !== void 0 ? _g : "0";
    message.rewards_claimed =
      (_h = object.rewards_claimed) !== null && _h !== void 0 ? _h : "0";
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
//# sourceMappingURL=team.js.map
