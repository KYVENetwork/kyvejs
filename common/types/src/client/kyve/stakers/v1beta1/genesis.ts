/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { CommissionChangeEntry, LeavePoolEntry, QueueState, Staker, Valaccount } from "./stakers";

export const protobufPackage = "kyve.stakers.v1beta1";

/** GenesisState defines the stakers module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** staker_list ... */
  staker_list: Staker[];
  /** valaccount_list ... */
  valaccount_list: Valaccount[];
  /** commission_change_entries ... */
  commission_change_entries: CommissionChangeEntry[];
  /** queue_state_commission ... */
  queue_state_commission?: QueueState;
  /** leave_pool_entries ... */
  leave_pool_entries: LeavePoolEntry[];
  /** queue_state_leave ... */
  queue_state_leave?: QueueState;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    staker_list: [],
    valaccount_list: [],
    commission_change_entries: [],
    queue_state_commission: undefined,
    leave_pool_entries: [],
    queue_state_leave: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.staker_list) {
      Staker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.valaccount_list) {
      Valaccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.commission_change_entries) {
      CommissionChangeEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.queue_state_commission !== undefined) {
      QueueState.encode(message.queue_state_commission, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.leave_pool_entries) {
      LeavePoolEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.queue_state_leave !== undefined) {
      QueueState.encode(message.queue_state_leave, writer.uint32(58).fork()).ldelim();
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
          message.staker_list.push(Staker.decode(reader, reader.uint32()));
          break;
        case 3:
          message.valaccount_list.push(Valaccount.decode(reader, reader.uint32()));
          break;
        case 4:
          message.commission_change_entries.push(CommissionChangeEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.queue_state_commission = QueueState.decode(reader, reader.uint32());
          break;
        case 6:
          message.leave_pool_entries.push(LeavePoolEntry.decode(reader, reader.uint32()));
          break;
        case 7:
          message.queue_state_leave = QueueState.decode(reader, reader.uint32());
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
      staker_list: Array.isArray(object?.staker_list) ? object.staker_list.map((e: any) => Staker.fromJSON(e)) : [],
      valaccount_list: Array.isArray(object?.valaccount_list)
        ? object.valaccount_list.map((e: any) => Valaccount.fromJSON(e))
        : [],
      commission_change_entries: Array.isArray(object?.commission_change_entries)
        ? object.commission_change_entries.map((e: any) => CommissionChangeEntry.fromJSON(e))
        : [],
      queue_state_commission: isSet(object.queue_state_commission)
        ? QueueState.fromJSON(object.queue_state_commission)
        : undefined,
      leave_pool_entries: Array.isArray(object?.leave_pool_entries)
        ? object.leave_pool_entries.map((e: any) => LeavePoolEntry.fromJSON(e))
        : [],
      queue_state_leave: isSet(object.queue_state_leave) ? QueueState.fromJSON(object.queue_state_leave) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.staker_list) {
      obj.staker_list = message.staker_list.map((e) => e ? Staker.toJSON(e) : undefined);
    } else {
      obj.staker_list = [];
    }
    if (message.valaccount_list) {
      obj.valaccount_list = message.valaccount_list.map((e) => e ? Valaccount.toJSON(e) : undefined);
    } else {
      obj.valaccount_list = [];
    }
    if (message.commission_change_entries) {
      obj.commission_change_entries = message.commission_change_entries.map((e) =>
        e ? CommissionChangeEntry.toJSON(e) : undefined
      );
    } else {
      obj.commission_change_entries = [];
    }
    message.queue_state_commission !== undefined && (obj.queue_state_commission = message.queue_state_commission
      ? QueueState.toJSON(message.queue_state_commission)
      : undefined);
    if (message.leave_pool_entries) {
      obj.leave_pool_entries = message.leave_pool_entries.map((e) => e ? LeavePoolEntry.toJSON(e) : undefined);
    } else {
      obj.leave_pool_entries = [];
    }
    message.queue_state_leave !== undefined &&
      (obj.queue_state_leave = message.queue_state_leave ? QueueState.toJSON(message.queue_state_leave) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.staker_list = object.staker_list?.map((e) => Staker.fromPartial(e)) || [];
    message.valaccount_list = object.valaccount_list?.map((e) => Valaccount.fromPartial(e)) || [];
    message.commission_change_entries =
      object.commission_change_entries?.map((e) => CommissionChangeEntry.fromPartial(e)) || [];
    message.queue_state_commission =
      (object.queue_state_commission !== undefined && object.queue_state_commission !== null)
        ? QueueState.fromPartial(object.queue_state_commission)
        : undefined;
    message.leave_pool_entries = object.leave_pool_entries?.map((e) => LeavePoolEntry.fromPartial(e)) || [];
    message.queue_state_leave = (object.queue_state_leave !== undefined && object.queue_state_leave !== null)
      ? QueueState.fromPartial(object.queue_state_leave)
      : undefined;
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
