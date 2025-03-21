// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: kyve/funders/v1beta1/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "kyve.funders.v1beta1";

/**
 * WhitelistCoinEntry is an object containing information around a coin which
 * is allowed to be funded in pools
 */
export interface WhitelistCoinEntry {
  /**
   * coin_denom is the denom of a coin which is allowed to be funded, this value
   * needs to be unique
   */
  coin_denom: string;
  /** coin_decimals are the decimals of the coin */
  coin_decimals: number;
  /**
   * min_funding_amount is the minimum required amount of this denom that needs
   * to be funded. It is of type math.Int since a uint64 is not sufficient for a
   * coin with 18 decimals
   */
  min_funding_amount: string;
  /**
   * min_funding_amount_per_bundle is the minimum required amount of this denom
   * that needs to be funded per bundle. It is of type math.Int since a uint64
   * is not sufficient for a coin with 18 decimals
   */
  min_funding_amount_per_bundle: string;
  /**
   * coin_weight is a factor used to sort funders after their funding amounts.
   * This should be the market price of the coin in USD/coin. This value should be kept up-to-date.
   */
  coin_weight: string;
}

/** Params defines the funders module parameters. */
export interface Params {
  /** coin_whitelist is a list of coins that are allowed to fund a pool */
  coin_whitelist: WhitelistCoinEntry[];
  /**
   * Minimum ratio between the funded amount and the amount_per_bundle.
   * In other words this param ensures, that a funder provides at least
   * funding for `min_funding_multiple` bundles.
   */
  min_funding_multiple: string;
}

function createBaseWhitelistCoinEntry(): WhitelistCoinEntry {
  return {
    coin_denom: "",
    coin_decimals: 0,
    min_funding_amount: "",
    min_funding_amount_per_bundle: "",
    coin_weight: "",
  };
}

export const WhitelistCoinEntry: MessageFns<WhitelistCoinEntry> = {
  encode(message: WhitelistCoinEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.coin_denom !== "") {
      writer.uint32(10).string(message.coin_denom);
    }
    if (message.coin_decimals !== 0) {
      writer.uint32(16).uint32(message.coin_decimals);
    }
    if (message.min_funding_amount !== "") {
      writer.uint32(26).string(message.min_funding_amount);
    }
    if (message.min_funding_amount_per_bundle !== "") {
      writer.uint32(34).string(message.min_funding_amount_per_bundle);
    }
    if (message.coin_weight !== "") {
      writer.uint32(42).string(message.coin_weight);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistCoinEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistCoinEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.coin_denom = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.coin_decimals = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.min_funding_amount = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.min_funding_amount_per_bundle = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.coin_weight = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WhitelistCoinEntry {
    return {
      coin_denom: isSet(object.coin_denom) ? globalThis.String(object.coin_denom) : "",
      coin_decimals: isSet(object.coin_decimals) ? globalThis.Number(object.coin_decimals) : 0,
      min_funding_amount: isSet(object.min_funding_amount) ? globalThis.String(object.min_funding_amount) : "",
      min_funding_amount_per_bundle: isSet(object.min_funding_amount_per_bundle)
        ? globalThis.String(object.min_funding_amount_per_bundle)
        : "",
      coin_weight: isSet(object.coin_weight) ? globalThis.String(object.coin_weight) : "",
    };
  },

  toJSON(message: WhitelistCoinEntry): unknown {
    const obj: any = {};
    if (message.coin_denom !== "") {
      obj.coin_denom = message.coin_denom;
    }
    if (message.coin_decimals !== 0) {
      obj.coin_decimals = Math.round(message.coin_decimals);
    }
    if (message.min_funding_amount !== "") {
      obj.min_funding_amount = message.min_funding_amount;
    }
    if (message.min_funding_amount_per_bundle !== "") {
      obj.min_funding_amount_per_bundle = message.min_funding_amount_per_bundle;
    }
    if (message.coin_weight !== "") {
      obj.coin_weight = message.coin_weight;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WhitelistCoinEntry>, I>>(base?: I): WhitelistCoinEntry {
    return WhitelistCoinEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WhitelistCoinEntry>, I>>(object: I): WhitelistCoinEntry {
    const message = createBaseWhitelistCoinEntry();
    message.coin_denom = object.coin_denom ?? "";
    message.coin_decimals = object.coin_decimals ?? 0;
    message.min_funding_amount = object.min_funding_amount ?? "";
    message.min_funding_amount_per_bundle = object.min_funding_amount_per_bundle ?? "";
    message.coin_weight = object.coin_weight ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { coin_whitelist: [], min_funding_multiple: "0" };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.coin_whitelist) {
      WhitelistCoinEntry.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.min_funding_multiple !== "0") {
      writer.uint32(16).uint64(message.min_funding_multiple);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.coin_whitelist.push(WhitelistCoinEntry.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.min_funding_multiple = reader.uint64().toString();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      coin_whitelist: globalThis.Array.isArray(object?.coin_whitelist)
        ? object.coin_whitelist.map((e: any) => WhitelistCoinEntry.fromJSON(e))
        : [],
      min_funding_multiple: isSet(object.min_funding_multiple) ? globalThis.String(object.min_funding_multiple) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.coin_whitelist?.length) {
      obj.coin_whitelist = message.coin_whitelist.map((e) => WhitelistCoinEntry.toJSON(e));
    }
    if (message.min_funding_multiple !== "0") {
      obj.min_funding_multiple = message.min_funding_multiple;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.coin_whitelist = object.coin_whitelist?.map((e) => WhitelistCoinEntry.fromPartial(e)) || [];
    message.min_funding_multiple = object.min_funding_multiple ?? "0";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
