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
  delegator?: StakerDelegatorResponse;
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
  pagination?: PageRequest;
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
  pagination?: PageResponse;
}

/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
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
  pagination?: PageResponse;
}

/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
  /** staker ... */
  staker?: FullStaker;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorRequest {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
    };
  },

  toJSON(message: QueryDelegatorRequest): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = StakerDelegatorResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorResponse {
    return { delegator: isSet(object.delegator) ? StakerDelegatorResponse.fromJSON(object.delegator) : undefined };
  },

  toJSON(message: QueryDelegatorResponse): unknown {
    const obj: any = {};
    message.delegator !== undefined &&
      (obj.delegator = message.delegator ? StakerDelegatorResponse.toJSON(message.delegator) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakerDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.current_reward = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.delegation_amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakerDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      current_reward: isSet(object.current_reward) ? String(object.current_reward) : "0",
      delegation_amount: isSet(object.delegation_amount) ? String(object.delegation_amount) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: StakerDelegatorResponse): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.current_reward !== undefined && (obj.current_reward = message.current_reward);
    message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount);
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorsByStakerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorsByStakerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: QueryDelegatorsByStakerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorsByStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegators.push(StakerDelegatorResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.total_delegator_count = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorsByStakerResponse {
    return {
      delegators: Array.isArray(object?.delegators)
        ? object.delegators.map((e: any) => StakerDelegatorResponse.fromJSON(e))
        : [],
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      total_delegator_count: isSet(object.total_delegator_count) ? String(object.total_delegator_count) : "0",
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorsByStakerResponse): unknown {
    const obj: any = {};
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) => e ? StakerDelegatorResponse.toJSON(e) : undefined);
    } else {
      obj.delegators = [];
    }
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.total_delegator_count !== undefined && (obj.total_delegator_count = message.total_delegator_count);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByDelegatorRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
    };
  },

  toJSON(message: QueryStakersByDelegatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.stakers.push(DelegationForStakerResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      stakers: Array.isArray(object?.stakers)
        ? object.stakers.map((e: any) => DelegationForStakerResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryStakersByDelegatorResponse): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.stakers) {
      obj.stakers = message.stakers.map((e) => e ? DelegationForStakerResponse.toJSON(e) : undefined);
    } else {
      obj.stakers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationForStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = FullStaker.decode(reader, reader.uint32());
          break;
        case 2:
          message.current_reward = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.delegation_amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationForStakerResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
      current_reward: isSet(object.current_reward) ? String(object.current_reward) : "0",
      delegation_amount: isSet(object.delegation_amount) ? String(object.delegation_amount) : "0",
    };
  },

  toJSON(message: DelegationForStakerResponse): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker ? FullStaker.toJSON(message.staker) : undefined);
    message.current_reward !== undefined && (obj.current_reward = message.current_reward);
    message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount);
    return obj;
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

export class QueryDelegationClientImpl implements QueryDelegation {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.query.v1beta1.QueryDelegation";
    this.rpc = rpc;
    this.Delegator = this.Delegator.bind(this);
    this.DelegatorsByStaker = this.DelegatorsByStaker.bind(this);
    this.StakersByDelegator = this.StakersByDelegator.bind(this);
  }
  Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse> {
    const data = QueryDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delegator", data);
    return promise.then((data) => QueryDelegatorResponse.decode(new _m0.Reader(data)));
  }

  DelegatorsByStaker(request: QueryDelegatorsByStakerRequest): Promise<QueryDelegatorsByStakerResponse> {
    const data = QueryDelegatorsByStakerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DelegatorsByStaker", data);
    return promise.then((data) => QueryDelegatorsByStakerResponse.decode(new _m0.Reader(data)));
  }

  StakersByDelegator(request: QueryStakersByDelegatorRequest): Promise<QueryStakersByDelegatorResponse> {
    const data = QueryStakersByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StakersByDelegator", data);
    return promise.then((data) => QueryStakersByDelegatorResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
