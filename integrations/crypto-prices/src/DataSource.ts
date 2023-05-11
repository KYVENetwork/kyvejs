import BigNumber from "bignumber.js";

export interface DataSource {
  fetchPrices(tickers: string[]): Promise<any>;
  extractPrices(tickers: string[]): Promise<Record<string, BigNumber>>;
}
