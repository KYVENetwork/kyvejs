/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BasicPool, FullStaker } from "./query";

export const protobufPackage = "kyve.query.v1beta1";

/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
  /** address ... */
  address: string;
}

/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
  /** balance ... */
  balance: string;
  /** protocol_staking ... */
  protocol_self_delegation: string;
  /** protocol_staking_unbonding */
  protocol_self_delegation_unbonding: string;
  /** protocol_delegation ... */
  protocol_delegation: string;
  /** protocol_delegation_unbonding */
  protocol_delegation_unbonding: string;
  /** protocol_rewards ... */
  protocol_rewards: string;
  /** protocol_funding ... */
  protocol_funding: string;
}

/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** address ... */
  address: string;
}

/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponse {
  /** balance ... */
  unbondings: DelegationUnbonding[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}

/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
  /** amount */
  amount: string;
  /** creation_time */
  creation_time: string;
  /** staker */
  staker?: FullStaker | undefined;
}

/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequest {
  /** address ... */
  address: string;
}

/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponse {
  /** funded ... */
  funded: Funded[];
}

/** Funded ... */
export interface Funded {
  /** amount ... */
  amount: string;
  /** pool ... */
  pool?: BasicPool | undefined;
}

/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequest {
  /** address ... */
  address: string;
}

/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponse {
  /** redelegation_cooldown_entries ... */
  redelegation_cooldown_entries: RedelegationEntry[];
  /** availableSlots ... */
  available_slots: string;
}

/** RedelegationEntry ... */
export interface RedelegationEntry {
  /** creation_date ... */
  creation_date: string;
  /** finish_date ... */
  finish_date: string;
}

function createBaseQueryAccountAssetsRequest(): QueryAccountAssetsRequest {
  return { address: "" };
}

export const QueryAccountAssetsRequest = {
  encode(message: QueryAccountAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAssetsRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: QueryAccountAssetsRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountAssetsRequest>, I>>(base?: I): QueryAccountAssetsRequest {
    return QueryAccountAssetsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountAssetsRequest>, I>>(object: I): QueryAccountAssetsRequest {
    const message = createBaseQueryAccountAssetsRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountAssetsResponse(): QueryAccountAssetsResponse {
  return {
    balance: "0",
    protocol_self_delegation: "0",
    protocol_self_delegation_unbonding: "0",
    protocol_delegation: "0",
    protocol_delegation_unbonding: "0",
    protocol_rewards: "0",
    protocol_funding: "0",
  };
}

export const QueryAccountAssetsResponse = {
  encode(message: QueryAccountAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "0") {
      writer.uint32(8).uint64(message.balance);
    }
    if (message.protocol_self_delegation !== "0") {
      writer.uint32(16).uint64(message.protocol_self_delegation);
    }
    if (message.protocol_self_delegation_unbonding !== "0") {
      writer.uint32(24).uint64(message.protocol_self_delegation_unbonding);
    }
    if (message.protocol_delegation !== "0") {
      writer.uint32(32).uint64(message.protocol_delegation);
    }
    if (message.protocol_delegation_unbonding !== "0") {
      writer.uint32(40).uint64(message.protocol_delegation_unbonding);
    }
    if (message.protocol_rewards !== "0") {
      writer.uint32(48).uint64(message.protocol_rewards);
    }
    if (message.protocol_funding !== "0") {
      writer.uint32(56).uint64(message.protocol_funding);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.balance = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.protocol_self_delegation = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.protocol_self_delegation_unbonding = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.protocol_delegation = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.protocol_delegation_unbonding = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.protocol_rewards = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.protocol_funding = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAssetsResponse {
    return {
      balance: isSet(object.balance) ? globalThis.String(object.balance) : "0",
      protocol_self_delegation: isSet(object.protocol_self_delegation)
        ? globalThis.String(object.protocol_self_delegation)
        : "0",
      protocol_self_delegation_unbonding: isSet(object.protocol_self_delegation_unbonding)
        ? globalThis.String(object.protocol_self_delegation_unbonding)
        : "0",
      protocol_delegation: isSet(object.protocol_delegation) ? globalThis.String(object.protocol_delegation) : "0",
      protocol_delegation_unbonding: isSet(object.protocol_delegation_unbonding)
        ? globalThis.String(object.protocol_delegation_unbonding)
        : "0",
      protocol_rewards: isSet(object.protocol_rewards) ? globalThis.String(object.protocol_rewards) : "0",
      protocol_funding: isSet(object.protocol_funding) ? globalThis.String(object.protocol_funding) : "0",
    };
  },

  toJSON(message: QueryAccountAssetsResponse): unknown {
    const obj: any = {};
    if (message.balance !== "0") {
      obj.balance = message.balance;
    }
    if (message.protocol_self_delegation !== "0") {
      obj.protocol_self_delegation = message.protocol_self_delegation;
    }
    if (message.protocol_self_delegation_unbonding !== "0") {
      obj.protocol_self_delegation_unbonding = message.protocol_self_delegation_unbonding;
    }
    if (message.protocol_delegation !== "0") {
      obj.protocol_delegation = message.protocol_delegation;
    }
    if (message.protocol_delegation_unbonding !== "0") {
      obj.protocol_delegation_unbonding = message.protocol_delegation_unbonding;
    }
    if (message.protocol_rewards !== "0") {
      obj.protocol_rewards = message.protocol_rewards;
    }
    if (message.protocol_funding !== "0") {
      obj.protocol_funding = message.protocol_funding;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountAssetsResponse>, I>>(base?: I): QueryAccountAssetsResponse {
    return QueryAccountAssetsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountAssetsResponse>, I>>(object: I): QueryAccountAssetsResponse {
    const message = createBaseQueryAccountAssetsResponse();
    message.balance = object.balance ?? "0";
    message.protocol_self_delegation = object.protocol_self_delegation ?? "0";
    message.protocol_self_delegation_unbonding = object.protocol_self_delegation_unbonding ?? "0";
    message.protocol_delegation = object.protocol_delegation ?? "0";
    message.protocol_delegation_unbonding = object.protocol_delegation_unbonding ?? "0";
    message.protocol_rewards = object.protocol_rewards ?? "0";
    message.protocol_funding = object.protocol_funding ?? "0";
    return message;
  },
};

function createBaseQueryAccountDelegationUnbondingsRequest(): QueryAccountDelegationUnbondingsRequest {
  return { pagination: undefined, address: "" };
}

export const QueryAccountDelegationUnbondingsRequest = {
  encode(message: QueryAccountDelegationUnbondingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDelegationUnbondingsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDelegationUnbondingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDelegationUnbondingsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: QueryAccountDelegationUnbondingsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountDelegationUnbondingsRequest>, I>>(
    base?: I,
  ): QueryAccountDelegationUnbondingsRequest {
    return QueryAccountDelegationUnbondingsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountDelegationUnbondingsRequest>, I>>(
    object: I,
  ): QueryAccountDelegationUnbondingsRequest {
    const message = createBaseQueryAccountDelegationUnbondingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountDelegationUnbondingsResponse(): QueryAccountDelegationUnbondingsResponse {
  return { unbondings: [], pagination: undefined };
}

export const QueryAccountDelegationUnbondingsResponse = {
  encode(message: QueryAccountDelegationUnbondingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      DelegationUnbonding.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDelegationUnbondingsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDelegationUnbondingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbondings.push(DelegationUnbonding.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDelegationUnbondingsResponse {
    return {
      unbondings: globalThis.Array.isArray(object?.unbondings)
        ? object.unbondings.map((e: any) => DelegationUnbonding.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAccountDelegationUnbondingsResponse): unknown {
    const obj: any = {};
    if (message.unbondings?.length) {
      obj.unbondings = message.unbondings.map((e) => DelegationUnbonding.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountDelegationUnbondingsResponse>, I>>(
    base?: I,
  ): QueryAccountDelegationUnbondingsResponse {
    return QueryAccountDelegationUnbondingsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountDelegationUnbondingsResponse>, I>>(
    object: I,
  ): QueryAccountDelegationUnbondingsResponse {
    const message = createBaseQueryAccountDelegationUnbondingsResponse();
    message.unbondings = object.unbondings?.map((e) => DelegationUnbonding.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseDelegationUnbonding(): DelegationUnbonding {
  return { amount: "0", creation_time: "0", staker: undefined };
}

export const DelegationUnbonding = {
  encode(message: DelegationUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "0") {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.creation_time !== "0") {
      writer.uint32(16).uint64(message.creation_time);
    }
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationUnbonding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.creation_time = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.staker = FullStaker.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegationUnbonding {
    return {
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      creation_time: isSet(object.creation_time) ? globalThis.String(object.creation_time) : "0",
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
    };
  },

  toJSON(message: DelegationUnbonding): unknown {
    const obj: any = {};
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.creation_time !== "0") {
      obj.creation_time = message.creation_time;
    }
    if (message.staker !== undefined) {
      obj.staker = FullStaker.toJSON(message.staker);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelegationUnbonding>, I>>(base?: I): DelegationUnbonding {
    return DelegationUnbonding.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelegationUnbonding>, I>>(object: I): DelegationUnbonding {
    const message = createBaseDelegationUnbonding();
    message.amount = object.amount ?? "0";
    message.creation_time = object.creation_time ?? "0";
    message.staker = (object.staker !== undefined && object.staker !== null)
      ? FullStaker.fromPartial(object.staker)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountFundedListRequest(): QueryAccountFundedListRequest {
  return { address: "" };
}

export const QueryAccountFundedListRequest = {
  encode(message: QueryAccountFundedListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountFundedListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountFundedListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountFundedListRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: QueryAccountFundedListRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountFundedListRequest>, I>>(base?: I): QueryAccountFundedListRequest {
    return QueryAccountFundedListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountFundedListRequest>, I>>(
    object: I,
  ): QueryAccountFundedListRequest {
    const message = createBaseQueryAccountFundedListRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountFundedListResponse(): QueryAccountFundedListResponse {
  return { funded: [] };
}

export const QueryAccountFundedListResponse = {
  encode(message: QueryAccountFundedListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.funded) {
      Funded.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountFundedListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountFundedListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.funded.push(Funded.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountFundedListResponse {
    return {
      funded: globalThis.Array.isArray(object?.funded) ? object.funded.map((e: any) => Funded.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryAccountFundedListResponse): unknown {
    const obj: any = {};
    if (message.funded?.length) {
      obj.funded = message.funded.map((e) => Funded.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountFundedListResponse>, I>>(base?: I): QueryAccountFundedListResponse {
    return QueryAccountFundedListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountFundedListResponse>, I>>(
    object: I,
  ): QueryAccountFundedListResponse {
    const message = createBaseQueryAccountFundedListResponse();
    message.funded = object.funded?.map((e) => Funded.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFunded(): Funded {
  return { amount: "0", pool: undefined };
}

export const Funded = {
  encode(message: Funded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "0") {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.pool !== undefined) {
      BasicPool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pool = BasicPool.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Funded {
    return {
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      pool: isSet(object.pool) ? BasicPool.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: Funded): unknown {
    const obj: any = {};
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.pool !== undefined) {
      obj.pool = BasicPool.toJSON(message.pool);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Funded>, I>>(base?: I): Funded {
    return Funded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Funded>, I>>(object: I): Funded {
    const message = createBaseFunded();
    message.amount = object.amount ?? "0";
    message.pool = (object.pool !== undefined && object.pool !== null) ? BasicPool.fromPartial(object.pool) : undefined;
    return message;
  },
};

function createBaseQueryAccountRedelegationRequest(): QueryAccountRedelegationRequest {
  return { address: "" };
}

export const QueryAccountRedelegationRequest = {
  encode(message: QueryAccountRedelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRedelegationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRedelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountRedelegationRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: QueryAccountRedelegationRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountRedelegationRequest>, I>>(base?: I): QueryAccountRedelegationRequest {
    return QueryAccountRedelegationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountRedelegationRequest>, I>>(
    object: I,
  ): QueryAccountRedelegationRequest {
    const message = createBaseQueryAccountRedelegationRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountRedelegationResponse(): QueryAccountRedelegationResponse {
  return { redelegation_cooldown_entries: [], available_slots: "0" };
}

export const QueryAccountRedelegationResponse = {
  encode(message: QueryAccountRedelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegation_cooldown_entries) {
      RedelegationEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.available_slots !== "0") {
      writer.uint32(16).uint64(message.available_slots);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redelegation_cooldown_entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.available_slots = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAccountRedelegationResponse {
    return {
      redelegation_cooldown_entries: globalThis.Array.isArray(object?.redelegation_cooldown_entries)
        ? object.redelegation_cooldown_entries.map((e: any) => RedelegationEntry.fromJSON(e))
        : [],
      available_slots: isSet(object.available_slots) ? globalThis.String(object.available_slots) : "0",
    };
  },

  toJSON(message: QueryAccountRedelegationResponse): unknown {
    const obj: any = {};
    if (message.redelegation_cooldown_entries?.length) {
      obj.redelegation_cooldown_entries = message.redelegation_cooldown_entries.map((e) => RedelegationEntry.toJSON(e));
    }
    if (message.available_slots !== "0") {
      obj.available_slots = message.available_slots;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAccountRedelegationResponse>, I>>(
    base?: I,
  ): QueryAccountRedelegationResponse {
    return QueryAccountRedelegationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountRedelegationResponse>, I>>(
    object: I,
  ): QueryAccountRedelegationResponse {
    const message = createBaseQueryAccountRedelegationResponse();
    message.redelegation_cooldown_entries =
      object.redelegation_cooldown_entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    message.available_slots = object.available_slots ?? "0";
    return message;
  },
};

function createBaseRedelegationEntry(): RedelegationEntry {
  return { creation_date: "0", finish_date: "0" };
}

export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creation_date !== "0") {
      writer.uint32(8).uint64(message.creation_date);
    }
    if (message.finish_date !== "0") {
      writer.uint32(16).uint64(message.finish_date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.creation_date = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.finish_date = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    return {
      creation_date: isSet(object.creation_date) ? globalThis.String(object.creation_date) : "0",
      finish_date: isSet(object.finish_date) ? globalThis.String(object.finish_date) : "0",
    };
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    if (message.creation_date !== "0") {
      obj.creation_date = message.creation_date;
    }
    if (message.finish_date !== "0") {
      obj.finish_date = message.finish_date;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RedelegationEntry>, I>>(base?: I): RedelegationEntry {
    return RedelegationEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RedelegationEntry>, I>>(object: I): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creation_date = object.creation_date ?? "0";
    message.finish_date = object.finish_date ?? "0";
    return message;
  },
};

/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryAccount {
  /** AccountAssets returns an overview of the sum of all balances for a given user. e.g. balance, staking, funding, etc. */
  AccountAssets(request: QueryAccountAssetsRequest): Promise<QueryAccountAssetsResponse>;
  /** AccountDelegationUnbondings ... */
  AccountDelegationUnbondings(
    request: QueryAccountDelegationUnbondingsRequest,
  ): Promise<QueryAccountDelegationUnbondingsResponse>;
  /** AccountFundedList returns all pools the given user has funded into. */
  AccountFundedList(request: QueryAccountFundedListRequest): Promise<QueryAccountFundedListResponse>;
  /** AccountRedelegation ... */
  AccountRedelegation(request: QueryAccountRedelegationRequest): Promise<QueryAccountRedelegationResponse>;
}

export const QueryAccountServiceName = "kyve.query.v1beta1.QueryAccount";
export class QueryAccountClientImpl implements QueryAccount {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryAccountServiceName;
    this.rpc = rpc;
    this.AccountAssets = this.AccountAssets.bind(this);
    this.AccountDelegationUnbondings = this.AccountDelegationUnbondings.bind(this);
    this.AccountFundedList = this.AccountFundedList.bind(this);
    this.AccountRedelegation = this.AccountRedelegation.bind(this);
  }
  AccountAssets(request: QueryAccountAssetsRequest): Promise<QueryAccountAssetsResponse> {
    const data = QueryAccountAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountAssets", data);
    return promise.then((data) => QueryAccountAssetsResponse.decode(_m0.Reader.create(data)));
  }

  AccountDelegationUnbondings(
    request: QueryAccountDelegationUnbondingsRequest,
  ): Promise<QueryAccountDelegationUnbondingsResponse> {
    const data = QueryAccountDelegationUnbondingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountDelegationUnbondings", data);
    return promise.then((data) => QueryAccountDelegationUnbondingsResponse.decode(_m0.Reader.create(data)));
  }

  AccountFundedList(request: QueryAccountFundedListRequest): Promise<QueryAccountFundedListResponse> {
    const data = QueryAccountFundedListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountFundedList", data);
    return promise.then((data) => QueryAccountFundedListResponse.decode(_m0.Reader.create(data)));
  }

  AccountRedelegation(request: QueryAccountRedelegationRequest): Promise<QueryAccountRedelegationResponse> {
    const data = QueryAccountRedelegationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountRedelegation", data);
    return promise.then((data) => QueryAccountRedelegationResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
