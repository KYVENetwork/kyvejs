"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.Funder = exports.UpgradePlan = exports.Protocol = exports.poolStatusToJSON = exports.poolStatusFromJSON = exports.PoolStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.pool.v1beta1";
/** PoolStatus ... */
var PoolStatus;
(function (PoolStatus) {
    /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
    PoolStatus[PoolStatus["POOL_STATUS_UNSPECIFIED"] = 0] = "POOL_STATUS_UNSPECIFIED";
    /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
    PoolStatus[PoolStatus["POOL_STATUS_ACTIVE"] = 1] = "POOL_STATUS_ACTIVE";
    /** POOL_STATUS_PAUSED - POOL_STATUS_PAUSED ... */
    PoolStatus[PoolStatus["POOL_STATUS_PAUSED"] = 2] = "POOL_STATUS_PAUSED";
    /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
    PoolStatus[PoolStatus["POOL_STATUS_NO_FUNDS"] = 3] = "POOL_STATUS_NO_FUNDS";
    /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
    PoolStatus[PoolStatus["POOL_STATUS_NOT_ENOUGH_DELEGATION"] = 4] = "POOL_STATUS_NOT_ENOUGH_DELEGATION";
    /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
    PoolStatus[PoolStatus["POOL_STATUS_UPGRADING"] = 5] = "POOL_STATUS_UPGRADING";
    PoolStatus[PoolStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PoolStatus = exports.PoolStatus || (exports.PoolStatus = {}));
function poolStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "POOL_STATUS_UNSPECIFIED":
            return PoolStatus.POOL_STATUS_UNSPECIFIED;
        case 1:
        case "POOL_STATUS_ACTIVE":
            return PoolStatus.POOL_STATUS_ACTIVE;
        case 2:
        case "POOL_STATUS_PAUSED":
            return PoolStatus.POOL_STATUS_PAUSED;
        case 3:
        case "POOL_STATUS_NO_FUNDS":
            return PoolStatus.POOL_STATUS_NO_FUNDS;
        case 4:
        case "POOL_STATUS_NOT_ENOUGH_DELEGATION":
            return PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION;
        case 5:
        case "POOL_STATUS_UPGRADING":
            return PoolStatus.POOL_STATUS_UPGRADING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PoolStatus.UNRECOGNIZED;
    }
}
exports.poolStatusFromJSON = poolStatusFromJSON;
function poolStatusToJSON(object) {
    switch (object) {
        case PoolStatus.POOL_STATUS_UNSPECIFIED:
            return "POOL_STATUS_UNSPECIFIED";
        case PoolStatus.POOL_STATUS_ACTIVE:
            return "POOL_STATUS_ACTIVE";
        case PoolStatus.POOL_STATUS_PAUSED:
            return "POOL_STATUS_PAUSED";
        case PoolStatus.POOL_STATUS_NO_FUNDS:
            return "POOL_STATUS_NO_FUNDS";
        case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
            return "POOL_STATUS_NOT_ENOUGH_DELEGATION";
        case PoolStatus.POOL_STATUS_UPGRADING:
            return "POOL_STATUS_UPGRADING";
        case PoolStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.poolStatusToJSON = poolStatusToJSON;
function createBaseProtocol() {
    return { version: "", binaries: "", last_upgrade: "0" };
}
exports.Protocol = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.binaries !== "") {
            writer.uint32(18).string(message.binaries);
        }
        if (message.last_upgrade !== "0") {
            writer.uint32(24).uint64(message.last_upgrade);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProtocol();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.binaries = reader.string();
                    break;
                case 3:
                    message.last_upgrade = longToString(reader.uint64());
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
            version: isSet(object.version) ? String(object.version) : "",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
            last_upgrade: isSet(object.last_upgrade) ? String(object.last_upgrade) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.last_upgrade !== undefined && (obj.last_upgrade = message.last_upgrade);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProtocol();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.last_upgrade = (_c = object.last_upgrade) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseUpgradePlan() {
    return { version: "", binaries: "", scheduled_at: "0", duration: "0" };
}
exports.UpgradePlan = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.binaries !== "") {
            writer.uint32(18).string(message.binaries);
        }
        if (message.scheduled_at !== "0") {
            writer.uint32(24).uint64(message.scheduled_at);
        }
        if (message.duration !== "0") {
            writer.uint32(32).uint64(message.duration);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpgradePlan();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.binaries = reader.string();
                    break;
                case 3:
                    message.scheduled_at = longToString(reader.uint64());
                    break;
                case 4:
                    message.duration = longToString(reader.uint64());
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
            version: isSet(object.version) ? String(object.version) : "",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
            scheduled_at: isSet(object.scheduled_at) ? String(object.scheduled_at) : "0",
            duration: isSet(object.duration) ? String(object.duration) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.scheduled_at !== undefined && (obj.scheduled_at = message.scheduled_at);
        message.duration !== undefined && (obj.duration = message.duration);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUpgradePlan();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.scheduled_at = (_c = object.scheduled_at) !== null && _c !== void 0 ? _c : "0";
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseFunder() {
    return { address: "", amount: "0" };
}
exports.Funder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.amount !== "0") {
            writer.uint32(16).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFunder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.amount = longToString(reader.uint64());
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
            address: isSet(object.address) ? String(object.address) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFunder();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBasePool() {
    return {
        id: "0",
        name: "",
        runtime: "",
        logo: "",
        config: "",
        start_key: "",
        current_key: "",
        current_summary: "",
        current_index: "0",
        total_bundles: "0",
        upload_interval: "0",
        operating_cost: "0",
        min_delegation: "0",
        max_bundle_size: "0",
        paused: false,
        funders: [],
        total_funds: "0",
        protocol: undefined,
        upgrade_plan: undefined,
        current_storage_provider_id: 0,
        current_compression_id: 0,
    };
}
exports.Pool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        if (message.logo !== "") {
            writer.uint32(34).string(message.logo);
        }
        if (message.config !== "") {
            writer.uint32(42).string(message.config);
        }
        if (message.start_key !== "") {
            writer.uint32(50).string(message.start_key);
        }
        if (message.current_key !== "") {
            writer.uint32(58).string(message.current_key);
        }
        if (message.current_summary !== "") {
            writer.uint32(66).string(message.current_summary);
        }
        if (message.current_index !== "0") {
            writer.uint32(72).uint64(message.current_index);
        }
        if (message.total_bundles !== "0") {
            writer.uint32(80).uint64(message.total_bundles);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(88).uint64(message.upload_interval);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(96).uint64(message.operating_cost);
        }
        if (message.min_delegation !== "0") {
            writer.uint32(104).uint64(message.min_delegation);
        }
        if (message.max_bundle_size !== "0") {
            writer.uint32(112).uint64(message.max_bundle_size);
        }
        if (message.paused === true) {
            writer.uint32(120).bool(message.paused);
        }
        for (var _i = 0, _a = message.funders; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Funder.encode(v, writer.uint32(130).fork()).ldelim();
        }
        if (message.total_funds !== "0") {
            writer.uint32(136).uint64(message.total_funds);
        }
        if (message.protocol !== undefined) {
            exports.Protocol.encode(message.protocol, writer.uint32(146).fork()).ldelim();
        }
        if (message.upgrade_plan !== undefined) {
            exports.UpgradePlan.encode(message.upgrade_plan, writer.uint32(154).fork()).ldelim();
        }
        if (message.current_storage_provider_id !== 0) {
            writer.uint32(160).uint32(message.current_storage_provider_id);
        }
        if (message.current_compression_id !== 0) {
            writer.uint32(168).uint32(message.current_compression_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
                    break;
                case 5:
                    message.config = reader.string();
                    break;
                case 6:
                    message.start_key = reader.string();
                    break;
                case 7:
                    message.current_key = reader.string();
                    break;
                case 8:
                    message.current_summary = reader.string();
                    break;
                case 9:
                    message.current_index = longToString(reader.uint64());
                    break;
                case 10:
                    message.total_bundles = longToString(reader.uint64());
                    break;
                case 11:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 12:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 13:
                    message.min_delegation = longToString(reader.uint64());
                    break;
                case 14:
                    message.max_bundle_size = longToString(reader.uint64());
                    break;
                case 15:
                    message.paused = reader.bool();
                    break;
                case 16:
                    message.funders.push(exports.Funder.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.total_funds = longToString(reader.uint64());
                    break;
                case 18:
                    message.protocol = exports.Protocol.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.upgrade_plan = exports.UpgradePlan.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.current_storage_provider_id = reader.uint32();
                    break;
                case 21:
                    message.current_compression_id = reader.uint32();
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
            id: isSet(object.id) ? String(object.id) : "0",
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            config: isSet(object.config) ? String(object.config) : "",
            start_key: isSet(object.start_key) ? String(object.start_key) : "",
            current_key: isSet(object.current_key) ? String(object.current_key) : "",
            current_summary: isSet(object.current_summary) ? String(object.current_summary) : "",
            current_index: isSet(object.current_index) ? String(object.current_index) : "0",
            total_bundles: isSet(object.total_bundles) ? String(object.total_bundles) : "0",
            upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
            operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
            min_delegation: isSet(object.min_delegation) ? String(object.min_delegation) : "0",
            max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
            paused: isSet(object.paused) ? Boolean(object.paused) : false,
            funders: Array.isArray(object === null || object === void 0 ? void 0 : object.funders) ? object.funders.map(function (e) { return exports.Funder.fromJSON(e); }) : [],
            total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
            protocol: isSet(object.protocol) ? exports.Protocol.fromJSON(object.protocol) : undefined,
            upgrade_plan: isSet(object.upgrade_plan) ? exports.UpgradePlan.fromJSON(object.upgrade_plan) : undefined,
            current_storage_provider_id: isSet(object.current_storage_provider_id)
                ? Number(object.current_storage_provider_id)
                : 0,
            current_compression_id: isSet(object.current_compression_id) ? Number(object.current_compression_id) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.config !== undefined && (obj.config = message.config);
        message.start_key !== undefined && (obj.start_key = message.start_key);
        message.current_key !== undefined && (obj.current_key = message.current_key);
        message.current_summary !== undefined && (obj.current_summary = message.current_summary);
        message.current_index !== undefined && (obj.current_index = message.current_index);
        message.total_bundles !== undefined && (obj.total_bundles = message.total_bundles);
        message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
        message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
        message.min_delegation !== undefined && (obj.min_delegation = message.min_delegation);
        message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
        message.paused !== undefined && (obj.paused = message.paused);
        if (message.funders) {
            obj.funders = message.funders.map(function (e) { return e ? exports.Funder.toJSON(e) : undefined; });
        }
        else {
            obj.funders = [];
        }
        message.total_funds !== undefined && (obj.total_funds = message.total_funds);
        message.protocol !== undefined && (obj.protocol = message.protocol ? exports.Protocol.toJSON(message.protocol) : undefined);
        message.upgrade_plan !== undefined &&
            (obj.upgrade_plan = message.upgrade_plan ? exports.UpgradePlan.toJSON(message.upgrade_plan) : undefined);
        message.current_storage_provider_id !== undefined &&
            (obj.current_storage_provider_id = Math.round(message.current_storage_provider_id));
        message.current_compression_id !== undefined &&
            (obj.current_compression_id = Math.round(message.current_compression_id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        var message = createBasePool();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        message.config = (_e = object.config) !== null && _e !== void 0 ? _e : "";
        message.start_key = (_f = object.start_key) !== null && _f !== void 0 ? _f : "";
        message.current_key = (_g = object.current_key) !== null && _g !== void 0 ? _g : "";
        message.current_summary = (_h = object.current_summary) !== null && _h !== void 0 ? _h : "";
        message.current_index = (_j = object.current_index) !== null && _j !== void 0 ? _j : "0";
        message.total_bundles = (_k = object.total_bundles) !== null && _k !== void 0 ? _k : "0";
        message.upload_interval = (_l = object.upload_interval) !== null && _l !== void 0 ? _l : "0";
        message.operating_cost = (_m = object.operating_cost) !== null && _m !== void 0 ? _m : "0";
        message.min_delegation = (_o = object.min_delegation) !== null && _o !== void 0 ? _o : "0";
        message.max_bundle_size = (_p = object.max_bundle_size) !== null && _p !== void 0 ? _p : "0";
        message.paused = (_q = object.paused) !== null && _q !== void 0 ? _q : false;
        message.funders = ((_r = object.funders) === null || _r === void 0 ? void 0 : _r.map(function (e) { return exports.Funder.fromPartial(e); })) || [];
        message.total_funds = (_s = object.total_funds) !== null && _s !== void 0 ? _s : "0";
        message.protocol = (object.protocol !== undefined && object.protocol !== null)
            ? exports.Protocol.fromPartial(object.protocol)
            : undefined;
        message.upgrade_plan = (object.upgrade_plan !== undefined && object.upgrade_plan !== null)
            ? exports.UpgradePlan.fromPartial(object.upgrade_plan)
            : undefined;
        message.current_storage_provider_id = (_t = object.current_storage_provider_id) !== null && _t !== void 0 ? _t : 0;
        message.current_compression_id = (_u = object.current_compression_id) !== null && _u !== void 0 ? _u : 0;
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
//# sourceMappingURL=pool.js.map