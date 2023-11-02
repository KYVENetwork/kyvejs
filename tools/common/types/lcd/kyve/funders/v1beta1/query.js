"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl =
  exports.QueryServiceName =
  exports.QueryParamsResponse =
  exports.QueryParamsRequest =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var params_1 = require("./params");
exports.protobufPackage = "kyve.funders.v1beta1";
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
  return { params: undefined };
}
exports.QueryParamsResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.params !== undefined) {
      params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = params_1.Params.decode(reader, reader.uint32());
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
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.params !== undefined) {
      obj.params = params_1.Params.toJSON(message.params);
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
    message.params =
      object.params !== undefined && object.params !== null
        ? params_1.Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};
exports.QueryServiceName = "kyve.funders.v1beta1.Query";
var QueryClientImpl = /** @class */ (function () {
  function QueryClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
  }
  QueryClientImpl.prototype.Params = function (request) {
    var data = exports.QueryParamsRequest.encode(request).finish();
    var promise = this.rpc.request(this.service, "Params", data);
    return promise.then(function (data) {
      return exports.QueryParamsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return QueryClientImpl;
})();
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
  return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map
