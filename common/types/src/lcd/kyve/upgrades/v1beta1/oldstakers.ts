/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.upgrades.v1beta1";

/**
 * OldStaker contains all metadata for a staker
 * Every address can only create one staker (itself)
 */
export interface OldStaker {
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

/**
 * CommissionChangeEntry stores the information for an
 * upcoming commission change. A commission change is never
 * instant, so delegators have time to redelegate in case
 * they don't agree with the new commission.
 */
export interface OldCommissionChangeEntry {
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

function createBaseOldStaker(): OldStaker {
  return { address: "", commission: "", moniker: "", website: "", logo: "" };
}

export const OldStaker = {
  encode(message: OldStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OldStaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOldStaker();
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

  fromJSON(object: any): OldStaker {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
    };
  },

  toJSON(message: OldStaker): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OldStaker>, I>>(object: I): OldStaker {
    const message = createBaseOldStaker();
    message.address = object.address ?? "";
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
    return message;
  },
};

function createBaseOldCommissionChangeEntry(): OldCommissionChangeEntry {
  return { index: "0", staker: "", commission: "", creation_date: "0" };
}

export const OldCommissionChangeEntry = {
  encode(message: OldCommissionChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OldCommissionChangeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOldCommissionChangeEntry();
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

  fromJSON(object: any): OldCommissionChangeEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: OldCommissionChangeEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.commission !== undefined && (obj.commission = message.commission);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OldCommissionChangeEntry>, I>>(object: I): OldCommissionChangeEntry {
    const message = createBaseOldCommissionChangeEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.commission = object.commission ?? "";
    message.creation_date = object.creation_date ?? "0";
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
