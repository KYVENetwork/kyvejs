import queryReq from "@kyvejs/types/client/kyve/team/v1beta1/query";
import queryRes from "@kyvejs/types/lcd/kyve/team/v1beta1/query";

import { AbstractKyveLCDClient } from "../../lcd-client.abstract";

export class TeamModuleLCDClient extends AbstractKyveLCDClient {
  constructor(restEndpoint: string) {
    super(restEndpoint);
  }

  async teamInfo(): Promise<queryRes.QueryTeamInfoResponse> {
    const endpoint = `/kyve/team/v1beta1/team_info`;
    return await this.request(endpoint);
  }

  async teamVestingAccounts(): Promise<queryRes.QueryTeamVestingAccountsResponse> {
    const endpoint = `/kyve/team/v1beta1/team_vesting_accounts`;
    return await this.request(endpoint);
  }

  async teamVestingAccount(
    params: queryReq.QueryTeamVestingAccountRequest
  ): Promise<queryRes.QueryTeamVestingAccountResponse> {
    const endpoint = `/kyve/team/v1beta1/team_vesting_account/${params.id}`;
    return await this.request(endpoint);
  }

  async teamVestingStatus(
    params: queryReq.QueryTeamVestingStatusRequest
  ): Promise<queryRes.QueryTeamVestingStatusResponse> {
    const endpoint = `/kyve/team/v1beta1/team_vesting_status/${params.id}`;
    return await this.request(endpoint);
  }

  async teamVestingStatusByTime(
    params: queryReq.QueryTeamVestingStatusByTimeRequest
  ): Promise<queryRes.QueryTeamVestingStatusByTimeResponse> {
    const endpoint = `/kyve/team/v1beta1/team_vesting_status_by_time/${params.id}/${params.time}`;
    return await this.request(endpoint);
  }
}
