"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var registry_1 = require("./registry");
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseGenesisState() {
    return {
        pool_list: [],
        pool_count: "0",
        funder_list: [],
        staker_list: [],
        commission_change_queue_state: undefined,
        commission_change_queue_entry: [],
        unbonding_staker_list: [],
        unbonding_staking_queue_state: undefined,
        unbonding_staking_queue_entries: [],
        delegator_list: [],
        delegation_pool_data_list: [],
        delegation_entries_list: [],
        proposal_list: [],
        unbonding_delegation_queue_state: undefined,
        unbonding_delegation_queue_entries: [],
        redelegation_cooldown_list: [],
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.pool_list; _i < _a.length; _i++) {
            var v = _a[_i];
            registry_1.Pool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pool_count !== "0") {
            writer.uint32(24).uint64(message.pool_count);
        }
        for (var _b = 0, _c = message.funder_list; _b < _c.length; _b++) {
            var v = _c[_b];
            registry_1.Funder.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.staker_list; _d < _e.length; _d++) {
            var v = _e[_d];
            registry_1.Staker.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.commission_change_queue_state !== undefined) {
            registry_1.CommissionChangeQueueState.encode(message.commission_change_queue_state, writer.uint32(130).fork()).ldelim();
        }
        for (var _f = 0, _g = message.commission_change_queue_entry; _f < _g.length; _f++) {
            var v = _g[_f];
            registry_1.CommissionChangeQueueEntry.encode(v, writer.uint32(138).fork()).ldelim();
        }
        for (var _h = 0, _j = message.unbonding_staker_list; _h < _j.length; _h++) {
            var v = _j[_h];
            registry_1.UnbondingStaker.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.unbonding_staking_queue_state !== undefined) {
            registry_1.UnbondingStakingQueueState.encode(message.unbonding_staking_queue_state, writer.uint32(82).fork()).ldelim();
        }
        for (var _k = 0, _l = message.unbonding_staking_queue_entries; _k < _l.length; _k++) {
            var v = _l[_k];
            registry_1.UnbondingStakingQueueEntry.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (var _m = 0, _o = message.delegator_list; _m < _o.length; _m++) {
            var v = _o[_m];
            registry_1.Delegator.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _p = 0, _q = message.delegation_pool_data_list; _p < _q.length; _p++) {
            var v = _q[_p];
            registry_1.DelegationPoolData.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _r = 0, _s = message.delegation_entries_list; _r < _s.length; _r++) {
            var v = _s[_r];
            registry_1.DelegationEntries.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _t = 0, _u = message.proposal_list; _t < _u.length; _t++) {
            var v = _u[_t];
            registry_1.Proposal.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.unbonding_delegation_queue_state !== undefined) {
            registry_1.UnbondingDelegationQueueState.encode(message.unbonding_delegation_queue_state, writer.uint32(106).fork())
                .ldelim();
        }
        for (var _v = 0, _w = message.unbonding_delegation_queue_entries; _v < _w.length; _v++) {
            var v = _w[_v];
            registry_1.UnbondingDelegationQueueEntry.encode(v, writer.uint32(114).fork()).ldelim();
        }
        for (var _x = 0, _y = message.redelegation_cooldown_list; _x < _y.length; _x++) {
            var v = _y[_x];
            registry_1.RedelegationCooldown.encode(v, writer.uint32(122).fork()).ldelim();
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
                case 2:
                    message.pool_list.push(registry_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pool_count = longToString(reader.uint64());
                    break;
                case 4:
                    message.funder_list.push(registry_1.Funder.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.staker_list.push(registry_1.Staker.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.commission_change_queue_state = registry_1.CommissionChangeQueueState.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.commission_change_queue_entry.push(registry_1.CommissionChangeQueueEntry.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.unbonding_staker_list.push(registry_1.UnbondingStaker.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.unbonding_staking_queue_state = registry_1.UnbondingStakingQueueState.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.unbonding_staking_queue_entries.push(registry_1.UnbondingStakingQueueEntry.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.delegator_list.push(registry_1.Delegator.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.delegation_pool_data_list.push(registry_1.DelegationPoolData.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.delegation_entries_list.push(registry_1.DelegationEntries.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.proposal_list.push(registry_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.unbonding_delegation_queue_state = registry_1.UnbondingDelegationQueueState.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.unbonding_delegation_queue_entries.push(registry_1.UnbondingDelegationQueueEntry.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.redelegation_cooldown_list.push(registry_1.RedelegationCooldown.decode(reader, reader.uint32()));
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
            pool_list: Array.isArray(object === null || object === void 0 ? void 0 : object.pool_list) ? object.pool_list.map(function (e) { return registry_1.Pool.fromJSON(e); }) : [],
            pool_count: isSet(object.pool_count) ? String(object.pool_count) : "0",
            funder_list: Array.isArray(object === null || object === void 0 ? void 0 : object.funder_list) ? object.funder_list.map(function (e) { return registry_1.Funder.fromJSON(e); }) : [],
            staker_list: Array.isArray(object === null || object === void 0 ? void 0 : object.staker_list) ? object.staker_list.map(function (e) { return registry_1.Staker.fromJSON(e); }) : [],
            commission_change_queue_state: isSet(object.commission_change_queue_state)
                ? registry_1.CommissionChangeQueueState.fromJSON(object.commission_change_queue_state)
                : undefined,
            commission_change_queue_entry: Array.isArray(object === null || object === void 0 ? void 0 : object.commission_change_queue_entry)
                ? object.commission_change_queue_entry.map(function (e) { return registry_1.CommissionChangeQueueEntry.fromJSON(e); })
                : [],
            unbonding_staker_list: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_staker_list)
                ? object.unbonding_staker_list.map(function (e) { return registry_1.UnbondingStaker.fromJSON(e); })
                : [],
            unbonding_staking_queue_state: isSet(object.unbonding_staking_queue_state)
                ? registry_1.UnbondingStakingQueueState.fromJSON(object.unbonding_staking_queue_state)
                : undefined,
            unbonding_staking_queue_entries: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_staking_queue_entries)
                ? object.unbonding_staking_queue_entries.map(function (e) { return registry_1.UnbondingStakingQueueEntry.fromJSON(e); })
                : [],
            delegator_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_list)
                ? object.delegator_list.map(function (e) { return registry_1.Delegator.fromJSON(e); })
                : [],
            delegation_pool_data_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_pool_data_list)
                ? object.delegation_pool_data_list.map(function (e) { return registry_1.DelegationPoolData.fromJSON(e); })
                : [],
            delegation_entries_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_entries_list)
                ? object.delegation_entries_list.map(function (e) { return registry_1.DelegationEntries.fromJSON(e); })
                : [],
            proposal_list: Array.isArray(object === null || object === void 0 ? void 0 : object.proposal_list)
                ? object.proposal_list.map(function (e) { return registry_1.Proposal.fromJSON(e); })
                : [],
            unbonding_delegation_queue_state: isSet(object.unbonding_delegation_queue_state)
                ? registry_1.UnbondingDelegationQueueState.fromJSON(object.unbonding_delegation_queue_state)
                : undefined,
            unbonding_delegation_queue_entries: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_delegation_queue_entries)
                ? object.unbonding_delegation_queue_entries.map(function (e) { return registry_1.UnbondingDelegationQueueEntry.fromJSON(e); })
                : [],
            redelegation_cooldown_list: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_cooldown_list)
                ? object.redelegation_cooldown_list.map(function (e) { return registry_1.RedelegationCooldown.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pool_list) {
            obj.pool_list = message.pool_list.map(function (e) { return e ? registry_1.Pool.toJSON(e) : undefined; });
        }
        else {
            obj.pool_list = [];
        }
        message.pool_count !== undefined && (obj.pool_count = message.pool_count);
        if (message.funder_list) {
            obj.funder_list = message.funder_list.map(function (e) { return e ? registry_1.Funder.toJSON(e) : undefined; });
        }
        else {
            obj.funder_list = [];
        }
        if (message.staker_list) {
            obj.staker_list = message.staker_list.map(function (e) { return e ? registry_1.Staker.toJSON(e) : undefined; });
        }
        else {
            obj.staker_list = [];
        }
        message.commission_change_queue_state !== undefined &&
            (obj.commission_change_queue_state = message.commission_change_queue_state
                ? registry_1.CommissionChangeQueueState.toJSON(message.commission_change_queue_state)
                : undefined);
        if (message.commission_change_queue_entry) {
            obj.commission_change_queue_entry = message.commission_change_queue_entry.map(function (e) {
                return e ? registry_1.CommissionChangeQueueEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.commission_change_queue_entry = [];
        }
        if (message.unbonding_staker_list) {
            obj.unbonding_staker_list = message.unbonding_staker_list.map(function (e) { return e ? registry_1.UnbondingStaker.toJSON(e) : undefined; });
        }
        else {
            obj.unbonding_staker_list = [];
        }
        message.unbonding_staking_queue_state !== undefined &&
            (obj.unbonding_staking_queue_state = message.unbonding_staking_queue_state
                ? registry_1.UnbondingStakingQueueState.toJSON(message.unbonding_staking_queue_state)
                : undefined);
        if (message.unbonding_staking_queue_entries) {
            obj.unbonding_staking_queue_entries = message.unbonding_staking_queue_entries.map(function (e) {
                return e ? registry_1.UnbondingStakingQueueEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbonding_staking_queue_entries = [];
        }
        if (message.delegator_list) {
            obj.delegator_list = message.delegator_list.map(function (e) { return e ? registry_1.Delegator.toJSON(e) : undefined; });
        }
        else {
            obj.delegator_list = [];
        }
        if (message.delegation_pool_data_list) {
            obj.delegation_pool_data_list = message.delegation_pool_data_list.map(function (e) {
                return e ? registry_1.DelegationPoolData.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegation_pool_data_list = [];
        }
        if (message.delegation_entries_list) {
            obj.delegation_entries_list = message.delegation_entries_list.map(function (e) {
                return e ? registry_1.DelegationEntries.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegation_entries_list = [];
        }
        if (message.proposal_list) {
            obj.proposal_list = message.proposal_list.map(function (e) { return e ? registry_1.Proposal.toJSON(e) : undefined; });
        }
        else {
            obj.proposal_list = [];
        }
        message.unbonding_delegation_queue_state !== undefined &&
            (obj.unbonding_delegation_queue_state = message.unbonding_delegation_queue_state
                ? registry_1.UnbondingDelegationQueueState.toJSON(message.unbonding_delegation_queue_state)
                : undefined);
        if (message.unbonding_delegation_queue_entries) {
            obj.unbonding_delegation_queue_entries = message.unbonding_delegation_queue_entries.map(function (e) {
                return e ? registry_1.UnbondingDelegationQueueEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbonding_delegation_queue_entries = [];
        }
        if (message.redelegation_cooldown_list) {
            obj.redelegation_cooldown_list = message.redelegation_cooldown_list.map(function (e) {
                return e ? registry_1.RedelegationCooldown.toJSON(e) : undefined;
            });
        }
        else {
            obj.redelegation_cooldown_list = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseGenesisState();
        message.pool_list = ((_a = object.pool_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Pool.fromPartial(e); })) || [];
        message.pool_count = (_b = object.pool_count) !== null && _b !== void 0 ? _b : "0";
        message.funder_list = ((_c = object.funder_list) === null || _c === void 0 ? void 0 : _c.map(function (e) { return registry_1.Funder.fromPartial(e); })) || [];
        message.staker_list = ((_d = object.staker_list) === null || _d === void 0 ? void 0 : _d.map(function (e) { return registry_1.Staker.fromPartial(e); })) || [];
        message.commission_change_queue_state =
            (object.commission_change_queue_state !== undefined && object.commission_change_queue_state !== null)
                ? registry_1.CommissionChangeQueueState.fromPartial(object.commission_change_queue_state)
                : undefined;
        message.commission_change_queue_entry =
            ((_e = object.commission_change_queue_entry) === null || _e === void 0 ? void 0 : _e.map(function (e) { return registry_1.CommissionChangeQueueEntry.fromPartial(e); })) || [];
        message.unbonding_staker_list = ((_f = object.unbonding_staker_list) === null || _f === void 0 ? void 0 : _f.map(function (e) { return registry_1.UnbondingStaker.fromPartial(e); })) || [];
        message.unbonding_staking_queue_state =
            (object.unbonding_staking_queue_state !== undefined && object.unbonding_staking_queue_state !== null)
                ? registry_1.UnbondingStakingQueueState.fromPartial(object.unbonding_staking_queue_state)
                : undefined;
        message.unbonding_staking_queue_entries =
            ((_g = object.unbonding_staking_queue_entries) === null || _g === void 0 ? void 0 : _g.map(function (e) { return registry_1.UnbondingStakingQueueEntry.fromPartial(e); })) || [];
        message.delegator_list = ((_h = object.delegator_list) === null || _h === void 0 ? void 0 : _h.map(function (e) { return registry_1.Delegator.fromPartial(e); })) || [];
        message.delegation_pool_data_list =
            ((_j = object.delegation_pool_data_list) === null || _j === void 0 ? void 0 : _j.map(function (e) { return registry_1.DelegationPoolData.fromPartial(e); })) || [];
        message.delegation_entries_list = ((_k = object.delegation_entries_list) === null || _k === void 0 ? void 0 : _k.map(function (e) { return registry_1.DelegationEntries.fromPartial(e); })) ||
            [];
        message.proposal_list = ((_l = object.proposal_list) === null || _l === void 0 ? void 0 : _l.map(function (e) { return registry_1.Proposal.fromPartial(e); })) || [];
        message.unbonding_delegation_queue_state =
            (object.unbonding_delegation_queue_state !== undefined && object.unbonding_delegation_queue_state !== null)
                ? registry_1.UnbondingDelegationQueueState.fromPartial(object.unbonding_delegation_queue_state)
                : undefined;
        message.unbonding_delegation_queue_entries =
            ((_m = object.unbonding_delegation_queue_entries) === null || _m === void 0 ? void 0 : _m.map(function (e) { return registry_1.UnbondingDelegationQueueEntry.fromPartial(e); })) || [];
        message.redelegation_cooldown_list =
            ((_o = object.redelegation_cooldown_list) === null || _o === void 0 ? void 0 : _o.map(function (e) { return registry_1.RedelegationCooldown.fromPartial(e); })) || [];
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