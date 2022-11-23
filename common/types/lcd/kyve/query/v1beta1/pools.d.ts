import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BundleProposal } from "../../bundles/v1beta1/bundles";
import { Pool, PoolStatus } from "../../pool/v1beta1/pool";
export declare const protobufPackage = "kyve.query.v1beta1";
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** search ... */
    search: string;
    /** runtime ... */
    runtime: string;
    /** paused ... */
    paused: boolean;
    /** storage_provider_id ... */
    storage_provider_id: number;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
    /** pools ... */
    pools: PoolResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** PoolResponse ... */
export interface PoolResponse {
    /** id ... */
    id: string;
    /** data ... */
    data?: Pool;
    /** bundle_proposal ... */
    bundle_proposal?: BundleProposal;
    /** stakers ... */
    stakers: string[];
    /** total_stake ... */
    total_self_delegation: string;
    /** total_delegation ... */
    total_delegation: string;
    /** status ... */
    status: PoolStatus;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
    /** id defines the unique ID of the pool. */
    id: string;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool ... */
    pool?: PoolResponse;
}
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        search?: string | undefined;
        runtime?: string | undefined;
        paused?: boolean | undefined;
        storage_provider_id?: number | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
        search?: string | undefined;
        runtime?: string | undefined;
        paused?: boolean | undefined;
        storage_provider_id?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryPoolsRequest>]: never; }>(object: I): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
            id?: string | undefined;
            data?: {
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
            } | undefined;
            bundle_proposal?: {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } | undefined;
            stakers?: string[] | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        pools?: ({
            id?: string | undefined;
            data?: {
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
            } | undefined;
            bundle_proposal?: {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } | undefined;
            stakers?: string[] | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        }[] & ({
            id?: string | undefined;
            data?: {
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
            } | undefined;
            bundle_proposal?: {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } | undefined;
            stakers?: string[] | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        } & {
            id?: string | undefined;
            data?: ({
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
                } & { [K in Exclude<keyof I["pools"][number]["data"]["funders"][number], keyof import("../../pool/v1beta1/pool").Funder>]: never; })[] & { [K_1 in Exclude<keyof I["pools"][number]["data"]["funders"], keyof {
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
                } & { [K_2 in Exclude<keyof I["pools"][number]["data"]["protocol"], keyof import("../../pool/v1beta1/pool").Protocol>]: never; }) | undefined;
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
                } & { [K_3 in Exclude<keyof I["pools"][number]["data"]["upgrade_plan"], keyof import("../../pool/v1beta1/pool").UpgradePlan>]: never; }) | undefined;
                current_storage_provider_id?: number | undefined;
                current_compression_id?: number | undefined;
            } & { [K_4 in Exclude<keyof I["pools"][number]["data"], keyof Pool>]: never; }) | undefined;
            bundle_proposal?: ({
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } & {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: (string[] & string[] & { [K_5 in Exclude<keyof I["pools"][number]["bundle_proposal"]["voters_valid"], keyof string[]>]: never; }) | undefined;
                voters_invalid?: (string[] & string[] & { [K_6 in Exclude<keyof I["pools"][number]["bundle_proposal"]["voters_invalid"], keyof string[]>]: never; }) | undefined;
                voters_abstain?: (string[] & string[] & { [K_7 in Exclude<keyof I["pools"][number]["bundle_proposal"]["voters_abstain"], keyof string[]>]: never; }) | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } & { [K_8 in Exclude<keyof I["pools"][number]["bundle_proposal"], keyof BundleProposal>]: never; }) | undefined;
            stakers?: (string[] & string[] & { [K_9 in Exclude<keyof I["pools"][number]["stakers"], keyof string[]>]: never; }) | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        } & { [K_10 in Exclude<keyof I["pools"][number], keyof PoolResponse>]: never; })[] & { [K_11 in Exclude<keyof I["pools"], keyof {
            id?: string | undefined;
            data?: {
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
            } | undefined;
            bundle_proposal?: {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } | undefined;
            stakers?: string[] | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_12 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, keyof QueryPoolsResponse>]: never; }>(object: I): QueryPoolsResponse;
};
export declare const PoolResponse: {
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse;
    fromJSON(object: any): PoolResponse;
    toJSON(message: PoolResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        data?: {
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
        } | undefined;
        bundle_proposal?: {
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
        } | undefined;
        stakers?: string[] | undefined;
        total_self_delegation?: string | undefined;
        total_delegation?: string | undefined;
        status?: PoolStatus | undefined;
    } & {
        id?: string | undefined;
        data?: ({
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
            } & { [K in Exclude<keyof I["data"]["funders"][number], keyof import("../../pool/v1beta1/pool").Funder>]: never; })[] & { [K_1 in Exclude<keyof I["data"]["funders"], keyof {
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
            } & { [K_2 in Exclude<keyof I["data"]["protocol"], keyof import("../../pool/v1beta1/pool").Protocol>]: never; }) | undefined;
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
            } & { [K_3 in Exclude<keyof I["data"]["upgrade_plan"], keyof import("../../pool/v1beta1/pool").UpgradePlan>]: never; }) | undefined;
            current_storage_provider_id?: number | undefined;
            current_compression_id?: number | undefined;
        } & { [K_4 in Exclude<keyof I["data"], keyof Pool>]: never; }) | undefined;
        bundle_proposal?: ({
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
        } & {
            pool_id?: string | undefined;
            storage_id?: string | undefined;
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            data_size?: string | undefined;
            bundle_size?: string | undefined;
            to_key?: string | undefined;
            bundle_summary?: string | undefined;
            data_hash?: string | undefined;
            updated_at?: string | undefined;
            voters_valid?: (string[] & string[] & { [K_5 in Exclude<keyof I["bundle_proposal"]["voters_valid"], keyof string[]>]: never; }) | undefined;
            voters_invalid?: (string[] & string[] & { [K_6 in Exclude<keyof I["bundle_proposal"]["voters_invalid"], keyof string[]>]: never; }) | undefined;
            voters_abstain?: (string[] & string[] & { [K_7 in Exclude<keyof I["bundle_proposal"]["voters_abstain"], keyof string[]>]: never; }) | undefined;
            from_key?: string | undefined;
            storage_provider_id?: number | undefined;
            compression_id?: number | undefined;
        } & { [K_8 in Exclude<keyof I["bundle_proposal"], keyof BundleProposal>]: never; }) | undefined;
        stakers?: (string[] & string[] & { [K_9 in Exclude<keyof I["stakers"], keyof string[]>]: never; }) | undefined;
        total_self_delegation?: string | undefined;
        total_delegation?: string | undefined;
        status?: PoolStatus | undefined;
    } & { [K_10 in Exclude<keyof I, keyof PoolResponse>]: never; }>(object: I): PoolResponse;
};
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            id?: string | undefined;
            data?: {
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
            } | undefined;
            bundle_proposal?: {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } | undefined;
            stakers?: string[] | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        } | undefined;
    } & {
        pool?: ({
            id?: string | undefined;
            data?: {
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
            } | undefined;
            bundle_proposal?: {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } | undefined;
            stakers?: string[] | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        } & {
            id?: string | undefined;
            data?: ({
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
                } & { [K in Exclude<keyof I["pool"]["data"]["funders"][number], keyof import("../../pool/v1beta1/pool").Funder>]: never; })[] & { [K_1 in Exclude<keyof I["pool"]["data"]["funders"], keyof {
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
                } & { [K_2 in Exclude<keyof I["pool"]["data"]["protocol"], keyof import("../../pool/v1beta1/pool").Protocol>]: never; }) | undefined;
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
                } & { [K_3 in Exclude<keyof I["pool"]["data"]["upgrade_plan"], keyof import("../../pool/v1beta1/pool").UpgradePlan>]: never; }) | undefined;
                current_storage_provider_id?: number | undefined;
                current_compression_id?: number | undefined;
            } & { [K_4 in Exclude<keyof I["pool"]["data"], keyof Pool>]: never; }) | undefined;
            bundle_proposal?: ({
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } & {
                pool_id?: string | undefined;
                storage_id?: string | undefined;
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                data_size?: string | undefined;
                bundle_size?: string | undefined;
                to_key?: string | undefined;
                bundle_summary?: string | undefined;
                data_hash?: string | undefined;
                updated_at?: string | undefined;
                voters_valid?: (string[] & string[] & { [K_5 in Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>]: never; }) | undefined;
                voters_invalid?: (string[] & string[] & { [K_6 in Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>]: never; }) | undefined;
                voters_abstain?: (string[] & string[] & { [K_7 in Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>]: never; }) | undefined;
                from_key?: string | undefined;
                storage_provider_id?: number | undefined;
                compression_id?: number | undefined;
            } & { [K_8 in Exclude<keyof I["pool"]["bundle_proposal"], keyof BundleProposal>]: never; }) | undefined;
            stakers?: (string[] & string[] & { [K_9 in Exclude<keyof I["pool"]["stakers"], keyof string[]>]: never; }) | undefined;
            total_self_delegation?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
        } & { [K_10 in Exclude<keyof I["pool"], keyof PoolResponse>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, "pool">]: never; }>(object: I): QueryPoolResponse;
};
/** QueryPool ... */
export interface QueryPool {
    /** Pools queries for all pools. */
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Pool queries a pool by its Id. */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
}
export declare class QueryPoolClientImpl implements QueryPool {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
