/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { BundleProposal, BundleVersionMap, FinalizedBundle, RoundRobinProgress } from "./bundles";
import { Params } from "./params";

export const protobufPackage = "kyve.bundles.v1beta1";

/** GenesisState defines the bundles module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?:
    | Params
    | undefined;
  /** bundle_proposal_list ... */
  bundle_proposal_list: BundleProposal[];
  /** finalized_bundle_list ... */
  finalized_bundle_list: FinalizedBundle[];
  /** round_robin_progress_list ... */
  round_robin_progress_list: RoundRobinProgress[];
  /** bundle_version_map ... */
  bundle_version_map?: BundleVersionMap | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bundle_proposal_list: [],
    finalized_bundle_list: [],
    round_robin_progress_list: [],
    bundle_version_map: undefined,
  };
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
    for (const v of message.round_robin_progress_list) {
      RoundRobinProgress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.bundle_version_map !== undefined) {
      BundleVersionMap.encode(message.bundle_version_map, writer.uint32(42).fork()).ldelim();
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

          message.bundle_proposal_list.push(BundleProposal.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.finalized_bundle_list.push(FinalizedBundle.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.round_robin_progress_list.push(RoundRobinProgress.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bundle_version_map = BundleVersionMap.decode(reader, reader.uint32());
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
      bundle_proposal_list: globalThis.Array.isArray(object?.bundle_proposal_list)
        ? object.bundle_proposal_list.map((e: any) => BundleProposal.fromJSON(e))
        : [],
      finalized_bundle_list: globalThis.Array.isArray(object?.finalized_bundle_list)
        ? object.finalized_bundle_list.map((e: any) => FinalizedBundle.fromJSON(e))
        : [],
      round_robin_progress_list: globalThis.Array.isArray(object?.round_robin_progress_list)
        ? object.round_robin_progress_list.map((e: any) => RoundRobinProgress.fromJSON(e))
        : [],
      bundle_version_map: isSet(object.bundle_version_map)
        ? BundleVersionMap.fromJSON(object.bundle_version_map)
        : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.bundle_proposal_list?.length) {
      obj.bundle_proposal_list = message.bundle_proposal_list.map((e) => BundleProposal.toJSON(e));
    }
    if (message.finalized_bundle_list?.length) {
      obj.finalized_bundle_list = message.finalized_bundle_list.map((e) => FinalizedBundle.toJSON(e));
    }
    if (message.round_robin_progress_list?.length) {
      obj.round_robin_progress_list = message.round_robin_progress_list.map((e) => RoundRobinProgress.toJSON(e));
    }
    if (message.bundle_version_map !== undefined) {
      obj.bundle_version_map = BundleVersionMap.toJSON(message.bundle_version_map);
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
    message.bundle_proposal_list = object.bundle_proposal_list?.map((e) => BundleProposal.fromPartial(e)) || [];
    message.finalized_bundle_list = object.finalized_bundle_list?.map((e) => FinalizedBundle.fromPartial(e)) || [];
    message.round_robin_progress_list =
      object.round_robin_progress_list?.map((e) => RoundRobinProgress.fromPartial(e)) || [];
    message.bundle_version_map = (object.bundle_version_map !== undefined && object.bundle_version_map !== null)
      ? BundleVersionMap.fromPartial(object.bundle_version_map)
      : undefined;
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
