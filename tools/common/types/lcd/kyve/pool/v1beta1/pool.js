"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool =
  exports.UpgradePlan =
  exports.Protocol =
  exports.poolStatusToNumber =
  exports.poolStatusToJSON =
  exports.poolStatusFromJSON =
  exports.PoolStatus =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.pool.v1beta1";
/** PoolStatus ... */
var PoolStatus;
(function (PoolStatus) {
  /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
  PoolStatus["POOL_STATUS_UNSPECIFIED"] = "POOL_STATUS_UNSPECIFIED";
  /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
  PoolStatus["POOL_STATUS_ACTIVE"] = "POOL_STATUS_ACTIVE";
  /** POOL_STATUS_DISABLED - POOL_STATUS_DISABLED ... */
  PoolStatus["POOL_STATUS_DISABLED"] = "POOL_STATUS_DISABLED";
  /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
  PoolStatus["POOL_STATUS_NO_FUNDS"] = "POOL_STATUS_NO_FUNDS";
  /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
  PoolStatus["POOL_STATUS_NOT_ENOUGH_DELEGATION"] =
    "POOL_STATUS_NOT_ENOUGH_DELEGATION";
  /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
  PoolStatus["POOL_STATUS_UPGRADING"] = "POOL_STATUS_UPGRADING";
  PoolStatus["UNRECOGNIZED"] = "UNRECOGNIZED";
})((PoolStatus = exports.PoolStatus || (exports.PoolStatus = {})));
function poolStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "POOL_STATUS_UNSPECIFIED":
      return PoolStatus.POOL_STATUS_UNSPECIFIED;
    case 1:
    case "POOL_STATUS_ACTIVE":
      return PoolStatus.POOL_STATUS_ACTIVE;
    case 2:
    case "POOL_STATUS_DISABLED":
      return PoolStatus.POOL_STATUS_DISABLED;
    case 3:
    case "POOL_STATUS_NO_FUNDS":
      return PoolStatus.POOL_STATUS_NO_FUNDS;
    case 4:
    case "POOL_STATUS_NOT_ENOUGH_DELEGATION":
      return PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION;
    case 5:
    case "POOL_STATUS_UPGRADING":
      return PoolStatus.POOL_STATUS_UPGRADING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolStatus.UNRECOGNIZED;
  }
}
exports.poolStatusFromJSON = poolStatusFromJSON;
function poolStatusToJSON(object) {
  switch (object) {
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      return "POOL_STATUS_UNSPECIFIED";
    case PoolStatus.POOL_STATUS_ACTIVE:
      return "POOL_STATUS_ACTIVE";
    case PoolStatus.POOL_STATUS_DISABLED:
      return "POOL_STATUS_DISABLED";
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return "POOL_STATUS_NO_FUNDS";
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      return "POOL_STATUS_NOT_ENOUGH_DELEGATION";
    case PoolStatus.POOL_STATUS_UPGRADING:
      return "POOL_STATUS_UPGRADING";
    case PoolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
exports.poolStatusToJSON = poolStatusToJSON;
function poolStatusToNumber(object) {
  switch (object) {
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      return 0;
    case PoolStatus.POOL_STATUS_ACTIVE:
      return 1;
    case PoolStatus.POOL_STATUS_DISABLED:
      return 2;
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return 3;
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      return 4;
    case PoolStatus.POOL_STATUS_UPGRADING:
      return 5;
    case PoolStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}
exports.poolStatusToNumber = poolStatusToNumber;
function createBaseProtocol() {
  return { version: "", binaries: "", last_upgrade: "0" };
}
exports.Protocol = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.last_upgrade !== "0") {
      writer.uint32(24).uint64(message.last_upgrade);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProtocol();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.binaries = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.last_upgrade = longToString(reader.uint64());
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
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      binaries: isSet(object.binaries)
        ? globalThis.String(object.binaries)
        : "",
      last_upgrade: isSet(object.last_upgrade)
        ? globalThis.String(object.last_upgrade)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.last_upgrade !== "0") {
      obj.last_upgrade = message.last_upgrade;
    }
    return obj;
  },
  create: function (base) {
    return exports.Protocol.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseProtocol();
    message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
    message.binaries =
      (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
    message.last_upgrade =
      (_c = object.last_upgrade) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseUpgradePlan() {
  return { version: "", binaries: "", scheduled_at: "0", duration: "0" };
}
exports.UpgradePlan = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(24).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseUpgradePlan();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.binaries = reader.string();
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
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      binaries: isSet(object.binaries)
        ? globalThis.String(object.binaries)
        : "",
      scheduled_at: isSet(object.scheduled_at)
        ? globalThis.String(object.scheduled_at)
        : "0",
      duration: isSet(object.duration)
        ? globalThis.String(object.duration)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.binaries !== "") {
      obj.binaries = message.binaries;
    }
    if (message.scheduled_at !== "0") {
      obj.scheduled_at = message.scheduled_at;
    }
    if (message.duration !== "0") {
      obj.duration = message.duration;
    }
    return obj;
  },
  create: function (base) {
    return exports.UpgradePlan.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseUpgradePlan();
    message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
    message.binaries =
      (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
    message.scheduled_at =
      (_c = object.scheduled_at) !== null && _c !== void 0 ? _c : "0";
    message.duration =
      (_d = object.duration) !== null && _d !== void 0 ? _d : "0";
    return message;
  },
};
function createBasePool() {
  return {
    id: "0",
    name: "",
    runtime: "",
    logo: "",
    config: "",
    start_key: "",
    current_key: "",
    current_summary: "",
    current_index: "0",
    total_bundles: "0",
    upload_interval: "0",
    inflation_share_weight: "0",
    min_delegation: "0",
    max_bundle_size: "0",
    disabled: false,
    protocol: undefined,
    upgrade_plan: undefined,
    current_storage_provider_id: 0,
    current_compression_id: 0,
  };
}
exports.Pool = {
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
    if (message.current_key !== "") {
      writer.uint32(58).string(message.current_key);
    }
    if (message.current_summary !== "") {
      writer.uint32(66).string(message.current_summary);
    }
    if (message.current_index !== "0") {
      writer.uint32(72).uint64(message.current_index);
    }
    if (message.total_bundles !== "0") {
      writer.uint32(80).uint64(message.total_bundles);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(88).uint64(message.upload_interval);
    }
    if (message.inflation_share_weight !== "0") {
      writer.uint32(96).uint64(message.inflation_share_weight);
    }
    if (message.min_delegation !== "0") {
      writer.uint32(104).uint64(message.min_delegation);
    }
    if (message.max_bundle_size !== "0") {
      writer.uint32(112).uint64(message.max_bundle_size);
    }
    if (message.disabled === true) {
      writer.uint32(120).bool(message.disabled);
    }
    if (message.protocol !== undefined) {
      exports.Protocol.encode(
        message.protocol,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.upgrade_plan !== undefined) {
      exports.UpgradePlan.encode(
        message.upgrade_plan,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.current_storage_provider_id !== 0) {
      writer.uint32(144).uint32(message.current_storage_provider_id);
    }
    if (message.current_compression_id !== 0) {
      writer.uint32(152).uint32(message.current_compression_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePool();
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
          if (tag !== 58) {
            break;
          }
          message.current_key = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.current_summary = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.current_index = longToString(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.total_bundles = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.upload_interval = longToString(reader.uint64());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.inflation_share_weight = longToString(reader.uint64());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.min_delegation = longToString(reader.uint64());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }
          message.max_bundle_size = longToString(reader.uint64());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }
          message.disabled = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }
          message.protocol = exports.Protocol.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }
          message.upgrade_plan = exports.UpgradePlan.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }
          message.current_storage_provider_id = reader.uint32();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }
          message.current_compression_id = reader.uint32();
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
      current_key: isSet(object.current_key)
        ? globalThis.String(object.current_key)
        : "",
      current_summary: isSet(object.current_summary)
        ? globalThis.String(object.current_summary)
        : "",
      current_index: isSet(object.current_index)
        ? globalThis.String(object.current_index)
        : "0",
      total_bundles: isSet(object.total_bundles)
        ? globalThis.String(object.total_bundles)
        : "0",
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
      disabled: isSet(object.disabled)
        ? globalThis.Boolean(object.disabled)
        : false,
      protocol: isSet(object.protocol)
        ? exports.Protocol.fromJSON(object.protocol)
        : undefined,
      upgrade_plan: isSet(object.upgrade_plan)
        ? exports.UpgradePlan.fromJSON(object.upgrade_plan)
        : undefined,
      current_storage_provider_id: isSet(object.current_storage_provider_id)
        ? globalThis.Number(object.current_storage_provider_id)
        : 0,
      current_compression_id: isSet(object.current_compression_id)
        ? globalThis.Number(object.current_compression_id)
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
    if (message.current_key !== "") {
      obj.current_key = message.current_key;
    }
    if (message.current_summary !== "") {
      obj.current_summary = message.current_summary;
    }
    if (message.current_index !== "0") {
      obj.current_index = message.current_index;
    }
    if (message.total_bundles !== "0") {
      obj.total_bundles = message.total_bundles;
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
    if (message.disabled === true) {
      obj.disabled = message.disabled;
    }
    if (message.protocol !== undefined) {
      obj.protocol = exports.Protocol.toJSON(message.protocol);
    }
    if (message.upgrade_plan !== undefined) {
      obj.upgrade_plan = exports.UpgradePlan.toJSON(message.upgrade_plan);
    }
    if (message.current_storage_provider_id !== 0) {
      obj.current_storage_provider_id = Math.round(
        message.current_storage_provider_id
      );
    }
    if (message.current_compression_id !== 0) {
      obj.current_compression_id = Math.round(message.current_compression_id);
    }
    return obj;
  },
  create: function (base) {
    return exports.Pool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var message = createBasePool();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
    message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
    message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
    message.config = (_e = object.config) !== null && _e !== void 0 ? _e : "";
    message.start_key =
      (_f = object.start_key) !== null && _f !== void 0 ? _f : "";
    message.current_key =
      (_g = object.current_key) !== null && _g !== void 0 ? _g : "";
    message.current_summary =
      (_h = object.current_summary) !== null && _h !== void 0 ? _h : "";
    message.current_index =
      (_j = object.current_index) !== null && _j !== void 0 ? _j : "0";
    message.total_bundles =
      (_k = object.total_bundles) !== null && _k !== void 0 ? _k : "0";
    message.upload_interval =
      (_l = object.upload_interval) !== null && _l !== void 0 ? _l : "0";
    message.inflation_share_weight =
      (_m = object.inflation_share_weight) !== null && _m !== void 0 ? _m : "0";
    message.min_delegation =
      (_o = object.min_delegation) !== null && _o !== void 0 ? _o : "0";
    message.max_bundle_size =
      (_p = object.max_bundle_size) !== null && _p !== void 0 ? _p : "0";
    message.disabled =
      (_q = object.disabled) !== null && _q !== void 0 ? _q : false;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? exports.Protocol.fromPartial(object.protocol)
        : undefined;
    message.upgrade_plan =
      object.upgrade_plan !== undefined && object.upgrade_plan !== null
        ? exports.UpgradePlan.fromPartial(object.upgrade_plan)
        : undefined;
    message.current_storage_provider_id =
      (_r = object.current_storage_provider_id) !== null && _r !== void 0
        ? _r
        : 0;
    message.current_compression_id =
      (_s = object.current_compression_id) !== null && _s !== void 0 ? _s : 0;
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
//# sourceMappingURL=pool.js.map
