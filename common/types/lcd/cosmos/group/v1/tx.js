"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgVoteResponse = exports.MsgVote = exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgUpdateGroupPolicyAdmin = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.execToNumber = exports.execToJSON = exports.execFromJSON = exports.Exec = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec["EXEC_UNSPECIFIED"] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec["EXEC_TRY"] = "EXEC_TRY";
    Exec["UNRECOGNIZED"] = "UNRECOGNIZED";
})(Exec = exports.Exec || (exports.Exec = {}));
function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
exports.execFromJSON = execFromJSON;
function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.execToJSON = execToJSON;
function execToNumber(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return 0;
        case Exec.EXEC_TRY:
            return 1;
        case Exec.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.execToNumber = execToNumber;
function createBaseMsgCreateGroup() {
    return { admin: "", members: [], metadata: "" };
}
exports.MsgCreateGroup = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (var _i = 0, _a = message.members; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) { return types_1.Member.fromJSON(e); }) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(function (e) { return e ? types_1.Member.toJSON(e) : undefined; });
        }
        else {
            obj.members = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgCreateGroup();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.Member.fromPartial(e); })) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateGroupResponse() {
    return { group_id: "0" };
}
exports.MsgCreateGroupResponse = {
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
        var message = createBaseMsgCreateGroupResponse();
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
        var message = createBaseMsgCreateGroupResponse();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMsgUpdateGroupMembers() {
    return { admin: "", group_id: "0", member_updates: [] };
}
exports.MsgUpdateGroupMembers = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== "0") {
            writer.uint32(16).uint64(message.group_id);
        }
        for (var _i = 0, _a = message.member_updates; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Member.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.member_updates.push(types_1.Member.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? String(object.group_id) : "0",
            member_updates: Array.isArray(object === null || object === void 0 ? void 0 : object.member_updates)
                ? object.member_updates.map(function (e) { return types_1.Member.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = message.group_id);
        if (message.member_updates) {
            obj.member_updates = message.member_updates.map(function (e) { return e ? types_1.Member.toJSON(e) : undefined; });
        }
        else {
            obj.member_updates = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUpdateGroupMembers();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.group_id = (_b = object.group_id) !== null && _b !== void 0 ? _b : "0";
        message.member_updates = ((_c = object.member_updates) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.Member.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
exports.MsgUpdateGroupMembersResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMembersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupAdmin() {
    return { admin: "", group_id: "0", new_admin: "" };
}
exports.MsgUpdateGroupAdmin = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== "0") {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.new_admin !== "") {
            writer.uint32(26).string(message.new_admin);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.new_admin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? String(object.group_id) : "0",
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUpdateGroupAdmin();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.group_id = (_b = object.group_id) !== null && _b !== void 0 ? _b : "0";
        message.new_admin = (_c = object.new_admin) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
exports.MsgUpdateGroupAdminResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupAdminResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupMetadata() {
    return { admin: "", group_id: "0", metadata: "" };
}
exports.MsgUpdateGroupMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== "0") {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? String(object.group_id) : "0",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUpdateGroupMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.group_id = (_b = object.group_id) !== null && _b !== void 0 ? _b : "0";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupMetadataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
};
function createBaseMsgCreateGroupPolicy() {
    return { admin: "", group_id: "0", metadata: "", decision_policy: undefined };
}
exports.MsgCreateGroupPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== "0") {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decision_policy !== undefined) {
            any_1.Any.encode(message.decision_policy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decision_policy = any_1.Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? String(object.group_id) : "0",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decision_policy: isSet(object.decision_policy) ? any_1.Any.fromJSON(object.decision_policy) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decision_policy !== undefined &&
            (obj.decision_policy = message.decision_policy ? any_1.Any.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgCreateGroupPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.group_id = (_b = object.group_id) !== null && _b !== void 0 ? _b : "0";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
            ? any_1.Any.fromPartial(object.decision_policy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupPolicyResponse() {
    return { address: "" };
}
exports.MsgCreateGroupPolicyResponse = {
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
        var message = createBaseMsgCreateGroupPolicyResponse();
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
        var message = createBaseMsgCreateGroupPolicyResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return { admin: "", address: "", new_admin: "" };
}
exports.MsgUpdateGroupPolicyAdmin = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.new_admin !== "") {
            writer.uint32(26).string(message.new_admin);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.new_admin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.new_admin = (_c = object.new_admin) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        group_metadata: "",
        group_policy_metadata: "",
        group_policy_as_admin: false,
        decision_policy: undefined,
    };
}
exports.MsgCreateGroupWithPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (var _i = 0, _a = message.members; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.group_metadata !== "") {
            writer.uint32(26).string(message.group_metadata);
        }
        if (message.group_policy_metadata !== "") {
            writer.uint32(34).string(message.group_policy_metadata);
        }
        if (message.group_policy_as_admin === true) {
            writer.uint32(40).bool(message.group_policy_as_admin);
        }
        if (message.decision_policy !== undefined) {
            any_1.Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.group_metadata = reader.string();
                    break;
                case 4:
                    message.group_policy_metadata = reader.string();
                    break;
                case 5:
                    message.group_policy_as_admin = reader.bool();
                    break;
                case 6:
                    message.decision_policy = any_1.Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) { return types_1.Member.fromJSON(e); }) : [],
            group_metadata: isSet(object.group_metadata) ? String(object.group_metadata) : "",
            group_policy_metadata: isSet(object.group_policy_metadata) ? String(object.group_policy_metadata) : "",
            group_policy_as_admin: isSet(object.group_policy_as_admin) ? Boolean(object.group_policy_as_admin) : false,
            decision_policy: isSet(object.decision_policy) ? any_1.Any.fromJSON(object.decision_policy) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(function (e) { return e ? types_1.Member.toJSON(e) : undefined; });
        }
        else {
            obj.members = [];
        }
        message.group_metadata !== undefined && (obj.group_metadata = message.group_metadata);
        message.group_policy_metadata !== undefined && (obj.group_policy_metadata = message.group_policy_metadata);
        message.group_policy_as_admin !== undefined && (obj.group_policy_as_admin = message.group_policy_as_admin);
        message.decision_policy !== undefined &&
            (obj.decision_policy = message.decision_policy ? any_1.Any.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgCreateGroupWithPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.Member.fromPartial(e); })) || [];
        message.group_metadata = (_c = object.group_metadata) !== null && _c !== void 0 ? _c : "";
        message.group_policy_metadata = (_d = object.group_policy_metadata) !== null && _d !== void 0 ? _d : "";
        message.group_policy_as_admin = (_e = object.group_policy_as_admin) !== null && _e !== void 0 ? _e : false;
        message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
            ? any_1.Any.fromPartial(object.decision_policy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return { group_id: "0", group_policy_address: "" };
}
exports.MsgCreateGroupWithPolicyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.group_policy_address !== "") {
            writer.uint32(18).string(message.group_policy_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.group_policy_address = reader.string();
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
            group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgCreateGroupWithPolicyResponse();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        message.group_policy_address = (_b = object.group_policy_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyAdminResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyAdminResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return { admin: "", address: "", decision_policy: undefined };
}
exports.MsgUpdateGroupPolicyDecisionPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decision_policy !== undefined) {
            any_1.Any.encode(message.decision_policy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.decision_policy = any_1.Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            decision_policy: isSet(object.decision_policy) ? any_1.Any.fromJSON(object.decision_policy) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.decision_policy !== undefined &&
            (obj.decision_policy = message.decision_policy ? any_1.Any.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
            ? any_1.Any.fromPartial(object.decision_policy)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return { admin: "", address: "", metadata: "" };
}
exports.MsgUpdateGroupPolicyMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyMetadataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
};
function createBaseMsgSubmitProposal() {
    return { address: "", proposers: [], metadata: "", messages: [], exec: Exec.EXEC_UNSPECIFIED };
}
exports.MsgSubmitProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.proposers; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (var _b = 0, _c = message.messages; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== Exec.EXEC_UNSPECIFIED) {
            writer.uint32(40).int32(execToNumber(message.exec));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = execFromJSON(reader.int32());
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
            proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function (e) { return String(e); }) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : Exec.EXEC_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.proposers) {
            obj.proposers = message.proposers.map(function (e) { return e; });
        }
        else {
            obj.proposers = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgSubmitProposal();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.proposers = ((_b = object.proposers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.messages = ((_d = object.messages) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        message.exec = (_e = object.exec) !== null && _e !== void 0 ? _e : Exec.EXEC_UNSPECIFIED;
        return message;
    },
};
function createBaseMsgSubmitProposalResponse() {
    return { proposal_id: "0" };
}
exports.MsgSubmitProposalResponse = {
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
        var message = createBaseMsgSubmitProposalResponse();
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
        var message = createBaseMsgSubmitProposalResponse();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMsgWithdrawProposal() {
    return { proposal_id: "0", address: "" };
}
exports.MsgWithdrawProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
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
            proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgWithdrawProposal();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
exports.MsgWithdrawProposalResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
};
function createBaseMsgVote() {
    return {
        proposal_id: "0",
        voter: "",
        option: types_1.VoteOption.VOTE_OPTION_UNSPECIFIED,
        metadata: "",
        exec: Exec.EXEC_UNSPECIFIED,
    };
}
exports.MsgVote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== types_1.VoteOption.VOTE_OPTION_UNSPECIFIED) {
            writer.uint32(24).int32((0, types_1.voteOptionToNumber)(message.option));
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== Exec.EXEC_UNSPECIFIED) {
            writer.uint32(40).int32(execToNumber(message.exec));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = (0, types_1.voteOptionFromJSON)(reader.int32());
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.exec = execFromJSON(reader.int32());
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
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? (0, types_1.voteOptionFromJSON)(object.option) : types_1.VoteOption.VOTE_OPTION_UNSPECIFIED,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : Exec.EXEC_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = (0, types_1.voteOptionToJSON)(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgVote();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.option = (_c = object.option) !== null && _c !== void 0 ? _c : types_1.VoteOption.VOTE_OPTION_UNSPECIFIED;
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
        message.exec = (_e = object.exec) !== null && _e !== void 0 ? _e : Exec.EXEC_UNSPECIFIED;
        return message;
    },
};
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgVoteResponse();
        return message;
    },
};
function createBaseMsgExec() {
    return { proposal_id: "0", signer: "" };
}
exports.MsgExec = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.signer = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgExec();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgExecResponse() {
    return {};
}
exports.MsgExecResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgExecResponse();
        return message;
    },
};
function createBaseMsgLeaveGroup() {
    return { address: "", group_id: "0" };
}
exports.MsgLeaveGroup = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.group_id !== "0") {
            writer.uint32(16).uint64(message.group_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
        return {
            address: isSet(object.address) ? String(object.address) : "",
            group_id: isSet(object.group_id) ? String(object.group_id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.group_id !== undefined && (obj.group_id = message.group_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgLeaveGroup();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.group_id = (_b = object.group_id) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
exports.MsgLeaveGroupResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgLeaveGroupResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgLeaveGroupResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.group.v1.Msg";
        this.rpc = rpc;
        this.CreateGroup = this.CreateGroup.bind(this);
        this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
        this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
        this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
        this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
        this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
        this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
        this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
        this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.WithdrawProposal = this.WithdrawProposal.bind(this);
        this.Vote = this.Vote.bind(this);
        this.Exec = this.Exec.bind(this);
        this.LeaveGroup = this.LeaveGroup.bind(this);
    }
    MsgClientImpl.prototype.CreateGroup = function (request) {
        var data = exports.MsgCreateGroup.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateGroup", data);
        return promise.then(function (data) { return exports.MsgCreateGroupResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateGroupMembers = function (request) {
        var data = exports.MsgUpdateGroupMembers.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateGroupMembers", data);
        return promise.then(function (data) { return exports.MsgUpdateGroupMembersResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateGroupAdmin = function (request) {
        var data = exports.MsgUpdateGroupAdmin.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateGroupAdmin", data);
        return promise.then(function (data) { return exports.MsgUpdateGroupAdminResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateGroupMetadata = function (request) {
        var data = exports.MsgUpdateGroupMetadata.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateGroupMetadata", data);
        return promise.then(function (data) { return exports.MsgUpdateGroupMetadataResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CreateGroupPolicy = function (request) {
        var data = exports.MsgCreateGroupPolicy.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateGroupPolicy", data);
        return promise.then(function (data) { return exports.MsgCreateGroupPolicyResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CreateGroupWithPolicy = function (request) {
        var data = exports.MsgCreateGroupWithPolicy.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateGroupWithPolicy", data);
        return promise.then(function (data) { return exports.MsgCreateGroupWithPolicyResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateGroupPolicyAdmin = function (request) {
        var data = exports.MsgUpdateGroupPolicyAdmin.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateGroupPolicyAdmin", data);
        return promise.then(function (data) { return exports.MsgUpdateGroupPolicyAdminResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateGroupPolicyDecisionPolicy = function (request) {
        var data = exports.MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateGroupPolicyDecisionPolicy", data);
        return promise.then(function (data) { return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateGroupPolicyMetadata = function (request) {
        var data = exports.MsgUpdateGroupPolicyMetadata.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateGroupPolicyMetadata", data);
        return promise.then(function (data) { return exports.MsgUpdateGroupPolicyMetadataResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.SubmitProposal = function (request) {
        var data = exports.MsgSubmitProposal.encode(request).finish();
        var promise = this.rpc.request(this.service, "SubmitProposal", data);
        return promise.then(function (data) { return exports.MsgSubmitProposalResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.WithdrawProposal = function (request) {
        var data = exports.MsgWithdrawProposal.encode(request).finish();
        var promise = this.rpc.request(this.service, "WithdrawProposal", data);
        return promise.then(function (data) { return exports.MsgWithdrawProposalResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.Vote = function (request) {
        var data = exports.MsgVote.encode(request).finish();
        var promise = this.rpc.request(this.service, "Vote", data);
        return promise.then(function (data) { return exports.MsgVoteResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.Exec = function (request) {
        var data = exports.MsgExec.encode(request).finish();
        var promise = this.rpc.request(this.service, "Exec", data);
        return promise.then(function (data) { return exports.MsgExecResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.LeaveGroup = function (request) {
        var data = exports.MsgLeaveGroup.encode(request).finish();
        var promise = this.rpc.request(this.service, "LeaveGroup", data);
        return promise.then(function (data) { return exports.MsgLeaveGroupResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map