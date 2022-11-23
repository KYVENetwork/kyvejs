"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionChangeQueueState = exports.CommissionChangeQueueEntry = exports.RedelegationCooldown = exports.UnbondingDelegationQueueState = exports.UnbondingDelegationQueueEntry = exports.UnbondingStakingQueueState = exports.UnbondingStaker = exports.UnbondingStakingQueueEntry = exports.Staker = exports.Proposal = exports.Pool = exports.Funder = exports.Delegator = exports.DelegationPoolData = exports.DelegationEntries = exports.UpgradePlan = exports.Protocol = exports.BundleProposal = exports.stakerStatusToNumber = exports.stakerStatusToJSON = exports.stakerStatusFromJSON = exports.StakerStatus = exports.poolStatusToNumber = exports.poolStatusToJSON = exports.poolStatusFromJSON = exports.PoolStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
/** PoolStatus ... */
var PoolStatus;
(function (PoolStatus) {
    /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
    PoolStatus["POOL_STATUS_UNSPECIFIED"] = "POOL_STATUS_UNSPECIFIED";
    /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
    PoolStatus["POOL_STATUS_ACTIVE"] = "POOL_STATUS_ACTIVE";
    /** POOL_STATUS_PAUSED - POOL_STATUS_PAUSED ... */
    PoolStatus["POOL_STATUS_PAUSED"] = "POOL_STATUS_PAUSED";
    /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
    PoolStatus["POOL_STATUS_NO_FUNDS"] = "POOL_STATUS_NO_FUNDS";
    /** POOL_STATUS_NOT_ENOUGH_VALIDATORS - POOL_STATUS_NOT_ENOUGH_VALIDATORS ... */
    PoolStatus["POOL_STATUS_NOT_ENOUGH_VALIDATORS"] = "POOL_STATUS_NOT_ENOUGH_VALIDATORS";
    /** POOL_STATUS_NOT_ENOUGH_STAKE - POOL_STATUS_NOT_ENOUGH_STAKE ... */
    PoolStatus["POOL_STATUS_NOT_ENOUGH_STAKE"] = "POOL_STATUS_NOT_ENOUGH_STAKE";
    /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
    PoolStatus["POOL_STATUS_UPGRADING"] = "POOL_STATUS_UPGRADING";
    PoolStatus["UNRECOGNIZED"] = "UNRECOGNIZED";
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
        case "POOL_STATUS_NOT_ENOUGH_VALIDATORS":
            return PoolStatus.POOL_STATUS_NOT_ENOUGH_VALIDATORS;
        case 5:
        case "POOL_STATUS_NOT_ENOUGH_STAKE":
            return PoolStatus.POOL_STATUS_NOT_ENOUGH_STAKE;
        case 6:
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
        case PoolStatus.POOL_STATUS_NOT_ENOUGH_VALIDATORS:
            return "POOL_STATUS_NOT_ENOUGH_VALIDATORS";
        case PoolStatus.POOL_STATUS_NOT_ENOUGH_STAKE:
            return "POOL_STATUS_NOT_ENOUGH_STAKE";
        case PoolStatus.POOL_STATUS_UPGRADING:
            return "POOL_STATUS_UPGRADING";
        case PoolStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.poolStatusToJSON = poolStatusToJSON;
function poolStatusToNumber(object) {
    switch (object) {
        case PoolStatus.POOL_STATUS_UNSPECIFIED:
            return 0;
        case PoolStatus.POOL_STATUS_ACTIVE:
            return 1;
        case PoolStatus.POOL_STATUS_PAUSED:
            return 2;
        case PoolStatus.POOL_STATUS_NO_FUNDS:
            return 3;
        case PoolStatus.POOL_STATUS_NOT_ENOUGH_VALIDATORS:
            return 4;
        case PoolStatus.POOL_STATUS_NOT_ENOUGH_STAKE:
            return 5;
        case PoolStatus.POOL_STATUS_UPGRADING:
            return 6;
        case PoolStatus.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.poolStatusToNumber = poolStatusToNumber;
/** StakerStatus ... */
var StakerStatus;
(function (StakerStatus) {
    /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
    StakerStatus["STAKER_STATUS_UNSPECIFIED"] = "STAKER_STATUS_UNSPECIFIED";
    /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
    StakerStatus["STAKER_STATUS_ACTIVE"] = "STAKER_STATUS_ACTIVE";
    /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
    StakerStatus["STAKER_STATUS_INACTIVE"] = "STAKER_STATUS_INACTIVE";
    StakerStatus["UNRECOGNIZED"] = "UNRECOGNIZED";
})(StakerStatus = exports.StakerStatus || (exports.StakerStatus = {}));
function stakerStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STAKER_STATUS_UNSPECIFIED":
            return StakerStatus.STAKER_STATUS_UNSPECIFIED;
        case 1:
        case "STAKER_STATUS_ACTIVE":
            return StakerStatus.STAKER_STATUS_ACTIVE;
        case 2:
        case "STAKER_STATUS_INACTIVE":
            return StakerStatus.STAKER_STATUS_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StakerStatus.UNRECOGNIZED;
    }
}
exports.stakerStatusFromJSON = stakerStatusFromJSON;
function stakerStatusToJSON(object) {
    switch (object) {
        case StakerStatus.STAKER_STATUS_UNSPECIFIED:
            return "STAKER_STATUS_UNSPECIFIED";
        case StakerStatus.STAKER_STATUS_ACTIVE:
            return "STAKER_STATUS_ACTIVE";
        case StakerStatus.STAKER_STATUS_INACTIVE:
            return "STAKER_STATUS_INACTIVE";
        case StakerStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stakerStatusToJSON = stakerStatusToJSON;
function stakerStatusToNumber(object) {
    switch (object) {
        case StakerStatus.STAKER_STATUS_UNSPECIFIED:
            return 0;
        case StakerStatus.STAKER_STATUS_ACTIVE:
            return 1;
        case StakerStatus.STAKER_STATUS_INACTIVE:
            return 2;
        case StakerStatus.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.stakerStatusToNumber = stakerStatusToNumber;
function createBaseBundleProposal() {
    return {
        uploader: "",
        next_uploader: "",
        storage_id: "",
        byte_size: "0",
        from_height: "0",
        to_height: "0",
        created_at: "0",
        voters_valid: [],
        voters_invalid: [],
        voters_abstain: [],
        to_key: "",
        to_value: "",
        bundle_hash: "",
    };
}
exports.BundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.uploader !== "") {
            writer.uint32(10).string(message.uploader);
        }
        if (message.next_uploader !== "") {
            writer.uint32(18).string(message.next_uploader);
        }
        if (message.storage_id !== "") {
            writer.uint32(26).string(message.storage_id);
        }
        if (message.byte_size !== "0") {
            writer.uint32(32).uint64(message.byte_size);
        }
        if (message.from_height !== "0") {
            writer.uint32(40).uint64(message.from_height);
        }
        if (message.to_height !== "0") {
            writer.uint32(48).uint64(message.to_height);
        }
        if (message.created_at !== "0") {
            writer.uint32(56).uint64(message.created_at);
        }
        for (var _i = 0, _a = message.voters_valid; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(66).string(v);
        }
        for (var _b = 0, _c = message.voters_invalid; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(74).string(v);
        }
        for (var _d = 0, _e = message.voters_abstain; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(82).string(v);
        }
        if (message.to_key !== "") {
            writer.uint32(90).string(message.to_key);
        }
        if (message.to_value !== "") {
            writer.uint32(98).string(message.to_value);
        }
        if (message.bundle_hash !== "") {
            writer.uint32(106).string(message.bundle_hash);
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
                    message.uploader = reader.string();
                    break;
                case 2:
                    message.next_uploader = reader.string();
                    break;
                case 3:
                    message.storage_id = reader.string();
                    break;
                case 4:
                    message.byte_size = longToString(reader.uint64());
                    break;
                case 5:
                    message.from_height = longToString(reader.uint64());
                    break;
                case 6:
                    message.to_height = longToString(reader.uint64());
                    break;
                case 7:
                    message.created_at = longToString(reader.uint64());
                    break;
                case 8:
                    message.voters_valid.push(reader.string());
                    break;
                case 9:
                    message.voters_invalid.push(reader.string());
                    break;
                case 10:
                    message.voters_abstain.push(reader.string());
                    break;
                case 11:
                    message.to_key = reader.string();
                    break;
                case 12:
                    message.to_value = reader.string();
                    break;
                case 13:
                    message.bundle_hash = reader.string();
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
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            next_uploader: isSet(object.next_uploader) ? String(object.next_uploader) : "",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            byte_size: isSet(object.byte_size) ? String(object.byte_size) : "0",
            from_height: isSet(object.from_height) ? String(object.from_height) : "0",
            to_height: isSet(object.to_height) ? String(object.to_height) : "0",
            created_at: isSet(object.created_at) ? String(object.created_at) : "0",
            voters_valid: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_valid) ? object.voters_valid.map(function (e) { return String(e); }) : [],
            voters_invalid: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_invalid) ? object.voters_invalid.map(function (e) { return String(e); }) : [],
            voters_abstain: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_abstain) ? object.voters_abstain.map(function (e) { return String(e); }) : [],
            to_key: isSet(object.to_key) ? String(object.to_key) : "",
            to_value: isSet(object.to_value) ? String(object.to_value) : "",
            bundle_hash: isSet(object.bundle_hash) ? String(object.bundle_hash) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.next_uploader !== undefined && (obj.next_uploader = message.next_uploader);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.byte_size !== undefined && (obj.byte_size = message.byte_size);
        message.from_height !== undefined && (obj.from_height = message.from_height);
        message.to_height !== undefined && (obj.to_height = message.to_height);
        message.created_at !== undefined && (obj.created_at = message.created_at);
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
        message.to_key !== undefined && (obj.to_key = message.to_key);
        message.to_value !== undefined && (obj.to_value = message.to_value);
        message.bundle_hash !== undefined && (obj.bundle_hash = message.bundle_hash);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseBundleProposal();
        message.uploader = (_a = object.uploader) !== null && _a !== void 0 ? _a : "";
        message.next_uploader = (_b = object.next_uploader) !== null && _b !== void 0 ? _b : "";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
        message.byte_size = (_d = object.byte_size) !== null && _d !== void 0 ? _d : "0";
        message.from_height = (_e = object.from_height) !== null && _e !== void 0 ? _e : "0";
        message.to_height = (_f = object.to_height) !== null && _f !== void 0 ? _f : "0";
        message.created_at = (_g = object.created_at) !== null && _g !== void 0 ? _g : "0";
        message.voters_valid = ((_h = object.voters_valid) === null || _h === void 0 ? void 0 : _h.map(function (e) { return e; })) || [];
        message.voters_invalid = ((_j = object.voters_invalid) === null || _j === void 0 ? void 0 : _j.map(function (e) { return e; })) || [];
        message.voters_abstain = ((_k = object.voters_abstain) === null || _k === void 0 ? void 0 : _k.map(function (e) { return e; })) || [];
        message.to_key = (_l = object.to_key) !== null && _l !== void 0 ? _l : "";
        message.to_value = (_m = object.to_value) !== null && _m !== void 0 ? _m : "";
        message.bundle_hash = (_o = object.bundle_hash) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseProtocol() {
    return { version: "", binaries: "", last_upgrade: "0", test: "" };
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
        if (message.test !== "") {
            writer.uint32(34).string(message.test);
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
                case 4:
                    message.test = reader.string();
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
            test: isSet(object.test) ? String(object.test) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.last_upgrade !== undefined && (obj.last_upgrade = message.last_upgrade);
        message.test !== undefined && (obj.test = message.test);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseProtocol();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.last_upgrade = (_c = object.last_upgrade) !== null && _c !== void 0 ? _c : "0";
        message.test = (_d = object.test) !== null && _d !== void 0 ? _d : "";
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
function createBaseDelegationEntries() {
    return { id: "0", balance: "", staker: "", k_index: "0" };
}
exports.DelegationEntries = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.balance !== "") {
            writer.uint32(18).string(message.balance);
        }
        if (message.staker !== "") {
            writer.uint32(26).string(message.staker);
        }
        if (message.k_index !== "0") {
            writer.uint32(32).uint64(message.k_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationEntries();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.balance = reader.string();
                    break;
                case 3:
                    message.staker = reader.string();
                    break;
                case 4:
                    message.k_index = longToString(reader.uint64());
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
            balance: isSet(object.balance) ? String(object.balance) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            k_index: isSet(object.k_index) ? String(object.k_index) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.balance !== undefined && (obj.balance = message.balance);
        message.staker !== undefined && (obj.staker = message.staker);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDelegationEntries();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.balance = (_b = object.balance) !== null && _b !== void 0 ? _b : "";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.k_index = (_d = object.k_index) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseDelegationPoolData() {
    return {
        id: "0",
        staker: "",
        current_rewards: "0",
        total_delegation: "0",
        latest_index_k: "0",
        delegator_count: "0",
        latest_index_was_undelegation: false,
    };
}
exports.DelegationPoolData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.current_rewards !== "0") {
            writer.uint32(24).uint64(message.current_rewards);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(32).uint64(message.total_delegation);
        }
        if (message.latest_index_k !== "0") {
            writer.uint32(40).uint64(message.latest_index_k);
        }
        if (message.delegator_count !== "0") {
            writer.uint32(48).uint64(message.delegator_count);
        }
        if (message.latest_index_was_undelegation === true) {
            writer.uint32(56).bool(message.latest_index_was_undelegation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationPoolData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.current_rewards = longToString(reader.uint64());
                    break;
                case 4:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 5:
                    message.latest_index_k = longToString(reader.uint64());
                    break;
                case 6:
                    message.delegator_count = longToString(reader.uint64());
                    break;
                case 7:
                    message.latest_index_was_undelegation = reader.bool();
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            current_rewards: isSet(object.current_rewards) ? String(object.current_rewards) : "0",
            total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
            latest_index_k: isSet(object.latest_index_k) ? String(object.latest_index_k) : "0",
            delegator_count: isSet(object.delegator_count) ? String(object.delegator_count) : "0",
            latest_index_was_undelegation: isSet(object.latest_index_was_undelegation)
                ? Boolean(object.latest_index_was_undelegation)
                : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.current_rewards !== undefined && (obj.current_rewards = message.current_rewards);
        message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
        message.latest_index_k !== undefined && (obj.latest_index_k = message.latest_index_k);
        message.delegator_count !== undefined && (obj.delegator_count = message.delegator_count);
        message.latest_index_was_undelegation !== undefined &&
            (obj.latest_index_was_undelegation = message.latest_index_was_undelegation);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseDelegationPoolData();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.current_rewards = (_c = object.current_rewards) !== null && _c !== void 0 ? _c : "0";
        message.total_delegation = (_d = object.total_delegation) !== null && _d !== void 0 ? _d : "0";
        message.latest_index_k = (_e = object.latest_index_k) !== null && _e !== void 0 ? _e : "0";
        message.delegator_count = (_f = object.delegator_count) !== null && _f !== void 0 ? _f : "0";
        message.latest_index_was_undelegation = (_g = object.latest_index_was_undelegation) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseDelegator() {
    return { id: "0", k_index: "0", delegation_amount: "0", staker: "", delegator: "" };
}
exports.Delegator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.k_index !== "0") {
            writer.uint32(16).uint64(message.k_index);
        }
        if (message.delegation_amount !== "0") {
            writer.uint32(24).uint64(message.delegation_amount);
        }
        if (message.staker !== "") {
            writer.uint32(34).string(message.staker);
        }
        if (message.delegator !== "") {
            writer.uint32(42).string(message.delegator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.k_index = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegation_amount = longToString(reader.uint64());
                    break;
                case 4:
                    message.staker = reader.string();
                    break;
                case 5:
                    message.delegator = reader.string();
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
            k_index: isSet(object.k_index) ? String(object.k_index) : "0",
            delegation_amount: isSet(object.delegation_amount) ? String(object.delegation_amount) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseDelegator();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.k_index = (_b = object.k_index) !== null && _b !== void 0 ? _b : "0";
        message.delegation_amount = (_c = object.delegation_amount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        message.delegator = (_e = object.delegator) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseFunder() {
    return { account: "", pool_id: "0", amount: "0" };
}
exports.Funder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
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
                case 2:
                    message.account = reader.string();
                    break;
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
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
            account: isSet(object.account) ? String(object.account) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFunder();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBasePool() {
    return {
        id: "0",
        creator: "",
        name: "",
        runtime: "",
        logo: "",
        versions: "",
        config: "",
        current_height: "0",
        total_bytes: "0",
        total_bundles: "0",
        total_bundle_rewards: "0",
        start_height: "0",
        upload_interval: "0",
        operating_cost: "0",
        paused: false,
        funders: [],
        lowest_funder: "",
        total_funds: "0",
        stakers: [],
        lowest_staker: "",
        total_stake: "0",
        total_delegation: "0",
        bundle_proposal: undefined,
        max_bundle_size: "0",
        protocol: undefined,
        upgrade_plan: undefined,
        start_key: "",
        current_key: "",
        current_value: "",
        inactive_stakers: [],
        total_inactive_stake: "0",
        min_stake: "0",
        status: PoolStatus.POOL_STATUS_UNSPECIFIED,
    };
}
exports.Pool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
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
        if (message.versions !== "") {
            writer.uint32(50).string(message.versions);
        }
        if (message.config !== "") {
            writer.uint32(58).string(message.config);
        }
        if (message.current_height !== "0") {
            writer.uint32(64).uint64(message.current_height);
        }
        if (message.total_bytes !== "0") {
            writer.uint32(72).uint64(message.total_bytes);
        }
        if (message.total_bundles !== "0") {
            writer.uint32(80).uint64(message.total_bundles);
        }
        if (message.total_bundle_rewards !== "0") {
            writer.uint32(88).uint64(message.total_bundle_rewards);
        }
        if (message.start_height !== "0") {
            writer.uint32(96).uint64(message.start_height);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(104).uint64(message.upload_interval);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(112).uint64(message.operating_cost);
        }
        if (message.paused === true) {
            writer.uint32(120).bool(message.paused);
        }
        for (var _i = 0, _a = message.funders; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(130).string(v);
        }
        if (message.lowest_funder !== "") {
            writer.uint32(138).string(message.lowest_funder);
        }
        if (message.total_funds !== "0") {
            writer.uint32(144).uint64(message.total_funds);
        }
        for (var _b = 0, _c = message.stakers; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(154).string(v);
        }
        if (message.lowest_staker !== "") {
            writer.uint32(162).string(message.lowest_staker);
        }
        if (message.total_stake !== "0") {
            writer.uint32(168).uint64(message.total_stake);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(176).uint64(message.total_delegation);
        }
        if (message.bundle_proposal !== undefined) {
            exports.BundleProposal.encode(message.bundle_proposal, writer.uint32(186).fork()).ldelim();
        }
        if (message.max_bundle_size !== "0") {
            writer.uint32(192).uint64(message.max_bundle_size);
        }
        if (message.protocol !== undefined) {
            exports.Protocol.encode(message.protocol, writer.uint32(202).fork()).ldelim();
        }
        if (message.upgrade_plan !== undefined) {
            exports.UpgradePlan.encode(message.upgrade_plan, writer.uint32(210).fork()).ldelim();
        }
        if (message.start_key !== "") {
            writer.uint32(218).string(message.start_key);
        }
        if (message.current_key !== "") {
            writer.uint32(226).string(message.current_key);
        }
        if (message.current_value !== "") {
            writer.uint32(234).string(message.current_value);
        }
        for (var _d = 0, _e = message.inactive_stakers; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(242).string(v);
        }
        if (message.total_inactive_stake !== "0") {
            writer.uint32(248).uint64(message.total_inactive_stake);
        }
        if (message.min_stake !== "0") {
            writer.uint32(256).uint64(message.min_stake);
        }
        if (message.status !== PoolStatus.POOL_STATUS_UNSPECIFIED) {
            writer.uint32(264).int32(poolStatusToNumber(message.status));
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
                    message.creator = reader.string();
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
                    message.versions = reader.string();
                    break;
                case 7:
                    message.config = reader.string();
                    break;
                case 8:
                    message.current_height = longToString(reader.uint64());
                    break;
                case 9:
                    message.total_bytes = longToString(reader.uint64());
                    break;
                case 10:
                    message.total_bundles = longToString(reader.uint64());
                    break;
                case 11:
                    message.total_bundle_rewards = longToString(reader.uint64());
                    break;
                case 12:
                    message.start_height = longToString(reader.uint64());
                    break;
                case 13:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 14:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 15:
                    message.paused = reader.bool();
                    break;
                case 16:
                    message.funders.push(reader.string());
                    break;
                case 17:
                    message.lowest_funder = reader.string();
                    break;
                case 18:
                    message.total_funds = longToString(reader.uint64());
                    break;
                case 19:
                    message.stakers.push(reader.string());
                    break;
                case 20:
                    message.lowest_staker = reader.string();
                    break;
                case 21:
                    message.total_stake = longToString(reader.uint64());
                    break;
                case 22:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 23:
                    message.bundle_proposal = exports.BundleProposal.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.max_bundle_size = longToString(reader.uint64());
                    break;
                case 25:
                    message.protocol = exports.Protocol.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.upgrade_plan = exports.UpgradePlan.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.start_key = reader.string();
                    break;
                case 28:
                    message.current_key = reader.string();
                    break;
                case 29:
                    message.current_value = reader.string();
                    break;
                case 30:
                    message.inactive_stakers.push(reader.string());
                    break;
                case 31:
                    message.total_inactive_stake = longToString(reader.uint64());
                    break;
                case 32:
                    message.min_stake = longToString(reader.uint64());
                    break;
                case 33:
                    message.status = poolStatusFromJSON(reader.int32());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            versions: isSet(object.versions) ? String(object.versions) : "",
            config: isSet(object.config) ? String(object.config) : "",
            current_height: isSet(object.current_height) ? String(object.current_height) : "0",
            total_bytes: isSet(object.total_bytes) ? String(object.total_bytes) : "0",
            total_bundles: isSet(object.total_bundles) ? String(object.total_bundles) : "0",
            total_bundle_rewards: isSet(object.total_bundle_rewards) ? String(object.total_bundle_rewards) : "0",
            start_height: isSet(object.start_height) ? String(object.start_height) : "0",
            upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
            operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
            paused: isSet(object.paused) ? Boolean(object.paused) : false,
            funders: Array.isArray(object === null || object === void 0 ? void 0 : object.funders) ? object.funders.map(function (e) { return String(e); }) : [],
            lowest_funder: isSet(object.lowest_funder) ? String(object.lowest_funder) : "",
            total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers) ? object.stakers.map(function (e) { return String(e); }) : [],
            lowest_staker: isSet(object.lowest_staker) ? String(object.lowest_staker) : "",
            total_stake: isSet(object.total_stake) ? String(object.total_stake) : "0",
            total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
            bundle_proposal: isSet(object.bundle_proposal) ? exports.BundleProposal.fromJSON(object.bundle_proposal) : undefined,
            max_bundle_size: isSet(object.max_bundle_size) ? String(object.max_bundle_size) : "0",
            protocol: isSet(object.protocol) ? exports.Protocol.fromJSON(object.protocol) : undefined,
            upgrade_plan: isSet(object.upgrade_plan) ? exports.UpgradePlan.fromJSON(object.upgrade_plan) : undefined,
            start_key: isSet(object.start_key) ? String(object.start_key) : "",
            current_key: isSet(object.current_key) ? String(object.current_key) : "",
            current_value: isSet(object.current_value) ? String(object.current_value) : "",
            inactive_stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.inactive_stakers)
                ? object.inactive_stakers.map(function (e) { return String(e); })
                : [],
            total_inactive_stake: isSet(object.total_inactive_stake) ? String(object.total_inactive_stake) : "0",
            min_stake: isSet(object.min_stake) ? String(object.min_stake) : "0",
            status: isSet(object.status) ? poolStatusFromJSON(object.status) : PoolStatus.POOL_STATUS_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.versions !== undefined && (obj.versions = message.versions);
        message.config !== undefined && (obj.config = message.config);
        message.current_height !== undefined && (obj.current_height = message.current_height);
        message.total_bytes !== undefined && (obj.total_bytes = message.total_bytes);
        message.total_bundles !== undefined && (obj.total_bundles = message.total_bundles);
        message.total_bundle_rewards !== undefined && (obj.total_bundle_rewards = message.total_bundle_rewards);
        message.start_height !== undefined && (obj.start_height = message.start_height);
        message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
        message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
        message.paused !== undefined && (obj.paused = message.paused);
        if (message.funders) {
            obj.funders = message.funders.map(function (e) { return e; });
        }
        else {
            obj.funders = [];
        }
        message.lowest_funder !== undefined && (obj.lowest_funder = message.lowest_funder);
        message.total_funds !== undefined && (obj.total_funds = message.total_funds);
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e; });
        }
        else {
            obj.stakers = [];
        }
        message.lowest_staker !== undefined && (obj.lowest_staker = message.lowest_staker);
        message.total_stake !== undefined && (obj.total_stake = message.total_stake);
        message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
        message.bundle_proposal !== undefined &&
            (obj.bundle_proposal = message.bundle_proposal ? exports.BundleProposal.toJSON(message.bundle_proposal) : undefined);
        message.max_bundle_size !== undefined && (obj.max_bundle_size = message.max_bundle_size);
        message.protocol !== undefined && (obj.protocol = message.protocol ? exports.Protocol.toJSON(message.protocol) : undefined);
        message.upgrade_plan !== undefined &&
            (obj.upgrade_plan = message.upgrade_plan ? exports.UpgradePlan.toJSON(message.upgrade_plan) : undefined);
        message.start_key !== undefined && (obj.start_key = message.start_key);
        message.current_key !== undefined && (obj.current_key = message.current_key);
        message.current_value !== undefined && (obj.current_value = message.current_value);
        if (message.inactive_stakers) {
            obj.inactive_stakers = message.inactive_stakers.map(function (e) { return e; });
        }
        else {
            obj.inactive_stakers = [];
        }
        message.total_inactive_stake !== undefined && (obj.total_inactive_stake = message.total_inactive_stake);
        message.min_stake !== undefined && (obj.min_stake = message.min_stake);
        message.status !== undefined && (obj.status = poolStatusToJSON(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        var message = createBasePool();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.creator = (_b = object.creator) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.runtime = (_d = object.runtime) !== null && _d !== void 0 ? _d : "";
        message.logo = (_e = object.logo) !== null && _e !== void 0 ? _e : "";
        message.versions = (_f = object.versions) !== null && _f !== void 0 ? _f : "";
        message.config = (_g = object.config) !== null && _g !== void 0 ? _g : "";
        message.current_height = (_h = object.current_height) !== null && _h !== void 0 ? _h : "0";
        message.total_bytes = (_j = object.total_bytes) !== null && _j !== void 0 ? _j : "0";
        message.total_bundles = (_k = object.total_bundles) !== null && _k !== void 0 ? _k : "0";
        message.total_bundle_rewards = (_l = object.total_bundle_rewards) !== null && _l !== void 0 ? _l : "0";
        message.start_height = (_m = object.start_height) !== null && _m !== void 0 ? _m : "0";
        message.upload_interval = (_o = object.upload_interval) !== null && _o !== void 0 ? _o : "0";
        message.operating_cost = (_p = object.operating_cost) !== null && _p !== void 0 ? _p : "0";
        message.paused = (_q = object.paused) !== null && _q !== void 0 ? _q : false;
        message.funders = ((_r = object.funders) === null || _r === void 0 ? void 0 : _r.map(function (e) { return e; })) || [];
        message.lowest_funder = (_s = object.lowest_funder) !== null && _s !== void 0 ? _s : "";
        message.total_funds = (_t = object.total_funds) !== null && _t !== void 0 ? _t : "0";
        message.stakers = ((_u = object.stakers) === null || _u === void 0 ? void 0 : _u.map(function (e) { return e; })) || [];
        message.lowest_staker = (_v = object.lowest_staker) !== null && _v !== void 0 ? _v : "";
        message.total_stake = (_w = object.total_stake) !== null && _w !== void 0 ? _w : "0";
        message.total_delegation = (_x = object.total_delegation) !== null && _x !== void 0 ? _x : "0";
        message.bundle_proposal = (object.bundle_proposal !== undefined && object.bundle_proposal !== null)
            ? exports.BundleProposal.fromPartial(object.bundle_proposal)
            : undefined;
        message.max_bundle_size = (_y = object.max_bundle_size) !== null && _y !== void 0 ? _y : "0";
        message.protocol = (object.protocol !== undefined && object.protocol !== null)
            ? exports.Protocol.fromPartial(object.protocol)
            : undefined;
        message.upgrade_plan = (object.upgrade_plan !== undefined && object.upgrade_plan !== null)
            ? exports.UpgradePlan.fromPartial(object.upgrade_plan)
            : undefined;
        message.start_key = (_z = object.start_key) !== null && _z !== void 0 ? _z : "";
        message.current_key = (_0 = object.current_key) !== null && _0 !== void 0 ? _0 : "";
        message.current_value = (_1 = object.current_value) !== null && _1 !== void 0 ? _1 : "";
        message.inactive_stakers = ((_2 = object.inactive_stakers) === null || _2 === void 0 ? void 0 : _2.map(function (e) { return e; })) || [];
        message.total_inactive_stake = (_3 = object.total_inactive_stake) !== null && _3 !== void 0 ? _3 : "0";
        message.min_stake = (_4 = object.min_stake) !== null && _4 !== void 0 ? _4 : "0";
        message.status = (_5 = object.status) !== null && _5 !== void 0 ? _5 : PoolStatus.POOL_STATUS_UNSPECIFIED;
        return message;
    },
};
function createBaseProposal() {
    return {
        storage_id: "",
        pool_id: "0",
        uploader: "",
        from_height: "0",
        to_height: "0",
        finalized_at: "0",
        id: "0",
        key: "",
        value: "",
        bundle_hash: "",
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.storage_id !== "") {
            writer.uint32(10).string(message.storage_id);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.uploader !== "") {
            writer.uint32(26).string(message.uploader);
        }
        if (message.from_height !== "0") {
            writer.uint32(32).uint64(message.from_height);
        }
        if (message.to_height !== "0") {
            writer.uint32(40).uint64(message.to_height);
        }
        if (message.finalized_at !== "0") {
            writer.uint32(48).uint64(message.finalized_at);
        }
        if (message.id !== "0") {
            writer.uint32(56).uint64(message.id);
        }
        if (message.key !== "") {
            writer.uint32(66).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(74).string(message.value);
        }
        if (message.bundle_hash !== "") {
            writer.uint32(82).string(message.bundle_hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage_id = reader.string();
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.uploader = reader.string();
                    break;
                case 4:
                    message.from_height = longToString(reader.uint64());
                    break;
                case 5:
                    message.to_height = longToString(reader.uint64());
                    break;
                case 6:
                    message.finalized_at = longToString(reader.uint64());
                    break;
                case 7:
                    message.id = longToString(reader.uint64());
                    break;
                case 8:
                    message.key = reader.string();
                    break;
                case 9:
                    message.value = reader.string();
                    break;
                case 10:
                    message.bundle_hash = reader.string();
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
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            from_height: isSet(object.from_height) ? String(object.from_height) : "0",
            to_height: isSet(object.to_height) ? String(object.to_height) : "0",
            finalized_at: isSet(object.finalized_at) ? String(object.finalized_at) : "0",
            id: isSet(object.id) ? String(object.id) : "0",
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : "",
            bundle_hash: isSet(object.bundle_hash) ? String(object.bundle_hash) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.from_height !== undefined && (obj.from_height = message.from_height);
        message.to_height !== undefined && (obj.to_height = message.to_height);
        message.finalized_at !== undefined && (obj.finalized_at = message.finalized_at);
        message.id !== undefined && (obj.id = message.id);
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        message.bundle_hash !== undefined && (obj.bundle_hash = message.bundle_hash);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseProposal();
        message.storage_id = (_a = object.storage_id) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.uploader = (_c = object.uploader) !== null && _c !== void 0 ? _c : "";
        message.from_height = (_d = object.from_height) !== null && _d !== void 0 ? _d : "0";
        message.to_height = (_e = object.to_height) !== null && _e !== void 0 ? _e : "0";
        message.finalized_at = (_f = object.finalized_at) !== null && _f !== void 0 ? _f : "0";
        message.id = (_g = object.id) !== null && _g !== void 0 ? _g : "0";
        message.key = (_h = object.key) !== null && _h !== void 0 ? _h : "";
        message.value = (_j = object.value) !== null && _j !== void 0 ? _j : "";
        message.bundle_hash = (_k = object.bundle_hash) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseStaker() {
    return {
        account: "",
        pool_id: "0",
        amount: "0",
        unbonding_amount: "0",
        commission: "",
        moniker: "",
        website: "",
        logo: "",
        points: "0",
        status: StakerStatus.STAKER_STATUS_UNSPECIFIED,
    };
}
exports.Staker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.unbonding_amount !== "0") {
            writer.uint32(32).uint64(message.unbonding_amount);
        }
        if (message.commission !== "") {
            writer.uint32(42).string(message.commission);
        }
        if (message.moniker !== "") {
            writer.uint32(50).string(message.moniker);
        }
        if (message.website !== "") {
            writer.uint32(58).string(message.website);
        }
        if (message.logo !== "") {
            writer.uint32(66).string(message.logo);
        }
        if (message.points !== "0") {
            writer.uint32(72).uint64(message.points);
        }
        if (message.status !== StakerStatus.STAKER_STATUS_UNSPECIFIED) {
            writer.uint32(80).int32(stakerStatusToNumber(message.status));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
                    break;
                case 4:
                    message.unbonding_amount = longToString(reader.uint64());
                    break;
                case 5:
                    message.commission = reader.string();
                    break;
                case 6:
                    message.moniker = reader.string();
                    break;
                case 7:
                    message.website = reader.string();
                    break;
                case 8:
                    message.logo = reader.string();
                    break;
                case 9:
                    message.points = longToString(reader.uint64());
                    break;
                case 10:
                    message.status = stakerStatusFromJSON(reader.int32());
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
            account: isSet(object.account) ? String(object.account) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            unbonding_amount: isSet(object.unbonding_amount) ? String(object.unbonding_amount) : "0",
            commission: isSet(object.commission) ? String(object.commission) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            points: isSet(object.points) ? String(object.points) : "0",
            status: isSet(object.status) ? stakerStatusFromJSON(object.status) : StakerStatus.STAKER_STATUS_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.amount !== undefined && (obj.amount = message.amount);
        message.unbonding_amount !== undefined && (obj.unbonding_amount = message.unbonding_amount);
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        message.points !== undefined && (obj.points = message.points);
        message.status !== undefined && (obj.status = stakerStatusToJSON(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseStaker();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        message.unbonding_amount = (_d = object.unbonding_amount) !== null && _d !== void 0 ? _d : "0";
        message.commission = (_e = object.commission) !== null && _e !== void 0 ? _e : "";
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.website = (_g = object.website) !== null && _g !== void 0 ? _g : "";
        message.logo = (_h = object.logo) !== null && _h !== void 0 ? _h : "";
        message.points = (_j = object.points) !== null && _j !== void 0 ? _j : "0";
        message.status = (_k = object.status) !== null && _k !== void 0 ? _k : StakerStatus.STAKER_STATUS_UNSPECIFIED;
        return message;
    },
};
function createBaseUnbondingStakingQueueEntry() {
    return { index: "0", staker: "", pool_id: "0", amount: "0", creation_time: "0" };
}
exports.UnbondingStakingQueueEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(24).uint64(message.pool_id);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.creation_time !== "0") {
            writer.uint32(40).uint64(message.creation_time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingStakingQueueEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
                    break;
                case 5:
                    message.creation_time = longToString(reader.uint64());
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
            index: isSet(object.index) ? String(object.index) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_time !== undefined && (obj.creation_time = message.creation_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUnbondingStakingQueueEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        message.creation_time = (_e = object.creation_time) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseUnbondingStaker() {
    return { staker: "", pool_id: "0", unbonding_amount: "0" };
}
exports.UnbondingStaker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.unbonding_amount !== "0") {
            writer.uint32(24).uint64(message.unbonding_amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingStaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.unbonding_amount = longToString(reader.uint64());
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            unbonding_amount: isSet(object.unbonding_amount) ? String(object.unbonding_amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.unbonding_amount !== undefined && (obj.unbonding_amount = message.unbonding_amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUnbondingStaker();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.unbonding_amount = (_c = object.unbonding_amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseUnbondingStakingQueueState() {
    return { low_index: "0", high_index: "0" };
}
exports.UnbondingStakingQueueState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.low_index !== "0") {
            writer.uint32(8).uint64(message.low_index);
        }
        if (message.high_index !== "0") {
            writer.uint32(16).uint64(message.high_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingStakingQueueState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.low_index = longToString(reader.uint64());
                    break;
                case 2:
                    message.high_index = longToString(reader.uint64());
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
            low_index: isSet(object.low_index) ? String(object.low_index) : "0",
            high_index: isSet(object.high_index) ? String(object.high_index) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.low_index !== undefined && (obj.low_index = message.low_index);
        message.high_index !== undefined && (obj.high_index = message.high_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUnbondingStakingQueueState();
        message.low_index = (_a = object.low_index) !== null && _a !== void 0 ? _a : "0";
        message.high_index = (_b = object.high_index) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseUnbondingDelegationQueueEntry() {
    return { index: "0", staker: "", delegator: "", pool_id: "0", amount: "0", creation_time: "0" };
}
exports.UnbondingDelegationQueueEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.delegator !== "") {
            writer.uint32(26).string(message.delegator);
        }
        if (message.pool_id !== "0") {
            writer.uint32(32).uint64(message.pool_id);
        }
        if (message.amount !== "0") {
            writer.uint32(40).uint64(message.amount);
        }
        if (message.creation_time !== "0") {
            writer.uint32(48).uint64(message.creation_time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingDelegationQueueEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.delegator = reader.string();
                    break;
                case 4:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 5:
                    message.amount = longToString(reader.uint64());
                    break;
                case 6:
                    message.creation_time = longToString(reader.uint64());
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
            index: isSet(object.index) ? String(object.index) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_time !== undefined && (obj.creation_time = message.creation_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseUnbondingDelegationQueueEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.delegator = (_c = object.delegator) !== null && _c !== void 0 ? _c : "";
        message.pool_id = (_d = object.pool_id) !== null && _d !== void 0 ? _d : "0";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : "0";
        message.creation_time = (_f = object.creation_time) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseUnbondingDelegationQueueState() {
    return { low_index: "0", high_index: "0" };
}
exports.UnbondingDelegationQueueState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.low_index !== "0") {
            writer.uint32(8).uint64(message.low_index);
        }
        if (message.high_index !== "0") {
            writer.uint32(16).uint64(message.high_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingDelegationQueueState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.low_index = longToString(reader.uint64());
                    break;
                case 2:
                    message.high_index = longToString(reader.uint64());
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
            low_index: isSet(object.low_index) ? String(object.low_index) : "0",
            high_index: isSet(object.high_index) ? String(object.high_index) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.low_index !== undefined && (obj.low_index = message.low_index);
        message.high_index !== undefined && (obj.high_index = message.high_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUnbondingDelegationQueueState();
        message.low_index = (_a = object.low_index) !== null && _a !== void 0 ? _a : "0";
        message.high_index = (_b = object.high_index) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseRedelegationCooldown() {
    return { address: "", creation_date: "0" };
}
exports.RedelegationCooldown = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.creation_date !== "0") {
            writer.uint32(16).uint64(message.creation_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationCooldown();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.creation_date = longToString(reader.uint64());
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
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRedelegationCooldown();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.creation_date = (_b = object.creation_date) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseCommissionChangeQueueEntry() {
    return { index: "0", staker: "", pool_id: "0", commission: "", creation_date: "0" };
}
exports.CommissionChangeQueueEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(24).uint64(message.pool_id);
        }
        if (message.commission !== "") {
            writer.uint32(34).string(message.commission);
        }
        if (message.creation_date !== "0") {
            writer.uint32(40).int64(message.creation_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommissionChangeQueueEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.commission = reader.string();
                    break;
                case 5:
                    message.creation_date = longToString(reader.int64());
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
            index: isSet(object.index) ? String(object.index) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            commission: isSet(object.commission) ? String(object.commission) : "",
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.commission !== undefined && (obj.commission = message.commission);
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseCommissionChangeQueueEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        message.commission = (_d = object.commission) !== null && _d !== void 0 ? _d : "";
        message.creation_date = (_e = object.creation_date) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseCommissionChangeQueueState() {
    return { low_index: "0", high_index: "0" };
}
exports.CommissionChangeQueueState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.low_index !== "0") {
            writer.uint32(8).uint64(message.low_index);
        }
        if (message.high_index !== "0") {
            writer.uint32(16).uint64(message.high_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommissionChangeQueueState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.low_index = longToString(reader.uint64());
                    break;
                case 2:
                    message.high_index = longToString(reader.uint64());
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
            low_index: isSet(object.low_index) ? String(object.low_index) : "0",
            high_index: isSet(object.high_index) ? String(object.high_index) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.low_index !== undefined && (obj.low_index = message.low_index);
        message.high_index !== undefined && (obj.high_index = message.high_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCommissionChangeQueueState();
        message.low_index = (_a = object.low_index) !== null && _a !== void 0 ? _a : "0";
        message.high_index = (_b = object.high_index) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=registry.js.map