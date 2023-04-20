import axios from "axios";
import BigNumber from "bignumber.js";

import { DataSource } from "../src/DataSource";

export class Coingecko implements DataSource {
  private response: any;

  async fetchPrices(): Promise<any> {
    if (!process.env.COINGECKO_APIKEY) {
      console.error("Export the API Key for Coingecko correctly.");
    }
    const { data } = await axios.get<any>(
      "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false&locale=en",
      {
        params: {
          x_cg_pro_api_key: process.env.COINGECKO_APIKEY,
        },
      }
    );

    this.response = data;
  }

  async extractPrices(tickers: string[]): Promise<Record<string, BigNumber>> {
    await this.fetchPrices();

    const prices: Record<string, BigNumber> = {};

    for (const ticker of tickers) {
      try {
        const price = this.response.find(
          (obj: any) => obj.symbol === ticker.toLowerCase()
        )["current_price"];
        prices[ticker] = new BigNumber(price).decimalPlaces(4);
      } catch (e) {
        console.error(`Coingecko doesnt provide ${ticker} price data.`);
      }
    }
    return prices;
  }
}
