/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.funders.v1beta1";

/** Params defines the funders module parameters. */
export interface Params {
  /** Minimum amount of tokens that can be funded. */
  min_funding_amount: string;
  /** Minimum amount of tokens that can be funded per bundle. */
  min_funding_amount_per_bundle: string;
  /**
   * Minimum ratio between the funded amount and the amount_per_bundle.
   * In other words this param ensures, that a funder provides at least funding for
   * `min_funding_multiple` bundles.
   */
  min_funding_multiple: string;
}

function createBaseParams(): Params {
  return { min_funding_amount: "0", min_funding_amount_per_bundle: "0", min_funding_multiple: "0" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min_funding_amount !== "0") {
      writer.uint32(8).uint64(message.min_funding_amount);
    }
    if (message.min_funding_amount_per_bundle !== "0") {
      writer.uint32(16).uint64(message.min_funding_amount_per_bundle);
    }
    if (message.min_funding_multiple !== "0") {
      writer.uint32(24).uint64(message.min_funding_multiple);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min_funding_amount = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.min_funding_amount_per_bundle = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.min_funding_multiple = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      min_funding_amount: isSet(object.min_funding_amount) ? globalThis.String(object.min_funding_amount) : "0",
      min_funding_amount_per_bundle: isSet(object.min_funding_amount_per_bundle)
        ? globalThis.String(object.min_funding_amount_per_bundle)
        : "0",
      min_funding_multiple: isSet(object.min_funding_multiple) ? globalThis.String(object.min_funding_multiple) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.min_funding_amount !== "0") {
      obj.min_funding_amount = message.min_funding_amount;
    }
    if (message.min_funding_amount_per_bundle !== "0") {
      obj.min_funding_amount_per_bundle = message.min_funding_amount_per_bundle;
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
    message.min_funding_amount = object.min_funding_amount ?? "0";
    message.min_funding_amount_per_bundle = object.min_funding_amount_per_bundle ?? "0";
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
