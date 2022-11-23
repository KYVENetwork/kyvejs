"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.responseApplySnapshotChunk_ResultToNumber = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToNumber = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_Result = exports.evidenceTypeToNumber = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceType = exports.checkTxTypeToNumber = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxType = exports.protobufPackage = void 0;
exports.ABCIApplicationClientImpl = exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../google/protobuf/timestamp");
var keys_1 = require("../crypto/keys");
var proof_1 = require("../crypto/proof");
var params_1 = require("../types/params");
var types_1 = require("../types/types");
exports.protobufPackage = "tendermint.abci";
var CheckTxType;
(function (CheckTxType) {
    CheckTxType["NEW"] = "NEW";
    CheckTxType["RECHECK"] = "RECHECK";
    CheckTxType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(CheckTxType = exports.CheckTxType || (exports.CheckTxType = {}));
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
function checkTxTypeToNumber(object) {
    switch (object) {
        case CheckTxType.NEW:
            return 0;
        case CheckTxType.RECHECK:
            return 1;
        case CheckTxType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.checkTxTypeToNumber = checkTxTypeToNumber;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType["UNKNOWN"] = "UNKNOWN";
    EvidenceType["DUPLICATE_VOTE"] = "DUPLICATE_VOTE";
    EvidenceType["LIGHT_CLIENT_ATTACK"] = "LIGHT_CLIENT_ATTACK";
    EvidenceType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(EvidenceType = exports.EvidenceType || (exports.EvidenceType = {}));
function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return EvidenceType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return "UNKNOWN";
        case EvidenceType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case EvidenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.evidenceTypeToJSON = evidenceTypeToJSON;
function evidenceTypeToNumber(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return 0;
        case EvidenceType.DUPLICATE_VOTE:
            return 1;
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return 2;
        case EvidenceType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.evidenceTypeToNumber = evidenceTypeToNumber;
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result["UNKNOWN"] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result["ACCEPT"] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result["ABORT"] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result["REJECT"] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result["REJECT_FORMAT"] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result["REJECT_SENDER"] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result["UNRECOGNIZED"] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result = exports.ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
function responseOfferSnapshot_ResultToNumber(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return 0;
        case ResponseOfferSnapshot_Result.ACCEPT:
            return 1;
        case ResponseOfferSnapshot_Result.ABORT:
            return 2;
        case ResponseOfferSnapshot_Result.REJECT:
            return 3;
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return 4;
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return 5;
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.responseOfferSnapshot_ResultToNumber = responseOfferSnapshot_ResultToNumber;
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result["UNKNOWN"] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result["ACCEPT"] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result["ABORT"] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result["RETRY"] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result = exports.ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
function responseApplySnapshotChunk_ResultToNumber(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return 0;
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return 1;
        case ResponseApplySnapshotChunk_Result.ABORT:
            return 2;
        case ResponseApplySnapshotChunk_Result.RETRY:
            return 3;
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return 4;
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return 5;
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.responseApplySnapshotChunk_ResultToNumber = responseApplySnapshotChunk_ResultToNumber;
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        set_option: undefined,
        init_chain: undefined,
        query: undefined,
        begin_block: undefined,
        check_tx: undefined,
        deliver_tx: undefined,
        end_block: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined,
    };
}
exports.Request = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            exports.RequestSetOption.encode(message.set_option, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            exports.RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            exports.RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.set_option = exports.RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.begin_block = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliver_tx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.end_block = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
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
            echo: isSet(object.echo) ? exports.RequestEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? exports.RequestFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? exports.RequestInfo.fromJSON(object.info) : undefined,
            set_option: isSet(object.set_option) ? exports.RequestSetOption.fromJSON(object.set_option) : undefined,
            init_chain: isSet(object.init_chain) ? exports.RequestInitChain.fromJSON(object.init_chain) : undefined,
            query: isSet(object.query) ? exports.RequestQuery.fromJSON(object.query) : undefined,
            begin_block: isSet(object.begin_block) ? exports.RequestBeginBlock.fromJSON(object.begin_block) : undefined,
            check_tx: isSet(object.check_tx) ? exports.RequestCheckTx.fromJSON(object.check_tx) : undefined,
            deliver_tx: isSet(object.deliver_tx) ? exports.RequestDeliverTx.fromJSON(object.deliver_tx) : undefined,
            end_block: isSet(object.end_block) ? exports.RequestEndBlock.fromJSON(object.end_block) : undefined,
            commit: isSet(object.commit) ? exports.RequestCommit.fromJSON(object.commit) : undefined,
            list_snapshots: isSet(object.list_snapshots) ? exports.RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: isSet(object.offer_snapshot) ? exports.RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: isSet(object.load_snapshot_chunk)
                ? exports.RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk)
                : undefined,
            apply_snapshot_chunk: isSet(object.apply_snapshot_chunk)
                ? exports.RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined &&
            (obj.set_option = message.set_option ? exports.RequestSetOption.toJSON(message.set_option) : undefined);
        message.init_chain !== undefined &&
            (obj.init_chain = message.init_chain ? exports.RequestInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toJSON(message.query) : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block ? exports.RequestBeginBlock.toJSON(message.begin_block) : undefined);
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx ? exports.RequestCheckTx.toJSON(message.check_tx) : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx ? exports.RequestDeliverTx.toJSON(message.deliver_tx) : undefined);
        message.end_block !== undefined &&
            (obj.end_block = message.end_block ? exports.RequestEndBlock.toJSON(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined &&
            (obj.list_snapshots = message.list_snapshots ? exports.RequestListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined &&
            (obj.offer_snapshot = message.offer_snapshot ? exports.RequestOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk
            ? exports.RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk)
            : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk
            ? exports.RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseRequest();
        message.echo = (object.echo !== undefined && object.echo !== null)
            ? exports.RequestEcho.fromPartial(object.echo)
            : undefined;
        message.flush = (object.flush !== undefined && object.flush !== null)
            ? exports.RequestFlush.fromPartial(object.flush)
            : undefined;
        message.info = (object.info !== undefined && object.info !== null)
            ? exports.RequestInfo.fromPartial(object.info)
            : undefined;
        message.set_option = (object.set_option !== undefined && object.set_option !== null)
            ? exports.RequestSetOption.fromPartial(object.set_option)
            : undefined;
        message.init_chain = (object.init_chain !== undefined && object.init_chain !== null)
            ? exports.RequestInitChain.fromPartial(object.init_chain)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.RequestQuery.fromPartial(object.query)
            : undefined;
        message.begin_block = (object.begin_block !== undefined && object.begin_block !== null)
            ? exports.RequestBeginBlock.fromPartial(object.begin_block)
            : undefined;
        message.check_tx = (object.check_tx !== undefined && object.check_tx !== null)
            ? exports.RequestCheckTx.fromPartial(object.check_tx)
            : undefined;
        message.deliver_tx = (object.deliver_tx !== undefined && object.deliver_tx !== null)
            ? exports.RequestDeliverTx.fromPartial(object.deliver_tx)
            : undefined;
        message.end_block = (object.end_block !== undefined && object.end_block !== null)
            ? exports.RequestEndBlock.fromPartial(object.end_block)
            : undefined;
        message.commit = (object.commit !== undefined && object.commit !== null)
            ? exports.RequestCommit.fromPartial(object.commit)
            : undefined;
        message.list_snapshots = (object.list_snapshots !== undefined && object.list_snapshots !== null)
            ? exports.RequestListSnapshots.fromPartial(object.list_snapshots)
            : undefined;
        message.offer_snapshot = (object.offer_snapshot !== undefined && object.offer_snapshot !== null)
            ? exports.RequestOfferSnapshot.fromPartial(object.offer_snapshot)
            : undefined;
        message.load_snapshot_chunk = (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null)
            ? exports.RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk)
            : undefined;
        message.apply_snapshot_chunk = (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null)
            ? exports.RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk)
            : undefined;
        return message;
    },
};
function createBaseRequestEcho() {
    return { message: "" };
}
exports.RequestEcho = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestEcho();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { message: isSet(object.message) ? String(object.message) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRequestEcho();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestFlush();
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
        var message = createBaseRequestFlush();
        return message;
    },
};
function createBaseRequestInfo() {
    return { version: "", block_version: "0", p2p_version: "0" };
}
exports.RequestInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.block_version !== "0") {
            writer.uint32(16).uint64(message.block_version);
        }
        if (message.p2p_version !== "0") {
            writer.uint32(24).uint64(message.p2p_version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.block_version = longToString(reader.uint64());
                    break;
                case 3:
                    message.p2p_version = longToString(reader.uint64());
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
            version: isSet(object.version) ? String(object.version) : "",
            block_version: isSet(object.block_version) ? String(object.block_version) : "0",
            p2p_version: isSet(object.p2p_version) ? String(object.p2p_version) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.block_version !== undefined && (obj.block_version = message.block_version);
        message.p2p_version !== undefined && (obj.p2p_version = message.p2p_version);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRequestInfo();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.block_version = (_b = object.block_version) !== null && _b !== void 0 ? _b : "0";
        message.p2p_version = (_c = object.p2p_version) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseRequestSetOption() {
    return { key: "", value: "" };
}
exports.RequestSetOption = {
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
        var message = createBaseRequestSetOption();
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
        var message = createBaseRequestSetOption();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRequestInitChain() {
    return {
        time: undefined,
        chain_id: "",
        consensus_params: undefined,
        validators: [],
        app_state_bytes: new Uint8Array(),
        initial_height: "0",
    };
}
exports.RequestInitChain = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            exports.ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_state_bytes.length !== 0) {
            writer.uint32(42).bytes(message.app_state_bytes);
        }
        if (message.initial_height !== "0") {
            writer.uint32(48).int64(message.initial_height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestInitChain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.app_state_bytes = reader.bytes();
                    break;
                case 6:
                    message.initial_height = longToString(reader.int64());
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            consensus_params: isSet(object.consensus_params) ? exports.ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return exports.ValidatorUpdate.fromJSON(e); })
                : [],
            app_state_bytes: isSet(object.app_state_bytes) ? bytesFromBase64(object.app_state_bytes) : new Uint8Array(),
            initial_height: isSet(object.initial_height) ? String(object.initial_height) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params ? exports.ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.ValidatorUpdate.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined &&
            (obj.app_state_bytes = base64FromBytes(message.app_state_bytes !== undefined ? message.app_state_bytes : new Uint8Array()));
        message.initial_height !== undefined && (obj.initial_height = message.initial_height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseRequestInitChain();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.chain_id = (_b = object.chain_id) !== null && _b !== void 0 ? _b : "";
        message.consensus_params = (object.consensus_params !== undefined && object.consensus_params !== null)
            ? exports.ConsensusParams.fromPartial(object.consensus_params)
            : undefined;
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.ValidatorUpdate.fromPartial(e); })) || [];
        message.app_state_bytes = (_d = object.app_state_bytes) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.initial_height = (_e = object.initial_height) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseRequestQuery() {
    return { data: new Uint8Array(), path: "", height: "0", prove: false };
}
exports.RequestQuery = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestQuery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.prove = reader.bool();
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
            path: isSet(object.path) ? String(object.path) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            prove: isSet(object.prove) ? Boolean(object.prove) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = message.height);
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseRequestQuery();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        message.prove = (_d = object.prove) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseRequestBeginBlock() {
    return { hash: new Uint8Array(), header: undefined, last_commit_info: undefined, byzantine_validators: [] };
}
exports.RequestBeginBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_commit_info !== undefined) {
            exports.LastCommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.byzantine_validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestBeginBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.last_commit_info = exports.LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantine_validators.push(exports.Evidence.decode(reader, reader.uint32()));
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            header: isSet(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            last_commit_info: isSet(object.last_commit_info) ? exports.LastCommitInfo.fromJSON(object.last_commit_info) : undefined,
            byzantine_validators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators)
                ? object.byzantine_validators.map(function (e) { return exports.Evidence.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.last_commit_info !== undefined &&
            (obj.last_commit_info = message.last_commit_info ? exports.LastCommitInfo.toJSON(message.last_commit_info) : undefined);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(function (e) { return e ? exports.Evidence.toJSON(e) : undefined; });
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRequestBeginBlock();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.header = (object.header !== undefined && object.header !== null)
            ? types_1.Header.fromPartial(object.header)
            : undefined;
        message.last_commit_info = (object.last_commit_info !== undefined && object.last_commit_info !== null)
            ? exports.LastCommitInfo.fromPartial(object.last_commit_info)
            : undefined;
        message.byzantine_validators = ((_b = object.byzantine_validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Evidence.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseRequestCheckTx() {
    return { tx: new Uint8Array(), type: CheckTxType.NEW };
}
exports.RequestCheckTx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== CheckTxType.NEW) {
            writer.uint32(16).int32(checkTxTypeToNumber(message.type));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = checkTxTypeFromJSON(reader.int32());
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
            type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : CheckTxType.NEW,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRequestCheckTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : CheckTxType.NEW;
        return message;
    },
};
function createBaseRequestDeliverTx() {
    return { tx: new Uint8Array() };
}
exports.RequestDeliverTx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestDeliverTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array() };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRequestDeliverTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseRequestEndBlock() {
    return { height: "0" };
}
exports.RequestEndBlock = {
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
        var message = createBaseRequestEndBlock();
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
        var message = createBaseRequestEndBlock();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestCommit();
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
        var message = createBaseRequestCommit();
        return message;
    },
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestListSnapshots();
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
        var message = createBaseRequestListSnapshots();
        return message;
    },
};
function createBaseRequestOfferSnapshot() {
    return { snapshot: undefined, app_hash: new Uint8Array() };
}
exports.RequestOfferSnapshot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.app_hash = reader.bytes();
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
            snapshot: isSet(object.snapshot) ? exports.Snapshot.fromJSON(object.snapshot) : undefined,
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toJSON(message.snapshot) : undefined);
        message.app_hash !== undefined &&
            (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRequestOfferSnapshot();
        message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
            ? exports.Snapshot.fromPartial(object.snapshot)
            : undefined;
        message.app_hash = (_a = object.app_hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseRequestLoadSnapshotChunk() {
    return { height: "0", format: 0, chunk: 0 };
}
exports.RequestLoadSnapshotChunk = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
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
            format: isSet(object.format) ? Number(object.format) : 0,
            chunk: isSet(object.chunk) ? Number(object.chunk) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRequestLoadSnapshotChunk();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.chunk = (_c = object.chunk) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseRequestApplySnapshotChunk() {
    return { index: 0, chunk: new Uint8Array(), sender: "" };
}
exports.RequestApplySnapshotChunk = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
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
            index: isSet(object.index) ? Number(object.index) : 0,
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRequestApplySnapshotChunk();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.chunk = (_b = object.chunk) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        set_option: undefined,
        init_chain: undefined,
        query: undefined,
        begin_block: undefined,
        check_tx: undefined,
        deliver_tx: undefined,
        end_block: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined,
    };
}
exports.Response = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            exports.ResponseSetOption.encode(message.set_option, writer.uint32(42).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            exports.ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            exports.ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.set_option = exports.ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.begin_block = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliver_tx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.end_block = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
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
            exception: isSet(object.exception) ? exports.ResponseException.fromJSON(object.exception) : undefined,
            echo: isSet(object.echo) ? exports.ResponseEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? exports.ResponseFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? exports.ResponseInfo.fromJSON(object.info) : undefined,
            set_option: isSet(object.set_option) ? exports.ResponseSetOption.fromJSON(object.set_option) : undefined,
            init_chain: isSet(object.init_chain) ? exports.ResponseInitChain.fromJSON(object.init_chain) : undefined,
            query: isSet(object.query) ? exports.ResponseQuery.fromJSON(object.query) : undefined,
            begin_block: isSet(object.begin_block) ? exports.ResponseBeginBlock.fromJSON(object.begin_block) : undefined,
            check_tx: isSet(object.check_tx) ? exports.ResponseCheckTx.fromJSON(object.check_tx) : undefined,
            deliver_tx: isSet(object.deliver_tx) ? exports.ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined,
            end_block: isSet(object.end_block) ? exports.ResponseEndBlock.fromJSON(object.end_block) : undefined,
            commit: isSet(object.commit) ? exports.ResponseCommit.fromJSON(object.commit) : undefined,
            list_snapshots: isSet(object.list_snapshots) ? exports.ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: isSet(object.offer_snapshot) ? exports.ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: isSet(object.load_snapshot_chunk)
                ? exports.ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk)
                : undefined,
            apply_snapshot_chunk: isSet(object.apply_snapshot_chunk)
                ? exports.ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.exception !== undefined &&
            (obj.exception = message.exception ? exports.ResponseException.toJSON(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined &&
            (obj.set_option = message.set_option ? exports.ResponseSetOption.toJSON(message.set_option) : undefined);
        message.init_chain !== undefined &&
            (obj.init_chain = message.init_chain ? exports.ResponseInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toJSON(message.query) : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block ? exports.ResponseBeginBlock.toJSON(message.begin_block) : undefined);
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx ? exports.ResponseCheckTx.toJSON(message.check_tx) : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx ? exports.ResponseDeliverTx.toJSON(message.deliver_tx) : undefined);
        message.end_block !== undefined &&
            (obj.end_block = message.end_block ? exports.ResponseEndBlock.toJSON(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined &&
            (obj.list_snapshots = message.list_snapshots ? exports.ResponseListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined &&
            (obj.offer_snapshot = message.offer_snapshot ? exports.ResponseOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk
            ? exports.ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk)
            : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk
            ? exports.ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk)
            : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseResponse();
        message.exception = (object.exception !== undefined && object.exception !== null)
            ? exports.ResponseException.fromPartial(object.exception)
            : undefined;
        message.echo = (object.echo !== undefined && object.echo !== null)
            ? exports.ResponseEcho.fromPartial(object.echo)
            : undefined;
        message.flush = (object.flush !== undefined && object.flush !== null)
            ? exports.ResponseFlush.fromPartial(object.flush)
            : undefined;
        message.info = (object.info !== undefined && object.info !== null)
            ? exports.ResponseInfo.fromPartial(object.info)
            : undefined;
        message.set_option = (object.set_option !== undefined && object.set_option !== null)
            ? exports.ResponseSetOption.fromPartial(object.set_option)
            : undefined;
        message.init_chain = (object.init_chain !== undefined && object.init_chain !== null)
            ? exports.ResponseInitChain.fromPartial(object.init_chain)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.ResponseQuery.fromPartial(object.query)
            : undefined;
        message.begin_block = (object.begin_block !== undefined && object.begin_block !== null)
            ? exports.ResponseBeginBlock.fromPartial(object.begin_block)
            : undefined;
        message.check_tx = (object.check_tx !== undefined && object.check_tx !== null)
            ? exports.ResponseCheckTx.fromPartial(object.check_tx)
            : undefined;
        message.deliver_tx = (object.deliver_tx !== undefined && object.deliver_tx !== null)
            ? exports.ResponseDeliverTx.fromPartial(object.deliver_tx)
            : undefined;
        message.end_block = (object.end_block !== undefined && object.end_block !== null)
            ? exports.ResponseEndBlock.fromPartial(object.end_block)
            : undefined;
        message.commit = (object.commit !== undefined && object.commit !== null)
            ? exports.ResponseCommit.fromPartial(object.commit)
            : undefined;
        message.list_snapshots = (object.list_snapshots !== undefined && object.list_snapshots !== null)
            ? exports.ResponseListSnapshots.fromPartial(object.list_snapshots)
            : undefined;
        message.offer_snapshot = (object.offer_snapshot !== undefined && object.offer_snapshot !== null)
            ? exports.ResponseOfferSnapshot.fromPartial(object.offer_snapshot)
            : undefined;
        message.load_snapshot_chunk = (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null)
            ? exports.ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk)
            : undefined;
        message.apply_snapshot_chunk = (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null)
            ? exports.ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk)
            : undefined;
        return message;
    },
};
function createBaseResponseException() {
    return { error: "" };
}
exports.ResponseException = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseException();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { error: isSet(object.error) ? String(object.error) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseException();
        message.error = (_a = object.error) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseResponseEcho() {
    return { message: "" };
}
exports.ResponseEcho = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseEcho();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { message: isSet(object.message) ? String(object.message) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseEcho();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseFlush();
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
        var message = createBaseResponseFlush();
        return message;
    },
};
function createBaseResponseInfo() {
    return { data: "", version: "", app_version: "0", last_block_height: "0", last_block_app_hash: new Uint8Array() };
}
exports.ResponseInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.app_version !== "0") {
            writer.uint32(24).uint64(message.app_version);
        }
        if (message.last_block_height !== "0") {
            writer.uint32(32).int64(message.last_block_height);
        }
        if (message.last_block_app_hash.length !== 0) {
            writer.uint32(42).bytes(message.last_block_app_hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.app_version = longToString(reader.uint64());
                    break;
                case 4:
                    message.last_block_height = longToString(reader.int64());
                    break;
                case 5:
                    message.last_block_app_hash = reader.bytes();
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
            data: isSet(object.data) ? String(object.data) : "",
            version: isSet(object.version) ? String(object.version) : "",
            app_version: isSet(object.app_version) ? String(object.app_version) : "0",
            last_block_height: isSet(object.last_block_height) ? String(object.last_block_height) : "0",
            last_block_app_hash: isSet(object.last_block_app_hash)
                ? bytesFromBase64(object.last_block_app_hash)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.app_version !== undefined && (obj.app_version = message.app_version);
        message.last_block_height !== undefined && (obj.last_block_height = message.last_block_height);
        message.last_block_app_hash !== undefined &&
            (obj.last_block_app_hash = base64FromBytes(message.last_block_app_hash !== undefined ? message.last_block_app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseResponseInfo();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.app_version = (_c = object.app_version) !== null && _c !== void 0 ? _c : "0";
        message.last_block_height = (_d = object.last_block_height) !== null && _d !== void 0 ? _d : "0";
        message.last_block_app_hash = (_e = object.last_block_app_hash) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseResponseSetOption() {
    return { code: 0, log: "", info: "" };
}
exports.ResponseSetOption = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseSetOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseResponseSetOption();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.info = (_c = object.info) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseResponseInitChain() {
    return { consensus_params: undefined, validators: [], app_hash: new Uint8Array() };
}
exports.ResponseInitChain = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.consensus_params !== undefined) {
            exports.ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseInitChain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.app_hash = reader.bytes();
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
            consensus_params: isSet(object.consensus_params) ? exports.ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return exports.ValidatorUpdate.fromJSON(e); })
                : [],
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params ? exports.ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(function (e) { return e ? exports.ValidatorUpdate.toJSON(e) : undefined; });
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined &&
            (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseResponseInitChain();
        message.consensus_params = (object.consensus_params !== undefined && object.consensus_params !== null)
            ? exports.ConsensusParams.fromPartial(object.consensus_params)
            : undefined;
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ValidatorUpdate.fromPartial(e); })) || [];
        message.app_hash = (_b = object.app_hash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: "0",
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof_ops: undefined,
        height: "0",
        codespace: "",
    };
}
exports.ResponseQuery = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== "0") {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            proof_1.ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== "0") {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseQuery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = longToString(reader.int64());
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = longToString(reader.int64());
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            index: isSet(object.index) ? String(object.index) : "0",
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            proof_ops: isSet(object.proof_ops) ? proof_1.ProofOps.fromJSON(object.proof_ops) : undefined,
            height: isSet(object.height) ? String(object.height) : "0",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = message.index);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined &&
            (obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseResponseQuery();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.info = (_c = object.info) !== null && _c !== void 0 ? _c : "";
        message.index = (_d = object.index) !== null && _d !== void 0 ? _d : "0";
        message.key = (_e = object.key) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.value = (_f = object.value) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.proof_ops = (object.proof_ops !== undefined && object.proof_ops !== null)
            ? proof_1.ProofOps.fromPartial(object.proof_ops)
            : undefined;
        message.height = (_g = object.height) !== null && _g !== void 0 ? _g : "0";
        message.codespace = (_h = object.codespace) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseResponseBeginBlock() {
    return { events: [] };
}
exports.ResponseBeginBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseBeginBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return exports.Event.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.Event.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseBeginBlock();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: "0",
        gas_used: "0",
        events: [],
        codespace: "",
    };
}
exports.ResponseCheckTx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== "0") {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== "0") {
            writer.uint32(48).int64(message.gas_used);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = longToString(reader.int64());
                    break;
                case 6:
                    message.gas_used = longToString(reader.int64());
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? String(object.gas_wanted) : "0",
            gas_used: isSet(object.gas_used) ? String(object.gas_used) : "0",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return exports.Event.fromJSON(e); }) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.Event.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseResponseCheckTx();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.log = (_c = object.log) !== null && _c !== void 0 ? _c : "";
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : "";
        message.gas_wanted = (_e = object.gas_wanted) !== null && _e !== void 0 ? _e : "0";
        message.gas_used = (_f = object.gas_used) !== null && _f !== void 0 ? _f : "0";
        message.events = ((_g = object.events) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        message.codespace = (_h = object.codespace) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseResponseDeliverTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: "0",
        gas_used: "0",
        events: [],
        codespace: "",
    };
}
exports.ResponseDeliverTx = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== "0") {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== "0") {
            writer.uint32(48).int64(message.gas_used);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseDeliverTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = longToString(reader.int64());
                    break;
                case 6:
                    message.gas_used = longToString(reader.int64());
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? String(object.gas_wanted) : "0",
            gas_used: isSet(object.gas_used) ? String(object.gas_used) : "0",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return exports.Event.fromJSON(e); }) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = message.gas_wanted);
        message.gas_used !== undefined && (obj.gas_used = message.gas_used);
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.Event.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseResponseDeliverTx();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.log = (_c = object.log) !== null && _c !== void 0 ? _c : "";
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : "";
        message.gas_wanted = (_e = object.gas_wanted) !== null && _e !== void 0 ? _e : "0";
        message.gas_used = (_f = object.gas_used) !== null && _f !== void 0 ? _f : "0";
        message.events = ((_g = object.events) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        message.codespace = (_h = object.codespace) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseResponseEndBlock() {
    return { validator_updates: [], consensus_param_updates: undefined, events: [] };
}
exports.ResponseEndBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.validator_updates; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            exports.ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.events; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseEndBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_updates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensus_param_updates = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            validator_updates: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_updates)
                ? object.validator_updates.map(function (e) { return exports.ValidatorUpdate.fromJSON(e); })
                : [],
            consensus_param_updates: isSet(object.consensus_param_updates)
                ? exports.ConsensusParams.fromJSON(object.consensus_param_updates)
                : undefined,
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map(function (e) { return exports.Event.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(function (e) { return e ? exports.ValidatorUpdate.toJSON(e) : undefined; });
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates
            ? exports.ConsensusParams.toJSON(message.consensus_param_updates)
            : undefined);
        if (message.events) {
            obj.events = message.events.map(function (e) { return e ? exports.Event.toJSON(e) : undefined; });
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseResponseEndBlock();
        message.validator_updates = ((_a = object.validator_updates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ValidatorUpdate.fromPartial(e); })) || [];
        message.consensus_param_updates =
            (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null)
                ? exports.ConsensusParams.fromPartial(object.consensus_param_updates)
                : undefined;
        message.events = ((_b = object.events) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseResponseCommit() {
    return { data: new Uint8Array(), retain_height: "0" };
}
exports.ResponseCommit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.retain_height !== "0") {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseCommit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retain_height = longToString(reader.int64());
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
            retain_height: isSet(object.retain_height) ? String(object.retain_height) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.retain_height !== undefined && (obj.retain_height = message.retain_height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseResponseCommit();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.retain_height = (_b = object.retain_height) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseResponseListSnapshots() {
    return { snapshots: [] };
}
exports.ResponseListSnapshots = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.snapshots; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
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
            snapshots: Array.isArray(object === null || object === void 0 ? void 0 : object.snapshots) ? object.snapshots.map(function (e) { return exports.Snapshot.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(function (e) { return e ? exports.Snapshot.toJSON(e) : undefined; });
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseListSnapshots();
        message.snapshots = ((_a = object.snapshots) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Snapshot.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseResponseOfferSnapshot() {
    return { result: ResponseOfferSnapshot_Result.UNKNOWN };
}
exports.ResponseOfferSnapshot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== ResponseOfferSnapshot_Result.UNKNOWN) {
            writer.uint32(8).int32(responseOfferSnapshot_ResultToNumber(message.result));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = responseOfferSnapshot_ResultFromJSON(reader.int32());
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
            result: isSet(object.result)
                ? responseOfferSnapshot_ResultFromJSON(object.result)
                : ResponseOfferSnapshot_Result.UNKNOWN,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseOfferSnapshot();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : ResponseOfferSnapshot_Result.UNKNOWN;
        return message;
    },
};
function createBaseResponseLoadSnapshotChunk() {
    return { chunk: new Uint8Array() };
}
exports.ResponseLoadSnapshotChunk = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array() };
    },
    toJSON: function (message) {
        var obj = {};
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseLoadSnapshotChunk();
        message.chunk = (_a = object.chunk) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResponseApplySnapshotChunk() {
    return { result: ResponseApplySnapshotChunk_Result.UNKNOWN, refetch_chunks: [], reject_senders: [] };
}
exports.ResponseApplySnapshotChunk = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== ResponseApplySnapshotChunk_Result.UNKNOWN) {
            writer.uint32(8).int32(responseApplySnapshotChunk_ResultToNumber(message.result));
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.refetch_chunks; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        for (var _b = 0, _c = message.reject_senders; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = responseApplySnapshotChunk_ResultFromJSON(reader.int32());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetch_chunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetch_chunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.reject_senders.push(reader.string());
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
            result: isSet(object.result)
                ? responseApplySnapshotChunk_ResultFromJSON(object.result)
                : ResponseApplySnapshotChunk_Result.UNKNOWN,
            refetch_chunks: Array.isArray(object === null || object === void 0 ? void 0 : object.refetch_chunks) ? object.refetch_chunks.map(function (e) { return Number(e); }) : [],
            reject_senders: Array.isArray(object === null || object === void 0 ? void 0 : object.reject_senders) ? object.reject_senders.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(function (e) { return Math.round(e); });
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(function (e) { return e; });
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseResponseApplySnapshotChunk();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : ResponseApplySnapshotChunk_Result.UNKNOWN;
        message.refetch_chunks = ((_b = object.refetch_chunks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.reject_senders = ((_c = object.reject_senders) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseConsensusParams() {
    return { block: undefined, evidence: undefined, validator: undefined, version: undefined };
}
exports.ConsensusParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            params_1.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = params_1.VersionParams.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? exports.BlockParams.fromJSON(object.block) : undefined,
            evidence: isSet(object.evidence) ? params_1.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: isSet(object.validator) ? params_1.ValidatorParams.fromJSON(object.validator) : undefined,
            version: isSet(object.version) ? params_1.VersionParams.fromJSON(object.version) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence ? params_1.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator ? params_1.ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined &&
            (obj.version = message.version ? params_1.VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseConsensusParams();
        message.block = (object.block !== undefined && object.block !== null)
            ? exports.BlockParams.fromPartial(object.block)
            : undefined;
        message.evidence = (object.evidence !== undefined && object.evidence !== null)
            ? params_1.EvidenceParams.fromPartial(object.evidence)
            : undefined;
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? params_1.ValidatorParams.fromPartial(object.validator)
            : undefined;
        message.version = (object.version !== undefined && object.version !== null)
            ? params_1.VersionParams.fromPartial(object.version)
            : undefined;
        return message;
    },
};
function createBaseBlockParams() {
    return { max_bytes: "0", max_gas: "0" };
}
exports.BlockParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.max_bytes !== "0") {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== "0") {
            writer.uint32(16).int64(message.max_gas);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = longToString(reader.int64());
                    break;
                case 2:
                    message.max_gas = longToString(reader.int64());
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
            max_bytes: isSet(object.max_bytes) ? String(object.max_bytes) : "0",
            max_gas: isSet(object.max_gas) ? String(object.max_gas) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
        message.max_gas !== undefined && (obj.max_gas = message.max_gas);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBlockParams();
        message.max_bytes = (_a = object.max_bytes) !== null && _a !== void 0 ? _a : "0";
        message.max_gas = (_b = object.max_gas) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseLastCommitInfo() {
    return { round: 0, votes: [] };
}
exports.LastCommitInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLastCommitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map(function (e) { return exports.VoteInfo.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(function (e) { return e ? exports.VoteInfo.toJSON(e) : undefined; });
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLastCommitInfo();
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.VoteInfo.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseEvent() {
    return { type: "", attributes: [] };
}
exports.Event = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (var _i = 0, _a = message.attributes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
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
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes)
                ? object.attributes.map(function (e) { return exports.EventAttribute.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(function (e) { return e ? exports.EventAttribute.toJSON(e) : undefined; });
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EventAttribute.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseEventAttribute() {
    return { key: new Uint8Array(), value: new Uint8Array(), index: false };
}
exports.EventAttribute = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventAttribute();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            index: isSet(object.index) ? Boolean(object.index) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseTxResult() {
    return { height: "0", index: 0, tx: new Uint8Array(), result: undefined };
}
exports.TxResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Number(object.index) : 0,
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
            result: isSet(object.result) ? exports.ResponseDeliverTx.fromJSON(object.result) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined &&
            (obj.result = message.result ? exports.ResponseDeliverTx.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseTxResult();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : 0;
        message.tx = (_c = object.tx) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.result = (object.result !== undefined && object.result !== null)
            ? exports.ResponseDeliverTx.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseValidator() {
    return { address: new Uint8Array(), power: "0" };
}
exports.Validator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== "0") {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = longToString(reader.int64());
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            power: isSet(object.power) ? String(object.power) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.power = (_b = object.power) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseValidatorUpdate() {
    return { pub_key: undefined, power: "0" };
}
exports.ValidatorUpdate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== "0") {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = longToString(reader.int64());
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
            pub_key: isSet(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            power: isSet(object.power) ? String(object.power) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.power !== undefined && (obj.power = message.power);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorUpdate();
        message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
            ? keys_1.PublicKey.fromPartial(object.pub_key)
            : undefined;
        message.power = (_a = object.power) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseVoteInfo() {
    return { validator: undefined, signed_last_block: false };
}
exports.VoteInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signed_last_block === true) {
            writer.uint32(16).bool(message.signed_last_block);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVoteInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signed_last_block = reader.bool();
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
            validator: isSet(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            signed_last_block: isSet(object.signed_last_block) ? Boolean(object.signed_last_block) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.signed_last_block !== undefined && (obj.signed_last_block = message.signed_last_block);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseVoteInfo();
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? exports.Validator.fromPartial(object.validator)
            : undefined;
        message.signed_last_block = (_a = object.signed_last_block) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseEvidence() {
    return { type: EvidenceType.UNKNOWN, validator: undefined, height: "0", time: undefined, total_voting_power: "0" };
}
exports.Evidence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== EvidenceType.UNKNOWN) {
            writer.uint32(8).int32(evidenceTypeToNumber(message.type));
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.total_voting_power !== "0") {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = evidenceTypeFromJSON(reader.int32());
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.total_voting_power = longToString(reader.int64());
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
            type: isSet(object.type) ? evidenceTypeFromJSON(object.type) : EvidenceType.UNKNOWN,
            validator: isSet(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            height: isSet(object.height) ? String(object.height) : "0",
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            total_voting_power: isSet(object.total_voting_power) ? String(object.total_voting_power) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined &&
            (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.total_voting_power !== undefined && (obj.total_voting_power = message.total_voting_power);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseEvidence();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : EvidenceType.UNKNOWN;
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? exports.Validator.fromPartial(object.validator)
            : undefined;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.time = (_c = object.time) !== null && _c !== void 0 ? _c : undefined;
        message.total_voting_power = (_d = object.total_voting_power) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseSnapshot() {
    return { height: "0", format: 0, chunks: 0, hash: new Uint8Array(), metadata: new Uint8Array() };
}
exports.Snapshot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
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
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSnapshot();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.chunks = (_c = object.chunks) !== null && _c !== void 0 ? _c : 0;
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
var ABCIApplicationClientImpl = /** @class */ (function () {
    function ABCIApplicationClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "tendermint.abci.ABCIApplication";
        this.rpc = rpc;
        this.Echo = this.Echo.bind(this);
        this.Flush = this.Flush.bind(this);
        this.Info = this.Info.bind(this);
        this.SetOption = this.SetOption.bind(this);
        this.DeliverTx = this.DeliverTx.bind(this);
        this.CheckTx = this.CheckTx.bind(this);
        this.Query = this.Query.bind(this);
        this.Commit = this.Commit.bind(this);
        this.InitChain = this.InitChain.bind(this);
        this.BeginBlock = this.BeginBlock.bind(this);
        this.EndBlock = this.EndBlock.bind(this);
        this.ListSnapshots = this.ListSnapshots.bind(this);
        this.OfferSnapshot = this.OfferSnapshot.bind(this);
        this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this);
        this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this);
    }
    ABCIApplicationClientImpl.prototype.Echo = function (request) {
        var data = exports.RequestEcho.encode(request).finish();
        var promise = this.rpc.request(this.service, "Echo", data);
        return promise.then(function (data) { return exports.ResponseEcho.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.Flush = function (request) {
        var data = exports.RequestFlush.encode(request).finish();
        var promise = this.rpc.request(this.service, "Flush", data);
        return promise.then(function (data) { return exports.ResponseFlush.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.Info = function (request) {
        var data = exports.RequestInfo.encode(request).finish();
        var promise = this.rpc.request(this.service, "Info", data);
        return promise.then(function (data) { return exports.ResponseInfo.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.SetOption = function (request) {
        var data = exports.RequestSetOption.encode(request).finish();
        var promise = this.rpc.request(this.service, "SetOption", data);
        return promise.then(function (data) { return exports.ResponseSetOption.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.DeliverTx = function (request) {
        var data = exports.RequestDeliverTx.encode(request).finish();
        var promise = this.rpc.request(this.service, "DeliverTx", data);
        return promise.then(function (data) { return exports.ResponseDeliverTx.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.CheckTx = function (request) {
        var data = exports.RequestCheckTx.encode(request).finish();
        var promise = this.rpc.request(this.service, "CheckTx", data);
        return promise.then(function (data) { return exports.ResponseCheckTx.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.Query = function (request) {
        var data = exports.RequestQuery.encode(request).finish();
        var promise = this.rpc.request(this.service, "Query", data);
        return promise.then(function (data) { return exports.ResponseQuery.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.Commit = function (request) {
        var data = exports.RequestCommit.encode(request).finish();
        var promise = this.rpc.request(this.service, "Commit", data);
        return promise.then(function (data) { return exports.ResponseCommit.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.InitChain = function (request) {
        var data = exports.RequestInitChain.encode(request).finish();
        var promise = this.rpc.request(this.service, "InitChain", data);
        return promise.then(function (data) { return exports.ResponseInitChain.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.BeginBlock = function (request) {
        var data = exports.RequestBeginBlock.encode(request).finish();
        var promise = this.rpc.request(this.service, "BeginBlock", data);
        return promise.then(function (data) { return exports.ResponseBeginBlock.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.EndBlock = function (request) {
        var data = exports.RequestEndBlock.encode(request).finish();
        var promise = this.rpc.request(this.service, "EndBlock", data);
        return promise.then(function (data) { return exports.ResponseEndBlock.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.ListSnapshots = function (request) {
        var data = exports.RequestListSnapshots.encode(request).finish();
        var promise = this.rpc.request(this.service, "ListSnapshots", data);
        return promise.then(function (data) { return exports.ResponseListSnapshots.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.OfferSnapshot = function (request) {
        var data = exports.RequestOfferSnapshot.encode(request).finish();
        var promise = this.rpc.request(this.service, "OfferSnapshot", data);
        return promise.then(function (data) { return exports.ResponseOfferSnapshot.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.LoadSnapshotChunk = function (request) {
        var data = exports.RequestLoadSnapshotChunk.encode(request).finish();
        var promise = this.rpc.request(this.service, "LoadSnapshotChunk", data);
        return promise.then(function (data) { return exports.ResponseLoadSnapshotChunk.decode(new minimal_1.default.Reader(data)); });
    };
    ABCIApplicationClientImpl.prototype.ApplySnapshotChunk = function (request) {
        var data = exports.RequestApplySnapshotChunk.encode(request).finish();
        var promise = this.rpc.request(this.service, "ApplySnapshotChunk", data);
        return promise.then(function (data) { return exports.ResponseApplySnapshotChunk.decode(new minimal_1.default.Reader(data)); });
    };
    return ABCIApplicationClientImpl;
}());
exports.ABCIApplicationClientImpl = ABCIApplicationClientImpl;
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