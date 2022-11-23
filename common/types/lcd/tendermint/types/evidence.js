"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../google/protobuf/timestamp");
var types_1 = require("./types");
var validator_1 = require("./validator");
exports.protobufPackage = "tendermint.types";
function createBaseEvidence() {
    return { duplicate_vote_evidence: undefined, light_client_attack_evidence: undefined };
}
exports.Evidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.duplicate_vote_evidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.light_client_attack_evidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.light_client_attack_evidence = exports.LightClientAttackEvidence.decode(reader, reader.uint32());
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
            duplicate_vote_evidence: isSet(object.duplicate_vote_evidence)
                ? exports.DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence)
                : undefined,
            light_client_attack_evidence: isSet(object.light_client_attack_evidence)
                ? exports.LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.duplicate_vote_evidence !== undefined && (obj.duplicate_vote_evidence = message.duplicate_vote_evidence
            ? exports.DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence)
            : undefined);
        message.light_client_attack_evidence !== undefined &&
            (obj.light_client_attack_evidence = message.light_client_attack_evidence
                ? exports.LightClientAttackEvidence.toJSON(message.light_client_attack_evidence)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseEvidence();
        message.duplicate_vote_evidence =
            (object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null)
                ? exports.DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence)
                : undefined;
        message.light_client_attack_evidence =
            (object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null)
                ? exports.LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence)
                : undefined;
        return message;
    },
};
function createBaseDuplicateVoteEvidence() {
    return { vote_a: undefined, vote_b: undefined, total_voting_power: "0", validator_power: "0", timestamp: undefined };
}
exports.DuplicateVoteEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.vote_a !== undefined) {
            types_1.Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
        }
        if (message.vote_b !== undefined) {
            types_1.Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== "0") {
            writer.uint32(24).int64(message.total_voting_power);
        }
        if (message.validator_power !== "0") {
            writer.uint32(32).int64(message.validator_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_a = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vote_b = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = longToString(reader.int64());
                    break;
                case 4:
                    message.validator_power = longToString(reader.int64());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            vote_a: isSet(object.vote_a) ? types_1.Vote.fromJSON(object.vote_a) : undefined,
            vote_b: isSet(object.vote_b) ? types_1.Vote.fromJSON(object.vote_b) : undefined,
            total_voting_power: isSet(object.total_voting_power) ? String(object.total_voting_power) : "0",
            validator_power: isSet(object.validator_power) ? String(object.validator_power) : "0",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote_a !== undefined && (obj.vote_a = message.vote_a ? types_1.Vote.toJSON(message.vote_a) : undefined);
        message.vote_b !== undefined && (obj.vote_b = message.vote_b ? types_1.Vote.toJSON(message.vote_b) : undefined);
        message.total_voting_power !== undefined && (obj.total_voting_power = message.total_voting_power);
        message.validator_power !== undefined && (obj.validator_power = message.validator_power);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDuplicateVoteEvidence();
        message.vote_a = (object.vote_a !== undefined && object.vote_a !== null)
            ? types_1.Vote.fromPartial(object.vote_a)
            : undefined;
        message.vote_b = (object.vote_b !== undefined && object.vote_b !== null)
            ? types_1.Vote.fromPartial(object.vote_b)
            : undefined;
        message.total_voting_power = (_a = object.total_voting_power) !== null && _a !== void 0 ? _a : "0";
        message.validator_power = (_b = object.validator_power) !== null && _b !== void 0 ? _b : "0";
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseLightClientAttackEvidence() {
    return {
        conflicting_block: undefined,
        common_height: "0",
        byzantine_validators: [],
        total_voting_power: "0",
        timestamp: undefined,
    };
}
exports.LightClientAttackEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.conflicting_block !== undefined) {
            types_1.LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
        }
        if (message.common_height !== "0") {
            writer.uint32(16).int64(message.common_height);
        }
        for (var _i = 0, _a = message.byzantine_validators; _i < _a.length; _i++) {
            var v = _a[_i];
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_voting_power !== "0") {
            writer.uint32(32).int64(message.total_voting_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflicting_block = types_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.common_height = longToString(reader.int64());
                    break;
                case 3:
                    message.byzantine_validators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.total_voting_power = longToString(reader.int64());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            conflicting_block: isSet(object.conflicting_block) ? types_1.LightBlock.fromJSON(object.conflicting_block) : undefined,
            common_height: isSet(object.common_height) ? String(object.common_height) : "0",
            byzantine_validators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators)
                ? object.byzantine_validators.map(function (e) { return validator_1.Validator.fromJSON(e); })
                : [],
            total_voting_power: isSet(object.total_voting_power) ? String(object.total_voting_power) : "0",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.conflicting_block !== undefined &&
            (obj.conflicting_block = message.conflicting_block ? types_1.LightBlock.toJSON(message.conflicting_block) : undefined);
        message.common_height !== undefined && (obj.common_height = message.common_height);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(function (e) { return e ? validator_1.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.byzantine_validators = [];
        }
        message.total_voting_power !== undefined && (obj.total_voting_power = message.total_voting_power);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseLightClientAttackEvidence();
        message.conflicting_block = (object.conflicting_block !== undefined && object.conflicting_block !== null)
            ? types_1.LightBlock.fromPartial(object.conflicting_block)
            : undefined;
        message.common_height = (_a = object.common_height) !== null && _a !== void 0 ? _a : "0";
        message.byzantine_validators = ((_b = object.byzantine_validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return validator_1.Validator.fromPartial(e); })) || [];
        message.total_voting_power = (_c = object.total_voting_power) !== null && _c !== void 0 ? _c : "0";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseEvidenceList() {
    return { evidence: [] };
}
exports.EvidenceList = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.evidence; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidenceList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence) ? object.evidence.map(function (e) { return exports.Evidence.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(function (e) { return e ? exports.Evidence.toJSON(e) : undefined; });
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseEvidenceList();
        message.evidence = ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Evidence.fromPartial(e); })) || [];
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
//# sourceMappingURL=evidence.js.map