/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "tendermint.p2p";

export interface ProtocolVersion {
  p2p: string;
  block: string;
  app: string;
}

export interface NodeInfo {
  protocol_version?: ProtocolVersion;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other?: NodeInfoOther;
}

export interface NodeInfoOther {
  tx_index: string;
  rpc_address: string;
}

export interface PeerInfo {
  id: string;
  address_info: PeerAddressInfo[];
  last_connected?: Date;
}

export interface PeerAddressInfo {
  address: string;
  last_dial_success?: Date;
  last_dial_failure?: Date;
  dial_failures: number;
}

function createBaseProtocolVersion(): ProtocolVersion {
  return { p2p: "0", block: "0", app: "0" };
}

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.block = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.app = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    return {
      p2p: isSet(object.p2p) ? String(object.p2p) : "0",
      block: isSet(object.block) ? String(object.block) : "0",
      app: isSet(object.app) ? String(object.app) : "0",
    };
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = message.p2p);
    message.block !== undefined && (obj.block = message.block);
    message.app !== undefined && (obj.app = message.app);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p ?? "0";
    message.block = object.block ?? "0";
    message.app = object.app ?? "0";
    return message;
  },
};

function createBaseNodeInfo(): NodeInfo {
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

export const NodeInfo = {
  encode(message: NodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol_version !== undefined) {
      ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
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
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
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
          message.other = NodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeInfo {
    return {
      protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromJSON(object.protocol_version) : undefined,
      node_id: isSet(object.node_id) ? String(object.node_id) : "",
      listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
      network: isSet(object.network) ? String(object.network) : "",
      version: isSet(object.version) ? String(object.version) : "",
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      other: isSet(object.other) ? NodeInfoOther.fromJSON(object.other) : undefined,
    };
  },

  toJSON(message: NodeInfo): unknown {
    const obj: any = {};
    message.protocol_version !== undefined &&
      (obj.protocol_version = message.protocol_version ? ProtocolVersion.toJSON(message.protocol_version) : undefined);
    message.node_id !== undefined && (obj.node_id = message.node_id);
    message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined &&
      (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeInfo>, I>>(object: I): NodeInfo {
    const message = createBaseNodeInfo();
    message.protocol_version = (object.protocol_version !== undefined && object.protocol_version !== null)
      ? ProtocolVersion.fromPartial(object.protocol_version)
      : undefined;
    message.node_id = object.node_id ?? "";
    message.listen_addr = object.listen_addr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other = (object.other !== undefined && object.other !== null)
      ? NodeInfoOther.fromPartial(object.other)
      : undefined;
    return message;
  },
};

function createBaseNodeInfoOther(): NodeInfoOther {
  return { tx_index: "", rpc_address: "" };
}

export const NodeInfoOther = {
  encode(message: NodeInfoOther, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx_index !== "") {
      writer.uint32(10).string(message.tx_index);
    }
    if (message.rpc_address !== "") {
      writer.uint32(18).string(message.rpc_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfoOther();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): NodeInfoOther {
    return {
      tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
      rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : "",
    };
  },

  toJSON(message: NodeInfoOther): unknown {
    const obj: any = {};
    message.tx_index !== undefined && (obj.tx_index = message.tx_index);
    message.rpc_address !== undefined && (obj.rpc_address = message.rpc_address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeInfoOther>, I>>(object: I): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    message.tx_index = object.tx_index ?? "";
    message.rpc_address = object.rpc_address ?? "";
    return message;
  },
};

function createBasePeerInfo(): PeerInfo {
  return { id: "", address_info: [], last_connected: undefined };
}

export const PeerInfo = {
  encode(message: PeerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.address_info) {
      PeerAddressInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.last_connected !== undefined) {
      Timestamp.encode(toTimestamp(message.last_connected), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.address_info.push(PeerAddressInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_connected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerInfo {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      address_info: Array.isArray(object?.address_info)
        ? object.address_info.map((e: any) => PeerAddressInfo.fromJSON(e))
        : [],
      last_connected: isSet(object.last_connected) ? fromJsonTimestamp(object.last_connected) : undefined,
    };
  },

  toJSON(message: PeerInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.address_info) {
      obj.address_info = message.address_info.map((e) => e ? PeerAddressInfo.toJSON(e) : undefined);
    } else {
      obj.address_info = [];
    }
    message.last_connected !== undefined && (obj.last_connected = message.last_connected.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerInfo>, I>>(object: I): PeerInfo {
    const message = createBasePeerInfo();
    message.id = object.id ?? "";
    message.address_info = object.address_info?.map((e) => PeerAddressInfo.fromPartial(e)) || [];
    message.last_connected = object.last_connected ?? undefined;
    return message;
  },
};

function createBasePeerAddressInfo(): PeerAddressInfo {
  return { address: "", last_dial_success: undefined, last_dial_failure: undefined, dial_failures: 0 };
}

export const PeerAddressInfo = {
  encode(message: PeerAddressInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.last_dial_success !== undefined) {
      Timestamp.encode(toTimestamp(message.last_dial_success), writer.uint32(18).fork()).ldelim();
    }
    if (message.last_dial_failure !== undefined) {
      Timestamp.encode(toTimestamp(message.last_dial_failure), writer.uint32(26).fork()).ldelim();
    }
    if (message.dial_failures !== 0) {
      writer.uint32(32).uint32(message.dial_failures);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerAddressInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.last_dial_success = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.last_dial_failure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PeerAddressInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      last_dial_success: isSet(object.last_dial_success) ? fromJsonTimestamp(object.last_dial_success) : undefined,
      last_dial_failure: isSet(object.last_dial_failure) ? fromJsonTimestamp(object.last_dial_failure) : undefined,
      dial_failures: isSet(object.dial_failures) ? Number(object.dial_failures) : 0,
    };
  },

  toJSON(message: PeerAddressInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.last_dial_success !== undefined && (obj.last_dial_success = message.last_dial_success.toISOString());
    message.last_dial_failure !== undefined && (obj.last_dial_failure = message.last_dial_failure.toISOString());
    message.dial_failures !== undefined && (obj.dial_failures = Math.round(message.dial_failures));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerAddressInfo>, I>>(object: I): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    message.address = object.address ?? "";
    message.last_dial_success = object.last_dial_success ?? undefined;
    message.last_dial_failure = object.last_dial_failure ?? undefined;
    message.dial_failures = object.dial_failures ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = Number(t.seconds) * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
