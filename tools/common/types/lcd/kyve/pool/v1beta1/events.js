"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPoolFundsSlashed =
  exports.EventPoolUpdated =
  exports.EventRuntimeUpgradeCancelled =
  exports.EventRuntimeUpgradeScheduled =
  exports.EventPoolDisabled =
  exports.EventPoolEnabled =
  exports.EventCreatePool =
  exports.EventUpdateParams =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var params_1 = require("./params");
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseEventUpdateParams() {
  return { old_params: undefined, new_params: undefined, payload: "" };
}
exports.EventUpdateParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.old_params !== undefined) {
      params_1.Params.encode(
        message.old_params,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.new_params !== undefined) {
      params_1.Params.encode(
        message.new_params,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.old_params = params_1.Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.new_params = params_1.Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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
      old_params: isSet(object.old_params)
        ? params_1.Params.fromJSON(object.old_params)
        : undefined,
      new_params: isSet(object.new_params)
        ? params_1.Params.fromJSON(object.new_params)
        : undefined,
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.old_params !== undefined) {
      obj.old_params = params_1.Params.toJSON(message.old_params);
    }
    if (message.new_params !== undefined) {
      obj.new_params = params_1.Params.toJSON(message.new_params);
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventUpdateParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseEventUpdateParams();
    message.old_params =
      object.old_params !== undefined && object.old_params !== null
        ? params_1.Params.fromPartial(object.old_params)
        : undefined;
    message.new_params =
      object.new_params !== undefined && object.new_params !== null
        ? params_1.Params.fromPartial(object.new_params)
        : undefined;
    message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseEventCreatePool() {
  return {
    id: "0",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    start_key: "",
    upload_interval: "0",
    inflation_share_weight: "0",
    min_delegation: "0",
    max_bundle_size: "0",
    version: "",
    binaries: "",
    storage_provider_id: 0,
    compression_id: 0,
  };
}
exports.EventCreatePool = {
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
    if (message.config !== "") {
      writer.uint32(42).string(message.config);
    }
    if (message.start_key !== "") {
      writer.uint32(50).string(message.start_key);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(56).uint64(message.upload_interval);
    }
    if (message.inflation_share_weight !== "0") {
      writer.uint32(64).uint64(message.inflation_share_weight);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(72).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(80).uint64(message.max_bundle_size);
    }
    if (message.version !== "") {
      writer.uint32(90).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(98).string(message.binaries);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(104).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(112).uint32(message.compression_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventCreatePool();
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
          if (tag !== 42) {
            break;
          }
          message.config = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.start_key = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.upload_interval = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.inflation_share_weight = longToString(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.min_delegation = longToString(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.max_bundle_size = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.version = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.binaries = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.storage_provider_id = reader.uint32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }
          message.compression_id = reader.uint32();
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
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      start_key: isSet(object.start_key)
        ? globalThis.String(object.start_key)
        : "",
      upload_interval: isSet(object.upload_interval)
        ? globalThis.String(object.upload_interval)
        : "0",
      inflation_share_weight: isSet(object.inflation_share_weight)
        ? globalThis.String(object.inflation_share_weight)
        : "0",
      min_delegation: isSet(object.min_delegation)
        ? globalThis.String(object.min_delegation)
        : "0",
      max_bundle_size: isSet(object.max_bundle_size)
        ? globalThis.String(object.max_bundle_size)
        : "0",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      binaries: isSet(object.binaries)
        ? globalThis.String(object.binaries)
        : "",
      storage_provider_id: isSet(object.storage_provider_id)
        ? globalThis.Number(object.storage_provider_id)
        : 0,
      compression_id: isSet(object.compression_id)
        ? globalThis.Number(object.compression_id)
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
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.start_key !== "") {
      obj.start_key = message.start_key;
    }
    if (message.upload_interval !== "0") {
      obj.upload_interval = message.upload_interval;
    }
    if (message.inflation_share_weight !== "0") {
      obj.inflation_share_weight = message.inflation_share_weight;
    }
    if (message.min_delegation !== "0") {
      obj.min_delegation = message.min_delegation;
    }
    if (message.max_bundle_size !== "0") {
      obj.max_bundle_size = message.max_bundle_size;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
    }
    return obj;
  },
  create: function (base) {
    return exports.EventCreatePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var message = createBaseEventCreatePool();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
    message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
    message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
    message.config = (_e = object.config) !== null && _e !== void 0 ? _e : "";
    message.start_key =
      (_f = object.start_key) !== null && _f !== void 0 ? _f : "";
    message.upload_interval =
      (_g = object.upload_interval) !== null && _g !== void 0 ? _g : "0";
    message.inflation_share_weight =
      (_h = object.inflation_share_weight) !== null && _h !== void 0 ? _h : "0";
    message.min_delegation =
      (_j = object.min_delegation) !== null && _j !== void 0 ? _j : "0";
    message.max_bundle_size =
      (_k = object.max_bundle_size) !== null && _k !== void 0 ? _k : "0";
    message.version = (_l = object.version) !== null && _l !== void 0 ? _l : "";
    message.binaries =
      (_m = object.binaries) !== null && _m !== void 0 ? _m : "";
    message.storage_provider_id =
      (_o = object.storage_provider_id) !== null && _o !== void 0 ? _o : 0;
    message.compression_id =
      (_p = object.compression_id) !== null && _p !== void 0 ? _p : 0;
    return message;
  },
};
function createBaseEventPoolEnabled() {
  return { id: "0" };
}
exports.EventPoolEnabled = {
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
    var message = createBaseEventPoolEnabled();
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
    return exports.EventPoolEnabled.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseEventPoolEnabled();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    return message;
  },
};
function createBaseEventPoolDisabled() {
  return { id: "0" };
}
exports.EventPoolDisabled = {
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
    var message = createBaseEventPoolDisabled();
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
    return exports.EventPoolDisabled.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseEventPoolDisabled();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    return message;
  },
};
function createBaseEventRuntimeUpgradeScheduled() {
  return {
    runtime: "",
    version: "",
    scheduled_at: "0",
    duration: "0",
    binaries: "",
    affected_pools: [],
  };
}
exports.EventRuntimeUpgradeScheduled = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(24).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(32).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(42).string(message.binaries);
    }
    writer.uint32(50).fork();
    for (var _i = 0, _a = message.affected_pools; _i < _a.length; _i++) {
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
    var message = createBaseEventRuntimeUpgradeScheduled();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.runtime = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.scheduled_at = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.duration = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.binaries = reader.string();
          continue;
        case 6:
          if (tag === 48) {
            message.affected_pools.push(longToString(reader.uint64()));
            continue;
          }
          if (tag === 50) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affected_pools.push(longToString(reader.uint64()));
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
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      scheduled_at: isSet(object.scheduled_at)
        ? globalThis.String(object.scheduled_at)
        : "0",
      duration: isSet(object.duration)
        ? globalThis.String(object.duration)
        : "0",
      binaries: isSet(object.binaries)
        ? globalThis.String(object.binaries)
        : "",
      affected_pools: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.affected_pools
      )
        ? object.affected_pools.map(function (e) {
            return globalThis.String(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.scheduled_at !== "0") {
      obj.scheduled_at = message.scheduled_at;
    }
    if (message.duration !== "0") {
      obj.duration = message.duration;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (
      (_a = message.affected_pools) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.affected_pools = message.affected_pools;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventRuntimeUpgradeScheduled.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseEventRuntimeUpgradeScheduled();
    message.runtime = (_a = object.runtime) !== null && _a !== void 0 ? _a : "";
    message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
    message.scheduled_at =
      (_c = object.scheduled_at) !== null && _c !== void 0 ? _c : "0";
    message.duration =
      (_d = object.duration) !== null && _d !== void 0 ? _d : "0";
    message.binaries =
      (_e = object.binaries) !== null && _e !== void 0 ? _e : "";
    message.affected_pools =
      ((_f = object.affected_pools) === null || _f === void 0
        ? void 0
        : _f.map(function (e) {
            return e;
          })) || [];
    return message;
  },
};
function createBaseEventRuntimeUpgradeCancelled() {
  return { runtime: "", affected_pools: [] };
}
exports.EventRuntimeUpgradeCancelled = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.runtime !== "") {
      writer.uint32(10).string(message.runtime);
    }
    writer.uint32(18).fork();
    for (var _i = 0, _a = message.affected_pools; _i < _a.length; _i++) {
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
    var message = createBaseEventRuntimeUpgradeCancelled();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.runtime = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.affected_pools.push(longToString(reader.uint64()));
            continue;
          }
          if (tag === 18) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affected_pools.push(longToString(reader.uint64()));
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
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      affected_pools: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.affected_pools
      )
        ? object.affected_pools.map(function (e) {
            return globalThis.String(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    if (
      (_a = message.affected_pools) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.affected_pools = message.affected_pools;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventRuntimeUpgradeCancelled.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseEventRuntimeUpgradeCancelled();
    message.runtime = (_a = object.runtime) !== null && _a !== void 0 ? _a : "";
    message.affected_pools =
      ((_b = object.affected_pools) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return e;
          })) || [];
    return message;
  },
};
function createBaseEventPoolUpdated() {
  return {
    id: "0",
    raw_update_string: "",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    upload_interval: "0",
    inflation_share_weight: "0",
    min_delegation: "0",
    max_bundle_size: "0",
    storage_provider_id: 0,
    compression_id: 0,
  };
}
exports.EventPoolUpdated = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.raw_update_string !== "") {
      writer.uint32(18).string(message.raw_update_string);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(34).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(42).string(message.logo);
    }
    if (message.config !== "") {
      writer.uint32(50).string(message.config);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(56).uint64(message.upload_interval);
    }
    if (message.inflation_share_weight !== "0") {
      writer.uint32(64).uint64(message.inflation_share_weight);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(72).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(80).uint64(message.max_bundle_size);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(88).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(96).uint32(message.compression_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventPoolUpdated();
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
          message.raw_update_string = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.runtime = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.logo = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.config = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.upload_interval = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.inflation_share_weight = longToString(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.min_delegation = longToString(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.max_bundle_size = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.storage_provider_id = reader.uint32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.compression_id = reader.uint32();
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
      raw_update_string: isSet(object.raw_update_string)
        ? globalThis.String(object.raw_update_string)
        : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      config: isSet(object.config) ? globalThis.String(object.config) : "",
      upload_interval: isSet(object.upload_interval)
        ? globalThis.String(object.upload_interval)
        : "0",
      inflation_share_weight: isSet(object.inflation_share_weight)
        ? globalThis.String(object.inflation_share_weight)
        : "0",
      min_delegation: isSet(object.min_delegation)
        ? globalThis.String(object.min_delegation)
        : "0",
      max_bundle_size: isSet(object.max_bundle_size)
        ? globalThis.String(object.max_bundle_size)
        : "0",
      storage_provider_id: isSet(object.storage_provider_id)
        ? globalThis.Number(object.storage_provider_id)
        : 0,
      compression_id: isSet(object.compression_id)
        ? globalThis.Number(object.compression_id)
        : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.raw_update_string !== "") {
      obj.raw_update_string = message.raw_update_string;
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
    if (message.config !== "") {
      obj.config = message.config;
    }
    if (message.upload_interval !== "0") {
      obj.upload_interval = message.upload_interval;
    }
    if (message.inflation_share_weight !== "0") {
      obj.inflation_share_weight = message.inflation_share_weight;
    }
    if (message.min_delegation !== "0") {
      obj.min_delegation = message.min_delegation;
    }
    if (message.max_bundle_size !== "0") {
      obj.max_bundle_size = message.max_bundle_size;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
    }
    return obj;
  },
  create: function (base) {
    return exports.EventPoolUpdated.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var message = createBaseEventPoolUpdated();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.raw_update_string =
      (_b = object.raw_update_string) !== null && _b !== void 0 ? _b : "";
    message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
    message.runtime = (_d = object.runtime) !== null && _d !== void 0 ? _d : "";
    message.logo = (_e = object.logo) !== null && _e !== void 0 ? _e : "";
    message.config = (_f = object.config) !== null && _f !== void 0 ? _f : "";
    message.upload_interval =
      (_g = object.upload_interval) !== null && _g !== void 0 ? _g : "0";
    message.inflation_share_weight =
      (_h = object.inflation_share_weight) !== null && _h !== void 0 ? _h : "0";
    message.min_delegation =
      (_j = object.min_delegation) !== null && _j !== void 0 ? _j : "0";
    message.max_bundle_size =
      (_k = object.max_bundle_size) !== null && _k !== void 0 ? _k : "0";
    message.storage_provider_id =
      (_l = object.storage_provider_id) !== null && _l !== void 0 ? _l : 0;
    message.compression_id =
      (_m = object.compression_id) !== null && _m !== void 0 ? _m : 0;
    return message;
  },
};
function createBaseEventPoolFundsSlashed() {
  return { pool_id: "0", address: "", amount: "0" };
}
exports.EventPoolFundsSlashed = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
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
    var message = createBaseEventPoolFundsSlashed();
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
          message.address = reader.string();
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventPoolFundsSlashed.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventPoolFundsSlashed();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
    message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
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
