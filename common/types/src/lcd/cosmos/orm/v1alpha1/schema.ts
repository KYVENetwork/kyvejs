/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.orm.v1alpha1";

/** StorageType */
export enum StorageType {
  /**
   * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
   * KV-storage where primary key entries are stored in merkle-tree
   * backed commitment storage and indexes and seqs are stored in
   * fast index storage. Note that the Cosmos SDK before store/v2alpha1
   * does not support this.
   */
  STORAGE_TYPE_DEFAULT_UNSPECIFIED = "STORAGE_TYPE_DEFAULT_UNSPECIFIED",
  /**
   * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
   * reloaded every time an app restarts. Tables with this type of storage
   * will by default be ignored when importing and exporting a module's
   * state from JSON.
   */
  STORAGE_TYPE_MEMORY = "STORAGE_TYPE_MEMORY",
  /**
   * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
   * at the end of every block. Tables with this type of storage
   * will by default be ignored when importing and exporting a module's
   * state from JSON.
   */
  STORAGE_TYPE_TRANSIENT = "STORAGE_TYPE_TRANSIENT",
  /**
   * STORAGE_TYPE_INDEX - STORAGE_TYPE_INDEX indicates persistent storage which is not backed
   * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
   * before store/v2alpha1 does not support this.
   */
  STORAGE_TYPE_INDEX = "STORAGE_TYPE_INDEX",
  /**
   * STORAGE_TYPE_COMMITMENT - STORAGE_TYPE_INDEX indicates persistent storage which is backed by
   * a merkle-tree. With this type of storage, both primary and index keys
   * will affect the app hash and this is generally less efficient
   * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
   * keys into index storage. Note that modules built with the
   * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
   * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
   * because this is the only type of persistent storage available.
   */
  STORAGE_TYPE_COMMITMENT = "STORAGE_TYPE_COMMITMENT",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function storageTypeFromJSON(object: any): StorageType {
  switch (object) {
    case 0:
    case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
      return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    case 1:
    case "STORAGE_TYPE_MEMORY":
      return StorageType.STORAGE_TYPE_MEMORY;
    case 2:
    case "STORAGE_TYPE_TRANSIENT":
      return StorageType.STORAGE_TYPE_TRANSIENT;
    case 3:
    case "STORAGE_TYPE_INDEX":
      return StorageType.STORAGE_TYPE_INDEX;
    case 4:
    case "STORAGE_TYPE_COMMITMENT":
      return StorageType.STORAGE_TYPE_COMMITMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageType.UNRECOGNIZED;
  }
}

export function storageTypeToJSON(object: StorageType): string {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    case StorageType.STORAGE_TYPE_MEMORY:
      return "STORAGE_TYPE_MEMORY";
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return "STORAGE_TYPE_TRANSIENT";
    case StorageType.STORAGE_TYPE_INDEX:
      return "STORAGE_TYPE_INDEX";
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return "STORAGE_TYPE_COMMITMENT";
    case StorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function storageTypeToNumber(object: StorageType): number {
  switch (object) {
    case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
      return 0;
    case StorageType.STORAGE_TYPE_MEMORY:
      return 1;
    case StorageType.STORAGE_TYPE_TRANSIENT:
      return 2;
    case StorageType.STORAGE_TYPE_INDEX:
      return 3;
    case StorageType.STORAGE_TYPE_COMMITMENT:
      return 4;
    case StorageType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ModuleSchemaDescriptor describe's a module's ORM schema. */
export interface ModuleSchemaDescriptor {
  schema_file: ModuleSchemaDescriptor_FileEntry[];
  /**
   * prefix is an optional prefix that precedes all keys in this module's
   * store.
   */
  prefix: Uint8Array;
}

/** FileEntry describes an ORM file used in a module. */
export interface ModuleSchemaDescriptor_FileEntry {
  /**
   * id is a prefix that will be varint encoded and prepended to all the
   * table keys specified in the file's tables.
   */
  id: number;
  /**
   * proto_file_name is the name of a file .proto in that contains
   * table definitions. The .proto file must be in a package that the
   * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
   */
  proto_file_name: string;
  /**
   * storage_type optionally indicates the type of storage this file's
   * tables should used. If it is left unspecified, the default KV-storage
   * of the app will be used.
   */
  storage_type: StorageType;
}

function createBaseModuleSchemaDescriptor(): ModuleSchemaDescriptor {
  return { schema_file: [], prefix: new Uint8Array() };
}

export const ModuleSchemaDescriptor = {
  encode(message: ModuleSchemaDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schema_file) {
      ModuleSchemaDescriptor_FileEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema_file.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleSchemaDescriptor {
    return {
      schema_file: Array.isArray(object?.schema_file)
        ? object.schema_file.map((e: any) => ModuleSchemaDescriptor_FileEntry.fromJSON(e))
        : [],
      prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
    };
  },

  toJSON(message: ModuleSchemaDescriptor): unknown {
    const obj: any = {};
    if (message.schema_file) {
      obj.schema_file = message.schema_file.map((e) => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
    } else {
      obj.schema_file = [];
    }
    message.prefix !== undefined &&
      (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleSchemaDescriptor>, I>>(object: I): ModuleSchemaDescriptor {
    const message = createBaseModuleSchemaDescriptor();
    message.schema_file = object.schema_file?.map((e) => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  },
};

function createBaseModuleSchemaDescriptor_FileEntry(): ModuleSchemaDescriptor_FileEntry {
  return { id: 0, proto_file_name: "", storage_type: StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED };
}

export const ModuleSchemaDescriptor_FileEntry = {
  encode(message: ModuleSchemaDescriptor_FileEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.proto_file_name !== "") {
      writer.uint32(18).string(message.proto_file_name);
    }
    if (message.storage_type !== StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED) {
      writer.uint32(24).int32(storageTypeToNumber(message.storage_type));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor_FileEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.proto_file_name = reader.string();
          break;
        case 3:
          message.storage_type = storageTypeFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleSchemaDescriptor_FileEntry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      proto_file_name: isSet(object.proto_file_name) ? String(object.proto_file_name) : "",
      storage_type: isSet(object.storage_type)
        ? storageTypeFromJSON(object.storage_type)
        : StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED,
    };
  },

  toJSON(message: ModuleSchemaDescriptor_FileEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.proto_file_name !== undefined && (obj.proto_file_name = message.proto_file_name);
    message.storage_type !== undefined && (obj.storage_type = storageTypeToJSON(message.storage_type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ModuleSchemaDescriptor_FileEntry>, I>>(
    object: I,
  ): ModuleSchemaDescriptor_FileEntry {
    const message = createBaseModuleSchemaDescriptor_FileEntry();
    message.id = object.id ?? 0;
    message.proto_file_name = object.proto_file_name ?? "";
    message.storage_type = object.storage_type ?? StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
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
