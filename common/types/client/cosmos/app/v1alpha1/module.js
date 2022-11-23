"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateFromInfo = exports.PackageReference = exports.ModuleDescriptor = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.app.v1alpha1";
function createBaseModuleDescriptor() {
    return { go_import: "", use_package: [], can_migrate_from: [] };
}
exports.ModuleDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.go_import !== "") {
            writer.uint32(10).string(message.go_import);
        }
        for (var _i = 0, _a = message.use_package; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.can_migrate_from; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.go_import = reader.string();
                    break;
                case 2:
                    message.use_package.push(exports.PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.can_migrate_from.push(exports.MigrateFromInfo.decode(reader, reader.uint32()));
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
            go_import: isSet(object.go_import) ? String(object.go_import) : "",
            use_package: Array.isArray(object === null || object === void 0 ? void 0 : object.use_package)
                ? object.use_package.map(function (e) { return exports.PackageReference.fromJSON(e); })
                : [],
            can_migrate_from: Array.isArray(object === null || object === void 0 ? void 0 : object.can_migrate_from)
                ? object.can_migrate_from.map(function (e) { return exports.MigrateFromInfo.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.go_import !== undefined && (obj.go_import = message.go_import);
        if (message.use_package) {
            obj.use_package = message.use_package.map(function (e) { return e ? exports.PackageReference.toJSON(e) : undefined; });
        }
        else {
            obj.use_package = [];
        }
        if (message.can_migrate_from) {
            obj.can_migrate_from = message.can_migrate_from.map(function (e) { return e ? exports.MigrateFromInfo.toJSON(e) : undefined; });
        }
        else {
            obj.can_migrate_from = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseModuleDescriptor();
        message.go_import = (_a = object.go_import) !== null && _a !== void 0 ? _a : "";
        message.use_package = ((_b = object.use_package) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PackageReference.fromPartial(e); })) || [];
        message.can_migrate_from = ((_c = object.can_migrate_from) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.MigrateFromInfo.fromPartial(e); })) || [];
        return message;
    },
};
function createBasePackageReference() {
    return { name: "", revision: 0 };
}
exports.PackageReference = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePackageReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
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
            revision: isSet(object.revision) ? Number(object.revision) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePackageReference();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.revision = (_b = object.revision) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseMigrateFromInfo() {
    return { module: "" };
}
exports.MigrateFromInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { module: isSet(object.module) ? String(object.module) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.module !== undefined && (obj.module = message.module);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMigrateFromInfo();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=module.js.map