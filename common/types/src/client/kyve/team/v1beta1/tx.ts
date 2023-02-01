/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.team.v1beta1";

/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlocked {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}

/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponse {
}

/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewards {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}

/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponse {
}

/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewards {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}

/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponse {
}

/** MsgClawback ... */
export interface MsgClawback {
  /** authority is the foundation which is allowed to modify team accounts */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
  clawback: string;
}

/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponse {
}

/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccount {
  /** authority ... */
  authority: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
}

/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponse {
}

/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority ... */
  authority: string;
  /** payload defines the x/team parameters to update. */
  payload: string;
}

/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgClaimUnlocked(): MsgClaimUnlocked {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}

export const MsgClaimUnlocked = {
  encode(message: MsgClaimUnlocked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUnlocked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnlocked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimUnlocked {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgClaimUnlocked): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUnlocked>, I>>(object: I): MsgClaimUnlocked {
    const message = createBaseMsgClaimUnlocked();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgClaimUnlockedResponse(): MsgClaimUnlockedResponse {
  return {};
}

export const MsgClaimUnlockedResponse = {
  encode(_: MsgClaimUnlockedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUnlockedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUnlockedResponse();
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

  fromJSON(_: any): MsgClaimUnlockedResponse {
    return {};
  },

  toJSON(_: MsgClaimUnlockedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUnlockedResponse>, I>>(_: I): MsgClaimUnlockedResponse {
    const message = createBaseMsgClaimUnlockedResponse();
    return message;
  },
};

function createBaseMsgClaimAuthorityRewards(): MsgClaimAuthorityRewards {
  return { authority: "", amount: "0", recipient: "" };
}

export const MsgClaimAuthorityRewards = {
  encode(message: MsgClaimAuthorityRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAuthorityRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAuthorityRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimAuthorityRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgClaimAuthorityRewards): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimAuthorityRewards>, I>>(object: I): MsgClaimAuthorityRewards {
    const message = createBaseMsgClaimAuthorityRewards();
    message.authority = object.authority ?? "";
    message.amount = object.amount ?? "0";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgClaimAuthorityRewardsResponse(): MsgClaimAuthorityRewardsResponse {
  return {};
}

export const MsgClaimAuthorityRewardsResponse = {
  encode(_: MsgClaimAuthorityRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAuthorityRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAuthorityRewardsResponse();
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

  fromJSON(_: any): MsgClaimAuthorityRewardsResponse {
    return {};
  },

  toJSON(_: MsgClaimAuthorityRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimAuthorityRewardsResponse>, I>>(
    _: I,
  ): MsgClaimAuthorityRewardsResponse {
    const message = createBaseMsgClaimAuthorityRewardsResponse();
    return message;
  },
};

function createBaseMsgClaimAccountRewards(): MsgClaimAccountRewards {
  return { authority: "", id: "0", amount: "0", recipient: "" };
}

export const MsgClaimAccountRewards = {
  encode(message: MsgClaimAccountRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAccountRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAccountRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimAccountRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgClaimAccountRewards): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimAccountRewards>, I>>(object: I): MsgClaimAccountRewards {
    const message = createBaseMsgClaimAccountRewards();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgClaimAccountRewardsResponse(): MsgClaimAccountRewardsResponse {
  return {};
}

export const MsgClaimAccountRewardsResponse = {
  encode(_: MsgClaimAccountRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAccountRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAccountRewardsResponse();
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

  fromJSON(_: any): MsgClaimAccountRewardsResponse {
    return {};
  },

  toJSON(_: MsgClaimAccountRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimAccountRewardsResponse>, I>>(_: I): MsgClaimAccountRewardsResponse {
    const message = createBaseMsgClaimAccountRewardsResponse();
    return message;
  },
};

function createBaseMsgClawback(): MsgClawback {
  return { authority: "", id: "0", clawback: "0" };
}

export const MsgClawback = {
  encode(message: MsgClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.clawback !== "0") {
      writer.uint32(24).uint64(message.clawback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.clawback = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClawback {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      clawback: isSet(object.clawback) ? String(object.clawback) : "0",
    };
  },

  toJSON(message: MsgClawback): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.id !== undefined && (obj.id = message.id);
    message.clawback !== undefined && (obj.clawback = message.clawback);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClawback>, I>>(object: I): MsgClawback {
    const message = createBaseMsgClawback();
    message.authority = object.authority ?? "";
    message.id = object.id ?? "0";
    message.clawback = object.clawback ?? "0";
    return message;
  },
};

function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}

export const MsgClawbackResponse = {
  encode(_: MsgClawbackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawbackResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawbackResponse();
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

  fromJSON(_: any): MsgClawbackResponse {
    return {};
  },

  toJSON(_: MsgClawbackResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClawbackResponse>, I>>(_: I): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  },
};

function createBaseMsgCreateTeamVestingAccount(): MsgCreateTeamVestingAccount {
  return { authority: "", total_allocation: "0", commencement: "0" };
}

export const MsgCreateTeamVestingAccount = {
  encode(message: MsgCreateTeamVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.total_allocation !== "0") {
      writer.uint32(16).uint64(message.total_allocation);
    }
    if (message.commencement !== "0") {
      writer.uint32(24).uint64(message.commencement);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTeamVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTeamVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.total_allocation = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.commencement = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTeamVestingAccount {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      total_allocation: isSet(object.total_allocation) ? String(object.total_allocation) : "0",
      commencement: isSet(object.commencement) ? String(object.commencement) : "0",
    };
  },

  toJSON(message: MsgCreateTeamVestingAccount): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.total_allocation !== undefined && (obj.total_allocation = message.total_allocation);
    message.commencement !== undefined && (obj.commencement = message.commencement);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTeamVestingAccount>, I>>(object: I): MsgCreateTeamVestingAccount {
    const message = createBaseMsgCreateTeamVestingAccount();
    message.authority = object.authority ?? "";
    message.total_allocation = object.total_allocation ?? "0";
    message.commencement = object.commencement ?? "0";
    return message;
  },
};

function createBaseMsgCreateTeamVestingAccountResponse(): MsgCreateTeamVestingAccountResponse {
  return {};
}

export const MsgCreateTeamVestingAccountResponse = {
  encode(_: MsgCreateTeamVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTeamVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTeamVestingAccountResponse();
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

  fromJSON(_: any): MsgCreateTeamVestingAccountResponse {
    return {};
  },

  toJSON(_: MsgCreateTeamVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTeamVestingAccountResponse>, I>>(
    _: I,
  ): MsgCreateTeamVestingAccountResponse {
    const message = createBaseMsgCreateTeamVestingAccountResponse();
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
  /** ClaimUnlocked ... */
  ClaimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse>;
  /** Clawback ... */
  Clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
  /** CreateTeamVestingAccount ... */
  CreateTeamVestingAccount(request: MsgCreateTeamVestingAccount): Promise<MsgCreateTeamVestingAccountResponse>;
  /** ClaimAuthorityRewards ... */
  ClaimAuthorityRewards(request: MsgClaimAuthorityRewards): Promise<MsgClaimAuthorityRewardsResponse>;
  /** ClaimInflationRewards ... */
  ClaimAccountRewards(request: MsgClaimAccountRewards): Promise<MsgClaimAccountRewardsResponse>;
  /** UpdateParams defines an operation for updating the x/team module parameters. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "kyve.team.v1beta1.Msg";
    this.rpc = rpc;
    this.ClaimUnlocked = this.ClaimUnlocked.bind(this);
    this.Clawback = this.Clawback.bind(this);
    this.CreateTeamVestingAccount = this.CreateTeamVestingAccount.bind(this);
    this.ClaimAuthorityRewards = this.ClaimAuthorityRewards.bind(this);
    this.ClaimAccountRewards = this.ClaimAccountRewards.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  ClaimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse> {
    const data = MsgClaimUnlocked.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimUnlocked", data);
    return promise.then((data) => MsgClaimUnlockedResponse.decode(new _m0.Reader(data)));
  }

  Clawback(request: MsgClawback): Promise<MsgClawbackResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request(this.service, "Clawback", data);
    return promise.then((data) => MsgClawbackResponse.decode(new _m0.Reader(data)));
  }

  CreateTeamVestingAccount(request: MsgCreateTeamVestingAccount): Promise<MsgCreateTeamVestingAccountResponse> {
    const data = MsgCreateTeamVestingAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateTeamVestingAccount", data);
    return promise.then((data) => MsgCreateTeamVestingAccountResponse.decode(new _m0.Reader(data)));
  }

  ClaimAuthorityRewards(request: MsgClaimAuthorityRewards): Promise<MsgClaimAuthorityRewardsResponse> {
    const data = MsgClaimAuthorityRewards.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimAuthorityRewards", data);
    return promise.then((data) => MsgClaimAuthorityRewardsResponse.decode(new _m0.Reader(data)));
  }

  ClaimAccountRewards(request: MsgClaimAccountRewards): Promise<MsgClaimAccountRewardsResponse> {
    const data = MsgClaimAccountRewards.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimAccountRewards", data);
    return promise.then((data) => MsgClaimAccountRewardsResponse.decode(new _m0.Reader(data)));
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
