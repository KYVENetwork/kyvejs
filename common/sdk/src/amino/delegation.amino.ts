import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgDelegate,
  MsgWithdrawRewards,
  MsgRedelegate,
  MsgUndelegate,
  MsgUpdateParams,
} from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";

export interface AminoMsgDelegate extends AminoMsg {
  readonly type: "kyve/delegation/MsgDelegate";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
    readonly amount: string;
  };
}

export interface AminoMsgWithdrawRewards extends AminoMsg {
  readonly type: "kyve/delegation/MsgWithdrawRewards";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
  };
}

export interface AminoMsgRedelegate extends AminoMsg {
  readonly type: "kyve/delegation/MsgRedelegate";
  readonly value: {
    readonly creator: string;
    readonly from_staker: string;
    readonly to_staker: string;
    readonly amount: string;
  };
}

export interface AminoMsgUndelegate extends AminoMsg {
  readonly type: "kyve/delegation/MsgUndelegate";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
    readonly amount: string;
  };
}

export interface AminoMsgUpdateParamsDelegation extends AminoMsg {
  readonly type: "kyve/delegation/MsgUpdateParams";
  readonly value: {
    readonly authority: string;
    readonly payload: string;
  };
}

export const createDelegationAminoConverters = (): AminoConverters => {
  return {
    "/kyve.delegation.v1beta1.MsgDelegate": {
      aminoType: "kyve/delegation/MsgDelegate",
      toAmino: ({
        creator,
        staker,
        amount,
      }: MsgDelegate): AminoMsgDelegate["value"] => ({
        creator,
        staker,
        amount,
      }),
      fromAmino: ({
        creator,
        staker,
        amount,
      }: AminoMsgDelegate["value"]): MsgDelegate => ({
        creator,
        staker,
        amount,
      }),
    },
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
      aminoType: "kyve/delegation/MsgWithdrawRewards",
      toAmino: ({
        creator,
        staker,
      }: MsgWithdrawRewards): AminoMsgWithdrawRewards["value"] => ({
        creator,
        staker,
      }),
      fromAmino: ({
        creator,
        staker,
      }: AminoMsgWithdrawRewards["value"]): MsgWithdrawRewards => ({
        creator,
        staker,
      }),
    },
    "/kyve.delegation.v1beta1.MsgRedelegate": {
      aminoType: "kyve/delegation/MsgRedelegate",
      toAmino: ({
        creator,
        from_staker,
        to_staker,
        amount,
      }: MsgRedelegate): AminoMsgRedelegate["value"] => ({
        creator,
        from_staker,
        to_staker,
        amount,
      }),
      fromAmino: ({
        creator,
        from_staker,
        to_staker,
        amount,
      }: AminoMsgRedelegate["value"]): MsgRedelegate => ({
        creator,
        from_staker,
        to_staker,
        amount,
      }),
    },
    "/kyve.delegation.v1beta1.MsgUndelegate": {
      aminoType: "kyve/delegation/MsgUndelegate",
      toAmino: ({
        creator,
        staker,
        amount,
      }: MsgUndelegate): AminoMsgUndelegate["value"] => ({
        creator,
        staker,
        amount,
      }),
      fromAmino: ({
        creator,
        staker,
        amount,
      }: AminoMsgUndelegate["value"]): MsgUndelegate => ({
        creator,
        staker,
        amount,
      }),
    },
    "/kyve.delegation.v1beta1.MsgUpdateParams": {
      aminoType: "kyve/delegation/MsgUpdateParams",
      toAmino: ({
        authority,
        payload,
      }: MsgUpdateParams): AminoMsgUpdateParamsDelegation["value"] => ({
        authority,
        payload,
      }),
      fromAmino: ({
        authority,
        payload,
      }: AminoMsgUpdateParamsDelegation["value"]): MsgUpdateParams => ({
        authority,
        payload,
      }),
    },
  };
};
