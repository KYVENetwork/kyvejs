"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgRevokeResponse = exports.MsgRevoke = exports.MsgGrantResponse = exports.MsgExec = exports.MsgExecResponse = exports.MsgGrant = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var authz_1 = require("./authz");
exports.protobufPackage = "cosmos.authz.v1beta1";
function createBaseMsgGrant() {
    return { granter: "", grantee: "", grant: undefined };
}
exports.MsgGrant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.grant !== undefined) {
            authz_1.Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgGrant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.grant = authz_1.Grant.decode(reader, reader.uint32());
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            grant: isSet(object.grant) ? authz_1.Grant.fromJSON(object.grant) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.grant !== undefined && (obj.grant = message.grant ? authz_1.Grant.toJSON(message.grant) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgGrant();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.grant = (object.grant !== undefined && object.grant !== null) ? authz_1.Grant.fromPartial(object.grant) : undefined;
        return message;
    },
};
function createBaseMsgExecResponse() {
    return { results: [] };
}
exports.MsgExecResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.results; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { results: Array.isArray(object === null || object === void 0 ? void 0 : object.results) ? object.results.map(function (e) { return bytesFromBase64(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.results) {
            obj.results = message.results.map(function (e) { return base64FromBytes(e !== undefined ? e : new Uint8Array()); });
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgExecResponse();
        message.results = ((_a = object.results) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseMsgExec() {
    return { grantee: "", msgs: [] };
}
exports.MsgExec = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        for (var _i = 0, _a = message.msgs; _i < _a.length; _i++) {
            var v = _a[_i];
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
                    message.msgs.push(any_1.Any.decode(reader, reader.uint32()));
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
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        if (message.msgs) {
            obj.msgs = message.msgs.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgExec();
        message.grantee = (_a = object.grantee) !== null && _a !== void 0 ? _a : "";
        message.msgs = ((_b = object.msgs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMsgGrantResponse() {
    return {};
}
exports.MsgGrantResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgGrantResponse();
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
        var message = createBaseMsgGrantResponse();
        return message;
    },
};
function createBaseMsgRevoke() {
    return { granter: "", grantee: "", msg_type_url: "" };
}
exports.MsgRevoke = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msg_type_url !== "") {
            writer.uint32(26).string(message.msg_type_url);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRevoke();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.msg_type_url = reader.string();
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgRevoke();
        message.granter = (_a = object.granter) !== null && _a !== void 0 ? _a : "";
        message.grantee = (_b = object.grantee) !== null && _b !== void 0 ? _b : "";
        message.msg_type_url = (_c = object.msg_type_url) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgRevokeResponse() {
    return {};
}
exports.MsgRevokeResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRevokeResponse();
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
        var message = createBaseMsgRevokeResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.authz.v1beta1.Msg";
        this.rpc = rpc;
        this.Grant = this.Grant.bind(this);
        this.Exec = this.Exec.bind(this);
        this.Revoke = this.Revoke.bind(this);
    }
    MsgClientImpl.prototype.Grant = function (request) {
        var data = exports.MsgGrant.encode(request).finish();
        var promise = this.rpc.request(this.service, "Grant", data);
        return promise.then(function (data) { return exports.MsgGrantResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.Exec = function (request) {
        var data = exports.MsgExec.encode(request).finish();
        var promise = this.rpc.request(this.service, "Exec", data);
        return promise.then(function (data) { return exports.MsgExecResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.Revoke = function (request) {
        var data = exports.MsgRevoke.encode(request).finish();
        var promise = this.rpc.request(this.service, "Revoke", data);
        return promise.then(function (data) { return exports.MsgRevokeResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map