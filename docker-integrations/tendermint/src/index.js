"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ajv_1 = require("ajv");
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
// TODO: build project with webpack resolve path correctly and not hardcode dist here
var PROTO_PATH = './proto/runtime.proto';
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
var runtimePackage = grpc.loadPackageDefinition(packageDefinition);
var runtimeServer = new grpc.Server();
// TODO: check ajv use
var ajv = new ajv_1.default();
var TendermintServer = /** @class */ (function () {
    function TendermintServer() {
    }
    TendermintServer.prototype.getRuntimeName = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                callback(null, { name: "name" });
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.getRuntimeVersion = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                callback(null, { version: "version" });
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.validateSetConfig = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var rawConfig, config, serialized_config;
            return __generator(this, function (_a) {
                try {
                    rawConfig = call.request.raw_config;
                    config = JSON.parse(rawConfig);
                    if (!config.network) {
                        callback({
                            code: grpc.status.INVALID_ARGUMENT,
                            details: 'Config does not have property "network" defined',
                        });
                        return [2 /*return*/];
                    }
                    if (!config.rpc) {
                        callback({
                            code: grpc.status.INVALID_ARGUMENT,
                            details: 'Config does not have property "rpc" defined',
                        });
                        return [2 /*return*/];
                    }
                    if (process.env.KYVEJS_TENDERMINT_RPC) {
                        config.rpc = process.env.KYVEJS_TENDERMINT_RPC;
                    }
                    serialized_config = JSON.stringify(config);
                    callback(null, { serialized_config: serialized_config });
                }
                catch (error) {
                    callback({
                        code: grpc.status.INVALID_ARGUMENT,
                        details: error.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.getDataItem = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var config, key, blockResponse, block, blockResultsResponse, blockResults, value, data_item, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        console.log(call.request);
                        config = JSON.parse(call.request.config.serialized_config);
                        key = call.request.key;
                        return [4 /*yield*/, axios_1.default.get("".concat(config.rpc, "/block?height=").concat(key))];
                    case 1:
                        blockResponse = _a.sent();
                        block = blockResponse.data.result;
                        return [4 /*yield*/, axios_1.default.get("".concat(config.rpc, "/block_results?height=").concat(key))];
                    case 2:
                        blockResultsResponse = _a.sent();
                        blockResults = blockResultsResponse.data.result;
                        value = {
                            block: block,
                            block_results: blockResults,
                        };
                        data_item = {
                            key: key,
                            value: JSON.stringify(value),
                        };
                        console.log(data_item);
                        callback(null, { data_item: data_item });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        callback({
                            code: grpc.status.INTERNAL,
                            details: error_1.message,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TendermintServer.prototype.prevalidateDataItem = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var config, request_item, item;
            return __generator(this, function (_a) {
                try {
                    config = JSON.parse(call.request.config.serialized_config);
                    request_item = call.request.data_item;
                    item = {
                        key: request_item.key,
                        value: JSON.parse(request_item.value),
                    };
                    // Check if data item is defined
                    if (!item.value) {
                        callback(null, { valid: false });
                        return [2 /*return*/];
                    }
                    // Check if block and block results are defined
                    if (!item.value.block || !item.value.block_results) {
                        callback(null, { valid: false });
                        return [2 /*return*/];
                    }
                    // Check if network matches
                    if (config.network !== item.value.block.block.header.chain_id) {
                        callback(null, { valid: false });
                        return [2 /*return*/];
                    }
                    // Check if block height matches
                    if (item.key !== item.value.block.block.header.height.toString()) {
                        callback(null, { valid: false });
                        return [2 /*return*/];
                    }
                    // Perform additional validation if needed
                    // If all checks pass, the data item is prevalidated
                    callback(null, { valid: true });
                }
                catch (error) {
                    callback({
                        code: grpc.status.INTERNAL,
                        details: error.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.transformDataItem = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var config, request_item, item, compareEventAttribute_1, transformed_data_item;
            return __generator(this, function (_a) {
                try {
                    config = JSON.parse(call.request.config.serialized_config);
                    request_item = call.request.data_item;
                    item = {
                        key: request_item.key,
                        value: JSON.parse(request_item.value),
                    };
                    compareEventAttribute_1 = function (a, b) {
                        return a.key.toLowerCase() > b.key.toLowerCase()
                            ? 1
                            : b.key.toLowerCase() > a.key.toLowerCase()
                                ? -1
                                : 0;
                    };
                    if (item.value.block_results.begin_block_events) {
                        item.value.block_results.begin_block_events =
                            item.value.block_results.begin_block_events.map(function (event) {
                                event.attributes = event.attributes
                                    .sort(compareEventAttribute_1)
                                    .map(function (_a) {
                                    var index = _a.index, attribute = __rest(_a, ["index"]);
                                    return attribute;
                                });
                                return event;
                            });
                    }
                    if (item.value.block_results.end_block_events) {
                        item.value.block_results.end_block_events =
                            item.value.block_results.end_block_events.map(function (event) {
                                event.attributes = event.attributes
                                    .sort(compareEventAttribute_1)
                                    .map(function (_a) {
                                    var index = _a.index, attribute = __rest(_a, ["index"]);
                                    return attribute;
                                });
                                return event;
                            });
                    }
                    if (item.value.block_results.txs_results) {
                        item.value.block_results.txs_results =
                            item.value.block_results.txs_results.map(function (tx_result) {
                                delete tx_result.log;
                                if (tx_result.events) {
                                    tx_result.events = tx_result.events.map(function (event) {
                                        event.attributes = event.attributes
                                            .sort(compareEventAttribute_1)
                                            .map(function (_a) {
                                            var index = _a.index, attribute = __rest(_a, ["index"]);
                                            return attribute;
                                        });
                                        if (event.type === 'fungible_token_packet') {
                                            event.attributes = event.attributes.map(function (attribute) {
                                                if (attribute.key === 'YWNrbm93bGVkZ2VtZW50') {
                                                    attribute.value = '';
                                                }
                                                return attribute;
                                            });
                                        }
                                        return event;
                                    });
                                }
                                return tx_result;
                            });
                    }
                    transformed_data_item = {
                        key: item.key,
                        value: JSON.stringify(item.value),
                    };
                    callback(null, { transformed_data_item: transformed_data_item });
                }
                catch (error) {
                    callback({
                        code: grpc.status.INTERNAL,
                        details: error.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.validateDataItem = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var config, request_proposed_data_item, request_validation_data_item, proposedDataItem, validationDataItem, isValid;
            return __generator(this, function (_a) {
                try {
                    config = JSON.parse(call.request.config.serialized_config);
                    request_proposed_data_item = call.request.proposed_data_item;
                    request_validation_data_item = call.request.validation_data_item;
                    proposedDataItem = {
                        key: request_proposed_data_item.key,
                        value: JSON.parse(request_proposed_data_item.value),
                    };
                    validationDataItem = {
                        key: request_validation_data_item.key,
                        value: JSON.parse(request_validation_data_item.value),
                    };
                    isValid = JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem);
                    callback(null, { valid: isValid });
                }
                catch (error) {
                    callback({
                        code: grpc.status.INTERNAL,
                        details: error.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.summarizeDataBundle = function (call, callback) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var config, grpcBundle, bundle, latestBlockHeight;
            return __generator(this, function (_f) {
                try {
                    config = JSON.parse(call.request.config.serialized_config);
                    grpcBundle = call.request.bundle;
                    bundle = grpcBundle.map(function (item) { return ({
                        key: item.key,
                        value: JSON.parse(item.value),
                    }); });
                    latestBlockHeight = ((_e = (_d = (_c = (_b = (_a = bundle[bundle.length - 1]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.block) === null || _c === void 0 ? void 0 : _c.block) === null || _d === void 0 ? void 0 : _d.header) === null || _e === void 0 ? void 0 : _e.height) || '';
                    callback(null, { summary: latestBlockHeight.toString() });
                }
                catch (error) {
                    callback({
                        code: grpc.status.INTERNAL,
                        details: error.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    TendermintServer.prototype.nextKey = function (call, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var config, key, nextKey;
            return __generator(this, function (_a) {
                try {
                    config = JSON.parse(call.request.config.serialized_config);
                    key = call.request.key;
                    nextKey = (parseInt(key) + 1).toString();
                    callback(null, { next_key: nextKey });
                }
                catch (error) {
                    callback({
                        code: grpc.status.INTERNAL,
                        details: error.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    return TendermintServer;
}());
// TODO: clean up this part. server init should be done in index.ts file (here)
// and server implementation should be moved to another file (server.ts) for example
// to keep code clean
var runtimeService = new TendermintServer();
runtimeServer.addService(runtimePackage.RuntimeService.service, {
    getRuntimeName: runtimeService.getRuntimeName,
    getRuntimeVersion: runtimeService.getRuntimeVersion,
    validateSetConfig: runtimeService.validateSetConfig,
    getDataItem: runtimeService.getDataItem,
    prevalidateDataItem: runtimeService.prevalidateDataItem,
    transformDataItem: runtimeService.transformDataItem,
    validateDataItem: runtimeService.validateDataItem,
    summarizeDataBundle: runtimeService.summarizeDataBundle,
    nextKey: runtimeService.nextKey,
});
runtimeServer.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), function (error, port) {
    if (error) {
        console.error("Error binding server:", error);
    }
    else {
        console.log("Server running at http://0.0.0.0:".concat(port));
        runtimeServer.start();
    }
});
