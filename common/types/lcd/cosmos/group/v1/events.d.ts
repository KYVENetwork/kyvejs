import _m0 from "protobufjs/minimal";
import { ProposalExecutorResult } from "./types";
export declare const protobufPackage = "cosmos.group.v1";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: string;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** address is the account address of the group member. */
    address: string;
}
export declare const EventCreateGroup: {
    encode(message: EventCreateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroup;
    fromJSON(object: any): EventCreateGroup;
    toJSON(message: EventCreateGroup): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
    } & {
        group_id?: string | undefined;
    } & { [K in Exclude<keyof I, "group_id">]: never; }>(object: I): EventCreateGroup;
};
export declare const EventUpdateGroup: {
    encode(message: EventUpdateGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroup;
    fromJSON(object: any): EventUpdateGroup;
    toJSON(message: EventUpdateGroup): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
    } & {
        group_id?: string | undefined;
    } & { [K in Exclude<keyof I, "group_id">]: never; }>(object: I): EventUpdateGroup;
};
export declare const EventCreateGroupPolicy: {
    encode(message: EventCreateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateGroupPolicy;
    fromJSON(object: any): EventCreateGroupPolicy;
    toJSON(message: EventCreateGroupPolicy): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(object: I): EventCreateGroupPolicy;
};
export declare const EventUpdateGroupPolicy: {
    encode(message: EventUpdateGroupPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateGroupPolicy;
    fromJSON(object: any): EventUpdateGroupPolicy;
    toJSON(message: EventUpdateGroupPolicy): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(object: I): EventUpdateGroupPolicy;
};
export declare const EventSubmitProposal: {
    encode(message: EventSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSubmitProposal;
    fromJSON(object: any): EventSubmitProposal;
    toJSON(message: EventSubmitProposal): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): EventSubmitProposal;
};
export declare const EventWithdrawProposal: {
    encode(message: EventWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawProposal;
    fromJSON(object: any): EventWithdrawProposal;
    toJSON(message: EventWithdrawProposal): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): EventWithdrawProposal;
};
export declare const EventVote: {
    encode(message: EventVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventVote;
    fromJSON(object: any): EventVote;
    toJSON(message: EventVote): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): EventVote;
};
export declare const EventExec: {
    encode(message: EventExec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventExec;
    fromJSON(object: any): EventExec;
    toJSON(message: EventExec): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        result?: ProposalExecutorResult | undefined;
    } & {
        proposal_id?: string | undefined;
        result?: ProposalExecutorResult | undefined;
    } & { [K in Exclude<keyof I, keyof EventExec>]: never; }>(object: I): EventExec;
};
export declare const EventLeaveGroup: {
    encode(message: EventLeaveGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLeaveGroup;
    fromJSON(object: any): EventLeaveGroup;
    toJSON(message: EventLeaveGroup): unknown;
    fromPartial<I extends {
        group_id?: string | undefined;
        address?: string | undefined;
    } & {
        group_id?: string | undefined;
        address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventLeaveGroup>]: never; }>(object: I): EventLeaveGroup;
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
