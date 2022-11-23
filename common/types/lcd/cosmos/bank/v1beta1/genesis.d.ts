import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { Metadata, Params } from "./bank";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the differents coins. */
    denom_metadata: Metadata[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: Coin[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            send_enabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            default_send_enabled?: boolean | undefined;
        } | undefined;
        balances?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        supply?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        denom_metadata?: {
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
        }[] | undefined;
    } & {
        params?: ({
            send_enabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            default_send_enabled?: boolean | undefined;
        } & {
            send_enabled?: ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & { [K in Exclude<keyof I["params"]["send_enabled"][number], keyof import("./bank").SendEnabled>]: never; })[] & { [K_1 in Exclude<keyof I["params"]["send_enabled"], keyof {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[]>]: never; }) | undefined;
            default_send_enabled?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        balances?: ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_3 in Exclude<keyof I["balances"][number]["coins"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I["balances"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["balances"][number], keyof Balance>]: never; })[] & { [K_6 in Exclude<keyof I["balances"], keyof {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        supply?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_7 in Exclude<keyof I["supply"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I["supply"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        denom_metadata?: ({
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
        }[] & ({
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
        } & {
            description?: string | undefined;
            denom_units?: ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] & ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            } & {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: (string[] & string[] & { [K_9 in Exclude<keyof I["denom_metadata"][number]["denom_units"][number]["aliases"], keyof string[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["denom_metadata"][number]["denom_units"][number], keyof import("./bank").DenomUnit>]: never; })[] & { [K_11 in Exclude<keyof I["denom_metadata"][number]["denom_units"], keyof {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[]>]: never; }) | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
        } & { [K_12 in Exclude<keyof I["denom_metadata"][number], keyof Metadata>]: never; })[] & { [K_13 in Exclude<keyof I["denom_metadata"], keyof {
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Balance>]: never; }>(object: I): Balance;
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
