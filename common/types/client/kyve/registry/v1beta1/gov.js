"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelPoolUpgradeProposal = exports.SchedulePoolUpgradeProposal = exports.UnpausePoolProposal = exports.PausePoolProposal = exports.UpdatePoolProposal = exports.CreatePoolProposal = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseCreatePoolProposal() {
    return {
        title: "",
        description: "",
        name: "",
        runtime: "",
        logo: "",
        config: "",
        start_key: "",
        upload_interval: "0",
        operating_cost: "0",
        min_delegation: "0",
        max_bundle_size: "0",
        version: "",
        binaries: "",
    };
}
exports.CreatePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.runtime !== "") {
            writer.uint32(34).string(message.runtime);
        }
        if (message.logo !== "") {
            writer.uint32(42).string(message.logo);
        }
        if (message.config !== "") {
            writer.uint32(50).string(message.config);
        }
        if (message.start_key !== "") {
            writer.uint32(58).string(message.start_key);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(64).uint64(message.upload_interval);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(72).uint64(message.operating_cost);
        }
        if (message.min_delegation !== "0") {
            writer.uint32(80).uint64(message.min_delegation);
        }
        if (message.max_bundle_size !== "0") {
            writer.uint32(88).uint64(message.max_bundle_size);
        }
        if (message.version !== "") {
            writer.uint32(98).string(message.version);
        }
        if (message.binaries !== "") {
            writer.uint32(106).string(message.binaries);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreatePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.runtime = reader.string();
                    break;
                case 5:
                    message.logo = reader.string();
                    break;
                case 6:
                    message.config = reader.string();
                    break;
                case 7:
                    message.start_key = reader.string();
                    break;
                case 8:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 9:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 10:
                    message.min_delegation = longToString(reader.uint64());
                    break;
                case 11:
                    message.max_bundle_size = longToString(reader.uint64());
                    break;
                case 12:
                    message.version = reader.string();
                    break;
                case 13:
                    message.binaries = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            config: isSet(object.config) ? String(object.config) : "",
            start_key: isSet(object.start_key) ? String(object.start_key) : "",
            upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
            operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
            min_delegation: isSet(object.min_delegation) ? String(object.min_delegation) : "0",
            max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
            version: isSet(object.version) ? String(object.version) : "",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.config !== undefined && (obj.config = message.config);
        message.start_key !== undefined && (obj.start_key = message.start_key);
        message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
        message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
        message.min_delegation !== undefined && (obj.min_delegation = message.min_delegation);
        message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseCreatePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.runtime = (_d = object.runtime) !== null && _d !== void 0 ? _d : "";
        message.logo = (_e = object.logo) !== null && _e !== void 0 ? _e : "";
        message.config = (_f = object.config) !== null && _f !== void 0 ? _f : "";
        message.start_key = (_g = object.start_key) !== null && _g !== void 0 ? _g : "";
        message.upload_interval = (_h = object.upload_interval) !== null && _h !== void 0 ? _h : "0";
        message.operating_cost = (_j = object.operating_cost) !== null && _j !== void 0 ? _j : "0";
        message.min_delegation = (_k = object.min_delegation) !== null && _k !== void 0 ? _k : "0";
        message.max_bundle_size = (_l = object.max_bundle_size) !== null && _l !== void 0 ? _l : "0";
        message.version = (_m = object.version) !== null && _m !== void 0 ? _m : "";
        message.binaries = (_o = object.binaries) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseUpdatePoolProposal() {
    return { title: "", description: "", id: "0", payload: "" };
}
exports.UpdatePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        if (message.payload !== "") {
            writer.uint32(34).string(message.payload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdatePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.id = longToString(reader.uint64());
                    break;
                case 4:
                    message.payload = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            payload: isSet(object.payload) ? String(object.payload) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUpdatePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "0";
        message.payload = (_d = object.payload) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBasePausePoolProposal() {
    return { title: "", description: "", id: "0" };
}
exports.PausePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePausePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.id = longToString(reader.uint64());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            id: isSet(object.id) ? String(object.id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePausePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseUnpausePoolProposal() {
    return { title: "", description: "", id: "0" };
}
exports.UnpausePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnpausePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.id = longToString(reader.uint64());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            id: isSet(object.id) ? String(object.id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUnpausePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseSchedulePoolUpgradeProposal() {
    return { title: "", description: "", runtime: "", version: "", scheduled_at: "0", duration: "0", binaries: "" };
}
exports.SchedulePoolUpgradeProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        if (message.version !== "") {
            writer.uint32(34).string(message.version);
        }
        if (message.scheduled_at !== "0") {
            writer.uint32(40).uint64(message.scheduled_at);
        }
        if (message.duration !== "0") {
            writer.uint32(48).uint64(message.duration);
        }
        if (message.binaries !== "") {
            writer.uint32(58).string(message.binaries);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSchedulePoolUpgradeProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
                    break;
                case 4:
                    message.version = reader.string();
                    break;
                case 5:
                    message.scheduled_at = longToString(reader.uint64());
                    break;
                case 6:
                    message.duration = longToString(reader.uint64());
                    break;
                case 7:
                    message.binaries = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            version: isSet(object.version) ? String(object.version) : "",
            scheduled_at: isSet(object.scheduled_at) ? String(object.scheduled_at) : "0",
            duration: isSet(object.duration) ? String(object.duration) : "0",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.version !== undefined && (obj.version = message.version);
        message.scheduled_at !== undefined && (obj.scheduled_at = message.scheduled_at);
        message.duration !== undefined && (obj.duration = message.duration);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseSchedulePoolUpgradeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.scheduled_at = (_e = object.scheduled_at) !== null && _e !== void 0 ? _e : "0";
        message.duration = (_f = object.duration) !== null && _f !== void 0 ? _f : "0";
        message.binaries = (_g = object.binaries) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseCancelPoolUpgradeProposal() {
    return { title: "", description: "", runtime: "" };
}
exports.CancelPoolUpgradeProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCancelPoolUpgradeProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCancelPoolUpgradeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
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
//# sourceMappingURL=gov.js.map