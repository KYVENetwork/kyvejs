import { Binance } from "../data-sources/Binance";
import { Coincap } from "../data-sources/Coincap";
import { Coingecko } from "../data-sources/Coingecko";
import { Coinmarketcap } from "../data-sources/Coinmarketcap";
import { CryptoCompare } from "../data-sources/CryptoCompare";

export async function getPrices(
  endpoint: string,
  tickers: string[]
): Promise<any> {
  if (endpoint === "https://api.coincap.io/v2/assets") {
    return new Coincap().extractPrices(tickers);
  } else if (endpoint === "https://data.binance.com/api/v3/ticker/price") {
    return new Binance().extractPrices(tickers);
  } else if (
    endpoint === "https://min-api.cryptocompare.com/data/pricemulti&tsyms=USD"
  ) {
    return new CryptoCompare().extractPrices(tickers);
  } else if (
    endpoint ===
    "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false&locale=en"
  ) {
    return new Coingecko().extractPrices(tickers);
  } else if (
    endpoint ===
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
  ) {
    return new Coinmarketcap().extractPrices(tickers);
  } else {
    console.error(endpoint, " not implemented.");
  }
}

export function median(values: number[]): number {
  values.sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    return (values[middle - 1] + values[middle]) / 2;
  } else {
    return values[middle];
  }
}
