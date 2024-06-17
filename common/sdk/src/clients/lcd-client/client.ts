import { BundlesModuleLCDClient } from "./bundles/v1beta1/query";
import { DelegationModuleLCDClient } from "./delegation/v1beta1/query";
import { FundersModuleLCDClient } from "./funders/v1beta1/query";
import { GlobalModuleLCDClient } from "./global/v1beta1/query";
import { PoolModuleLCDClient } from "./pool/v1beta1/query";
import { QueryModuleLCDClient } from "./query/v1beta1/query";
import { StakersModuleLCDClient } from "./stakers/v1beta1/query";
import { TeamModuleLCDClient } from "./team/v1beta1/query";
import { V1BundlesLCDClient } from "./v1/bundles/query";
class KyveLCDClient {
  public v1: {
    bundles: V1BundlesLCDClient;
  };
  public bundles: {
    v1beta1: BundlesModuleLCDClient;
  };
  public delegation: {
    v1beta1: DelegationModuleLCDClient;
  };
  public funders: {
    v1beta1: FundersModuleLCDClient;
  };
  public global: {
    v1beta1: GlobalModuleLCDClient;
  };
  public pool: {
    v1beta1: PoolModuleLCDClient;
  };
  public query: {
    v1beta1: QueryModuleLCDClient;
  };
  public stakers: {
    v1beta1: StakersModuleLCDClient;
  };
  public team: {
    v1beta1: TeamModuleLCDClient;
  };

  constructor(restEndpoint: string) {
    this.v1 = {
      bundles: new V1BundlesLCDClient(restEndpoint),
    };
    this.bundles = {
      v1beta1: new BundlesModuleLCDClient(restEndpoint),
    };
    this.delegation = {
      v1beta1: new DelegationModuleLCDClient(restEndpoint),
    };
    this.funders = {
      v1beta1: new FundersModuleLCDClient(restEndpoint),
    };
    this.global = {
      v1beta1: new GlobalModuleLCDClient(restEndpoint),
    };
    this.pool = {
      v1beta1: new PoolModuleLCDClient(restEndpoint),
    };
    this.query = {
      v1beta1: new QueryModuleLCDClient(restEndpoint),
    };
    this.stakers = {
      v1beta1: new StakersModuleLCDClient(restEndpoint),
    };
    this.team = {
      v1beta1: new TeamModuleLCDClient(restEndpoint),
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
