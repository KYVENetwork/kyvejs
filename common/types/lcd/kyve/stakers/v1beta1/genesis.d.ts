import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { CommissionChangeEntry, LeavePoolEntry, QueueState, Staker, Valaccount } from "./stakers";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/** GenesisState defines the stakers module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** staker_list ... */
    staker_list: Staker[];
    /** valaccount_list ... */
    valaccount_list: Valaccount[];
    /** commission_change_entries ... */
    commission_change_entries: CommissionChangeEntry[];
    /** queue_state_commission ... */
    queue_state_commission?: QueueState;
    /** leave_pool_entries ... */
    leave_pool_entries: LeavePoolEntry[];
    /** queue_state_leave ... */
    queue_state_leave?: QueueState;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            commission_change_time?: string | undefined;
            leave_pool_time?: string | undefined;
        } | undefined;
        staker_list?: {
            address?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
        }[] | undefined;
        valaccount_list?: {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
        }[] | undefined;
        commission_change_entries?: {
            index?: string | undefined;
            staker?: string | undefined;
            commission?: string | undefined;
            creation_date?: string | undefined;
        }[] | undefined;
        queue_state_commission?: {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } | undefined;
        leave_pool_entries?: {
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            creation_date?: string | undefined;
        }[] | undefined;
        queue_state_leave?: {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } | undefined;
    } & {
        params?: ({
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
        } & { [K in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        staker_list?: ({
            address?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
        }[] & ({
            address?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
        } & {
            address?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
        } & { [K_1 in Exclude<keyof I["staker_list"][number], keyof Staker>]: never; })[] & { [K_2 in Exclude<keyof I["staker_list"], keyof {
            address?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
        }[]>]: never; }) | undefined;
        valaccount_list?: ({
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
        }[] & ({
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
        } & {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["valaccount_list"][number], keyof Valaccount>]: never; })[] & { [K_4 in Exclude<keyof I["valaccount_list"], keyof {
            pool_id?: string | undefined;
            staker?: string | undefined;
            valaddress?: string | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
        }[]>]: never; }) | undefined;
        commission_change_entries?: ({
            index?: string | undefined;
            staker?: string | undefined;
            commission?: string | undefined;
            creation_date?: string | undefined;
        }[] & ({
            index?: string | undefined;
            staker?: string | undefined;
            commission?: string | undefined;
            creation_date?: string | undefined;
        } & {
            index?: string | undefined;
            staker?: string | undefined;
            commission?: string | undefined;
            creation_date?: string | undefined;
        } & { [K_5 in Exclude<keyof I["commission_change_entries"][number], keyof CommissionChangeEntry>]: never; })[] & { [K_6 in Exclude<keyof I["commission_change_entries"], keyof {
            index?: string | undefined;
            staker?: string | undefined;
            commission?: string | undefined;
            creation_date?: string | undefined;
        }[]>]: never; }) | undefined;
        queue_state_commission?: ({
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & { [K_7 in Exclude<keyof I["queue_state_commission"], keyof QueueState>]: never; }) | undefined;
        leave_pool_entries?: ({
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            creation_date?: string | undefined;
        }[] & ({
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            creation_date?: string | undefined;
        } & {
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            creation_date?: string | undefined;
        } & { [K_8 in Exclude<keyof I["leave_pool_entries"][number], keyof LeavePoolEntry>]: never; })[] & { [K_9 in Exclude<keyof I["leave_pool_entries"], keyof {
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            creation_date?: string | undefined;
        }[]>]: never; }) | undefined;
        queue_state_leave?: ({
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & { [K_10 in Exclude<keyof I["queue_state_leave"], keyof QueueState>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
