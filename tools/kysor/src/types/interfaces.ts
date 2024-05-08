import { SupportedChains } from "@kyvejs/sdk/dist/constants";

export interface IConfig {
  chainId: SupportedChains;
  rpc: string;
  rest: string;
  coinDenom: string;
  coinDecimals: number;
  gasPrice: number;
  autoDownloadBinaries: boolean;
}

export interface IValaccountConfig {
  pool: number;
  valaccount: string;
  storagePriv: string;
  requestBackoff: number;
  cache: string;
  metrics: boolean;
  metricsPort: string;
  debugMaxSize: number;
}
