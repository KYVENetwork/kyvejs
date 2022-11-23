"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ValidatorSigningInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var duration_1 = require("../../../google/protobuf/duration");
var timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        start_height: "0",
        index_offset: "0",
        jailed_until: undefined,
        tombstoned: false,
        missed_blocks_counter: "0",
    };
}
exports.ValidatorSigningInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.start_height !== "0") {
            writer.uint32(16).int64(message.start_height);
        }
        if (message.index_offset !== "0") {
            writer.uint32(24).int64(message.index_offset);
        }
        if (message.jailed_until !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.jailed_until), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (message.missed_blocks_counter !== "0") {
            writer.uint32(48).int64(message.missed_blocks_counter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.start_height = longToString(reader.int64());
                    break;
                case 3:
                    message.index_offset = longToString(reader.int64());
                    break;
                case 4:
                    message.jailed_until = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missed_blocks_counter = longToString(reader.int64());
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
            start_height: isSet(object.start_height) ? String(object.start_height) : "0",
            index_offset: isSet(object.index_offset) ? String(object.index_offset) : "0",
            jailed_until: isSet(object.jailed_until) ? fromJsonTimestamp(object.jailed_until) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missed_blocks_counter: isSet(object.missed_blocks_counter) ? String(object.missed_blocks_counter) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.start_height !== undefined && (obj.start_height = message.start_height);
        message.index_offset !== undefined && (obj.index_offset = message.index_offset);
        message.jailed_until !== undefined && (obj.jailed_until = message.jailed_until.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missed_blocks_counter !== undefined && (obj.missed_blocks_counter = message.missed_blocks_counter);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.start_height = (_b = object.start_height) !== null && _b !== void 0 ? _b : "0";
        message.index_offset = (_c = object.index_offset) !== null && _c !== void 0 ? _c : "0";
        message.jailed_until = (_d = object.jailed_until) !== null && _d !== void 0 ? _d : undefined;
        message.tombstoned = (_e = object.tombstoned) !== null && _e !== void 0 ? _e : false;
        message.missed_blocks_counter = (_f = object.missed_blocks_counter) !== null && _f !== void 0 ? _f : "0";
        return message;
    },
};
function createBaseParams() {
    return {
        signed_blocks_window: "0",
        min_signed_per_window: new Uint8Array(),
        downtime_jail_duration: undefined,
        slash_fraction_double_sign: new Uint8Array(),
        slash_fraction_downtime: new Uint8Array(),
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.signed_blocks_window !== "0") {
            writer.uint32(8).int64(message.signed_blocks_window);
        }
        if (message.min_signed_per_window.length !== 0) {
            writer.uint32(18).bytes(message.min_signed_per_window);
        }
        if (message.downtime_jail_duration !== undefined) {
            duration_1.Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slash_fraction_double_sign.length !== 0) {
            writer.uint32(34).bytes(message.slash_fraction_double_sign);
        }
        if (message.slash_fraction_downtime.length !== 0) {
            writer.uint32(42).bytes(message.slash_fraction_downtime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_blocks_window = longToString(reader.int64());
                    break;
                case 2:
                    message.min_signed_per_window = reader.bytes();
                    break;
                case 3:
                    message.downtime_jail_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slash_fraction_double_sign = reader.bytes();
                    break;
                case 5:
                    message.slash_fraction_downtime = reader.bytes();
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
            signed_blocks_window: isSet(object.signed_blocks_window) ? String(object.signed_blocks_window) : "0",
            min_signed_per_window: isSet(object.min_signed_per_window)
                ? bytesFromBase64(object.min_signed_per_window)
                : new Uint8Array(),
            downtime_jail_duration: isSet(object.downtime_jail_duration)
                ? duration_1.Duration.fromJSON(object.downtime_jail_duration)
                : undefined,
            slash_fraction_double_sign: isSet(object.slash_fraction_double_sign)
                ? bytesFromBase64(object.slash_fraction_double_sign)
                : new Uint8Array(),
            slash_fraction_downtime: isSet(object.slash_fraction_downtime)
                ? bytesFromBase64(object.slash_fraction_downtime)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signed_blocks_window !== undefined && (obj.signed_blocks_window = message.signed_blocks_window);
        message.min_signed_per_window !== undefined &&
            (obj.min_signed_per_window = base64FromBytes(message.min_signed_per_window !== undefined ? message.min_signed_per_window : new Uint8Array()));
        message.downtime_jail_duration !== undefined && (obj.downtime_jail_duration = message.downtime_jail_duration
            ? duration_1.Duration.toJSON(message.downtime_jail_duration)
            : undefined);
        message.slash_fraction_double_sign !== undefined &&
            (obj.slash_fraction_double_sign = base64FromBytes(message.slash_fraction_double_sign !== undefined ? message.slash_fraction_double_sign : new Uint8Array()));
        message.slash_fraction_downtime !== undefined &&
            (obj.slash_fraction_downtime = base64FromBytes(message.slash_fraction_downtime !== undefined ? message.slash_fraction_downtime : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseParams();
        message.signed_blocks_window = (_a = object.signed_blocks_window) !== null && _a !== void 0 ? _a : "0";
        message.min_signed_per_window = (_b = object.min_signed_per_window) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.downtime_jail_duration =
            (object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null)
                ? duration_1.Duration.fromPartial(object.downtime_jail_duration)
                : undefined;
        message.slash_fraction_double_sign = (_c = object.slash_fraction_double_sign) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.slash_fraction_downtime = (_d = object.slash_fraction_downtime) !== null && _d !== void 0 ? _d : new Uint8Array();
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
//# sourceMappingURL=slashing.js.map