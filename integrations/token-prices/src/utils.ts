import { Binance } from "../data-sources/Binance";
import { Coincap } from "../data-sources/Coincap";
import { CryptoCompare } from "../data-sources/CryptoCompare";

export async function getPrices(endpoint: string, tickers: string[]): Promise<any> {
  if (endpoint === "https://api.coincap.io/v2/assets") {
    return new Coincap().extractPrices(tickers);
  } else if (endpoint === "https://data.binance.com/api/v3/ticker/price") {
    return new Binance().extractPrices(tickers);
  } else if (endpoint === "https://min-api.cryptocompare.com/data/pricemulti&tsyms=USD") {
    return new CryptoCompare().extractPrices(tickers);
  }
  else {
    console.error(endpoint, " not implemented.")
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
