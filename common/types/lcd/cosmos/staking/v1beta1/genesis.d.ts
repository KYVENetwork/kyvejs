import _m0 from "protobufjs/minimal";
import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params?: Params;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    last_total_power: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    last_validator_powers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    /** delegations defines the delegations active at genesis. */
    delegations: Delegation[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbonding_delegations: UnbondingDelegation[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: Redelegation[];
    exported: boolean;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_validators?: number | undefined;
            max_entries?: number | undefined;
            historical_entries?: number | undefined;
            bond_denom?: string | undefined;
            min_commission_rate?: string | undefined;
        } | undefined;
        last_total_power?: Uint8Array | undefined;
        last_validator_powers?: {
            address?: string | undefined;
            power?: string | undefined;
        }[] | undefined;
        validators?: {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: Date | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: Date | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[] | undefined;
        delegations?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            shares?: string | undefined;
        }[] | undefined;
        unbonding_delegations?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        redelegations?: {
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        exported?: boolean | undefined;
    } & {
        params?: ({
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_validators?: number | undefined;
            max_entries?: number | undefined;
            historical_entries?: number | undefined;
            bond_denom?: string | undefined;
            min_commission_rate?: string | undefined;
        } & {
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & { [K in Exclude<keyof I["params"]["unbonding_time"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
            max_validators?: number | undefined;
            max_entries?: number | undefined;
            historical_entries?: number | undefined;
            bond_denom?: string | undefined;
            min_commission_rate?: string | undefined;
        } & { [K_1 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        last_total_power?: Uint8Array | undefined;
        last_validator_powers?: ({
            address?: string | undefined;
            power?: string | undefined;
        }[] & ({
            address?: string | undefined;
            power?: string | undefined;
        } & {
            address?: string | undefined;
            power?: string | undefined;
        } & { [K_2 in Exclude<keyof I["last_validator_powers"][number], keyof LastValidatorPower>]: never; })[] & { [K_3 in Exclude<keyof I["last_validator_powers"], keyof {
            address?: string | undefined;
            power?: string | undefined;
        }[]>]: never; }) | undefined;
        validators?: ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: Date | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: Date | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[] & ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: Date | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: Date | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } & {
            operator_address?: string | undefined;
            consensus_pubkey?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_4 in Exclude<keyof I["validators"][number]["consensus_pubkey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & { [K_5 in Exclude<keyof I["validators"][number]["description"], keyof import("./staking").Description>]: never; }) | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: Date | undefined;
            commission?: ({
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: Date | undefined;
            } & {
                commission_rates?: ({
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & { [K_6 in Exclude<keyof I["validators"][number]["commission"]["commission_rates"], keyof import("./staking").CommissionRates>]: never; }) | undefined;
                update_time?: Date | undefined;
            } & { [K_7 in Exclude<keyof I["validators"][number]["commission"], keyof import("./staking").Commission>]: never; }) | undefined;
            min_self_delegation?: string | undefined;
        } & { [K_8 in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_9 in Exclude<keyof I["validators"], keyof {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: Date | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: Date | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[]>]: never; }) | undefined;
        delegations?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            shares?: string | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            shares?: string | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            shares?: string | undefined;
        } & { [K_10 in Exclude<keyof I["delegations"][number], keyof Delegation>]: never; })[] & { [K_11 in Exclude<keyof I["delegations"], keyof {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            shares?: string | undefined;
        }[]>]: never; }) | undefined;
        unbonding_delegations?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: ({
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & { [K_12 in Exclude<keyof I["unbonding_delegations"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>]: never; })[] & { [K_13 in Exclude<keyof I["unbonding_delegations"][number]["entries"], keyof {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["unbonding_delegations"][number], keyof UnbondingDelegation>]: never; })[] & { [K_15 in Exclude<keyof I["unbonding_delegations"], keyof {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        redelegations?: ({
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[] | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
            entries?: ({
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[] & ({
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            } & {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            } & { [K_16 in Exclude<keyof I["redelegations"][number]["entries"][number], keyof import("./staking").RedelegationEntry>]: never; })[] & { [K_17 in Exclude<keyof I["redelegations"][number]["entries"], keyof {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I["redelegations"][number], keyof Redelegation>]: never; })[] & { [K_19 in Exclude<keyof I["redelegations"], keyof {
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: Date | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        exported?: boolean | undefined;
    } & { [K_20 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        power?: string | undefined;
    } & {
        address?: string | undefined;
        power?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LastValidatorPower>]: never; }>(object: I): LastValidatorPower;
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
