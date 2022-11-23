"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolMembership = exports.CommissionChangeEntry = exports.StakerMetadata = exports.FullStaker = exports.BasicPool = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pool_1 = require("../../pool/v1beta1/pool");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseBasicPool() {
    return {
        id: "0",
        name: "",
        runtime: "",
        logo: "",
        operating_cost: "0",
        upload_interval: "0",
        total_funds: "0",
        total_delegation: "0",
        status: 0,
    };
}
exports.BasicPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        if (message.logo !== "") {
            writer.uint32(34).string(message.logo);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(40).uint64(message.operating_cost);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(48).uint64(message.upload_interval);
        }
        if (message.total_funds !== "0") {
            writer.uint32(56).uint64(message.total_funds);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(64).uint64(message.total_delegation);
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBasicPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
                    break;
                case 5:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 6:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 7:
                    message.total_funds = longToString(reader.uint64());
                    break;
                case 8:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 9:
                    message.status = reader.int32();
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
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
            upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
            total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
            total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
            status: isSet(object.status) ? (0, pool_1.poolStatusFromJSON)(object.status) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
        message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
        message.total_funds !== undefined && (obj.total_funds = message.total_funds);
        message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
        message.status !== undefined && (obj.status = (0, pool_1.poolStatusToJSON)(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseBasicPool();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        message.operating_cost = (_e = object.operating_cost) !== null && _e !== void 0 ? _e : "0";
        message.upload_interval = (_f = object.upload_interval) !== null && _f !== void 0 ? _f : "0";
        message.total_funds = (_g = object.total_funds) !== null && _g !== void 0 ? _g : "0";
        message.total_delegation = (_h = object.total_delegation) !== null && _h !== void 0 ? _h : "0";
        message.status = (_j = object.status) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseFullStaker() {
    return {
        address: "",
        metadata: undefined,
        self_delegation: "0",
        self_delegation_unbonding: "0",
        total_delegation: "0",
        delegator_count: "0",
        pools: [],
    };
}
exports.FullStaker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.metadata !== undefined) {
            exports.StakerMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.self_delegation !== "0") {
            writer.uint32(24).uint64(message.self_delegation);
        }
        if (message.self_delegation_unbonding !== "0") {
            writer.uint32(32).uint64(message.self_delegation_unbonding);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(40).uint64(message.total_delegation);
        }
        if (message.delegator_count !== "0") {
            writer.uint32(48).uint64(message.delegator_count);
        }
        for (var _i = 0, _a = message.pools; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PoolMembership.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFullStaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.metadata = exports.StakerMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.self_delegation = longToString(reader.uint64());
                    break;
                case 4:
                    message.self_delegation_unbonding = longToString(reader.uint64());
                    break;
                case 5:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 6:
                    message.delegator_count = longToString(reader.uint64());
                    break;
                case 7:
                    message.pools.push(exports.PoolMembership.decode(reader, reader.uint32()));
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
            metadata: isSet(object.metadata) ? exports.StakerMetadata.fromJSON(object.metadata) : undefined,
            self_delegation: isSet(object.self_delegation) ? String(object.self_delegation) : "0",
            self_delegation_unbonding: isSet(object.self_delegation_unbonding)
                ? String(object.self_delegation_unbonding)
                : "0",
            total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
            delegator_count: isSet(object.delegator_count) ? String(object.delegator_count) : "0",
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools) ? object.pools.map(function (e) { return exports.PoolMembership.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? exports.StakerMetadata.toJSON(message.metadata) : undefined);
        message.self_delegation !== undefined && (obj.self_delegation = message.self_delegation);
        message.self_delegation_unbonding !== undefined &&
            (obj.self_delegation_unbonding = message.self_delegation_unbonding);
        message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
        message.delegator_count !== undefined && (obj.delegator_count = message.delegator_count);
        if (message.pools) {
            obj.pools = message.pools.map(function (e) { return e ? exports.PoolMembership.toJSON(e) : undefined; });
        }
        else {
            obj.pools = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseFullStaker();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exports.StakerMetadata.fromPartial(object.metadata)
            : undefined;
        message.self_delegation = (_b = object.self_delegation) !== null && _b !== void 0 ? _b : "0";
        message.self_delegation_unbonding = (_c = object.self_delegation_unbonding) !== null && _c !== void 0 ? _c : "0";
        message.total_delegation = (_d = object.total_delegation) !== null && _d !== void 0 ? _d : "0";
        message.delegator_count = (_e = object.delegator_count) !== null && _e !== void 0 ? _e : "0";
        message.pools = ((_f = object.pools) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.PoolMembership.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseStakerMetadata() {
    return { commission: "", moniker: "", website: "", logo: "", pending_commission_change: undefined };
}
exports.StakerMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.commission !== "") {
            writer.uint32(10).string(message.commission);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.logo !== "") {
            writer.uint32(34).string(message.logo);
        }
        if (message.pending_commission_change !== undefined) {
            exports.CommissionChangeEntry.encode(message.pending_commission_change, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakerMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = reader.string();
                    break;
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
                    break;
                case 5:
                    message.pending_commission_change = exports.CommissionChangeEntry.decode(reader, reader.uint32());
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
            commission: isSet(object.commission) ? String(object.commission) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            pending_commission_change: isSet(object.pending_commission_change)
                ? exports.CommissionChangeEntry.fromJSON(object.pending_commission_change)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        message.pending_commission_change !== undefined &&
            (obj.pending_commission_change = message.pending_commission_change
                ? exports.CommissionChangeEntry.toJSON(message.pending_commission_change)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStakerMetadata();
        message.commission = (_a = object.commission) !== null && _a !== void 0 ? _a : "";
        message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
        message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        message.pending_commission_change =
            (object.pending_commission_change !== undefined && object.pending_commission_change !== null)
                ? exports.CommissionChangeEntry.fromPartial(object.pending_commission_change)
                : undefined;
        return message;
    },
};
function createBaseCommissionChangeEntry() {
    return { commission: "", creation_date: "0" };
}
exports.CommissionChangeEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.commission !== "") {
            writer.uint32(10).string(message.commission);
        }
        if (message.creation_date !== "0") {
            writer.uint32(16).int64(message.creation_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommissionChangeEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = reader.string();
                    break;
                case 2:
                    message.creation_date = longToString(reader.int64());
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
            commission: isSet(object.commission) ? String(object.commission) : "",
            creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.commission !== undefined && (obj.commission = message.commission);
        message.creation_date !== undefined && (obj.creation_date = message.creation_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCommissionChangeEntry();
        message.commission = (_a = object.commission) !== null && _a !== void 0 ? _a : "";
        message.creation_date = (_b = object.creation_date) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBasePoolMembership() {
    return { pool: undefined, points: "0", is_leaving: false, valaddress: "", balance: "0" };
}
exports.PoolMembership = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool !== undefined) {
            exports.BasicPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        if (message.points !== "0") {
            writer.uint32(16).uint64(message.points);
        }
        if (message.is_leaving === true) {
            writer.uint32(24).bool(message.is_leaving);
        }
        if (message.valaddress !== "") {
            writer.uint32(34).string(message.valaddress);
        }
        if (message.balance !== "0") {
            writer.uint32(40).uint64(message.balance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePoolMembership();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = exports.BasicPool.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.points = longToString(reader.uint64());
                    break;
                case 3:
                    message.is_leaving = reader.bool();
                    break;
                case 4:
                    message.valaddress = reader.string();
                    break;
                case 5:
                    message.balance = longToString(reader.uint64());
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
            pool: isSet(object.pool) ? exports.BasicPool.fromJSON(object.pool) : undefined,
            points: isSet(object.points) ? String(object.points) : "0",
            is_leaving: isSet(object.is_leaving) ? Boolean(object.is_leaving) : false,
            valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
            balance: isSet(object.balance) ? String(object.balance) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? exports.BasicPool.toJSON(message.pool) : undefined);
        message.points !== undefined && (obj.points = message.points);
        message.is_leaving !== undefined && (obj.is_leaving = message.is_leaving);
        message.valaddress !== undefined && (obj.valaddress = message.valaddress);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBasePoolMembership();
        message.pool = (object.pool !== undefined && object.pool !== null) ? exports.BasicPool.fromPartial(object.pool) : undefined;
        message.points = (_a = object.points) !== null && _a !== void 0 ? _a : "0";
        message.is_leaving = (_b = object.is_leaving) !== null && _b !== void 0 ? _b : false;
        message.valaddress = (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
        message.balance = (_d = object.balance) !== null && _d !== void 0 ? _d : "0";
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
//# sourceMappingURL=query.js.map