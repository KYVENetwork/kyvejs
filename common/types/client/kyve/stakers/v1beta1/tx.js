"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgLeavePoolResponse = exports.MsgLeavePool = exports.MsgJoinPoolResponse = exports.MsgJoinPool = exports.MsgUpdateCommissionResponse = exports.MsgUpdateCommission = exports.MsgUpdateMetadataResponse = exports.MsgUpdateMetadata = exports.MsgCreateStakerResponse = exports.MsgCreateStaker = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.stakers.v1beta1";
function createBaseMsgCreateStaker() {
    return { creator: "", amount: "0" };
}
exports.MsgCreateStaker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== "0") {
            writer.uint32(16).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateStaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgCreateStaker();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgCreateStakerResponse() {
    return {};
}
exports.MsgCreateStakerResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgCreateStakerResponse();
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
        var message = createBaseMsgCreateStakerResponse();
        return message;
    },
};
function createBaseMsgUpdateMetadata() {
    return { creator: "", moniker: "", website: "", logo: "" };
}
exports.MsgUpdateMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.moniker !== "") {
            writer.uint32(18).string(message.moniker);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.logo !== "") {
            writer.uint32(34).string(message.logo);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.moniker = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.logo = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgUpdateMetadata();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.moniker = (_b = object.moniker) !== null && _b !== void 0 ? _b : "";
        message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
        message.logo = (_d = object.logo) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgUpdateMetadataResponse() {
    return {};
}
exports.MsgUpdateMetadataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMetadataResponse();
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
        var message = createBaseMsgUpdateMetadataResponse();
        return message;
    },
};
function createBaseMsgUpdateCommission() {
    return { creator: "", commission: "" };
}
exports.MsgUpdateCommission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.commission !== "") {
            writer.uint32(18).string(message.commission);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateCommission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.commission = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            commission: isSet(object.commission) ? String(object.commission) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.commission !== undefined && (obj.commission = message.commission);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUpdateCommission();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.commission = (_b = object.commission) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateCommissionResponse() {
    return {};
}
exports.MsgUpdateCommissionResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateCommissionResponse();
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
        var message = createBaseMsgUpdateCommissionResponse();
        return message;
    },
};
function createBaseMsgJoinPool() {
    return { creator: "", pool_id: "0", valaddress: "", amount: "0" };
}
exports.MsgJoinPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.valaddress !== "") {
            writer.uint32(26).string(message.valaddress);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgJoinPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.valaddress = reader.string();
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.valaddress !== undefined && (obj.valaddress = message.valaddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgJoinPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.valaddress = (_c = object.valaddress) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseMsgJoinPoolResponse() {
    return {};
}
exports.MsgJoinPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgJoinPoolResponse();
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
        var message = createBaseMsgJoinPoolResponse();
        return message;
    },
};
function createBaseMsgLeavePool() {
    return { creator: "", pool_id: "0" };
}
exports.MsgLeavePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgLeavePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgLeavePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMsgLeavePoolResponse() {
    return {};
}
exports.MsgLeavePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgLeavePoolResponse();
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
        var message = createBaseMsgLeavePoolResponse();
        return message;
    },
};
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
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.stakers.v1beta1.Msg";
        this.rpc = rpc;
        this.CreateStaker = this.CreateStaker.bind(this);
        this.UpdateMetadata = this.UpdateMetadata.bind(this);
        this.UpdateCommission = this.UpdateCommission.bind(this);
        this.JoinPool = this.JoinPool.bind(this);
        this.LeavePool = this.LeavePool.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    MsgClientImpl.prototype.CreateStaker = function (request) {
        var data = exports.MsgCreateStaker.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateStaker", data);
        return promise.then(function (data) { return exports.MsgCreateStakerResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateMetadata = function (request) {
        var data = exports.MsgUpdateMetadata.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateMetadata", data);
        return promise.then(function (data) { return exports.MsgUpdateMetadataResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateCommission = function (request) {
        var data = exports.MsgUpdateCommission.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateCommission", data);
        return promise.then(function (data) { return exports.MsgUpdateCommissionResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.JoinPool = function (request) {
        var data = exports.MsgJoinPool.encode(request).finish();
        var promise = this.rpc.request(this.service, "JoinPool", data);
        return promise.then(function (data) { return exports.MsgJoinPoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.LeavePool = function (request) {
        var data = exports.MsgLeavePool.encode(request).finish();
        var promise = this.rpc.request(this.service, "LeavePool", data);
        return promise.then(function (data) { return exports.MsgLeavePoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateParams = function (request) {
        var data = exports.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then(function (data) { return exports.MsgUpdateParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map