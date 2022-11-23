"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.QueryModuleAccountsResponse = exports.QueryParamsRequest = exports.QueryAccountResponse = exports.QueryParamsResponse = exports.QueryModuleAccountsRequest = exports.QueryAccountRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var pagination_1 = require("../../base/query/v1beta1/pagination");
var auth_1 = require("./auth");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseQueryAccountsRequest() {
    return { pagination: undefined };
}
exports.QueryAccountsRequest = {
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
        var message = createBaseQueryAccountsRequest();
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
        var message = createBaseQueryAccountsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountsResponse() {
    return { accounts: [], pagination: undefined };
}
exports.QueryAccountsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.accounts; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountRequest() {
    return { address: "" };
}
exports.QueryAccountRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
exports.QueryModuleAccountsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryModuleAccountsRequest();
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
        var message = createBaseQueryModuleAccountsRequest();
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
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = auth_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { params: isSet(object.params) ? auth_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? auth_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountResponse() {
    return { account: undefined };
}
exports.QueryAccountResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { account: isSet(object.account) ? any_1.Any.fromJSON(object.account) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account ? any_1.Any.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryAccountResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? any_1.Any.fromPartial(object.account)
            : undefined;
        return message;
    },
};
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
function createBaseQueryModuleAccountsResponse() {
    return { accounts: [] };
}
exports.QueryModuleAccountsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.accounts; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map(function (e) { return any_1.Any.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryModuleAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseBech32PrefixRequest() {
    return {};
}
exports.Bech32PrefixRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBech32PrefixRequest();
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
        var message = createBaseBech32PrefixRequest();
        return message;
    },
};
function createBaseBech32PrefixResponse() {
    return { bech32_prefix: "" };
}
exports.Bech32PrefixResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.bech32_prefix !== "") {
            writer.uint32(10).string(message.bech32_prefix);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32_prefix = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { bech32_prefix: isSet(object.bech32_prefix) ? String(object.bech32_prefix) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.bech32_prefix !== undefined && (obj.bech32_prefix = message.bech32_prefix);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBech32PrefixResponse();
        message.bech32_prefix = (_a = object.bech32_prefix) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddressBytesToStringRequest() {
    return { address_bytes: new Uint8Array() };
}
exports.AddressBytesToStringRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address_bytes.length !== 0) {
            writer.uint32(10).bytes(message.address_bytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_bytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array() };
    },
    toJSON: function (message) {
        var obj = {};
        message.address_bytes !== undefined &&
            (obj.address_bytes = base64FromBytes(message.address_bytes !== undefined ? message.address_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddressBytesToStringRequest();
        message.address_bytes = (_a = object.address_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseAddressBytesToStringResponse() {
    return { address_string: "" };
}
exports.AddressBytesToStringResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address_string !== "") {
            writer.uint32(10).string(message.address_string);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address_string: isSet(object.address_string) ? String(object.address_string) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.address_string !== undefined && (obj.address_string = message.address_string);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddressBytesToStringResponse();
        message.address_string = (_a = object.address_string) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddressStringToBytesRequest() {
    return { address_string: "" };
}
exports.AddressStringToBytesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address_string !== "") {
            writer.uint32(10).string(message.address_string);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_string = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address_string: isSet(object.address_string) ? String(object.address_string) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.address_string !== undefined && (obj.address_string = message.address_string);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddressStringToBytesRequest();
        message.address_string = (_a = object.address_string) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddressStringToBytesResponse() {
    return { address_bytes: new Uint8Array() };
}
exports.AddressStringToBytesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address_bytes.length !== 0) {
            writer.uint32(10).bytes(message.address_bytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_bytes = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array() };
    },
    toJSON: function (message) {
        var obj = {};
        message.address_bytes !== undefined &&
            (obj.address_bytes = base64FromBytes(message.address_bytes !== undefined ? message.address_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddressStringToBytesResponse();
        message.address_bytes = (_a = object.address_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.auth.v1beta1.Query";
        this.rpc = rpc;
        this.Accounts = this.Accounts.bind(this);
        this.Account = this.Account.bind(this);
        this.Params = this.Params.bind(this);
        this.ModuleAccounts = this.ModuleAccounts.bind(this);
        this.Bech32Prefix = this.Bech32Prefix.bind(this);
        this.AddressBytesToString = this.AddressBytesToString.bind(this);
        this.AddressStringToBytes = this.AddressStringToBytes.bind(this);
    }
    QueryClientImpl.prototype.Accounts = function (request) {
        var data = exports.QueryAccountsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Accounts", data);
        return promise.then(function (data) { return exports.QueryAccountsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Account = function (request) {
        var data = exports.QueryAccountRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Account", data);
        return promise.then(function (data) { return exports.QueryAccountResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Params", data);
        return promise.then(function (data) { return exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.ModuleAccounts = function (request) {
        var data = exports.QueryModuleAccountsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ModuleAccounts", data);
        return promise.then(function (data) { return exports.QueryModuleAccountsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Bech32Prefix = function (request) {
        var data = exports.Bech32PrefixRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Bech32Prefix", data);
        return promise.then(function (data) { return exports.Bech32PrefixResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.AddressBytesToString = function (request) {
        var data = exports.AddressBytesToStringRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AddressBytesToString", data);
        return promise.then(function (data) { return exports.AddressBytesToStringResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.AddressStringToBytes = function (request) {
        var data = exports.AddressStringToBytesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AddressStringToBytes", data);
        return promise.then(function (data) { return exports.AddressStringToBytesResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var globalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin_1.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map