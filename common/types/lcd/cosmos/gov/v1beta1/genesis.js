"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var gov_1 = require("./gov");
exports.protobufPackage = "cosmos.gov.v1beta1";
function createBaseGenesisState() {
    return {
        starting_proposal_id: "0",
        deposits: [],
        votes: [],
        proposals: [],
        deposit_params: undefined,
        voting_params: undefined,
        tally_params: undefined,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.starting_proposal_id !== "0") {
            writer.uint32(8).uint64(message.starting_proposal_id);
        }
        for (var _i = 0, _a = message.deposits; _i < _a.length; _i++) {
            var v = _a[_i];
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.votes; _b < _c.length; _b++) {
            var v = _c[_b];
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.proposals; _d < _e.length; _d++) {
            var v = _e[_d];
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.deposit_params !== undefined) {
            gov_1.DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).ldelim();
        }
        if (message.voting_params !== undefined) {
            gov_1.VotingParams.encode(message.voting_params, writer.uint32(50).fork()).ldelim();
        }
        if (message.tally_params !== undefined) {
            gov_1.TallyParams.encode(message.tally_params, writer.uint32(58).fork()).ldelim();
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
                    message.starting_proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.deposit_params = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.voting_params = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tally_params = gov_1.TallyParams.decode(reader, reader.uint32());
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
            starting_proposal_id: isSet(object.starting_proposal_id) ? String(object.starting_proposal_id) : "0",
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map(function (e) { return gov_1.Deposit.fromJSON(e); }) : [],
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) { return gov_1.Vote.fromJSON(e); }) : [],
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map(function (e) { return gov_1.Proposal.fromJSON(e); }) : [],
            deposit_params: isSet(object.deposit_params) ? gov_1.DepositParams.fromJSON(object.deposit_params) : undefined,
            voting_params: isSet(object.voting_params) ? gov_1.VotingParams.fromJSON(object.voting_params) : undefined,
            tally_params: isSet(object.tally_params) ? gov_1.TallyParams.fromJSON(object.tally_params) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.starting_proposal_id !== undefined && (obj.starting_proposal_id = message.starting_proposal_id);
        if (message.deposits) {
            obj.deposits = message.deposits.map(function (e) { return e ? gov_1.Deposit.toJSON(e) : undefined; });
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? gov_1.Vote.toJSON(e) : undefined; });
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) { return e ? gov_1.Proposal.toJSON(e) : undefined; });
        }
        else {
            obj.proposals = [];
        }
        message.deposit_params !== undefined &&
            (obj.deposit_params = message.deposit_params ? gov_1.DepositParams.toJSON(message.deposit_params) : undefined);
        message.voting_params !== undefined &&
            (obj.voting_params = message.voting_params ? gov_1.VotingParams.toJSON(message.voting_params) : undefined);
        message.tally_params !== undefined &&
            (obj.tally_params = message.tally_params ? gov_1.TallyParams.toJSON(message.tally_params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGenesisState();
        message.starting_proposal_id = (_a = object.starting_proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.deposits = ((_b = object.deposits) === null || _b === void 0 ? void 0 : _b.map(function (e) { return gov_1.Deposit.fromPartial(e); })) || [];
        message.votes = ((_c = object.votes) === null || _c === void 0 ? void 0 : _c.map(function (e) { return gov_1.Vote.fromPartial(e); })) || [];
        message.proposals = ((_d = object.proposals) === null || _d === void 0 ? void 0 : _d.map(function (e) { return gov_1.Proposal.fromPartial(e); })) || [];
        message.deposit_params = (object.deposit_params !== undefined && object.deposit_params !== null)
            ? gov_1.DepositParams.fromPartial(object.deposit_params)
            : undefined;
        message.voting_params = (object.voting_params !== undefined && object.voting_params !== null)
            ? gov_1.VotingParams.fromPartial(object.voting_params)
            : undefined;
        message.tally_params = (object.tally_params !== undefined && object.tally_params !== null)
            ? gov_1.TallyParams.fromPartial(object.tally_params)
            : undefined;
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