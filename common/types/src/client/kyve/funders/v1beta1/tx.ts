// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: kyve/funders/v1beta1/tx.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "kyve.funders.v1beta1";

/** MsgCreateFunder defines a SDK message for creating a funder. */
export interface MsgCreateFunder {
  /** creator ... */
  creator: string;
  /** moniker */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website */
  website: string;
  /** contact */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}

/** MsgCreateFunderResponse defines the Msg/CreateFunder response type. */
export interface MsgCreateFunderResponse {
}

/** MsgUpdateFunder defines a SDK message for updating a funder. */
export interface MsgUpdateFunder {
  /** creator ... */
  creator: string;
  /** moniker */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website */
  website: string;
  /** contact */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}

/** MsgUpdateFunderResponse defines the Msg/UpdateFunder response type. */
export interface MsgUpdateFunderResponse {
}

/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
  /** creator is the funder of the pool */
  creator: string;
  /** pool_id is the identifier of the pool */
  pool_id: string;
  /** amounts is a list of coins the creator wants to fund */
  amounts: Coin[];
  /**
   * amounts_per_bundle is a list of coins the creator wants to distribute
   * per finalized bundle
   */
  amounts_per_bundle: Coin[];
}

/** MsgFundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgFundPoolResponse {
}

/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
  /** creator is the funder of the pool who wants to defund now */
  creator: string;
  /** pool_id is the identifier of the pool */
  pool_id: string;
  /** amounts is a list of coins the creator wants to defund from the pool */
  amounts: Coin[];
}

/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {
}

/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}

/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgCreateFunder(): MsgCreateFunder {
  return { creator: "", moniker: "", identity: "", website: "", contact: "", description: "" };
}

export const MsgCreateFunder: MessageFns<MsgCreateFunder> = {
  encode(message: MsgCreateFunder, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFunder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.moniker = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.contact = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFunder {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      contact: isSet(object.contact) ? globalThis.String(object.contact) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgCreateFunder): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateFunder>, I>>(base?: I): MsgCreateFunder {
    return MsgCreateFunder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateFunder>, I>>(object: I): MsgCreateFunder {
    const message = createBaseMsgCreateFunder();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgCreateFunderResponse(): MsgCreateFunderResponse {
  return {};
}

export const MsgCreateFunderResponse: MessageFns<MsgCreateFunderResponse> = {
  encode(_: MsgCreateFunderResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateFunderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateFunderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateFunderResponse {
    return {};
  },

  toJSON(_: MsgCreateFunderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateFunderResponse>, I>>(base?: I): MsgCreateFunderResponse {
    return MsgCreateFunderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateFunderResponse>, I>>(_: I): MsgCreateFunderResponse {
    const message = createBaseMsgCreateFunderResponse();
    return message;
  },
};

function createBaseMsgUpdateFunder(): MsgUpdateFunder {
  return { creator: "", moniker: "", identity: "", website: "", contact: "", description: "" };
}

export const MsgUpdateFunder: MessageFns<MsgUpdateFunder> = {
  encode(message: MsgUpdateFunder, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFunder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.moniker = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.identity = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.website = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.contact = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFunder {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      contact: isSet(object.contact) ? globalThis.String(object.contact) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: MsgUpdateFunder): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateFunder>, I>>(base?: I): MsgUpdateFunder {
    return MsgUpdateFunder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateFunder>, I>>(object: I): MsgUpdateFunder {
    const message = createBaseMsgUpdateFunder();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateFunderResponse(): MsgUpdateFunderResponse {
  return {};
}

export const MsgUpdateFunderResponse: MessageFns<MsgUpdateFunderResponse> = {
  encode(_: MsgUpdateFunderResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFunderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFunderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateFunderResponse {
    return {};
  },

  toJSON(_: MsgUpdateFunderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateFunderResponse>, I>>(base?: I): MsgUpdateFunderResponse {
    return MsgUpdateFunderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateFunderResponse>, I>>(_: I): MsgUpdateFunderResponse {
    const message = createBaseMsgUpdateFunderResponse();
    return message;
  },
};

function createBaseMsgFundPool(): MsgFundPool {
  return { creator: "", pool_id: "0", amounts: [], amounts_per_bundle: [] };
}

export const MsgFundPool: MessageFns<MsgFundPool> = {
  encode(message: MsgFundPool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.amounts_per_bundle) {
      Coin.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.pool_id = reader.uint64().toString();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.amounts.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.amounts_per_bundle.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgFundPool {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      amounts: globalThis.Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : [],
      amounts_per_bundle: globalThis.Array.isArray(object?.amounts_per_bundle)
        ? object.amounts_per_bundle.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgFundPool): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.amounts?.length) {
      obj.amounts = message.amounts.map((e) => Coin.toJSON(e));
    }
    if (message.amounts_per_bundle?.length) {
      obj.amounts_per_bundle = message.amounts_per_bundle.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFundPool>, I>>(base?: I): MsgFundPool {
    return MsgFundPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundPool>, I>>(object: I): MsgFundPool {
    const message = createBaseMsgFundPool();
    message.creator = object.creator ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    message.amounts_per_bundle = object.amounts_per_bundle?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgFundPoolResponse(): MsgFundPoolResponse {
  return {};
}

export const MsgFundPoolResponse: MessageFns<MsgFundPoolResponse> = {
  encode(_: MsgFundPoolResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgFundPoolResponse {
    return {};
  },

  toJSON(_: MsgFundPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgFundPoolResponse>, I>>(base?: I): MsgFundPoolResponse {
    return MsgFundPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundPoolResponse>, I>>(_: I): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  },
};

function createBaseMsgDefundPool(): MsgDefundPool {
  return { creator: "", pool_id: "0", amounts: [] };
}

export const MsgDefundPool: MessageFns<MsgDefundPool> = {
  encode(message: MsgDefundPool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pool_id !== "0") {
      writer.uint32(16).uint64(message.pool_id);
    }
    for (const v of message.amounts) {
      Coin.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefundPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.pool_id = reader.uint64().toString();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.amounts.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDefundPool {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      amounts: globalThis.Array.isArray(object?.amounts) ? object.amounts.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgDefundPool): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.amounts?.length) {
      obj.amounts = message.amounts.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDefundPool>, I>>(base?: I): MsgDefundPool {
    return MsgDefundPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDefundPool>, I>>(object: I): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    message.creator = object.creator ?? "";
    message.pool_id = object.pool_id ?? "0";
    message.amounts = object.amounts?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgDefundPoolResponse(): MsgDefundPoolResponse {
  return {};
}

export const MsgDefundPoolResponse: MessageFns<MsgDefundPoolResponse> = {
  encode(_: MsgDefundPoolResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgDefundPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefundPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDefundPoolResponse {
    return {};
  },

  toJSON(_: MsgDefundPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDefundPoolResponse>, I>>(base?: I): MsgDefundPoolResponse {
    return MsgDefundPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDefundPoolResponse>, I>>(_: I): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", payload: "" };
}

export const MsgUpdateParams: MessageFns<MsgUpdateParams> = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.payload = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
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

export const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse> = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
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

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** CreateFunder ... */
  CreateFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse>;
  /** UpdateFunder ... */
  UpdateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse>;
  /** FundPool ... */
  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
  /** DefundPool ... */
  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/delegation module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = "kyve.funders.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateFunder = this.CreateFunder.bind(this);
    this.UpdateFunder = this.UpdateFunder.bind(this);
    this.FundPool = this.FundPool.bind(this);
    this.DefundPool = this.DefundPool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateFunder(request: MsgCreateFunder): Promise<MsgCreateFunderResponse> {
    const data = MsgCreateFunder.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateFunder", data);
    return promise.then((data) => MsgCreateFunderResponse.decode(new BinaryReader(data)));
  }

  UpdateFunder(request: MsgUpdateFunder): Promise<MsgUpdateFunderResponse> {
    const data = MsgUpdateFunder.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateFunder", data);
    return promise.then((data) => MsgUpdateFunderResponse.decode(new BinaryReader(data)));
  }

  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse> {
    const data = MsgFundPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "FundPool", data);
    return promise.then((data) => MsgFundPoolResponse.decode(new BinaryReader(data)));
  }

  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse> {
    const data = MsgDefundPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "DefundPool", data);
    return promise.then((data) => MsgDefundPoolResponse.decode(new BinaryReader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
