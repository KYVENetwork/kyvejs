"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
var distribution_1 = require("./distribution");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return { delegator_address: "", withdraw_address: "" };
}
exports.DelegatorWithdrawInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.withdraw_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegatorWithdrawInfo();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.withdraw_address = (_b = object.withdraw_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return { validator_address: "", outstanding_rewards: [] };
}
exports.ValidatorOutstandingRewardsRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (var _i = 0, _a = message.outstanding_rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.outstanding_rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards)
                ? object.outstanding_rewards.map(function (e) { return coin_1.DecCoin.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorOutstandingRewardsRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.outstanding_rewards = ((_b = object.outstanding_rewards) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return { validator_address: "", accumulated: undefined };
}
exports.ValidatorAccumulatedCommissionRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            accumulated: isSet(object.accumulated) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorAccumulatedCommissionRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.accumulated = (object.accumulated !== undefined && object.accumulated !== null)
            ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated)
            : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return { validator_address: "", period: "0", rewards: undefined };
}
exports.ValidatorHistoricalRewardsRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.period !== "0") {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.period = longToString(reader.uint64());
                    break;
                case 3:
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            period: isSet(object.period) ? String(object.period) : "0",
            rewards: isSet(object.rewards) ? distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.period !== undefined && (obj.period = message.period);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidatorHistoricalRewardsRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.period = (_b = object.period) !== null && _b !== void 0 ? _b : "0";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return { validator_address: "", rewards: undefined };
}
exports.ValidatorCurrentRewardsRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            rewards: isSet(object.rewards) ? distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorCurrentRewardsRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return { delegator_address: "", validator_address: "", starting_info: undefined };
}
exports.DelegatorStartingInfoRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.starting_info !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.starting_info = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            starting_info: isSet(object.starting_info) ? distribution_1.DelegatorStartingInfo.fromJSON(object.starting_info) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.starting_info !== undefined &&
            (obj.starting_info = message.starting_info ? distribution_1.DelegatorStartingInfo.toJSON(message.starting_info) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegatorStartingInfoRecord();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.starting_info = (object.starting_info !== undefined && object.starting_info !== null)
            ? distribution_1.DelegatorStartingInfo.fromPartial(object.starting_info)
            : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return { validator_address: "", height: "0", period: "0", validator_slash_event: undefined };
}
exports.ValidatorSlashEventRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.height !== "0") {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== "0") {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validator_slash_event !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.height = longToString(reader.uint64());
                    break;
                case 3:
                    message.period = longToString(reader.uint64());
                    break;
                case 4:
                    message.validator_slash_event = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? String(object.height) : "0",
            period: isSet(object.period) ? String(object.period) : "0",
            validator_slash_event: isSet(object.validator_slash_event)
                ? distribution_1.ValidatorSlashEvent.fromJSON(object.validator_slash_event)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.height !== undefined && (obj.height = message.height);
        message.period !== undefined && (obj.period = message.period);
        message.validator_slash_event !== undefined && (obj.validator_slash_event = message.validator_slash_event
            ? distribution_1.ValidatorSlashEvent.toJSON(message.validator_slash_event)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseValidatorSlashEventRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.period = (_c = object.period) !== null && _c !== void 0 ? _c : "0";
        message.validator_slash_event =
            (object.validator_slash_event !== undefined && object.validator_slash_event !== null)
                ? distribution_1.ValidatorSlashEvent.fromPartial(object.validator_slash_event)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        fee_pool: undefined,
        delegator_withdraw_infos: [],
        previous_proposer: "",
        outstanding_rewards: [],
        validator_accumulated_commissions: [],
        validator_historical_rewards: [],
        validator_current_rewards: [],
        delegator_starting_infos: [],
        validator_slash_events: [],
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee_pool !== undefined) {
            distribution_1.FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.delegator_withdraw_infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previous_proposer !== "") {
            writer.uint32(34).string(message.previous_proposer);
        }
        for (var _b = 0, _c = message.outstanding_rewards; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.validator_accumulated_commissions; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _f = 0, _g = message.validator_historical_rewards; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _h = 0, _j = message.validator_current_rewards; _h < _j.length; _h++) {
            var v = _j[_h];
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _k = 0, _l = message.delegator_starting_infos; _k < _l.length; _k++) {
            var v = _l[_k];
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (var _m = 0, _o = message.validator_slash_events; _m < _o.length; _m++) {
            var v = _o[_m];
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
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
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fee_pool = distribution_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegator_withdraw_infos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previous_proposer = reader.string();
                    break;
                case 5:
                    message.outstanding_rewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_accumulated_commissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validator_historical_rewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validator_current_rewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegator_starting_infos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_slash_events.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
            fee_pool: isSet(object.fee_pool) ? distribution_1.FeePool.fromJSON(object.fee_pool) : undefined,
            delegator_withdraw_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_withdraw_infos)
                ? object.delegator_withdraw_infos.map(function (e) { return exports.DelegatorWithdrawInfo.fromJSON(e); })
                : [],
            previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
            outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards)
                ? object.outstanding_rewards.map(function (e) { return exports.ValidatorOutstandingRewardsRecord.fromJSON(e); })
                : [],
            validator_accumulated_commissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_accumulated_commissions)
                ? object.validator_accumulated_commissions.map(function (e) { return exports.ValidatorAccumulatedCommissionRecord.fromJSON(e); })
                : [],
            validator_historical_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_historical_rewards)
                ? object.validator_historical_rewards.map(function (e) { return exports.ValidatorHistoricalRewardsRecord.fromJSON(e); })
                : [],
            validator_current_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_current_rewards)
                ? object.validator_current_rewards.map(function (e) { return exports.ValidatorCurrentRewardsRecord.fromJSON(e); })
                : [],
            delegator_starting_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_starting_infos)
                ? object.delegator_starting_infos.map(function (e) { return exports.DelegatorStartingInfoRecord.fromJSON(e); })
                : [],
            validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events)
                ? object.validator_slash_events.map(function (e) { return exports.ValidatorSlashEventRecord.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.fee_pool !== undefined && (obj.fee_pool = message.fee_pool ? distribution_1.FeePool.toJSON(message.fee_pool) : undefined);
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(function (e) {
                return e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        message.previous_proposer !== undefined && (obj.previous_proposer = message.previous_proposer);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(function (e) {
                return e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(function (e) {
                return e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards = message.validator_historical_rewards.map(function (e) {
                return e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map(function (e) {
                return e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map(function (e) {
                return e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(function (e) {
                return e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? distribution_1.Params.fromPartial(object.params)
            : undefined;
        message.fee_pool = (object.fee_pool !== undefined && object.fee_pool !== null)
            ? distribution_1.FeePool.fromPartial(object.fee_pool)
            : undefined;
        message.delegator_withdraw_infos =
            ((_a = object.delegator_withdraw_infos) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DelegatorWithdrawInfo.fromPartial(e); })) || [];
        message.previous_proposer = (_b = object.previous_proposer) !== null && _b !== void 0 ? _b : "";
        message.outstanding_rewards =
            ((_c = object.outstanding_rewards) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.ValidatorOutstandingRewardsRecord.fromPartial(e); })) || [];
        message.validator_accumulated_commissions =
            ((_d = object.validator_accumulated_commissions) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.ValidatorAccumulatedCommissionRecord.fromPartial(e); })) || [];
        message.validator_historical_rewards =
            ((_e = object.validator_historical_rewards) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.ValidatorHistoricalRewardsRecord.fromPartial(e); })) || [];
        message.validator_current_rewards =
            ((_f = object.validator_current_rewards) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.ValidatorCurrentRewardsRecord.fromPartial(e); })) || [];
        message.delegator_starting_infos =
            ((_g = object.delegator_starting_infos) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.DelegatorStartingInfoRecord.fromPartial(e); })) || [];
        message.validator_slash_events =
            ((_h = object.validator_slash_events) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.ValidatorSlashEventRecord.fromPartial(e); })) || [];
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