import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.pool.v1beta1";
/** PoolStatus ... */
export declare enum PoolStatus {
    /** POOL_STATUS_UNSPECIFIED - POOL_STATUS_UNSPECIFIED ... */
    POOL_STATUS_UNSPECIFIED = 0,
    /** POOL_STATUS_ACTIVE - POOL_STATUS_ACTIVE ... */
    POOL_STATUS_ACTIVE = 1,
    /** POOL_STATUS_PAUSED - POOL_STATUS_PAUSED ... */
    POOL_STATUS_PAUSED = 2,
    /** POOL_STATUS_NO_FUNDS - POOL_STATUS_NO_FUNDS ... */
    POOL_STATUS_NO_FUNDS = 3,
    /** POOL_STATUS_NOT_ENOUGH_DELEGATION - POOL_STATUS_NOT_ENOUGH_DELEGATION ... */
    POOL_STATUS_NOT_ENOUGH_DELEGATION = 4,
    /** POOL_STATUS_UPGRADING - POOL_STATUS_UPGRADING ... */
    POOL_STATUS_UPGRADING = 5,
    UNRECOGNIZED = -1
}
export declare function poolStatusFromJSON(object: any): PoolStatus;
export declare function poolStatusToJSON(object: PoolStatus): string;
/** Protocol ... */
export interface Protocol {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** last_upgrade ... */
    last_upgrade: string;
}
/** Upgrade ... */
export interface UpgradePlan {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** scheduled_at ... */
    scheduled_at: string;
    /** duration ... */
    duration: string;
}
/** Funder ... */
export interface Funder {
    /** address ... */
    address: string;
    /** amount ... */
    amount: string;
}
/** Pool ... */
export interface Pool {
    /** id ... */
    id: string;
    /** name ... */
    name: string;
    /** runtime ... */
    runtime: string;
    /** logo ... */
    logo: string;
    /** config ... */
    config: string;
    /** start_key ... */
    start_key: string;
    /** current_key ... */
    current_key: string;
    /** current_summary ... */
    current_summary: string;
    /** current_index ... */
    current_index: string;
    /** total_bundles ... */
    total_bundles: string;
    /** upload_interval ... */
    upload_interval: string;
    /** operating_cost ... */
    operating_cost: string;
    /** min_delegation ... */
    min_delegation: string;
    /** max_bundle_size ... */
    max_bundle_size: string;
    /** paused ... */
    paused: boolean;
    /** funders ... */
    funders: Funder[];
    /** total_funds ... */
    total_funds: string;
    /** protocol ... */
    protocol?: Protocol;
    /** upgrade_plan ... */
    upgrade_plan?: UpgradePlan;
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
    fromPartial<I extends {
        version?: string | undefined;
        binaries?: string | undefined;
        last_upgrade?: string | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        last_upgrade?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Protocol>]: never; }>(object: I): Protocol;
};
export declare const UpgradePlan: {
    encode(message: UpgradePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradePlan;
    fromJSON(object: any): UpgradePlan;
    toJSON(message: UpgradePlan): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UpgradePlan>]: never; }>(object: I): UpgradePlan;
};
export declare const Funder: {
    encode(message: Funder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Funder;
    fromJSON(object: any): Funder;
    toJSON(message: Funder): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        amount?: string | undefined;
    } & {
        address?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Funder>]: never; }>(object: I): Funder;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["funders"][number], keyof Funder>]: never; })[] & { [K_1 in Exclude<keyof I["funders"], keyof {
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
        } & { [K_2 in Exclude<keyof I["protocol"], keyof Protocol>]: never; }) | undefined;
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
        } & { [K_3 in Exclude<keyof I["upgrade_plan"], keyof UpgradePlan>]: never; }) | undefined;
        current_storage_provider_id?: number | undefined;
        current_compression_id?: number | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Pool>]: never; }>(object: I): Pool;
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
