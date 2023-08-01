/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.team.v1beta1";

/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccount {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
}

/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawback {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /**
   * clawback is a unix timestamp of a clawback. If timestamp is zero
   * it means that the account has not received a clawback
   */
  clawback: string;
  /** amount which got clawed back. */
  amount: string;
}

/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlocked {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** amount is the number of tokens claimed from the unlocked amount. */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
}

/**
 * EventClaimInflationRewards is an event emitted when the authority claims inflation rewards for a recipient.
 * emitted_by: MsgClaimInflationRewards
 */
export interface EventClaimInflationRewards {
  /** authority which initiated this action */
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** amount is the amount of inflation rewards the authority should claim for the account holder */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
}

/**
 * EventClaimAuthorityRewards is an event emitted when the authority claims its inflation rewards for a recipient.
 * emitted_by: MsgClaimAuthorityRewards
 */
export interface EventClaimAuthorityRewards {
  /** authority which initiated this action */
  authority: string;
  /** amount is the amount of inflation rewards the authority should claim for the account holder */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
}

function createBaseEventCreateTeamVestingAccount(): EventCreateTeamVestingAccount {
  return { authority: "", id: "0", total_allocation: "0", commencement: "0" };
}

export const EventCreateTeamVestingAccount = {
  encode(message: EventCreateTeamVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.total_allocation !== "0") {
      writer.uint32(24).uint64(message.total_allocation);
    }
    if (message.commencement !== "0") {
      writer.uint32(32).uint64(message.commencement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateTeamVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateTeamVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.total_allocation = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.commencement = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateTeamVestingAccount {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      total_allocation: isSet(object.total_allocation) ? String(object.total_allocation) : "0",
      commencement: isSet(object.commencement) ? String(object.commencement) : "0",
    };
  },

  toJSON(message: EventCreateTeamVestingAccount): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.total_allocation !== undefined && (obj.total_allocation = message.total_allocation);
    message.commencement !== undefined && (obj.commencement = message.commencement);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateTeamVestingAccount>, I>>(
    object: I,
  ): EventCreateTeamVestingAccount {
    const message = createBaseEventCreateTeamVestingAccount();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.total_allocation = object.total_allocation ?? "0";
    message.commencement = object.commencement ?? "0";
    return message;
  },
};

function createBaseEventClawback(): EventClawback {
  return { authority: "", id: "0", clawback: "0", amount: "0" };
}

export const EventClawback = {
  encode(message: EventClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.clawback !== "0") {
      writer.uint32(24).uint64(message.clawback);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClawback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClawback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.clawback = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventClawback {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      clawback: isSet(object.clawback) ? String(object.clawback) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: EventClawback): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.clawback !== undefined && (obj.clawback = message.clawback);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClawback>, I>>(object: I): EventClawback {
    const message = createBaseEventClawback();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.clawback = object.clawback ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseEventClaimedUnlocked(): EventClaimedUnlocked {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}

export const EventClaimedUnlocked = {
  encode(message: EventClaimedUnlocked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimedUnlocked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimedUnlocked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventClaimedUnlocked {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: EventClaimedUnlocked): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaimedUnlocked>, I>>(object: I): EventClaimedUnlocked {
    const message = createBaseEventClaimedUnlocked();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseEventClaimInflationRewards(): EventClaimInflationRewards {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}

export const EventClaimInflationRewards = {
  encode(message: EventClaimInflationRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimInflationRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimInflationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventClaimInflationRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: EventClaimInflationRewards): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaimInflationRewards>, I>>(object: I): EventClaimInflationRewards {
    const message = createBaseEventClaimInflationRewards();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseEventClaimAuthorityRewards(): EventClaimAuthorityRewards {
  return { authority: "", amount: "0", recipient: "" };
}

export const EventClaimAuthorityRewards = {
  encode(message: EventClaimAuthorityRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimAuthorityRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimAuthorityRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventClaimAuthorityRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: EventClaimAuthorityRewards): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaimAuthorityRewards>, I>>(object: I): EventClaimAuthorityRewards {
    const message = createBaseEventClaimAuthorityRewards();
    message.authority = object.authority ?? "";
    message.amount = object.amount ?? "0";
    message.recipient = object.recipient ?? "";
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
