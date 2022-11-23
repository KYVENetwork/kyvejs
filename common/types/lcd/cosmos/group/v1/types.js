"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = exports.TallyResult = exports.Proposal = exports.GroupPolicyInfo = exports.GroupMember = exports.GroupInfo = exports.DecisionPolicyWindows = exports.PercentageDecisionPolicy = exports.ThresholdDecisionPolicy = exports.Members = exports.Member = exports.proposalExecutorResultToNumber = exports.proposalExecutorResultToJSON = exports.proposalExecutorResultFromJSON = exports.ProposalExecutorResult = exports.proposalResultToNumber = exports.proposalResultToJSON = exports.proposalResultFromJSON = exports.ProposalResult = exports.proposalStatusToNumber = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatus = exports.voteOptionToNumber = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOption = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var duration_1 = require("../../../google/protobuf/duration");
var timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.group.v1";
/** VoteOption enumerates the valid vote options for a given proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption["VOTE_OPTION_UNSPECIFIED"] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption["VOTE_OPTION_YES"] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption["VOTE_OPTION_ABSTAIN"] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption["VOTE_OPTION_NO"] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption["VOTE_OPTION_NO_WITH_VETO"] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption["UNRECOGNIZED"] = "UNRECOGNIZED";
})(VoteOption = exports.VoteOption || (exports.VoteOption = {}));
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
exports.voteOptionFromJSON = voteOptionFromJSON;
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteOptionToJSON = voteOptionToJSON;
function voteOptionToNumber(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return 0;
        case VoteOption.VOTE_OPTION_YES:
            return 1;
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return 2;
        case VoteOption.VOTE_OPTION_NO:
            return 3;
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return 4;
        case VoteOption.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.voteOptionToNumber = voteOptionToNumber;
/** ProposalStatus defines proposal statuses. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = "PROPOSAL_STATUS_SUBMITTED";
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    ProposalStatus["PROPOSAL_STATUS_CLOSED"] = "PROPOSAL_STATUS_CLOSED";
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    ProposalStatus["PROPOSAL_STATUS_ABORTED"] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = "PROPOSAL_STATUS_WITHDRAWN";
    ProposalStatus["UNRECOGNIZED"] = "UNRECOGNIZED";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_SUBMITTED":
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case "PROPOSAL_STATUS_CLOSED":
            return ProposalStatus.PROPOSAL_STATUS_CLOSED;
        case 3:
        case "PROPOSAL_STATUS_ABORTED":
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 4:
        case "PROPOSAL_STATUS_WITHDRAWN":
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
exports.proposalStatusFromJSON = proposalStatusFromJSON;
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return "PROPOSAL_STATUS_SUBMITTED";
        case ProposalStatus.PROPOSAL_STATUS_CLOSED:
            return "PROPOSAL_STATUS_CLOSED";
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return "PROPOSAL_STATUS_ABORTED";
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return "PROPOSAL_STATUS_WITHDRAWN";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
function proposalStatusToNumber(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return 0;
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return 1;
        case ProposalStatus.PROPOSAL_STATUS_CLOSED:
            return 2;
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return 3;
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return 4;
        case ProposalStatus.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.proposalStatusToNumber = proposalStatusToNumber;
/** ProposalResult defines types of proposal results. */
var ProposalResult;
(function (ProposalResult) {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    ProposalResult["PROPOSAL_RESULT_UNSPECIFIED"] = "PROPOSAL_RESULT_UNSPECIFIED";
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    ProposalResult["PROPOSAL_RESULT_UNFINALIZED"] = "PROPOSAL_RESULT_UNFINALIZED";
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    ProposalResult["PROPOSAL_RESULT_ACCEPTED"] = "PROPOSAL_RESULT_ACCEPTED";
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    ProposalResult["PROPOSAL_RESULT_REJECTED"] = "PROPOSAL_RESULT_REJECTED";
    ProposalResult["UNRECOGNIZED"] = "UNRECOGNIZED";
})(ProposalResult = exports.ProposalResult || (exports.ProposalResult = {}));
function proposalResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_RESULT_UNSPECIFIED":
            return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_RESULT_UNFINALIZED":
            return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
        case 2:
        case "PROPOSAL_RESULT_ACCEPTED":
            return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
        case 3:
        case "PROPOSAL_RESULT_REJECTED":
            return ProposalResult.PROPOSAL_RESULT_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalResult.UNRECOGNIZED;
    }
}
exports.proposalResultFromJSON = proposalResultFromJSON;
function proposalResultToJSON(object) {
    switch (object) {
        case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
            return "PROPOSAL_RESULT_UNSPECIFIED";
        case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
            return "PROPOSAL_RESULT_UNFINALIZED";
        case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
            return "PROPOSAL_RESULT_ACCEPTED";
        case ProposalResult.PROPOSAL_RESULT_REJECTED:
            return "PROPOSAL_RESULT_REJECTED";
        case ProposalResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalResultToJSON = proposalResultToJSON;
function proposalResultToNumber(object) {
    switch (object) {
        case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
            return 0;
        case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
            return 1;
        case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
            return 2;
        case ProposalResult.PROPOSAL_RESULT_REJECTED:
            return 3;
        case ProposalResult.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.proposalResultToNumber = proposalResultToNumber;
/** ProposalExecutorResult defines types of proposal executor results. */
var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResult["UNRECOGNIZED"] = "UNRECOGNIZED";
})(ProposalExecutorResult = exports.ProposalExecutorResult || (exports.ProposalExecutorResult = {}));
function proposalExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
        case 3:
        case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalExecutorResult.UNRECOGNIZED;
    }
}
exports.proposalExecutorResultFromJSON = proposalExecutorResultFromJSON;
function proposalExecutorResultToJSON(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalExecutorResultToJSON = proposalExecutorResultToJSON;
function proposalExecutorResultToNumber(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return 0;
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return 1;
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return 2;
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return 3;
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.proposalExecutorResultToNumber = proposalExecutorResultToNumber;
function createBaseMember() {
    return { address: "", weight: "", metadata: "", added_at: undefined };
}
exports.Member = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.added_at !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.added_at), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMember();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.added_at = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            weight: isSet(object.weight) ? String(object.weight) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            added_at: isSet(object.added_at) ? fromJsonTimestamp(object.added_at) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.added_at !== undefined && (obj.added_at = message.added_at.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMember();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.added_at = (_d = object.added_at) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseMembers() {
    return { members: [] };
}
exports.Members = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.members; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMembers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(exports.Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) { return exports.Member.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.members) {
            obj.members = message.members.map(function (e) { return e ? exports.Member.toJSON(e) : undefined; });
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMembers();
        message.members = ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Member.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseThresholdDecisionPolicy() {
    return { threshold: "", windows: undefined };
}
exports.ThresholdDecisionPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
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
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            windows: isSet(object.windows) ? exports.DecisionPolicyWindows.fromJSON(object.windows) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.threshold !== undefined && (obj.threshold = message.threshold);
        message.windows !== undefined &&
            (obj.windows = message.windows ? exports.DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseThresholdDecisionPolicy();
        message.threshold = (_a = object.threshold) !== null && _a !== void 0 ? _a : "";
        message.windows = (object.windows !== undefined && object.windows !== null)
            ? exports.DecisionPolicyWindows.fromPartial(object.windows)
            : undefined;
        return message;
    },
};
function createBasePercentageDecisionPolicy() {
    return { percentage: "", windows: undefined };
}
exports.PercentageDecisionPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.percentage !== "") {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
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
            percentage: isSet(object.percentage) ? String(object.percentage) : "",
            windows: isSet(object.windows) ? exports.DecisionPolicyWindows.fromJSON(object.windows) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.percentage !== undefined && (obj.percentage = message.percentage);
        message.windows !== undefined &&
            (obj.windows = message.windows ? exports.DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePercentageDecisionPolicy();
        message.percentage = (_a = object.percentage) !== null && _a !== void 0 ? _a : "";
        message.windows = (object.windows !== undefined && object.windows !== null)
            ? exports.DecisionPolicyWindows.fromPartial(object.windows)
            : undefined;
        return message;
    },
};
function createBaseDecisionPolicyWindows() {
    return { voting_period: undefined, min_execution_period: undefined };
}
exports.DecisionPolicyWindows = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.voting_period !== undefined) {
            duration_1.Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        if (message.min_execution_period !== undefined) {
            duration_1.Duration.encode(message.min_execution_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.min_execution_period = duration_1.Duration.decode(reader, reader.uint32());
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
            voting_period: isSet(object.voting_period) ? duration_1.Duration.fromJSON(object.voting_period) : undefined,
            min_execution_period: isSet(object.min_execution_period)
                ? duration_1.Duration.fromJSON(object.min_execution_period)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.voting_period !== undefined &&
            (obj.voting_period = message.voting_period ? duration_1.Duration.toJSON(message.voting_period) : undefined);
        message.min_execution_period !== undefined && (obj.min_execution_period = message.min_execution_period
            ? duration_1.Duration.toJSON(message.min_execution_period)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseDecisionPolicyWindows();
        message.voting_period = (object.voting_period !== undefined && object.voting_period !== null)
            ? duration_1.Duration.fromPartial(object.voting_period)
            : undefined;
        message.min_execution_period = (object.min_execution_period !== undefined && object.min_execution_period !== null)
            ? duration_1.Duration.fromPartial(object.min_execution_period)
            : undefined;
        return message;
    },
};
function createBaseGroupInfo() {
    return { id: "0", admin: "", metadata: "", version: "0", total_weight: "", created_at: undefined };
}
exports.GroupInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.version !== "0") {
            writer.uint32(32).uint64(message.version);
        }
        if (message.total_weight !== "") {
            writer.uint32(42).string(message.total_weight);
        }
        if (message.created_at !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.created_at), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.version = longToString(reader.uint64());
                    break;
                case 5:
                    message.total_weight = reader.string();
                    break;
                case 6:
                    message.created_at = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            version: isSet(object.version) ? String(object.version) : "0",
            total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
            created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = message.version);
        message.total_weight !== undefined && (obj.total_weight = message.total_weight);
        message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseGroupInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.admin = (_b = object.admin) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "0";
        message.total_weight = (_e = object.total_weight) !== null && _e !== void 0 ? _e : "";
        message.created_at = (_f = object.created_at) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseGroupMember() {
    return { group_id: "0", member: undefined };
}
exports.GroupMember = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.group_id !== "0") {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupMember();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.member = exports.Member.decode(reader, reader.uint32());
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
            member: isSet(object.member) ? exports.Member.fromJSON(object.member) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.member !== undefined && (obj.member = message.member ? exports.Member.toJSON(message.member) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGroupMember();
        message.group_id = (_a = object.group_id) !== null && _a !== void 0 ? _a : "0";
        message.member = (object.member !== undefined && object.member !== null)
            ? exports.Member.fromPartial(object.member)
            : undefined;
        return message;
    },
};
function createBaseGroupPolicyInfo() {
    return {
        address: "",
        group_id: "0",
        admin: "",
        metadata: "",
        version: "0",
        decision_policy: undefined,
        created_at: undefined,
    };
}
exports.GroupPolicyInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.group_id !== "0") {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.version !== "0") {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decision_policy !== undefined) {
            any_1.Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
        }
        if (message.created_at !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.created_at), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGroupPolicyInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.group_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.version = longToString(reader.uint64());
                    break;
                case 6:
                    message.decision_policy = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.created_at = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            version: isSet(object.version) ? String(object.version) : "0",
            decision_policy: isSet(object.decision_policy) ? any_1.Any.fromJSON(object.decision_policy) : undefined,
            created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.group_id !== undefined && (obj.group_id = message.group_id);
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = message.version);
        message.decision_policy !== undefined &&
            (obj.decision_policy = message.decision_policy ? any_1.Any.toJSON(message.decision_policy) : undefined);
        message.created_at !== undefined && (obj.created_at = message.created_at.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseGroupPolicyInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.group_id = (_b = object.group_id) !== null && _b !== void 0 ? _b : "0";
        message.admin = (_c = object.admin) !== null && _c !== void 0 ? _c : "";
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
        message.version = (_e = object.version) !== null && _e !== void 0 ? _e : "0";
        message.decision_policy = (object.decision_policy !== undefined && object.decision_policy !== null)
            ? any_1.Any.fromPartial(object.decision_policy)
            : undefined;
        message.created_at = (_f = object.created_at) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseProposal() {
    return {
        id: "0",
        address: "",
        metadata: "",
        proposers: [],
        submit_time: undefined,
        group_version: "0",
        group_policy_version: "0",
        status: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
        result: ProposalResult.PROPOSAL_RESULT_UNSPECIFIED,
        final_tally_result: undefined,
        voting_period_end: undefined,
        executor_result: ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED,
        messages: [],
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (var _i = 0, _a = message.proposers; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        if (message.submit_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.group_version !== "0") {
            writer.uint32(48).uint64(message.group_version);
        }
        if (message.group_policy_version !== "0") {
            writer.uint32(56).uint64(message.group_policy_version);
        }
        if (message.status !== ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED) {
            writer.uint32(64).int32(proposalStatusToNumber(message.status));
        }
        if (message.result !== ProposalResult.PROPOSAL_RESULT_UNSPECIFIED) {
            writer.uint32(72).int32(proposalResultToNumber(message.result));
        }
        if (message.final_tally_result !== undefined) {
            exports.TallyResult.encode(message.final_tally_result, writer.uint32(82).fork()).ldelim();
        }
        if (message.voting_period_end !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.voting_period_end), writer.uint32(90).fork()).ldelim();
        }
        if (message.executor_result !== ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED) {
            writer.uint32(96).int32(proposalExecutorResultToNumber(message.executor_result));
        }
        for (var _b = 0, _c = message.messages; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(106).fork()).ldelim();
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
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submit_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.group_version = longToString(reader.uint64());
                    break;
                case 7:
                    message.group_policy_version = longToString(reader.uint64());
                    break;
                case 8:
                    message.status = proposalStatusFromJSON(reader.int32());
                    break;
                case 9:
                    message.result = proposalResultFromJSON(reader.int32());
                    break;
                case 10:
                    message.final_tally_result = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.voting_period_end = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.executor_result = proposalExecutorResultFromJSON(reader.int32());
                    break;
                case 13:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map(function (e) { return String(e); }) : [],
            submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
            group_version: isSet(object.group_version) ? String(object.group_version) : "0",
            group_policy_version: isSet(object.group_policy_version) ? String(object.group_policy_version) : "0",
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
            result: isSet(object.result) ? proposalResultFromJSON(object.result) : ProposalResult.PROPOSAL_RESULT_UNSPECIFIED,
            final_tally_result: isSet(object.final_tally_result)
                ? exports.TallyResult.fromJSON(object.final_tally_result)
                : undefined,
            voting_period_end: isSet(object.voting_period_end) ? fromJsonTimestamp(object.voting_period_end) : undefined,
            executor_result: isSet(object.executor_result)
                ? proposalExecutorResultFromJSON(object.executor_result)
                : ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED,
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.proposers) {
            obj.proposers = message.proposers.map(function (e) { return e; });
        }
        else {
            obj.proposers = [];
        }
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        message.group_version !== undefined && (obj.group_version = message.group_version);
        message.group_policy_version !== undefined && (obj.group_policy_version = message.group_policy_version);
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
        message.final_tally_result !== undefined &&
            (obj.final_tally_result = message.final_tally_result
                ? exports.TallyResult.toJSON(message.final_tally_result)
                : undefined);
        message.voting_period_end !== undefined && (obj.voting_period_end = message.voting_period_end.toISOString());
        message.executor_result !== undefined &&
            (obj.executor_result = proposalExecutorResultToJSON(message.executor_result));
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseProposal();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.proposers = ((_d = object.proposers) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.submit_time = (_e = object.submit_time) !== null && _e !== void 0 ? _e : undefined;
        message.group_version = (_f = object.group_version) !== null && _f !== void 0 ? _f : "0";
        message.group_policy_version = (_g = object.group_policy_version) !== null && _g !== void 0 ? _g : "0";
        message.status = (_h = object.status) !== null && _h !== void 0 ? _h : ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        message.result = (_j = object.result) !== null && _j !== void 0 ? _j : ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
        message.final_tally_result = (object.final_tally_result !== undefined && object.final_tally_result !== null)
            ? exports.TallyResult.fromPartial(object.final_tally_result)
            : undefined;
        message.voting_period_end = (_k = object.voting_period_end) !== null && _k !== void 0 ? _k : undefined;
        message.executor_result = (_l = object.executor_result) !== null && _l !== void 0 ? _l : ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        message.messages = ((_m = object.messages) === null || _m === void 0 ? void 0 : _m.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseTallyResult() {
    return { yes_count: "", abstain_count: "", no_count: "", no_with_veto_count: "" };
}
exports.TallyResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.yes_count !== "") {
            writer.uint32(10).string(message.yes_count);
        }
        if (message.abstain_count !== "") {
            writer.uint32(18).string(message.abstain_count);
        }
        if (message.no_count !== "") {
            writer.uint32(26).string(message.no_count);
        }
        if (message.no_with_veto_count !== "") {
            writer.uint32(34).string(message.no_with_veto_count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTallyResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes_count = reader.string();
                    break;
                case 2:
                    message.abstain_count = reader.string();
                    break;
                case 3:
                    message.no_count = reader.string();
                    break;
                case 4:
                    message.no_with_veto_count = reader.string();
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
            yes_count: isSet(object.yes_count) ? String(object.yes_count) : "",
            abstain_count: isSet(object.abstain_count) ? String(object.abstain_count) : "",
            no_count: isSet(object.no_count) ? String(object.no_count) : "",
            no_with_veto_count: isSet(object.no_with_veto_count) ? String(object.no_with_veto_count) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.yes_count !== undefined && (obj.yes_count = message.yes_count);
        message.abstain_count !== undefined && (obj.abstain_count = message.abstain_count);
        message.no_count !== undefined && (obj.no_count = message.no_count);
        message.no_with_veto_count !== undefined && (obj.no_with_veto_count = message.no_with_veto_count);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTallyResult();
        message.yes_count = (_a = object.yes_count) !== null && _a !== void 0 ? _a : "";
        message.abstain_count = (_b = object.abstain_count) !== null && _b !== void 0 ? _b : "";
        message.no_count = (_c = object.no_count) !== null && _c !== void 0 ? _c : "";
        message.no_with_veto_count = (_d = object.no_with_veto_count) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseVote() {
    return {
        proposal_id: "0",
        voter: "",
        option: VoteOption.VOTE_OPTION_UNSPECIFIED,
        metadata: "",
        submit_time: undefined,
    };
}
exports.Vote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== VoteOption.VOTE_OPTION_UNSPECIFIED) {
            writer.uint32(24).int32(voteOptionToNumber(message.option));
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.submit_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
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
                    message.option = voteOptionFromJSON(reader.int32());
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.submit_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : VoteOption.VOTE_OPTION_UNSPECIFIED,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseVote();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.option = (_c = object.option) !== null && _c !== void 0 ? _c : VoteOption.VOTE_OPTION_UNSPECIFIED;
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
        message.submit_time = (_e = object.submit_time) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function toTimestamp(date) {
    var seconds = Math.trunc(date.getTime() / 1000).toString();
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
//# sourceMappingURL=types.js.map