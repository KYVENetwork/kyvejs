/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.crisis.v1beta1";

/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
  sender: string;
  invariant_module_name: string;
  invariant_route: string;
}

/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}

function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return { sender: "", invariant_module_name: "", invariant_route: "" };
}

export const MsgVerifyInvariant = {
  encode(message: MsgVerifyInvariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariant_module_name !== "") {
      writer.uint32(18).string(message.invariant_module_name);
    }
    if (message.invariant_route !== "") {
      writer.uint32(26).string(message.invariant_route);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.invariant_module_name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invariant_route = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgVerifyInvariant {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      invariant_module_name: isSet(object.invariant_module_name) ? String(object.invariant_module_name) : "",
      invariant_route: isSet(object.invariant_route) ? String(object.invariant_route) : "",
    };
  },

  toJSON(message: MsgVerifyInvariant): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.invariant_module_name !== "") {
      obj.invariant_module_name = message.invariant_module_name;
    }
    if (message.invariant_route !== "") {
      obj.invariant_route = message.invariant_route;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(base?: I): MsgVerifyInvariant {
    return MsgVerifyInvariant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(object: I): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariant_module_name = object.invariant_module_name ?? "";
    message.invariant_route = object.invariant_route ?? "";
    return message;
  },
};

function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}

export const MsgVerifyInvariantResponse = {
  encode(_: MsgVerifyInvariantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgVerifyInvariantResponse {
    return {};
  },

  toJSON(_: MsgVerifyInvariantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(base?: I): MsgVerifyInvariantResponse {
    return MsgVerifyInvariantResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(_: I): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
};

/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}

export const MsgServiceName = "cosmos.crisis.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.VerifyInvariant = this.VerifyInvariant.bind(this);
  }
  VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse> {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request(this.service, "VerifyInvariant", data);
    return promise.then((data) => MsgVerifyInvariantResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
