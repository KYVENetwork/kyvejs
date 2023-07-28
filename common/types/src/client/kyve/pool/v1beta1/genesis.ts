/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Pool } from "./pool";

export const protobufPackage = "kyve.pool.v1beta1";

/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
  /** params ... */
  params?: Params;
  /** pool_list ... */
  pool_list: Pool[];
  /** pool_count ... */
  pool_count: string;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, pool_list: [], pool_count: "0" };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pool_list) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pool_count !== "0") {
      writer.uint32(24).uint64(message.pool_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.pool_list.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pool_count = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pool_list: Array.isArray(object?.pool_list) ? object.pool_list.map((e: any) => Pool.fromJSON(e)) : [],
      pool_count: isSet(object.pool_count) ? String(object.pool_count) : "0",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.pool_list) {
      obj.pool_list = message.pool_list.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool_list = [];
    }
    message.pool_count !== undefined && (obj.pool_count = message.pool_count);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.pool_list = object.pool_list?.map((e) => Pool.fromPartial(e)) || [];
    message.pool_count = object.pool_count ?? "0";
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
