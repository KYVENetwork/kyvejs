import { AccountData, OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";

import KyveClient from "./client";

export default class KyveWebClient extends KyveClient {
  private readonly walletName: string;
  constructor(
    client: SigningStargateClient,
    account: AccountData,
    aminoSigner: OfflineAminoSigner | null,
    walletName: string
  ) {
    super(client, account, aminoSigner);
    this.walletName = walletName;
  }

  public getWalletName() {
    return this.walletName;
  }
}
