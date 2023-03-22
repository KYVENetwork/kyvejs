import { DataItem, IRuntime, Validator } from "@kyvejs/protocol";

import { name, version } from "../package.json";
import { fetchBlock, fetchBlockHash } from "./utils";

// Bitcoin config
interface IConfig {
  sources: string[];
}

export default class Bitcoin implements IRuntime {
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
    const results: any[] = [];

    for (const source of this.config.sources) {
      // get auth headers for proxy endpoints
      const headers = await v.getProxyAuth();

      const hash = await fetchBlockHash(source, +key, headers);
      const block = await fetchBlock(source, hash, headers);

      // remove confirmations to maintain determinism.
      delete block.confirmations;

      results.push(block);
    }

    // check if results from the different sources match
    if (
      !results.every((b) => JSON.stringify(b) === JSON.stringify(results[0]))
    ) {
      throw new Error(`Sources returned different results`);
    }

    return { key, value: results[0] };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // TODO: maybe validate if PoW is valid
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  public async summarizeDataBundle(
    _: Validator,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? "";
  }

  public async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
