import axios from "axios";
import BigNumber from "bignumber.js";
import { DataSource } from "../src/DataSource";

export class Coincap implements DataSource {
  private response: any;

  async fetchPrices(): Promise<any> {
    const { data } = await axios.get<any>("https://api.coincap.io/v2/assets");

    this.response = data;
  }

  async extractPrices(tickers: string[]): Promise<Record<string, BigNumber>> {
    await this.fetchPrices();

    const prices: Record<string, BigNumber> = {};

    for (const ticker of tickers) {
      const price = (this.response.data.find((obj: any) => obj.symbol === ticker)).priceUsd;
      prices[ticker] = new BigNumber(price).decimalPlaces(4)
    }
    return prices;
  }
}