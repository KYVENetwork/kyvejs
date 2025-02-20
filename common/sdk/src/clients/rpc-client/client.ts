import { StdSignature } from "@cosmjs/amino";
import { AccountData, OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import { SigningStargateClient } from "@cosmjs/stargate";
import { makeADR36AminoSignDoc } from "@keplr-wallet/cosmos";

import { IConfig } from "../../constants";
import KyveBaseMethods from "./kyve/base/v1beta1/base";
import KyveBundlesMethods from "./kyve/bundles/v1beta1/bundles";
import KyveFundersMethods from "./kyve/funders/v1beta1/funders";
import KyveGovMethodsV1 from "./kyve/gov/v1/gov";
import KyveStakersMethods from "./kyve/stakers/v1/stakers";
import KyveMultiCoinRewardsMethods from "./kyve/multi_coin_rewards/v1beta1/multi_coin_rewards";
import KyveBankMethods from "./cosmos/bank/v1beta1/bank";
import KyveStakingMethods from "./cosmos/staking/v1beta1/staking";
import KyveDistributionMethods from "./cosmos/distribution/v1beta1/distribution";

export default class KyveClient {
  public nativeClient: SigningStargateClient;
  public readonly account: AccountData;
  public readonly config: IConfig;
  public cosmos: {
    bank: {
      v1beta1: KyveBankMethods;
    };
    staking: {
      v1beta1: KyveStakingMethods;
    };
    distribution: {
      v1beta1: KyveDistributionMethods;
    };
  };
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
    funders: {
      v1beta1: KyveFundersMethods;
    };
    stakers: {
      v1: KyveStakersMethods;
    };
    multi_coin_rewards: {
      v1beta1: KyveMultiCoinRewardsMethods;
    };
  };
  private aminoSigner: OfflineAminoSigner | null;

  constructor(
    client: SigningStargateClient,
    account: AccountData,
    config: IConfig,
    aminoSigner: OfflineAminoSigner | null
  ) {
    this.account = account;
    this.config = config;
    this.nativeClient = client;
    this.aminoSigner = aminoSigner;
    this.cosmos = {
      bank: {
        v1beta1: new KyveBankMethods(this.nativeClient, this.account, config),
      },
      staking: {
        v1beta1: new KyveStakingMethods(
          this.nativeClient,
          this.account,
          config
        ),
      },
      distribution: {
        v1beta1: new KyveDistributionMethods(
          this.nativeClient,
          this.account,
          config
        ),
      },
    };
    this.kyve = {
      base: {
        v1beta1: new KyveBaseMethods(this.nativeClient, this.account, config),
      },
      bundles: {
        v1beta1: new KyveBundlesMethods(
          this.nativeClient,
          this.account,
          config
        ),
      },
      gov: {
        v1: new KyveGovMethodsV1(this.nativeClient, this.account, config),
      },
      funders: {
        v1beta1: new KyveFundersMethods(
          this.nativeClient,
          this.account,
          config
        ),
      },
      stakers: {
        v1: new KyveStakersMethods(this.nativeClient, this.account, config),
      },
      multi_coin_rewards: {
        v1beta1: new KyveMultiCoinRewardsMethods(
          this.nativeClient,
          this.account,
          config
        ),
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

  async getKyveBalance(): Promise<string> {
    const data = await this.nativeClient.getBalance(
      this.account.address,
      this.config.coinDenom
    );
    return data.amount;
  }
}
