"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAccountClientImpl = exports.RedelegationEntry = exports.QueryAccountRedelegationResponse = exports.QueryAccountRedelegationRequest = exports.Funded = exports.QueryAccountFundedListResponse = exports.QueryAccountFundedListRequest = exports.DelegationUnbonding = exports.QueryAccountDelegationUnbondingsResponse = exports.QueryAccountDelegationUnbondingsRequest = exports.QueryAccountAssetsResponse = exports.QueryAccountAssetsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
var query_1 = require("./query");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseQueryAccountAssetsRequest() {
    return { address: "" };
}
exports.QueryAccountAssetsRequest = {
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
        var message = createBaseQueryAccountAssetsRequest();
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
        var message = createBaseQueryAccountAssetsRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountAssetsResponse() {
    return {
        balance: "0",
        protocol_self_delegation: "0",
        protocol_self_delegation_unbonding: "0",
        protocol_delegation: "0",
        protocol_delegation_unbonding: "0",
        protocol_rewards: "0",
        protocol_funding: "0",
    };
}
exports.QueryAccountAssetsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.balance !== "0") {
            writer.uint32(8).uint64(message.balance);
        }
        if (message.protocol_self_delegation !== "0") {
            writer.uint32(16).uint64(message.protocol_self_delegation);
        }
        if (message.protocol_self_delegation_unbonding !== "0") {
            writer.uint32(24).uint64(message.protocol_self_delegation_unbonding);
        }
        if (message.protocol_delegation !== "0") {
            writer.uint32(32).uint64(message.protocol_delegation);
        }
        if (message.protocol_delegation_unbonding !== "0") {
            writer.uint32(40).uint64(message.protocol_delegation_unbonding);
        }
        if (message.protocol_rewards !== "0") {
            writer.uint32(48).uint64(message.protocol_rewards);
        }
        if (message.protocol_funding !== "0") {
            writer.uint32(56).uint64(message.protocol_funding);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountAssetsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = longToString(reader.uint64());
                    break;
                case 2:
                    message.protocol_self_delegation = longToString(reader.uint64());
                    break;
                case 3:
                    message.protocol_self_delegation_unbonding = longToString(reader.uint64());
                    break;
                case 4:
                    message.protocol_delegation = longToString(reader.uint64());
                    break;
                case 5:
                    message.protocol_delegation_unbonding = longToString(reader.uint64());
                    break;
                case 6:
                    message.protocol_rewards = longToString(reader.uint64());
                    break;
                case 7:
                    message.protocol_funding = longToString(reader.uint64());
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
            balance: isSet(object.balance) ? String(object.balance) : "0",
            protocol_self_delegation: isSet(object.protocol_self_delegation) ? String(object.protocol_self_delegation) : "0",
            protocol_self_delegation_unbonding: isSet(object.protocol_self_delegation_unbonding)
                ? String(object.protocol_self_delegation_unbonding)
                : "0",
            protocol_delegation: isSet(object.protocol_delegation) ? String(object.protocol_delegation) : "0",
            protocol_delegation_unbonding: isSet(object.protocol_delegation_unbonding)
                ? String(object.protocol_delegation_unbonding)
                : "0",
            protocol_rewards: isSet(object.protocol_rewards) ? String(object.protocol_rewards) : "0",
            protocol_funding: isSet(object.protocol_funding) ? String(object.protocol_funding) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.protocol_self_delegation !== undefined && (obj.protocol_self_delegation = message.protocol_self_delegation);
        message.protocol_self_delegation_unbonding !== undefined &&
            (obj.protocol_self_delegation_unbonding = message.protocol_self_delegation_unbonding);
        message.protocol_delegation !== undefined && (obj.protocol_delegation = message.protocol_delegation);
        message.protocol_delegation_unbonding !== undefined &&
            (obj.protocol_delegation_unbonding = message.protocol_delegation_unbonding);
        message.protocol_rewards !== undefined && (obj.protocol_rewards = message.protocol_rewards);
        message.protocol_funding !== undefined && (obj.protocol_funding = message.protocol_funding);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseQueryAccountAssetsResponse();
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "0";
        message.protocol_self_delegation = (_b = object.protocol_self_delegation) !== null && _b !== void 0 ? _b : "0";
        message.protocol_self_delegation_unbonding = (_c = object.protocol_self_delegation_unbonding) !== null && _c !== void 0 ? _c : "0";
        message.protocol_delegation = (_d = object.protocol_delegation) !== null && _d !== void 0 ? _d : "0";
        message.protocol_delegation_unbonding = (_e = object.protocol_delegation_unbonding) !== null && _e !== void 0 ? _e : "0";
        message.protocol_rewards = (_f = object.protocol_rewards) !== null && _f !== void 0 ? _f : "0";
        message.protocol_funding = (_g = object.protocol_funding) !== null && _g !== void 0 ? _g : "0";
        return message;
    },
};
function createBaseQueryAccountDelegationUnbondingsRequest() {
    return { pagination: undefined, address: "" };
}
exports.QueryAccountDelegationUnbondingsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountDelegationUnbondingsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
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
        return {
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountDelegationUnbondingsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountDelegationUnbondingsResponse() {
    return { unbondings: [], pagination: undefined };
}
exports.QueryAccountDelegationUnbondingsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.unbondings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelegationUnbonding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountDelegationUnbondingsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondings.push(exports.DelegationUnbonding.decode(reader, reader.uint32()));
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
            unbondings: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondings)
                ? object.unbondings.map(function (e) { return exports.DelegationUnbonding.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(function (e) { return e ? exports.DelegationUnbonding.toJSON(e) : undefined; });
        }
        else {
            obj.unbondings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountDelegationUnbondingsResponse();
        message.unbondings = ((_a = object.unbondings) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DelegationUnbonding.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseDelegationUnbonding() {
    return { amount: "0", creation_time: "0", staker: undefined };
}
exports.DelegationUnbonding = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.creation_time !== "0") {
            writer.uint32(16).uint64(message.creation_time);
        }
        if (message.staker !== undefined) {
            query_1.FullStaker.encode(message.staker, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationUnbonding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToString(reader.uint64());
                    break;
                case 2:
                    message.creation_time = longToString(reader.uint64());
                    break;
                case 3:
                    message.staker = query_1.FullStaker.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
            staker: isSet(object.staker) ? query_1.FullStaker.fromJSON(object.staker) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_time !== undefined && (obj.creation_time = message.creation_time);
        message.staker !== undefined && (obj.staker = message.staker ? query_1.FullStaker.toJSON(message.staker) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegationUnbonding();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        message.creation_time = (_b = object.creation_time) !== null && _b !== void 0 ? _b : "0";
        message.staker = (object.staker !== undefined && object.staker !== null)
            ? query_1.FullStaker.fromPartial(object.staker)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountFundedListRequest() {
    return { address: "" };
}
exports.QueryAccountFundedListRequest = {
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
        var message = createBaseQueryAccountFundedListRequest();
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
        var message = createBaseQueryAccountFundedListRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountFundedListResponse() {
    return { funded: [] };
}
exports.QueryAccountFundedListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.funded; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Funded.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountFundedListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funded.push(exports.Funded.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { funded: Array.isArray(object === null || object === void 0 ? void 0 : object.funded) ? object.funded.map(function (e) { return exports.Funded.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.funded) {
            obj.funded = message.funded.map(function (e) { return e ? exports.Funded.toJSON(e) : undefined; });
        }
        else {
            obj.funded = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountFundedListResponse();
        message.funded = ((_a = object.funded) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Funded.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseFunded() {
    return { amount: "0", pool: undefined };
}
exports.Funded = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.pool !== undefined) {
            query_1.BasicPool.encode(message.pool, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFunded();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToString(reader.uint64());
                    break;
                case 2:
                    message.pool = query_1.BasicPool.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            pool: isSet(object.pool) ? query_1.BasicPool.fromJSON(object.pool) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.pool !== undefined && (obj.pool = message.pool ? query_1.BasicPool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFunded();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        message.pool = (object.pool !== undefined && object.pool !== null) ? query_1.BasicPool.fromPartial(object.pool) : undefined;
        return message;
    },
};
function createBaseQueryAccountRedelegationRequest() {
    return { address: "" };
}
exports.QueryAccountRedelegationRequest = {
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
        var message = createBaseQueryAccountRedelegationRequest();
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
        var message = createBaseQueryAccountRedelegationRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAccountRedelegationResponse() {
    return { redelegation_cooldown_entries: [], available_slots: "0" };
}
exports.QueryAccountRedelegationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.redelegation_cooldown_entries; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.RedelegationEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.available_slots !== "0") {
            writer.uint32(16).uint64(message.available_slots);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountRedelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_cooldown_entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.available_slots = longToString(reader.uint64());
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
            redelegation_cooldown_entries: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_cooldown_entries)
                ? object.redelegation_cooldown_entries.map(function (e) { return exports.RedelegationEntry.fromJSON(e); })
                : [],
            available_slots: isSet(object.available_slots) ? String(object.available_slots) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.redelegation_cooldown_entries) {
            obj.redelegation_cooldown_entries = message.redelegation_cooldown_entries.map(function (e) {
                return e ? exports.RedelegationEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.redelegation_cooldown_entries = [];
        }
        message.available_slots !== undefined && (obj.available_slots = message.available_slots);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryAccountRedelegationResponse();
        message.redelegation_cooldown_entries =
            ((_a = object.redelegation_cooldown_entries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.RedelegationEntry.fromPartial(e); })) || [];
        message.available_slots = (_b = object.available_slots) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseRedelegationEntry() {
    return { creation_date: "0", finish_date: "0" };
}
exports.RedelegationEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creation_date !== "0") {
            writer.uint32(8).uint64(message.creation_date);
        }
        if (message.finish_date !== "0") {
            writer.uint32(16).uint64(message.finish_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_date = longToString(reader.uint64());
                    break;
                case 2:
                    message.finish_date = longToString(reader.uint64());
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
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
            finish_date: isSet(object.finish_date) ? String(object.finish_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        message.finish_date !== undefined && (obj.finish_date = message.finish_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRedelegationEntry();
        message.creation_date = (_a = object.creation_date) !== null && _a !== void 0 ? _a : "0";
        message.finish_date = (_b = object.finish_date) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
var QueryAccountClientImpl = /** @class */ (function () {
    function QueryAccountClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.query.v1beta1.QueryAccount";
        this.rpc = rpc;
        this.AccountAssets = this.AccountAssets.bind(this);
        this.AccountDelegationUnbondings = this.AccountDelegationUnbondings.bind(this);
        this.AccountFundedList = this.AccountFundedList.bind(this);
        this.AccountRedelegation = this.AccountRedelegation.bind(this);
    }
    QueryAccountClientImpl.prototype.AccountAssets = function (request) {
        var data = exports.QueryAccountAssetsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AccountAssets", data);
        return promise.then(function (data) { return exports.QueryAccountAssetsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryAccountClientImpl.prototype.AccountDelegationUnbondings = function (request) {
        var data = exports.QueryAccountDelegationUnbondingsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AccountDelegationUnbondings", data);
        return promise.then(function (data) { return exports.QueryAccountDelegationUnbondingsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryAccountClientImpl.prototype.AccountFundedList = function (request) {
        var data = exports.QueryAccountFundedListRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AccountFundedList", data);
        return promise.then(function (data) { return exports.QueryAccountFundedListResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryAccountClientImpl.prototype.AccountRedelegation = function (request) {
        var data = exports.QueryAccountRedelegationRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AccountRedelegation", data);
        return promise.then(function (data) { return exports.QueryAccountRedelegationResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryAccountClientImpl;
}());
exports.QueryAccountClientImpl = QueryAccountClientImpl;
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
//# sourceMappingURL=account.js.map