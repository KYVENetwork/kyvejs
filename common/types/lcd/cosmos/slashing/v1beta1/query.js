"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QuerySigningInfosResponse = exports.QuerySigningInfosRequest = exports.QuerySigningInfoResponse = exports.QuerySigningInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../base/query/v1beta1/pagination");
var slashing_1 = require("./slashing");
exports.protobufPackage = "cosmos.slashing.v1beta1";
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
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { params: isSet(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? slashing_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQuerySigningInfoRequest() {
    return { cons_address: "" };
}
exports.QuerySigningInfoRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.cons_address !== "") {
            writer.uint32(10).string(message.cons_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cons_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { cons_address: isSet(object.cons_address) ? String(object.cons_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.cons_address !== undefined && (obj.cons_address = message.cons_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySigningInfoRequest();
        message.cons_address = (_a = object.cons_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySigningInfoResponse() {
    return { val_signing_info: undefined };
}
exports.QuerySigningInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.val_signing_info !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.val_signing_info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val_signing_info = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            val_signing_info: isSet(object.val_signing_info)
                ? slashing_1.ValidatorSigningInfo.fromJSON(object.val_signing_info)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.val_signing_info !== undefined && (obj.val_signing_info = message.val_signing_info
            ? slashing_1.ValidatorSigningInfo.toJSON(message.val_signing_info)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySigningInfoResponse();
        message.val_signing_info = (object.val_signing_info !== undefined && object.val_signing_info !== null)
            ? slashing_1.ValidatorSigningInfo.fromPartial(object.val_signing_info)
            : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosRequest() {
    return { pagination: undefined };
}
exports.QuerySigningInfosRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfosRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySigningInfosRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosResponse() {
    return { info: [], pagination: undefined };
}
exports.QuerySigningInfosResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.info; _i < _a.length; _i++) {
            var v = _a[_i];
            slashing_1.ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySigningInfosResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info.push(slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            info: Array.isArray(object === null || object === void 0 ? void 0 : object.info) ? object.info.map(function (e) { return slashing_1.ValidatorSigningInfo.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.info) {
            obj.info = message.info.map(function (e) { return e ? slashing_1.ValidatorSigningInfo.toJSON(e) : undefined; });
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySigningInfosResponse();
        message.info = ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map(function (e) { return slashing_1.ValidatorSigningInfo.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.slashing.v1beta1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.SigningInfo = this.SigningInfo.bind(this);
        this.SigningInfos = this.SigningInfos.bind(this);
    }
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Params", data);
        return promise.then(function (data) { return exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.SigningInfo = function (request) {
        var data = exports.QuerySigningInfoRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "SigningInfo", data);
        return promise.then(function (data) { return exports.QuerySigningInfoResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.SigningInfos = function (request) {
        var data = exports.QuerySigningInfosRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "SigningInfos", data);
        return promise.then(function (data) { return exports.QuerySigningInfosResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map