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
      toAmino: (msg: MsgFundPool): unknown => MsgFundPool.toJSON(msg),
      fromAmino: (msg: unknown): MsgFundPool => MsgFundPool.fromJSON(msg),
    },
    "/kyve.pool.v1beta1.MsgDefundPool": {
      aminoType: "kyve/pool/MsgDefundPool",
      toAmino: (msg: MsgDefundPool): unknown => MsgDefundPool.toJSON(msg),
      fromAmino: (msg: unknown): MsgDefundPool => MsgDefundPool.fromJSON(msg),
    },
  };
};
