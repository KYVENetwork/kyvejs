"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedelegationCooldown = exports.QueueState = exports.UndelegationQueueEntry = exports.DelegationSlash = exports.DelegationData = exports.DelegationEntry = exports.Delegator = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseDelegator() {
    return { staker: "", delegator: "", k_index: "0", initial_amount: "0" };
}
exports.Delegator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.delegator !== "") {
            writer.uint32(18).string(message.delegator);
        }
        if (message.k_index !== "0") {
            writer.uint32(24).uint64(message.k_index);
        }
        if (message.initial_amount !== "0") {
            writer.uint32(32).uint64(message.initial_amount);
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
                    message.staker = reader.string();
                    break;
                case 2:
                    message.delegator = reader.string();
                    break;
                case 3:
                    message.k_index = longToString(reader.uint64());
                    break;
                case 4:
                    message.initial_amount = longToString(reader.uint64());
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
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            k_index: isSet(object.k_index) ? String(object.k_index) : "0",
            initial_amount: isSet(object.initial_amount) ? String(object.initial_amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        message.initial_amount !== undefined && (obj.initial_amount = message.initial_amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDelegator();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.delegator = (_b = object.delegator) !== null && _b !== void 0 ? _b : "";
        message.k_index = (_c = object.k_index) !== null && _c !== void 0 ? _c : "0";
        message.initial_amount = (_d = object.initial_amount) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseDelegationEntry() {
    return { staker: "", k_index: "0", value: "" };
}
exports.DelegationEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.k_index !== "0") {
            writer.uint32(16).uint64(message.k_index);
        }
        if (message.value !== "") {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.k_index = longToString(reader.uint64());
                    break;
                case 3:
                    message.value = reader.string();
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
            k_index: isSet(object.k_index) ? String(object.k_index) : "0",
            value: isSet(object.value) ? String(object.value) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDelegationEntry();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.k_index = (_b = object.k_index) !== null && _b !== void 0 ? _b : "0";
        message.value = (_c = object.value) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDelegationData() {
    return {
        staker: "",
        current_rewards: "0",
        total_delegation: "0",
        latest_index_k: "0",
        delegator_count: "0",
        latest_index_was_undelegation: false,
    };
}
exports.DelegationData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.current_rewards !== "0") {
            writer.uint32(16).uint64(message.current_rewards);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(24).uint64(message.total_delegation);
        }
        if (message.latest_index_k !== "0") {
            writer.uint32(32).uint64(message.latest_index_k);
        }
        if (message.delegator_count !== "0") {
            writer.uint32(40).uint64(message.delegator_count);
        }
        if (message.latest_index_was_undelegation === true) {
            writer.uint32(48).bool(message.latest_index_was_undelegation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.current_rewards = longToString(reader.uint64());
                    break;
                case 3:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 4:
                    message.latest_index_k = longToString(reader.uint64());
                    break;
                case 5:
                    message.delegator_count = longToString(reader.uint64());
                    break;
                case 6:
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
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseDelegationData();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.current_rewards = (_b = object.current_rewards) !== null && _b !== void 0 ? _b : "0";
        message.total_delegation = (_c = object.total_delegation) !== null && _c !== void 0 ? _c : "0";
        message.latest_index_k = (_d = object.latest_index_k) !== null && _d !== void 0 ? _d : "0";
        message.delegator_count = (_e = object.delegator_count) !== null && _e !== void 0 ? _e : "0";
        message.latest_index_was_undelegation = (_f = object.latest_index_was_undelegation) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseDelegationSlash() {
    return { staker: "", k_index: "0", fraction: "" };
}
exports.DelegationSlash = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.k_index !== "0") {
            writer.uint32(16).uint64(message.k_index);
        }
        if (message.fraction !== "") {
            writer.uint32(26).string(message.fraction);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationSlash();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.k_index = longToString(reader.uint64());
                    break;
                case 3:
                    message.fraction = reader.string();
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
            k_index: isSet(object.k_index) ? String(object.k_index) : "0",
            fraction: isSet(object.fraction) ? String(object.fraction) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDelegationSlash();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.k_index = (_b = object.k_index) !== null && _b !== void 0 ? _b : "0";
        message.fraction = (_c = object.fraction) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUndelegationQueueEntry() {
    return { index: "0", staker: "", delegator: "", amount: "0", creation_time: "0" };
}
exports.UndelegationQueueEntry = {
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
        var message = createBaseUndelegationQueueEntry();
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
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_time !== undefined && (obj.creation_time = message.creation_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseUndelegationQueueEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.delegator = (_c = object.delegator) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        message.creation_time = (_e = object.creation_time) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseQueueState() {
    return { low_index: "0", high_index: "0" };
}
exports.QueueState = {
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
        var message = createBaseQueueState();
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
        var message = createBaseQueueState();
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
//# sourceMappingURL=delegation.js.map