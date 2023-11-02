"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolMembership =
  exports.CommissionChangeEntry =
  exports.StakerMetadata =
  exports.FullStaker =
  exports.BasicPool =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pool_1 = require("../../pool/v1beta1/pool");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseBasicPool() {
  return {
    id: "0",
    name: "",
    runtime: "",
    logo: "",
    inflation_share_weight: "0",
    upload_interval: "0",
    total_funds: "0",
    total_delegation: "0",
    status: 0,
  };
}
exports.BasicPool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.inflation_share_weight !== "0") {
      writer.uint32(40).uint64(message.inflation_share_weight);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(48).uint64(message.upload_interval);
    }
    if (message.total_funds !== "0") {
      writer.uint32(56).uint64(message.total_funds);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(64).uint64(message.total_delegation);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBasicPool();
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
          if (tag !== 18) {
            break;
          }
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.runtime = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.logo = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.inflation_share_weight = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.upload_interval = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.total_funds = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.total_delegation = longToString(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.status = reader.int32();
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
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      inflation_share_weight: isSet(object.inflation_share_weight)
        ? globalThis.String(object.inflation_share_weight)
        : "0",
      upload_interval: isSet(object.upload_interval)
        ? globalThis.String(object.upload_interval)
        : "0",
      total_funds: isSet(object.total_funds)
        ? globalThis.String(object.total_funds)
        : "0",
      total_delegation: isSet(object.total_delegation)
        ? globalThis.String(object.total_delegation)
        : "0",
      status: isSet(object.status)
        ? (0, pool_1.poolStatusFromJSON)(object.status)
        : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.logo !== "") {
      obj.logo = message.logo;
    }
    if (message.inflation_share_weight !== "0") {
      obj.inflation_share_weight = message.inflation_share_weight;
    }
    if (message.upload_interval !== "0") {
      obj.upload_interval = message.upload_interval;
    }
    if (message.total_funds !== "0") {
      obj.total_funds = message.total_funds;
    }
    if (message.total_delegation !== "0") {
      obj.total_delegation = message.total_delegation;
    }
    if (message.status !== 0) {
      obj.status = (0, pool_1.poolStatusToJSON)(message.status);
    }
    return obj;
  },
  create: function (base) {
    return exports.BasicPool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var message = createBaseBasicPool();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
    message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
    message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
    message.inflation_share_weight =
      (_e = object.inflation_share_weight) !== null && _e !== void 0 ? _e : "0";
    message.upload_interval =
      (_f = object.upload_interval) !== null && _f !== void 0 ? _f : "0";
    message.total_funds =
      (_g = object.total_funds) !== null && _g !== void 0 ? _g : "0";
    message.total_delegation =
      (_h = object.total_delegation) !== null && _h !== void 0 ? _h : "0";
    message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
    return message;
  },
};
function createBaseFullStaker() {
  return {
    address: "",
    metadata: undefined,
    self_delegation: "0",
    self_delegation_unbonding: "0",
    total_delegation: "0",
    delegator_count: "0",
    pools: [],
  };
}
exports.FullStaker = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.metadata !== undefined) {
      exports.StakerMetadata.encode(
        message.metadata,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.self_delegation !== "0") {
      writer.uint32(24).uint64(message.self_delegation);
    }
    if (message.self_delegation_unbonding !== "0") {
      writer.uint32(32).uint64(message.self_delegation_unbonding);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(40).uint64(message.total_delegation);
    }
    if (message.delegator_count !== "0") {
      writer.uint32(48).uint64(message.delegator_count);
    }
    for (var _i = 0, _a = message.pools; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.PoolMembership.encode(v, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFullStaker();
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
          message.metadata = exports.StakerMetadata.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.self_delegation = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.self_delegation_unbonding = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.total_delegation = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.delegator_count = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.pools.push(
            exports.PoolMembership.decode(reader, reader.uint32())
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      metadata: isSet(object.metadata)
        ? exports.StakerMetadata.fromJSON(object.metadata)
        : undefined,
      self_delegation: isSet(object.self_delegation)
        ? globalThis.String(object.self_delegation)
        : "0",
      self_delegation_unbonding: isSet(object.self_delegation_unbonding)
        ? globalThis.String(object.self_delegation_unbonding)
        : "0",
      total_delegation: isSet(object.total_delegation)
        ? globalThis.String(object.total_delegation)
        : "0",
      delegator_count: isSet(object.delegator_count)
        ? globalThis.String(object.delegator_count)
        : "0",
      pools: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.pools
      )
        ? object.pools.map(function (e) {
            return exports.PoolMembership.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.metadata !== undefined) {
      obj.metadata = exports.StakerMetadata.toJSON(message.metadata);
    }
    if (message.self_delegation !== "0") {
      obj.self_delegation = message.self_delegation;
    }
    if (message.self_delegation_unbonding !== "0") {
      obj.self_delegation_unbonding = message.self_delegation_unbonding;
    }
    if (message.total_delegation !== "0") {
      obj.total_delegation = message.total_delegation;
    }
    if (message.delegator_count !== "0") {
      obj.delegator_count = message.delegator_count;
    }
    if ((_a = message.pools) === null || _a === void 0 ? void 0 : _a.length) {
      obj.pools = message.pools.map(function (e) {
        return exports.PoolMembership.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.FullStaker.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseFullStaker();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? exports.StakerMetadata.fromPartial(object.metadata)
        : undefined;
    message.self_delegation =
      (_b = object.self_delegation) !== null && _b !== void 0 ? _b : "0";
    message.self_delegation_unbonding =
      (_c = object.self_delegation_unbonding) !== null && _c !== void 0
        ? _c
        : "0";
    message.total_delegation =
      (_d = object.total_delegation) !== null && _d !== void 0 ? _d : "0";
    message.delegator_count =
      (_e = object.delegator_count) !== null && _e !== void 0 ? _e : "0";
    message.pools =
      ((_f = object.pools) === null || _f === void 0
        ? void 0
        : _f.map(function (e) {
            return exports.PoolMembership.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseStakerMetadata() {
  return {
    commission: "",
    moniker: "",
    website: "",
    identity: "",
    security_contact: "",
    details: "",
    pending_commission_change: undefined,
    commission_rewards: "0",
  };
}
exports.StakerMetadata = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
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
    if (message.pending_commission_change !== undefined) {
      exports.CommissionChangeEntry.encode(
        message.pending_commission_change,
        writer.uint32(58).fork()
      ).ldelim();
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
    var message = createBaseStakerMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.commission = reader.string();
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
        case 7:
          if (tag !== 58) {
            break;
          }
          message.pending_commission_change =
            exports.CommissionChangeEntry.decode(reader, reader.uint32());
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
      pending_commission_change: isSet(object.pending_commission_change)
        ? exports.CommissionChangeEntry.fromJSON(
            object.pending_commission_change
          )
        : undefined,
      commission_rewards: isSet(object.commission_rewards)
        ? globalThis.String(object.commission_rewards)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
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
    if (message.pending_commission_change !== undefined) {
      obj.pending_commission_change = exports.CommissionChangeEntry.toJSON(
        message.pending_commission_change
      );
    }
    if (message.commission_rewards !== "0") {
      obj.commission_rewards = message.commission_rewards;
    }
    return obj;
  },
  create: function (base) {
    return exports.StakerMetadata.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g;
    var message = createBaseStakerMetadata();
    message.commission =
      (_a = object.commission) !== null && _a !== void 0 ? _a : "";
    message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
    message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
    message.identity =
      (_d = object.identity) !== null && _d !== void 0 ? _d : "";
    message.security_contact =
      (_e = object.security_contact) !== null && _e !== void 0 ? _e : "";
    message.details = (_f = object.details) !== null && _f !== void 0 ? _f : "";
    message.pending_commission_change =
      object.pending_commission_change !== undefined &&
      object.pending_commission_change !== null
        ? exports.CommissionChangeEntry.fromPartial(
            object.pending_commission_change
          )
        : undefined;
    message.commission_rewards =
      (_g = object.commission_rewards) !== null && _g !== void 0 ? _g : "0";
    return message;
  },
};
function createBaseCommissionChangeEntry() {
  return { commission: "", creation_date: "0" };
}
exports.CommissionChangeEntry = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }
    if (message.creation_date !== "0") {
      writer.uint32(16).int64(message.creation_date);
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
          if (tag !== 10) {
            break;
          }
          message.commission = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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
    var _a, _b;
    var message = createBaseCommissionChangeEntry();
    message.commission =
      (_a = object.commission) !== null && _a !== void 0 ? _a : "";
    message.creation_date =
      (_b = object.creation_date) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBasePoolMembership() {
  return {
    pool: undefined,
    points: "0",
    is_leaving: false,
    valaddress: "",
    balance: "0",
  };
}
exports.PoolMembership = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool !== undefined) {
      exports.BasicPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.points !== "0") {
      writer.uint32(16).uint64(message.points);
    }
    if (message.is_leaving === true) {
      writer.uint32(24).bool(message.is_leaving);
    }
    if (message.valaddress !== "") {
      writer.uint32(34).string(message.valaddress);
    }
    if (message.balance !== "0") {
      writer.uint32(40).uint64(message.balance);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePoolMembership();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pool = exports.BasicPool.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.points = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.is_leaving = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.valaddress = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.balance = longToString(reader.uint64());
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
      pool: isSet(object.pool)
        ? exports.BasicPool.fromJSON(object.pool)
        : undefined,
      points: isSet(object.points) ? globalThis.String(object.points) : "0",
      is_leaving: isSet(object.is_leaving)
        ? globalThis.Boolean(object.is_leaving)
        : false,
      valaddress: isSet(object.valaddress)
        ? globalThis.String(object.valaddress)
        : "",
      balance: isSet(object.balance) ? globalThis.String(object.balance) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool !== undefined) {
      obj.pool = exports.BasicPool.toJSON(message.pool);
    }
    if (message.points !== "0") {
      obj.points = message.points;
    }
    if (message.is_leaving === true) {
      obj.is_leaving = message.is_leaving;
    }
    if (message.valaddress !== "") {
      obj.valaddress = message.valaddress;
    }
    if (message.balance !== "0") {
      obj.balance = message.balance;
    }
    return obj;
  },
  create: function (base) {
    return exports.PoolMembership.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBasePoolMembership();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? exports.BasicPool.fromPartial(object.pool)
        : undefined;
    message.points = (_a = object.points) !== null && _a !== void 0 ? _a : "0";
    message.is_leaving =
      (_b = object.is_leaving) !== null && _b !== void 0 ? _b : false;
    message.valaddress =
      (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
    message.balance =
      (_d = object.balance) !== null && _d !== void 0 ? _d : "0";
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
//# sourceMappingURL=query.js.map
