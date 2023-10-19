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
  /** vote_slash ... */
  vote_slash: string;
  /** upload_slash ... */
  upload_slash: string;
  /** timeout_slash ... */
  timeout_slash: string;
}

function createBaseParams(): Params {
  return {
    unbonding_delegation_time: "0",
    redelegation_cooldown: "0",
    redelegation_max_amount: "0",
    vote_slash: "",
    upload_slash: "",
    timeout_slash: "",
  };
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
    if (message.vote_slash !== "") {
      writer.uint32(34).string(message.vote_slash);
    }
    if (message.upload_slash !== "") {
      writer.uint32(42).string(message.upload_slash);
    }
    if (message.timeout_slash !== "") {
      writer.uint32(50).string(message.timeout_slash);
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

          message.unbonding_delegation_time = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.redelegation_cooldown = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.redelegation_max_amount = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vote_slash = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.upload_slash = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timeout_slash = reader.string();
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
      unbonding_delegation_time: isSet(object.unbonding_delegation_time)
        ? globalThis.String(object.unbonding_delegation_time)
        : "0",
      redelegation_cooldown: isSet(object.redelegation_cooldown)
        ? globalThis.String(object.redelegation_cooldown)
        : "0",
      redelegation_max_amount: isSet(object.redelegation_max_amount)
        ? globalThis.String(object.redelegation_max_amount)
        : "0",
      vote_slash: isSet(object.vote_slash) ? globalThis.String(object.vote_slash) : "",
      upload_slash: isSet(object.upload_slash) ? globalThis.String(object.upload_slash) : "",
      timeout_slash: isSet(object.timeout_slash) ? globalThis.String(object.timeout_slash) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.unbonding_delegation_time !== "0") {
      obj.unbonding_delegation_time = message.unbonding_delegation_time;
    }
    if (message.redelegation_cooldown !== "0") {
      obj.redelegation_cooldown = message.redelegation_cooldown;
    }
    if (message.redelegation_max_amount !== "0") {
      obj.redelegation_max_amount = message.redelegation_max_amount;
    }
    if (message.vote_slash !== "") {
      obj.vote_slash = message.vote_slash;
    }
    if (message.upload_slash !== "") {
      obj.upload_slash = message.upload_slash;
    }
    if (message.timeout_slash !== "") {
      obj.timeout_slash = message.timeout_slash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.unbonding_delegation_time = object.unbonding_delegation_time ?? "0";
    message.redelegation_cooldown = object.redelegation_cooldown ?? "0";
    message.redelegation_max_amount = object.redelegation_max_amount ?? "0";
    message.vote_slash = object.vote_slash ?? "";
    message.upload_slash = object.upload_slash ?? "";
    message.timeout_slash = object.timeout_slash ?? "";
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
