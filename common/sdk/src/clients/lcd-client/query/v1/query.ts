import kyveQueryStakers from "@kyvejs/types/client/kyve/query/v1/stakers";
import kyveQueryStakersRes from "@kyvejs/types/lcd/kyve/query/v1/stakers";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

export class QueryModuleV1LCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async staker(
    params: kyveQueryStakers.QueryStakerRequest
  ): Promise<kyveQueryStakersRes.QueryStakerResponse> {
    const endpoint = `/kyve/query/v1/staker/${params.address}`;
    return await this.request(endpoint);
  }

  async stakersByPool(
    params: kyveQueryStakers.QueryStakersByPoolRequest
  ): Promise<kyveQueryStakersRes.QueryStakersByPoolResponse> {
    const endpoint = `/kyve/query/v1/stakers_by_pool/${params.pool_id}`;
    return await this.request(endpoint);
  }
  /** end stakers **/
}
