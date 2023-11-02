/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params as Params3 } from "../../../cosmos/gov/v1/gov";
import { Params } from "../../bundles/v1beta1/params";
import { Params as Params1 } from "../../delegation/v1beta1/params";
import { Params as Params6 } from "../../funders/v1beta1/params";
import { Params as Params2 } from "../../global/v1beta1/global";
import { Params as Params5 } from "../../pool/v1beta1/params";
import { Params as Params4 } from "../../stakers/v1beta1/params";

export const protobufPackage = "kyve.query.v1beta1";

/** QueryParamsRequest ... */
export interface QueryParamsRequest {
}

/** QueryParamsResponse ... */
export interface QueryParamsResponse {
  /** bundles_params ... */
  bundles_params?:
    | Params
    | undefined;
  /** delegation_params ... */
  delegation_params?:
    | Params1
    | undefined;
  /** global_params ... */
  global_params?:
    | Params2
    | undefined;
  /** gov_params ... */
  gov_params?:
    | Params3
    | undefined;
  /** stakers_params ... */
  stakers_params?:
    | Params4
    | undefined;
  /** pool_params ... */
  pool_params?:
    | Params5
    | undefined;
  /** funders_params ... */
  funders_params?: Params6 | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    bundles_params: undefined,
    delegation_params: undefined,
    global_params: undefined,
    gov_params: undefined,
    stakers_params: undefined,
    pool_params: undefined,
    funders_params: undefined,
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundles_params !== undefined) {
      Params.encode(message.bundles_params, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegation_params !== undefined) {
      Params1.encode(message.delegation_params, writer.uint32(18).fork()).ldelim();
    }
    if (message.global_params !== undefined) {
      Params2.encode(message.global_params, writer.uint32(26).fork()).ldelim();
    }
    if (message.gov_params !== undefined) {
      Params3.encode(message.gov_params, writer.uint32(34).fork()).ldelim();
    }
    if (message.stakers_params !== undefined) {
      Params4.encode(message.stakers_params, writer.uint32(42).fork()).ldelim();
    }
    if (message.pool_params !== undefined) {
      Params5.encode(message.pool_params, writer.uint32(50).fork()).ldelim();
    }
    if (message.funders_params !== undefined) {
      Params6.encode(message.funders_params, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bundles_params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegation_params = Params1.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.global_params = Params2.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gov_params = Params3.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stakers_params = Params4.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.pool_params = Params5.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.funders_params = Params6.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      bundles_params: isSet(object.bundles_params) ? Params.fromJSON(object.bundles_params) : undefined,
      delegation_params: isSet(object.delegation_params) ? Params1.fromJSON(object.delegation_params) : undefined,
      global_params: isSet(object.global_params) ? Params2.fromJSON(object.global_params) : undefined,
      gov_params: isSet(object.gov_params) ? Params3.fromJSON(object.gov_params) : undefined,
      stakers_params: isSet(object.stakers_params) ? Params4.fromJSON(object.stakers_params) : undefined,
      pool_params: isSet(object.pool_params) ? Params5.fromJSON(object.pool_params) : undefined,
      funders_params: isSet(object.funders_params) ? Params6.fromJSON(object.funders_params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.bundles_params !== undefined) {
      obj.bundles_params = Params.toJSON(message.bundles_params);
    }
    if (message.delegation_params !== undefined) {
      obj.delegation_params = Params1.toJSON(message.delegation_params);
    }
    if (message.global_params !== undefined) {
      obj.global_params = Params2.toJSON(message.global_params);
    }
    if (message.gov_params !== undefined) {
      obj.gov_params = Params3.toJSON(message.gov_params);
    }
    if (message.stakers_params !== undefined) {
      obj.stakers_params = Params4.toJSON(message.stakers_params);
    }
    if (message.pool_params !== undefined) {
      obj.pool_params = Params5.toJSON(message.pool_params);
    }
    if (message.funders_params !== undefined) {
      obj.funders_params = Params6.toJSON(message.funders_params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.bundles_params = (object.bundles_params !== undefined && object.bundles_params !== null)
      ? Params.fromPartial(object.bundles_params)
      : undefined;
    message.delegation_params = (object.delegation_params !== undefined && object.delegation_params !== null)
      ? Params1.fromPartial(object.delegation_params)
      : undefined;
    message.global_params = (object.global_params !== undefined && object.global_params !== null)
      ? Params2.fromPartial(object.global_params)
      : undefined;
    message.gov_params = (object.gov_params !== undefined && object.gov_params !== null)
      ? Params3.fromPartial(object.gov_params)
      : undefined;
    message.stakers_params = (object.stakers_params !== undefined && object.stakers_params !== null)
      ? Params4.fromPartial(object.stakers_params)
      : undefined;
    message.pool_params = (object.pool_params !== undefined && object.pool_params !== null)
      ? Params5.fromPartial(object.pool_params)
      : undefined;
    message.funders_params = (object.funders_params !== undefined && object.funders_params !== null)
      ? Params6.fromPartial(object.funders_params)
      : undefined;
    return message;
  },
};

/** QueryParams ... */
export interface QueryParams {
  /** Pools queries for all pools. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryParamsServiceName = "kyve.query.v1beta1.QueryParams";
export class QueryParamsClientImpl implements QueryParams {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryParamsServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
