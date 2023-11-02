"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params =
  exports.TallyParams =
  exports.VotingParams =
  exports.DepositParams =
  exports.Vote =
  exports.TallyResult =
  exports.Proposal =
  exports.Deposit =
  exports.WeightedVoteOption =
  exports.proposalStatusToJSON =
  exports.proposalStatusFromJSON =
  exports.ProposalStatus =
  exports.voteOptionToJSON =
  exports.voteOptionFromJSON =
  exports.VoteOption =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var duration_1 = require("../../../google/protobuf/duration");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.gov.v1";
/** Since: cosmos-sdk 0.46 */
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VoteOption[(VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0)] =
    "VOTE_OPTION_UNSPECIFIED";
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VoteOption[(VoteOption["VOTE_OPTION_YES"] = 1)] = "VOTE_OPTION_YES";
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VoteOption[(VoteOption["VOTE_OPTION_ABSTAIN"] = 2)] = "VOTE_OPTION_ABSTAIN";
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VoteOption[(VoteOption["VOTE_OPTION_NO"] = 3)] = "VOTE_OPTION_NO";
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VoteOption[(VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4)] =
    "VOTE_OPTION_NO_WITH_VETO";
  VoteOption[(VoteOption["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED";
})((VoteOption = exports.VoteOption || (exports.VoteOption = {})));
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
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  ProposalStatus[(ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0)] =
    "PROPOSAL_STATUS_UNSPECIFIED";
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  ProposalStatus[(ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1)] =
    "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  ProposalStatus[(ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2)] =
    "PROPOSAL_STATUS_VOTING_PERIOD";
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  ProposalStatus[(ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3)] =
    "PROPOSAL_STATUS_PASSED";
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  ProposalStatus[(ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4)] =
    "PROPOSAL_STATUS_REJECTED";
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  ProposalStatus[(ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5)] =
    "PROPOSAL_STATUS_FAILED";
  ProposalStatus[(ProposalStatus["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED";
})((ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {})));
function proposalStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
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
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
function createBaseWeightedVoteOption() {
  return { option: 0, weight: "" };
}
exports.WeightedVoteOption = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.option = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.weight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      weight: isSet(object.weight) ? globalThis.String(object.weight) : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.option !== 0) {
      obj.option = voteOptionToJSON(message.option);
    }
    if (message.weight !== "") {
      obj.weight = message.weight;
    }
    return obj;
  },
  create: function (base) {
    return exports.WeightedVoteOption.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b;
    var message = createBaseWeightedVoteOption();
    message.option = (_a = object.option) !== null && _a !== void 0 ? _a : 0;
    message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
    return message;
  },
};
function createBaseDeposit() {
  return { proposal_id: "0", depositor: "", amount: [] };
}
exports.Deposit = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
      var v = _a[_i];
      coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDeposit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.proposal_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.depositor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      proposal_id: isSet(object.proposal_id)
        ? globalThis.String(object.proposal_id)
        : "0",
      depositor: isSet(object.depositor)
        ? globalThis.String(object.depositor)
        : "",
      amount: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.amount
      )
        ? object.amount.map(function (e) {
            return coin_1.Coin.fromJSON(e);
          })
        : [],
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if ((_a = message.amount) === null || _a === void 0 ? void 0 : _a.length) {
      obj.amount = message.amount.map(function (e) {
        return coin_1.Coin.toJSON(e);
      });
    }
    return obj;
  },
  create: function (base) {
    return exports.Deposit.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseDeposit();
    message.proposal_id =
      (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
    message.depositor =
      (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
    message.amount =
      ((_c = object.amount) === null || _c === void 0
        ? void 0
        : _c.map(function (e) {
            return coin_1.Coin.fromPartial(e);
          })) || [];
    return message;
  },
};
function createBaseProposal() {
  return {
    id: "0",
    messages: [],
    status: 0,
    final_tally_result: undefined,
    submit_time: undefined,
    deposit_end_time: undefined,
    total_deposit: [],
    voting_start_time: undefined,
    voting_end_time: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
  };
}
exports.Proposal = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
      var v = _a[_i];
      any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.final_tally_result !== undefined) {
      exports.TallyResult.encode(
        message.final_tally_result,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.submit_time !== undefined) {
      timestamp_1.Timestamp.encode(
        toTimestamp(message.submit_time),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.deposit_end_time !== undefined) {
      timestamp_1.Timestamp.encode(
        toTimestamp(message.deposit_end_time),
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (var _b = 0, _c = message.total_deposit; _b < _c.length; _b++) {
      var v = _c[_b];
      coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
    }
    if (message.voting_start_time !== undefined) {
      timestamp_1.Timestamp.encode(
        toTimestamp(message.voting_start_time),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.voting_end_time !== undefined) {
      timestamp_1.Timestamp.encode(
        toTimestamp(message.voting_end_time),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.messages.push(any_1.Any.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.status = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.final_tally_result = exports.TallyResult.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.submit_time = fromTimestamp(
            timestamp_1.Timestamp.decode(reader, reader.uint32())
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.deposit_end_time = fromTimestamp(
            timestamp_1.Timestamp.decode(reader, reader.uint32())
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.total_deposit.push(
            coin_1.Coin.decode(reader, reader.uint32())
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.voting_start_time = fromTimestamp(
            timestamp_1.Timestamp.decode(reader, reader.uint32())
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }
          message.voting_end_time = fromTimestamp(
            timestamp_1.Timestamp.decode(reader, reader.uint32())
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }
          message.metadata = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }
          message.title = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }
          message.summary = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }
          message.proposer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      messages: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.messages
      )
        ? object.messages.map(function (e) {
            return any_1.Any.fromJSON(e);
          })
        : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      final_tally_result: isSet(object.final_tally_result)
        ? exports.TallyResult.fromJSON(object.final_tally_result)
        : undefined,
      submit_time: isSet(object.submit_time)
        ? fromJsonTimestamp(object.submit_time)
        : undefined,
      deposit_end_time: isSet(object.deposit_end_time)
        ? fromJsonTimestamp(object.deposit_end_time)
        : undefined,
      total_deposit: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.total_deposit
      )
        ? object.total_deposit.map(function (e) {
            return coin_1.Coin.fromJSON(e);
          })
        : [],
      voting_start_time: isSet(object.voting_start_time)
        ? fromJsonTimestamp(object.voting_start_time)
        : undefined,
      voting_end_time: isSet(object.voting_end_time)
        ? fromJsonTimestamp(object.voting_end_time)
        : undefined,
      metadata: isSet(object.metadata)
        ? globalThis.String(object.metadata)
        : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      proposer: isSet(object.proposer)
        ? globalThis.String(object.proposer)
        : "",
    };
  },
  toJSON: function (message) {
    var _a, _b;
    var obj = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (
      (_a = message.messages) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.messages = message.messages.map(function (e) {
        return any_1.Any.toJSON(e);
      });
    }
    if (message.status !== 0) {
      obj.status = proposalStatusToJSON(message.status);
    }
    if (message.final_tally_result !== undefined) {
      obj.final_tally_result = exports.TallyResult.toJSON(
        message.final_tally_result
      );
    }
    if (message.submit_time !== undefined) {
      obj.submit_time = message.submit_time.toISOString();
    }
    if (message.deposit_end_time !== undefined) {
      obj.deposit_end_time = message.deposit_end_time.toISOString();
    }
    if (
      (_b = message.total_deposit) === null || _b === void 0
        ? void 0
        : _b.length
    ) {
      obj.total_deposit = message.total_deposit.map(function (e) {
        return coin_1.Coin.toJSON(e);
      });
    }
    if (message.voting_start_time !== undefined) {
      obj.voting_start_time = message.voting_start_time.toISOString();
    }
    if (message.voting_end_time !== undefined) {
      obj.voting_end_time = message.voting_end_time.toISOString();
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.summary !== "") {
      obj.summary = message.summary;
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
    }
    return obj;
  },
  create: function (base) {
    return exports.Proposal.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var message = createBaseProposal();
    message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
    message.messages =
      ((_b = object.messages) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return any_1.Any.fromPartial(e);
          })) || [];
    message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
    message.final_tally_result =
      object.final_tally_result !== undefined &&
      object.final_tally_result !== null
        ? exports.TallyResult.fromPartial(object.final_tally_result)
        : undefined;
    message.submit_time =
      (_d = object.submit_time) !== null && _d !== void 0 ? _d : undefined;
    message.deposit_end_time =
      (_e = object.deposit_end_time) !== null && _e !== void 0 ? _e : undefined;
    message.total_deposit =
      ((_f = object.total_deposit) === null || _f === void 0
        ? void 0
        : _f.map(function (e) {
            return coin_1.Coin.fromPartial(e);
          })) || [];
    message.voting_start_time =
      (_g = object.voting_start_time) !== null && _g !== void 0
        ? _g
        : undefined;
    message.voting_end_time =
      (_h = object.voting_end_time) !== null && _h !== void 0 ? _h : undefined;
    message.metadata =
      (_j = object.metadata) !== null && _j !== void 0 ? _j : "";
    message.title = (_k = object.title) !== null && _k !== void 0 ? _k : "";
    message.summary = (_l = object.summary) !== null && _l !== void 0 ? _l : "";
    message.proposer =
      (_m = object.proposer) !== null && _m !== void 0 ? _m : "";
    return message;
  },
};
function createBaseTallyResult() {
  return {
    yes_count: "",
    abstain_count: "",
    no_count: "",
    no_with_veto_count: "",
  };
}
exports.TallyResult = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
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
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyResult();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.yes_count = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.abstain_count = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.no_count = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.no_with_veto_count = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      yes_count: isSet(object.yes_count)
        ? globalThis.String(object.yes_count)
        : "",
      abstain_count: isSet(object.abstain_count)
        ? globalThis.String(object.abstain_count)
        : "",
      no_count: isSet(object.no_count)
        ? globalThis.String(object.no_count)
        : "",
      no_with_veto_count: isSet(object.no_with_veto_count)
        ? globalThis.String(object.no_with_veto_count)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.yes_count !== "") {
      obj.yes_count = message.yes_count;
    }
    if (message.abstain_count !== "") {
      obj.abstain_count = message.abstain_count;
    }
    if (message.no_count !== "") {
      obj.no_count = message.no_count;
    }
    if (message.no_with_veto_count !== "") {
      obj.no_with_veto_count = message.no_with_veto_count;
    }
    return obj;
  },
  create: function (base) {
    return exports.TallyResult.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseTallyResult();
    message.yes_count =
      (_a = object.yes_count) !== null && _a !== void 0 ? _a : "";
    message.abstain_count =
      (_b = object.abstain_count) !== null && _b !== void 0 ? _b : "";
    message.no_count =
      (_c = object.no_count) !== null && _c !== void 0 ? _c : "";
    message.no_with_veto_count =
      (_d = object.no_with_veto_count) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseVote() {
  return { proposal_id: "0", voter: "", options: [], metadata: "" };
}
exports.Vote = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (var _i = 0, _a = message.options; _i < _a.length; _i++) {
      var v = _a[_i];
      exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVote();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.proposal_id = longToString(reader.uint64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.voter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.options.push(
            exports.WeightedVoteOption.decode(reader, reader.uint32())
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      proposal_id: isSet(object.proposal_id)
        ? globalThis.String(object.proposal_id)
        : "0",
      voter: isSet(object.voter) ? globalThis.String(object.voter) : "",
      options: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.options
      )
        ? object.options.map(function (e) {
            return exports.WeightedVoteOption.fromJSON(e);
          })
        : [],
      metadata: isSet(object.metadata)
        ? globalThis.String(object.metadata)
        : "",
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.voter !== "") {
      obj.voter = message.voter;
    }
    if ((_a = message.options) === null || _a === void 0 ? void 0 : _a.length) {
      obj.options = message.options.map(function (e) {
        return exports.WeightedVoteOption.toJSON(e);
      });
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create: function (base) {
    return exports.Vote.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseVote();
    message.proposal_id =
      (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
    message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
    message.options =
      ((_c = object.options) === null || _c === void 0
        ? void 0
        : _c.map(function (e) {
            return exports.WeightedVoteOption.fromPartial(e);
          })) || [];
    message.metadata =
      (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseDepositParams() {
  return { min_deposit: [], max_deposit_period: undefined };
}
exports.DepositParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.min_deposit; _i < _a.length; _i++) {
      var v = _a[_i];
      coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_deposit_period !== undefined) {
      duration_1.Duration.encode(
        message.max_deposit_period,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseDepositParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.min_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.max_deposit_period = duration_1.Duration.decode(
            reader,
            reader.uint32()
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      min_deposit: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.min_deposit
      )
        ? object.min_deposit.map(function (e) {
            return coin_1.Coin.fromJSON(e);
          })
        : [],
      max_deposit_period: isSet(object.max_deposit_period)
        ? duration_1.Duration.fromJSON(object.max_deposit_period)
        : undefined,
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (
      (_a = message.min_deposit) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.min_deposit = message.min_deposit.map(function (e) {
        return coin_1.Coin.toJSON(e);
      });
    }
    if (message.max_deposit_period !== undefined) {
      obj.max_deposit_period = duration_1.Duration.toJSON(
        message.max_deposit_period
      );
    }
    return obj;
  },
  create: function (base) {
    return exports.DepositParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseDepositParams();
    message.min_deposit =
      ((_a = object.min_deposit) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return coin_1.Coin.fromPartial(e);
          })) || [];
    message.max_deposit_period =
      object.max_deposit_period !== undefined &&
      object.max_deposit_period !== null
        ? duration_1.Duration.fromPartial(object.max_deposit_period)
        : undefined;
    return message;
  },
};
function createBaseVotingParams() {
  return { voting_period: undefined };
}
exports.VotingParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.voting_period !== undefined) {
      duration_1.Duration.encode(
        message.voting_period,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVotingParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.voting_period = duration_1.Duration.decode(
            reader,
            reader.uint32()
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      voting_period: isSet(object.voting_period)
        ? duration_1.Duration.fromJSON(object.voting_period)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.voting_period !== undefined) {
      obj.voting_period = duration_1.Duration.toJSON(message.voting_period);
    }
    return obj;
  },
  create: function (base) {
    return exports.VotingParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var message = createBaseVotingParams();
    message.voting_period =
      object.voting_period !== undefined && object.voting_period !== null
        ? duration_1.Duration.fromPartial(object.voting_period)
        : undefined;
    return message;
  },
};
function createBaseTallyParams() {
  return { quorum: "", threshold: "", veto_threshold: "" };
}
exports.TallyParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(26).string(message.veto_threshold);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTallyParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.quorum = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.threshold = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.veto_threshold = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      quorum: isSet(object.quorum) ? globalThis.String(object.quorum) : "",
      threshold: isSet(object.threshold)
        ? globalThis.String(object.threshold)
        : "",
      veto_threshold: isSet(object.veto_threshold)
        ? globalThis.String(object.veto_threshold)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.quorum !== "") {
      obj.quorum = message.quorum;
    }
    if (message.threshold !== "") {
      obj.threshold = message.threshold;
    }
    if (message.veto_threshold !== "") {
      obj.veto_threshold = message.veto_threshold;
    }
    return obj;
  },
  create: function (base) {
    return exports.TallyParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseTallyParams();
    message.quorum = (_a = object.quorum) !== null && _a !== void 0 ? _a : "";
    message.threshold =
      (_b = object.threshold) !== null && _b !== void 0 ? _b : "";
    message.veto_threshold =
      (_c = object.veto_threshold) !== null && _c !== void 0 ? _c : "";
    return message;
  },
};
function createBaseParams() {
  return {
    min_deposit: [],
    max_deposit_period: undefined,
    voting_period: undefined,
    quorum: "",
    threshold: "",
    veto_threshold: "",
    min_initial_deposit_ratio: "",
    burn_vote_quorum: false,
    burn_proposal_deposit_prevote: false,
    burn_vote_veto: false,
  };
}
exports.Params = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.min_deposit; _i < _a.length; _i++) {
      var v = _a[_i];
      coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_deposit_period !== undefined) {
      duration_1.Duration.encode(
        message.max_deposit_period,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.voting_period !== undefined) {
      duration_1.Duration.encode(
        message.voting_period,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.veto_threshold !== "") {
      writer.uint32(50).string(message.veto_threshold);
    }
    if (message.min_initial_deposit_ratio !== "") {
      writer.uint32(58).string(message.min_initial_deposit_ratio);
    }
    if (message.burn_vote_quorum === true) {
      writer.uint32(104).bool(message.burn_vote_quorum);
    }
    if (message.burn_proposal_deposit_prevote === true) {
      writer.uint32(112).bool(message.burn_proposal_deposit_prevote);
    }
    if (message.burn_vote_veto === true) {
      writer.uint32(120).bool(message.burn_vote_veto);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.min_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.max_deposit_period = duration_1.Duration.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.voting_period = duration_1.Duration.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.quorum = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.threshold = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.veto_threshold = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.min_initial_deposit_ratio = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.burn_vote_quorum = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }
          message.burn_proposal_deposit_prevote = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }
          message.burn_vote_veto = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON: function (object) {
    return {
      min_deposit: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.min_deposit
      )
        ? object.min_deposit.map(function (e) {
            return coin_1.Coin.fromJSON(e);
          })
        : [],
      max_deposit_period: isSet(object.max_deposit_period)
        ? duration_1.Duration.fromJSON(object.max_deposit_period)
        : undefined,
      voting_period: isSet(object.voting_period)
        ? duration_1.Duration.fromJSON(object.voting_period)
        : undefined,
      quorum: isSet(object.quorum) ? globalThis.String(object.quorum) : "",
      threshold: isSet(object.threshold)
        ? globalThis.String(object.threshold)
        : "",
      veto_threshold: isSet(object.veto_threshold)
        ? globalThis.String(object.veto_threshold)
        : "",
      min_initial_deposit_ratio: isSet(object.min_initial_deposit_ratio)
        ? globalThis.String(object.min_initial_deposit_ratio)
        : "",
      burn_vote_quorum: isSet(object.burn_vote_quorum)
        ? globalThis.Boolean(object.burn_vote_quorum)
        : false,
      burn_proposal_deposit_prevote: isSet(object.burn_proposal_deposit_prevote)
        ? globalThis.Boolean(object.burn_proposal_deposit_prevote)
        : false,
      burn_vote_veto: isSet(object.burn_vote_veto)
        ? globalThis.Boolean(object.burn_vote_veto)
        : false,
    };
  },
  toJSON: function (message) {
    var _a;
    var obj = {};
    if (
      (_a = message.min_deposit) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.min_deposit = message.min_deposit.map(function (e) {
        return coin_1.Coin.toJSON(e);
      });
    }
    if (message.max_deposit_period !== undefined) {
      obj.max_deposit_period = duration_1.Duration.toJSON(
        message.max_deposit_period
      );
    }
    if (message.voting_period !== undefined) {
      obj.voting_period = duration_1.Duration.toJSON(message.voting_period);
    }
    if (message.quorum !== "") {
      obj.quorum = message.quorum;
    }
    if (message.threshold !== "") {
      obj.threshold = message.threshold;
    }
    if (message.veto_threshold !== "") {
      obj.veto_threshold = message.veto_threshold;
    }
    if (message.min_initial_deposit_ratio !== "") {
      obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
    }
    if (message.burn_vote_quorum === true) {
      obj.burn_vote_quorum = message.burn_vote_quorum;
    }
    if (message.burn_proposal_deposit_prevote === true) {
      obj.burn_proposal_deposit_prevote = message.burn_proposal_deposit_prevote;
    }
    if (message.burn_vote_veto === true) {
      obj.burn_vote_veto = message.burn_vote_veto;
    }
    return obj;
  },
  create: function (base) {
    return exports.Params.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var message = createBaseParams();
    message.min_deposit =
      ((_a = object.min_deposit) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return coin_1.Coin.fromPartial(e);
          })) || [];
    message.max_deposit_period =
      object.max_deposit_period !== undefined &&
      object.max_deposit_period !== null
        ? duration_1.Duration.fromPartial(object.max_deposit_period)
        : undefined;
    message.voting_period =
      object.voting_period !== undefined && object.voting_period !== null
        ? duration_1.Duration.fromPartial(object.voting_period)
        : undefined;
    message.quorum = (_b = object.quorum) !== null && _b !== void 0 ? _b : "";
    message.threshold =
      (_c = object.threshold) !== null && _c !== void 0 ? _c : "";
    message.veto_threshold =
      (_d = object.veto_threshold) !== null && _d !== void 0 ? _d : "";
    message.min_initial_deposit_ratio =
      (_e = object.min_initial_deposit_ratio) !== null && _e !== void 0
        ? _e
        : "";
    message.burn_vote_quorum =
      (_f = object.burn_vote_quorum) !== null && _f !== void 0 ? _f : false;
    message.burn_proposal_deposit_prevote =
      (_g = object.burn_proposal_deposit_prevote) !== null && _g !== void 0
        ? _g
        : false;
    message.burn_vote_veto =
      (_h = object.burn_vote_veto) !== null && _h !== void 0 ? _h : false;
    return message;
  },
};
function toTimestamp(date) {
  var seconds = Math.trunc(date.getTime() / 1000).toString();
  var nanos = (date.getTime() % 1000) * 1000000;
  return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
  var millis = (globalThis.Number(t.seconds) || 0) * 1000;
  millis += (t.nanos || 0) / 1000000;
  return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
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
//# sourceMappingURL=gov.js.map
