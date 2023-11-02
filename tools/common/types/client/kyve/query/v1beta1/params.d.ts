import _m0 from "protobufjs/minimal";
import { Params as Params3 } from "../../../cosmos/gov/v1/gov";
import { Params } from "../../bundles/v1beta1/params";
import { Params as Params1 } from "../../delegation/v1beta1/params";
import { Params as Params6 } from "../../funders/v1beta1/params";
import { Params as Params2 } from "../../global/v1beta1/global";
import { Params as Params5 } from "../../pool/v1beta1/params";
import { Params as Params4 } from "../../stakers/v1beta1/params";
export declare const protobufPackage = "kyve.query.v1beta1";
/** QueryParamsRequest ... */
export interface QueryParamsRequest {}
/** QueryParamsResponse ... */
export interface QueryParamsResponse {
  /** bundles_params ... */
  bundles_params?: Params | undefined;
  /** delegation_params ... */
  delegation_params?: Params1 | undefined;
  /** global_params ... */
  global_params?: Params2 | undefined;
  /** gov_params ... */
  gov_params?: Params3 | undefined;
  /** stakers_params ... */
  stakers_params?: Params4 | undefined;
  /** pool_params ... */
  pool_params?: Params5 | undefined;
  /** funders_params ... */
  funders_params?: Params6 | undefined;
}
export declare const QueryParamsRequest: {
  encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
  fromJSON(_: any): QueryParamsRequest;
  toJSON(_: QueryParamsRequest): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): QueryParamsRequest;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
  encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
  fromJSON(object: any): QueryParamsResponse;
  toJSON(message: QueryParamsResponse): unknown;
  create<
    I extends {
      bundles_params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      delegation_params?:
        | {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      global_params?:
        | {
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?:
              | {
                  type?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            gas_refunds?:
              | {
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[]
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          }
        | undefined;
      gov_params?:
        | {
            min_deposit?:
              | {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            max_deposit_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            voting_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            quorum?: string | undefined;
            threshold?: string | undefined;
            veto_threshold?: string | undefined;
            min_initial_deposit_ratio?: string | undefined;
            burn_vote_quorum?: boolean | undefined;
            burn_proposal_deposit_prevote?: boolean | undefined;
            burn_vote_veto?: boolean | undefined;
          }
        | undefined;
      stakers_params?:
        | {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          }
        | undefined;
      pool_params?:
        | {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      funders_params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
    } & {
      bundles_params?:
        | ({
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          } & {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          } & {
            [K in Exclude<keyof I["bundles_params"], keyof Params>]: never;
          })
        | undefined;
      delegation_params?:
        | ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            [K_1 in Exclude<
              keyof I["delegation_params"],
              keyof Params1
            >]: never;
          })
        | undefined;
      global_params?:
        | ({
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?:
              | {
                  type?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            gas_refunds?:
              | {
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[]
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & {
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?:
              | ({
                  type?: string | undefined;
                  amount?: string | undefined;
                }[] &
                  ({
                    type?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    type?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    [K_2 in Exclude<
                      keyof I["global_params"]["gas_adjustments"][number],
                      keyof import("../../global/v1beta1/global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_3 in Exclude<
                      keyof I["global_params"]["gas_adjustments"],
                      keyof {
                        type?: string | undefined;
                        amount?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            gas_refunds?:
              | ({
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[] &
                  ({
                    type?: string | undefined;
                    fraction?: string | undefined;
                  } & {
                    type?: string | undefined;
                    fraction?: string | undefined;
                  } & {
                    [K_4 in Exclude<
                      keyof I["global_params"]["gas_refunds"][number],
                      keyof import("../../global/v1beta1/global").GasRefund
                    >]: never;
                  })[] & {
                    [K_5 in Exclude<
                      keyof I["global_params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & {
            [K_6 in Exclude<keyof I["global_params"], keyof Params2>]: never;
          })
        | undefined;
      gov_params?:
        | ({
            min_deposit?:
              | {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            max_deposit_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            voting_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            quorum?: string | undefined;
            threshold?: string | undefined;
            veto_threshold?: string | undefined;
            min_initial_deposit_ratio?: string | undefined;
            burn_vote_quorum?: boolean | undefined;
            burn_proposal_deposit_prevote?: boolean | undefined;
            burn_vote_veto?: boolean | undefined;
          } & {
            min_deposit?:
              | ({
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[] &
                  ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    [K_7 in Exclude<
                      keyof I["gov_params"]["min_deposit"][number],
                      keyof import("../../../cosmos/base/v1beta1/coin").Coin
                    >]: never;
                  })[] & {
                    [K_8 in Exclude<
                      keyof I["gov_params"]["min_deposit"],
                      keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            max_deposit_period?:
              | ({
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  [K_9 in Exclude<
                    keyof I["gov_params"]["max_deposit_period"],
                    keyof import("../../../google/protobuf/duration").Duration
                  >]: never;
                })
              | undefined;
            voting_period?:
              | ({
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  [K_10 in Exclude<
                    keyof I["gov_params"]["voting_period"],
                    keyof import("../../../google/protobuf/duration").Duration
                  >]: never;
                })
              | undefined;
            quorum?: string | undefined;
            threshold?: string | undefined;
            veto_threshold?: string | undefined;
            min_initial_deposit_ratio?: string | undefined;
            burn_vote_quorum?: boolean | undefined;
            burn_proposal_deposit_prevote?: boolean | undefined;
            burn_vote_veto?: boolean | undefined;
          } & {
            [K_11 in Exclude<keyof I["gov_params"], keyof Params3>]: never;
          })
        | undefined;
      stakers_params?:
        | ({
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            [K_12 in Exclude<keyof I["stakers_params"], keyof Params4>]: never;
          })
        | undefined;
      pool_params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            [K_13 in Exclude<keyof I["pool_params"], keyof Params5>]: never;
          })
        | undefined;
      funders_params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            [K_14 in Exclude<keyof I["funders_params"], keyof Params6>]: never;
          })
        | undefined;
    } & { [K_15 in Exclude<keyof I, keyof QueryParamsResponse>]: never }
  >(
    base?: I | undefined
  ): QueryParamsResponse;
  fromPartial<
    I_1 extends {
      bundles_params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      delegation_params?:
        | {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      global_params?:
        | {
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?:
              | {
                  type?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            gas_refunds?:
              | {
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[]
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          }
        | undefined;
      gov_params?:
        | {
            min_deposit?:
              | {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            max_deposit_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            voting_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            quorum?: string | undefined;
            threshold?: string | undefined;
            veto_threshold?: string | undefined;
            min_initial_deposit_ratio?: string | undefined;
            burn_vote_quorum?: boolean | undefined;
            burn_proposal_deposit_prevote?: boolean | undefined;
            burn_vote_veto?: boolean | undefined;
          }
        | undefined;
      stakers_params?:
        | {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          }
        | undefined;
      pool_params?:
        | {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      funders_params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
    } & {
      bundles_params?:
        | ({
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          } & {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          } & {
            [K_16 in Exclude<keyof I_1["bundles_params"], keyof Params>]: never;
          })
        | undefined;
      delegation_params?:
        | ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          } & {
            [K_17 in Exclude<
              keyof I_1["delegation_params"],
              keyof Params1
            >]: never;
          })
        | undefined;
      global_params?:
        | ({
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?:
              | {
                  type?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            gas_refunds?:
              | {
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[]
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & {
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?:
              | ({
                  type?: string | undefined;
                  amount?: string | undefined;
                }[] &
                  ({
                    type?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    type?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    [K_18 in Exclude<
                      keyof I_1["global_params"]["gas_adjustments"][number],
                      keyof import("../../global/v1beta1/global").GasAdjustment
                    >]: never;
                  })[] & {
                    [K_19 in Exclude<
                      keyof I_1["global_params"]["gas_adjustments"],
                      keyof {
                        type?: string | undefined;
                        amount?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            gas_refunds?:
              | ({
                  type?: string | undefined;
                  fraction?: string | undefined;
                }[] &
                  ({
                    type?: string | undefined;
                    fraction?: string | undefined;
                  } & {
                    type?: string | undefined;
                    fraction?: string | undefined;
                  } & {
                    [K_20 in Exclude<
                      keyof I_1["global_params"]["gas_refunds"][number],
                      keyof import("../../global/v1beta1/global").GasRefund
                    >]: never;
                  })[] & {
                    [K_21 in Exclude<
                      keyof I_1["global_params"]["gas_refunds"],
                      keyof {
                        type?: string | undefined;
                        fraction?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            min_initial_deposit_ratio?: string | undefined;
          } & {
            [K_22 in Exclude<keyof I_1["global_params"], keyof Params2>]: never;
          })
        | undefined;
      gov_params?:
        | ({
            min_deposit?:
              | {
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[]
              | undefined;
            max_deposit_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            voting_period?:
              | {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                }
              | undefined;
            quorum?: string | undefined;
            threshold?: string | undefined;
            veto_threshold?: string | undefined;
            min_initial_deposit_ratio?: string | undefined;
            burn_vote_quorum?: boolean | undefined;
            burn_proposal_deposit_prevote?: boolean | undefined;
            burn_vote_veto?: boolean | undefined;
          } & {
            min_deposit?:
              | ({
                  denom?: string | undefined;
                  amount?: string | undefined;
                }[] &
                  ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                  } & {
                    [K_23 in Exclude<
                      keyof I_1["gov_params"]["min_deposit"][number],
                      keyof import("../../../cosmos/base/v1beta1/coin").Coin
                    >]: never;
                  })[] & {
                    [K_24 in Exclude<
                      keyof I_1["gov_params"]["min_deposit"],
                      keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                      }[]
                    >]: never;
                  })
              | undefined;
            max_deposit_period?:
              | ({
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  [K_25 in Exclude<
                    keyof I_1["gov_params"]["max_deposit_period"],
                    keyof import("../../../google/protobuf/duration").Duration
                  >]: never;
                })
              | undefined;
            voting_period?:
              | ({
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  seconds?: string | undefined;
                  nanos?: number | undefined;
                } & {
                  [K_26 in Exclude<
                    keyof I_1["gov_params"]["voting_period"],
                    keyof import("../../../google/protobuf/duration").Duration
                  >]: never;
                })
              | undefined;
            quorum?: string | undefined;
            threshold?: string | undefined;
            veto_threshold?: string | undefined;
            min_initial_deposit_ratio?: string | undefined;
            burn_vote_quorum?: boolean | undefined;
            burn_proposal_deposit_prevote?: boolean | undefined;
            burn_vote_veto?: boolean | undefined;
          } & {
            [K_27 in Exclude<keyof I_1["gov_params"], keyof Params3>]: never;
          })
        | undefined;
      stakers_params?:
        | ({
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
          } & {
            [K_28 in Exclude<
              keyof I_1["stakers_params"],
              keyof Params4
            >]: never;
          })
        | undefined;
      pool_params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            [K_29 in Exclude<keyof I_1["pool_params"], keyof Params5>]: never;
          })
        | undefined;
      funders_params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            [K_30 in Exclude<
              keyof I_1["funders_params"],
              keyof Params6
            >]: never;
          })
        | undefined;
    } & { [K_31 in Exclude<keyof I_1, keyof QueryParamsResponse>]: never }
  >(
    object: I_1
  ): QueryParamsResponse;
};
/** QueryParams ... */
export interface QueryParams {
  /** Pools queries for all pools. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const QueryParamsServiceName = "kyve.query.v1beta1.QueryParams";
export declare class QueryParamsClientImpl implements QueryParams {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
