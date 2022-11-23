"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitID = exports.StoreInfo = exports.CommitInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.store.v1beta1";
function createBaseCommitInfo() {
    return { version: "0", store_infos: [] };
}
exports.CommitInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== "0") {
            writer.uint32(8).int64(message.version);
        }
        for (var _i = 0, _a = message.store_infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = longToString(reader.int64());
                    break;
                case 2:
                    message.store_infos.push(exports.StoreInfo.decode(reader, reader.uint32()));
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
            version: isSet(object.version) ? String(object.version) : "0",
            store_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.store_infos) ? object.store_infos.map(function (e) { return exports.StoreInfo.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map(function (e) { return e ? exports.StoreInfo.toJSON(e) : undefined; });
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCommitInfo();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "0";
        message.store_infos = ((_b = object.store_infos) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.StoreInfo.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseStoreInfo() {
    return { name: "", commit_id: undefined };
}
exports.StoreInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commit_id !== undefined) {
            exports.CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStoreInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commit_id = exports.CommitID.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            commit_id: isSet(object.commit_id) ? exports.CommitID.fromJSON(object.commit_id) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commit_id !== undefined &&
            (obj.commit_id = message.commit_id ? exports.CommitID.toJSON(message.commit_id) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStoreInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.commit_id = (object.commit_id !== undefined && object.commit_id !== null)
            ? exports.CommitID.fromPartial(object.commit_id)
            : undefined;
        return message;
    },
};
function createBaseCommitID() {
    return { version: "0", hash: new Uint8Array() };
}
exports.CommitID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== "0") {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitID();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = longToString(reader.int64());
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            version: isSet(object.version) ? String(object.version) : "0",
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCommitID();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "0";
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
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
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=commit_info.js.map