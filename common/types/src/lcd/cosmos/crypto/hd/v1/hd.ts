/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.crypto.hd.v1";

/** Since: cosmos-sdk 0.46 */

/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44Params {
  /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
  purpose: number;
  /** coin_type is a constant that improves privacy */
  coin_type: number;
  /** account splits the key space into independent user identities */
  account: number;
  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   */
  change: boolean;
  /** address_index is used as child index in BIP32 derivation */
  address_index: number;
}

function createBaseBIP44Params(): BIP44Params {
  return { purpose: 0, coin_type: 0, account: 0, change: false, address_index: 0 };
}

export const BIP44Params = {
  encode(message: BIP44Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purpose !== 0) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coin_type !== 0) {
      writer.uint32(16).uint32(message.coin_type);
    }
    if (message.account !== 0) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change === true) {
      writer.uint32(32).bool(message.change);
    }
    if (message.address_index !== 0) {
      writer.uint32(40).uint32(message.address_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BIP44Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBIP44Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.purpose = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.coin_type = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.account = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.change = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.address_index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BIP44Params {
    return {
      purpose: isSet(object.purpose) ? Number(object.purpose) : 0,
      coin_type: isSet(object.coin_type) ? Number(object.coin_type) : 0,
      account: isSet(object.account) ? Number(object.account) : 0,
      change: isSet(object.change) ? Boolean(object.change) : false,
      address_index: isSet(object.address_index) ? Number(object.address_index) : 0,
    };
  },

  toJSON(message: BIP44Params): unknown {
    const obj: any = {};
    if (message.purpose !== 0) {
      obj.purpose = Math.round(message.purpose);
    }
    if (message.coin_type !== 0) {
      obj.coin_type = Math.round(message.coin_type);
    }
    if (message.account !== 0) {
      obj.account = Math.round(message.account);
    }
    if (message.change === true) {
      obj.change = message.change;
    }
    if (message.address_index !== 0) {
      obj.address_index = Math.round(message.address_index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BIP44Params>, I>>(base?: I): BIP44Params {
    return BIP44Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BIP44Params>, I>>(object: I): BIP44Params {
    const message = createBaseBIP44Params();
    message.purpose = object.purpose ?? 0;
    message.coin_type = object.coin_type ?? 0;
    message.account = object.account ?? 0;
    message.change = object.change ?? false;
    message.address_index = object.address_index ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
