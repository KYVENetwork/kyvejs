/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.stakers.v1beta1";

/** Params defines the stakers module parameters. */
export interface Params {
  /** vote_slash ... */
  vote_slash: string;
  /** upload_slash ... */
  upload_slash: string;
  /** timeout_slash ... */
  timeout_slash: string;
  /** commission_change_time ... */
  commission_change_time: string;
  /** commission_change_time ... */
  leave_pool_time: string;
}

function createBaseParams(): Params {
  return { vote_slash: "", upload_slash: "", timeout_slash: "", commission_change_time: "0", leave_pool_time: "0" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote_slash !== "") {
      writer.uint32(10).string(message.vote_slash);
    }
    if (message.upload_slash !== "") {
      writer.uint32(18).string(message.upload_slash);
    }
    if (message.timeout_slash !== "") {
      writer.uint32(26).string(message.timeout_slash);
    }
    if (message.commission_change_time !== "0") {
      writer.uint32(32).uint64(message.commission_change_time);
    }
    if (message.leave_pool_time !== "0") {
      writer.uint32(40).uint64(message.leave_pool_time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_slash = reader.string();
          break;
        case 2:
          message.upload_slash = reader.string();
          break;
        case 3:
          message.timeout_slash = reader.string();
          break;
        case 4:
          message.commission_change_time = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.leave_pool_time = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      vote_slash: isSet(object.vote_slash) ? String(object.vote_slash) : "",
      upload_slash: isSet(object.upload_slash) ? String(object.upload_slash) : "",
      timeout_slash: isSet(object.timeout_slash) ? String(object.timeout_slash) : "",
      commission_change_time: isSet(object.commission_change_time) ? String(object.commission_change_time) : "0",
      leave_pool_time: isSet(object.leave_pool_time) ? String(object.leave_pool_time) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.vote_slash !== undefined && (obj.vote_slash = message.vote_slash);
    message.upload_slash !== undefined && (obj.upload_slash = message.upload_slash);
    message.timeout_slash !== undefined && (obj.timeout_slash = message.timeout_slash);
    message.commission_change_time !== undefined && (obj.commission_change_time = message.commission_change_time);
    message.leave_pool_time !== undefined && (obj.leave_pool_time = message.leave_pool_time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.vote_slash = object.vote_slash ?? "";
    message.upload_slash = object.upload_slash ?? "";
    message.timeout_slash = object.timeout_slash ?? "";
    message.commission_change_time = object.commission_change_time ?? "0";
    message.leave_pool_time = object.leave_pool_time ?? "0";
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
