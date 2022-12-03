/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { BundleProposal, FinalizedBundle } from "./bundles";
import { Params } from "./params";

export const protobufPackage = "kyve.bundles.v1beta1";

/** GenesisState defines the bundles module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** bundle_proposal_list ... */
  bundle_proposal_list: BundleProposal[];
  /** finalized_bundle_list ... */
  finalized_bundle_list: FinalizedBundle[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, bundle_proposal_list: [], finalized_bundle_list: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bundle_proposal_list) {
      BundleProposal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.finalized_bundle_list) {
      FinalizedBundle.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.bundle_proposal_list.push(BundleProposal.decode(reader, reader.uint32()));
          break;
        case 3:
          message.finalized_bundle_list.push(FinalizedBundle.decode(reader, reader.uint32()));
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
      bundle_proposal_list: Array.isArray(object?.bundle_proposal_list)
        ? object.bundle_proposal_list.map((e: any) => BundleProposal.fromJSON(e))
        : [],
      finalized_bundle_list: Array.isArray(object?.finalized_bundle_list)
        ? object.finalized_bundle_list.map((e: any) => FinalizedBundle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.bundle_proposal_list) {
      obj.bundle_proposal_list = message.bundle_proposal_list.map((e) => e ? BundleProposal.toJSON(e) : undefined);
    } else {
      obj.bundle_proposal_list = [];
    }
    if (message.finalized_bundle_list) {
      obj.finalized_bundle_list = message.finalized_bundle_list.map((e) => e ? FinalizedBundle.toJSON(e) : undefined);
    } else {
      obj.finalized_bundle_list = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.bundle_proposal_list = object.bundle_proposal_list?.map((e) => BundleProposal.fromPartial(e)) || [];
    message.finalized_bundle_list = object.finalized_bundle_list?.map((e) => FinalizedBundle.fromPartial(e)) || [];
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
