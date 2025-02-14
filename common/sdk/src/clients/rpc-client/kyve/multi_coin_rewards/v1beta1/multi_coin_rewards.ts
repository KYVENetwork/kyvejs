import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgSetMultiCoinRewardsDistributionPolicy } from "@kyvejs/types/client/kyve/multi_coin_rewards/v1beta1/tx";
import { MsgToggleMultiCoinRewards } from "@kyvejs/types/client/kyve/multi_coin_rewards/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";

export default class KyveMultiCoinRewardsMethods extends KyveSigning {
  public setMultiCoinRewardsDistributionPolicy(
    value: Omit<MsgSetMultiCoinRewardsDistributionPolicy, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.setMultiCoinRewardsDistributionPolicy({
      ...value,
      creator: this.account.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public toggleMultiCoinRewards(
    value: Omit<MsgToggleMultiCoinRewards, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.toggleMultiCoinRewards({
      ...value,
      creator: this.account.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
