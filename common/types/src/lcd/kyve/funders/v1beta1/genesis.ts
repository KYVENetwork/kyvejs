/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Funder, Funding, FundingState } from "./funders";
import { Params } from "./params";

export const protobufPackage = "kyve.funders.v1beta1";

/** GenesisState defines the funders module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?:
    | Params
    | undefined;
  /** funder_list ... */
  funder_list: Funder[];
  /** funding_list ... */
  funding_list: Funding[];
  /** funding_state ... */
  funding_state_list: FundingState[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, funder_list: [], funding_list: [], funding_state_list: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.funder_list) {
      Funder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.funding_list) {
      Funding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.funding_state_list) {
      FundingState.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.funder_list.push(Funder.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.funding_list.push(Funding.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.funding_state_list.push(FundingState.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      funder_list: globalThis.Array.isArray(object?.funder_list)
        ? object.funder_list.map((e: any) => Funder.fromJSON(e))
        : [],
      funding_list: globalThis.Array.isArray(object?.funding_list)
        ? object.funding_list.map((e: any) => Funding.fromJSON(e))
        : [],
      funding_state_list: globalThis.Array.isArray(object?.funding_state_list)
        ? object.funding_state_list.map((e: any) => FundingState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.funder_list?.length) {
      obj.funder_list = message.funder_list.map((e) => Funder.toJSON(e));
    }
    if (message.funding_list?.length) {
      obj.funding_list = message.funding_list.map((e) => Funding.toJSON(e));
    }
    if (message.funding_state_list?.length) {
      obj.funding_state_list = message.funding_state_list.map((e) => FundingState.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.funder_list = object.funder_list?.map((e) => Funder.fromPartial(e)) || [];
    message.funding_list = object.funding_list?.map((e) => Funding.fromPartial(e)) || [];
    message.funding_state_list = object.funding_state_list?.map((e) => FundingState.fromPartial(e)) || [];
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
