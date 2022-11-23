"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
var bank_1 = require("./bank");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, balances: [], supply: [], denom_metadata: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.balances; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.supply; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.denom_metadata; _d < _e.length; _d++) {
            var v = _e[_d];
            bank_1.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.params = bank_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denom_metadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? bank_1.Params.fromJSON(object.params) : undefined,
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances) ? object.balances.map(function (e) { return exports.Balance.fromJSON(e); }) : [],
            supply: Array.isArray(object === null || object === void 0 ? void 0 : object.supply) ? object.supply.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
            denom_metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.denom_metadata)
                ? object.denom_metadata.map(function (e) { return bank_1.Metadata.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? bank_1.Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map(function (e) { return e ? exports.Balance.toJSON(e) : undefined; });
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.supply = [];
        }
        if (message.denom_metadata) {
            obj.denom_metadata = message.denom_metadata.map(function (e) { return e ? bank_1.Metadata.toJSON(e) : undefined; });
        }
        else {
            obj.denom_metadata = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? bank_1.Params.fromPartial(object.params)
            : undefined;
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Balance.fromPartial(e); })) || [];
        message.supply = ((_b = object.supply) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.denom_metadata = ((_c = object.denom_metadata) === null || _c === void 0 ? void 0 : _c.map(function (e) { return bank_1.Metadata.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseBalance() {
    return { address: "", coins: [] };
}
exports.Balance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.coins; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBalance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins) ? object.coins.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBalance();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map