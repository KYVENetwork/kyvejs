export interface IConfig {
  chainId: string;
  rpc: string;
  rest: string;
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
