"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerAddressInfo = exports.PeerInfo = exports.NodeInfoOther = exports.NodeInfo = exports.ProtocolVersion = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = "tendermint.p2p";
function createBaseProtocolVersion() {
    return { p2p: "0", block: "0", app: "0" };
}
exports.ProtocolVersion = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.p2p !== "0") {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== "0") {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== "0") {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProtocolVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = longToString(reader.uint64());
                    break;
                case 2:
                    message.block = longToString(reader.uint64());
                    break;
                case 3:
                    message.app = longToString(reader.uint64());
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
            p2p: isSet(object.p2p) ? String(object.p2p) : "0",
            block: isSet(object.block) ? String(object.block) : "0",
            app: isSet(object.app) ? String(object.app) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.p2p !== undefined && (obj.p2p = message.p2p);
        message.block !== undefined && (obj.block = message.block);
        message.app !== undefined && (obj.app = message.app);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProtocolVersion();
        message.p2p = (_a = object.p2p) !== null && _a !== void 0 ? _a : "0";
        message.block = (_b = object.block) !== null && _b !== void 0 ? _b : "0";
        message.app = (_c = object.app) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseNodeInfo() {
    return {
        protocol_version: undefined,
        node_id: "",
        listen_addr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: undefined,
    };
}
exports.NodeInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.protocol_version !== undefined) {
            exports.ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
        }
        if (message.node_id !== "") {
            writer.uint32(18).string(message.node_id);
        }
        if (message.listen_addr !== "") {
            writer.uint32(26).string(message.listen_addr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol_version = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.node_id = reader.string();
                    break;
                case 3:
                    message.listen_addr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.NodeInfoOther.decode(reader, reader.uint32());
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
            protocol_version: isSet(object.protocol_version) ? exports.ProtocolVersion.fromJSON(object.protocol_version) : undefined,
            node_id: isSet(object.node_id) ? String(object.node_id) : "",
            listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
            network: isSet(object.network) ? String(object.network) : "",
            version: isSet(object.version) ? String(object.version) : "",
            channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            other: isSet(object.other) ? exports.NodeInfoOther.fromJSON(object.other) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.protocol_version !== undefined &&
            (obj.protocol_version = message.protocol_version ? exports.ProtocolVersion.toJSON(message.protocol_version) : undefined);
        message.node_id !== undefined && (obj.node_id = message.node_id);
        message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined &&
            (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? exports.NodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseNodeInfo();
        message.protocol_version = (object.protocol_version !== undefined && object.protocol_version !== null)
            ? exports.ProtocolVersion.fromPartial(object.protocol_version)
            : undefined;
        message.node_id = (_a = object.node_id) !== null && _a !== void 0 ? _a : "";
        message.listen_addr = (_b = object.listen_addr) !== null && _b !== void 0 ? _b : "";
        message.network = (_c = object.network) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.channels = (_e = object.channels) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.other = (object.other !== undefined && object.other !== null)
            ? exports.NodeInfoOther.fromPartial(object.other)
            : undefined;
        return message;
    },
};
function createBaseNodeInfoOther() {
    return { tx_index: "", rpc_address: "" };
}
exports.NodeInfoOther = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx_index !== "") {
            writer.uint32(10).string(message.tx_index);
        }
        if (message.rpc_address !== "") {
            writer.uint32(18).string(message.rpc_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_index = reader.string();
                    break;
                case 2:
                    message.rpc_address = reader.string();
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
            tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
            rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        message.rpc_address !== undefined && (obj.rpc_address = message.rpc_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNodeInfoOther();
        message.tx_index = (_a = object.tx_index) !== null && _a !== void 0 ? _a : "";
        message.rpc_address = (_b = object.rpc_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePeerInfo() {
    return { id: "", address_info: [], last_connected: undefined };
}
exports.PeerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (var _i = 0, _a = message.address_info; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_connected !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.last_connected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.address_info.push(exports.PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.last_connected = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? String(object.id) : "",
            address_info: Array.isArray(object === null || object === void 0 ? void 0 : object.address_info)
                ? object.address_info.map(function (e) { return exports.PeerAddressInfo.fromJSON(e); })
                : [],
            last_connected: isSet(object.last_connected) ? fromJsonTimestamp(object.last_connected) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.address_info) {
            obj.address_info = message.address_info.map(function (e) { return e ? exports.PeerAddressInfo.toJSON(e) : undefined; });
        }
        else {
            obj.address_info = [];
        }
        message.last_connected !== undefined && (obj.last_connected = message.last_connected.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePeerInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.address_info = ((_b = object.address_info) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PeerAddressInfo.fromPartial(e); })) || [];
        message.last_connected = (_c = object.last_connected) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePeerAddressInfo() {
    return { address: "", last_dial_success: undefined, last_dial_failure: undefined, dial_failures: 0 };
}
exports.PeerAddressInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.last_dial_success !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.last_dial_success), writer.uint32(18).fork()).ldelim();
        }
        if (message.last_dial_failure !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.last_dial_failure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dial_failures !== 0) {
            writer.uint32(32).uint32(message.dial_failures);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.last_dial_success = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.last_dial_failure = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dial_failures = reader.uint32();
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
            address: isSet(object.address) ? String(object.address) : "",
            last_dial_success: isSet(object.last_dial_success) ? fromJsonTimestamp(object.last_dial_success) : undefined,
            last_dial_failure: isSet(object.last_dial_failure) ? fromJsonTimestamp(object.last_dial_failure) : undefined,
            dial_failures: isSet(object.dial_failures) ? Number(object.dial_failures) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.last_dial_success !== undefined && (obj.last_dial_success = message.last_dial_success.toISOString());
        message.last_dial_failure !== undefined && (obj.last_dial_failure = message.last_dial_failure.toISOString());
        message.dial_failures !== undefined && (obj.dial_failures = Math.round(message.dial_failures));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBasePeerAddressInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.last_dial_success = (_b = object.last_dial_success) !== null && _b !== void 0 ? _b : undefined;
        message.last_dial_failure = (_c = object.last_dial_failure) !== null && _c !== void 0 ? _c : undefined;
        message.dial_failures = (_d = object.dial_failures) !== null && _d !== void 0 ? _d : 0;
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
function toTimestamp(date) {
    var seconds = Math.trunc(date.getTime() / 1000).toString();
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
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
//# sourceMappingURL=types.js.map