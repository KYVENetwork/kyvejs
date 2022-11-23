import _m0 from "protobufjs/minimal";
import { QueryParamsResponse as QueryParamsResponse3 } from "../../../cosmos/gov/v1/query";
import { Params } from "../../bundles/v1beta1/params";
import { Params as Params1 } from "../../delegation/v1beta1/params";
import { Params as Params2 } from "../../fees/v1beta1/fees";
import { Params as Params4 } from "../../stakers/v1beta1/params";
export declare const protobufPackage = "kyve.query.v1beta1";
/** QueryParamsRequest ... */
export interface QueryParamsRequest {
}
/** QueryParamsResponse ... */
export interface QueryParamsResponse {
    /** bundles_params ... */
    bundles_params?: Params;
    /** delegation_params ... */
    delegation_params?: Params1;
    /** fees_params ... */
    fees_params?: Params2;
    /** gov_params ... */
    gov_params?: QueryParamsResponse3;
    /** stakers_params ... */
    stakers_params?: Params4;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        bundles_params?: {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
        } | undefined;
        delegation_params?: {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
        } | undefined;
        fees_params?: {
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?: {
                type?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            gas_refunds?: {
                type?: string | undefined;
                fraction?: string | undefined;
            }[] | undefined;
            min_initial_deposit_ratio?: string | undefined;
        } | undefined;
        gov_params?: {
            voting_params?: {
                voting_period?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            deposit_params?: {
                min_deposit?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                max_deposit_period?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            tally_params?: {
                quorum?: string | undefined;
                threshold?: string | undefined;
                veto_threshold?: string | undefined;
            } | undefined;
        } | undefined;
        stakers_params?: {
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
        } | undefined;
    } & {
        bundles_params?: ({
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
        } & {
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
        } & { [K in Exclude<keyof I["bundles_params"], keyof Params>]: never; }) | undefined;
        delegation_params?: ({
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
        } & {
            unbonding_delegation_time?: string | undefined;
            redelegation_cooldown?: string | undefined;
            redelegation_max_amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["delegation_params"], keyof Params1>]: never; }) | undefined;
        fees_params?: ({
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?: {
                type?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            gas_refunds?: {
                type?: string | undefined;
                fraction?: string | undefined;
            }[] | undefined;
            min_initial_deposit_ratio?: string | undefined;
        } & {
            min_gas_price?: string | undefined;
            burn_ratio?: string | undefined;
            gas_adjustments?: ({
                type?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                type?: string | undefined;
                amount?: string | undefined;
            } & {
                type?: string | undefined;
                amount?: string | undefined;
            } & { [K_2 in Exclude<keyof I["fees_params"]["gas_adjustments"][number], keyof import("../../fees/v1beta1/fees").GasAdjustment>]: never; })[] & { [K_3 in Exclude<keyof I["fees_params"]["gas_adjustments"], keyof {
                type?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            gas_refunds?: ({
                type?: string | undefined;
                fraction?: string | undefined;
            }[] & ({
                type?: string | undefined;
                fraction?: string | undefined;
            } & {
                type?: string | undefined;
                fraction?: string | undefined;
            } & { [K_4 in Exclude<keyof I["fees_params"]["gas_refunds"][number], keyof import("../../fees/v1beta1/fees").GasRefund>]: never; })[] & { [K_5 in Exclude<keyof I["fees_params"]["gas_refunds"], keyof {
                type?: string | undefined;
                fraction?: string | undefined;
            }[]>]: never; }) | undefined;
            min_initial_deposit_ratio?: string | undefined;
        } & { [K_6 in Exclude<keyof I["fees_params"], keyof Params2>]: never; }) | undefined;
        gov_params?: ({
            voting_params?: {
                voting_period?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            deposit_params?: {
                min_deposit?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                max_deposit_period?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            tally_params?: {
                quorum?: string | undefined;
                threshold?: string | undefined;
                veto_threshold?: string | undefined;
            } | undefined;
        } & {
            voting_params?: ({
                voting_period?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                voting_period?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & { [K_7 in Exclude<keyof I["gov_params"]["voting_params"]["voting_period"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["gov_params"]["voting_params"], "voting_period">]: never; }) | undefined;
            deposit_params?: ({
                min_deposit?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                max_deposit_period?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                min_deposit?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_9 in Exclude<keyof I["gov_params"]["deposit_params"]["min_deposit"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_10 in Exclude<keyof I["gov_params"]["deposit_params"]["min_deposit"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
                max_deposit_period?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & { [K_11 in Exclude<keyof I["gov_params"]["deposit_params"]["max_deposit_period"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["gov_params"]["deposit_params"], keyof import("../../../cosmos/gov/v1/gov").DepositParams>]: never; }) | undefined;
            tally_params?: ({
                quorum?: string | undefined;
                threshold?: string | undefined;
                veto_threshold?: string | undefined;
            } & {
                quorum?: string | undefined;
                threshold?: string | undefined;
                veto_threshold?: string | undefined;
            } & { [K_13 in Exclude<keyof I["gov_params"]["tally_params"], keyof import("../../../cosmos/gov/v1/gov").TallyParams>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["gov_params"], keyof QueryParamsResponse3>]: never; }) | undefined;
        stakers_params?: ({
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
        } & {
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
        } & { [K_15 in Exclude<keyof I["stakers_params"], keyof Params4>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof QueryParamsResponse>]: never; }>(object: I): QueryParamsResponse;
};
/** QueryPool ... */
export interface QueryParams {
    /** Pools queries for all pools. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryParamsClientImpl implements QueryParams {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
