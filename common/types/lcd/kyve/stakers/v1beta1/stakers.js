"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueState = exports.LeavePoolEntry = exports.UnbondingStakeEntry = exports.CommissionChangeEntry = exports.Valaccount = exports.Staker = exports.slashTypeToNumber = exports.slashTypeToJSON = exports.slashTypeFromJSON = exports.SlashType = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.stakers.v1beta1";
/** SlashType ... */
var SlashType;
(function (SlashType) {
    /** SLASH_TYPE_UNSPECIFIED - SLASH_TYPE_UNSPECIFIED ... */
    SlashType["SLASH_TYPE_UNSPECIFIED"] = "SLASH_TYPE_UNSPECIFIED";
    /** SLASH_TYPE_TIMEOUT - SLASH_TYPE_TIMEOUT ... */
    SlashType["SLASH_TYPE_TIMEOUT"] = "SLASH_TYPE_TIMEOUT";
    /** SLASH_TYPE_VOTE - SLASH_TYPE_VOTE ... */
    SlashType["SLASH_TYPE_VOTE"] = "SLASH_TYPE_VOTE";
    /** SLASH_TYPE_UPLOAD - SLASH_TYPE_UPLOAD ... */
    SlashType["SLASH_TYPE_UPLOAD"] = "SLASH_TYPE_UPLOAD";
    SlashType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(SlashType = exports.SlashType || (exports.SlashType = {}));
function slashTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SLASH_TYPE_UNSPECIFIED":
            return SlashType.SLASH_TYPE_UNSPECIFIED;
        case 1:
        case "SLASH_TYPE_TIMEOUT":
            return SlashType.SLASH_TYPE_TIMEOUT;
        case 2:
        case "SLASH_TYPE_VOTE":
            return SlashType.SLASH_TYPE_VOTE;
        case 3:
        case "SLASH_TYPE_UPLOAD":
            return SlashType.SLASH_TYPE_UPLOAD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SlashType.UNRECOGNIZED;
    }
}
exports.slashTypeFromJSON = slashTypeFromJSON;
function slashTypeToJSON(object) {
    switch (object) {
        case SlashType.SLASH_TYPE_UNSPECIFIED:
            return "SLASH_TYPE_UNSPECIFIED";
        case SlashType.SLASH_TYPE_TIMEOUT:
            return "SLASH_TYPE_TIMEOUT";
        case SlashType.SLASH_TYPE_VOTE:
            return "SLASH_TYPE_VOTE";
        case SlashType.SLASH_TYPE_UPLOAD:
            return "SLASH_TYPE_UPLOAD";
        case SlashType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.slashTypeToJSON = slashTypeToJSON;
function slashTypeToNumber(object) {
    switch (object) {
        case SlashType.SLASH_TYPE_UNSPECIFIED:
            return 0;
        case SlashType.SLASH_TYPE_TIMEOUT:
            return 1;
        case SlashType.SLASH_TYPE_VOTE:
            return 2;
        case SlashType.SLASH_TYPE_UPLOAD:
            return 3;
        case SlashType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.slashTypeToNumber = slashTypeToNumber;
function createBaseStaker() {
    return { address: "", commission: "", moniker: "", website: "", logo: "" };
}
exports.Staker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.commission !== "") {
            writer.uint32(18).string(message.commission);
        }
        if (message.moniker !== "") {
            writer.uint32(26).string(message.moniker);
        }
        if (message.website !== "") {
            writer.uint32(34).string(message.website);
        }
        if (message.logo !== "") {
            writer.uint32(42).string(message.logo);
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
                    message.address = reader.string();
                    break;
                case 2:
                    message.commission = reader.string();
                    break;
                case 3:
                    message.moniker = reader.string();
                    break;
                case 4:
                    message.website = reader.string();
                    break;
                case 5:
                    message.logo = reader.string();
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
            commission: isSet(object.commission) ? String(object.commission) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseStaker();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.commission = (_b = object.commission) !== null && _b !== void 0 ? _b : "";
        message.moniker = (_c = object.moniker) !== null && _c !== void 0 ? _c : "";
        message.website = (_d = object.website) !== null && _d !== void 0 ? _d : "";
        message.logo = (_e = object.logo) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseValaccount() {
    return { pool_id: "0", staker: "", valaddress: "", points: "0", is_leaving: false };
}
exports.Valaccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.valaddress !== "") {
            writer.uint32(26).string(message.valaddress);
        }
        if (message.points !== "0") {
            writer.uint32(32).uint64(message.points);
        }
        if (message.is_leaving === true) {
            writer.uint32(40).bool(message.is_leaving);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValaccount();
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
                    message.valaddress = reader.string();
                    break;
                case 4:
                    message.points = longToString(reader.uint64());
                    break;
                case 5:
                    message.is_leaving = reader.bool();
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
            valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
            points: isSet(object.points) ? String(object.points) : "0",
            is_leaving: isSet(object.is_leaving) ? Boolean(object.is_leaving) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.valaddress !== undefined && (obj.valaddress = message.valaddress);
        message.points !== undefined && (obj.points = message.points);
        message.is_leaving !== undefined && (obj.is_leaving = message.is_leaving);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseValaccount();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.valaddress = (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
        message.points = (_d = object.points) !== null && _d !== void 0 ? _d : "0";
        message.is_leaving = (_e = object.is_leaving) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseCommissionChangeEntry() {
    return { index: "0", staker: "", commission: "", creation_date: "0" };
}
exports.CommissionChangeEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.commission !== "") {
            writer.uint32(26).string(message.commission);
        }
        if (message.creation_date !== "0") {
            writer.uint32(32).int64(message.creation_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommissionChangeEntry();
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
                    message.commission = reader.string();
                    break;
                case 4:
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
            commission: isSet(object.commission) ? String(object.commission) : "",
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.commission !== undefined && (obj.commission = message.commission);
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCommissionChangeEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.commission = (_c = object.commission) !== null && _c !== void 0 ? _c : "";
        message.creation_date = (_d = object.creation_date) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseUnbondingStakeEntry() {
    return { index: "0", staker: "", amount: "0", creation_date: "0" };
}
exports.UnbondingStakeEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.creation_date !== "0") {
            writer.uint32(32).int64(message.creation_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingStakeEntry();
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
                    message.amount = longToString(reader.uint64());
                    break;
                case 4:
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUnbondingStakeEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        message.creation_date = (_d = object.creation_date) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseLeavePoolEntry() {
    return { index: "0", staker: "", pool_id: "0", creation_date: "0" };
}
exports.LeavePoolEntry = {
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
        if (message.creation_date !== "0") {
            writer.uint32(32).int64(message.creation_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLeavePoolEntry();
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
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseLeavePoolEntry();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        message.creation_date = (_d = object.creation_date) !== null && _d !== void 0 ? _d : "0";
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
//# sourceMappingURL=stakers.js.map