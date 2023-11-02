"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var funders_1 = require("./funders");
var params_1 = require("./params");
exports.protobufPackage = "kyve.funders.v1beta1";
function createBaseGenesisState() {
  return {
    params: undefined,
    funder_list: [],
    funding_list: [],
    funding_state_list: [],
  };
}
exports.GenesisState = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.params !== undefined) {
      params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (var _i = 0, _a = message.funder_list; _i < _a.length; _i++) {
      var v = _a[_i];
      funders_1.Funder.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (var _b = 0, _c = message.funding_list; _b < _c.length; _b++) {
      var v = _c[_b];
      funders_1.Funding.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (var _d = 0, _e = message.funding_state_list; _d < _e.length; _d++) {
      var v = _e[_d];
      funders_1.FundingState.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.params = params_1.Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.funder_list.push(
            funders_1.Funder.decode(reader, reader.uint32())
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.funding_list.push(
            funders_1.Funding.decode(reader, reader.uint32())
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.funding_state_list.push(
            funders_1.FundingState.decode(reader, reader.uint32())
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
      params: isSet(object.params)
        ? params_1.Params.fromJSON(object.params)
        : undefined,
      funder_list: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.funder_list
      )
        ? object.funder_list.map(function (e) {
            return funders_1.Funder.fromJSON(e);
          })
        : [],
      funding_list: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.funding_list
      )
        ? object.funding_list.map(function (e) {
            return funders_1.Funding.fromJSON(e);
          })
        : [],
      funding_state_list: globalThis.Array.isArray(
        object === null || object === void 0
          ? void 0
          : object.funding_state_list
      )
        ? object.funding_state_list.map(function (e) {
            return funders_1.FundingState.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a, _b, _c;
    var obj = {};
    if (message.params !== undefined) {
      obj.params = params_1.Params.toJSON(message.params);
    }
    if (
      (_a = message.funder_list) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.funder_list = message.funder_list.map(function (e) {
        return funders_1.Funder.toJSON(e);
      });
    }
    if (
      (_b = message.funding_list) === null || _b === void 0 ? void 0 : _b.length
    ) {
      obj.funding_list = message.funding_list.map(function (e) {
        return funders_1.Funding.toJSON(e);
      });
    }
    if (
      (_c = message.funding_state_list) === null || _c === void 0
        ? void 0
        : _c.length
    ) {
      obj.funding_state_list = message.funding_state_list.map(function (e) {
        return funders_1.FundingState.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.GenesisState.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? params_1.Params.fromPartial(object.params)
        : undefined;
    message.funder_list =
      ((_a = object.funder_list) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return funders_1.Funder.fromPartial(e);
          })) || [];
    message.funding_list =
      ((_b = object.funding_list) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return funders_1.Funding.fromPartial(e);
          })) || [];
    message.funding_state_list =
      ((_c = object.funding_state_list) === null || _c === void 0
        ? void 0
        : _c.map(function (e) {
            return funders_1.FundingState.fromPartial(e);
          })) || [];
    return message;
  },
};
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map
