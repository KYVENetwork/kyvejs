/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BundleProposal } from "../../bundles/v1beta1/bundles";
import { Pool, PoolStatus, poolStatusFromJSON, poolStatusToJSON, poolStatusToNumber } from "../../pool/v1beta1/pool";

export const protobufPackage = "kyve.query.v1beta1";

/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** search ... */
  search: string;
  /** runtime ... */
  runtime: string;
  /** paused ... */
  paused: boolean;
  /** storage_provider_id ... */
  storage_provider_id: number;
}

/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
  /** pools ... */
  pools: PoolResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** PoolResponse ... */
export interface PoolResponse {
  /** id ... */
  id: string;
  /** data ... */
  data?: Pool;
  /** bundle_proposal ... */
  bundle_proposal?: BundleProposal;
  /** stakers ... */
  stakers: string[];
  /** total_stake ... */
  total_self_delegation: string;
  /** total_delegation ... */
  total_delegation: string;
  /** status ... */
  status: PoolStatus;
}

/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  /** id defines the unique ID of the pool. */
  id: string;
}

/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool ... */
  pool?: PoolResponse;
}

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { pagination: undefined, search: "", runtime: "", paused: false, storage_provider_id: 0 };
}

export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.search !== "") {
      writer.uint32(18).string(message.search);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.paused === true) {
      writer.uint32(32).bool(message.paused);
    }
    if (message.storage_provider_id !== 0) {
      writer.uint32(40).uint32(message.storage_provider_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.search = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        case 4:
          message.paused = reader.bool();
          break;
        case 5:
          message.storage_provider_id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      search: isSet(object.search) ? String(object.search) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      storage_provider_id: isSet(object.storage_provider_id) ? Number(object.storage_provider_id) : 0,
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.search !== undefined && (obj.search = message.search);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.paused !== undefined && (obj.paused = message.paused);
    message.storage_provider_id !== undefined && (obj.storage_provider_id = Math.round(message.storage_provider_id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(object: I): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.search = object.search ?? "";
    message.runtime = object.runtime ?? "";
    message.paused = object.paused ?? false;
    message.storage_provider_id = object.storage_provider_id ?? 0;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => e ? PoolResponse.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(object: I): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => PoolResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBasePoolResponse(): PoolResponse {
  return {
    id: "0",
    data: undefined,
    bundle_proposal: undefined,
    stakers: [],
    total_self_delegation: "0",
    total_delegation: "0",
    status: PoolStatus.POOL_STATUS_UNSPECIFIED,
  };
}

export const PoolResponse = {
  encode(message: PoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.data !== undefined) {
      Pool.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.bundle_proposal !== undefined) {
      BundleProposal.encode(message.bundle_proposal, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.stakers) {
      writer.uint32(34).string(v!);
    }
    if (message.total_self_delegation !== "0") {
      writer.uint32(40).uint64(message.total_self_delegation);
    }
    if (message.total_delegation !== "0") {
      writer.uint32(48).uint64(message.total_delegation);
    }
    if (message.status !== PoolStatus.POOL_STATUS_UNSPECIFIED) {
      writer.uint32(56).int32(poolStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.data = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.bundle_proposal = BundleProposal.decode(reader, reader.uint32());
          break;
        case 4:
          message.stakers.push(reader.string());
          break;
        case 5:
          message.total_self_delegation = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.total_delegation = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.status = poolStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      data: isSet(object.data) ? Pool.fromJSON(object.data) : undefined,
      bundle_proposal: isSet(object.bundle_proposal) ? BundleProposal.fromJSON(object.bundle_proposal) : undefined,
      stakers: Array.isArray(object?.stakers) ? object.stakers.map((e: any) => String(e)) : [],
      total_self_delegation: isSet(object.total_self_delegation) ? String(object.total_self_delegation) : "0",
      total_delegation: isSet(object.total_delegation) ? String(object.total_delegation) : "0",
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : PoolStatus.POOL_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: PoolResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.data !== undefined && (obj.data = message.data ? Pool.toJSON(message.data) : undefined);
    message.bundle_proposal !== undefined &&
      (obj.bundle_proposal = message.bundle_proposal ? BundleProposal.toJSON(message.bundle_proposal) : undefined);
    if (message.stakers) {
      obj.stakers = message.stakers.map((e) => e);
    } else {
      obj.stakers = [];
    }
    message.total_self_delegation !== undefined && (obj.total_self_delegation = message.total_self_delegation);
    message.total_delegation !== undefined && (obj.total_delegation = message.total_delegation);
    message.status !== undefined && (obj.status = poolStatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolResponse>, I>>(object: I): PoolResponse {
    const message = createBasePoolResponse();
    message.id = object.id ?? "0";
    message.data = (object.data !== undefined && object.data !== null) ? Pool.fromPartial(object.data) : undefined;
    message.bundle_proposal = (object.bundle_proposal !== undefined && object.bundle_proposal !== null)
      ? BundleProposal.fromPartial(object.bundle_proposal)
      : undefined;
    message.stakers = object.stakers?.map((e) => e) || [];
    message.total_self_delegation = object.total_self_delegation ?? "0";
    message.total_delegation = object.total_delegation ?? "0";
    message.status = object.status ?? PoolStatus.POOL_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { id: "0" };
}

export const QueryPoolRequest = {
  encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return { id: isSet(object.id) ? String(object.id) : "0" };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return { pool: isSet(object.pool) ? PoolResponse.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? PoolResponse.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? PoolResponse.fromPartial(object.pool)
      : undefined;
    return message;
  },
};

/** QueryPool ... */
export interface QueryPool {
  /** Pools queries for all pools. */
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Pool queries a pool by its Id. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
}

export class QueryPoolClientImpl implements QueryPool {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.query.v1beta1.QueryPool";
    this.rpc = rpc;
    this.Pools = this.Pools.bind(this);
    this.Pool = this.Pool.bind(this);
  }
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Pools", data);
    return promise.then((data) => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
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
