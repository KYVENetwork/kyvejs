import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";

export default class CosmosDistributionMethods extends KyveSigning {
  public withdrawDelegatorReward(
    value: Omit<MsgWithdrawDelegatorReward, "delegatorAddress">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.withdrawDelegatorReward({
      ...value,
      delegatorAddress: this.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public withdrawValidatorCommission(options?: {
    fee?: StdFee | "auto" | number;
    memo?: string;
  }) {
    const tx = withTypeUrl.withdrawValidatorCommission({
      validatorAddress: this.validatorAddress,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
