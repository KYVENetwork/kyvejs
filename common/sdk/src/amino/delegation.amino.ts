import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgDelegate,
  MsgWithdrawRewards,
  MsgRedelegate,
  MsgUndelegate,
} from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";

export const createDelegationAminoConverters = (): AminoConverters => {
  return {
    "/kyve.delegation.v1beta1.MsgDelegate": {
      aminoType: "kyve/delegation/MsgDelegate",
      toAmino: (msg: MsgDelegate) => MsgDelegate.toJSON(msg),
      fromAmino: (msg): MsgDelegate => MsgDelegate.fromJSON(msg),
    },
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
      aminoType: "kyve/delegation/MsgWithdrawRewards",
      toAmino: (msg: MsgWithdrawRewards) => MsgWithdrawRewards.toJSON(msg),
      fromAmino: (msg): MsgWithdrawRewards => MsgWithdrawRewards.fromJSON(msg),
    },
    "/kyve.delegation.v1beta1.MsgRedelegate": {
      aminoType: "kyve/delegation/MsgRedelegate",
      toAmino: (msg: MsgRedelegate) => MsgRedelegate.toJSON(msg),
      fromAmino: (msg): MsgRedelegate => MsgRedelegate.fromJSON(msg),
    },
    "/kyve.delegation.v1beta1.MsgUndelegate": {
      aminoType: "kyve/delegation/MsgUndelegate",
      toAmino: (msg: MsgUndelegate) => MsgUndelegate.toJSON(msg),
      fromAmino: (msg): MsgUndelegate => MsgUndelegate.fromJSON(msg),
    },
  };
};
