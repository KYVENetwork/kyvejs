/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.pool.v1beta1";

/** Params defines the pool module parameters. */
export interface Params {
  /** protocol_inflation_share ... */
  protocol_inflation_share: string;
  /** pool_inflation_payout_rate ... */
  pool_inflation_payout_rate: string;
}

function createBaseParams(): Params {
  return { protocol_inflation_share: "", pool_inflation_payout_rate: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol_inflation_share !== "") {
      writer.uint32(10).string(message.protocol_inflation_share);
    }
    if (message.pool_inflation_payout_rate !== "") {
      writer.uint32(18).string(message.pool_inflation_payout_rate);
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
          if (tag !== 10) {
            break;
          }

          message.protocol_inflation_share = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pool_inflation_payout_rate = reader.string();
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
      protocol_inflation_share: isSet(object.protocol_inflation_share)
        ? globalThis.String(object.protocol_inflation_share)
        : "",
      pool_inflation_payout_rate: isSet(object.pool_inflation_payout_rate)
        ? globalThis.String(object.pool_inflation_payout_rate)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.protocol_inflation_share !== "") {
      obj.protocol_inflation_share = message.protocol_inflation_share;
    }
    if (message.pool_inflation_payout_rate !== "") {
      obj.pool_inflation_payout_rate = message.pool_inflation_payout_rate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.protocol_inflation_share = object.protocol_inflation_share ?? "";
    message.pool_inflation_payout_rate = object.pool_inflation_payout_rate ?? "";
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
