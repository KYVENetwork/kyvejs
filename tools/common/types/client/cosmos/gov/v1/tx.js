"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl =
  exports.MsgServiceName =
  exports.MsgUpdateParamsResponse =
  exports.MsgUpdateParams =
  exports.MsgDepositResponse =
  exports.MsgDeposit =
  exports.MsgVoteWeightedResponse =
  exports.MsgVoteWeighted =
  exports.MsgVoteResponse =
  exports.MsgVote =
  exports.MsgExecLegacyContentResponse =
  exports.MsgExecLegacyContent =
  exports.MsgSubmitProposalResponse =
  exports.MsgSubmitProposal =
  exports.protobufPackage =
    void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
var coin_1 = require("../../base/v1beta1/coin");
var gov_1 = require("./gov");
exports.protobufPackage = "cosmos.gov.v1";
function createBaseMsgSubmitProposal() {
  return {
    messages: [],
    initial_deposit: [],
    proposer: "",
    metadata: "",
    title: "",
    summary: "",
  };
}
exports.MsgSubmitProposal = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
      var v = _a[_i];
      any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (var _b = 0, _c = message.initial_deposit; _b < _c.length; _b++) {
      var v = _c[_b];
      coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(50).string(message.summary);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.messages.push(any_1.Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.initial_deposit.push(
            coin_1.Coin.decode(reader, reader.uint32())
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.proposer = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.metadata = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.summary = reader.string();
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
      messages: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.messages
      )
        ? object.messages.map(function (e) {
            return any_1.Any.fromJSON(e);
          })
        : [],
      initial_deposit: globalThis.Array.isArray(
        object === null || object === void 0 ? void 0 : object.initial_deposit
      )
        ? object.initial_deposit.map(function (e) {
            return coin_1.Coin.fromJSON(e);
          })
        : [],
      proposer: isSet(object.proposer)
        ? globalThis.String(object.proposer)
        : "",
      metadata: isSet(object.metadata)
        ? globalThis.String(object.metadata)
        : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
    };
  },
  toJSON: function (message) {
    var _a, _b;
    var obj = {};
    if (
      (_a = message.messages) === null || _a === void 0 ? void 0 : _a.length
    ) {
      obj.messages = message.messages.map(function (e) {
        return any_1.Any.toJSON(e);
      });
    }
    if (
      (_b = message.initial_deposit) === null || _b === void 0
        ? void 0
        : _b.length
    ) {
      obj.initial_deposit = message.initial_deposit.map(function (e) {
        return coin_1.Coin.toJSON(e);
      });
    }
    if (message.proposer !== "") {
      obj.proposer = message.proposer;
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
    return obj;
  },
  create: function (base) {
    return exports.MsgSubmitProposal.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d, _e, _f;
    var message = createBaseMsgSubmitProposal();
    message.messages =
      ((_a = object.messages) === null || _a === void 0
        ? void 0
        : _a.map(function (e) {
            return any_1.Any.fromPartial(e);
          })) || [];
    message.initial_deposit =
      ((_b = object.initial_deposit) === null || _b === void 0
        ? void 0
        : _b.map(function (e) {
            return coin_1.Coin.fromPartial(e);
          })) || [];
    message.proposer =
      (_c = object.proposer) !== null && _c !== void 0 ? _c : "";
    message.metadata =
      (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
    message.title = (_e = object.title) !== null && _e !== void 0 ? _e : "";
    message.summary = (_f = object.summary) !== null && _f !== void 0 ? _f : "";
    return message;
  },
};
function createBaseMsgSubmitProposalResponse() {
  return { proposal_id: "0" };
}
exports.MsgSubmitProposalResponse = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.proposal_id = longToString(reader.uint64());
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
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgSubmitProposalResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseMsgSubmitProposalResponse();
    message.proposal_id =
      (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
    return message;
  },
};
function createBaseMsgExecLegacyContent() {
  return { content: undefined, authority: "" };
}
exports.MsgExecLegacyContent = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.content !== undefined) {
      any_1.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecLegacyContent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.content = any_1.Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.authority = reader.string();
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
      content: isSet(object.content)
        ? any_1.Any.fromJSON(object.content)
        : undefined,
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.content !== undefined) {
      obj.content = any_1.Any.toJSON(message.content);
    }
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgExecLegacyContent.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseMsgExecLegacyContent();
    message.content =
      object.content !== undefined && object.content !== null
        ? any_1.Any.fromPartial(object.content)
        : undefined;
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    return message;
  },
};
function createBaseMsgExecLegacyContentResponse() {
  return {};
}
exports.MsgExecLegacyContentResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgExecLegacyContentResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  create: function (base) {
    return exports.MsgExecLegacyContentResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgExecLegacyContentResponse();
    return message;
  },
};
function createBaseMsgVote() {
  return { proposal_id: "0", voter: "", option: 0, metadata: "" };
}
exports.MsgVote = {
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
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVote();
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
        case 3:
          if (tag !== 24) {
            break;
          }
          message.option = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
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
      option: isSet(object.option)
        ? (0, gov_1.voteOptionFromJSON)(object.option)
        : 0,
      metadata: isSet(object.metadata)
        ? globalThis.String(object.metadata)
        : "",
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.proposal_id !== "0") {
      obj.proposal_id = message.proposal_id;
    }
    if (message.voter !== "") {
      obj.voter = message.voter;
    }
    if (message.option !== 0) {
      obj.option = (0, gov_1.voteOptionToJSON)(message.option);
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgVote.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgVote();
    message.proposal_id =
      (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
    message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
    message.option = (_c = object.option) !== null && _c !== void 0 ? _c : 0;
    message.metadata =
      (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseMsgVoteResponse() {
  return {};
}
exports.MsgVoteResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  create: function (base) {
    return exports.MsgVoteResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgVoteResponse();
    return message;
  },
};
function createBaseMsgVoteWeighted() {
  return { proposal_id: "0", voter: "", options: [], metadata: "" };
}
exports.MsgVoteWeighted = {
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
      gov_1.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteWeighted();
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
        case 3:
          if (tag !== 26) {
            break;
          }
          message.options.push(
            gov_1.WeightedVoteOption.decode(reader, reader.uint32())
          );
          continue;
        case 4:
          if (tag !== 34) {
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
            return gov_1.WeightedVoteOption.fromJSON(e);
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
        return gov_1.WeightedVoteOption.toJSON(e);
      });
    }
    if (message.metadata !== "") {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgVoteWeighted.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c, _d;
    var message = createBaseMsgVoteWeighted();
    message.proposal_id =
      (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
    message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
    message.options =
      ((_c = object.options) === null || _c === void 0
        ? void 0
        : _c.map(function (e) {
            return gov_1.WeightedVoteOption.fromPartial(e);
          })) || [];
    message.metadata =
      (_d = object.metadata) !== null && _d !== void 0 ? _d : "";
    return message;
  },
};
function createBaseMsgVoteWeightedResponse() {
  return {};
}
exports.MsgVoteWeightedResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgVoteWeightedResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  create: function (base) {
    return exports.MsgVoteWeightedResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgVoteWeightedResponse();
    return message;
  },
};
function createBaseMsgDeposit() {
  return { proposal_id: "0", depositor: "", amount: [] };
}
exports.MsgDeposit = {
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
    var message = createBaseMsgDeposit();
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
    return exports.MsgDeposit.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a, _b, _c;
    var message = createBaseMsgDeposit();
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
function createBaseMsgDepositResponse() {
  return {};
}
exports.MsgDepositResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  create: function (base) {
    return exports.MsgDepositResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgDepositResponse();
    return message;
  },
};
function createBaseMsgUpdateParams() {
  return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
  encode: function (message, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      gov_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.params = gov_1.Params.decode(reader, reader.uint32());
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
      authority: isSet(object.authority)
        ? globalThis.String(object.authority)
        : "",
      params: isSet(object.params)
        ? gov_1.Params.fromJSON(object.params)
        : undefined,
    };
  },
  toJSON: function (message) {
    var obj = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = gov_1.Params.toJSON(message.params);
    }
    return obj;
  },
  create: function (base) {
    return exports.MsgUpdateParams.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (object) {
    var _a;
    var message = createBaseMsgUpdateParams();
    message.authority =
      (_a = object.authority) !== null && _a !== void 0 ? _a : "";
    message.params =
      object.params !== undefined && object.params !== null
        ? gov_1.Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};
function createBaseMsgUpdateParamsResponse() {
  return {};
}
exports.MsgUpdateParamsResponse = {
  encode: function (_, writer) {
    if (writer === void 0) {
      writer = minimal_1.default.Writer.create();
    }
    return writer;
  },
  decode: function (input, length) {
    var reader =
      input instanceof minimal_1.default.Reader
        ? input
        : minimal_1.default.Reader.create(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
  create: function (base) {
    return exports.MsgUpdateParamsResponse.fromPartial(
      base !== null && base !== void 0 ? base : {}
    );
  },
  fromPartial: function (_) {
    var message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
exports.MsgServiceName = "cosmos.gov.v1.Msg";
var MsgClientImpl = /** @class */ (function () {
  function MsgClientImpl(rpc, opts) {
    this.service =
      (opts === null || opts === void 0 ? void 0 : opts.service) ||
      exports.MsgServiceName;
    this.rpc = rpc;
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.ExecLegacyContent = this.ExecLegacyContent.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteWeighted = this.VoteWeighted.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MsgClientImpl.prototype.SubmitProposal = function (request) {
    var data = exports.MsgSubmitProposal.encode(request).finish();
    var promise = this.rpc.request(this.service, "SubmitProposal", data);
    return promise.then(function (data) {
      return exports.MsgSubmitProposalResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.ExecLegacyContent = function (request) {
    var data = exports.MsgExecLegacyContent.encode(request).finish();
    var promise = this.rpc.request(this.service, "ExecLegacyContent", data);
    return promise.then(function (data) {
      return exports.MsgExecLegacyContentResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.Vote = function (request) {
    var data = exports.MsgVote.encode(request).finish();
    var promise = this.rpc.request(this.service, "Vote", data);
    return promise.then(function (data) {
      return exports.MsgVoteResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.VoteWeighted = function (request) {
    var data = exports.MsgVoteWeighted.encode(request).finish();
    var promise = this.rpc.request(this.service, "VoteWeighted", data);
    return promise.then(function (data) {
      return exports.MsgVoteWeightedResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.Deposit = function (request) {
    var data = exports.MsgDeposit.encode(request).finish();
    var promise = this.rpc.request(this.service, "Deposit", data);
    return promise.then(function (data) {
      return exports.MsgDepositResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  MsgClientImpl.prototype.UpdateParams = function (request) {
    var data = exports.MsgUpdateParams.encode(request).finish();
    var promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then(function (data) {
      return exports.MsgUpdateParamsResponse.decode(
        minimal_1.default.Reader.create(data)
      );
    });
  };
  return MsgClientImpl;
})();
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
