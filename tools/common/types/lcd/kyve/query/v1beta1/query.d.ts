import _m0 from "protobufjs/minimal";
import { PoolStatus } from "../../pool/v1beta1/pool";
export declare const protobufPackage = "kyve.query.v1beta1";
/**
 * BasicPool contains the necessary properties need for a pool
 * to be displayed in the UI
 */
export interface BasicPool {
  /** id is the ID of the pool */
  id: string;
  /** name of the pool */
  name: string;
  /**
   * runtime for the protocol nodes
   * like evm, bitcoin, etc.
   */
  runtime: string;
  /** logo of the pool */
  logo: string;
  /** inflation_share_weight is the base payout for each bundle reward */
  inflation_share_weight: string;
  /** upload_interval is the interval bundles get created */
  upload_interval: string;
  /**
   * total_funds of the pool. If the pool runs
   * out of funds no more bundles will be produced
   */
  total_funds: string;
  /** total_delegation of the pool */
  total_delegation: string;
  /**
   * status of the pool if pool is able
   * to produce bundles, etc.
   */
  status: PoolStatus;
}
/**
 * FullStaker aggregates information from the staker and its delegators
 * as well as pending queue entries into one object.
 * It contains almost all needed information for a convenient usage
 */
export interface FullStaker {
  /** address of the staker */
  address: string;
  /** metadata as logo, moniker, etc. */
  metadata?: StakerMetadata | undefined;
  /** amount the staker has delegated to himself */
  self_delegation: string;
  /**
   * unbonding_amount is the amount the staker is currently unbonding
   * from the self-delegation.
   * This amount can be larger than `amount` when the staker
   * got slashed during unbonding. However, at the end of
   * the unbonding period this amount is double checked with the
   * remaining amount.
   */
  self_delegation_unbonding: string;
  /**
   * total_delegation returns the sum of all $KYVE users
   * have delegated to this staker
   */
  total_delegation: string;
  /**
   * delegator_count is the total number of individual
   * delegator addresses for that user.
   */
  delegator_count: string;
  /**
   * pools is a list of all pools the staker is currently
   * participating, i.e. allowed to vote and upload data.
   */
  pools: PoolMembership[];
}
/** StakerMetadata contains static information for a staker */
export interface StakerMetadata {
  /**
   * commission is the percentage of the rewards that will
   * get transferred to the staker before the remaining
   * rewards are split across all delegators
   */
  commission: string;
  /**
   * moniker is a human-readable name for displaying
   * the staker in the UI
   */
  moniker: string;
  /** website is a https-link to the website of the staker */
  website: string;
  /** identity from keybase.io */
  identity: string;
  /** security_contact ... */
  security_contact: string;
  /** details ... */
  details: string;
  /**
   * pending_commission_change shows if the staker plans
   * to change its commission. Delegators will see a warning in
   * the UI. A Commission change takes some time until
   * the commission is applied. Users have time to redelegate
   * if they not agree with the new commission.
   */
  pending_commission_change?: CommissionChangeEntry | undefined;
  /** commission_rewards are the rewards in $KYVE earned through commission */
  commission_rewards: string;
}
/**
 * CommissionChangeEntry shows when the old commission
 * of a staker will change to the new commission
 */
export interface CommissionChangeEntry {
  /**
   * commission is the new commission that will
   * become active once the change-time is over
   */
  commission: string;
  /**
   * creation_date is the UNIX-timestamp (in seconds)
   * of when the entry was created.
   */
  creation_date: string;
}
/**
 * PoolMembership shows in which pool the staker
 * is participating
 */
export interface PoolMembership {
  /** pool contains useful information about the pool */
  pool?: BasicPool | undefined;
  /**
   * points indicates if the staker is inactive
   * If the staker misses a vote, a point is added.
   * After 5 points the staker is removed from
   * the stakers set.
   */
  points: string;
  /**
   * is_leaving indicates if a user has scheduled a
   * a PoolLeave entry. After the leave-time is over
   * the staker will no longer participate in that pool
   */
  is_leaving: boolean;
  /**
   * Valaddress is the address which is authorized to vote
   * and submit bundles. If the server gets compromised
   * the staker can just change the valaddress.
   */
  valaddress: string;
  /**
   * balance is the valaddress account balance and indicates
   * whether or not the valaccount needs additional funds to
   * pay for gas fees
   */
  balance: string;
}
export declare const BasicPool: {
  encode(message: BasicPool, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): BasicPool;
  fromJSON(object: any): BasicPool;
  toJSON(message: BasicPool): unknown;
  create<
    I extends {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      inflation_share_weight?: string | undefined;
      upload_interval?: string | undefined;
      total_funds?: string | undefined;
      total_delegation?: string | undefined;
      status?: PoolStatus | undefined;
    } & {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      inflation_share_weight?: string | undefined;
      upload_interval?: string | undefined;
      total_funds?: string | undefined;
      total_delegation?: string | undefined;
      status?: PoolStatus | undefined;
    } & { [K in Exclude<keyof I, keyof BasicPool>]: never }
  >(
    base?: I | undefined
  ): BasicPool;
  fromPartial<
    I_1 extends {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      inflation_share_weight?: string | undefined;
      upload_interval?: string | undefined;
      total_funds?: string | undefined;
      total_delegation?: string | undefined;
      status?: PoolStatus | undefined;
    } & {
      id?: string | undefined;
      name?: string | undefined;
      runtime?: string | undefined;
      logo?: string | undefined;
      inflation_share_weight?: string | undefined;
      upload_interval?: string | undefined;
      total_funds?: string | undefined;
      total_delegation?: string | undefined;
      status?: PoolStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BasicPool>]: never }
  >(
    object: I_1
  ): BasicPool;
};
export declare const FullStaker: {
  encode(message: FullStaker, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): FullStaker;
  fromJSON(object: any): FullStaker;
  toJSON(message: FullStaker): unknown;
  create<
    I extends {
      address?: string | undefined;
      metadata?:
        | {
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            identity?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
            pending_commission_change?:
              | {
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                }
              | undefined;
            commission_rewards?: string | undefined;
          }
        | undefined;
      self_delegation?: string | undefined;
      self_delegation_unbonding?: string | undefined;
      total_delegation?: string | undefined;
      delegator_count?: string | undefined;
      pools?:
        | {
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?: PoolStatus | undefined;
                }
              | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
            valaddress?: string | undefined;
            balance?: string | undefined;
          }[]
        | undefined;
    } & {
      address?: string | undefined;
      metadata?:
        | ({
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            identity?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
            pending_commission_change?:
              | {
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                }
              | undefined;
            commission_rewards?: string | undefined;
          } & {
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            identity?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
            pending_commission_change?:
              | ({
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                } & {
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                } & {
                  [K in Exclude<
                    keyof I["metadata"]["pending_commission_change"],
                    keyof CommissionChangeEntry
                  >]: never;
                })
              | undefined;
            commission_rewards?: string | undefined;
          } & {
            [K_1 in Exclude<keyof I["metadata"], keyof StakerMetadata>]: never;
          })
        | undefined;
      self_delegation?: string | undefined;
      self_delegation_unbonding?: string | undefined;
      total_delegation?: string | undefined;
      delegator_count?: string | undefined;
      pools?:
        | ({
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?: PoolStatus | undefined;
                }
              | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
            valaddress?: string | undefined;
            balance?: string | undefined;
          }[] &
            ({
              pool?:
                | {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: PoolStatus | undefined;
                  }
                | undefined;
              points?: string | undefined;
              is_leaving?: boolean | undefined;
              valaddress?: string | undefined;
              balance?: string | undefined;
            } & {
              pool?:
                | ({
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: PoolStatus | undefined;
                  } & {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: PoolStatus | undefined;
                  } & {
                    [K_2 in Exclude<
                      keyof I["pools"][number]["pool"],
                      keyof BasicPool
                    >]: never;
                  })
                | undefined;
              points?: string | undefined;
              is_leaving?: boolean | undefined;
              valaddress?: string | undefined;
              balance?: string | undefined;
            } & {
              [K_3 in Exclude<
                keyof I["pools"][number],
                keyof PoolMembership
              >]: never;
            })[] & {
              [K_4 in Exclude<
                keyof I["pools"],
                keyof {
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: PoolStatus | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_5 in Exclude<keyof I, keyof FullStaker>]: never }
  >(
    base?: I | undefined
  ): FullStaker;
  fromPartial<
    I_1 extends {
      address?: string | undefined;
      metadata?:
        | {
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            identity?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
            pending_commission_change?:
              | {
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                }
              | undefined;
            commission_rewards?: string | undefined;
          }
        | undefined;
      self_delegation?: string | undefined;
      self_delegation_unbonding?: string | undefined;
      total_delegation?: string | undefined;
      delegator_count?: string | undefined;
      pools?:
        | {
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?: PoolStatus | undefined;
                }
              | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
            valaddress?: string | undefined;
            balance?: string | undefined;
          }[]
        | undefined;
    } & {
      address?: string | undefined;
      metadata?:
        | ({
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            identity?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
            pending_commission_change?:
              | {
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                }
              | undefined;
            commission_rewards?: string | undefined;
          } & {
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            identity?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
            pending_commission_change?:
              | ({
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                } & {
                  commission?: string | undefined;
                  creation_date?: string | undefined;
                } & {
                  [K_6 in Exclude<
                    keyof I_1["metadata"]["pending_commission_change"],
                    keyof CommissionChangeEntry
                  >]: never;
                })
              | undefined;
            commission_rewards?: string | undefined;
          } & {
            [K_7 in Exclude<
              keyof I_1["metadata"],
              keyof StakerMetadata
            >]: never;
          })
        | undefined;
      self_delegation?: string | undefined;
      self_delegation_unbonding?: string | undefined;
      total_delegation?: string | undefined;
      delegator_count?: string | undefined;
      pools?:
        | ({
            pool?:
              | {
                  id?: string | undefined;
                  name?: string | undefined;
                  runtime?: string | undefined;
                  logo?: string | undefined;
                  inflation_share_weight?: string | undefined;
                  upload_interval?: string | undefined;
                  total_funds?: string | undefined;
                  total_delegation?: string | undefined;
                  status?: PoolStatus | undefined;
                }
              | undefined;
            points?: string | undefined;
            is_leaving?: boolean | undefined;
            valaddress?: string | undefined;
            balance?: string | undefined;
          }[] &
            ({
              pool?:
                | {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: PoolStatus | undefined;
                  }
                | undefined;
              points?: string | undefined;
              is_leaving?: boolean | undefined;
              valaddress?: string | undefined;
              balance?: string | undefined;
            } & {
              pool?:
                | ({
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: PoolStatus | undefined;
                  } & {
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    inflation_share_weight?: string | undefined;
                    upload_interval?: string | undefined;
                    total_funds?: string | undefined;
                    total_delegation?: string | undefined;
                    status?: PoolStatus | undefined;
                  } & {
                    [K_8 in Exclude<
                      keyof I_1["pools"][number]["pool"],
                      keyof BasicPool
                    >]: never;
                  })
                | undefined;
              points?: string | undefined;
              is_leaving?: boolean | undefined;
              valaddress?: string | undefined;
              balance?: string | undefined;
            } & {
              [K_9 in Exclude<
                keyof I_1["pools"][number],
                keyof PoolMembership
              >]: never;
            })[] & {
              [K_10 in Exclude<
                keyof I_1["pools"],
                keyof {
                  pool?:
                    | {
                        id?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        inflation_share_weight?: string | undefined;
                        upload_interval?: string | undefined;
                        total_funds?: string | undefined;
                        total_delegation?: string | undefined;
                        status?: PoolStatus | undefined;
                      }
                    | undefined;
                  points?: string | undefined;
                  is_leaving?: boolean | undefined;
                  valaddress?: string | undefined;
                  balance?: string | undefined;
                }[]
              >]: never;
            })
        | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof FullStaker>]: never }
  >(
    object: I_1
  ): FullStaker;
};
export declare const StakerMetadata: {
  encode(message: StakerMetadata, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): StakerMetadata;
  fromJSON(object: any): StakerMetadata;
  toJSON(message: StakerMetadata): unknown;
  create<
    I extends {
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      pending_commission_change?:
        | {
            commission?: string | undefined;
            creation_date?: string | undefined;
          }
        | undefined;
      commission_rewards?: string | undefined;
    } & {
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      pending_commission_change?:
        | ({
            commission?: string | undefined;
            creation_date?: string | undefined;
          } & {
            commission?: string | undefined;
            creation_date?: string | undefined;
          } & {
            [K in Exclude<
              keyof I["pending_commission_change"],
              keyof CommissionChangeEntry
            >]: never;
          })
        | undefined;
      commission_rewards?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StakerMetadata>]: never }
  >(
    base?: I | undefined
  ): StakerMetadata;
  fromPartial<
    I_1 extends {
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      pending_commission_change?:
        | {
            commission?: string | undefined;
            creation_date?: string | undefined;
          }
        | undefined;
      commission_rewards?: string | undefined;
    } & {
      commission?: string | undefined;
      moniker?: string | undefined;
      website?: string | undefined;
      identity?: string | undefined;
      security_contact?: string | undefined;
      details?: string | undefined;
      pending_commission_change?:
        | ({
            commission?: string | undefined;
            creation_date?: string | undefined;
          } & {
            commission?: string | undefined;
            creation_date?: string | undefined;
          } & {
            [K_2 in Exclude<
              keyof I_1["pending_commission_change"],
              keyof CommissionChangeEntry
            >]: never;
          })
        | undefined;
      commission_rewards?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof StakerMetadata>]: never }
  >(
    object: I_1
  ): StakerMetadata;
};
export declare const CommissionChangeEntry: {
  encode(message: CommissionChangeEntry, writer?: _m0.Writer): _m0.Writer;
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CommissionChangeEntry;
  fromJSON(object: any): CommissionChangeEntry;
  toJSON(message: CommissionChangeEntry): unknown;
  create<
    I extends {
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & {
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommissionChangeEntry>]: never }
  >(
    base?: I | undefined
  ): CommissionChangeEntry;
  fromPartial<
    I_1 extends {
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & {
      commission?: string | undefined;
      creation_date?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CommissionChangeEntry>]: never }
  >(
    object: I_1
  ): CommissionChangeEntry;
};
export declare const PoolMembership: {
  encode(message: PoolMembership, writer?: _m0.Writer): _m0.Writer;
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolMembership;
  fromJSON(object: any): PoolMembership;
  toJSON(message: PoolMembership): unknown;
  create<
    I extends {
      pool?:
        | {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
          }
        | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
      valaddress?: string | undefined;
      balance?: string | undefined;
    } & {
      pool?:
        | ({
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
          } & {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
          } & { [K in Exclude<keyof I["pool"], keyof BasicPool>]: never })
        | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
      valaddress?: string | undefined;
      balance?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof PoolMembership>]: never }
  >(
    base?: I | undefined
  ): PoolMembership;
  fromPartial<
    I_1 extends {
      pool?:
        | {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
          }
        | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
      valaddress?: string | undefined;
      balance?: string | undefined;
    } & {
      pool?:
        | ({
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
          } & {
            id?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            inflation_share_weight?: string | undefined;
            upload_interval?: string | undefined;
            total_funds?: string | undefined;
            total_delegation?: string | undefined;
            status?: PoolStatus | undefined;
          } & { [K_2 in Exclude<keyof I_1["pool"], keyof BasicPool>]: never })
        | undefined;
      points?: string | undefined;
      is_leaving?: boolean | undefined;
      valaddress?: string | undefined;
      balance?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof PoolMembership>]: never }
  >(
    object: I_1
  ): PoolMembership;
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
