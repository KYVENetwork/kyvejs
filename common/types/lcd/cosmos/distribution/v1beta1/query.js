"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCommunityPoolResponse = exports.QueryCommunityPoolRequest = exports.QueryDelegatorWithdrawAddressResponse = exports.QueryDelegatorWithdrawAddressRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryDelegationTotalRewardsResponse = exports.QueryDelegationTotalRewardsRequest = exports.QueryDelegationRewardsResponse = exports.QueryDelegationRewardsRequest = exports.QueryValidatorSlashesResponse = exports.QueryValidatorSlashesRequest = exports.QueryValidatorCommissionResponse = exports.QueryValidatorCommissionRequest = exports.QueryValidatorOutstandingRewardsResponse = exports.QueryValidatorOutstandingRewardsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../base/query/v1beta1/pagination");
var coin_1 = require("../../base/v1beta1/coin");
var distribution_1 = require("./distribution");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { params: isSet(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? distribution_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
    return { validator_address: "" };
}
exports.QueryValidatorOutstandingRewardsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorOutstandingRewardsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { validator_address: isSet(object.validator_address) ? String(object.validator_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorOutstandingRewardsRequest();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
    return { rewards: undefined };
}
exports.QueryValidatorOutstandingRewardsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorOutstandingRewardsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards = distribution_1.ValidatorOutstandingRewards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { rewards: isSet(object.rewards) ? distribution_1.ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? distribution_1.ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryValidatorOutstandingRewardsResponse();
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorOutstandingRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorCommissionRequest() {
    return { validator_address: "" };
}
exports.QueryValidatorCommissionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorCommissionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { validator_address: isSet(object.validator_address) ? String(object.validator_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorCommissionRequest();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValidatorCommissionResponse() {
    return { commission: undefined };
}
exports.QueryValidatorCommissionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.commission !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorCommissionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            commission: isSet(object.commission) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.commission !== undefined &&
            (obj.commission = message.commission ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryValidatorCommissionResponse();
        message.commission = (object.commission !== undefined && object.commission !== null)
            ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.commission)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorSlashesRequest() {
    return { validator_address: "", starting_height: "0", ending_height: "0", pagination: undefined };
}
exports.QueryValidatorSlashesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.starting_height !== "0") {
            writer.uint32(16).uint64(message.starting_height);
        }
        if (message.ending_height !== "0") {
            writer.uint32(24).uint64(message.ending_height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorSlashesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.starting_height = longToString(reader.uint64());
                    break;
                case 3:
                    message.ending_height = longToString(reader.uint64());
                    break;
                case 4:
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            starting_height: isSet(object.starting_height) ? String(object.starting_height) : "0",
            ending_height: isSet(object.ending_height) ? String(object.ending_height) : "0",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.starting_height !== undefined && (obj.starting_height = message.starting_height);
        message.ending_height !== undefined && (obj.ending_height = message.ending_height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryValidatorSlashesRequest();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.starting_height = (_b = object.starting_height) !== null && _b !== void 0 ? _b : "0";
        message.ending_height = (_c = object.ending_height) !== null && _c !== void 0 ? _c : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorSlashesResponse() {
    return { slashes: [], pagination: undefined };
}
exports.QueryValidatorSlashesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.slashes; _i < _a.length; _i++) {
            var v = _a[_i];
            distribution_1.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorSlashesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slashes.push(distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            slashes: Array.isArray(object === null || object === void 0 ? void 0 : object.slashes) ? object.slashes.map(function (e) { return distribution_1.ValidatorSlashEvent.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(function (e) { return e ? distribution_1.ValidatorSlashEvent.toJSON(e) : undefined; });
        }
        else {
            obj.slashes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorSlashesResponse();
        message.slashes = ((_a = object.slashes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return distribution_1.ValidatorSlashEvent.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDelegationRewardsRequest() {
    return { delegator_address: "", validator_address: "" };
}
exports.QueryDelegationRewardsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationRewardsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegationRewardsRequest();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegationRewardsResponse() {
    return { rewards: [] };
}
exports.QueryDelegationRewardsResponse = {
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
        var message = createBaseQueryDelegationRewardsResponse();
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
        var message = createBaseQueryDelegationRewardsResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseQueryDelegationTotalRewardsRequest() {
    return { delegator_address: "" };
}
exports.QueryDelegationTotalRewardsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationTotalRewardsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegationTotalRewardsRequest();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegationTotalRewardsResponse() {
    return { rewards: [], total: [] };
}
exports.QueryDelegationTotalRewardsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.rewards; _i < _a.length; _i++) {
            var v = _a[_i];
            distribution_1.DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.total; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationTotalRewardsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(distribution_1.DelegationDelegatorReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map(function (e) { return distribution_1.DelegationDelegatorReward.fromJSON(e); })
                : [],
            total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(function (e) { return coin_1.DecCoin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(function (e) { return e ? distribution_1.DelegationDelegatorReward.toJSON(e) : undefined; });
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map(function (e) { return distribution_1.DelegationDelegatorReward.fromPartial(e); })) || [];
        message.total = ((_b = object.total) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseQueryDelegatorValidatorsRequest() {
    return { delegator_address: "" };
}
exports.QueryDelegatorValidatorsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorValidatorsRequest();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegatorValidatorsResponse() {
    return { validators: [] };
}
exports.QueryDelegatorValidatorsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return String(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e; });
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
    return { delegator_address: "" };
}
exports.QueryDelegatorWithdrawAddressRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorWithdrawAddressRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorWithdrawAddressRequest();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
    return { withdraw_address: "" };
}
exports.QueryDelegatorWithdrawAddressResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.withdraw_address !== "") {
            writer.uint32(10).string(message.withdraw_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorWithdrawAddressResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorWithdrawAddressResponse();
        message.withdraw_address = (_a = object.withdraw_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryCommunityPoolRequest() {
    return {};
}
exports.QueryCommunityPoolRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCommunityPoolRequest();
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
        var message = createBaseQueryCommunityPoolRequest();
        return message;
    },
};
function createBaseQueryCommunityPoolResponse() {
    return { pool: [] };
}
exports.QueryCommunityPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.pool; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCommunityPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool) ? object.pool.map(function (e) { return coin_1.DecCoin.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(function (e) { return e ? coin_1.DecCoin.toJSON(e) : undefined; });
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryCommunityPoolResponse();
        message.pool = ((_a = object.pool) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.DecCoin.fromPartial(e); })) || [];
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.distribution.v1beta1.Query";
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
        this.ValidatorCommission = this.ValidatorCommission.bind(this);
        this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
        this.DelegationRewards = this.DelegationRewards.bind(this);
        this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
        this.DelegatorValidators = this.DelegatorValidators.bind(this);
        this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
        this.CommunityPool = this.CommunityPool.bind(this);
    }
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Params", data);
        return promise.then(function (data) { return exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.ValidatorOutstandingRewards = function (request) {
        var data = exports.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ValidatorOutstandingRewards", data);
        return promise.then(function (data) { return exports.QueryValidatorOutstandingRewardsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.ValidatorCommission = function (request) {
        var data = exports.QueryValidatorCommissionRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ValidatorCommission", data);
        return promise.then(function (data) { return exports.QueryValidatorCommissionResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.ValidatorSlashes = function (request) {
        var data = exports.QueryValidatorSlashesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ValidatorSlashes", data);
        return promise.then(function (data) { return exports.QueryValidatorSlashesResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.DelegationRewards = function (request) {
        var data = exports.QueryDelegationRewardsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "DelegationRewards", data);
        return promise.then(function (data) { return exports.QueryDelegationRewardsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.DelegationTotalRewards = function (request) {
        var data = exports.QueryDelegationTotalRewardsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "DelegationTotalRewards", data);
        return promise.then(function (data) { return exports.QueryDelegationTotalRewardsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.DelegatorValidators = function (request) {
        var data = exports.QueryDelegatorValidatorsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "DelegatorValidators", data);
        return promise.then(function (data) { return exports.QueryDelegatorValidatorsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.DelegatorWithdrawAddress = function (request) {
        var data = exports.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "DelegatorWithdrawAddress", data);
        return promise.then(function (data) { return exports.QueryDelegatorWithdrawAddressResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.CommunityPool = function (request) {
        var data = exports.QueryCommunityPoolRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CommunityPool", data);
        return promise.then(function (data) { return exports.QueryCommunityPoolResponse.decode(new minimal_1.default.Reader(data)); });
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