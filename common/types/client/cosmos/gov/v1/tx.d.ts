import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption } from "./gov";
export declare const protobufPackage = "cosmos.gov.v1";
/** Since: cosmos-sdk 0.46 */
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    messages: Any[];
    initial_deposit: Coin[];
    proposer: string;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposal_id: string;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
    /** content is the proposal's content. */
    content?: Any;
    /** authority must be the gov module address. */
    authority: string;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposal_id: string;
    voter: string;
    option: VoteOption;
    metadata: string;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
    proposal_id: string;
    voter: string;
    options: WeightedVoteOption[];
    metadata: string;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposal_id: string;
    depositor: string;
    amount: Coin[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial<I extends {
        messages?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
        initial_deposit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        proposer?: string | undefined;
        metadata?: string | undefined;
    } & {
        messages?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["messages"][number], keyof Any>]: never; })[] & { [K_1 in Exclude<keyof I["messages"], keyof {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
        initial_deposit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["initial_deposit"][number], keyof Coin>]: never; })[] & { [K_3 in Exclude<keyof I["initial_deposit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        proposer?: string | undefined;
        metadata?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof MsgSubmitProposal>]: never; }>(object: I): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & { [K in Exclude<keyof I, "proposal_id">]: never; }>(object: I): MsgSubmitProposalResponse;
};
export declare const MsgExecLegacyContent: {
    encode(message: MsgExecLegacyContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent;
    fromJSON(object: any): MsgExecLegacyContent;
    toJSON(message: MsgExecLegacyContent): unknown;
    fromPartial<I extends {
        content?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        content?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["content"], keyof Any>]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgExecLegacyContent>]: never; }>(object: I): MsgExecLegacyContent;
};
export declare const MsgExecLegacyContentResponse: {
    encode(_: MsgExecLegacyContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponse;
    fromJSON(_: any): MsgExecLegacyContentResponse;
    toJSON(_: MsgExecLegacyContentResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgExecLegacyContentResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        voter?: string | undefined;
        option?: VoteOption | undefined;
        metadata?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        voter?: string | undefined;
        option?: VoteOption | undefined;
        metadata?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgVote>]: never; }>(object: I): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgVoteResponse;
};
export declare const MsgVoteWeighted: {
    encode(message: MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        voter?: string | undefined;
        options?: {
            option?: VoteOption | undefined;
            weight?: string | undefined;
        }[] | undefined;
        metadata?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        voter?: string | undefined;
        options?: ({
            option?: VoteOption | undefined;
            weight?: string | undefined;
        }[] & ({
            option?: VoteOption | undefined;
            weight?: string | undefined;
        } & {
            option?: VoteOption | undefined;
            weight?: string | undefined;
        } & { [K in Exclude<keyof I["options"][number], keyof WeightedVoteOption>]: never; })[] & { [K_1 in Exclude<keyof I["options"], keyof {
            option?: VoteOption | undefined;
            weight?: string | undefined;
        }[]>]: never; }) | undefined;
        metadata?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgVoteWeighted>]: never; }>(object: I): MsgVoteWeighted;
};
export declare const MsgVoteWeightedResponse: {
    encode(_: MsgVoteWeightedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromJSON(_: any): MsgVoteWeightedResponse;
    toJSON(_: MsgVoteWeightedResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgVoteWeightedResponse;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        depositor?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        proposal_id?: string | undefined;
        depositor?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgDeposit>]: never; }>(object: I): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgDepositResponse;
};
/** Msg defines the gov Msg service. */
export interface Msg {
    /** SubmitProposal defines a method to create new proposal given a content. */
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /**
     * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
     * to execute a legacy content-based proposal.
     */
    ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
    /** Vote defines a method to add a vote on a specific proposal. */
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
    VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    /** Deposit defines a method to add deposit on a specific proposal. */
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
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
