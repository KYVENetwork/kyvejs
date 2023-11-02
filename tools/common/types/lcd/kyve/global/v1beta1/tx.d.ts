import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.global.v1beta1";
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/global parameters to update. */
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export declare const MsgUpdateParams: {
  encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
  fromJSON(object: any): MsgUpdateParams;
  toJSON(message: MsgUpdateParams): unknown;
  create<
    I extends {
      authority?: string | undefined;
      payload?: string | undefined;
    } & {
      authority?: string | undefined;
      payload?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateParams>]: never }
  >(
    base?: I | undefined
  ): MsgUpdateParams;
  fromPartial<
    I_1 extends {
      authority?: string | undefined;
      payload?: string | undefined;
    } & {
      authority?: string | undefined;
      payload?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgUpdateParams>]: never }
  >(
    object: I_1
  ): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
  encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateParamsResponse;
  fromJSON(_: any): MsgUpdateParamsResponse;
  toJSON(_: MsgUpdateParamsResponse): unknown;
  create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never }>(
    base?: I | undefined
  ): MsgUpdateParamsResponse;
  fromPartial<
    I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never }
  >(
    _: I_1
  ): MsgUpdateParamsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/global
   * module parameters. The authority is hard-coded to the x/gov module
   * account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgServiceName = "kyve.global.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
  private readonly rpc;
  private readonly service;
  constructor(
    rpc: Rpc,
    opts?: {
      service?: string;
    }
  );
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {
      [K in keyof P]: Exact<P[K], I[K]>;
    } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };
export {};
