"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var nft_1 = require("./nft");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseGenesisState() {
    return { classes: [], entries: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.classes; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.entries; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Entry.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entries.push(exports.Entry.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map(function (e) { return nft_1.Class.fromJSON(e); }) : [],
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) { return exports.Entry.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(function (e) { return e ? nft_1.Class.toJSON(e) : undefined; });
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(function (e) { return e ? exports.Entry.toJSON(e) : undefined; });
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return nft_1.Class.fromPartial(e); })) || [];
        message.entries = ((_b = object.entries) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Entry.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseEntry() {
    return { owner: "", nfts: [] };
}
exports.Entry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (var _i = 0, _a = message.nfts; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map(function (e) { return nft_1.NFT.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.nfts) {
            obj.nfts = message.nfts.map(function (e) { return e ? nft_1.NFT.toJSON(e) : undefined; });
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEntry();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.nfts = ((_b = object.nfts) === null || _b === void 0 ? void 0 : _b.map(function (e) { return nft_1.NFT.fromPartial(e); })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map