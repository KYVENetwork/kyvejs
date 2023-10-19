/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.stakers.v1beta1";

/** MsgCreateStaker defines a SDK message for creating a staker. */
export interface MsgCreateStaker {
  /** creator is the address of the staker. */
  creator: string;
  /** amount is the initial self-stake of the staker. */
  amount: string;
  /**
   * commission is the percentage that is deducted from rewards before
   * distributing the staker's delegators.
   */
  commission: string;
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
  /** identity from keybase.io */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
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

/** MsgClaimCommissionRewards ... */
export interface MsgClaimCommissionRewards {
  /** creator ... */
  creator: string;
  /** amount ... */
  amount: string;
}

/** MsgClaimCommissionRewardsResponse ... */
export interface MsgClaimCommissionRewardsResponse {
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
  return { creator: "", amount: "0", commission: "" };
}

export const MsgCreateStaker = {
  encode(message: MsgCreateStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commission = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStaker {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
    };
  },

  toJSON(message: MsgCreateStaker): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateStaker>, I>>(base?: I): MsgCreateStaker {
    return MsgCreateStaker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateStaker>, I>>(object: I): MsgCreateStaker {
    const message = createBaseMsgCreateStaker();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "0";
    message.commission = object.commission ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStakerResponse();
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

  fromJSON(_: any): MsgCreateStakerResponse {
    return {};
  },

  toJSON(_: MsgCreateStakerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateStakerResponse>, I>>(base?: I): MsgCreateStakerResponse {
    return MsgCreateStakerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateStakerResponse>, I>>(_: I): MsgCreateStakerResponse {
    const message = createBaseMsgCreateStakerResponse();
    return message;
  },
};

function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return { creator: "", moniker: "", website: "", identity: "", security_contact: "", details: "" };
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
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.security_contact !== "") {
      writer.uint32(42).string(message.security_contact);
    }
    if (message.details !== "") {
      writer.uint32(50).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.website = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.identity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.security_contact = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.details = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMetadata {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
      website: isSet(object.website) ? globalThis.String(object.website) : "",
      identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
      security_contact: isSet(object.security_contact) ? globalThis.String(object.security_contact) : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
    };
  },

  toJSON(message: MsgUpdateMetadata): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.identity !== "") {
      obj.identity = message.identity;
    }
    if (message.security_contact !== "") {
      obj.security_contact = message.security_contact;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateMetadata>, I>>(base?: I): MsgUpdateMetadata {
    return MsgUpdateMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadata>, I>>(object: I): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.creator = object.creator ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.identity = object.identity ?? "";
    message.security_contact = object.security_contact ?? "";
    message.details = object.details ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataResponse();
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

  fromJSON(_: any): MsgUpdateMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateMetadataResponse>, I>>(base?: I): MsgUpdateMetadataResponse {
    return MsgUpdateMetadataResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commission = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCommission {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      commission: isSet(object.commission) ? globalThis.String(object.commission) : "",
    };
  },

  toJSON(message: MsgUpdateCommission): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.commission !== "") {
      obj.commission = message.commission;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateCommission>, I>>(base?: I): MsgUpdateCommission {
    return MsgUpdateCommission.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCommissionResponse();
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

  fromJSON(_: any): MsgUpdateCommissionResponse {
    return {};
  },

  toJSON(_: MsgUpdateCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateCommissionResponse>, I>>(base?: I): MsgUpdateCommissionResponse {
    return MsgUpdateCommissionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateCommissionResponse>, I>>(_: I): MsgUpdateCommissionResponse {
    const message = createBaseMsgUpdateCommissionResponse();
    return message;
  },
};

function createBaseMsgClaimCommissionRewards(): MsgClaimCommissionRewards {
  return { creator: "", amount: "0" };
}

export const MsgClaimCommissionRewards = {
  encode(message: MsgClaimCommissionRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimCommissionRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimCommissionRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClaimCommissionRewards {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgClaimCommissionRewards): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimCommissionRewards>, I>>(base?: I): MsgClaimCommissionRewards {
    return MsgClaimCommissionRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaimCommissionRewards>, I>>(object: I): MsgClaimCommissionRewards {
    const message = createBaseMsgClaimCommissionRewards();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgClaimCommissionRewardsResponse(): MsgClaimCommissionRewardsResponse {
  return {};
}

export const MsgClaimCommissionRewardsResponse = {
  encode(_: MsgClaimCommissionRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimCommissionRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimCommissionRewardsResponse();
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

  fromJSON(_: any): MsgClaimCommissionRewardsResponse {
    return {};
  },

  toJSON(_: MsgClaimCommissionRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimCommissionRewardsResponse>, I>>(
    base?: I,
  ): MsgClaimCommissionRewardsResponse {
    return MsgClaimCommissionRewardsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaimCommissionRewardsResponse>, I>>(
    _: I,
  ): MsgClaimCommissionRewardsResponse {
    const message = createBaseMsgClaimCommissionRewardsResponse();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.valaddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgJoinPool {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
      valaddress: isSet(object.valaddress) ? globalThis.String(object.valaddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgJoinPool): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    if (message.valaddress !== "") {
      obj.valaddress = message.valaddress;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgJoinPool>, I>>(base?: I): MsgJoinPool {
    return MsgJoinPool.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();
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

  fromJSON(_: any): MsgJoinPoolResponse {
    return {};
  },

  toJSON(_: MsgJoinPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgJoinPoolResponse>, I>>(base?: I): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeavePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLeavePool {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0",
    };
  },

  toJSON(message: MsgLeavePool): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLeavePool>, I>>(base?: I): MsgLeavePool {
    return MsgLeavePool.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeavePoolResponse();
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

  fromJSON(_: any): MsgLeavePoolResponse {
    return {};
  },

  toJSON(_: MsgLeavePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLeavePoolResponse>, I>>(base?: I): MsgLeavePoolResponse {
    return MsgLeavePoolResponse.fromPartial(base ?? ({} as any));
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  /** CreateStaker ... */
  CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
  /** UpdateMetadata ... */
  UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
  /** UpdateCommission ... */
  UpdateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
  /** ClaimCommissionRewards ... */
  ClaimCommissionRewards(request: MsgClaimCommissionRewards): Promise<MsgClaimCommissionRewardsResponse>;
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

export const MsgServiceName = "kyve.stakers.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateStaker = this.CreateStaker.bind(this);
    this.UpdateMetadata = this.UpdateMetadata.bind(this);
    this.UpdateCommission = this.UpdateCommission.bind(this);
    this.ClaimCommissionRewards = this.ClaimCommissionRewards.bind(this);
    this.JoinPool = this.JoinPool.bind(this);
    this.LeavePool = this.LeavePool.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse> {
    const data = MsgCreateStaker.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateStaker", data);
    return promise.then((data) => MsgCreateStakerResponse.decode(_m0.Reader.create(data)));
  }

  UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse> {
    const data = MsgUpdateMetadata.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMetadata", data);
    return promise.then((data) => MsgUpdateMetadataResponse.decode(_m0.Reader.create(data)));
  }

  UpdateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse> {
    const data = MsgUpdateCommission.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateCommission", data);
    return promise.then((data) => MsgUpdateCommissionResponse.decode(_m0.Reader.create(data)));
  }

  ClaimCommissionRewards(request: MsgClaimCommissionRewards): Promise<MsgClaimCommissionRewardsResponse> {
    const data = MsgClaimCommissionRewards.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimCommissionRewards", data);
    return promise.then((data) => MsgClaimCommissionRewardsResponse.decode(_m0.Reader.create(data)));
  }

  JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse> {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinPool", data);
    return promise.then((data) => MsgJoinPoolResponse.decode(_m0.Reader.create(data)));
  }

  LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse> {
    const data = MsgLeavePool.encode(request).finish();
    const promise = this.rpc.request(this.service, "LeavePool", data);
    return promise.then((data) => MsgLeavePoolResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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
