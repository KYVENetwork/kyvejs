import _m0 from "protobufjs/minimal";
import { Funder, Funding, FundingState } from "./funders";
import { Params } from "./params";
export declare const protobufPackage = "kyve.funders.v1beta1";
/** GenesisState defines the funders module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params | undefined;
  /** funder_list ... */
  funder_list: Funder[];
  /** funding_list ... */
  funding_list: Funding[];
  /** funding_state ... */
  funding_state_list: FundingState[];
}
export declare const GenesisState: {
  encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
  fromJSON(object: any): GenesisState;
  toJSON(message: GenesisState): unknown;
  create<
    I extends {
      params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
      funder_list?:
        | {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
          }[]
        | undefined;
      funding_list?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
      funding_state_list?:
        | {
            pool_id?: string | undefined;
            active_funder_addresses?: string[] | undefined;
          }[]
        | undefined;
    } & {
      params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & { [K in Exclude<keyof I["params"], keyof Params>]: never })
        | undefined;
      funder_list?:
        | ({
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
          }[] &
            ({
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
            } & {
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
            } & {
              [K_1 in Exclude<
                keyof I["funder_list"][number],
                keyof Funder
              >]: never;
            })[] & {
              [K_2 in Exclude<
                keyof I["funder_list"],
                keyof {
                  address?: string | undefined;
                  moniker?: string | undefined;
                  identity?: string | undefined;
                  website?: string | undefined;
                  contact?: string | undefined;
                  description?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      funding_list?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I["funding_list"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["funding_list"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      funding_state_list?:
        | ({
            pool_id?: string | undefined;
            active_funder_addresses?: string[] | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              active_funder_addresses?: string[] | undefined;
            } & {
              pool_id?: string | undefined;
              active_funder_addresses?:
                | (string[] &
                    string[] & {
                      [K_5 in Exclude<
                        keyof I["funding_state_list"][number]["active_funder_addresses"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
            } & {
              [K_6 in Exclude<
                keyof I["funding_state_list"][number],
                keyof FundingState
              >]: never;
            })[] & {
              [K_7 in Exclude<
                keyof I["funding_state_list"],
                keyof {
                  pool_id?: string | undefined;
                  active_funder_addresses?: string[] | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_8 in Exclude<keyof I, keyof GenesisState>]: never }
  >(
    base?: I | undefined
  ): GenesisState;
  fromPartial<
    I_1 extends {
      params?:
        | {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          }
        | undefined;
      funder_list?:
        | {
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
          }[]
        | undefined;
      funding_list?:
        | {
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[]
        | undefined;
      funding_state_list?:
        | {
            pool_id?: string | undefined;
            active_funder_addresses?: string[] | undefined;
          }[]
        | undefined;
    } & {
      params?:
        | ({
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & {
            min_funding_amount?: string | undefined;
            min_funding_amount_per_bundle?: string | undefined;
            min_funding_multiple?: string | undefined;
          } & { [K_9 in Exclude<keyof I_1["params"], keyof Params>]: never })
        | undefined;
      funder_list?:
        | ({
            address?: string | undefined;
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            contact?: string | undefined;
            description?: string | undefined;
          }[] &
            ({
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
            } & {
              address?: string | undefined;
              moniker?: string | undefined;
              identity?: string | undefined;
              website?: string | undefined;
              contact?: string | undefined;
              description?: string | undefined;
            } & {
              [K_10 in Exclude<
                keyof I_1["funder_list"][number],
                keyof Funder
              >]: never;
            })[] & {
              [K_11 in Exclude<
                keyof I_1["funder_list"],
                keyof {
                  address?: string | undefined;
                  moniker?: string | undefined;
                  identity?: string | undefined;
                  website?: string | undefined;
                  contact?: string | undefined;
                  description?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      funding_list?:
        | ({
            funder_address?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            amount_per_bundle?: string | undefined;
            total_funded?: string | undefined;
          }[] &
            ({
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              funder_address?: string | undefined;
              pool_id?: string | undefined;
              amount?: string | undefined;
              amount_per_bundle?: string | undefined;
              total_funded?: string | undefined;
            } & {
              [K_12 in Exclude<
                keyof I_1["funding_list"][number],
                keyof Funding
              >]: never;
            })[] & {
              [K_13 in Exclude<
                keyof I_1["funding_list"],
                keyof {
                  funder_address?: string | undefined;
                  pool_id?: string | undefined;
                  amount?: string | undefined;
                  amount_per_bundle?: string | undefined;
                  total_funded?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      funding_state_list?:
        | ({
            pool_id?: string | undefined;
            active_funder_addresses?: string[] | undefined;
          }[] &
            ({
              pool_id?: string | undefined;
              active_funder_addresses?: string[] | undefined;
            } & {
              pool_id?: string | undefined;
              active_funder_addresses?:
                | (string[] &
                    string[] & {
                      [K_14 in Exclude<
                        keyof I_1["funding_state_list"][number]["active_funder_addresses"],
                        keyof string[]
                      >]: never;
                    })
                | undefined;
            } & {
              [K_15 in Exclude<
                keyof I_1["funding_state_list"][number],
                keyof FundingState
              >]: never;
            })[] & {
              [K_16 in Exclude<
                keyof I_1["funding_state_list"],
                keyof {
                  pool_id?: string | undefined;
                  active_funder_addresses?: string[] | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof GenesisState>]: never }
  >(
    object: I_1
  ): GenesisState;
};
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
