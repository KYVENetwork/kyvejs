import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgFundPool,
  MsgDefundPool,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { isNotEmpty } from "../utils";

export const createPoolAminoConverters = (): AminoConverters => {
  return {
    "/kyve.pool.v1beta1.MsgFundPool": {
      aminoType: "kyve/pool/MsgFundPool",
      toAmino: (msg: MsgFundPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.id) && { id: msg.id }),
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgFundPool => ({
        creator: msg.creator,
        id: msg.id,
        amount: msg.amount,
      }),
    },
    "/kyve.pool.v1beta1.MsgDefundPool": {
      aminoType: "kyve/pool/MsgDefundPool",
      toAmino: (msg: MsgDefundPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.id) && { id: msg.id }),
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgDefundPool => ({
        creator: msg.creator,
        id: msg.id,
        amount: msg.amount,
      }),
    },
  };
};
