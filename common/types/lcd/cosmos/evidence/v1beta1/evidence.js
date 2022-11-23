"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equivocation = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseEquivocation() {
    return { height: "0", time: undefined, power: "0", consensus_address: "" };
}
exports.Equivocation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== "0") {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensus_address !== "") {
            writer.uint32(34).string(message.consensus_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEquivocation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = longToString(reader.int64());
                    break;
                case 4:
                    message.consensus_address = reader.string();
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? String(object.power) : "0",
            consensus_address: isSet(object.consensus_address) ? String(object.consensus_address) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.power !== undefined && (obj.power = message.power);
        message.consensus_address !== undefined && (obj.consensus_address = message.consensus_address);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEquivocation();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.power = (_c = object.power) !== null && _c !== void 0 ? _c : "0";
        message.consensus_address = (_d = object.consensus_address) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
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
//# sourceMappingURL=evidence.js.map