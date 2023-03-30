import axios from "axios";
import { Coincap, Binance } from "./DataSource";

import { Response } from "./types";

export async function fetchPrice(endpoint: string): Promise<any> {
  const { data } = await axios.get<Response<any>>(endpoint);

  return data.result;
}

export async function extractPrices(priceObject: any): Promise<any> {
  if (Object.keys(priceObject)[0] === "https://api.coincap.io/v2/assets") {
    return new Coincap(
      priceObject["https://api.coincap.io/v2/assets"]
    ).extractPrices();
  } else if (Object.keys(priceObject)[0] === "https://data.binance.com/api/v3/ticker/price") {
    return new Binance(
      priceObject["https://data.binance.com/api/v3/ticker/price"]
    ).extractPrices();
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
