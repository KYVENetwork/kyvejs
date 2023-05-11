import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { MsgFundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgCreateStaker } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";

export interface AminoMsgCreateStaker extends AminoMsg {
  readonly type: "kyve/stakers/MsgCreateStaker";
  readonly value: {
    readonly creator: string;
    readonly amount: string;
    readonly commission: string;
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
        commission,
      }),
      fromAmino: ({
        creator,
        amount,
        commission,
      }: AminoMsgCreateStaker["value"]): MsgCreateStaker => ({
        creator,
        amount,
        commission,
      }),
    },
  };
};

export interface AminoMsgFundPool extends AminoMsg {
  readonly type: "kyve/pool/MsgFundPool";
  readonly value: {
    readonly creator: string;
    readonly id: string;
    readonly amount: string;
  };
}

export const createPoolAminoConverters = (): AminoConverters => {
  return {
    "/kyve.pool.v1beta1.MsgFundPool": {
      aminoType: "kyve/pool/MsgFundPool",
      toAmino: ({
        creator,
        id,
        amount,
      }: MsgFundPool): AminoMsgFundPool["value"] => ({
        creator,
        id,
        amount,
      }),
      fromAmino: ({
        creator,
        id,
        amount,
      }: AminoMsgFundPool["value"]): MsgFundPool => ({
        creator,
        id,
        amount,
      }),
    },
  };
};
