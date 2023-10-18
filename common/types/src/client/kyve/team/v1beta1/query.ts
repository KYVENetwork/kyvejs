/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TeamVestingAccount } from "./team";

export const protobufPackage = "kyve.team.v1beta1";

/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequest {
}

/** QueryAccountsResponse is response type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoResponse {
  /** foundation is the authority foundation address */
  foundation_authority: string;
  /** bcp is the authority bcp address */
  bcp_authority: string;
  /** total_team_allocation is the total allocation in $KYVE the team module has in order to reward team members */
  total_team_allocation: string;
  /** issued_team_allocation is the amount in $KYVE tied to team vesting accounts and which are not available anymore */
  issued_team_allocation: string;
  /**
   * available_team_allocation is the amount in $KYVE with which further team vesting accounts can be created.
   * if the available amount is zero no new vesting accounts can be created
   */
  available_team_allocation: string;
  /**
   * total_authority_rewards is the amount in $KYVE the authority has earned in total with inflation rewards.
   * Those rewards can be payed out for different purposes
   */
  total_authority_rewards: string;
  /** claimed_authority_rewards is the amount in $KYVE of how much the authority already claimed */
  claimed_authority_rewards: string;
  /** available_authority_rewards is the amount in $KYVE of how much rewards the authority can claim right now */
  available_authority_rewards: string;
  /** total_account_rewards is the amount in $KYVE all team vesting accounts have ever received */
  total_account_rewards: string;
  /** claimed_account_rewards is the amount in $KYVE all team vesting accounts have ever claimed */
  claimed_account_rewards: string;
  /** available_account_rewards is the total amount of $KYVE all team vesting accounts can currently claim */
  available_account_rewards: string;
  /**
   * required_module_balance is the balance the team module should have. If this is less than the module balance
   * something went wrong
   */
  required_module_balance: string;
  /** team_module_balance is the team module balance in $KYVE */
  team_module_balance: string;
}

/** QueryAccountsRequest is request type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsRequest {
}

/** QueryAccountsResponse is response type for the Query/TeamVestingAccounts RPC method. */
export interface QueryTeamVestingAccountsResponse {
  /** accounts holds all the team vesting accounts of this module. */
  accounts: TeamVestingAccount[];
}

/** QueryTeamVestingAccountRequest is request type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
}

/** QueryTeamVestingAccountResponse is the response type for the Query/TeamVestingAccount RPC method. */
export interface QueryTeamVestingAccountResponse {
  /** account holds the requested team vesting account */
  account?: TeamVestingAccount | undefined;
}

/** QueryTeamCurrentVestingStatusRequest is request type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
}

/** QueryTeamCurrentVestingStatusResponse is the response type for the Query/TeamCurrentVestingStatus RPC method. */
export interface QueryTeamVestingStatusResponse {
  /** request_date .. */
  request_date: string;
  /** plan ... */
  plan?:
    | QueryVestingPlan
    | undefined;
  /** status .. */
  status?: QueryVestingStatus | undefined;
}

/** QueryTeamVestingStatusByTimeRequest is request type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeRequest {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** time is a unix timestamp of the time the vesting progress should be calculated */
  time: string;
}

/** QueryTeamVestingStatusByTimeResponse is the response type for the Query/TeamCurrentVestingByTimeStatus RPC method. */
export interface QueryTeamVestingStatusByTimeResponse {
  /** request_date .. */
  request_date: string;
  /** plan ... */
  plan?:
    | QueryVestingPlan
    | undefined;
  /** status .. */
  status?: QueryVestingStatus | undefined;
}

/** QueryVestingStatus is a type holding information about the account's vesting progress */
export interface QueryVestingStatus {
  /** total_vested_amount ... */
  total_vested_amount: string;
  /** total_unlocked_amount ... */
  total_unlocked_amount: string;
  /** current_claimable_amount ... */
  current_claimable_amount: string;
  /** locked_vested_amount ... */
  locked_vested_amount: string;
  /** remaining_unvested_amount ... */
  remaining_unvested_amount: string;
  /** claimed_amount ... */
  claimed_amount: string;
  /** total_rewards ... */
  total_rewards: string;
  /** claimed_rewards ... */
  claimed_rewards: string;
  /** available_rewards ... */
  available_rewards: string;
}

/** QueryVestingPlan is a type holding information about the account's vesting data which does not change */
export interface QueryVestingPlan {
  /** commencement ... */
  commencement: string;
  /** token_vesting_start ... */
  token_vesting_start: string;
  /** token_vesting_finished ... */
  token_vesting_finished: string;
  /** token_unlock_start ... */
  token_unlock_start: string;
  /** token_unlock_finished ... */
  token_unlock_finished: string;
  /** clawback ... */
  clawback: string;
  /** clawback_amount ... */
  clawback_amount: string;
  /** maximum_vesting_amount ... */
  maximum_vesting_amount: string;
}

function createBaseQueryTeamInfoRequest(): QueryTeamInfoRequest {
  return {};
}

export const QueryTeamInfoRequest = {
  encode(_: QueryTeamInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamInfoRequest();
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

  fromJSON(_: any): QueryTeamInfoRequest {
    return {};
  },

  toJSON(_: QueryTeamInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamInfoRequest>, I>>(base?: I): QueryTeamInfoRequest {
    return QueryTeamInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamInfoRequest>, I>>(_: I): QueryTeamInfoRequest {
    const message = createBaseQueryTeamInfoRequest();
    return message;
  },
};

function createBaseQueryTeamInfoResponse(): QueryTeamInfoResponse {
  return {
    foundation_authority: "",
    bcp_authority: "",
    total_team_allocation: "0",
    issued_team_allocation: "0",
    available_team_allocation: "0",
    total_authority_rewards: "0",
    claimed_authority_rewards: "0",
    available_authority_rewards: "0",
    total_account_rewards: "0",
    claimed_account_rewards: "0",
    available_account_rewards: "0",
    required_module_balance: "0",
    team_module_balance: "0",
  };
}

export const QueryTeamInfoResponse = {
  encode(message: QueryTeamInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.foundation_authority !== "") {
      writer.uint32(10).string(message.foundation_authority);
    }
    if (message.bcp_authority !== "") {
      writer.uint32(18).string(message.bcp_authority);
    }
    if (message.total_team_allocation !== "0") {
      writer.uint32(24).uint64(message.total_team_allocation);
    }
    if (message.issued_team_allocation !== "0") {
      writer.uint32(32).uint64(message.issued_team_allocation);
    }
    if (message.available_team_allocation !== "0") {
      writer.uint32(40).uint64(message.available_team_allocation);
    }
    if (message.total_authority_rewards !== "0") {
      writer.uint32(48).uint64(message.total_authority_rewards);
    }
    if (message.claimed_authority_rewards !== "0") {
      writer.uint32(56).uint64(message.claimed_authority_rewards);
    }
    if (message.available_authority_rewards !== "0") {
      writer.uint32(64).uint64(message.available_authority_rewards);
    }
    if (message.total_account_rewards !== "0") {
      writer.uint32(72).uint64(message.total_account_rewards);
    }
    if (message.claimed_account_rewards !== "0") {
      writer.uint32(80).uint64(message.claimed_account_rewards);
    }
    if (message.available_account_rewards !== "0") {
      writer.uint32(88).uint64(message.available_account_rewards);
    }
    if (message.required_module_balance !== "0") {
      writer.uint32(96).uint64(message.required_module_balance);
    }
    if (message.team_module_balance !== "0") {
      writer.uint32(104).uint64(message.team_module_balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.foundation_authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bcp_authority = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total_team_allocation = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.issued_team_allocation = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.available_team_allocation = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.total_authority_rewards = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.claimed_authority_rewards = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.available_authority_rewards = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.total_account_rewards = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.claimed_account_rewards = longToString(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.available_account_rewards = longToString(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.required_module_balance = longToString(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.team_module_balance = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamInfoResponse {
    return {
      foundation_authority: isSet(object.foundation_authority) ? globalThis.String(object.foundation_authority) : "",
      bcp_authority: isSet(object.bcp_authority) ? globalThis.String(object.bcp_authority) : "",
      total_team_allocation: isSet(object.total_team_allocation)
        ? globalThis.String(object.total_team_allocation)
        : "0",
      issued_team_allocation: isSet(object.issued_team_allocation)
        ? globalThis.String(object.issued_team_allocation)
        : "0",
      available_team_allocation: isSet(object.available_team_allocation)
        ? globalThis.String(object.available_team_allocation)
        : "0",
      total_authority_rewards: isSet(object.total_authority_rewards)
        ? globalThis.String(object.total_authority_rewards)
        : "0",
      claimed_authority_rewards: isSet(object.claimed_authority_rewards)
        ? globalThis.String(object.claimed_authority_rewards)
        : "0",
      available_authority_rewards: isSet(object.available_authority_rewards)
        ? globalThis.String(object.available_authority_rewards)
        : "0",
      total_account_rewards: isSet(object.total_account_rewards)
        ? globalThis.String(object.total_account_rewards)
        : "0",
      claimed_account_rewards: isSet(object.claimed_account_rewards)
        ? globalThis.String(object.claimed_account_rewards)
        : "0",
      available_account_rewards: isSet(object.available_account_rewards)
        ? globalThis.String(object.available_account_rewards)
        : "0",
      required_module_balance: isSet(object.required_module_balance)
        ? globalThis.String(object.required_module_balance)
        : "0",
      team_module_balance: isSet(object.team_module_balance) ? globalThis.String(object.team_module_balance) : "0",
    };
  },

  toJSON(message: QueryTeamInfoResponse): unknown {
    const obj: any = {};
    if (message.foundation_authority !== "") {
      obj.foundation_authority = message.foundation_authority;
    }
    if (message.bcp_authority !== "") {
      obj.bcp_authority = message.bcp_authority;
    }
    if (message.total_team_allocation !== "0") {
      obj.total_team_allocation = message.total_team_allocation;
    }
    if (message.issued_team_allocation !== "0") {
      obj.issued_team_allocation = message.issued_team_allocation;
    }
    if (message.available_team_allocation !== "0") {
      obj.available_team_allocation = message.available_team_allocation;
    }
    if (message.total_authority_rewards !== "0") {
      obj.total_authority_rewards = message.total_authority_rewards;
    }
    if (message.claimed_authority_rewards !== "0") {
      obj.claimed_authority_rewards = message.claimed_authority_rewards;
    }
    if (message.available_authority_rewards !== "0") {
      obj.available_authority_rewards = message.available_authority_rewards;
    }
    if (message.total_account_rewards !== "0") {
      obj.total_account_rewards = message.total_account_rewards;
    }
    if (message.claimed_account_rewards !== "0") {
      obj.claimed_account_rewards = message.claimed_account_rewards;
    }
    if (message.available_account_rewards !== "0") {
      obj.available_account_rewards = message.available_account_rewards;
    }
    if (message.required_module_balance !== "0") {
      obj.required_module_balance = message.required_module_balance;
    }
    if (message.team_module_balance !== "0") {
      obj.team_module_balance = message.team_module_balance;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamInfoResponse>, I>>(base?: I): QueryTeamInfoResponse {
    return QueryTeamInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamInfoResponse>, I>>(object: I): QueryTeamInfoResponse {
    const message = createBaseQueryTeamInfoResponse();
    message.foundation_authority = object.foundation_authority ?? "";
    message.bcp_authority = object.bcp_authority ?? "";
    message.total_team_allocation = object.total_team_allocation ?? "0";
    message.issued_team_allocation = object.issued_team_allocation ?? "0";
    message.available_team_allocation = object.available_team_allocation ?? "0";
    message.total_authority_rewards = object.total_authority_rewards ?? "0";
    message.claimed_authority_rewards = object.claimed_authority_rewards ?? "0";
    message.available_authority_rewards = object.available_authority_rewards ?? "0";
    message.total_account_rewards = object.total_account_rewards ?? "0";
    message.claimed_account_rewards = object.claimed_account_rewards ?? "0";
    message.available_account_rewards = object.available_account_rewards ?? "0";
    message.required_module_balance = object.required_module_balance ?? "0";
    message.team_module_balance = object.team_module_balance ?? "0";
    return message;
  },
};

function createBaseQueryTeamVestingAccountsRequest(): QueryTeamVestingAccountsRequest {
  return {};
}

export const QueryTeamVestingAccountsRequest = {
  encode(_: QueryTeamVestingAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingAccountsRequest();
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

  fromJSON(_: any): QueryTeamVestingAccountsRequest {
    return {};
  },

  toJSON(_: QueryTeamVestingAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingAccountsRequest>, I>>(base?: I): QueryTeamVestingAccountsRequest {
    return QueryTeamVestingAccountsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingAccountsRequest>, I>>(_: I): QueryTeamVestingAccountsRequest {
    const message = createBaseQueryTeamVestingAccountsRequest();
    return message;
  },
};

function createBaseQueryTeamVestingAccountsResponse(): QueryTeamVestingAccountsResponse {
  return { accounts: [] };
}

export const QueryTeamVestingAccountsResponse = {
  encode(message: QueryTeamVestingAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      TeamVestingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(TeamVestingAccount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingAccountsResponse {
    return {
      accounts: globalThis.Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => TeamVestingAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTeamVestingAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts.map((e) => TeamVestingAccount.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingAccountsResponse>, I>>(
    base?: I,
  ): QueryTeamVestingAccountsResponse {
    return QueryTeamVestingAccountsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingAccountsResponse>, I>>(
    object: I,
  ): QueryTeamVestingAccountsResponse {
    const message = createBaseQueryTeamVestingAccountsResponse();
    message.accounts = object.accounts?.map((e) => TeamVestingAccount.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTeamVestingAccountRequest(): QueryTeamVestingAccountRequest {
  return { id: "0" };
}

export const QueryTeamVestingAccountRequest = {
  encode(message: QueryTeamVestingAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingAccountRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "0" };
  },

  toJSON(message: QueryTeamVestingAccountRequest): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingAccountRequest>, I>>(base?: I): QueryTeamVestingAccountRequest {
    return QueryTeamVestingAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingAccountRequest>, I>>(
    object: I,
  ): QueryTeamVestingAccountRequest {
    const message = createBaseQueryTeamVestingAccountRequest();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseQueryTeamVestingAccountResponse(): QueryTeamVestingAccountResponse {
  return { account: undefined };
}

export const QueryTeamVestingAccountResponse = {
  encode(message: QueryTeamVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      TeamVestingAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = TeamVestingAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingAccountResponse {
    return { account: isSet(object.account) ? TeamVestingAccount.fromJSON(object.account) : undefined };
  },

  toJSON(message: QueryTeamVestingAccountResponse): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = TeamVestingAccount.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingAccountResponse>, I>>(base?: I): QueryTeamVestingAccountResponse {
    return QueryTeamVestingAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingAccountResponse>, I>>(
    object: I,
  ): QueryTeamVestingAccountResponse {
    const message = createBaseQueryTeamVestingAccountResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? TeamVestingAccount.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseQueryTeamVestingStatusRequest(): QueryTeamVestingStatusRequest {
  return { id: "0" };
}

export const QueryTeamVestingStatusRequest = {
  encode(message: QueryTeamVestingStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingStatusRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "0" };
  },

  toJSON(message: QueryTeamVestingStatusRequest): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingStatusRequest>, I>>(base?: I): QueryTeamVestingStatusRequest {
    return QueryTeamVestingStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingStatusRequest>, I>>(
    object: I,
  ): QueryTeamVestingStatusRequest {
    const message = createBaseQueryTeamVestingStatusRequest();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseQueryTeamVestingStatusResponse(): QueryTeamVestingStatusResponse {
  return { request_date: "", plan: undefined, status: undefined };
}

export const QueryTeamVestingStatusResponse = {
  encode(message: QueryTeamVestingStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request_date !== "") {
      writer.uint32(10).string(message.request_date);
    }
    if (message.plan !== undefined) {
      QueryVestingPlan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      QueryVestingStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request_date = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.plan = QueryVestingPlan.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = QueryVestingStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingStatusResponse {
    return {
      request_date: isSet(object.request_date) ? globalThis.String(object.request_date) : "",
      plan: isSet(object.plan) ? QueryVestingPlan.fromJSON(object.plan) : undefined,
      status: isSet(object.status) ? QueryVestingStatus.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: QueryTeamVestingStatusResponse): unknown {
    const obj: any = {};
    if (message.request_date !== "") {
      obj.request_date = message.request_date;
    }
    if (message.plan !== undefined) {
      obj.plan = QueryVestingPlan.toJSON(message.plan);
    }
    if (message.status !== undefined) {
      obj.status = QueryVestingStatus.toJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingStatusResponse>, I>>(base?: I): QueryTeamVestingStatusResponse {
    return QueryTeamVestingStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingStatusResponse>, I>>(
    object: I,
  ): QueryTeamVestingStatusResponse {
    const message = createBaseQueryTeamVestingStatusResponse();
    message.request_date = object.request_date ?? "";
    message.plan = (object.plan !== undefined && object.plan !== null)
      ? QueryVestingPlan.fromPartial(object.plan)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? QueryVestingStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseQueryTeamVestingStatusByTimeRequest(): QueryTeamVestingStatusByTimeRequest {
  return { id: "0", time: "0" };
}

export const QueryTeamVestingStatusByTimeRequest = {
  encode(message: QueryTeamVestingStatusByTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.time !== "0") {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingStatusByTimeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingStatusByTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingStatusByTimeRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
    };
  },

  toJSON(message: QueryTeamVestingStatusByTimeRequest): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.time !== "0") {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingStatusByTimeRequest>, I>>(
    base?: I,
  ): QueryTeamVestingStatusByTimeRequest {
    return QueryTeamVestingStatusByTimeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingStatusByTimeRequest>, I>>(
    object: I,
  ): QueryTeamVestingStatusByTimeRequest {
    const message = createBaseQueryTeamVestingStatusByTimeRequest();
    message.id = object.id ?? "0";
    message.time = object.time ?? "0";
    return message;
  },
};

function createBaseQueryTeamVestingStatusByTimeResponse(): QueryTeamVestingStatusByTimeResponse {
  return { request_date: "", plan: undefined, status: undefined };
}

export const QueryTeamVestingStatusByTimeResponse = {
  encode(message: QueryTeamVestingStatusByTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request_date !== "") {
      writer.uint32(10).string(message.request_date);
    }
    if (message.plan !== undefined) {
      QueryVestingPlan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      QueryVestingStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamVestingStatusByTimeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTeamVestingStatusByTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request_date = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.plan = QueryVestingPlan.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = QueryVestingStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTeamVestingStatusByTimeResponse {
    return {
      request_date: isSet(object.request_date) ? globalThis.String(object.request_date) : "",
      plan: isSet(object.plan) ? QueryVestingPlan.fromJSON(object.plan) : undefined,
      status: isSet(object.status) ? QueryVestingStatus.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: QueryTeamVestingStatusByTimeResponse): unknown {
    const obj: any = {};
    if (message.request_date !== "") {
      obj.request_date = message.request_date;
    }
    if (message.plan !== undefined) {
      obj.plan = QueryVestingPlan.toJSON(message.plan);
    }
    if (message.status !== undefined) {
      obj.status = QueryVestingStatus.toJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTeamVestingStatusByTimeResponse>, I>>(
    base?: I,
  ): QueryTeamVestingStatusByTimeResponse {
    return QueryTeamVestingStatusByTimeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTeamVestingStatusByTimeResponse>, I>>(
    object: I,
  ): QueryTeamVestingStatusByTimeResponse {
    const message = createBaseQueryTeamVestingStatusByTimeResponse();
    message.request_date = object.request_date ?? "";
    message.plan = (object.plan !== undefined && object.plan !== null)
      ? QueryVestingPlan.fromPartial(object.plan)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? QueryVestingStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseQueryVestingStatus(): QueryVestingStatus {
  return {
    total_vested_amount: "0",
    total_unlocked_amount: "0",
    current_claimable_amount: "0",
    locked_vested_amount: "0",
    remaining_unvested_amount: "0",
    claimed_amount: "0",
    total_rewards: "0",
    claimed_rewards: "0",
    available_rewards: "0",
  };
}

export const QueryVestingStatus = {
  encode(message: QueryVestingStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total_vested_amount !== "0") {
      writer.uint32(8).uint64(message.total_vested_amount);
    }
    if (message.total_unlocked_amount !== "0") {
      writer.uint32(16).uint64(message.total_unlocked_amount);
    }
    if (message.current_claimable_amount !== "0") {
      writer.uint32(24).uint64(message.current_claimable_amount);
    }
    if (message.locked_vested_amount !== "0") {
      writer.uint32(32).uint64(message.locked_vested_amount);
    }
    if (message.remaining_unvested_amount !== "0") {
      writer.uint32(40).uint64(message.remaining_unvested_amount);
    }
    if (message.claimed_amount !== "0") {
      writer.uint32(48).uint64(message.claimed_amount);
    }
    if (message.total_rewards !== "0") {
      writer.uint32(56).uint64(message.total_rewards);
    }
    if (message.claimed_rewards !== "0") {
      writer.uint32(64).uint64(message.claimed_rewards);
    }
    if (message.available_rewards !== "0") {
      writer.uint32(72).uint64(message.available_rewards);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVestingStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.total_vested_amount = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_unlocked_amount = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.current_claimable_amount = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.locked_vested_amount = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.remaining_unvested_amount = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.claimed_amount = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.total_rewards = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.claimed_rewards = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.available_rewards = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVestingStatus {
    return {
      total_vested_amount: isSet(object.total_vested_amount) ? globalThis.String(object.total_vested_amount) : "0",
      total_unlocked_amount: isSet(object.total_unlocked_amount)
        ? globalThis.String(object.total_unlocked_amount)
        : "0",
      current_claimable_amount: isSet(object.current_claimable_amount)
        ? globalThis.String(object.current_claimable_amount)
        : "0",
      locked_vested_amount: isSet(object.locked_vested_amount) ? globalThis.String(object.locked_vested_amount) : "0",
      remaining_unvested_amount: isSet(object.remaining_unvested_amount)
        ? globalThis.String(object.remaining_unvested_amount)
        : "0",
      claimed_amount: isSet(object.claimed_amount) ? globalThis.String(object.claimed_amount) : "0",
      total_rewards: isSet(object.total_rewards) ? globalThis.String(object.total_rewards) : "0",
      claimed_rewards: isSet(object.claimed_rewards) ? globalThis.String(object.claimed_rewards) : "0",
      available_rewards: isSet(object.available_rewards) ? globalThis.String(object.available_rewards) : "0",
    };
  },

  toJSON(message: QueryVestingStatus): unknown {
    const obj: any = {};
    if (message.total_vested_amount !== "0") {
      obj.total_vested_amount = message.total_vested_amount;
    }
    if (message.total_unlocked_amount !== "0") {
      obj.total_unlocked_amount = message.total_unlocked_amount;
    }
    if (message.current_claimable_amount !== "0") {
      obj.current_claimable_amount = message.current_claimable_amount;
    }
    if (message.locked_vested_amount !== "0") {
      obj.locked_vested_amount = message.locked_vested_amount;
    }
    if (message.remaining_unvested_amount !== "0") {
      obj.remaining_unvested_amount = message.remaining_unvested_amount;
    }
    if (message.claimed_amount !== "0") {
      obj.claimed_amount = message.claimed_amount;
    }
    if (message.total_rewards !== "0") {
      obj.total_rewards = message.total_rewards;
    }
    if (message.claimed_rewards !== "0") {
      obj.claimed_rewards = message.claimed_rewards;
    }
    if (message.available_rewards !== "0") {
      obj.available_rewards = message.available_rewards;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVestingStatus>, I>>(base?: I): QueryVestingStatus {
    return QueryVestingStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryVestingStatus>, I>>(object: I): QueryVestingStatus {
    const message = createBaseQueryVestingStatus();
    message.total_vested_amount = object.total_vested_amount ?? "0";
    message.total_unlocked_amount = object.total_unlocked_amount ?? "0";
    message.current_claimable_amount = object.current_claimable_amount ?? "0";
    message.locked_vested_amount = object.locked_vested_amount ?? "0";
    message.remaining_unvested_amount = object.remaining_unvested_amount ?? "0";
    message.claimed_amount = object.claimed_amount ?? "0";
    message.total_rewards = object.total_rewards ?? "0";
    message.claimed_rewards = object.claimed_rewards ?? "0";
    message.available_rewards = object.available_rewards ?? "0";
    return message;
  },
};

function createBaseQueryVestingPlan(): QueryVestingPlan {
  return {
    commencement: "",
    token_vesting_start: "",
    token_vesting_finished: "",
    token_unlock_start: "",
    token_unlock_finished: "",
    clawback: "0",
    clawback_amount: "0",
    maximum_vesting_amount: "0",
  };
}

export const QueryVestingPlan = {
  encode(message: QueryVestingPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commencement !== "") {
      writer.uint32(10).string(message.commencement);
    }
    if (message.token_vesting_start !== "") {
      writer.uint32(18).string(message.token_vesting_start);
    }
    if (message.token_vesting_finished !== "") {
      writer.uint32(26).string(message.token_vesting_finished);
    }
    if (message.token_unlock_start !== "") {
      writer.uint32(34).string(message.token_unlock_start);
    }
    if (message.token_unlock_finished !== "") {
      writer.uint32(42).string(message.token_unlock_finished);
    }
    if (message.clawback !== "0") {
      writer.uint32(48).uint64(message.clawback);
    }
    if (message.clawback_amount !== "0") {
      writer.uint32(56).uint64(message.clawback_amount);
    }
    if (message.maximum_vesting_amount !== "0") {
      writer.uint32(64).uint64(message.maximum_vesting_amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingPlan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVestingPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commencement = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token_vesting_start = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token_vesting_finished = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.token_unlock_start = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.token_unlock_finished = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.clawback = longToString(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.clawback_amount = longToString(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.maximum_vesting_amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVestingPlan {
    return {
      commencement: isSet(object.commencement) ? globalThis.String(object.commencement) : "",
      token_vesting_start: isSet(object.token_vesting_start) ? globalThis.String(object.token_vesting_start) : "",
      token_vesting_finished: isSet(object.token_vesting_finished)
        ? globalThis.String(object.token_vesting_finished)
        : "",
      token_unlock_start: isSet(object.token_unlock_start) ? globalThis.String(object.token_unlock_start) : "",
      token_unlock_finished: isSet(object.token_unlock_finished) ? globalThis.String(object.token_unlock_finished) : "",
      clawback: isSet(object.clawback) ? globalThis.String(object.clawback) : "0",
      clawback_amount: isSet(object.clawback_amount) ? globalThis.String(object.clawback_amount) : "0",
      maximum_vesting_amount: isSet(object.maximum_vesting_amount)
        ? globalThis.String(object.maximum_vesting_amount)
        : "0",
    };
  },

  toJSON(message: QueryVestingPlan): unknown {
    const obj: any = {};
    if (message.commencement !== "") {
      obj.commencement = message.commencement;
    }
    if (message.token_vesting_start !== "") {
      obj.token_vesting_start = message.token_vesting_start;
    }
    if (message.token_vesting_finished !== "") {
      obj.token_vesting_finished = message.token_vesting_finished;
    }
    if (message.token_unlock_start !== "") {
      obj.token_unlock_start = message.token_unlock_start;
    }
    if (message.token_unlock_finished !== "") {
      obj.token_unlock_finished = message.token_unlock_finished;
    }
    if (message.clawback !== "0") {
      obj.clawback = message.clawback;
    }
    if (message.clawback_amount !== "0") {
      obj.clawback_amount = message.clawback_amount;
    }
    if (message.maximum_vesting_amount !== "0") {
      obj.maximum_vesting_amount = message.maximum_vesting_amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVestingPlan>, I>>(base?: I): QueryVestingPlan {
    return QueryVestingPlan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryVestingPlan>, I>>(object: I): QueryVestingPlan {
    const message = createBaseQueryVestingPlan();
    message.commencement = object.commencement ?? "";
    message.token_vesting_start = object.token_vesting_start ?? "";
    message.token_vesting_finished = object.token_vesting_finished ?? "";
    message.token_unlock_start = object.token_unlock_start ?? "";
    message.token_unlock_finished = object.token_unlock_finished ?? "";
    message.clawback = object.clawback ?? "0";
    message.clawback_amount = object.clawback_amount ?? "0";
    message.maximum_vesting_amount = object.maximum_vesting_amount ?? "0";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** TeamInfo queries all important information from the team module */
  TeamInfo(request: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse>;
  /** TeamVestingAccounts queries all team vesting accounts of the module. */
  TeamVestingAccounts(request: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponse>;
  /** TeamVestingAccount queries the team vesting accounts of the module. */
  TeamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse>;
  /** TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
  TeamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse>;
  /** TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
  TeamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse>;
}

export const QueryServiceName = "kyve.team.v1beta1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.TeamInfo = this.TeamInfo.bind(this);
    this.TeamVestingAccounts = this.TeamVestingAccounts.bind(this);
    this.TeamVestingAccount = this.TeamVestingAccount.bind(this);
    this.TeamVestingStatus = this.TeamVestingStatus.bind(this);
    this.TeamVestingStatusByTime = this.TeamVestingStatusByTime.bind(this);
  }
  TeamInfo(request: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse> {
    const data = QueryTeamInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TeamInfo", data);
    return promise.then((data) => QueryTeamInfoResponse.decode(_m0.Reader.create(data)));
  }

  TeamVestingAccounts(request: QueryTeamVestingAccountsRequest): Promise<QueryTeamVestingAccountsResponse> {
    const data = QueryTeamVestingAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TeamVestingAccounts", data);
    return promise.then((data) => QueryTeamVestingAccountsResponse.decode(_m0.Reader.create(data)));
  }

  TeamVestingAccount(request: QueryTeamVestingAccountRequest): Promise<QueryTeamVestingAccountResponse> {
    const data = QueryTeamVestingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TeamVestingAccount", data);
    return promise.then((data) => QueryTeamVestingAccountResponse.decode(_m0.Reader.create(data)));
  }

  TeamVestingStatus(request: QueryTeamVestingStatusRequest): Promise<QueryTeamVestingStatusResponse> {
    const data = QueryTeamVestingStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TeamVestingStatus", data);
    return promise.then((data) => QueryTeamVestingStatusResponse.decode(_m0.Reader.create(data)));
  }

  TeamVestingStatusByTime(request: QueryTeamVestingStatusByTimeRequest): Promise<QueryTeamVestingStatusByTimeResponse> {
    const data = QueryTeamVestingStatusByTimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TeamVestingStatusByTime", data);
    return promise.then((data) => QueryTeamVestingStatusByTimeResponse.decode(_m0.Reader.create(data)));
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
