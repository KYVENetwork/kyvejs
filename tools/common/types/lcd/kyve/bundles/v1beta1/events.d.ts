import _m0 from "protobufjs/minimal";
import { BundleStatus } from "./bundles";
import { Params } from "./params";
import { VoteType } from "./tx";
export declare const protobufPackage = "kyve.bundles.v1beta1";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  old_params?: Params | undefined;
  /** new_params is the module's new parameters. */
  new_params?: Params | undefined;
  /** payload is the parameter updates that were performed. */
  payload: string;
}
/**
 * EventBundleVote is an event emitted when a protocol node votes on a bundle.
 * emitted_by: MsgVoteBundleProposal
 */
export interface EventBundleVote {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the account staker of the protocol node. */
  staker: string;
  /** storage_id is the unique ID of the bundle. */
  storage_id: string;
  /** vote is for what the validator voted with */
  vote: VoteType;
}
/**
 * EventBundleProposed is submitted by the MsgSubmitBundleProposal message
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventBundleProposed {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** internal id for the KYVE-bundle */
  id: string;
  /**
   * storage_id is the ID to retrieve to data item from the configured storage provider
   * e.g. the ARWEAVE-id
   */
  storage_id: string;
  /** Address of the uploader/proposer of the bundle */
  uploader: string;
  /** data_size size in bytes of the data */
  data_size: string;
  /** from_index starting index of the bundle (inclusive) */
  from_index: string;
  /** bundle_size amount of data items in the bundle */
  bundle_size: string;
  /** from_key the key of the first data item in the bundle */
  from_key: string;
  /** to_key the key of the last data item in the bundle */
  to_key: string;
  /**
   * bundle_summary is a short string holding some useful information of
   * the bundle which will get stored on-chain
   */
  bundle_summary: string;
  /** data_hash is a sha256 hash of the raw compressed data */
  data_hash: string;
  /** proposed_at the unix time when the bundle was proposed */
  proposed_at: string;
  /**
   * storage_provider_id the unique id of the storage provider where
   * the data of the bundle is tored
   */
  storage_provider_id: number;
  /**
   * compression_id  the unique id of the compression type the data
   * of the bundle was compressed with
   */
  compression_id: number;
}
/**
 * EventBundleFinalized is an event emitted when a bundle is finalised.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventBundleFinalized {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** internal id for the KYVE-bundle */
  id: string;
  /** total voting power which voted for valid */
  valid: string;
  /** total voting power which voted for invalid */
  invalid: string;
  /** total voting power which voted for abstain */
  abstain: string;
  /** total voting power of the pool */
  total: string;
  /** status of the finalized bundle */
  status: BundleStatus;
  /** amount which funders provided to the total bundle reward (in ukyve) */
  funders_payout: string;
  /** amount which the inflation pool provided to the total reward (in ukyve) */
  inflation_payout: string;
  /** rewards transferred to treasury (in ukyve) */
  reward_treasury: string;
  /** rewardUploader rewards directly transferred to uploader (in ukyve) */
  reward_uploader: string;
  /** rewardDelegation rewards distributed among all delegators (in ukyve) */
  reward_delegation: string;
  /** rewardTotal the total bundle reward */
  reward_total: string;
  /** finalized_at the block height where the bundle got finalized */
  finalized_at: string;
  /** uploader the address of the uploader of this bundle */
  uploader: string;
  /** next_uploader the address of the next uploader after this bundle */
  next_uploader: string;
}
/**
 * EventClaimedUploaderRole is an event emitted when an uploader claims the uploader role
 * emitted_by: MsgClaimUploaderRole
 */
export interface EventClaimedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** id internal id for the KYVE-bundle */
  id: string;
  /**
   * new_uploader the address of the participant who claimed
   * the free uploader role
   */
  new_uploader: string;
}
/**
 * EventSkippedUploaderRole is an event emitted when an uploader skips the upload
 * emitted_by: MsgSkipUploaderRole
 */
export interface EventSkippedUploaderRole {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** id internal id for the KYVE-bundle */
  id: string;
  /** previous_uploader is the address of the staker who skipped his uploader role */
  previous_uploader: string;
  /** new_uploader is the address of the new uploader who got automatically selected */
  new_uploader: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointIncreased {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the address of the staker who received the point */
  staker: string;
  /** current_points is the amount of points the staker has now */
  current_points: string;
}
/**
 * EventPointIncreased is an event emitted when a staker receives a point
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventPointsReset {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** staker is the address of the staker who has zero points now */
  staker: string;
}
export declare const EventUpdateParams: {
  encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateParams;
  fromJSON(object: any): EventUpdateParams;
  toJSON(message: EventUpdateParams): unknown;
  create<
    I extends {
      old_params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
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
          } & { [K in Exclude<keyof I["old_params"], keyof Params>]: never })
        | undefined;
      new_params?:
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
          } & { [K_1 in Exclude<keyof I["new_params"], keyof Params>]: never })
        | undefined;
      payload?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventUpdateParams>]: never }
  >(
    base?: I | undefined
  ): EventUpdateParams;
  fromPartial<
    I_1 extends {
      old_params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
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
            [K_3 in Exclude<keyof I_1["old_params"], keyof Params>]: never;
          })
        | undefined;
      new_params?:
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
            [K_4 in Exclude<keyof I_1["new_params"], keyof Params>]: never;
          })
        | undefined;
      payload?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof EventUpdateParams>]: never }
  >(
    object: I_1
  ): EventUpdateParams;
};
export declare const EventBundleVote: {
  encode(message: EventBundleVote, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleVote;
  fromJSON(object: any): EventBundleVote;
  toJSON(message: EventBundleVote): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      storage_id?: string | undefined;
      vote?: VoteType | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      storage_id?: string | undefined;
      vote?: VoteType | undefined;
    } & { [K in Exclude<keyof I, keyof EventBundleVote>]: never }
  >(
    base?: I | undefined
  ): EventBundleVote;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      storage_id?: string | undefined;
      vote?: VoteType | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      storage_id?: string | undefined;
      vote?: VoteType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventBundleVote>]: never }
  >(
    object: I_1
  ): EventBundleVote;
};
export declare const EventBundleProposed: {
  encode(message: EventBundleProposed, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleProposed;
  fromJSON(object: any): EventBundleProposed;
  toJSON(message: EventBundleProposed): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      storage_id?: string | undefined;
      uploader?: string | undefined;
      data_size?: string | undefined;
      from_index?: string | undefined;
      bundle_size?: string | undefined;
      from_key?: string | undefined;
      to_key?: string | undefined;
      bundle_summary?: string | undefined;
      data_hash?: string | undefined;
      proposed_at?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      storage_id?: string | undefined;
      uploader?: string | undefined;
      data_size?: string | undefined;
      from_index?: string | undefined;
      bundle_size?: string | undefined;
      from_key?: string | undefined;
      to_key?: string | undefined;
      bundle_summary?: string | undefined;
      data_hash?: string | undefined;
      proposed_at?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventBundleProposed>]: never }
  >(
    base?: I | undefined
  ): EventBundleProposed;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      storage_id?: string | undefined;
      uploader?: string | undefined;
      data_size?: string | undefined;
      from_index?: string | undefined;
      bundle_size?: string | undefined;
      from_key?: string | undefined;
      to_key?: string | undefined;
      bundle_summary?: string | undefined;
      data_hash?: string | undefined;
      proposed_at?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      storage_id?: string | undefined;
      uploader?: string | undefined;
      data_size?: string | undefined;
      from_index?: string | undefined;
      bundle_size?: string | undefined;
      from_key?: string | undefined;
      to_key?: string | undefined;
      bundle_summary?: string | undefined;
      data_hash?: string | undefined;
      proposed_at?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventBundleProposed>]: never }
  >(
    object: I_1
  ): EventBundleProposed;
};
export declare const EventBundleFinalized: {
  encode(message: EventBundleFinalized, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventBundleFinalized;
  fromJSON(object: any): EventBundleFinalized;
  toJSON(message: EventBundleFinalized): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
      status?: BundleStatus | undefined;
      funders_payout?: string | undefined;
      inflation_payout?: string | undefined;
      reward_treasury?: string | undefined;
      reward_uploader?: string | undefined;
      reward_delegation?: string | undefined;
      reward_total?: string | undefined;
      finalized_at?: string | undefined;
      uploader?: string | undefined;
      next_uploader?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
      status?: BundleStatus | undefined;
      funders_payout?: string | undefined;
      inflation_payout?: string | undefined;
      reward_treasury?: string | undefined;
      reward_uploader?: string | undefined;
      reward_delegation?: string | undefined;
      reward_total?: string | undefined;
      finalized_at?: string | undefined;
      uploader?: string | undefined;
      next_uploader?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventBundleFinalized>]: never }
  >(
    base?: I | undefined
  ): EventBundleFinalized;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
      status?: BundleStatus | undefined;
      funders_payout?: string | undefined;
      inflation_payout?: string | undefined;
      reward_treasury?: string | undefined;
      reward_uploader?: string | undefined;
      reward_delegation?: string | undefined;
      reward_total?: string | undefined;
      finalized_at?: string | undefined;
      uploader?: string | undefined;
      next_uploader?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      valid?: string | undefined;
      invalid?: string | undefined;
      abstain?: string | undefined;
      total?: string | undefined;
      status?: BundleStatus | undefined;
      funders_payout?: string | undefined;
      inflation_payout?: string | undefined;
      reward_treasury?: string | undefined;
      reward_uploader?: string | undefined;
      reward_delegation?: string | undefined;
      reward_total?: string | undefined;
      finalized_at?: string | undefined;
      uploader?: string | undefined;
      next_uploader?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventBundleFinalized>]: never }
  >(
    object: I_1
  ): EventBundleFinalized;
};
export declare const EventClaimedUploaderRole: {
  encode(message: EventClaimedUploaderRole, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventClaimedUploaderRole;
  fromJSON(object: any): EventClaimedUploaderRole;
  toJSON(message: EventClaimedUploaderRole): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      new_uploader?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      new_uploader?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventClaimedUploaderRole>]: never }
  >(
    base?: I | undefined
  ): EventClaimedUploaderRole;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      new_uploader?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      new_uploader?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventClaimedUploaderRole>]: never }
  >(
    object: I_1
  ): EventClaimedUploaderRole;
};
export declare const EventSkippedUploaderRole: {
  encode(message: EventSkippedUploaderRole, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventSkippedUploaderRole;
  fromJSON(object: any): EventSkippedUploaderRole;
  toJSON(message: EventSkippedUploaderRole): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      previous_uploader?: string | undefined;
      new_uploader?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      previous_uploader?: string | undefined;
      new_uploader?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventSkippedUploaderRole>]: never }
  >(
    base?: I | undefined
  ): EventSkippedUploaderRole;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      id?: string | undefined;
      previous_uploader?: string | undefined;
      new_uploader?: string | undefined;
    } & {
      pool_id?: string | undefined;
      id?: string | undefined;
      previous_uploader?: string | undefined;
      new_uploader?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventSkippedUploaderRole>]: never }
  >(
    object: I_1
  ): EventSkippedUploaderRole;
};
export declare const EventPointIncreased: {
  encode(message: EventPointIncreased, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPointIncreased;
  fromJSON(object: any): EventPointIncreased;
  toJSON(message: EventPointIncreased): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      current_points?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      current_points?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventPointIncreased>]: never }
  >(
    base?: I | undefined
  ): EventPointIncreased;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
      current_points?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
      current_points?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventPointIncreased>]: never }
  >(
    object: I_1
  ): EventPointIncreased;
};
export declare const EventPointsReset: {
  encode(message: EventPointsReset, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPointsReset;
  fromJSON(object: any): EventPointsReset;
  toJSON(message: EventPointsReset): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventPointsReset>]: never }
  >(
    base?: I | undefined
  ): EventPointsReset;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & {
      pool_id?: string | undefined;
      staker?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventPointsReset>]: never }
  >(
    object: I_1
  ): EventPointsReset;
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
