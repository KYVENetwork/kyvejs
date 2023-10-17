/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";

export const protobufPackage = "tendermint.types";

export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator | undefined;
  total_voting_power: string;
}

export interface Validator {
  address: Uint8Array;
  pub_key?: PublicKey | undefined;
  voting_power: string;
  proposer_priority: string;
}

export interface SimpleValidator {
  pub_key?: PublicKey | undefined;
  voting_power: string;
}

function createBaseValidatorSet(): ValidatorSet {
  return { validators: [], proposer: undefined, total_voting_power: "0" };
}

export const ValidatorSet = {
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (message.total_voting_power !== "0") {
      writer.uint32(24).int64(message.total_voting_power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(Validator.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposer = Validator.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_voting_power = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? String(object.total_voting_power) : "0",
    };
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};
    if (message.validators?.length) {
      obj.validators = message.validators.map((e) => Validator.toJSON(e));
    }
    if (message.proposer !== undefined) {
      obj.proposer = Validator.toJSON(message.proposer);
    }
    if (message.total_voting_power !== "0") {
      obj.total_voting_power = message.total_voting_power;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorSet>, I>>(base?: I): ValidatorSet {
    return ValidatorSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSet>, I>>(object: I): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.proposer = (object.proposer !== undefined && object.proposer !== null)
      ? Validator.fromPartial(object.proposer)
      : undefined;
    message.total_voting_power = object.total_voting_power ?? "0";
    return message;
  },
};

function createBaseValidator(): Validator {
  return { address: new Uint8Array(0), pub_key: undefined, voting_power: "0", proposer_priority: "0" };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (message.voting_power !== "0") {
      writer.uint32(24).int64(message.voting_power);
    }
    if (message.proposer_priority !== "0") {
      writer.uint32(32).int64(message.proposer_priority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pub_key = PublicKey.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.voting_power = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.proposer_priority = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? String(object.voting_power) : "0",
      proposer_priority: isSet(object.proposer_priority) ? String(object.proposer_priority) : "0",
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.pub_key !== undefined) {
      obj.pub_key = PublicKey.toJSON(message.pub_key);
    }
    if (message.voting_power !== "0") {
      obj.voting_power = message.voting_power;
    }
    if (message.proposer_priority !== "0") {
      obj.proposer_priority = message.proposer_priority;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
    return Validator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array(0);
    message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
      ? PublicKey.fromPartial(object.pub_key)
      : undefined;
    message.voting_power = object.voting_power ?? "0";
    message.proposer_priority = object.proposer_priority ?? "0";
    return message;
  },
};

function createBaseSimpleValidator(): SimpleValidator {
  return { pub_key: undefined, voting_power: "0" };
}

export const SimpleValidator = {
  encode(message: SimpleValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.voting_power !== "0") {
      writer.uint32(16).int64(message.voting_power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pub_key = PublicKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.voting_power = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimpleValidator {
    return {
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? String(object.voting_power) : "0",
    };
  },

  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    if (message.pub_key !== undefined) {
      obj.pub_key = PublicKey.toJSON(message.pub_key);
    }
    if (message.voting_power !== "0") {
      obj.voting_power = message.voting_power;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SimpleValidator>, I>>(base?: I): SimpleValidator {
    return SimpleValidator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SimpleValidator>, I>>(object: I): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pub_key = (object.pub_key !== undefined && object.pub_key !== null)
      ? PublicKey.fromPartial(object.pub_key)
      : undefined;
    message.voting_power = object.voting_power ?? "0";
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
