import paginationQuery from "@kyvejs/types/client/cosmos/base/query/v1beta1/pagination";
import kyveQueryStakers from "@kyvejs/types/client/kyve/query/v1/stakers";
import kyveQueryStakersRes from "@kyvejs/types/lcd/kyve/query/v1/stakers";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type PaginationRequestType = {
  offset: string;
  limit: string;
  count_total: boolean;
  reverse: boolean;
  key: string;
};
type PaginationPartialRequestUtilType<
  T extends { pagination?: paginationQuery.PageRequest }
> = Overwrite<T, { pagination?: Partial<PaginationRequestType> }>;

type PaginationResponseTypeUtil<T> = Overwrite<
  T,
  { pagination?: { next_key: string; total: string } }
>;

export class QueryModuleV1LCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  /** Stakers **/
  async stakers(
    params: PaginationPartialRequestUtilType<kyveQueryStakers.QueryStakersRequest>
  ): Promise<
    PaginationResponseTypeUtil<kyveQueryStakersRes.QueryStakersResponse>
  > {
    const parameters: Record<string, any> = {};

    if (typeof params?.pagination !== "undefined") {
      parameters.pagination = params.pagination;
    }
    const endpoint = `/kyve/query/v1/stakers`;
    return await this.request(endpoint, params);
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
