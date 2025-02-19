import paramsRes from "@kyvejs/types/lcd/kyve/stakers/v1/params";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

export class StakersModuleLCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async params(): Promise<paramsRes.Params> {
    const endpoint = `/kyve/stakers/v1/params`;
    return await this.request(endpoint);
  }
}
