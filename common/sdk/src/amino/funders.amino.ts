import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgFundPool,
  MsgDefundPool,
} from "@kyvejs/types/client/kyve/funders/v1beta1/tx";
import { isNotEmpty } from "../utils";

export const createFundersAminoConverters = (): AminoConverters => {
  return {
    "/kyve.funders.v1beta1.MsgFundPool": {
      aminoType: "kyve/pool/MsgFundPool",
      toAmino: (msg: MsgFundPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
        ...(isNotEmpty(msg.amount_per_bundle) && {amount_per_bundle: msg.amount_per_bundle})
      }),
      fromAmino: (msg): MsgFundPool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        amount: msg.amount,
        amount_per_bundle: msg.amount_per_bundle,
      }),
    },
    "/kyve.funders.v1beta1.MsgDefundPool": {
      aminoType: "kyve/pool/MsgDefundPool",
      toAmino: (msg: MsgDefundPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { id: msg.pool_id }),
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgDefundPool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        amount: msg.amount,
      }),
    },
  };
};
