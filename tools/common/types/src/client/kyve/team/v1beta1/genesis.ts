/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Authority, TeamVestingAccount } from "./team";

export const protobufPackage = "kyve.team.v1beta1";

/** GenesisState defines the team module's genesis state. */
export interface GenesisState {
  /** authority ... */
  authority?:
    | Authority
    | undefined;
  /** account_list ... */
  account_list: TeamVestingAccount[];
  /** account_count ... */
  account_count: string;
}

function createBaseGenesisState(): GenesisState {
  return { authority: undefined, account_list: [], account_count: "0" };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== undefined) {
      Authority.encode(message.authority, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.account_list) {
      TeamVestingAccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.account_count !== "0") {
      writer.uint32(32).uint64(message.account_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authority = Authority.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.account_list.push(TeamVestingAccount.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.account_count = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      authority: isSet(object.authority) ? Authority.fromJSON(object.authority) : undefined,
      account_list: globalThis.Array.isArray(object?.account_list)
        ? object.account_list.map((e: any) => TeamVestingAccount.fromJSON(e))
        : [],
      account_count: isSet(object.account_count) ? globalThis.String(object.account_count) : "0",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.authority !== undefined) {
      obj.authority = Authority.toJSON(message.authority);
    }
    if (message.account_list?.length) {
      obj.account_list = message.account_list.map((e) => TeamVestingAccount.toJSON(e));
    }
    if (message.account_count !== "0") {
      obj.account_count = message.account_count;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.authority = (object.authority !== undefined && object.authority !== null)
      ? Authority.fromPartial(object.authority)
      : undefined;
    message.account_list = object.account_list?.map((e) => TeamVestingAccount.fromPartial(e)) || [];
    message.account_count = object.account_count ?? "0";
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
