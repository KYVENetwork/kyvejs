// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: kyve/multi_coin_rewards/v1beta1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Params } from "./params";
import { MultiCoinDistributionPolicy, MultiCoinPendingRewardsEntry, QueueState } from "./types";

export const protobufPackage = "kyve.multi_coin_rewards.v1beta1";

/** GenesisState defines the multi_coin_rewards module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?:
    | Params
    | undefined;
  /** MultiCoinPendingRewardsEntry ... */
  multi_coin_pending_rewards_entries: MultiCoinPendingRewardsEntry[];
  /** queue_state_state_fraction ... */
  queue_state_pending_rewards?:
    | QueueState
    | undefined;
  /** multi_coin_enabled ... */
  multi_coin_enabled: string[];
  /** multi_coin_distribution_policy ... */
  multi_coin_distribution_policy?: MultiCoinDistributionPolicy | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    multi_coin_pending_rewards_entries: [],
    queue_state_pending_rewards: undefined,
    multi_coin_enabled: [],
    multi_coin_distribution_policy: undefined,
  };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    for (const v of message.multi_coin_pending_rewards_entries) {
      MultiCoinPendingRewardsEntry.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.queue_state_pending_rewards !== undefined) {
      QueueState.encode(message.queue_state_pending_rewards, writer.uint32(26).fork()).join();
    }
    for (const v of message.multi_coin_enabled) {
      writer.uint32(34).string(v!);
    }
    if (message.multi_coin_distribution_policy !== undefined) {
      MultiCoinDistributionPolicy.encode(message.multi_coin_distribution_policy, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.multi_coin_pending_rewards_entries.push(MultiCoinPendingRewardsEntry.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.queue_state_pending_rewards = QueueState.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.multi_coin_enabled.push(reader.string());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.multi_coin_distribution_policy = MultiCoinDistributionPolicy.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      multi_coin_pending_rewards_entries: globalThis.Array.isArray(object?.multi_coin_pending_rewards_entries)
        ? object.multi_coin_pending_rewards_entries.map((e: any) => MultiCoinPendingRewardsEntry.fromJSON(e))
        : [],
      queue_state_pending_rewards: isSet(object.queue_state_pending_rewards)
        ? QueueState.fromJSON(object.queue_state_pending_rewards)
        : undefined,
      multi_coin_enabled: globalThis.Array.isArray(object?.multi_coin_enabled)
        ? object.multi_coin_enabled.map((e: any) => globalThis.String(e))
        : [],
      multi_coin_distribution_policy: isSet(object.multi_coin_distribution_policy)
        ? MultiCoinDistributionPolicy.fromJSON(object.multi_coin_distribution_policy)
        : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.multi_coin_pending_rewards_entries?.length) {
      obj.multi_coin_pending_rewards_entries = message.multi_coin_pending_rewards_entries.map((e) =>
        MultiCoinPendingRewardsEntry.toJSON(e)
      );
    }
    if (message.queue_state_pending_rewards !== undefined) {
      obj.queue_state_pending_rewards = QueueState.toJSON(message.queue_state_pending_rewards);
    }
    if (message.multi_coin_enabled?.length) {
      obj.multi_coin_enabled = message.multi_coin_enabled;
    }
    if (message.multi_coin_distribution_policy !== undefined) {
      obj.multi_coin_distribution_policy = MultiCoinDistributionPolicy.toJSON(message.multi_coin_distribution_policy);
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
    message.multi_coin_pending_rewards_entries =
      object.multi_coin_pending_rewards_entries?.map((e) => MultiCoinPendingRewardsEntry.fromPartial(e)) || [];
    message.queue_state_pending_rewards =
      (object.queue_state_pending_rewards !== undefined && object.queue_state_pending_rewards !== null)
        ? QueueState.fromPartial(object.queue_state_pending_rewards)
        : undefined;
    message.multi_coin_enabled = object.multi_coin_enabled?.map((e) => e) || [];
    message.multi_coin_distribution_policy =
      (object.multi_coin_distribution_policy !== undefined && object.multi_coin_distribution_policy !== null)
        ? MultiCoinDistributionPolicy.fromPartial(object.multi_coin_distribution_policy)
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
