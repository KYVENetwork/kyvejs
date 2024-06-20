import paramsRes from "@kyvejs/types/lcd/kyve/global/v1beta1/query";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

export class GlobalModuleLCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async params(): Promise<paramsRes.QueryParamsResponse> {
    const endpoint = `/kyve/global/v1beta1/params`;
    return await this.request(endpoint);
  }
}
