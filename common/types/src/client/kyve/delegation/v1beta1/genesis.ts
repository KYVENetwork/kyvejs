/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  DelegationData,
  DelegationEntry,
  DelegationSlash,
  Delegator,
  QueueState,
  RedelegationCooldown,
  UndelegationQueueEntry,
} from "./delegation";
import { Params } from "./params";

export const protobufPackage = "kyve.delegation.v1beta1";

/** GenesisState defines the delegation module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?:
    | Params
    | undefined;
  /** delegator_list ... */
  delegator_list: Delegator[];
  /** delegation_entry_list ... */
  delegation_entry_list: DelegationEntry[];
  /** delegation_data_list ... */
  delegation_data_list: DelegationData[];
  /** delegation_slash_list ... */
  delegation_slash_list: DelegationSlash[];
  /** undelegation_queue_entry_list ... */
  undelegation_queue_entry_list: UndelegationQueueEntry[];
  /** queue_state_undelegation ... */
  queue_state_undelegation?:
    | QueueState
    | undefined;
  /** redelegation_cooldown_list ... */
  redelegation_cooldown_list: RedelegationCooldown[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    delegator_list: [],
    delegation_entry_list: [],
    delegation_data_list: [],
    delegation_slash_list: [],
    undelegation_queue_entry_list: [],
    queue_state_undelegation: undefined,
    redelegation_cooldown_list: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegator_list) {
      Delegator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegation_entry_list) {
      DelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegation_data_list) {
      DelegationData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegation_slash_list) {
      DelegationSlash.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.undelegation_queue_entry_list) {
      UndelegationQueueEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.queue_state_undelegation !== undefined) {
      QueueState.encode(message.queue_state_undelegation, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.redelegation_cooldown_list) {
      RedelegationCooldown.encode(v!, writer.uint32(66).fork()).ldelim();
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

          message.delegator_list.push(Delegator.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.delegation_entry_list.push(DelegationEntry.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.delegation_data_list.push(DelegationData.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.delegation_slash_list.push(DelegationSlash.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.undelegation_queue_entry_list.push(UndelegationQueueEntry.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.queue_state_undelegation = QueueState.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.redelegation_cooldown_list.push(RedelegationCooldown.decode(reader, reader.uint32()));
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
      delegator_list: globalThis.Array.isArray(object?.delegator_list)
        ? object.delegator_list.map((e: any) => Delegator.fromJSON(e))
        : [],
      delegation_entry_list: globalThis.Array.isArray(object?.delegation_entry_list)
        ? object.delegation_entry_list.map((e: any) => DelegationEntry.fromJSON(e))
        : [],
      delegation_data_list: globalThis.Array.isArray(object?.delegation_data_list)
        ? object.delegation_data_list.map((e: any) => DelegationData.fromJSON(e))
        : [],
      delegation_slash_list: globalThis.Array.isArray(object?.delegation_slash_list)
        ? object.delegation_slash_list.map((e: any) => DelegationSlash.fromJSON(e))
        : [],
      undelegation_queue_entry_list: globalThis.Array.isArray(object?.undelegation_queue_entry_list)
        ? object.undelegation_queue_entry_list.map((e: any) => UndelegationQueueEntry.fromJSON(e))
        : [],
      queue_state_undelegation: isSet(object.queue_state_undelegation)
        ? QueueState.fromJSON(object.queue_state_undelegation)
        : undefined,
      redelegation_cooldown_list: globalThis.Array.isArray(object?.redelegation_cooldown_list)
        ? object.redelegation_cooldown_list.map((e: any) => RedelegationCooldown.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.delegator_list?.length) {
      obj.delegator_list = message.delegator_list.map((e) => Delegator.toJSON(e));
    }
    if (message.delegation_entry_list?.length) {
      obj.delegation_entry_list = message.delegation_entry_list.map((e) => DelegationEntry.toJSON(e));
    }
    if (message.delegation_data_list?.length) {
      obj.delegation_data_list = message.delegation_data_list.map((e) => DelegationData.toJSON(e));
    }
    if (message.delegation_slash_list?.length) {
      obj.delegation_slash_list = message.delegation_slash_list.map((e) => DelegationSlash.toJSON(e));
    }
    if (message.undelegation_queue_entry_list?.length) {
      obj.undelegation_queue_entry_list = message.undelegation_queue_entry_list.map((e) =>
        UndelegationQueueEntry.toJSON(e)
      );
    }
    if (message.queue_state_undelegation !== undefined) {
      obj.queue_state_undelegation = QueueState.toJSON(message.queue_state_undelegation);
    }
    if (message.redelegation_cooldown_list?.length) {
      obj.redelegation_cooldown_list = message.redelegation_cooldown_list.map((e) => RedelegationCooldown.toJSON(e));
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
    message.delegator_list = object.delegator_list?.map((e) => Delegator.fromPartial(e)) || [];
    message.delegation_entry_list = object.delegation_entry_list?.map((e) => DelegationEntry.fromPartial(e)) || [];
    message.delegation_data_list = object.delegation_data_list?.map((e) => DelegationData.fromPartial(e)) || [];
    message.delegation_slash_list = object.delegation_slash_list?.map((e) => DelegationSlash.fromPartial(e)) || [];
    message.undelegation_queue_entry_list =
      object.undelegation_queue_entry_list?.map((e) => UndelegationQueueEntry.fromPartial(e)) || [];
    message.queue_state_undelegation =
      (object.queue_state_undelegation !== undefined && object.queue_state_undelegation !== null)
        ? QueueState.fromPartial(object.queue_state_undelegation)
        : undefined;
    message.redelegation_cooldown_list =
      object.redelegation_cooldown_list?.map((e) => RedelegationCooldown.fromPartial(e)) || [];
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
