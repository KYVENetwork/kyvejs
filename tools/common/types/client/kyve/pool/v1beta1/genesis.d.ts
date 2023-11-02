import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Pool } from "./pool";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
  /** params ... */
  params?: Params | undefined;
  /** pool_list ... */
  pool_list: Pool[];
  /** pool_count ... */
  pool_count: string;
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
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      pool_list?:
        | {
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
          }[]
        | undefined;
      pool_count?: string | undefined;
    } & {
      params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & { [K in Exclude<keyof I["params"], keyof Params>]: never })
        | undefined;
      pool_list?:
        | ({
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
          }[] &
            ({
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
                    [K_1 in Exclude<
                      keyof I["pool_list"][number]["protocol"],
                      keyof import("./pool").Protocol
                    >]: never;
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
                    [K_2 in Exclude<
                      keyof I["pool_list"][number]["upgrade_plan"],
                      keyof import("./pool").UpgradePlan
                    >]: never;
                  })
                | undefined;
              current_storage_provider_id?: number | undefined;
              current_compression_id?: number | undefined;
            } & {
              [K_3 in Exclude<keyof I["pool_list"][number], keyof Pool>]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["pool_list"],
                keyof {
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
                }[]
              >]: never;
            })
        | undefined;
      pool_count?: string | undefined;
    } & { [K_5 in Exclude<keyof I, keyof GenesisState>]: never }
  >(
    base?: I | undefined
  ): GenesisState;
  fromPartial<
    I_1 extends {
      params?:
        | {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          }
        | undefined;
      pool_list?:
        | {
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
          }[]
        | undefined;
      pool_count?: string | undefined;
    } & {
      params?:
        | ({
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & {
            protocol_inflation_share?: string | undefined;
            pool_inflation_payout_rate?: string | undefined;
          } & { [K_6 in Exclude<keyof I_1["params"], keyof Params>]: never })
        | undefined;
      pool_list?:
        | ({
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
          }[] &
            ({
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
                    [K_7 in Exclude<
                      keyof I_1["pool_list"][number]["protocol"],
                      keyof import("./pool").Protocol
                    >]: never;
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
                    [K_8 in Exclude<
                      keyof I_1["pool_list"][number]["upgrade_plan"],
                      keyof import("./pool").UpgradePlan
                    >]: never;
                  })
                | undefined;
              current_storage_provider_id?: number | undefined;
              current_compression_id?: number | undefined;
            } & {
              [K_9 in Exclude<
                keyof I_1["pool_list"][number],
                keyof Pool
              >]: never;
            })[] & {
              [K_10 in Exclude<
                keyof I_1["pool_list"],
                keyof {
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
                }[]
              >]: never;
            })
        | undefined;
      pool_count?: string | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof GenesisState>]: never }
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
