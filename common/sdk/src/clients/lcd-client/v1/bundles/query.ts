import paginationQuery from "@kyvejs/types/client/cosmos/base/query/v1beta1/pagination";
import kyveQueryBundles from "@kyvejs/types/client/kyve/query/v1beta1/bundles";
import kyveQueryBundlesRes from "@kyvejs/types/lcd/kyve/query/v1beta1/bundles";

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

export class V1BundlesLCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async finalizedBundles(
    params: PaginationPartialRequestUtilType<kyveQueryBundles.QueryFinalizedBundlesRequest>
  ): Promise<
    PaginationResponseTypeUtil<kyveQueryBundlesRes.QueryFinalizedBundlesResponse>
  > {
    const parameters: Record<string, any> = {};

    if (typeof params?.pagination !== "undefined") {
      parameters.pagination = params.pagination;
    }

    if (typeof params.index !== "undefined") {
      parameters.index = params.index;
    }

    const endpoint = `/kyve/v1/bundles/${params.pool_id}`;
    return await this.request(endpoint, parameters);
  }

  async finalizedBundle(
    params: kyveQueryBundles.QueryFinalizedBundleRequest
  ): Promise<kyveQueryBundles.QueryFinalizedBundleResponse> {
    const endpoint = `/kyve/v1/bundles/${params.pool_id}/${params.id}`;
    return await this.request(endpoint);
  }
}
