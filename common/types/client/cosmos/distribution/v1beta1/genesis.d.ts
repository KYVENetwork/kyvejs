import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../base/v1beta1/coin";
import { DelegatorStartingInfo, FeePool, Params, ValidatorAccumulatedCommission, ValidatorCurrentRewards, ValidatorHistoricalRewards, ValidatorSlashEvent } from "./distribution";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
    /** delegator_address is the address of the delegator. */
    delegator_address: string;
    /** withdraw_address is the address to withdraw the delegation rewards to. */
    withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** outstanding_rewards represents the oustanding rewards of a validator. */
    outstanding_rewards: DecCoin[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** accumulated is the accumulated commission of a validator. */
    accumulated?: ValidatorAccumulatedCommission;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** period defines the period the historical rewards apply to. */
    period: string;
    /** rewards defines the historical rewards of a validator. */
    rewards?: ValidatorHistoricalRewards;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** rewards defines the current rewards of a validator. */
    rewards?: ValidatorCurrentRewards;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
    /** delegator_address is the address of the delegator. */
    delegator_address: string;
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** starting_info defines the starting info of a delegator. */
    starting_info?: DelegatorStartingInfo;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
    /** validator_address is the address of the validator. */
    validator_address: string;
    /** height defines the block height at which the slash event occured. */
    height: string;
    /** period is the period of the slash event. */
    period: string;
    /** validator_slash_event describes the slash event. */
    validator_slash_event?: ValidatorSlashEvent;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** fee_pool defines the fee pool at genesis. */
    fee_pool?: FeePool;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegator_withdraw_infos: DelegatorWithdrawInfo[];
    /** fee_pool defines the previous proposer at genesis. */
    previous_proposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstanding_rewards: ValidatorOutstandingRewardsRecord[];
    /** fee_pool defines the accumulated commisions of all validators at genesis. */
    validator_accumulated_commissions: ValidatorAccumulatedCommissionRecord[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validator_historical_rewards: ValidatorHistoricalRewardsRecord[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validator_current_rewards: ValidatorCurrentRewardsRecord[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegator_starting_infos: DelegatorStartingInfoRecord[];
    /** fee_pool defines the validator slash events at genesis. */
    validator_slash_events: ValidatorSlashEventRecord[];
}
export declare const DelegatorWithdrawInfo: {
    encode(message: DelegatorWithdrawInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorWithdrawInfo;
    fromJSON(object: any): DelegatorWithdrawInfo;
    toJSON(message: DelegatorWithdrawInfo): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        withdraw_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        withdraw_address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DelegatorWithdrawInfo>]: never; }>(object: I): DelegatorWithdrawInfo;
};
export declare const ValidatorOutstandingRewardsRecord: {
    encode(message: ValidatorOutstandingRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord;
    fromJSON(object: any): ValidatorOutstandingRewardsRecord;
    toJSON(message: ValidatorOutstandingRewardsRecord): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        outstanding_rewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        validator_address?: string | undefined;
        outstanding_rewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["outstanding_rewards"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["outstanding_rewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ValidatorOutstandingRewardsRecord>]: never; }>(object: I): ValidatorOutstandingRewardsRecord;
};
export declare const ValidatorAccumulatedCommissionRecord: {
    encode(message: ValidatorAccumulatedCommissionRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord;
    fromJSON(object: any): ValidatorAccumulatedCommissionRecord;
    toJSON(message: ValidatorAccumulatedCommissionRecord): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        accumulated?: {
            commission?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        validator_address?: string | undefined;
        accumulated?: ({
            commission?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            commission?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["accumulated"]["commission"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["accumulated"]["commission"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["accumulated"], "commission">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ValidatorAccumulatedCommissionRecord>]: never; }>(object: I): ValidatorAccumulatedCommissionRecord;
};
export declare const ValidatorHistoricalRewardsRecord: {
    encode(message: ValidatorHistoricalRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord;
    fromJSON(object: any): ValidatorHistoricalRewardsRecord;
    toJSON(message: ValidatorHistoricalRewardsRecord): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        period?: string | undefined;
        rewards?: {
            cumulative_reward_ratio?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            reference_count?: number | undefined;
        } | undefined;
    } & {
        validator_address?: string | undefined;
        period?: string | undefined;
        rewards?: ({
            cumulative_reward_ratio?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            reference_count?: number | undefined;
        } & {
            cumulative_reward_ratio?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["rewards"]["cumulative_reward_ratio"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"]["cumulative_reward_ratio"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            reference_count?: number | undefined;
        } & { [K_2 in Exclude<keyof I["rewards"], keyof ValidatorHistoricalRewards>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ValidatorHistoricalRewardsRecord>]: never; }>(object: I): ValidatorHistoricalRewardsRecord;
};
export declare const ValidatorCurrentRewardsRecord: {
    encode(message: ValidatorCurrentRewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord;
    fromJSON(object: any): ValidatorCurrentRewardsRecord;
    toJSON(message: ValidatorCurrentRewardsRecord): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        rewards?: {
            rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            period?: string | undefined;
        } | undefined;
    } & {
        validator_address?: string | undefined;
        rewards?: ({
            rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            period?: string | undefined;
        } & {
            rewards?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["rewards"]["rewards"][number], keyof DecCoin>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"]["rewards"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            period?: string | undefined;
        } & { [K_2 in Exclude<keyof I["rewards"], keyof ValidatorCurrentRewards>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ValidatorCurrentRewardsRecord>]: never; }>(object: I): ValidatorCurrentRewardsRecord;
};
export declare const DelegatorStartingInfoRecord: {
    encode(message: DelegatorStartingInfoRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfoRecord;
    fromJSON(object: any): DelegatorStartingInfoRecord;
    toJSON(message: DelegatorStartingInfoRecord): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        starting_info?: {
            previous_period?: string | undefined;
            stake?: string | undefined;
            height?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        starting_info?: ({
            previous_period?: string | undefined;
            stake?: string | undefined;
            height?: string | undefined;
        } & {
            previous_period?: string | undefined;
            stake?: string | undefined;
            height?: string | undefined;
        } & { [K in Exclude<keyof I["starting_info"], keyof DelegatorStartingInfo>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof DelegatorStartingInfoRecord>]: never; }>(object: I): DelegatorStartingInfoRecord;
};
export declare const ValidatorSlashEventRecord: {
    encode(message: ValidatorSlashEventRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEventRecord;
    fromJSON(object: any): ValidatorSlashEventRecord;
    toJSON(message: ValidatorSlashEventRecord): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        height?: string | undefined;
        period?: string | undefined;
        validator_slash_event?: {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } | undefined;
    } & {
        validator_address?: string | undefined;
        height?: string | undefined;
        period?: string | undefined;
        validator_slash_event?: ({
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } & {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } & { [K in Exclude<keyof I["validator_slash_event"], keyof ValidatorSlashEvent>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ValidatorSlashEventRecord>]: never; }>(object: I): ValidatorSlashEventRecord;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            community_tax?: string | undefined;
            base_proposer_reward?: string | undefined;
            bonus_proposer_reward?: string | undefined;
            withdraw_addr_enabled?: boolean | undefined;
        } | undefined;
        fee_pool?: {
            community_pool?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        delegator_withdraw_infos?: {
            delegator_address?: string | undefined;
            withdraw_address?: string | undefined;
        }[] | undefined;
        previous_proposer?: string | undefined;
        outstanding_rewards?: {
            validator_address?: string | undefined;
            outstanding_rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        validator_accumulated_commissions?: {
            validator_address?: string | undefined;
            accumulated?: {
                commission?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        validator_historical_rewards?: {
            validator_address?: string | undefined;
            period?: string | undefined;
            rewards?: {
                cumulative_reward_ratio?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                reference_count?: number | undefined;
            } | undefined;
        }[] | undefined;
        validator_current_rewards?: {
            validator_address?: string | undefined;
            rewards?: {
                rewards?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                period?: string | undefined;
            } | undefined;
        }[] | undefined;
        delegator_starting_infos?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            starting_info?: {
                previous_period?: string | undefined;
                stake?: string | undefined;
                height?: string | undefined;
            } | undefined;
        }[] | undefined;
        validator_slash_events?: {
            validator_address?: string | undefined;
            height?: string | undefined;
            period?: string | undefined;
            validator_slash_event?: {
                validator_period?: string | undefined;
                fraction?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        params?: ({
            community_tax?: string | undefined;
            base_proposer_reward?: string | undefined;
            bonus_proposer_reward?: string | undefined;
            withdraw_addr_enabled?: boolean | undefined;
        } & {
            community_tax?: string | undefined;
            base_proposer_reward?: string | undefined;
            bonus_proposer_reward?: string | undefined;
            withdraw_addr_enabled?: boolean | undefined;
        } & { [K in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        fee_pool?: ({
            community_pool?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            community_pool?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_1 in Exclude<keyof I["fee_pool"]["community_pool"][number], keyof DecCoin>]: never; })[] & { [K_2 in Exclude<keyof I["fee_pool"]["community_pool"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["fee_pool"], "community_pool">]: never; }) | undefined;
        delegator_withdraw_infos?: ({
            delegator_address?: string | undefined;
            withdraw_address?: string | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            withdraw_address?: string | undefined;
        } & {
            delegator_address?: string | undefined;
            withdraw_address?: string | undefined;
        } & { [K_4 in Exclude<keyof I["delegator_withdraw_infos"][number], keyof DelegatorWithdrawInfo>]: never; })[] & { [K_5 in Exclude<keyof I["delegator_withdraw_infos"], keyof {
            delegator_address?: string | undefined;
            withdraw_address?: string | undefined;
        }[]>]: never; }) | undefined;
        previous_proposer?: string | undefined;
        outstanding_rewards?: ({
            validator_address?: string | undefined;
            outstanding_rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            validator_address?: string | undefined;
            outstanding_rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            validator_address?: string | undefined;
            outstanding_rewards?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_6 in Exclude<keyof I["outstanding_rewards"][number]["outstanding_rewards"][number], keyof DecCoin>]: never; })[] & { [K_7 in Exclude<keyof I["outstanding_rewards"][number]["outstanding_rewards"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["outstanding_rewards"][number], keyof ValidatorOutstandingRewardsRecord>]: never; })[] & { [K_9 in Exclude<keyof I["outstanding_rewards"], keyof {
            validator_address?: string | undefined;
            outstanding_rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        validator_accumulated_commissions?: ({
            validator_address?: string | undefined;
            accumulated?: {
                commission?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            validator_address?: string | undefined;
            accumulated?: {
                commission?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            validator_address?: string | undefined;
            accumulated?: ({
                commission?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                commission?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_10 in Exclude<keyof I["validator_accumulated_commissions"][number]["accumulated"]["commission"][number], keyof DecCoin>]: never; })[] & { [K_11 in Exclude<keyof I["validator_accumulated_commissions"][number]["accumulated"]["commission"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["validator_accumulated_commissions"][number]["accumulated"], "commission">]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["validator_accumulated_commissions"][number], keyof ValidatorAccumulatedCommissionRecord>]: never; })[] & { [K_14 in Exclude<keyof I["validator_accumulated_commissions"], keyof {
            validator_address?: string | undefined;
            accumulated?: {
                commission?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        validator_historical_rewards?: ({
            validator_address?: string | undefined;
            period?: string | undefined;
            rewards?: {
                cumulative_reward_ratio?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                reference_count?: number | undefined;
            } | undefined;
        }[] & ({
            validator_address?: string | undefined;
            period?: string | undefined;
            rewards?: {
                cumulative_reward_ratio?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                reference_count?: number | undefined;
            } | undefined;
        } & {
            validator_address?: string | undefined;
            period?: string | undefined;
            rewards?: ({
                cumulative_reward_ratio?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                reference_count?: number | undefined;
            } & {
                cumulative_reward_ratio?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_15 in Exclude<keyof I["validator_historical_rewards"][number]["rewards"]["cumulative_reward_ratio"][number], keyof DecCoin>]: never; })[] & { [K_16 in Exclude<keyof I["validator_historical_rewards"][number]["rewards"]["cumulative_reward_ratio"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
                reference_count?: number | undefined;
            } & { [K_17 in Exclude<keyof I["validator_historical_rewards"][number]["rewards"], keyof ValidatorHistoricalRewards>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I["validator_historical_rewards"][number], keyof ValidatorHistoricalRewardsRecord>]: never; })[] & { [K_19 in Exclude<keyof I["validator_historical_rewards"], keyof {
            validator_address?: string | undefined;
            period?: string | undefined;
            rewards?: {
                cumulative_reward_ratio?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                reference_count?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        validator_current_rewards?: ({
            validator_address?: string | undefined;
            rewards?: {
                rewards?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                period?: string | undefined;
            } | undefined;
        }[] & ({
            validator_address?: string | undefined;
            rewards?: {
                rewards?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                period?: string | undefined;
            } | undefined;
        } & {
            validator_address?: string | undefined;
            rewards?: ({
                rewards?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                period?: string | undefined;
            } & {
                rewards?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_20 in Exclude<keyof I["validator_current_rewards"][number]["rewards"]["rewards"][number], keyof DecCoin>]: never; })[] & { [K_21 in Exclude<keyof I["validator_current_rewards"][number]["rewards"]["rewards"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
                period?: string | undefined;
            } & { [K_22 in Exclude<keyof I["validator_current_rewards"][number]["rewards"], keyof ValidatorCurrentRewards>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["validator_current_rewards"][number], keyof ValidatorCurrentRewardsRecord>]: never; })[] & { [K_24 in Exclude<keyof I["validator_current_rewards"], keyof {
            validator_address?: string | undefined;
            rewards?: {
                rewards?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                period?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        delegator_starting_infos?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            starting_info?: {
                previous_period?: string | undefined;
                stake?: string | undefined;
                height?: string | undefined;
            } | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            starting_info?: {
                previous_period?: string | undefined;
                stake?: string | undefined;
                height?: string | undefined;
            } | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            starting_info?: ({
                previous_period?: string | undefined;
                stake?: string | undefined;
                height?: string | undefined;
            } & {
                previous_period?: string | undefined;
                stake?: string | undefined;
                height?: string | undefined;
            } & { [K_25 in Exclude<keyof I["delegator_starting_infos"][number]["starting_info"], keyof DelegatorStartingInfo>]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I["delegator_starting_infos"][number], keyof DelegatorStartingInfoRecord>]: never; })[] & { [K_27 in Exclude<keyof I["delegator_starting_infos"], keyof {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            starting_info?: {
                previous_period?: string | undefined;
                stake?: string | undefined;
                height?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        validator_slash_events?: ({
            validator_address?: string | undefined;
            height?: string | undefined;
            period?: string | undefined;
            validator_slash_event?: {
                validator_period?: string | undefined;
                fraction?: string | undefined;
            } | undefined;
        }[] & ({
            validator_address?: string | undefined;
            height?: string | undefined;
            period?: string | undefined;
            validator_slash_event?: {
                validator_period?: string | undefined;
                fraction?: string | undefined;
            } | undefined;
        } & {
            validator_address?: string | undefined;
            height?: string | undefined;
            period?: string | undefined;
            validator_slash_event?: ({
                validator_period?: string | undefined;
                fraction?: string | undefined;
            } & {
                validator_period?: string | undefined;
                fraction?: string | undefined;
            } & { [K_28 in Exclude<keyof I["validator_slash_events"][number]["validator_slash_event"], keyof ValidatorSlashEvent>]: never; }) | undefined;
        } & { [K_29 in Exclude<keyof I["validator_slash_events"][number], keyof ValidatorSlashEventRecord>]: never; })[] & { [K_30 in Exclude<keyof I["validator_slash_events"], keyof {
            validator_address?: string | undefined;
            height?: string | undefined;
            period?: string | undefined;
            validator_slash_event?: {
                validator_period?: string | undefined;
                fraction?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_31 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
