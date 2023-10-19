/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.global.v1beta1";

/** Params defines the global module parameters. */
export interface Params {
  /** min_gas_price defines the minimum gas price value for all transactions. */
  min_gas_price: string;
  /** burn_ratio defines the ratio of transaction fees burnt. */
  burn_ratio: string;
  /**
   * gas_adjustments can add a constant amount of gas to a specific message type.
   * This gives more control to make certain messages more expensive to avoid spamming
   * of certain types of messages.
   */
  gas_adjustments: GasAdjustment[];
  /**
   * gas_refunds lets the governance specify a fraction of how much gas
   * a user gets refunded for a certain type of transaction.
   * This could be used to make transactions which support to network cheaper.
   * Gas refunds only work if the transaction only included one message.
   */
  gas_refunds: GasRefund[];
  /**
   * min_initial_deposit_ratio sets a minimum fraction of initial deposit for a
   * governance proposal. This is used to avoid spamming of proposals and
   * polluting the proposals page.
   */
  min_initial_deposit_ratio: string;
}

/**
 * GasAdjustment stores for every message type a fixed amount
 * of gas which is added to the message
 */
export interface GasAdjustment {
  /** type of the sdk-message */
  type: string;
  /** amount of gas which is added to the message */
  amount: string;
}

/**
 * GasRefund stores the fraction of gas which will be refunded for a given
 * type of message.
 * This only works if the transaction only includes one message.
 */
export interface GasRefund {
  /** type of the sdk-message */
  type: string;
  /** fraction in decimal representation between 0 and 1 */
  fraction: string;
}

function createBaseParams(): Params {
  return { min_gas_price: "", burn_ratio: "", gas_adjustments: [], gas_refunds: [], min_initial_deposit_ratio: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min_gas_price !== "") {
      writer.uint32(10).string(message.min_gas_price);
    }
    if (message.burn_ratio !== "") {
      writer.uint32(18).string(message.burn_ratio);
    }
    for (const v of message.gas_adjustments) {
      GasAdjustment.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.gas_refunds) {
      GasRefund.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.min_initial_deposit_ratio !== "") {
      writer.uint32(42).string(message.min_initial_deposit_ratio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.min_gas_price = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.burn_ratio = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gas_adjustments.push(GasAdjustment.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gas_refunds.push(GasRefund.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.min_initial_deposit_ratio = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      min_gas_price: isSet(object.min_gas_price) ? globalThis.String(object.min_gas_price) : "",
      burn_ratio: isSet(object.burn_ratio) ? globalThis.String(object.burn_ratio) : "",
      gas_adjustments: globalThis.Array.isArray(object?.gas_adjustments)
        ? object.gas_adjustments.map((e: any) => GasAdjustment.fromJSON(e))
        : [],
      gas_refunds: globalThis.Array.isArray(object?.gas_refunds)
        ? object.gas_refunds.map((e: any) => GasRefund.fromJSON(e))
        : [],
      min_initial_deposit_ratio: isSet(object.min_initial_deposit_ratio)
        ? globalThis.String(object.min_initial_deposit_ratio)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.min_gas_price !== "") {
      obj.min_gas_price = message.min_gas_price;
    }
    if (message.burn_ratio !== "") {
      obj.burn_ratio = message.burn_ratio;
    }
    if (message.gas_adjustments?.length) {
      obj.gas_adjustments = message.gas_adjustments.map((e) => GasAdjustment.toJSON(e));
    }
    if (message.gas_refunds?.length) {
      obj.gas_refunds = message.gas_refunds.map((e) => GasRefund.toJSON(e));
    }
    if (message.min_initial_deposit_ratio !== "") {
      obj.min_initial_deposit_ratio = message.min_initial_deposit_ratio;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.min_gas_price = object.min_gas_price ?? "";
    message.burn_ratio = object.burn_ratio ?? "";
    message.gas_adjustments = object.gas_adjustments?.map((e) => GasAdjustment.fromPartial(e)) || [];
    message.gas_refunds = object.gas_refunds?.map((e) => GasRefund.fromPartial(e)) || [];
    message.min_initial_deposit_ratio = object.min_initial_deposit_ratio ?? "";
    return message;
  },
};

function createBaseGasAdjustment(): GasAdjustment {
  return { type: "", amount: "0" };
}

export const GasAdjustment = {
  encode(message: GasAdjustment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.amount !== "0") {
      writer.uint32(16).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasAdjustment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasAdjustment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GasAdjustment {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: GasAdjustment): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GasAdjustment>, I>>(base?: I): GasAdjustment {
    return GasAdjustment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GasAdjustment>, I>>(object: I): GasAdjustment {
    const message = createBaseGasAdjustment();
    message.type = object.type ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseGasRefund(): GasRefund {
  return { type: "", fraction: "" };
}

export const GasRefund = {
  encode(message: GasRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasRefund {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fraction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GasRefund {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      fraction: isSet(object.fraction) ? globalThis.String(object.fraction) : "",
    };
  },

  toJSON(message: GasRefund): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.fraction !== "") {
      obj.fraction = message.fraction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GasRefund>, I>>(base?: I): GasRefund {
    return GasRefund.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GasRefund>, I>>(object: I): GasRefund {
    const message = createBaseGasRefund();
    message.type = object.type ?? "";
    message.fraction = object.fraction ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
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
