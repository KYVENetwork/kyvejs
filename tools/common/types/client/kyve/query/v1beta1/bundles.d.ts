import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "kyve.query.v1beta1";
/** FinalizedBundle represents the latest version of a valid bundle of a pool */
export interface FinalizedBundle {
  /** pool_id in which the bundle was created */
  pool_id: string;
  /** id is is integrated with each valid bundle produced. */
  id: string;
  /** storage_id is the id with which the data can be retrieved from the configured data provider */
  storage_id: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  from_index: string;
  /** to_index is the index to which the bundle goes (exclusive) */
  to_index: string;
  /** from_key is the key of the first data item in the bundle proposal */
  from_key: string;
  /** to_key the key of the last data item in the bundle */
  to_key: string;
  /** bundle_summary is a summary of the bundle. */
  bundle_summary: string;
  /** data_hash is a sha256 hash of the uploaded data. */
  data_hash: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalized_at?: FinalizedAt | undefined;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: string;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: string;
  /**
   * stake_security defines the amount of stake which was present in the pool during the finalization of the bundle.
   * This field was added in schema version 2. Bundles finalized before that return `null`.
   */
  stake_security?: StakeSecurity | undefined;
}
/** FinalizedAt stores information about finalization block and time. */
export interface FinalizedAt {
  /** height is the block height in which the bundle got finalized. */
  height: string;
  /** timestamp is the UNIX timestamp of the block in which the bundle got finalized. */
  timestamp: string;
}
/** StakeSecurity represents the relative security of a finalized bundle */
export interface StakeSecurity {
  /** valid_vote_power gives the amount of $KYVE stake that voted `valid`. */
  valid_vote_power: string;
  /**
   * total_vote_power gives the amount of total $KYVE stake that was present in the pool
   * during finalization.
   */
  total_vote_power: string;
}
/** QueryFinalizedBundlesRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
  /** pool_id ... */
  pool_id: string;
  /**
   * index is an optional parameter which tells the server to only show
   * the bundle with the given index. This can not be combined with pagination.
   */
  index: string;
}
/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundlesResponse {
  /** finalized_bundles ... */
  finalized_bundles: FinalizedBundle[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
/** QueryFinalizedBundleRequest is the request type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleRequest {
  /** pool_id ... */
  pool_id: string;
  /** id ... */
  id: string;
}
/** QueryFinalizedBundleResponse is the response type for the Query/Staker RPC method. */
export interface QueryFinalizedBundleResponse {
  /** finalized_bundles ... */
  finalized_bundles?: FinalizedBundle | undefined;
}
/** QueryCurrentVoteStatusRequest is the request type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusRequest {
  /** pool_id ... */
  pool_id: string;
}
/** QueryCurrentVoteStatusResponse is the response type for the Query/Staker RPC method. */
export interface QueryCurrentVoteStatusResponse {
  /** valid ... */
  valid: string;
  /** invalid ... */
  invalid: string;
  /** abstain ... */
  abstain: string;
  /** total ... */
  total: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanValidateRequest {
  /** pool_id defines the unique ID of the pool. */
  pool_id: string;
  /** valaddress ... */
  valaddress: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanValidateResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
  /** pool_id defines the unique ID of the pool. */
  pool_id: string;
  /** staker ... */
  staker: string;
  /** proposer ... */
  proposer: string;
  /** from_index ... */
  from_index: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
  /** pool_id defines the unique ID of the pool. */
  pool_id: string;
  /** staker ... */
  staker: string;
  /** voter ... */
  voter: string;
  /** storage_id ... */
  storage_id: string;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponse {
  /** possible ... */
  possible: boolean;
  /** reason ... */
  reason: string;
}
export declare const FinalizedBundle: {
  encode(message: FinalizedBundle, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedBundle;
  fromJSON(object: any): FinalizedBundle;
  toJSON(message: FinalizedBundle): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      storage_id?: string | undefined;
      uploader?: string | undefined;
      from_index?: string | undefined;
      to_index?: string | undefined;
      from_key?: string | undefined;
      to_key?: string | undefined;
      bundle_summary?: string | undefined;
      data_hash?: string | undefined;
      finalized_at?:
        | {
            height?: string | undefined;
            timestamp?: string | undefined;
          }
        | undefined;
      storage_provider_id?: string | undefined;
      compression_id?: string | undefined;
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
      from_key?: string | undefined;
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
            [K in Exclude<keyof I["finalized_at"], keyof FinalizedAt>]: never;
          })
        | undefined;
      storage_provider_id?: string | undefined;
      compression_id?: string | undefined;
      stake_security?:
        | ({
            valid_vote_power?: string | undefined;
            total_vote_power?: string | undefined;
          } & {
            valid_vote_power?: string | undefined;
            total_vote_power?: string | undefined;
          } & {
            [K_1 in Exclude<
              keyof I["stake_security"],
              keyof StakeSecurity
            >]: never;
          })
        | undefined;
    } & { [K_2 in Exclude<keyof I, keyof FinalizedBundle>]: never }
  >(
    base?: I | undefined
  ): FinalizedBundle;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      storage_id?: string | undefined;
      uploader?: string | undefined;
      from_index?: string | undefined;
      to_index?: string | undefined;
      from_key?: string | undefined;
      to_key?: string | undefined;
      bundle_summary?: string | undefined;
      data_hash?: string | undefined;
      finalized_at?:
        | {
            height?: string | undefined;
            timestamp?: string | undefined;
          }
        | undefined;
      storage_provider_id?: string | undefined;
      compression_id?: string | undefined;
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
      from_key?: string | undefined;
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
            [K_3 in Exclude<
              keyof I_1["finalized_at"],
              keyof FinalizedAt
            >]: never;
          })
        | undefined;
      storage_provider_id?: string | undefined;
      compression_id?: string | undefined;
      stake_security?:
        | ({
            valid_vote_power?: string | undefined;
            total_vote_power?: string | undefined;
          } & {
            valid_vote_power?: string | undefined;
            total_vote_power?: string | undefined;
          } & {
            [K_4 in Exclude<
              keyof I_1["stake_security"],
              keyof StakeSecurity
            >]: never;
          })
        | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof FinalizedBundle>]: never }
  >(
    object: I_1
  ): FinalizedBundle;
};
export declare const FinalizedAt: {
  encode(message: FinalizedAt, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): FinalizedAt;
  fromJSON(object: any): FinalizedAt;
  toJSON(message: FinalizedAt): unknown;
  create<
    I extends {
      height?: string | undefined;
      timestamp?: string | undefined;
    } & {
      height?: string | undefined;
      timestamp?: string | undefined;
    } & { [K in Exclude<keyof I, keyof FinalizedAt>]: never }
  >(
    base?: I | undefined
  ): FinalizedAt;
  fromPartial<
    I_1 extends {
      height?: string | undefined;
      timestamp?: string | undefined;
    } & {
      height?: string | undefined;
      timestamp?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FinalizedAt>]: never }
  >(
    object: I_1
  ): FinalizedAt;
};
export declare const StakeSecurity: {
  encode(message: StakeSecurity, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): StakeSecurity;
  fromJSON(object: any): StakeSecurity;
  toJSON(message: StakeSecurity): unknown;
  create<
    I extends {
      valid_vote_power?: string | undefined;
      total_vote_power?: string | undefined;
    } & {
      valid_vote_power?: string | undefined;
      total_vote_power?: string | undefined;
    } & { [K in Exclude<keyof I, keyof StakeSecurity>]: never }
  >(
    base?: I | undefined
  ): StakeSecurity;
  fromPartial<
    I_1 extends {
      valid_vote_power?: string | undefined;
      total_vote_power?: string | undefined;
    } & {
      valid_vote_power?: string | undefined;
      total_vote_power?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StakeSecurity>]: never }
  >(
    object: I_1
  ): StakeSecurity;
};
export declare const QueryFinalizedBundlesRequest: {
  encode(
    message: QueryFinalizedBundlesRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFinalizedBundlesRequest;
  fromJSON(object: any): QueryFinalizedBundlesRequest;
  toJSON(message: QueryFinalizedBundlesRequest): unknown;
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
      index?: string | undefined;
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
      index?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryFinalizedBundlesRequest>]: never }
  >(
    base?: I | undefined
  ): QueryFinalizedBundlesRequest;
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
      index?: string | undefined;
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
      index?: string | undefined;
    } & {
      [K_3 in Exclude<keyof I_1, keyof QueryFinalizedBundlesRequest>]: never;
    }
  >(
    object: I_1
  ): QueryFinalizedBundlesRequest;
};
export declare const QueryFinalizedBundlesResponse: {
  encode(
    message: QueryFinalizedBundlesResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFinalizedBundlesResponse;
  fromJSON(object: any): QueryFinalizedBundlesResponse;
  toJSON(message: QueryFinalizedBundlesResponse): unknown;
  create<
    I extends {
      finalized_bundles?:
        | {
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
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
      finalized_bundles?:
        | ({
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
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
              from_key?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              finalized_at?:
                | {
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  }
                | undefined;
              storage_provider_id?: string | undefined;
              compression_id?: string | undefined;
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
              from_key?: string | undefined;
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
                    [K in Exclude<
                      keyof I["finalized_bundles"][number]["finalized_at"],
                      keyof FinalizedAt
                    >]: never;
                  })
                | undefined;
              storage_provider_id?: string | undefined;
              compression_id?: string | undefined;
              stake_security?:
                | ({
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    [K_1 in Exclude<
                      keyof I["finalized_bundles"][number]["stake_security"],
                      keyof StakeSecurity
                    >]: never;
                  })
                | undefined;
            } & {
              [K_2 in Exclude<
                keyof I["finalized_bundles"][number],
                keyof FinalizedBundle
              >]: never;
            })[] & {
              [K_3 in Exclude<
                keyof I["finalized_bundles"],
                keyof {
                  pool_id?: string | undefined;
                  id?: string | undefined;
                  storage_id?: string | undefined;
                  uploader?: string | undefined;
                  from_index?: string | undefined;
                  to_index?: string | undefined;
                  from_key?: string | undefined;
                  to_key?: string | undefined;
                  bundle_summary?: string | undefined;
                  data_hash?: string | undefined;
                  finalized_at?:
                    | {
                        height?: string | undefined;
                        timestamp?: string | undefined;
                      }
                    | undefined;
                  storage_provider_id?: string | undefined;
                  compression_id?: string | undefined;
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
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_4 in Exclude<keyof I["pagination"], keyof PageResponse>]: never;
          })
        | undefined;
    } & {
      [K_5 in Exclude<keyof I, keyof QueryFinalizedBundlesResponse>]: never;
    }
  >(
    base?: I | undefined
  ): QueryFinalizedBundlesResponse;
  fromPartial<
    I_1 extends {
      finalized_bundles?:
        | {
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
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
      finalized_bundles?:
        | ({
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
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
              from_key?: string | undefined;
              to_key?: string | undefined;
              bundle_summary?: string | undefined;
              data_hash?: string | undefined;
              finalized_at?:
                | {
                    height?: string | undefined;
                    timestamp?: string | undefined;
                  }
                | undefined;
              storage_provider_id?: string | undefined;
              compression_id?: string | undefined;
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
              from_key?: string | undefined;
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
                      keyof I_1["finalized_bundles"][number]["finalized_at"],
                      keyof FinalizedAt
                    >]: never;
                  })
                | undefined;
              storage_provider_id?: string | undefined;
              compression_id?: string | undefined;
              stake_security?:
                | ({
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    valid_vote_power?: string | undefined;
                    total_vote_power?: string | undefined;
                  } & {
                    [K_7 in Exclude<
                      keyof I_1["finalized_bundles"][number]["stake_security"],
                      keyof StakeSecurity
                    >]: never;
                  })
                | undefined;
            } & {
              [K_8 in Exclude<
                keyof I_1["finalized_bundles"][number],
                keyof FinalizedBundle
              >]: never;
            })[] & {
              [K_9 in Exclude<
                keyof I_1["finalized_bundles"],
                keyof {
                  pool_id?: string | undefined;
                  id?: string | undefined;
                  storage_id?: string | undefined;
                  uploader?: string | undefined;
                  from_index?: string | undefined;
                  to_index?: string | undefined;
                  from_key?: string | undefined;
                  to_key?: string | undefined;
                  bundle_summary?: string | undefined;
                  data_hash?: string | undefined;
                  finalized_at?:
                    | {
                        height?: string | undefined;
                        timestamp?: string | undefined;
                      }
                    | undefined;
                  storage_provider_id?: string | undefined;
                  compression_id?: string | undefined;
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
      pagination?:
        | ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
          } & {
            [K_10 in Exclude<
              keyof I_1["pagination"],
              keyof PageResponse
            >]: never;
          })
        | undefined;
    } & {
      [K_11 in Exclude<keyof I_1, keyof QueryFinalizedBundlesResponse>]: never;
    }
  >(
    object: I_1
  ): QueryFinalizedBundlesResponse;
};
export declare const QueryFinalizedBundleRequest: {
  encode(message: QueryFinalizedBundleRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFinalizedBundleRequest;
  fromJSON(object: any): QueryFinalizedBundleRequest;
  toJSON(message: QueryFinalizedBundleRequest): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      id?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryFinalizedBundleRequest>]: never }
  >(
    base?: I | undefined
  ): QueryFinalizedBundleRequest;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      id?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
    } & {
      [K_1 in Exclude<keyof I_1, keyof QueryFinalizedBundleRequest>]: never;
    }
  >(
    object: I_1
  ): QueryFinalizedBundleRequest;
};
export declare const QueryFinalizedBundleResponse: {
  encode(
    message: QueryFinalizedBundleResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFinalizedBundleResponse;
  fromJSON(object: any): QueryFinalizedBundleResponse;
  toJSON(message: QueryFinalizedBundleResponse): unknown;
  create<
    I extends {
      finalized_bundles?:
        | {
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                }
              | undefined;
          }
        | undefined;
    } & {
      finalized_bundles?:
        | ({
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
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
            from_key?: string | undefined;
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
                  [K in Exclude<
                    keyof I["finalized_bundles"]["finalized_at"],
                    keyof FinalizedAt
                  >]: never;
                })
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
            stake_security?:
              | ({
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                } & {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                } & {
                  [K_1 in Exclude<
                    keyof I["finalized_bundles"]["stake_security"],
                    keyof StakeSecurity
                  >]: never;
                })
              | undefined;
          } & {
            [K_2 in Exclude<
              keyof I["finalized_bundles"],
              keyof FinalizedBundle
            >]: never;
          })
        | undefined;
    } & { [K_3 in Exclude<keyof I, "finalized_bundles">]: never }
  >(
    base?: I | undefined
  ): QueryFinalizedBundleResponse;
  fromPartial<
    I_1 extends {
      finalized_bundles?:
        | {
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
            stake_security?:
              | {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                }
              | undefined;
          }
        | undefined;
    } & {
      finalized_bundles?:
        | ({
            pool_id?: string | undefined;
            id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            from_index?: string | undefined;
            to_index?: string | undefined;
            from_key?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            finalized_at?:
              | {
                  height?: string | undefined;
                  timestamp?: string | undefined;
                }
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
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
            from_key?: string | undefined;
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
                  [K_4 in Exclude<
                    keyof I_1["finalized_bundles"]["finalized_at"],
                    keyof FinalizedAt
                  >]: never;
                })
              | undefined;
            storage_provider_id?: string | undefined;
            compression_id?: string | undefined;
            stake_security?:
              | ({
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                } & {
                  valid_vote_power?: string | undefined;
                  total_vote_power?: string | undefined;
                } & {
                  [K_5 in Exclude<
                    keyof I_1["finalized_bundles"]["stake_security"],
                    keyof StakeSecurity
                  >]: never;
                })
              | undefined;
          } & {
            [K_6 in Exclude<
              keyof I_1["finalized_bundles"],
              keyof FinalizedBundle
            >]: never;
          })
        | undefined;
    } & { [K_7 in Exclude<keyof I_1, "finalized_bundles">]: never }
  >(
    object: I_1
  ): QueryFinalizedBundleResponse;
};
export declare const QueryCurrentVoteStatusRequest: {
  encode(
    message: QueryCurrentVoteStatusRequest,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCurrentVoteStatusRequest;
  fromJSON(object: any): QueryCurrentVoteStatusRequest;
  toJSON(message: QueryCurrentVoteStatusRequest): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, "pool_id">]: never }
  >(
    base?: I | undefined
  ): QueryCurrentVoteStatusRequest;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "pool_id">]: never }
  >(
    object: I_1
  ): QueryCurrentVoteStatusRequest;
};
export declare const QueryCurrentVoteStatusResponse: {
  encode(
    message: QueryCurrentVoteStatusResponse,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCurrentVoteStatusResponse;
  fromJSON(object: any): QueryCurrentVoteStatusResponse;
  toJSON(message: QueryCurrentVoteStatusResponse): unknown;
  create<
    I extends {
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
    } & {
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCurrentVoteStatusResponse>]: never }
  >(
    base?: I | undefined
  ): QueryCurrentVoteStatusResponse;
  fromPartial<
    I_1 extends {
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
    } & {
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
    } & {
      [K_1 in Exclude<keyof I_1, keyof QueryCurrentVoteStatusResponse>]: never;
    }
  >(
    object: I_1
  ): QueryCurrentVoteStatusResponse;
};
export declare const QueryCanValidateRequest: {
  encode(message: QueryCanValidateRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanValidateRequest;
  fromJSON(object: any): QueryCanValidateRequest;
  toJSON(message: QueryCanValidateRequest): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      valaddress?: string | undefined;
    } & {
      pool_id?: string | undefined;
      valaddress?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanValidateRequest>]: never }
  >(
    base?: I | undefined
  ): QueryCanValidateRequest;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      valaddress?: string | undefined;
    } & {
      pool_id?: string | undefined;
      valaddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCanValidateRequest>]: never }
  >(
    object: I_1
  ): QueryCanValidateRequest;
};
export declare const QueryCanValidateResponse: {
  encode(message: QueryCanValidateResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanValidateResponse;
  fromJSON(object: any): QueryCanValidateResponse;
  toJSON(message: QueryCanValidateResponse): unknown;
  create<
    I extends {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanValidateResponse>]: never }
  >(
    base?: I | undefined
  ): QueryCanValidateResponse;
  fromPartial<
    I_1 extends {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCanValidateResponse>]: never }
  >(
    object: I_1
  ): QueryCanValidateResponse;
};
export declare const QueryCanProposeRequest: {
  encode(message: QueryCanProposeRequest, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanProposeRequest;
  fromJSON(object: any): QueryCanProposeRequest;
  toJSON(message: QueryCanProposeRequest): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      proposer?: string | undefined;
      from_index?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      proposer?: string | undefined;
      from_index?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanProposeRequest>]: never }
  >(
    base?: I | undefined
  ): QueryCanProposeRequest;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      proposer?: string | undefined;
      from_index?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      proposer?: string | undefined;
      from_index?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCanProposeRequest>]: never }
  >(
    object: I_1
  ): QueryCanProposeRequest;
};
export declare const QueryCanProposeResponse: {
  encode(message: QueryCanProposeResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanProposeResponse;
  fromJSON(object: any): QueryCanProposeResponse;
  toJSON(message: QueryCanProposeResponse): unknown;
  create<
    I extends {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanProposeResponse>]: never }
  >(
    base?: I | undefined
  ): QueryCanProposeResponse;
  fromPartial<
    I_1 extends {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCanProposeResponse>]: never }
  >(
    object: I_1
  ): QueryCanProposeResponse;
};
export declare const QueryCanVoteRequest: {
  encode(message: QueryCanVoteRequest, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteRequest;
  fromJSON(object: any): QueryCanVoteRequest;
  toJSON(message: QueryCanVoteRequest): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      voter?: string | undefined;
      storage_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      voter?: string | undefined;
      storage_id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanVoteRequest>]: never }
  >(
    base?: I | undefined
  ): QueryCanVoteRequest;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      voter?: string | undefined;
      storage_id?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      voter?: string | undefined;
      storage_id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCanVoteRequest>]: never }
  >(
    object: I_1
  ): QueryCanVoteRequest;
};
export declare const QueryCanVoteResponse: {
  encode(message: QueryCanVoteResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteResponse;
  fromJSON(object: any): QueryCanVoteResponse;
  toJSON(message: QueryCanVoteResponse): unknown;
  create<
    I extends {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCanVoteResponse>]: never }
  >(
    base?: I | undefined
  ): QueryCanVoteResponse;
  fromPartial<
    I_1 extends {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & {
      possible?: boolean | undefined;
      reason?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCanVoteResponse>]: never }
  >(
    object: I_1
  ): QueryCanVoteResponse;
};
/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryBundles {
  /** FinalizedBundles ... */
  FinalizedBundlesQuery(
    request: QueryFinalizedBundlesRequest
  ): Promise<QueryFinalizedBundlesResponse>;
  /** FinalizedBundle ... */
  FinalizedBundleQuery(
    request: QueryFinalizedBundleRequest
  ): Promise<FinalizedBundle>;
  /** CurrentVoteStatus ... */
  CurrentVoteStatus(
    request: QueryCurrentVoteStatusRequest
  ): Promise<QueryCurrentVoteStatusResponse>;
  /** CanValidate ... */
  CanValidate(
    request: QueryCanValidateRequest
  ): Promise<QueryCanValidateResponse>;
  /** CanPropose ... */
  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
  /** CanVote checks if voter on pool can still vote for the given bundle */
  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
}
export declare const QueryBundlesServiceName =
  "kyve.query.v1beta1.QueryBundles";
export declare class QueryBundlesClientImpl implements QueryBundles {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  FinalizedBundlesQuery(
    request: QueryFinalizedBundlesRequest
  ): Promise<QueryFinalizedBundlesResponse>;
  FinalizedBundleQuery(
    request: QueryFinalizedBundleRequest
  ): Promise<FinalizedBundle>;
  CurrentVoteStatus(
    request: QueryCurrentVoteStatusRequest
  ): Promise<QueryCurrentVoteStatusResponse>;
  CanValidate(
    request: QueryCanValidateRequest
  ): Promise<QueryCanValidateResponse>;
  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
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
