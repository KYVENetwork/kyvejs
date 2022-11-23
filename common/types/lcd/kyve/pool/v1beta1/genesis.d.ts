import _m0 from "protobufjs/minimal";
import { Pool } from "./pool";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
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
    fromPartial<I extends {
        pool_list?: {
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
            operating_cost?: string | undefined;
            min_delegation?: string | undefined;
            max_bundle_size?: string | undefined;
            paused?: boolean | undefined;
            funders?: {
                address?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            total_funds?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            current_storage_provider_id?: number | undefined;
            current_compression_id?: number | undefined;
        }[] | undefined;
        pool_count?: string | undefined;
    } & {
        pool_list?: ({
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
            operating_cost?: string | undefined;
            min_delegation?: string | undefined;
            max_bundle_size?: string | undefined;
            paused?: boolean | undefined;
            funders?: {
                address?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            total_funds?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            current_storage_provider_id?: number | undefined;
            current_compression_id?: number | undefined;
        }[] & ({
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
            operating_cost?: string | undefined;
            min_delegation?: string | undefined;
            max_bundle_size?: string | undefined;
            paused?: boolean | undefined;
            funders?: {
                address?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            total_funds?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
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
            operating_cost?: string | undefined;
            min_delegation?: string | undefined;
            max_bundle_size?: string | undefined;
            paused?: boolean | undefined;
            funders?: ({
                address?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                address?: string | undefined;
                amount?: string | undefined;
            } & {
                address?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["pool_list"][number]["funders"][number], keyof import("./pool").Funder>]: never; })[] & { [K_1 in Exclude<keyof I["pool_list"][number]["funders"], keyof {
                address?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            total_funds?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & { [K_2 in Exclude<keyof I["pool_list"][number]["protocol"], keyof import("./pool").Protocol>]: never; }) | undefined;
            upgrade_plan?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } & { [K_3 in Exclude<keyof I["pool_list"][number]["upgrade_plan"], keyof import("./pool").UpgradePlan>]: never; }) | undefined;
            current_storage_provider_id?: number | undefined;
            current_compression_id?: number | undefined;
        } & { [K_4 in Exclude<keyof I["pool_list"][number], keyof Pool>]: never; })[] & { [K_5 in Exclude<keyof I["pool_list"], keyof {
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
            operating_cost?: string | undefined;
            min_delegation?: string | undefined;
            max_bundle_size?: string | undefined;
            paused?: boolean | undefined;
            funders?: {
                address?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            total_funds?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            current_storage_provider_id?: number | undefined;
            current_compression_id?: number | undefined;
        }[]>]: never; }) | undefined;
        pool_count?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
