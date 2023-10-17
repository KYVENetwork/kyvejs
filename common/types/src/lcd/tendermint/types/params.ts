/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "tendermint.types";

/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block?: BlockParams | undefined;
  evidence?: EvidenceParams | undefined;
  validator?: ValidatorParams | undefined;
  version?: VersionParams | undefined;
}

/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  max_bytes: string;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  max_gas: string;
  /**
   * Minimum time increment between consecutive blocks (in milliseconds) If the
   * block header timestamp is ahead of the system clock, decrease this value.
   *
   * Not exposed to the application.
   */
  time_iota_ms: string;
}

/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   *
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  max_age_num_blocks: string;
  /**
   * Max age of evidence, in time.
   *
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  max_age_duration?:
    | Duration
    | undefined;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  max_bytes: string;
}

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pub_key_types: string[];
}

/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  app_version: string;
}

/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  block_max_bytes: string;
  block_max_gas: string;
}

function createBaseConsensusParams(): ConsensusParams {
  return { block: undefined, evidence: undefined, validator: undefined, version: undefined };
}

export const ConsensusParams = {
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.block = BlockParams.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validator = ValidatorParams.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = VersionParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConsensusParams {
    return {
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined,
    };
  },

  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    if (message.block !== undefined) {
      obj.block = BlockParams.toJSON(message.block);
    }
    if (message.evidence !== undefined) {
      obj.evidence = EvidenceParams.toJSON(message.evidence);
    }
    if (message.validator !== undefined) {
      obj.validator = ValidatorParams.toJSON(message.validator);
    }
    if (message.version !== undefined) {
      obj.version = VersionParams.toJSON(message.version);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConsensusParams>, I>>(base?: I): ConsensusParams {
    return ConsensusParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(object: I): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = (object.block !== undefined && object.block !== null)
      ? BlockParams.fromPartial(object.block)
      : undefined;
    message.evidence = (object.evidence !== undefined && object.evidence !== null)
      ? EvidenceParams.fromPartial(object.evidence)
      : undefined;
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? ValidatorParams.fromPartial(object.validator)
      : undefined;
    message.version = (object.version !== undefined && object.version !== null)
      ? VersionParams.fromPartial(object.version)
      : undefined;
    return message;
  },
};

function createBaseBlockParams(): BlockParams {
  return { max_bytes: "0", max_gas: "0", time_iota_ms: "0" };
}

export const BlockParams = {
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_bytes !== "0") {
      writer.uint32(8).int64(message.max_bytes);
    }
    if (message.max_gas !== "0") {
      writer.uint32(16).int64(message.max_gas);
    }
    if (message.time_iota_ms !== "0") {
      writer.uint32(24).int64(message.time_iota_ms);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.max_bytes = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max_gas = longToString(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.time_iota_ms = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockParams {
    return {
      max_bytes: isSet(object.max_bytes) ? String(object.max_bytes) : "0",
      max_gas: isSet(object.max_gas) ? String(object.max_gas) : "0",
      time_iota_ms: isSet(object.time_iota_ms) ? String(object.time_iota_ms) : "0",
    };
  },

  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    if (message.max_bytes !== "0") {
      obj.max_bytes = message.max_bytes;
    }
    if (message.max_gas !== "0") {
      obj.max_gas = message.max_gas;
    }
    if (message.time_iota_ms !== "0") {
      obj.time_iota_ms = message.time_iota_ms;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockParams>, I>>(base?: I): BlockParams {
    return BlockParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(object: I): BlockParams {
    const message = createBaseBlockParams();
    message.max_bytes = object.max_bytes ?? "0";
    message.max_gas = object.max_gas ?? "0";
    message.time_iota_ms = object.time_iota_ms ?? "0";
    return message;
  },
};

function createBaseEvidenceParams(): EvidenceParams {
  return { max_age_num_blocks: "0", max_age_duration: undefined, max_bytes: "0" };
}

export const EvidenceParams = {
  encode(message: EvidenceParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.max_age_num_blocks !== "0") {
      writer.uint32(8).int64(message.max_age_num_blocks);
    }
    if (message.max_age_duration !== undefined) {
      Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.max_bytes !== "0") {
      writer.uint32(24).int64(message.max_bytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.max_age_num_blocks = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.max_age_duration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max_bytes = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EvidenceParams {
    return {
      max_age_num_blocks: isSet(object.max_age_num_blocks) ? String(object.max_age_num_blocks) : "0",
      max_age_duration: isSet(object.max_age_duration) ? Duration.fromJSON(object.max_age_duration) : undefined,
      max_bytes: isSet(object.max_bytes) ? String(object.max_bytes) : "0",
    };
  },

  toJSON(message: EvidenceParams): unknown {
    const obj: any = {};
    if (message.max_age_num_blocks !== "0") {
      obj.max_age_num_blocks = message.max_age_num_blocks;
    }
    if (message.max_age_duration !== undefined) {
      obj.max_age_duration = Duration.toJSON(message.max_age_duration);
    }
    if (message.max_bytes !== "0") {
      obj.max_bytes = message.max_bytes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EvidenceParams>, I>>(base?: I): EvidenceParams {
    return EvidenceParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EvidenceParams>, I>>(object: I): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.max_age_num_blocks = object.max_age_num_blocks ?? "0";
    message.max_age_duration = (object.max_age_duration !== undefined && object.max_age_duration !== null)
      ? Duration.fromPartial(object.max_age_duration)
      : undefined;
    message.max_bytes = object.max_bytes ?? "0";
    return message;
  },
};

function createBaseValidatorParams(): ValidatorParams {
  return { pub_key_types: [] };
}

export const ValidatorParams = {
  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pub_key_types) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pub_key_types.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidatorParams {
    return {
      pub_key_types: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};
    if (message.pub_key_types?.length) {
      obj.pub_key_types = message.pub_key_types;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorParams>, I>>(base?: I): ValidatorParams {
    return ValidatorParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorParams>, I>>(object: I): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pub_key_types = object.pub_key_types?.map((e) => e) || [];
    return message;
  },
};

function createBaseVersionParams(): VersionParams {
  return { app_version: "0" };
}

export const VersionParams = {
  encode(message: VersionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.app_version !== "0") {
      writer.uint32(8).uint64(message.app_version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.app_version = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VersionParams {
    return { app_version: isSet(object.app_version) ? String(object.app_version) : "0" };
  },

  toJSON(message: VersionParams): unknown {
    const obj: any = {};
    if (message.app_version !== "0") {
      obj.app_version = message.app_version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VersionParams>, I>>(base?: I): VersionParams {
    return VersionParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VersionParams>, I>>(object: I): VersionParams {
    const message = createBaseVersionParams();
    message.app_version = object.app_version ?? "0";
    return message;
  },
};

function createBaseHashedParams(): HashedParams {
  return { block_max_bytes: "0", block_max_gas: "0" };
}

export const HashedParams = {
  encode(message: HashedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block_max_bytes !== "0") {
      writer.uint32(8).int64(message.block_max_bytes);
    }
    if (message.block_max_gas !== "0") {
      writer.uint32(16).int64(message.block_max_gas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.block_max_bytes = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.block_max_gas = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HashedParams {
    return {
      block_max_bytes: isSet(object.block_max_bytes) ? String(object.block_max_bytes) : "0",
      block_max_gas: isSet(object.block_max_gas) ? String(object.block_max_gas) : "0",
    };
  },

  toJSON(message: HashedParams): unknown {
    const obj: any = {};
    if (message.block_max_bytes !== "0") {
      obj.block_max_bytes = message.block_max_bytes;
    }
    if (message.block_max_gas !== "0") {
      obj.block_max_gas = message.block_max_gas;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HashedParams>, I>>(base?: I): HashedParams {
    return HashedParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HashedParams>, I>>(object: I): HashedParams {
    const message = createBaseHashedParams();
    message.block_max_bytes = object.block_max_bytes ?? "0";
    message.block_max_gas = object.block_max_gas ?? "0";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
