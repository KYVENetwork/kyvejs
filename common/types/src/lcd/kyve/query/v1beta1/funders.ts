/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "kyve.query.v1beta1";

/** FundingStatus ... */
export enum FundingStatus {
  /** FUNDING_STATUS_UNSPECIFIED - FundingStatusUnspecified ... */
  FUNDING_STATUS_UNSPECIFIED = "FUNDING_STATUS_UNSPECIFIED",
  /** FUNDING_STATUS_ACTIVE - FundingStatusActive status is set when the funding is active. */
  FUNDING_STATUS_ACTIVE = "FUNDING_STATUS_ACTIVE",
  /** FUNDING_STATUS_INACTIVE - FundingStatusInactive status is set when the funding has been used up or refunded. */
  FUNDING_STATUS_INACTIVE = "FUNDING_STATUS_INACTIVE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fundingStatusFromJSON(object: any): FundingStatus {
  switch (object) {
    case 0:
    case "FUNDING_STATUS_UNSPECIFIED":
      return FundingStatus.FUNDING_STATUS_UNSPECIFIED;
    case 1:
    case "FUNDING_STATUS_ACTIVE":
      return FundingStatus.FUNDING_STATUS_ACTIVE;
    case 2:
    case "FUNDING_STATUS_INACTIVE":
      return FundingStatus.FUNDING_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FundingStatus.UNRECOGNIZED;
  }
}

export function fundingStatusToJSON(object: FundingStatus): string {
  switch (object) {
    case FundingStatus.FUNDING_STATUS_UNSPECIFIED:
      return "FUNDING_STATUS_UNSPECIFIED";
    case FundingStatus.FUNDING_STATUS_ACTIVE:
      return "FUNDING_STATUS_ACTIVE";
    case FundingStatus.FUNDING_STATUS_INACTIVE:
      return "FUNDING_STATUS_INACTIVE";
    case FundingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function fundingStatusToNumber(object: FundingStatus): number {
  switch (object) {
    case FundingStatus.FUNDING_STATUS_UNSPECIFIED:
      return 0;
    case FundingStatus.FUNDING_STATUS_ACTIVE:
      return 1;
    case FundingStatus.FUNDING_STATUS_INACTIVE:
      return 2;
    case FundingStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Funder ... */
export interface Funder {
  /** address ... */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description ... */
  description: string;
  /** statistics about all the fundings of the funder. */
  stats?: FundingStats | undefined;
}

/** FundingStats ... */
export interface FundingStats {
  /** total_used_funds are the total funds that have been distributed by the funder. */
  total_used_funds: string;
  /** total_allocated_funds are the total funds that have been allocated by the funder. They can either get distributed or refunded. */
  total_allocated_funds: string;
  /** total_amount_per_bundle is the total amount per bundle of all fundings of the funder. */
  total_amount_per_bundle: string;
  /** pools_funded are the ids of the pools that have been funded by the funder. */
  pools_funded: string[];
}

/** Funding ... */
export interface Funding {
  /** funder_address */
  funder_address: string;
  /** pool_id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
  /** amount_per_bundle ... */
  amount_per_bundle: string;
  /** total_funded ... */
  total_funded: string;
}

/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** search ... */
  search: string;
}

/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponse {
  /** pagination defines the pagination in the response. */
  pagination?:
    | PageResponse
    | undefined;
  /** funders ... */
  funders: Funder[];
}

/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
  /** address ... */
  address: string;
  /** status ... */
  status: FundingStatus;
}

/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponse {
  /** funder ... */
  funder?:
    | Funder
    | undefined;
  /** fundings ... */
  fundings: Funding[];
}

/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** address ... */
  address: string;
  /** status ... */
  status: FundingStatus;
}

/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponse {
  /** pagination defines the pagination in the response. */
  pagination?:
    | PageResponse
    | undefined;
  /** fundings ... */
  fundings: Funding[];
}

/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** pool_id ... */
  pool_id: string;
  /** status ... */
  status: FundingStatus;
}

/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponse {
  /** pagination defines the pagination in the response. */
  pagination?:
    | PageResponse
    | undefined;
  /** fundings ... */
  fundings: Funding[];
}

function createBaseFunder(): Funder {
  return { address: "", moniker: "", identity: "", website: "", contact: "", description: "", stats: undefined };
}

export const Funder = {
  encode(message: Funder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.stats !== undefined) {
      FundingStats.encode(message.stats, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.moniker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stats = FundingStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      contact: isSet(object.contact) ? globalThis.String(object.contact) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      stats: isSet(object.stats) ? FundingStats.fromJSON(object.stats) : undefined,
    };
  },

  toJSON(message: Funder): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.contact !== "") {
      obj.contact = message.contact;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.stats !== undefined) {
      obj.stats = FundingStats.toJSON(message.stats);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Funder>, I>>(base?: I): Funder {
    return Funder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Funder>, I>>(object: I): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    message.stats = (object.stats !== undefined && object.stats !== null)
      ? FundingStats.fromPartial(object.stats)
      : undefined;
    return message;
  },
};

function createBaseFundingStats(): FundingStats {
  return { total_used_funds: "0", total_allocated_funds: "0", total_amount_per_bundle: "0", pools_funded: [] };
}

export const FundingStats = {
  encode(message: FundingStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total_used_funds !== "0") {
      writer.uint32(8).uint64(message.total_used_funds);
    }
    if (message.total_allocated_funds !== "0") {
      writer.uint32(16).uint64(message.total_allocated_funds);
    }
    if (message.total_amount_per_bundle !== "0") {
      writer.uint32(24).uint64(message.total_amount_per_bundle);
    }
    writer.uint32(34).fork();
    for (const v of message.pools_funded) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FundingStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFundingStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total_used_funds = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_allocated_funds = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_amount_per_bundle = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag === 32) {
            message.pools_funded.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pools_funded.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FundingStats {
    return {
      total_used_funds: isSet(object.total_used_funds) ? globalThis.String(object.total_used_funds) : "0",
      total_allocated_funds: isSet(object.total_allocated_funds)
        ? globalThis.String(object.total_allocated_funds)
        : "0",
      total_amount_per_bundle: isSet(object.total_amount_per_bundle)
        ? globalThis.String(object.total_amount_per_bundle)
        : "0",
      pools_funded: globalThis.Array.isArray(object?.pools_funded)
        ? object.pools_funded.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: FundingStats): unknown {
    const obj: any = {};
    if (message.total_used_funds !== "0") {
      obj.total_used_funds = message.total_used_funds;
    }
    if (message.total_allocated_funds !== "0") {
      obj.total_allocated_funds = message.total_allocated_funds;
    }
    if (message.total_amount_per_bundle !== "0") {
      obj.total_amount_per_bundle = message.total_amount_per_bundle;
    }
    if (message.pools_funded?.length) {
      obj.pools_funded = message.pools_funded;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FundingStats>, I>>(base?: I): FundingStats {
    return FundingStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FundingStats>, I>>(object: I): FundingStats {
    const message = createBaseFundingStats();
    message.total_used_funds = object.total_used_funds ?? "0";
    message.total_allocated_funds = object.total_allocated_funds ?? "0";
    message.total_amount_per_bundle = object.total_amount_per_bundle ?? "0";
    message.pools_funded = object.pools_funded?.map((e) => e) || [];
    return message;
  },
};

function createBaseFunding(): Funding {
  return { funder_address: "", pool_id: "0", amount: "0", amount_per_bundle: "0", total_funded: "0" };
}

export const Funding = {
  encode(message: Funding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funder_address !== "") {
      writer.uint32(10).string(message.funder_address);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amount_per_bundle !== "0") {
      writer.uint32(32).uint64(message.amount_per_bundle);
    }
    if (message.total_funded !== "0") {
      writer.uint32(40).uint64(message.total_funded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.funder_address = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount_per_bundle = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.total_funded = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Funding {
    return {
      funder_address: isSet(object.funder_address) ? globalThis.String(object.funder_address) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      amount_per_bundle: isSet(object.amount_per_bundle) ? globalThis.String(object.amount_per_bundle) : "0",
      total_funded: isSet(object.total_funded) ? globalThis.String(object.total_funded) : "0",
    };
  },

  toJSON(message: Funding): unknown {
    const obj: any = {};
    if (message.funder_address !== "") {
      obj.funder_address = message.funder_address;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.amount_per_bundle !== "0") {
      obj.amount_per_bundle = message.amount_per_bundle;
    }
    if (message.total_funded !== "0") {
      obj.total_funded = message.total_funded;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Funding>, I>>(base?: I): Funding {
    return Funding.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Funding>, I>>(object: I): Funding {
    const message = createBaseFunding();
    message.funder_address = object.funder_address ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amount = object.amount ?? "0";
    message.amount_per_bundle = object.amount_per_bundle ?? "0";
    message.total_funded = object.total_funded ?? "0";
    return message;
  },
};

function createBaseQueryFundersRequest(): QueryFundersRequest {
  return { pagination: undefined, search: "" };
}

export const QueryFundersRequest = {
  encode(message: QueryFundersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.search !== "") {
      writer.uint32(18).string(message.search);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundersRequest();
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

          message.search = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFundersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      search: isSet(object.search) ? globalThis.String(object.search) : "",
    };
  },

  toJSON(message: QueryFundersRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.search !== "") {
      obj.search = message.search;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFundersRequest>, I>>(base?: I): QueryFundersRequest {
    return QueryFundersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFundersRequest>, I>>(object: I): QueryFundersRequest {
    const message = createBaseQueryFundersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.search = object.search ?? "";
    return message;
  },
};

function createBaseQueryFundersResponse(): QueryFundersResponse {
  return { pagination: undefined, funders: [] };
}

export const QueryFundersResponse = {
  encode(message: QueryFundersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.funders) {
      Funder.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.funders.push(Funder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFundersResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      funders: globalThis.Array.isArray(object?.funders) ? object.funders.map((e: any) => Funder.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryFundersResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.funders?.length) {
      obj.funders = message.funders.map((e) => Funder.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFundersResponse>, I>>(base?: I): QueryFundersResponse {
    return QueryFundersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFundersResponse>, I>>(object: I): QueryFundersResponse {
    const message = createBaseQueryFundersResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.funders = object.funders?.map((e) => Funder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFunderRequest(): QueryFunderRequest {
  return { address: "", status: FundingStatus.FUNDING_STATUS_UNSPECIFIED };
}

export const QueryFunderRequest = {
  encode(message: QueryFunderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== FundingStatus.FUNDING_STATUS_UNSPECIFIED) {
      writer.uint32(24).int32(fundingStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFunderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = fundingStatusFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFunderRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : FundingStatus.FUNDING_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: QueryFunderRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.status !== FundingStatus.FUNDING_STATUS_UNSPECIFIED) {
      obj.status = fundingStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFunderRequest>, I>>(base?: I): QueryFunderRequest {
    return QueryFunderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFunderRequest>, I>>(object: I): QueryFunderRequest {
    const message = createBaseQueryFunderRequest();
    message.address = object.address ?? "";
    message.status = object.status ?? FundingStatus.FUNDING_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseQueryFunderResponse(): QueryFunderResponse {
  return { funder: undefined, fundings: [] };
}

export const QueryFunderResponse = {
  encode(message: QueryFunderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funder !== undefined) {
      Funder.encode(message.funder, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fundings) {
      Funding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFunderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.funder = Funder.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fundings.push(Funding.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFunderResponse {
    return {
      funder: isSet(object.funder) ? Funder.fromJSON(object.funder) : undefined,
      fundings: globalThis.Array.isArray(object?.fundings) ? object.fundings.map((e: any) => Funding.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryFunderResponse): unknown {
    const obj: any = {};
    if (message.funder !== undefined) {
      obj.funder = Funder.toJSON(message.funder);
    }
    if (message.fundings?.length) {
      obj.fundings = message.fundings.map((e) => Funding.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFunderResponse>, I>>(base?: I): QueryFunderResponse {
    return QueryFunderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFunderResponse>, I>>(object: I): QueryFunderResponse {
    const message = createBaseQueryFunderResponse();
    message.funder = (object.funder !== undefined && object.funder !== null)
      ? Funder.fromPartial(object.funder)
      : undefined;
    message.fundings = object.fundings?.map((e) => Funding.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFundingsByFunderRequest(): QueryFundingsByFunderRequest {
  return { pagination: undefined, address: "", status: FundingStatus.FUNDING_STATUS_UNSPECIFIED };
}

export const QueryFundingsByFunderRequest = {
  encode(message: QueryFundingsByFunderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== FundingStatus.FUNDING_STATUS_UNSPECIFIED) {
      writer.uint32(24).int32(fundingStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundingsByFunderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundingsByFunderRequest();
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = fundingStatusFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFundingsByFunderRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : FundingStatus.FUNDING_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: QueryFundingsByFunderRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.status !== FundingStatus.FUNDING_STATUS_UNSPECIFIED) {
      obj.status = fundingStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFundingsByFunderRequest>, I>>(base?: I): QueryFundingsByFunderRequest {
    return QueryFundingsByFunderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFundingsByFunderRequest>, I>>(object: I): QueryFundingsByFunderRequest {
    const message = createBaseQueryFundingsByFunderRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.address = object.address ?? "";
    message.status = object.status ?? FundingStatus.FUNDING_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseQueryFundingsByFunderResponse(): QueryFundingsByFunderResponse {
  return { pagination: undefined, fundings: [] };
}

export const QueryFundingsByFunderResponse = {
  encode(message: QueryFundingsByFunderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fundings) {
      Funding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundingsByFunderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundingsByFunderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fundings.push(Funding.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFundingsByFunderResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      fundings: globalThis.Array.isArray(object?.fundings) ? object.fundings.map((e: any) => Funding.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryFundingsByFunderResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.fundings?.length) {
      obj.fundings = message.fundings.map((e) => Funding.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFundingsByFunderResponse>, I>>(base?: I): QueryFundingsByFunderResponse {
    return QueryFundingsByFunderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFundingsByFunderResponse>, I>>(
    object: I,
  ): QueryFundingsByFunderResponse {
    const message = createBaseQueryFundingsByFunderResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.fundings = object.fundings?.map((e) => Funding.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFundingsByPoolRequest(): QueryFundingsByPoolRequest {
  return { pagination: undefined, pool_id: "0", status: FundingStatus.FUNDING_STATUS_UNSPECIFIED };
}

export const QueryFundingsByPoolRequest = {
  encode(message: QueryFundingsByPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.status !== FundingStatus.FUNDING_STATUS_UNSPECIFIED) {
      writer.uint32(24).int32(fundingStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundingsByPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundingsByPoolRequest();
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
          if (tag !== 16) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = fundingStatusFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFundingsByPoolRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      status: isSet(object.status) ? fundingStatusFromJSON(object.status) : FundingStatus.FUNDING_STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: QueryFundingsByPoolRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.status !== FundingStatus.FUNDING_STATUS_UNSPECIFIED) {
      obj.status = fundingStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFundingsByPoolRequest>, I>>(base?: I): QueryFundingsByPoolRequest {
    return QueryFundingsByPoolRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFundingsByPoolRequest>, I>>(object: I): QueryFundingsByPoolRequest {
    const message = createBaseQueryFundingsByPoolRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.pool_id = object.pool_id ?? "0";
    message.status = object.status ?? FundingStatus.FUNDING_STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseQueryFundingsByPoolResponse(): QueryFundingsByPoolResponse {
  return { pagination: undefined, fundings: [] };
}

export const QueryFundingsByPoolResponse = {
  encode(message: QueryFundingsByPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fundings) {
      Funding.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundingsByPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundingsByPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fundings.push(Funding.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFundingsByPoolResponse {
    return {
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      fundings: globalThis.Array.isArray(object?.fundings) ? object.fundings.map((e: any) => Funding.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryFundingsByPoolResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    if (message.fundings?.length) {
      obj.fundings = message.fundings.map((e) => Funding.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFundingsByPoolResponse>, I>>(base?: I): QueryFundingsByPoolResponse {
    return QueryFundingsByPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryFundingsByPoolResponse>, I>>(object: I): QueryFundingsByPoolResponse {
    const message = createBaseQueryFundingsByPoolResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    message.fundings = object.fundings?.map((e) => Funding.fromPartial(e)) || [];
    return message;
  },
};

/** QueryFunders ... */
export interface QueryFunders {
  /** Funders queries all funders. */
  Funders(request: QueryFundersRequest): Promise<QueryFundersResponse>;
  /** Funder queries a funder by address. */
  Funder(request: QueryFunderRequest): Promise<QueryFunderResponse>;
  /** FundingsByFunder queries all fundings of a funder by address. */
  FundingsByFunder(request: QueryFundingsByFunderRequest): Promise<QueryFundingsByFunderResponse>;
  /** FundingsByPool queries all fundings of a pool by id. */
  FundingsByPool(request: QueryFundingsByPoolRequest): Promise<QueryFundingsByPoolResponse>;
}

export const QueryFundersServiceName = "kyve.query.v1beta1.QueryFunders";
export class QueryFundersClientImpl implements QueryFunders {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryFundersServiceName;
    this.rpc = rpc;
    this.Funders = this.Funders.bind(this);
    this.Funder = this.Funder.bind(this);
    this.FundingsByFunder = this.FundingsByFunder.bind(this);
    this.FundingsByPool = this.FundingsByPool.bind(this);
  }
  Funders(request: QueryFundersRequest): Promise<QueryFundersResponse> {
    const data = QueryFundersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Funders", data);
    return promise.then((data) => QueryFundersResponse.decode(_m0.Reader.create(data)));
  }

  Funder(request: QueryFunderRequest): Promise<QueryFunderResponse> {
    const data = QueryFunderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Funder", data);
    return promise.then((data) => QueryFunderResponse.decode(_m0.Reader.create(data)));
  }

  FundingsByFunder(request: QueryFundingsByFunderRequest): Promise<QueryFundingsByFunderResponse> {
    const data = QueryFundingsByFunderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundingsByFunder", data);
    return promise.then((data) => QueryFundingsByFunderResponse.decode(_m0.Reader.create(data)));
  }

  FundingsByPool(request: QueryFundingsByPoolRequest): Promise<QueryFundingsByPoolResponse> {
    const data = QueryFundingsByPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundingsByPool", data);
    return promise.then((data) => QueryFundingsByPoolResponse.decode(_m0.Reader.create(data)));
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
