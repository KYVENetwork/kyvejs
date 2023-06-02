import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgSubmitBundleProposal,
  MsgVoteBundleProposal,
  MsgClaimUploaderRole,
  MsgSkipUploaderRole,
} from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { isNotEmpty } from "../utils";

export const createBundlesAminoConverters = (): AminoConverters => {
  return {
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
      aminoType: "kyve/bundles/MsgSubmitBundleProposal",
      toAmino: (msg: MsgSubmitBundleProposal) => ({
        creator: msg.creator,
        staker: msg.staker,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        ...(isNotEmpty(msg.storage_id) && { storage_id: msg.storage_id }),
        ...(isNotEmpty(msg.data_size) && { data_size: msg.data_size }),
        ...(isNotEmpty(msg.data_hash) && { data_hash: msg.data_hash }),
        ...(isNotEmpty(msg.from_index) && { from_index: msg.from_index }),
        ...(isNotEmpty(msg.bundle_size) && { bundle_size: msg.bundle_size }),
        ...(isNotEmpty(msg.from_key) && { from_key: msg.from_key }),
        ...(isNotEmpty(msg.to_key) && { to_key: msg.to_key }),
        ...(isNotEmpty(msg.bundle_summary) && {
          bundle_summary: msg.bundle_summary,
        }),
      }),
      fromAmino: (msg): MsgSubmitBundleProposal => ({
        creator: msg.creator,
        staker: msg.staker,
        pool_id: msg.pool_id,
        storage_id: msg.storage_id,
        data_size: msg.data_size,
        data_hash: msg.data_hash,
        from_index: msg.from_index,
        bundle_size: msg.bundle_size,
        from_key: msg.from_key,
        to_key: msg.to_key,
        bundle_summary: msg.bundle_summary,
      }),
    },
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
      aminoType: "kyve/bundles/MsgVoteBundleProposal",
      toAmino: (msg: MsgVoteBundleProposal) => ({
        creator: msg.creator,
        staker: msg.staker,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        ...(isNotEmpty(msg.storage_id) && { storage_id: msg.storage_id }),
        vote: msg.vote,
      }),
      fromAmino: (msg): MsgVoteBundleProposal => ({
        creator: msg.creator,
        staker: msg.staker,
        pool_id: msg.pool_id,
        storage_id: msg.storage_id,
        vote: msg.vote,
      }),
    },
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
      aminoType: "kyve/bundles/MsgClaimUploaderRole",
      toAmino: (msg: MsgClaimUploaderRole) => ({
        creator: msg.creator,
        staker: msg.staker,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
      }),
      fromAmino: (msg): MsgClaimUploaderRole => ({
        creator: msg.creator,
        staker: msg.staker,
        pool_id: msg.pool_id,
      }),
    },
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
      aminoType: "kyve/bundles/MsgSkipUploaderRole",
      toAmino: (msg: MsgSkipUploaderRole) => ({
        creator: msg.creator,
        staker: msg.staker,
        ...(isNotEmpty(msg.pool_id) && { pool_id: msg.pool_id }),
        ...(isNotEmpty(msg.from_index) && { from_index: msg.from_index }),
      }),
      fromAmino: (msg): MsgSkipUploaderRole => ({
        creator: msg.creator,
        staker: msg.staker,
        pool_id: msg.pool_id,
        from_index: msg.from_index,
      }),
    },
  };
};
