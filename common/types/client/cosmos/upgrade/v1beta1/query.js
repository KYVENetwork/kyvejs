"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAuthorityResponse = exports.QueryAuthorityRequest = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var upgrade_1 = require("./upgrade");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCurrentPlanRequest();
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
        var message = createBaseQueryCurrentPlanRequest();
        return message;
    },
};
function createBaseQueryCurrentPlanResponse() {
    return { plan: undefined };
}
exports.QueryCurrentPlanResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { plan: isSet(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryCurrentPlanResponse();
        message.plan = (object.plan !== undefined && object.plan !== null) ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseQueryAppliedPlanRequest() {
    return { name: "" };
}
exports.QueryAppliedPlanRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAppliedPlanRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAppliedPlanResponse() {
    return { height: "0" };
}
exports.QueryAppliedPlanResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { height: isSet(object.height) ? String(object.height) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAppliedPlanResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return { last_height: "0" };
}
exports.QueryUpgradedConsensusStateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.last_height !== "0") {
            writer.uint32(8).int64(message.last_height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.last_height = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { last_height: isSet(object.last_height) ? String(object.last_height) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.last_height !== undefined && (obj.last_height = message.last_height);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryUpgradedConsensusStateRequest();
        message.last_height = (_a = object.last_height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return { upgraded_consensus_state: new Uint8Array() };
}
exports.QueryUpgradedConsensusStateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.upgraded_consensus_state.length !== 0) {
            writer.uint32(18).bytes(message.upgraded_consensus_state);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgraded_consensus_state = reader.bytes();
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
            upgraded_consensus_state: isSet(object.upgraded_consensus_state)
                ? bytesFromBase64(object.upgraded_consensus_state)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.upgraded_consensus_state !== undefined &&
            (obj.upgraded_consensus_state = base64FromBytes(message.upgraded_consensus_state !== undefined ? message.upgraded_consensus_state : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgraded_consensus_state = (_a = object.upgraded_consensus_state) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryModuleVersionsRequest() {
    return { module_name: "" };
}
exports.QueryModuleVersionsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { module_name: isSet(object.module_name) ? String(object.module_name) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.module_name !== undefined && (obj.module_name = message.module_name);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryModuleVersionsRequest();
        message.module_name = (_a = object.module_name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryModuleVersionsResponse() {
    return { module_versions: [] };
}
exports.QueryModuleVersionsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.module_versions; _i < _a.length; _i++) {
            var v = _a[_i];
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_versions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
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
            module_versions: Array.isArray(object === null || object === void 0 ? void 0 : object.module_versions)
                ? object.module_versions.map(function (e) { return upgrade_1.ModuleVersion.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map(function (e) { return e ? upgrade_1.ModuleVersion.toJSON(e) : undefined; });
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryModuleVersionsResponse();
        message.module_versions = ((_a = object.module_versions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return upgrade_1.ModuleVersion.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseQueryAuthorityRequest() {
    return {};
}
exports.QueryAuthorityRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAuthorityRequest();
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
        var message = createBaseQueryAuthorityRequest();
        return message;
    },
};
function createBaseQueryAuthorityResponse() {
    return { address: "" };
}
exports.QueryAuthorityResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAuthorityResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAuthorityResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.upgrade.v1beta1.Query";
        this.rpc = rpc;
        this.CurrentPlan = this.CurrentPlan.bind(this);
        this.AppliedPlan = this.AppliedPlan.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
        this.ModuleVersions = this.ModuleVersions.bind(this);
        this.Authority = this.Authority.bind(this);
    }
    QueryClientImpl.prototype.CurrentPlan = function (request) {
        var data = exports.QueryCurrentPlanRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CurrentPlan", data);
        return promise.then(function (data) { return exports.QueryCurrentPlanResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.AppliedPlan = function (request) {
        var data = exports.QueryAppliedPlanRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "AppliedPlan", data);
        return promise.then(function (data) { return exports.QueryAppliedPlanResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.UpgradedConsensusState = function (request) {
        var data = exports.QueryUpgradedConsensusStateRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpgradedConsensusState", data);
        return promise.then(function (data) { return exports.QueryUpgradedConsensusStateResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.ModuleVersions = function (request) {
        var data = exports.QueryModuleVersionsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ModuleVersions", data);
        return promise.then(function (data) { return exports.QueryModuleVersionsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Authority = function (request) {
        var data = exports.QueryAuthorityRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Authority", data);
        return promise.then(function (data) { return exports.QueryAuthorityResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map