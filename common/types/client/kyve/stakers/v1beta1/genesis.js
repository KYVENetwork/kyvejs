"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var params_1 = require("./params");
var stakers_1 = require("./stakers");
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        staker_list: [],
        valaccount_list: [],
        commission_change_entries: [],
        queue_state_commission: undefined,
        leave_pool_entries: [],
        queue_state_leave: undefined,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.staker_list; _i < _a.length; _i++) {
            var v = _a[_i];
            stakers_1.Staker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.valaccount_list; _b < _c.length; _b++) {
            var v = _c[_b];
            stakers_1.Valaccount.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.commission_change_entries; _d < _e.length; _d++) {
            var v = _e[_d];
            stakers_1.CommissionChangeEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.queue_state_commission !== undefined) {
            stakers_1.QueueState.encode(message.queue_state_commission, writer.uint32(42).fork()).ldelim();
        }
        for (var _f = 0, _g = message.leave_pool_entries; _f < _g.length; _f++) {
            var v = _g[_f];
            stakers_1.LeavePoolEntry.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.queue_state_leave !== undefined) {
            stakers_1.QueueState.encode(message.queue_state_leave, writer.uint32(58).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.staker_list.push(stakers_1.Staker.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.valaccount_list.push(stakers_1.Valaccount.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.commission_change_entries.push(stakers_1.CommissionChangeEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.queue_state_commission = stakers_1.QueueState.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.leave_pool_entries.push(stakers_1.LeavePoolEntry.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.queue_state_leave = stakers_1.QueueState.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            staker_list: Array.isArray(object === null || object === void 0 ? void 0 : object.staker_list) ? object.staker_list.map(function (e) { return stakers_1.Staker.fromJSON(e); }) : [],
            valaccount_list: Array.isArray(object === null || object === void 0 ? void 0 : object.valaccount_list)
                ? object.valaccount_list.map(function (e) { return stakers_1.Valaccount.fromJSON(e); })
                : [],
            commission_change_entries: Array.isArray(object === null || object === void 0 ? void 0 : object.commission_change_entries)
                ? object.commission_change_entries.map(function (e) { return stakers_1.CommissionChangeEntry.fromJSON(e); })
                : [],
            queue_state_commission: isSet(object.queue_state_commission)
                ? stakers_1.QueueState.fromJSON(object.queue_state_commission)
                : undefined,
            leave_pool_entries: Array.isArray(object === null || object === void 0 ? void 0 : object.leave_pool_entries)
                ? object.leave_pool_entries.map(function (e) { return stakers_1.LeavePoolEntry.fromJSON(e); })
                : [],
            queue_state_leave: isSet(object.queue_state_leave) ? stakers_1.QueueState.fromJSON(object.queue_state_leave) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.staker_list) {
            obj.staker_list = message.staker_list.map(function (e) { return e ? stakers_1.Staker.toJSON(e) : undefined; });
        }
        else {
            obj.staker_list = [];
        }
        if (message.valaccount_list) {
            obj.valaccount_list = message.valaccount_list.map(function (e) { return e ? stakers_1.Valaccount.toJSON(e) : undefined; });
        }
        else {
            obj.valaccount_list = [];
        }
        if (message.commission_change_entries) {
            obj.commission_change_entries = message.commission_change_entries.map(function (e) {
                return e ? stakers_1.CommissionChangeEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.commission_change_entries = [];
        }
        message.queue_state_commission !== undefined && (obj.queue_state_commission = message.queue_state_commission
            ? stakers_1.QueueState.toJSON(message.queue_state_commission)
            : undefined);
        if (message.leave_pool_entries) {
            obj.leave_pool_entries = message.leave_pool_entries.map(function (e) { return e ? stakers_1.LeavePoolEntry.toJSON(e) : undefined; });
        }
        else {
            obj.leave_pool_entries = [];
        }
        message.queue_state_leave !== undefined &&
            (obj.queue_state_leave = message.queue_state_leave ? stakers_1.QueueState.toJSON(message.queue_state_leave) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.staker_list = ((_a = object.staker_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return stakers_1.Staker.fromPartial(e); })) || [];
        message.valaccount_list = ((_b = object.valaccount_list) === null || _b === void 0 ? void 0 : _b.map(function (e) { return stakers_1.Valaccount.fromPartial(e); })) || [];
        message.commission_change_entries =
            ((_c = object.commission_change_entries) === null || _c === void 0 ? void 0 : _c.map(function (e) { return stakers_1.CommissionChangeEntry.fromPartial(e); })) || [];
        message.queue_state_commission =
            (object.queue_state_commission !== undefined && object.queue_state_commission !== null)
                ? stakers_1.QueueState.fromPartial(object.queue_state_commission)
                : undefined;
        message.leave_pool_entries = ((_d = object.leave_pool_entries) === null || _d === void 0 ? void 0 : _d.map(function (e) { return stakers_1.LeavePoolEntry.fromPartial(e); })) || [];
        message.queue_state_leave = (object.queue_state_leave !== undefined && object.queue_state_leave !== null)
            ? stakers_1.QueueState.fromPartial(object.queue_state_leave)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map