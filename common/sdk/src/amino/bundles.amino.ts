import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgSubmitBundleProposal,
  MsgVoteBundleProposal,
  MsgClaimUploaderRole,
  MsgSkipUploaderRole,
} from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

export const createBundlesAminoConverters = (): AminoConverters => {
  return {
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
      aminoType: "kyve/bundles/MsgSubmitBundleProposal",
      toAmino: (msg: MsgSubmitBundleProposal) =>
        MsgSubmitBundleProposal.toJSON(msg),
      fromAmino: (msg): MsgSubmitBundleProposal =>
        MsgSubmitBundleProposal.fromJSON(msg),
    },
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
      aminoType: "kyve/bundles/MsgVoteBundleProposal",
      toAmino: (msg: MsgVoteBundleProposal) =>
        MsgVoteBundleProposal.toJSON(msg),
      fromAmino: (msg): MsgVoteBundleProposal =>
        MsgVoteBundleProposal.fromJSON(msg),
    },
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
      aminoType: "kyve/bundles/MsgClaimUploaderRole",
      toAmino: (msg: MsgClaimUploaderRole) => MsgClaimUploaderRole.toJSON(msg),
      fromAmino: (msg): MsgClaimUploaderRole =>
        MsgClaimUploaderRole.fromJSON(msg),
    },
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
      aminoType: "kyve/bundles/MsgSkipUploaderRole",
      toAmino: (msg: MsgSkipUploaderRole) => MsgSkipUploaderRole.toJSON(msg),
      fromAmino: (msg): MsgSkipUploaderRole =>
        MsgSkipUploaderRole.fromJSON(msg),
    },
  };
};
