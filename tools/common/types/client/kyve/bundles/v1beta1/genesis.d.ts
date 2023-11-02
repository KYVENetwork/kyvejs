import _m0 from "protobufjs/minimal";
import { BundleProposal, FinalizedBundle, RoundRobinProgress } from "./bundles";
import { Params } from "./params";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/** GenesisState defines the bundles module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params | undefined;
  /** bundle_proposal_list ... */
  bundle_proposal_list: BundleProposal[];
  /** finalized_bundle_list ... */
  finalized_bundle_list: FinalizedBundle[];
  /** round_robin_progress_list ... */
  round_robin_progress_list: RoundRobinProgress[];
}
export declare const GenesisState: {
  encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
  fromJSON(object: any): GenesisState;
  toJSON(message: GenesisState): unknown;
  create<
    I extends {
      params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      bundle_proposal_list?:
        | {
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
          }[]
        | undefined;
      finalized_bundle_list?:
        | {
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                }
              | undefined;
          }[]
        | undefined;
      round_robin_progress_list?:
        | {
            pool_id?: string | undefined;
            progress_list?:
              | {
                  address?: string | undefined;
                  progress?: string | undefined;
                }[]
              | undefined;
          }[]
        | undefined;
    } & {
      params?:
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
          } & { [K in Exclude<keyof I["params"], keyof Params>]: never })
        | undefined;
      bundle_proposal_list?:
        | ({
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              next_uploader?: string | undefined;
              data_size?: string | undefined;
              bundle_size?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              updated_at?: string | undefined;
              voters_valid?: string[] | undefined;
              voters_invalid?: string[] | undefined;
              voters_abstain?: string[] | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
            } & {
              pool_id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              next_uploader?: string | undefined;
              data_size?: string | undefined;
              bundle_size?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              updated_at?: string | undefined;
              voters_valid?:
                | (string[] &
                    string[] & {
                      [K_1 in Exclude<
                        keyof I["bundle_proposal_list"][number]["voters_valid"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
              voters_invalid?:
                | (string[] &
                    string[] & {
                      [K_2 in Exclude<
                        keyof I["bundle_proposal_list"][number]["voters_invalid"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
              voters_abstain?:
                | (string[] &
                    string[] & {
                      [K_3 in Exclude<
                        keyof I["bundle_proposal_list"][number]["voters_abstain"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
            } & {
              [K_4 in Exclude<
                keyof I["bundle_proposal_list"][number],
                keyof BundleProposal
              >]: never;
            })[] & {
              [K_5 in Exclude<
                keyof I["bundle_proposal_list"],
                keyof {
                  pool_id?: string | undefined;
                  storage_id?: string | undefined;
                  uploader?: string | undefined;
                  next_uploader?: string | undefined;
                  data_size?: string | undefined;
                  bundle_size?: string | undefined;
                  to_key?: string | undefined;
                  bundle_summary?: string | undefined;
                  data_hash?: string | undefined;
                  updated_at?: string | undefined;
                  voters_valid?: string[] | undefined;
                  voters_invalid?: string[] | undefined;
                  voters_abstain?: string[] | undefined;
                  from_key?: string | undefined;
                  storage_provider_id?: number | undefined;
                  compression_id?: number | undefined;
                }[]
              >]: never;
            })
        | undefined;
      finalized_bundle_list?:
        | ({
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                }
              | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              from_index?: string | undefined;
              to_index?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              finalized_at?:
                | {
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  }
                | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
              stake_security?:
                | {
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  }
                | undefined;
            } & {
              pool_id?: string | undefined;
              id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              from_index?: string | undefined;
              to_index?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              finalized_at?:
                | ({
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  } & {
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  } & {
                    [K_6 in Exclude<
                      keyof I["finalized_bundle_list"][number]["finalized_at"],
                      keyof import("./bundles").FinalizedAt
                    >]: never;
                  })
                | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
              stake_security?:
                | ({
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    [K_7 in Exclude<
                      keyof I["finalized_bundle_list"][number]["stake_security"],
                      keyof import("./bundles").StakeSecurity
                    >]: never;
                  })
                | undefined;
            } & {
              [K_8 in Exclude<
                keyof I["finalized_bundle_list"][number],
                keyof FinalizedBundle
              >]: never;
            })[] & {
              [K_9 in Exclude<
                keyof I["finalized_bundle_list"],
                keyof {
                  pool_id?: string | undefined;
                  id?: string | undefined;
                  storage_id?: string | undefined;
                  uploader?: string | undefined;
                  from_index?: string | undefined;
                  to_index?: string | undefined;
                  to_key?: string | undefined;
                  bundle_summary?: string | undefined;
                  data_hash?: string | undefined;
                  finalized_at?:
                    | {
                        height?: string | undefined;
                        timestamp?: string | undefined;
                      }
                    | undefined;
                  from_key?: string | undefined;
                  storage_provider_id?: number | undefined;
                  compression_id?: number | undefined;
                  stake_security?:
                    | {
                        valid_vote_power?: string | undefined;
                        total_vote_power?: string | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
      round_robin_progress_list?:
        | ({
            pool_id?: string | undefined;
            progress_list?:
              | {
                  address?: string | undefined;
                  progress?: string | undefined;
                }[]
              | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              progress_list?:
                | {
                    address?: string | undefined;
                    progress?: string | undefined;
                  }[]
                | undefined;
            } & {
              pool_id?: string | undefined;
              progress_list?:
                | ({
                    address?: string | undefined;
                    progress?: string | undefined;
                  }[] &
                    ({
                      address?: string | undefined;
                      progress?: string | undefined;
                    } & {
                      address?: string | undefined;
                      progress?: string | undefined;
                    } & {
                      [K_10 in Exclude<
                        keyof I["round_robin_progress_list"][number]["progress_list"][number],
                        keyof import("./bundles").RoundRobinSingleValidatorProgress
                      >]: never;
                    })[] & {
                      [K_11 in Exclude<
                        keyof I["round_robin_progress_list"][number]["progress_list"],
                        keyof {
                          address?: string | undefined;
                          progress?: string | undefined;
                        }[]
                      >]: never;
                    })
                | undefined;
            } & {
              [K_12 in Exclude<
                keyof I["round_robin_progress_list"][number],
                keyof RoundRobinProgress
              >]: never;
            })[] & {
              [K_13 in Exclude<
                keyof I["round_robin_progress_list"],
                keyof {
                  pool_id?: string | undefined;
                  progress_list?:
                    | {
                        address?: string | undefined;
                        progress?: string | undefined;
                      }[]
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_14 in Exclude<keyof I, keyof GenesisState>]: never }
  >(
    base?: I | undefined
  ): GenesisState;
  fromPartial<
    I_1 extends {
      params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      bundle_proposal_list?:
        | {
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
          }[]
        | undefined;
      finalized_bundle_list?:
        | {
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                }
              | undefined;
          }[]
        | undefined;
      round_robin_progress_list?:
        | {
            pool_id?: string | undefined;
            progress_list?:
              | {
                  address?: string | undefined;
                  progress?: string | undefined;
                }[]
              | undefined;
          }[]
        | undefined;
    } & {
      params?:
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
          } & { [K_15 in Exclude<keyof I_1["params"], keyof Params>]: never })
        | undefined;
      bundle_proposal_list?:
        | ({
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              next_uploader?: string | undefined;
              data_size?: string | undefined;
              bundle_size?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              updated_at?: string | undefined;
              voters_valid?: string[] | undefined;
              voters_invalid?: string[] | undefined;
              voters_abstain?: string[] | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
            } & {
              pool_id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              next_uploader?: string | undefined;
              data_size?: string | undefined;
              bundle_size?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              updated_at?: string | undefined;
              voters_valid?:
                | (string[] &
                    string[] & {
                      [K_16 in Exclude<
                        keyof I_1["bundle_proposal_list"][number]["voters_valid"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
              voters_invalid?:
                | (string[] &
                    string[] & {
                      [K_17 in Exclude<
                        keyof I_1["bundle_proposal_list"][number]["voters_invalid"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
              voters_abstain?:
                | (string[] &
                    string[] & {
                      [K_18 in Exclude<
                        keyof I_1["bundle_proposal_list"][number]["voters_abstain"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
            } & {
              [K_19 in Exclude<
                keyof I_1["bundle_proposal_list"][number],
                keyof BundleProposal
              >]: never;
            })[] & {
              [K_20 in Exclude<
                keyof I_1["bundle_proposal_list"],
                keyof {
                  pool_id?: string | undefined;
                  storage_id?: string | undefined;
                  uploader?: string | undefined;
                  next_uploader?: string | undefined;
                  data_size?: string | undefined;
                  bundle_size?: string | undefined;
                  to_key?: string | undefined;
                  bundle_summary?: string | undefined;
                  data_hash?: string | undefined;
                  updated_at?: string | undefined;
                  voters_valid?: string[] | undefined;
                  voters_invalid?: string[] | undefined;
                  voters_abstain?: string[] | undefined;
                  from_key?: string | undefined;
                  storage_provider_id?: number | undefined;
                  compression_id?: number | undefined;
                }[]
              >]: never;
            })
        | undefined;
      finalized_bundle_list?:
        | ({
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                }
              | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              from_index?: string | undefined;
              to_index?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              finalized_at?:
                | {
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  }
                | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
              stake_security?:
                | {
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  }
                | undefined;
            } & {
              pool_id?: string | undefined;
              id?: string | undefined;
              storage_id?: string | undefined;
              uploader?: string | undefined;
              from_index?: string | undefined;
              to_index?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              finalized_at?:
                | ({
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  } & {
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  } & {
                    [K_21 in Exclude<
                      keyof I_1["finalized_bundle_list"][number]["finalized_at"],
                      keyof import("./bundles").FinalizedAt
                    >]: never;
                  })
                | undefined;
              from_key?: string | undefined;
              storage_provider_id?: number | undefined;
              compression_id?: number | undefined;
              stake_security?:
                | ({
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    [K_22 in Exclude<
                      keyof I_1["finalized_bundle_list"][number]["stake_security"],
                      keyof import("./bundles").StakeSecurity
                    >]: never;
                  })
                | undefined;
            } & {
              [K_23 in Exclude<
                keyof I_1["finalized_bundle_list"][number],
                keyof FinalizedBundle
              >]: never;
            })[] & {
              [K_24 in Exclude<
                keyof I_1["finalized_bundle_list"],
                keyof {
                  pool_id?: string | undefined;
                  id?: string | undefined;
                  storage_id?: string | undefined;
                  uploader?: string | undefined;
                  from_index?: string | undefined;
                  to_index?: string | undefined;
                  to_key?: string | undefined;
                  bundle_summary?: string | undefined;
                  data_hash?: string | undefined;
                  finalized_at?:
                    | {
                        height?: string | undefined;
                        timestamp?: string | undefined;
                      }
                    | undefined;
                  from_key?: string | undefined;
                  storage_provider_id?: number | undefined;
                  compression_id?: number | undefined;
                  stake_security?:
                    | {
                        valid_vote_power?: string | undefined;
                        total_vote_power?: string | undefined;
                      }
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
      round_robin_progress_list?:
        | ({
            pool_id?: string | undefined;
            progress_list?:
              | {
                  address?: string | undefined;
                  progress?: string | undefined;
                }[]
              | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              progress_list?:
                | {
                    address?: string | undefined;
                    progress?: string | undefined;
                  }[]
                | undefined;
            } & {
              pool_id?: string | undefined;
              progress_list?:
                | ({
                    address?: string | undefined;
                    progress?: string | undefined;
                  }[] &
                    ({
                      address?: string | undefined;
                      progress?: string | undefined;
                    } & {
                      address?: string | undefined;
                      progress?: string | undefined;
                    } & {
                      [K_25 in Exclude<
                        keyof I_1["round_robin_progress_list"][number]["progress_list"][number],
                        keyof import("./bundles").RoundRobinSingleValidatorProgress
                      >]: never;
                    })[] & {
                      [K_26 in Exclude<
                        keyof I_1["round_robin_progress_list"][number]["progress_list"],
                        keyof {
                          address?: string | undefined;
                          progress?: string | undefined;
                        }[]
                      >]: never;
                    })
                | undefined;
            } & {
              [K_27 in Exclude<
                keyof I_1["round_robin_progress_list"][number],
                keyof RoundRobinProgress
              >]: never;
            })[] & {
              [K_28 in Exclude<
                keyof I_1["round_robin_progress_list"],
                keyof {
                  pool_id?: string | undefined;
                  progress_list?:
                    | {
                        address?: string | undefined;
                        progress?: string | undefined;
                      }[]
                    | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof GenesisState>]: never }
  >(
    object: I_1
  ): GenesisState;
};
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
