/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";

export const protobufPackage = "cosmos.group.v1";

/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq: string;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  group_members: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  group_policy_seq: string;
  /** group_policies is the list of group policies info. */
  group_policies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposal_seq: string;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}

function createBaseGenesisState(): GenesisState {
  return {
    group_seq: "0",
    groups: [],
    group_members: [],
    group_policy_seq: "0",
    group_policies: [],
    proposal_seq: "0",
    proposals: [],
    votes: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group_seq !== "0") {
      writer.uint32(8).uint64(message.group_seq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.group_members) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.group_policy_seq !== "0") {
      writer.uint32(32).uint64(message.group_policy_seq);
    }
    for (const v of message.group_policies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proposal_seq !== "0") {
      writer.uint32(48).uint64(message.proposal_seq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
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
          if (tag !== 8) {
            break;
          }

          message.group_seq = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.group_members.push(GroupMember.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.group_policy_seq = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.group_policies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.proposal_seq = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.votes.push(Vote.decode(reader, reader.uint32()));
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
      group_seq: isSet(object.group_seq) ? String(object.group_seq) : "0",
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupInfo.fromJSON(e)) : [],
      group_members: Array.isArray(object?.group_members)
        ? object.group_members.map((e: any) => GroupMember.fromJSON(e))
        : [],
      group_policy_seq: isSet(object.group_policy_seq) ? String(object.group_policy_seq) : "0",
      group_policies: Array.isArray(object?.group_policies)
        ? object.group_policies.map((e: any) => GroupPolicyInfo.fromJSON(e))
        : [],
      proposal_seq: isSet(object.proposal_seq) ? String(object.proposal_seq) : "0",
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.group_seq !== "0") {
      obj.group_seq = message.group_seq;
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => GroupInfo.toJSON(e));
    }
    if (message.group_members?.length) {
      obj.group_members = message.group_members.map((e) => GroupMember.toJSON(e));
    }
    if (message.group_policy_seq !== "0") {
      obj.group_policy_seq = message.group_policy_seq;
    }
    if (message.group_policies?.length) {
      obj.group_policies = message.group_policies.map((e) => GroupPolicyInfo.toJSON(e));
    }
    if (message.proposal_seq !== "0") {
      obj.proposal_seq = message.proposal_seq;
    }
    if (message.proposals?.length) {
      obj.proposals = message.proposals.map((e) => Proposal.toJSON(e));
    }
    if (message.votes?.length) {
      obj.votes = message.votes.map((e) => Vote.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.group_seq = object.group_seq ?? "0";
    message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
    message.group_members = object.group_members?.map((e) => GroupMember.fromPartial(e)) || [];
    message.group_policy_seq = object.group_policy_seq ?? "0";
    message.group_policies = object.group_policies?.map((e) => GroupPolicyInfo.fromPartial(e)) || [];
    message.proposal_seq = object.proposal_seq ?? "0";
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
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
