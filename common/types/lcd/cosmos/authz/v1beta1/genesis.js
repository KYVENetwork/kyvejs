"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var authz_1 = require("./authz");
exports.protobufPackage = "cosmos.authz.v1beta1";
function createBaseGenesisState() {
    return { authorization: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.authorization; _i < _a.length; _i++) {
            var v = _a[_i];
            authz_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authorization.push(authz_1.GrantAuthorization.decode(reader, reader.uint32()));
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
            authorization: Array.isArray(object === null || object === void 0 ? void 0 : object.authorization)
                ? object.authorization.map(function (e) { return authz_1.GrantAuthorization.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(function (e) { return e ? authz_1.GrantAuthorization.toJSON(e) : undefined; });
        }
        else {
            obj.authorization = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGenesisState();
        message.authorization = ((_a = object.authorization) === null || _a === void 0 ? void 0 : _a.map(function (e) { return authz_1.GrantAuthorization.fromPartial(e); })) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map