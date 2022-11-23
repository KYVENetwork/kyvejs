import _m0 from "protobufjs/minimal";
import { Block } from "../../../tendermint/types/block";
import { BlockID } from "../../../tendermint/types/types";
import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Tx } from "./tx";
export declare const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    ORDER_BY_UNSPECIFIED = "ORDER_BY_UNSPECIFIED",
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = "ORDER_BY_ASC",
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = "ORDER_BY_DESC",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
export declare function orderByToNumber(object: OrderBy): number;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = "BROADCAST_MODE_UNSPECIFIED",
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BROADCAST_MODE_BLOCK = "BROADCAST_MODE_BLOCK",
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = "BROADCAST_MODE_SYNC",
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BROADCAST_MODE_ASYNC = "BROADCAST_MODE_ASYNC",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
export declare function broadcastModeToNumber(object: BroadcastMode): number;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest;
    order_by: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    tx_responses: TxResponse[];
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    tx_bytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponse;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     *
     * @deprecated
     */
    tx?: Tx;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gas_info?: GasInfo;
    /** result is the result of the simulation. */
    result?: Result;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx?: Tx;
    /** tx_response is the queried TxResponses. */
    tx_response?: TxResponse;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
    /** height is the height of the block to query. */
    height: string;
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
    /** txs are the transactions in the block. */
    txs: Tx[];
    block_id?: BlockID;
    block?: Block;
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse;
}
export declare const GetTxsEventRequest: {
    encode(message: GetTxsEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest;
    fromJSON(object: any): GetTxsEventRequest;
    toJSON(message: GetTxsEventRequest): unknown;
    fromPartial<I extends {
        events?: string[] | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        order_by?: OrderBy | undefined;
    } & {
        events?: (string[] & string[] & { [K in Exclude<keyof I["events"], keyof string[]>]: never; }) | undefined;
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
        } & { [K_1 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
        order_by?: OrderBy | undefined;
    } & { [K_2 in Exclude<keyof I, keyof GetTxsEventRequest>]: never; }>(object: I): GetTxsEventRequest;
};
export declare const GetTxsEventResponse: {
    encode(message: GetTxsEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse;
    fromJSON(object: any): GetTxsEventResponse;
    toJSON(message: GetTxsEventResponse): unknown;
    fromPartial<I extends {
        txs?: {
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] | undefined;
        tx_responses?: {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        txs?: ({
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] & ({
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
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
                } & { [K in Exclude<keyof I["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["txs"][number]["body"]["messages"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_2 in Exclude<keyof I["txs"][number]["body"]["extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_3 in Exclude<keyof I["txs"][number]["body"]["extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                non_critical_extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_4 in Exclude<keyof I["txs"][number]["body"]["non_critical_extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_5 in Exclude<keyof I["txs"][number]["body"]["non_critical_extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["txs"][number]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            auth_info?: ({
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signer_infos?: ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] & ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                } & {
                    public_key?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_7 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["public_key"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    mode_info?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_8 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_9 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            mode_infos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_10 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_11 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    mode_infos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_12 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_13 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            mode_infos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_14 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_16 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_17 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_18 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_19 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_20 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_21 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_22 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_23 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_24 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | undefined;
                } & { [K_26 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_27 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"], keyof {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["txs"][number]["auth_info"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_29 in Exclude<keyof I["txs"][number]["auth_info"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_30 in Exclude<keyof I["txs"][number]["auth_info"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_31 in Exclude<keyof I["txs"][number]["auth_info"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_32 in Exclude<keyof I["txs"][number]["auth_info"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_33 in Exclude<keyof I["txs"][number]["auth_info"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I["txs"][number]["auth_info"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_35 in Exclude<keyof I["txs"][number]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I["txs"][number], keyof Tx>]: never; })[] & { [K_37 in Exclude<keyof I["txs"], keyof {
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        tx_responses?: ({
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: ({
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_38 in Exclude<keyof I["tx_responses"][number]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_39 in Exclude<keyof I["tx_responses"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I["tx_responses"][number]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_41 in Exclude<keyof I["tx_responses"][number]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_42 in Exclude<keyof I["tx_responses"][number]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_43 in Exclude<keyof I["tx_responses"][number]["logs"], keyof {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_44 in Exclude<keyof I["tx_responses"][number]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_45 in Exclude<keyof I["tx_responses"][number]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_46 in Exclude<keyof I["tx_responses"][number]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_47 in Exclude<keyof I["tx_responses"][number]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_48 in Exclude<keyof I["tx_responses"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_49 in Exclude<keyof I["tx_responses"][number], keyof TxResponse>]: never; })[] & { [K_50 in Exclude<keyof I["tx_responses"], keyof {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_51 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_52 in Exclude<keyof I, keyof GetTxsEventResponse>]: never; }>(object: I): GetTxsEventResponse;
};
export declare const BroadcastTxRequest: {
    encode(message: BroadcastTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest;
    fromJSON(object: any): BroadcastTxRequest;
    toJSON(message: BroadcastTxRequest): unknown;
    fromPartial<I extends {
        tx_bytes?: Uint8Array | undefined;
        mode?: BroadcastMode | undefined;
    } & {
        tx_bytes?: Uint8Array | undefined;
        mode?: BroadcastMode | undefined;
    } & { [K in Exclude<keyof I, keyof BroadcastTxRequest>]: never; }>(object: I): BroadcastTxRequest;
};
export declare const BroadcastTxResponse: {
    encode(message: BroadcastTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse;
    fromJSON(object: any): BroadcastTxResponse;
    toJSON(message: BroadcastTxResponse): unknown;
    fromPartial<I extends {
        tx_response?: {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx_response?: ({
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: ({
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K in Exclude<keyof I["tx_response"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_1 in Exclude<keyof I["tx_response"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["tx_response"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_3 in Exclude<keyof I["tx_response"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["tx_response"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_5 in Exclude<keyof I["tx_response"]["logs"], keyof {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_6 in Exclude<keyof I["tx_response"]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_7 in Exclude<keyof I["tx_response"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_8 in Exclude<keyof I["tx_response"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["tx_response"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_10 in Exclude<keyof I["tx_response"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["tx_response"], keyof TxResponse>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "tx_response">]: never; }>(object: I): BroadcastTxResponse;
};
export declare const SimulateRequest: {
    encode(message: SimulateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest;
    fromJSON(object: any): SimulateRequest;
    toJSON(message: SimulateRequest): unknown;
    fromPartial<I extends {
        tx?: {
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } | undefined;
        tx_bytes?: Uint8Array | undefined;
    } & {
        tx?: ({
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
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
                } & { [K in Exclude<keyof I["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["tx"]["body"]["messages"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_2 in Exclude<keyof I["tx"]["body"]["extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_3 in Exclude<keyof I["tx"]["body"]["extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                non_critical_extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_4 in Exclude<keyof I["tx"]["body"]["non_critical_extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_5 in Exclude<keyof I["tx"]["body"]["non_critical_extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["tx"]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            auth_info?: ({
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signer_infos?: ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] & ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                } & {
                    public_key?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_7 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["public_key"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    mode_info?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_8 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_9 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            mode_infos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_10 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_11 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    mode_infos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_12 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_13 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            mode_infos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_14 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_16 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_17 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_18 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_19 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_20 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_21 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_22 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_23 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_24 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | undefined;
                } & { [K_26 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_27 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"], keyof {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["tx"]["auth_info"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_29 in Exclude<keyof I["tx"]["auth_info"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_30 in Exclude<keyof I["tx"]["auth_info"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_31 in Exclude<keyof I["tx"]["auth_info"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_32 in Exclude<keyof I["tx"]["auth_info"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_33 in Exclude<keyof I["tx"]["auth_info"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I["tx"]["auth_info"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_35 in Exclude<keyof I["tx"]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I["tx"], keyof Tx>]: never; }) | undefined;
        tx_bytes?: Uint8Array | undefined;
    } & { [K_37 in Exclude<keyof I, keyof SimulateRequest>]: never; }>(object: I): SimulateRequest;
};
export declare const SimulateResponse: {
    encode(message: SimulateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse;
    fromJSON(object: any): SimulateResponse;
    toJSON(message: SimulateResponse): unknown;
    fromPartial<I extends {
        gas_info?: {
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
        } | undefined;
        result?: {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msg_responses?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        gas_info?: ({
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
        } & {
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
        } & { [K in Exclude<keyof I["gas_info"], keyof GasInfo>]: never; }) | undefined;
        result?: ({
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msg_responses?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_1 in Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_2 in Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msg_responses?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_5 in Exclude<keyof I["result"]["msg_responses"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_6 in Exclude<keyof I["result"]["msg_responses"], keyof {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["result"], keyof Result>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof SimulateResponse>]: never; }>(object: I): SimulateResponse;
};
export declare const GetTxRequest: {
    encode(message: GetTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest;
    fromJSON(object: any): GetTxRequest;
    toJSON(message: GetTxRequest): unknown;
    fromPartial<I extends {
        hash?: string | undefined;
    } & {
        hash?: string | undefined;
    } & { [K in Exclude<keyof I, "hash">]: never; }>(object: I): GetTxRequest;
};
export declare const GetTxResponse: {
    encode(message: GetTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse;
    fromJSON(object: any): GetTxResponse;
    toJSON(message: GetTxResponse): unknown;
    fromPartial<I extends {
        tx?: {
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } | undefined;
        tx_response?: {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx?: ({
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
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
                } & { [K in Exclude<keyof I["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["tx"]["body"]["messages"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_2 in Exclude<keyof I["tx"]["body"]["extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_3 in Exclude<keyof I["tx"]["body"]["extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                non_critical_extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_4 in Exclude<keyof I["tx"]["body"]["non_critical_extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_5 in Exclude<keyof I["tx"]["body"]["non_critical_extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["tx"]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            auth_info?: ({
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signer_infos?: ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] & ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                } & {
                    public_key?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_7 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["public_key"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    mode_info?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_8 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_9 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            mode_infos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_10 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_11 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    mode_infos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_12 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_13 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            mode_infos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_14 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_16 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_17 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_18 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_19 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_20 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_21 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_22 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_23 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_24 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number]["mode_info"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | undefined;
                } & { [K_26 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_27 in Exclude<keyof I["tx"]["auth_info"]["signer_infos"], keyof {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["tx"]["auth_info"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_29 in Exclude<keyof I["tx"]["auth_info"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_30 in Exclude<keyof I["tx"]["auth_info"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_31 in Exclude<keyof I["tx"]["auth_info"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_32 in Exclude<keyof I["tx"]["auth_info"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_33 in Exclude<keyof I["tx"]["auth_info"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I["tx"]["auth_info"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_35 in Exclude<keyof I["tx"]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I["tx"], keyof Tx>]: never; }) | undefined;
        tx_response?: ({
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            raw_log?: string | undefined;
            logs?: ({
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_37 in Exclude<keyof I["tx_response"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_38 in Exclude<keyof I["tx_response"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_39 in Exclude<keyof I["tx_response"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_40 in Exclude<keyof I["tx_response"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_41 in Exclude<keyof I["tx_response"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_42 in Exclude<keyof I["tx_response"]["logs"], keyof {
                msg_index?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            tx?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_43 in Exclude<keyof I["tx_response"]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_44 in Exclude<keyof I["tx_response"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_45 in Exclude<keyof I["tx_response"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I["tx_response"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_47 in Exclude<keyof I["tx_response"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_48 in Exclude<keyof I["tx_response"], keyof TxResponse>]: never; }) | undefined;
    } & { [K_49 in Exclude<keyof I, keyof GetTxResponse>]: never; }>(object: I): GetTxResponse;
};
export declare const GetBlockWithTxsRequest: {
    encode(message: GetBlockWithTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest;
    fromJSON(object: any): GetBlockWithTxsRequest;
    toJSON(message: GetBlockWithTxsRequest): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof GetBlockWithTxsRequest>]: never; }>(object: I): GetBlockWithTxsRequest;
};
export declare const GetBlockWithTxsResponse: {
    encode(message: GetBlockWithTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponse;
    fromJSON(object: any): GetBlockWithTxsResponse;
    toJSON(message: GetBlockWithTxsResponse): unknown;
    fromPartial<I extends {
        txs?: {
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] | undefined;
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            last_commit?: {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        txs?: ({
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] & ({
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
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
                } & { [K in Exclude<keyof I["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["txs"][number]["body"]["messages"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_2 in Exclude<keyof I["txs"][number]["body"]["extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_3 in Exclude<keyof I["txs"][number]["body"]["extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                non_critical_extension_options?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_4 in Exclude<keyof I["txs"][number]["body"]["non_critical_extension_options"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_5 in Exclude<keyof I["txs"][number]["body"]["non_critical_extension_options"], keyof {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["txs"][number]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            auth_info?: ({
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signer_infos?: ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] & ({
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                } & {
                    public_key?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_7 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["public_key"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    mode_info?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_8 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_9 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            mode_infos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_10 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    mode_infos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extra_bits_stored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_11 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    mode_infos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_12 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            mode_infos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extra_bits_stored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_13 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            mode_infos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_14 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extra_bits_stored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    mode_infos?: any[] | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_16 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_17 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_18 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_19 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_20 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_21 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_22 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_23 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"]["mode_infos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_24 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number]["mode_info"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | undefined;
                } & { [K_26 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_27 in Exclude<keyof I["txs"][number]["auth_info"]["signer_infos"], keyof {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["txs"][number]["auth_info"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_29 in Exclude<keyof I["txs"][number]["auth_info"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_30 in Exclude<keyof I["txs"][number]["auth_info"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_31 in Exclude<keyof I["txs"][number]["auth_info"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_32 in Exclude<keyof I["txs"][number]["auth_info"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_33 in Exclude<keyof I["txs"][number]["auth_info"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I["txs"][number]["auth_info"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_35 in Exclude<keyof I["txs"][number]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I["txs"][number], keyof Tx>]: never; })[] & { [K_37 in Exclude<keyof I["txs"], keyof {
            body?: {
                messages?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeout_height?: string | undefined;
                extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                non_critical_extension_options?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            auth_info?: {
                signer_infos?: {
                    public_key?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    mode_info?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            mode_infos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gas_limit?: string | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        block_id?: ({
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } & {
            hash?: Uint8Array | undefined;
            part_set_header?: ({
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & { [K_38 in Exclude<keyof I["block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I["block_id"], keyof BlockID>]: never; }) | undefined;
        block?: ({
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            last_commit?: {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | undefined;
                    app?: string | undefined;
                } & {
                    block?: string | undefined;
                    app?: string | undefined;
                } & { [K_40 in Exclude<keyof I["block"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                last_block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_41 in Exclude<keyof I["block"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_42 in Exclude<keyof I["block"]["header"]["last_block_id"], keyof BlockID>]: never; }) | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
            } & { [K_43 in Exclude<keyof I["block"]["header"], keyof import("../../../tendermint/types/types").Header>]: never; }) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & { [K_44 in Exclude<keyof I["block"]["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I["block"]["data"], "txs">]: never; }) | undefined;
            evidence?: ({
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicate_vote_evidence?: ({
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        vote_a?: ({
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: ({
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                part_set_header?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_46 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_47 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"], keyof BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_48 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"], keyof import("../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        vote_b?: ({
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: ({
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                part_set_header?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_49 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_50 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"], keyof BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_51 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"], keyof import("../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_52 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"], keyof import("../../../tendermint/types/evidence").DuplicateVoteEvidence>]: never; }) | undefined;
                    light_client_attack_evidence?: ({
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflicting_block?: ({
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } & {
                            signed_header?: ({
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } & {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } & { [K_53 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: ({
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_54 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_55 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof BlockID>]: never; }) | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } & { [K_56 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"], keyof import("../../../tendermint/types/types").Header>]: never; }) | undefined;
                                commit?: ({
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: ({
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_57 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_58 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof BlockID>]: never; }) | undefined;
                                    signatures?: ({
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & { [K_59 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_60 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>]: never; }) | undefined;
                                } & { [K_61 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"], keyof import("../../../tendermint/types/types").Commit>]: never; }) | undefined;
                            } & { [K_62 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"], keyof import("../../../tendermint/types/types").SignedHeader>]: never; }) | undefined;
                            validator_set?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pub_key?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_63 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & { [K_64 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number], keyof import("../../../tendermint/types/validator").Validator>]: never; })[] & { [K_65 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"], keyof {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[]>]: never; }) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pub_key?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_66 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & { [K_67 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"], keyof import("../../../tendermint/types/validator").Validator>]: never; }) | undefined;
                                total_voting_power?: string | undefined;
                            } & { [K_68 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"], keyof import("../../../tendermint/types/validator").ValidatorSet>]: never; }) | undefined;
                        } & { [K_69 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"], keyof import("../../../tendermint/types/types").LightBlock>]: never; }) | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: ({
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pub_key?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & { [K_70 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number]["pub_key"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        } & { [K_71 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number], keyof import("../../../tendermint/types/validator").Validator>]: never; })[] & { [K_72 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"], keyof {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[]>]: never; }) | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_73 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"], keyof import("../../../tendermint/types/evidence").LightClientAttackEvidence>]: never; }) | undefined;
                } & { [K_74 in Exclude<keyof I["block"]["evidence"]["evidence"][number], keyof import("../../../tendermint/types/evidence").Evidence>]: never; })[] & { [K_75 in Exclude<keyof I["block"]["evidence"]["evidence"], keyof {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        vote_b?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | undefined;
                            round?: number | undefined;
                            block_id?: {
                                hash?: Uint8Array | undefined;
                                part_set_header?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | undefined;
                                        app?: string | undefined;
                                    } | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: Date | undefined;
                                    last_block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    last_commit_hash?: Uint8Array | undefined;
                                    data_hash?: Uint8Array | undefined;
                                    validators_hash?: Uint8Array | undefined;
                                    next_validators_hash?: Uint8Array | undefined;
                                    consensus_hash?: Uint8Array | undefined;
                                    app_hash?: Uint8Array | undefined;
                                    last_results_hash?: Uint8Array | undefined;
                                    evidence_hash?: Uint8Array | undefined;
                                    proposer_address?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | undefined;
                                    round?: number | undefined;
                                    block_id?: {
                                        hash?: Uint8Array | undefined;
                                        part_set_header?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pub_key?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } | undefined;
                                total_voting_power?: string | undefined;
                            } | undefined;
                        } | undefined;
                        common_height?: string | undefined;
                        byzantine_validators?: {
                            address?: Uint8Array | undefined;
                            pub_key?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        }[] | undefined;
                        total_voting_power?: string | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_76 in Exclude<keyof I["block"]["evidence"], "evidence">]: never; }) | undefined;
            last_commit?: ({
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_77 in Exclude<keyof I["block"]["last_commit"]["block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_78 in Exclude<keyof I["block"]["last_commit"]["block_id"], keyof BlockID>]: never; }) | undefined;
                signatures?: ({
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_79 in Exclude<keyof I["block"]["last_commit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_80 in Exclude<keyof I["block"]["last_commit"]["signatures"], keyof {
                    block_id_flag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_81 in Exclude<keyof I["block"]["last_commit"], keyof import("../../../tendermint/types/types").Commit>]: never; }) | undefined;
        } & { [K_82 in Exclude<keyof I["block"], keyof Block>]: never; }) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & { [K_83 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_84 in Exclude<keyof I, keyof GetBlockWithTxsResponse>]: never; }>(object: I): GetBlockWithTxsResponse;
};
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    Simulate(request: SimulateRequest): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    GetTx(request: GetTxRequest): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Simulate(request: SimulateRequest): Promise<SimulateResponse>;
    GetTx(request: GetTxRequest): Promise<GetTxResponse>;
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
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
