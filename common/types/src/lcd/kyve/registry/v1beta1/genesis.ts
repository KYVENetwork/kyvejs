/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CommissionChangeQueueEntry,
  CommissionChangeQueueState,
  DelegationEntries,
  DelegationPoolData,
  Delegator,
  Funder,
  Pool,
  Proposal,
  RedelegationCooldown,
  Staker,
  UnbondingDelegationQueueEntry,
  UnbondingDelegationQueueState,
  UnbondingStaker,
  UnbondingStakingQueueEntry,
  UnbondingStakingQueueState,
} from "./registry";

export const protobufPackage = "kyve.registry.v1beta1";

/** GenesisState defines the registry module's genesis state. */
export interface GenesisState {
  /** pool_list ... */
  pool_list: Pool[];
  /** pool_count ... */
  pool_count: string;
  /** funder_list ... */
  funder_list: Funder[];
  /** staker_list ... */
  staker_list: Staker[];
  /** commission_change_queue_state ... */
  commission_change_queue_state?: CommissionChangeQueueState;
  /** commission_change_queue_entry ... */
  commission_change_queue_entry: CommissionChangeQueueEntry[];
  /** unbonding_staker_list ... */
  unbonding_staker_list: UnbondingStaker[];
  /** unbonding_staking_queue_state ... */
  unbonding_staking_queue_state?: UnbondingStakingQueueState;
  /** unbonding_staking_queue_entries ... */
  unbonding_staking_queue_entries: UnbondingStakingQueueEntry[];
  /** delegator_list ... */
  delegator_list: Delegator[];
  /** delegation_pool_data_list ... */
  delegation_pool_data_list: DelegationPoolData[];
  /** delegation_entries_list ... */
  delegation_entries_list: DelegationEntries[];
  /** proposal_list ... */
  proposal_list: Proposal[];
  /** unbonding_delegation_queue_state ... */
  unbonding_delegation_queue_state?: UnbondingDelegationQueueState;
  /** unbonding_delegation_queue_entries ... */
  unbonding_delegation_queue_entries: UnbondingDelegationQueueEntry[];
  /** redelegation_cooldown_list ... */
  redelegation_cooldown_list: RedelegationCooldown[];
}

function createBaseGenesisState(): GenesisState {
  return {
    pool_list: [],
    pool_count: "0",
    funder_list: [],
    staker_list: [],
    commission_change_queue_state: undefined,
    commission_change_queue_entry: [],
    unbonding_staker_list: [],
    unbonding_staking_queue_state: undefined,
    unbonding_staking_queue_entries: [],
    delegator_list: [],
    delegation_pool_data_list: [],
    delegation_entries_list: [],
    proposal_list: [],
    unbonding_delegation_queue_state: undefined,
    unbonding_delegation_queue_entries: [],
    redelegation_cooldown_list: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool_list) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pool_count !== "0") {
      writer.uint32(24).uint64(message.pool_count);
    }
    for (const v of message.funder_list) {
      Funder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.staker_list) {
      Staker.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.commission_change_queue_state !== undefined) {
      CommissionChangeQueueState.encode(message.commission_change_queue_state, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.commission_change_queue_entry) {
      CommissionChangeQueueEntry.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.unbonding_staker_list) {
      UnbondingStaker.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.unbonding_staking_queue_state !== undefined) {
      UnbondingStakingQueueState.encode(message.unbonding_staking_queue_state, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.unbonding_staking_queue_entries) {
      UnbondingStakingQueueEntry.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.delegator_list) {
      Delegator.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.delegation_pool_data_list) {
      DelegationPoolData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.delegation_entries_list) {
      DelegationEntries.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.proposal_list) {
      Proposal.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.unbonding_delegation_queue_state !== undefined) {
      UnbondingDelegationQueueState.encode(message.unbonding_delegation_queue_state, writer.uint32(106).fork())
        .ldelim();
    }
    for (const v of message.unbonding_delegation_queue_entries) {
      UnbondingDelegationQueueEntry.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.redelegation_cooldown_list) {
      RedelegationCooldown.encode(v!, writer.uint32(122).fork()).ldelim();
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
        case 2:
          message.pool_list.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pool_count = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.funder_list.push(Funder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.staker_list.push(Staker.decode(reader, reader.uint32()));
          break;
        case 16:
          message.commission_change_queue_state = CommissionChangeQueueState.decode(reader, reader.uint32());
          break;
        case 17:
          message.commission_change_queue_entry.push(CommissionChangeQueueEntry.decode(reader, reader.uint32()));
          break;
        case 12:
          message.unbonding_staker_list.push(UnbondingStaker.decode(reader, reader.uint32()));
          break;
        case 10:
          message.unbonding_staking_queue_state = UnbondingStakingQueueState.decode(reader, reader.uint32());
          break;
        case 11:
          message.unbonding_staking_queue_entries.push(UnbondingStakingQueueEntry.decode(reader, reader.uint32()));
          break;
        case 6:
          message.delegator_list.push(Delegator.decode(reader, reader.uint32()));
          break;
        case 7:
          message.delegation_pool_data_list.push(DelegationPoolData.decode(reader, reader.uint32()));
          break;
        case 8:
          message.delegation_entries_list.push(DelegationEntries.decode(reader, reader.uint32()));
          break;
        case 9:
          message.proposal_list.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 13:
          message.unbonding_delegation_queue_state = UnbondingDelegationQueueState.decode(reader, reader.uint32());
          break;
        case 14:
          message.unbonding_delegation_queue_entries.push(
            UnbondingDelegationQueueEntry.decode(reader, reader.uint32()),
          );
          break;
        case 15:
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
      pool_list: Array.isArray(object?.pool_list) ? object.pool_list.map((e: any) => Pool.fromJSON(e)) : [],
      pool_count: isSet(object.pool_count) ? String(object.pool_count) : "0",
      funder_list: Array.isArray(object?.funder_list) ? object.funder_list.map((e: any) => Funder.fromJSON(e)) : [],
      staker_list: Array.isArray(object?.staker_list) ? object.staker_list.map((e: any) => Staker.fromJSON(e)) : [],
      commission_change_queue_state: isSet(object.commission_change_queue_state)
        ? CommissionChangeQueueState.fromJSON(object.commission_change_queue_state)
        : undefined,
      commission_change_queue_entry: Array.isArray(object?.commission_change_queue_entry)
        ? object.commission_change_queue_entry.map((e: any) => CommissionChangeQueueEntry.fromJSON(e))
        : [],
      unbonding_staker_list: Array.isArray(object?.unbonding_staker_list)
        ? object.unbonding_staker_list.map((e: any) => UnbondingStaker.fromJSON(e))
        : [],
      unbonding_staking_queue_state: isSet(object.unbonding_staking_queue_state)
        ? UnbondingStakingQueueState.fromJSON(object.unbonding_staking_queue_state)
        : undefined,
      unbonding_staking_queue_entries: Array.isArray(object?.unbonding_staking_queue_entries)
        ? object.unbonding_staking_queue_entries.map((e: any) => UnbondingStakingQueueEntry.fromJSON(e))
        : [],
      delegator_list: Array.isArray(object?.delegator_list)
        ? object.delegator_list.map((e: any) => Delegator.fromJSON(e))
        : [],
      delegation_pool_data_list: Array.isArray(object?.delegation_pool_data_list)
        ? object.delegation_pool_data_list.map((e: any) => DelegationPoolData.fromJSON(e))
        : [],
      delegation_entries_list: Array.isArray(object?.delegation_entries_list)
        ? object.delegation_entries_list.map((e: any) => DelegationEntries.fromJSON(e))
        : [],
      proposal_list: Array.isArray(object?.proposal_list)
        ? object.proposal_list.map((e: any) => Proposal.fromJSON(e))
        : [],
      unbonding_delegation_queue_state: isSet(object.unbonding_delegation_queue_state)
        ? UnbondingDelegationQueueState.fromJSON(object.unbonding_delegation_queue_state)
        : undefined,
      unbonding_delegation_queue_entries: Array.isArray(object?.unbonding_delegation_queue_entries)
        ? object.unbonding_delegation_queue_entries.map((e: any) => UnbondingDelegationQueueEntry.fromJSON(e))
        : [],
      redelegation_cooldown_list: Array.isArray(object?.redelegation_cooldown_list)
        ? object.redelegation_cooldown_list.map((e: any) => RedelegationCooldown.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.pool_list) {
      obj.pool_list = message.pool_list.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool_list = [];
    }
    message.pool_count !== undefined && (obj.pool_count = message.pool_count);
    if (message.funder_list) {
      obj.funder_list = message.funder_list.map((e) => e ? Funder.toJSON(e) : undefined);
    } else {
      obj.funder_list = [];
    }
    if (message.staker_list) {
      obj.staker_list = message.staker_list.map((e) => e ? Staker.toJSON(e) : undefined);
    } else {
      obj.staker_list = [];
    }
    message.commission_change_queue_state !== undefined &&
      (obj.commission_change_queue_state = message.commission_change_queue_state
        ? CommissionChangeQueueState.toJSON(message.commission_change_queue_state)
        : undefined);
    if (message.commission_change_queue_entry) {
      obj.commission_change_queue_entry = message.commission_change_queue_entry.map((e) =>
        e ? CommissionChangeQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.commission_change_queue_entry = [];
    }
    if (message.unbonding_staker_list) {
      obj.unbonding_staker_list = message.unbonding_staker_list.map((e) => e ? UnbondingStaker.toJSON(e) : undefined);
    } else {
      obj.unbonding_staker_list = [];
    }
    message.unbonding_staking_queue_state !== undefined &&
      (obj.unbonding_staking_queue_state = message.unbonding_staking_queue_state
        ? UnbondingStakingQueueState.toJSON(message.unbonding_staking_queue_state)
        : undefined);
    if (message.unbonding_staking_queue_entries) {
      obj.unbonding_staking_queue_entries = message.unbonding_staking_queue_entries.map((e) =>
        e ? UnbondingStakingQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.unbonding_staking_queue_entries = [];
    }
    if (message.delegator_list) {
      obj.delegator_list = message.delegator_list.map((e) => e ? Delegator.toJSON(e) : undefined);
    } else {
      obj.delegator_list = [];
    }
    if (message.delegation_pool_data_list) {
      obj.delegation_pool_data_list = message.delegation_pool_data_list.map((e) =>
        e ? DelegationPoolData.toJSON(e) : undefined
      );
    } else {
      obj.delegation_pool_data_list = [];
    }
    if (message.delegation_entries_list) {
      obj.delegation_entries_list = message.delegation_entries_list.map((e) =>
        e ? DelegationEntries.toJSON(e) : undefined
      );
    } else {
      obj.delegation_entries_list = [];
    }
    if (message.proposal_list) {
      obj.proposal_list = message.proposal_list.map((e) => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposal_list = [];
    }
    message.unbonding_delegation_queue_state !== undefined &&
      (obj.unbonding_delegation_queue_state = message.unbonding_delegation_queue_state
        ? UnbondingDelegationQueueState.toJSON(message.unbonding_delegation_queue_state)
        : undefined);
    if (message.unbonding_delegation_queue_entries) {
      obj.unbonding_delegation_queue_entries = message.unbonding_delegation_queue_entries.map((e) =>
        e ? UnbondingDelegationQueueEntry.toJSON(e) : undefined
      );
    } else {
      obj.unbonding_delegation_queue_entries = [];
    }
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
    message.pool_list = object.pool_list?.map((e) => Pool.fromPartial(e)) || [];
    message.pool_count = object.pool_count ?? "0";
    message.funder_list = object.funder_list?.map((e) => Funder.fromPartial(e)) || [];
    message.staker_list = object.staker_list?.map((e) => Staker.fromPartial(e)) || [];
    message.commission_change_queue_state =
      (object.commission_change_queue_state !== undefined && object.commission_change_queue_state !== null)
        ? CommissionChangeQueueState.fromPartial(object.commission_change_queue_state)
        : undefined;
    message.commission_change_queue_entry =
      object.commission_change_queue_entry?.map((e) => CommissionChangeQueueEntry.fromPartial(e)) || [];
    message.unbonding_staker_list = object.unbonding_staker_list?.map((e) => UnbondingStaker.fromPartial(e)) || [];
    message.unbonding_staking_queue_state =
      (object.unbonding_staking_queue_state !== undefined && object.unbonding_staking_queue_state !== null)
        ? UnbondingStakingQueueState.fromPartial(object.unbonding_staking_queue_state)
        : undefined;
    message.unbonding_staking_queue_entries =
      object.unbonding_staking_queue_entries?.map((e) => UnbondingStakingQueueEntry.fromPartial(e)) || [];
    message.delegator_list = object.delegator_list?.map((e) => Delegator.fromPartial(e)) || [];
    message.delegation_pool_data_list =
      object.delegation_pool_data_list?.map((e) => DelegationPoolData.fromPartial(e)) || [];
    message.delegation_entries_list = object.delegation_entries_list?.map((e) => DelegationEntries.fromPartial(e)) ||
      [];
    message.proposal_list = object.proposal_list?.map((e) => Proposal.fromPartial(e)) || [];
    message.unbonding_delegation_queue_state =
      (object.unbonding_delegation_queue_state !== undefined && object.unbonding_delegation_queue_state !== null)
        ? UnbondingDelegationQueueState.fromPartial(object.unbonding_delegation_queue_state)
        : undefined;
    message.unbonding_delegation_queue_entries =
      object.unbonding_delegation_queue_entries?.map((e) => UnbondingDelegationQueueEntry.fromPartial(e)) || [];
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
