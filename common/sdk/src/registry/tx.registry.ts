import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";
/** cosmos **/
import { MsgSubmitProposal } from "@kyvejs/types/client/cosmos/gov/v1/tx";
import { MsgVote } from "@kyvejs/types/client/cosmos/gov/v1/tx";
/** bundles **/
import { MsgSubmitBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgVoteBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgClaimUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgSkipUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsBundles } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
/** fees **/
import { MsgUpdateParams as MsgUpdateParamsGlobal } from "@kyvejs/types/client/kyve/global/v1beta1/tx";
import { MsgCreatePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgUpdatePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgDisablePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgEnablePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgScheduleRuntimeUpgrade } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgCancelRuntimeUpgrade } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
/** stakers **/
import { MsgJoinPool } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgUpdateCommission } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgUpdateStakeFraction } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgLeavePool } from "@kyvejs/types/client/kyve/stakers/v1/tx";
import { MsgUpdateParams as MsgUpdateParamsStakers } from "@kyvejs/types/client/kyve/stakers/v1/tx";
/** funders **/
import { MsgCreateFunder } from "@kyvejs/types/lcd/kyve/funders/v1beta1/tx";
import { MsgUpdateFunder } from "@kyvejs/types/lcd/kyve/funders/v1beta1/tx";
import { MsgFundPool } from "@kyvejs/types/client/kyve/funders/v1beta1/tx";
import { MsgDefundPool } from "@kyvejs/types/client/kyve/funders/v1beta1/tx";
import {
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import {
  MsgBeginRedelegate,
  MsgCancelUnbondingDelegation,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";
/** multi_coin_rewards **/
import { MsgSetMultiCoinRewardsDistributionPolicy } from "@kyvejs/types/client/kyve/multi_coin_rewards/v1beta1/tx";
import { MsgToggleMultiCoinRewards } from "@kyvejs/types/client/kyve/multi_coin_rewards/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsMultiCoinRewards } from "@kyvejs/types/client/kyve/multi_coin_rewards/v1beta1/tx";

// TODO: why does <[string, GeneratedType]> does not work anymore?
export const registry: ReadonlyArray<[string, any]> = [
  ...defaultRegistryTypes,
  /**pool **/
  ["/kyve.pool.v1beta1.MsgCreatePool", MsgCreatePool],
  ["/kyve.pool.v1beta1.UpdatePool", MsgUpdatePool],
  ["/kyve.pool.v1beta1.MsgDisablePool", MsgDisablePool],
  ["/kyve.pool.v1beta1.MsgEnablePool", MsgEnablePool],
  ["/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade", MsgScheduleRuntimeUpgrade],
  ["/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade", MsgCancelRuntimeUpgrade],
  /** funders **/
  ["/kyve.funders.v1beta1.MsgCreateFunder", MsgCreateFunder],
  ["/kyve.funders.v1beta1.MsgUpdateFunder", MsgUpdateFunder],
  ["/kyve.funders.v1beta1.MsgFundPool", MsgFundPool],
  ["/kyve.funders.v1beta1.MsgDefundPool", MsgDefundPool],
  /** stakers **/
  ["/kyve.stakers.v1.MsgUpdateCommission", MsgUpdateCommission],
  ["/kyve.stakers.v1.MsgUpdateStakeFraction", MsgUpdateStakeFraction],
  ["/kyve.stakers.v1.MsgJoinPool", MsgJoinPool],
  ["/kyve.stakers.v1.MsgLeavePool", MsgLeavePool],
  /** bundles **/
  ["/kyve.bundles.v1beta1.MsgSubmitBundleProposal", MsgSubmitBundleProposal],
  ["/kyve.bundles.v1beta1.MsgVoteBundleProposal", MsgVoteBundleProposal],
  ["/kyve.bundles.v1beta1.MsgClaimUploaderRole", MsgClaimUploaderRole],
  ["/kyve.bundles.v1beta1.MsgSkipUploaderRole", MsgSkipUploaderRole],
  /** multi_coin_rewards **/
  [
    "/kyve.multi_coin_rewards.v1beta1.MsgSetMultiCoinRewardsDistributionPolicy",
    MsgSetMultiCoinRewardsDistributionPolicy,
  ],
  [
    "/kyve.multi_coin_rewards.v1beta1.MsgToggleMultiCoinRewards",
    MsgToggleMultiCoinRewards,
  ],
  /** cosmos **/
  ["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgVote", MsgVote],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const encodeTxMsg = {
  createFunder(value: MsgCreateFunder) {
    return {
      type_url: "/kyve.funders.v1beta1.MsgCreateFunder",
      value: MsgCreateFunder.encode(value).finish(),
    };
  },

  updateFunder(value: MsgUpdateFunder) {
    return {
      type_url: "/kyve.funders.v1beta1.MsgUpdateFunder",
      value: MsgUpdateFunder.encode(value).finish(),
    };
  },

  fundPool(value: MsgFundPool) {
    return {
      type_url: "/kyve.funders.v1beta1.MsgFundPool",
      value: MsgFundPool.encode(value).finish(),
    };
  },

  defundPool(value: MsgDefundPool) {
    return {
      type_url: "/kyve.funders.v1beta1.MsgDefundPool",
      value: MsgDefundPool.encode(value).finish(),
    };
  },

  createPool(value: MsgCreatePool) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgCreatePool",
      value: MsgCreatePool.encode(value).finish(),
    };
  },

  updatePool(value: MsgUpdatePool) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgUpdatePool",
      value: MsgUpdatePool.encode(value).finish(),
    };
  },

  disablePool(value: MsgDisablePool) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgDisablePool",
      value: MsgDisablePool.encode(value).finish(),
    };
  },

  enablePool(value: MsgEnablePool) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgEnablePool",
      value: MsgEnablePool.encode(value).finish(),
    };
  },

  scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
      value: MsgScheduleRuntimeUpgrade.encode(value).finish(),
    };
  },

  cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
      value: MsgCancelRuntimeUpgrade.encode(value).finish(),
    };
  },

  updateCommission(value: MsgUpdateCommission) {
    return {
      type_url: "/kyve.stakers.v1.MsgUpdateCommission",
      value: MsgUpdateCommission.encode(value).finish(),
    };
  },

  updateStakeFraction(value: MsgUpdateStakeFraction) {
    return {
      type_url: "/kyve.stakers.v1.MsgUpdateStakeFraction",
      value: MsgUpdateStakeFraction.encode(value).finish(),
    };
  },

  joinPool(value: MsgJoinPool) {
    return {
      type_url: "/kyve.stakers.v1.MsgJoinPool",
      value: MsgJoinPool.encode(value).finish(),
    };
  },

  leavePool(value: MsgJoinPool) {
    return {
      type_url: "/kyve.stakers.v1.MsgLeavePool",
      value: MsgLeavePool.encode(value).finish(),
    };
  },

  submitBundleProposal(value: MsgSubmitBundleProposal) {
    return {
      type_url: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
      value: MsgSubmitBundleProposal.encode(value).finish(),
    };
  },

  voteBundleProposal(value: MsgVoteBundleProposal) {
    return {
      type_url: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
      value: MsgVoteBundleProposal.encode(value).finish(),
    };
  },

  claimUploaderRole(value: MsgClaimUploaderRole) {
    return {
      type_url: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
      value: MsgClaimUploaderRole.encode(value).finish(),
    };
  },

  updateParamsStakers(value: MsgUpdateParamsStakers) {
    return {
      type_url: "/kyve.stakers.v1.MsgUpdateParams",
      value: MsgUpdateParamsStakers.encode(value).finish(),
    };
  },

  updateParamsBundles(value: MsgUpdateParamsBundles) {
    return {
      type_url: "/kyve.bundles.v1beta1.MsgUpdateParams",
      value: MsgUpdateParamsBundles.encode(value).finish(),
    };
  },

  updateParamsGlobal(value: MsgUpdateParamsGlobal) {
    return {
      type_url: "/kyve.global.v1beta1.MsgUpdateParams",
      value: MsgUpdateParamsGlobal.encode(value).finish(),
    };
  },

  updateParamsMultiCoinRewards(value: MsgUpdateParamsMultiCoinRewards) {
    return {
      type_url:
        "/kyve.multi_coin_rewards.v1beta1.MsgUpdateParamsMultiCoinRewards",
      value: MsgUpdateParamsMultiCoinRewards.encode(value).finish(),
    };
  },

  delegate(value: MsgDelegate) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(value).finish(),
    };
  },

  undelegate(value: MsgUndelegate) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(value).finish(),
    };
  },

  cancelUnbonding(value: MsgCancelUnbondingDelegation) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
      value: MsgCancelUnbondingDelegation.encode(value).finish(),
    };
  },

  redelegate(value: MsgBeginRedelegate) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value: MsgBeginRedelegate.encode(value).finish(),
    };
  },

  createValidator(value: MsgCreateValidator) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value: MsgCreateValidator.encode(value).finish(),
    };
  },

  editValidator(value: MsgEditValidator) {
    return {
      type_url: "/cosmos.staking.v1beta1.MsgEditValidator",
      value: MsgEditValidator.encode(value).finish(),
    };
  },

  withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
    return {
      type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(value).finish(),
    };
  },

  withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
    return {
      type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(value).finish(),
    };
  },

  setMultiCoinRewardsDistributionPolicy(
    value: MsgSetMultiCoinRewardsDistributionPolicy
  ) {
    return {
      type_url:
        "/kyve.multi_coin_rewards.v1beta1.MsgSetMultiCoinRewardsDistributionPolicy",
      value: MsgSetMultiCoinRewardsDistributionPolicy.encode(value).finish(),
    };
  },

  toggleMultiCoinRewards(value: MsgToggleMultiCoinRewards) {
    return {
      type_url: "/cosmos.multi_coin_rewards.v1beta1.MsgToggleMultiCoinRewards",
      value: MsgToggleMultiCoinRewards.encode(value).finish(),
    };
  },
};

export const withTypeUrl = {
  createFunder(value: MsgCreateFunder) {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
      value,
    };
  },

  updateFunder(value: MsgUpdateFunder) {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
      value,
    };
  },

  fundPool(value: MsgFundPool) {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
      value,
    };
  },

  defundPool(value: MsgDefundPool) {
    return {
      typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
      value,
    };
  },

  createPool(value: MsgCreatePool) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
      value,
    };
  },

  updatePool(value: MsgUpdatePool) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
      value,
    };
  },

  disablePool(value: MsgDisablePool) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
      value,
    };
  },

  enablePool(value: MsgEnablePool) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
      value,
    };
  },

  scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
      value,
    };
  },

  cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
      value,
    };
  },

  updateCommission(value: MsgUpdateCommission) {
    return {
      typeUrl: "/kyve.stakers.v1.MsgUpdateCommission",
      value,
    };
  },

  updateStakeFraction(value: MsgUpdateStakeFraction) {
    return {
      typeUrl: "/kyve.stakers.v1.MsgUpdateStakeFraction",
      value,
    };
  },

  joinPool(value: MsgJoinPool) {
    return {
      typeUrl: "/kyve.stakers.v1.MsgJoinPool",
      value,
    };
  },

  leavePool(value: MsgLeavePool) {
    return {
      typeUrl: "/kyve.stakers.v1.MsgLeavePool",
      value,
    };
  },

  submitBundleProposal(value: MsgSubmitBundleProposal) {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
      value,
    };
  },

  voteBundleProposal(value: MsgVoteBundleProposal) {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
      value,
    };
  },

  skipUploaderRole(value: MsgSkipUploaderRole) {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
      value,
    };
  },

  claimUploaderRole(value: MsgClaimUploaderRole) {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
      value,
    };
  },

  updateParamsStakers(value: MsgUpdateParamsStakers) {
    return {
      typeUrl: "/kyve.stakers.v1.MsgUpdateParams",
      value,
    };
  },

  updateParamsBundles(value: MsgUpdateParamsBundles) {
    return {
      typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
      value,
    };
  },

  updateParamsGlobal(value: MsgUpdateParamsGlobal) {
    return {
      typeUrl: "/kyve.global.v1beta1.MsgUpdateParams",
      value,
    };
  },

  updateParamsMultiCoinRewards(value: MsgUpdateParamsMultiCoinRewards) {
    return {
      typeUrl:
        "/kyve.multi_coin_rewards.v1beta1.MsgUpdateParamsMultiCoinRewards",
      value,
    };
  },

  delegate(value: MsgDelegate) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value,
    };
  },

  undelegate(value: MsgUndelegate) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value,
    };
  },

  cancelUnbonding(value: MsgCancelUnbondingDelegation) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
      value,
    };
  },

  redelegate(value: MsgBeginRedelegate) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
      value,
    };
  },

  createValidator(value: MsgCreateValidator) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
      value,
    };
  },

  editValidator(value: MsgEditValidator) {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
      value,
    };
  },

  withdrawDelegatorReward(value: MsgWithdrawDelegatorReward) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value,
    };
  },

  withdrawValidatorCommission(value: MsgWithdrawValidatorCommission) {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value,
    };
  },

  setMultiCoinRewardsDistributionPolicy(
    value: MsgSetMultiCoinRewardsDistributionPolicy
  ) {
    return {
      typeUrl:
        "/kyve.multi_coin_rewards.v1beta1.MsgSetMultiCoinRewardsDistributionPolicy",
      value,
    };
  },

  toggleMultiCoinRewards(value: MsgToggleMultiCoinRewards) {
    return {
      typeUrl: "/cosmos.multi_coin_rewards.v1beta1.MsgToggleMultiCoinRewards",
      value,
    };
  },
};
