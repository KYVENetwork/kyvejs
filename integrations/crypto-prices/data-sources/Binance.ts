import axios from "axios";
import BigNumber from "bignumber.js";

import { DataSource } from "../src/DataSource";

export class Binance implements DataSource {
  private response: any;

  async fetchPrices(): Promise<any> {
    const { data } = await axios.get<any>(
      "https://data.binance.com/api/v3/ticker/price"
    );

    this.response = data;
  }

  async extractPrices(tickers: string[]): Promise<Record<string, BigNumber>> {
    await this.fetchPrices();

    const prices: Record<string, BigNumber> = {};

    for (const ticker of tickers) {
      try {
        const { price: price } = this.response.find(
          (obj: any) => obj.symbol === ticker + "USDT"
        );
        prices[ticker] = new BigNumber(price).decimalPlaces(4);
      } catch (e) {
        console.error(`Binance doesnt provide ${ticker} price data.`);
      }
    }
    return prices;
  }
}
