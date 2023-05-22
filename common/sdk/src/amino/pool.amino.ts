import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgDefundPool,
  MsgFundPool,
  MsgCreatePool,
  MsgUpdatePool,
  MsgDisablePool,
  MsgEnablePool,
  MsgScheduleRuntimeUpgrade,
  MsgCancelRuntimeUpgrade,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";

export interface AminoMsgFundPool extends AminoMsg {
  readonly type: "kyve/pool/MsgFundPool";
  readonly value: {
    readonly creator: string;
    readonly id: string;
    readonly amount: string;
  };
}

export interface AminoMsgDefundPool extends AminoMsg {
  readonly type: "kyve/pool/MsgDefundPool";
  readonly value: {
    readonly creator: string;
    readonly id: string;
    readonly amount: string;
  };
}

export interface AminoMsgCreatePool extends AminoMsg {
  readonly type: "kyve/pool/MsgCreatePool";
  readonly value: {
    readonly authority: string;
    readonly name: string;
    readonly runtime: string;
    readonly logo: string;
    readonly config: string;
    readonly start_key: string;
    readonly upload_interval: string;
    readonly operating_cost: string;
    readonly min_delegation: string;
    readonly max_bundle_size: string;
    readonly version: string;
    readonly binaries: string;
    readonly storage_provider_id: number;
    readonly compression_id: number;
  };
}

export interface AminoMsgUpdatePool extends AminoMsg {
  readonly type: "kyve/pool/MsgUpdatePool";
  readonly value: {
    readonly authority: string;
    readonly id: string;
    readonly payload: string;
  };
}

export interface AminoMsgDisablePool extends AminoMsg {
  readonly type: "kyve/pool/MsgDisablePool";
  readonly value: {
    readonly authority: string;
    readonly id: string;
  };
}

export interface AminoMsgEnablePool extends AminoMsg {
  readonly type: "kyve/pool/MsgEnablePool";
  readonly value: {
    readonly authority: string;
    readonly id: string;
  };
}

export interface AminoMsgScheduleRuntimeUpgrade extends AminoMsg {
  readonly type: "kyve/pool/MsgScheduleRuntimeUpgrade";
  readonly value: {
    readonly authority: string;
    readonly runtime: string;
    readonly version: string;
    readonly scheduled_at: string;
    readonly duration: string;
    readonly binaries: string;
  };
}

export interface AminoMsgCancelRuntimeUpgrade extends AminoMsg {
  readonly type: "kyve/pool/MsgCancelRuntimeUpgrade";
  readonly value: {
    readonly authority: string;
    readonly runtime: string;
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
    "/kyve.pool.v1beta1.MsgDefundPool": {
      aminoType: "kyve/pool/MsgDefundPool",
      toAmino: ({
        creator,
        id,
        amount,
      }: MsgDefundPool): AminoMsgDefundPool["value"] => ({
        creator,
        id,
        amount,
      }),
      fromAmino: ({
        creator,
        id,
        amount,
      }: AminoMsgDefundPool["value"]): MsgDefundPool => ({
        creator,
        id,
        amount,
      }),
    },
    "/kyve.pool.v1beta1.MsgCreatePool": {
      aminoType: "kyve/pool/MsgCreatePool",
      toAmino: ({
        authority,
        name,
        runtime,
        logo,
        config,
        start_key,
        upload_interval,
        operating_cost,
        min_delegation,
        max_bundle_size,
        version,
        binaries,
        storage_provider_id,
        compression_id,
      }: MsgCreatePool): AminoMsgCreatePool["value"] => ({
        authority,
        name,
        runtime,
        logo,
        config,
        start_key,
        upload_interval,
        operating_cost,
        min_delegation,
        max_bundle_size,
        version,
        binaries,
        storage_provider_id,
        compression_id,
      }),
      fromAmino: ({
        authority,
        name,
        runtime,
        logo,
        config,
        start_key,
        upload_interval,
        operating_cost,
        min_delegation,
        max_bundle_size,
        version,
        binaries,
        storage_provider_id,
        compression_id,
      }: AminoMsgCreatePool["value"]): MsgCreatePool => ({
        authority,
        name,
        runtime,
        logo,
        config,
        start_key,
        upload_interval,
        operating_cost,
        min_delegation,
        max_bundle_size,
        version,
        binaries,
        storage_provider_id,
        compression_id,
      }),
    },
    "/kyve.pool.v1beta1.MsgUpdatePool": {
      aminoType: "kyve/pool/MsgUpdatePool",
      toAmino: ({
        authority,
        id,
        payload,
      }: MsgUpdatePool): AminoMsgUpdatePool["value"] => ({
        authority,
        id,
        payload,
      }),
      fromAmino: ({
        authority,
        id,
        payload,
      }: AminoMsgUpdatePool["value"]): MsgUpdatePool => ({
        authority,
        id,
        payload,
      }),
    },
    "/kyve.pool.v1beta1.MsgDisablePool": {
      aminoType: "kyve/pool/MsgDisablePool",
      toAmino: ({
        authority,
        id,
      }: MsgDisablePool): AminoMsgDisablePool["value"] => ({
        authority,
        id,
      }),
      fromAmino: ({
        authority,
        id,
      }: AminoMsgDisablePool["value"]): MsgDisablePool => ({
        authority,
        id,
      }),
    },
    "/kyve.pool.v1beta1.MsgEnablePool": {
      aminoType: "kyve/pool/MsgEnablePool",
      toAmino: ({
        authority,
        id,
      }: MsgEnablePool): AminoMsgEnablePool["value"] => ({
        authority,
        id,
      }),
      fromAmino: ({
        authority,
        id,
      }: AminoMsgEnablePool["value"]): MsgEnablePool => ({
        authority,
        id,
      }),
    },
    "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
      aminoType: "kyve/pool/MsgScheduleRuntimeUpgrade",
      toAmino: ({
        authority,
        runtime,
        version,
        scheduled_at,
        duration,
        binaries,
      }: MsgScheduleRuntimeUpgrade): AminoMsgScheduleRuntimeUpgrade["value"] => ({
        authority,
        runtime,
        version,
        scheduled_at,
        duration,
        binaries,
      }),
      fromAmino: ({
        authority,
        runtime,
        version,
        scheduled_at,
        duration,
        binaries,
      }: AminoMsgScheduleRuntimeUpgrade["value"]): MsgScheduleRuntimeUpgrade => ({
        authority,
        runtime,
        version,
        scheduled_at,
        duration,
        binaries,
      }),
    },
    "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
      aminoType: "kyve/pool/MsgCancelRuntimeUpgrade",
      toAmino: ({
        authority,
        runtime,
      }: MsgCancelRuntimeUpgrade): AminoMsgCancelRuntimeUpgrade["value"] => ({
        authority,
        runtime,
      }),
      fromAmino: ({
        authority,
        runtime,
      }: AminoMsgCancelRuntimeUpgrade["value"]): MsgCancelRuntimeUpgrade => ({
        authority,
        runtime,
      }),
    },
  };
};
