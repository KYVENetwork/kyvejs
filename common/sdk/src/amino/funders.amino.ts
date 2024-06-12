import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgCreateFunder,
  MsgDefundPool,
  MsgFundPool,
  MsgUpdateFunder,
} from "@kyvejs/types/client/kyve/funders/v1beta1/tx";

import { isNotEmpty } from "../utils";

export const createFundersAminoConverters = (): AminoConverters => {
  return {
    "/kyve.funders.v1beta1.MsgFundPool": {
      aminoType: "kyve/funders/MsgFundPool",
      toAmino: (msg: MsgFundPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        amounts: [...msg.amounts],
        amounts_per_bundle: [...msg.amounts_per_bundle],
      }),
      fromAmino: (msg): MsgFundPool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        amounts: [...msg.amounts],
        amounts_per_bundle: [...msg.amounts_per_bundle],
      }),
    },
    "/kyve.funders.v1beta1.MsgDefundPool": {
      aminoType: "kyve/funders/MsgDefundPool",
      toAmino: (msg: MsgDefundPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { id: msg.pool_id }),
        amounts: [...msg.amounts],
      }),
      fromAmino: (msg): MsgDefundPool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        amounts: [...msg.amounts],
      }),
    },
    "/kyve.funders.v1beta1.MsgCreateFunder": {
      aminoType: "kyve/funders/MsgCreateFunder",
      toAmino: (msg: MsgCreateFunder) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.moniker) && { moniker: msg.moniker }),
        ...(isNotEmpty(msg.description) && { description: msg.description }),
        ...(isNotEmpty(msg.website) && { website: msg.website }),
        ...(isNotEmpty(msg.identity) && { identity: msg.identity }),
        ...(isNotEmpty(msg.contact) && { contact: msg.contact }),
      }),
      fromAmino: (msg): MsgCreateFunder => ({
        creator: msg.creator,
        moniker: msg.moniker,
        description: msg.description,
        website: msg.website,
        identity: msg.identity,
        contact: msg.contact,
      }),
    },
    "/kyve.funders.v1beta1.MsgUpdateFunder": {
      aminoType: "kyve/funders/MsgUpdateFunder",
      toAmino: (msg: MsgUpdateFunder) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.moniker) && { moniker: msg.moniker }),
        ...(isNotEmpty(msg.description) && { description: msg.description }),
        ...(isNotEmpty(msg.website) && { website: msg.website }),
        ...(isNotEmpty(msg.identity) && { identity: msg.identity }),
        ...(isNotEmpty(msg.contact) && { contact: msg.contact }),
      }),
      fromAmino: (msg): MsgUpdateFunder => ({
        creator: msg.creator,
        moniker: msg.moniker,
        description: msg.description,
        website: msg.website,
        identity: msg.identity,
        contact: msg.contact,
      }),
    },
  };
};
