/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin, DecCoin } from "../../base/v1beta1/coin";

export const protobufPackage = "cosmos.distribution.v1beta1";

/** Params defines the set of params for the distribution module. */
export interface Params {
  community_tax: string;
  /**
   * Deprecated: The base_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   *
   * @deprecated
   */
  base_proposer_reward: string;
  /**
   * Deprecated: The bonus_proposer_reward field is deprecated and is no longer used
   * in the x/distribution module's reward mechanism.
   *
   * @deprecated
   */
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}

/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
  cumulative_reward_ratio: DecCoin[];
  reference_count: number;
}

/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: string;
}

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
  validator_period: string;
  fraction: string;
}

/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
  validator_slash_events: ValidatorSlashEvent[];
}

/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  community_pool: DecCoin[];
}

/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 *
 * @deprecated
 */
export interface CommunityPoolSpendProposal {
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}

/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
  previous_period: string;
  stake: string;
  height: string;
}

/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
  validator_address: string;
  reward: DecCoin[];
}

/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}

function createBaseParams(): Params {
  return { community_tax: "", base_proposer_reward: "", bonus_proposer_reward: "", withdraw_addr_enabled: false };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.community_tax !== "") {
      writer.uint32(10).string(message.community_tax);
    }
    if (message.base_proposer_reward !== "") {
      writer.uint32(18).string(message.base_proposer_reward);
    }
    if (message.bonus_proposer_reward !== "") {
      writer.uint32(26).string(message.bonus_proposer_reward);
    }
    if (message.withdraw_addr_enabled === true) {
      writer.uint32(32).bool(message.withdraw_addr_enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.community_tax = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.base_proposer_reward = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bonus_proposer_reward = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.withdraw_addr_enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      community_tax: isSet(object.community_tax) ? String(object.community_tax) : "",
      base_proposer_reward: isSet(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
      bonus_proposer_reward: isSet(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
      withdraw_addr_enabled: isSet(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.community_tax !== "") {
      obj.community_tax = message.community_tax;
    }
    if (message.base_proposer_reward !== "") {
      obj.base_proposer_reward = message.base_proposer_reward;
    }
    if (message.bonus_proposer_reward !== "") {
      obj.bonus_proposer_reward = message.bonus_proposer_reward;
    }
    if (message.withdraw_addr_enabled === true) {
      obj.withdraw_addr_enabled = message.withdraw_addr_enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.community_tax = object.community_tax ?? "";
    message.base_proposer_reward = object.base_proposer_reward ?? "";
    message.bonus_proposer_reward = object.bonus_proposer_reward ?? "";
    message.withdraw_addr_enabled = object.withdraw_addr_enabled ?? false;
    return message;
  },
};

function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return { cumulative_reward_ratio: [], reference_count: 0 };
}

export const ValidatorHistoricalRewards = {
  encode(message: ValidatorHistoricalRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cumulative_reward_ratio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.reference_count !== 0) {
      writer.uint32(16).uint32(message.reference_count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cumulative_reward_ratio.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.reference_count = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorHistoricalRewards {
    return {
      cumulative_reward_ratio: Array.isArray(object?.cumulative_reward_ratio)
        ? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromJSON(e))
        : [],
      reference_count: isSet(object.reference_count) ? Number(object.reference_count) : 0,
    };
  },

  toJSON(message: ValidatorHistoricalRewards): unknown {
    const obj: any = {};
    if (message.cumulative_reward_ratio?.length) {
      obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map((e) => DecCoin.toJSON(e));
    }
    if (message.reference_count !== 0) {
      obj.reference_count = Math.round(message.reference_count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorHistoricalRewards>, I>>(base?: I): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorHistoricalRewards>, I>>(object: I): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map((e) => DecCoin.fromPartial(e)) || [];
    message.reference_count = object.reference_count ?? 0;
    return message;
  },
};

function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return { rewards: [], period: "0" };
}

export const ValidatorCurrentRewards = {
  encode(message: ValidatorCurrentRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== "0") {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.period = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      period: isSet(object.period) ? String(object.period) : "0",
    };
  },

  toJSON(message: ValidatorCurrentRewards): unknown {
    const obj: any = {};
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
    }
    if (message.period !== "0") {
      obj.period = message.period;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorCurrentRewards>, I>>(base?: I): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorCurrentRewards>, I>>(object: I): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.period = object.period ?? "0";
    return message;
  },
};

function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return { commission: [] };
}

export const ValidatorAccumulatedCommission = {
  encode(message: ValidatorAccumulatedCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ValidatorAccumulatedCommission): unknown {
    const obj: any = {};
    if (message.commission?.length) {
      obj.commission = message.commission.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorAccumulatedCommission>, I>>(base?: I): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorAccumulatedCommission>, I>>(
    object: I,
  ): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return { rewards: [] };
}

export const ValidatorOutstandingRewards = {
  encode(message: ValidatorOutstandingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorOutstandingRewards {
    return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [] };
  },

  toJSON(message: ValidatorOutstandingRewards): unknown {
    const obj: any = {};
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorOutstandingRewards>, I>>(base?: I): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorOutstandingRewards>, I>>(object: I): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return { validator_period: "0", fraction: "" };
}

export const ValidatorSlashEvent = {
  encode(message: ValidatorSlashEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_period !== "0") {
      writer.uint32(8).uint64(message.validator_period);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validator_period = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fraction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorSlashEvent {
    return {
      validator_period: isSet(object.validator_period) ? String(object.validator_period) : "0",
      fraction: isSet(object.fraction) ? String(object.fraction) : "",
    };
  },

  toJSON(message: ValidatorSlashEvent): unknown {
    const obj: any = {};
    if (message.validator_period !== "0") {
      obj.validator_period = message.validator_period;
    }
    if (message.fraction !== "") {
      obj.fraction = message.fraction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorSlashEvent>, I>>(base?: I): ValidatorSlashEvent {
    return ValidatorSlashEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvent>, I>>(object: I): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validator_period = object.validator_period ?? "0";
    message.fraction = object.fraction ?? "";
    return message;
  },
};

function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return { validator_slash_events: [] };
}

export const ValidatorSlashEvents = {
  encode(message: ValidatorSlashEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validator_slash_events) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_slash_events.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorSlashEvents {
    return {
      validator_slash_events: Array.isArray(object?.validator_slash_events)
        ? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorSlashEvents): unknown {
    const obj: any = {};
    if (message.validator_slash_events?.length) {
      obj.validator_slash_events = message.validator_slash_events.map((e) => ValidatorSlashEvent.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorSlashEvents>, I>>(base?: I): ValidatorSlashEvents {
    return ValidatorSlashEvents.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvents>, I>>(object: I): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validator_slash_events = object.validator_slash_events?.map((e) => ValidatorSlashEvent.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseFeePool(): FeePool {
  return { community_pool: [] };
}

export const FeePool = {
  encode(message: FeePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.community_pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.community_pool.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeePool {
    return {
      community_pool: Array.isArray(object?.community_pool)
        ? object.community_pool.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FeePool): unknown {
    const obj: any = {};
    if (message.community_pool?.length) {
      obj.community_pool = message.community_pool.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeePool>, I>>(base?: I): FeePool {
    return FeePool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeePool>, I>>(object: I): FeePool {
    const message = createBaseFeePool();
    message.community_pool = object.community_pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return { title: "", description: "", recipient: "", amount: [] };
}

export const CommunityPoolSpendProposal = {
  encode(message: CommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: CommunityPoolSpendProposal): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    if (message.amount?.length) {
      obj.amount = message.amount.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityPoolSpendProposal>, I>>(base?: I): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposal>, I>>(object: I): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return { previous_period: "0", stake: "", height: "0" };
}

export const DelegatorStartingInfo = {
  encode(message: DelegatorStartingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previous_period !== "0") {
      writer.uint32(8).uint64(message.previous_period);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (message.height !== "0") {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.previous_period = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stake = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.height = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegatorStartingInfo {
    return {
      previous_period: isSet(object.previous_period) ? String(object.previous_period) : "0",
      stake: isSet(object.stake) ? String(object.stake) : "",
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: DelegatorStartingInfo): unknown {
    const obj: any = {};
    if (message.previous_period !== "0") {
      obj.previous_period = message.previous_period;
    }
    if (message.stake !== "") {
      obj.stake = message.stake;
    }
    if (message.height !== "0") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelegatorStartingInfo>, I>>(base?: I): DelegatorStartingInfo {
    return DelegatorStartingInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorStartingInfo>, I>>(object: I): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previous_period = object.previous_period ?? "0";
    message.stake = object.stake ?? "";
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return { validator_address: "", reward: [] };
}

export const DelegationDelegatorReward = {
  encode(message: DelegationDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator_address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegationDelegatorReward {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: DelegationDelegatorReward): unknown {
    const obj: any = {};
    if (message.validator_address !== "") {
      obj.validator_address = message.validator_address;
    }
    if (message.reward?.length) {
      obj.reward = message.reward.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelegationDelegatorReward>, I>>(base?: I): DelegationDelegatorReward {
    return DelegationDelegatorReward.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DelegationDelegatorReward>, I>>(object: I): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validator_address = object.validator_address ?? "";
    message.reward = object.reward?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return { title: "", description: "", recipient: "", amount: "", deposit: "" };
}

export const CommunityPoolSpendProposalWithDeposit = {
  encode(message: CommunityPoolSpendProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipient = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deposit = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
    };
  },

  toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.recipient !== "") {
      obj.recipient = message.recipient;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.deposit !== "") {
      obj.deposit = message.deposit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityPoolSpendProposalWithDeposit>, I>>(
    base?: I,
  ): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposalWithDeposit>, I>>(
    object: I,
  ): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
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
