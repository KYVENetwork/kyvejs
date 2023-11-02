"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var team_1 = require("./team");
exports.protobufPackage = "kyve.team.v1beta1";
function createBaseGenesisState() {
  return { authority: undefined, account_list: [], account_count: "0" };
}
exports.GenesisState = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== undefined) {
      team_1.Authority.encode(
        message.authority,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (var _i = 0, _a = message.account_list; _i < _a.length; _i++) {
      var v = _a[_i];
      team_1.TeamVestingAccount.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.account_count !== "0") {
      writer.uint32(32).uint64(message.account_count);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }
          message.authority = team_1.Authority.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.account_list.push(
            team_1.TeamVestingAccount.decode(reader, reader.uint32())
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.account_count = longToString(reader.uint64());
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
        ? team_1.Authority.fromJSON(object.authority)
        : undefined,
      account_list: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.account_list
      )
        ? object.account_list.map(function (e) {
            return team_1.TeamVestingAccount.fromJSON(e);
          })
        : [],
      account_count: isSet(object.account_count)
        ? globalThis.String(object.account_count)
        : "0",
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.authority !== undefined) {
      obj.authority = team_1.Authority.toJSON(message.authority);
    }
    if (
      (_a = message.account_list) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.account_list = message.account_list.map(function (e) {
        return team_1.TeamVestingAccount.toJSON(e);
      });
    }
    if (message.account_count !== "0") {
      obj.account_count = message.account_count;
    }
    return obj;
  },
  create: function (base) {
    return exports.GenesisState.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseGenesisState();
    message.authority =
      object.authority !== undefined && object.authority !== null
        ? team_1.Authority.fromPartial(object.authority)
        : undefined;
    message.account_list =
      ((_a = object.account_list) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return team_1.TeamVestingAccount.fromPartial(e);
          })) || [];
    message.account_count =
      (_b = object.account_count) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=genesis.js.map
