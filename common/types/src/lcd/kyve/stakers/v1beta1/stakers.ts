/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.stakers.v1beta1";

/** SlashType ... */
export enum SlashType {
  /** SLASH_TYPE_UNSPECIFIED - SLASH_TYPE_UNSPECIFIED ... */
  SLASH_TYPE_UNSPECIFIED = "SLASH_TYPE_UNSPECIFIED",
  /** SLASH_TYPE_TIMEOUT - SLASH_TYPE_TIMEOUT ... */
  SLASH_TYPE_TIMEOUT = "SLASH_TYPE_TIMEOUT",
  /** SLASH_TYPE_VOTE - SLASH_TYPE_VOTE ... */
  SLASH_TYPE_VOTE = "SLASH_TYPE_VOTE",
  /** SLASH_TYPE_UPLOAD - SLASH_TYPE_UPLOAD ... */
  SLASH_TYPE_UPLOAD = "SLASH_TYPE_UPLOAD",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function slashTypeFromJSON(object: any): SlashType {
  switch (object) {
    case 0:
    case "SLASH_TYPE_UNSPECIFIED":
      return SlashType.SLASH_TYPE_UNSPECIFIED;
    case 1:
    case "SLASH_TYPE_TIMEOUT":
      return SlashType.SLASH_TYPE_TIMEOUT;
    case 2:
    case "SLASH_TYPE_VOTE":
      return SlashType.SLASH_TYPE_VOTE;
    case 3:
    case "SLASH_TYPE_UPLOAD":
      return SlashType.SLASH_TYPE_UPLOAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SlashType.UNRECOGNIZED;
  }
}

export function slashTypeToJSON(object: SlashType): string {
  switch (object) {
    case SlashType.SLASH_TYPE_UNSPECIFIED:
      return "SLASH_TYPE_UNSPECIFIED";
    case SlashType.SLASH_TYPE_TIMEOUT:
      return "SLASH_TYPE_TIMEOUT";
    case SlashType.SLASH_TYPE_VOTE:
      return "SLASH_TYPE_VOTE";
    case SlashType.SLASH_TYPE_UPLOAD:
      return "SLASH_TYPE_UPLOAD";
    case SlashType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function slashTypeToNumber(object: SlashType): number {
  switch (object) {
    case SlashType.SLASH_TYPE_UNSPECIFIED:
      return 0;
    case SlashType.SLASH_TYPE_TIMEOUT:
      return 1;
    case SlashType.SLASH_TYPE_VOTE:
      return 2;
    case SlashType.SLASH_TYPE_UPLOAD:
      return 3;
    case SlashType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Staker ... */
export interface Staker {
  /** address ... */
  address: string;
  /** commission ... */
  commission: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** logo ... */
  logo: string;
}

/** Valaccount ... */
export interface Valaccount {
  /** pool_id ... */
  pool_id: string;
  /** staker ... */
  staker: string;
  /** valaddress ... */
  valaddress: string;
  /** points ... */
  points: string;
  /** isLeaving ... */
  is_leaving: boolean;
}

/** CommissionChangeEntry ... */
export interface CommissionChangeEntry {
  /** index ... */
  index: string;
  /** staker ... */
  staker: string;
  /** commission ... */
  commission: string;
  /** creation_date ... */
  creation_date: string;
}

/** UnbondingStakeEntry ... */
export interface UnbondingStakeEntry {
  /** index ... */
  index: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
  /** creation_date ... */
  creation_date: string;
}

/** LeavePoolEntry ... */
export interface LeavePoolEntry {
  /** index ... */
  index: string;
  /** staker ... */
  staker: string;
  /** pool_id ... */
  pool_id: string;
  /** creation_date ... */
  creation_date: string;
}

/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface QueueState {
  /** low_index ... */
  low_index: string;
  /** high_index ... */
  high_index: string;
}

function createBaseStaker(): Staker {
  return { address: "", commission: "", moniker: "", website: "", logo: "" };
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
    if (message.logo !== "") {
      writer.uint32(42).string(message.logo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.commission = reader.string();
          break;
        case 3:
          message.moniker = reader.string();
          break;
        case 4:
          message.website = reader.string();
          break;
        case 5:
          message.logo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Staker {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
    };
  },

  toJSON(message: Staker): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Staker>, I>>(object: I): Staker {
    const message = createBaseStaker();
    message.address = object.address ?? "";
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValaccount();
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
          message.valaddress = reader.string();
          break;
        case 4:
          message.points = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.is_leaving = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Valaccount {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      points: isSet(object.points) ? String(object.points) : "0",
      is_leaving: isSet(object.is_leaving) ? Boolean(object.is_leaving) : false,
    };
  },

  toJSON(message: Valaccount): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.valaddress !== undefined && (obj.valaddress = message.valaddress);
    message.points !== undefined && (obj.points = message.points);
    message.is_leaving !== undefined && (obj.is_leaving = message.is_leaving);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionChangeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.commission = reader.string();
          break;
        case 4:
          message.creation_date = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommissionChangeEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: CommissionChangeEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.commission !== undefined && (obj.commission = message.commission);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
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

function createBaseUnbondingStakeEntry(): UnbondingStakeEntry {
  return { index: "0", staker: "", amount: "0", creation_date: "0" };
}

export const UnbondingStakeEntry = {
  encode(message: UnbondingStakeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.creation_date !== "0") {
      writer.uint32(32).int64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingStakeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingStakeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.creation_date = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingStakeEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: UnbondingStakeEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingStakeEntry>, I>>(object: I): UnbondingStakeEntry {
    const message = createBaseUnbondingStakeEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeavePoolEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.creation_date = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeavePoolEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: LeavePoolEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low_index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.high_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueueState {
    return {
      low_index: isSet(object.low_index) ? String(object.low_index) : "0",
      high_index: isSet(object.high_index) ? String(object.high_index) : "0",
    };
  },

  toJSON(message: QueueState): unknown {
    const obj: any = {};
    message.low_index !== undefined && (obj.low_index = message.low_index);
    message.high_index !== undefined && (obj.high_index = message.high_index);
    return obj;
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
