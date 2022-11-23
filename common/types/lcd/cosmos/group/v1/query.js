"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryGroupsByMemberResponse = exports.QueryGroupsByMemberRequest = exports.QueryVotesByVoterResponse = exports.QueryVotesByVoterRequest = exports.QueryVotesByProposalResponse = exports.QueryVotesByProposalRequest = exports.QueryVoteByProposalVoterResponse = exports.QueryVoteByProposalVoterRequest = exports.QueryProposalsByGroupPolicyResponse = exports.QueryProposalsByGroupPolicyRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.QueryGroupPoliciesByAdminResponse = exports.QueryGroupPoliciesByAdminRequest = exports.QueryGroupPoliciesByGroupResponse = exports.QueryGroupPoliciesByGroupRequest = exports.QueryGroupsByAdminResponse = exports.QueryGroupsByAdminRequest = exports.QueryGroupMembersResponse = exports.QueryGroupMembersRequest = exports.QueryGroupPolicyInfoResponse = exports.QueryGroupPolicyInfoRequest = exports.QueryGroupInfoResponse = exports.QueryGroupInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../base/query/v1beta1/pagination");
var types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
function createBaseQueryGroupInfoRequest() {
    return { group_id: "0" };
}
exports.QueryGroupInfoRequest = {
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
        var message = createBaseQueryGroupInfoRequest();
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
        var message = createBaseQueryGroupInfoRequest();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryGroupInfoResponse() {
    return { info: undefined };
}
exports.QueryGroupInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.info !== undefined) {
            types_1.GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { info: isSet(object.info) ? types_1.GroupInfo.fromJSON(object.info) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGroupInfoResponse();
        message.info = (object.info !== undefined && object.info !== null) ? types_1.GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
};
function createBaseQueryGroupPolicyInfoRequest() {
    return { address: "" };
}
exports.QueryGroupPolicyInfoRequest = {
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
        var message = createBaseQueryGroupPolicyInfoRequest();
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
        var message = createBaseQueryGroupPolicyInfoRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryGroupPolicyInfoResponse() {
    return { info: undefined };
}
exports.QueryGroupPolicyInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.info !== undefined) {
            types_1.GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupPolicyInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupPolicyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { info: isSet(object.info) ? types_1.GroupPolicyInfo.fromJSON(object.info) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupPolicyInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryGroupPolicyInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? types_1.GroupPolicyInfo.fromPartial(object.info)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupMembersRequest() {
    return { group_id: "0", pagination: undefined };
}
exports.QueryGroupMembersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupMembersRequest();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupMembersResponse() {
    return { members: [], pagination: undefined };
}
exports.QueryGroupMembersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.members; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) { return types_1.GroupMember.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.members) {
            obj.members = message.members.map(function (e) { return e ? types_1.GroupMember.toJSON(e) : undefined; });
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupMembersResponse();
        message.members = ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupMember.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByAdminRequest() {
    return { admin: "", pagination: undefined };
}
exports.QueryGroupsByAdminRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupsByAdminRequest();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByAdminResponse() {
    return { groups: [], pagination: undefined };
}
exports.QueryGroupsByAdminResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.groups; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) { return types_1.GroupInfo.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(function (e) { return e ? types_1.GroupInfo.toJSON(e) : undefined; });
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupsByAdminResponse();
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupInfo.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByGroupRequest() {
    return { group_id: "0", pagination: undefined };
}
exports.QueryGroupPoliciesByGroupRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupPoliciesByGroupRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupPoliciesByGroupRequest();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByGroupResponse() {
    return { group_policies: [], pagination: undefined };
}
exports.QueryGroupPoliciesByGroupResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.group_policies; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupPoliciesByGroupResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            group_policies: Array.isArray(object === null || object === void 0 ? void 0 : object.group_policies)
                ? object.group_policies.map(function (e) { return types_1.GroupPolicyInfo.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(function (e) { return e ? types_1.GroupPolicyInfo.toJSON(e) : undefined; });
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupPoliciesByGroupResponse();
        message.group_policies = ((_a = object.group_policies) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupPolicyInfo.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByAdminRequest() {
    return { admin: "", pagination: undefined };
}
exports.QueryGroupPoliciesByAdminRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupPoliciesByAdminRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupPoliciesByAdminRequest();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByAdminResponse() {
    return { group_policies: [], pagination: undefined };
}
exports.QueryGroupPoliciesByAdminResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.group_policies; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupPoliciesByAdminResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            group_policies: Array.isArray(object === null || object === void 0 ? void 0 : object.group_policies)
                ? object.group_policies.map(function (e) { return types_1.GroupPolicyInfo.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(function (e) { return e ? types_1.GroupPolicyInfo.toJSON(e) : undefined; });
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupPoliciesByAdminResponse();
        message.group_policies = ((_a = object.group_policies) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupPolicyInfo.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryProposalRequest() {
    return { proposal_id: "0" };
}
exports.QueryProposalRequest = {
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
        var message = createBaseQueryProposalRequest();
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
        var message = createBaseQueryProposalRequest();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryProposalResponse() {
    return { proposal: undefined };
}
exports.QueryProposalResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { proposal: isSet(object.proposal) ? types_1.Proposal.fromJSON(object.proposal) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryProposalResponse();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? types_1.Proposal.fromPartial(object.proposal)
            : undefined;
        return message;
    },
};
function createBaseQueryProposalsByGroupPolicyRequest() {
    return { address: "", pagination: undefined };
}
exports.QueryProposalsByGroupPolicyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalsByGroupPolicyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalsByGroupPolicyRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryProposalsByGroupPolicyResponse() {
    return { proposals: [], pagination: undefined };
}
exports.QueryProposalsByGroupPolicyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.proposals; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalsByGroupPolicyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) { return types_1.Proposal.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) { return e ? types_1.Proposal.toJSON(e) : undefined; });
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.Proposal.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVoteByProposalVoterRequest() {
    return { proposal_id: "0", voter: "" };
}
exports.QueryVoteByProposalVoterRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVoteByProposalVoterRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
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
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryVoteByProposalVoterRequest();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryVoteByProposalVoterResponse() {
    return { vote: undefined };
}
exports.QueryVoteByProposalVoterResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { vote: isSet(object.vote) ? types_1.Vote.fromJSON(object.vote) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = (object.vote !== undefined && object.vote !== null) ? types_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
};
function createBaseQueryVotesByProposalRequest() {
    return { proposal_id: "0", pagination: undefined };
}
exports.QueryVotesByProposalRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryVotesByProposalRequest();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVotesByProposalResponse() {
    return { votes: [], pagination: undefined };
}
exports.QueryVotesByProposalResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) { return types_1.Vote.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? types_1.Vote.toJSON(e) : undefined; });
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryVotesByProposalResponse();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.Vote.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVotesByVoterRequest() {
    return { voter: "", pagination: undefined };
}
exports.QueryVotesByVoterRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            voter: isSet(object.voter) ? String(object.voter) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.voter !== undefined && (obj.voter = message.voter);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryVotesByVoterRequest();
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVotesByVoterResponse() {
    return { votes: [], pagination: undefined };
}
exports.QueryVotesByVoterResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) { return types_1.Vote.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? types_1.Vote.toJSON(e) : undefined; });
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryVotesByVoterResponse();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.Vote.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByMemberRequest() {
    return { address: "", pagination: undefined };
}
exports.QueryGroupsByMemberRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupsByMemberRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupsByMemberRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByMemberResponse() {
    return { groups: [], pagination: undefined };
}
exports.QueryGroupsByMemberResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.groups; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryGroupsByMemberResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) { return types_1.GroupInfo.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(function (e) { return e ? types_1.GroupInfo.toJSON(e) : undefined; });
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryGroupsByMemberResponse();
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map(function (e) { return types_1.GroupInfo.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryTallyResultRequest() {
    return { proposal_id: "0" };
}
exports.QueryTallyResultRequest = {
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
        var message = createBaseQueryTallyResultRequest();
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
        var message = createBaseQueryTallyResultRequest();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryTallyResultResponse() {
    return { tally: undefined };
}
exports.QueryTallyResultResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tally !== undefined) {
            types_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = types_1.TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { tally: isSet(object.tally) ? types_1.TallyResult.fromJSON(object.tally) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? types_1.TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryTallyResultResponse();
        message.tally = (object.tally !== undefined && object.tally !== null)
            ? types_1.TallyResult.fromPartial(object.tally)
            : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.group.v1.Query";
        this.rpc = rpc;
        this.GroupInfo = this.GroupInfo.bind(this);
        this.GroupPolicyInfo = this.GroupPolicyInfo.bind(this);
        this.GroupMembers = this.GroupMembers.bind(this);
        this.GroupsByAdmin = this.GroupsByAdmin.bind(this);
        this.GroupPoliciesByGroup = this.GroupPoliciesByGroup.bind(this);
        this.GroupPoliciesByAdmin = this.GroupPoliciesByAdmin.bind(this);
        this.Proposal = this.Proposal.bind(this);
        this.ProposalsByGroupPolicy = this.ProposalsByGroupPolicy.bind(this);
        this.VoteByProposalVoter = this.VoteByProposalVoter.bind(this);
        this.VotesByProposal = this.VotesByProposal.bind(this);
        this.VotesByVoter = this.VotesByVoter.bind(this);
        this.GroupsByMember = this.GroupsByMember.bind(this);
        this.TallyResult = this.TallyResult.bind(this);
    }
    QueryClientImpl.prototype.GroupInfo = function (request) {
        var data = exports.QueryGroupInfoRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupInfo", data);
        return promise.then(function (data) { return exports.QueryGroupInfoResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.GroupPolicyInfo = function (request) {
        var data = exports.QueryGroupPolicyInfoRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupPolicyInfo", data);
        return promise.then(function (data) { return exports.QueryGroupPolicyInfoResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.GroupMembers = function (request) {
        var data = exports.QueryGroupMembersRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupMembers", data);
        return promise.then(function (data) { return exports.QueryGroupMembersResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.GroupsByAdmin = function (request) {
        var data = exports.QueryGroupsByAdminRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupsByAdmin", data);
        return promise.then(function (data) { return exports.QueryGroupsByAdminResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.GroupPoliciesByGroup = function (request) {
        var data = exports.QueryGroupPoliciesByGroupRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupPoliciesByGroup", data);
        return promise.then(function (data) { return exports.QueryGroupPoliciesByGroupResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.GroupPoliciesByAdmin = function (request) {
        var data = exports.QueryGroupPoliciesByAdminRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupPoliciesByAdmin", data);
        return promise.then(function (data) { return exports.QueryGroupPoliciesByAdminResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Proposal = function (request) {
        var data = exports.QueryProposalRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Proposal", data);
        return promise.then(function (data) { return exports.QueryProposalResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.ProposalsByGroupPolicy = function (request) {
        var data = exports.QueryProposalsByGroupPolicyRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ProposalsByGroupPolicy", data);
        return promise.then(function (data) { return exports.QueryProposalsByGroupPolicyResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.VoteByProposalVoter = function (request) {
        var data = exports.QueryVoteByProposalVoterRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "VoteByProposalVoter", data);
        return promise.then(function (data) { return exports.QueryVoteByProposalVoterResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.VotesByProposal = function (request) {
        var data = exports.QueryVotesByProposalRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "VotesByProposal", data);
        return promise.then(function (data) { return exports.QueryVotesByProposalResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.VotesByVoter = function (request) {
        var data = exports.QueryVotesByVoterRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "VotesByVoter", data);
        return promise.then(function (data) { return exports.QueryVotesByVoterResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.GroupsByMember = function (request) {
        var data = exports.QueryGroupsByMemberRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GroupsByMember", data);
        return promise.then(function (data) { return exports.QueryGroupsByMemberResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.TallyResult = function (request) {
        var data = exports.QueryTallyResultRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "TallyResult", data);
        return promise.then(function (data) { return exports.QueryTallyResultResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map