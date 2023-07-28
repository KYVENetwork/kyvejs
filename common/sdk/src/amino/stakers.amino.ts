import { AminoConverters } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import {
  MsgCreateStaker,
  MsgUpdateMetadata,
  MsgJoinPool,
  MsgUpdateCommission,
  MsgLeavePool,
  MsgClaimCommissionRewards,
} from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { isNotEmpty } from "../utils";

function protoDecimalToJson(decimal: string): string {
  const parsed = Decimal.fromAtomics(decimal, 18);
  const [whole, fractional] = parsed.toString().split(".");
  return `${whole}.${(fractional ?? "").padEnd(18, "0")}`;
}

function jsonDecimalToProto(decimal: string): string {
  const parsed = Decimal.fromUserInput(decimal, 18);
  return parsed.atomics;
}

export const createStakersAminoConverters = (): AminoConverters => {
  return {
    "/kyve.stakers.v1beta1.MsgCreateStaker": {
      aminoType: "kyve/stakers/MsgCreateStaker",
      toAmino: (msg: MsgCreateStaker) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
        commission: protoDecimalToJson(msg.commission),
      }),
      fromAmino: (msg): MsgCreateStaker => ({
        creator: msg.creator,
        amount: msg.amount,
        commission: jsonDecimalToProto(msg.commission),
      }),
    },
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
      aminoType: "kyve/stakers/MsgUpdateMetadata",
      toAmino: (msg: MsgUpdateMetadata) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.moniker) && { moniker: msg.moniker }),
        ...(isNotEmpty(msg.website) && { website: msg.website }),
        ...(isNotEmpty(msg.identity) && { identity: msg.identity }),
        ...(isNotEmpty(msg.security_contact) && {
          security_contact: msg.security_contact,
        }),
        ...(isNotEmpty(msg.details) && { details: msg.details }),
      }),
      fromAmino: (msg): MsgUpdateMetadata => ({
        creator: msg.creator,
        moniker: msg.moniker,
        website: msg.website,
        identity: msg.identity,
        security_contact: msg.security_contact,
        details: msg.details,
      }),
    },
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
      aminoType: "kyve/stakers/MsgUpdateCommission",
      toAmino: (msg: MsgUpdateCommission) => ({
        creator: msg.creator,
        commission: protoDecimalToJson(msg.commission),
      }),
      fromAmino: (msg): MsgUpdateCommission => ({
        creator: msg.creator,
        commission: jsonDecimalToProto(msg.commission),
      }),
    },
    "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
      aminoType: "kyve/stakers/MsgClaimCommissionRewards",
      toAmino: (msg: MsgClaimCommissionRewards) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgClaimCommissionRewards => ({
        creator: msg.creator,
        amount: msg.amount,
      }),
    },
    "/kyve.stakers.v1beta1.MsgJoinPool": {
      aminoType: "kyve/stakers/MsgJoinPool",
      toAmino: (msg: MsgJoinPool) => ({
        creator: msg.creator,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        valaddress: msg.valaddress,
        ...(isNotEmpty(msg.amount) && { amount: msg.amount }),
      }),
      fromAmino: (msg): MsgJoinPool => ({
        creator: msg.creator,
        pool_id: msg.pool_id,
        valaddress: msg.valaddress,
        amount: msg.amount,
      }),
    },
    "/kyve.stakers.v1beta1.MsgLeavePool": {
      aminoType: "kyve/stakers/MsgLeavePool",
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
