import { StdFee } from "@cosmjs/amino/build/signdoc";
import { AccountData } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgSubmitBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgVoteBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgClaimUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgSkipUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

import { withTypeUrl } from "../../../../../registry/tx.registry";
import { signTx, TxPromise } from "../../../../../utils/helper";

export default class {
  private nativeClient: SigningStargateClient;
  public readonly account: AccountData;

  constructor(client: SigningStargateClient, account: AccountData) {
    this.account = account;
    this.nativeClient = client;
  }

  public async submitBundleProposal(
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
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async voteBundleProposal(
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
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }

  public async claimUploaderRole(
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
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
  public async skipUploaderRole(
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
    return new TxPromise(
      this.nativeClient,
      await signTx(this.nativeClient, this.account.address, tx, options)
    );
  }
}
