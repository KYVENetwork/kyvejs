import { AminoMsg } from "@cosmjs/amino";
import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgSubmitBundleProposal,
  MsgVoteBundleProposal,
  MsgUpdateParams,
  MsgClaimUploaderRole,
  MsgSkipUploaderRole,
  VoteType,
} from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

function protoVoteToJson(vote: string): VoteType {
  switch (vote) {
    case "VOTE_TYPE_UNSPECIFIED":
      return 0;
    case "VOTE_TYPE_VALID":
      return 1;
    case "VOTE_TYPE_INVALID":
      return 2;
    case "VOTE_TYPE_ABSTAIN":
      return 3;
    default:
      return -1;
  }
}

function jsonVoteToProto(vote: VoteType): string {
  switch (vote) {
    case 0:
      return "VOTE_TYPE_UNSPECIFIED";
    case 1:
      return "VOTE_TYPE_VALID";
    case 2:
      return "VOTE_TYPE_INVALID";
    case 3:
      return "VOTE_TYPE_ABSTAIN";
    default:
      return "UNRECOGNIZED";
  }
}

export interface AminoMsgSubmitBundleProposal extends AminoMsg {
  readonly type: "kyve/bundles/MsgSubmitBundleProposal";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
    readonly pool_id: string;
    readonly storage_id: string;
    readonly data_size: string;
    readonly data_hash: string;
    readonly from_index: string;
    readonly bundle_size: string;
    readonly from_key: string;
    readonly to_key: string;
    readonly bundle_summary: string;
  };
}

export interface AminoMsgVoteBundleProposal extends AminoMsg {
  readonly type: "kyve/bundles/MsgVoteBundleProposal";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
    readonly pool_id: string;
    readonly storage_id: string;
    readonly vote: VoteType;
  };
}

export interface AminoMsgClaimUploaderRole extends AminoMsg {
  readonly type: "kyve/bundles/MsgClaimUploaderRole";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
    readonly pool_id: string;
  };
}

export interface AminoMsgSkipUploaderRole extends AminoMsg {
  readonly type: "kyve/bundles/MsgSkipUploaderRole";
  readonly value: {
    readonly creator: string;
    readonly staker: string;
    readonly pool_id: string;
    readonly from_index: string;
  };
}

export interface AminoMsgUpdateParamsBundles extends AminoMsg {
  readonly type: "kyve/bundles/MsgUpdateParams";
  readonly value: {
    readonly authority: string;
    readonly payload: string;
  };
}

export const createBundlesAminoConverters = (): AminoConverters => {
  return {
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
      aminoType: "kyve/bundles/MsgSubmitBundleProposal",
      toAmino: ({
        creator,
        staker,
        pool_id,
        storage_id,
        data_size,
        data_hash,
        from_index,
        bundle_size,
        from_key,
        to_key,
        bundle_summary,
      }: MsgSubmitBundleProposal): AminoMsgSubmitBundleProposal["value"] => ({
        creator,
        staker,
        pool_id,
        storage_id,
        data_size,
        data_hash,
        from_index,
        bundle_size,
        from_key,
        to_key,
        bundle_summary,
      }),
      fromAmino: ({
        creator,
        staker,
        pool_id,
        storage_id,
        data_size,
        data_hash,
        from_index,
        bundle_size,
        from_key,
        to_key,
        bundle_summary,
      }: AminoMsgSubmitBundleProposal["value"]): MsgSubmitBundleProposal => ({
        creator,
        staker,
        pool_id,
        storage_id,
        data_size,
        data_hash,
        from_index,
        bundle_size,
        from_key,
        to_key,
        bundle_summary,
      }),
    },
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
      aminoType: "kyve/bundles/MsgVoteBundleProposal",
      toAmino: ({
        creator,
        staker,
        pool_id,
        storage_id,
        vote,
      }: MsgVoteBundleProposal): AminoMsgVoteBundleProposal["value"] => ({
        creator,
        staker,
        pool_id,
        storage_id,
        vote,
      }),
      fromAmino: ({
        creator,
        staker,
        pool_id,
        storage_id,
        vote,
      }: AminoMsgVoteBundleProposal["value"]): MsgVoteBundleProposal => ({
        creator,
        staker,
        pool_id,
        storage_id,
        vote,
      }),
    },
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
      aminoType: "kyve/bundles/MsgClaimUploaderRole",
      toAmino: ({
        creator,
        staker,
        pool_id,
      }: MsgClaimUploaderRole): AminoMsgClaimUploaderRole["value"] => ({
        creator,
        staker,
        pool_id,
      }),
      fromAmino: ({
        creator,
        staker,
        pool_id,
      }: AminoMsgClaimUploaderRole["value"]): MsgClaimUploaderRole => ({
        creator,
        staker,
        pool_id,
      }),
    },
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
      aminoType: "kyve/bundles/MsgSkipUploaderRole",
      toAmino: ({
        creator,
        staker,
        pool_id,
        from_index,
      }: MsgSkipUploaderRole): AminoMsgSkipUploaderRole["value"] => ({
        creator,
        staker,
        pool_id,
        from_index,
      }),
      fromAmino: ({
        creator,
        staker,
        pool_id,
        from_index,
      }: AminoMsgSkipUploaderRole["value"]): MsgSkipUploaderRole => ({
        creator,
        staker,
        pool_id,
        from_index,
      }),
    },
    "/kyve.bundles.v1beta1.MsgUpdateParams": {
      aminoType: "kyve/bundles/MsgUpdateParams",
      toAmino: ({
        authority,
        payload,
      }: MsgUpdateParams): AminoMsgUpdateParamsBundles["value"] => ({
        authority,
        payload,
      }),
      fromAmino: ({
        authority,
        payload,
      }: AminoMsgUpdateParamsBundles["value"]): MsgUpdateParams => ({
        authority,
        payload,
      }),
    },
  };
};
