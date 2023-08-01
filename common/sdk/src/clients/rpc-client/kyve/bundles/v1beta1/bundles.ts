import { StdFee } from "@cosmjs/amino/build/signdoc";
import { MsgSubmitBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgVoteBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgClaimUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgSkipUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { KyveSigning, PendingTx } from "../../../signing";

export default class KyveBundlesMethods extends KyveSigning {
  public submitBundleProposal(
    value: Omit<MsgSubmitBundleProposal, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.submitBundleProposal({
      ...value,
      creator: this.account.address,
    });
    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public voteBundleProposal(
    value: Omit<MsgVoteBundleProposal, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.voteBundleProposal({
      ...value,
      creator: this.account.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public claimUploaderRole(
    value: Omit<MsgClaimUploaderRole, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.claimUploaderRole({
      ...value,
      creator: this.account.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }

  public skipUploaderRole(
    value: Omit<MsgSkipUploaderRole, "creator">,
    options?: {
      fee?: StdFee | "auto" | number;
      memo?: string;
    }
  ) {
    const tx = withTypeUrl.skipUploaderRole({
      ...value,
      creator: this.account.address,
    });

    return new PendingTx({ tx: [tx] }, () =>
      this.getPendingSignedTx(tx, options)
    );
  }
}
