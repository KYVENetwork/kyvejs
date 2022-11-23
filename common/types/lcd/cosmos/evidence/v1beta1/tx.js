"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSubmitEvidenceResponse = exports.MsgSubmitEvidence = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseMsgSubmitEvidence() {
    return { submitter: "", evidence: undefined };
}
exports.MsgSubmitEvidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.submitter !== "") {
            writer.uint32(10).string(message.submitter);
        }
        if (message.evidence !== undefined) {
            any_1.Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.submitter = reader.string();
                    break;
                case 2:
                    message.evidence = any_1.Any.decode(reader, reader.uint32());
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
            submitter: isSet(object.submitter) ? String(object.submitter) : "",
            evidence: isSet(object.evidence) ? any_1.Any.fromJSON(object.evidence) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.submitter !== undefined && (obj.submitter = message.submitter);
        message.evidence !== undefined && (obj.evidence = message.evidence ? any_1.Any.toJSON(message.evidence) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgSubmitEvidence();
        message.submitter = (_a = object.submitter) !== null && _a !== void 0 ? _a : "";
        message.evidence = (object.evidence !== undefined && object.evidence !== null)
            ? any_1.Any.fromPartial(object.evidence)
            : undefined;
        return message;
    },
};
function createBaseMsgSubmitEvidenceResponse() {
    return { hash: new Uint8Array() };
}
exports.MsgSubmitEvidenceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitEvidenceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array() };
    },
    toJSON: function (message) {
        var obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgSubmitEvidenceResponse();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.evidence.v1beta1.Msg";
        this.rpc = rpc;
        this.SubmitEvidence = this.SubmitEvidence.bind(this);
    }
    MsgClientImpl.prototype.SubmitEvidence = function (request) {
        var data = exports.MsgSubmitEvidence.encode(request).finish();
        var promise = this.rpc.request(this.service, "SubmitEvidence", data);
        return promise.then(function (data) { return exports.MsgSubmitEvidenceResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map