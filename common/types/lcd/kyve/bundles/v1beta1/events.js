"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPointsReset = exports.EventPointIncreased = exports.EventSkippedUploaderRole = exports.EventClaimedUploaderRole = exports.EventBundleFinalized = exports.EventBundleProposed = exports.EventBundleVote = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var bundles_1 = require("./bundles");
var tx_1 = require("./tx");
exports.protobufPackage = "kyve.bundles.v1beta1";
function createBaseEventBundleVote() {
    return { pool_id: "0", staker: "", storage_id: "", vote: tx_1.VoteType.VOTE_TYPE_UNSPECIFIED };
}
exports.EventBundleVote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.storage_id !== "") {
            writer.uint32(26).string(message.storage_id);
        }
        if (message.vote !== tx_1.VoteType.VOTE_TYPE_UNSPECIFIED) {
            writer.uint32(32).int32((0, tx_1.voteTypeToNumber)(message.vote));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventBundleVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.storage_id = reader.string();
                    break;
                case 4:
                    message.vote = (0, tx_1.voteTypeFromJSON)(reader.int32());
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            vote: isSet(object.vote) ? (0, tx_1.voteTypeFromJSON)(object.vote) : tx_1.VoteType.VOTE_TYPE_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.vote !== undefined && (obj.vote = (0, tx_1.voteTypeToJSON)(message.vote));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventBundleVote();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
        message.vote = (_d = object.vote) !== null && _d !== void 0 ? _d : tx_1.VoteType.VOTE_TYPE_UNSPECIFIED;
        return message;
    },
};
function createBaseEventBundleProposed() {
    return {
        pool_id: "0",
        id: "0",
        storage_id: "",
        uploader: "",
        data_size: "0",
        from_index: "0",
        bundle_size: "0",
        from_key: "",
        to_key: "",
        bundle_summary: "",
        data_hash: "",
        proposed_at: "0",
        storage_provider_id: 0,
        compression_id: 0,
    };
}
exports.EventBundleProposed = {
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
        if (message.data_size !== "0") {
            writer.uint32(40).uint64(message.data_size);
        }
        if (message.from_index !== "0") {
            writer.uint32(48).uint64(message.from_index);
        }
        if (message.bundle_size !== "0") {
            writer.uint32(56).uint64(message.bundle_size);
        }
        if (message.from_key !== "") {
            writer.uint32(66).string(message.from_key);
        }
        if (message.to_key !== "") {
            writer.uint32(74).string(message.to_key);
        }
        if (message.bundle_summary !== "") {
            writer.uint32(82).string(message.bundle_summary);
        }
        if (message.data_hash !== "") {
            writer.uint32(90).string(message.data_hash);
        }
        if (message.proposed_at !== "0") {
            writer.uint32(96).uint64(message.proposed_at);
        }
        if (message.storage_provider_id !== 0) {
            writer.uint32(104).uint32(message.storage_provider_id);
        }
        if (message.compression_id !== 0) {
            writer.uint32(112).uint32(message.compression_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventBundleProposed();
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
                    message.data_size = longToString(reader.uint64());
                    break;
                case 6:
                    message.from_index = longToString(reader.uint64());
                    break;
                case 7:
                    message.bundle_size = longToString(reader.uint64());
                    break;
                case 8:
                    message.from_key = reader.string();
                    break;
                case 9:
                    message.to_key = reader.string();
                    break;
                case 10:
                    message.bundle_summary = reader.string();
                    break;
                case 11:
                    message.data_hash = reader.string();
                    break;
                case 12:
                    message.proposed_at = longToString(reader.uint64());
                    break;
                case 13:
                    message.storage_provider_id = reader.uint32();
                    break;
                case 14:
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
            data_size: isSet(object.data_size) ? String(object.data_size) : "0",
            from_index: isSet(object.from_index) ? String(object.from_index) : "0",
            bundle_size: isSet(object.bundle_size) ? String(object.bundle_size) : "0",
            from_key: isSet(object.from_key) ? String(object.from_key) : "",
            to_key: isSet(object.to_key) ? String(object.to_key) : "",
            bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
            data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
            proposed_at: isSet(object.proposed_at) ? String(object.proposed_at) : "0",
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
        message.data_size !== undefined && (obj.data_size = message.data_size);
        message.from_index !== undefined && (obj.from_index = message.from_index);
        message.bundle_size !== undefined && (obj.bundle_size = message.bundle_size);
        message.from_key !== undefined && (obj.from_key = message.from_key);
        message.to_key !== undefined && (obj.to_key = message.to_key);
        message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
        message.data_hash !== undefined && (obj.data_hash = message.data_hash);
        message.proposed_at !== undefined && (obj.proposed_at = message.proposed_at);
        message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
        message.compression_id !== undefined && (obj.compression_id = Math.round(message.compression_id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var message = createBaseEventBundleProposed();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
        message.uploader = (_d = object.uploader) !== null && _d !== void 0 ? _d : "";
        message.data_size = (_e = object.data_size) !== null && _e !== void 0 ? _e : "0";
        message.from_index = (_f = object.from_index) !== null && _f !== void 0 ? _f : "0";
        message.bundle_size = (_g = object.bundle_size) !== null && _g !== void 0 ? _g : "0";
        message.from_key = (_h = object.from_key) !== null && _h !== void 0 ? _h : "";
        message.to_key = (_j = object.to_key) !== null && _j !== void 0 ? _j : "";
        message.bundle_summary = (_k = object.bundle_summary) !== null && _k !== void 0 ? _k : "";
        message.data_hash = (_l = object.data_hash) !== null && _l !== void 0 ? _l : "";
        message.proposed_at = (_m = object.proposed_at) !== null && _m !== void 0 ? _m : "0";
        message.storage_provider_id = (_o = object.storage_provider_id) !== null && _o !== void 0 ? _o : 0;
        message.compression_id = (_p = object.compression_id) !== null && _p !== void 0 ? _p : 0;
        return message;
    },
};
function createBaseEventBundleFinalized() {
    return {
        pool_id: "0",
        id: "0",
        valid: "0",
        invalid: "0",
        abstain: "0",
        total: "0",
        status: bundles_1.BundleStatus.BUNDLE_STATUS_UNSPECIFIED,
        reward_treasury: "0",
        reward_uploader: "0",
        reward_delegation: "0",
        reward_total: "0",
        finalized_at: "0",
        uploader: "",
        next_uploader: "",
    };
}
exports.EventBundleFinalized = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        if (message.valid !== "0") {
            writer.uint32(24).uint64(message.valid);
        }
        if (message.invalid !== "0") {
            writer.uint32(32).uint64(message.invalid);
        }
        if (message.abstain !== "0") {
            writer.uint32(40).uint64(message.abstain);
        }
        if (message.total !== "0") {
            writer.uint32(48).uint64(message.total);
        }
        if (message.status !== bundles_1.BundleStatus.BUNDLE_STATUS_UNSPECIFIED) {
            writer.uint32(56).int32((0, bundles_1.bundleStatusToNumber)(message.status));
        }
        if (message.reward_treasury !== "0") {
            writer.uint32(64).uint64(message.reward_treasury);
        }
        if (message.reward_uploader !== "0") {
            writer.uint32(72).uint64(message.reward_uploader);
        }
        if (message.reward_delegation !== "0") {
            writer.uint32(80).uint64(message.reward_delegation);
        }
        if (message.reward_total !== "0") {
            writer.uint32(88).uint64(message.reward_total);
        }
        if (message.finalized_at !== "0") {
            writer.uint32(96).uint64(message.finalized_at);
        }
        if (message.uploader !== "") {
            writer.uint32(106).string(message.uploader);
        }
        if (message.next_uploader !== "") {
            writer.uint32(114).string(message.next_uploader);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventBundleFinalized();
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
                    message.valid = longToString(reader.uint64());
                    break;
                case 4:
                    message.invalid = longToString(reader.uint64());
                    break;
                case 5:
                    message.abstain = longToString(reader.uint64());
                    break;
                case 6:
                    message.total = longToString(reader.uint64());
                    break;
                case 7:
                    message.status = (0, bundles_1.bundleStatusFromJSON)(reader.int32());
                    break;
                case 8:
                    message.reward_treasury = longToString(reader.uint64());
                    break;
                case 9:
                    message.reward_uploader = longToString(reader.uint64());
                    break;
                case 10:
                    message.reward_delegation = longToString(reader.uint64());
                    break;
                case 11:
                    message.reward_total = longToString(reader.uint64());
                    break;
                case 12:
                    message.finalized_at = longToString(reader.uint64());
                    break;
                case 13:
                    message.uploader = reader.string();
                    break;
                case 14:
                    message.next_uploader = reader.string();
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
            valid: isSet(object.valid) ? String(object.valid) : "0",
            invalid: isSet(object.invalid) ? String(object.invalid) : "0",
            abstain: isSet(object.abstain) ? String(object.abstain) : "0",
            total: isSet(object.total) ? String(object.total) : "0",
            status: isSet(object.status) ? (0, bundles_1.bundleStatusFromJSON)(object.status) : bundles_1.BundleStatus.BUNDLE_STATUS_UNSPECIFIED,
            reward_treasury: isSet(object.reward_treasury) ? String(object.reward_treasury) : "0",
            reward_uploader: isSet(object.reward_uploader) ? String(object.reward_uploader) : "0",
            reward_delegation: isSet(object.reward_delegation) ? String(object.reward_delegation) : "0",
            reward_total: isSet(object.reward_total) ? String(object.reward_total) : "0",
            finalized_at: isSet(object.finalized_at) ? String(object.finalized_at) : "0",
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            next_uploader: isSet(object.next_uploader) ? String(object.next_uploader) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.id !== undefined && (obj.id = message.id);
        message.valid !== undefined && (obj.valid = message.valid);
        message.invalid !== undefined && (obj.invalid = message.invalid);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.total !== undefined && (obj.total = message.total);
        message.status !== undefined && (obj.status = (0, bundles_1.bundleStatusToJSON)(message.status));
        message.reward_treasury !== undefined && (obj.reward_treasury = message.reward_treasury);
        message.reward_uploader !== undefined && (obj.reward_uploader = message.reward_uploader);
        message.reward_delegation !== undefined && (obj.reward_delegation = message.reward_delegation);
        message.reward_total !== undefined && (obj.reward_total = message.reward_total);
        message.finalized_at !== undefined && (obj.finalized_at = message.finalized_at);
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.next_uploader !== undefined && (obj.next_uploader = message.next_uploader);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var message = createBaseEventBundleFinalized();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.valid = (_c = object.valid) !== null && _c !== void 0 ? _c : "0";
        message.invalid = (_d = object.invalid) !== null && _d !== void 0 ? _d : "0";
        message.abstain = (_e = object.abstain) !== null && _e !== void 0 ? _e : "0";
        message.total = (_f = object.total) !== null && _f !== void 0 ? _f : "0";
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : bundles_1.BundleStatus.BUNDLE_STATUS_UNSPECIFIED;
        message.reward_treasury = (_h = object.reward_treasury) !== null && _h !== void 0 ? _h : "0";
        message.reward_uploader = (_j = object.reward_uploader) !== null && _j !== void 0 ? _j : "0";
        message.reward_delegation = (_k = object.reward_delegation) !== null && _k !== void 0 ? _k : "0";
        message.reward_total = (_l = object.reward_total) !== null && _l !== void 0 ? _l : "0";
        message.finalized_at = (_m = object.finalized_at) !== null && _m !== void 0 ? _m : "0";
        message.uploader = (_o = object.uploader) !== null && _o !== void 0 ? _o : "";
        message.next_uploader = (_p = object.next_uploader) !== null && _p !== void 0 ? _p : "";
        return message;
    },
};
function createBaseEventClaimedUploaderRole() {
    return { pool_id: "0", id: "0", new_uploader: "" };
}
exports.EventClaimedUploaderRole = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        if (message.new_uploader !== "") {
            writer.uint32(26).string(message.new_uploader);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventClaimedUploaderRole();
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
                    message.new_uploader = reader.string();
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
            new_uploader: isSet(object.new_uploader) ? String(object.new_uploader) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.id !== undefined && (obj.id = message.id);
        message.new_uploader !== undefined && (obj.new_uploader = message.new_uploader);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventClaimedUploaderRole();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.new_uploader = (_c = object.new_uploader) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventSkippedUploaderRole() {
    return { pool_id: "0", id: "0", previous_uploader: "", new_uploader: "" };
}
exports.EventSkippedUploaderRole = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        if (message.previous_uploader !== "") {
            writer.uint32(26).string(message.previous_uploader);
        }
        if (message.new_uploader !== "") {
            writer.uint32(34).string(message.new_uploader);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventSkippedUploaderRole();
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
                    message.previous_uploader = reader.string();
                    break;
                case 4:
                    message.new_uploader = reader.string();
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
            previous_uploader: isSet(object.previous_uploader) ? String(object.previous_uploader) : "",
            new_uploader: isSet(object.new_uploader) ? String(object.new_uploader) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.id !== undefined && (obj.id = message.id);
        message.previous_uploader !== undefined && (obj.previous_uploader = message.previous_uploader);
        message.new_uploader !== undefined && (obj.new_uploader = message.new_uploader);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEventSkippedUploaderRole();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.previous_uploader = (_c = object.previous_uploader) !== null && _c !== void 0 ? _c : "";
        message.new_uploader = (_d = object.new_uploader) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEventPointIncreased() {
    return { pool_id: "0", staker: "", current_points: "0" };
}
exports.EventPointIncreased = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.current_points !== "0") {
            writer.uint32(24).uint64(message.current_points);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventPointIncreased();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.current_points = longToString(reader.uint64());
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            current_points: isSet(object.current_points) ? String(object.current_points) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.current_points !== undefined && (obj.current_points = message.current_points);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventPointIncreased();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.current_points = (_c = object.current_points) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEventPointsReset() {
    return { pool_id: "0", staker: "" };
}
exports.EventPointsReset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventPointsReset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
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
            staker: isSet(object.staker) ? String(object.staker) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEventPointsReset();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=events.js.map