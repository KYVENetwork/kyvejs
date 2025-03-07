import paramsRes from "@kyvejs/types/lcd/kyve/multi_coin_rewards/v1beta1/params";
import queryRes from "@kyvejs/types/lcd/kyve/multi_coin_rewards/v1beta1/query";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

export class MultiCoinRewardsModuleLCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async params(): Promise<paramsRes.Params> {
    const endpoint = `/kyve/multi_coin_rewards/v1/params`;
    return await this.request(endpoint);
  }

  async multiCoinDistributionPolicy(): Promise<queryRes.QueryMultiCoinDistributionPolicyResponse> {
    const endpoint = `/kyve/multi_coin_rewards/v1/multi_coin_distribution_policy`;
    return await this.request(endpoint);
  }

  async multiCoinStatus(
    params: queryRes.QueryMultiCoinStatusRequest
  ): Promise<queryRes.QueryMultiCoinStatusResponse> {
    const endpoint = `/kyve/multi_coin_rewards/v1/multi_coin_status/${params.address}`;
    return await this.request(endpoint);
  }
}
