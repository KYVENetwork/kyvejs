/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  RequestBeginBlock,
  RequestDeliverTx,
  RequestEndBlock,
  ResponseBeginBlock,
  ResponseCommit,
  ResponseDeliverTx,
  ResponseEndBlock,
} from "../../../../tendermint/abci/types";

export const protobufPackage = "cosmos.base.store.v1beta1";

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
  /** the store key for the KVStore this pair originates from */
  store_key: string;
  /** true indicates a delete operation, false indicates a set operation */
  delete: boolean;
  key: Uint8Array;
  value: Uint8Array;
}

/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 */
export interface BlockMetadata {
  request_begin_block?: RequestBeginBlock | undefined;
  response_begin_block?: ResponseBeginBlock | undefined;
  deliver_txs: BlockMetadata_DeliverTx[];
  request_end_block?: RequestEndBlock | undefined;
  response_end_block?: ResponseEndBlock | undefined;
  response_commit?: ResponseCommit | undefined;
}

/** DeliverTx encapulate deliver tx request and response. */
export interface BlockMetadata_DeliverTx {
  request?: RequestDeliverTx | undefined;
  response?: ResponseDeliverTx | undefined;
}

function createBaseStoreKVPair(): StoreKVPair {
  return { store_key: "", delete: false, key: new Uint8Array(0), value: new Uint8Array(0) };
}

export const StoreKVPair = {
  encode(message: StoreKVPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store_key !== "") {
      writer.uint32(10).string(message.store_key);
    }
    if (message.delete === true) {
      writer.uint32(16).bool(message.delete);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.store_key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.delete = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoreKVPair {
    return {
      store_key: isSet(object.store_key) ? String(object.store_key) : "",
      delete: isSet(object.delete) ? Boolean(object.delete) : false,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: StoreKVPair): unknown {
    const obj: any = {};
    if (message.store_key !== "") {
      obj.store_key = message.store_key;
    }
    if (message.delete === true) {
      obj.delete = message.delete;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreKVPair>, I>>(base?: I): StoreKVPair {
    return StoreKVPair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreKVPair>, I>>(object: I): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.store_key = object.store_key ?? "";
    message.delete = object.delete ?? false;
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseBlockMetadata(): BlockMetadata {
  return {
    request_begin_block: undefined,
    response_begin_block: undefined,
    deliver_txs: [],
    request_end_block: undefined,
    response_end_block: undefined,
    response_commit: undefined,
  };
}

export const BlockMetadata = {
  encode(message: BlockMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request_begin_block !== undefined) {
      RequestBeginBlock.encode(message.request_begin_block, writer.uint32(10).fork()).ldelim();
    }
    if (message.response_begin_block !== undefined) {
      ResponseBeginBlock.encode(message.response_begin_block, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deliver_txs) {
      BlockMetadata_DeliverTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.request_end_block !== undefined) {
      RequestEndBlock.encode(message.request_end_block, writer.uint32(34).fork()).ldelim();
    }
    if (message.response_end_block !== undefined) {
      ResponseEndBlock.encode(message.response_end_block, writer.uint32(42).fork()).ldelim();
    }
    if (message.response_commit !== undefined) {
      ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request_begin_block = RequestBeginBlock.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response_begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deliver_txs.push(BlockMetadata_DeliverTx.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.request_end_block = RequestEndBlock.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.response_end_block = ResponseEndBlock.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.response_commit = ResponseCommit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockMetadata {
    return {
      request_begin_block: isSet(object.request_begin_block)
        ? RequestBeginBlock.fromJSON(object.request_begin_block)
        : undefined,
      response_begin_block: isSet(object.response_begin_block)
        ? ResponseBeginBlock.fromJSON(object.response_begin_block)
        : undefined,
      deliver_txs: Array.isArray(object?.deliver_txs)
        ? object.deliver_txs.map((e: any) => BlockMetadata_DeliverTx.fromJSON(e))
        : [],
      request_end_block: isSet(object.request_end_block)
        ? RequestEndBlock.fromJSON(object.request_end_block)
        : undefined,
      response_end_block: isSet(object.response_end_block)
        ? ResponseEndBlock.fromJSON(object.response_end_block)
        : undefined,
      response_commit: isSet(object.response_commit) ? ResponseCommit.fromJSON(object.response_commit) : undefined,
    };
  },

  toJSON(message: BlockMetadata): unknown {
    const obj: any = {};
    if (message.request_begin_block !== undefined) {
      obj.request_begin_block = RequestBeginBlock.toJSON(message.request_begin_block);
    }
    if (message.response_begin_block !== undefined) {
      obj.response_begin_block = ResponseBeginBlock.toJSON(message.response_begin_block);
    }
    if (message.deliver_txs?.length) {
      obj.deliver_txs = message.deliver_txs.map((e) => BlockMetadata_DeliverTx.toJSON(e));
    }
    if (message.request_end_block !== undefined) {
      obj.request_end_block = RequestEndBlock.toJSON(message.request_end_block);
    }
    if (message.response_end_block !== undefined) {
      obj.response_end_block = ResponseEndBlock.toJSON(message.response_end_block);
    }
    if (message.response_commit !== undefined) {
      obj.response_commit = ResponseCommit.toJSON(message.response_commit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockMetadata>, I>>(base?: I): BlockMetadata {
    return BlockMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlockMetadata>, I>>(object: I): BlockMetadata {
    const message = createBaseBlockMetadata();
    message.request_begin_block = (object.request_begin_block !== undefined && object.request_begin_block !== null)
      ? RequestBeginBlock.fromPartial(object.request_begin_block)
      : undefined;
    message.response_begin_block = (object.response_begin_block !== undefined && object.response_begin_block !== null)
      ? ResponseBeginBlock.fromPartial(object.response_begin_block)
      : undefined;
    message.deliver_txs = object.deliver_txs?.map((e) => BlockMetadata_DeliverTx.fromPartial(e)) || [];
    message.request_end_block = (object.request_end_block !== undefined && object.request_end_block !== null)
      ? RequestEndBlock.fromPartial(object.request_end_block)
      : undefined;
    message.response_end_block = (object.response_end_block !== undefined && object.response_end_block !== null)
      ? ResponseEndBlock.fromPartial(object.response_end_block)
      : undefined;
    message.response_commit = (object.response_commit !== undefined && object.response_commit !== null)
      ? ResponseCommit.fromPartial(object.response_commit)
      : undefined;
    return message;
  },
};

function createBaseBlockMetadata_DeliverTx(): BlockMetadata_DeliverTx {
  return { request: undefined, response: undefined };
}

export const BlockMetadata_DeliverTx = {
  encode(message: BlockMetadata_DeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RequestDeliverTx.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      ResponseDeliverTx.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMetadata_DeliverTx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMetadata_DeliverTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.request = RequestDeliverTx.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = ResponseDeliverTx.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockMetadata_DeliverTx {
    return {
      request: isSet(object.request) ? RequestDeliverTx.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? ResponseDeliverTx.fromJSON(object.response) : undefined,
    };
  },

  toJSON(message: BlockMetadata_DeliverTx): unknown {
    const obj: any = {};
    if (message.request !== undefined) {
      obj.request = RequestDeliverTx.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = ResponseDeliverTx.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockMetadata_DeliverTx>, I>>(base?: I): BlockMetadata_DeliverTx {
    return BlockMetadata_DeliverTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlockMetadata_DeliverTx>, I>>(object: I): BlockMetadata_DeliverTx {
    const message = createBaseBlockMetadata_DeliverTx();
    message.request = (object.request !== undefined && object.request !== null)
      ? RequestDeliverTx.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? ResponseDeliverTx.fromPartial(object.response)
      : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
