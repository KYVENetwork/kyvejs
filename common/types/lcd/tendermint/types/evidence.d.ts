import _m0 from "protobufjs/minimal";
import { LightBlock, Vote } from "./types";
import { Validator } from "./validator";
export declare const protobufPackage = "tendermint.types";
export interface Evidence {
    duplicate_vote_evidence?: DuplicateVoteEvidence | undefined;
    light_client_attack_evidence?: LightClientAttackEvidence | undefined;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    vote_a?: Vote;
    vote_b?: Vote;
    total_voting_power: string;
    validator_power: string;
    timestamp?: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflicting_block?: LightBlock;
    common_height: string;
    byzantine_validators: Validator[];
    total_voting_power: string;
    timestamp?: Date;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial<I extends {
        duplicate_vote_evidence?: {
            vote_a?: {
                type?: import("./types").SignedMsgType | undefined;
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
                type?: import("./types").SignedMsgType | undefined;
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
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                type?: import("./types").SignedMsgType | undefined;
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
                type?: import("./types").SignedMsgType | undefined;
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
                type?: import("./types").SignedMsgType | undefined;
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
                type?: import("./types").SignedMsgType | undefined;
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
                    } & { [K in Exclude<keyof I["duplicate_vote_evidence"]["vote_a"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["duplicate_vote_evidence"]["vote_a"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                timestamp?: Date | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & { [K_2 in Exclude<keyof I["duplicate_vote_evidence"]["vote_a"], keyof Vote>]: never; }) | undefined;
            vote_b?: ({
                type?: import("./types").SignedMsgType | undefined;
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
                type?: import("./types").SignedMsgType | undefined;
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
                    } & { [K_3 in Exclude<keyof I["duplicate_vote_evidence"]["vote_b"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["duplicate_vote_evidence"]["vote_b"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                timestamp?: Date | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & { [K_5 in Exclude<keyof I["duplicate_vote_evidence"]["vote_b"], keyof Vote>]: never; }) | undefined;
            total_voting_power?: string | undefined;
            validator_power?: string | undefined;
            timestamp?: Date | undefined;
        } & { [K_6 in Exclude<keyof I["duplicate_vote_evidence"], keyof DuplicateVoteEvidence>]: never; }) | undefined;
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
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                        } & { [K_7 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                            } & { [K_8 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                        } & { [K_9 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                        last_commit_hash?: Uint8Array | undefined;
                        data_hash?: Uint8Array | undefined;
                        validators_hash?: Uint8Array | undefined;
                        next_validators_hash?: Uint8Array | undefined;
                        consensus_hash?: Uint8Array | undefined;
                        app_hash?: Uint8Array | undefined;
                        last_results_hash?: Uint8Array | undefined;
                        evidence_hash?: Uint8Array | undefined;
                        proposer_address?: Uint8Array | undefined;
                    } & { [K_10 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"], keyof import("./types").Header>]: never; }) | undefined;
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
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                            } & { [K_11 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                        } & { [K_12 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                        signatures?: ({
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
                            validator_address?: Uint8Array | undefined;
                            timestamp?: Date | undefined;
                            signature?: Uint8Array | undefined;
                        }[] & ({
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
                            validator_address?: Uint8Array | undefined;
                            timestamp?: Date | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
                            validator_address?: Uint8Array | undefined;
                            timestamp?: Date | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_13 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_14 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                            block_id_flag?: import("./types").BlockIDFlag | undefined;
                            validator_address?: Uint8Array | undefined;
                            timestamp?: Date | undefined;
                            signature?: Uint8Array | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_15 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"], keyof import("./types").Commit>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["signed_header"], keyof import("./types").SignedHeader>]: never; }) | undefined;
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
                        } & { [K_17 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    } & { [K_18 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number], keyof Validator>]: never; })[] & { [K_19 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"], keyof {
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
                        } & { [K_20 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    } & { [K_21 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"], keyof Validator>]: never; }) | undefined;
                    total_voting_power?: string | undefined;
                } & { [K_22 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"]["validator_set"], keyof import("./validator").ValidatorSet>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I["light_client_attack_evidence"]["conflicting_block"], keyof LightBlock>]: never; }) | undefined;
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
                } & { [K_24 in Exclude<keyof I["light_client_attack_evidence"]["byzantine_validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & { [K_25 in Exclude<keyof I["light_client_attack_evidence"]["byzantine_validators"][number], keyof Validator>]: never; })[] & { [K_26 in Exclude<keyof I["light_client_attack_evidence"]["byzantine_validators"], keyof {
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
        } & { [K_27 in Exclude<keyof I["light_client_attack_evidence"], keyof LightClientAttackEvidence>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, keyof Evidence>]: never; }>(object: I): Evidence;
};
export declare const DuplicateVoteEvidence: {
    encode(message: DuplicateVoteEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial<I extends {
        vote_a?: {
            type?: import("./types").SignedMsgType | undefined;
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
            type?: import("./types").SignedMsgType | undefined;
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
            type?: import("./types").SignedMsgType | undefined;
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
            type?: import("./types").SignedMsgType | undefined;
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
                } & { [K in Exclude<keyof I["vote_a"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["vote_a"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
            timestamp?: Date | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I["vote_a"], keyof Vote>]: never; }) | undefined;
        vote_b?: ({
            type?: import("./types").SignedMsgType | undefined;
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
            type?: import("./types").SignedMsgType | undefined;
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
                } & { [K_3 in Exclude<keyof I["vote_b"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["vote_b"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
            timestamp?: Date | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_5 in Exclude<keyof I["vote_b"], keyof Vote>]: never; }) | undefined;
        total_voting_power?: string | undefined;
        validator_power?: string | undefined;
        timestamp?: Date | undefined;
    } & { [K_6 in Exclude<keyof I, keyof DuplicateVoteEvidence>]: never; }>(object: I): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    encode(message: LightClientAttackEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    fromPartial<I extends {
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
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } & { [K in Exclude<keyof I["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                        } & { [K_1 in Exclude<keyof I["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                    last_commit_hash?: Uint8Array | undefined;
                    data_hash?: Uint8Array | undefined;
                    validators_hash?: Uint8Array | undefined;
                    next_validators_hash?: Uint8Array | undefined;
                    consensus_hash?: Uint8Array | undefined;
                    app_hash?: Uint8Array | undefined;
                    last_results_hash?: Uint8Array | undefined;
                    evidence_hash?: Uint8Array | undefined;
                    proposer_address?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["conflicting_block"]["signed_header"]["header"], keyof import("./types").Header>]: never; }) | undefined;
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
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                        } & { [K_4 in Exclude<keyof I["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                    signatures?: ({
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: Date | undefined;
                        signature?: Uint8Array | undefined;
                    }[] & ({
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: Date | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: Date | undefined;
                        signature?: Uint8Array | undefined;
                    } & { [K_6 in Exclude<keyof I["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_7 in Exclude<keyof I["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                        block_id_flag?: import("./types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: Date | undefined;
                        signature?: Uint8Array | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["conflicting_block"]["signed_header"]["commit"], keyof import("./types").Commit>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["conflicting_block"]["signed_header"], keyof import("./types").SignedHeader>]: never; }) | undefined;
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
                    } & { [K_10 in Exclude<keyof I["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & { [K_11 in Exclude<keyof I["conflicting_block"]["validator_set"]["validators"][number], keyof Validator>]: never; })[] & { [K_12 in Exclude<keyof I["conflicting_block"]["validator_set"]["validators"], keyof {
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
                    } & { [K_13 in Exclude<keyof I["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & { [K_14 in Exclude<keyof I["conflicting_block"]["validator_set"]["proposer"], keyof Validator>]: never; }) | undefined;
                total_voting_power?: string | undefined;
            } & { [K_15 in Exclude<keyof I["conflicting_block"]["validator_set"], keyof import("./validator").ValidatorSet>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["conflicting_block"], keyof LightBlock>]: never; }) | undefined;
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
            } & { [K_17 in Exclude<keyof I["byzantine_validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & { [K_18 in Exclude<keyof I["byzantine_validators"][number], keyof Validator>]: never; })[] & { [K_19 in Exclude<keyof I["byzantine_validators"], keyof {
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
    } & { [K_20 in Exclude<keyof I, keyof LightClientAttackEvidence>]: never; }>(object: I): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    encode(message: EvidenceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    fromPartial<I extends {
        evidence?: {
            duplicate_vote_evidence?: {
                vote_a?: {
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                        } & { [K in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                    } & { [K_1 in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                    timestamp?: Date | undefined;
                    validator_address?: Uint8Array | undefined;
                    validator_index?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_2 in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"]["vote_a"], keyof Vote>]: never; }) | undefined;
                vote_b?: ({
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                        } & { [K_3 in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                    } & { [K_4 in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                    timestamp?: Date | undefined;
                    validator_address?: Uint8Array | undefined;
                    validator_index?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_5 in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"]["vote_b"], keyof Vote>]: never; }) | undefined;
                total_voting_power?: string | undefined;
                validator_power?: string | undefined;
                timestamp?: Date | undefined;
            } & { [K_6 in Exclude<keyof I["evidence"][number]["duplicate_vote_evidence"], keyof DuplicateVoteEvidence>]: never; }) | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                            } & { [K_7 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                                } & { [K_8 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_9 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                            last_commit_hash?: Uint8Array | undefined;
                            data_hash?: Uint8Array | undefined;
                            validators_hash?: Uint8Array | undefined;
                            next_validators_hash?: Uint8Array | undefined;
                            consensus_hash?: Uint8Array | undefined;
                            app_hash?: Uint8Array | undefined;
                            last_results_hash?: Uint8Array | undefined;
                            evidence_hash?: Uint8Array | undefined;
                            proposer_address?: Uint8Array | undefined;
                        } & { [K_10 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"], keyof import("./types").Header>]: never; }) | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                                } & { [K_11 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_12 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof import("./types").BlockID>]: never; }) | undefined;
                            signatures?: ({
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
                                validator_address?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            }[] & ({
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
                                validator_address?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            } & {
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
                                validator_address?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            } & { [K_13 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_14 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
                                validator_address?: Uint8Array | undefined;
                                timestamp?: Date | undefined;
                                signature?: Uint8Array | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_15 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"], keyof import("./types").Commit>]: never; }) | undefined;
                    } & { [K_16 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"], keyof import("./types").SignedHeader>]: never; }) | undefined;
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
                            } & { [K_17 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        } & { [K_18 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number], keyof Validator>]: never; })[] & { [K_19 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"], keyof {
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
                            } & { [K_20 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        } & { [K_21 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"], keyof Validator>]: never; }) | undefined;
                        total_voting_power?: string | undefined;
                    } & { [K_22 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"], keyof import("./validator").ValidatorSet>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["conflicting_block"], keyof LightBlock>]: never; }) | undefined;
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
                    } & { [K_24 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & { [K_25 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number], keyof Validator>]: never; })[] & { [K_26 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"], keyof {
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
            } & { [K_27 in Exclude<keyof I["evidence"][number]["light_client_attack_evidence"], keyof LightClientAttackEvidence>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I["evidence"][number], keyof Evidence>]: never; })[] & { [K_29 in Exclude<keyof I["evidence"], keyof {
            duplicate_vote_evidence?: {
                vote_a?: {
                    type?: import("./types").SignedMsgType | undefined;
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
                    type?: import("./types").SignedMsgType | undefined;
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
                                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
    } & { [K_30 in Exclude<keyof I, "evidence">]: never; }>(object: I): EvidenceList;
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
