import paramsRes from "@kyvejs/types/lcd/kyve/pool/v1beta1/params";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

export class PoolModuleLCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async params(): Promise<paramsRes.Params> {
    const endpoint = `/kyve/pool/v1beta1/params`;
    return await this.request(endpoint);
  }
}
