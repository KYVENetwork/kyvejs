/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PoolStatus, poolStatusFromJSON, poolStatusToJSON, poolStatusToNumber } from "../../pool/v1beta1/pool";

export const protobufPackage = "kyve.query.v1beta1";

/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPool {
  /** id is the ID of the pool */
  id: string;
  /** name of the pool */
  name: string;
  /**
   * runtime for the protocol nodes
   * like evm, bitcoin, etc.
   */
  runtime: string;
  /** logo of the pool */
  logo: string;
  /** operating_cost is the base payout for each bundle reward */
  operating_cost: string;
  /** upload_interval is the interval bundles get created */
  upload_interval: string;
  /**
   * total_funds of the pool. If the pool runs
   * out of funds no more bundles will be produced
   */
  total_funds: string;
  /** total_delegation of the pool */
  total_delegation: string;
  /**
   * status of the pool if pool is able
   * to produce bundles, etc.
   */
  status: PoolStatus;
}

/**
 * FullStaker aggregates information from the staker and its delegators
 * as well as pending queue entries into one object.
 * It contains almost all needed information for a convenient usage
 */
export interface FullStaker {
  /** address of the staker */
  address: string;
  /** metadata as logo, moniker, etc. */
  metadata?: StakerMetadata;
  /** amount the staker has delegated to himself */
  self_delegation: string;
  /**
   * unbonding_amount is the amount the staker is currently unbonding
   * from the self-delegation.
   * This amount can be larger than `amount` when the staker
   * got slashed during unbonding. However, at the end of
   * the unbonding period this amount is double checked with the
   * remaining amount.
   */
  self_delegation_unbonding: string;
  /**
   * total_delegation returns the sum of all $KYVE users
   * have delegated to this staker
   */
  total_delegation: string;
  /**
   * delegator_count is the total number of individual
   * delegator addresses for that user.
   */
  delegator_count: string;
  /**
   * pools is a list of all pools the staker is currently
   * participating, i.e. allowed to vote and upload data.
   */
  pools: PoolMembership[];
}

/** StakerMetadata contains static information for a staker */
export interface StakerMetadata {
  /**
   * commission is the percentage of the rewards that will
   * get transferred to the staker before the remaining
   * rewards are split across all delegators
   */
  commission: string;
  /**
   * moniker is a human-readable name for displaying
   * the staker in the UI
   */
  moniker: string;
  /** website is a https-link to the website of the staker */
  website: string;
  /** identity from keybase.io */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
  /**
   * pending_commission_change shows if the staker plans
   * to change its commission. Delegators will see a warning in
   * the UI. A Commission change takes some time until
   * the commission is applied. Users have time to redelegate
   * if they not agree with the new commission.
   */
  pending_commission_change?: CommissionChangeEntry;
}

/**
 * CommissionChangeEntry shows when the old commission
 * of a staker will change to the new commission
 */
export interface CommissionChangeEntry {
  /**
   * commission is the new commission that will
   * become active once the change-time is over
   */
  commission: string;
  /**
   * creation_date is the UNIX-timestamp (in seconds)
   * of when the entry was created.
   */
  creation_date: string;
}

/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembership {
  /** pool contains useful information about the pool */
  pool?: BasicPool;
  /**
   * points indicates if the staker is inactive
   * If the staker misses a vote, a point is added.
   * After 5 points the staker is removed from
   * the stakers set.
   */
  points: string;
  /**
   * is_leaving indicates if a user has scheduled a
   * a PoolLeave entry. After the leave-time is over
   * the staker will no longer participate in that pool
   */
  is_leaving: boolean;
  /**
   * Valaddress is the address which is authorized to vote
   * and submit bundles. If the server gets compromised
   * the staker can just change the valaddress.
   */
  valaddress: string;
  /**
   * balance is the valaddress account balance and indicates
   * whether or not the valaccount needs additional funds to
   * pay for gas fees
   */
  balance: string;
}

function createBaseBasicPool(): BasicPool {
  return {
    id: "0",
    name: "",
    runtime: "",
    logo: "",
    operating_cost: "0",
    upload_interval: "0",
    total_funds: "0",
    total_delegation: "0",
    status: PoolStatus.POOL_STATUS_UNSPECIFIED,
  };
}

export const BasicPool = {
  encode(message: BasicPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    if (message.operating_cost !== "0") {
      writer.uint32(40).uint64(message.operating_cost);
    }
    if (message.upload_interval !== "0") {
      writer.uint32(48).uint64(message.upload_interval);
    }
    if (message.total_funds !== "0") {
      writer.uint32(56).uint64(message.total_funds);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(64).uint64(message.total_delegation);
    }
    if (message.status !== PoolStatus.POOL_STATUS_UNSPECIFIED) {
      writer.uint32(72).int32(poolStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        case 4:
          message.logo = reader.string();
          break;
        case 5:
          message.operating_cost = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.upload_interval = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.total_funds = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.status = poolStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BasicPool {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      operating_cost: isSet(object.operating_cost) ? String(object.operating_cost) : "0",
      upload_interval: isSet(object.upload_interval) ? String(object.upload_interval) : "0",
      total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : PoolStatus.POOL_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: BasicPool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.operating_cost !== undefined && (obj.operating_cost = message.operating_cost);
    message.upload_interval !== undefined && (obj.upload_interval = message.upload_interval);
    message.total_funds !== undefined && (obj.total_funds = message.total_funds);
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.status !== undefined && (obj.status = poolStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BasicPool>, I>>(object: I): BasicPool {
    const message = createBaseBasicPool();
    message.id = object.id ?? "0";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.operating_cost = object.operating_cost ?? "0";
    message.upload_interval = object.upload_interval ?? "0";
    message.total_funds = object.total_funds ?? "0";
    message.total_delegation = object.total_delegation ?? "0";
    message.status = object.status ?? PoolStatus.POOL_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseFullStaker(): FullStaker {
  return {
    address: "",
    metadata: undefined,
    self_delegation: "0",
    self_delegation_unbonding: "0",
    total_delegation: "0",
    delegator_count: "0",
    pools: [],
  };
}

export const FullStaker = {
  encode(message: FullStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.metadata !== undefined) {
      StakerMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.self_delegation !== "0") {
      writer.uint32(24).uint64(message.self_delegation);
    }
    if (message.self_delegation_unbonding !== "0") {
      writer.uint32(32).uint64(message.self_delegation_unbonding);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(40).uint64(message.total_delegation);
    }
    if (message.delegator_count !== "0") {
      writer.uint32(48).uint64(message.delegator_count);
    }
    for (const v of message.pools) {
      PoolMembership.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullStaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.metadata = StakerMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.self_delegation = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.self_delegation_unbonding = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.delegator_count = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.pools.push(PoolMembership.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FullStaker {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      metadata: isSet(object.metadata) ? StakerMetadata.fromJSON(object.metadata) : undefined,
      self_delegation: isSet(object.self_delegation) ? String(object.self_delegation) : "0",
      self_delegation_unbonding: isSet(object.self_delegation_unbonding)
        ? String(object.self_delegation_unbonding)
        : "0",
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      delegator_count: isSet(object.delegator_count) ? String(object.delegator_count) : "0",
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolMembership.fromJSON(e)) : [],
    };
  },

  toJSON(message: FullStaker): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? StakerMetadata.toJSON(message.metadata) : undefined);
    message.self_delegation !== undefined && (obj.self_delegation = message.self_delegation);
    message.self_delegation_unbonding !== undefined &&
      (obj.self_delegation_unbonding = message.self_delegation_unbonding);
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.delegator_count !== undefined && (obj.delegator_count = message.delegator_count);
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? PoolMembership.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FullStaker>, I>>(object: I): FullStaker {
    const message = createBaseFullStaker();
    message.address = object.address ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? StakerMetadata.fromPartial(object.metadata)
      : undefined;
    message.self_delegation = object.self_delegation ?? "0";
    message.self_delegation_unbonding = object.self_delegation_unbonding ?? "0";
    message.total_delegation = object.total_delegation ?? "0";
    message.delegator_count = object.delegator_count ?? "0";
    message.pools = object.pools?.map((e) => PoolMembership.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStakerMetadata(): StakerMetadata {
  return {
    commission: "",
    moniker: "",
    website: "",
    identity: "",
    security_contact: "",
    details: "",
    pending_commission_change: undefined,
  };
}

export const StakerMetadata = {
  encode(message: StakerMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.security_contact !== "") {
      writer.uint32(42).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    if (message.pending_commission_change !== undefined) {
      CommissionChangeEntry.encode(message.pending_commission_change, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakerMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakerMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.identity = reader.string();
          break;
        case 5:
          message.security_contact = reader.string();
          break;
        case 6:
          message.details = reader.string();
          break;
        case 7:
          message.pending_commission_change = CommissionChangeEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakerMetadata {
    return {
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      security_contact: isSet(object.security_contact) ? String(object.security_contact) : "",
      details: isSet(object.details) ? String(object.details) : "",
      pending_commission_change: isSet(object.pending_commission_change)
        ? CommissionChangeEntry.fromJSON(object.pending_commission_change)
        : undefined,
    };
  },

  toJSON(message: StakerMetadata): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.identity !== undefined && (obj.identity = message.identity);
    message.security_contact !== undefined && (obj.security_contact = message.security_contact);
    message.details !== undefined && (obj.details = message.details);
    message.pending_commission_change !== undefined &&
      (obj.pending_commission_change = message.pending_commission_change
        ? CommissionChangeEntry.toJSON(message.pending_commission_change)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakerMetadata>, I>>(object: I): StakerMetadata {
    const message = createBaseStakerMetadata();
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
    message.pending_commission_change =
      (object.pending_commission_change !== undefined && object.pending_commission_change !== null)
        ? CommissionChangeEntry.fromPartial(object.pending_commission_change)
        : undefined;
    return message;
  },
};

function createBaseCommissionChangeEntry(): CommissionChangeEntry {
  return { commission: "", creation_date: "0" };
}

export const CommissionChangeEntry = {
  encode(message: CommissionChangeEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commission !== "") {
      writer.uint32(10).string(message.commission);
    }
    if (message.creation_date !== "0") {
      writer.uint32(16).int64(message.creation_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionChangeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionChangeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = reader.string();
          break;
        case 2:
          message.creation_date = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommissionChangeEntry {
    return {
      commission: isSet(object.commission) ? String(object.commission) : "",
      creation_date: isSet(object.creation_date) ? String(object.creation_date) : "0",
    };
  },

  toJSON(message: CommissionChangeEntry): unknown {
    const obj: any = {};
    message.commission !== undefined && (obj.commission = message.commission);
    message.creation_date !== undefined && (obj.creation_date = message.creation_date);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommissionChangeEntry>, I>>(object: I): CommissionChangeEntry {
    const message = createBaseCommissionChangeEntry();
    message.commission = object.commission ?? "";
    message.creation_date = object.creation_date ?? "0";
    return message;
  },
};

function createBasePoolMembership(): PoolMembership {
  return { pool: undefined, points: "0", is_leaving: false, valaddress: "", balance: "0" };
}

export const PoolMembership = {
  encode(message: PoolMembership, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      BasicPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.points !== "0") {
      writer.uint32(16).uint64(message.points);
    }
    if (message.is_leaving === true) {
      writer.uint32(24).bool(message.is_leaving);
    }
    if (message.valaddress !== "") {
      writer.uint32(34).string(message.valaddress);
    }
    if (message.balance !== "0") {
      writer.uint32(40).uint64(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolMembership {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMembership();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = BasicPool.decode(reader, reader.uint32());
          break;
        case 2:
          message.points = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.is_leaving = reader.bool();
          break;
        case 4:
          message.valaddress = reader.string();
          break;
        case 5:
          message.balance = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolMembership {
    return {
      pool: isSet(object.pool) ? BasicPool.fromJSON(object.pool) : undefined,
      points: isSet(object.points) ? String(object.points) : "0",
      is_leaving: isSet(object.is_leaving) ? Boolean(object.is_leaving) : false,
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      balance: isSet(object.balance) ? String(object.balance) : "0",
    };
  },

  toJSON(message: PoolMembership): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? BasicPool.toJSON(message.pool) : undefined);
    message.points !== undefined && (obj.points = message.points);
    message.is_leaving !== undefined && (obj.is_leaving = message.is_leaving);
    message.valaddress !== undefined && (obj.valaddress = message.valaddress);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolMembership>, I>>(object: I): PoolMembership {
    const message = createBasePoolMembership();
    message.pool = (object.pool !== undefined && object.pool !== null) ? BasicPool.fromPartial(object.pool) : undefined;
    message.points = object.points ?? "0";
    message.is_leaving = object.is_leaving ?? false;
    message.valaddress = object.valaddress ?? "";
    message.balance = object.balance ?? "0";
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
