"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingState =
  exports.Funding =
  exports.Funder =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.funders.v1beta1";
function createBaseFunder() {
  return {
    address: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: "",
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
function createBaseFundingState() {
  return { pool_id: "0", active_funder_addresses: [] };
}
exports.FundingState = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    for (
      var _i = 0, _a = message.active_funder_addresses;
      _i < _a.length;
      _i++
    ) {
      var v = _a[_i];
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFundingState();
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
          message.active_funder_addresses.push(reader.string());
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
      active_funder_addresses: globalThis.Array.isArray(
        object === null || object === void 0
          ? void 0
          : object.active_funder_addresses
      )
        ? object.active_funder_addresses.map(function (e) {
            return globalThis.String(e);
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
      (_a = message.active_funder_addresses) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.active_funder_addresses = message.active_funder_addresses;
    }
    return obj;
  },
  create: function (base) {
    return exports.FundingState.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseFundingState();
    message.pool_id =
      (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
    message.active_funder_addresses =
      ((_b = object.active_funder_addresses) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return e;
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
//# sourceMappingURL=funders.js.map
