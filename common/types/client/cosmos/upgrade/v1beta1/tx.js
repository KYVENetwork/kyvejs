"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var upgrade_1 = require("./upgrade");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseMsgSoftwareUpgrade() {
    return { authority: "", plan: undefined };
}
exports.MsgSoftwareUpgrade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSoftwareUpgrade();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
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
            plan: isSet(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgSoftwareUpgrade();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.plan = (object.plan !== undefined && object.plan !== null) ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseMsgSoftwareUpgradeResponse() {
    return {};
}
exports.MsgSoftwareUpgradeResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSoftwareUpgradeResponse();
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
        var message = createBaseMsgSoftwareUpgradeResponse();
        return message;
    },
};
function createBaseMsgCancelUpgrade() {
    return { authority: "" };
}
exports.MsgCancelUpgrade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelUpgrade();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { authority: isSet(object.authority) ? String(object.authority) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgCancelUpgrade();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgCancelUpgradeResponse() {
    return {};
}
exports.MsgCancelUpgradeResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCancelUpgradeResponse();
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
        var message = createBaseMsgCancelUpgradeResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.upgrade.v1beta1.Msg";
        this.rpc = rpc;
        this.SoftwareUpgrade = this.SoftwareUpgrade.bind(this);
        this.CancelUpgrade = this.CancelUpgrade.bind(this);
    }
    MsgClientImpl.prototype.SoftwareUpgrade = function (request) {
        var data = exports.MsgSoftwareUpgrade.encode(request).finish();
        var promise = this.rpc.request(this.service, "SoftwareUpgrade", data);
        return promise.then(function (data) { return exports.MsgSoftwareUpgradeResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.CancelUpgrade = function (request) {
        var data = exports.MsgCancelUpgrade.encode(request).finish();
        var promise = this.rpc.request(this.service, "CancelUpgrade", data);
        return promise.then(function (data) { return exports.MsgCancelUpgradeResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map