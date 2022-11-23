"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionServiceClientImpl = exports.QueryMethodDescriptor = exports.QueryServiceDescriptor = exports.QueryServicesDescriptor = exports.GetTxDescriptorResponse = exports.GetTxDescriptorRequest = exports.GetQueryServicesDescriptorResponse = exports.GetQueryServicesDescriptorRequest = exports.GetConfigurationDescriptorResponse = exports.GetConfigurationDescriptorRequest = exports.GetCodecDescriptorResponse = exports.GetCodecDescriptorRequest = exports.GetChainDescriptorResponse = exports.GetChainDescriptorRequest = exports.GetAuthnDescriptorResponse = exports.GetAuthnDescriptorRequest = exports.MsgDescriptor = exports.ConfigurationDescriptor = exports.InterfaceAcceptingMessageDescriptor = exports.InterfaceImplementerDescriptor = exports.InterfaceDescriptor = exports.CodecDescriptor = exports.ChainDescriptor = exports.SigningModeDescriptor = exports.AuthnDescriptor = exports.TxDescriptor = exports.AppDescriptor = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.reflection.v2alpha1";
function createBaseAppDescriptor() {
    return {
        authn: undefined,
        chain: undefined,
        codec: undefined,
        configuration: undefined,
        query_services: undefined,
        tx: undefined,
    };
}
exports.AppDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
        }
        if (message.configuration !== undefined) {
            exports.ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.query_services !== undefined) {
            exports.QueryServicesDescriptor.encode(message.query_services, writer.uint32(42).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.query_services = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
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
            authn: isSet(object.authn) ? exports.AuthnDescriptor.fromJSON(object.authn) : undefined,
            chain: isSet(object.chain) ? exports.ChainDescriptor.fromJSON(object.chain) : undefined,
            codec: isSet(object.codec) ? exports.CodecDescriptor.fromJSON(object.codec) : undefined,
            configuration: isSet(object.configuration) ? exports.ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
            query_services: isSet(object.query_services)
                ? exports.QueryServicesDescriptor.fromJSON(object.query_services)
                : undefined,
            tx: isSet(object.tx) ? exports.TxDescriptor.fromJSON(object.tx) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toJSON(message.authn) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toJSON(message.chain) : undefined);
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toJSON(message.codec) : undefined);
        message.configuration !== undefined &&
            (obj.configuration = message.configuration ? exports.ConfigurationDescriptor.toJSON(message.configuration) : undefined);
        message.query_services !== undefined &&
            (obj.query_services = message.query_services
                ? exports.QueryServicesDescriptor.toJSON(message.query_services)
                : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseAppDescriptor();
        message.authn = (object.authn !== undefined && object.authn !== null)
            ? exports.AuthnDescriptor.fromPartial(object.authn)
            : undefined;
        message.chain = (object.chain !== undefined && object.chain !== null)
            ? exports.ChainDescriptor.fromPartial(object.chain)
            : undefined;
        message.codec = (object.codec !== undefined && object.codec !== null)
            ? exports.CodecDescriptor.fromPartial(object.codec)
            : undefined;
        message.configuration = (object.configuration !== undefined && object.configuration !== null)
            ? exports.ConfigurationDescriptor.fromPartial(object.configuration)
            : undefined;
        message.query_services = (object.query_services !== undefined && object.query_services !== null)
            ? exports.QueryServicesDescriptor.fromPartial(object.query_services)
            : undefined;
        message.tx = (object.tx !== undefined && object.tx !== null) ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseTxDescriptor() {
    return { fullname: "", msgs: [] };
}
exports.TxDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (var _i = 0, _a = message.msgs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.msgs.push(exports.MsgDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map(function (e) { return exports.MsgDescriptor.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.msgs) {
            obj.msgs = message.msgs.map(function (e) { return e ? exports.MsgDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTxDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.msgs = ((_b = object.msgs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.MsgDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAuthnDescriptor() {
    return { sign_modes: [] };
}
exports.AuthnDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.sign_modes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthnDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sign_modes.push(exports.SigningModeDescriptor.decode(reader, reader.uint32()));
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
            sign_modes: Array.isArray(object === null || object === void 0 ? void 0 : object.sign_modes)
                ? object.sign_modes.map(function (e) { return exports.SigningModeDescriptor.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sign_modes) {
            obj.sign_modes = message.sign_modes.map(function (e) { return e ? exports.SigningModeDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAuthnDescriptor();
        message.sign_modes = ((_a = object.sign_modes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SigningModeDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSigningModeDescriptor() {
    return { name: "", number: 0, authn_info_provider_method_fullname: "" };
}
exports.SigningModeDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.authn_info_provider_method_fullname !== "") {
            writer.uint32(26).string(message.authn_info_provider_method_fullname);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSigningModeDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.authn_info_provider_method_fullname = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            authn_info_provider_method_fullname: isSet(object.authn_info_provider_method_fullname)
                ? String(object.authn_info_provider_method_fullname)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.authn_info_provider_method_fullname !== undefined &&
            (obj.authn_info_provider_method_fullname = message.authn_info_provider_method_fullname);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSigningModeDescriptor();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.authn_info_provider_method_fullname = (_c = object.authn_info_provider_method_fullname) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseChainDescriptor() {
    return { id: "" };
}
exports.ChainDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChainDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseChainDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCodecDescriptor() {
    return { interfaces: [] };
}
exports.CodecDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.interfaces; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCodecDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaces.push(exports.InterfaceDescriptor.decode(reader, reader.uint32()));
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
            interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces)
                ? object.interfaces.map(function (e) { return exports.InterfaceDescriptor.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(function (e) { return e ? exports.InterfaceDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCodecDescriptor();
        message.interfaces = ((_a = object.interfaces) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.InterfaceDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseInterfaceDescriptor() {
    return { fullname: "", interface_accepting_messages: [], interface_implementers: [] };
}
exports.InterfaceDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (var _i = 0, _a = message.interface_accepting_messages; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.interface_implementers; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.interface_accepting_messages.push(exports.InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.interface_implementers.push(exports.InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            interface_accepting_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_accepting_messages)
                ? object.interface_accepting_messages.map(function (e) { return exports.InterfaceAcceptingMessageDescriptor.fromJSON(e); })
                : [],
            interface_implementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_implementers)
                ? object.interface_implementers.map(function (e) { return exports.InterfaceImplementerDescriptor.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.interface_accepting_messages) {
            obj.interface_accepting_messages = message.interface_accepting_messages.map(function (e) {
                return e ? exports.InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined;
            });
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interface_implementers) {
            obj.interface_implementers = message.interface_implementers.map(function (e) {
                return e ? exports.InterfaceImplementerDescriptor.toJSON(e) : undefined;
            });
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseInterfaceDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.interface_accepting_messages =
            ((_b = object.interface_accepting_messages) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.InterfaceAcceptingMessageDescriptor.fromPartial(e); })) || [];
        message.interface_implementers =
            ((_c = object.interface_implementers) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.InterfaceImplementerDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseInterfaceImplementerDescriptor() {
    return { fullname: "", type_url: "" };
}
exports.InterfaceImplementerDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.type_url !== "") {
            writer.uint32(18).string(message.type_url);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterfaceImplementerDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.type_url = reader.string();
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            type_url: isSet(object.type_url) ? String(object.type_url) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.type_url !== undefined && (obj.type_url = message.type_url);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseInterfaceImplementerDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.type_url = (_b = object.type_url) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseInterfaceAcceptingMessageDescriptor() {
    return { fullname: "", field_descriptor_names: [] };
}
exports.InterfaceAcceptingMessageDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (var _i = 0, _a = message.field_descriptor_names; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInterfaceAcceptingMessageDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.field_descriptor_names.push(reader.string());
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            field_descriptor_names: Array.isArray(object === null || object === void 0 ? void 0 : object.field_descriptor_names)
                ? object.field_descriptor_names.map(function (e) { return String(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.field_descriptor_names) {
            obj.field_descriptor_names = message.field_descriptor_names.map(function (e) { return e; });
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.field_descriptor_names = ((_b = object.field_descriptor_names) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    },
};
function createBaseConfigurationDescriptor() {
    return { bech32_account_address_prefix: "" };
}
exports.ConfigurationDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.bech32_account_address_prefix !== "") {
            writer.uint32(10).string(message.bech32_account_address_prefix);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConfigurationDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32_account_address_prefix = reader.string();
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
            bech32_account_address_prefix: isSet(object.bech32_account_address_prefix)
                ? String(object.bech32_account_address_prefix)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bech32_account_address_prefix !== undefined &&
            (obj.bech32_account_address_prefix = message.bech32_account_address_prefix);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseConfigurationDescriptor();
        message.bech32_account_address_prefix = (_a = object.bech32_account_address_prefix) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgDescriptor() {
    return { msg_type_url: "" };
}
exports.MsgDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.msg_type_url !== "") {
            writer.uint32(10).string(message.msg_type_url);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type_url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgDescriptor();
        message.msg_type_url = (_a = object.msg_type_url) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
exports.GetAuthnDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAuthnDescriptorRequest();
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
        var message = createBaseGetAuthnDescriptorRequest();
        return message;
    },
};
function createBaseGetAuthnDescriptorResponse() {
    return { authn: undefined };
}
exports.GetAuthnDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authn !== undefined) {
            exports.AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAuthnDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = exports.AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { authn: isSet(object.authn) ? exports.AuthnDescriptor.fromJSON(object.authn) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? exports.AuthnDescriptor.toJSON(message.authn) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetAuthnDescriptorResponse();
        message.authn = (object.authn !== undefined && object.authn !== null)
            ? exports.AuthnDescriptor.fromPartial(object.authn)
            : undefined;
        return message;
    },
};
function createBaseGetChainDescriptorRequest() {
    return {};
}
exports.GetChainDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetChainDescriptorRequest();
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
        var message = createBaseGetChainDescriptorRequest();
        return message;
    },
};
function createBaseGetChainDescriptorResponse() {
    return { chain: undefined };
}
exports.GetChainDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.chain !== undefined) {
            exports.ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetChainDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = exports.ChainDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { chain: isSet(object.chain) ? exports.ChainDescriptor.fromJSON(object.chain) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? exports.ChainDescriptor.toJSON(message.chain) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetChainDescriptorResponse();
        message.chain = (object.chain !== undefined && object.chain !== null)
            ? exports.ChainDescriptor.fromPartial(object.chain)
            : undefined;
        return message;
    },
};
function createBaseGetCodecDescriptorRequest() {
    return {};
}
exports.GetCodecDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetCodecDescriptorRequest();
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
        var message = createBaseGetCodecDescriptorRequest();
        return message;
    },
};
function createBaseGetCodecDescriptorResponse() {
    return { codec: undefined };
}
exports.GetCodecDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.codec !== undefined) {
            exports.CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetCodecDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = exports.CodecDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { codec: isSet(object.codec) ? exports.CodecDescriptor.fromJSON(object.codec) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.codec !== undefined && (obj.codec = message.codec ? exports.CodecDescriptor.toJSON(message.codec) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetCodecDescriptorResponse();
        message.codec = (object.codec !== undefined && object.codec !== null)
            ? exports.CodecDescriptor.fromPartial(object.codec)
            : undefined;
        return message;
    },
};
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
exports.GetConfigurationDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetConfigurationDescriptorRequest();
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
        var message = createBaseGetConfigurationDescriptorRequest();
        return message;
    },
};
function createBaseGetConfigurationDescriptorResponse() {
    return { config: undefined };
}
exports.GetConfigurationDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.config !== undefined) {
            exports.ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetConfigurationDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = exports.ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { config: isSet(object.config) ? exports.ConfigurationDescriptor.fromJSON(object.config) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.config !== undefined &&
            (obj.config = message.config ? exports.ConfigurationDescriptor.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetConfigurationDescriptorResponse();
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.ConfigurationDescriptor.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
exports.GetQueryServicesDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetQueryServicesDescriptorRequest();
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
        var message = createBaseGetQueryServicesDescriptorRequest();
        return message;
    },
};
function createBaseGetQueryServicesDescriptorResponse() {
    return { queries: undefined };
}
exports.GetQueryServicesDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.queries !== undefined) {
            exports.QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetQueryServicesDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries = exports.QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { queries: isSet(object.queries) ? exports.QueryServicesDescriptor.fromJSON(object.queries) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.queries !== undefined &&
            (obj.queries = message.queries ? exports.QueryServicesDescriptor.toJSON(message.queries) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = (object.queries !== undefined && object.queries !== null)
            ? exports.QueryServicesDescriptor.fromPartial(object.queries)
            : undefined;
        return message;
    },
};
function createBaseGetTxDescriptorRequest() {
    return {};
}
exports.GetTxDescriptorRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxDescriptorRequest();
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
        var message = createBaseGetTxDescriptorRequest();
        return message;
    },
};
function createBaseGetTxDescriptorResponse() {
    return { tx: undefined };
}
exports.GetTxDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.tx !== undefined) {
            exports.TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = exports.TxDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { tx: isSet(object.tx) ? exports.TxDescriptor.fromJSON(object.tx) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGetTxDescriptorResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? exports.TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseQueryServicesDescriptor() {
    return { query_services: [] };
}
exports.QueryServicesDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.query_services; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryServicesDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.query_services.push(exports.QueryServiceDescriptor.decode(reader, reader.uint32()));
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
            query_services: Array.isArray(object === null || object === void 0 ? void 0 : object.query_services)
                ? object.query_services.map(function (e) { return exports.QueryServiceDescriptor.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.query_services) {
            obj.query_services = message.query_services.map(function (e) { return e ? exports.QueryServiceDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryServicesDescriptor();
        message.query_services = ((_a = object.query_services) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.QueryServiceDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseQueryServiceDescriptor() {
    return { fullname: "", is_module: false, methods: [] };
}
exports.QueryServiceDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.is_module === true) {
            writer.uint32(16).bool(message.is_module);
        }
        for (var _i = 0, _a = message.methods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryServiceDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.is_module = reader.bool();
                    break;
                case 3:
                    message.methods.push(exports.QueryMethodDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            is_module: isSet(object.is_module) ? Boolean(object.is_module) : false,
            methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(function (e) { return exports.QueryMethodDescriptor.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.is_module !== undefined && (obj.is_module = message.is_module);
        if (message.methods) {
            obj.methods = message.methods.map(function (e) { return e ? exports.QueryMethodDescriptor.toJSON(e) : undefined; });
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryServiceDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.is_module = (_b = object.is_module) !== null && _b !== void 0 ? _b : false;
        message.methods = ((_c = object.methods) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.QueryMethodDescriptor.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseQueryMethodDescriptor() {
    return { name: "", full_query_path: "" };
}
exports.QueryMethodDescriptor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.full_query_path !== "") {
            writer.uint32(18).string(message.full_query_path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryMethodDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.full_query_path = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            full_query_path: isSet(object.full_query_path) ? String(object.full_query_path) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.full_query_path !== undefined && (obj.full_query_path = message.full_query_path);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryMethodDescriptor();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.full_query_path = (_b = object.full_query_path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
var ReflectionServiceClientImpl = /** @class */ (function () {
    function ReflectionServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.base.reflection.v2alpha1.ReflectionService";
        this.rpc = rpc;
        this.GetAuthnDescriptor = this.GetAuthnDescriptor.bind(this);
        this.GetChainDescriptor = this.GetChainDescriptor.bind(this);
        this.GetCodecDescriptor = this.GetCodecDescriptor.bind(this);
        this.GetConfigurationDescriptor = this.GetConfigurationDescriptor.bind(this);
        this.GetQueryServicesDescriptor = this.GetQueryServicesDescriptor.bind(this);
        this.GetTxDescriptor = this.GetTxDescriptor.bind(this);
    }
    ReflectionServiceClientImpl.prototype.GetAuthnDescriptor = function (request) {
        var data = exports.GetAuthnDescriptorRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetAuthnDescriptor", data);
        return promise.then(function (data) { return exports.GetAuthnDescriptorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ReflectionServiceClientImpl.prototype.GetChainDescriptor = function (request) {
        var data = exports.GetChainDescriptorRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetChainDescriptor", data);
        return promise.then(function (data) { return exports.GetChainDescriptorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ReflectionServiceClientImpl.prototype.GetCodecDescriptor = function (request) {
        var data = exports.GetCodecDescriptorRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetCodecDescriptor", data);
        return promise.then(function (data) { return exports.GetCodecDescriptorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ReflectionServiceClientImpl.prototype.GetConfigurationDescriptor = function (request) {
        var data = exports.GetConfigurationDescriptorRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetConfigurationDescriptor", data);
        return promise.then(function (data) { return exports.GetConfigurationDescriptorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ReflectionServiceClientImpl.prototype.GetQueryServicesDescriptor = function (request) {
        var data = exports.GetQueryServicesDescriptorRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetQueryServicesDescriptor", data);
        return promise.then(function (data) { return exports.GetQueryServicesDescriptorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    ReflectionServiceClientImpl.prototype.GetTxDescriptor = function (request) {
        var data = exports.GetTxDescriptorRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetTxDescriptor", data);
        return promise.then(function (data) { return exports.GetTxDescriptorResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return ReflectionServiceClientImpl;
}());
exports.ReflectionServiceClientImpl = ReflectionServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=reflection.js.map