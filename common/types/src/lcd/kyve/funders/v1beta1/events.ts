/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.funders.v1beta1";

/**
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunder {
  /** address is the account address of the funder. */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}

/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunder {
  /** address is the account address of the funder. */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}

/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has funded */
  amount: string;
  /** amount_per_bundle is the amount in ukyve the funder has funded per bundle */
  amount_per_bundle: string;
}

/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the funder has defunded */
  amount: string;
}

/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
}

function createBaseEventCreateFunder(): EventCreateFunder {
  return { address: "", moniker: "", identity: "", website: "", contact: "", description: "" };
}

export const EventCreateFunder = {
  encode(message: EventCreateFunder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateFunder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

          message.identity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventCreateFunder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: EventCreateFunder): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.contact !== "") {
      obj.contact = message.contact;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventCreateFunder>, I>>(base?: I): EventCreateFunder {
    return EventCreateFunder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateFunder>, I>>(object: I): EventCreateFunder {
    const message = createBaseEventCreateFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseEventUpdateFunder(): EventUpdateFunder {
  return { address: "", moniker: "", identity: "", website: "", contact: "", description: "" };
}

export const EventUpdateFunder = {
  encode(message: EventUpdateFunder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateFunder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

          message.identity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventUpdateFunder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: EventUpdateFunder): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.contact !== "") {
      obj.contact = message.contact;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventUpdateFunder>, I>>(base?: I): EventUpdateFunder {
    return EventUpdateFunder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateFunder>, I>>(object: I): EventUpdateFunder {
    const message = createBaseEventUpdateFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseEventFundPool(): EventFundPool {
  return { pool_id: "0", address: "", amount: "0", amount_per_bundle: "0" };
}

export const EventFundPool = {
  encode(message: EventFundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amount_per_bundle !== "0") {
      writer.uint32(32).uint64(message.amount_per_bundle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFundPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFundPool();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount_per_bundle = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventFundPool {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      amount_per_bundle: isSet(object.amount_per_bundle) ? String(object.amount_per_bundle) : "0",
    };
  },

  toJSON(message: EventFundPool): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.amount_per_bundle !== "0") {
      obj.amount_per_bundle = message.amount_per_bundle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventFundPool>, I>>(base?: I): EventFundPool {
    return EventFundPool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventFundPool>, I>>(object: I): EventFundPool {
    const message = createBaseEventFundPool();
    message.pool_id = object.pool_id ?? "0";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "0";
    message.amount_per_bundle = object.amount_per_bundle ?? "0";
    return message;
  },
};

function createBaseEventDefundPool(): EventDefundPool {
  return { pool_id: "0", address: "", amount: "0" };
}

export const EventDefundPool = {
  encode(message: EventDefundPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDefundPool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDefundPool();
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

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): EventDefundPool {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventDefundPool): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventDefundPool>, I>>(base?: I): EventDefundPool {
    return EventDefundPool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventDefundPool>, I>>(object: I): EventDefundPool {
    const message = createBaseEventDefundPool();
    message.pool_id = object.pool_id ?? "0";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventPoolOutOfFunds(): EventPoolOutOfFunds {
  return { pool_id: "0" };
}

export const EventPoolOutOfFunds = {
  encode(message: EventPoolOutOfFunds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolOutOfFunds {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPoolOutOfFunds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventPoolOutOfFunds {
    return { pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0" };
  },

  toJSON(message: EventPoolOutOfFunds): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventPoolOutOfFunds>, I>>(base?: I): EventPoolOutOfFunds {
    return EventPoolOutOfFunds.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EventPoolOutOfFunds>, I>>(object: I): EventPoolOutOfFunds {
    const message = createBaseEventPoolOutOfFunds();
    message.pool_id = object.pool_id ?? "0";
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
