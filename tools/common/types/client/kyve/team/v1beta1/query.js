"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl =
  exports.QueryServiceName =
  exports.QueryVestingPlan =
  exports.QueryVestingStatus =
  exports.QueryTeamVestingStatusByTimeResponse =
  exports.QueryTeamVestingStatusByTimeRequest =
  exports.QueryTeamVestingStatusResponse =
  exports.QueryTeamVestingStatusRequest =
  exports.QueryTeamVestingAccountResponse =
  exports.QueryTeamVestingAccountRequest =
  exports.QueryTeamVestingAccountsResponse =
  exports.QueryTeamVestingAccountsRequest =
  exports.QueryTeamInfoResponse =
  exports.QueryTeamInfoRequest =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var team_1 = require("./team");
exports.protobufPackage = "kyve.team.v1beta1";
function createBaseQueryTeamInfoRequest() {
  return {};
}
exports.QueryTeamInfoRequest = {
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
    var message = createBaseQueryTeamInfoRequest();
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
    return exports.QueryTeamInfoRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseQueryTeamInfoRequest();
    return message;
  },
};
function createBaseQueryTeamInfoResponse() {
  return {
    foundation_authority: "",
    bcp_authority: "",
    total_team_allocation: "0",
    issued_team_allocation: "0",
    available_team_allocation: "0",
    total_authority_rewards: "0",
    claimed_authority_rewards: "0",
    available_authority_rewards: "0",
    total_account_rewards: "0",
    claimed_account_rewards: "0",
    available_account_rewards: "0",
    required_module_balance: "0",
    team_module_balance: "0",
  };
}
exports.QueryTeamInfoResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.foundation_authority !== "") {
      writer.uint32(10).string(message.foundation_authority);
    }
    if (message.bcp_authority !== "") {
      writer.uint32(18).string(message.bcp_authority);
    }
    if (message.total_team_allocation !== "0") {
      writer.uint32(24).uint64(message.total_team_allocation);
    }
    if (message.issued_team_allocation !== "0") {
      writer.uint32(32).uint64(message.issued_team_allocation);
    }
    if (message.available_team_allocation !== "0") {
      writer.uint32(40).uint64(message.available_team_allocation);
    }
    if (message.total_authority_rewards !== "0") {
      writer.uint32(48).uint64(message.total_authority_rewards);
    }
    if (message.claimed_authority_rewards !== "0") {
      writer.uint32(56).uint64(message.claimed_authority_rewards);
    }
    if (message.available_authority_rewards !== "0") {
      writer.uint32(64).uint64(message.available_authority_rewards);
    }
    if (message.total_account_rewards !== "0") {
      writer.uint32(72).uint64(message.total_account_rewards);
    }
    if (message.claimed_account_rewards !== "0") {
      writer.uint32(80).uint64(message.claimed_account_rewards);
    }
    if (message.available_account_rewards !== "0") {
      writer.uint32(88).uint64(message.available_account_rewards);
    }
    if (message.required_module_balance !== "0") {
      writer.uint32(96).uint64(message.required_module_balance);
    }
    if (message.team_module_balance !== "0") {
      writer.uint32(104).uint64(message.team_module_balance);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamInfoResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.foundation_authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.bcp_authority = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.total_team_allocation = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.issued_team_allocation = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.available_team_allocation = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.total_authority_rewards = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.claimed_authority_rewards = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.available_authority_rewards = longToString(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.total_account_rewards = longToString(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.claimed_account_rewards = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.available_account_rewards = longToString(reader.uint64());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.required_module_balance = longToString(reader.uint64());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.team_module_balance = longToString(reader.uint64());
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
      foundation_authority: isSet(object.foundation_authority)
        ? globalThis.String(object.foundation_authority)
        : "",
      bcp_authority: isSet(object.bcp_authority)
        ? globalThis.String(object.bcp_authority)
        : "",
      total_team_allocation: isSet(object.total_team_allocation)
        ? globalThis.String(object.total_team_allocation)
        : "0",
      issued_team_allocation: isSet(object.issued_team_allocation)
        ? globalThis.String(object.issued_team_allocation)
        : "0",
      available_team_allocation: isSet(object.available_team_allocation)
        ? globalThis.String(object.available_team_allocation)
        : "0",
      total_authority_rewards: isSet(object.total_authority_rewards)
        ? globalThis.String(object.total_authority_rewards)
        : "0",
      claimed_authority_rewards: isSet(object.claimed_authority_rewards)
        ? globalThis.String(object.claimed_authority_rewards)
        : "0",
      available_authority_rewards: isSet(object.available_authority_rewards)
        ? globalThis.String(object.available_authority_rewards)
        : "0",
      total_account_rewards: isSet(object.total_account_rewards)
        ? globalThis.String(object.total_account_rewards)
        : "0",
      claimed_account_rewards: isSet(object.claimed_account_rewards)
        ? globalThis.String(object.claimed_account_rewards)
        : "0",
      available_account_rewards: isSet(object.available_account_rewards)
        ? globalThis.String(object.available_account_rewards)
        : "0",
      required_module_balance: isSet(object.required_module_balance)
        ? globalThis.String(object.required_module_balance)
        : "0",
      team_module_balance: isSet(object.team_module_balance)
        ? globalThis.String(object.team_module_balance)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.foundation_authority !== "") {
      obj.foundation_authority = message.foundation_authority;
    }
    if (message.bcp_authority !== "") {
      obj.bcp_authority = message.bcp_authority;
    }
    if (message.total_team_allocation !== "0") {
      obj.total_team_allocation = message.total_team_allocation;
    }
    if (message.issued_team_allocation !== "0") {
      obj.issued_team_allocation = message.issued_team_allocation;
    }
    if (message.available_team_allocation !== "0") {
      obj.available_team_allocation = message.available_team_allocation;
    }
    if (message.total_authority_rewards !== "0") {
      obj.total_authority_rewards = message.total_authority_rewards;
    }
    if (message.claimed_authority_rewards !== "0") {
      obj.claimed_authority_rewards = message.claimed_authority_rewards;
    }
    if (message.available_authority_rewards !== "0") {
      obj.available_authority_rewards = message.available_authority_rewards;
    }
    if (message.total_account_rewards !== "0") {
      obj.total_account_rewards = message.total_account_rewards;
    }
    if (message.claimed_account_rewards !== "0") {
      obj.claimed_account_rewards = message.claimed_account_rewards;
    }
    if (message.available_account_rewards !== "0") {
      obj.available_account_rewards = message.available_account_rewards;
    }
    if (message.required_module_balance !== "0") {
      obj.required_module_balance = message.required_module_balance;
    }
    if (message.team_module_balance !== "0") {
      obj.team_module_balance = message.team_module_balance;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamInfoResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var message = createBaseQueryTeamInfoResponse();
    message.foundation_authority =
      (_a = object.foundation_authority) !== null && _a !== void 0 ? _a : "";
    message.bcp_authority =
      (_b = object.bcp_authority) !== null && _b !== void 0 ? _b : "";
    message.total_team_allocation =
      (_c = object.total_team_allocation) !== null && _c !== void 0 ? _c : "0";
    message.issued_team_allocation =
      (_d = object.issued_team_allocation) !== null && _d !== void 0 ? _d : "0";
    message.available_team_allocation =
      (_e = object.available_team_allocation) !== null && _e !== void 0
        ? _e
        : "0";
    message.total_authority_rewards =
      (_f = object.total_authority_rewards) !== null && _f !== void 0
        ? _f
        : "0";
    message.claimed_authority_rewards =
      (_g = object.claimed_authority_rewards) !== null && _g !== void 0
        ? _g
        : "0";
    message.available_authority_rewards =
      (_h = object.available_authority_rewards) !== null && _h !== void 0
        ? _h
        : "0";
    message.total_account_rewards =
      (_j = object.total_account_rewards) !== null && _j !== void 0 ? _j : "0";
    message.claimed_account_rewards =
      (_k = object.claimed_account_rewards) !== null && _k !== void 0
        ? _k
        : "0";
    message.available_account_rewards =
      (_l = object.available_account_rewards) !== null && _l !== void 0
        ? _l
        : "0";
    message.required_module_balance =
      (_m = object.required_module_balance) !== null && _m !== void 0
        ? _m
        : "0";
    message.team_module_balance =
      (_o = object.team_module_balance) !== null && _o !== void 0 ? _o : "0";
    return message;
  },
};
function createBaseQueryTeamVestingAccountsRequest() {
  return {};
}
exports.QueryTeamVestingAccountsRequest = {
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
    var message = createBaseQueryTeamVestingAccountsRequest();
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
    return exports.QueryTeamVestingAccountsRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseQueryTeamVestingAccountsRequest();
    return message;
  },
};
function createBaseQueryTeamVestingAccountsResponse() {
  return { accounts: [] };
}
exports.QueryTeamVestingAccountsResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.accounts; _i < _a.length; _i++) {
      var v = _a[_i];
      team_1.TeamVestingAccount.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingAccountsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.accounts.push(
            team_1.TeamVestingAccount.decode(reader, reader.uint32())
          );
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
      accounts: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.accounts
      )
        ? object.accounts.map(function (e) {
            return team_1.TeamVestingAccount.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (
      (_a = message.accounts) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.accounts = message.accounts.map(function (e) {
        return team_1.TeamVestingAccount.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingAccountsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryTeamVestingAccountsResponse();
    message.accounts =
      ((_a = object.accounts) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return team_1.TeamVestingAccount.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseQueryTeamVestingAccountRequest() {
  return { id: "0" };
}
exports.QueryTeamVestingAccountRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingAccountRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = longToString(reader.uint64());
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
    return { id: isSet(object.id) ? globalThis.String(object.id) : "0" };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingAccountRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryTeamVestingAccountRequest();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    return message;
  },
};
function createBaseQueryTeamVestingAccountResponse() {
  return { account: undefined };
}
exports.QueryTeamVestingAccountResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.account !== undefined) {
      team_1.TeamVestingAccount.encode(
        message.account,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingAccountResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.account = team_1.TeamVestingAccount.decode(
            reader,
            reader.uint32()
          );
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
      account: isSet(object.account)
        ? team_1.TeamVestingAccount.fromJSON(object.account)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.account !== undefined) {
      obj.account = team_1.TeamVestingAccount.toJSON(message.account);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingAccountResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var message = createBaseQueryTeamVestingAccountResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? team_1.TeamVestingAccount.fromPartial(object.account)
        : undefined;
    return message;
  },
};
function createBaseQueryTeamVestingStatusRequest() {
  return { id: "0" };
}
exports.QueryTeamVestingStatusRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingStatusRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = longToString(reader.uint64());
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
    return { id: isSet(object.id) ? globalThis.String(object.id) : "0" };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingStatusRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryTeamVestingStatusRequest();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    return message;
  },
};
function createBaseQueryTeamVestingStatusResponse() {
  return { request_date: "", plan: undefined, status: undefined };
}
exports.QueryTeamVestingStatusResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.request_date !== "") {
      writer.uint32(10).string(message.request_date);
    }
    if (message.plan !== undefined) {
      exports.QueryVestingPlan.encode(
        message.plan,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      exports.QueryVestingStatus.encode(
        message.status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingStatusResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.request_date = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.plan = exports.QueryVestingPlan.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.status = exports.QueryVestingStatus.decode(
            reader,
            reader.uint32()
          );
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
      request_date: isSet(object.request_date)
        ? globalThis.String(object.request_date)
        : "",
      plan: isSet(object.plan)
        ? exports.QueryVestingPlan.fromJSON(object.plan)
        : undefined,
      status: isSet(object.status)
        ? exports.QueryVestingStatus.fromJSON(object.status)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.request_date !== "") {
      obj.request_date = message.request_date;
    }
    if (message.plan !== undefined) {
      obj.plan = exports.QueryVestingPlan.toJSON(message.plan);
    }
    if (message.status !== undefined) {
      obj.status = exports.QueryVestingStatus.toJSON(message.status);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingStatusResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryTeamVestingStatusResponse();
    message.request_date =
      (_a = object.request_date) !== null && _a !== void 0 ? _a : "";
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? exports.QueryVestingPlan.fromPartial(object.plan)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? exports.QueryVestingStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};
function createBaseQueryTeamVestingStatusByTimeRequest() {
  return { id: "0", time: "0" };
}
exports.QueryTeamVestingStatusByTimeRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.time !== "0") {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingStatusByTimeRequest();
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
          message.time = longToString(reader.uint64());
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
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.time !== "0") {
      obj.time = message.time;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingStatusByTimeRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryTeamVestingStatusByTimeRequest();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.time = (_b = object.time) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseQueryTeamVestingStatusByTimeResponse() {
  return { request_date: "", plan: undefined, status: undefined };
}
exports.QueryTeamVestingStatusByTimeResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.request_date !== "") {
      writer.uint32(10).string(message.request_date);
    }
    if (message.plan !== undefined) {
      exports.QueryVestingPlan.encode(
        message.plan,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.status !== undefined) {
      exports.QueryVestingStatus.encode(
        message.status,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryTeamVestingStatusByTimeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.request_date = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.plan = exports.QueryVestingPlan.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.status = exports.QueryVestingStatus.decode(
            reader,
            reader.uint32()
          );
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
      request_date: isSet(object.request_date)
        ? globalThis.String(object.request_date)
        : "",
      plan: isSet(object.plan)
        ? exports.QueryVestingPlan.fromJSON(object.plan)
        : undefined,
      status: isSet(object.status)
        ? exports.QueryVestingStatus.fromJSON(object.status)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.request_date !== "") {
      obj.request_date = message.request_date;
    }
    if (message.plan !== undefined) {
      obj.plan = exports.QueryVestingPlan.toJSON(message.plan);
    }
    if (message.status !== undefined) {
      obj.status = exports.QueryVestingStatus.toJSON(message.status);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryTeamVestingStatusByTimeResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryTeamVestingStatusByTimeResponse();
    message.request_date =
      (_a = object.request_date) !== null && _a !== void 0 ? _a : "";
    message.plan =
      object.plan !== undefined && object.plan !== null
        ? exports.QueryVestingPlan.fromPartial(object.plan)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? exports.QueryVestingStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};
function createBaseQueryVestingStatus() {
  return {
    total_vested_amount: "0",
    total_unlocked_amount: "0",
    current_claimable_amount: "0",
    locked_vested_amount: "0",
    remaining_unvested_amount: "0",
    claimed_amount: "0",
    total_rewards: "0",
    claimed_rewards: "0",
    available_rewards: "0",
  };
}
exports.QueryVestingStatus = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.total_vested_amount !== "0") {
      writer.uint32(8).uint64(message.total_vested_amount);
    }
    if (message.total_unlocked_amount !== "0") {
      writer.uint32(16).uint64(message.total_unlocked_amount);
    }
    if (message.current_claimable_amount !== "0") {
      writer.uint32(24).uint64(message.current_claimable_amount);
    }
    if (message.locked_vested_amount !== "0") {
      writer.uint32(32).uint64(message.locked_vested_amount);
    }
    if (message.remaining_unvested_amount !== "0") {
      writer.uint32(40).uint64(message.remaining_unvested_amount);
    }
    if (message.claimed_amount !== "0") {
      writer.uint32(48).uint64(message.claimed_amount);
    }
    if (message.total_rewards !== "0") {
      writer.uint32(56).uint64(message.total_rewards);
    }
    if (message.claimed_rewards !== "0") {
      writer.uint32(64).uint64(message.claimed_rewards);
    }
    if (message.available_rewards !== "0") {
      writer.uint32(72).uint64(message.available_rewards);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVestingStatus();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.total_vested_amount = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.total_unlocked_amount = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.current_claimable_amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.locked_vested_amount = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.remaining_unvested_amount = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.claimed_amount = longToString(reader.uint64());
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
          message.claimed_rewards = longToString(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.available_rewards = longToString(reader.uint64());
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
      total_vested_amount: isSet(object.total_vested_amount)
        ? globalThis.String(object.total_vested_amount)
        : "0",
      total_unlocked_amount: isSet(object.total_unlocked_amount)
        ? globalThis.String(object.total_unlocked_amount)
        : "0",
      current_claimable_amount: isSet(object.current_claimable_amount)
        ? globalThis.String(object.current_claimable_amount)
        : "0",
      locked_vested_amount: isSet(object.locked_vested_amount)
        ? globalThis.String(object.locked_vested_amount)
        : "0",
      remaining_unvested_amount: isSet(object.remaining_unvested_amount)
        ? globalThis.String(object.remaining_unvested_amount)
        : "0",
      claimed_amount: isSet(object.claimed_amount)
        ? globalThis.String(object.claimed_amount)
        : "0",
      total_rewards: isSet(object.total_rewards)
        ? globalThis.String(object.total_rewards)
        : "0",
      claimed_rewards: isSet(object.claimed_rewards)
        ? globalThis.String(object.claimed_rewards)
        : "0",
      available_rewards: isSet(object.available_rewards)
        ? globalThis.String(object.available_rewards)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.total_vested_amount !== "0") {
      obj.total_vested_amount = message.total_vested_amount;
    }
    if (message.total_unlocked_amount !== "0") {
      obj.total_unlocked_amount = message.total_unlocked_amount;
    }
    if (message.current_claimable_amount !== "0") {
      obj.current_claimable_amount = message.current_claimable_amount;
    }
    if (message.locked_vested_amount !== "0") {
      obj.locked_vested_amount = message.locked_vested_amount;
    }
    if (message.remaining_unvested_amount !== "0") {
      obj.remaining_unvested_amount = message.remaining_unvested_amount;
    }
    if (message.claimed_amount !== "0") {
      obj.claimed_amount = message.claimed_amount;
    }
    if (message.total_rewards !== "0") {
      obj.total_rewards = message.total_rewards;
    }
    if (message.claimed_rewards !== "0") {
      obj.claimed_rewards = message.claimed_rewards;
    }
    if (message.available_rewards !== "0") {
      obj.available_rewards = message.available_rewards;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryVestingStatus.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var message = createBaseQueryVestingStatus();
    message.total_vested_amount =
      (_a = object.total_vested_amount) !== null && _a !== void 0 ? _a : "0";
    message.total_unlocked_amount =
      (_b = object.total_unlocked_amount) !== null && _b !== void 0 ? _b : "0";
    message.current_claimable_amount =
      (_c = object.current_claimable_amount) !== null && _c !== void 0
        ? _c
        : "0";
    message.locked_vested_amount =
      (_d = object.locked_vested_amount) !== null && _d !== void 0 ? _d : "0";
    message.remaining_unvested_amount =
      (_e = object.remaining_unvested_amount) !== null && _e !== void 0
        ? _e
        : "0";
    message.claimed_amount =
      (_f = object.claimed_amount) !== null && _f !== void 0 ? _f : "0";
    message.total_rewards =
      (_g = object.total_rewards) !== null && _g !== void 0 ? _g : "0";
    message.claimed_rewards =
      (_h = object.claimed_rewards) !== null && _h !== void 0 ? _h : "0";
    message.available_rewards =
      (_j = object.available_rewards) !== null && _j !== void 0 ? _j : "0";
    return message;
  },
};
function createBaseQueryVestingPlan() {
  return {
    commencement: "",
    token_vesting_start: "",
    token_vesting_finished: "",
    token_unlock_start: "",
    token_unlock_finished: "",
    clawback: "0",
    clawback_amount: "0",
    maximum_vesting_amount: "0",
  };
}
exports.QueryVestingPlan = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.commencement !== "") {
      writer.uint32(10).string(message.commencement);
    }
    if (message.token_vesting_start !== "") {
      writer.uint32(18).string(message.token_vesting_start);
    }
    if (message.token_vesting_finished !== "") {
      writer.uint32(26).string(message.token_vesting_finished);
    }
    if (message.token_unlock_start !== "") {
      writer.uint32(34).string(message.token_unlock_start);
    }
    if (message.token_unlock_finished !== "") {
      writer.uint32(42).string(message.token_unlock_finished);
    }
    if (message.clawback !== "0") {
      writer.uint32(48).uint64(message.clawback);
    }
    if (message.clawback_amount !== "0") {
      writer.uint32(56).uint64(message.clawback_amount);
    }
    if (message.maximum_vesting_amount !== "0") {
      writer.uint32(64).uint64(message.maximum_vesting_amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryVestingPlan();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.commencement = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.token_vesting_start = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.token_vesting_finished = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.token_unlock_start = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.token_unlock_finished = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.clawback = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.clawback_amount = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.maximum_vesting_amount = longToString(reader.uint64());
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
      commencement: isSet(object.commencement)
        ? globalThis.String(object.commencement)
        : "",
      token_vesting_start: isSet(object.token_vesting_start)
        ? globalThis.String(object.token_vesting_start)
        : "",
      token_vesting_finished: isSet(object.token_vesting_finished)
        ? globalThis.String(object.token_vesting_finished)
        : "",
      token_unlock_start: isSet(object.token_unlock_start)
        ? globalThis.String(object.token_unlock_start)
        : "",
      token_unlock_finished: isSet(object.token_unlock_finished)
        ? globalThis.String(object.token_unlock_finished)
        : "",
      clawback: isSet(object.clawback)
        ? globalThis.String(object.clawback)
        : "0",
      clawback_amount: isSet(object.clawback_amount)
        ? globalThis.String(object.clawback_amount)
        : "0",
      maximum_vesting_amount: isSet(object.maximum_vesting_amount)
        ? globalThis.String(object.maximum_vesting_amount)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.commencement !== "") {
      obj.commencement = message.commencement;
    }
    if (message.token_vesting_start !== "") {
      obj.token_vesting_start = message.token_vesting_start;
    }
    if (message.token_vesting_finished !== "") {
      obj.token_vesting_finished = message.token_vesting_finished;
    }
    if (message.token_unlock_start !== "") {
      obj.token_unlock_start = message.token_unlock_start;
    }
    if (message.token_unlock_finished !== "") {
      obj.token_unlock_finished = message.token_unlock_finished;
    }
    if (message.clawback !== "0") {
      obj.clawback = message.clawback;
    }
    if (message.clawback_amount !== "0") {
      obj.clawback_amount = message.clawback_amount;
    }
    if (message.maximum_vesting_amount !== "0") {
      obj.maximum_vesting_amount = message.maximum_vesting_amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryVestingPlan.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var message = createBaseQueryVestingPlan();
    message.commencement =
      (_a = object.commencement) !== null && _a !== void 0 ? _a : "";
    message.token_vesting_start =
      (_b = object.token_vesting_start) !== null && _b !== void 0 ? _b : "";
    message.token_vesting_finished =
      (_c = object.token_vesting_finished) !== null && _c !== void 0 ? _c : "";
    message.token_unlock_start =
      (_d = object.token_unlock_start) !== null && _d !== void 0 ? _d : "";
    message.token_unlock_finished =
      (_e = object.token_unlock_finished) !== null && _e !== void 0 ? _e : "";
    message.clawback =
      (_f = object.clawback) !== null && _f !== void 0 ? _f : "0";
    message.clawback_amount =
      (_g = object.clawback_amount) !== null && _g !== void 0 ? _g : "0";
    message.maximum_vesting_amount =
      (_h = object.maximum_vesting_amount) !== null && _h !== void 0 ? _h : "0";
    return message;
  },
};
exports.QueryServiceName = "kyve.team.v1beta1.Query";
var QueryClientImpl = /** @class */ (function () {
  function QueryClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.QueryServiceName;
    this.rpc = rpc;
    this.TeamInfo = this.TeamInfo.bind(this);
    this.TeamVestingAccounts = this.TeamVestingAccounts.bind(this);
    this.TeamVestingAccount = this.TeamVestingAccount.bind(this);
    this.TeamVestingStatus = this.TeamVestingStatus.bind(this);
    this.TeamVestingStatusByTime = this.TeamVestingStatusByTime.bind(this);
  }
  QueryClientImpl.prototype.TeamInfo = function (request) {
    var data = exports.QueryTeamInfoRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "TeamInfo", data);
    return promise.then(function (data) {
      return exports.QueryTeamInfoResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryClientImpl.prototype.TeamVestingAccounts = function (request) {
    var data = exports.QueryTeamVestingAccountsRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "TeamVestingAccounts", data);
    return promise.then(function (data) {
      return exports.QueryTeamVestingAccountsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryClientImpl.prototype.TeamVestingAccount = function (request) {
    var data = exports.QueryTeamVestingAccountRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "TeamVestingAccount", data);
    return promise.then(function (data) {
      return exports.QueryTeamVestingAccountResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryClientImpl.prototype.TeamVestingStatus = function (request) {
    var data = exports.QueryTeamVestingStatusRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "TeamVestingStatus", data);
    return promise.then(function (data) {
      return exports.QueryTeamVestingStatusResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryClientImpl.prototype.TeamVestingStatusByTime = function (request) {
    var data =
      exports.QueryTeamVestingStatusByTimeRequest.encode(request).finish();
    var promise = this.rpc.request(
      this.service,
      "TeamVestingStatusByTime",
      data
    );
    return promise.then(function (data) {
      return exports.QueryTeamVestingStatusByTimeResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return QueryClientImpl;
})();
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map
