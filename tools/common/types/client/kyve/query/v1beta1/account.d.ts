import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { BasicPool, FullStaker } from "./query";
export declare const protobufPackage = "kyve.query.v1beta1";
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
  /** address ... */
  address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
  /** balance ... */
  balance: string;
  /** protocol_staking ... */
  protocol_self_delegation: string;
  /** protocol_staking_unbonding */
  protocol_self_delegation_unbonding: string;
  /** protocol_delegation ... */
  protocol_delegation: string;
  /** protocol_delegation_unbonding */
  protocol_delegation_unbonding: string;
  /** protocol_rewards ... */
  protocol_rewards: string;
  /** protocol_funding ... */
  protocol_funding: string;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  /** address ... */
  address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponse {
  /** balance ... */
  unbondings: DelegationUnbonding[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
  /** amount */
  amount: string;
  /** creation_time */
  creation_time: string;
  /** staker */
  staker?: FullStaker | undefined;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
export interface QueryAccountFundedListRequest {
  /** address ... */
  address: string;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponse {
  /** funded ... */
  funded: Funded[];
}
/** Funded ... */
export interface Funded {
  /** amount ... */
  amount: string;
  /** pool ... */
  pool?: BasicPool | undefined;
}
/** QueryAccountDelegationListRequest ... */
export interface QueryAccountRedelegationRequest {
  /** address ... */
  address: string;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountRedelegationResponse {
  /** redelegation_cooldown_entries ... */
  redelegation_cooldown_entries: RedelegationEntry[];
  /** availableSlots ... */
  available_slots: string;
}
/** RedelegationEntry ... */
export interface RedelegationEntry {
  /** creation_date ... */
  creation_date: string;
  /** finish_date ... */
  finish_date: string;
}
export declare const QueryAccountAssetsRequest: {
  encode(message: QueryAccountAssetsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountAssetsRequest;
  fromJSON(object: any): QueryAccountAssetsRequest;
  toJSON(message: QueryAccountAssetsRequest): unknown;
  create<
    I extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never }
  >(
    base?: I | undefined
  ): QueryAccountAssetsRequest;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never }
  >(
    object: I_1
  ): QueryAccountAssetsRequest;
};
export declare const QueryAccountAssetsResponse: {
  encode(message: QueryAccountAssetsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountAssetsResponse;
  fromJSON(object: any): QueryAccountAssetsResponse;
  toJSON(message: QueryAccountAssetsResponse): unknown;
  create<
    I extends {
      balance?: string | undefined;
      protocol_self_delegation?: string | undefined;
      protocol_self_delegation_unbonding?: string | undefined;
      protocol_delegation?: string | undefined;
      protocol_delegation_unbonding?: string | undefined;
      protocol_rewards?: string | undefined;
      protocol_funding?: string | undefined;
    } & {
      balance?: string | undefined;
      protocol_self_delegation?: string | undefined;
      protocol_self_delegation_unbonding?: string | undefined;
      protocol_delegation?: string | undefined;
      protocol_delegation_unbonding?: string | undefined;
      protocol_rewards?: string | undefined;
      protocol_funding?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryAccountAssetsResponse>]: never }
  >(
    base?: I | undefined
  ): QueryAccountAssetsResponse;
  fromPartial<
    I_1 extends {
      balance?: string | undefined;
      protocol_self_delegation?: string | undefined;
      protocol_self_delegation_unbonding?: string | undefined;
      protocol_delegation?: string | undefined;
      protocol_delegation_unbonding?: string | undefined;
      protocol_rewards?: string | undefined;
      protocol_funding?: string | undefined;
    } & {
      balance?: string | undefined;
      protocol_self_delegation?: string | undefined;
      protocol_self_delegation_unbonding?: string | undefined;
      protocol_delegation?: string | undefined;
      protocol_delegation_unbonding?: string | undefined;
      protocol_rewards?: string | undefined;
      protocol_funding?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryAccountAssetsResponse>]: never }
  >(
    object: I_1
  ): QueryAccountAssetsResponse;
};
export declare const QueryAccountDelegationUnbondingsRequest: {
  encode(
    message: QueryAccountDelegationUnbondingsRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDelegationUnbondingsRequest;
  fromJSON(object: any): QueryAccountDelegationUnbondingsRequest;
  toJSON(message: QueryAccountDelegationUnbondingsRequest): unknown;
  create<
    I extends {
      pagination?:
        | {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
          }
        | undefined;
      address?: string | undefined;
    } & {
      pagination?:
        | ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
          } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
          } & {
            [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never;
          })
        | undefined;
      address?: string | undefined;
    } & {
      [K_1 in Exclude<
        keyof I,
        keyof QueryAccountDelegationUnbondingsRequest
      >]: never;
    }
  >(
    base?: I | undefined
  ): QueryAccountDelegationUnbondingsRequest;
  fromPartial<
    I_1 extends {
      pagination?:
        | {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
          }
        | undefined;
      address?: string | undefined;
    } & {
      pagination?:
        | ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
          } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
          } & {
            [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never;
          })
        | undefined;
      address?: string | undefined;
    } & {
      [K_3 in Exclude<
        keyof I_1,
        keyof QueryAccountDelegationUnbondingsRequest
      >]: never;
    }
  >(
    object: I_1
  ): QueryAccountDelegationUnbondingsRequest;
};
export declare const QueryAccountDelegationUnbondingsResponse: {
  encode(
    message: QueryAccountDelegationUnbondingsResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDelegationUnbondingsResponse;
  fromJSON(object: any): QueryAccountDelegationUnbondingsResponse;
  toJSON(message: QueryAccountDelegationUnbondingsResponse): unknown;
  create<
    I extends {
      unbondings?:
        | {
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?:
              | {
                  address?: string | undefined;
                  metadata?:
                    | {
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        identity?: string | undefined;
                        security_contact?: string | undefined;
                        details?: string | undefined;
                        pending_commission_change?:
                          | {
                              commission?: string | undefined;
                              creation_date?: string | undefined;
                            }
                          | undefined;
                        commission_rewards?: string | undefined;
                      }
                    | undefined;
                  self_delegation?: string | undefined;
                  self_delegation_unbonding?: string | undefined;
                  total_delegation?: string | undefined;
                  delegator_count?: string | undefined;
                  pools?:
                    | {
                        pool?:
                          | {
                              id?: string | undefined;
                              name?: string | undefined;
                              runtime?: string | undefined;
                              logo?: string | undefined;
                              inflation_share_weight?: string | undefined;
                              upload_interval?: string | undefined;
                              total_funds?: string | undefined;
                              total_delegation?: string | undefined;
                              status?:
                                | import("../../pool/v1beta1/pool").PoolStatus
                                | undefined;
                            }
                          | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                        valaddress?: string | undefined;
                        balance?: string | undefined;
                      }[]
                    | undefined;
                }
              | undefined;
          }[]
        | undefined;
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
    } & {
      unbondings?:
        | ({
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?:
              | {
                  address?: string | undefined;
                  metadata?:
                    | {
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        identity?: string | undefined;
                        security_contact?: string | undefined;
                        details?: string | undefined;
                        pending_commission_change?:
                          | {
                              commission?: string | undefined;
                              creation_date?: string | undefined;
                            }
                          | undefined;
                        commission_rewards?: string | undefined;
                      }
                    | undefined;
                  self_delegation?: string | undefined;
                  self_delegation_unbonding?: string | undefined;
                  total_delegation?: string | undefined;
                  delegator_count?: string | undefined;
                  pools?:
                    | {
                        pool?:
                          | {
                              id?: string | undefined;
                              name?: string | undefined;
                              runtime?: string | undefined;
                              logo?: string | undefined;
                              inflation_share_weight?: string | undefined;
                              upload_interval?: string | undefined;
                              total_funds?: string | undefined;
                              total_delegation?: string | undefined;
                              status?:
                                | import("../../pool/v1beta1/pool").PoolStatus
                                | undefined;
                            }
                          | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                        valaddress?: string | undefined;
                        balance?: string | undefined;
                      }[]
                    | undefined;
                }
              | undefined;
          }[] &
            ({
              amount?: string | undefined;
              creation_time?: string | undefined;
              staker?:
                | {
                    address?: string | undefined;
                    metadata?:
                      | {
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              }
                            | undefined;
                          commission_rewards?: string | undefined;
                        }
                      | undefined;
                    self_delegation?: string | undefined;
                    self_delegation_unbonding?: string | undefined;
                    total_delegation?: string | undefined;
                    delegator_count?: string | undefined;
                    pools?:
                      | {
                          pool?:
                            | {
                                id?: string | undefined;
                                name?: string | undefined;
                                runtime?: string | undefined;
                                logo?: string | undefined;
                                inflation_share_weight?: string | undefined;
                                upload_interval?: string | undefined;
                                total_funds?: string | undefined;
                                total_delegation?: string | undefined;
                                status?:
                                  | import("../../pool/v1beta1/pool").PoolStatus
                                  | undefined;
                              }
                            | undefined;
                          points?: string | undefined;
                          is_leaving?: boolean | undefined;
                          valaddress?: string | undefined;
                          balance?: string | undefined;
                        }[]
                      | undefined;
                  }
                | undefined;
            } & {
              amount?: string | undefined;
              creation_time?: string | undefined;
              staker?:
                | ({
                    address?: string | undefined;
                    metadata?:
                      | {
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              }
                            | undefined;
                          commission_rewards?: string | undefined;
                        }
                      | undefined;
                    self_delegation?: string | undefined;
                    self_delegation_unbonding?: string | undefined;
                    total_delegation?: string | undefined;
                    delegator_count?: string | undefined;
                    pools?:
                      | {
                          pool?:
                            | {
                                id?: string | undefined;
                                name?: string | undefined;
                                runtime?: string | undefined;
                                logo?: string | undefined;
                                inflation_share_weight?: string | undefined;
                                upload_interval?: string | undefined;
                                total_funds?: string | undefined;
                                total_delegation?: string | undefined;
                                status?:
                                  | import("../../pool/v1beta1/pool").PoolStatus
                                  | undefined;
                              }
                            | undefined;
                          points?: string | undefined;
                          is_leaving?: boolean | undefined;
                          valaddress?: string | undefined;
                          balance?: string | undefined;
                        }[]
                      | undefined;
                  } & {
                    address?: string | undefined;
                    metadata?:
                      | ({
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              }
                            | undefined;
                          commission_rewards?: string | undefined;
                        } & {
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | ({
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              } & {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              } & {
                                [K in Exclude<
                                  keyof I["unbondings"][number]["staker"]["metadata"]["pending_commission_change"],
                                  keyof import("./query").CommissionChangeEntry
                                >]: never;
                              })
                            | undefined;
                          commission_rewards?: string | undefined;
                        } & {
                          [K_1 in Exclude<
                            keyof I["unbondings"][number]["staker"]["metadata"],
                            keyof import("./query").StakerMetadata
                          >]: never;
                        })
                      | undefined;
                    self_delegation?: string | undefined;
                    self_delegation_unbonding?: string | undefined;
                    total_delegation?: string | undefined;
                    delegator_count?: string | undefined;
                    pools?:
                      | ({
                          pool?:
                            | {
                                id?: string | undefined;
                                name?: string | undefined;
                                runtime?: string | undefined;
                                logo?: string | undefined;
                                inflation_share_weight?: string | undefined;
                                upload_interval?: string | undefined;
                                total_funds?: string | undefined;
                                total_delegation?: string | undefined;
                                status?:
                                  | import("../../pool/v1beta1/pool").PoolStatus
                                  | undefined;
                              }
                            | undefined;
                          points?: string | undefined;
                          is_leaving?: boolean | undefined;
                          valaddress?: string | undefined;
                          balance?: string | undefined;
                        }[] &
                          ({
                            pool?:
                              | {
                                  id?: string | undefined;
                                  name?: string | undefined;
                                  runtime?: string | undefined;
                                  logo?: string | undefined;
                                  inflation_share_weight?: string | undefined;
                                  upload_interval?: string | undefined;
                                  total_funds?: string | undefined;
                                  total_delegation?: string | undefined;
                                  status?:
                                    | import("../../pool/v1beta1/pool").PoolStatus
                                    | undefined;
                                }
                              | undefined;
                            points?: string | undefined;
                            is_leaving?: boolean | undefined;
                            valaddress?: string | undefined;
                            balance?: string | undefined;
                          } & {
                            pool?:
                              | ({
                                  id?: string | undefined;
                                  name?: string | undefined;
                                  runtime?: string | undefined;
                                  logo?: string | undefined;
                                  inflation_share_weight?: string | undefined;
                                  upload_interval?: string | undefined;
                                  total_funds?: string | undefined;
                                  total_delegation?: string | undefined;
                                  status?:
                                    | import("../../pool/v1beta1/pool").PoolStatus
                                    | undefined;
                                } & {
                                  id?: string | undefined;
                                  name?: string | undefined;
                                  runtime?: string | undefined;
                                  logo?: string | undefined;
                                  inflation_share_weight?: string | undefined;
                                  upload_interval?: string | undefined;
                                  total_funds?: string | undefined;
                                  total_delegation?: string | undefined;
                                  status?:
                                    | import("../../pool/v1beta1/pool").PoolStatus
                                    | undefined;
                                } & {
                                  [K_2 in Exclude<
                                    keyof I["unbondings"][number]["staker"]["pools"][number]["pool"],
                                    keyof BasicPool
                                  >]: never;
                                })
                              | undefined;
                            points?: string | undefined;
                            is_leaving?: boolean | undefined;
                            valaddress?: string | undefined;
                            balance?: string | undefined;
                          } & {
                            [K_3 in Exclude<
                              keyof I["unbondings"][number]["staker"]["pools"][number],
                              keyof import("./query").PoolMembership
                            >]: never;
                          })[] & {
                            [K_4 in Exclude<
                              keyof I["unbondings"][number]["staker"]["pools"],
                              keyof {
                                pool?:
                                  | {
                                      id?: string | undefined;
                                      name?: string | undefined;
                                      runtime?: string | undefined;
                                      logo?: string | undefined;
                                      inflation_share_weight?:
                                        | string
                                        | undefined;
                                      upload_interval?: string | undefined;
                                      total_funds?: string | undefined;
                                      total_delegation?: string | undefined;
                                      status?:
                                        | import("../../pool/v1beta1/pool").PoolStatus
                                        | undefined;
                                    }
                                  | undefined;
                                points?: string | undefined;
                                is_leaving?: boolean | undefined;
                                valaddress?: string | undefined;
                                balance?: string | undefined;
                              }[]
                            >]: never;
                          })
                      | undefined;
                  } & {
                    [K_5 in Exclude<
                      keyof I["unbondings"][number]["staker"],
                      keyof FullStaker
                    >]: never;
                  })
                | undefined;
            } & {
              [K_6 in Exclude<
                keyof I["unbondings"][number],
                keyof DelegationUnbonding
              >]: never;
            })[] & {
              [K_7 in Exclude<
                keyof I["unbondings"],
                keyof {
                  amount?: string | undefined;
                  creation_time?: string | undefined;
                  staker?:
                    | {
                        address?: string | undefined;
                        metadata?:
                          | {
                              commission?: string | undefined;
                              moniker?: string | undefined;
                              website?: string | undefined;
                              identity?: string | undefined;
                              security_contact?: string | undefined;
                              details?: string | undefined;
                              pending_commission_change?:
                                | {
                                    commission?: string | undefined;
                                    creation_date?: string | undefined;
                                  }
                                | undefined;
                              commission_rewards?: string | undefined;
                            }
                          | undefined;
                        self_delegation?: string | undefined;
                        self_delegation_unbonding?: string | undefined;
                        total_delegation?: string | undefined;
                        delegator_count?: string | undefined;
                        pools?:
                          | {
                              pool?:
                                | {
                                    id?: string | undefined;
                                    name?: string | undefined;
                                    runtime?: string | undefined;
                                    logo?: string | undefined;
                                    inflation_share_weight?: string | undefined;
                                    upload_interval?: string | undefined;
                                    total_funds?: string | undefined;
                                    total_delegation?: string | undefined;
                                    status?:
                                      | import("../../pool/v1beta1/pool").PoolStatus
                                      | undefined;
                                  }
                                | undefined;
                              points?: string | undefined;
                              is_leaving?: boolean | undefined;
                              valaddress?: string | undefined;
                              balance?: string | undefined;
                            }[]
                          | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_8 in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
    } & {
      [K_9 in Exclude<
        keyof I,
        keyof QueryAccountDelegationUnbondingsResponse
      >]: never;
    }
  >(
    base?: I | undefined
  ): QueryAccountDelegationUnbondingsResponse;
  fromPartial<
    I_1 extends {
      unbondings?:
        | {
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?:
              | {
                  address?: string | undefined;
                  metadata?:
                    | {
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        identity?: string | undefined;
                        security_contact?: string | undefined;
                        details?: string | undefined;
                        pending_commission_change?:
                          | {
                              commission?: string | undefined;
                              creation_date?: string | undefined;
                            }
                          | undefined;
                        commission_rewards?: string | undefined;
                      }
                    | undefined;
                  self_delegation?: string | undefined;
                  self_delegation_unbonding?: string | undefined;
                  total_delegation?: string | undefined;
                  delegator_count?: string | undefined;
                  pools?:
                    | {
                        pool?:
                          | {
                              id?: string | undefined;
                              name?: string | undefined;
                              runtime?: string | undefined;
                              logo?: string | undefined;
                              inflation_share_weight?: string | undefined;
                              upload_interval?: string | undefined;
                              total_funds?: string | undefined;
                              total_delegation?: string | undefined;
                              status?:
                                | import("../../pool/v1beta1/pool").PoolStatus
                                | undefined;
                            }
                          | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                        valaddress?: string | undefined;
                        balance?: string | undefined;
                      }[]
                    | undefined;
                }
              | undefined;
          }[]
        | undefined;
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
    } & {
      unbondings?:
        | ({
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?:
              | {
                  address?: string | undefined;
                  metadata?:
                    | {
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        identity?: string | undefined;
                        security_contact?: string | undefined;
                        details?: string | undefined;
                        pending_commission_change?:
                          | {
                              commission?: string | undefined;
                              creation_date?: string | undefined;
                            }
                          | undefined;
                        commission_rewards?: string | undefined;
                      }
                    | undefined;
                  self_delegation?: string | undefined;
                  self_delegation_unbonding?: string | undefined;
                  total_delegation?: string | undefined;
                  delegator_count?: string | undefined;
                  pools?:
                    | {
                        pool?:
                          | {
                              id?: string | undefined;
                              name?: string | undefined;
                              runtime?: string | undefined;
                              logo?: string | undefined;
                              inflation_share_weight?: string | undefined;
                              upload_interval?: string | undefined;
                              total_funds?: string | undefined;
                              total_delegation?: string | undefined;
                              status?:
                                | import("../../pool/v1beta1/pool").PoolStatus
                                | undefined;
                            }
                          | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                        valaddress?: string | undefined;
                        balance?: string | undefined;
                      }[]
                    | undefined;
                }
              | undefined;
          }[] &
            ({
              amount?: string | undefined;
              creation_time?: string | undefined;
              staker?:
                | {
                    address?: string | undefined;
                    metadata?:
                      | {
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              }
                            | undefined;
                          commission_rewards?: string | undefined;
                        }
                      | undefined;
                    self_delegation?: string | undefined;
                    self_delegation_unbonding?: string | undefined;
                    total_delegation?: string | undefined;
                    delegator_count?: string | undefined;
                    pools?:
                      | {
                          pool?:
                            | {
                                id?: string | undefined;
                                name?: string | undefined;
                                runtime?: string | undefined;
                                logo?: string | undefined;
                                inflation_share_weight?: string | undefined;
                                upload_interval?: string | undefined;
                                total_funds?: string | undefined;
                                total_delegation?: string | undefined;
                                status?:
                                  | import("../../pool/v1beta1/pool").PoolStatus
                                  | undefined;
                              }
                            | undefined;
                          points?: string | undefined;
                          is_leaving?: boolean | undefined;
                          valaddress?: string | undefined;
                          balance?: string | undefined;
                        }[]
                      | undefined;
                  }
                | undefined;
            } & {
              amount?: string | undefined;
              creation_time?: string | undefined;
              staker?:
                | ({
                    address?: string | undefined;
                    metadata?:
                      | {
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              }
                            | undefined;
                          commission_rewards?: string | undefined;
                        }
                      | undefined;
                    self_delegation?: string | undefined;
                    self_delegation_unbonding?: string | undefined;
                    total_delegation?: string | undefined;
                    delegator_count?: string | undefined;
                    pools?:
                      | {
                          pool?:
                            | {
                                id?: string | undefined;
                                name?: string | undefined;
                                runtime?: string | undefined;
                                logo?: string | undefined;
                                inflation_share_weight?: string | undefined;
                                upload_interval?: string | undefined;
                                total_funds?: string | undefined;
                                total_delegation?: string | undefined;
                                status?:
                                  | import("../../pool/v1beta1/pool").PoolStatus
                                  | undefined;
                              }
                            | undefined;
                          points?: string | undefined;
                          is_leaving?: boolean | undefined;
                          valaddress?: string | undefined;
                          balance?: string | undefined;
                        }[]
                      | undefined;
                  } & {
                    address?: string | undefined;
                    metadata?:
                      | ({
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              }
                            | undefined;
                          commission_rewards?: string | undefined;
                        } & {
                          commission?: string | undefined;
                          moniker?: string | undefined;
                          website?: string | undefined;
                          identity?: string | undefined;
                          security_contact?: string | undefined;
                          details?: string | undefined;
                          pending_commission_change?:
                            | ({
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              } & {
                                commission?: string | undefined;
                                creation_date?: string | undefined;
                              } & {
                                [K_10 in Exclude<
                                  keyof I_1["unbondings"][number]["staker"]["metadata"]["pending_commission_change"],
                                  keyof import("./query").CommissionChangeEntry
                                >]: never;
                              })
                            | undefined;
                          commission_rewards?: string | undefined;
                        } & {
                          [K_11 in Exclude<
                            keyof I_1["unbondings"][number]["staker"]["metadata"],
                            keyof import("./query").StakerMetadata
                          >]: never;
                        })
                      | undefined;
                    self_delegation?: string | undefined;
                    self_delegation_unbonding?: string | undefined;
                    total_delegation?: string | undefined;
                    delegator_count?: string | undefined;
                    pools?:
                      | ({
                          pool?:
                            | {
                                id?: string | undefined;
                                name?: string | undefined;
                                runtime?: string | undefined;
                                logo?: string | undefined;
                                inflation_share_weight?: string | undefined;
                                upload_interval?: string | undefined;
                                total_funds?: string | undefined;
                                total_delegation?: string | undefined;
                                status?:
                                  | import("../../pool/v1beta1/pool").PoolStatus
                                  | undefined;
                              }
                            | undefined;
                          points?: string | undefined;
                          is_leaving?: boolean | undefined;
                          valaddress?: string | undefined;
                          balance?: string | undefined;
                        }[] &
                          ({
                            pool?:
                              | {
                                  id?: string | undefined;
                                  name?: string | undefined;
                                  runtime?: string | undefined;
                                  logo?: string | undefined;
                                  inflation_share_weight?: string | undefined;
                                  upload_interval?: string | undefined;
                                  total_funds?: string | undefined;
                                  total_delegation?: string | undefined;
                                  status?:
                                    | import("../../pool/v1beta1/pool").PoolStatus
                                    | undefined;
                                }
                              | undefined;
                            points?: string | undefined;
                            is_leaving?: boolean | undefined;
                            valaddress?: string | undefined;
                            balance?: string | undefined;
                          } & {
                            pool?:
                              | ({
                                  id?: string | undefined;
                                  name?: string | undefined;
                                  runtime?: string | undefined;
                                  logo?: string | undefined;
                                  inflation_share_weight?: string | undefined;
                                  upload_interval?: string | undefined;
                                  total_funds?: string | undefined;
                                  total_delegation?: string | undefined;
                                  status?:
                                    | import("../../pool/v1beta1/pool").PoolStatus
                                    | undefined;
                                } & {
                                  id?: string | undefined;
                                  name?: string | undefined;
                                  runtime?: string | undefined;
                                  logo?: string | undefined;
                                  inflation_share_weight?: string | undefined;
                                  upload_interval?: string | undefined;
                                  total_funds?: string | undefined;
                                  total_delegation?: string | undefined;
                                  status?:
                                    | import("../../pool/v1beta1/pool").PoolStatus
                                    | undefined;
                                } & {
                                  [K_12 in Exclude<
                                    keyof I_1["unbondings"][number]["staker"]["pools"][number]["pool"],
                                    keyof BasicPool
                                  >]: never;
                                })
                              | undefined;
                            points?: string | undefined;
                            is_leaving?: boolean | undefined;
                            valaddress?: string | undefined;
                            balance?: string | undefined;
                          } & {
                            [K_13 in Exclude<
                              keyof I_1["unbondings"][number]["staker"]["pools"][number],
                              keyof import("./query").PoolMembership
                            >]: never;
                          })[] & {
                            [K_14 in Exclude<
                              keyof I_1["unbondings"][number]["staker"]["pools"],
                              keyof {
                                pool?:
                                  | {
                                      id?: string | undefined;
                                      name?: string | undefined;
                                      runtime?: string | undefined;
                                      logo?: string | undefined;
                                      inflation_share_weight?:
                                        | string
                                        | undefined;
                                      upload_interval?: string | undefined;
                                      total_funds?: string | undefined;
                                      total_delegation?: string | undefined;
                                      status?:
                                        | import("../../pool/v1beta1/pool").PoolStatus
                                        | undefined;
                                    }
                                  | undefined;
                                points?: string | undefined;
                                is_leaving?: boolean | undefined;
                                valaddress?: string | undefined;
                                balance?: string | undefined;
                              }[]
                            >]: never;
                          })
                      | undefined;
                  } & {
                    [K_15 in Exclude<
                      keyof I_1["unbondings"][number]["staker"],
                      keyof FullStaker
                    >]: never;
                  })
                | undefined;
            } & {
              [K_16 in Exclude<
                keyof I_1["unbondings"][number],
                keyof DelegationUnbonding
              >]: never;
            })[] & {
              [K_17 in Exclude<
                keyof I_1["unbondings"],
                keyof {
                  amount?: string | undefined;
                  creation_time?: string | undefined;
                  staker?:
                    | {
                        address?: string | undefined;
                        metadata?:
                          | {
                              commission?: string | undefined;
                              moniker?: string | undefined;
                              website?: string | undefined;
                              identity?: string | undefined;
                              security_contact?: string | undefined;
                              details?: string | undefined;
                              pending_commission_change?:
                                | {
                                    commission?: string | undefined;
                                    creation_date?: string | undefined;
                                  }
                                | undefined;
                              commission_rewards?: string | undefined;
                            }
                          | undefined;
                        self_delegation?: string | undefined;
                        self_delegation_unbonding?: string | undefined;
                        total_delegation?: string | undefined;
                        delegator_count?: string | undefined;
                        pools?:
                          | {
                              pool?:
                                | {
                                    id?: string | undefined;
                                    name?: string | undefined;
                                    runtime?: string | undefined;
                                    logo?: string | undefined;
                                    inflation_share_weight?: string | undefined;
                                    upload_interval?: string | undefined;
                                    total_funds?: string | undefined;
                                    total_delegation?: string | undefined;
                                    status?:
                                      | import("../../pool/v1beta1/pool").PoolStatus
                                      | undefined;
                                  }
                                | undefined;
                              points?: string | undefined;
                              is_leaving?: boolean | undefined;
                              valaddress?: string | undefined;
                              balance?: string | undefined;
                            }[]
                          | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_18 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
    } & {
      [K_19 in Exclude<
        keyof I_1,
        keyof QueryAccountDelegationUnbondingsResponse
      >]: never;
    }
  >(
    object: I_1
  ): QueryAccountDelegationUnbondingsResponse;
};
export declare const DelegationUnbonding: {
  encode(message: DelegationUnbonding, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationUnbonding;
  fromJSON(object: any): DelegationUnbonding;
  toJSON(message: DelegationUnbonding): unknown;
  create<
    I extends {
      amount?: string | undefined;
      creation_time?: string | undefined;
      staker?:
        | {
            address?: string | undefined;
            metadata?:
              | {
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      }
                    | undefined;
                  commission_rewards?: string | undefined;
                }
              | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?:
              | {
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[]
              | undefined;
          }
        | undefined;
    } & {
      amount?: string | undefined;
      creation_time?: string | undefined;
      staker?:
        | ({
            address?: string | undefined;
            metadata?:
              | {
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      }
                    | undefined;
                  commission_rewards?: string | undefined;
                }
              | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?:
              | {
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[]
              | undefined;
          } & {
            address?: string | undefined;
            metadata?:
              | ({
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      }
                    | undefined;
                  commission_rewards?: string | undefined;
                } & {
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | ({
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      } & {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      } & {
                        [K in Exclude<
                          keyof I["staker"]["metadata"]["pending_commission_change"],
                          keyof import("./query").CommissionChangeEntry
                        >]: never;
                      })
                    | undefined;
                  commission_rewards?: string | undefined;
                } & {
                  [K_1 in Exclude<
                    keyof I["staker"]["metadata"],
                    keyof import("./query").StakerMetadata
                  >]: never;
                })
              | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?:
              | ({
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[] &
                  ({
                    pool?:
                      | {
                          id?: string | undefined;
                          name?: string | undefined;
                          runtime?: string | undefined;
                          logo?: string | undefined;
                          inflation_share_weight?: string | undefined;
                          upload_interval?: string | undefined;
                          total_funds?: string | undefined;
                          total_delegation?: string | undefined;
                          status?:
                            | import("../../pool/v1beta1/pool").PoolStatus
                            | undefined;
                        }
                      | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                  } & {
                    pool?:
                      | ({
                          id?: string | undefined;
                          name?: string | undefined;
                          runtime?: string | undefined;
                          logo?: string | undefined;
                          inflation_share_weight?: string | undefined;
                          upload_interval?: string | undefined;
                          total_funds?: string | undefined;
                          total_delegation?: string | undefined;
                          status?:
                            | import("../../pool/v1beta1/pool").PoolStatus
                            | undefined;
                        } & {
                          id?: string | undefined;
                          name?: string | undefined;
                          runtime?: string | undefined;
                          logo?: string | undefined;
                          inflation_share_weight?: string | undefined;
                          upload_interval?: string | undefined;
                          total_funds?: string | undefined;
                          total_delegation?: string | undefined;
                          status?:
                            | import("../../pool/v1beta1/pool").PoolStatus
                            | undefined;
                        } & {
                          [K_2 in Exclude<
                            keyof I["staker"]["pools"][number]["pool"],
                            keyof BasicPool
                          >]: never;
                        })
                      | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                  } & {
                    [K_3 in Exclude<
                      keyof I["staker"]["pools"][number],
                      keyof import("./query").PoolMembership
                    >]: never;
                  })[] & {
                    [K_4 in Exclude<
                      keyof I["staker"]["pools"],
                      keyof {
                        pool?:
                          | {
                              id?: string | undefined;
                              name?: string | undefined;
                              runtime?: string | undefined;
                              logo?: string | undefined;
                              inflation_share_weight?: string | undefined;
                              upload_interval?: string | undefined;
                              total_funds?: string | undefined;
                              total_delegation?: string | undefined;
                              status?:
                                | import("../../pool/v1beta1/pool").PoolStatus
                                | undefined;
                            }
                          | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                        valaddress?: string | undefined;
                        balance?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
          } & { [K_5 in Exclude<keyof I["staker"], keyof FullStaker>]: never })
        | undefined;
    } & { [K_6 in Exclude<keyof I, keyof DelegationUnbonding>]: never }
  >(
    base?: I | undefined
  ): DelegationUnbonding;
  fromPartial<
    I_1 extends {
      amount?: string | undefined;
      creation_time?: string | undefined;
      staker?:
        | {
            address?: string | undefined;
            metadata?:
              | {
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      }
                    | undefined;
                  commission_rewards?: string | undefined;
                }
              | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?:
              | {
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[]
              | undefined;
          }
        | undefined;
    } & {
      amount?: string | undefined;
      creation_time?: string | undefined;
      staker?:
        | ({
            address?: string | undefined;
            metadata?:
              | {
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      }
                    | undefined;
                  commission_rewards?: string | undefined;
                }
              | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?:
              | {
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[]
              | undefined;
          } & {
            address?: string | undefined;
            metadata?:
              | ({
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      }
                    | undefined;
                  commission_rewards?: string | undefined;
                } & {
                  commission?: string | undefined;
                  moniker?: string | undefined;
                  website?: string | undefined;
                  identity?: string | undefined;
                  security_contact?: string | undefined;
                  details?: string | undefined;
                  pending_commission_change?:
                    | ({
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      } & {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                      } & {
                        [K_7 in Exclude<
                          keyof I_1["staker"]["metadata"]["pending_commission_change"],
                          keyof import("./query").CommissionChangeEntry
                        >]: never;
                      })
                    | undefined;
                  commission_rewards?: string | undefined;
                } & {
                  [K_8 in Exclude<
                    keyof I_1["staker"]["metadata"],
                    keyof import("./query").StakerMetadata
                  >]: never;
                })
              | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?:
              | ({
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[] &
                  ({
                    pool?:
                      | {
                          id?: string | undefined;
                          name?: string | undefined;
                          runtime?: string | undefined;
                          logo?: string | undefined;
                          inflation_share_weight?: string | undefined;
                          upload_interval?: string | undefined;
                          total_funds?: string | undefined;
                          total_delegation?: string | undefined;
                          status?:
                            | import("../../pool/v1beta1/pool").PoolStatus
                            | undefined;
                        }
                      | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                  } & {
                    pool?:
                      | ({
                          id?: string | undefined;
                          name?: string | undefined;
                          runtime?: string | undefined;
                          logo?: string | undefined;
                          inflation_share_weight?: string | undefined;
                          upload_interval?: string | undefined;
                          total_funds?: string | undefined;
                          total_delegation?: string | undefined;
                          status?:
                            | import("../../pool/v1beta1/pool").PoolStatus
                            | undefined;
                        } & {
                          id?: string | undefined;
                          name?: string | undefined;
                          runtime?: string | undefined;
                          logo?: string | undefined;
                          inflation_share_weight?: string | undefined;
                          upload_interval?: string | undefined;
                          total_funds?: string | undefined;
                          total_delegation?: string | undefined;
                          status?:
                            | import("../../pool/v1beta1/pool").PoolStatus
                            | undefined;
                        } & {
                          [K_9 in Exclude<
                            keyof I_1["staker"]["pools"][number]["pool"],
                            keyof BasicPool
                          >]: never;
                        })
                      | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                  } & {
                    [K_10 in Exclude<
                      keyof I_1["staker"]["pools"][number],
                      keyof import("./query").PoolMembership
                    >]: never;
                  })[] & {
                    [K_11 in Exclude<
                      keyof I_1["staker"]["pools"],
                      keyof {
                        pool?:
                          | {
                              id?: string | undefined;
                              name?: string | undefined;
                              runtime?: string | undefined;
                              logo?: string | undefined;
                              inflation_share_weight?: string | undefined;
                              upload_interval?: string | undefined;
                              total_funds?: string | undefined;
                              total_delegation?: string | undefined;
                              status?:
                                | import("../../pool/v1beta1/pool").PoolStatus
                                | undefined;
                            }
                          | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                        valaddress?: string | undefined;
                        balance?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
          } & {
            [K_12 in Exclude<keyof I_1["staker"], keyof FullStaker>]: never;
          })
        | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof DelegationUnbonding>]: never }
  >(
    object: I_1
  ): DelegationUnbonding;
};
export declare const QueryAccountFundedListRequest: {
  encode(
    message: QueryAccountFundedListRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountFundedListRequest;
  fromJSON(object: any): QueryAccountFundedListRequest;
  toJSON(message: QueryAccountFundedListRequest): unknown;
  create<
    I extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never }
  >(
    base?: I | undefined
  ): QueryAccountFundedListRequest;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never }
  >(
    object: I_1
  ): QueryAccountFundedListRequest;
};
export declare const QueryAccountFundedListResponse: {
  encode(
    message: QueryAccountFundedListResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountFundedListResponse;
  fromJSON(object: any): QueryAccountFundedListResponse;
  toJSON(message: QueryAccountFundedListResponse): unknown;
  create<
    I extends {
      funded?:
        | {
            amount?: string | undefined;
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?:
                    | import("../../pool/v1beta1/pool").PoolStatus
                    | undefined;
                }
              | undefined;
          }[]
        | undefined;
    } & {
      funded?:
        | ({
            amount?: string | undefined;
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?:
                    | import("../../pool/v1beta1/pool").PoolStatus
                    | undefined;
                }
              | undefined;
          }[] &
            ({
              amount?: string | undefined;
              pool?:
                | {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?:
                      | import("../../pool/v1beta1/pool").PoolStatus
                      | undefined;
                  }
                | undefined;
            } & {
              amount?: string | undefined;
              pool?:
                | ({
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?:
                      | import("../../pool/v1beta1/pool").PoolStatus
                      | undefined;
                  } & {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?:
                      | import("../../pool/v1beta1/pool").PoolStatus
                      | undefined;
                  } & {
                    [K in Exclude<
                      keyof I["funded"][number]["pool"],
                      keyof BasicPool
                    >]: never;
                  })
                | undefined;
            } & {
              [K_1 in Exclude<keyof I["funded"][number], keyof Funded>]: never;
            })[] & {
              [K_2 in Exclude<
                keyof I["funded"],
                keyof {
                  amount?: string | undefined;
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_3 in Exclude<keyof I, "funded">]: never }
  >(
    base?: I | undefined
  ): QueryAccountFundedListResponse;
  fromPartial<
    I_1 extends {
      funded?:
        | {
            amount?: string | undefined;
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?:
                    | import("../../pool/v1beta1/pool").PoolStatus
                    | undefined;
                }
              | undefined;
          }[]
        | undefined;
    } & {
      funded?:
        | ({
            amount?: string | undefined;
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?:
                    | import("../../pool/v1beta1/pool").PoolStatus
                    | undefined;
                }
              | undefined;
          }[] &
            ({
              amount?: string | undefined;
              pool?:
                | {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?:
                      | import("../../pool/v1beta1/pool").PoolStatus
                      | undefined;
                  }
                | undefined;
            } & {
              amount?: string | undefined;
              pool?:
                | ({
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?:
                      | import("../../pool/v1beta1/pool").PoolStatus
                      | undefined;
                  } & {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?:
                      | import("../../pool/v1beta1/pool").PoolStatus
                      | undefined;
                  } & {
                    [K_4 in Exclude<
                      keyof I_1["funded"][number]["pool"],
                      keyof BasicPool
                    >]: never;
                  })
                | undefined;
            } & {
              [K_5 in Exclude<
                keyof I_1["funded"][number],
                keyof Funded
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I_1["funded"],
                keyof {
                  amount?: string | undefined;
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?:
                          | import("../../pool/v1beta1/pool").PoolStatus
                          | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_7 in Exclude<keyof I_1, "funded">]: never }
  >(
    object: I_1
  ): QueryAccountFundedListResponse;
};
export declare const Funded: {
  encode(message: Funded, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Funded;
  fromJSON(object: any): Funded;
  toJSON(message: Funded): unknown;
  create<
    I extends {
      amount?: string | undefined;
      pool?:
        | {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
          }
        | undefined;
    } & {
      amount?: string | undefined;
      pool?:
        | ({
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
          } & {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
          } & { [K in Exclude<keyof I["pool"], keyof BasicPool>]: never })
        | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Funded>]: never }
  >(
    base?: I | undefined
  ): Funded;
  fromPartial<
    I_1 extends {
      amount?: string | undefined;
      pool?:
        | {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
          }
        | undefined;
    } & {
      amount?: string | undefined;
      pool?:
        | ({
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
          } & {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
          } & { [K_2 in Exclude<keyof I_1["pool"], keyof BasicPool>]: never })
        | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Funded>]: never }
  >(
    object: I_1
  ): Funded;
};
export declare const QueryAccountRedelegationRequest: {
  encode(
    message: QueryAccountRedelegationRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountRedelegationRequest;
  fromJSON(object: any): QueryAccountRedelegationRequest;
  toJSON(message: QueryAccountRedelegationRequest): unknown;
  create<
    I extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never }
  >(
    base?: I | undefined
  ): QueryAccountRedelegationRequest;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never }
  >(
    object: I_1
  ): QueryAccountRedelegationRequest;
};
export declare const QueryAccountRedelegationResponse: {
  encode(
    message: QueryAccountRedelegationResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountRedelegationResponse;
  fromJSON(object: any): QueryAccountRedelegationResponse;
  toJSON(message: QueryAccountRedelegationResponse): unknown;
  create<
    I extends {
      redelegation_cooldown_entries?:
        | {
            creation_date?: string | undefined;
            finish_date?: string | undefined;
          }[]
        | undefined;
      available_slots?: string | undefined;
    } & {
      redelegation_cooldown_entries?:
        | ({
            creation_date?: string | undefined;
            finish_date?: string | undefined;
          }[] &
            ({
              creation_date?: string | undefined;
              finish_date?: string | undefined;
            } & {
              creation_date?: string | undefined;
              finish_date?: string | undefined;
            } & {
              [K in Exclude<
                keyof I["redelegation_cooldown_entries"][number],
                keyof RedelegationEntry
              >]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["redelegation_cooldown_entries"],
                keyof {
                  creation_date?: string | undefined;
                  finish_date?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      available_slots?: string | undefined;
    } & {
      [K_2 in Exclude<keyof I, keyof QueryAccountRedelegationResponse>]: never;
    }
  >(
    base?: I | undefined
  ): QueryAccountRedelegationResponse;
  fromPartial<
    I_1 extends {
      redelegation_cooldown_entries?:
        | {
            creation_date?: string | undefined;
            finish_date?: string | undefined;
          }[]
        | undefined;
      available_slots?: string | undefined;
    } & {
      redelegation_cooldown_entries?:
        | ({
            creation_date?: string | undefined;
            finish_date?: string | undefined;
          }[] &
            ({
              creation_date?: string | undefined;
              finish_date?: string | undefined;
            } & {
              creation_date?: string | undefined;
              finish_date?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I_1["redelegation_cooldown_entries"][number],
                keyof RedelegationEntry
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I_1["redelegation_cooldown_entries"],
                keyof {
                  creation_date?: string | undefined;
                  finish_date?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      available_slots?: string | undefined;
    } & {
      [K_5 in Exclude<
        keyof I_1,
        keyof QueryAccountRedelegationResponse
      >]: never;
    }
  >(
    object: I_1
  ): QueryAccountRedelegationResponse;
};
export declare const RedelegationEntry: {
  encode(message: RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry;
  fromJSON(object: any): RedelegationEntry;
  toJSON(message: RedelegationEntry): unknown;
  create<
    I extends {
      creation_date?: string | undefined;
      finish_date?: string | undefined;
    } & {
      creation_date?: string | undefined;
      finish_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RedelegationEntry>]: never }
  >(
    base?: I | undefined
  ): RedelegationEntry;
  fromPartial<
    I_1 extends {
      creation_date?: string | undefined;
      finish_date?: string | undefined;
    } & {
      creation_date?: string | undefined;
      finish_date?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RedelegationEntry>]: never }
  >(
    object: I_1
  ): RedelegationEntry;
};
/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryAccount {
  /** AccountAssets returns an overview of the sum of all balances for a given user. e.g. balance, staking, funding, etc. */
  AccountAssets(
    request: QueryAccountAssetsRequest
  ): Promise<QueryAccountAssetsResponse>;
  /** AccountDelegationUnbondings ... */
  AccountDelegationUnbondings(
    request: QueryAccountDelegationUnbondingsRequest
  ): Promise<QueryAccountDelegationUnbondingsResponse>;
  /** AccountFundedList returns all pools the given user has funded into. */
  AccountFundedList(
    request: QueryAccountFundedListRequest
  ): Promise<QueryAccountFundedListResponse>;
  /** AccountRedelegation ... */
  AccountRedelegation(
    request: QueryAccountRedelegationRequest
  ): Promise<QueryAccountRedelegationResponse>;
}
export declare const QueryAccountServiceName =
  "kyve.query.v1beta1.QueryAccount";
export declare class QueryAccountClientImpl implements QueryAccount {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  AccountAssets(
    request: QueryAccountAssetsRequest
  ): Promise<QueryAccountAssetsResponse>;
  AccountDelegationUnbondings(
    request: QueryAccountDelegationUnbondingsRequest
  ): Promise<QueryAccountDelegationUnbondingsResponse>;
  AccountFundedList(
    request: QueryAccountFundedListRequest
  ): Promise<QueryAccountFundedListResponse>;
  AccountRedelegation(
    request: QueryAccountRedelegationRequest
  ): Promise<QueryAccountRedelegationResponse>;
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
