/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SlashType, slashTypeFromJSON, slashTypeToJSON } from "./delegation";
import { Params } from "./params";

export const protobufPackage = "kyve.delegation.v1beta1";

/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  old_params?: Params;
  /** new_params is the module's new parameters. */
  new_params?: Params;
  /** payload is the parameter updates that were performed. */
  payload: string;
}

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
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegation {
  /** address is the address of the delegator. */
  address: string;
  /** staker is the address of the protocol node. */
  staker: string;
  /** amount is the amount to be undelegated from the protocol node. */
  amount: string;
  /**
   * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
   * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
   */
  estimated_undelegation_date: string;
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

function createBaseEventUpdateParams(): EventUpdateParams {
  return { old_params: undefined, new_params: undefined, payload: "" };
}

export const EventUpdateParams = {
  encode(message: EventUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.old_params !== undefined) {
      Params.encode(message.old_params, writer.uint32(10).fork()).ldelim();
    }
    if (message.new_params !== undefined) {
      Params.encode(message.new_params, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.old_params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.new_params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateParams {
    return {
      old_params: isSet(object.old_params) ? Params.fromJSON(object.old_params) : undefined,
      new_params: isSet(object.new_params) ? Params.fromJSON(object.new_params) : undefined,
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: EventUpdateParams): unknown {
    const obj: any = {};
    message.old_params !== undefined &&
      (obj.old_params = message.old_params ? Params.toJSON(message.old_params) : undefined);
    message.new_params !== undefined &&
      (obj.new_params = message.new_params ? Params.toJSON(message.new_params) : undefined);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateParams>, I>>(object: I): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.old_params = (object.old_params !== undefined && object.old_params !== null)
      ? Params.fromPartial(object.old_params)
      : undefined;
    message.new_params = (object.new_params !== undefined && object.new_params !== null)
      ? Params.fromPartial(object.new_params)
      : undefined;
    message.payload = object.payload ?? "";
    return message;
  },
};

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

function createBaseEventStartUndelegation(): EventStartUndelegation {
  return { address: "", staker: "", amount: "0", estimated_undelegation_date: "0" };
}

export const EventStartUndelegation = {
  encode(message: EventStartUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.estimated_undelegation_date !== "0") {
      writer.uint32(32).uint64(message.estimated_undelegation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStartUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStartUndelegation();
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
        case 4:
          message.estimated_undelegation_date = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventStartUndelegation {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      estimated_undelegation_date: isSet(object.estimated_undelegation_date)
        ? String(object.estimated_undelegation_date)
        : "0",
    };
  },

  toJSON(message: EventStartUndelegation): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    message.estimated_undelegation_date !== undefined &&
      (obj.estimated_undelegation_date = message.estimated_undelegation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStartUndelegation>, I>>(object: I): EventStartUndelegation {
    const message = createBaseEventStartUndelegation();
    message.address = object.address ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    message.estimated_undelegation_date = object.estimated_undelegation_date ?? "0";
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
  return { pool_id: "0", staker: "", amount: "0", slash_type: 0 };
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
    if (message.slash_type !== 0) {
      writer.uint32(32).int32(message.slash_type);
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
          message.slash_type = reader.int32() as any;
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
      slash_type: isSet(object.slash_type) ? slashTypeFromJSON(object.slash_type) : 0,
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
    message.slash_type = object.slash_type ?? 0;
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
