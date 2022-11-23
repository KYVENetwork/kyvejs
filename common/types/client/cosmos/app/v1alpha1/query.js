"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryConfigResponse = exports.QueryConfigRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var config_1 = require("./config");
exports.protobufPackage = "cosmos.app.v1alpha1";
function createBaseQueryConfigRequest() {
    return {};
}
exports.QueryConfigRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConfigRequest();
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
        var message = createBaseQueryConfigRequest();
        return message;
    },
};
function createBaseQueryConfigResponse() {
    return { config: undefined };
}
exports.QueryConfigResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.config !== undefined) {
            config_1.Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = config_1.Config.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { config: isSet(object.config) ? config_1.Config.fromJSON(object.config) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.config !== undefined && (obj.config = message.config ? config_1.Config.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryConfigResponse();
        message.config = (object.config !== undefined && object.config !== null)
            ? config_1.Config.fromPartial(object.config)
            : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.app.v1alpha1.Query";
        this.rpc = rpc;
        this.Config = this.Config.bind(this);
    }
    QueryClientImpl.prototype.Config = function (request) {
        var data = exports.QueryConfigRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Config", data);
        return promise.then(function (data) { return exports.QueryConfigResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map