"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseParams() {
    return { send_enabled: [], default_send_enabled: false };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.send_enabled; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.default_send_enabled === true) {
            writer.uint32(16).bool(message.default_send_enabled);
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
                    message.send_enabled.push(exports.SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.default_send_enabled = reader.bool();
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
            send_enabled: Array.isArray(object === null || object === void 0 ? void 0 : object.send_enabled)
                ? object.send_enabled.map(function (e) { return exports.SendEnabled.fromJSON(e); })
                : [],
            default_send_enabled: isSet(object.default_send_enabled) ? Boolean(object.default_send_enabled) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(function (e) { return e ? exports.SendEnabled.toJSON(e) : undefined; });
        }
        else {
            obj.send_enabled = [];
        }
        message.default_send_enabled !== undefined && (obj.default_send_enabled = message.default_send_enabled);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseParams();
        message.send_enabled = ((_a = object.send_enabled) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SendEnabled.fromPartial(e); })) || [];
        message.default_send_enabled = (_b = object.default_send_enabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSendEnabled() {
    return { denom: "", enabled: false };
}
exports.SendEnabled = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendEnabled();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSendEnabled();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseInput() {
    return { address: "", coins: [] };
}
exports.Input = {
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
        var message = createBaseInput();
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
        var message = createBaseInput();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseOutput() {
    return { address: "", coins: [] };
}
exports.Output = {
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
        var message = createBaseOutput();
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
        var message = createBaseOutput();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSupply() {
    return { total: [] };
}
exports.Supply = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.total; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSupply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { total: Array.isArray(object === null || object === void 0 ? void 0 : object.total) ? object.total.map(function (e) { return coin_1.Coin.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.total) {
            obj.total = message.total.map(function (e) { return e ? coin_1.Coin.toJSON(e) : undefined; });
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSupply();
        message.total = ((_a = object.total) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseDenomUnit() {
    return { denom: "", exponent: 0, aliases: [] };
}
exports.DenomUnit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (var _i = 0, _a = message.aliases; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenomUnit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
            aliases: Array.isArray(object === null || object === void 0 ? void 0 : object.aliases) ? object.aliases.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        if (message.aliases) {
            obj.aliases = message.aliases.map(function (e) { return e; });
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDenomUnit();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.exponent = (_b = object.exponent) !== null && _b !== void 0 ? _b : 0;
        message.aliases = ((_c = object.aliases) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseMetadata() {
    return { description: "", denom_units: [], base: "", display: "", name: "", symbol: "", uri: "", uri_hash: "" };
}
exports.Metadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (var _i = 0, _a = message.denom_units; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(66).string(message.uri_hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denom_units.push(exports.DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uri_hash = reader.string();
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
            description: isSet(object.description) ? String(object.description) : "",
            denom_units: Array.isArray(object === null || object === void 0 ? void 0 : object.denom_units) ? object.denom_units.map(function (e) { return exports.DenomUnit.fromJSON(e); }) : [],
            base: isSet(object.base) ? String(object.base) : "",
            display: isSet(object.display) ? String(object.display) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description);
        if (message.denom_units) {
            obj.denom_units = message.denom_units.map(function (e) { return e ? exports.DenomUnit.toJSON(e) : undefined; });
        }
        else {
            obj.denom_units = [];
        }
        message.base !== undefined && (obj.base = message.base);
        message.display !== undefined && (obj.display = message.display);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseMetadata();
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.denom_units = ((_b = object.denom_units) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.DenomUnit.fromPartial(e); })) || [];
        message.base = (_c = object.base) !== null && _c !== void 0 ? _c : "";
        message.display = (_d = object.display) !== null && _d !== void 0 ? _d : "";
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.symbol = (_f = object.symbol) !== null && _f !== void 0 ? _f : "";
        message.uri = (_g = object.uri) !== null && _g !== void 0 ? _g : "";
        message.uri_hash = (_h = object.uri_hash) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=bank.js.map