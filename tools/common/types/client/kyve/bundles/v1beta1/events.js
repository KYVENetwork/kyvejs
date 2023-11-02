"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPointsReset =
  exports.EventPointIncreased =
  exports.EventSkippedUploaderRole =
  exports.EventClaimedUploaderRole =
  exports.EventBundleFinalized =
  exports.EventBundleProposed =
  exports.EventBundleVote =
  exports.EventUpdateParams =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var bundles_1 = require("./bundles");
var params_1 = require("./params");
var tx_1 = require("./tx");
exports.protobufPackage = "kyve.bundles.v1beta1";
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
function createBaseEventBundleVote() {
  return { pool_id: "0", staker: "", storage_id: "", vote: 0 };
}
exports.EventBundleVote = {
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
    if (message.storage_id !== "") {
      writer.uint32(26).string(message.storage_id);
    }
    if (message.vote !== 0) {
      writer.uint32(32).int32(message.vote);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventBundleVote();
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
          message.storage_id = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.vote = reader.int32();
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
      storage_id: isSet(object.storage_id)
        ? globalThis.String(object.storage_id)
        : "",
      vote: isSet(object.vote) ? (0, tx_1.voteTypeFromJSON)(object.vote) : 0,
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
    if (message.storage_id !== "") {
      obj.storage_id = message.storage_id;
    }
    if (message.vote !== 0) {
      obj.vote = (0, tx_1.voteTypeToJSON)(message.vote);
    }
    return obj;
  },
  create: function (base) {
    return exports.EventBundleVote.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventBundleVote();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.storage_id =
      (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
    message.vote = (_d = object.vote) !== null && _d !== void 0 ? _d : 0;
    return message;
  },
};
function createBaseEventBundleProposed() {
  return {
    pool_id: "0",
    id: "0",
    storage_id: "",
    uploader: "",
    data_size: "0",
    from_index: "0",
    bundle_size: "0",
    from_key: "",
    to_key: "",
    bundle_summary: "",
    data_hash: "",
    proposed_at: "0",
    storage_provider_id: 0,
    compression_id: 0,
  };
}
exports.EventBundleProposed = {
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
    if (message.data_size !== "0") {
      writer.uint32(40).uint64(message.data_size);
    }
    if (message.from_index !== "0") {
      writer.uint32(48).uint64(message.from_index);
    }
    if (message.bundle_size !== "0") {
      writer.uint32(56).uint64(message.bundle_size);
    }
    if (message.from_key !== "") {
      writer.uint32(66).string(message.from_key);
    }
    if (message.to_key !== "") {
      writer.uint32(74).string(message.to_key);
    }
    if (message.bundle_summary !== "") {
      writer.uint32(82).string(message.bundle_summary);
    }
    if (message.data_hash !== "") {
      writer.uint32(90).string(message.data_hash);
    }
    if (message.proposed_at !== "0") {
      writer.uint32(96).uint64(message.proposed_at);
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
    var message = createBaseEventBundleProposed();
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
          message.data_size = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.from_index = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.bundle_size = longToString(reader.uint64());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.from_key = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.to_key = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.bundle_summary = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.data_hash = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.proposed_at = longToString(reader.uint64());
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
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      storage_id: isSet(object.storage_id)
        ? globalThis.String(object.storage_id)
        : "",
      uploader: isSet(object.uploader)
        ? globalThis.String(object.uploader)
        : "",
      data_size: isSet(object.data_size)
        ? globalThis.String(object.data_size)
        : "0",
      from_index: isSet(object.from_index)
        ? globalThis.String(object.from_index)
        : "0",
      bundle_size: isSet(object.bundle_size)
        ? globalThis.String(object.bundle_size)
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
      proposed_at: isSet(object.proposed_at)
        ? globalThis.String(object.proposed_at)
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
    if (message.data_size !== "0") {
      obj.data_size = message.data_size;
    }
    if (message.from_index !== "0") {
      obj.from_index = message.from_index;
    }
    if (message.bundle_size !== "0") {
      obj.bundle_size = message.bundle_size;
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
    if (message.proposed_at !== "0") {
      obj.proposed_at = message.proposed_at;
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
    return exports.EventBundleProposed.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var message = createBaseEventBundleProposed();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.storage_id =
      (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
    message.uploader =
      (_d = object.uploader) !== null && _d !== void 0 ? _d : "";
    message.data_size =
      (_e = object.data_size) !== null && _e !== void 0 ? _e : "0";
    message.from_index =
      (_f = object.from_index) !== null && _f !== void 0 ? _f : "0";
    message.bundle_size =
      (_g = object.bundle_size) !== null && _g !== void 0 ? _g : "0";
    message.from_key =
      (_h = object.from_key) !== null && _h !== void 0 ? _h : "";
    message.to_key = (_j = object.to_key) !== null && _j !== void 0 ? _j : "";
    message.bundle_summary =
      (_k = object.bundle_summary) !== null && _k !== void 0 ? _k : "";
    message.data_hash =
      (_l = object.data_hash) !== null && _l !== void 0 ? _l : "";
    message.proposed_at =
      (_m = object.proposed_at) !== null && _m !== void 0 ? _m : "0";
    message.storage_provider_id =
      (_o = object.storage_provider_id) !== null && _o !== void 0 ? _o : 0;
    message.compression_id =
      (_p = object.compression_id) !== null && _p !== void 0 ? _p : 0;
    return message;
  },
};
function createBaseEventBundleFinalized() {
  return {
    pool_id: "0",
    id: "0",
    valid: "0",
    invalid: "0",
    abstain: "0",
    total: "0",
    status: 0,
    funders_payout: "0",
    inflation_payout: "0",
    reward_treasury: "0",
    reward_uploader: "0",
    reward_delegation: "0",
    reward_total: "0",
    finalized_at: "0",
    uploader: "",
    next_uploader: "",
  };
}
exports.EventBundleFinalized = {
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
    if (message.valid !== "0") {
      writer.uint32(24).uint64(message.valid);
    }
    if (message.invalid !== "0") {
      writer.uint32(32).uint64(message.invalid);
    }
    if (message.abstain !== "0") {
      writer.uint32(40).uint64(message.abstain);
    }
    if (message.total !== "0") {
      writer.uint32(48).uint64(message.total);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.funders_payout !== "0") {
      writer.uint32(64).uint64(message.funders_payout);
    }
    if (message.inflation_payout !== "0") {
      writer.uint32(72).uint64(message.inflation_payout);
    }
    if (message.reward_treasury !== "0") {
      writer.uint32(80).uint64(message.reward_treasury);
    }
    if (message.reward_uploader !== "0") {
      writer.uint32(88).uint64(message.reward_uploader);
    }
    if (message.reward_delegation !== "0") {
      writer.uint32(96).uint64(message.reward_delegation);
    }
    if (message.reward_total !== "0") {
      writer.uint32(104).uint64(message.reward_total);
    }
    if (message.finalized_at !== "0") {
      writer.uint32(112).uint64(message.finalized_at);
    }
    if (message.uploader !== "") {
      writer.uint32(122).string(message.uploader);
    }
    if (message.next_uploader !== "") {
      writer.uint32(130).string(message.next_uploader);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventBundleFinalized();
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
          if (tag !== 24) {
            break;
          }
          message.valid = longToString(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.invalid = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.abstain = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.total = longToString(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.status = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.funders_payout = longToString(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.inflation_payout = longToString(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.reward_treasury = longToString(reader.uint64());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.reward_uploader = longToString(reader.uint64());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.reward_delegation = longToString(reader.uint64());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.reward_total = longToString(reader.uint64());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }
          message.finalized_at = longToString(reader.uint64());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }
          message.uploader = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }
          message.next_uploader = reader.string();
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
      valid: isSet(object.valid) ? globalThis.String(object.valid) : "0",
      invalid: isSet(object.invalid) ? globalThis.String(object.invalid) : "0",
      abstain: isSet(object.abstain) ? globalThis.String(object.abstain) : "0",
      total: isSet(object.total) ? globalThis.String(object.total) : "0",
      status: isSet(object.status)
        ? (0, bundles_1.bundleStatusFromJSON)(object.status)
        : 0,
      funders_payout: isSet(object.funders_payout)
        ? globalThis.String(object.funders_payout)
        : "0",
      inflation_payout: isSet(object.inflation_payout)
        ? globalThis.String(object.inflation_payout)
        : "0",
      reward_treasury: isSet(object.reward_treasury)
        ? globalThis.String(object.reward_treasury)
        : "0",
      reward_uploader: isSet(object.reward_uploader)
        ? globalThis.String(object.reward_uploader)
        : "0",
      reward_delegation: isSet(object.reward_delegation)
        ? globalThis.String(object.reward_delegation)
        : "0",
      reward_total: isSet(object.reward_total)
        ? globalThis.String(object.reward_total)
        : "0",
      finalized_at: isSet(object.finalized_at)
        ? globalThis.String(object.finalized_at)
        : "0",
      uploader: isSet(object.uploader)
        ? globalThis.String(object.uploader)
        : "",
      next_uploader: isSet(object.next_uploader)
        ? globalThis.String(object.next_uploader)
        : "",
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
    if (message.status !== 0) {
      obj.status = (0, bundles_1.bundleStatusToJSON)(message.status);
    }
    if (message.funders_payout !== "0") {
      obj.funders_payout = message.funders_payout;
    }
    if (message.inflation_payout !== "0") {
      obj.inflation_payout = message.inflation_payout;
    }
    if (message.reward_treasury !== "0") {
      obj.reward_treasury = message.reward_treasury;
    }
    if (message.reward_uploader !== "0") {
      obj.reward_uploader = message.reward_uploader;
    }
    if (message.reward_delegation !== "0") {
      obj.reward_delegation = message.reward_delegation;
    }
    if (message.reward_total !== "0") {
      obj.reward_total = message.reward_total;
    }
    if (message.finalized_at !== "0") {
      obj.finalized_at = message.finalized_at;
    }
    if (message.uploader !== "") {
      obj.uploader = message.uploader;
    }
    if (message.next_uploader !== "") {
      obj.next_uploader = message.next_uploader;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventBundleFinalized.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var message = createBaseEventBundleFinalized();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.valid = (_c = object.valid) !== null && _c !== void 0 ? _c : "0";
    message.invalid =
      (_d = object.invalid) !== null && _d !== void 0 ? _d : "0";
    message.abstain =
      (_e = object.abstain) !== null && _e !== void 0 ? _e : "0";
    message.total = (_f = object.total) !== null && _f !== void 0 ? _f : "0";
    message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
    message.funders_payout =
      (_h = object.funders_payout) !== null && _h !== void 0 ? _h : "0";
    message.inflation_payout =
      (_j = object.inflation_payout) !== null && _j !== void 0 ? _j : "0";
    message.reward_treasury =
      (_k = object.reward_treasury) !== null && _k !== void 0 ? _k : "0";
    message.reward_uploader =
      (_l = object.reward_uploader) !== null && _l !== void 0 ? _l : "0";
    message.reward_delegation =
      (_m = object.reward_delegation) !== null && _m !== void 0 ? _m : "0";
    message.reward_total =
      (_o = object.reward_total) !== null && _o !== void 0 ? _o : "0";
    message.finalized_at =
      (_p = object.finalized_at) !== null && _p !== void 0 ? _p : "0";
    message.uploader =
      (_q = object.uploader) !== null && _q !== void 0 ? _q : "";
    message.next_uploader =
      (_r = object.next_uploader) !== null && _r !== void 0 ? _r : "";
    return message;
  },
};
function createBaseEventClaimedUploaderRole() {
  return { pool_id: "0", id: "0", new_uploader: "" };
}
exports.EventClaimedUploaderRole = {
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
    if (message.new_uploader !== "") {
      writer.uint32(26).string(message.new_uploader);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventClaimedUploaderRole();
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
          message.new_uploader = reader.string();
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
      new_uploader: isSet(object.new_uploader)
        ? globalThis.String(object.new_uploader)
        : "",
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
    if (message.new_uploader !== "") {
      obj.new_uploader = message.new_uploader;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventClaimedUploaderRole.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventClaimedUploaderRole();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.new_uploader =
      (_c = object.new_uploader) !== null && _c !== void 0 ? _c : "";
    return message;
  },
};
function createBaseEventSkippedUploaderRole() {
  return { pool_id: "0", id: "0", previous_uploader: "", new_uploader: "" };
}
exports.EventSkippedUploaderRole = {
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
    if (message.previous_uploader !== "") {
      writer.uint32(26).string(message.previous_uploader);
    }
    if (message.new_uploader !== "") {
      writer.uint32(34).string(message.new_uploader);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventSkippedUploaderRole();
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
          message.previous_uploader = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.new_uploader = reader.string();
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
      previous_uploader: isSet(object.previous_uploader)
        ? globalThis.String(object.previous_uploader)
        : "",
      new_uploader: isSet(object.new_uploader)
        ? globalThis.String(object.new_uploader)
        : "",
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
    if (message.previous_uploader !== "") {
      obj.previous_uploader = message.previous_uploader;
    }
    if (message.new_uploader !== "") {
      obj.new_uploader = message.new_uploader;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventSkippedUploaderRole.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseEventSkippedUploaderRole();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.previous_uploader =
      (_c = object.previous_uploader) !== null && _c !== void 0 ? _c : "";
    message.new_uploader =
      (_d = object.new_uploader) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseEventPointIncreased() {
  return { pool_id: "0", staker: "", current_points: "0" };
}
exports.EventPointIncreased = {
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
    if (message.current_points !== "0") {
      writer.uint32(24).uint64(message.current_points);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventPointIncreased();
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
          if (tag !== 24) {
            break;
          }
          message.current_points = longToString(reader.uint64());
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
      current_points: isSet(object.current_points)
        ? globalThis.String(object.current_points)
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
    if (message.current_points !== "0") {
      obj.current_points = message.current_points;
    }
    return obj;
  },
  create: function (base) {
    return exports.EventPointIncreased.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseEventPointIncreased();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
    message.current_points =
      (_c = object.current_points) !== null && _c !== void 0 ? _c : "0";
    return message;
  },
};
function createBaseEventPointsReset() {
  return { pool_id: "0", staker: "" };
}
exports.EventPointsReset = {
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
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseEventPointsReset();
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
    return obj;
  },
  create: function (base) {
    return exports.EventPointsReset.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseEventPointsReset();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
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
