"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.crisis.v1beta1";
function createBaseMsgVerifyInvariant() {
    return { sender: "", invariant_module_name: "", invariant_route: "" };
}
exports.MsgVerifyInvariant = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariant_module_name !== "") {
            writer.uint32(18).string(message.invariant_module_name);
        }
        if (message.invariant_route !== "") {
            writer.uint32(26).string(message.invariant_route);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVerifyInvariant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invariant_module_name = reader.string();
                    break;
                case 3:
                    message.invariant_route = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            invariant_module_name: isSet(object.invariant_module_name) ? String(object.invariant_module_name) : "",
            invariant_route: isSet(object.invariant_route) ? String(object.invariant_route) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invariant_module_name !== undefined && (obj.invariant_module_name = message.invariant_module_name);
        message.invariant_route !== undefined && (obj.invariant_route = message.invariant_route);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgVerifyInvariant();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.invariant_module_name = (_b = object.invariant_module_name) !== null && _b !== void 0 ? _b : "";
        message.invariant_route = (_c = object.invariant_route) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
exports.MsgVerifyInvariantResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVerifyInvariantResponse();
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
        var message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.crisis.v1beta1.Msg";
        this.rpc = rpc;
        this.VerifyInvariant = this.VerifyInvariant.bind(this);
    }
    MsgClientImpl.prototype.VerifyInvariant = function (request) {
        var data = exports.MsgVerifyInvariant.encode(request).finish();
        var promise = this.rpc.request(this.service, "VerifyInvariant", data);
        return promise.then(function (data) { return exports.MsgVerifyInvariantResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map