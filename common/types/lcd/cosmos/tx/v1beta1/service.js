"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientImpl = exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.GetTxResponse = exports.GetTxRequest = exports.SimulateResponse = exports.SimulateRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.broadcastModeToNumber = exports.broadcastModeToJSON = exports.broadcastModeFromJSON = exports.BroadcastMode = exports.orderByToNumber = exports.orderByToJSON = exports.orderByFromJSON = exports.OrderBy = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var block_1 = require("../../../tendermint/types/block");
var types_1 = require("../../../tendermint/types/types");
var abci_1 = require("../../base/abci/v1beta1/abci");
var pagination_1 = require("../../base/query/v1beta1/pagination");
var tx_1 = require("./tx");
exports.protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy["ORDER_BY_UNSPECIFIED"] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy["ORDER_BY_ASC"] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy["ORDER_BY_DESC"] = "ORDER_BY_DESC";
    OrderBy["UNRECOGNIZED"] = "UNRECOGNIZED";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
exports.orderByFromJSON = orderByFromJSON;
function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderByToJSON = orderByToJSON;
function orderByToNumber(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return 0;
        case OrderBy.ORDER_BY_ASC:
            return 1;
        case OrderBy.ORDER_BY_DESC:
            return 2;
        case OrderBy.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.orderByToNumber = orderByToNumber;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BroadcastMode["BROADCAST_MODE_BLOCK"] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode["BROADCAST_MODE_SYNC"] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode["BROADCAST_MODE_ASYNC"] = "BROADCAST_MODE_ASYNC";
    BroadcastMode["UNRECOGNIZED"] = "UNRECOGNIZED";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
exports.broadcastModeFromJSON = broadcastModeFromJSON;
function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.broadcastModeToJSON = broadcastModeToJSON;
function broadcastModeToNumber(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return 0;
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return 1;
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return 2;
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return 3;
        case BroadcastMode.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.broadcastModeToNumber = broadcastModeToNumber;
function createBaseGetTxsEventRequest() {
    return { events: [], pagination: undefined, order_by: OrderBy.ORDER_BY_UNSPECIFIED };
}
exports.GetTxsEventRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.order_by !== OrderBy.ORDER_BY_UNSPECIFIED) {
            writer.uint32(24).int32(orderByToNumber(message.order_by));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.order_by = orderByFromJSON(reader.int32());
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
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return String(e); }) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            order_by: isSet(object.order_by) ? orderByFromJSON(object.order_by) : OrderBy.ORDER_BY_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.events) {
            obj.events = message.events.map(function (e) { return e; });
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.order_by !== undefined && (obj.order_by = orderByToJSON(message.order_by));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetTxsEventRequest();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.order_by = (_b = object.order_by) !== null && _b !== void 0 ? _b : OrderBy.ORDER_BY_UNSPECIFIED;
        return message;
    },
};
function createBaseGetTxsEventResponse() {
    return { txs: [], tx_responses: [], pagination: undefined };
}
exports.GetTxsEventResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.tx_responses; _b < _c.length; _b++) {
            var v = _c[_b];
            abci_1.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_responses.push(abci_1.TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) { return tx_1.Tx.fromJSON(e); }) : [],
            tx_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.tx_responses)
                ? object.tx_responses.map(function (e) { return abci_1.TxResponse.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(function (e) { return e ? tx_1.Tx.toJSON(e) : undefined; });
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map(function (e) { return e ? abci_1.TxResponse.toJSON(e) : undefined; });
        }
        else {
            obj.tx_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetTxsEventResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return tx_1.Tx.fromPartial(e); })) || [];
        message.tx_responses = ((_b = object.tx_responses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return abci_1.TxResponse.fromPartial(e); })) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseBroadcastTxRequest() {
    return { tx_bytes: new Uint8Array(), mode: BroadcastMode.BROADCAST_MODE_UNSPECIFIED };
}
exports.BroadcastTxRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        if (message.mode !== BroadcastMode.BROADCAST_MODE_UNSPECIFIED) {
            writer.uint32(16).int32(broadcastModeToNumber(message.mode));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
                    break;
                case 2:
                    message.mode = broadcastModeFromJSON(reader.int32());
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
            tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(),
            mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : BroadcastMode.BROADCAST_MODE_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx_bytes !== undefined &&
            (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBroadcastTxRequest();
        message.tx_bytes = (_a = object.tx_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        return message;
    },
};
function createBaseBroadcastTxResponse() {
    return { tx_response: undefined };
}
exports.BroadcastTxResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { tx_response: isSet(object.tx_response) ? abci_1.TxResponse.fromJSON(object.tx_response) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx_response !== undefined &&
            (obj.tx_response = message.tx_response ? abci_1.TxResponse.toJSON(message.tx_response) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBroadcastTxResponse();
        message.tx_response = (object.tx_response !== undefined && object.tx_response !== null)
            ? abci_1.TxResponse.fromPartial(object.tx_response)
            : undefined;
        return message;
    },
};
function createBaseSimulateRequest() {
    return { tx: undefined, tx_bytes: new Uint8Array() };
}
exports.SimulateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(18).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_bytes = reader.bytes();
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
            tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_bytes !== undefined &&
            (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSimulateRequest();
        message.tx = (object.tx !== undefined && object.tx !== null) ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.tx_bytes = (_a = object.tx_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseSimulateResponse() {
    return { gas_info: undefined, result: undefined };
}
exports.SimulateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.gas_info !== undefined) {
            abci_1.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = abci_1.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = abci_1.Result.decode(reader, reader.uint32());
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
            gas_info: isSet(object.gas_info) ? abci_1.GasInfo.fromJSON(object.gas_info) : undefined,
            result: isSet(object.result) ? abci_1.Result.fromJSON(object.result) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.gas_info !== undefined && (obj.gas_info = message.gas_info ? abci_1.GasInfo.toJSON(message.gas_info) : undefined);
        message.result !== undefined && (obj.result = message.result ? abci_1.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSimulateResponse();
        message.gas_info = (object.gas_info !== undefined && object.gas_info !== null)
            ? abci_1.GasInfo.fromPartial(object.gas_info)
            : undefined;
        message.result = (object.result !== undefined && object.result !== null)
            ? abci_1.Result.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetTxRequest() {
    return { hash: "" };
}
exports.GetTxRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetTxRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTxResponse() {
    return { tx: undefined, tx_response: undefined };
}
exports.GetTxResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            tx_response: isSet(object.tx_response) ? abci_1.TxResponse.fromJSON(object.tx_response) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_response !== undefined &&
            (obj.tx_response = message.tx_response ? abci_1.TxResponse.toJSON(message.tx_response) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetTxResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.tx_response = (object.tx_response !== undefined && object.tx_response !== null)
            ? abci_1.TxResponse.fromPartial(object.tx_response)
            : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsRequest() {
    return { height: "0", pagination: undefined };
}
exports.GetBlockWithTxsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
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
            height: isSet(object.height) ? String(object.height) : "0",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBlockWithTxsRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsResponse() {
    return { txs: [], block_id: undefined, block: undefined, pagination: undefined };
}
exports.GetBlockWithTxsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 4:
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
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) { return tx_1.Tx.fromJSON(e); }) : [],
            block_id: isSet(object.block_id) ? types_1.BlockID.fromJSON(object.block_id) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(function (e) { return e ? tx_1.Tx.toJSON(e) : undefined; });
        }
        else {
            obj.txs = [];
        }
        message.block_id !== undefined && (obj.block_id = message.block_id ? types_1.BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBlockWithTxsResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return tx_1.Tx.fromPartial(e); })) || [];
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? types_1.BlockID.fromPartial(object.block_id)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.tx.v1beta1.Service";
        this.rpc = rpc;
        this.Simulate = this.Simulate.bind(this);
        this.GetTx = this.GetTx.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
        this.GetTxsEvent = this.GetTxsEvent.bind(this);
        this.GetBlockWithTxs = this.GetBlockWithTxs.bind(this);
    }
    ServiceClientImpl.prototype.Simulate = function (request) {
        var data = exports.SimulateRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "Simulate", data);
        return promise.then(function (data) { return exports.SimulateResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetTx = function (request) {
        var data = exports.GetTxRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetTx", data);
        return promise.then(function (data) { return exports.GetTxResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.BroadcastTx = function (request) {
        var data = exports.BroadcastTxRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "BroadcastTx", data);
        return promise.then(function (data) { return exports.BroadcastTxResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetTxsEvent = function (request) {
        var data = exports.GetTxsEventRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetTxsEvent", data);
        return promise.then(function (data) { return exports.GetTxsEventResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ServiceClientImpl.prototype.GetBlockWithTxs = function (request) {
        var data = exports.GetBlockWithTxsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetBlockWithTxs", data);
        return promise.then(function (data) { return exports.GetBlockWithTxsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
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
//# sourceMappingURL=service.js.map