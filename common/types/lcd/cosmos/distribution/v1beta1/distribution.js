"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return { community_tax: "", base_proposer_reward: "", bonus_proposer_reward: "", withdraw_addr_enabled: false };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.community_tax !== "") {
            writer.uint32(10).string(message.community_tax);
        }
        if (message.base_proposer_reward !== "") {
            writer.uint32(18).string(message.base_proposer_reward);
        }
        if (message.bonus_proposer_reward !== "") {
            writer.uint32(26).string(message.bonus_proposer_reward);
        }
        if (message.withdraw_addr_enabled === true) {
            writer.uint32(32).bool(message.withdraw_addr_enabled);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_tax = reader.string();
                    break;
                case 2:
                    message.base_proposer_reward = reader.string();
                    break;
                case 3:
                    message.bonus_proposer_reward = reader.string();
                    break;
                case 4:
                    message.withdraw_addr_enabled = reader.bool();
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
            community_tax: isSet(object.community_tax) ? String(object.community_tax) : "",
            base_proposer_reward: isSet(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
            bonus_proposer_reward: isSet(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
            withdraw_addr_enabled: isSet(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.community_tax !== undefined && (obj.community_tax = message.community_tax);
        message.base_proposer_reward !== undefined && (obj.base_proposer_reward = message.base_proposer_reward);
        message.bonus_proposer_reward !== undefined && (obj.bonus_proposer_reward = message.bonus_proposer_reward);
        message.withdraw_addr_enabled !== undefined && (obj.withdraw_addr_enabled = message.withdraw_addr_enabled);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseParams();
        message.community_tax = (_a = object.community_tax) !== null && _a !== void 0 ? _a : "";
        message.base_proposer_reward = (_b = object.base_proposer_reward) !== null && _b !== void 0 ? _b : "";
        message.bonus_proposer_reward = (_c = object.bonus_proposer_reward) !== null && _c !== void 0 ? _c : "";
        message.withdraw_addr_enabled = (_d = object.withdraw_addr_enabled) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseValidatorHistoricalRewards() {
    return { cumulative_reward_ratio: [], reference_count: 0 };
}
exports.ValidatorHistoricalRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.cumulative_reward_ratio; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.reference_count !== 0) {
            writer.uint32(16).uint32(message.reference_count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulative_reward_ratio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.reference_count = reader.uint32();
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
            cumulative_reward_ratio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulative_reward_ratio)
                ? object.cumulative_reward_ratio.map(function (e) { return coin_1.DecCoin.fromJSON(e); })
                : [],
            reference_count: isSet(object.reference_count) ? Number(object.reference_count) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        message.reference_count !== undefined && (obj.reference_count = Math.round(message.reference_count));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorHistoricalRewards();
        message.cumulative_reward_ratio = ((_a = object.cumulative_reward_ratio) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        message.reference_count = (_b = object.reference_count) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseValidatorCurrentRewards() {
    return { rewards: [], period: "0" };
}
exports.ValidatorCurrentRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== "0") {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = longToString(reader.uint64());
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) { return coin_1.DecCoin.fromJSON(e); }) : [],
            period: isSet(object.period) ? String(object.period) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.rewards = [];
        }
        message.period !== undefined && (obj.period = message.period);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorCurrentRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        message.period = (_b = object.period) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseValidatorAccumulatedCommission() {
    return { commission: [] };
}
exports.ValidatorAccumulatedCommission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.commission; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission) ? object.commission.map(function (e) { return coin_1.DecCoin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorAccumulatedCommission();
        message.commission = ((_a = object.commission) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseValidatorOutstandingRewards() {
    return { rewards: [] };
}
exports.ValidatorOutstandingRewards = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards) ? object.rewards.map(function (e) { return coin_1.DecCoin.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorOutstandingRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseValidatorSlashEvent() {
    return { validator_period: "0", fraction: "" };
}
exports.ValidatorSlashEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_period !== "0") {
            writer.uint32(8).uint64(message.validator_period);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_period = longToString(reader.uint64());
                    break;
                case 2:
                    message.fraction = reader.string();
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
            validator_period: isSet(object.validator_period) ? String(object.validator_period) : "0",
            fraction: isSet(object.fraction) ? String(object.fraction) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_period !== undefined && (obj.validator_period = message.validator_period);
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorSlashEvent();
        message.validator_period = (_a = object.validator_period) !== null && _a !== void 0 ? _a : "0";
        message.fraction = (_b = object.fraction) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorSlashEvents() {
    return { validator_slash_events: [] };
}
exports.ValidatorSlashEvents = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.validator_slash_events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_slash_events.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events)
                ? object.validator_slash_events.map(function (e) { return exports.ValidatorSlashEvent.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(function (e) {
                return e ? exports.ValidatorSlashEvent.toJSON(e) : undefined;
            });
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorSlashEvents();
        message.validator_slash_events = ((_a = object.validator_slash_events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ValidatorSlashEvent.fromPartial(e); })) ||
            [];
        return message;
    },
};
function createBaseFeePool() {
    return { community_pool: [] };
}
exports.FeePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.community_pool; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFeePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            community_pool: Array.isArray(object === null || object === void 0 ? void 0 : object.community_pool)
                ? object.community_pool.map(function (e) { return coin_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFeePool();
        message.community_pool = ((_a = object.community_pool) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposal() {
    return { title: "", description: "", recipient: "", amount: [] };
}
exports.CommunityPoolSpendProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount) ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCommunityPoolSpendProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = ((_d = object.amount) === null || _d === void 0 ? void 0 : _d.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseDelegatorStartingInfo() {
    return { previous_period: "0", stake: "", height: "0" };
}
exports.DelegatorStartingInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.previous_period !== "0") {
            writer.uint32(8).uint64(message.previous_period);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (message.height !== "0") {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previous_period = longToString(reader.uint64());
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.uint64());
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
            previous_period: isSet(object.previous_period) ? String(object.previous_period) : "0",
            stake: isSet(object.stake) ? String(object.stake) : "",
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.previous_period !== undefined && (obj.previous_period = message.previous_period);
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDelegatorStartingInfo();
        message.previous_period = (_a = object.previous_period) !== null && _a !== void 0 ? _a : "0";
        message.stake = (_b = object.stake) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseDelegationDelegatorReward() {
    return { validator_address: "", reward: [] };
}
exports.DelegationDelegatorReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (var _i = 0, _a = message.reward; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward) ? object.reward.map(function (e) { return coin_1.DecCoin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.reward) {
            obj.reward = message.reward.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegationDelegatorReward();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.reward = ((_b = object.reward) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return { title: "", description: "", recipient: "", amount: "", deposit: "" };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.deposit = (_e = object.deposit) !== null && _e !== void 0 ? _e : "";
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
//# sourceMappingURL=distribution.js.map