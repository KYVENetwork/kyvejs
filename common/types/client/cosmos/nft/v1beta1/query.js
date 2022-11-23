"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryClassesResponse = exports.QueryClassesRequest = exports.QueryClassResponse = exports.QueryClassRequest = exports.QueryNFTResponse = exports.QueryNFTRequest = exports.QueryNFTsResponse = exports.QueryNFTsRequest = exports.QuerySupplyResponse = exports.QuerySupplyRequest = exports.QueryOwnerResponse = exports.QueryOwnerRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var pagination_1 = require("../../base/query/v1beta1/pagination");
var nft_1 = require("./nft");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseQueryBalanceRequest() {
    return { class_id: "", owner: "" };
}
exports.QueryBalanceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryBalanceRequest();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryBalanceResponse() {
    return { amount: "0" };
}
exports.QueryBalanceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { amount: isSet(object.amount) ? String(object.amount) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryBalanceResponse();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryOwnerRequest() {
    return { class_id: "", id: "" };
}
exports.QueryOwnerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryOwnerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryOwnerRequest();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryOwnerResponse() {
    return { owner: "" };
}
exports.QueryOwnerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryOwnerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { owner: isSet(object.owner) ? String(object.owner) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryOwnerResponse();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyRequest() {
    return { class_id: "" };
}
exports.QuerySupplyRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { class_id: isSet(object.class_id) ? String(object.class_id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySupplyRequest();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySupplyResponse() {
    return { amount: "0" };
}
exports.QuerySupplyResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { amount: isSet(object.amount) ? String(object.amount) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQuerySupplyResponse();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryNFTsRequest() {
    return { class_id: "", owner: "", pagination: undefined };
}
exports.QueryNFTsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
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
        return {
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryNFTsRequest();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryNFTsResponse() {
    return { nfts: [], pagination: undefined };
}
exports.QueryNFTsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.nfts; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
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
            nfts: Array.isArray(object === null || object === void 0 ? void 0 : object.nfts) ? object.nfts.map(function (e) { return nft_1.NFT.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(function (e) { return e ? nft_1.NFT.toJSON(e) : undefined; });
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryNFTsResponse();
        message.nfts = ((_a = object.nfts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return nft_1.NFT.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryNFTRequest() {
    return { class_id: "", id: "" };
}
exports.QueryNFTRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryNFTRequest();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNFTResponse() {
    return { nft: undefined };
}
exports.QueryNFTResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.nft !== undefined) {
            nft_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nft = nft_1.NFT.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { nft: isSet(object.nft) ? nft_1.NFT.fromJSON(object.nft) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? nft_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryNFTResponse();
        message.nft = (object.nft !== undefined && object.nft !== null) ? nft_1.NFT.fromPartial(object.nft) : undefined;
        return message;
    },
};
function createBaseQueryClassRequest() {
    return { class_id: "" };
}
exports.QueryClassRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { class_id: isSet(object.class_id) ? String(object.class_id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClassRequest();
        message.class_id = (_a = object.class_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClassResponse() {
    return { class: undefined };
}
exports.QueryClassResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.class !== undefined) {
            nft_1.Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = nft_1.Class.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { class: isSet(object.class) ? nft_1.Class.fromJSON(object.class) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.class !== undefined && (obj.class = message.class ? nft_1.Class.toJSON(message.class) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryClassResponse();
        message.class = (object.class !== undefined && object.class !== null) ? nft_1.Class.fromPartial(object.class) : undefined;
        return message;
    },
};
function createBaseQueryClassesRequest() {
    return { pagination: undefined };
}
exports.QueryClassesRequest = {
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
        var message = createBaseQueryClassesRequest();
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
        var message = createBaseQueryClassesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClassesResponse() {
    return { classes: [], pagination: undefined };
}
exports.QueryClassesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.classes; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object === null || object === void 0 ? void 0 : object.classes) ? object.classes.map(function (e) { return nft_1.Class.fromJSON(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryClassesResponse();
        message.classes = ((_a = object.classes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return nft_1.Class.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.nft.v1beta1.Query";
        this.rpc = rpc;
        this.Balance = this.Balance.bind(this);
        this.Owner = this.Owner.bind(this);
        this.Supply = this.Supply.bind(this);
        this.NFTs = this.NFTs.bind(this);
        this.NFT = this.NFT.bind(this);
        this.Class = this.Class.bind(this);
        this.Classes = this.Classes.bind(this);
    }
    QueryClientImpl.prototype.Balance = function (request) {
        var data = exports.QueryBalanceRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Balance", data);
        return promise.then(function (data) { return exports.QueryBalanceResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Owner = function (request) {
        var data = exports.QueryOwnerRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Owner", data);
        return promise.then(function (data) { return exports.QueryOwnerResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Supply = function (request) {
        var data = exports.QuerySupplyRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Supply", data);
        return promise.then(function (data) { return exports.QuerySupplyResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.NFTs = function (request) {
        var data = exports.QueryNFTsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "NFTs", data);
        return promise.then(function (data) { return exports.QueryNFTsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.NFT = function (request) {
        var data = exports.QueryNFTRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "NFT", data);
        return promise.then(function (data) { return exports.QueryNFTResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Class = function (request) {
        var data = exports.QueryClassRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Class", data);
        return promise.then(function (data) { return exports.QueryClassResponse.decode(new minimal_1.default.Reader(data)); });
    };
    QueryClientImpl.prototype.Classes = function (request) {
        var data = exports.QueryClassesRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Classes", data);
        return promise.then(function (data) { return exports.QueryClassesResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
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