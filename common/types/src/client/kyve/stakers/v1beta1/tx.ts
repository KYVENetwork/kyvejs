/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.stakers.v1beta1";

/** MsgStakePool defines a SDK message for staking in a pool. */
export interface MsgCreateStaker {
  /** creator ... */
  creator: string;
  /** amount ... */
  amount: string;
}

/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {
}

/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
  /** creator ... */
  creator: string;
  /** moniker ... */
  moniker: string;
  /** website ... */
  website: string;
  /** logo */
  logo: string;
}

/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {
}

/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
  /** creator ... */
  creator: string;
  /** commission ... */
  commission: string;
}

/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {
}

/** MsgJoinPool ... */
export interface MsgJoinPool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  pool_id: string;
  /** valaddress ... */
  valaddress: string;
  /** amount ... */
  amount: string;
}

/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {
}

/** MsgLeavePool ... */
export interface MsgLeavePool {
  /** creator ... */
  creator: string;
  /** pool_id ... */
  pool_id: string;
}

/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {
}

/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/stakers parameters to update. */
  payload: string;
}

/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgCreateStaker(): MsgCreateStaker {
  return { creator: "", amount: "0" };
}

export const MsgCreateStaker = {
  encode(message: MsgCreateStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStaker {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgCreateStaker): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStaker>, I>>(object: I): MsgCreateStaker {
    const message = createBaseMsgCreateStaker();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgCreateStakerResponse(): MsgCreateStakerResponse {
  return {};
}

export const MsgCreateStakerResponse = {
  encode(_: MsgCreateStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStakerResponse();
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

  fromJSON(_: any): MsgCreateStakerResponse {
    return {};
  },

  toJSON(_: MsgCreateStakerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStakerResponse>, I>>(_: I): MsgCreateStakerResponse {
    const message = createBaseMsgCreateStakerResponse();
    return message;
  },
};

function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return { creator: "", moniker: "", website: "", logo: "" };
}

export const MsgUpdateMetadata = {
  encode(message: MsgUpdateMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.logo !== "") {
      writer.uint32(34).string(message.logo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.logo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMetadata {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
    };
  },

  toJSON(message: MsgUpdateMetadata): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadata>, I>>(object: I): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
    return message;
  },
};

function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return {};
}

export const MsgUpdateMetadataResponse = {
  encode(_: MsgUpdateMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataResponse();
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

  fromJSON(_: any): MsgUpdateMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadataResponse>, I>>(_: I): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
};

function createBaseMsgUpdateCommission(): MsgUpdateCommission {
  return { creator: "", commission: "" };
}

export const MsgUpdateCommission = {
  encode(message: MsgUpdateCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.commission !== "") {
      writer.uint32(18).string(message.commission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.commission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCommission {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
    };
  },

  toJSON(message: MsgUpdateCommission): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.commission !== undefined && (obj.commission = message.commission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCommission>, I>>(object: I): MsgUpdateCommission {
    const message = createBaseMsgUpdateCommission();
    message.creator = object.creator ?? "";
    message.commission = object.commission ?? "";
    return message;
  },
};

function createBaseMsgUpdateCommissionResponse(): MsgUpdateCommissionResponse {
  return {};
}

export const MsgUpdateCommissionResponse = {
  encode(_: MsgUpdateCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCommissionResponse();
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

  fromJSON(_: any): MsgUpdateCommissionResponse {
    return {};
  },

  toJSON(_: MsgUpdateCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCommissionResponse>, I>>(_: I): MsgUpdateCommissionResponse {
    const message = createBaseMsgUpdateCommissionResponse();
    return message;
  },
};

function createBaseMsgJoinPool(): MsgJoinPool {
  return { creator: "", pool_id: "0", valaddress: "", amount: "0" };
}

export const MsgJoinPool = {
  encode(message: MsgJoinPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.valaddress !== "") {
      writer.uint32(26).string(message.valaddress);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.valaddress = reader.string();
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
      valaddress: isSet(object.valaddress) ? String(object.valaddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgJoinPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    message.valaddress !== undefined && (obj.valaddress = message.valaddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinPool>, I>>(object: I): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.creator = object.creator ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.valaddress = object.valaddress ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {};
}

export const MsgJoinPoolResponse = {
  encode(_: MsgJoinPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();
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

  fromJSON(_: any): MsgJoinPoolResponse {
    return {};
  },

  toJSON(_: MsgJoinPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinPoolResponse>, I>>(_: I): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    return message;
  },
};

function createBaseMsgLeavePool(): MsgLeavePool {
  return { creator: "", pool_id: "0" };
}

export const MsgLeavePool = {
  encode(message: MsgLeavePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeavePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeavePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pool_id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLeavePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
    };
  },

  toJSON(message: MsgLeavePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pool_id !== undefined && (obj.pool_id = message.pool_id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeavePool>, I>>(object: I): MsgLeavePool {
    const message = createBaseMsgLeavePool();
    message.creator = object.creator ?? "";
    message.pool_id = object.pool_id ?? "0";
    return message;
  },
};

function createBaseMsgLeavePoolResponse(): MsgLeavePoolResponse {
  return {};
}

export const MsgLeavePoolResponse = {
  encode(_: MsgLeavePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeavePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeavePoolResponse();
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

  fromJSON(_: any): MsgLeavePoolResponse {
    return {};
  },

  toJSON(_: MsgLeavePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeavePoolResponse>, I>>(_: I): MsgLeavePoolResponse {
    const message = createBaseMsgLeavePoolResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", payload: "" };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** CreateStaker ... */
  CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
  /** UpdateMetadata ... */
  UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
  /** UpdateCommission ... */
  UpdateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
  /** JoinPool ... */
  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  /** LeavePool ... */
  LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/stakers module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.stakers.v1beta1.Msg";
    this.rpc = rpc;
    this.CreateStaker = this.CreateStaker.bind(this);
    this.UpdateMetadata = this.UpdateMetadata.bind(this);
    this.UpdateCommission = this.UpdateCommission.bind(this);
    this.JoinPool = this.JoinPool.bind(this);
    this.LeavePool = this.LeavePool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse> {
    const data = MsgCreateStaker.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateStaker", data);
    return promise.then((data) => MsgCreateStakerResponse.decode(new _m0.Reader(data)));
  }

  UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse> {
    const data = MsgUpdateMetadata.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMetadata", data);
    return promise.then((data) => MsgUpdateMetadataResponse.decode(new _m0.Reader(data)));
  }

  UpdateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse> {
    const data = MsgUpdateCommission.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateCommission", data);
    return promise.then((data) => MsgUpdateCommissionResponse.decode(new _m0.Reader(data)));
  }

  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse> {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinPool", data);
    return promise.then((data) => MsgJoinPoolResponse.decode(new _m0.Reader(data)));
  }

  LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse> {
    const data = MsgLeavePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "LeavePool", data);
    return promise.then((data) => MsgLeavePoolResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
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
