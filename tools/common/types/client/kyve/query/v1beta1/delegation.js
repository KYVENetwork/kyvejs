"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryDelegationClientImpl =
  exports.QueryDelegationServiceName =
  exports.DelegationForStakerResponse =
  exports.QueryStakersByDelegatorResponse =
  exports.QueryStakersByDelegatorRequest =
  exports.QueryDelegatorsByStakerResponse =
  exports.QueryDelegatorsByStakerRequest =
  exports.StakerDelegatorResponse =
  exports.QueryDelegatorResponse =
  exports.QueryDelegatorRequest =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
var query_1 = require("./query");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseQueryDelegatorRequest() {
  return { staker: "", delegator: "" };
}
exports.QueryDelegatorRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryDelegatorRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.delegator = reader.string();
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
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      delegator: isSet(object.delegator)
        ? globalThis.String(object.delegator)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryDelegatorRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryDelegatorRequest();
    message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
    message.delegator =
      (_b = object.delegator) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseQueryDelegatorResponse() {
  return { delegator: undefined };
}
exports.QueryDelegatorResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.delegator !== undefined) {
      exports.StakerDelegatorResponse.encode(
        message.delegator,
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
    var message = createBaseQueryDelegatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.delegator = exports.StakerDelegatorResponse.decode(
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
      delegator: isSet(object.delegator)
        ? exports.StakerDelegatorResponse.fromJSON(object.delegator)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.delegator !== undefined) {
      obj.delegator = exports.StakerDelegatorResponse.toJSON(message.delegator);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryDelegatorResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var message = createBaseQueryDelegatorResponse();
    message.delegator =
      object.delegator !== undefined && object.delegator !== null
        ? exports.StakerDelegatorResponse.fromPartial(object.delegator)
        : undefined;
    return message;
  },
};
function createBaseStakerDelegatorResponse() {
  return {
    delegator: "",
    current_reward: "0",
    delegation_amount: "0",
    staker: "",
  };
}
exports.StakerDelegatorResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.current_reward !== "0") {
      writer.uint32(16).uint64(message.current_reward);
    }
    if (message.delegation_amount !== "0") {
      writer.uint32(24).uint64(message.delegation_amount);
    }
    if (message.staker !== "") {
      writer.uint32(34).string(message.staker);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStakerDelegatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.delegator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.current_reward = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.delegation_amount = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
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
      delegator: isSet(object.delegator)
        ? globalThis.String(object.delegator)
        : "",
      current_reward: isSet(object.current_reward)
        ? globalThis.String(object.current_reward)
        : "0",
      delegation_amount: isSet(object.delegation_amount)
        ? globalThis.String(object.delegation_amount)
        : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    if (message.current_reward !== "0") {
      obj.current_reward = message.current_reward;
    }
    if (message.delegation_amount !== "0") {
      obj.delegation_amount = message.delegation_amount;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },
  create: function (base) {
    return exports.StakerDelegatorResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseStakerDelegatorResponse();
    message.delegator =
      (_a = object.delegator) !== null && _a !== void 0 ? _a : "";
    message.current_reward =
      (_b = object.current_reward) !== null && _b !== void 0 ? _b : "0";
    message.delegation_amount =
      (_c = object.delegation_amount) !== null && _c !== void 0 ? _c : "0";
    message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseQueryDelegatorsByStakerRequest() {
  return { pagination: undefined, staker: "" };
}
exports.QueryDelegatorsByStakerRequest = {
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
    var message = createBaseQueryDelegatorsByStakerRequest();
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
      pagination: isSet(object.pagination)
        ? pagination_1.PageRequest.fromJSON(object.pagination)
        : undefined,
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryDelegatorsByStakerRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryDelegatorsByStakerRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageRequest.fromPartial(object.pagination)
        : undefined;
    message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseQueryDelegatorsByStakerResponse() {
  return {
    delegators: [],
    total_delegation: "0",
    total_delegator_count: "0",
    pagination: undefined,
  };
}
exports.QueryDelegatorsByStakerResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.delegators; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.StakerDelegatorResponse.encode(
        v,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.total_delegation !== "0") {
      writer.uint32(16).uint64(message.total_delegation);
    }
    if (message.total_delegator_count !== "0") {
      writer.uint32(24).uint64(message.total_delegator_count);
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(
        message.pagination,
        writer.uint32(34).fork()
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
    var message = createBaseQueryDelegatorsByStakerResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.delegators.push(
            exports.StakerDelegatorResponse.decode(reader, reader.uint32())
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.total_delegation = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.total_delegator_count = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.pagination = pagination_1.PageResponse.decode(
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
      delegators: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.delegators
      )
        ? object.delegators.map(function (e) {
            return exports.StakerDelegatorResponse.fromJSON(e);
          })
        : [],
      total_delegation: isSet(object.total_delegation)
        ? globalThis.String(object.total_delegation)
        : "0",
      total_delegator_count: isSet(object.total_delegator_count)
        ? globalThis.String(object.total_delegator_count)
        : "0",
      pagination: isSet(object.pagination)
        ? pagination_1.PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (
      (_a = message.delegators) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.delegators = message.delegators.map(function (e) {
        return exports.StakerDelegatorResponse.toJSON(e);
      });
    }
    if (message.total_delegation !== "0") {
      obj.total_delegation = message.total_delegation;
    }
    if (message.total_delegator_count !== "0") {
      obj.total_delegator_count = message.total_delegator_count;
    }
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryDelegatorsByStakerResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseQueryDelegatorsByStakerResponse();
    message.delegators =
      ((_a = object.delegators) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.StakerDelegatorResponse.fromPartial(e);
          })) || [];
    message.total_delegation =
      (_b = object.total_delegation) !== null && _b !== void 0 ? _b : "0";
    message.total_delegator_count =
      (_c = object.total_delegator_count) !== null && _c !== void 0 ? _c : "0";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
function createBaseQueryStakersByDelegatorRequest() {
  return { pagination: undefined, delegator: "" };
}
exports.QueryStakersByDelegatorRequest = {
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
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryStakersByDelegatorRequest();
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
          message.delegator = reader.string();
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
      delegator: isSet(object.delegator)
        ? globalThis.String(object.delegator)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
    }
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryStakersByDelegatorRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryStakersByDelegatorRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageRequest.fromPartial(object.pagination)
        : undefined;
    message.delegator =
      (_a = object.delegator) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseQueryStakersByDelegatorResponse() {
  return { delegator: "", stakers: [], pagination: undefined };
}
exports.QueryStakersByDelegatorResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.DelegationForStakerResponse.encode(
        v,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(
        message.pagination,
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
    var message = createBaseQueryStakersByDelegatorResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.delegator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.stakers.push(
            exports.DelegationForStakerResponse.decode(reader, reader.uint32())
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.pagination = pagination_1.PageResponse.decode(
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
      delegator: isSet(object.delegator)
        ? globalThis.String(object.delegator)
        : "",
      stakers: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.stakers
      )
        ? object.stakers.map(function (e) {
            return exports.DelegationForStakerResponse.fromJSON(e);
          })
        : [],
      pagination: isSet(object.pagination)
        ? pagination_1.PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    if ((_a = message.stakers) === null || _a === void 0 ? void 0 : _a.length) {
      obj.stakers = message.stakers.map(function (e) {
        return exports.DelegationForStakerResponse.toJSON(e);
      });
    }
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryStakersByDelegatorResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryStakersByDelegatorResponse();
    message.delegator =
      (_a = object.delegator) !== null && _a !== void 0 ? _a : "";
    message.stakers =
      ((_b = object.stakers) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return exports.DelegationForStakerResponse.fromPartial(e);
          })) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
function createBaseDelegationForStakerResponse() {
  return { staker: undefined, current_reward: "0", delegation_amount: "0" };
}
exports.DelegationForStakerResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.staker !== undefined) {
      query_1.FullStaker.encode(
        message.staker,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.current_reward !== "0") {
      writer.uint32(16).uint64(message.current_reward);
    }
    if (message.delegation_amount !== "0") {
      writer.uint32(24).uint64(message.delegation_amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDelegationForStakerResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.staker = query_1.FullStaker.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.current_reward = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.delegation_amount = longToString(reader.uint64());
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
      staker: isSet(object.staker)
        ? query_1.FullStaker.fromJSON(object.staker)
        : undefined,
      current_reward: isSet(object.current_reward)
        ? globalThis.String(object.current_reward)
        : "0",
      delegation_amount: isSet(object.delegation_amount)
        ? globalThis.String(object.delegation_amount)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.staker !== undefined) {
      obj.staker = query_1.FullStaker.toJSON(message.staker);
    }
    if (message.current_reward !== "0") {
      obj.current_reward = message.current_reward;
    }
    if (message.delegation_amount !== "0") {
      obj.delegation_amount = message.delegation_amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.DelegationForStakerResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseDelegationForStakerResponse();
    message.staker =
      object.staker !== undefined && object.staker !== null
        ? query_1.FullStaker.fromPartial(object.staker)
        : undefined;
    message.current_reward =
      (_a = object.current_reward) !== null && _a !== void 0 ? _a : "0";
    message.delegation_amount =
      (_b = object.delegation_amount) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
exports.QueryDelegationServiceName = "kyve.query.v1beta1.QueryDelegation";
var QueryDelegationClientImpl = /** @class */ (function () {
  function QueryDelegationClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.QueryDelegationServiceName;
    this.rpc = rpc;
    this.Delegator = this.Delegator.bind(this);
    this.DelegatorsByStaker = this.DelegatorsByStaker.bind(this);
    this.StakersByDelegator = this.StakersByDelegator.bind(this);
  }
  QueryDelegationClientImpl.prototype.Delegator = function (request) {
    var data = exports.QueryDelegatorRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "Delegator", data);
    return promise.then(function (data) {
      return exports.QueryDelegatorResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryDelegationClientImpl.prototype.DelegatorsByStaker = function (request) {
    var data = exports.QueryDelegatorsByStakerRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "DelegatorsByStaker", data);
    return promise.then(function (data) {
      return exports.QueryDelegatorsByStakerResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryDelegationClientImpl.prototype.StakersByDelegator = function (request) {
    var data = exports.QueryStakersByDelegatorRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "StakersByDelegator", data);
    return promise.then(function (data) {
      return exports.QueryStakersByDelegatorResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return QueryDelegationClientImpl;
})();
exports.QueryDelegationClientImpl = QueryDelegationClientImpl;
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
//# sourceMappingURL=delegation.js.map
