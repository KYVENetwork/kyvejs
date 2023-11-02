"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl =
  exports.MsgServiceName =
  exports.MsgUpdateParamsResponse =
  exports.MsgUpdateParams =
  exports.MsgCancelRuntimeUpgradeResponse =
  exports.MsgCancelRuntimeUpgrade =
  exports.MsgScheduleRuntimeUpgradeResponse =
  exports.MsgScheduleRuntimeUpgrade =
  exports.MsgEnablePoolResponse =
  exports.MsgEnablePool =
  exports.MsgDisablePoolResponse =
  exports.MsgDisablePool =
  exports.MsgUpdatePoolResponse =
  exports.MsgUpdatePool =
  exports.MsgCreatePoolResponse =
  exports.MsgCreatePool =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.pool.v1beta1";
function createBaseMsgCreatePool() {
  return {
    authority: "",
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
exports.MsgCreatePool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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
    var message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
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
    if (message.authority !== "") {
      obj.authority = message.authority;
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
    return exports.MsgCreatePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var message = createBaseMsgCreatePool();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
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
function createBaseMsgCreatePoolResponse() {
  return {};
}
exports.MsgCreatePoolResponse = {
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
    var message = createBaseMsgCreatePoolResponse();
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
    return exports.MsgCreatePoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgCreatePoolResponse();
    return message;
  },
};
function createBaseMsgUpdatePool() {
  return { authority: "", id: "0", payload: "" };
}
exports.MsgUpdatePool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
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
    var message = createBaseMsgUpdatePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdatePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgUpdatePool();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : "";
    return message;
  },
};
function createBaseMsgUpdatePoolResponse() {
  return {};
}
exports.MsgUpdatePoolResponse = {
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
    var message = createBaseMsgUpdatePoolResponse();
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
    return exports.MsgUpdatePoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdatePoolResponse();
    return message;
  },
};
function createBaseMsgDisablePool() {
  return { authority: "", id: "0" };
}
exports.MsgDisablePool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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
    var message = createBaseMsgDisablePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgDisablePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgDisablePool();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseMsgDisablePoolResponse() {
  return {};
}
exports.MsgDisablePoolResponse = {
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
    var message = createBaseMsgDisablePoolResponse();
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
    return exports.MsgDisablePoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgDisablePoolResponse();
    return message;
  },
};
function createBaseMsgEnablePool() {
  return { authority: "", id: "0" };
}
exports.MsgEnablePool = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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
    var message = createBaseMsgEnablePool();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgEnablePool.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgEnablePool();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseMsgEnablePoolResponse() {
  return {};
}
exports.MsgEnablePoolResponse = {
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
    var message = createBaseMsgEnablePoolResponse();
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
    return exports.MsgEnablePoolResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgEnablePoolResponse();
    return message;
  },
};
function createBaseMsgScheduleRuntimeUpgrade() {
  return {
    authority: "",
    runtime: "",
    version: "",
    scheduled_at: "0",
    duration: "0",
    binaries: "",
  };
}
exports.MsgScheduleRuntimeUpgrade = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.scheduled_at !== "0") {
      writer.uint32(32).uint64(message.scheduled_at);
    }
    if (message.duration !== "0") {
      writer.uint32(40).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(50).string(message.binaries);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgScheduleRuntimeUpgrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.runtime = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.scheduled_at = longToString(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.duration = longToString(reader.uint64());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.binaries = reader.string();
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
        ? globalThis.String(object.authority)
        : "",
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
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
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
    return obj;
  },
  create: function (base) {
    return exports.MsgScheduleRuntimeUpgrade.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseMsgScheduleRuntimeUpgrade();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
    message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
    message.scheduled_at =
      (_d = object.scheduled_at) !== null && _d !== void 0 ? _d : "0";
    message.duration =
      (_e = object.duration) !== null && _e !== void 0 ? _e : "0";
    message.binaries =
      (_f = object.binaries) !== null && _f !== void 0 ? _f : "";
    return message;
  },
};
function createBaseMsgScheduleRuntimeUpgradeResponse() {
  return {};
}
exports.MsgScheduleRuntimeUpgradeResponse = {
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
    var message = createBaseMsgScheduleRuntimeUpgradeResponse();
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
    return exports.MsgScheduleRuntimeUpgradeResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgScheduleRuntimeUpgradeResponse();
    return message;
  },
};
function createBaseMsgCancelRuntimeUpgrade() {
  return { authority: "", runtime: "" };
}
exports.MsgCancelRuntimeUpgrade = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.runtime !== "") {
      writer.uint32(18).string(message.runtime);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCancelRuntimeUpgrade();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.runtime = reader.string();
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
        ? globalThis.String(object.authority)
        : "",
      runtime: isSet(object.runtime) ? globalThis.String(object.runtime) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.runtime !== "") {
      obj.runtime = message.runtime;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgCancelRuntimeUpgrade.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgCancelRuntimeUpgrade();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseMsgCancelRuntimeUpgradeResponse() {
  return {};
}
exports.MsgCancelRuntimeUpgradeResponse = {
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
    var message = createBaseMsgCancelRuntimeUpgradeResponse();
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
    return exports.MsgCancelRuntimeUpgradeResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgCancelRuntimeUpgradeResponse();
    return message;
  },
};
function createBaseMsgUpdateParams() {
  return { authority: "", payload: "" };
}
exports.MsgUpdateParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseMsgUpdateParams();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
exports.MsgUpdateParamsResponse = {
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
    var message = createBaseMsgUpdateParamsResponse();
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
    return exports.MsgUpdateParamsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
exports.MsgServiceName = "kyve.pool.v1beta1.Msg";
var MsgClientImpl = /** @class */ (function () {
  function MsgClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.MsgServiceName;
    this.rpc = rpc;
    this.CreatePool = this.CreatePool.bind(this);
    this.UpdatePool = this.UpdatePool.bind(this);
    this.DisablePool = this.DisablePool.bind(this);
    this.EnablePool = this.EnablePool.bind(this);
    this.ScheduleRuntimeUpgrade = this.ScheduleRuntimeUpgrade.bind(this);
    this.CancelRuntimeUpgrade = this.CancelRuntimeUpgrade.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MsgClientImpl.prototype.CreatePool = function (request) {
    var data = exports.MsgCreatePool.encode(request).finish();
    var promise = this.rpc.request(this.service, "CreatePool", data);
    return promise.then(function (data) {
      return exports.MsgCreatePoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdatePool = function (request) {
    var data = exports.MsgUpdatePool.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdatePool", data);
    return promise.then(function (data) {
      return exports.MsgUpdatePoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.DisablePool = function (request) {
    var data = exports.MsgDisablePool.encode(request).finish();
    var promise = this.rpc.request(this.service, "DisablePool", data);
    return promise.then(function (data) {
      return exports.MsgDisablePoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.EnablePool = function (request) {
    var data = exports.MsgEnablePool.encode(request).finish();
    var promise = this.rpc.request(this.service, "EnablePool", data);
    return promise.then(function (data) {
      return exports.MsgEnablePoolResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.ScheduleRuntimeUpgrade = function (request) {
    var data = exports.MsgScheduleRuntimeUpgrade.encode(request).finish();
    var promise = this.rpc.request(
      this.service,
      "ScheduleRuntimeUpgrade",
      data
    );
    return promise.then(function (data) {
      return exports.MsgScheduleRuntimeUpgradeResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.CancelRuntimeUpgrade = function (request) {
    var data = exports.MsgCancelRuntimeUpgrade.encode(request).finish();
    var promise = this.rpc.request(this.service, "CancelRuntimeUpgrade", data);
    return promise.then(function (data) {
      return exports.MsgCancelRuntimeUpgradeResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdateParams = function (request) {
    var data = exports.MsgUpdateParams.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then(function (data) {
      return exports.MsgUpdateParamsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return MsgClientImpl;
})();
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map
