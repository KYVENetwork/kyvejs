"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
function createBaseGenesisState() {
    return {
        group_seq: "0",
        groups: [],
        group_members: [],
        group_policy_seq: "0",
        group_policies: [],
        proposal_seq: "0",
        proposals: [],
        votes: [],
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_seq !== "0") {
            writer.uint32(8).uint64(message.group_seq);
        }
        for (var _i = 0, _a = message.groups; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.group_members; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.group_policy_seq !== "0") {
            writer.uint32(32).uint64(message.group_policy_seq);
        }
        for (var _d = 0, _e = message.group_policies; _d < _e.length; _d++) {
            var v = _e[_d];
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposal_seq !== "0") {
            writer.uint32(48).uint64(message.proposal_seq);
        }
        for (var _f = 0, _g = message.proposals; _f < _g.length; _f++) {
            var v = _g[_f];
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _h = 0, _j = message.votes; _h < _j.length; _h++) {
            var v = _j[_h];
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_seq = longToString(reader.uint64());
                    break;
                case 2:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.group_members.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.group_policy_seq = longToString(reader.uint64());
                    break;
                case 5:
                    message.group_policies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposal_seq = longToString(reader.uint64());
                    break;
                case 7:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
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
            group_seq: isSet(object.group_seq) ? String(object.group_seq) : "0",
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map(function (e) { return types_1.GroupInfo.fromJSON(e); }) : [],
            group_members: Array.isArray(object === null || object === void 0 ? void 0 : object.group_members)
                ? object.group_members.map(function (e) { return types_1.GroupMember.fromJSON(e); })
                : [],
            group_policy_seq: isSet(object.group_policy_seq) ? String(object.group_policy_seq) : "0",
            group_policies: Array.isArray(object === null || object === void 0 ? void 0 : object.group_policies)
                ? object.group_policies.map(function (e) { return types_1.GroupPolicyInfo.fromJSON(e); })
                : [],
            proposal_seq: isSet(object.proposal_seq) ? String(object.proposal_seq) : "0",
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) { return types_1.Proposal.fromJSON(e); }) : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) { return types_1.Vote.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_seq !== undefined && (obj.group_seq = message.group_seq);
        if (message.groups) {
            obj.groups = message.groups.map(function (e) { return e ? types_1.GroupInfo.toJSON(e) : undefined; });
        }
        else {
            obj.groups = [];
        }
        if (message.group_members) {
            obj.group_members = message.group_members.map(function (e) { return e ? types_1.GroupMember.toJSON(e) : undefined; });
        }
        else {
            obj.group_members = [];
        }
        message.group_policy_seq !== undefined && (obj.group_policy_seq = message.group_policy_seq);
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(function (e) { return e ? types_1.GroupPolicyInfo.toJSON(e) : undefined; });
        }
        else {
            obj.group_policies = [];
        }
        message.proposal_seq !== undefined && (obj.proposal_seq = message.proposal_seq);
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) { return e ? types_1.Proposal.toJSON(e) : undefined; });
        }
        else {
            obj.proposals = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? types_1.Vote.toJSON(e) : undefined; });
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseGenesisState();
        message.group_seq = (_a = object.group_seq) !== null && _a !== void 0 ? _a : "0";
        message.groups = ((_b = object.groups) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_1.GroupInfo.fromPartial(e); })) || [];
        message.group_members = ((_c = object.group_members) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.GroupMember.fromPartial(e); })) || [];
        message.group_policy_seq = (_d = object.group_policy_seq) !== null && _d !== void 0 ? _d : "0";
        message.group_policies = ((_e = object.group_policies) === null || _e === void 0 ? void 0 : _e.map(function (e) { return types_1.GroupPolicyInfo.fromPartial(e); })) || [];
        message.proposal_seq = (_f = object.proposal_seq) !== null && _f !== void 0 ? _f : "0";
        message.proposals = ((_g = object.proposals) === null || _g === void 0 ? void 0 : _g.map(function (e) { return types_1.Proposal.fromPartial(e); })) || [];
        message.votes = ((_h = object.votes) === null || _h === void 0 ? void 0 : _h.map(function (e) { return types_1.Vote.fromPartial(e); })) || [];
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
//# sourceMappingURL=genesis.js.map