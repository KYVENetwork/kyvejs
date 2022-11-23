"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPoolClientImpl = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.PoolResponse = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
var bundles_1 = require("../../bundles/v1beta1/bundles");
var pool_1 = require("../../pool/v1beta1/pool");
exports.protobufPackage = "kyve.query.v1beta1";
function createBaseQueryPoolsRequest() {
    return { pagination: undefined, search: "", runtime: "", paused: false, storage_provider_id: 0 };
}
exports.QueryPoolsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.search !== "") {
            writer.uint32(18).string(message.search);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        if (message.paused === true) {
            writer.uint32(32).bool(message.paused);
        }
        if (message.storage_provider_id !== 0) {
            writer.uint32(40).uint32(message.storage_provider_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.search = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
                    break;
                case 4:
                    message.paused = reader.bool();
                    break;
                case 5:
                    message.storage_provider_id = reader.uint32();
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            search: isSet(object.search) ? String(object.search) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            paused: isSet(object.paused) ? Boolean(object.paused) : false,
            storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.search !== undefined && (obj.search = message.search);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.paused !== undefined && (obj.paused = message.paused);
        message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseQueryPoolsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.search = (_a = object.search) !== null && _a !== void 0 ? _a : "";
        message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
        message.paused = (_c = object.paused) !== null && _c !== void 0 ? _c : false;
        message.storage_provider_id = (_d = object.storage_provider_id) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseQueryPoolsResponse() {
    return { pools: [], pagination: undefined };
}
exports.QueryPoolsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.pools; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PoolResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(exports.PoolResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools) ? object.pools.map(function (e) { return exports.PoolResponse.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(function (e) { return e ? exports.PoolResponse.toJSON(e) : undefined; });
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryPoolsResponse();
        message.pools = ((_a = object.pools) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.PoolResponse.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBasePoolResponse() {
    return {
        id: "0",
        data: undefined,
        bundle_proposal: undefined,
        stakers: [],
        total_self_delegation: "0",
        total_delegation: "0",
        status: 0,
    };
}
exports.PoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.data !== undefined) {
            pool_1.Pool.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.bundle_proposal !== undefined) {
            bundles_1.BundleProposal.encode(message.bundle_proposal, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        if (message.total_self_delegation !== "0") {
            writer.uint32(40).uint64(message.total_self_delegation);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(48).uint64(message.total_delegation);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.data = pool_1.Pool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bundle_proposal = bundles_1.BundleProposal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.stakers.push(reader.string());
                    break;
                case 5:
                    message.total_self_delegation = longToString(reader.uint64());
                    break;
                case 6:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 7:
                    message.status = reader.int32();
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
            id: isSet(object.id) ? String(object.id) : "0",
            data: isSet(object.data) ? pool_1.Pool.fromJSON(object.data) : undefined,
            bundle_proposal: isSet(object.bundle_proposal) ? bundles_1.BundleProposal.fromJSON(object.bundle_proposal) : undefined,
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers) ? object.stakers.map(function (e) { return String(e); }) : [],
            total_self_delegation: isSet(object.total_self_delegation) ? String(object.total_self_delegation) : "0",
            total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
            status: isSet(object.status) ? (0, pool_1.poolStatusFromJSON)(object.status) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.data !== undefined && (obj.data = message.data ? pool_1.Pool.toJSON(message.data) : undefined);
        message.bundle_proposal !== undefined &&
            (obj.bundle_proposal = message.bundle_proposal ? bundles_1.BundleProposal.toJSON(message.bundle_proposal) : undefined);
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e; });
        }
        else {
            obj.stakers = [];
        }
        message.total_self_delegation !== undefined && (obj.total_self_delegation = message.total_self_delegation);
        message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
        message.status !== undefined && (obj.status = (0, pool_1.poolStatusToJSON)(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBasePoolResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.data = (object.data !== undefined && object.data !== null) ? pool_1.Pool.fromPartial(object.data) : undefined;
        message.bundle_proposal = (object.bundle_proposal !== undefined && object.bundle_proposal !== null)
            ? bundles_1.BundleProposal.fromPartial(object.bundle_proposal)
            : undefined;
        message.stakers = ((_b = object.stakers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.total_self_delegation = (_c = object.total_self_delegation) !== null && _c !== void 0 ? _c : "0";
        message.total_delegation = (_d = object.total_delegation) !== null && _d !== void 0 ? _d : "0";
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return { id: "0" };
}
exports.QueryPoolRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? String(object.id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryPoolRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool !== undefined) {
            exports.PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = exports.PoolResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pool: isSet(object.pool) ? exports.PoolResponse.fromJSON(object.pool) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? exports.PoolResponse.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPoolResponse();
        message.pool = (object.pool !== undefined && object.pool !== null)
            ? exports.PoolResponse.fromPartial(object.pool)
            : undefined;
        return message;
    },
};
var QueryPoolClientImpl = /** @class */ (function () {
    function QueryPoolClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.query.v1beta1.QueryPool";
        this.rpc = rpc;
        this.Pools = this.Pools.bind(this);
        this.Pool = this.Pool.bind(this);
    }
    QueryPoolClientImpl.prototype.Pools = function (request) {
        var data = exports.QueryPoolsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Pools", data);
        return promise.then(function (data) { return exports.QueryPoolsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryPoolClientImpl.prototype.Pool = function (request) {
        var data = exports.QueryPoolRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Pool", data);
        return promise.then(function (data) { return exports.QueryPoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryPoolClientImpl;
}());
exports.QueryPoolClientImpl = QueryPoolClientImpl;
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
//# sourceMappingURL=pools.js.map