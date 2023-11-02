/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker } from "./query";

export const protobufPackage = "kyve.query.v1beta1";

/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
}

/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
  /** delegator ... */
  delegator?: StakerDelegatorResponse | undefined;
}

/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** current_reward ... */
  current_reward: string;
  /** delegation_amount ... */
  delegation_amount: string;
  /** staker ... */
  staker: string;
}

/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** staker ... */
  staker: string;
}

/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponse {
  /** delegators ... */
  delegators: StakerDelegatorResponse[];
  /** total_delegation ... (consider metadata object) */
  total_delegation: string;
  /** total_delegation ... */
  total_delegator_count: string;
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}

/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** delegator ... */
  delegator: string;
}

/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** stakers ... */
  stakers: DelegationForStakerResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}

/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
  /** staker ... */
  staker?:
    | FullStaker
    | undefined;
  /** current_reward ... */
  current_reward: string;
  /** delegation_amount ... */
  delegation_amount: string;
}

function createBaseQueryDelegatorRequest(): QueryDelegatorRequest {
  return { staker: "", delegator: "" };
}

export const QueryDelegatorRequest = {
  encode(message: QueryDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorRequest {
    return {
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      delegator: isSet(object.delegator) ? globalThis.String(object.delegator) : "",
    };
  },

  toJSON(message: QueryDelegatorRequest): unknown {
    const obj: any = {};
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorRequest>, I>>(base?: I): QueryDelegatorRequest {
    return QueryDelegatorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorRequest>, I>>(object: I): QueryDelegatorRequest {
    const message = createBaseQueryDelegatorRequest();
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    return message;
  },
};

function createBaseQueryDelegatorResponse(): QueryDelegatorResponse {
  return { delegator: undefined };
}

export const QueryDelegatorResponse = {
  encode(message: QueryDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== undefined) {
      StakerDelegatorResponse.encode(message.delegator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegator = StakerDelegatorResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorResponse {
    return { delegator: isSet(object.delegator) ? StakerDelegatorResponse.fromJSON(object.delegator) : undefined };
  },

  toJSON(message: QueryDelegatorResponse): unknown {
    const obj: any = {};
    if (message.delegator !== undefined) {
      obj.delegator = StakerDelegatorResponse.toJSON(message.delegator);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorResponse>, I>>(base?: I): QueryDelegatorResponse {
    return QueryDelegatorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorResponse>, I>>(object: I): QueryDelegatorResponse {
    const message = createBaseQueryDelegatorResponse();
    message.delegator = (object.delegator !== undefined && object.delegator !== null)
      ? StakerDelegatorResponse.fromPartial(object.delegator)
      : undefined;
    return message;
  },
};

function createBaseStakerDelegatorResponse(): StakerDelegatorResponse {
  return { delegator: "", current_reward: "0", delegation_amount: "0", staker: "" };
}

export const StakerDelegatorResponse = {
  encode(message: StakerDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.current_reward !== "0") {
      writer.uint32(16).uint64(message.current_reward);
    }
    if (message.delegation_amount !== "0") {
      writer.uint32(24).uint64(message.delegation_amount);
    }
    if (message.staker !== "") {
      writer.uint32(34).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakerDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakerDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.current_reward = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.delegation_amount = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.staker = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakerDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? globalThis.String(object.delegator) : "",
      current_reward: isSet(object.current_reward) ? globalThis.String(object.current_reward) : "0",
      delegation_amount: isSet(object.delegation_amount) ? globalThis.String(object.delegation_amount) : "0",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },

  toJSON(message: StakerDelegatorResponse): unknown {
    const obj: any = {};
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    if (message.current_reward !== "0") {
      obj.current_reward = message.current_reward;
    }
    if (message.delegation_amount !== "0") {
      obj.delegation_amount = message.delegation_amount;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakerDelegatorResponse>, I>>(base?: I): StakerDelegatorResponse {
    return StakerDelegatorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakerDelegatorResponse>, I>>(object: I): StakerDelegatorResponse {
    const message = createBaseStakerDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.current_reward = object.current_reward ?? "0";
    message.delegation_amount = object.delegation_amount ?? "0";
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseQueryDelegatorsByStakerRequest(): QueryDelegatorsByStakerRequest {
  return { pagination: undefined, staker: "" };
}

export const QueryDelegatorsByStakerRequest = {
  encode(message: QueryDelegatorsByStakerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorsByStakerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorsByStakerRequest();
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

          message.staker = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorsByStakerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },

  toJSON(message: QueryDelegatorsByStakerRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorsByStakerRequest>, I>>(base?: I): QueryDelegatorsByStakerRequest {
    return QueryDelegatorsByStakerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorsByStakerRequest>, I>>(
    object: I,
  ): QueryDelegatorsByStakerRequest {
    const message = createBaseQueryDelegatorsByStakerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseQueryDelegatorsByStakerResponse(): QueryDelegatorsByStakerResponse {
  return { delegators: [], total_delegation: "0", total_delegator_count: "0", pagination: undefined };
}

export const QueryDelegatorsByStakerResponse = {
  encode(message: QueryDelegatorsByStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegators) {
      StakerDelegatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_delegation !== "0") {
      writer.uint32(16).uint64(message.total_delegation);
    }
    if (message.total_delegator_count !== "0") {
      writer.uint32(24).uint64(message.total_delegator_count);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorsByStakerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorsByStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegators.push(StakerDelegatorResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_delegation = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_delegator_count = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): QueryDelegatorsByStakerResponse {
    return {
      delegators: globalThis.Array.isArray(object?.delegators)
        ? object.delegators.map((e: any) => StakerDelegatorResponse.fromJSON(e))
        : [],
      total_delegation: isSet(object.total_delegation) ? globalThis.String(object.total_delegation) : "0",
      total_delegator_count: isSet(object.total_delegator_count)
        ? globalThis.String(object.total_delegator_count)
        : "0",
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorsByStakerResponse): unknown {
    const obj: any = {};
    if (message.delegators?.length) {
      obj.delegators = message.delegators.map((e) => StakerDelegatorResponse.toJSON(e));
    }
    if (message.total_delegation !== "0") {
      obj.total_delegation = message.total_delegation;
    }
    if (message.total_delegator_count !== "0") {
      obj.total_delegator_count = message.total_delegator_count;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorsByStakerResponse>, I>>(base?: I): QueryDelegatorsByStakerResponse {
    return QueryDelegatorsByStakerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorsByStakerResponse>, I>>(
    object: I,
  ): QueryDelegatorsByStakerResponse {
    const message = createBaseQueryDelegatorsByStakerResponse();
    message.delegators = object.delegators?.map((e) => StakerDelegatorResponse.fromPartial(e)) || [];
    message.total_delegation = object.total_delegation ?? "0";
    message.total_delegator_count = object.total_delegator_count ?? "0";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryStakersByDelegatorRequest(): QueryStakersByDelegatorRequest {
  return { pagination: undefined, delegator: "" };
}

export const QueryStakersByDelegatorRequest = {
  encode(message: QueryStakersByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByDelegatorRequest();
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

          message.delegator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByDelegatorRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      delegator: isSet(object.delegator) ? globalThis.String(object.delegator) : "",
    };
  },

  toJSON(message: QueryStakersByDelegatorRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersByDelegatorRequest>, I>>(base?: I): QueryStakersByDelegatorRequest {
    return QueryStakersByDelegatorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersByDelegatorRequest>, I>>(
    object: I,
  ): QueryStakersByDelegatorRequest {
    const message = createBaseQueryStakersByDelegatorRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.delegator = object.delegator ?? "";
    return message;
  },
};

function createBaseQueryStakersByDelegatorResponse(): QueryStakersByDelegatorResponse {
  return { delegator: "", stakers: [], pagination: undefined };
}

export const QueryStakersByDelegatorResponse = {
  encode(message: QueryStakersByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.stakers) {
      DelegationForStakerResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stakers.push(DelegationForStakerResponse.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QueryStakersByDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? globalThis.String(object.delegator) : "",
      stakers: globalThis.Array.isArray(object?.stakers)
        ? object.stakers.map((e: any) => DelegationForStakerResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryStakersByDelegatorResponse): unknown {
    const obj: any = {};
    if (message.delegator !== "") {
      obj.delegator = message.delegator;
    }
    if (message.stakers?.length) {
      obj.stakers = message.stakers.map((e) => DelegationForStakerResponse.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersByDelegatorResponse>, I>>(base?: I): QueryStakersByDelegatorResponse {
    return QueryStakersByDelegatorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersByDelegatorResponse>, I>>(
    object: I,
  ): QueryStakersByDelegatorResponse {
    const message = createBaseQueryStakersByDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.stakers = object.stakers?.map((e) => DelegationForStakerResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseDelegationForStakerResponse(): DelegationForStakerResponse {
  return { staker: undefined, current_reward: "0", delegation_amount: "0" };
}

export const DelegationForStakerResponse = {
  encode(message: DelegationForStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    if (message.current_reward !== "0") {
      writer.uint32(16).uint64(message.current_reward);
    }
    if (message.delegation_amount !== "0") {
      writer.uint32(24).uint64(message.delegation_amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationForStakerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationForStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = FullStaker.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.current_reward = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.delegation_amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelegationForStakerResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
      current_reward: isSet(object.current_reward) ? globalThis.String(object.current_reward) : "0",
      delegation_amount: isSet(object.delegation_amount) ? globalThis.String(object.delegation_amount) : "0",
    };
  },

  toJSON(message: DelegationForStakerResponse): unknown {
    const obj: any = {};
    if (message.staker !== undefined) {
      obj.staker = FullStaker.toJSON(message.staker);
    }
    if (message.current_reward !== "0") {
      obj.current_reward = message.current_reward;
    }
    if (message.delegation_amount !== "0") {
      obj.delegation_amount = message.delegation_amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelegationForStakerResponse>, I>>(base?: I): DelegationForStakerResponse {
    return DelegationForStakerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelegationForStakerResponse>, I>>(object: I): DelegationForStakerResponse {
    const message = createBaseDelegationForStakerResponse();
    message.staker = (object.staker !== undefined && object.staker !== null)
      ? FullStaker.fromPartial(object.staker)
      : undefined;
    message.current_reward = object.current_reward ?? "0";
    message.delegation_amount = object.delegation_amount ?? "0";
    return message;
  },
};

/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryDelegation {
  /** Delegator returns delegation information for a specific delegator of a specific staker. */
  Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse>;
  /**
   * DelegatorsByStaker returns all delegators that have delegated to the given staker
   * This query is paginated.
   */
  DelegatorsByStaker(request: QueryDelegatorsByStakerRequest): Promise<QueryDelegatorsByStakerResponse>;
  /**
   * StakersByPoolAndDelegator returns all stakers the given delegator has delegated to.
   * This query is paginated.
   */
  StakersByDelegator(request: QueryStakersByDelegatorRequest): Promise<QueryStakersByDelegatorResponse>;
}

export const QueryDelegationServiceName = "kyve.query.v1beta1.QueryDelegation";
export class QueryDelegationClientImpl implements QueryDelegation {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryDelegationServiceName;
    this.rpc = rpc;
    this.Delegator = this.Delegator.bind(this);
    this.DelegatorsByStaker = this.DelegatorsByStaker.bind(this);
    this.StakersByDelegator = this.StakersByDelegator.bind(this);
  }
  Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse> {
    const data = QueryDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delegator", data);
    return promise.then((data) => QueryDelegatorResponse.decode(_m0.Reader.create(data)));
  }

  DelegatorsByStaker(request: QueryDelegatorsByStakerRequest): Promise<QueryDelegatorsByStakerResponse> {
    const data = QueryDelegatorsByStakerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegatorsByStaker", data);
    return promise.then((data) => QueryDelegatorsByStakerResponse.decode(_m0.Reader.create(data)));
  }

  StakersByDelegator(request: QueryStakersByDelegatorRequest): Promise<QueryStakersByDelegatorResponse> {
    const data = QueryStakersByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StakersByDelegator", data);
    return promise.then((data) => QueryStakersByDelegatorResponse.decode(_m0.Reader.create(data)));
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
