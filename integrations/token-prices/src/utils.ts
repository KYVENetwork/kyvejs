import axios from "axios";
import { Coincap, Binance } from "./DataSource";

export async function fetchPrice(endpoint: string): Promise<any> {
  const { data } = await axios.get<any>(endpoint);

  return data;
}

export async function extractPrices(
  endpoint: string,
  priceObject: any
): Promise<any> {
  if (endpoint === "https://api.coincap.io/v2/assets") {
    return new Coincap(
      priceObject
    ).extractPrices();
  } else if (endpoint === "https://data.binance.com/api/v3/ticker/price") {
    return new Binance(
      priceObject
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
