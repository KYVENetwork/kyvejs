"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotSchema = exports.SnapshotKVItem = exports.SnapshotExtensionPayload = exports.SnapshotExtensionMeta = exports.SnapshotIAVLItem = exports.SnapshotStoreItem = exports.SnapshotItem = exports.Metadata = exports.Snapshot = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.snapshots.v1beta1";
function createBaseSnapshot() {
    return { height: "0", format: 0, chunks: 0, hash: new Uint8Array(), metadata: undefined };
}
exports.Snapshot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSnapshot();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.chunks = (_c = object.chunks) !== null && _c !== void 0 ? _c : 0;
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exports.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return { chunk_hashes: [] };
}
exports.Metadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.chunk_hashes; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk_hashes.push(reader.bytes());
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
            chunk_hashes: Array.isArray(object === null || object === void 0 ? void 0 : object.chunk_hashes) ? object.chunk_hashes.map(function (e) { return bytesFromBase64(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.chunk_hashes) {
            obj.chunk_hashes = message.chunk_hashes.map(function (e) { return base64FromBytes(e !== undefined ? e : new Uint8Array()); });
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMetadata();
        message.chunk_hashes = ((_a = object.chunk_hashes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extension_payload: undefined,
        kv: undefined,
        schema: undefined,
    };
}
exports.SnapshotItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.store !== undefined) {
            exports.SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            exports.SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            exports.SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extension_payload !== undefined) {
            exports.SnapshotExtensionPayload.encode(message.extension_payload, writer.uint32(34).fork()).ldelim();
        }
        if (message.kv !== undefined) {
            exports.SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            exports.SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = exports.SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = exports.SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = exports.SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extension_payload = exports.SnapshotExtensionPayload.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.kv = exports.SnapshotKVItem.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.schema = exports.SnapshotSchema.decode(reader, reader.uint32());
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
            store: isSet(object.store) ? exports.SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: isSet(object.iavl) ? exports.SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: isSet(object.extension) ? exports.SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extension_payload: isSet(object.extension_payload)
                ? exports.SnapshotExtensionPayload.fromJSON(object.extension_payload)
                : undefined,
            kv: isSet(object.kv) ? exports.SnapshotKVItem.fromJSON(object.kv) : undefined,
            schema: isSet(object.schema) ? exports.SnapshotSchema.fromJSON(object.schema) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.store !== undefined && (obj.store = message.store ? exports.SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined &&
            (obj.extension = message.extension ? exports.SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extension_payload !== undefined && (obj.extension_payload = message.extension_payload
            ? exports.SnapshotExtensionPayload.toJSON(message.extension_payload)
            : undefined);
        message.kv !== undefined && (obj.kv = message.kv ? exports.SnapshotKVItem.toJSON(message.kv) : undefined);
        message.schema !== undefined && (obj.schema = message.schema ? exports.SnapshotSchema.toJSON(message.schema) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSnapshotItem();
        message.store = (object.store !== undefined && object.store !== null)
            ? exports.SnapshotStoreItem.fromPartial(object.store)
            : undefined;
        message.iavl = (object.iavl !== undefined && object.iavl !== null)
            ? exports.SnapshotIAVLItem.fromPartial(object.iavl)
            : undefined;
        message.extension = (object.extension !== undefined && object.extension !== null)
            ? exports.SnapshotExtensionMeta.fromPartial(object.extension)
            : undefined;
        message.extension_payload = (object.extension_payload !== undefined && object.extension_payload !== null)
            ? exports.SnapshotExtensionPayload.fromPartial(object.extension_payload)
            : undefined;
        message.kv = (object.kv !== undefined && object.kv !== null) ? exports.SnapshotKVItem.fromPartial(object.kv) : undefined;
        message.schema = (object.schema !== undefined && object.schema !== null)
            ? exports.SnapshotSchema.fromPartial(object.schema)
            : undefined;
        return message;
    },
};
function createBaseSnapshotStoreItem() {
    return { name: "" };
}
exports.SnapshotStoreItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSnapshotStoreItem();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSnapshotIAVLItem() {
    return { key: new Uint8Array(), value: new Uint8Array(), version: "0", height: 0 };
}
exports.SnapshotIAVLItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.version !== "0") {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = longToString(reader.int64());
                    break;
                case 4:
                    message.height = reader.int32();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            version: isSet(object.version) ? String(object.version) : "0",
            height: isSet(object.height) ? Number(object.height) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.version !== undefined && (obj.version = message.version);
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSnapshotIAVLItem();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "0";
        message.height = (_d = object.height) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseSnapshotExtensionMeta() {
    return { name: "", format: 0 };
}
exports.SnapshotExtensionMeta = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
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
            format: isSet(object.format) ? Number(object.format) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.format !== undefined && (obj.format = Math.round(message.format));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSnapshotExtensionMeta();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSnapshotExtensionPayload() {
    return { payload: new Uint8Array() };
}
exports.SnapshotExtensionPayload = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array() };
    },
    toJSON: function (message) {
        var obj = {};
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSnapshotExtensionPayload();
        message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseSnapshotKVItem() {
    return { key: new Uint8Array(), value: new Uint8Array() };
}
exports.SnapshotKVItem = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotKVItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSnapshotKVItem();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseSnapshotSchema() {
    return { keys: [] };
}
exports.SnapshotSchema = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.keys; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshotSchema();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map(function (e) { return bytesFromBase64(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.keys) {
            obj.keys = message.keys.map(function (e) { return base64FromBytes(e !== undefined ? e : new Uint8Array()); });
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSnapshotSchema();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
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
//# sourceMappingURL=snapshot.js.map