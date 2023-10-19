/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.stakers.v1beta1";

/**
 * Staker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface Staker {
  /** address ... */
  address: string;
  /** commission ... */
  commission: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details are some additional notes the staker finds important */
  details: string;
  /** commission_rewards are the rewards in $KYVE earned through commission */
  commission_rewards: string;
}

/**
 * Valaccount gets authorized by a staker to
 * vote in a given pool by favor of the staker.
 */
export interface Valaccount {
  /**
   * pool_id defines the pool in which the address
   * is allowed to vote in.
   */
  pool_id: string;
  /** staker is the address the valaccount is voting for. */
  staker: string;
  /**
   * valaddress is the account stored on the protocol
   * node which votes for the staker in the given pool
   */
  valaddress: string;
  /**
   * When a node is inactive (does not vote at all)
   * A point is added, after a certain amount of points
   * is reached the node gets kicked out.
   */
  points: string;
  /** isLeaving indicates if a staker is leaving the given pool. */
  is_leaving: boolean;
}

/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface CommissionChangeEntry {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: string;
  /** staker is the address of the affected staker */
  staker: string;
  /**
   * commission is the new commission which will
   * be applied after the waiting time is over.
   */
  commission: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creation_date: string;
}

/**
 * LeavePoolEntry stores the information for an upcoming
 * pool leave. A staker can't leave a pool instantly.
 * Instead a the `LeaveTime` needs to be awaited.
 * If a staker start to leave a pool, it will be shown
 * in the UI to the delegators.
 */
export interface LeavePoolEntry {
  /**
   * index is needed for the queue-algorithm which
   * processes the commission changes
   */
  index: string;
  /** staker is the address of the affected staker */
  staker: string;
  /** pool_id indicates the pool the staker wants to leave */
  pool_id: string;
  /**
   * creation_date is the UNIX-timestamp in seconds
   * when the entry was created.
   */
  creation_date: string;
}

/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
  /**
   * low_index is the tail of the queue. It is the
   * oldest entry in the queue. If this entry isn't
   * due, non of the other entries is.
   */
  low_index: string;
  /**
   * high_index is the head of the queue. New entries
   * are added to the top.
   */
  high_index: string;
}

function createBaseStaker(): Staker {
  return {
    address: "",
    commission: "",
    moniker: "",
    website: "",
    identity: "",
    security_contact: "",
    details: "",
    commission_rewards: "0",
  };
}

export const Staker = {
  encode(message: Staker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(26).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(42).string(message.identity);
    }
    if (message.security_contact !== "") {
      writer.uint32(50).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(58).string(message.details);
    }
    if (message.commission_rewards !== "0") {
      writer.uint32(64).uint64(message.commission_rewards);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaker();
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

          message.commission = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.moniker = reader.string();
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

          message.identity = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.security_contact = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.details = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.commission_rewards = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Staker {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      security_contact: isSet(object.security_contact) ? globalThis.String(object.security_contact) : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
      commission_rewards: isSet(object.commission_rewards) ? globalThis.String(object.commission_rewards) : "0",
    };
  },

  toJSON(message: Staker): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
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
    if (message.commission_rewards !== "0") {
      obj.commission_rewards = message.commission_rewards;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Staker>, I>>(base?: I): Staker {
    return Staker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Staker>, I>>(object: I): Staker {
    const message = createBaseStaker();
    message.address = object.address ?? "";
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
    message.commission_rewards = object.commission_rewards ?? "0";
    return message;
  },
};

function createBaseValaccount(): Valaccount {
  return { pool_id: "0", staker: "", valaddress: "", points: "0", is_leaving: false };
}

export const Valaccount = {
  encode(message: Valaccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (message.points !== "0") {
      writer.uint32(32).uint64(message.points);
    }
    if (message.is_leaving === true) {
      writer.uint32(40).bool(message.is_leaving);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Valaccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValaccount();
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

          message.points = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.is_leaving = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Valaccount {
    return {
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? globalThis.String(object.valaddress) : "",
      points: isSet(object.points) ? globalThis.String(object.points) : "0",
      is_leaving: isSet(object.is_leaving) ? globalThis.Boolean(object.is_leaving) : false,
    };
  },

  toJSON(message: Valaccount): unknown {
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
    if (message.points !== "0") {
      obj.points = message.points;
    }
    if (message.is_leaving === true) {
      obj.is_leaving = message.is_leaving;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Valaccount>, I>>(base?: I): Valaccount {
    return Valaccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Valaccount>, I>>(object: I): Valaccount {
    const message = createBaseValaccount();
    message.pool_id = object.pool_id ?? "0";
    message.staker = object.staker ?? "";
    message.valaddress = object.valaddress ?? "";
    message.points = object.points ?? "0";
    message.is_leaving = object.is_leaving ?? false;
    return message;
  },
};

function createBaseCommissionChangeEntry(): CommissionChangeEntry {
  return { index: "0", staker: "", commission: "", creation_date: "0" };
}

export const CommissionChangeEntry = {
  encode(message: CommissionChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    if (message.creation_date !== "0") {
      writer.uint32(32).int64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionChangeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = longToString(reader.uint64() as Long);
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

          message.commission = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.creation_date = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommissionChangeEntry {
    return {
      index: isSet(object.index) ? globalThis.String(object.index) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
      creation_date: isSet(object.creation_date) ? globalThis.String(object.creation_date) : "0",
    };
  },

  toJSON(message: CommissionChangeEntry): unknown {
    const obj: any = {};
    if (message.index !== "0") {
      obj.index = message.index;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    if (message.creation_date !== "0") {
      obj.creation_date = message.creation_date;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommissionChangeEntry>, I>>(base?: I): CommissionChangeEntry {
    return CommissionChangeEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommissionChangeEntry>, I>>(object: I): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.commission = object.commission ?? "";
    message.creation_date = object.creation_date ?? "0";
    return message;
  },
};

function createBaseLeavePoolEntry(): LeavePoolEntry {
  return { index: "0", staker: "", pool_id: "0", creation_date: "0" };
}

export const LeavePoolEntry = {
  encode(message: LeavePoolEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.pool_id !== "0") {
      writer.uint32(24).uint64(message.pool_id);
    }
    if (message.creation_date !== "0") {
      writer.uint32(32).int64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeavePoolEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeavePoolEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.creation_date = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeavePoolEntry {
    return {
      index: isSet(object.index) ? globalThis.String(object.index) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      creation_date: isSet(object.creation_date) ? globalThis.String(object.creation_date) : "0",
    };
  },

  toJSON(message: LeavePoolEntry): unknown {
    const obj: any = {};
    if (message.index !== "0") {
      obj.index = message.index;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.creation_date !== "0") {
      obj.creation_date = message.creation_date;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LeavePoolEntry>, I>>(base?: I): LeavePoolEntry {
    return LeavePoolEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LeavePoolEntry>, I>>(object: I): LeavePoolEntry {
    const message = createBaseLeavePoolEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.creation_date = object.creation_date ?? "0";
    return message;
  },
};

function createBaseQueueState(): QueueState {
  return { low_index: "0", high_index: "0" };
}

export const QueueState = {
  encode(message: QueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low_index !== "0") {
      writer.uint32(8).uint64(message.low_index);
    }
    if (message.high_index !== "0") {
      writer.uint32(16).uint64(message.high_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueueState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.low_index = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.high_index = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueueState {
    return {
      low_index: isSet(object.low_index) ? globalThis.String(object.low_index) : "0",
      high_index: isSet(object.high_index) ? globalThis.String(object.high_index) : "0",
    };
  },

  toJSON(message: QueueState): unknown {
    const obj: any = {};
    if (message.low_index !== "0") {
      obj.low_index = message.low_index;
    }
    if (message.high_index !== "0") {
      obj.high_index = message.high_index;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueueState>, I>>(base?: I): QueueState {
    return QueueState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueueState>, I>>(object: I): QueueState {
    const message = createBaseQueueState();
    message.low_index = object.low_index ?? "0";
    message.high_index = object.high_index ?? "0";
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
