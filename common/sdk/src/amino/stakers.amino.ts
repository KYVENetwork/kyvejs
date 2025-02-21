import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgJoinPool,
  MsgLeavePool,
  MsgUpdateCommission,
  MsgUpdateStakeFraction,
} from "@kyvejs/types/client/kyve/stakers/v1/tx";

import { isNotEmpty } from "../utils";

export const createStakersAminoConverters = (): AminoConverters => {
  return {
    "/kyve.stakers.v1.MsgUpdateCommission": {
      aminoType: "/kyve.stakers.v1.MsgUpdateCommission",
      toAmino: (msg: MsgUpdateCommission) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        commission: msg.commission,
      }),
      fromAmino: (msg): MsgUpdateCommission => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        commission: msg.commission,
      }),
    },
    "/kyve.stakers.v1.MsgUpdateStakeFraction": {
      aminoType: "/kyve.stakers.v1.MsgUpdateStakeFraction",
      toAmino: (msg: MsgUpdateStakeFraction) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        stake_fraction: msg.stake_fraction,
      }),
      fromAmino: (msg): MsgUpdateStakeFraction => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        stake_fraction: msg.stake_fraction,
      }),
    },
    "/kyve.stakers.v1.MsgJoinPool": {
      aminoType: "/kyve.stakers.v1.MsgJoinPool",
      toAmino: (msg: MsgJoinPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        pool_address: msg.pool_address,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
        commission: msg.commission,
        stake_fraction: msg.stake_fraction,
      }),
      fromAmino: (msg): MsgJoinPool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        pool_address: msg.pool_address,
        amount: msg.amount,
        commission: msg.commission,
        stake_fraction: msg.stake_fraction,
      }),
    },
    "/kyve.stakers.v1.MsgLeavePool": {
      aminoType: "/kyve.stakers.v1.MsgLeavePool",
      toAmino: (msg: MsgLeavePool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
      }),
      fromAmino: (msg): MsgLeavePool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
      }),
    },
  };
};
