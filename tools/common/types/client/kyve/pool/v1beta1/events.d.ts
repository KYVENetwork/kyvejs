import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "kyve.pool.v1beta1";
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
 * EventCreatePool ...
 * emitted_by: EndBlock(gov)
 */
export interface EventCreatePool {
  /** id is the unique ID of the pool. */
  id: string;
  /** name is the human readable name of the pool */
  name: string;
  /** runtime is the runtime name of the pool */
  runtime: string;
  /** logo is the logo url of the pool */
  logo: string;
  /**
   * config is either a json stringified config or an
   * external link pointing to the config
   */
  config: string;
  /**
   * start_key is the first key the pool should start
   * indexing
   */
  start_key: string;
  /**
   * upload_interval is the interval the pool should validate
   * bundles with
   */
  upload_interval: string;
  /**
   * inflation_share_weight is the fixed cost which gets paid out
   * to every successful uploader
   */
  inflation_share_weight: string;
  /**
   * min_delegation is the minimum amount of $KYVE the pool has
   * to have in order to produce bundles
   */
  min_delegation: string;
  /**
   * max_bundle_size is the max size a data bundle can have
   * (amount of data items)
   */
  max_bundle_size: string;
  /** version is the current version of the protocol nodes */
  version: string;
  /** binaries points to the current binaries of the protocol node */
  binaries: string;
  /**
   * storage_provider_id is the unique id of the storage provider
   * the pool is archiving the data on
   */
  storage_provider_id: number;
  /**
   * compression_id is the unique id of the compression type the bundles
   * get compressed with
   */
  compression_id: number;
}
/**
 * EventPoolEnabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolEnabled {
  /** id is the unique ID of the affected pool. */
  id: string;
}
/**
 * EventPoolDisabled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolDisabled {
  /** id is the unique ID of the affected pool. */
  id: string;
}
/**
 * EventRuntimeUpgradeScheduled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeScheduled {
  /** runtime is the name of the runtime that will be upgraded. */
  runtime: string;
  /** version is the new version that the runtime will be upgraded to. */
  version: string;
  /** scheduled_at is the time in UNIX seconds when the upgrade will occur. */
  scheduled_at: string;
  /**
   * duration is the amount of seconds the pool will be paused after the
   * scheduled time is reached. This will give node operators time to upgrade
   * their node.
   */
  duration: string;
  /** binaries contain download links for prebuilt binaries (in JSON format). */
  binaries: string;
  /** affected_pools contains all IDs of pools that will be affected by this runtime upgrade. */
  affected_pools: string[];
}
/**
 * EventRuntimeUpgradeCancelled ...
 * emitted_by: EndBlock(gov)
 */
export interface EventRuntimeUpgradeCancelled {
  /** runtime is the name of the runtime that will be upgraded. */
  runtime: string;
  /**
   * affected_pools contains all IDs of pools that are affected by the
   * cancellation of this runtime upgrade.
   */
  affected_pools: string[];
}
/**
 * EventPoolUpdated ...
 * emitted_by: EndBlock(gov)
 */
export interface EventPoolUpdated {
  /** id is the unique ID of the pool. */
  id: string;
  /** raw update string */
  raw_update_string: string;
  /** name is the human readable name of the pool */
  name: string;
  /** runtime is the runtime name of the pool */
  runtime: string;
  /** logo is the logo url of the pool */
  logo: string;
  /**
   * config is either a json stringified config or an
   * external link pointing to the config
   */
  config: string;
  /**
   * upload_interval is the interval the pool should validate
   * bundles with
   */
  upload_interval: string;
  /**
   * inflation_share_weight is the fixed cost which gets paid out
   * to every successful uploader
   */
  inflation_share_weight: string;
  /**
   * min_delegation is the minimum amount of $KYVE the pool has
   * to have in order to produce bundles
   */
  min_delegation: string;
  /**
   * max_bundle_size is the max size a data bundle can have
   * (amount of data items)
   */
  max_bundle_size: string;
  /**
   * storage_provider_id is the unique id of the storage provider
   * the pool is archiving the data on
   */
  storage_provider_id: number;
  /**
   * compression_id is the unique id of the compression type the bundles
   * get compressed with
   */
  compression_id: number;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolFundsSlashed {
  /** pool_id is the unique ID of the pool. */
  pool_id: string;
  /** address is the account address of the pool funder. */
  address: string;
  /** amount is the amount in ukyve the validator has lost due to the slash */
  amount: string;
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
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & { [K in Exclude<keyof I["old_params"], keyof Params>]: never })
        | undefined;
      new_params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
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
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      new_params?:
        | {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      payload?: string | undefined;
    } & {
      old_params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["old_params"], keyof Params>]: never;
          })
        | undefined;
      new_params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
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
export declare const EventCreatePool: {
  encode(message: EventCreatePool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreatePool;
  fromJSON(object: any): EventCreatePool;
  toJSON(message: EventCreatePool): unknown;
  create<
    I extends {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreatePool>]: never }
  >(
    base?: I | undefined
  ): EventCreatePool;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      version?: string | undefined;
      binaries?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventCreatePool>]: never }
  >(
    object: I_1
  ): EventCreatePool;
};
export declare const EventPoolEnabled: {
  encode(message: EventPoolEnabled, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolEnabled;
  fromJSON(object: any): EventPoolEnabled;
  toJSON(message: EventPoolEnabled): unknown;
  create<
    I extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never }
  >(
    base?: I | undefined
  ): EventPoolEnabled;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never }
  >(
    object: I_1
  ): EventPoolEnabled;
};
export declare const EventPoolDisabled: {
  encode(message: EventPoolDisabled, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolDisabled;
  fromJSON(object: any): EventPoolDisabled;
  toJSON(message: EventPoolDisabled): unknown;
  create<
    I extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never }
  >(
    base?: I | undefined
  ): EventPoolDisabled;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
    } & {
      id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never }
  >(
    object: I_1
  ): EventPoolDisabled;
};
export declare const EventRuntimeUpgradeScheduled: {
  encode(
    message: EventRuntimeUpgradeScheduled,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventRuntimeUpgradeScheduled;
  fromJSON(object: any): EventRuntimeUpgradeScheduled;
  toJSON(message: EventRuntimeUpgradeScheduled): unknown;
  create<
    I extends {
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
      affected_pools?: string[] | undefined;
    } & {
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
      affected_pools?:
        | (string[] &
            string[] & {
              [K in Exclude<keyof I["affected_pools"], keyof string[]>]: never;
            })
        | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventRuntimeUpgradeScheduled>]: never }
  >(
    base?: I | undefined
  ): EventRuntimeUpgradeScheduled;
  fromPartial<
    I_1 extends {
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
      affected_pools?: string[] | undefined;
    } & {
      runtime?: string | undefined;
      version?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
      binaries?: string | undefined;
      affected_pools?:
        | (string[] &
            string[] & {
              [K_2 in Exclude<
                keyof I_1["affected_pools"],
                keyof string[]
              >]: never;
            })
        | undefined;
    } & {
      [K_3 in Exclude<keyof I_1, keyof EventRuntimeUpgradeScheduled>]: never;
    }
  >(
    object: I_1
  ): EventRuntimeUpgradeScheduled;
};
export declare const EventRuntimeUpgradeCancelled: {
  encode(
    message: EventRuntimeUpgradeCancelled,
    writer?: _m0.Writer
  ): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventRuntimeUpgradeCancelled;
  fromJSON(object: any): EventRuntimeUpgradeCancelled;
  toJSON(message: EventRuntimeUpgradeCancelled): unknown;
  create<
    I extends {
      runtime?: string | undefined;
      affected_pools?: string[] | undefined;
    } & {
      runtime?: string | undefined;
      affected_pools?:
        | (string[] &
            string[] & {
              [K in Exclude<keyof I["affected_pools"], keyof string[]>]: never;
            })
        | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventRuntimeUpgradeCancelled>]: never }
  >(
    base?: I | undefined
  ): EventRuntimeUpgradeCancelled;
  fromPartial<
    I_1 extends {
      runtime?: string | undefined;
      affected_pools?: string[] | undefined;
    } & {
      runtime?: string | undefined;
      affected_pools?:
        | (string[] &
            string[] & {
              [K_2 in Exclude<
                keyof I_1["affected_pools"],
                keyof string[]
              >]: never;
            })
        | undefined;
    } & {
      [K_3 in Exclude<keyof I_1, keyof EventRuntimeUpgradeCancelled>]: never;
    }
  >(
    object: I_1
  ): EventRuntimeUpgradeCancelled;
};
export declare const EventPoolUpdated: {
  encode(message: EventPoolUpdated, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): EventPoolUpdated;
  fromJSON(object: any): EventPoolUpdated;
  toJSON(message: EventPoolUpdated): unknown;
  create<
    I extends {
      id?: string | undefined;
      raw_update_string?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      id?: string | undefined;
      raw_update_string?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventPoolUpdated>]: never }
  >(
    base?: I | undefined
  ): EventPoolUpdated;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
      raw_update_string?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & {
      id?: string | undefined;
      raw_update_string?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      storage_provider_id?: number | undefined;
      compression_id?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventPoolUpdated>]: never }
  >(
    object: I_1
  ): EventPoolUpdated;
};
export declare const EventPoolFundsSlashed: {
  encode(message: EventPoolFundsSlashed, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventPoolFundsSlashed;
  fromJSON(object: any): EventPoolFundsSlashed;
  toJSON(message: EventPoolFundsSlashed): unknown;
  create<
    I extends {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventPoolFundsSlashed>]: never }
  >(
    base?: I | undefined
  ): EventPoolFundsSlashed;
  fromPartial<
    I_1 extends {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & {
      pool_id?: string | undefined;
      address?: string | undefined;
      amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventPoolFundsSlashed>]: never }
  >(
    object: I_1
  ): EventPoolFundsSlashed;
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
