"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUnjailResponse = exports.MsgUnjail = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseMsgUnjail() {
    return { validator_addr: "" };
}
exports.MsgUnjail = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnjail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgUnjail();
        message.validator_addr = (_a = object.validator_addr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUnjailResponse() {
    return {};
}
exports.MsgUnjailResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnjailResponse();
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
        var message = createBaseMsgUnjailResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.slashing.v1beta1.Msg";
        this.rpc = rpc;
        this.Unjail = this.Unjail.bind(this);
    }
    MsgClientImpl.prototype.Unjail = function (request) {
        var data = exports.MsgUnjail.encode(request).finish();
        var promise = this.rpc.request(this.service, "Unjail", data);
        return promise.then(function (data) { return exports.MsgUnjailResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map