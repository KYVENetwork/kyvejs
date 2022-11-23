"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.fees.v1beta1";
function createBaseMsgUpdateParams() {
    return { authority: "", payload: "" };
}
exports.MsgUpdateParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.payload !== "") {
            writer.uint32(18).string(message.payload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.payload = reader.string();
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            payload: isSet(object.payload) ? String(object.payload) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParamsResponse();
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
        var message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.fees.v1beta1.Msg";
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    MsgClientImpl.prototype.UpdateParams = function (request) {
        var data = exports.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then(function (data) { return exports.MsgUpdateParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map