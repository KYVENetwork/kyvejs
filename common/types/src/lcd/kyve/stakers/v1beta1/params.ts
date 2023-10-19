/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.stakers.v1beta1";

/** Params defines the stakers module parameters. */
export interface Params {
  /** commission_change_time ... */
  commission_change_time: string;
  /** commission_change_time ... */
  leave_pool_time: string;
}

function createBaseParams(): Params {
  return { commission_change_time: "0", leave_pool_time: "0" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission_change_time !== "0") {
      writer.uint32(8).uint64(message.commission_change_time);
    }
    if (message.leave_pool_time !== "0") {
      writer.uint32(16).uint64(message.leave_pool_time);
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

          message.commission_change_time = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.leave_pool_time = longToString(reader.uint64() as Long);
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
      commission_change_time: isSet(object.commission_change_time)
        ? globalThis.String(object.commission_change_time)
        : "0",
      leave_pool_time: isSet(object.leave_pool_time) ? globalThis.String(object.leave_pool_time) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.commission_change_time !== "0") {
      obj.commission_change_time = message.commission_change_time;
    }
    if (message.leave_pool_time !== "0") {
      obj.leave_pool_time = message.leave_pool_time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.commission_change_time = object.commission_change_time ?? "0";
    message.leave_pool_time = object.leave_pool_time ?? "0";
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
