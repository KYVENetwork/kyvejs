"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundRobinProgress =
  exports.RoundRobinSingleValidatorProgress =
  exports.BundleVersionMap =
  exports.BundleVersionEntry =
  exports.StakeSecurity =
  exports.FinalizedAt =
  exports.FinalizedBundle =
  exports.BundleProposal =
  exports.bundleStatusToNumber =
  exports.bundleStatusToJSON =
  exports.bundleStatusFromJSON =
  exports.BundleStatus =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.bundles.v1beta1";
/**
 * BundleStatus represents the status of an evaluated bundle
 * proposal.
 */
var BundleStatus;
(function (BundleStatus) {
  /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
  BundleStatus["BUNDLE_STATUS_UNSPECIFIED"] = "BUNDLE_STATUS_UNSPECIFIED";
  /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
  BundleStatus["BUNDLE_STATUS_VALID"] = "BUNDLE_STATUS_VALID";
  /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
  BundleStatus["BUNDLE_STATUS_INVALID"] = "BUNDLE_STATUS_INVALID";
  /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
  BundleStatus["BUNDLE_STATUS_NO_FUNDS"] = "BUNDLE_STATUS_NO_FUNDS";
  /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
  BundleStatus["BUNDLE_STATUS_NO_QUORUM"] = "BUNDLE_STATUS_NO_QUORUM";
  /** BUNDLE_STATUS_DISABLED - BUNDLE_STATUS_DISABLED  ... */
  BundleStatus["BUNDLE_STATUS_DISABLED"] = "BUNDLE_STATUS_DISABLED";
  BundleStatus["UNRECOGNIZED"] = "UNRECOGNIZED";
})((BundleStatus = exports.BundleStatus || (exports.BundleStatus = {})));
function bundleStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "BUNDLE_STATUS_UNSPECIFIED":
      return BundleStatus.BUNDLE_STATUS_UNSPECIFIED;
    case 1:
    case "BUNDLE_STATUS_VALID":
      return BundleStatus.BUNDLE_STATUS_VALID;
    case 2:
    case "BUNDLE_STATUS_INVALID":
      return BundleStatus.BUNDLE_STATUS_INVALID;
    case 3:
    case "BUNDLE_STATUS_NO_FUNDS":
      return BundleStatus.BUNDLE_STATUS_NO_FUNDS;
    case 4:
    case "BUNDLE_STATUS_NO_QUORUM":
      return BundleStatus.BUNDLE_STATUS_NO_QUORUM;
    case 5:
    case "BUNDLE_STATUS_DISABLED":
      return BundleStatus.BUNDLE_STATUS_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BundleStatus.UNRECOGNIZED;
  }
}
exports.bundleStatusFromJSON = bundleStatusFromJSON;
function bundleStatusToJSON(object) {
  switch (object) {
    case BundleStatus.BUNDLE_STATUS_UNSPECIFIED:
      return "BUNDLE_STATUS_UNSPECIFIED";
    case BundleStatus.BUNDLE_STATUS_VALID:
      return "BUNDLE_STATUS_VALID";
    case BundleStatus.BUNDLE_STATUS_INVALID:
      return "BUNDLE_STATUS_INVALID";
    case BundleStatus.BUNDLE_STATUS_NO_FUNDS:
      return "BUNDLE_STATUS_NO_FUNDS";
    case BundleStatus.BUNDLE_STATUS_NO_QUORUM:
      return "BUNDLE_STATUS_NO_QUORUM";
    case BundleStatus.BUNDLE_STATUS_DISABLED:
      return "BUNDLE_STATUS_DISABLED";
    case BundleStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
exports.bundleStatusToJSON = bundleStatusToJSON;
function bundleStatusToNumber(object) {
  switch (object) {
    case BundleStatus.BUNDLE_STATUS_UNSPECIFIED:
      return 0;
    case BundleStatus.BUNDLE_STATUS_VALID:
      return 1;
    case BundleStatus.BUNDLE_STATUS_INVALID:
      return 2;
    case BundleStatus.BUNDLE_STATUS_NO_FUNDS:
      return 3;
    case BundleStatus.BUNDLE_STATUS_NO_QUORUM:
      return 4;
    case BundleStatus.BUNDLE_STATUS_DISABLED:
      return 5;
    case BundleStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}
exports.bundleStatusToNumber = bundleStatusToNumber;
function createBaseBundleProposal() {
  return {
    pool_id: "0",
    storage_id: "",
    uploader: "",
    next_uploader: "",
    data_size: "0",
    bundle_size: "0",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    updated_at: "0",
    voters_valid: [],
    voters_invalid: [],
    voters_abstain: [],
    from_key: "",
    storage_provider_id: 0,
    compression_id: 0,
  };
}
exports.BundleProposal = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.storage_id !== "") {
      writer.uint32(18).string(message.storage_id);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    if (message.next_uploader !== "") {
      writer.uint32(34).string(message.next_uploader);
    }
    if (message.data_size !== "0") {
      writer.uint32(40).uint64(message.data_size);
    }
    if (message.bundle_size !== "0") {
      writer.uint32(48).uint64(message.bundle_size);
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
    if (message.updated_at !== "0") {
      writer.uint32(80).uint64(message.updated_at);
    }
    for (var _i = 0, _a = message.voters_valid; _i < _a.length; _i++) {
      var v = _a[_i];
      writer.uint32(90).string(v);
    }
    for (var _b = 0, _c = message.voters_invalid; _b < _c.length; _b++) {
      var v = _c[_b];
      writer.uint32(98).string(v);
    }
    for (var _d = 0, _e = message.voters_abstain; _d < _e.length; _d++) {
      var v = _e[_d];
      writer.uint32(106).string(v);
    }
    if (message.from_key !== "") {
      writer.uint32(114).string(message.from_key);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(120).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(128).uint32(message.compression_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBundleProposal();
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
          message.storage_id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.uploader = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.next_uploader = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.data_size = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.bundle_size = longToString(reader.uint64());
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
          if (tag !== 80) {
            break;
          }
          message.updated_at = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.voters_valid.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.voters_invalid.push(reader.string());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.voters_abstain.push(reader.string());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }
          message.from_key = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }
          message.storage_provider_id = reader.uint32();
          continue;
        case 16:
          if (tag !== 128) {
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      storage_id: isSet(object.storage_id)
        ? globalThis.String(object.storage_id)
        : "",
      uploader: isSet(object.uploader)
        ? globalThis.String(object.uploader)
        : "",
      next_uploader: isSet(object.next_uploader)
        ? globalThis.String(object.next_uploader)
        : "",
      data_size: isSet(object.data_size)
        ? globalThis.String(object.data_size)
        : "0",
      bundle_size: isSet(object.bundle_size)
        ? globalThis.String(object.bundle_size)
        : "0",
      to_key: isSet(object.to_key) ? globalThis.String(object.to_key) : "",
      bundle_summary: isSet(object.bundle_summary)
        ? globalThis.String(object.bundle_summary)
        : "",
      data_hash: isSet(object.data_hash)
        ? globalThis.String(object.data_hash)
        : "",
      updated_at: isSet(object.updated_at)
        ? globalThis.String(object.updated_at)
        : "0",
      voters_valid: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.voters_valid
      )
        ? object.voters_valid.map(function (e) {
            return globalThis.String(e);
          })
        : [],
      voters_invalid: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.voters_invalid
      )
        ? object.voters_invalid.map(function (e) {
            return globalThis.String(e);
          })
        : [],
      voters_abstain: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.voters_abstain
      )
        ? object.voters_abstain.map(function (e) {
            return globalThis.String(e);
          })
        : [],
      from_key: isSet(object.from_key)
        ? globalThis.String(object.from_key)
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
    var _a, _b, _c;
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.uploader !== "") {
      obj.uploader = message.uploader;
    }
    if (message.next_uploader !== "") {
      obj.next_uploader = message.next_uploader;
    }
    if (message.data_size !== "0") {
      obj.data_size = message.data_size;
    }
    if (message.bundle_size !== "0") {
      obj.bundle_size = message.bundle_size;
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
    if (message.updated_at !== "0") {
      obj.updated_at = message.updated_at;
    }
    if (
      (_a = message.voters_valid) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.voters_valid = message.voters_valid;
    }
    if (
      (_b = message.voters_invalid) === null || _b === void 0
        ? void 0
        : _b.length
    ) {
      obj.voters_invalid = message.voters_invalid;
    }
    if (
      (_c = message.voters_abstain) === null || _c === void 0
        ? void 0
        : _c.length
    ) {
      obj.voters_abstain = message.voters_abstain;
    }
    if (message.from_key !== "") {
      obj.from_key = message.from_key;
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
    return exports.BundleProposal.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var message = createBaseBundleProposal();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.storage_id =
      (_b = object.storage_id) !== null && _b !== void 0 ? _b : "";
    message.uploader =
      (_c = object.uploader) !== null && _c !== void 0 ? _c : "";
    message.next_uploader =
      (_d = object.next_uploader) !== null && _d !== void 0 ? _d : "";
    message.data_size =
      (_e = object.data_size) !== null && _e !== void 0 ? _e : "0";
    message.bundle_size =
      (_f = object.bundle_size) !== null && _f !== void 0 ? _f : "0";
    message.to_key = (_g = object.to_key) !== null && _g !== void 0 ? _g : "";
    message.bundle_summary =
      (_h = object.bundle_summary) !== null && _h !== void 0 ? _h : "";
    message.data_hash =
      (_j = object.data_hash) !== null && _j !== void 0 ? _j : "";
    message.updated_at =
      (_k = object.updated_at) !== null && _k !== void 0 ? _k : "0";
    message.voters_valid =
      ((_l = object.voters_valid) === null || _l === void 0
        ? void 0
        : _l.map(function (e) {
            return e;
          })) || [];
    message.voters_invalid =
      ((_m = object.voters_invalid) === null || _m === void 0
        ? void 0
        : _m.map(function (e) {
            return e;
          })) || [];
    message.voters_abstain =
      ((_o = object.voters_abstain) === null || _o === void 0
        ? void 0
        : _o.map(function (e) {
            return e;
          })) || [];
    message.from_key =
      (_p = object.from_key) !== null && _p !== void 0 ? _p : "";
    message.storage_provider_id =
      (_q = object.storage_provider_id) !== null && _q !== void 0 ? _q : 0;
    message.compression_id =
      (_r = object.compression_id) !== null && _r !== void 0 ? _r : 0;
    return message;
  },
};
function createBaseFinalizedBundle() {
  return {
    pool_id: "0",
    id: "0",
    storage_id: "",
    uploader: "",
    from_index: "0",
    to_index: "0",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    finalized_at: undefined,
    from_key: "",
    storage_provider_id: 0,
    compression_id: 0,
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
    if (message.from_key !== "") {
      writer.uint32(90).string(message.from_key);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(96).uint32(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      writer.uint32(104).uint32(message.compression_id);
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
        case 11:
          if (tag !== 90) {
            break;
          }
          message.from_key = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.storage_provider_id = reader.uint32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.compression_id = reader.uint32();
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
      from_key: isSet(object.from_key)
        ? globalThis.String(object.from_key)
        : "",
      storage_provider_id: isSet(object.storage_provider_id)
        ? globalThis.Number(object.storage_provider_id)
        : 0,
      compression_id: isSet(object.compression_id)
        ? globalThis.Number(object.compression_id)
        : 0,
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
    if (message.from_key !== "") {
      obj.from_key = message.from_key;
    }
    if (message.storage_provider_id !== 0) {
      obj.storage_provider_id = Math.round(message.storage_provider_id);
    }
    if (message.compression_id !== 0) {
      obj.compression_id = Math.round(message.compression_id);
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
    message.to_key = (_g = object.to_key) !== null && _g !== void 0 ? _g : "";
    message.bundle_summary =
      (_h = object.bundle_summary) !== null && _h !== void 0 ? _h : "";
    message.data_hash =
      (_j = object.data_hash) !== null && _j !== void 0 ? _j : "";
    message.finalized_at =
      object.finalized_at !== undefined && object.finalized_at !== null
        ? exports.FinalizedAt.fromPartial(object.finalized_at)
        : undefined;
    message.from_key =
      (_k = object.from_key) !== null && _k !== void 0 ? _k : "";
    message.storage_provider_id =
      (_l = object.storage_provider_id) !== null && _l !== void 0 ? _l : 0;
    message.compression_id =
      (_m = object.compression_id) !== null && _m !== void 0 ? _m : 0;
    message.stake_security =
      object.stake_security !== undefined && object.stake_security !== null
        ? exports.StakeSecurity.fromPartial(object.stake_security)
        : undefined;
    return message;
  },
};
function createBaseFinalizedAt() {
  return { height: "0", timestamp: "0" };
}
exports.FinalizedAt = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.timestamp !== "0") {
      writer.uint32(16).uint64(message.timestamp);
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
          if (tag !== 8) {
            break;
          }
          message.height = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.timestamp = longToString(reader.uint64());
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
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      timestamp: isSet(object.timestamp)
        ? globalThis.String(object.timestamp)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.timestamp !== "0") {
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
    message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
    message.timestamp =
      (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseStakeSecurity() {
  return { valid_vote_power: "0", total_vote_power: "0" };
}
exports.StakeSecurity = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.valid_vote_power !== "0") {
      writer.uint32(8).uint64(message.valid_vote_power);
    }
    if (message.total_vote_power !== "0") {
      writer.uint32(16).uint64(message.total_vote_power);
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
          if (tag !== 8) {
            break;
          }
          message.valid_vote_power = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.total_vote_power = longToString(reader.uint64());
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
        : "0",
      total_vote_power: isSet(object.total_vote_power)
        ? globalThis.String(object.total_vote_power)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.valid_vote_power !== "0") {
      obj.valid_vote_power = message.valid_vote_power;
    }
    if (message.total_vote_power !== "0") {
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
      (_a = object.valid_vote_power) !== null && _a !== void 0 ? _a : "0";
    message.total_vote_power =
      (_b = object.total_vote_power) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseBundleVersionEntry() {
  return { height: "0", version: 0 };
}
exports.BundleVersionEntry = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBundleVersionEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.height = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.version = reader.int32();
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
      height: isSet(object.height) ? globalThis.String(object.height) : "0",
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.height !== "0") {
      obj.height = message.height;
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    return obj;
  },
  create: function (base) {
    return exports.BundleVersionEntry.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseBundleVersionEntry();
    message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
    message.version = (_b = object.version) !== null && _b !== void 0 ? _b : 0;
    return message;
  },
};
function createBaseBundleVersionMap() {
  return { versions: [] };
}
exports.BundleVersionMap = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.versions; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.BundleVersionEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBundleVersionMap();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.versions.push(
            exports.BundleVersionEntry.decode(reader, reader.uint32())
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
      versions: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.versions
      )
        ? object.versions.map(function (e) {
            return exports.BundleVersionEntry.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (
      (_a = message.versions) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.versions = message.versions.map(function (e) {
        return exports.BundleVersionEntry.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.BundleVersionMap.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseBundleVersionMap();
    message.versions =
      ((_a = object.versions) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return exports.BundleVersionEntry.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseRoundRobinSingleValidatorProgress() {
  return { address: "", progress: "0" };
}
exports.RoundRobinSingleValidatorProgress = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.progress !== "0") {
      writer.uint32(16).int64(message.progress);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRoundRobinSingleValidatorProgress();
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
          if (tag !== 16) {
            break;
          }
          message.progress = longToString(reader.int64());
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
      progress: isSet(object.progress)
        ? globalThis.String(object.progress)
        : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.progress !== "0") {
      obj.progress = message.progress;
    }
    return obj;
  },
  create: function (base) {
    return exports.RoundRobinSingleValidatorProgress.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseRoundRobinSingleValidatorProgress();
    message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
    message.progress =
      (_b = object.progress) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseRoundRobinProgress() {
  return { pool_id: "0", progress_list: [] };
}
exports.RoundRobinProgress = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    for (var _i = 0, _a = message.progress_list; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.RoundRobinSingleValidatorProgress.encode(
        v,
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
    var message = createBaseRoundRobinProgress();
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
          message.progress_list.push(
            exports.RoundRobinSingleValidatorProgress.decode(
              reader,
              reader.uint32()
            )
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
      progress_list: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.progress_list
      )
        ? object.progress_list.map(function (e) {
            return exports.RoundRobinSingleValidatorProgress.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (
      (_a = message.progress_list) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.progress_list = message.progress_list.map(function (e) {
        return exports.RoundRobinSingleValidatorProgress.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.RoundRobinProgress.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseRoundRobinProgress();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.progress_list =
      ((_b = object.progress_list) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return exports.RoundRobinSingleValidatorProgress.fromPartial(e);
          })) || [];
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
//# sourceMappingURL=bundles.js.map
