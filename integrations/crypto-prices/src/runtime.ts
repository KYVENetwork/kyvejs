import { DataItem, IRuntime, Validator } from "@kyvejs/protocol";
import axios from "axios";

import { name, version } from "../package.json";
import { getPrices, median } from "./utils";

// TokenPrices config
interface IConfig {
  sources: any[];
  slippage: any;
  tickers: string[];
}

export default class CryptoPrices implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    let url: string;
    // allow ipfs:// or ar:// as external config urls
    if (rawConfig.startsWith("ipfs://")) {
      url = rawConfig.replace("ipfs://", "https://ipfs.io/");
    } else if (rawConfig.startsWith("ar://")) {
      url = rawConfig.replace("ar://", "https://arweave.net/");
    } else {
      throw Error("Unsupported config link protocol");
    }

    const { data: config } = await axios.get<IConfig>(url);

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    if (!config.slippage) {
      throw new Error(`Config does not have any slippage`);
    }

    this.config = config;
  }

  async getDataItem(v: Validator, key: string): Promise<DataItem> {
    const prices: Record<string, number[]> = {};

    for (const ticker of this.config.tickers) {
      prices[ticker] = [];
    }

    for (const endpoint of this.config.sources) {
      const priceObjects = await getPrices(endpoint, this.config.tickers);

      for (const key in priceObjects) {
        if (Object.prototype.hasOwnProperty.call(priceObjects, key)) {
          const price = priceObjects[key];
          prices[key]?.push(price.toNumber());
        }
      }
    }
    return { key, value: prices };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    const result: { [key: string]: number } = {};

    for (const key in item.value) {
      if (Object.prototype.hasOwnProperty.call(item.value, key)) {
        const values = item.value[key];
        result[key] = median(values);
      }
    }
    return { key: item.key, value: result };
  }

  async validateDataItem(
    v: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    const proposedPrices = proposedDataItem.value;
    const validationPrices = validationDataItem.value;

    for (const key in proposedPrices) {
      if (validationPrices[key]) {
        const proposedPrice = proposedPrices[key];
        const validationPrice = validationPrices[key];

        const slippage = proposedPrice * this.config.slippage;

        if (proposedPrice > validationPrice) {
          if (proposedPrice - validationPrice >= slippage) return false;
        }
        if (validationPrice > proposedPrice) {
          if (validationPrice - proposedPrice >= slippage) return false;
        }
      }
    }
    return true;
  }

  public async summarizeDataBundle(
    _: Validator,
    bundle: DataItem[]
  ): Promise<string> {
    return JSON.stringify(bundle[bundle.length - 1].value) ?? "";
  }

  public async nextKey(_: Validator, key: string): Promise<string> {
    return (Number(key) + 1).toString();
  }
}
