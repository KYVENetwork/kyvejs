/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.delegation.v1beta1";

/** Params defines the delegation module parameters. */
export interface Params {
  /** unbonding_delegation_time ... */
  unbonding_delegation_time: string;
  /** unbonding_delegation_time ... */
  redelegation_cooldown: string;
  /** unbonding_delegation_time ... */
  redelegation_max_amount: string;
}

function createBaseParams(): Params {
  return { unbonding_delegation_time: "0", redelegation_cooldown: "0", redelegation_max_amount: "0" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbonding_delegation_time !== "0") {
      writer.uint32(8).uint64(message.unbonding_delegation_time);
    }
    if (message.redelegation_cooldown !== "0") {
      writer.uint32(16).uint64(message.redelegation_cooldown);
    }
    if (message.redelegation_max_amount !== "0") {
      writer.uint32(24).uint64(message.redelegation_max_amount);
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
          message.unbonding_delegation_time = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.redelegation_cooldown = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.redelegation_max_amount = longToString(reader.uint64() as Long);
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
      unbonding_delegation_time: isSet(object.unbonding_delegation_time)
        ? String(object.unbonding_delegation_time)
        : "0",
      redelegation_cooldown: isSet(object.redelegation_cooldown) ? String(object.redelegation_cooldown) : "0",
      redelegation_max_amount: isSet(object.redelegation_max_amount) ? String(object.redelegation_max_amount) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbonding_delegation_time !== undefined &&
      (obj.unbonding_delegation_time = message.unbonding_delegation_time);
    message.redelegation_cooldown !== undefined && (obj.redelegation_cooldown = message.redelegation_cooldown);
    message.redelegation_max_amount !== undefined && (obj.redelegation_max_amount = message.redelegation_max_amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.unbonding_delegation_time = object.unbonding_delegation_time ?? "0";
    message.redelegation_cooldown = object.redelegation_cooldown ?? "0";
    message.redelegation_max_amount = object.redelegation_max_amount ?? "0";
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
