import axios from "axios";
import BigNumber from "bignumber.js";

import { DataSource } from "../src/DataSource";

export class CryptoCompare implements DataSource {
  private response: any;

  async fetchPrices(tickers: string[]): Promise<any> {
    if (!process.env.CRYPTOCOMPARE_APIKEY) {
      console.error("Export the API Key for CryptoCompare correctly.");
    }

    const cryptoCompareAPIKey = process.env.CRYPTOCOMPARE_APIKEY;

    const endpoint =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms={tickers}&tsyms=USD";

    const { data } = await axios.get<any>(
      endpoint.replace("{tickers}", tickers.join(",")),
      {
        headers: {
          Apikey: cryptoCompareAPIKey!,
        },
      }
    );

    this.response = data;
  }

  async extractPrices(tickers: string[]): Promise<Record<string, BigNumber>> {
    await this.fetchPrices(tickers);

    const prices: Record<string, BigNumber> = {};

    for (const priceObj in this.response) {
      const price = this.response[priceObj].USD;
      prices[priceObj] = new BigNumber(price).decimalPlaces(4);
    }

    return prices;
  }
}
