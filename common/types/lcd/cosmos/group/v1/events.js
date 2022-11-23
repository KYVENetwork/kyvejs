"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
function createBaseEventCreateGroup() {
    return { group_id: "0" };
}
exports.EventCreateGroup = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { group_id: isSet(object.group_id) ? String(object.group_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventCreateGroup();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseEventUpdateGroup() {
    return { group_id: "0" };
}
exports.EventUpdateGroup = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { group_id: isSet(object.group_id) ? String(object.group_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventUpdateGroup();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseEventCreateGroupPolicy() {
    return { address: "" };
}
exports.EventCreateGroupPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventCreateGroupPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventCreateGroupPolicy();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEventUpdateGroupPolicy() {
    return { address: "" };
}
exports.EventUpdateGroupPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventUpdateGroupPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventUpdateGroupPolicy();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEventSubmitProposal() {
    return { proposal_id: "0" };
}
exports.EventSubmitProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventSubmitProposal();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseEventWithdrawProposal() {
    return { proposal_id: "0" };
}
exports.EventWithdrawProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventWithdrawProposal();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseEventVote() {
    return { proposal_id: "0" };
}
exports.EventVote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEventVote();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseEventExec() {
    return { proposal_id: "0", result: types_1.ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED };
}
exports.EventExec = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.result !== types_1.ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED) {
            writer.uint32(16).int32((0, types_1.proposalExecutorResultToNumber)(message.result));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventExec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.result = (0, types_1.proposalExecutorResultFromJSON)(reader.int32());
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
            proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
            result: isSet(object.result)
                ? (0, types_1.proposalExecutorResultFromJSON)(object.result)
                : types_1.ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.result !== undefined && (obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEventExec();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.result = (_b = object.result) !== null && _b !== void 0 ? _b : types_1.ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        return message;
    },
};
function createBaseEventLeaveGroup() {
    return { group_id: "0", address: "" };
}
exports.EventLeaveGroup = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
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
            group_id: isSet(object.group_id) ? String(object.group_id) : "0",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEventLeaveGroup();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
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