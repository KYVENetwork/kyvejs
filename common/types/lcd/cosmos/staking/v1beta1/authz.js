"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeAuthorization_Validators = exports.StakeAuthorization = exports.authorizationTypeToNumber = exports.authorizationTypeToJSON = exports.authorizationTypeFromJSON = exports.AuthorizationType = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = "AUTHORIZATION_TYPE_REDELEGATE";
    AuthorizationType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(AuthorizationType = exports.AuthorizationType || (exports.AuthorizationType = {}));
function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHORIZATION_TYPE_DELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case "AUTHORIZATION_TYPE_UNDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case "AUTHORIZATION_TYPE_REDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
exports.authorizationTypeFromJSON = authorizationTypeFromJSON;
function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
        case AuthorizationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.authorizationTypeToJSON = authorizationTypeToJSON;
function authorizationTypeToNumber(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return 0;
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return 1;
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return 2;
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return 3;
        case AuthorizationType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.authorizationTypeToNumber = authorizationTypeToNumber;
function createBaseStakeAuthorization() {
    return {
        max_tokens: undefined,
        allow_list: undefined,
        deny_list: undefined,
        authorization_type: AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED,
    };
}
exports.StakeAuthorization = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.max_tokens !== undefined) {
            coin_1.Coin.encode(message.max_tokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allow_list !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.allow_list, writer.uint32(18).fork()).ldelim();
        }
        if (message.deny_list !== undefined) {
            exports.StakeAuthorization_Validators.encode(message.deny_list, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorization_type !== AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED) {
            writer.uint32(32).int32(authorizationTypeToNumber(message.authorization_type));
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakeAuthorization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_tokens = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allow_list = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.deny_list = exports.StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authorization_type = authorizationTypeFromJSON(reader.int32());
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
            max_tokens: isSet(object.max_tokens) ? coin_1.Coin.fromJSON(object.max_tokens) : undefined,
            allow_list: isSet(object.allow_list) ? exports.StakeAuthorization_Validators.fromJSON(object.allow_list) : undefined,
            deny_list: isSet(object.deny_list) ? exports.StakeAuthorization_Validators.fromJSON(object.deny_list) : undefined,
            authorization_type: isSet(object.authorization_type)
                ? authorizationTypeFromJSON(object.authorization_type)
                : AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.max_tokens !== undefined &&
            (obj.max_tokens = message.max_tokens ? coin_1.Coin.toJSON(message.max_tokens) : undefined);
        message.allow_list !== undefined &&
            (obj.allow_list = message.allow_list ? exports.StakeAuthorization_Validators.toJSON(message.allow_list) : undefined);
        message.deny_list !== undefined &&
            (obj.deny_list = message.deny_list ? exports.StakeAuthorization_Validators.toJSON(message.deny_list) : undefined);
        message.authorization_type !== undefined &&
            (obj.authorization_type = authorizationTypeToJSON(message.authorization_type));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStakeAuthorization();
        message.max_tokens = (object.max_tokens !== undefined && object.max_tokens !== null)
            ? coin_1.Coin.fromPartial(object.max_tokens)
            : undefined;
        message.allow_list = (object.allow_list !== undefined && object.allow_list !== null)
            ? exports.StakeAuthorization_Validators.fromPartial(object.allow_list)
            : undefined;
        message.deny_list = (object.deny_list !== undefined && object.deny_list !== null)
            ? exports.StakeAuthorization_Validators.fromPartial(object.deny_list)
            : undefined;
        message.authorization_type = (_a = object.authorization_type) !== null && _a !== void 0 ? _a : AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        return message;
    },
};
function createBaseStakeAuthorization_Validators() {
    return { address: [] };
}
exports.StakeAuthorization_Validators = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.address; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakeAuthorization_Validators();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { address: Array.isArray(object === null || object === void 0 ? void 0 : object.address) ? object.address.map(function (e) { return String(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.address) {
            obj.address = message.address.map(function (e) { return e; });
        }
        else {
            obj.address = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStakeAuthorization_Validators();
        message.address = ((_a = object.address) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=authz.js.map