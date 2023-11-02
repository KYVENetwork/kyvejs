import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.team.v1beta1";
/** Authority ... */
export interface Authority {
  /** total inflation rewards is the total amount of rewards the authority has received ever */
  total_rewards: string;
  /** claimed is the amount of inflation rewards claimed by the authority */
  rewards_claimed: string;
}
/** TeamVestingAccount ... */
export interface TeamVestingAccount {
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date in seconds */
  commencement: string;
  /**
   * clawback is a unix timestamp of a clawback in seconds. If timestamp is zero
   * it means that the account has not received a clawback
   */
  clawback: string;
  /** unlocked_claimed is the amount of $KYVE already claimed by the account holder */
  unlocked_claimed: string;
  /** the last time the unlocked amount was claimed */
  last_claimed_time: string;
  /** total rewards is the total amount of rewards the account has received ever */
  total_rewards: string;
  /** rewards claimed is the amount inflation rewards claimed by account holder */
  rewards_claimed: string;
}
export declare const Authority: {
  encode(message: Authority, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): Authority;
  fromJSON(object: any): Authority;
  toJSON(message: Authority): unknown;
  create<
    I extends {
      total_rewards?: string | undefined;
      rewards_claimed?: string | undefined;
    } & {
      total_rewards?: string | undefined;
      rewards_claimed?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Authority>]: never }
  >(
    base?: I | undefined
  ): Authority;
  fromPartial<
    I_1 extends {
      total_rewards?: string | undefined;
      rewards_claimed?: string | undefined;
    } & {
      total_rewards?: string | undefined;
      rewards_claimed?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Authority>]: never }
  >(
    object: I_1
  ): Authority;
};
export declare const TeamVestingAccount: {
  encode(message: TeamVestingAccount, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): TeamVestingAccount;
  fromJSON(object: any): TeamVestingAccount;
  toJSON(message: TeamVestingAccount): unknown;
  create<
    I extends {
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
    } & { [K in Exclude<keyof I, keyof TeamVestingAccount>]: never }
  >(
    base?: I | undefined
  ): TeamVestingAccount;
  fromPartial<
    I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof TeamVestingAccount>]: never }
  >(
    object: I_1
  ): TeamVestingAccount;
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
