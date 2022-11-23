"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionServiceClientImpl = exports.ListImplementationsResponse = exports.ListImplementationsRequest = exports.ListAllInterfacesResponse = exports.ListAllInterfacesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.reflection.v1beta1";
function createBaseListAllInterfacesRequest() {
    return {};
}
exports.ListAllInterfacesRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListAllInterfacesRequest();
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
        var message = createBaseListAllInterfacesRequest();
        return message;
    },
};
function createBaseListAllInterfacesResponse() {
    return { interface_names: [] };
}
exports.ListAllInterfacesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.interface_names; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interface_names.push(reader.string());
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
            interface_names: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_names) ? object.interface_names.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.interface_names) {
            obj.interface_names = message.interface_names.map(function (e) { return e; });
        }
        else {
            obj.interface_names = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListAllInterfacesResponse();
        message.interface_names = ((_a = object.interface_names) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseListImplementationsRequest() {
    return { interface_name: "" };
}
exports.ListImplementationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.interface_name !== "") {
            writer.uint32(10).string(message.interface_name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interface_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { interface_name: isSet(object.interface_name) ? String(object.interface_name) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.interface_name !== undefined && (obj.interface_name = message.interface_name);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListImplementationsRequest();
        message.interface_name = (_a = object.interface_name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListImplementationsResponse() {
    return { implementation_message_names: [] };
}
exports.ListImplementationsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.implementation_message_names; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementation_message_names.push(reader.string());
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
            implementation_message_names: Array.isArray(object === null || object === void 0 ? void 0 : object.implementation_message_names)
                ? object.implementation_message_names.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.implementation_message_names) {
            obj.implementation_message_names = message.implementation_message_names.map(function (e) { return e; });
        }
        else {
            obj.implementation_message_names = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListImplementationsResponse();
        message.implementation_message_names = ((_a = object.implementation_message_names) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
var ReflectionServiceClientImpl = /** @class */ (function () {
    function ReflectionServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.base.reflection.v1beta1.ReflectionService";
        this.rpc = rpc;
        this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
        this.ListImplementations = this.ListImplementations.bind(this);
    }
    ReflectionServiceClientImpl.prototype.ListAllInterfaces = function (request) {
        var data = exports.ListAllInterfacesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ListAllInterfaces", data);
        return promise.then(function (data) { return exports.ListAllInterfacesResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ReflectionServiceClientImpl.prototype.ListImplementations = function (request) {
        var data = exports.ListImplementationsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ListImplementations", data);
        return promise.then(function (data) { return exports.ListImplementationsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return ReflectionServiceClientImpl;
}());
exports.ReflectionServiceClientImpl = ReflectionServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=reflection.js.map