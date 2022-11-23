"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalizedBundle = exports.BundleProposal = exports.bundleStatusToJSON = exports.bundleStatusFromJSON = exports.BundleStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.bundles.v1beta1";
/** BundleStatus ... */
var BundleStatus;
(function (BundleStatus) {
    /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
    BundleStatus[BundleStatus["BUNDLE_STATUS_UNSPECIFIED"] = 0] = "BUNDLE_STATUS_UNSPECIFIED";
    /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
    BundleStatus[BundleStatus["BUNDLE_STATUS_VALID"] = 1] = "BUNDLE_STATUS_VALID";
    /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
    BundleStatus[BundleStatus["BUNDLE_STATUS_INVALID"] = 2] = "BUNDLE_STATUS_INVALID";
    /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
    BundleStatus[BundleStatus["BUNDLE_STATUS_NO_FUNDS"] = 3] = "BUNDLE_STATUS_NO_FUNDS";
    /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
    BundleStatus[BundleStatus["BUNDLE_STATUS_NO_QUORUM"] = 4] = "BUNDLE_STATUS_NO_QUORUM";
    BundleStatus[BundleStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BundleStatus = exports.BundleStatus || (exports.BundleStatus = {}));
function bundleStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BUNDLE_STATUS_UNSPECIFIED":
            return BundleStatus.BUNDLE_STATUS_UNSPECIFIED;
        case 1:
        case "BUNDLE_STATUS_VALID":
            return BundleStatus.BUNDLE_STATUS_VALID;
        case 2:
        case "BUNDLE_STATUS_INVALID":
            return BundleStatus.BUNDLE_STATUS_INVALID;
        case 3:
        case "BUNDLE_STATUS_NO_FUNDS":
            return BundleStatus.BUNDLE_STATUS_NO_FUNDS;
        case 4:
        case "BUNDLE_STATUS_NO_QUORUM":
            return BundleStatus.BUNDLE_STATUS_NO_QUORUM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BundleStatus.UNRECOGNIZED;
    }
}
exports.bundleStatusFromJSON = bundleStatusFromJSON;
function bundleStatusToJSON(object) {
    switch (object) {
        case BundleStatus.BUNDLE_STATUS_UNSPECIFIED:
            return "BUNDLE_STATUS_UNSPECIFIED";
        case BundleStatus.BUNDLE_STATUS_VALID:
            return "BUNDLE_STATUS_VALID";
        case BundleStatus.BUNDLE_STATUS_INVALID:
            return "BUNDLE_STATUS_INVALID";
        case BundleStatus.BUNDLE_STATUS_NO_FUNDS:
            return "BUNDLE_STATUS_NO_FUNDS";
        case BundleStatus.BUNDLE_STATUS_NO_QUORUM:
            return "BUNDLE_STATUS_NO_QUORUM";
        case BundleStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.bundleStatusToJSON = bundleStatusToJSON;
function createBaseBundleProposal() {
    return {
        pool_id: "0",
        storage_id: "",
        uploader: "",
        next_uploader: "",
        data_size: "0",
        bundle_size: "0",
        to_key: "",
        bundle_summary: "",
        data_hash: "",
        updated_at: "0",
        voters_valid: [],
        voters_invalid: [],
        voters_abstain: [],
        from_key: "",
        storage_provider_id: 0,
        compression_id: 0,
    };
}
exports.BundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.storage_id !== "") {
            writer.uint32(18).string(message.storage_id);
        }
        if (message.uploader !== "") {
            writer.uint32(26).string(message.uploader);
        }
        if (message.next_uploader !== "") {
            writer.uint32(34).string(message.next_uploader);
        }
        if (message.data_size !== "0") {
            writer.uint32(40).uint64(message.data_size);
        }
        if (message.bundle_size !== "0") {
            writer.uint32(48).uint64(message.bundle_size);
        }
        if (message.to_key !== "") {
            writer.uint32(58).string(message.to_key);
        }
        if (message.bundle_summary !== "") {
            writer.uint32(66).string(message.bundle_summary);
        }
        if (message.data_hash !== "") {
            writer.uint32(74).string(message.data_hash);
        }
        if (message.updated_at !== "0") {
            writer.uint32(80).uint64(message.updated_at);
        }
        for (var _i = 0, _a = message.voters_valid; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(90).string(v);
        }
        for (var _b = 0, _c = message.voters_invalid; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(98).string(v);
        }
        for (var _d = 0, _e = message.voters_abstain; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(106).string(v);
        }
        if (message.from_key !== "") {
            writer.uint32(114).string(message.from_key);
        }
        if (message.storage_provider_id !== 0) {
            writer.uint32(120).uint32(message.storage_provider_id);
        }
        if (message.compression_id !== 0) {
            writer.uint32(128).uint32(message.compression_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBundleProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.storage_id = reader.string();
                    break;
                case 3:
                    message.uploader = reader.string();
                    break;
                case 4:
                    message.next_uploader = reader.string();
                    break;
                case 5:
                    message.data_size = longToString(reader.uint64());
                    break;
                case 6:
                    message.bundle_size = longToString(reader.uint64());
                    break;
                case 7:
                    message.to_key = reader.string();
                    break;
                case 8:
                    message.bundle_summary = reader.string();
                    break;
                case 9:
                    message.data_hash = reader.string();
                    break;
                case 10:
                    message.updated_at = longToString(reader.uint64());
                    break;
                case 11:
                    message.voters_valid.push(reader.string());
                    break;
                case 12:
                    message.voters_invalid.push(reader.string());
                    break;
                case 13:
                    message.voters_abstain.push(reader.string());
                    break;
                case 14:
                    message.from_key = reader.string();
                    break;
                case 15:
                    message.storage_provider_id = reader.uint32();
                    break;
                case 16:
                    message.compression_id = reader.uint32();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            next_uploader: isSet(object.next_uploader) ? String(object.next_uploader) : "",
            data_size: isSet(object.data_size) ? String(object.data_size) : "0",
            bundle_size: isSet(object.bundle_size) ? String(object.bundle_size) : "0",
            to_key: isSet(object.to_key) ? String(object.to_key) : "",
            bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
            data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
            updated_at: isSet(object.updated_at) ? String(object.updated_at) : "0",
            voters_valid: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_valid) ? object.voters_valid.map(function (e) { return String(e); }) : [],
            voters_invalid: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_invalid) ? object.voters_invalid.map(function (e) { return String(e); }) : [],
            voters_abstain: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_abstain) ? object.voters_abstain.map(function (e) { return String(e); }) : [],
            from_key: isSet(object.from_key) ? String(object.from_key) : "",
            storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
            compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.next_uploader !== undefined && (obj.next_uploader = message.next_uploader);
        message.data_size !== undefined && (obj.data_size = message.data_size);
        message.bundle_size !== undefined && (obj.bundle_size = message.bundle_size);
        message.to_key !== undefined && (obj.to_key = message.to_key);
        message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
        message.data_hash !== undefined && (obj.data_hash = message.data_hash);
        message.updated_at !== undefined && (obj.updated_at = message.updated_at);
        if (message.voters_valid) {
            obj.voters_valid = message.voters_valid.map(function (e) { return e; });
        }
        else {
            obj.voters_valid = [];
        }
        if (message.voters_invalid) {
            obj.voters_invalid = message.voters_invalid.map(function (e) { return e; });
        }
        else {
            obj.voters_invalid = [];
        }
        if (message.voters_abstain) {
            obj.voters_abstain = message.voters_abstain.map(function (e) { return e; });
        }
        else {
            obj.voters_abstain = [];
        }
        message.from_key !== undefined && (obj.from_key = message.from_key);
        message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
        message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var message = createBaseBundleProposal();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.storage_id = (_b = object.storage_id) !== null && _b !== void 0 ? _b : "";
        message.uploader = (_c = object.uploader) !== null && _c !== void 0 ? _c : "";
        message.next_uploader = (_d = object.next_uploader) !== null && _d !== void 0 ? _d : "";
        message.data_size = (_e = object.data_size) !== null && _e !== void 0 ? _e : "0";
        message.bundle_size = (_f = object.bundle_size) !== null && _f !== void 0 ? _f : "0";
        message.to_key = (_g = object.to_key) !== null && _g !== void 0 ? _g : "";
        message.bundle_summary = (_h = object.bundle_summary) !== null && _h !== void 0 ? _h : "";
        message.data_hash = (_j = object.data_hash) !== null && _j !== void 0 ? _j : "";
        message.updated_at = (_k = object.updated_at) !== null && _k !== void 0 ? _k : "0";
        message.voters_valid = ((_l = object.voters_valid) === null || _l === void 0 ? void 0 : _l.map(function (e) { return e; })) || [];
        message.voters_invalid = ((_m = object.voters_invalid) === null || _m === void 0 ? void 0 : _m.map(function (e) { return e; })) || [];
        message.voters_abstain = ((_o = object.voters_abstain) === null || _o === void 0 ? void 0 : _o.map(function (e) { return e; })) || [];
        message.from_key = (_p = object.from_key) !== null && _p !== void 0 ? _p : "";
        message.storage_provider_id = (_q = object.storage_provider_id) !== null && _q !== void 0 ? _q : 0;
        message.compression_id = (_r = object.compression_id) !== null && _r !== void 0 ? _r : 0;
        return message;
    },
};
function createBaseFinalizedBundle() {
    return {
        pool_id: "0",
        id: "0",
        storage_id: "",
        uploader: "",
        from_index: "0",
        to_index: "0",
        to_key: "",
        bundle_summary: "",
        data_hash: "",
        finalized_at: "0",
        from_key: "",
        storage_provider_id: 0,
        compression_id: 0,
    };
}
exports.FinalizedBundle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        if (message.storage_id !== "") {
            writer.uint32(26).string(message.storage_id);
        }
        if (message.uploader !== "") {
            writer.uint32(34).string(message.uploader);
        }
        if (message.from_index !== "0") {
            writer.uint32(40).uint64(message.from_index);
        }
        if (message.to_index !== "0") {
            writer.uint32(48).uint64(message.to_index);
        }
        if (message.to_key !== "") {
            writer.uint32(58).string(message.to_key);
        }
        if (message.bundle_summary !== "") {
            writer.uint32(66).string(message.bundle_summary);
        }
        if (message.data_hash !== "") {
            writer.uint32(74).string(message.data_hash);
        }
        if (message.finalized_at !== "0") {
            writer.uint32(80).uint64(message.finalized_at);
        }
        if (message.from_key !== "") {
            writer.uint32(90).string(message.from_key);
        }
        if (message.storage_provider_id !== 0) {
            writer.uint32(96).uint32(message.storage_provider_id);
        }
        if (message.compression_id !== 0) {
            writer.uint32(104).uint32(message.compression_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFinalizedBundle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.storage_id = reader.string();
                    break;
                case 4:
                    message.uploader = reader.string();
                    break;
                case 5:
                    message.from_index = longToString(reader.uint64());
                    break;
                case 6:
                    message.to_index = longToString(reader.uint64());
                    break;
                case 7:
                    message.to_key = reader.string();
                    break;
                case 8:
                    message.bundle_summary = reader.string();
                    break;
                case 9:
                    message.data_hash = reader.string();
                    break;
                case 10:
                    message.finalized_at = longToString(reader.uint64());
                    break;
                case 11:
                    message.from_key = reader.string();
                    break;
                case 12:
                    message.storage_provider_id = reader.uint32();
                    break;
                case 13:
                    message.compression_id = reader.uint32();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            id: isSet(object.id) ? String(object.id) : "0",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            from_index: isSet(object.from_index) ? String(object.from_index) : "0",
            to_index: isSet(object.to_index) ? String(object.to_index) : "0",
            to_key: isSet(object.to_key) ? String(object.to_key) : "",
            bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
            data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
            finalized_at: isSet(object.finalized_at) ? String(object.finalized_at) : "0",
            from_key: isSet(object.from_key) ? String(object.from_key) : "",
            storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
            compression_id: isSet(object.compression_id) ? Number(object.compression_id) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.id !== undefined && (obj.id = message.id);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.from_index !== undefined && (obj.from_index = message.from_index);
        message.to_index !== undefined && (obj.to_index = message.to_index);
        message.to_key !== undefined && (obj.to_key = message.to_key);
        message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
        message.data_hash !== undefined && (obj.data_hash = message.data_hash);
        message.finalized_at !== undefined && (obj.finalized_at = message.finalized_at);
        message.from_key !== undefined && (obj.from_key = message.from_key);
        message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
        message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseFinalizedBundle();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
        message.uploader = (_d = object.uploader) !== null && _d !== void 0 ? _d : "";
        message.from_index = (_e = object.from_index) !== null && _e !== void 0 ? _e : "0";
        message.to_index = (_f = object.to_index) !== null && _f !== void 0 ? _f : "0";
        message.to_key = (_g = object.to_key) !== null && _g !== void 0 ? _g : "";
        message.bundle_summary = (_h = object.bundle_summary) !== null && _h !== void 0 ? _h : "";
        message.data_hash = (_j = object.data_hash) !== null && _j !== void 0 ? _j : "";
        message.finalized_at = (_k = object.finalized_at) !== null && _k !== void 0 ? _k : "0";
        message.from_key = (_l = object.from_key) !== null && _l !== void 0 ? _l : "";
        message.storage_provider_id = (_m = object.storage_provider_id) !== null && _m !== void 0 ? _m : 0;
        message.compression_id = (_o = object.compression_id) !== null && _o !== void 0 ? _o : 0;
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
//# sourceMappingURL=bundles.js.map