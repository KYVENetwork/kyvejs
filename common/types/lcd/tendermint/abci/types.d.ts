import _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
import { ProofOps } from "../crypto/proof";
import { EvidenceParams, ValidatorParams, VersionParams } from "../types/params";
import { Header } from "../types/types";
export declare const protobufPackage = "tendermint.abci";
export declare enum CheckTxType {
    NEW = "NEW",
    RECHECK = "RECHECK",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare function checkTxTypeToNumber(object: CheckTxType): number;
export declare enum EvidenceType {
    UNKNOWN = "UNKNOWN",
    DUPLICATE_VOTE = "DUPLICATE_VOTE",
    LIGHT_CLIENT_ATTACK = "LIGHT_CLIENT_ATTACK",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export declare function evidenceTypeToNumber(object: EvidenceType): number;
export interface Request {
    echo?: RequestEcho | undefined;
    flush?: RequestFlush | undefined;
    info?: RequestInfo | undefined;
    set_option?: RequestSetOption | undefined;
    init_chain?: RequestInitChain | undefined;
    query?: RequestQuery | undefined;
    begin_block?: RequestBeginBlock | undefined;
    check_tx?: RequestCheckTx | undefined;
    deliver_tx?: RequestDeliverTx | undefined;
    end_block?: RequestEndBlock | undefined;
    commit?: RequestCommit | undefined;
    list_snapshots?: RequestListSnapshots | undefined;
    offer_snapshot?: RequestOfferSnapshot | undefined;
    load_snapshot_chunk?: RequestLoadSnapshotChunk | undefined;
    apply_snapshot_chunk?: RequestApplySnapshotChunk | undefined;
}
export interface RequestEcho {
    message: string;
}
export interface RequestFlush {
}
export interface RequestInfo {
    version: string;
    block_version: string;
    p2p_version: string;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time?: Date;
    chain_id: string;
    consensus_params?: ConsensusParams;
    validators: ValidatorUpdate[];
    app_state_bytes: Uint8Array;
    initial_height: string;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: string;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header?: Header;
    last_commit_info?: LastCommitInfo;
    byzantine_validators: Evidence[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: string;
}
export interface RequestCommit {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: string;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception?: ResponseException | undefined;
    echo?: ResponseEcho | undefined;
    flush?: ResponseFlush | undefined;
    info?: ResponseInfo | undefined;
    set_option?: ResponseSetOption | undefined;
    init_chain?: ResponseInitChain | undefined;
    query?: ResponseQuery | undefined;
    begin_block?: ResponseBeginBlock | undefined;
    check_tx?: ResponseCheckTx | undefined;
    deliver_tx?: ResponseDeliverTx | undefined;
    end_block?: ResponseEndBlock | undefined;
    commit?: ResponseCommit | undefined;
    list_snapshots?: ResponseListSnapshots | undefined;
    offer_snapshot?: ResponseOfferSnapshot | undefined;
    load_snapshot_chunk?: ResponseLoadSnapshotChunk | undefined;
    apply_snapshot_chunk?: ResponseApplySnapshotChunk | undefined;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseInfo {
    data: string;
    version: string;
    app_version: string;
    last_block_height: string;
    last_block_app_hash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensus_params?: ConsensusParams;
    validators: ValidatorUpdate[];
    app_hash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: string;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOps;
    height: string;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: string;
    gas_used: string;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: string;
    gas_used: string;
    events: Event[];
    codespace: string;
}
export interface ResponseEndBlock {
    validator_updates: ValidatorUpdate[];
    consensus_param_updates?: ConsensusParams;
    events: Event[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retain_height: string;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = "UNKNOWN",
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = "ACCEPT",
    /** ABORT - Abort all snapshot restoration */
    ABORT = "ABORT",
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = "REJECT",
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = "REJECT_FORMAT",
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = "REJECT_SENDER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare function responseOfferSnapshot_ResultToNumber(object: ResponseOfferSnapshot_Result): number;
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetch_chunks: number[];
    /** Chunk senders to reject and ban */
    reject_senders: string[];
}
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = "UNKNOWN",
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = "ACCEPT",
    /** ABORT - Abort all snapshot restoration */
    ABORT = "ABORT",
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = "RETRY",
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = "RETRY_SNAPSHOT",
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = "REJECT_SNAPSHOT",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare function responseApplySnapshotChunk_ResultToNumber(object: ResponseApplySnapshotChunk_Result): number;
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    max_bytes: string;
    /** Note: must be greater or equal to -1 */
    max_gas: string;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: string;
    index: number;
    tx: Uint8Array;
    result?: ResponseDeliverTx;
}
/** Validator */
export interface Validator {
    /** The first 20 bytes of SHA256(public key) */
    address: Uint8Array;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power: string;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pub_key?: PublicKey;
    power: string;
}
/** VoteInfo */
export interface VoteInfo {
    validator?: Validator;
    signed_last_block: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator?: Validator;
    /** The height when the offense occurred */
    height: string;
    /** The corresponding time where the offense occurred */
    time?: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    total_voting_power: string;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: string;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    fromPartial<I extends {
        echo?: {
            message?: string | undefined;
        } | undefined;
        flush?: {} | undefined;
        info?: {
            version?: string | undefined;
            block_version?: string | undefined;
            p2p_version?: string | undefined;
        } | undefined;
        set_option?: {
            key?: string | undefined;
            value?: string | undefined;
        } | undefined;
        init_chain?: {
            time?: Date | undefined;
            chain_id?: string | undefined;
            consensus_params?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            validators?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            app_state_bytes?: Uint8Array | undefined;
            initial_height?: string | undefined;
        } | undefined;
        query?: {
            data?: Uint8Array | undefined;
            path?: string | undefined;
            height?: string | undefined;
            prove?: boolean | undefined;
        } | undefined;
        begin_block?: {
            hash?: Uint8Array | undefined;
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
            last_commit_info?: {
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signed_last_block?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            byzantine_validators?: {
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                total_voting_power?: string | undefined;
            }[] | undefined;
        } | undefined;
        check_tx?: {
            tx?: Uint8Array | undefined;
            type?: CheckTxType | undefined;
        } | undefined;
        deliver_tx?: {
            tx?: Uint8Array | undefined;
        } | undefined;
        end_block?: {
            height?: string | undefined;
        } | undefined;
        commit?: {} | undefined;
        list_snapshots?: {} | undefined;
        offer_snapshot?: {
            snapshot?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } | undefined;
            app_hash?: Uint8Array | undefined;
        } | undefined;
        load_snapshot_chunk?: {
            height?: string | undefined;
            format?: number | undefined;
            chunk?: number | undefined;
        } | undefined;
        apply_snapshot_chunk?: {
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            sender?: string | undefined;
        } | undefined;
    } & {
        echo?: ({
            message?: string | undefined;
        } & {
            message?: string | undefined;
        } & { [K in Exclude<keyof I["echo"], "message">]: never; }) | undefined;
        flush?: ({} & {} & { [K_1 in Exclude<keyof I["flush"], never>]: never; }) | undefined;
        info?: ({
            version?: string | undefined;
            block_version?: string | undefined;
            p2p_version?: string | undefined;
        } & {
            version?: string | undefined;
            block_version?: string | undefined;
            p2p_version?: string | undefined;
        } & { [K_2 in Exclude<keyof I["info"], keyof RequestInfo>]: never; }) | undefined;
        set_option?: ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & { [K_3 in Exclude<keyof I["set_option"], keyof RequestSetOption>]: never; }) | undefined;
        init_chain?: ({
            time?: Date | undefined;
            chain_id?: string | undefined;
            consensus_params?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            validators?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            app_state_bytes?: Uint8Array | undefined;
            initial_height?: string | undefined;
        } & {
            time?: Date | undefined;
            chain_id?: string | undefined;
            consensus_params?: ({
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } & {
                block?: ({
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & { [K_4 in Exclude<keyof I["init_chain"]["consensus_params"]["block"], keyof BlockParams>]: never; }) | undefined;
                evidence?: ({
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } & {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & { [K_5 in Exclude<keyof I["init_chain"]["consensus_params"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
                    max_bytes?: string | undefined;
                } & { [K_6 in Exclude<keyof I["init_chain"]["consensus_params"]["evidence"], keyof EvidenceParams>]: never; }) | undefined;
                validator?: ({
                    pub_key_types?: string[] | undefined;
                } & {
                    pub_key_types?: (string[] & string[] & { [K_7 in Exclude<keyof I["init_chain"]["consensus_params"]["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["init_chain"]["consensus_params"]["validator"], "pub_key_types">]: never; }) | undefined;
                version?: ({
                    app_version?: string | undefined;
                } & {
                    app_version?: string | undefined;
                } & { [K_9 in Exclude<keyof I["init_chain"]["consensus_params"]["version"], "app_version">]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["init_chain"]["consensus_params"], keyof ConsensusParams>]: never; }) | undefined;
            validators?: ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & { [K_11 in Exclude<keyof I["init_chain"]["validators"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
                power?: string | undefined;
            } & { [K_12 in Exclude<keyof I["init_chain"]["validators"][number], keyof ValidatorUpdate>]: never; })[] & { [K_13 in Exclude<keyof I["init_chain"]["validators"], keyof {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>]: never; }) | undefined;
            app_state_bytes?: Uint8Array | undefined;
            initial_height?: string | undefined;
        } & { [K_14 in Exclude<keyof I["init_chain"], keyof RequestInitChain>]: never; }) | undefined;
        query?: ({
            data?: Uint8Array | undefined;
            path?: string | undefined;
            height?: string | undefined;
            prove?: boolean | undefined;
        } & {
            data?: Uint8Array | undefined;
            path?: string | undefined;
            height?: string | undefined;
            prove?: boolean | undefined;
        } & { [K_15 in Exclude<keyof I["query"], keyof RequestQuery>]: never; }) | undefined;
        begin_block?: ({
            hash?: Uint8Array | undefined;
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
            last_commit_info?: {
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signed_last_block?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            byzantine_validators?: {
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                total_voting_power?: string | undefined;
            }[] | undefined;
        } & {
            hash?: Uint8Array | undefined;
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
                } & { [K_16 in Exclude<keyof I["begin_block"]["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                    } & { [K_17 in Exclude<keyof I["begin_block"]["header"]["last_block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I["begin_block"]["header"]["last_block_id"], keyof import("../types/types").BlockID>]: never; }) | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
            } & { [K_19 in Exclude<keyof I["begin_block"]["header"], keyof Header>]: never; }) | undefined;
            last_commit_info?: ({
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signed_last_block?: boolean | undefined;
                }[] | undefined;
            } & {
                round?: number | undefined;
                votes?: ({
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signed_last_block?: boolean | undefined;
                }[] & ({
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signed_last_block?: boolean | undefined;
                } & {
                    validator?: ({
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } & { [K_20 in Exclude<keyof I["begin_block"]["last_commit_info"]["votes"][number]["validator"], keyof Validator>]: never; }) | undefined;
                    signed_last_block?: boolean | undefined;
                } & { [K_21 in Exclude<keyof I["begin_block"]["last_commit_info"]["votes"][number], keyof VoteInfo>]: never; })[] & { [K_22 in Exclude<keyof I["begin_block"]["last_commit_info"]["votes"], keyof {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signed_last_block?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I["begin_block"]["last_commit_info"], keyof LastCommitInfo>]: never; }) | undefined;
            byzantine_validators?: ({
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                total_voting_power?: string | undefined;
            }[] & ({
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                total_voting_power?: string | undefined;
            } & {
                type?: EvidenceType | undefined;
                validator?: ({
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & { [K_24 in Exclude<keyof I["begin_block"]["byzantine_validators"][number]["validator"], keyof Validator>]: never; }) | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                total_voting_power?: string | undefined;
            } & { [K_25 in Exclude<keyof I["begin_block"]["byzantine_validators"][number], keyof Evidence>]: never; })[] & { [K_26 in Exclude<keyof I["begin_block"]["byzantine_validators"], keyof {
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                total_voting_power?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["begin_block"], keyof RequestBeginBlock>]: never; }) | undefined;
        check_tx?: ({
            tx?: Uint8Array | undefined;
            type?: CheckTxType | undefined;
        } & {
            tx?: Uint8Array | undefined;
            type?: CheckTxType | undefined;
        } & { [K_28 in Exclude<keyof I["check_tx"], keyof RequestCheckTx>]: never; }) | undefined;
        deliver_tx?: ({
            tx?: Uint8Array | undefined;
        } & {
            tx?: Uint8Array | undefined;
        } & { [K_29 in Exclude<keyof I["deliver_tx"], "tx">]: never; }) | undefined;
        end_block?: ({
            height?: string | undefined;
        } & {
            height?: string | undefined;
        } & { [K_30 in Exclude<keyof I["end_block"], "height">]: never; }) | undefined;
        commit?: ({} & {} & { [K_31 in Exclude<keyof I["commit"], never>]: never; }) | undefined;
        list_snapshots?: ({} & {} & { [K_32 in Exclude<keyof I["list_snapshots"], never>]: never; }) | undefined;
        offer_snapshot?: ({
            snapshot?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } | undefined;
            app_hash?: Uint8Array | undefined;
        } & {
            snapshot?: ({
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & { [K_33 in Exclude<keyof I["offer_snapshot"]["snapshot"], keyof Snapshot>]: never; }) | undefined;
            app_hash?: Uint8Array | undefined;
        } & { [K_34 in Exclude<keyof I["offer_snapshot"], keyof RequestOfferSnapshot>]: never; }) | undefined;
        load_snapshot_chunk?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunk?: number | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunk?: number | undefined;
        } & { [K_35 in Exclude<keyof I["load_snapshot_chunk"], keyof RequestLoadSnapshotChunk>]: never; }) | undefined;
        apply_snapshot_chunk?: ({
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            sender?: string | undefined;
        } & {
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            sender?: string | undefined;
        } & { [K_36 in Exclude<keyof I["apply_snapshot_chunk"], keyof RequestApplySnapshotChunk>]: never; }) | undefined;
    } & { [K_37 in Exclude<keyof I, keyof Request>]: never; }>(object: I): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    fromPartial<I extends {
        message?: string | undefined;
    } & {
        message?: string | undefined;
    } & { [K in Exclude<keyof I, "message">]: never; }>(object: I): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        block_version?: string | undefined;
        p2p_version?: string | undefined;
    } & {
        version?: string | undefined;
        block_version?: string | undefined;
        p2p_version?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RequestInfo>]: never; }>(object: I): RequestInfo;
};
export declare const RequestSetOption: {
    encode(message: RequestSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RequestSetOption>]: never; }>(object: I): RequestSetOption;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    fromPartial<I extends {
        time?: Date | undefined;
        chain_id?: string | undefined;
        consensus_params?: {
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } | undefined;
        validators?: {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] | undefined;
        app_state_bytes?: Uint8Array | undefined;
        initial_height?: string | undefined;
    } & {
        time?: Date | undefined;
        chain_id?: string | undefined;
        consensus_params?: ({
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } & {
            block?: ({
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } & {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } & { [K in Exclude<keyof I["consensus_params"]["block"], keyof BlockParams>]: never; }) | undefined;
            evidence?: ({
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } & {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & { [K_1 in Exclude<keyof I["consensus_params"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
                max_bytes?: string | undefined;
            } & { [K_2 in Exclude<keyof I["consensus_params"]["evidence"], keyof EvidenceParams>]: never; }) | undefined;
            validator?: ({
                pub_key_types?: string[] | undefined;
            } & {
                pub_key_types?: (string[] & string[] & { [K_3 in Exclude<keyof I["consensus_params"]["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["consensus_params"]["validator"], "pub_key_types">]: never; }) | undefined;
            version?: ({
                app_version?: string | undefined;
            } & {
                app_version?: string | undefined;
            } & { [K_5 in Exclude<keyof I["consensus_params"]["version"], "app_version">]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["consensus_params"], keyof ConsensusParams>]: never; }) | undefined;
        validators?: ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] & ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        } & {
            pub_key?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & { [K_7 in Exclude<keyof I["validators"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
            power?: string | undefined;
        } & { [K_8 in Exclude<keyof I["validators"][number], keyof ValidatorUpdate>]: never; })[] & { [K_9 in Exclude<keyof I["validators"], keyof {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[]>]: never; }) | undefined;
        app_state_bytes?: Uint8Array | undefined;
        initial_height?: string | undefined;
    } & { [K_10 in Exclude<keyof I, keyof RequestInitChain>]: never; }>(object: I): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        path?: string | undefined;
        height?: string | undefined;
        prove?: boolean | undefined;
    } & {
        data?: Uint8Array | undefined;
        path?: string | undefined;
        height?: string | undefined;
        prove?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof RequestQuery>]: never; }>(object: I): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    fromPartial<I extends {
        hash?: Uint8Array | undefined;
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
        last_commit_info?: {
            round?: number | undefined;
            votes?: {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signed_last_block?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        byzantine_validators?: {
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            total_voting_power?: string | undefined;
        }[] | undefined;
    } & {
        hash?: Uint8Array | undefined;
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
            } & { [K in Exclude<keyof I["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["header"]["last_block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["header"]["last_block_id"], keyof import("../types/types").BlockID>]: never; }) | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I["header"], keyof Header>]: never; }) | undefined;
        last_commit_info?: ({
            round?: number | undefined;
            votes?: {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signed_last_block?: boolean | undefined;
            }[] | undefined;
        } & {
            round?: number | undefined;
            votes?: ({
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signed_last_block?: boolean | undefined;
            }[] & ({
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signed_last_block?: boolean | undefined;
            } & {
                validator?: ({
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & { [K_4 in Exclude<keyof I["last_commit_info"]["votes"][number]["validator"], keyof Validator>]: never; }) | undefined;
                signed_last_block?: boolean | undefined;
            } & { [K_5 in Exclude<keyof I["last_commit_info"]["votes"][number], keyof VoteInfo>]: never; })[] & { [K_6 in Exclude<keyof I["last_commit_info"]["votes"], keyof {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signed_last_block?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["last_commit_info"], keyof LastCommitInfo>]: never; }) | undefined;
        byzantine_validators?: ({
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            total_voting_power?: string | undefined;
        }[] & ({
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            total_voting_power?: string | undefined;
        } & {
            type?: EvidenceType | undefined;
            validator?: ({
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & { [K_8 in Exclude<keyof I["byzantine_validators"][number]["validator"], keyof Validator>]: never; }) | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            total_voting_power?: string | undefined;
        } & { [K_9 in Exclude<keyof I["byzantine_validators"][number], keyof Evidence>]: never; })[] & { [K_10 in Exclude<keyof I["byzantine_validators"], keyof {
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            total_voting_power?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof RequestBeginBlock>]: never; }>(object: I): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array | undefined;
        type?: CheckTxType | undefined;
    } & {
        tx?: Uint8Array | undefined;
        type?: CheckTxType | undefined;
    } & { [K in Exclude<keyof I, keyof RequestCheckTx>]: never; }>(object: I): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array | undefined;
    } & {
        tx?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "tx">]: never; }>(object: I): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    fromPartial<I extends {
        height?: string | undefined;
    } & {
        height?: string | undefined;
    } & { [K in Exclude<keyof I, "height">]: never; }>(object: I): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): unknown;
    fromPartial<I extends {
        snapshot?: {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } | undefined;
        app_hash?: Uint8Array | undefined;
    } & {
        snapshot?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["snapshot"], keyof Snapshot>]: never; }) | undefined;
        app_hash?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RequestOfferSnapshot>]: never; }>(object: I): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        chunk?: number | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        chunk?: number | undefined;
    } & { [K in Exclude<keyof I, keyof RequestLoadSnapshotChunk>]: never; }>(object: I): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): unknown;
    fromPartial<I extends {
        index?: number | undefined;
        chunk?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        index?: number | undefined;
        chunk?: Uint8Array | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RequestApplySnapshotChunk>]: never; }>(object: I): RequestApplySnapshotChunk;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    fromPartial<I extends {
        exception?: {
            error?: string | undefined;
        } | undefined;
        echo?: {
            message?: string | undefined;
        } | undefined;
        flush?: {} | undefined;
        info?: {
            data?: string | undefined;
            version?: string | undefined;
            app_version?: string | undefined;
            last_block_height?: string | undefined;
            last_block_app_hash?: Uint8Array | undefined;
        } | undefined;
        set_option?: {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
        } | undefined;
        init_chain?: {
            consensus_params?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            validators?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            app_hash?: Uint8Array | undefined;
        } | undefined;
        query?: {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
            index?: string | undefined;
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            proof_ops?: {
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            height?: string | undefined;
            codespace?: string | undefined;
        } | undefined;
        begin_block?: {
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        check_tx?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
        deliver_tx?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
        end_block?: {
            validator_updates?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            consensus_param_updates?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        commit?: {
            data?: Uint8Array | undefined;
            retain_height?: string | undefined;
        } | undefined;
        list_snapshots?: {
            snapshots?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
        offer_snapshot?: {
            result?: ResponseOfferSnapshot_Result | undefined;
        } | undefined;
        load_snapshot_chunk?: {
            chunk?: Uint8Array | undefined;
        } | undefined;
        apply_snapshot_chunk?: {
            result?: ResponseApplySnapshotChunk_Result | undefined;
            refetch_chunks?: number[] | undefined;
            reject_senders?: string[] | undefined;
        } | undefined;
    } & {
        exception?: ({
            error?: string | undefined;
        } & {
            error?: string | undefined;
        } & { [K in Exclude<keyof I["exception"], "error">]: never; }) | undefined;
        echo?: ({
            message?: string | undefined;
        } & {
            message?: string | undefined;
        } & { [K_1 in Exclude<keyof I["echo"], "message">]: never; }) | undefined;
        flush?: ({} & {} & { [K_2 in Exclude<keyof I["flush"], never>]: never; }) | undefined;
        info?: ({
            data?: string | undefined;
            version?: string | undefined;
            app_version?: string | undefined;
            last_block_height?: string | undefined;
            last_block_app_hash?: Uint8Array | undefined;
        } & {
            data?: string | undefined;
            version?: string | undefined;
            app_version?: string | undefined;
            last_block_height?: string | undefined;
            last_block_app_hash?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I["info"], keyof ResponseInfo>]: never; }) | undefined;
        set_option?: ({
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
        } & {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
        } & { [K_4 in Exclude<keyof I["set_option"], keyof ResponseSetOption>]: never; }) | undefined;
        init_chain?: ({
            consensus_params?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            validators?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            app_hash?: Uint8Array | undefined;
        } & {
            consensus_params?: ({
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } & {
                block?: ({
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & { [K_5 in Exclude<keyof I["init_chain"]["consensus_params"]["block"], keyof BlockParams>]: never; }) | undefined;
                evidence?: ({
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } & {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & { [K_6 in Exclude<keyof I["init_chain"]["consensus_params"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
                    max_bytes?: string | undefined;
                } & { [K_7 in Exclude<keyof I["init_chain"]["consensus_params"]["evidence"], keyof EvidenceParams>]: never; }) | undefined;
                validator?: ({
                    pub_key_types?: string[] | undefined;
                } & {
                    pub_key_types?: (string[] & string[] & { [K_8 in Exclude<keyof I["init_chain"]["consensus_params"]["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["init_chain"]["consensus_params"]["validator"], "pub_key_types">]: never; }) | undefined;
                version?: ({
                    app_version?: string | undefined;
                } & {
                    app_version?: string | undefined;
                } & { [K_10 in Exclude<keyof I["init_chain"]["consensus_params"]["version"], "app_version">]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["init_chain"]["consensus_params"], keyof ConsensusParams>]: never; }) | undefined;
            validators?: ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & { [K_12 in Exclude<keyof I["init_chain"]["validators"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
                power?: string | undefined;
            } & { [K_13 in Exclude<keyof I["init_chain"]["validators"][number], keyof ValidatorUpdate>]: never; })[] & { [K_14 in Exclude<keyof I["init_chain"]["validators"], keyof {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>]: never; }) | undefined;
            app_hash?: Uint8Array | undefined;
        } & { [K_15 in Exclude<keyof I["init_chain"], keyof ResponseInitChain>]: never; }) | undefined;
        query?: ({
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
            index?: string | undefined;
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            proof_ops?: {
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            height?: string | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
            index?: string | undefined;
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            proof_ops?: ({
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                ops?: ({
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] & ({
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                } & {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                } & { [K_16 in Exclude<keyof I["query"]["proof_ops"]["ops"][number], keyof import("../crypto/proof").ProofOp>]: never; })[] & { [K_17 in Exclude<keyof I["query"]["proof_ops"]["ops"], keyof {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I["query"]["proof_ops"], "ops">]: never; }) | undefined;
            height?: string | undefined;
            codespace?: string | undefined;
        } & { [K_19 in Exclude<keyof I["query"], keyof ResponseQuery>]: never; }) | undefined;
        begin_block?: ({
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
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
                } & { [K_20 in Exclude<keyof I["begin_block"]["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_21 in Exclude<keyof I["begin_block"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["begin_block"]["events"][number], keyof Event>]: never; })[] & { [K_23 in Exclude<keyof I["begin_block"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I["begin_block"], "events">]: never; }) | undefined;
        check_tx?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
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
                } & { [K_25 in Exclude<keyof I["check_tx"]["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_26 in Exclude<keyof I["check_tx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_27 in Exclude<keyof I["check_tx"]["events"][number], keyof Event>]: never; })[] & { [K_28 in Exclude<keyof I["check_tx"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            codespace?: string | undefined;
        } & { [K_29 in Exclude<keyof I["check_tx"], keyof ResponseCheckTx>]: never; }) | undefined;
        deliver_tx?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
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
                } & { [K_30 in Exclude<keyof I["deliver_tx"]["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_31 in Exclude<keyof I["deliver_tx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I["deliver_tx"]["events"][number], keyof Event>]: never; })[] & { [K_33 in Exclude<keyof I["deliver_tx"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            codespace?: string | undefined;
        } & { [K_34 in Exclude<keyof I["deliver_tx"], keyof ResponseDeliverTx>]: never; }) | undefined;
        end_block?: ({
            validator_updates?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            consensus_param_updates?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            validator_updates?: ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & { [K_35 in Exclude<keyof I["end_block"]["validator_updates"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
                power?: string | undefined;
            } & { [K_36 in Exclude<keyof I["end_block"]["validator_updates"][number], keyof ValidatorUpdate>]: never; })[] & { [K_37 in Exclude<keyof I["end_block"]["validator_updates"], keyof {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>]: never; }) | undefined;
            consensus_param_updates?: ({
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } & {
                block?: ({
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & { [K_38 in Exclude<keyof I["end_block"]["consensus_param_updates"]["block"], keyof BlockParams>]: never; }) | undefined;
                evidence?: ({
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } & {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & { [K_39 in Exclude<keyof I["end_block"]["consensus_param_updates"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
                    max_bytes?: string | undefined;
                } & { [K_40 in Exclude<keyof I["end_block"]["consensus_param_updates"]["evidence"], keyof EvidenceParams>]: never; }) | undefined;
                validator?: ({
                    pub_key_types?: string[] | undefined;
                } & {
                    pub_key_types?: (string[] & string[] & { [K_41 in Exclude<keyof I["end_block"]["consensus_param_updates"]["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
                } & { [K_42 in Exclude<keyof I["end_block"]["consensus_param_updates"]["validator"], "pub_key_types">]: never; }) | undefined;
                version?: ({
                    app_version?: string | undefined;
                } & {
                    app_version?: string | undefined;
                } & { [K_43 in Exclude<keyof I["end_block"]["consensus_param_updates"]["version"], "app_version">]: never; }) | undefined;
            } & { [K_44 in Exclude<keyof I["end_block"]["consensus_param_updates"], keyof ConsensusParams>]: never; }) | undefined;
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
                } & { [K_45 in Exclude<keyof I["end_block"]["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_46 in Exclude<keyof I["end_block"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_47 in Exclude<keyof I["end_block"]["events"][number], keyof Event>]: never; })[] & { [K_48 in Exclude<keyof I["end_block"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_49 in Exclude<keyof I["end_block"], keyof ResponseEndBlock>]: never; }) | undefined;
        commit?: ({
            data?: Uint8Array | undefined;
            retain_height?: string | undefined;
        } & {
            data?: Uint8Array | undefined;
            retain_height?: string | undefined;
        } & { [K_50 in Exclude<keyof I["commit"], keyof ResponseCommit>]: never; }) | undefined;
        list_snapshots?: ({
            snapshots?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            snapshots?: ({
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[] & ({
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & { [K_51 in Exclude<keyof I["list_snapshots"]["snapshots"][number], keyof Snapshot>]: never; })[] & { [K_52 in Exclude<keyof I["list_snapshots"]["snapshots"], keyof {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_53 in Exclude<keyof I["list_snapshots"], "snapshots">]: never; }) | undefined;
        offer_snapshot?: ({
            result?: ResponseOfferSnapshot_Result | undefined;
        } & {
            result?: ResponseOfferSnapshot_Result | undefined;
        } & { [K_54 in Exclude<keyof I["offer_snapshot"], "result">]: never; }) | undefined;
        load_snapshot_chunk?: ({
            chunk?: Uint8Array | undefined;
        } & {
            chunk?: Uint8Array | undefined;
        } & { [K_55 in Exclude<keyof I["load_snapshot_chunk"], "chunk">]: never; }) | undefined;
        apply_snapshot_chunk?: ({
            result?: ResponseApplySnapshotChunk_Result | undefined;
            refetch_chunks?: number[] | undefined;
            reject_senders?: string[] | undefined;
        } & {
            result?: ResponseApplySnapshotChunk_Result | undefined;
            refetch_chunks?: (number[] & number[] & { [K_56 in Exclude<keyof I["apply_snapshot_chunk"]["refetch_chunks"], keyof number[]>]: never; }) | undefined;
            reject_senders?: (string[] & string[] & { [K_57 in Exclude<keyof I["apply_snapshot_chunk"]["reject_senders"], keyof string[]>]: never; }) | undefined;
        } & { [K_58 in Exclude<keyof I["apply_snapshot_chunk"], keyof ResponseApplySnapshotChunk>]: never; }) | undefined;
    } & { [K_59 in Exclude<keyof I, keyof Response>]: never; }>(object: I): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    fromPartial<I extends {
        error?: string | undefined;
    } & {
        error?: string | undefined;
    } & { [K in Exclude<keyof I, "error">]: never; }>(object: I): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    fromPartial<I extends {
        message?: string | undefined;
    } & {
        message?: string | undefined;
    } & { [K in Exclude<keyof I, "message">]: never; }>(object: I): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    fromPartial<I extends {
        data?: string | undefined;
        version?: string | undefined;
        app_version?: string | undefined;
        last_block_height?: string | undefined;
        last_block_app_hash?: Uint8Array | undefined;
    } & {
        data?: string | undefined;
        version?: string | undefined;
        app_version?: string | undefined;
        last_block_height?: string | undefined;
        last_block_app_hash?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof ResponseInfo>]: never; }>(object: I): ResponseInfo;
};
export declare const ResponseSetOption: {
    encode(message: ResponseSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
    } & {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ResponseSetOption>]: never; }>(object: I): ResponseSetOption;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    fromPartial<I extends {
        consensus_params?: {
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } | undefined;
        validators?: {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] | undefined;
        app_hash?: Uint8Array | undefined;
    } & {
        consensus_params?: ({
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } & {
            block?: ({
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } & {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } & { [K in Exclude<keyof I["consensus_params"]["block"], keyof BlockParams>]: never; }) | undefined;
            evidence?: ({
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } & {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & { [K_1 in Exclude<keyof I["consensus_params"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
                max_bytes?: string | undefined;
            } & { [K_2 in Exclude<keyof I["consensus_params"]["evidence"], keyof EvidenceParams>]: never; }) | undefined;
            validator?: ({
                pub_key_types?: string[] | undefined;
            } & {
                pub_key_types?: (string[] & string[] & { [K_3 in Exclude<keyof I["consensus_params"]["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["consensus_params"]["validator"], "pub_key_types">]: never; }) | undefined;
            version?: ({
                app_version?: string | undefined;
            } & {
                app_version?: string | undefined;
            } & { [K_5 in Exclude<keyof I["consensus_params"]["version"], "app_version">]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["consensus_params"], keyof ConsensusParams>]: never; }) | undefined;
        validators?: ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] & ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        } & {
            pub_key?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & { [K_7 in Exclude<keyof I["validators"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
            power?: string | undefined;
        } & { [K_8 in Exclude<keyof I["validators"][number], keyof ValidatorUpdate>]: never; })[] & { [K_9 in Exclude<keyof I["validators"], keyof {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[]>]: never; }) | undefined;
        app_hash?: Uint8Array | undefined;
    } & { [K_10 in Exclude<keyof I, keyof ResponseInitChain>]: never; }>(object: I): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
        index?: string | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        proof_ops?: {
            ops?: {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
        height?: string | undefined;
        codespace?: string | undefined;
    } & {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
        index?: string | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        proof_ops?: ({
            ops?: {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            ops?: ({
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            } & {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["proof_ops"]["ops"][number], keyof import("../crypto/proof").ProofOp>]: never; })[] & { [K_1 in Exclude<keyof I["proof_ops"]["ops"], keyof {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["proof_ops"], "ops">]: never; }) | undefined;
        height?: string | undefined;
        codespace?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ResponseQuery>]: never; }>(object: I): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    fromPartial<I extends {
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
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
            } & { [K in Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_3 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "events">]: never; }>(object: I): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gas_wanted?: string | undefined;
        gas_used?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
        codespace?: string | undefined;
    } & {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gas_wanted?: string | undefined;
        gas_used?: string | undefined;
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
            } & { [K in Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_3 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        codespace?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ResponseCheckTx>]: never; }>(object: I): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gas_wanted?: string | undefined;
        gas_used?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
        codespace?: string | undefined;
    } & {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gas_wanted?: string | undefined;
        gas_used?: string | undefined;
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
            } & { [K in Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_3 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        codespace?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ResponseDeliverTx>]: never; }>(object: I): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    fromPartial<I extends {
        validator_updates?: {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] | undefined;
        consensus_param_updates?: {
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        validator_updates?: ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] & ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        } & {
            pub_key?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["validator_updates"][number]["pub_key"], keyof PublicKey>]: never; }) | undefined;
            power?: string | undefined;
        } & { [K_1 in Exclude<keyof I["validator_updates"][number], keyof ValidatorUpdate>]: never; })[] & { [K_2 in Exclude<keyof I["validator_updates"], keyof {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[]>]: never; }) | undefined;
        consensus_param_updates?: ({
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } & {
            block?: ({
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } & {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
            } & { [K_3 in Exclude<keyof I["consensus_param_updates"]["block"], keyof BlockParams>]: never; }) | undefined;
            evidence?: ({
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } & {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & { [K_4 in Exclude<keyof I["consensus_param_updates"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
                max_bytes?: string | undefined;
            } & { [K_5 in Exclude<keyof I["consensus_param_updates"]["evidence"], keyof EvidenceParams>]: never; }) | undefined;
            validator?: ({
                pub_key_types?: string[] | undefined;
            } & {
                pub_key_types?: (string[] & string[] & { [K_6 in Exclude<keyof I["consensus_param_updates"]["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["consensus_param_updates"]["validator"], "pub_key_types">]: never; }) | undefined;
            version?: ({
                app_version?: string | undefined;
            } & {
                app_version?: string | undefined;
            } & { [K_8 in Exclude<keyof I["consensus_param_updates"]["version"], "app_version">]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["consensus_param_updates"], keyof ConsensusParams>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_11 in Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_13 in Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof ResponseEndBlock>]: never; }>(object: I): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        retain_height?: string | undefined;
    } & {
        data?: Uint8Array | undefined;
        retain_height?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ResponseCommit>]: never; }>(object: I): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): unknown;
    fromPartial<I extends {
        snapshots?: {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        snapshots?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        }[] & ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["snapshots"][number], keyof Snapshot>]: never; })[] & { [K_1 in Exclude<keyof I["snapshots"], keyof {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "snapshots">]: never; }>(object: I): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): unknown;
    fromPartial<I extends {
        result?: ResponseOfferSnapshot_Result | undefined;
    } & {
        result?: ResponseOfferSnapshot_Result | undefined;
    } & { [K in Exclude<keyof I, "result">]: never; }>(object: I): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): unknown;
    fromPartial<I extends {
        chunk?: Uint8Array | undefined;
    } & {
        chunk?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "chunk">]: never; }>(object: I): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): unknown;
    fromPartial<I extends {
        result?: ResponseApplySnapshotChunk_Result | undefined;
        refetch_chunks?: number[] | undefined;
        reject_senders?: string[] | undefined;
    } & {
        result?: ResponseApplySnapshotChunk_Result | undefined;
        refetch_chunks?: (number[] & number[] & { [K in Exclude<keyof I["refetch_chunks"], keyof number[]>]: never; }) | undefined;
        reject_senders?: (string[] & string[] & { [K_1 in Exclude<keyof I["reject_senders"], keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ResponseApplySnapshotChunk>]: never; }>(object: I): ResponseApplySnapshotChunk;
};
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends {
        block?: {
            max_bytes?: string | undefined;
            max_gas?: string | undefined;
        } | undefined;
        evidence?: {
            max_age_num_blocks?: string | undefined;
            max_age_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_bytes?: string | undefined;
        } | undefined;
        validator?: {
            pub_key_types?: string[] | undefined;
        } | undefined;
        version?: {
            app_version?: string | undefined;
        } | undefined;
    } & {
        block?: ({
            max_bytes?: string | undefined;
            max_gas?: string | undefined;
        } & {
            max_bytes?: string | undefined;
            max_gas?: string | undefined;
        } & { [K in Exclude<keyof I["block"], keyof BlockParams>]: never; }) | undefined;
        evidence?: ({
            max_age_num_blocks?: string | undefined;
            max_age_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_bytes?: string | undefined;
        } & {
            max_age_num_blocks?: string | undefined;
            max_age_duration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & { [K_1 in Exclude<keyof I["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
            max_bytes?: string | undefined;
        } & { [K_2 in Exclude<keyof I["evidence"], keyof EvidenceParams>]: never; }) | undefined;
        validator?: ({
            pub_key_types?: string[] | undefined;
        } & {
            pub_key_types?: (string[] & string[] & { [K_3 in Exclude<keyof I["validator"]["pub_key_types"], keyof string[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["validator"], "pub_key_types">]: never; }) | undefined;
        version?: ({
            app_version?: string | undefined;
        } & {
            app_version?: string | undefined;
        } & { [K_5 in Exclude<keyof I["version"], "app_version">]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof ConsensusParams>]: never; }>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial<I extends {
        max_bytes?: string | undefined;
        max_gas?: string | undefined;
    } & {
        max_bytes?: string | undefined;
        max_gas?: string | undefined;
    } & { [K in Exclude<keyof I, keyof BlockParams>]: never; }>(object: I): BlockParams;
};
export declare const LastCommitInfo: {
    encode(message: LastCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): unknown;
    fromPartial<I extends {
        round?: number | undefined;
        votes?: {
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signed_last_block?: boolean | undefined;
        }[] | undefined;
    } & {
        round?: number | undefined;
        votes?: ({
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signed_last_block?: boolean | undefined;
        }[] & ({
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signed_last_block?: boolean | undefined;
        } & {
            validator?: ({
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & { [K in Exclude<keyof I["votes"][number]["validator"], keyof Validator>]: never; }) | undefined;
            signed_last_block?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["votes"][number], keyof VoteInfo>]: never; })[] & { [K_2 in Exclude<keyof I["votes"], keyof {
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signed_last_block?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof LastCommitInfo>]: never; }>(object: I): LastCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["attributes"], keyof {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            index?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Event>]: never; }>(object: I): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        index?: boolean | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        index?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof EventAttribute>]: never; }>(object: I): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        index?: number | undefined;
        tx?: Uint8Array | undefined;
        result?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        index?: number | undefined;
        tx?: Uint8Array | undefined;
        result?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
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
                } & { [K in Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof EventAttribute>]: never; })[] & { [K_1 in Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["events"][number], keyof Event>]: never; })[] & { [K_3 in Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            codespace?: string | undefined;
        } & { [K_4 in Exclude<keyof I["result"], keyof ResponseDeliverTx>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof TxResult>]: never; }>(object: I): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: Uint8Array | undefined;
        power?: string | undefined;
    } & {
        address?: Uint8Array | undefined;
        power?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Validator>]: never; }>(object: I): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    fromPartial<I extends {
        pub_key?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        power?: string | undefined;
    } & {
        pub_key?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["pub_key"], keyof PublicKey>]: never; }) | undefined;
        power?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ValidatorUpdate>]: never; }>(object: I): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    fromPartial<I extends {
        validator?: {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } | undefined;
        signed_last_block?: boolean | undefined;
    } & {
        validator?: ({
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & { [K in Exclude<keyof I["validator"], keyof Validator>]: never; }) | undefined;
        signed_last_block?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof VoteInfo>]: never; }>(object: I): VoteInfo;
};
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial<I extends {
        type?: EvidenceType | undefined;
        validator?: {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } | undefined;
        height?: string | undefined;
        time?: Date | undefined;
        total_voting_power?: string | undefined;
    } & {
        type?: EvidenceType | undefined;
        validator?: ({
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & { [K in Exclude<keyof I["validator"], keyof Validator>]: never; }) | undefined;
        height?: string | undefined;
        time?: Date | undefined;
        total_voting_power?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Evidence>]: never; }>(object: I): Evidence;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: Uint8Array | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof Snapshot>]: never; }>(object: I): Snapshot;
};
export interface ABCIApplication {
    Echo(request: RequestEcho): Promise<ResponseEcho>;
    Flush(request: RequestFlush): Promise<ResponseFlush>;
    Info(request: RequestInfo): Promise<ResponseInfo>;
    SetOption(request: RequestSetOption): Promise<ResponseSetOption>;
    DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
    CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
    Query(request: RequestQuery): Promise<ResponseQuery>;
    Commit(request: RequestCommit): Promise<ResponseCommit>;
    InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
    BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
    EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
    ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk>;
}
export declare class ABCIApplicationClientImpl implements ABCIApplication {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Echo(request: RequestEcho): Promise<ResponseEcho>;
    Flush(request: RequestFlush): Promise<ResponseFlush>;
    Info(request: RequestInfo): Promise<ResponseInfo>;
    SetOption(request: RequestSetOption): Promise<ResponseSetOption>;
    DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
    CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
    Query(request: RequestQuery): Promise<ResponseQuery>;
    Commit(request: RequestCommit): Promise<ResponseCommit>;
    InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
    BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
    EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
    ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk>;
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
