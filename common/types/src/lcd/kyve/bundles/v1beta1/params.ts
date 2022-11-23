/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.bundles.v1beta1";

/** Params defines the bundles module parameters. */
export interface Params {
  /** upload_timeout ... */
  upload_timeout: string;
  /** storage_cost ... */
  storage_cost: string;
  /** network_fee ... */
  network_fee: string;
  /** max_points ... */
  max_points: string;
}

function createBaseParams(): Params {
  return { upload_timeout: "0", storage_cost: "0", network_fee: "", max_points: "0" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upload_timeout !== "0") {
      writer.uint32(8).uint64(message.upload_timeout);
    }
    if (message.storage_cost !== "0") {
      writer.uint32(16).uint64(message.storage_cost);
    }
    if (message.network_fee !== "") {
      writer.uint32(26).string(message.network_fee);
    }
    if (message.max_points !== "0") {
      writer.uint32(32).uint64(message.max_points);
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
          message.upload_timeout = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.storage_cost = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.network_fee = reader.string();
          break;
        case 4:
          message.max_points = longToString(reader.uint64() as Long);
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
      upload_timeout: isSet(object.upload_timeout) ? String(object.upload_timeout) : "0",
      storage_cost: isSet(object.storage_cost) ? String(object.storage_cost) : "0",
      network_fee: isSet(object.network_fee) ? String(object.network_fee) : "",
      max_points: isSet(object.max_points) ? String(object.max_points) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.upload_timeout !== undefined && (obj.upload_timeout = message.upload_timeout);
    message.storage_cost !== undefined && (obj.storage_cost = message.storage_cost);
    message.network_fee !== undefined && (obj.network_fee = message.network_fee);
    message.max_points !== undefined && (obj.max_points = message.max_points);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.upload_timeout = object.upload_timeout ?? "0";
    message.storage_cost = object.storage_cost ?? "0";
    message.network_fee = object.network_fee ?? "";
    message.max_points = object.max_points ?? "0";
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
