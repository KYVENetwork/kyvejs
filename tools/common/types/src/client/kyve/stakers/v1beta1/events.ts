/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "kyve.stakers.v1beta1";

/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  old_params?:
    | Params
    | undefined;
  /** new_params is the module's new parameters. */
  new_params?:
    | Params
    | undefined;
  /** payload is the parameter updates that were performed. */
  payload: string;
}

/**
 * EventCreateStaker is an event emitted when a protocol node stakes in a pool.
 * emitted_by: MsgCreateStaker
 */
export interface EventCreateStaker {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
  /** commission */
  commission: string;
}

/**
 * EventUpdateMetadata is an event emitted when a protocol node updates their metadata.
 * emitted_by: MsgUpdateMetadata
 */
export interface EventUpdateMetadata {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity ... */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
}

/**
 * EventUpdateCommission ...
 * emitted_by: EndBlock
 */
export interface EventUpdateCommission {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** commission ... */
  commission: string;
}

/**
 * EventClaimCommissionRewards ...
 * emitted_by: MsgClaimCommissionRewards
 */
export interface EventClaimCommissionRewards {
  /** staker is the account address of the protocol node. */
  staker: string;
  /** amount ... */
  amount: string;
}

/**
 * EventJoinPool ...
 * emitted_by: MsgJoinPool
 */
export interface EventJoinPool {
  /** pool_id is the pool the staker joined */
  pool_id: string;
  /** staker is the address of the staker */
  staker: string;
  /**
   * valaddress is the address of the protocol node which
   * votes in favor of the staker
   */
  valaddress: string;
  /** amount is the amount of funds transferred to the valaddress */
  amount: string;
}

/**
 * EventLeavePool ...
 * emitted_by: EndBlock
 */
export interface EventLeavePool {
  /** pool_id ... */
  pool_id: string;
  /** staker ... */
  staker: string;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.old_params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.new_params = Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateParams {
    return {
      old_params: isSet(object.old_params) ? Params.fromJSON(object.old_params) : undefined,
      new_params: isSet(object.new_params) ? Params.fromJSON(object.new_params) : undefined,
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: EventUpdateParams): unknown {
    const obj: any = {};
    if (message.old_params !== undefined) {
      obj.old_params = Params.toJSON(message.old_params);
    }
    if (message.new_params !== undefined) {
      obj.new_params = Params.toJSON(message.new_params);
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateParams>, I>>(base?: I): EventUpdateParams {
    return EventUpdateParams.fromPartial(base ?? ({} as any));
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

function createBaseEventCreateStaker(): EventCreateStaker {
  return { staker: "", amount: "0", commission: "" };
}

export const EventCreateStaker = {
  encode(message: EventCreateStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateStaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commission = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreateStaker {
    return {
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
    };
  },

  toJSON(message: EventCreateStaker): unknown {
    const obj: any = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventCreateStaker>, I>>(base?: I): EventCreateStaker {
    return EventCreateStaker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventCreateStaker>, I>>(object: I): EventCreateStaker {
    const message = createBaseEventCreateStaker();
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    message.commission = object.commission ?? "";
    return message;
  },
};

function createBaseEventUpdateMetadata(): EventUpdateMetadata {
  return { staker: "", moniker: "", website: "", identity: "", security_contact: "", details: "" };
}

export const EventUpdateMetadata = {
  encode(message: EventUpdateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.security_contact !== "") {
      writer.uint32(42).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.moniker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.website = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.security_contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.details = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateMetadata {
    return {
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      security_contact: isSet(object.security_contact) ? globalThis.String(object.security_contact) : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
    };
  },

  toJSON(message: EventUpdateMetadata): unknown {
    const obj: any = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.security_contact !== "") {
      obj.security_contact = message.security_contact;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateMetadata>, I>>(base?: I): EventUpdateMetadata {
    return EventUpdateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateMetadata>, I>>(object: I): EventUpdateMetadata {
    const message = createBaseEventUpdateMetadata();
    message.staker = object.staker ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseEventUpdateCommission(): EventUpdateCommission {
  return { staker: "", commission: "" };
}

export const EventUpdateCommission = {
  encode(message: EventUpdateCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCommission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commission = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCommission {
    return {
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
    };
  },

  toJSON(message: EventUpdateCommission): unknown {
    const obj: any = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateCommission>, I>>(base?: I): EventUpdateCommission {
    return EventUpdateCommission.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventUpdateCommission>, I>>(object: I): EventUpdateCommission {
    const message = createBaseEventUpdateCommission();
    message.staker = object.staker ?? "";
    message.commission = object.commission ?? "";
    return message;
  },
};

function createBaseEventClaimCommissionRewards(): EventClaimCommissionRewards {
  return { staker: "", amount: "0" };
}

export const EventClaimCommissionRewards = {
  encode(message: EventClaimCommissionRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimCommissionRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimCommissionRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventClaimCommissionRewards {
    return {
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: EventClaimCommissionRewards): unknown {
    const obj: any = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventClaimCommissionRewards>, I>>(base?: I): EventClaimCommissionRewards {
    return EventClaimCommissionRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventClaimCommissionRewards>, I>>(object: I): EventClaimCommissionRewards {
    const message = createBaseEventClaimCommissionRewards();
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventJoinPool(): EventJoinPool {
  return { pool_id: "0", staker: "", valaddress: "", amount: "0" };
}

export const EventJoinPool = {
  encode(message: EventJoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventJoinPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.valaddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventJoinPool {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? globalThis.String(object.valaddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: EventJoinPool): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.valaddress !== "") {
      obj.valaddress = message.valaddress;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventJoinPool>, I>>(base?: I): EventJoinPool {
    return EventJoinPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventJoinPool>, I>>(object: I): EventJoinPool {
    const message = createBaseEventJoinPool();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.valaddress = object.valaddress ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventLeavePool(): EventLeavePool {
  return { pool_id: "0", staker: "" };
}

export const EventLeavePool = {
  encode(message: EventLeavePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeavePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeavePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventLeavePool {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },

  toJSON(message: EventLeavePool): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventLeavePool>, I>>(base?: I): EventLeavePool {
    return EventLeavePool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventLeavePool>, I>>(object: I): EventLeavePool {
    const message = createBaseEventLeavePool();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
