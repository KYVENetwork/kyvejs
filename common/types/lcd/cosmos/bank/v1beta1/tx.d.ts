import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    from_address: string;
    to_address: string;
    amount: Coin[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial<I extends {
        from_address?: string | undefined;
        to_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        from_address?: string | undefined;
        to_address?: string | undefined;
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
    } & { [K_2 in Exclude<keyof I, keyof MsgSend>]: never; }>(object: I): MsgSend;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSendResponse;
};
export declare const MsgMultiSend: {
    encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): unknown;
    fromPartial<I extends {
        inputs?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        outputs?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        inputs?: ({
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
            } & { [K in Exclude<keyof I["inputs"][number]["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["inputs"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["inputs"][number], keyof Input>]: never; })[] & { [K_3 in Exclude<keyof I["inputs"], keyof {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        outputs?: ({
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
            } & { [K_4 in Exclude<keyof I["outputs"][number]["coins"][number], keyof Coin>]: never; })[] & { [K_5 in Exclude<keyof I["outputs"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["outputs"][number], keyof Output>]: never; })[] & { [K_7 in Exclude<keyof I["outputs"], keyof {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof MsgMultiSend>]: never; }>(object: I): MsgMultiSend;
};
export declare const MsgMultiSendResponse: {
    encode(_: MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse;
    fromJSON(_: any): MsgMultiSendResponse;
    toJSON(_: MsgMultiSendResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgMultiSendResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** Send defines a method for sending coins from one account to another account. */
    Send(request: MsgSend): Promise<MsgSendResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Send(request: MsgSend): Promise<MsgSendResponse>;
    MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
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
