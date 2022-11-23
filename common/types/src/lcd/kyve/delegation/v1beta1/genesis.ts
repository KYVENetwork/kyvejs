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
  params?: Params;
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
  queue_state_undelegation?: QueueState;
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
          message.delegator_list.push(Delegator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegation_entry_list.push(DelegationEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegation_data_list.push(DelegationData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegation_slash_list.push(DelegationSlash.decode(reader, reader.uint32()));
          break;
        case 6:
          message.undelegation_queue_entry_list.push(UndelegationQueueEntry.decode(reader, reader.uint32()));
          break;
        case 7:
          message.queue_state_undelegation = QueueState.decode(reader, reader.uint32());
          break;
        case 8:
          message.redelegation_cooldown_list.push(RedelegationCooldown.decode(reader, reader.uint32()));
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
      delegator_list: Array.isArray(object?.delegator_list)
        ? object.delegator_list.map((e: any) => Delegator.fromJSON(e))
        : [],
      delegation_entry_list: Array.isArray(object?.delegation_entry_list)
        ? object.delegation_entry_list.map((e: any) => DelegationEntry.fromJSON(e))
        : [],
      delegation_data_list: Array.isArray(object?.delegation_data_list)
        ? object.delegation_data_list.map((e: any) => DelegationData.fromJSON(e))
        : [],
      delegation_slash_list: Array.isArray(object?.delegation_slash_list)
        ? object.delegation_slash_list.map((e: any) => DelegationSlash.fromJSON(e))
        : [],
      undelegation_queue_entry_list: Array.isArray(object?.undelegation_queue_entry_list)
        ? object.undelegation_queue_entry_list.map((e: any) => UndelegationQueueEntry.fromJSON(e))
        : [],
      queue_state_undelegation: isSet(object.queue_state_undelegation)
        ? QueueState.fromJSON(object.queue_state_undelegation)
        : undefined,
      redelegation_cooldown_list: Array.isArray(object?.redelegation_cooldown_list)
        ? object.redelegation_cooldown_list.map((e: any) => RedelegationCooldown.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.delegator_list) {
      obj.delegator_list = message.delegator_list.map((e) => e ? Delegator.toJSON(e) : undefined);
    } else {
      obj.delegator_list = [];
    }
    if (message.delegation_entry_list) {
      obj.delegation_entry_list = message.delegation_entry_list.map((e) => e ? DelegationEntry.toJSON(e) : undefined);
    } else {
      obj.delegation_entry_list = [];
    }
    if (message.delegation_data_list) {
      obj.delegation_data_list = message.delegation_data_list.map((e) => e ? DelegationData.toJSON(e) : undefined);
    } else {
      obj.delegation_data_list = [];
    }
    if (message.delegation_slash_list) {
      obj.delegation_slash_list = message.delegation_slash_list.map((e) => e ? DelegationSlash.toJSON(e) : undefined);
    } else {
      obj.delegation_slash_list = [];
    }
    if (message.undelegation_queue_entry_list) {
      obj.undelegation_queue_entry_list = message.undelegation_queue_entry_list.map((e) =>
        e ? UndelegationQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.undelegation_queue_entry_list = [];
    }
    message.queue_state_undelegation !== undefined && (obj.queue_state_undelegation = message.queue_state_undelegation
      ? QueueState.toJSON(message.queue_state_undelegation)
      : undefined);
    if (message.redelegation_cooldown_list) {
      obj.redelegation_cooldown_list = message.redelegation_cooldown_list.map((e) =>
        e ? RedelegationCooldown.toJSON(e) : undefined
      );
    } else {
      obj.redelegation_cooldown_list = [];
    }
    return obj;
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
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
