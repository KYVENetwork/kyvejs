"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleSchemaDescriptor_FileEntry = exports.ModuleSchemaDescriptor = exports.storageTypeToJSON = exports.storageTypeFromJSON = exports.StorageType = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.orm.v1alpha1";
/** StorageType */
var StorageType;
(function (StorageType) {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
     * KV-storage where primary key entries are stored in merkle-tree
     * backed commitment storage and indexes and seqs are stored in
     * fast index storage. Note that the Cosmos SDK before store/v2alpha1
     * does not support this.
     */
    StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
    /**
     * STORAGE_TYPE_INDEX - STORAGE_TYPE_INDEX indicates persistent storage which is not backed
     * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
     * before store/v2alpha1 does not support this.
     */
    StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
    /**
     * STORAGE_TYPE_COMMITMENT - STORAGE_TYPE_INDEX indicates persistent storage which is backed by
     * a merkle-tree. With this type of storage, both primary and index keys
     * will affect the app hash and this is generally less efficient
     * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
     * keys into index storage. Note that modules built with the
     * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
     * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
     * because this is the only type of persistent storage available.
     */
    StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
    StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
function storageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
            return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
        case 1:
        case "STORAGE_TYPE_MEMORY":
            return StorageType.STORAGE_TYPE_MEMORY;
        case 2:
        case "STORAGE_TYPE_TRANSIENT":
            return StorageType.STORAGE_TYPE_TRANSIENT;
        case 3:
        case "STORAGE_TYPE_INDEX":
            return StorageType.STORAGE_TYPE_INDEX;
        case 4:
        case "STORAGE_TYPE_COMMITMENT":
            return StorageType.STORAGE_TYPE_COMMITMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StorageType.UNRECOGNIZED;
    }
}
exports.storageTypeFromJSON = storageTypeFromJSON;
function storageTypeToJSON(object) {
    switch (object) {
        case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
            return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
        case StorageType.STORAGE_TYPE_MEMORY:
            return "STORAGE_TYPE_MEMORY";
        case StorageType.STORAGE_TYPE_TRANSIENT:
            return "STORAGE_TYPE_TRANSIENT";
        case StorageType.STORAGE_TYPE_INDEX:
            return "STORAGE_TYPE_INDEX";
        case StorageType.STORAGE_TYPE_COMMITMENT:
            return "STORAGE_TYPE_COMMITMENT";
        case StorageType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.storageTypeToJSON = storageTypeToJSON;
function createBaseModuleSchemaDescriptor() {
    return { schema_file: [], prefix: new Uint8Array() };
}
exports.ModuleSchemaDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.schema_file; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleSchemaDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schema_file.push(exports.ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.prefix = reader.bytes();
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
            schema_file: Array.isArray(object === null || object === void 0 ? void 0 : object.schema_file)
                ? object.schema_file.map(function (e) { return exports.ModuleSchemaDescriptor_FileEntry.fromJSON(e); })
                : [],
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.schema_file) {
            obj.schema_file = message.schema_file.map(function (e) { return e ? exports.ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined; });
        }
        else {
            obj.schema_file = [];
        }
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseModuleSchemaDescriptor();
        message.schema_file = ((_a = object.schema_file) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ModuleSchemaDescriptor_FileEntry.fromPartial(e); })) || [];
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseModuleSchemaDescriptor_FileEntry() {
    return { id: 0, proto_file_name: "", storage_type: 0 };
}
exports.ModuleSchemaDescriptor_FileEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.proto_file_name !== "") {
            writer.uint32(18).string(message.proto_file_name);
        }
        if (message.storage_type !== 0) {
            writer.uint32(24).int32(message.storage_type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleSchemaDescriptor_FileEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.proto_file_name = reader.string();
                    break;
                case 3:
                    message.storage_type = reader.int32();
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
            id: isSet(object.id) ? Number(object.id) : 0,
            proto_file_name: isSet(object.proto_file_name) ? String(object.proto_file_name) : "",
            storage_type: isSet(object.storage_type) ? storageTypeFromJSON(object.storage_type) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.proto_file_name !== undefined && (obj.proto_file_name = message.proto_file_name);
        message.storage_type !== undefined && (obj.storage_type = storageTypeToJSON(message.storage_type));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseModuleSchemaDescriptor_FileEntry();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.proto_file_name = (_b = object.proto_file_name) !== null && _b !== void 0 ? _b : "";
        message.storage_type = (_c = object.storage_type) !== null && _c !== void 0 ? _c : 0;
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=schema.js.map