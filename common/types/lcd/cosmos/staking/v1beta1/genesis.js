"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastValidatorPower = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        last_total_power: new Uint8Array(),
        last_validator_powers: [],
        validators: [],
        delegations: [],
        unbonding_delegations: [],
        redelegations: [],
        exported: false,
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_total_power.length !== 0) {
            writer.uint32(18).bytes(message.last_total_power);
        }
        for (var _i = 0, _a = message.last_validator_powers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.validators; _b < _c.length; _b++) {
            var v = _c[_b];
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegations; _d < _e.length; _d++) {
            var v = _e[_d];
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _f = 0, _g = message.unbonding_delegations; _f < _g.length; _f++) {
            var v = _g[_f];
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _h = 0, _j = message.redelegations; _h < _j.length; _h++) {
            var v = _j[_h];
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_total_power = reader.bytes();
                    break;
                case 3:
                    message.last_validator_powers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbonding_delegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
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
            params: isSet(object.params) ? staking_1.Params.fromJSON(object.params) : undefined,
            last_total_power: isSet(object.last_total_power) ? bytesFromBase64(object.last_total_power) : new Uint8Array(),
            last_validator_powers: Array.isArray(object === null || object === void 0 ? void 0 : object.last_validator_powers)
                ? object.last_validator_powers.map(function (e) { return exports.LastValidatorPower.fromJSON(e); })
                : [],
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators) ? object.validators.map(function (e) { return staking_1.Validator.fromJSON(e); }) : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations) ? object.delegations.map(function (e) { return staking_1.Delegation.fromJSON(e); }) : [],
            unbonding_delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_delegations)
                ? object.unbonding_delegations.map(function (e) { return staking_1.UnbondingDelegation.fromJSON(e); })
                : [],
            redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations)
                ? object.redelegations.map(function (e) { return staking_1.Redelegation.fromJSON(e); })
                : [],
            exported: isSet(object.exported) ? Boolean(object.exported) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        message.last_total_power !== undefined &&
            (obj.last_total_power = base64FromBytes(message.last_total_power !== undefined ? message.last_total_power : new Uint8Array()));
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map(function (e) {
                return e ? exports.LastValidatorPower.toJSON(e) : undefined;
            });
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? staking_1.Validator.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(function (e) { return e ? staking_1.Delegation.toJSON(e) : undefined; });
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map(function (e) {
                return e ? staking_1.UnbondingDelegation.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(function (e) { return e ? staking_1.Redelegation.toJSON(e) : undefined; });
        }
        else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? staking_1.Params.fromPartial(object.params)
            : undefined;
        message.last_total_power = (_a = object.last_total_power) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.last_validator_powers = ((_b = object.last_validator_powers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.LastValidatorPower.fromPartial(e); })) || [];
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map(function (e) { return staking_1.Validator.fromPartial(e); })) || [];
        message.delegations = ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map(function (e) { return staking_1.Delegation.fromPartial(e); })) || [];
        message.unbonding_delegations = ((_e = object.unbonding_delegations) === null || _e === void 0 ? void 0 : _e.map(function (e) { return staking_1.UnbondingDelegation.fromPartial(e); })) || [];
        message.redelegations = ((_f = object.redelegations) === null || _f === void 0 ? void 0 : _f.map(function (e) { return staking_1.Redelegation.fromPartial(e); })) || [];
        message.exported = (_g = object.exported) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseLastValidatorPower() {
    return { address: "", power: "0" };
}
exports.LastValidatorPower = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== "0") {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLastValidatorPower();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = longToString(reader.int64());
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
            power: isSet(object.power) ? String(object.power) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLastValidatorPower();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.power = (_b = object.power) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin_1.join(""));
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
//# sourceMappingURL=genesis.js.map