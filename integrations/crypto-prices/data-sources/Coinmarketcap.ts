import axios from "axios";
import BigNumber from "bignumber.js";

import { DataSource } from "../src/DataSource";

export class Coinmarketcap implements DataSource {
  private response: any;

  async fetchPrices(_: string[]): Promise<any> {
    if (!process.env.COINMARKETCAP_APIKEY) {
      console.error("Export the API Key for Coinmarketcap correctly.");
    }
    const { data } = await axios.get<any>(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_APIKEY!,
        },
      }
    );

    this.response = data;
  }

  async extractPrices(tickers: string[]): Promise<Record<string, BigNumber>> {
    await this.fetchPrices(tickers);

    const prices: Record<string, BigNumber> = {};

    for (const ticker of tickers) {
      try {
        const price = this.response.data.find(
          (obj: any) => obj.symbol === ticker
        )["quote"]["USD"].price;
        prices[ticker] = new BigNumber(price).decimalPlaces(4);
      } catch (e) {
        console.error(`Coinmarketcap doesnt provide ${ticker} price data.`);
      }
    }
    return prices;
  }
}
