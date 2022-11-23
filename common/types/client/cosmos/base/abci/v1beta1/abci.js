"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTxsResult = exports.TxMsgData = exports.MsgData = exports.SimulationResponse = exports.Result = exports.GasInfo = exports.Attribute = exports.StringEvent = exports.ABCIMessageLog = exports.TxResponse = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../../google/protobuf/any");
var types_1 = require("../../../../tendermint/abci/types");
exports.protobufPackage = "cosmos.base.abci.v1beta1";
function createBaseTxResponse() {
    return {
        height: "0",
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        raw_log: "",
        logs: [],
        info: "",
        gas_wanted: "0",
        gas_used: "0",
        tx: undefined,
        timestamp: "",
        events: [],
    };
}
exports.TxResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.raw_log !== "") {
            writer.uint32(50).string(message.raw_log);
        }
        for (var _i = 0, _a = message.logs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gas_wanted !== "0") {
            writer.uint32(72).int64(message.gas_wanted);
        }
        if (message.gas_used !== "0") {
            writer.uint32(80).int64(message.gas_used);
        }
        if (message.tx !== undefined) {
            any_1.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (var _b = 0, _c = message.events; _b < _c.length; _b++) {
            var v = _c[_b];
            types_1.Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.raw_log = reader.string();
                    break;
                case 7:
                    message.logs.push(exports.ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gas_wanted = longToString(reader.int64());
                    break;
                case 10:
                    message.gas_used = longToString(reader.int64());
                    break;
                case 11:
                    message.tx = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
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
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? String(object.data) : "",
            raw_log: isSet(object.raw_log) ? String(object.raw_log) : "",
            logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map(function (e) { return exports.ABCIMessageLog.fromJSON(e); }) : [],
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? String(object.gas_wanted) : "0",
            gas_used: isSet(object.gas_used) ? String(object.gas_used) : "0",
            tx: isSet(object.tx) ? any_1.Any.fromJSON(object.tx) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return types_1.Event.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = message.data);
        message.raw_log !== undefined && (obj.raw_log = message.raw_log);
        if (message.logs) {
            obj.logs = message.logs.map(function (e) { return e ? exports.ABCIMessageLog.toJSON(e) : undefined; });
        }
        else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        message.tx !== undefined && (obj.tx = message.tx ? any_1.Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? types_1.Event.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseTxResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.txhash = (_b = object.txhash) !== null && _b !== void 0 ? _b : "";
        message.codespace = (_c = object.codespace) !== null && _c !== void 0 ? _c : "";
        message.code = (_d = object.code) !== null && _d !== void 0 ? _d : 0;
        message.data = (_e = object.data) !== null && _e !== void 0 ? _e : "";
        message.raw_log = (_f = object.raw_log) !== null && _f !== void 0 ? _f : "";
        message.logs = ((_g = object.logs) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.ABCIMessageLog.fromPartial(e); })) || [];
        message.info = (_h = object.info) !== null && _h !== void 0 ? _h : "";
        message.gas_wanted = (_j = object.gas_wanted) !== null && _j !== void 0 ? _j : "0";
        message.gas_used = (_k = object.gas_used) !== null && _k !== void 0 ? _k : "0";
        message.tx = (object.tx !== undefined && object.tx !== null) ? any_1.Any.fromPartial(object.tx) : undefined;
        message.timestamp = (_l = object.timestamp) !== null && _l !== void 0 ? _l : "";
        message.events = ((_m = object.events) === null || _m === void 0 ? void 0 : _m.map(function (e) { return types_1.Event.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseABCIMessageLog() {
    return { msg_index: 0, log: "", events: [] };
}
exports.ABCIMessageLog = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.msg_index !== 0) {
            writer.uint32(8).uint32(message.msg_index);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_index = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(exports.StringEvent.decode(reader, reader.uint32()));
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
            msg_index: isSet(object.msg_index) ? Number(object.msg_index) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return exports.StringEvent.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg_index !== undefined && (obj.msg_index = Math.round(message.msg_index));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.StringEvent.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseABCIMessageLog();
        message.msg_index = (_a = object.msg_index) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.StringEvent.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseStringEvent() {
    return { type: "", attributes: [] };
}
exports.StringEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (var _i = 0, _a = message.attributes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStringEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map(function (e) { return exports.Attribute.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(function (e) { return e ? exports.Attribute.toJSON(e) : undefined; });
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStringEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Attribute.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAttribute() {
    return { key: "", value: "" };
}
exports.Attribute = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAttribute();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGasInfo() {
    return { gas_wanted: "0", gas_used: "0" };
}
exports.GasInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.gas_wanted !== "0") {
            writer.uint32(8).uint64(message.gas_wanted);
        }
        if (message.gas_used !== "0") {
            writer.uint32(16).uint64(message.gas_used);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGasInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_wanted = longToString(reader.uint64());
                    break;
                case 2:
                    message.gas_used = longToString(reader.uint64());
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
            gas_wanted: isSet(object.gas_wanted) ? String(object.gas_wanted) : "0",
            gas_used: isSet(object.gas_used) ? String(object.gas_used) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGasInfo();
        message.gas_wanted = (_a = object.gas_wanted) !== null && _a !== void 0 ? _a : "0";
        message.gas_used = (_b = object.gas_used) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseResult() {
    return { data: new Uint8Array(), log: "", events: [], msg_responses: [] };
}
exports.Result = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            types_1.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.msg_responses; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msg_responses.push(any_1.Any.decode(reader, reader.uint32()));
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return types_1.Event.fromJSON(e); }) : [],
            msg_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? types_1.Event.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseResult();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map(function (e) { return types_1.Event.fromPartial(e); })) || [];
        message.msg_responses = ((_d = object.msg_responses) === null || _d === void 0 ? void 0 : _d.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSimulationResponse() {
    return { gas_info: undefined, result: undefined };
}
exports.SimulationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.gas_info !== undefined) {
            exports.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            exports.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = exports.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = exports.Result.decode(reader, reader.uint32());
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
            gas_info: isSet(object.gas_info) ? exports.GasInfo.fromJSON(object.gas_info) : undefined,
            result: isSet(object.result) ? exports.Result.fromJSON(object.result) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.gas_info !== undefined && (obj.gas_info = message.gas_info ? exports.GasInfo.toJSON(message.gas_info) : undefined);
        message.result !== undefined && (obj.result = message.result ? exports.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSimulationResponse();
        message.gas_info = (object.gas_info !== undefined && object.gas_info !== null)
            ? exports.GasInfo.fromPartial(object.gas_info)
            : undefined;
        message.result = (object.result !== undefined && object.result !== null)
            ? exports.Result.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseMsgData() {
    return { msg_type: "", data: new Uint8Array() };
}
exports.MsgData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.msg_type !== "") {
            writer.uint32(10).string(message.msg_type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            msg_type: isSet(object.msg_type) ? String(object.msg_type) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg_type !== undefined && (obj.msg_type = message.msg_type);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgData();
        message.msg_type = (_a = object.msg_type) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseTxMsgData() {
    return { data: [], msg_responses: [] };
}
exports.TxMsgData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.data; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.msg_responses; _b < _c.length; _b++) {
            var v = _c[_b];
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxMsgData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(exports.MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msg_responses.push(any_1.Any.decode(reader, reader.uint32()));
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map(function (e) { return exports.MsgData.fromJSON(e); }) : [],
            msg_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.msg_responses) ? object.msg_responses.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.data) {
            obj.data = message.data.map(function (e) { return e ? exports.MsgData.toJSON(e) : undefined; });
        }
        else {
            obj.data = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTxMsgData();
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MsgData.fromPartial(e); })) || [];
        message.msg_responses = ((_b = object.msg_responses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSearchTxsResult() {
    return { total_count: "0", count: "0", page_number: "0", page_total: "0", limit: "0", txs: [] };
}
exports.SearchTxsResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.total_count !== "0") {
            writer.uint32(8).uint64(message.total_count);
        }
        if (message.count !== "0") {
            writer.uint32(16).uint64(message.count);
        }
        if (message.page_number !== "0") {
            writer.uint32(24).uint64(message.page_number);
        }
        if (message.page_total !== "0") {
            writer.uint32(32).uint64(message.page_total);
        }
        if (message.limit !== "0") {
            writer.uint32(40).uint64(message.limit);
        }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_count = longToString(reader.uint64());
                    break;
                case 2:
                    message.count = longToString(reader.uint64());
                    break;
                case 3:
                    message.page_number = longToString(reader.uint64());
                    break;
                case 4:
                    message.page_total = longToString(reader.uint64());
                    break;
                case 5:
                    message.limit = longToString(reader.uint64());
                    break;
                case 6:
                    message.txs.push(exports.TxResponse.decode(reader, reader.uint32()));
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
            total_count: isSet(object.total_count) ? String(object.total_count) : "0",
            count: isSet(object.count) ? String(object.count) : "0",
            page_number: isSet(object.page_number) ? String(object.page_number) : "0",
            page_total: isSet(object.page_total) ? String(object.page_total) : "0",
            limit: isSet(object.limit) ? String(object.limit) : "0",
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) { return exports.TxResponse.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.total_count !== undefined && (obj.total_count = message.total_count);
        message.count !== undefined && (obj.count = message.count);
        message.page_number !== undefined && (obj.page_number = message.page_number);
        message.page_total !== undefined && (obj.page_total = message.page_total);
        message.limit !== undefined && (obj.limit = message.limit);
        if (message.txs) {
            obj.txs = message.txs.map(function (e) { return e ? exports.TxResponse.toJSON(e) : undefined; });
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseSearchTxsResult();
        message.total_count = (_a = object.total_count) !== null && _a !== void 0 ? _a : "0";
        message.count = (_b = object.count) !== null && _b !== void 0 ? _b : "0";
        message.page_number = (_c = object.page_number) !== null && _c !== void 0 ? _c : "0";
        message.page_total = (_d = object.page_total) !== null && _d !== void 0 ? _d : "0";
        message.limit = (_e = object.limit) !== null && _e !== void 0 ? _e : "0";
        message.txs = ((_f = object.txs) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.TxResponse.fromPartial(e); })) || [];
        return message;
    },
};
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
//# sourceMappingURL=abci.js.map