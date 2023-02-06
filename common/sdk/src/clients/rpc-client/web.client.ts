import { AccountData, OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";
import { SDKConfig } from "../../constants";

import KyveClient from "./client";

export default class KyveWebClient extends KyveClient {
  private readonly walletName: string;
  constructor(
    client: SigningStargateClient,
    account: AccountData,
    config: SDKConfig,
    aminoSigner: OfflineAminoSigner | null,
    walletName: string
  ) {
    super(client, account, config, aminoSigner);
    this.walletName = walletName;
  }

  public getWalletName() {
    return this.walletName;
  }
}
