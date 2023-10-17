/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.funders.v1beta1";

/** Funder is the object which holds info about a single pool funder */
export interface Funder {
  /** address ... */
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
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface Funding {
  /** funder_id is the id of the funder */
  funder_address: string;
  /** pool_id is the id of the pool this funding is for */
  pool_id: string;
  /** amount is the amount of funds in ukyve the funder has left */
  amount: string;
  /** amount_per_bundle is the amount of funds in ukyve the funder pays per bundle */
  amount_per_bundle: string;
  /** total_funded is the total amount of funds in ukyve the funder has funded */
  total_funded: string;
}

/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingState {
  /** pool_id is the id of the pool this funding is for */
  pool_id: string;
  /** active_funder_addresses is the list of all active fundings */
  active_funder_addresses: string[];
  /** total_amount is the total amount of funds in ukyve the pool has from all fundings */
  total_amount: string;
}

function createBaseFunder(): Funder {
  return { address: "", moniker: "", identity: "", website: "", contact: "", description: "" };
}

export const Funder = {
  encode(message: Funder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Funder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunder();
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

  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: Funder): unknown {
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

  create<I extends Exact<DeepPartial<Funder>, I>>(base?: I): Funder {
    return Funder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Funder>, I>>(object: I): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseFunding(): Funding {
  return { funder_address: "", pool_id: "0", amount: "0", amount_per_bundle: "0", total_funded: "0" };
}

export const Funding = {
  encode(message: Funding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funder_address !== "") {
      writer.uint32(10).string(message.funder_address);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amount_per_bundle !== "0") {
      writer.uint32(32).uint64(message.amount_per_bundle);
    }
    if (message.total_funded !== "0") {
      writer.uint32(40).uint64(message.total_funded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.funder_address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
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
        case 5:
          if (tag !== 40) {
            break;
          }

          message.total_funded = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Funding {
    return {
      funder_address: isSet(object.funder_address) ? String(object.funder_address) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      amount_per_bundle: isSet(object.amount_per_bundle) ? String(object.amount_per_bundle) : "0",
      total_funded: isSet(object.total_funded) ? String(object.total_funded) : "0",
    };
  },

  toJSON(message: Funding): unknown {
    const obj: any = {};
    if (message.funder_address !== "") {
      obj.funder_address = message.funder_address;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.amount_per_bundle !== "0") {
      obj.amount_per_bundle = message.amount_per_bundle;
    }
    if (message.total_funded !== "0") {
      obj.total_funded = message.total_funded;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Funding>, I>>(base?: I): Funding {
    return Funding.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Funding>, I>>(object: I): Funding {
    const message = createBaseFunding();
    message.funder_address = object.funder_address ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amount = object.amount ?? "0";
    message.amount_per_bundle = object.amount_per_bundle ?? "0";
    message.total_funded = object.total_funded ?? "0";
    return message;
  },
};

function createBaseFundingState(): FundingState {
  return { pool_id: "0", active_funder_addresses: [], total_amount: "0" };
}

export const FundingState = {
  encode(message: FundingState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    for (const v of message.active_funder_addresses) {
      writer.uint32(18).string(v!);
    }
    if (message.total_amount !== "0") {
      writer.uint32(24).uint64(message.total_amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingState();
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

          message.active_funder_addresses.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FundingState {
    return {
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      active_funder_addresses: Array.isArray(object?.active_funder_addresses)
        ? object.active_funder_addresses.map((e: any) => String(e))
        : [],
      total_amount: isSet(object.total_amount) ? String(object.total_amount) : "0",
    };
  },

  toJSON(message: FundingState): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.active_funder_addresses?.length) {
      obj.active_funder_addresses = message.active_funder_addresses;
    }
    if (message.total_amount !== "0") {
      obj.total_amount = message.total_amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FundingState>, I>>(base?: I): FundingState {
    return FundingState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FundingState>, I>>(object: I): FundingState {
    const message = createBaseFundingState();
    message.pool_id = object.pool_id ?? "0";
    message.active_funder_addresses = object.active_funder_addresses?.map((e) => e) || [];
    message.total_amount = object.total_amount ?? "0";
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
