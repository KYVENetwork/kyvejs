"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryStakersClientImpl = exports.QueryStakersByPoolCountResponse = exports.QueryStakersByPoolCountRequest = exports.StakerPoolResponse = exports.QueryStakersByPoolResponse = exports.QueryStakersByPoolRequest = exports.QueryStakerResponse = exports.QueryStakerRequest = exports.QueryStakersResponse = exports.QueryStakersRequest = exports.stakerStatusToNumber = exports.stakerStatusToJSON = exports.stakerStatusFromJSON = exports.StakerStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
var stakers_1 = require("../../stakers/v1beta1/stakers");
var query_1 = require("./query");
exports.protobufPackage = "kyve.query.v1beta1";
/** StakerStatus ... */
var StakerStatus;
(function (StakerStatus) {
    /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
    StakerStatus["STAKER_STATUS_UNSPECIFIED"] = "STAKER_STATUS_UNSPECIFIED";
    /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
    StakerStatus["STAKER_STATUS_ACTIVE"] = "STAKER_STATUS_ACTIVE";
    /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
    StakerStatus["STAKER_STATUS_INACTIVE"] = "STAKER_STATUS_INACTIVE";
    StakerStatus["UNRECOGNIZED"] = "UNRECOGNIZED";
})(StakerStatus = exports.StakerStatus || (exports.StakerStatus = {}));
function stakerStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STAKER_STATUS_UNSPECIFIED":
            return StakerStatus.STAKER_STATUS_UNSPECIFIED;
        case 1:
        case "STAKER_STATUS_ACTIVE":
            return StakerStatus.STAKER_STATUS_ACTIVE;
        case 2:
        case "STAKER_STATUS_INACTIVE":
            return StakerStatus.STAKER_STATUS_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StakerStatus.UNRECOGNIZED;
    }
}
exports.stakerStatusFromJSON = stakerStatusFromJSON;
function stakerStatusToJSON(object) {
    switch (object) {
        case StakerStatus.STAKER_STATUS_UNSPECIFIED:
            return "STAKER_STATUS_UNSPECIFIED";
        case StakerStatus.STAKER_STATUS_ACTIVE:
            return "STAKER_STATUS_ACTIVE";
        case StakerStatus.STAKER_STATUS_INACTIVE:
            return "STAKER_STATUS_INACTIVE";
        case StakerStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stakerStatusToJSON = stakerStatusToJSON;
function stakerStatusToNumber(object) {
    switch (object) {
        case StakerStatus.STAKER_STATUS_UNSPECIFIED:
            return 0;
        case StakerStatus.STAKER_STATUS_ACTIVE:
            return 1;
        case StakerStatus.STAKER_STATUS_INACTIVE:
            return 2;
        case StakerStatus.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.stakerStatusToNumber = stakerStatusToNumber;
function createBaseQueryStakersRequest() {
    return { pagination: undefined, status: StakerStatus.STAKER_STATUS_UNSPECIFIED, search: "" };
}
exports.QueryStakersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.status !== StakerStatus.STAKER_STATUS_UNSPECIFIED) {
            writer.uint32(16).int32(stakerStatusToNumber(message.status));
        }
        if (message.search !== "") {
            writer.uint32(26).string(message.search);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = stakerStatusFromJSON(reader.int32());
                    break;
                case 3:
                    message.search = reader.string();
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
            status: isSet(object.status) ? stakerStatusFromJSON(object.status) : StakerStatus.STAKER_STATUS_UNSPECIFIED,
            search: isSet(object.search) ? String(object.search) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.status !== undefined && (obj.status = stakerStatusToJSON(message.status));
        message.search !== undefined && (obj.search = message.search);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakersRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : StakerStatus.STAKER_STATUS_UNSPECIFIED;
        message.search = (_b = object.search) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryStakersResponse() {
    return { stakers: [], pagination: undefined };
}
exports.QueryStakersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            query_1.FullStaker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakers.push(query_1.FullStaker.decode(reader, reader.uint32()));
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
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers) ? object.stakers.map(function (e) { return query_1.FullStaker.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e ? query_1.FullStaker.toJSON(e) : undefined; });
        }
        else {
            obj.stakers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersResponse();
        message.stakers = ((_a = object.stakers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return query_1.FullStaker.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryStakerRequest() {
    return { address: "" };
}
exports.QueryStakerRequest = {
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
        var message = createBaseQueryStakerRequest();
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
        var message = createBaseQueryStakerRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryStakerResponse() {
    return { staker: undefined };
}
exports.QueryStakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== undefined) {
            query_1.FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = query_1.FullStaker.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { staker: isSet(object.staker) ? query_1.FullStaker.fromJSON(object.staker) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker ? query_1.FullStaker.toJSON(message.staker) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryStakerResponse();
        message.staker = (object.staker !== undefined && object.staker !== null)
            ? query_1.FullStaker.fromPartial(object.staker)
            : undefined;
        return message;
    },
};
function createBaseQueryStakersByPoolRequest() {
    return { pool_id: "0" };
}
exports.QueryStakersByPoolRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersByPoolRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersByPoolRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryStakersByPoolResponse() {
    return { stakers: [] };
}
exports.QueryStakersByPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StakerPoolResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersByPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakers.push(exports.StakerPoolResponse.decode(reader, reader.uint32()));
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
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers) ? object.stakers.map(function (e) { return exports.StakerPoolResponse.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e ? exports.StakerPoolResponse.toJSON(e) : undefined; });
        }
        else {
            obj.stakers = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersByPoolResponse();
        message.stakers = ((_a = object.stakers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StakerPoolResponse.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseStakerPoolResponse() {
    return { staker: undefined, valaccount: undefined };
}
exports.StakerPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.staker !== undefined) {
            query_1.FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
        }
        if (message.valaccount !== undefined) {
            stakers_1.Valaccount.encode(message.valaccount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakerPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = query_1.FullStaker.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valaccount = stakers_1.Valaccount.decode(reader, reader.uint32());
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
            staker: isSet(object.staker) ? query_1.FullStaker.fromJSON(object.staker) : undefined,
            valaccount: isSet(object.valaccount) ? stakers_1.Valaccount.fromJSON(object.valaccount) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker ? query_1.FullStaker.toJSON(message.staker) : undefined);
        message.valaccount !== undefined &&
            (obj.valaccount = message.valaccount ? stakers_1.Valaccount.toJSON(message.valaccount) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseStakerPoolResponse();
        message.staker = (object.staker !== undefined && object.staker !== null)
            ? query_1.FullStaker.fromPartial(object.staker)
            : undefined;
        message.valaccount = (object.valaccount !== undefined && object.valaccount !== null)
            ? stakers_1.Valaccount.fromPartial(object.valaccount)
            : undefined;
        return message;
    },
};
function createBaseQueryStakersByPoolCountRequest() {
    return { pagination: undefined };
}
exports.QueryStakersByPoolCountRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersByPoolCountRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryStakersByPoolCountRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryStakersByPoolCountResponse() {
    return { stakers: [], pagination: undefined };
}
exports.QueryStakersByPoolCountResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            query_1.FullStaker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersByPoolCountResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakers.push(query_1.FullStaker.decode(reader, reader.uint32()));
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
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers) ? object.stakers.map(function (e) { return query_1.FullStaker.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e ? query_1.FullStaker.toJSON(e) : undefined; });
        }
        else {
            obj.stakers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersByPoolCountResponse();
        message.stakers = ((_a = object.stakers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return query_1.FullStaker.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
var QueryStakersClientImpl = /** @class */ (function () {
    function QueryStakersClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.query.v1beta1.QueryStakers";
        this.rpc = rpc;
        this.Stakers = this.Stakers.bind(this);
        this.Staker = this.Staker.bind(this);
        this.StakersByPool = this.StakersByPool.bind(this);
        this.StakersByPoolCount = this.StakersByPoolCount.bind(this);
    }
    QueryStakersClientImpl.prototype.Stakers = function (request) {
        var data = exports.QueryStakersRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Stakers", data);
        return promise.then(function (data) { return exports.QueryStakersResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryStakersClientImpl.prototype.Staker = function (request) {
        var data = exports.QueryStakerRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Staker", data);
        return promise.then(function (data) { return exports.QueryStakerResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryStakersClientImpl.prototype.StakersByPool = function (request) {
        var data = exports.QueryStakersByPoolRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "StakersByPool", data);
        return promise.then(function (data) { return exports.QueryStakersByPoolResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryStakersClientImpl.prototype.StakersByPoolCount = function (request) {
        var data = exports.QueryStakersByPoolCountRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "StakersByPoolCount", data);
        return promise.then(function (data) { return exports.QueryStakersByPoolCountResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryStakersClientImpl;
}());
exports.QueryStakersClientImpl = QueryStakersClientImpl;
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
//# sourceMappingURL=stakers.js.map