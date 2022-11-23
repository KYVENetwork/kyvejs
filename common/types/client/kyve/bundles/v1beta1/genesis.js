"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var bundles_1 = require("./bundles");
var params_1 = require("./params");
exports.protobufPackage = "kyve.bundles.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, bundle_proposal_list: [], finalized_bundle_list: [] };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.bundle_proposal_list; _i < _a.length; _i++) {
            var v = _a[_i];
            bundles_1.BundleProposal.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.finalized_bundle_list; _b < _c.length; _b++) {
            var v = _c[_b];
            bundles_1.FinalizedBundle.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bundle_proposal_list.push(bundles_1.BundleProposal.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.finalized_bundle_list.push(bundles_1.FinalizedBundle.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            bundle_proposal_list: Array.isArray(object === null || object === void 0 ? void 0 : object.bundle_proposal_list)
                ? object.bundle_proposal_list.map(function (e) { return bundles_1.BundleProposal.fromJSON(e); })
                : [],
            finalized_bundle_list: Array.isArray(object === null || object === void 0 ? void 0 : object.finalized_bundle_list)
                ? object.finalized_bundle_list.map(function (e) { return bundles_1.FinalizedBundle.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.bundle_proposal_list) {
            obj.bundle_proposal_list = message.bundle_proposal_list.map(function (e) { return e ? bundles_1.BundleProposal.toJSON(e) : undefined; });
        }
        else {
            obj.bundle_proposal_list = [];
        }
        if (message.finalized_bundle_list) {
            obj.finalized_bundle_list = message.finalized_bundle_list.map(function (e) { return e ? bundles_1.FinalizedBundle.toJSON(e) : undefined; });
        }
        else {
            obj.finalized_bundle_list = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.bundle_proposal_list = ((_a = object.bundle_proposal_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bundles_1.BundleProposal.fromPartial(e); })) || [];
        message.finalized_bundle_list = ((_b = object.finalized_bundle_list) === null || _b === void 0 ? void 0 : _b.map(function (e) { return bundles_1.FinalizedBundle.fromPartial(e); })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map