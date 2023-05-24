import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import { MsgUpdateParams } from "@kyvejs/types/client/kyve/global/v1beta1/tx";

export interface AminoMsgUpdateParamsGlobal extends AminoMsg {
  readonly type: "kyve/global/MsgUpdateParams";
  readonly value: {
    readonly authority: string;
    readonly payload: string;
  };
}

export const createGlobalAminoConverters = (): AminoConverters => {
  return {
    "/kyve.global.v1beta1.MsgUpdateParams": {
      aminoType: "kyve/global/MsgUpdateParams",
      toAmino: ({
        authority,
        payload,
      }: MsgUpdateParams): AminoMsgUpdateParamsGlobal["value"] => ({
        authority,
        payload,
      }),
      fromAmino: ({
        authority,
        payload,
      }: AminoMsgUpdateParamsGlobal["value"]): MsgUpdateParams => ({
        authority,
        payload,
      }),
    },
  };
};
