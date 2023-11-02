"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsClientImpl =
  exports.QueryParamsServiceName =
  exports.QueryParamsResponse =
  exports.QueryParamsRequest =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var gov_1 = require("../../../cosmos/gov/v1/gov");
var params_1 = require("../../bundles/v1beta1/params");
var params_2 = require("../../delegation/v1beta1/params");
var params_3 = require("../../funders/v1beta1/params");
var global_1 = require("../../global/v1beta1/global");
var params_4 = require("../../pool/v1beta1/params");
var params_5 = require("../../stakers/v1beta1/params");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseQueryParamsRequest() {
  return {};
}
exports.QueryParamsRequest = {
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
    var message = createBaseQueryParamsRequest();
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
    return exports.QueryParamsRequest.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse() {
  return {
    bundles_params: undefined,
    delegation_params: undefined,
    global_params: undefined,
    gov_params: undefined,
    stakers_params: undefined,
    pool_params: undefined,
    funders_params: undefined,
  };
}
exports.QueryParamsResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.bundles_params !== undefined) {
      params_1.Params.encode(
        message.bundles_params,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.delegation_params !== undefined) {
      params_2.Params.encode(
        message.delegation_params,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.global_params !== undefined) {
      global_1.Params.encode(
        message.global_params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.gov_params !== undefined) {
      gov_1.Params.encode(
        message.gov_params,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.stakers_params !== undefined) {
      params_5.Params.encode(
        message.stakers_params,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.pool_params !== undefined) {
      params_4.Params.encode(
        message.pool_params,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.funders_params !== undefined) {
      params_3.Params.encode(
        message.funders_params,
        writer.uint32(58).fork()
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
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.bundles_params = params_1.Params.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.delegation_params = params_2.Params.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.global_params = global_1.Params.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.gov_params = gov_1.Params.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.stakers_params = params_5.Params.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.pool_params = params_4.Params.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.funders_params = params_3.Params.decode(
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
      bundles_params: isSet(object.bundles_params)
        ? params_1.Params.fromJSON(object.bundles_params)
        : undefined,
      delegation_params: isSet(object.delegation_params)
        ? params_2.Params.fromJSON(object.delegation_params)
        : undefined,
      global_params: isSet(object.global_params)
        ? global_1.Params.fromJSON(object.global_params)
        : undefined,
      gov_params: isSet(object.gov_params)
        ? gov_1.Params.fromJSON(object.gov_params)
        : undefined,
      stakers_params: isSet(object.stakers_params)
        ? params_5.Params.fromJSON(object.stakers_params)
        : undefined,
      pool_params: isSet(object.pool_params)
        ? params_4.Params.fromJSON(object.pool_params)
        : undefined,
      funders_params: isSet(object.funders_params)
        ? params_3.Params.fromJSON(object.funders_params)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.bundles_params !== undefined) {
      obj.bundles_params = params_1.Params.toJSON(message.bundles_params);
    }
    if (message.delegation_params !== undefined) {
      obj.delegation_params = params_2.Params.toJSON(message.delegation_params);
    }
    if (message.global_params !== undefined) {
      obj.global_params = global_1.Params.toJSON(message.global_params);
    }
    if (message.gov_params !== undefined) {
      obj.gov_params = gov_1.Params.toJSON(message.gov_params);
    }
    if (message.stakers_params !== undefined) {
      obj.stakers_params = params_5.Params.toJSON(message.stakers_params);
    }
    if (message.pool_params !== undefined) {
      obj.pool_params = params_4.Params.toJSON(message.pool_params);
    }
    if (message.funders_params !== undefined) {
      obj.funders_params = params_3.Params.toJSON(message.funders_params);
    }
    return obj;
  },
  create: function (base) {
    return exports.QueryParamsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var message = createBaseQueryParamsResponse();
    message.bundles_params =
      object.bundles_params !== undefined && object.bundles_params !== null
        ? params_1.Params.fromPartial(object.bundles_params)
        : undefined;
    message.delegation_params =
      object.delegation_params !== undefined &&
      object.delegation_params !== null
        ? params_2.Params.fromPartial(object.delegation_params)
        : undefined;
    message.global_params =
      object.global_params !== undefined && object.global_params !== null
        ? global_1.Params.fromPartial(object.global_params)
        : undefined;
    message.gov_params =
      object.gov_params !== undefined && object.gov_params !== null
        ? gov_1.Params.fromPartial(object.gov_params)
        : undefined;
    message.stakers_params =
      object.stakers_params !== undefined && object.stakers_params !== null
        ? params_5.Params.fromPartial(object.stakers_params)
        : undefined;
    message.pool_params =
      object.pool_params !== undefined && object.pool_params !== null
        ? params_4.Params.fromPartial(object.pool_params)
        : undefined;
    message.funders_params =
      object.funders_params !== undefined && object.funders_params !== null
        ? params_3.Params.fromPartial(object.funders_params)
        : undefined;
    return message;
  },
};
exports.QueryParamsServiceName = "kyve.query.v1beta1.QueryParams";
var QueryParamsClientImpl = /** @class */ (function () {
  function QueryParamsClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.QueryParamsServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
  }
  QueryParamsClientImpl.prototype.Params = function (request) {
    var data = exports.QueryParamsRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "Params", data);
    return promise.then(function (data) {
      return exports.QueryParamsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return QueryParamsClientImpl;
})();
exports.QueryParamsClientImpl = QueryParamsClientImpl;
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map
