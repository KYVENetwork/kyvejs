import _m0 from "protobufjs/minimal";
import { TeamVestingAccount } from "./team";
export declare const protobufPackage = "kyve.team.v1beta1";
/** QueryAccountsRequest is request type for the Query/TeamInfo RPC method. */
export interface QueryTeamInfoRequest {}
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
export interface QueryTeamVestingAccountsRequest {}
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
  plan?: QueryVestingPlan | undefined;
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
  plan?: QueryVestingPlan | undefined;
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
export declare const QueryTeamInfoRequest: {
  encode(_: QueryTeamInfoRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTeamInfoRequest;
  fromJSON(_: any): QueryTeamInfoRequest;
  toJSON(_: QueryTeamInfoRequest): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): QueryTeamInfoRequest;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): QueryTeamInfoRequest;
};
export declare const QueryTeamInfoResponse: {
  encode(message: QueryTeamInfoResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamInfoResponse;
  fromJSON(object: any): QueryTeamInfoResponse;
  toJSON(message: QueryTeamInfoResponse): unknown;
  create<
    I extends {
      foundation_authority?: string | undefined;
      bcp_authority?: string | undefined;
      total_team_allocation?: string | undefined;
      issued_team_allocation?: string | undefined;
      available_team_allocation?: string | undefined;
      total_authority_rewards?: string | undefined;
      claimed_authority_rewards?: string | undefined;
      available_authority_rewards?: string | undefined;
      total_account_rewards?: string | undefined;
      claimed_account_rewards?: string | undefined;
      available_account_rewards?: string | undefined;
      required_module_balance?: string | undefined;
      team_module_balance?: string | undefined;
    } & {
      foundation_authority?: string | undefined;
      bcp_authority?: string | undefined;
      total_team_allocation?: string | undefined;
      issued_team_allocation?: string | undefined;
      available_team_allocation?: string | undefined;
      total_authority_rewards?: string | undefined;
      claimed_authority_rewards?: string | undefined;
      available_authority_rewards?: string | undefined;
      total_account_rewards?: string | undefined;
      claimed_account_rewards?: string | undefined;
      available_account_rewards?: string | undefined;
      required_module_balance?: string | undefined;
      team_module_balance?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryTeamInfoResponse>]: never }
  >(
    base?: I | undefined
  ): QueryTeamInfoResponse;
  fromPartial<
    I_1 extends {
      foundation_authority?: string | undefined;
      bcp_authority?: string | undefined;
      total_team_allocation?: string | undefined;
      issued_team_allocation?: string | undefined;
      available_team_allocation?: string | undefined;
      total_authority_rewards?: string | undefined;
      claimed_authority_rewards?: string | undefined;
      available_authority_rewards?: string | undefined;
      total_account_rewards?: string | undefined;
      claimed_account_rewards?: string | undefined;
      available_account_rewards?: string | undefined;
      required_module_balance?: string | undefined;
      team_module_balance?: string | undefined;
    } & {
      foundation_authority?: string | undefined;
      bcp_authority?: string | undefined;
      total_team_allocation?: string | undefined;
      issued_team_allocation?: string | undefined;
      available_team_allocation?: string | undefined;
      total_authority_rewards?: string | undefined;
      claimed_authority_rewards?: string | undefined;
      available_authority_rewards?: string | undefined;
      total_account_rewards?: string | undefined;
      claimed_account_rewards?: string | undefined;
      available_account_rewards?: string | undefined;
      required_module_balance?: string | undefined;
      team_module_balance?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryTeamInfoResponse>]: never }
  >(
    object: I_1
  ): QueryTeamInfoResponse;
};
export declare const QueryTeamVestingAccountsRequest: {
  encode(_: QueryTeamVestingAccountsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingAccountsRequest;
  fromJSON(_: any): QueryTeamVestingAccountsRequest;
  toJSON(_: QueryTeamVestingAccountsRequest): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): QueryTeamVestingAccountsRequest;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): QueryTeamVestingAccountsRequest;
};
export declare const QueryTeamVestingAccountsResponse: {
  encode(
    message: QueryTeamVestingAccountsResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingAccountsResponse;
  fromJSON(object: any): QueryTeamVestingAccountsResponse;
  toJSON(message: QueryTeamVestingAccountsResponse): unknown;
  create<
    I extends {
      accounts?:
        | {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[]
        | undefined;
    } & {
      accounts?:
        | ({
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[] &
            ({
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              [K in Exclude<
                keyof I["accounts"][number],
                keyof TeamVestingAccount
              >]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["accounts"],
                keyof {
                  id?: string | undefined;
                  total_allocation?: string | undefined;
                  commencement?: string | undefined;
                  clawback?: string | undefined;
                  unlocked_claimed?: string | undefined;
                  last_claimed_time?: string | undefined;
                  total_rewards?: string | undefined;
                  rewards_claimed?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_2 in Exclude<keyof I, "accounts">]: never }
  >(
    base?: I | undefined
  ): QueryTeamVestingAccountsResponse;
  fromPartial<
    I_1 extends {
      accounts?:
        | {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[]
        | undefined;
    } & {
      accounts?:
        | ({
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[] &
            ({
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I_1["accounts"][number],
                keyof TeamVestingAccount
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I_1["accounts"],
                keyof {
                  id?: string | undefined;
                  total_allocation?: string | undefined;
                  commencement?: string | undefined;
                  clawback?: string | undefined;
                  unlocked_claimed?: string | undefined;
                  last_claimed_time?: string | undefined;
                  total_rewards?: string | undefined;
                  rewards_claimed?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I_1, "accounts">]: never }
  >(
    object: I_1
  ): QueryTeamVestingAccountsResponse;
};
export declare const QueryTeamVestingAccountRequest: {
  encode(
    message: QueryTeamVestingAccountRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingAccountRequest;
  fromJSON(object: any): QueryTeamVestingAccountRequest;
  toJSON(message: QueryTeamVestingAccountRequest): unknown;
  create<
    I extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never }
  >(
    base?: I | undefined
  ): QueryTeamVestingAccountRequest;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never }
  >(
    object: I_1
  ): QueryTeamVestingAccountRequest;
};
export declare const QueryTeamVestingAccountResponse: {
  encode(
    message: QueryTeamVestingAccountResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingAccountResponse;
  fromJSON(object: any): QueryTeamVestingAccountResponse;
  toJSON(message: QueryTeamVestingAccountResponse): unknown;
  create<
    I extends {
      account?:
        | {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }
        | undefined;
    } & {
      account?:
        | ({
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            [K in Exclude<keyof I["account"], keyof TeamVestingAccount>]: never;
          })
        | undefined;
    } & { [K_1 in Exclude<keyof I, "account">]: never }
  >(
    base?: I | undefined
  ): QueryTeamVestingAccountResponse;
  fromPartial<
    I_1 extends {
      account?:
        | {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }
        | undefined;
    } & {
      account?:
        | ({
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            [K_2 in Exclude<
              keyof I_1["account"],
              keyof TeamVestingAccount
            >]: never;
          })
        | undefined;
    } & { [K_3 in Exclude<keyof I_1, "account">]: never }
  >(
    object: I_1
  ): QueryTeamVestingAccountResponse;
};
export declare const QueryTeamVestingStatusRequest: {
  encode(
    message: QueryTeamVestingStatusRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingStatusRequest;
  fromJSON(object: any): QueryTeamVestingStatusRequest;
  toJSON(message: QueryTeamVestingStatusRequest): unknown;
  create<
    I extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never }
  >(
    base?: I | undefined
  ): QueryTeamVestingStatusRequest;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never }
  >(
    object: I_1
  ): QueryTeamVestingStatusRequest;
};
export declare const QueryTeamVestingStatusResponse: {
  encode(
    message: QueryTeamVestingStatusResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingStatusResponse;
  fromJSON(object: any): QueryTeamVestingStatusResponse;
  toJSON(message: QueryTeamVestingStatusResponse): unknown;
  create<
    I extends {
      request_date?: string | undefined;
      plan?:
        | {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          }
        | undefined;
      status?:
        | {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          }
        | undefined;
    } & {
      request_date?: string | undefined;
      plan?:
        | ({
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            [K in Exclude<keyof I["plan"], keyof QueryVestingPlan>]: never;
          })
        | undefined;
      status?:
        | ({
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            [K_1 in Exclude<
              keyof I["status"],
              keyof QueryVestingStatus
            >]: never;
          })
        | undefined;
    } & {
      [K_2 in Exclude<keyof I, keyof QueryTeamVestingStatusResponse>]: never;
    }
  >(
    base?: I | undefined
  ): QueryTeamVestingStatusResponse;
  fromPartial<
    I_1 extends {
      request_date?: string | undefined;
      plan?:
        | {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          }
        | undefined;
      status?:
        | {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          }
        | undefined;
    } & {
      request_date?: string | undefined;
      plan?:
        | ({
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["plan"], keyof QueryVestingPlan>]: never;
          })
        | undefined;
      status?:
        | ({
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            [K_4 in Exclude<
              keyof I_1["status"],
              keyof QueryVestingStatus
            >]: never;
          })
        | undefined;
    } & {
      [K_5 in Exclude<keyof I_1, keyof QueryTeamVestingStatusResponse>]: never;
    }
  >(
    object: I_1
  ): QueryTeamVestingStatusResponse;
};
export declare const QueryTeamVestingStatusByTimeRequest: {
  encode(
    message: QueryTeamVestingStatusByTimeRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingStatusByTimeRequest;
  fromJSON(object: any): QueryTeamVestingStatusByTimeRequest;
  toJSON(message: QueryTeamVestingStatusByTimeRequest): unknown;
  create<
    I extends {
      id?: string | undefined;
      time?: string | undefined;
    } & {
      id?: string | undefined;
      time?: string | undefined;
    } & {
      [K in Exclude<keyof I, keyof QueryTeamVestingStatusByTimeRequest>]: never;
    }
  >(
    base?: I | undefined
  ): QueryTeamVestingStatusByTimeRequest;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
      time?: string | undefined;
    } & {
      id?: string | undefined;
      time?: string | undefined;
    } & {
      [K_1 in Exclude<
        keyof I_1,
        keyof QueryTeamVestingStatusByTimeRequest
      >]: never;
    }
  >(
    object: I_1
  ): QueryTeamVestingStatusByTimeRequest;
};
export declare const QueryTeamVestingStatusByTimeResponse: {
  encode(
    message: QueryTeamVestingStatusByTimeResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryTeamVestingStatusByTimeResponse;
  fromJSON(object: any): QueryTeamVestingStatusByTimeResponse;
  toJSON(message: QueryTeamVestingStatusByTimeResponse): unknown;
  create<
    I extends {
      request_date?: string | undefined;
      plan?:
        | {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          }
        | undefined;
      status?:
        | {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          }
        | undefined;
    } & {
      request_date?: string | undefined;
      plan?:
        | ({
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            [K in Exclude<keyof I["plan"], keyof QueryVestingPlan>]: never;
          })
        | undefined;
      status?:
        | ({
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            [K_1 in Exclude<
              keyof I["status"],
              keyof QueryVestingStatus
            >]: never;
          })
        | undefined;
    } & {
      [K_2 in Exclude<
        keyof I,
        keyof QueryTeamVestingStatusByTimeResponse
      >]: never;
    }
  >(
    base?: I | undefined
  ): QueryTeamVestingStatusByTimeResponse;
  fromPartial<
    I_1 extends {
      request_date?: string | undefined;
      plan?:
        | {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          }
        | undefined;
      status?:
        | {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          }
        | undefined;
    } & {
      request_date?: string | undefined;
      plan?:
        | ({
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            commencement?: string | undefined;
            token_vesting_start?: string | undefined;
            token_vesting_finished?: string | undefined;
            token_unlock_start?: string | undefined;
            token_unlock_finished?: string | undefined;
            clawback?: string | undefined;
            clawback_amount?: string | undefined;
            maximum_vesting_amount?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["plan"], keyof QueryVestingPlan>]: never;
          })
        | undefined;
      status?:
        | ({
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            total_vested_amount?: string | undefined;
            total_unlocked_amount?: string | undefined;
            current_claimable_amount?: string | undefined;
            locked_vested_amount?: string | undefined;
            remaining_unvested_amount?: string | undefined;
            claimed_amount?: string | undefined;
            total_rewards?: string | undefined;
            claimed_rewards?: string | undefined;
            available_rewards?: string | undefined;
          } & {
            [K_4 in Exclude<
              keyof I_1["status"],
              keyof QueryVestingStatus
            >]: never;
          })
        | undefined;
    } & {
      [K_5 in Exclude<
        keyof I_1,
        keyof QueryTeamVestingStatusByTimeResponse
      >]: never;
    }
  >(
    object: I_1
  ): QueryTeamVestingStatusByTimeResponse;
};
export declare const QueryVestingStatus: {
  encode(message: QueryVestingStatus, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingStatus;
  fromJSON(object: any): QueryVestingStatus;
  toJSON(message: QueryVestingStatus): unknown;
  create<
    I extends {
      total_vested_amount?: string | undefined;
      total_unlocked_amount?: string | undefined;
      current_claimable_amount?: string | undefined;
      locked_vested_amount?: string | undefined;
      remaining_unvested_amount?: string | undefined;
      claimed_amount?: string | undefined;
      total_rewards?: string | undefined;
      claimed_rewards?: string | undefined;
      available_rewards?: string | undefined;
    } & {
      total_vested_amount?: string | undefined;
      total_unlocked_amount?: string | undefined;
      current_claimable_amount?: string | undefined;
      locked_vested_amount?: string | undefined;
      remaining_unvested_amount?: string | undefined;
      claimed_amount?: string | undefined;
      total_rewards?: string | undefined;
      claimed_rewards?: string | undefined;
      available_rewards?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryVestingStatus>]: never }
  >(
    base?: I | undefined
  ): QueryVestingStatus;
  fromPartial<
    I_1 extends {
      total_vested_amount?: string | undefined;
      total_unlocked_amount?: string | undefined;
      current_claimable_amount?: string | undefined;
      locked_vested_amount?: string | undefined;
      remaining_unvested_amount?: string | undefined;
      claimed_amount?: string | undefined;
      total_rewards?: string | undefined;
      claimed_rewards?: string | undefined;
      available_rewards?: string | undefined;
    } & {
      total_vested_amount?: string | undefined;
      total_unlocked_amount?: string | undefined;
      current_claimable_amount?: string | undefined;
      locked_vested_amount?: string | undefined;
      remaining_unvested_amount?: string | undefined;
      claimed_amount?: string | undefined;
      total_rewards?: string | undefined;
      claimed_rewards?: string | undefined;
      available_rewards?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryVestingStatus>]: never }
  >(
    object: I_1
  ): QueryVestingStatus;
};
export declare const QueryVestingPlan: {
  encode(message: QueryVestingPlan, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVestingPlan;
  fromJSON(object: any): QueryVestingPlan;
  toJSON(message: QueryVestingPlan): unknown;
  create<
    I extends {
      commencement?: string | undefined;
      token_vesting_start?: string | undefined;
      token_vesting_finished?: string | undefined;
      token_unlock_start?: string | undefined;
      token_unlock_finished?: string | undefined;
      clawback?: string | undefined;
      clawback_amount?: string | undefined;
      maximum_vesting_amount?: string | undefined;
    } & {
      commencement?: string | undefined;
      token_vesting_start?: string | undefined;
      token_vesting_finished?: string | undefined;
      token_unlock_start?: string | undefined;
      token_unlock_finished?: string | undefined;
      clawback?: string | undefined;
      clawback_amount?: string | undefined;
      maximum_vesting_amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryVestingPlan>]: never }
  >(
    base?: I | undefined
  ): QueryVestingPlan;
  fromPartial<
    I_1 extends {
      commencement?: string | undefined;
      token_vesting_start?: string | undefined;
      token_vesting_finished?: string | undefined;
      token_unlock_start?: string | undefined;
      token_unlock_finished?: string | undefined;
      clawback?: string | undefined;
      clawback_amount?: string | undefined;
      maximum_vesting_amount?: string | undefined;
    } & {
      commencement?: string | undefined;
      token_vesting_start?: string | undefined;
      token_vesting_finished?: string | undefined;
      token_unlock_start?: string | undefined;
      token_unlock_finished?: string | undefined;
      clawback?: string | undefined;
      clawback_amount?: string | undefined;
      maximum_vesting_amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryVestingPlan>]: never }
  >(
    object: I_1
  ): QueryVestingPlan;
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** TeamInfo queries all important information from the team module */
  TeamInfo(request: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse>;
  /** TeamVestingAccounts queries all team vesting accounts of the module. */
  TeamVestingAccounts(
    request: QueryTeamVestingAccountsRequest
  ): Promise<QueryTeamVestingAccountsResponse>;
  /** TeamVestingAccount queries the team vesting accounts of the module. */
  TeamVestingAccount(
    request: QueryTeamVestingAccountRequest
  ): Promise<QueryTeamVestingAccountResponse>;
  /** TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
  TeamVestingStatus(
    request: QueryTeamVestingStatusRequest
  ): Promise<QueryTeamVestingStatusResponse>;
  /** TeamCurrentVestingStatus queries the current vesting progress of a team vesting account */
  TeamVestingStatusByTime(
    request: QueryTeamVestingStatusByTimeRequest
  ): Promise<QueryTeamVestingStatusByTimeResponse>;
}
export declare const QueryServiceName = "kyve.team.v1beta1.Query";
export declare class QueryClientImpl implements Query {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  TeamInfo(request: QueryTeamInfoRequest): Promise<QueryTeamInfoResponse>;
  TeamVestingAccounts(
    request: QueryTeamVestingAccountsRequest
  ): Promise<QueryTeamVestingAccountsResponse>;
  TeamVestingAccount(
    request: QueryTeamVestingAccountRequest
  ): Promise<QueryTeamVestingAccountResponse>;
  TeamVestingStatus(
    request: QueryTeamVestingStatusRequest
  ): Promise<QueryTeamVestingStatusResponse>;
  TeamVestingStatusByTime(
    request: QueryTeamVestingStatusByTimeRequest
  ): Promise<QueryTeamVestingStatusByTimeResponse>;
}
interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {
      [K in keyof P]: Exact<P[K], I[K]>;
    } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };
export {};
