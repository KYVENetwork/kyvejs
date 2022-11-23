"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToNumber = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgType = exports.blockIDFlagToNumber = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlag = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../google/protobuf/timestamp");
var proof_1 = require("../crypto/proof");
var types_1 = require("../version/types");
var validator_1 = require("./validator");
exports.protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag["BLOCK_ID_FLAG_NIL"] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag["UNRECOGNIZED"] = "UNRECOGNIZED";
})(BlockIDFlag = exports.BlockIDFlag || (exports.BlockIDFlag = {}));
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockIDFlagToJSON = blockIDFlagToJSON;
function blockIDFlagToNumber(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return 0;
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return 1;
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return 2;
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return 3;
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.blockIDFlagToNumber = blockIDFlagToNumber;
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(SignedMsgType = exports.SignedMsgType || (exports.SignedMsgType = {}));
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
function signedMsgTypeToNumber(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return 0;
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return 1;
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return 2;
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return 32;
        case SignedMsgType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.signedMsgTypeToNumber = signedMsgTypeToNumber;
function createBasePartSetHeader() {
    return { total: 0, hash: new Uint8Array() };
}
exports.PartSetHeader = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePartSetHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
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
        return {
            total: isSet(object.total) ? Number(object.total) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePartSetHeader();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : 0;
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBasePart() {
    return { index: 0, bytes: new Uint8Array(), proof: undefined };
}
exports.Part = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
            proof: isSet(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined &&
            (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePart();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.bytes = (_b = object.bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof = (object.proof !== undefined && object.proof !== null) ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
};
function createBaseBlockID() {
    return { hash: new Uint8Array(), part_set_header: undefined };
}
exports.BlockID = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.part_set_header !== undefined) {
            exports.PartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockID();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.part_set_header = exports.PartSetHeader.decode(reader, reader.uint32());
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
            part_set_header: isSet(object.part_set_header) ? exports.PartSetHeader.fromJSON(object.part_set_header) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.part_set_header !== undefined &&
            (obj.part_set_header = message.part_set_header ? exports.PartSetHeader.toJSON(message.part_set_header) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBlockID();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.part_set_header = (object.part_set_header !== undefined && object.part_set_header !== null)
            ? exports.PartSetHeader.fromPartial(object.part_set_header)
            : undefined;
        return message;
    },
};
function createBaseHeader() {
    return {
        version: undefined,
        chain_id: "",
        height: "0",
        time: undefined,
        last_block_id: undefined,
        last_commit_hash: new Uint8Array(),
        data_hash: new Uint8Array(),
        validators_hash: new Uint8Array(),
        next_validators_hash: new Uint8Array(),
        consensus_hash: new Uint8Array(),
        app_hash: new Uint8Array(),
        last_results_hash: new Uint8Array(),
        evidence_hash: new Uint8Array(),
        proposer_address: new Uint8Array(),
    };
}
exports.Header = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.height !== "0") {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.last_block_id !== undefined) {
            exports.BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.last_commit_hash.length !== 0) {
            writer.uint32(50).bytes(message.last_commit_hash);
        }
        if (message.data_hash.length !== 0) {
            writer.uint32(58).bytes(message.data_hash);
        }
        if (message.validators_hash.length !== 0) {
            writer.uint32(66).bytes(message.validators_hash);
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(74).bytes(message.next_validators_hash);
        }
        if (message.consensus_hash.length !== 0) {
            writer.uint32(82).bytes(message.consensus_hash);
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(90).bytes(message.app_hash);
        }
        if (message.last_results_hash.length !== 0) {
            writer.uint32(98).bytes(message.last_results_hash);
        }
        if (message.evidence_hash.length !== 0) {
            writer.uint32(106).bytes(message.evidence_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(114).bytes(message.proposer_address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.int64());
                    break;
                case 4:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.last_block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.last_commit_hash = reader.bytes();
                    break;
                case 7:
                    message.data_hash = reader.bytes();
                    break;
                case 8:
                    message.validators_hash = reader.bytes();
                    break;
                case 9:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 10:
                    message.consensus_hash = reader.bytes();
                    break;
                case 11:
                    message.app_hash = reader.bytes();
                    break;
                case 12:
                    message.last_results_hash = reader.bytes();
                    break;
                case 13:
                    message.evidence_hash = reader.bytes();
                    break;
                case 14:
                    message.proposer_address = reader.bytes();
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
            version: isSet(object.version) ? types_1.Consensus.fromJSON(object.version) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            height: isSet(object.height) ? String(object.height) : "0",
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            last_block_id: isSet(object.last_block_id) ? exports.BlockID.fromJSON(object.last_block_id) : undefined,
            last_commit_hash: isSet(object.last_commit_hash) ? bytesFromBase64(object.last_commit_hash) : new Uint8Array(),
            data_hash: isSet(object.data_hash) ? bytesFromBase64(object.data_hash) : new Uint8Array(),
            validators_hash: isSet(object.validators_hash) ? bytesFromBase64(object.validators_hash) : new Uint8Array(),
            next_validators_hash: isSet(object.next_validators_hash)
                ? bytesFromBase64(object.next_validators_hash)
                : new Uint8Array(),
            consensus_hash: isSet(object.consensus_hash) ? bytesFromBase64(object.consensus_hash) : new Uint8Array(),
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
            last_results_hash: isSet(object.last_results_hash) ? bytesFromBase64(object.last_results_hash) : new Uint8Array(),
            evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array(),
            proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toJSON(message.version) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.height !== undefined && (obj.height = message.height);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.last_block_id !== undefined &&
            (obj.last_block_id = message.last_block_id ? exports.BlockID.toJSON(message.last_block_id) : undefined);
        message.last_commit_hash !== undefined &&
            (obj.last_commit_hash = base64FromBytes(message.last_commit_hash !== undefined ? message.last_commit_hash : new Uint8Array()));
        message.data_hash !== undefined &&
            (obj.data_hash = base64FromBytes(message.data_hash !== undefined ? message.data_hash : new Uint8Array()));
        message.validators_hash !== undefined &&
            (obj.validators_hash = base64FromBytes(message.validators_hash !== undefined ? message.validators_hash : new Uint8Array()));
        message.next_validators_hash !== undefined &&
            (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.consensus_hash !== undefined &&
            (obj.consensus_hash = base64FromBytes(message.consensus_hash !== undefined ? message.consensus_hash : new Uint8Array()));
        message.app_hash !== undefined &&
            (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.last_results_hash !== undefined &&
            (obj.last_results_hash = base64FromBytes(message.last_results_hash !== undefined ? message.last_results_hash : new Uint8Array()));
        message.evidence_hash !== undefined &&
            (obj.evidence_hash = base64FromBytes(message.evidence_hash !== undefined ? message.evidence_hash : new Uint8Array()));
        message.proposer_address !== undefined &&
            (obj.proposer_address = base64FromBytes(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseHeader();
        message.version = (object.version !== undefined && object.version !== null)
            ? types_1.Consensus.fromPartial(object.version)
            : undefined;
        message.chain_id = (_a = object.chain_id) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.time = (_c = object.time) !== null && _c !== void 0 ? _c : undefined;
        message.last_block_id = (object.last_block_id !== undefined && object.last_block_id !== null)
            ? exports.BlockID.fromPartial(object.last_block_id)
            : undefined;
        message.last_commit_hash = (_d = object.last_commit_hash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.data_hash = (_e = object.data_hash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.validators_hash = (_f = object.validators_hash) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.next_validators_hash = (_g = object.next_validators_hash) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.consensus_hash = (_h = object.consensus_hash) !== null && _h !== void 0 ? _h : new Uint8Array();
        message.app_hash = (_j = object.app_hash) !== null && _j !== void 0 ? _j : new Uint8Array();
        message.last_results_hash = (_k = object.last_results_hash) !== null && _k !== void 0 ? _k : new Uint8Array();
        message.evidence_hash = (_l = object.evidence_hash) !== null && _l !== void 0 ? _l : new Uint8Array();
        message.proposer_address = (_m = object.proposer_address) !== null && _m !== void 0 ? _m : new Uint8Array();
        return message;
    },
};
function createBaseData() {
    return { txs: [] };
}
exports.Data = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map(function (e) { return bytesFromBase64(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(function (e) { return base64FromBytes(e !== undefined ? e : new Uint8Array()); });
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseData();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseVote() {
    return {
        type: SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN,
        height: "0",
        round: 0,
        block_id: undefined,
        timestamp: undefined,
        validator_address: new Uint8Array(),
        validator_index: 0,
        signature: new Uint8Array(),
    };
}
exports.Vote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN) {
            writer.uint32(8).int32(signedMsgTypeToNumber(message.type));
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(50).bytes(message.validator_address);
        }
        if (message.validator_index !== 0) {
            writer.uint32(56).int32(message.validator_index);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = signedMsgTypeFromJSON(reader.int32());
                    break;
                case 2:
                    message.height = longToString(reader.int64());
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_address = reader.bytes();
                    break;
                case 7:
                    message.validator_index = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            block_id: isSet(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
            validator_index: isSet(object.validator_index) ? Number(object.validator_index) : 0,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.validator_address !== undefined &&
            (obj.validator_address = base64FromBytes(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.validator_index !== undefined && (obj.validator_index = Math.round(message.validator_index));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseVote();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : 0;
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? exports.BlockID.fromPartial(object.block_id)
            : undefined;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        message.validator_address = (_e = object.validator_address) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.validator_index = (_f = object.validator_index) !== null && _f !== void 0 ? _f : 0;
        message.signature = (_g = object.signature) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
function createBaseCommit() {
    return { height: "0", round: 0, block_id: undefined, signatures: [] };
}
exports.Commit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            block_id: isSet(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map(function (e) { return exports.CommitSig.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(function (e) { return e ? exports.CommitSig.toJSON(e) : undefined; });
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCommit();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? exports.BlockID.fromPartial(object.block_id)
            : undefined;
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.CommitSig.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCommitSig() {
    return {
        block_id_flag: BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN,
        validator_address: new Uint8Array(),
        timestamp: undefined,
        signature: new Uint8Array(),
    };
}
exports.CommitSig = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block_id_flag !== BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN) {
            writer.uint32(8).int32(blockIDFlagToNumber(message.block_id_flag));
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitSig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id_flag = blockIDFlagFromJSON(reader.int32());
                    break;
                case 2:
                    message.validator_address = reader.bytes();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
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
            block_id_flag: isSet(object.block_id_flag)
                ? blockIDFlagFromJSON(object.block_id_flag)
                : BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN,
            validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block_id_flag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.block_id_flag));
        message.validator_address !== undefined &&
            (obj.validator_address = base64FromBytes(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCommitSig();
        message.block_id_flag = (_a = object.block_id_flag) !== null && _a !== void 0 ? _a : BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseProposal() {
    return {
        type: SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN,
        height: "0",
        round: 0,
        pol_round: 0,
        block_id: undefined,
        timestamp: undefined,
        signature: new Uint8Array(),
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN) {
            writer.uint32(8).int32(signedMsgTypeToNumber(message.type));
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.pol_round !== 0) {
            writer.uint32(32).int32(message.pol_round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = signedMsgTypeFromJSON(reader.int32());
                    break;
                case 2:
                    message.height = longToString(reader.int64());
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.pol_round = reader.int32();
                    break;
                case 5:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            pol_round: isSet(object.pol_round) ? Number(object.pol_round) : 0,
            block_id: isSet(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.pol_round !== undefined && (obj.pol_round = Math.round(message.pol_round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseProposal();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : 0;
        message.pol_round = (_d = object.pol_round) !== null && _d !== void 0 ? _d : 0;
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? exports.BlockID.fromPartial(object.block_id)
            : undefined;
        message.timestamp = (_e = object.timestamp) !== null && _e !== void 0 ? _e : undefined;
        message.signature = (_f = object.signature) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
};
function createBaseSignedHeader() {
    return { header: undefined, commit: undefined };
}
exports.SignedHeader = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignedHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: isSet(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSignedHeader();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.Header.fromPartial(object.header)
            : undefined;
        message.commit = (object.commit !== undefined && object.commit !== null)
            ? exports.Commit.fromPartial(object.commit)
            : undefined;
        return message;
    },
};
function createBaseLightBlock() {
    return { signed_header: undefined, validator_set: undefined };
}
exports.LightBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.signed_header !== undefined) {
            exports.SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            validator_1.ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLightBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_header = exports.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: isSet(object.signed_header) ? exports.SignedHeader.fromJSON(object.signed_header) : undefined,
            validator_set: isSet(object.validator_set) ? validator_1.ValidatorSet.fromJSON(object.validator_set) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signed_header !== undefined &&
            (obj.signed_header = message.signed_header ? exports.SignedHeader.toJSON(message.signed_header) : undefined);
        message.validator_set !== undefined &&
            (obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toJSON(message.validator_set) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseLightBlock();
        message.signed_header = (object.signed_header !== undefined && object.signed_header !== null)
            ? exports.SignedHeader.fromPartial(object.signed_header)
            : undefined;
        message.validator_set = (object.validator_set !== undefined && object.validator_set !== null)
            ? validator_1.ValidatorSet.fromPartial(object.validator_set)
            : undefined;
        return message;
    },
};
function createBaseBlockMeta() {
    return { block_id: undefined, block_size: "0", header: undefined, num_txs: "0" };
}
exports.BlockMeta = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_size !== "0") {
            writer.uint32(16).int64(message.block_size);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.num_txs !== "0") {
            writer.uint32(32).int64(message.num_txs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block_size = longToString(reader.int64());
                    break;
                case 3:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.num_txs = longToString(reader.int64());
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
            block_id: isSet(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            block_size: isSet(object.block_size) ? String(object.block_size) : "0",
            header: isSet(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            num_txs: isSet(object.num_txs) ? String(object.num_txs) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.block_size !== undefined && (obj.block_size = message.block_size);
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.num_txs !== undefined && (obj.num_txs = message.num_txs);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBlockMeta();
        message.block_id = (object.block_id !== undefined && object.block_id !== null)
            ? exports.BlockID.fromPartial(object.block_id)
            : undefined;
        message.block_size = (_a = object.block_size) !== null && _a !== void 0 ? _a : "0";
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.Header.fromPartial(object.header)
            : undefined;
        message.num_txs = (_b = object.num_txs) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseTxProof() {
    return { root_hash: new Uint8Array(), data: new Uint8Array(), proof: undefined };
}
exports.TxProof = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.root_hash.length !== 0) {
            writer.uint32(10).bytes(message.root_hash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.root_hash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            root_hash: isSet(object.root_hash) ? bytesFromBase64(object.root_hash) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            proof: isSet(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.root_hash !== undefined &&
            (obj.root_hash = base64FromBytes(message.root_hash !== undefined ? message.root_hash : new Uint8Array()));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTxProof();
        message.root_hash = (_a = object.root_hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof = (object.proof !== undefined && object.proof !== null) ? proof_1.Proof.fromPartial(object.proof) : undefined;
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