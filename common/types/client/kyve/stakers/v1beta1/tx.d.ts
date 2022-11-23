import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.stakers.v1beta1";
/** MsgStakePool defines a SDK message for staking in a pool. */
export interface MsgCreateStaker {
    /** creator ... */
    creator: string;
    /** amount ... */
    amount: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgCreateStakerResponse {
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
    /** creator ... */
    creator: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo */
    logo: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {
}
/** MsgUpdateCommission ... */
export interface MsgUpdateCommission {
    /** creator ... */
    creator: string;
    /** commission ... */
    commission: string;
}
/** MsgUpdateCommissionResponse ... */
export interface MsgUpdateCommissionResponse {
}
/** MsgJoinPool ... */
export interface MsgJoinPool {
    /** creator ... */
    creator: string;
    /** pool_id ... */
    pool_id: string;
    /** valaddress ... */
    valaddress: string;
    /** amount ... */
    amount: string;
}
/** MsgJoinPoolResponse ... */
export interface MsgJoinPoolResponse {
}
/** MsgLeavePool ... */
export interface MsgLeavePool {
    /** creator ... */
    creator: string;
    /** pool_id ... */
    pool_id: string;
}
/** MsgReactivateStakerResponse ... */
export interface MsgLeavePoolResponse {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/stakers parameters to update. */
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgCreateStaker: {
    encode(message: MsgCreateStaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStaker;
    fromJSON(object: any): MsgCreateStaker;
    toJSON(message: MsgCreateStaker): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateStaker>]: never; }>(object: I): MsgCreateStaker;
};
export declare const MsgCreateStakerResponse: {
    encode(_: MsgCreateStakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateStakerResponse;
    fromJSON(_: any): MsgCreateStakerResponse;
    toJSON(_: MsgCreateStakerResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCreateStakerResponse;
};
export declare const MsgUpdateMetadata: {
    encode(message: MsgUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata;
    fromJSON(object: any): MsgUpdateMetadata;
    toJSON(message: MsgUpdateMetadata): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & {
        creator?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateMetadata>]: never; }>(object: I): MsgUpdateMetadata;
};
export declare const MsgUpdateMetadataResponse: {
    encode(_: MsgUpdateMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadataResponse;
    fromJSON(_: any): MsgUpdateMetadataResponse;
    toJSON(_: MsgUpdateMetadataResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateMetadataResponse;
};
export declare const MsgUpdateCommission: {
    encode(message: MsgUpdateCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommission;
    fromJSON(object: any): MsgUpdateCommission;
    toJSON(message: MsgUpdateCommission): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        commission?: string | undefined;
    } & {
        creator?: string | undefined;
        commission?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateCommission>]: never; }>(object: I): MsgUpdateCommission;
};
export declare const MsgUpdateCommissionResponse: {
    encode(_: MsgUpdateCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCommissionResponse;
    fromJSON(_: any): MsgUpdateCommissionResponse;
    toJSON(_: MsgUpdateCommissionResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateCommissionResponse;
};
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        pool_id?: string | undefined;
        valaddress?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        pool_id?: string | undefined;
        valaddress?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgJoinPool>]: never; }>(object: I): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(_: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(_: any): MsgJoinPoolResponse;
    toJSON(_: MsgJoinPoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgJoinPoolResponse;
};
export declare const MsgLeavePool: {
    encode(message: MsgLeavePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeavePool;
    fromJSON(object: any): MsgLeavePool;
    toJSON(message: MsgLeavePool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        pool_id?: string | undefined;
    } & {
        creator?: string | undefined;
        pool_id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgLeavePool>]: never; }>(object: I): MsgLeavePool;
};
export declare const MsgLeavePoolResponse: {
    encode(_: MsgLeavePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeavePoolResponse;
    fromJSON(_: any): MsgLeavePoolResponse;
    toJSON(_: MsgLeavePoolResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgLeavePoolResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        payload?: string | undefined;
    } & {
        authority?: string | undefined;
        payload?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateParams>]: never; }>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateParamsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** CreateStaker ... */
    CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
    /** UpdateMetadata ... */
    UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
    /** UpdateCommission ... */
    UpdateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
    /** JoinPool ... */
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    /** LeavePool ... */
    LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/stakers module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
    UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
    UpdateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
    JoinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    LeavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
