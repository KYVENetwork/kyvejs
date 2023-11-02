"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFundersClientImpl =
  exports.QueryFundersServiceName =
  exports.QueryFundingsByPoolResponse =
  exports.QueryFundingsByPoolRequest =
  exports.QueryFundingsByFunderResponse =
  exports.QueryFundingsByFunderRequest =
  exports.QueryFunderResponse =
  exports.QueryFunderRequest =
  exports.QueryFundersResponse =
  exports.QueryFundersRequest =
  exports.Funding =
  exports.FundingStats =
  exports.Funder =
  exports.fundingStatusToJSON =
  exports.fundingStatusFromJSON =
  exports.FundingStatus =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "kyve.query.v1beta1";
/** FundingStatus ... */
var FundingStatus;
(function (FundingStatus) {
  /** FUNDING_STATUS_UNSPECIFIED - FundingStatusUnspecified ... */
  FundingStatus[(FundingStatus["FUNDING_STATUS_UNSPECIFIED"] = 0)] =
    "FUNDING_STATUS_UNSPECIFIED";
  /** FUNDING_STATUS_ACTIVE - FundingStatusActive status is set when the funding is active. */
  FundingStatus[(FundingStatus["FUNDING_STATUS_ACTIVE"] = 1)] =
    "FUNDING_STATUS_ACTIVE";
  /** FUNDING_STATUS_INACTIVE - FundingStatusInactive status is set when the funding has been used up or refunded. */
  FundingStatus[(FundingStatus["FUNDING_STATUS_INACTIVE"] = 2)] =
    "FUNDING_STATUS_INACTIVE";
  FundingStatus[(FundingStatus["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED";
})((FundingStatus = exports.FundingStatus || (exports.FundingStatus = {})));
function fundingStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "FUNDING_STATUS_UNSPECIFIED":
      return FundingStatus.FUNDING_STATUS_UNSPECIFIED;
    case 1:
    case "FUNDING_STATUS_ACTIVE":
      return FundingStatus.FUNDING_STATUS_ACTIVE;
    case 2:
    case "FUNDING_STATUS_INACTIVE":
      return FundingStatus.FUNDING_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FundingStatus.UNRECOGNIZED;
  }
}
exports.fundingStatusFromJSON = fundingStatusFromJSON;
function fundingStatusToJSON(object) {
  switch (object) {
    case FundingStatus.FUNDING_STATUS_UNSPECIFIED:
      return "FUNDING_STATUS_UNSPECIFIED";
    case FundingStatus.FUNDING_STATUS_ACTIVE:
      return "FUNDING_STATUS_ACTIVE";
    case FundingStatus.FUNDING_STATUS_INACTIVE:
      return "FUNDING_STATUS_INACTIVE";
    case FundingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
exports.fundingStatusToJSON = fundingStatusToJSON;
function createBaseFunder() {
  return {
    address: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: "",
    stats: undefined,
  };
}
exports.Funder = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
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
    if (message.stats !== undefined) {
      exports.FundingStats.encode(
        message.stats,
        writer.uint32(58).fork()
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
    var message = createBaseFunder();
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
        case 7:
          if (tag !== 58) {
            break;
          }
          message.stats = exports.FundingStats.decode(reader, reader.uint32());
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
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      identity: isSet(object.identity)
        ? globalThis.String(object.identity)
        : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      contact: isSet(object.contact) ? globalThis.String(object.contact) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      stats: isSet(object.stats)
        ? exports.FundingStats.fromJSON(object.stats)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
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
    if (message.stats !== undefined) {
      obj.stats = exports.FundingStats.toJSON(message.stats);
    }
    return obj;
  },
  create: function (base) {
    return exports.Funder.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseFunder();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
    message.identity =
      (_c = object.identity) !== null && _c !== void 0 ? _c : "";
    message.website = (_d = object.website) !== null && _d !== void 0 ? _d : "";
    message.contact = (_e = object.contact) !== null && _e !== void 0 ? _e : "";
    message.description =
      (_f = object.description) !== null && _f !== void 0 ? _f : "";
    message.stats =
      object.stats !== undefined && object.stats !== null
        ? exports.FundingStats.fromPartial(object.stats)
        : undefined;
    return message;
  },
};
function createBaseFundingStats() {
  return {
    total_used_funds: "0",
    total_allocated_funds: "0",
    total_amount_per_bundle: "0",
    pools_funded: [],
  };
}
exports.FundingStats = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.total_used_funds !== "0") {
      writer.uint32(8).uint64(message.total_used_funds);
    }
    if (message.total_allocated_funds !== "0") {
      writer.uint32(16).uint64(message.total_allocated_funds);
    }
    if (message.total_amount_per_bundle !== "0") {
      writer.uint32(24).uint64(message.total_amount_per_bundle);
    }
    writer.uint32(34).fork();
    for (var _i = 0, _a = message.pools_funded; _i < _a.length; _i++) {
      var v = _a[_i];
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFundingStats();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.total_used_funds = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.total_allocated_funds = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.total_amount_per_bundle = longToString(reader.uint64());
          continue;
        case 4:
          if (tag === 32) {
            message.pools_funded.push(longToString(reader.uint64()));
            continue;
          }
          if (tag === 34) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pools_funded.push(longToString(reader.uint64()));
            }
            continue;
          }
          break;
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
      total_used_funds: isSet(object.total_used_funds)
        ? globalThis.String(object.total_used_funds)
        : "0",
      total_allocated_funds: isSet(object.total_allocated_funds)
        ? globalThis.String(object.total_allocated_funds)
        : "0",
      total_amount_per_bundle: isSet(object.total_amount_per_bundle)
        ? globalThis.String(object.total_amount_per_bundle)
        : "0",
      pools_funded: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.pools_funded
      )
        ? object.pools_funded.map(function (e) {
            return globalThis.String(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.total_used_funds !== "0") {
      obj.total_used_funds = message.total_used_funds;
    }
    if (message.total_allocated_funds !== "0") {
      obj.total_allocated_funds = message.total_allocated_funds;
    }
    if (message.total_amount_per_bundle !== "0") {
      obj.total_amount_per_bundle = message.total_amount_per_bundle;
    }
    if (
      (_a = message.pools_funded) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.pools_funded = message.pools_funded;
    }
    return obj;
  },
  create: function (base) {
    return exports.FundingStats.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseFundingStats();
    message.total_used_funds =
      (_a = object.total_used_funds) !== null && _a !== void 0 ? _a : "0";
    message.total_allocated_funds =
      (_b = object.total_allocated_funds) !== null && _b !== void 0 ? _b : "0";
    message.total_amount_per_bundle =
      (_c = object.total_amount_per_bundle) !== null && _c !== void 0
        ? _c
        : "0";
    message.pools_funded =
      ((_d = object.pools_funded) === null || _d === void 0
        ? void 0
        : _d.map(function (e) {
            return e;
          })) || [];
    return message;
  },
};
function createBaseFunding() {
  return {
    funder_address: "",
    pool_id: "0",
    amount: "0",
    amount_per_bundle: "0",
    total_funded: "0",
  };
}
exports.Funding = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.funder_address !== "") {
      writer.uint32(10).string(message.funder_address);
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
    if (message.total_funded !== "0") {
      writer.uint32(40).uint64(message.total_funded);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFunding();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.funder_address = reader.string();
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
        case 5:
          if (tag !== 40) {
            break;
          }
          message.total_funded = longToString(reader.uint64());
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
      funder_address: isSet(object.funder_address)
        ? globalThis.String(object.funder_address)
        : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      amount_per_bundle: isSet(object.amount_per_bundle)
        ? globalThis.String(object.amount_per_bundle)
        : "0",
      total_funded: isSet(object.total_funded)
        ? globalThis.String(object.total_funded)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.funder_address !== "") {
      obj.funder_address = message.funder_address;
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
    if (message.total_funded !== "0") {
      obj.total_funded = message.total_funded;
    }
    return obj;
  },
  create: function (base) {
    return exports.Funding.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e;
    var message = createBaseFunding();
    message.funder_address =
      (_a = object.funder_address) !== null && _a !== void 0 ? _a : "";
    message.pool_id =
      (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
    message.amount_per_bundle =
      (_d = object.amount_per_bundle) !== null && _d !== void 0 ? _d : "0";
    message.total_funded =
      (_e = object.total_funded) !== null && _e !== void 0 ? _e : "0";
    return message;
  },
};
function createBaseQueryFundersRequest() {
  return { pagination: undefined, search: "" };
}
exports.QueryFundersRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.search !== "") {
      writer.uint32(18).string(message.search);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFundersRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pagination = pagination_1.PageRequest.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.search = reader.string();
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageRequest.fromJSON(object.pagination)
        : undefined,
      search: isSet(object.search) ? globalThis.String(object.search) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
    }
    if (message.search !== "") {
      obj.search = message.search;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFundersRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryFundersRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageRequest.fromPartial(object.pagination)
        : undefined;
    message.search = (_a = object.search) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseQueryFundersResponse() {
  return { pagination: undefined, funders: [] };
}
exports.QueryFundersResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (var _i = 0, _a = message.funders; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.Funder.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFundersResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pagination = pagination_1.PageResponse.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.funders.push(exports.Funder.decode(reader, reader.uint32()));
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageResponse.fromJSON(object.pagination)
        : undefined,
      funders: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.funders
      )
        ? object.funders.map(function (e) {
            return exports.Funder.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
    }
    if ((_a = message.funders) === null || _a === void 0 ? void 0 : _a.length) {
      obj.funders = message.funders.map(function (e) {
        return exports.Funder.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFundersResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryFundersResponse();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageResponse.fromPartial(object.pagination)
        : undefined;
    message.funders =
      ((_a = object.funders) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.Funder.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseQueryFunderRequest() {
  return { address: "", status: 0 };
}
exports.QueryFunderRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFunderRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.status !== 0) {
      obj.status = fundingStatusToJSON(message.status);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFunderRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryFunderRequest();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
    return message;
  },
};
function createBaseQueryFunderResponse() {
  return { funder: undefined, fundings: [] };
}
exports.QueryFunderResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.funder !== undefined) {
      exports.Funder.encode(message.funder, writer.uint32(10).fork()).ldelim();
    }
    for (var _i = 0, _a = message.fundings; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.Funding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFunderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.funder = exports.Funder.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.fundings.push(
            exports.Funding.decode(reader, reader.uint32())
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
      funder: isSet(object.funder)
        ? exports.Funder.fromJSON(object.funder)
        : undefined,
      fundings: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.fundings
      )
        ? object.fundings.map(function (e) {
            return exports.Funding.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.funder !== undefined) {
      obj.funder = exports.Funder.toJSON(message.funder);
    }
    if (
      (_a = message.fundings) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.fundings = message.fundings.map(function (e) {
        return exports.Funding.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFunderResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryFunderResponse();
    message.funder =
      object.funder !== undefined && object.funder !== null
        ? exports.Funder.fromPartial(object.funder)
        : undefined;
    message.fundings =
      ((_a = object.fundings) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.Funding.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseQueryFundingsByFunderRequest() {
  return { pagination: undefined, address: "", status: 0 };
}
exports.QueryFundingsByFunderRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFundingsByFunderRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pagination = pagination_1.PageRequest.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageRequest.fromJSON(object.pagination)
        : undefined,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.status !== 0) {
      obj.status = fundingStatusToJSON(message.status);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFundingsByFunderRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryFundingsByFunderRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageRequest.fromPartial(object.pagination)
        : undefined;
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
    return message;
  },
};
function createBaseQueryFundingsByFunderResponse() {
  return { pagination: undefined, fundings: [] };
}
exports.QueryFundingsByFunderResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (var _i = 0, _a = message.fundings; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.Funding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFundingsByFunderResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pagination = pagination_1.PageResponse.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.fundings.push(
            exports.Funding.decode(reader, reader.uint32())
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageResponse.fromJSON(object.pagination)
        : undefined,
      fundings: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.fundings
      )
        ? object.fundings.map(function (e) {
            return exports.Funding.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
    }
    if (
      (_a = message.fundings) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.fundings = message.fundings.map(function (e) {
        return exports.Funding.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFundingsByFunderResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryFundingsByFunderResponse();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageResponse.fromPartial(object.pagination)
        : undefined;
    message.fundings =
      ((_a = object.fundings) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.Funding.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseQueryFundingsByPoolRequest() {
  return { pagination: undefined, pool_id: "0", status: 0 };
}
exports.QueryFundingsByPoolRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFundingsByPoolRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pagination = pagination_1.PageRequest.decode(
            reader,
            reader.uint32()
          );
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageRequest.fromJSON(object.pagination)
        : undefined,
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.status !== 0) {
      obj.status = fundingStatusToJSON(message.status);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFundingsByPoolRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryFundingsByPoolRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageRequest.fromPartial(object.pagination)
        : undefined;
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
    return message;
  },
};
function createBaseQueryFundingsByPoolResponse() {
  return { pagination: undefined, fundings: [] };
}
exports.QueryFundingsByPoolResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (var _i = 0, _a = message.fundings; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.Funding.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFundingsByPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.pagination = pagination_1.PageResponse.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.fundings.push(
            exports.Funding.decode(reader, reader.uint32())
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageResponse.fromJSON(object.pagination)
        : undefined,
      fundings: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.fundings
      )
        ? object.fundings.map(function (e) {
            return exports.Funding.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
    }
    if (
      (_a = message.fundings) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.fundings = message.fundings.map(function (e) {
        return exports.Funding.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFundingsByPoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryFundingsByPoolResponse();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageResponse.fromPartial(object.pagination)
        : undefined;
    message.fundings =
      ((_a = object.fundings) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.Funding.fromPartial(e);
          })) || [];
    return message;
  },
};
exports.QueryFundersServiceName = "kyve.query.v1beta1.QueryFunders";
var QueryFundersClientImpl = /** @class */ (function () {
  function QueryFundersClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.QueryFundersServiceName;
    this.rpc = rpc;
    this.Funders = this.Funders.bind(this);
    this.Funder = this.Funder.bind(this);
    this.FundingsByFunder = this.FundingsByFunder.bind(this);
    this.FundingsByPool = this.FundingsByPool.bind(this);
  }
  QueryFundersClientImpl.prototype.Funders = function (request) {
    var data = exports.QueryFundersRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "Funders", data);
    return promise.then(function (data) {
      return exports.QueryFundersResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryFundersClientImpl.prototype.Funder = function (request) {
    var data = exports.QueryFunderRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "Funder", data);
    return promise.then(function (data) {
      return exports.QueryFunderResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryFundersClientImpl.prototype.FundingsByFunder = function (request) {
    var data = exports.QueryFundingsByFunderRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "FundingsByFunder", data);
    return promise.then(function (data) {
      return exports.QueryFundingsByFunderResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryFundersClientImpl.prototype.FundingsByPool = function (request) {
    var data = exports.QueryFundingsByPoolRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "FundingsByPool", data);
    return promise.then(function (data) {
      return exports.QueryFundingsByPoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return QueryFundersClientImpl;
})();
exports.QueryFundersClientImpl = QueryFundersClientImpl;
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
//# sourceMappingURL=funders.js.map
