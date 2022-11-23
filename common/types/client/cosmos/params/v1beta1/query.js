"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.Subspace = exports.QuerySubspacesResponse = exports.QuerySubspacesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var params_1 = require("./params");
exports.protobufPackage = "cosmos.params.v1beta1";
function createBaseQueryParamsRequest() {
    return { subspace: "", key: "" };
}
exports.QueryParamsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            key: isSet(object.key) ? String(object.key) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryParamsRequest();
        message.subspace = (_a = object.subspace) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { param: undefined };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.param !== undefined) {
            params_1.ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
                    message.param = params_1.ParamChange.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { param: isSet(object.param) ? params_1.ParamChange.fromJSON(object.param) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.param !== undefined && (obj.param = message.param ? params_1.ParamChange.toJSON(message.param) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.param = (object.param !== undefined && object.param !== null)
            ? params_1.ParamChange.fromPartial(object.param)
            : undefined;
        return message;
    },
};
function createBaseQuerySubspacesRequest() {
    return {};
}
exports.QuerySubspacesRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubspacesRequest();
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
        var message = createBaseQuerySubspacesRequest();
        return message;
    },
};
function createBaseQuerySubspacesResponse() {
    return { subspaces: [] };
}
exports.QuerySubspacesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.subspaces; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Subspace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspaces.push(exports.Subspace.decode(reader, reader.uint32()));
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
            subspaces: Array.isArray(object === null || object === void 0 ? void 0 : object.subspaces) ? object.subspaces.map(function (e) { return exports.Subspace.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(function (e) { return e ? exports.Subspace.toJSON(e) : undefined; });
        }
        else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySubspacesResponse();
        message.subspaces = ((_a = object.subspaces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Subspace.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSubspace() {
    return { subspace: "", keys: [] };
}
exports.Subspace = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubspace();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.keys.push(reader.string());
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
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        if (message.keys) {
            obj.keys = message.keys.map(function (e) { return e; });
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSubspace();
        message.subspace = (_a = object.subspace) !== null && _a !== void 0 ? _a : "";
        message.keys = ((_b = object.keys) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.params.v1beta1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Subspaces = this.Subspaces.bind(this);
    }
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Params", data);
        return promise.then(function (data) { return exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Subspaces = function (request) {
        var data = exports.QuerySubspacesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Subspaces", data);
        return promise.then(function (data) { return exports.QuerySubspacesResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map