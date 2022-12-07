/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SlashType, slashTypeFromJSON, slashTypeToJSON, slashTypeToNumber } from "./delegation";

export const protobufPackage = "kyve.delegation.v1beta1";

/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}

/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}

/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegate {
  /** address is the account address of the delegator. */
  address: string;
  /** from_staker ... */
  from_staker: string;
  /** to_staker is the account address of the new staker in the the pool */
  to_staker: string;
  /** amount ... */
  amount: string;
}

/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewards {
  /** address is the account address of the delegator. */
  address: string;
  /** staker is the account address of the protocol node the users withdraws from. */
  staker: string;
  /** amount ... */
  amount: string;
}

/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
  /** slash_type */
  slash_type: SlashType;
}

function createBaseEventDelegate(): EventDelegate {
  return { address: "", staker: "", amount: "0" };
}

export const EventDelegate = {
  encode(message: EventDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventDelegate): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegate>, I>>(object: I): EventDelegate {
    const message = createBaseEventDelegate();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventUndelegate(): EventUndelegate {
  return { address: "", staker: "", amount: "0" };
}

export const EventUndelegate = {
  encode(message: EventUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUndelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventUndelegate): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUndelegate>, I>>(object: I): EventUndelegate {
    const message = createBaseEventUndelegate();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventRedelegate(): EventRedelegate {
  return { address: "", from_staker: "", to_staker: "", amount: "0" };
}

export const EventRedelegate = {
  encode(message: EventRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.from_staker !== "") {
      writer.uint32(18).string(message.from_staker);
    }
    if (message.to_staker !== "") {
      writer.uint32(26).string(message.to_staker);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.from_staker = reader.string();
          break;
        case 3:
          message.to_staker = reader.string();
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedelegate {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      from_staker: isSet(object.from_staker) ? String(object.from_staker) : "",
      to_staker: isSet(object.to_staker) ? String(object.to_staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventRedelegate): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.from_staker !== undefined && (obj.from_staker = message.from_staker);
    message.to_staker !== undefined && (obj.to_staker = message.to_staker);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRedelegate>, I>>(object: I): EventRedelegate {
    const message = createBaseEventRedelegate();
    message.address = object.address ?? "";
    message.from_staker = object.from_staker ?? "";
    message.to_staker = object.to_staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventWithdrawRewards(): EventWithdrawRewards {
  return { address: "", staker: "", amount: "0" };
}

export const EventWithdrawRewards = {
  encode(message: EventWithdrawRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawRewards {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventWithdrawRewards): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawRewards>, I>>(object: I): EventWithdrawRewards {
    const message = createBaseEventWithdrawRewards();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventSlash(): EventSlash {
  return { pool_id: "0", staker: "", amount: "0", slash_type: SlashType.SLASH_TYPE_UNSPECIFIED };
}

export const EventSlash = {
  encode(message: EventSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.slash_type !== SlashType.SLASH_TYPE_UNSPECIFIED) {
      writer.uint32(32).int32(slashTypeToNumber(message.slash_type));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.slash_type = slashTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSlash {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      slash_type: isSet(object.slash_type) ? slashTypeFromJSON(object.slash_type) : SlashType.SLASH_TYPE_UNSPECIFIED,
    };
  },

  toJSON(message: EventSlash): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    message.slash_type !== undefined && (obj.slash_type = slashTypeToJSON(message.slash_type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSlash>, I>>(object: I): EventSlash {
    const message = createBaseEventSlash();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    message.slash_type = object.slash_type ?? SlashType.SLASH_TYPE_UNSPECIFIED;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
