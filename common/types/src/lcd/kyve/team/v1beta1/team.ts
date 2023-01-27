/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.team.v1beta1";

/** Authority ... */
export interface Authority {
  /** total inflation rewards is the total amount of rewards the authority has received ever */
  total_rewards: string;
  /** claimed is the amount of inflation rewards claimed by the authority */
  rewards_claimed: string;
}

/** TeamVestingAccount ... */
export interface TeamVestingAccount {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
  /**
   * clawback is a unix timestamp of a clawback. If timestamp is zero
   * it means that the account has not received a clawback
   */
  clawback: string;
  /** claimed is the amount of $KYVE already claimed by the account holder */
  unlocked_claimed: string;
  /** the last time the unlocked amount was claimed */
  last_claimed_time: string;
  /** total rewards is the total amount of rewards the account has received ever */
  total_rewards: string;
  /** rewards claimed is the amount inflation rewards claimed by account holder */
  rewards_claimed: string;
}

function createBaseAuthority(): Authority {
  return { total_rewards: "0", rewards_claimed: "0" };
}

export const Authority = {
  encode(message: Authority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total_rewards !== "0") {
      writer.uint32(8).uint64(message.total_rewards);
    }
    if (message.rewards_claimed !== "0") {
      writer.uint32(16).uint64(message.rewards_claimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Authority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_rewards = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.rewards_claimed = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Authority {
    return {
      total_rewards: isSet(object.total_rewards) ? String(object.total_rewards) : "0",
      rewards_claimed: isSet(object.rewards_claimed) ? String(object.rewards_claimed) : "0",
    };
  },

  toJSON(message: Authority): unknown {
    const obj: any = {};
    message.total_rewards !== undefined && (obj.total_rewards = message.total_rewards);
    message.rewards_claimed !== undefined && (obj.rewards_claimed = message.rewards_claimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Authority>, I>>(object: I): Authority {
    const message = createBaseAuthority();
    message.total_rewards = object.total_rewards ?? "0";
    message.rewards_claimed = object.rewards_claimed ?? "0";
    return message;
  },
};

function createBaseTeamVestingAccount(): TeamVestingAccount {
  return {
    id: "0",
    total_allocation: "0",
    commencement: "0",
    clawback: "0",
    unlocked_claimed: "0",
    last_claimed_time: "0",
    total_rewards: "0",
    rewards_claimed: "0",
  };
}

export const TeamVestingAccount = {
  encode(message: TeamVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.total_allocation !== "0") {
      writer.uint32(16).uint64(message.total_allocation);
    }
    if (message.commencement !== "0") {
      writer.uint32(24).uint64(message.commencement);
    }
    if (message.clawback !== "0") {
      writer.uint32(32).uint64(message.clawback);
    }
    if (message.unlocked_claimed !== "0") {
      writer.uint32(40).uint64(message.unlocked_claimed);
    }
    if (message.last_claimed_time !== "0") {
      writer.uint32(48).uint64(message.last_claimed_time);
    }
    if (message.total_rewards !== "0") {
      writer.uint32(56).uint64(message.total_rewards);
    }
    if (message.rewards_claimed !== "0") {
      writer.uint32(64).uint64(message.rewards_claimed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TeamVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeamVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.total_allocation = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.commencement = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.clawback = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.unlocked_claimed = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.last_claimed_time = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.total_rewards = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.rewards_claimed = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TeamVestingAccount {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      total_allocation: isSet(object.total_allocation) ? String(object.total_allocation) : "0",
      commencement: isSet(object.commencement) ? String(object.commencement) : "0",
      clawback: isSet(object.clawback) ? String(object.clawback) : "0",
      unlocked_claimed: isSet(object.unlocked_claimed) ? String(object.unlocked_claimed) : "0",
      last_claimed_time: isSet(object.last_claimed_time) ? String(object.last_claimed_time) : "0",
      total_rewards: isSet(object.total_rewards) ? String(object.total_rewards) : "0",
      rewards_claimed: isSet(object.rewards_claimed) ? String(object.rewards_claimed) : "0",
    };
  },

  toJSON(message: TeamVestingAccount): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.total_allocation !== undefined && (obj.total_allocation = message.total_allocation);
    message.commencement !== undefined && (obj.commencement = message.commencement);
    message.clawback !== undefined && (obj.clawback = message.clawback);
    message.unlocked_claimed !== undefined && (obj.unlocked_claimed = message.unlocked_claimed);
    message.last_claimed_time !== undefined && (obj.last_claimed_time = message.last_claimed_time);
    message.total_rewards !== undefined && (obj.total_rewards = message.total_rewards);
    message.rewards_claimed !== undefined && (obj.rewards_claimed = message.rewards_claimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TeamVestingAccount>, I>>(object: I): TeamVestingAccount {
    const message = createBaseTeamVestingAccount();
    message.id = object.id ?? "0";
    message.total_allocation = object.total_allocation ?? "0";
    message.commencement = object.commencement ?? "0";
    message.clawback = object.clawback ?? "0";
    message.unlocked_claimed = object.unlocked_claimed ?? "0";
    message.last_claimed_time = object.last_claimed_time ?? "0";
    message.total_rewards = object.total_rewards ?? "0";
    message.rewards_claimed = object.rewards_claimed ?? "0";
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
