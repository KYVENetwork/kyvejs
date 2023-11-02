import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "kyve.query.v1beta1";
/** FundingStatus ... */
export declare enum FundingStatus {
  /** FUNDING_STATUS_UNSPECIFIED - FundingStatusUnspecified ... */
  FUNDING_STATUS_UNSPECIFIED = "FUNDING_STATUS_UNSPECIFIED",
  /** FUNDING_STATUS_ACTIVE - FundingStatusActive status is set when the funding is active. */
  FUNDING_STATUS_ACTIVE = "FUNDING_STATUS_ACTIVE",
  /** FUNDING_STATUS_INACTIVE - FundingStatusInactive status is set when the funding has been used up or refunded. */
  FUNDING_STATUS_INACTIVE = "FUNDING_STATUS_INACTIVE",
  UNRECOGNIZED = "UNRECOGNIZED",
}
export declare function fundingStatusFromJSON(object: any): FundingStatus;
export declare function fundingStatusToJSON(object: FundingStatus): string;
export declare function fundingStatusToNumber(object: FundingStatus): number;
/** Funder ... */
export interface Funder {
  /** address ... */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description ... */
  description: string;
  /** statistics about all the fundings of the funder. */
  stats?: FundingStats | undefined;
}
/** FundingStats ... */
export interface FundingStats {
  /** total_used_funds are the total funds that have been distributed by the funder. */
  total_used_funds: string;
  /** total_allocated_funds are the total funds that have been allocated by the funder. They can either get distributed or refunded. */
  total_allocated_funds: string;
  /** total_amount_per_bundle is the total amount per bundle of all fundings of the funder. */
  total_amount_per_bundle: string;
  /** pools_funded are the ids of the pools that have been funded by the funder. */
  pools_funded: string[];
}
/** Funding ... */
export interface Funding {
  /** funder_address */
  funder_address: string;
  /** pool_id ... */
  pool_id: string;
  /** amount ... */
  amount: string;
  /** amount_per_bundle ... */
  amount_per_bundle: string;
  /** total_funded ... */
  total_funded: string;
}
/** QueryFundersRequest is the request type for the Query/Funders RPC method. */
export interface QueryFundersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  /** search ... */
  search: string;
}
/** QueryFundersResponse is the response type for the Query/Funders RPC method. */
export interface QueryFundersResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
  /** funders ... */
  funders: Funder[];
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
  /** address ... */
  address: string;
  /** status ... */
  status: FundingStatus;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponse {
  /** funder ... */
  funder?: Funder | undefined;
  /** fundings ... */
  fundings: Funding[];
}
/** QueryFundingsByFunderRequest is the request type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  /** address ... */
  address: string;
  /** status ... */
  status: FundingStatus;
}
/** QueryFundingsByFunderResponse is the response type for the Query/FundingsByFunder RPC method. */
export interface QueryFundingsByFunderResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
  /** fundings ... */
  fundings: Funding[];
}
/** QueryFundingsByPoolRequest is the request type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  /** pool_id ... */
  pool_id: string;
  /** status ... */
  status: FundingStatus;
}
/** QueryFundingsByPoolResponse is the response type for the Query/FundingsByPool RPC method. */
export interface QueryFundingsByPoolResponse {
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
  /** fundings ... */
  fundings: Funding[];
}
export declare const Funder: {
  encode(message: Funder, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Funder;
  fromJSON(object: any): Funder;
  toJSON(message: Funder): unknown;
  create<
    I extends {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
      stats?:
        | {
            total_used_funds?: string | undefined;
            total_allocated_funds?: string | undefined;
            total_amount_per_bundle?: string | undefined;
            pools_funded?: string[] | undefined;
          }
        | undefined;
    } & {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
      stats?:
        | ({
            total_used_funds?: string | undefined;
            total_allocated_funds?: string | undefined;
            total_amount_per_bundle?: string | undefined;
            pools_funded?: string[] | undefined;
          } & {
            total_used_funds?: string | undefined;
            total_allocated_funds?: string | undefined;
            total_amount_per_bundle?: string | undefined;
            pools_funded?:
              | (string[] &
                  string[] & {
                    [K in Exclude<
                      keyof I["stats"]["pools_funded"],
                      keyof string[]
                    >]: never;
                  })
              | undefined;
          } & { [K_1 in Exclude<keyof I["stats"], keyof FundingStats>]: never })
        | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Funder>]: never }
  >(
    base?: I | undefined
  ): Funder;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
      stats?:
        | {
            total_used_funds?: string | undefined;
            total_allocated_funds?: string | undefined;
            total_amount_per_bundle?: string | undefined;
            pools_funded?: string[] | undefined;
          }
        | undefined;
    } & {
      address?: string | undefined;
      moniker?: string | undefined;
      identity?: string | undefined;
      website?: string | undefined;
      contact?: string | undefined;
      description?: string | undefined;
      stats?:
        | ({
            total_used_funds?: string | undefined;
            total_allocated_funds?: string | undefined;
            total_amount_per_bundle?: string | undefined;
            pools_funded?: string[] | undefined;
          } & {
            total_used_funds?: string | undefined;
            total_allocated_funds?: string | undefined;
            total_amount_per_bundle?: string | undefined;
            pools_funded?:
              | (string[] &
                  string[] & {
                    [K_3 in Exclude<
                      keyof I_1["stats"]["pools_funded"],
                      keyof string[]
                    >]: never;
                  })
              | undefined;
          } & {
            [K_4 in Exclude<keyof I_1["stats"], keyof FundingStats>]: never;
          })
        | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Funder>]: never }
  >(
    object: I_1
  ): Funder;
};
export declare const FundingStats: {
  encode(message: FundingStats, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): FundingStats;
  fromJSON(object: any): FundingStats;
  toJSON(message: FundingStats): unknown;
  create<
    I extends {
      total_used_funds?: string | undefined;
      total_allocated_funds?: string | undefined;
      total_amount_per_bundle?: string | undefined;
      pools_funded?: string[] | undefined;
    } & {
      total_used_funds?: string | undefined;
      total_allocated_funds?: string | undefined;
      total_amount_per_bundle?: string | undefined;
      pools_funded?:
        | (string[] &
            string[] & {
              [K in Exclude<keyof I["pools_funded"], keyof string[]>]: never;
            })
        | undefined;
    } & { [K_1 in Exclude<keyof I, keyof FundingStats>]: never }
  >(
    base?: I | undefined
  ): FundingStats;
  fromPartial<
    I_1 extends {
      total_used_funds?: string | undefined;
      total_allocated_funds?: string | undefined;
      total_amount_per_bundle?: string | undefined;
      pools_funded?: string[] | undefined;
    } & {
      total_used_funds?: string | undefined;
      total_allocated_funds?: string | undefined;
      total_amount_per_bundle?: string | undefined;
      pools_funded?:
        | (string[] &
            string[] & {
              [K_2 in Exclude<
                keyof I_1["pools_funded"],
                keyof string[]
              >]: never;
            })
        | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof FundingStats>]: never }
  >(
    object: I_1
  ): FundingStats;
};
export declare const Funding: {
  encode(message: Funding, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Funding;
  fromJSON(object: any): Funding;
  toJSON(message: Funding): unknown;
  create<
    I extends {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Funding>]: never }
  >(
    base?: I | undefined
  ): Funding;
  fromPartial<
    I_1 extends {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & {
      funder_address?: string | undefined;
      pool_id?: string | undefined;
      amount?: string | undefined;
      amount_per_bundle?: string | undefined;
      total_funded?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Funding>]: never }
  >(
    object: I_1
  ): Funding;
};
export declare const QueryFundersRequest: {
  encode(message: QueryFundersRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersRequest;
  fromJSON(object: any): QueryFundersRequest;
  toJSON(message: QueryFundersRequest): unknown;
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
      search?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryFundersRequest>]: never }
  >(
    base?: I | undefined
  ): QueryFundersRequest;
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
      search?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryFundersRequest>]: never }
  >(
    object: I_1
  ): QueryFundersRequest;
};
export declare const QueryFundersResponse: {
  encode(message: QueryFundersResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersResponse;
  fromJSON(object: any): QueryFundersResponse;
  toJSON(message: QueryFundersResponse): unknown;
  create<
    I extends {
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
      funders?:
        | {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          }[]
        | undefined;
    } & {
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
      funders?:
        | ({
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          }[] &
            ({
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
              stats?:
                | {
                    total_used_funds?: string | undefined;
                    total_allocated_funds?: string | undefined;
                    total_amount_per_bundle?: string | undefined;
                    pools_funded?: string[] | undefined;
                  }
                | undefined;
            } & {
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
              stats?:
                | ({
                    total_used_funds?: string | undefined;
                    total_allocated_funds?: string | undefined;
                    total_amount_per_bundle?: string | undefined;
                    pools_funded?: string[] | undefined;
                  } & {
                    total_used_funds?: string | undefined;
                    total_allocated_funds?: string | undefined;
                    total_amount_per_bundle?: string | undefined;
                    pools_funded?:
                      | (string[] &
                          string[] & {
                            [K_1 in Exclude<
                              keyof I["funders"][number]["stats"]["pools_funded"],
                              keyof string[]
                            >]: never;
                          })
                      | undefined;
                  } & {
                    [K_2 in Exclude<
                      keyof I["funders"][number]["stats"],
                      keyof FundingStats
                    >]: never;
                  })
                | undefined;
            } & {
              [K_3 in Exclude<keyof I["funders"][number], keyof Funder>]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["funders"],
                keyof {
                  address?: string | undefined;
                  moniker?: string | undefined;
                  identity?: string | undefined;
                  website?: string | undefined;
                  contact?: string | undefined;
                  description?: string | undefined;
                  stats?:
                    | {
                        total_used_funds?: string | undefined;
                        total_allocated_funds?: string | undefined;
                        total_amount_per_bundle?: string | undefined;
                        pools_funded?: string[] | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I, keyof QueryFundersResponse>]: never }
  >(
    base?: I | undefined
  ): QueryFundersResponse;
  fromPartial<
    I_1 extends {
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
      funders?:
        | {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          }[]
        | undefined;
    } & {
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_6 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
      funders?:
        | ({
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          }[] &
            ({
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
              stats?:
                | {
                    total_used_funds?: string | undefined;
                    total_allocated_funds?: string | undefined;
                    total_amount_per_bundle?: string | undefined;
                    pools_funded?: string[] | undefined;
                  }
                | undefined;
            } & {
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
              stats?:
                | ({
                    total_used_funds?: string | undefined;
                    total_allocated_funds?: string | undefined;
                    total_amount_per_bundle?: string | undefined;
                    pools_funded?: string[] | undefined;
                  } & {
                    total_used_funds?: string | undefined;
                    total_allocated_funds?: string | undefined;
                    total_amount_per_bundle?: string | undefined;
                    pools_funded?:
                      | (string[] &
                          string[] & {
                            [K_7 in Exclude<
                              keyof I_1["funders"][number]["stats"]["pools_funded"],
                              keyof string[]
                            >]: never;
                          })
                      | undefined;
                  } & {
                    [K_8 in Exclude<
                      keyof I_1["funders"][number]["stats"],
                      keyof FundingStats
                    >]: never;
                  })
                | undefined;
            } & {
              [K_9 in Exclude<
                keyof I_1["funders"][number],
                keyof Funder
              >]: never;
            })[] & {
              [K_10 in Exclude<
                keyof I_1["funders"],
                keyof {
                  address?: string | undefined;
                  moniker?: string | undefined;
                  identity?: string | undefined;
                  website?: string | undefined;
                  contact?: string | undefined;
                  description?: string | undefined;
                  stats?:
                    | {
                        total_used_funds?: string | undefined;
                        total_allocated_funds?: string | undefined;
                        total_amount_per_bundle?: string | undefined;
                        pools_funded?: string[] | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof QueryFundersResponse>]: never }
  >(
    object: I_1
  ): QueryFundersResponse;
};
export declare const QueryFunderRequest: {
  encode(message: QueryFunderRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderRequest;
  fromJSON(object: any): QueryFunderRequest;
  toJSON(message: QueryFunderRequest): unknown;
  create<
    I extends {
      address?: string | undefined;
      status?: FundingStatus | undefined;
    } & {
      address?: string | undefined;
      status?: FundingStatus | undefined;
    } & { [K in Exclude<keyof I, keyof QueryFunderRequest>]: never }
  >(
    base?: I | undefined
  ): QueryFunderRequest;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      status?: FundingStatus | undefined;
    } & {
      address?: string | undefined;
      status?: FundingStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryFunderRequest>]: never }
  >(
    object: I_1
  ): QueryFunderRequest;
};
export declare const QueryFunderResponse: {
  encode(message: QueryFunderResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderResponse;
  fromJSON(object: any): QueryFunderResponse;
  toJSON(message: QueryFunderResponse): unknown;
  create<
    I extends {
      funder?:
        | {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          }
        | undefined;
      fundings?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
    } & {
      funder?:
        | ({
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          } & {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | ({
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                } & {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?:
                    | (string[] &
                        string[] & {
                          [K in Exclude<
                            keyof I["funder"]["stats"]["pools_funded"],
                            keyof string[]
                          >]: never;
                        })
                    | undefined;
                } & {
                  [K_1 in Exclude<
                    keyof I["funder"]["stats"],
                    keyof FundingStats
                  >]: never;
                })
              | undefined;
          } & { [K_2 in Exclude<keyof I["funder"], keyof Funder>]: never })
        | undefined;
      fundings?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I["fundings"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["fundings"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I, keyof QueryFunderResponse>]: never }
  >(
    base?: I | undefined
  ): QueryFunderResponse;
  fromPartial<
    I_1 extends {
      funder?:
        | {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          }
        | undefined;
      fundings?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
    } & {
      funder?:
        | ({
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                }
              | undefined;
          } & {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
            stats?:
              | ({
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?: string[] | undefined;
                } & {
                  total_used_funds?: string | undefined;
                  total_allocated_funds?: string | undefined;
                  total_amount_per_bundle?: string | undefined;
                  pools_funded?:
                    | (string[] &
                        string[] & {
                          [K_6 in Exclude<
                            keyof I_1["funder"]["stats"]["pools_funded"],
                            keyof string[]
                          >]: never;
                        })
                    | undefined;
                } & {
                  [K_7 in Exclude<
                    keyof I_1["funder"]["stats"],
                    keyof FundingStats
                  >]: never;
                })
              | undefined;
          } & { [K_8 in Exclude<keyof I_1["funder"], keyof Funder>]: never })
        | undefined;
      fundings?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_9 in Exclude<
                keyof I_1["fundings"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_10 in Exclude<
                keyof I_1["fundings"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof QueryFunderResponse>]: never }
  >(
    object: I_1
  ): QueryFunderResponse;
};
export declare const QueryFundingsByFunderRequest: {
  encode(
    message: QueryFundingsByFunderRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundingsByFunderRequest;
  fromJSON(object: any): QueryFundingsByFunderRequest;
  toJSON(message: QueryFundingsByFunderRequest): unknown;
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
      status?: FundingStatus | undefined;
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
      status?: FundingStatus | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryFundingsByFunderRequest>]: never }
  >(
    base?: I | undefined
  ): QueryFundingsByFunderRequest;
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
      status?: FundingStatus | undefined;
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
      status?: FundingStatus | undefined;
    } & {
      [K_3 in Exclude<keyof I_1, keyof QueryFundingsByFunderRequest>]: never;
    }
  >(
    object: I_1
  ): QueryFundingsByFunderRequest;
};
export declare const QueryFundingsByFunderResponse: {
  encode(
    message: QueryFundingsByFunderResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundingsByFunderResponse;
  fromJSON(object: any): QueryFundingsByFunderResponse;
  toJSON(message: QueryFundingsByFunderResponse): unknown;
  create<
    I extends {
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
      fundings?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
    } & {
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
      fundings?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_1 in Exclude<
                keyof I["fundings"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_2 in Exclude<
                keyof I["fundings"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & {
      [K_3 in Exclude<keyof I, keyof QueryFundingsByFunderResponse>]: never;
    }
  >(
    base?: I | undefined
  ): QueryFundingsByFunderResponse;
  fromPartial<
    I_1 extends {
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
      fundings?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
    } & {
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_4 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
      fundings?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_5 in Exclude<
                keyof I_1["fundings"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I_1["fundings"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & {
      [K_7 in Exclude<keyof I_1, keyof QueryFundingsByFunderResponse>]: never;
    }
  >(
    object: I_1
  ): QueryFundingsByFunderResponse;
};
export declare const QueryFundingsByPoolRequest: {
  encode(message: QueryFundingsByPoolRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundingsByPoolRequest;
  fromJSON(object: any): QueryFundingsByPoolRequest;
  toJSON(message: QueryFundingsByPoolRequest): unknown;
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
      pool_id?: string | undefined;
      status?: FundingStatus | undefined;
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
      pool_id?: string | undefined;
      status?: FundingStatus | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryFundingsByPoolRequest>]: never }
  >(
    base?: I | undefined
  ): QueryFundingsByPoolRequest;
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
      pool_id?: string | undefined;
      status?: FundingStatus | undefined;
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
      pool_id?: string | undefined;
      status?: FundingStatus | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryFundingsByPoolRequest>]: never }
  >(
    object: I_1
  ): QueryFundingsByPoolRequest;
};
export declare const QueryFundingsByPoolResponse: {
  encode(message: QueryFundingsByPoolResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundingsByPoolResponse;
  fromJSON(object: any): QueryFundingsByPoolResponse;
  toJSON(message: QueryFundingsByPoolResponse): unknown;
  create<
    I extends {
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
      fundings?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
    } & {
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
      fundings?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_1 in Exclude<
                keyof I["fundings"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_2 in Exclude<
                keyof I["fundings"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryFundingsByPoolResponse>]: never }
  >(
    base?: I | undefined
  ): QueryFundingsByPoolResponse;
  fromPartial<
    I_1 extends {
      pagination?:
        | {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          }
        | undefined;
      fundings?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
    } & {
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_4 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
      fundings?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_5 in Exclude<
                keyof I_1["fundings"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I_1["fundings"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & {
      [K_7 in Exclude<keyof I_1, keyof QueryFundingsByPoolResponse>]: never;
    }
  >(
    object: I_1
  ): QueryFundingsByPoolResponse;
};
/** QueryFunders ... */
export interface QueryFunders {
  /** Funders queries all funders. */
  Funders(request: QueryFundersRequest): Promise<QueryFundersResponse>;
  /** Funder queries a funder by address. */
  Funder(request: QueryFunderRequest): Promise<QueryFunderResponse>;
  /** FundingsByFunder queries all fundings of a funder by address. */
  FundingsByFunder(
    request: QueryFundingsByFunderRequest
  ): Promise<QueryFundingsByFunderResponse>;
  /** FundingsByPool queries all fundings of a pool by id. */
  FundingsByPool(
    request: QueryFundingsByPoolRequest
  ): Promise<QueryFundingsByPoolResponse>;
}
export declare const QueryFundersServiceName =
  "kyve.query.v1beta1.QueryFunders";
export declare class QueryFundersClientImpl implements QueryFunders {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  Funders(request: QueryFundersRequest): Promise<QueryFundersResponse>;
  Funder(request: QueryFunderRequest): Promise<QueryFunderResponse>;
  FundingsByFunder(
    request: QueryFundingsByFunderRequest
  ): Promise<QueryFundingsByFunderResponse>;
  FundingsByPool(
    request: QueryFundingsByPoolRequest
  ): Promise<QueryFundingsByPoolResponse>;
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
