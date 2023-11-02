"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBundlesClientImpl =
  exports.QueryBundlesServiceName =
  exports.QueryCanVoteResponse =
  exports.QueryCanVoteRequest =
  exports.QueryCanProposeResponse =
  exports.QueryCanProposeRequest =
  exports.QueryCanValidateResponse =
  exports.QueryCanValidateRequest =
  exports.QueryCurrentVoteStatusResponse =
  exports.QueryCurrentVoteStatusRequest =
  exports.QueryFinalizedBundleResponse =
  exports.QueryFinalizedBundleRequest =
  exports.QueryFinalizedBundlesResponse =
  exports.QueryFinalizedBundlesRequest =
  exports.StakeSecurity =
  exports.FinalizedAt =
  exports.FinalizedBundle =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseFinalizedBundle() {
  return {
    pool_id: "0",
    id: "0",
    storage_id: "",
    uploader: "",
    from_index: "0",
    to_index: "0",
    from_key: "",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    finalized_at: undefined,
    storage_provider_id: "0",
    compression_id: "0",
    stake_security: undefined,
  };
}
exports.FinalizedBundle = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.storage_id !== "") {
      writer.uint32(26).string(message.storage_id);
    }
    if (message.uploader !== "") {
      writer.uint32(34).string(message.uploader);
    }
    if (message.from_index !== "0") {
      writer.uint32(40).uint64(message.from_index);
    }
    if (message.to_index !== "0") {
      writer.uint32(48).uint64(message.to_index);
    }
    if (message.from_key !== "") {
      writer.uint32(90).string(message.from_key);
    }
    if (message.to_key !== "") {
      writer.uint32(58).string(message.to_key);
    }
    if (message.bundle_summary !== "") {
      writer.uint32(66).string(message.bundle_summary);
    }
    if (message.data_hash !== "") {
      writer.uint32(74).string(message.data_hash);
    }
    if (message.finalized_at !== undefined) {
      exports.FinalizedAt.encode(
        message.finalized_at,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.storage_provider_id !== "0") {
      writer.uint32(96).uint64(message.storage_provider_id);
    }
    if (message.compression_id !== "0") {
      writer.uint32(104).uint64(message.compression_id);
    }
    if (message.stake_security !== undefined) {
      exports.StakeSecurity.encode(
        message.stake_security,
        writer.uint32(114).fork()
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
    var message = createBaseFinalizedBundle();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.id = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.storage_id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.uploader = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.from_index = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.to_index = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.from_key = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.to_key = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.bundle_summary = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.data_hash = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.finalized_at = exports.FinalizedAt.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.storage_provider_id = longToString(reader.uint64());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.compression_id = longToString(reader.uint64());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }
          message.stake_security = exports.StakeSecurity.decode(
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      storage_id: isSet(object.storage_id)
        ? globalThis.String(object.storage_id)
        : "",
      uploader: isSet(object.uploader)
        ? globalThis.String(object.uploader)
        : "",
      from_index: isSet(object.from_index)
        ? globalThis.String(object.from_index)
        : "0",
      to_index: isSet(object.to_index)
        ? globalThis.String(object.to_index)
        : "0",
      from_key: isSet(object.from_key)
        ? globalThis.String(object.from_key)
        : "",
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary)
        ? globalThis.String(object.bundle_summary)
        : "",
      data_hash: isSet(object.data_hash)
        ? globalThis.String(object.data_hash)
        : "",
      finalized_at: isSet(object.finalized_at)
        ? exports.FinalizedAt.fromJSON(object.finalized_at)
        : undefined,
      storage_provider_id: isSet(object.storage_provider_id)
        ? globalThis.String(object.storage_provider_id)
        : "0",
      compression_id: isSet(object.compression_id)
        ? globalThis.String(object.compression_id)
        : "0",
      stake_security: isSet(object.stake_security)
        ? exports.StakeSecurity.fromJSON(object.stake_security)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.uploader !== "") {
      obj.uploader = message.uploader;
    }
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    if (message.to_index !== "0") {
      obj.to_index = message.to_index;
    }
    if (message.from_key !== "") {
      obj.from_key = message.from_key;
    }
    if (message.to_key !== "") {
      obj.to_key = message.to_key;
    }
    if (message.bundle_summary !== "") {
      obj.bundle_summary = message.bundle_summary;
    }
    if (message.data_hash !== "") {
      obj.data_hash = message.data_hash;
    }
    if (message.finalized_at !== undefined) {
      obj.finalized_at = exports.FinalizedAt.toJSON(message.finalized_at);
    }
    if (message.storage_provider_id !== "0") {
      obj.storage_provider_id = message.storage_provider_id;
    }
    if (message.compression_id !== "0") {
      obj.compression_id = message.compression_id;
    }
    if (message.stake_security !== undefined) {
      obj.stake_security = exports.StakeSecurity.toJSON(message.stake_security);
    }
    return obj;
  },
  create: function (base) {
    return exports.FinalizedBundle.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var message = createBaseFinalizedBundle();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.storage_id =
      (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
    message.uploader =
      (_d = object.uploader) !== null && _d !== void 0 ? _d : "";
    message.from_index =
      (_e = object.from_index) !== null && _e !== void 0 ? _e : "0";
    message.to_index =
      (_f = object.to_index) !== null && _f !== void 0 ? _f : "0";
    message.from_key =
      (_g = object.from_key) !== null && _g !== void 0 ? _g : "";
    message.to_key = (_h = object.to_key) !== null && _h !== void 0 ? _h : "";
    message.bundle_summary =
      (_j = object.bundle_summary) !== null && _j !== void 0 ? _j : "";
    message.data_hash =
      (_k = object.data_hash) !== null && _k !== void 0 ? _k : "";
    message.finalized_at =
      object.finalized_at !== undefined && object.finalized_at !== null
        ? exports.FinalizedAt.fromPartial(object.finalized_at)
        : undefined;
    message.storage_provider_id =
      (_l = object.storage_provider_id) !== null && _l !== void 0 ? _l : "0";
    message.compression_id =
      (_m = object.compression_id) !== null && _m !== void 0 ? _m : "0";
    message.stake_security =
      object.stake_security !== undefined && object.stake_security !== null
        ? exports.StakeSecurity.fromPartial(object.stake_security)
        : undefined;
    return message;
  },
};
function createBaseFinalizedAt() {
  return { height: "", timestamp: "" };
}
exports.FinalizedAt = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.timestamp !== "") {
      writer.uint32(18).string(message.timestamp);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFinalizedAt();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.height = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.timestamp = reader.string();
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
      height: isSet(object.height) ? globalThis.String(object.height) : "",
      timestamp: isSet(object.timestamp)
        ? globalThis.String(object.timestamp)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    if (message.timestamp !== "") {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },
  create: function (base) {
    return exports.FinalizedAt.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseFinalizedAt();
    message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "";
    message.timestamp =
      (_b = object.timestamp) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseStakeSecurity() {
  return { valid_vote_power: "", total_vote_power: "" };
}
exports.StakeSecurity = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.valid_vote_power !== "") {
      writer.uint32(10).string(message.valid_vote_power);
    }
    if (message.total_vote_power !== "") {
      writer.uint32(18).string(message.total_vote_power);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseStakeSecurity();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.valid_vote_power = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.total_vote_power = reader.string();
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
      valid_vote_power: isSet(object.valid_vote_power)
        ? globalThis.String(object.valid_vote_power)
        : "",
      total_vote_power: isSet(object.total_vote_power)
        ? globalThis.String(object.total_vote_power)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.valid_vote_power !== "") {
      obj.valid_vote_power = message.valid_vote_power;
    }
    if (message.total_vote_power !== "") {
      obj.total_vote_power = message.total_vote_power;
    }
    return obj;
  },
  create: function (base) {
    return exports.StakeSecurity.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseStakeSecurity();
    message.valid_vote_power =
      (_a = object.valid_vote_power) !== null && _a !== void 0 ? _a : "";
    message.total_vote_power =
      (_b = object.total_vote_power) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseQueryFinalizedBundlesRequest() {
  return { pagination: undefined, pool_id: "0", index: "" };
}
exports.QueryFinalizedBundlesRequest = {
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
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFinalizedBundlesRequest();
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
          if (tag !== 26) {
            break;
          }
          message.index = reader.string();
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
      index: isSet(object.index) ? globalThis.String(object.index) : "",
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
    if (message.index !== "") {
      obj.index = message.index;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFinalizedBundlesRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryFinalizedBundlesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageRequest.fromPartial(object.pagination)
        : undefined;
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.index = (_b = object.index) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseQueryFinalizedBundlesResponse() {
  return { finalized_bundles: [], pagination: undefined };
}
exports.QueryFinalizedBundlesResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.finalized_bundles; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.FinalizedBundle.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
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
    var message = createBaseQueryFinalizedBundlesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.finalized_bundles.push(
            exports.FinalizedBundle.decode(reader, reader.uint32())
          );
          continue;
        case 2:
          if (tag !== 18) {
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
      finalized_bundles: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.finalized_bundles
      )
        ? object.finalized_bundles.map(function (e) {
            return exports.FinalizedBundle.fromJSON(e);
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
    if (
      (_a = message.finalized_bundles) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.finalized_bundles = message.finalized_bundles.map(function (e) {
        return exports.FinalizedBundle.toJSON(e);
      });
    }
    if (message.pagination !== undefined) {
      obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFinalizedBundlesResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryFinalizedBundlesResponse();
    message.finalized_bundles =
      ((_a = object.finalized_bundles) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.FinalizedBundle.fromPartial(e);
          })) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? pagination_1.PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
function createBaseQueryFinalizedBundleRequest() {
  return { pool_id: "0", id: "0" };
}
exports.QueryFinalizedBundleRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFinalizedBundleRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
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
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFinalizedBundleRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryFinalizedBundleRequest();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseQueryFinalizedBundleResponse() {
  return { finalized_bundles: undefined };
}
exports.QueryFinalizedBundleResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.finalized_bundles !== undefined) {
      exports.FinalizedBundle.encode(
        message.finalized_bundles,
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
    var message = createBaseQueryFinalizedBundleResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.finalized_bundles = exports.FinalizedBundle.decode(
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
      finalized_bundles: isSet(object.finalized_bundles)
        ? exports.FinalizedBundle.fromJSON(object.finalized_bundles)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.finalized_bundles !== undefined) {
      obj.finalized_bundles = exports.FinalizedBundle.toJSON(
        message.finalized_bundles
      );
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryFinalizedBundleResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var message = createBaseQueryFinalizedBundleResponse();
    message.finalized_bundles =
      object.finalized_bundles !== undefined &&
      object.finalized_bundles !== null
        ? exports.FinalizedBundle.fromPartial(object.finalized_bundles)
        : undefined;
    return message;
  },
};
function createBaseQueryCurrentVoteStatusRequest() {
  return { pool_id: "0" };
}
exports.QueryCurrentVoteStatusRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentVoteStatusRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCurrentVoteStatusRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseQueryCurrentVoteStatusRequest();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    return message;
  },
};
function createBaseQueryCurrentVoteStatusResponse() {
  return { valid: "0", invalid: "0", abstain: "0", total: "0" };
}
exports.QueryCurrentVoteStatusResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.valid !== "0") {
      writer.uint32(8).uint64(message.valid);
    }
    if (message.invalid !== "0") {
      writer.uint32(16).uint64(message.invalid);
    }
    if (message.abstain !== "0") {
      writer.uint32(24).uint64(message.abstain);
    }
    if (message.total !== "0") {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCurrentVoteStatusResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.valid = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.invalid = longToString(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.abstain = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.total = longToString(reader.uint64());
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
      valid: isSet(object.valid) ? globalThis.String(object.valid) : "0",
      invalid: isSet(object.invalid) ? globalThis.String(object.invalid) : "0",
      abstain: isSet(object.abstain) ? globalThis.String(object.abstain) : "0",
      total: isSet(object.total) ? globalThis.String(object.total) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.valid !== "0") {
      obj.valid = message.valid;
    }
    if (message.invalid !== "0") {
      obj.invalid = message.invalid;
    }
    if (message.abstain !== "0") {
      obj.abstain = message.abstain;
    }
    if (message.total !== "0") {
      obj.total = message.total;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCurrentVoteStatusResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseQueryCurrentVoteStatusResponse();
    message.valid = (_a = object.valid) !== null && _a !== void 0 ? _a : "0";
    message.invalid =
      (_b = object.invalid) !== null && _b !== void 0 ? _b : "0";
    message.abstain =
      (_c = object.abstain) !== null && _c !== void 0 ? _c : "0";
    message.total = (_d = object.total) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseQueryCanValidateRequest() {
  return { pool_id: "0", valaddress: "" };
}
exports.QueryCanValidateRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.valaddress !== "") {
      writer.uint32(18).string(message.valaddress);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCanValidateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.valaddress = reader.string();
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      valaddress: isSet(object.valaddress)
        ? globalThis.String(object.valaddress)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.valaddress !== "") {
      obj.valaddress = message.valaddress;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCanValidateRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryCanValidateRequest();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.valaddress =
      (_b = object.valaddress) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseQueryCanValidateResponse() {
  return { possible: false, reason: "" };
}
exports.QueryCanValidateResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCanValidateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.possible = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.reason = reader.string();
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
      possible: isSet(object.possible)
        ? globalThis.Boolean(object.possible)
        : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.possible === true) {
      obj.possible = message.possible;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCanValidateResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryCanValidateResponse();
    message.possible =
      (_a = object.possible) !== null && _a !== void 0 ? _a : false;
    message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseQueryCanProposeRequest() {
  return { pool_id: "0", staker: "", proposer: "", from_index: "0" };
}
exports.QueryCanProposeRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.from_index !== "0") {
      writer.uint32(32).uint64(message.from_index);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCanProposeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.proposer = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.from_index = longToString(reader.uint64());
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      proposer: isSet(object.proposer)
        ? globalThis.String(object.proposer)
        : "",
      from_index: isSet(object.from_index)
        ? globalThis.String(object.from_index)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCanProposeRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseQueryCanProposeRequest();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.proposer =
      (_c = object.proposer) !== null && _c !== void 0 ? _c : "";
    message.from_index =
      (_d = object.from_index) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBaseQueryCanProposeResponse() {
  return { possible: false, reason: "" };
}
exports.QueryCanProposeResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCanProposeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.possible = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.reason = reader.string();
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
      possible: isSet(object.possible)
        ? globalThis.Boolean(object.possible)
        : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.possible === true) {
      obj.possible = message.possible;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCanProposeResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryCanProposeResponse();
    message.possible =
      (_a = object.possible) !== null && _a !== void 0 ? _a : false;
    message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseQueryCanVoteRequest() {
  return { pool_id: "0", staker: "", voter: "", storage_id: "" };
}
exports.QueryCanVoteRequest = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.voter !== "") {
      writer.uint32(26).string(message.voter);
    }
    if (message.storage_id !== "") {
      writer.uint32(34).string(message.storage_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCanVoteRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.pool_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.voter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.storage_id = reader.string();
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
      storage_id: isSet(object.storage_id)
        ? globalThis.String(object.storage_id)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.voter !== "") {
      obj.voter = message.voter;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCanVoteRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseQueryCanVoteRequest();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.voter = (_c = object.voter) !== null && _c !== void 0 ? _c : "";
    message.storage_id =
      (_d = object.storage_id) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseQueryCanVoteResponse() {
  return { possible: false, reason: "" };
}
exports.QueryCanVoteResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryCanVoteResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.possible = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.reason = reader.string();
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
      possible: isSet(object.possible)
        ? globalThis.Boolean(object.possible)
        : false,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.possible === true) {
      obj.possible = message.possible;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryCanVoteResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseQueryCanVoteResponse();
    message.possible =
      (_a = object.possible) !== null && _a !== void 0 ? _a : false;
    message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
exports.QueryBundlesServiceName = "kyve.query.v1beta1.QueryBundles";
var QueryBundlesClientImpl = /** @class */ (function () {
  function QueryBundlesClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.QueryBundlesServiceName;
    this.rpc = rpc;
    this.FinalizedBundlesQuery = this.FinalizedBundlesQuery.bind(this);
    this.FinalizedBundleQuery = this.FinalizedBundleQuery.bind(this);
    this.CurrentVoteStatus = this.CurrentVoteStatus.bind(this);
    this.CanValidate = this.CanValidate.bind(this);
    this.CanPropose = this.CanPropose.bind(this);
    this.CanVote = this.CanVote.bind(this);
  }
  QueryBundlesClientImpl.prototype.FinalizedBundlesQuery = function (request) {
    var data = exports.QueryFinalizedBundlesRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "FinalizedBundlesQuery", data);
    return promise.then(function (data) {
      return exports.QueryFinalizedBundlesResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryBundlesClientImpl.prototype.FinalizedBundleQuery = function (request) {
    var data = exports.QueryFinalizedBundleRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "FinalizedBundleQuery", data);
    return promise.then(function (data) {
      return exports.FinalizedBundle.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryBundlesClientImpl.prototype.CurrentVoteStatus = function (request) {
    var data = exports.QueryCurrentVoteStatusRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "CurrentVoteStatus", data);
    return promise.then(function (data) {
      return exports.QueryCurrentVoteStatusResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryBundlesClientImpl.prototype.CanValidate = function (request) {
    var data = exports.QueryCanValidateRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "CanValidate", data);
    return promise.then(function (data) {
      return exports.QueryCanValidateResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryBundlesClientImpl.prototype.CanPropose = function (request) {
    var data = exports.QueryCanProposeRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "CanPropose", data);
    return promise.then(function (data) {
      return exports.QueryCanProposeResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  QueryBundlesClientImpl.prototype.CanVote = function (request) {
    var data = exports.QueryCanVoteRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "CanVote", data);
    return promise.then(function (data) {
      return exports.QueryCanVoteResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return QueryBundlesClientImpl;
})();
exports.QueryBundlesClientImpl = QueryBundlesClientImpl;
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
//# sourceMappingURL=bundles.js.map
