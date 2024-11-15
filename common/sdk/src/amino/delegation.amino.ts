import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgDelegate,
  MsgRedelegate,
  MsgUndelegate,
  MsgWithdrawRewards,
} from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";

import { isNotEmpty } from "../utils";

export const createDelegationAminoConverters = (): AminoConverters => {
  return {
    "/kyve.delegation.v1beta1.MsgDelegate": {
      aminoType: "/kyve.delegation.v1beta1.MsgDelegate",
      toAmino: (msg: MsgDelegate) => ({
        creator: msg.creator,
        staker: msg.staker,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgDelegate => ({
        creator: msg.creator,
        staker: msg.staker,
        amount: msg.amount,
      }),
    },
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
      aminoType: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
      toAmino: (msg: MsgWithdrawRewards) => ({
        creator: msg.creator,
        staker: msg.staker,
      }),
      fromAmino: (msg): MsgWithdrawRewards => ({
        creator: msg.creator,
        staker: msg.staker,
      }),
    },
    "/kyve.delegation.v1beta1.MsgRedelegate": {
      aminoType: "/kyve.delegation.v1beta1.MsgRedelegate",
      toAmino: (msg: MsgRedelegate) => ({
        creator: msg.creator,
        from_staker: msg.from_staker,
        to_staker: msg.to_staker,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgRedelegate => ({
        creator: msg.creator,
        from_staker: msg.from_staker,
        to_staker: msg.to_staker,
        amount: msg.amount,
      }),
    },
    "/kyve.delegation.v1beta1.MsgUndelegate": {
      aminoType: "/kyve.delegation.v1beta1.MsgUndelegate",
      toAmino: (msg: MsgUndelegate) => ({
        creator: msg.creator,
        staker: msg.staker,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgUndelegate => ({
        creator: msg.creator,
        staker: msg.staker,
        amount: msg.amount,
      }),
    },
  };
};
