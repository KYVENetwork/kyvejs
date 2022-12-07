import { KyveRegistryLCDClient } from "./query/v1beta1/query";
class KyveLCDClient {
  public query: { v1beta1: KyveRegistryLCDClient };
  constructor(restEndpoint: string) {
    this.query = {
      v1beta1: new KyveRegistryLCDClient(restEndpoint),
    };
  }
}
export type KyveLCDClientType = {
  kyve: KyveLCDClient;
};
export function createKyveLCDClient(restEndpoint: string): KyveLCDClientType {
  return {
    kyve: new KyveLCDClient(restEndpoint),
  };
}
