/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { QueryParamsResponse as QueryParamsResponse3 } from "../../../cosmos/gov/v1/query";
import { Params } from "../../bundles/v1beta1/params";
import { Params as Params1 } from "../../delegation/v1beta1/params";
import { Params as Params2 } from "../../global/v1beta1/global";
import { Params as Params4 } from "../../stakers/v1beta1/params";

export const protobufPackage = "kyve.query.v1beta1";

/** QueryParamsRequest ... */
export interface QueryParamsRequest {
}

/** QueryParamsResponse ... */
export interface QueryParamsResponse {
  /** bundles_params ... */
  bundles_params?: Params;
  /** delegation_params ... */
  delegation_params?: Params1;
  /** global_params ... */
  global_params?: Params2;
  /** gov_params ... */
  gov_params?: QueryParamsResponse3;
  /** stakers_params ... */
  stakers_params?: Params4;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
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
      QueryParamsResponse3.encode(message.gov_params, writer.uint32(34).fork()).ldelim();
    }
    if (message.stakers_params !== undefined) {
      Params4.encode(message.stakers_params, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundles_params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.delegation_params = Params1.decode(reader, reader.uint32());
          break;
        case 3:
          message.global_params = Params2.decode(reader, reader.uint32());
          break;
        case 4:
          message.gov_params = QueryParamsResponse3.decode(reader, reader.uint32());
          break;
        case 5:
          message.stakers_params = Params4.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      bundles_params: isSet(object.bundles_params) ? Params.fromJSON(object.bundles_params) : undefined,
      delegation_params: isSet(object.delegation_params) ? Params1.fromJSON(object.delegation_params) : undefined,
      global_params: isSet(object.global_params) ? Params2.fromJSON(object.global_params) : undefined,
      gov_params: isSet(object.gov_params) ? QueryParamsResponse3.fromJSON(object.gov_params) : undefined,
      stakers_params: isSet(object.stakers_params) ? Params4.fromJSON(object.stakers_params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.bundles_params !== undefined &&
      (obj.bundles_params = message.bundles_params ? Params.toJSON(message.bundles_params) : undefined);
    message.delegation_params !== undefined &&
      (obj.delegation_params = message.delegation_params ? Params1.toJSON(message.delegation_params) : undefined);
    message.global_params !== undefined &&
      (obj.global_params = message.global_params ? Params2.toJSON(message.global_params) : undefined);
    message.gov_params !== undefined &&
      (obj.gov_params = message.gov_params ? QueryParamsResponse3.toJSON(message.gov_params) : undefined);
    message.stakers_params !== undefined &&
      (obj.stakers_params = message.stakers_params ? Params4.toJSON(message.stakers_params) : undefined);
    return obj;
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
      ? QueryParamsResponse3.fromPartial(object.gov_params)
      : undefined;
    message.stakers_params = (object.stakers_params !== undefined && object.stakers_params !== null)
      ? Params4.fromPartial(object.stakers_params)
      : undefined;
    return message;
  },
};

/** QueryPool ... */
export interface QueryParams {
  /** Pools queries for all pools. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryParamsClientImpl implements QueryParams {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.query.v1beta1.QueryParams";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
