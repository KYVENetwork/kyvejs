import { StdSignature } from "@cosmjs/amino";
import { AccountData, OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";
import { makeADR36AminoSignDoc } from "@keplr-wallet/cosmos";

import KyveBaseMethods from "./kyve/base/v1beta1/base";
import KyveBundlesMethods from "./kyve/bundles/v1beta1/bundles";
import KyveDelegationMethods from "./kyve/delegation/v1beta1/delegation";
import KyveGovMethodsV1 from "./kyve/gov/v1/gov";
import KyvePoolMethods from "./kyve/pool/v1beta1/pool";
import KyveStakersMethods from "./kyve/stakers/v1beta1/stakers";

export default class KyveClient {
  public nativeClient: SigningStargateClient;
  public readonly account: AccountData;
  public kyve: {
    base: {
      v1beta1: KyveBaseMethods;
    };
    gov: {
      v1: KyveGovMethodsV1;
    };
    bundles: {
      v1beta1: KyveBundlesMethods;
    };
    delegation: {
      v1beta1: KyveDelegationMethods;
    };
    pool: {
      v1beta1: KyvePoolMethods;
    };
    stakers: {
      v1beta1: KyveStakersMethods;
    };
  };
  private aminoSigner: OfflineAminoSigner | null;

  constructor(
    client: SigningStargateClient,
    account: AccountData,
    aminoSigner: OfflineAminoSigner | null
  ) {
    this.account = account;
    this.nativeClient = client;
    this.aminoSigner = aminoSigner;
    this.kyve = {
      base: {
        v1beta1: new KyveBaseMethods(this.nativeClient, this.account),
      },
      bundles: {
        v1beta1: new KyveBundlesMethods(this.nativeClient, this.account),
      },
      delegation: {
        v1beta1: new KyveDelegationMethods(this.nativeClient, this.account),
      },
      gov: {
        v1: new KyveGovMethodsV1(this.nativeClient, this.account),
      },
      pool: {
        v1beta1: new KyvePoolMethods(this.nativeClient, this.account),
      },
      stakers: {
        v1beta1: new KyveStakersMethods(this.nativeClient, this.account),
      },
    };
  }
  async signString(message: string): Promise<StdSignature> {
    if (this.aminoSigner === null)
      throw new Error("Wallet doesn't support adr-036");
    const signDoc = makeADR36AminoSignDoc(this.account.address, message);
    const { signature } = await this.aminoSigner.signAmino(
      this.account.address,
      signDoc
    );
    return signature;
  }
}
