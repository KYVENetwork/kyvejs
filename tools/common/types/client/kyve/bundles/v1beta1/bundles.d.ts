import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/**
 * BundleStatus represents the status of an evaluated bundle
 * proposal.
 */
export declare enum BundleStatus {
  /** BUNDLE_STATUS_UNSPECIFIED - BUNDLE_STATUS_UNSPECIFIED ... */
  BUNDLE_STATUS_UNSPECIFIED = 0,
  /** BUNDLE_STATUS_VALID - BUNDLE_STATUS_VALID ... */
  BUNDLE_STATUS_VALID = 1,
  /** BUNDLE_STATUS_INVALID - BUNDLE_STATUS_INVALID ... */
  BUNDLE_STATUS_INVALID = 2,
  /** BUNDLE_STATUS_NO_FUNDS - BUNDLE_STATUS_NO_FUNDS ... */
  BUNDLE_STATUS_NO_FUNDS = 3,
  /** BUNDLE_STATUS_NO_QUORUM - BUNDLE_STATUS_NO_QUORUM ... */
  BUNDLE_STATUS_NO_QUORUM = 4,
  /** BUNDLE_STATUS_DISABLED - BUNDLE_STATUS_DISABLED  ... */
  BUNDLE_STATUS_DISABLED = 5,
  UNRECOGNIZED = -1,
}
export declare function bundleStatusFromJSON(object: any): BundleStatus;
export declare function bundleStatusToJSON(object: BundleStatus): string;
/**
 * BundleProposal represents the current bundle proposal
 * of a storage pool
 */
export interface BundleProposal {
  /** pool_id is the id of the pool for which this proposal is for */
  pool_id: string;
  /** storage_id is the id with which the data can be retrieved from */
  storage_id: string;
  /** uploader is the address of the staker who submitted the current proposal */
  uploader: string;
  /** next_uploader is the address of the staker who should upload the next proposal */
  next_uploader: string;
  /** data_size the size of the data in bytes */
  data_size: string;
  /** bundle_size the size of the bundle (amount of data items) */
  bundle_size: string;
  /** to_key the key of the last data item in the bundle proposal */
  to_key: string;
  /** bundle_summary a string summary of the current proposal */
  bundle_summary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  data_hash: string;
  /** updated_at the last time this proposal was edited */
  updated_at: string;
  /** voters_valid list of all stakers who voted in favor for current proposal */
  voters_valid: string[];
  /** voters_invalid list of all stakers who voted against for current proposal */
  voters_invalid: string[];
  /** voters_abstain list of all stakers who voted abstain for current proposal */
  voters_abstain: string[];
  /** from_key the key of the first data item in the bundle proposal */
  from_key: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: number;
}
/**
 * FinalizedBundle represents a bundle proposal where the majority
 * agreed on its validity
 */
export interface FinalizedBundle {
  /** pool_id is the id of the pool for which this proposal is for */
  pool_id: string;
  /** id is a unique identifier for each finalized bundle in a pool */
  id: string;
  /** storage_id is the id with which the data can be retrieved from */
  storage_id: string;
  /** uploader is the address of the staker who submitted this bundle */
  uploader: string;
  /** from_index is the index from where the bundle starts (inclusive) */
  from_index: string;
  /** to_index is the index to which the bundle goes (exclusive) */
  to_index: string;
  /** to_key the key of the last data item in the bundle proposal */
  to_key: string;
  /** bundle_summary a string summary of the current proposal */
  bundle_summary: string;
  /** data_hash a sha256 hash of the raw compressed data */
  data_hash: string;
  /** finalized_at contains details of the block that finalized this bundle. */
  finalized_at?: FinalizedAt | undefined;
  /** from_key the key of the first data item in the bundle proposal */
  from_key: string;
  /** storage_provider_id the id of the storage provider where the bundle is stored */
  storage_provider_id: number;
  /** compression_id the id of the compression type with which the data was compressed */
  compression_id: number;
  /** stake_security */
  stake_security?: StakeSecurity | undefined;
}
/** FinalizedAt ... */
export interface FinalizedAt {
  /** height ... */
  height: string;
  /** timestamp ... */
  timestamp: string;
}
/** StakeSecurity stores information about total stake and valid votes with which the bundle got finalized. */
export interface StakeSecurity {
  /** valid_vote_power is the total amount of stake of all pool stakers which voted valid for the given bundle. */
  valid_vote_power: string;
  /** total_vote_power is the total amount of stake that was present during the finalization of the bundle */
  total_vote_power: string;
}
/** BundleVersionEntry ... */
export interface BundleVersionEntry {
  /** height ... */
  height: string;
  /** version ... */
  version: number;
}
/** BundleVersionMap ... */
export interface BundleVersionMap {
  /** versions ... */
  versions: BundleVersionEntry[];
}
/** RoundRobinSingleValidatorProgress ... */
export interface RoundRobinSingleValidatorProgress {
  /** address ... */
  address: string;
  /** progress ... */
  progress: string;
}
/** RoundRobinProgress ... */
export interface RoundRobinProgress {
  /** pool_id ... */
  pool_id: string;
  /** progress_list ... */
  progress_list: RoundRobinSingleValidatorProgress[];
}
export declare const BundleProposal: {
  encode(message: BundleProposal, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal;
  fromJSON(object: any): BundleProposal;
  toJSON(message: BundleProposal): unknown;
  create<
    I extends {
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
              [K in Exclude<keyof I["voters_valid"], keyof string[]>]: never;
            })
        | undefined;
      voters_invalid?:
        | (string[] &
            string[] & {
              [K_1 in Exclude<
                keyof I["voters_invalid"],
                keyof string[]
              >]: never;
            })
        | undefined;
      voters_abstain?:
        | (string[] &
            string[] & {
              [K_2 in Exclude<
                keyof I["voters_abstain"],
                keyof string[]
              >]: never;
            })
        | undefined;
      from_key?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K_3 in Exclude<keyof I, keyof BundleProposal>]: never }
  >(
    base?: I | undefined
  ): BundleProposal;
  fromPartial<
    I_1 extends {
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
              [K_4 in Exclude<
                keyof I_1["voters_valid"],
                keyof string[]
              >]: never;
            })
        | undefined;
      voters_invalid?:
        | (string[] &
            string[] & {
              [K_5 in Exclude<
                keyof I_1["voters_invalid"],
                keyof string[]
              >]: never;
            })
        | undefined;
      voters_abstain?:
        | (string[] &
            string[] & {
              [K_6 in Exclude<
                keyof I_1["voters_abstain"],
                keyof string[]
              >]: never;
            })
        | undefined;
      from_key?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof BundleProposal>]: never }
  >(
    object: I_1
  ): BundleProposal;
};
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
            [K in Exclude<keyof I["finalized_at"], keyof FinalizedAt>]: never;
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
            [K_3 in Exclude<
              keyof I_1["finalized_at"],
              keyof FinalizedAt
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
export declare const BundleVersionEntry: {
  encode(message: BundleVersionEntry, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): BundleVersionEntry;
  fromJSON(object: any): BundleVersionEntry;
  toJSON(message: BundleVersionEntry): unknown;
  create<
    I extends {
      height?: string | undefined;
      version?: number | undefined;
    } & {
      height?: string | undefined;
      version?: number | undefined;
    } & { [K in Exclude<keyof I, keyof BundleVersionEntry>]: never }
  >(
    base?: I | undefined
  ): BundleVersionEntry;
  fromPartial<
    I_1 extends {
      height?: string | undefined;
      version?: number | undefined;
    } & {
      height?: string | undefined;
      version?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BundleVersionEntry>]: never }
  >(
    object: I_1
  ): BundleVersionEntry;
};
export declare const BundleVersionMap: {
  encode(message: BundleVersionMap, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): BundleVersionMap;
  fromJSON(object: any): BundleVersionMap;
  toJSON(message: BundleVersionMap): unknown;
  create<
    I extends {
      versions?:
        | {
            height?: string | undefined;
            version?: number | undefined;
          }[]
        | undefined;
    } & {
      versions?:
        | ({
            height?: string | undefined;
            version?: number | undefined;
          }[] &
            ({
              height?: string | undefined;
              version?: number | undefined;
            } & {
              height?: string | undefined;
              version?: number | undefined;
            } & {
              [K in Exclude<
                keyof I["versions"][number],
                keyof BundleVersionEntry
              >]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["versions"],
                keyof {
                  height?: string | undefined;
                  version?: number | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_2 in Exclude<keyof I, "versions">]: never }
  >(
    base?: I | undefined
  ): BundleVersionMap;
  fromPartial<
    I_1 extends {
      versions?:
        | {
            height?: string | undefined;
            version?: number | undefined;
          }[]
        | undefined;
    } & {
      versions?:
        | ({
            height?: string | undefined;
            version?: number | undefined;
          }[] &
            ({
              height?: string | undefined;
              version?: number | undefined;
            } & {
              height?: string | undefined;
              version?: number | undefined;
            } & {
              [K_3 in Exclude<
                keyof I_1["versions"][number],
                keyof BundleVersionEntry
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I_1["versions"],
                keyof {
                  height?: string | undefined;
                  version?: number | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I_1, "versions">]: never }
  >(
    object: I_1
  ): BundleVersionMap;
};
export declare const RoundRobinSingleValidatorProgress: {
  encode(
    message: RoundRobinSingleValidatorProgress,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RoundRobinSingleValidatorProgress;
  fromJSON(object: any): RoundRobinSingleValidatorProgress;
  toJSON(message: RoundRobinSingleValidatorProgress): unknown;
  create<
    I extends {
      address?: string | undefined;
      progress?: string | undefined;
    } & {
      address?: string | undefined;
      progress?: string | undefined;
    } & {
      [K in Exclude<keyof I, keyof RoundRobinSingleValidatorProgress>]: never;
    }
  >(
    base?: I | undefined
  ): RoundRobinSingleValidatorProgress;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      progress?: string | undefined;
    } & {
      address?: string | undefined;
      progress?: string | undefined;
    } & {
      [K_1 in Exclude<
        keyof I_1,
        keyof RoundRobinSingleValidatorProgress
      >]: never;
    }
  >(
    object: I_1
  ): RoundRobinSingleValidatorProgress;
};
export declare const RoundRobinProgress: {
  encode(message: RoundRobinProgress, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): RoundRobinProgress;
  fromJSON(object: any): RoundRobinProgress;
  toJSON(message: RoundRobinProgress): unknown;
  create<
    I extends {
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
              [K in Exclude<
                keyof I["progress_list"][number],
                keyof RoundRobinSingleValidatorProgress
              >]: never;
            })[] & {
              [K_1 in Exclude<
                keyof I["progress_list"],
                keyof {
                  address?: string | undefined;
                  progress?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_2 in Exclude<keyof I, keyof RoundRobinProgress>]: never }
  >(
    base?: I | undefined
  ): RoundRobinProgress;
  fromPartial<
    I_1 extends {
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
              [K_3 in Exclude<
                keyof I_1["progress_list"][number],
                keyof RoundRobinSingleValidatorProgress
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I_1["progress_list"],
                keyof {
                  address?: string | undefined;
                  progress?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof RoundRobinProgress>]: never }
  >(
    object: I_1
  ): RoundRobinProgress;
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
