import { DataItem, IRuntime, Validator } from "@kyvejs/protocol";

import { name, version } from "../package.json";
import { extractPrices, fetchPrice, median } from "./utils";

// TokenPrices config
interface IConfig {
  sources: any[];
  slippage: number;
}

export default class TokenPrices implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    this.config = config;
  }

  async getDataItem(v: Validator, key: string): Promise<DataItem> {
    const prices: Record<string, number[]> = {
      BTC: [],
      ETH: [],
      ATOM: [],
    };

    for (const endpoint of this.config.sources) {
      const response = await fetchPrice(endpoint);
      const priceObjects = await extractPrices({ endpoint: response });

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
        const medianValue = median(values);
        result[key] = medianValue;
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
      if (validationPrices.hasOwnProperty(key)) {
        const proposedPrice = proposedPrices[key];
        const validationPrice = validationPrices[key];

        const slippage = proposedPrice * this.config.slippage;

        if (proposedPrice > validationPrice) {
          if (!(proposedPrice - validationPrice <= slippage)) return false;
        }
        if (validationPrice > proposedPrice) {
          if (!(validationPrice - proposedPrice <= slippage)) return false;
        }
      }
    }
    return true;
  }

  public async summarizeDataBundle(
    _: Validator,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle[bundle.length - 1].value ?? "";
  }

  public async nextKey(_: Validator, __: string): Promise<string> {
    return Date.now().toString();
  }
}
