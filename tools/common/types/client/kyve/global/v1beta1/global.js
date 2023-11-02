"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasRefund =
  exports.GasAdjustment =
  exports.Params =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.global.v1beta1";
function createBaseParams() {
  return {
    min_gas_price: "",
    burn_ratio: "",
    gas_adjustments: [],
    gas_refunds: [],
    min_initial_deposit_ratio: "",
  };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.min_gas_price !== "") {
      writer.uint32(10).string(message.min_gas_price);
    }
    if (message.burn_ratio !== "") {
      writer.uint32(18).string(message.burn_ratio);
    }
    for (var _i = 0, _a = message.gas_adjustments; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.GasAdjustment.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (var _b = 0, _c = message.gas_refunds; _b < _c.length; _b++) {
      var v = _c[_b];
      exports.GasRefund.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.min_initial_deposit_ratio !== "") {
      writer.uint32(42).string(message.min_initial_deposit_ratio);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.min_gas_price = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.burn_ratio = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.gas_adjustments.push(
            exports.GasAdjustment.decode(reader, reader.uint32())
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.gas_refunds.push(
            exports.GasRefund.decode(reader, reader.uint32())
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.min_initial_deposit_ratio = reader.string();
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
      min_gas_price: isSet(object.min_gas_price)
        ? globalThis.String(object.min_gas_price)
        : "",
      burn_ratio: isSet(object.burn_ratio)
        ? globalThis.String(object.burn_ratio)
        : "",
      gas_adjustments: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.gas_adjustments
      )
        ? object.gas_adjustments.map(function (e) {
            return exports.GasAdjustment.fromJSON(e);
          })
        : [],
      gas_refunds: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.gas_refunds
      )
        ? object.gas_refunds.map(function (e) {
            return exports.GasRefund.fromJSON(e);
          })
        : [],
      min_initial_deposit_ratio: isSet(object.min_initial_deposit_ratio)
        ? globalThis.String(object.min_initial_deposit_ratio)
        : "",
    };
  },
  toJSON: function (message) {
    var _a, _b;
    var obj = {};
    if (message.min_gas_price !== "") {
      obj.min_gas_price = message.min_gas_price;
    }
    if (message.burn_ratio !== "") {
      obj.burn_ratio = message.burn_ratio;
    }
    if (
      (_a = message.gas_adjustments) === null || _a === void 0
        ? void 0
        : _a.length
    ) {
      obj.gas_adjustments = message.gas_adjustments.map(function (e) {
        return exports.GasAdjustment.toJSON(e);
      });
    }
    if (
      (_b = message.gas_refunds) === null || _b === void 0 ? void 0 : _b.length
    ) {
      obj.gas_refunds = message.gas_refunds.map(function (e) {
        return exports.GasRefund.toJSON(e);
      });
    }
    if (message.min_initial_deposit_ratio !== "") {
      obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
    }
    return obj;
  },
  create: function (base) {
    return exports.Params.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e;
    var message = createBaseParams();
    message.min_gas_price =
      (_a = object.min_gas_price) !== null && _a !== void 0 ? _a : "";
    message.burn_ratio =
      (_b = object.burn_ratio) !== null && _b !== void 0 ? _b : "";
    message.gas_adjustments =
      ((_c = object.gas_adjustments) === null || _c === void 0
        ? void 0
        : _c.map(function (e) {
            return exports.GasAdjustment.fromPartial(e);
          })) || [];
    message.gas_refunds =
      ((_d = object.gas_refunds) === null || _d === void 0
        ? void 0
        : _d.map(function (e) {
            return exports.GasRefund.fromPartial(e);
          })) || [];
    message.min_initial_deposit_ratio =
      (_e = object.min_initial_deposit_ratio) !== null && _e !== void 0
        ? _e
        : "";
    return message;
  },
};
function createBaseGasAdjustment() {
  return { type: "", amount: "0" };
}
exports.GasAdjustment = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGasAdjustment();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
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
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },
  create: function (base) {
    return exports.GasAdjustment.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseGasAdjustment();
    message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
    message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
    return message;
  },
};
function createBaseGasRefund() {
  return { type: "", fraction: "" };
}
exports.GasRefund = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGasRefund();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.fraction = reader.string();
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
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      fraction: isSet(object.fraction)
        ? globalThis.String(object.fraction)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.fraction !== "") {
      obj.fraction = message.fraction;
    }
    return obj;
  },
  create: function (base) {
    return exports.GasRefund.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseGasRefund();
    message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
    message.fraction =
      (_b = object.fraction) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=global.js.map
