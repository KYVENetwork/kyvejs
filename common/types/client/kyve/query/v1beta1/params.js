"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var query_1 = require("../../../cosmos/gov/v1/query");
var params_1 = require("../../bundles/v1beta1/params");
var params_2 = require("../../delegation/v1beta1/params");
var fees_1 = require("../../fees/v1beta1/fees");
var params_3 = require("../../stakers/v1beta1/params");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
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
    fromPartial: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        bundles_params: undefined,
        delegation_params: undefined,
        fees_params: undefined,
        gov_params: undefined,
        stakers_params: undefined,
    };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.bundles_params !== undefined) {
            params_1.Params.encode(message.bundles_params, writer.uint32(10).fork()).ldelim();
        }
        if (message.delegation_params !== undefined) {
            params_2.Params.encode(message.delegation_params, writer.uint32(18).fork()).ldelim();
        }
        if (message.fees_params !== undefined) {
            fees_1.Params.encode(message.fees_params, writer.uint32(26).fork()).ldelim();
        }
        if (message.gov_params !== undefined) {
            query_1.QueryParamsResponse.encode(message.gov_params, writer.uint32(34).fork()).ldelim();
        }
        if (message.stakers_params !== undefined) {
            params_3.Params.encode(message.stakers_params, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bundles_params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.delegation_params = params_2.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fees_params = fees_1.Params.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.gov_params = query_1.QueryParamsResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stakers_params = params_3.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            bundles_params: isSet(object.bundles_params) ? params_1.Params.fromJSON(object.bundles_params) : undefined,
            delegation_params: isSet(object.delegation_params) ? params_2.Params.fromJSON(object.delegation_params) : undefined,
            fees_params: isSet(object.fees_params) ? fees_1.Params.fromJSON(object.fees_params) : undefined,
            gov_params: isSet(object.gov_params) ? query_1.QueryParamsResponse.fromJSON(object.gov_params) : undefined,
            stakers_params: isSet(object.stakers_params) ? params_3.Params.fromJSON(object.stakers_params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bundles_params !== undefined &&
            (obj.bundles_params = message.bundles_params ? params_1.Params.toJSON(message.bundles_params) : undefined);
        message.delegation_params !== undefined &&
            (obj.delegation_params = message.delegation_params ? params_2.Params.toJSON(message.delegation_params) : undefined);
        message.fees_params !== undefined &&
            (obj.fees_params = message.fees_params ? fees_1.Params.toJSON(message.fees_params) : undefined);
        message.gov_params !== undefined &&
            (obj.gov_params = message.gov_params ? query_1.QueryParamsResponse.toJSON(message.gov_params) : undefined);
        message.stakers_params !== undefined &&
            (obj.stakers_params = message.stakers_params ? params_3.Params.toJSON(message.stakers_params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.bundles_params = (object.bundles_params !== undefined && object.bundles_params !== null)
            ? params_1.Params.fromPartial(object.bundles_params)
            : undefined;
        message.delegation_params = (object.delegation_params !== undefined && object.delegation_params !== null)
            ? params_2.Params.fromPartial(object.delegation_params)
            : undefined;
        message.fees_params = (object.fees_params !== undefined && object.fees_params !== null)
            ? fees_1.Params.fromPartial(object.fees_params)
            : undefined;
        message.gov_params = (object.gov_params !== undefined && object.gov_params !== null)
            ? query_1.QueryParamsResponse.fromPartial(object.gov_params)
            : undefined;
        message.stakers_params = (object.stakers_params !== undefined && object.stakers_params !== null)
            ? params_3.Params.fromPartial(object.stakers_params)
            : undefined;
        return message;
    },
};
var QueryParamsClientImpl = /** @class */ (function () {
    function QueryParamsClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.query.v1beta1.QueryParams";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
    }
    QueryParamsClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Params", data);
        return promise.then(function (data) { return exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryParamsClientImpl;
}());
exports.QueryParamsClientImpl = QueryParamsClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map