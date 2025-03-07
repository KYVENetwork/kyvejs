import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgSetMultiCoinRewardsDistributionPolicy,
  MsgToggleMultiCoinRewards,
  MsgUpdateParams,
} from "@kyvejs/types/client/kyve/multi_coin_rewards/v1beta1/tx";

export const createMultiCoinRewardsConverters = (): AminoConverters => {
  return {
    "/kyve.multi_coin_rewards.v1beta1.MsgSetMultiCoinRewardsDistributionPolicy":
      {
        aminoType:
          "/kyve.multi_coin_rewards.v1beta1.MsgSetMultiCoinRewardsDistributionPolicy",
        toAmino: (msg: MsgSetMultiCoinRewardsDistributionPolicy) => ({
          creator: msg.creator,
          policy: msg.policy,
        }),
        fromAmino: (msg): MsgSetMultiCoinRewardsDistributionPolicy => ({
          creator: msg.creator,
          policy: msg.policy,
        }),
      },
    "/kyve.multi_coin_rewards.v1beta1.MsgToggleMultiCoinRewards": {
      aminoType: "/kyve.multi_coin_rewards.v1beta1.MsgToggleMultiCoinRewards",
      toAmino: (msg: MsgToggleMultiCoinRewards) => ({
        creator: msg.creator,
        ...(msg.enabled && { enabled: msg.enabled }),
      }),
      fromAmino: (msg): MsgToggleMultiCoinRewards => ({
        creator: msg.creator,
        enabled: msg.enabled,
      }),
    },
    "/kyve.multi_coin_rewards.v1beta1.MsgUpdateParams": {
      aminoType: "/kyve.multi_coin_rewards.v1beta1.MsgUpdateParams",
      toAmino: (msg: MsgUpdateParams) => ({
        authority: msg.authority,
        payload: msg.payload,
      }),
      fromAmino: (msg): MsgUpdateParams => ({
        authority: msg.authority,
        payload: msg.payload,
      }),
    },
  };
};
