import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FullStaker } from "./query";
export declare const protobufPackage = "kyve.query.v1beta1";
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
    /** delegator ... */
    delegator?: StakerDelegatorResponse;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** current_reward ... */
    current_reward: string;
    /** delegation_amount ... */
    delegation_amount: string;
    /** staker ... */
    staker: string;
}
/** QueryDelegatorsByStakerRequest ... */
export interface QueryDelegatorsByStakerRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** staker ... */
    staker: string;
}
/** QueryDelegatorsByStakerResponse ... */
export interface QueryDelegatorsByStakerResponse {
    /** delegators ... */
    delegators: StakerDelegatorResponse[];
    /** total_delegation ... (consider metadata object) */
    total_delegation: string;
    /** total_delegation ... */
    total_delegator_count: string;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryStakersByDelegatorRequest ... */
export interface QueryStakersByDelegatorRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** delegator ... */
    delegator: string;
}
/** QueryStakersByDelegatorResponse ... */
export interface QueryStakersByDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** stakers ... */
    stakers: DelegationForStakerResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
    /** staker ... */
    staker?: FullStaker;
    /** current_reward ... */
    current_reward: string;
    /** delegation_amount ... */
    delegation_amount: string;
}
export declare const QueryDelegatorRequest: {
    encode(message: QueryDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorRequest;
    fromJSON(object: any): QueryDelegatorRequest;
    toJSON(message: QueryDelegatorRequest): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        delegator?: string | undefined;
    } & {
        staker?: string | undefined;
        delegator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryDelegatorRequest>]: never; }>(object: I): QueryDelegatorRequest;
};
export declare const QueryDelegatorResponse: {
    encode(message: QueryDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorResponse;
    fromJSON(object: any): QueryDelegatorResponse;
    toJSON(message: QueryDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } | undefined;
    } & {
        delegator?: ({
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & { [K in Exclude<keyof I["delegator"], keyof StakerDelegatorResponse>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "delegator">]: never; }>(object: I): QueryDelegatorResponse;
};
export declare const StakerDelegatorResponse: {
    encode(message: StakerDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakerDelegatorResponse;
    fromJSON(object: any): StakerDelegatorResponse;
    toJSON(message: StakerDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
    } & {
        delegator?: string | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
    } & { [K in Exclude<keyof I, keyof StakerDelegatorResponse>]: never; }>(object: I): StakerDelegatorResponse;
};
export declare const QueryDelegatorsByStakerRequest: {
    encode(message: QueryDelegatorsByStakerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorsByStakerRequest;
    fromJSON(object: any): QueryDelegatorsByStakerRequest;
    toJSON(message: QueryDelegatorsByStakerRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        staker?: string | undefined;
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
        staker?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryDelegatorsByStakerRequest>]: never; }>(object: I): QueryDelegatorsByStakerRequest;
};
export declare const QueryDelegatorsByStakerResponse: {
    encode(message: QueryDelegatorsByStakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorsByStakerResponse;
    fromJSON(object: any): QueryDelegatorsByStakerResponse;
    toJSON(message: QueryDelegatorsByStakerResponse): unknown;
    fromPartial<I extends {
        delegators?: {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        }[] | undefined;
        total_delegation?: string | undefined;
        total_delegator_count?: string | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegators?: ({
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        }[] & ({
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & { [K in Exclude<keyof I["delegators"][number], keyof StakerDelegatorResponse>]: never; })[] & { [K_1 in Exclude<keyof I["delegators"], keyof {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        }[]>]: never; }) | undefined;
        total_delegation?: string | undefined;
        total_delegator_count?: string | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryDelegatorsByStakerResponse>]: never; }>(object: I): QueryDelegatorsByStakerResponse;
};
export declare const QueryStakersByDelegatorRequest: {
    encode(message: QueryStakersByDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByDelegatorRequest;
    fromJSON(object: any): QueryStakersByDelegatorRequest;
    toJSON(message: QueryStakersByDelegatorRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        delegator?: string | undefined;
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
        delegator?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryStakersByDelegatorRequest>]: never; }>(object: I): QueryStakersByDelegatorRequest;
};
export declare const QueryStakersByDelegatorResponse: {
    encode(message: QueryStakersByDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByDelegatorResponse;
    fromJSON(object: any): QueryStakersByDelegatorResponse;
    toJSON(message: QueryStakersByDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        stakers?: {
            staker?: {
                address?: string | undefined;
                metadata?: {
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } | undefined;
                } | undefined;
                self_delegation?: string | undefined;
                self_delegation_unbonding?: string | undefined;
                total_delegation?: string | undefined;
                delegator_count?: string | undefined;
                pools?: {
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[] | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        stakers?: ({
            staker?: {
                address?: string | undefined;
                metadata?: {
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } | undefined;
                } | undefined;
                self_delegation?: string | undefined;
                self_delegation_unbonding?: string | undefined;
                total_delegation?: string | undefined;
                delegator_count?: string | undefined;
                pools?: {
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[] | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
        }[] & ({
            staker?: {
                address?: string | undefined;
                metadata?: {
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } | undefined;
                } | undefined;
                self_delegation?: string | undefined;
                self_delegation_unbonding?: string | undefined;
                total_delegation?: string | undefined;
                delegator_count?: string | undefined;
                pools?: {
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[] | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
        } & {
            staker?: ({
                address?: string | undefined;
                metadata?: {
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } | undefined;
                } | undefined;
                self_delegation?: string | undefined;
                self_delegation_unbonding?: string | undefined;
                total_delegation?: string | undefined;
                delegator_count?: string | undefined;
                pools?: {
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                metadata?: ({
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } | undefined;
                } & {
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: ({
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } & {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } & { [K in Exclude<keyof I["stakers"][number]["staker"]["metadata"]["pending_commission_change"], keyof import("./query").CommissionChangeEntry>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["stakers"][number]["staker"]["metadata"], keyof import("./query").StakerMetadata>]: never; }) | undefined;
                self_delegation?: string | undefined;
                self_delegation_unbonding?: string | undefined;
                total_delegation?: string | undefined;
                delegator_count?: string | undefined;
                pools?: ({
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[] & ({
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                } & {
                    pool?: ({
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } & {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } & { [K_2 in Exclude<keyof I["stakers"][number]["staker"]["pools"][number]["pool"], keyof import("./query").BasicPool>]: never; }) | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                } & { [K_3 in Exclude<keyof I["stakers"][number]["staker"]["pools"][number], keyof import("./query").PoolMembership>]: never; })[] & { [K_4 in Exclude<keyof I["stakers"][number]["staker"]["pools"], keyof {
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["stakers"][number]["staker"], keyof FullStaker>]: never; }) | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
        } & { [K_6 in Exclude<keyof I["stakers"][number], keyof DelegationForStakerResponse>]: never; })[] & { [K_7 in Exclude<keyof I["stakers"], keyof {
            staker?: {
                address?: string | undefined;
                metadata?: {
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    pending_commission_change?: {
                        commission?: string | undefined;
                        creation_date?: string | undefined;
                    } | undefined;
                } | undefined;
                self_delegation?: string | undefined;
                self_delegation_unbonding?: string | undefined;
                total_delegation?: string | undefined;
                delegator_count?: string | undefined;
                pools?: {
                    pool?: {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        operating_cost?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                    } | undefined;
                    points?: string | undefined;
                    is_leaving?: boolean | undefined;
                    valaddress?: string | undefined;
                    balance?: string | undefined;
                }[] | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_8 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof QueryStakersByDelegatorResponse>]: never; }>(object: I): QueryStakersByDelegatorResponse;
};
export declare const DelegationForStakerResponse: {
    encode(message: DelegationForStakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationForStakerResponse;
    fromJSON(object: any): DelegationForStakerResponse;
    toJSON(message: DelegationForStakerResponse): unknown;
    fromPartial<I extends {
        staker?: {
            address?: string | undefined;
            metadata?: {
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                pending_commission_change?: {
                    commission?: string | undefined;
                    creation_date?: string | undefined;
                } | undefined;
            } | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?: {
                pool?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } | undefined;
                points?: string | undefined;
                is_leaving?: boolean | undefined;
                valaddress?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
    } & {
        staker?: ({
            address?: string | undefined;
            metadata?: {
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                pending_commission_change?: {
                    commission?: string | undefined;
                    creation_date?: string | undefined;
                } | undefined;
            } | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?: {
                pool?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } | undefined;
                points?: string | undefined;
                is_leaving?: boolean | undefined;
                valaddress?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            metadata?: ({
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                pending_commission_change?: {
                    commission?: string | undefined;
                    creation_date?: string | undefined;
                } | undefined;
            } & {
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                pending_commission_change?: ({
                    commission?: string | undefined;
                    creation_date?: string | undefined;
                } & {
                    commission?: string | undefined;
                    creation_date?: string | undefined;
                } & { [K in Exclude<keyof I["staker"]["metadata"]["pending_commission_change"], keyof import("./query").CommissionChangeEntry>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["staker"]["metadata"], keyof import("./query").StakerMetadata>]: never; }) | undefined;
            self_delegation?: string | undefined;
            self_delegation_unbonding?: string | undefined;
            total_delegation?: string | undefined;
            delegator_count?: string | undefined;
            pools?: ({
                pool?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } | undefined;
                points?: string | undefined;
                is_leaving?: boolean | undefined;
                valaddress?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                pool?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } | undefined;
                points?: string | undefined;
                is_leaving?: boolean | undefined;
                valaddress?: string | undefined;
                balance?: string | undefined;
            } & {
                pool?: ({
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } & {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } & { [K_2 in Exclude<keyof I["staker"]["pools"][number]["pool"], keyof import("./query").BasicPool>]: never; }) | undefined;
                points?: string | undefined;
                is_leaving?: boolean | undefined;
                valaddress?: string | undefined;
                balance?: string | undefined;
            } & { [K_3 in Exclude<keyof I["staker"]["pools"][number], keyof import("./query").PoolMembership>]: never; })[] & { [K_4 in Exclude<keyof I["staker"]["pools"], keyof {
                pool?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    operating_cost?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: import("../../pool/v1beta1/pool").PoolStatus | undefined;
                } | undefined;
                points?: string | undefined;
                is_leaving?: boolean | undefined;
                valaddress?: string | undefined;
                balance?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["staker"], keyof FullStaker>]: never; }) | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof DelegationForStakerResponse>]: never; }>(object: I): DelegationForStakerResponse;
};
/** QueryDelegation contains all rpc requests related to direct delegation data */
export interface QueryDelegation {
    /** Delegator returns delegation information for a specific delegator of a specific staker. */
    Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse>;
    /**
     * DelegatorsByStaker returns all delegators that have delegated to the given staker
     * This query is paginated.
     */
    DelegatorsByStaker(request: QueryDelegatorsByStakerRequest): Promise<QueryDelegatorsByStakerResponse>;
    /**
     * StakersByPoolAndDelegator returns all stakers the given delegator has delegated to.
     * This query is paginated.
     */
    StakersByDelegator(request: QueryStakersByDelegatorRequest): Promise<QueryStakersByDelegatorResponse>;
}
export declare class QueryDelegationClientImpl implements QueryDelegation {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse>;
    DelegatorsByStaker(request: QueryDelegatorsByStakerRequest): Promise<QueryDelegatorsByStakerResponse>;
    StakersByDelegator(request: QueryStakersByDelegatorRequest): Promise<QueryStakersByDelegatorResponse>;
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
