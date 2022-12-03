/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ProposalExecutorResult, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";

export const protobufPackage = "cosmos.group.v1";

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  group_id: string;
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  group_id: string;
}

/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}

/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}

/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id: string;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
}

/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** address is the account address of the group member. */
  address: string;
}

function createBaseEventCreateGroup(): EventCreateGroup {
  return { group_id: "0" };
}

export const EventCreateGroup = {
  encode(message: EventCreateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroup {
    return { group_id: isSet(object.group_id) ? String(object.group_id) : "0" };
  },

  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = message.group_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    message.group_id = object.group_id ?? "0";
    return message;
  },
};

function createBaseEventUpdateGroup(): EventUpdateGroup {
  return { group_id: "0" };
}

export const EventUpdateGroup = {
  encode(message: EventUpdateGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroup {
    return { group_id: isSet(object.group_id) ? String(object.group_id) : "0" };
  },

  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = message.group_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateGroup>, I>>(object: I): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    message.group_id = object.group_id ?? "0";
    return message;
  },
};

function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return { address: "" };
}

export const EventCreateGroupPolicy = {
  encode(message: EventCreateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateGroupPolicy {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateGroupPolicy>, I>>(object: I): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return { address: "" };
}

export const EventUpdateGroupPolicy = {
  encode(message: EventUpdateGroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateGroupPolicy {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateGroupPolicy>, I>>(object: I): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventSubmitProposal(): EventSubmitProposal {
  return { proposal_id: "0" };
}

export const EventSubmitProposal = {
  encode(message: EventSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSubmitProposal {
    return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
  },

  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSubmitProposal>, I>>(object: I): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return { proposal_id: "0" };
}

export const EventWithdrawProposal = {
  encode(message: EventWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawProposal {
    return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
  },

  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawProposal>, I>>(object: I): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseEventVote(): EventVote {
  return { proposal_id: "0" };
}

export const EventVote = {
  encode(message: EventVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventVote {
    return { proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0" };
  },

  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(object: I): EventVote {
    const message = createBaseEventVote();
    message.proposal_id = object.proposal_id ?? "0";
    return message;
  },
};

function createBaseEventExec(): EventExec {
  return { proposal_id: "0", result: 0 };
}

export const EventExec = {
  encode(message: EventExec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_id !== "0") {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExec {
    return {
      proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : 0,
    };
  },

  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id);
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventExec>, I>>(object: I): EventExec {
    const message = createBaseEventExec();
    message.proposal_id = object.proposal_id ?? "0";
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseEventLeaveGroup(): EventLeaveGroup {
  return { group_id: "0", address: "" };
}

export const EventLeaveGroup = {
  encode(message: EventLeaveGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_id !== "0") {
      writer.uint32(8).uint64(message.group_id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group_id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLeaveGroup {
    return {
      group_id: isSet(object.group_id) ? String(object.group_id) : "0",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.group_id !== undefined && (obj.group_id = message.group_id);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLeaveGroup>, I>>(object: I): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    message.group_id = object.group_id ?? "0";
    message.address = object.address ?? "";
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
