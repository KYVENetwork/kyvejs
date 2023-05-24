import { AminoConverters } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import {
  MsgCreateStaker,
  MsgUpdateMetadata,
  MsgJoinPool,
  MsgUpdateCommission,
  MsgLeavePool,
} from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";

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
        ...(MsgCreateStaker.toJSON(msg) as object),
        commission: protoDecimalToJson(msg.commission),
      }),
      fromAmino: (msg): MsgCreateStaker => ({
        ...MsgCreateStaker.fromJSON(msg),
        commission: jsonDecimalToProto(msg.commission),
      }),
    },
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
      aminoType: "kyve/stakers/MsgUpdateMetadata",
      toAmino: (msg: MsgUpdateMetadata) => MsgUpdateMetadata.toJSON(msg),
      fromAmino: (msg): MsgUpdateMetadata => MsgUpdateMetadata.fromJSON(msg),
    },
    "/kyve.stakers.v1beta1.MsgJoinPool": {
      aminoType: "kyve/stakers/MsgJoinPool",
      toAmino: (msg: MsgJoinPool) => MsgJoinPool.toJSON(msg),
      fromAmino: (msg): MsgJoinPool => MsgJoinPool.fromJSON(msg),
    },
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
      aminoType: "kyve/stakers/MsgUpdateCommission",
      toAmino: (msg: MsgUpdateCommission) => ({
        ...(MsgUpdateCommission.toJSON(msg) as object),
        commission: protoDecimalToJson(msg.commission),
      }),
      fromAmino: (msg): MsgUpdateCommission => ({
        ...MsgUpdateCommission.fromJSON(msg),
        commission: jsonDecimalToProto(msg.commission),
      }),
    },
    "/kyve.stakers.v1beta1.MsgLeavePool": {
      aminoType: "kyve/stakers/MsgLeavePool",
      toAmino: (msg: MsgLeavePool) => MsgLeavePool.toJSON(msg),
      fromAmino: (msg): MsgLeavePool => MsgLeavePool.fromJSON(msg),
    },
  };
};
