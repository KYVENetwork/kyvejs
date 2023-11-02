import _m0 from "protobufjs/minimal";
import { Authority, TeamVestingAccount } from "./team";
export declare const protobufPackage = "kyve.team.v1beta1";
/** GenesisState defines the team module's genesis state. */
export interface GenesisState {
  /** authority ... */
  authority?: Authority | undefined;
  /** account_list ... */
  account_list: TeamVestingAccount[];
  /** account_count ... */
  account_count: string;
}
export declare const GenesisState: {
  encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
  fromJSON(object: any): GenesisState;
  toJSON(message: GenesisState): unknown;
  create<
    I extends {
      authority?:
        | {
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }
        | undefined;
      account_list?:
        | {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[]
        | undefined;
      account_count?: string | undefined;
    } & {
      authority?:
        | ({
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & { [K in Exclude<keyof I["authority"], keyof Authority>]: never })
        | undefined;
      account_list?:
        | ({
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[] &
            ({
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              [K_1 in Exclude<
                keyof I["account_list"][number],
                keyof TeamVestingAccount
              >]: never;
            })[] & {
              [K_2 in Exclude<
                keyof I["account_list"],
                keyof {
                  id?: string | undefined;
                  total_allocation?: string | undefined;
                  commencement?: string | undefined;
                  clawback?: string | undefined;
                  unlocked_claimed?: string | undefined;
                  last_claimed_time?: string | undefined;
                  total_rewards?: string | undefined;
                  rewards_claimed?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      account_count?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never }
  >(
    base?: I | undefined
  ): GenesisState;
  fromPartial<
    I_1 extends {
      authority?:
        | {
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }
        | undefined;
      account_list?:
        | {
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[]
        | undefined;
      account_count?: string | undefined;
    } & {
      authority?:
        | ({
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          } & {
            [K_4 in Exclude<keyof I_1["authority"], keyof Authority>]: never;
          })
        | undefined;
      account_list?:
        | ({
            id?: string | undefined;
            total_allocation?: string | undefined;
            commencement?: string | undefined;
            clawback?: string | undefined;
            unlocked_claimed?: string | undefined;
            last_claimed_time?: string | undefined;
            total_rewards?: string | undefined;
            rewards_claimed?: string | undefined;
          }[] &
            ({
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              id?: string | undefined;
              total_allocation?: string | undefined;
              commencement?: string | undefined;
              clawback?: string | undefined;
              unlocked_claimed?: string | undefined;
              last_claimed_time?: string | undefined;
              total_rewards?: string | undefined;
              rewards_claimed?: string | undefined;
            } & {
              [K_5 in Exclude<
                keyof I_1["account_list"][number],
                keyof TeamVestingAccount
              >]: never;
            })[] & {
              [K_6 in Exclude<
                keyof I_1["account_list"],
                keyof {
                  id?: string | undefined;
                  total_allocation?: string | undefined;
                  commencement?: string | undefined;
                  clawback?: string | undefined;
                  unlocked_claimed?: string | undefined;
                  last_claimed_time?: string | undefined;
                  total_rewards?: string | undefined;
                  rewards_claimed?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
      account_count?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof GenesisState>]: never }
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
