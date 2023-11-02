import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Valaccount } from "../../stakers/v1beta1/stakers";
import { FullStaker } from "./query";
export declare const protobufPackage = "kyve.query.v1beta1";
/** StakerStatus ... */
export declare enum StakerStatus {
  /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
  STAKER_STATUS_UNSPECIFIED = 0,
  /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
  STAKER_STATUS_ACTIVE = 1,
  /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
  STAKER_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export declare function stakerStatusFromJSON(object: any): StakerStatus;
export declare function stakerStatusToJSON(object: StakerStatus): string;
/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  /** status looks whether a staker is participating in pools or not */
  status: StakerStatus;
  /** search searches for moniker OR address */
  search: string;
}
/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponse {
  /** stakers ... */
  stakers: FullStaker[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
  /** address ... */
  address: string;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
  /** staker ... */
  staker?: FullStaker | undefined;
}
/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequest {
  /** pool_id ... */
  pool_id: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponse {
  /** stakers ... */
  stakers: StakerPoolResponse[];
}
/** StakerPoolResponse ... */
export interface StakerPoolResponse {
  /** staker ... */
  staker?: FullStaker | undefined;
  /** valaccount ... */
  valaccount?: Valaccount | undefined;
}
/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponse {
  /** stakers ... */
  stakers: FullStaker[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export declare const QueryStakersRequest: {
  encode(message: QueryStakersRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersRequest;
  fromJSON(object: any): QueryStakersRequest;
  toJSON(message: QueryStakersRequest): unknown;
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
      status?: StakerStatus | undefined;
      search?: string | undefined;
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
      status?: StakerStatus | undefined;
      search?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryStakersRequest>]: never }
  >(
    base?: I | undefined
  ): QueryStakersRequest;
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
      status?: StakerStatus | undefined;
      search?: string | undefined;
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
      status?: StakerStatus | undefined;
      search?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryStakersRequest>]: never }
  >(
    object: I_1
  ): QueryStakersRequest;
};
export declare const QueryStakersResponse: {
  encode(message: QueryStakersResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersResponse;
  fromJSON(object: any): QueryStakersResponse;
  toJSON(message: QueryStakersResponse): unknown;
  create<
    I extends {
      stakers?:
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
          }[]
        | undefined;
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
    } & {
      stakers?:
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
          }[] &
            ({
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
                            keyof I["stakers"][number]["metadata"]["pending_commission_change"],
                            keyof import("./query").CommissionChangeEntry
                          >]: never;
                        })
                      | undefined;
                    commission_rewards?: string | undefined;
                  } & {
                    [K_1 in Exclude<
                      keyof I["stakers"][number]["metadata"],
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
                              keyof I["stakers"][number]["pools"][number]["pool"],
                              keyof import("./query").BasicPool
                            >]: never;
                          })
                        | undefined;
                      points?: string | undefined;
                      is_leaving?: boolean | undefined;
                      valaddress?: string | undefined;
                      balance?: string | undefined;
                    } & {
                      [K_3 in Exclude<
                        keyof I["stakers"][number]["pools"][number],
                        keyof import("./query").PoolMembership
                      >]: never;
                    })[] & {
                      [K_4 in Exclude<
                        keyof I["stakers"][number]["pools"],
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
              [K_5 in Exclude<
                keyof I["stakers"][number],
                keyof FullStaker
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I["stakers"],
                keyof {
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
            [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
    } & { [K_8 in Exclude<keyof I, keyof QueryStakersResponse>]: never }
  >(
    base?: I | undefined
  ): QueryStakersResponse;
  fromPartial<
    I_1 extends {
      stakers?:
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
          }[]
        | undefined;
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
    } & {
      stakers?:
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
          }[] &
            ({
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
                          [K_9 in Exclude<
                            keyof I_1["stakers"][number]["metadata"]["pending_commission_change"],
                            keyof import("./query").CommissionChangeEntry
                          >]: never;
                        })
                      | undefined;
                    commission_rewards?: string | undefined;
                  } & {
                    [K_10 in Exclude<
                      keyof I_1["stakers"][number]["metadata"],
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
                            [K_11 in Exclude<
                              keyof I_1["stakers"][number]["pools"][number]["pool"],
                              keyof import("./query").BasicPool
                            >]: never;
                          })
                        | undefined;
                      points?: string | undefined;
                      is_leaving?: boolean | undefined;
                      valaddress?: string | undefined;
                      balance?: string | undefined;
                    } & {
                      [K_12 in Exclude<
                        keyof I_1["stakers"][number]["pools"][number],
                        keyof import("./query").PoolMembership
                      >]: never;
                    })[] & {
                      [K_13 in Exclude<
                        keyof I_1["stakers"][number]["pools"],
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
              [K_14 in Exclude<
                keyof I_1["stakers"][number],
                keyof FullStaker
              >]: never;
            })[] & {
              [K_15 in Exclude<
                keyof I_1["stakers"],
                keyof {
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
            [K_16 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof QueryStakersResponse>]: never }
  >(
    object: I_1
  ): QueryStakersResponse;
};
export declare const QueryStakerRequest: {
  encode(message: QueryStakerRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerRequest;
  fromJSON(object: any): QueryStakerRequest;
  toJSON(message: QueryStakerRequest): unknown;
  create<
    I extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never }
  >(
    base?: I | undefined
  ): QueryStakerRequest;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
    } & {
      address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never }
  >(
    object: I_1
  ): QueryStakerRequest;
};
export declare const QueryStakerResponse: {
  encode(message: QueryStakerResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerResponse;
  fromJSON(object: any): QueryStakerResponse;
  toJSON(message: QueryStakerResponse): unknown;
  create<
    I extends {
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
                            keyof import("./query").BasicPool
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
    } & { [K_6 in Exclude<keyof I, "staker">]: never }
  >(
    base?: I | undefined
  ): QueryStakerResponse;
  fromPartial<
    I_1 extends {
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
                            keyof import("./query").BasicPool
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
    } & { [K_13 in Exclude<keyof I_1, "staker">]: never }
  >(
    object: I_1
  ): QueryStakerResponse;
};
export declare const QueryStakersByPoolRequest: {
  encode(message: QueryStakersByPoolRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersByPoolRequest;
  fromJSON(object: any): QueryStakersByPoolRequest;
  toJSON(message: QueryStakersByPoolRequest): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, "pool_id">]: never }
  >(
    base?: I | undefined
  ): QueryStakersByPoolRequest;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "pool_id">]: never }
  >(
    object: I_1
  ): QueryStakersByPoolRequest;
};
export declare const QueryStakersByPoolResponse: {
  encode(message: QueryStakersByPoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersByPoolResponse;
  fromJSON(object: any): QueryStakersByPoolResponse;
  toJSON(message: QueryStakersByPoolResponse): unknown;
  create<
    I extends {
      stakers?:
        | {
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
            valaccount?:
              | {
                  pool_id?: string | undefined;
                  staker?: string | undefined;
                  valaddress?: string | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                }
              | undefined;
          }[]
        | undefined;
    } & {
      stakers?:
        | ({
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
            valaccount?:
              | {
                  pool_id?: string | undefined;
                  staker?: string | undefined;
                  valaddress?: string | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                }
              | undefined;
          }[] &
            ({
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
              valaccount?:
                | {
                    pool_id?: string | undefined;
                    staker?: string | undefined;
                    valaddress?: string | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                  }
                | undefined;
            } & {
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
                                  keyof I["stakers"][number]["staker"]["metadata"]["pending_commission_change"],
                                  keyof import("./query").CommissionChangeEntry
                                >]: never;
                              })
                            | undefined;
                          commission_rewards?: string | undefined;
                        } & {
                          [K_1 in Exclude<
                            keyof I["stakers"][number]["staker"]["metadata"],
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
                                    keyof I["stakers"][number]["staker"]["pools"][number]["pool"],
                                    keyof import("./query").BasicPool
                                  >]: never;
                                })
                              | undefined;
                            points?: string | undefined;
                            is_leaving?: boolean | undefined;
                            valaddress?: string | undefined;
                            balance?: string | undefined;
                          } & {
                            [K_3 in Exclude<
                              keyof I["stakers"][number]["staker"]["pools"][number],
                              keyof import("./query").PoolMembership
                            >]: never;
                          })[] & {
                            [K_4 in Exclude<
                              keyof I["stakers"][number]["staker"]["pools"],
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
                      keyof I["stakers"][number]["staker"],
                      keyof FullStaker
                    >]: never;
                  })
                | undefined;
              valaccount?:
                | ({
                    pool_id?: string | undefined;
                    staker?: string | undefined;
                    valaddress?: string | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                  } & {
                    pool_id?: string | undefined;
                    staker?: string | undefined;
                    valaddress?: string | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                  } & {
                    [K_6 in Exclude<
                      keyof I["stakers"][number]["valaccount"],
                      keyof Valaccount
                    >]: never;
                  })
                | undefined;
            } & {
              [K_7 in Exclude<
                keyof I["stakers"][number],
                keyof StakerPoolResponse
              >]: never;
            })[] & {
              [K_8 in Exclude<
                keyof I["stakers"],
                keyof {
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
                  valaccount?:
                    | {
                        pool_id?: string | undefined;
                        staker?: string | undefined;
                        valaddress?: string | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_9 in Exclude<keyof I, "stakers">]: never }
  >(
    base?: I | undefined
  ): QueryStakersByPoolResponse;
  fromPartial<
    I_1 extends {
      stakers?:
        | {
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
            valaccount?:
              | {
                  pool_id?: string | undefined;
                  staker?: string | undefined;
                  valaddress?: string | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                }
              | undefined;
          }[]
        | undefined;
    } & {
      stakers?:
        | ({
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
            valaccount?:
              | {
                  pool_id?: string | undefined;
                  staker?: string | undefined;
                  valaddress?: string | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                }
              | undefined;
          }[] &
            ({
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
              valaccount?:
                | {
                    pool_id?: string | undefined;
                    staker?: string | undefined;
                    valaddress?: string | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                  }
                | undefined;
            } & {
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
                                  keyof I_1["stakers"][number]["staker"]["metadata"]["pending_commission_change"],
                                  keyof import("./query").CommissionChangeEntry
                                >]: never;
                              })
                            | undefined;
                          commission_rewards?: string | undefined;
                        } & {
                          [K_11 in Exclude<
                            keyof I_1["stakers"][number]["staker"]["metadata"],
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
                                    keyof I_1["stakers"][number]["staker"]["pools"][number]["pool"],
                                    keyof import("./query").BasicPool
                                  >]: never;
                                })
                              | undefined;
                            points?: string | undefined;
                            is_leaving?: boolean | undefined;
                            valaddress?: string | undefined;
                            balance?: string | undefined;
                          } & {
                            [K_13 in Exclude<
                              keyof I_1["stakers"][number]["staker"]["pools"][number],
                              keyof import("./query").PoolMembership
                            >]: never;
                          })[] & {
                            [K_14 in Exclude<
                              keyof I_1["stakers"][number]["staker"]["pools"],
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
                      keyof I_1["stakers"][number]["staker"],
                      keyof FullStaker
                    >]: never;
                  })
                | undefined;
              valaccount?:
                | ({
                    pool_id?: string | undefined;
                    staker?: string | undefined;
                    valaddress?: string | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                  } & {
                    pool_id?: string | undefined;
                    staker?: string | undefined;
                    valaddress?: string | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                  } & {
                    [K_16 in Exclude<
                      keyof I_1["stakers"][number]["valaccount"],
                      keyof Valaccount
                    >]: never;
                  })
                | undefined;
            } & {
              [K_17 in Exclude<
                keyof I_1["stakers"][number],
                keyof StakerPoolResponse
              >]: never;
            })[] & {
              [K_18 in Exclude<
                keyof I_1["stakers"],
                keyof {
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
                  valaccount?:
                    | {
                        pool_id?: string | undefined;
                        staker?: string | undefined;
                        valaddress?: string | undefined;
                        points?: string | undefined;
                        is_leaving?: boolean | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_19 in Exclude<keyof I_1, "stakers">]: never }
  >(
    object: I_1
  ): QueryStakersByPoolResponse;
};
export declare const StakerPoolResponse: {
  encode(message: StakerPoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): StakerPoolResponse;
  fromJSON(object: any): StakerPoolResponse;
  toJSON(message: StakerPoolResponse): unknown;
  create<
    I extends {
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
      valaccount?:
        | {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
          }
        | undefined;
    } & {
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
                            keyof import("./query").BasicPool
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
      valaccount?:
        | ({
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
          } & {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
          } & {
            [K_6 in Exclude<keyof I["valaccount"], keyof Valaccount>]: never;
          })
        | undefined;
    } & { [K_7 in Exclude<keyof I, keyof StakerPoolResponse>]: never }
  >(
    base?: I | undefined
  ): StakerPoolResponse;
  fromPartial<
    I_1 extends {
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
      valaccount?:
        | {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
          }
        | undefined;
    } & {
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
                        [K_8 in Exclude<
                          keyof I_1["staker"]["metadata"]["pending_commission_change"],
                          keyof import("./query").CommissionChangeEntry
                        >]: never;
                      })
                    | undefined;
                  commission_rewards?: string | undefined;
                } & {
                  [K_9 in Exclude<
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
                          [K_10 in Exclude<
                            keyof I_1["staker"]["pools"][number]["pool"],
                            keyof import("./query").BasicPool
                          >]: never;
                        })
                      | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                  } & {
                    [K_11 in Exclude<
                      keyof I_1["staker"]["pools"][number],
                      keyof import("./query").PoolMembership
                    >]: never;
                  })[] & {
                    [K_12 in Exclude<
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
            [K_13 in Exclude<keyof I_1["staker"], keyof FullStaker>]: never;
          })
        | undefined;
      valaccount?:
        | ({
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
          } & {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
          } & {
            [K_14 in Exclude<keyof I_1["valaccount"], keyof Valaccount>]: never;
          })
        | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof StakerPoolResponse>]: never }
  >(
    object: I_1
  ): StakerPoolResponse;
};
export declare const QueryStakersByPoolCountRequest: {
  encode(
    message: QueryStakersByPoolCountRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersByPoolCountRequest;
  fromJSON(object: any): QueryStakersByPoolCountRequest;
  toJSON(message: QueryStakersByPoolCountRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never }
  >(
    base?: I | undefined
  ): QueryStakersByPoolCountRequest;
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
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never }
  >(
    object: I_1
  ): QueryStakersByPoolCountRequest;
};
export declare const QueryStakersByPoolCountResponse: {
  encode(
    message: QueryStakersByPoolCountResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersByPoolCountResponse;
  fromJSON(object: any): QueryStakersByPoolCountResponse;
  toJSON(message: QueryStakersByPoolCountResponse): unknown;
  create<
    I extends {
      stakers?:
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
          }[]
        | undefined;
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
    } & {
      stakers?:
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
          }[] &
            ({
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
                            keyof I["stakers"][number]["metadata"]["pending_commission_change"],
                            keyof import("./query").CommissionChangeEntry
                          >]: never;
                        })
                      | undefined;
                    commission_rewards?: string | undefined;
                  } & {
                    [K_1 in Exclude<
                      keyof I["stakers"][number]["metadata"],
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
                              keyof I["stakers"][number]["pools"][number]["pool"],
                              keyof import("./query").BasicPool
                            >]: never;
                          })
                        | undefined;
                      points?: string | undefined;
                      is_leaving?: boolean | undefined;
                      valaddress?: string | undefined;
                      balance?: string | undefined;
                    } & {
                      [K_3 in Exclude<
                        keyof I["stakers"][number]["pools"][number],
                        keyof import("./query").PoolMembership
                      >]: never;
                    })[] & {
                      [K_4 in Exclude<
                        keyof I["stakers"][number]["pools"],
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
              [K_5 in Exclude<
                keyof I["stakers"][number],
                keyof FullStaker
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I["stakers"],
                keyof {
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
            [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
    } & {
      [K_8 in Exclude<keyof I, keyof QueryStakersByPoolCountResponse>]: never;
    }
  >(
    base?: I | undefined
  ): QueryStakersByPoolCountResponse;
  fromPartial<
    I_1 extends {
      stakers?:
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
          }[]
        | undefined;
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
    } & {
      stakers?:
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
          }[] &
            ({
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
                          [K_9 in Exclude<
                            keyof I_1["stakers"][number]["metadata"]["pending_commission_change"],
                            keyof import("./query").CommissionChangeEntry
                          >]: never;
                        })
                      | undefined;
                    commission_rewards?: string | undefined;
                  } & {
                    [K_10 in Exclude<
                      keyof I_1["stakers"][number]["metadata"],
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
                            [K_11 in Exclude<
                              keyof I_1["stakers"][number]["pools"][number]["pool"],
                              keyof import("./query").BasicPool
                            >]: never;
                          })
                        | undefined;
                      points?: string | undefined;
                      is_leaving?: boolean | undefined;
                      valaddress?: string | undefined;
                      balance?: string | undefined;
                    } & {
                      [K_12 in Exclude<
                        keyof I_1["stakers"][number]["pools"][number],
                        keyof import("./query").PoolMembership
                      >]: never;
                    })[] & {
                      [K_13 in Exclude<
                        keyof I_1["stakers"][number]["pools"],
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
              [K_14 in Exclude<
                keyof I_1["stakers"][number],
                keyof FullStaker
              >]: never;
            })[] & {
              [K_15 in Exclude<
                keyof I_1["stakers"],
                keyof {
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
            [K_16 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
    } & {
      [K_17 in Exclude<
        keyof I_1,
        keyof QueryStakersByPoolCountResponse
      >]: never;
    }
  >(
    object: I_1
  ): QueryStakersByPoolCountResponse;
};
/** QueryStakers ... */
export interface QueryStakers {
  /** Stakers queries for all stakers. */
  Stakers(request: QueryStakersRequest): Promise<QueryStakersResponse>;
  /** Staker queries for all stakers. */
  Staker(request: QueryStakerRequest): Promise<QueryStakerResponse>;
  /** StakersByPool queries for all stakers that are currently participating in the given pool */
  StakersByPool(
    request: QueryStakersByPoolRequest
  ): Promise<QueryStakersByPoolResponse>;
  /**
   * StakersByPool queries for all stakers and sorted them first by number of pools participating and
   * then by delegation
   */
  StakersByPoolCount(
    request: QueryStakersByPoolCountRequest
  ): Promise<QueryStakersByPoolCountResponse>;
}
export declare const QueryStakersServiceName =
  "kyve.query.v1beta1.QueryStakers";
export declare class QueryStakersClientImpl implements QueryStakers {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  Stakers(request: QueryStakersRequest): Promise<QueryStakersResponse>;
  Staker(request: QueryStakerRequest): Promise<QueryStakerResponse>;
  StakersByPool(
    request: QueryStakersByPoolRequest
  ): Promise<QueryStakersByPoolResponse>;
  StakersByPoolCount(
    request: QueryStakersByPoolCountRequest
  ): Promise<QueryStakersByPoolCountResponse>;
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
