/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.delegation.v1beta1";

/** SlashType ... */
export enum SlashType {
  /** SLASH_TYPE_UNSPECIFIED - SLASH_TYPE_UNSPECIFIED ... */
  SLASH_TYPE_UNSPECIFIED = "SLASH_TYPE_UNSPECIFIED",
  /** SLASH_TYPE_TIMEOUT - SLASH_TYPE_TIMEOUT ... */
  SLASH_TYPE_TIMEOUT = "SLASH_TYPE_TIMEOUT",
  /** SLASH_TYPE_VOTE - SLASH_TYPE_VOTE ... */
  SLASH_TYPE_VOTE = "SLASH_TYPE_VOTE",
  /** SLASH_TYPE_UPLOAD - SLASH_TYPE_UPLOAD ... */
  SLASH_TYPE_UPLOAD = "SLASH_TYPE_UPLOAD",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function slashTypeFromJSON(object: any): SlashType {
  switch (object) {
    case 0:
    case "SLASH_TYPE_UNSPECIFIED":
      return SlashType.SLASH_TYPE_UNSPECIFIED;
    case 1:
    case "SLASH_TYPE_TIMEOUT":
      return SlashType.SLASH_TYPE_TIMEOUT;
    case 2:
    case "SLASH_TYPE_VOTE":
      return SlashType.SLASH_TYPE_VOTE;
    case 3:
    case "SLASH_TYPE_UPLOAD":
      return SlashType.SLASH_TYPE_UPLOAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SlashType.UNRECOGNIZED;
  }
}

export function slashTypeToJSON(object: SlashType): string {
  switch (object) {
    case SlashType.SLASH_TYPE_UNSPECIFIED:
      return "SLASH_TYPE_UNSPECIFIED";
    case SlashType.SLASH_TYPE_TIMEOUT:
      return "SLASH_TYPE_TIMEOUT";
    case SlashType.SLASH_TYPE_VOTE:
      return "SLASH_TYPE_VOTE";
    case SlashType.SLASH_TYPE_UPLOAD:
      return "SLASH_TYPE_UPLOAD";
    case SlashType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function slashTypeToNumber(object: SlashType): number {
  switch (object) {
    case SlashType.SLASH_TYPE_UNSPECIFIED:
      return 0;
    case SlashType.SLASH_TYPE_TIMEOUT:
      return 1;
    case SlashType.SLASH_TYPE_VOTE:
      return 2;
    case SlashType.SLASH_TYPE_UPLOAD:
      return 3;
    case SlashType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface Delegator {
  /** staker corresponds to a KYVE-staker on the protocol-side */
  staker: string;
  /**
   * delegator the user who delegate to the staker.
   * If staker and delegator are the same we call it: self-delegation
   */
  delegator: string;
  /** k_index is an internal index for the f1-distribution algorithm */
  k_index: string;
  /**
   * initial_amount of stake the user had when it delegated.
   * slashes can cause that the actual stake is lower.
   */
  initial_amount: string;
}

/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntry {
  /** staker on protocol level */
  staker: string;
  /** k_index is the of the period this entry ends */
  k_index: string;
  /** value is the quotient of collected rewards and total stake according to F1-distribution */
  value: string;
}

/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationData {
  /** Every staker has one DelegationData */
  staker: string;
  /** current_rewards ... */
  current_rewards: string;
  /** total_delegation ... */
  total_delegation: string;
  /** latest_index_k ... */
  latest_index_k: string;
  /** delegator_count the amount of different addresses delegating to the staker */
  delegator_count: string;
  /** latest_index_was_undelegation helps indicates when an entry can be deleted */
  latest_index_was_undelegation: boolean;
}

/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlash {
  /** staker who got slashed */
  staker: string;
  /** k_index for f1-algorithm */
  k_index: string;
  /** fraction that got slashed */
  fraction: string;
}

/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntry {
  /** index ... */
  index: string;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
  /** amount ... */
  amount: string;
  /** creation_time ... */
  creation_time: string;
}

/** QueueState ... */
export interface QueueState {
  /** low_index ... */
  low_index: string;
  /** high_index ... */
  high_index: string;
}

/** RedelegationCooldown ... */
export interface RedelegationCooldown {
  /** low_index ... */
  address: string;
  /** high_index ... */
  creation_date: string;
}

function createBaseDelegator(): Delegator {
  return { staker: "", delegator: "", k_index: "0", initial_amount: "0" };
}

export const Delegator = {
  encode(message: Delegator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    if (message.k_index !== "0") {
      writer.uint32(24).uint64(message.k_index);
    }
    if (message.initial_amount !== "0") {
      writer.uint32(32).uint64(message.initial_amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.delegator = reader.string();
          break;
        case 3:
          message.k_index = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.initial_amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegator {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      k_index: isSet(object.k_index) ? String(object.k_index) : "0",
      initial_amount: isSet(object.initial_amount) ? String(object.initial_amount) : "0",
    };
  },

  toJSON(message: Delegator): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.k_index !== undefined && (obj.k_index = message.k_index);
    message.initial_amount !== undefined && (obj.initial_amount = message.initial_amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegator>, I>>(object: I): Delegator {
    const message = createBaseDelegator();
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.k_index = object.k_index ?? "0";
    message.initial_amount = object.initial_amount ?? "0";
    return message;
  },
};

function createBaseDelegationEntry(): DelegationEntry {
  return { staker: "", k_index: "0", value: "" };
}

export const DelegationEntry = {
  encode(message: DelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.k_index !== "0") {
      writer.uint32(16).uint64(message.k_index);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.k_index = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationEntry {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      k_index: isSet(object.k_index) ? String(object.k_index) : "0",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: DelegationEntry): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.k_index !== undefined && (obj.k_index = message.k_index);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationEntry>, I>>(object: I): DelegationEntry {
    const message = createBaseDelegationEntry();
    message.staker = object.staker ?? "";
    message.k_index = object.k_index ?? "0";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDelegationData(): DelegationData {
  return {
    staker: "",
    current_rewards: "0",
    total_delegation: "0",
    latest_index_k: "0",
    delegator_count: "0",
    latest_index_was_undelegation: false,
  };
}

export const DelegationData = {
  encode(message: DelegationData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.current_rewards !== "0") {
      writer.uint32(16).uint64(message.current_rewards);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(24).uint64(message.total_delegation);
    }
    if (message.latest_index_k !== "0") {
      writer.uint32(32).uint64(message.latest_index_k);
    }
    if (message.delegator_count !== "0") {
      writer.uint32(40).uint64(message.delegator_count);
    }
    if (message.latest_index_was_undelegation === true) {
      writer.uint32(48).bool(message.latest_index_was_undelegation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.current_rewards = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.latest_index_k = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.delegator_count = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.latest_index_was_undelegation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationData {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      current_rewards: isSet(object.current_rewards) ? String(object.current_rewards) : "0",
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      latest_index_k: isSet(object.latest_index_k) ? String(object.latest_index_k) : "0",
      delegator_count: isSet(object.delegator_count) ? String(object.delegator_count) : "0",
      latest_index_was_undelegation: isSet(object.latest_index_was_undelegation)
        ? Boolean(object.latest_index_was_undelegation)
        : false,
    };
  },

  toJSON(message: DelegationData): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.current_rewards !== undefined && (obj.current_rewards = message.current_rewards);
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.latest_index_k !== undefined && (obj.latest_index_k = message.latest_index_k);
    message.delegator_count !== undefined && (obj.delegator_count = message.delegator_count);
    message.latest_index_was_undelegation !== undefined &&
      (obj.latest_index_was_undelegation = message.latest_index_was_undelegation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationData>, I>>(object: I): DelegationData {
    const message = createBaseDelegationData();
    message.staker = object.staker ?? "";
    message.current_rewards = object.current_rewards ?? "0";
    message.total_delegation = object.total_delegation ?? "0";
    message.latest_index_k = object.latest_index_k ?? "0";
    message.delegator_count = object.delegator_count ?? "0";
    message.latest_index_was_undelegation = object.latest_index_was_undelegation ?? false;
    return message;
  },
};

function createBaseDelegationSlash(): DelegationSlash {
  return { staker: "", k_index: "0", fraction: "" };
}

export const DelegationSlash = {
  encode(message: DelegationSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.k_index !== "0") {
      writer.uint32(16).uint64(message.k_index);
    }
    if (message.fraction !== "") {
      writer.uint32(26).string(message.fraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.k_index = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.fraction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationSlash {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      k_index: isSet(object.k_index) ? String(object.k_index) : "0",
      fraction: isSet(object.fraction) ? String(object.fraction) : "",
    };
  },

  toJSON(message: DelegationSlash): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.k_index !== undefined && (obj.k_index = message.k_index);
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationSlash>, I>>(object: I): DelegationSlash {
    const message = createBaseDelegationSlash();
    message.staker = object.staker ?? "";
    message.k_index = object.k_index ?? "0";
    message.fraction = object.fraction ?? "";
    return message;
  },
};

function createBaseUndelegationQueueEntry(): UndelegationQueueEntry {
  return { index: "0", staker: "", delegator: "", amount: "0", creation_time: "0" };
}

export const UndelegationQueueEntry = {
  encode(message: UndelegationQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.creation_time !== "0") {
      writer.uint32(40).uint64(message.creation_time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationQueueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegationQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.delegator = reader.string();
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.creation_time = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegationQueueEntry {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      creation_time: isSet(object.creation_time) ? String(object.creation_time) : "0",
    };
  },

  toJSON(message: UndelegationQueueEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.creation_time !== undefined && (obj.creation_time = message.creation_time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegationQueueEntry>, I>>(object: I): UndelegationQueueEntry {
    const message = createBaseUndelegationQueueEntry();
    message.index = object.index ?? "0";
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.amount = object.amount ?? "0";
    message.creation_time = object.creation_time ?? "0";
    return message;
  },
};

function createBaseQueueState(): QueueState {
  return { low_index: "0", high_index: "0" };
}

export const QueueState = {
  encode(message: QueueState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.low_index !== "0") {
      writer.uint32(8).uint64(message.low_index);
    }
    if (message.high_index !== "0") {
      writer.uint32(16).uint64(message.high_index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueueState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueueState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.low_index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.high_index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueueState {
    return {
      low_index: isSet(object.low_index) ? String(object.low_index) : "0",
      high_index: isSet(object.high_index) ? String(object.high_index) : "0",
    };
  },

  toJSON(message: QueueState): unknown {
    const obj: any = {};
    message.low_index !== undefined && (obj.low_index = message.low_index);
    message.high_index !== undefined && (obj.high_index = message.high_index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueueState>, I>>(object: I): QueueState {
    const message = createBaseQueueState();
    message.low_index = object.low_index ?? "0";
    message.high_index = object.high_index ?? "0";
    return message;
  },
};

function createBaseRedelegationCooldown(): RedelegationCooldown {
  return { address: "", creation_date: "0" };
}

export const RedelegationCooldown = {
  encode(message: RedelegationCooldown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creation_date !== "0") {
      writer.uint32(16).uint64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationCooldown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationCooldown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.creation_date = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationCooldown {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: RedelegationCooldown): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationCooldown>, I>>(object: I): RedelegationCooldown {
    const message = createBaseRedelegationCooldown();
    message.address = object.address ?? "";
    message.creation_date = object.creation_date ?? "0";
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
