import { SupportedChains } from "@kyvejs/sdk/dist/constants";

export interface IConfig {
  chainId: SupportedChains;
  rpc: string;
  rest: string;
  gasPrice: number;
  autoDownloadBinaries: boolean;
}

export interface IValaccountConfig {
  pool: number;
  valaccount: string;
  storagePriv: string;
  cache: string;
  metrics: boolean;
  metricsPort: string;
}
