import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgFundPool,
  MsgDefundPool,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";

export const createPoolAminoConverters = (): AminoConverters => {
  return {
    "/kyve.pool.v1beta1.MsgFundPool": {
      aminoType: "kyve/pool/MsgFundPool",
      toAmino: (msg: MsgFundPool) => MsgFundPool.toJSON(msg),
      fromAmino: (msg): MsgFundPool => MsgFundPool.fromJSON(msg),
    },
    "/kyve.pool.v1beta1.MsgDefundPool": {
      aminoType: "kyve/pool/MsgDefundPool",
      toAmino: (msg: MsgDefundPool) => MsgDefundPool.toJSON(msg),
      fromAmino: (msg): MsgDefundPool => MsgDefundPool.fromJSON(msg),
    },
  };
};
