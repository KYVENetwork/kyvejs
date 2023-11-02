import { GeneratedType, Registry } from "@cosmjs/proto-signing";
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
/** delegations **/
import { MsgDelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgWithdrawRewards } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgRedelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUndelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsDelegation } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
/** fees **/
import { MsgUpdateParams as MsgUpdateParamsGlobal } from "@kyvejs/types/client/kyve/global/v1beta1/tx";
/** pool **/
import { MsgFundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgDefundPool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgCreatePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgUpdatePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgDisablePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgEnablePool } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgScheduleRuntimeUpgrade } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
import { MsgCancelRuntimeUpgrade } from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
/** stakers **/
import {
  MsgClaimCommissionRewards,
  MsgCreateStaker,
} from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateMetadata } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgJoinPool } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateCommission } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgLeavePool } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateParams as MsgUpdateParamsStakers } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";

export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  /**pool **/
  ["/kyve.pool.v1beta1.MsgFundPool", MsgFundPool],
  ["/kyve.pool.v1beta1.MsgDefundPool", MsgDefundPool],
  ["/kyve.pool.v1beta1.MsgCreatePool", MsgCreatePool],
  ["/kyve.pool.v1beta1.UpdatePool", MsgUpdatePool],
  ["/kyve.pool.v1beta1.MsgDisablePool", MsgDisablePool],
  ["/kyve.pool.v1beta1.MsgEnablePool", MsgEnablePool],
  ["/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade", MsgScheduleRuntimeUpgrade],
  ["/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade", MsgCancelRuntimeUpgrade],
  /** stakers **/
  ["/kyve.stakers.v1beta1.MsgCreateStaker", MsgCreateStaker],
  ["/kyve.stakers.v1beta1.MsgUpdateMetadata", MsgUpdateMetadata],
  ["/kyve.stakers.v1beta1.MsgUpdateCommission", MsgUpdateCommission],
  [
    "/kyve.stakers.v1beta1.MsgClaimCommissionRewards",
    MsgClaimCommissionRewards,
  ],
  ["/kyve.stakers.v1beta1.MsgJoinPool", MsgJoinPool],
  ["/kyve.stakers.v1beta1.MsgLeavePool", MsgLeavePool],
  /** delegations  **/
  ["/kyve.delegation.v1beta1.MsgDelegate", MsgDelegate],
  ["/kyve.delegation.v1beta1.MsgWithdrawRewards", MsgWithdrawRewards],
  ["/kyve.delegation.v1beta1.MsgUndelegate", MsgUndelegate],
  ["/kyve.delegation.v1beta1.MsgRedelegate", MsgRedelegate],
  /** bundles **/
  ["/kyve.bundles.v1beta1.MsgSubmitBundleProposal", MsgSubmitBundleProposal],
  ["/kyve.bundles.v1beta1.MsgVoteBundleProposal", MsgVoteBundleProposal],
  ["/kyve.bundles.v1beta1.MsgClaimUploaderRole", MsgClaimUploaderRole],
  ["/kyve.bundles.v1beta1.MsgSkipUploaderRole", MsgSkipUploaderRole],
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
  fundPool(value: MsgFundPool) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgFundPool",
      value: MsgFundPool.encode(value).finish(),
    };
  },

  defundPool(value: MsgDefundPool) {
    return {
      type_url: "/kyve.pool.v1beta1.MsgDefundPool",
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

  createStaker(value: MsgCreateStaker) {
    return {
      type_url: "/kyve.stakers.v1beta1.MsgCreateStaker",
      value: MsgCreateStaker.encode(value).finish(),
    };
  },

  updateMetadata(value: MsgUpdateMetadata) {
    return {
      type_url: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
      value: MsgUpdateMetadata.encode(value).finish(),
    };
  },

  updateCommission(value: MsgUpdateCommission) {
    return {
      type_url: "/kyve.stakers.v1beta1.MsgUpdateCommission",
      value: MsgUpdateCommission.encode(value).finish(),
    };
  },

  claimCommissionRewards(value: MsgClaimCommissionRewards) {
    return {
      type_url: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards",
      value: MsgClaimCommissionRewards.encode(value).finish(),
    };
  },

  joinPool(value: MsgJoinPool) {
    return {
      type_url: "/kyve.stakers.v1beta1.MsgJoinPool",
      value: MsgJoinPool.encode(value).finish(),
    };
  },

  leavePool(value: MsgJoinPool) {
    return {
      type_url: "/kyve.stakers.v1beta1.MsgLeavePool",
      value: MsgLeavePool.encode(value).finish(),
    };
  },

  delegate(value: MsgDelegate) {
    return {
      type_url: "/kyve.delegation.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(value).finish(),
    };
  },

  withdrawRewards(value: MsgWithdrawRewards) {
    return {
      type_url: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
      value: MsgWithdrawRewards.encode(value).finish(),
    };
  },
  undelegate(value: MsgUndelegate) {
    return {
      type_url: "/kyve.delegation.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(value).finish(),
    };
  },

  redelegate(value: MsgRedelegate) {
    return {
      type_url: "/kyve.delegation.v1beta1.MsgRedelegate",
      value: MsgRedelegate.encode(value).finish(),
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
      type_url: "/kyve.stakers.v1beta1.MsgUpdateParams",
      value: MsgUpdateParamsStakers.encode(value).finish(),
    };
  },

  updateParamsDelegation(value: MsgUpdateParamsDelegation) {
    return {
      type_url: "/kyve.delegation.v1beta1.MsgUpdateParams",
      value: MsgUpdateParamsDelegation.encode(value).finish(),
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
};

export const withTypeUrl = {
  fundPool(value: MsgFundPool) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
      value,
    };
  },

  defundPool(value: MsgDefundPool) {
    return {
      typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
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

  createStaker(value: MsgCreateStaker) {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgCreateStaker",
      value,
    };
  },

  updateMetadata(value: MsgUpdateMetadata) {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateMetadata",
      value,
    };
  },
  updateCommission(value: MsgUpdateCommission) {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateCommission",
      value,
    };
  },
  claimCommissionRewards(value: MsgClaimCommissionRewards) {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgClaimCommissionRewards",
      value,
    };
  },
  joinPool(value: MsgJoinPool) {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgJoinPool",
      value,
    };
  },
  leavePool(value: MsgLeavePool) {
    return {
      typeUrl: "/kyve.stakers.v1beta1.MsgLeavePool",
      value,
    };
  },
  delegate(value: MsgDelegate) {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
      value,
    };
  },
  withdrawRewards(value: MsgWithdrawRewards) {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
      value,
    };
  },
  undelegate(value: MsgUndelegate) {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
      value,
    };
  },
  redelegate(value: MsgRedelegate) {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
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
      typeUrl: "/kyve.stakers.v1beta1.MsgUpdateParams",
      value,
    };
  },
  updateParamsDelegation(value: MsgUpdateParamsDelegation) {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
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
};
