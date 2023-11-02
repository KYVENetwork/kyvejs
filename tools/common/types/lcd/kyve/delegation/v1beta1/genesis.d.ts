import _m0 from "protobufjs/minimal";
import {
  DelegationData,
  DelegationEntry,
  DelegationSlash,
  Delegator,
  QueueState,
  RedelegationCooldown,
  UndelegationQueueEntry,
} from "./delegation";
import { Params } from "./params";
export declare const protobufPackage = "kyve.delegation.v1beta1";
/** GenesisState defines the delegation module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params | undefined;
  /** delegator_list ... */
  delegator_list: Delegator[];
  /** delegation_entry_list ... */
  delegation_entry_list: DelegationEntry[];
  /** delegation_data_list ... */
  delegation_data_list: DelegationData[];
  /** delegation_slash_list ... */
  delegation_slash_list: DelegationSlash[];
  /** undelegation_queue_entry_list ... */
  undelegation_queue_entry_list: UndelegationQueueEntry[];
  /** queue_state_undelegation ... */
  queue_state_undelegation?: QueueState | undefined;
  /** redelegation_cooldown_list ... */
  redelegation_cooldown_list: RedelegationCooldown[];
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
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      delegator_list?:
        | {
            staker?: string | undefined;
            delegator?: string | undefined;
            k_index?: string | undefined;
            initial_amount?: string | undefined;
          }[]
        | undefined;
      delegation_entry_list?:
        | {
            staker?: string | undefined;
            k_index?: string | undefined;
            value?: string | undefined;
          }[]
        | undefined;
      delegation_data_list?:
        | {
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
          }[]
        | undefined;
      delegation_slash_list?:
        | {
            staker?: string | undefined;
            k_index?: string | undefined;
            fraction?: string | undefined;
          }[]
        | undefined;
      undelegation_queue_entry_list?:
        | {
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
          }[]
        | undefined;
      queue_state_undelegation?:
        | {
            low_index?: string | undefined;
            high_index?: string | undefined;
          }
        | undefined;
      redelegation_cooldown_list?:
        | {
            address?: string | undefined;
            creation_date?: string | undefined;
          }[]
        | undefined;
    } & {
      params?:
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
          } & { [K in Exclude<keyof I["params"], keyof Params>]: never })
        | undefined;
      delegator_list?:
        | ({
            staker?: string | undefined;
            delegator?: string | undefined;
            k_index?: string | undefined;
            initial_amount?: string | undefined;
          }[] &
            ({
              staker?: string | undefined;
              delegator?: string | undefined;
              k_index?: string | undefined;
              initial_amount?: string | undefined;
            } & {
              staker?: string | undefined;
              delegator?: string | undefined;
              k_index?: string | undefined;
              initial_amount?: string | undefined;
            } & {
              [K_1 in Exclude<
                keyof I["delegator_list"][number],
                keyof Delegator
              >]: never;
            })[] & {
              [K_2 in Exclude<
                keyof I["delegator_list"],
                keyof {
                  staker?: string | undefined;
                  delegator?: string | undefined;
                  k_index?: string | undefined;
                  initial_amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      delegation_entry_list?:
        | ({
            staker?: string | undefined;
            k_index?: string | undefined;
            value?: string | undefined;
          }[] &
            ({
              staker?: string | undefined;
              k_index?: string | undefined;
              value?: string | undefined;
            } & {
              staker?: string | undefined;
              k_index?: string | undefined;
              value?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I["delegation_entry_list"][number],
                keyof DelegationEntry
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["delegation_entry_list"],
                keyof {
                  staker?: string | undefined;
                  k_index?: string | undefined;
                  value?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      delegation_data_list?:
        | ({
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
          }[] &
            ({
              staker?: string | undefined;
              current_rewards?: string | undefined;
              total_delegation?: string | undefined;
              latest_index_k?: string | undefined;
              delegator_count?: string | undefined;
              latest_index_was_undelegation?: boolean | undefined;
            } & {
              staker?: string | undefined;
              current_rewards?: string | undefined;
              total_delegation?: string | undefined;
              latest_index_k?: string | undefined;
              delegator_count?: string | undefined;
              latest_index_was_undelegation?: boolean | undefined;
            } & {
              [K_5 in Exclude<
                keyof I["delegation_data_list"][number],
                keyof DelegationData
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I["delegation_data_list"],
                keyof {
                  staker?: string | undefined;
                  current_rewards?: string | undefined;
                  total_delegation?: string | undefined;
                  latest_index_k?: string | undefined;
                  delegator_count?: string | undefined;
                  latest_index_was_undelegation?: boolean | undefined;
                }[]
              >]: never;
            })
        | undefined;
      delegation_slash_list?:
        | ({
            staker?: string | undefined;
            k_index?: string | undefined;
            fraction?: string | undefined;
          }[] &
            ({
              staker?: string | undefined;
              k_index?: string | undefined;
              fraction?: string | undefined;
            } & {
              staker?: string | undefined;
              k_index?: string | undefined;
              fraction?: string | undefined;
            } & {
              [K_7 in Exclude<
                keyof I["delegation_slash_list"][number],
                keyof DelegationSlash
              >]: never;
            })[] & {
              [K_8 in Exclude<
                keyof I["delegation_slash_list"],
                keyof {
                  staker?: string | undefined;
                  k_index?: string | undefined;
                  fraction?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      undelegation_queue_entry_list?:
        | ({
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
          }[] &
            ({
              index?: string | undefined;
              staker?: string | undefined;
              delegator?: string | undefined;
              amount?: string | undefined;
              creation_time?: string | undefined;
            } & {
              index?: string | undefined;
              staker?: string | undefined;
              delegator?: string | undefined;
              amount?: string | undefined;
              creation_time?: string | undefined;
            } & {
              [K_9 in Exclude<
                keyof I["undelegation_queue_entry_list"][number],
                keyof UndelegationQueueEntry
              >]: never;
            })[] & {
              [K_10 in Exclude<
                keyof I["undelegation_queue_entry_list"],
                keyof {
                  index?: string | undefined;
                  staker?: string | undefined;
                  delegator?: string | undefined;
                  amount?: string | undefined;
                  creation_time?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      queue_state_undelegation?:
        | ({
            low_index?: string | undefined;
            high_index?: string | undefined;
          } & {
            low_index?: string | undefined;
            high_index?: string | undefined;
          } & {
            [K_11 in Exclude<
              keyof I["queue_state_undelegation"],
              keyof QueueState
            >]: never;
          })
        | undefined;
      redelegation_cooldown_list?:
        | ({
            address?: string | undefined;
            creation_date?: string | undefined;
          }[] &
            ({
              address?: string | undefined;
              creation_date?: string | undefined;
            } & {
              address?: string | undefined;
              creation_date?: string | undefined;
            } & {
              [K_12 in Exclude<
                keyof I["redelegation_cooldown_list"][number],
                keyof RedelegationCooldown
              >]: never;
            })[] & {
              [K_13 in Exclude<
                keyof I["redelegation_cooldown_list"],
                keyof {
                  address?: string | undefined;
                  creation_date?: string | undefined;
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
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
          }
        | undefined;
      delegator_list?:
        | {
            staker?: string | undefined;
            delegator?: string | undefined;
            k_index?: string | undefined;
            initial_amount?: string | undefined;
          }[]
        | undefined;
      delegation_entry_list?:
        | {
            staker?: string | undefined;
            k_index?: string | undefined;
            value?: string | undefined;
          }[]
        | undefined;
      delegation_data_list?:
        | {
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
          }[]
        | undefined;
      delegation_slash_list?:
        | {
            staker?: string | undefined;
            k_index?: string | undefined;
            fraction?: string | undefined;
          }[]
        | undefined;
      undelegation_queue_entry_list?:
        | {
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
          }[]
        | undefined;
      queue_state_undelegation?:
        | {
            low_index?: string | undefined;
            high_index?: string | undefined;
          }
        | undefined;
      redelegation_cooldown_list?:
        | {
            address?: string | undefined;
            creation_date?: string | undefined;
          }[]
        | undefined;
    } & {
      params?:
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
          } & { [K_15 in Exclude<keyof I_1["params"], keyof Params>]: never })
        | undefined;
      delegator_list?:
        | ({
            staker?: string | undefined;
            delegator?: string | undefined;
            k_index?: string | undefined;
            initial_amount?: string | undefined;
          }[] &
            ({
              staker?: string | undefined;
              delegator?: string | undefined;
              k_index?: string | undefined;
              initial_amount?: string | undefined;
            } & {
              staker?: string | undefined;
              delegator?: string | undefined;
              k_index?: string | undefined;
              initial_amount?: string | undefined;
            } & {
              [K_16 in Exclude<
                keyof I_1["delegator_list"][number],
                keyof Delegator
              >]: never;
            })[] & {
              [K_17 in Exclude<
                keyof I_1["delegator_list"],
                keyof {
                  staker?: string | undefined;
                  delegator?: string | undefined;
                  k_index?: string | undefined;
                  initial_amount?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      delegation_entry_list?:
        | ({
            staker?: string | undefined;
            k_index?: string | undefined;
            value?: string | undefined;
          }[] &
            ({
              staker?: string | undefined;
              k_index?: string | undefined;
              value?: string | undefined;
            } & {
              staker?: string | undefined;
              k_index?: string | undefined;
              value?: string | undefined;
            } & {
              [K_18 in Exclude<
                keyof I_1["delegation_entry_list"][number],
                keyof DelegationEntry
              >]: never;
            })[] & {
              [K_19 in Exclude<
                keyof I_1["delegation_entry_list"],
                keyof {
                  staker?: string | undefined;
                  k_index?: string | undefined;
                  value?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      delegation_data_list?:
        | ({
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
          }[] &
            ({
              staker?: string | undefined;
              current_rewards?: string | undefined;
              total_delegation?: string | undefined;
              latest_index_k?: string | undefined;
              delegator_count?: string | undefined;
              latest_index_was_undelegation?: boolean | undefined;
            } & {
              staker?: string | undefined;
              current_rewards?: string | undefined;
              total_delegation?: string | undefined;
              latest_index_k?: string | undefined;
              delegator_count?: string | undefined;
              latest_index_was_undelegation?: boolean | undefined;
            } & {
              [K_20 in Exclude<
                keyof I_1["delegation_data_list"][number],
                keyof DelegationData
              >]: never;
            })[] & {
              [K_21 in Exclude<
                keyof I_1["delegation_data_list"],
                keyof {
                  staker?: string | undefined;
                  current_rewards?: string | undefined;
                  total_delegation?: string | undefined;
                  latest_index_k?: string | undefined;
                  delegator_count?: string | undefined;
                  latest_index_was_undelegation?: boolean | undefined;
                }[]
              >]: never;
            })
        | undefined;
      delegation_slash_list?:
        | ({
            staker?: string | undefined;
            k_index?: string | undefined;
            fraction?: string | undefined;
          }[] &
            ({
              staker?: string | undefined;
              k_index?: string | undefined;
              fraction?: string | undefined;
            } & {
              staker?: string | undefined;
              k_index?: string | undefined;
              fraction?: string | undefined;
            } & {
              [K_22 in Exclude<
                keyof I_1["delegation_slash_list"][number],
                keyof DelegationSlash
              >]: never;
            })[] & {
              [K_23 in Exclude<
                keyof I_1["delegation_slash_list"],
                keyof {
                  staker?: string | undefined;
                  k_index?: string | undefined;
                  fraction?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      undelegation_queue_entry_list?:
        | ({
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
          }[] &
            ({
              index?: string | undefined;
              staker?: string | undefined;
              delegator?: string | undefined;
              amount?: string | undefined;
              creation_time?: string | undefined;
            } & {
              index?: string | undefined;
              staker?: string | undefined;
              delegator?: string | undefined;
              amount?: string | undefined;
              creation_time?: string | undefined;
            } & {
              [K_24 in Exclude<
                keyof I_1["undelegation_queue_entry_list"][number],
                keyof UndelegationQueueEntry
              >]: never;
            })[] & {
              [K_25 in Exclude<
                keyof I_1["undelegation_queue_entry_list"],
                keyof {
                  index?: string | undefined;
                  staker?: string | undefined;
                  delegator?: string | undefined;
                  amount?: string | undefined;
                  creation_time?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      queue_state_undelegation?:
        | ({
            low_index?: string | undefined;
            high_index?: string | undefined;
          } & {
            low_index?: string | undefined;
            high_index?: string | undefined;
          } & {
            [K_26 in Exclude<
              keyof I_1["queue_state_undelegation"],
              keyof QueueState
            >]: never;
          })
        | undefined;
      redelegation_cooldown_list?:
        | ({
            address?: string | undefined;
            creation_date?: string | undefined;
          }[] &
            ({
              address?: string | undefined;
              creation_date?: string | undefined;
            } & {
              address?: string | undefined;
              creation_date?: string | undefined;
            } & {
              [K_27 in Exclude<
                keyof I_1["redelegation_cooldown_list"][number],
                keyof RedelegationCooldown
              >]: never;
            })[] & {
              [K_28 in Exclude<
                keyof I_1["redelegation_cooldown_list"],
                keyof {
                  address?: string | undefined;
                  creation_date?: string | undefined;
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
