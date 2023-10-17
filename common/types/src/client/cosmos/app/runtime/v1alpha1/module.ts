/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.app.runtime.v1alpha1";

/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  app_name: string;
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  begin_blockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  end_blockers: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  init_genesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  export_genesis: string[];
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  override_store_keys: StoreKeyConfig[];
}

/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  module_name: string;
  /** the kv store key to use instead of the module name. */
  kv_store_key: string;
}

function createBaseModule(): Module {
  return {
    app_name: "",
    begin_blockers: [],
    end_blockers: [],
    init_genesis: [],
    export_genesis: [],
    override_store_keys: [],
  };
}

export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.app_name !== "") {
      writer.uint32(10).string(message.app_name);
    }
    for (const v of message.begin_blockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.end_blockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.init_genesis) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.export_genesis) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.override_store_keys) {
      StoreKeyConfig.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.app_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.begin_blockers.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.end_blockers.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.init_genesis.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.export_genesis.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.override_store_keys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Module {
    return {
      app_name: isSet(object.app_name) ? String(object.app_name) : "",
      begin_blockers: Array.isArray(object?.begin_blockers) ? object.begin_blockers.map((e: any) => String(e)) : [],
      end_blockers: Array.isArray(object?.end_blockers) ? object.end_blockers.map((e: any) => String(e)) : [],
      init_genesis: Array.isArray(object?.init_genesis) ? object.init_genesis.map((e: any) => String(e)) : [],
      export_genesis: Array.isArray(object?.export_genesis) ? object.export_genesis.map((e: any) => String(e)) : [],
      override_store_keys: Array.isArray(object?.override_store_keys)
        ? object.override_store_keys.map((e: any) => StoreKeyConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.app_name !== "") {
      obj.app_name = message.app_name;
    }
    if (message.begin_blockers?.length) {
      obj.begin_blockers = message.begin_blockers;
    }
    if (message.end_blockers?.length) {
      obj.end_blockers = message.end_blockers;
    }
    if (message.init_genesis?.length) {
      obj.init_genesis = message.init_genesis;
    }
    if (message.export_genesis?.length) {
      obj.export_genesis = message.export_genesis;
    }
    if (message.override_store_keys?.length) {
      obj.override_store_keys = message.override_store_keys.map((e) => StoreKeyConfig.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Module>, I>>(base?: I): Module {
    return Module.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.app_name = object.app_name ?? "";
    message.begin_blockers = object.begin_blockers?.map((e) => e) || [];
    message.end_blockers = object.end_blockers?.map((e) => e) || [];
    message.init_genesis = object.init_genesis?.map((e) => e) || [];
    message.export_genesis = object.export_genesis?.map((e) => e) || [];
    message.override_store_keys = object.override_store_keys?.map((e) => StoreKeyConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStoreKeyConfig(): StoreKeyConfig {
  return { module_name: "", kv_store_key: "" };
}

export const StoreKeyConfig = {
  encode(message: StoreKeyConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    if (message.kv_store_key !== "") {
      writer.uint32(18).string(message.kv_store_key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kv_store_key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StoreKeyConfig {
    return {
      module_name: isSet(object.module_name) ? String(object.module_name) : "",
      kv_store_key: isSet(object.kv_store_key) ? String(object.kv_store_key) : "",
    };
  },

  toJSON(message: StoreKeyConfig): unknown {
    const obj: any = {};
    if (message.module_name !== "") {
      obj.module_name = message.module_name;
    }
    if (message.kv_store_key !== "") {
      obj.kv_store_key = message.kv_store_key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreKeyConfig>, I>>(base?: I): StoreKeyConfig {
    return StoreKeyConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreKeyConfig>, I>>(object: I): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.module_name = object.module_name ?? "";
    message.kv_store_key = object.kv_store_key ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
