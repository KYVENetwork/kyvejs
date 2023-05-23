import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import {
  MsgCreateStaker,
  MsgUpdateMetadata,
  MsgJoinPool,
  MsgUpdateCommission,
  MsgLeavePool,
  MsgUpdateParams,
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

export interface AminoMsgCreateStaker extends AminoMsg {
  readonly type: "kyve/stakers/MsgCreateStaker";
  readonly value: {
    readonly creator: string;
    readonly amount: string;
    readonly commission: string;
  };
}

export interface AminoMsgUpdateMetadata extends AminoMsg {
  readonly type: "kyve/stakers/MsgUpdateMetadata";
  readonly value: {
    readonly creator: string;
    readonly moniker: string;
    readonly website: string;
    readonly identity: string;
    readonly security_contact: string;
    readonly details: string;
  };
}

export interface AminoMsgJoinPool extends AminoMsg {
  readonly type: "kyve/stakers/MsgJoinPool";
  readonly value: {
    readonly creator: string;
    readonly pool_id: string;
    readonly valaddress: string;
    readonly amount: string;
  };
}

export interface AminoMsgUpdateCommission extends AminoMsg {
  readonly type: "kyve/stakers/MsgUpdateCommission";
  readonly value: {
    readonly creator: string;
    readonly commission: string;
  };
}

export interface AminoMsgLeavePool extends AminoMsg {
  readonly type: "kyve/stakers/MsgLeavePool";
  readonly value: {
    readonly creator: string;
    readonly pool_id: string;
  };
}

export interface AminoMsgUpdateParamsStakers extends AminoMsg {
  readonly type: "kyve/stakers/MsgUpdateParams";
  readonly value: {
    readonly authority: string;
    readonly payload: string;
  };
}

export const createStakersAminoConverters = (): AminoConverters => {
  return {
    "/kyve.stakers.v1beta1.MsgCreateStaker": {
      aminoType: "kyve/stakers/MsgCreateStaker",
      toAmino: ({
        creator,
        amount,
        commission,
      }: MsgCreateStaker): AminoMsgCreateStaker["value"] => ({
        creator,
        amount,
        commission: protoDecimalToJson(commission),
      }),
      fromAmino: ({
        creator,
        amount,
        commission,
      }: AminoMsgCreateStaker["value"]): MsgCreateStaker => ({
        creator,
        amount,
        commission: jsonDecimalToProto(commission),
      }),
    },
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
      aminoType: "kyve/stakers/MsgUpdateMetadata",
      toAmino: ({
        creator,
        moniker,
        website,
        identity,
        security_contact,
        details,
      }: MsgUpdateMetadata): AminoMsgUpdateMetadata["value"] => ({
        creator,
        moniker,
        website,
        identity,
        security_contact,
        details,
      }),
      fromAmino: ({
        creator,
        moniker,
        website,
        identity,
        security_contact,
        details,
      }: AminoMsgUpdateMetadata["value"]): MsgUpdateMetadata => ({
        creator,
        moniker,
        website,
        identity,
        security_contact,
        details,
      }),
    },
    "/kyve.stakers.v1beta1.MsgJoinPool": {
      aminoType: "kyve/stakers/MsgJoinPool",
      toAmino: ({
        creator,
        pool_id,
        valaddress,
        amount,
      }: MsgJoinPool): AminoMsgJoinPool["value"] => ({
        creator,
        pool_id,
        valaddress,
        amount,
      }),
      fromAmino: ({
        creator,
        pool_id,
        valaddress,
        amount,
      }: AminoMsgJoinPool["value"]): MsgJoinPool => ({
        creator,
        pool_id,
        valaddress,
        amount,
      }),
    },
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
      aminoType: "kyve/stakers/MsgUpdateCommission",
      toAmino: ({
        creator,
        commission,
      }: MsgUpdateCommission): AminoMsgUpdateCommission["value"] => ({
        creator,
        commission: protoDecimalToJson(commission),
      }),
      fromAmino: ({
        creator,
        commission,
      }: AminoMsgUpdateCommission["value"]): MsgUpdateCommission => ({
        creator,
        commission: jsonDecimalToProto(commission),
      }),
    },
    "/kyve.stakers.v1beta1.MsgLeavePool": {
      aminoType: "kyve/stakers/MsgLeavePool",
      toAmino: ({
        creator,
        pool_id,
      }: MsgLeavePool): AminoMsgLeavePool["value"] => ({
        creator,
        pool_id,
      }),
      fromAmino: ({
        creator,
        pool_id,
      }: AminoMsgLeavePool["value"]): MsgLeavePool => ({
        creator,
        pool_id,
      }),
    },
    "/kyve.stakers.v1beta1.MsgUpdateParams": {
      aminoType: "kyve/stakers/MsgUpdateParams",
      toAmino: ({
        authority,
        payload,
      }: MsgUpdateParams): AminoMsgUpdateParamsStakers["value"] => ({
        authority,
        payload,
      }),
      fromAmino: ({
        authority,
        payload,
      }: AminoMsgUpdateParamsStakers["value"]): MsgUpdateParams => ({
        authority,
        payload,
      }),
    },
  };
};
