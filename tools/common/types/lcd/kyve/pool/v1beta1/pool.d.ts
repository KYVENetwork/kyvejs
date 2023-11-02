import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** PoolStatus ... */
export declare enum PoolStatus {
  /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
  POOL_STATUS_UNSPECIFIED = "POOL_STATUS_UNSPECIFIED",
  /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
  POOL_STATUS_ACTIVE = "POOL_STATUS_ACTIVE",
  /** POOL_STATUS_DISABLED - POOL_STATUS_DISABLED ... */
  POOL_STATUS_DISABLED = "POOL_STATUS_DISABLED",
  /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
  POOL_STATUS_NO_FUNDS = "POOL_STATUS_NO_FUNDS",
  /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
  POOL_STATUS_NOT_ENOUGH_DELEGATION = "POOL_STATUS_NOT_ENOUGH_DELEGATION",
  /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
  POOL_STATUS_UPGRADING = "POOL_STATUS_UPGRADING",
  UNRECOGNIZED = "UNRECOGNIZED",
}
export declare function poolStatusFromJSON(object: any): PoolStatus;
export declare function poolStatusToJSON(object: PoolStatus): string;
export declare function poolStatusToNumber(object: PoolStatus): number;
/**
 * Protocol holds all info about the current pool version and the
 * available binaries for participating as a validator in a pool
 */
export interface Protocol {
  /** version holds the current software version tag of the pool binaries */
  version: string;
  /**
   * binaries is a stringified json object which holds binaries in the
   * current version for multiple platforms and architectures
   */
  binaries: string;
  /** last_upgrade is the unix time the pool was upgraded the last time */
  last_upgrade: string;
}
/** Upgrade holds all info when a pool has a scheduled upgrade */
export interface UpgradePlan {
  /** version is the new software version tag of the upgrade */
  version: string;
  /**
   * binaries is the new stringified json object which holds binaries in the
   * upgrade version for multiple platforms and architectures
   */
  binaries: string;
  /** scheduled_at is the unix time the upgrade is supposed to be done */
  scheduled_at: string;
  /**
   * duration is the time in seconds how long the pool should halt
   * during the upgrade to give all validators a chance of switching
   * to the new binaries
   */
  duration: string;
}
/** Pool ... */
export interface Pool {
  /** id - unique identifier of the pool, can not be changed */
  id: string;
  /** name is a human readable name for the pool */
  name: string;
  /** runtime specified which protocol and which version needs is required */
  runtime: string;
  /** logo is a link to an image file */
  logo: string;
  /**
   * config is either a JSON encoded string or a link to an external storage provider.
   * This is up to the implementation of the protocol node.
   */
  config: string;
  /** start_key ... */
  start_key: string;
  /** current_key ... */
  current_key: string;
  /** current_summary ... */
  current_summary: string;
  /** current_index ... */
  current_index: string;
  /** total_bundles is the number of total finalized bundles */
  total_bundles: string;
  /** upload_interval ... */
  upload_interval: string;
  /** inflation_share_weight ... */
  inflation_share_weight: string;
  /** min_delegation ... */
  min_delegation: string;
  /** max_bundle_size ... */
  max_bundle_size: string;
  /**
   * disabled is true when the pool is disabled.
   * Can only be done via governance.
   */
  disabled: boolean;
  /** protocol ... */
  protocol?: Protocol | undefined;
  /** upgrade_plan ... */
  upgrade_plan?: UpgradePlan | undefined;
  /** storage_provider_id ... */
  current_storage_provider_id: number;
  /** compression_id ... */
  current_compression_id: number;
}
export declare const Protocol: {
  encode(message: Protocol, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Protocol;
  fromJSON(object: any): Protocol;
  toJSON(message: Protocol): unknown;
  create<
    I extends {
      version?: string | undefined;
      binaries?: string | undefined;
      last_upgrade?: string | undefined;
    } & {
      version?: string | undefined;
      binaries?: string | undefined;
      last_upgrade?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Protocol>]: never }
  >(
    base?: I | undefined
  ): Protocol;
  fromPartial<
    I_1 extends {
      version?: string | undefined;
      binaries?: string | undefined;
      last_upgrade?: string | undefined;
    } & {
      version?: string | undefined;
      binaries?: string | undefined;
      last_upgrade?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Protocol>]: never }
  >(
    object: I_1
  ): Protocol;
};
export declare const UpgradePlan: {
  encode(message: UpgradePlan, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradePlan;
  fromJSON(object: any): UpgradePlan;
  toJSON(message: UpgradePlan): unknown;
  create<
    I extends {
      version?: string | undefined;
      binaries?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
    } & {
      version?: string | undefined;
      binaries?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UpgradePlan>]: never }
  >(
    base?: I | undefined
  ): UpgradePlan;
  fromPartial<
    I_1 extends {
      version?: string | undefined;
      binaries?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
    } & {
      version?: string | undefined;
      binaries?: string | undefined;
      scheduled_at?: string | undefined;
      duration?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UpgradePlan>]: never }
  >(
    object: I_1
  ): UpgradePlan;
};
export declare const Pool: {
  encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
  fromJSON(object: any): Pool;
  toJSON(message: Pool): unknown;
  create<
    I extends {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      current_key?: string | undefined;
      current_summary?: string | undefined;
      current_index?: string | undefined;
      total_bundles?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      disabled?: boolean | undefined;
      protocol?:
        | {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
          }
        | undefined;
      upgrade_plan?:
        | {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
          }
        | undefined;
      current_storage_provider_id?: number | undefined;
      current_compression_id?: number | undefined;
    } & {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      current_key?: string | undefined;
      current_summary?: string | undefined;
      current_index?: string | undefined;
      total_bundles?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      disabled?: boolean | undefined;
      protocol?:
        | ({
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
          } & {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
          } & { [K in Exclude<keyof I["protocol"], keyof Protocol>]: never })
        | undefined;
      upgrade_plan?:
        | ({
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
          } & {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
          } & {
            [K_1 in Exclude<keyof I["upgrade_plan"], keyof UpgradePlan>]: never;
          })
        | undefined;
      current_storage_provider_id?: number | undefined;
      current_compression_id?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Pool>]: never }
  >(
    base?: I | undefined
  ): Pool;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      current_key?: string | undefined;
      current_summary?: string | undefined;
      current_index?: string | undefined;
      total_bundles?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      disabled?: boolean | undefined;
      protocol?:
        | {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
          }
        | undefined;
      upgrade_plan?:
        | {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
          }
        | undefined;
      current_storage_provider_id?: number | undefined;
      current_compression_id?: number | undefined;
    } & {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      config?: string | undefined;
      start_key?: string | undefined;
      current_key?: string | undefined;
      current_summary?: string | undefined;
      current_index?: string | undefined;
      total_bundles?: string | undefined;
      upload_interval?: string | undefined;
      inflation_share_weight?: string | undefined;
      min_delegation?: string | undefined;
      max_bundle_size?: string | undefined;
      disabled?: boolean | undefined;
      protocol?:
        | ({
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
          } & {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
          } & {
            [K_3 in Exclude<keyof I_1["protocol"], keyof Protocol>]: never;
          })
        | undefined;
      upgrade_plan?:
        | ({
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
          } & {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
          } & {
            [K_4 in Exclude<
              keyof I_1["upgrade_plan"],
              keyof UpgradePlan
            >]: never;
          })
        | undefined;
      current_storage_provider_id?: number | undefined;
      current_compression_id?: number | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Pool>]: never }
  >(
    object: I_1
  ): Pool;
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
