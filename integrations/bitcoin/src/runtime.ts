import { DataItem, IRuntime } from "@kyvejs/protocol";

import { name, version } from "../package.json";
import { fetchBlock, fetchBlockHash } from "./utils";

// Bitcoin config
interface IConfig {
  sources: string[];
}

export default class Bitcoin implements IRuntime {
  public name = name;
  public version = version;

  async validateGetConfig(rawConfig: string): Promise<any> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    return config;
  }

  async getDataItem(c: any, key: string): Promise<DataItem> {
    const results: any[] = [];

    for (const source of c.sources) {
      const hash = await fetchBlockHash(source, +key, {});
      const block = await fetchBlock(source, hash, {});

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

  async prevalidateDataItem(_: any, item: DataItem): Promise<boolean> {
    // TODO: maybe validate if PoW is valid
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: any, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
    _: any,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  public async summarizeDataBundle(
    _: any,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? "";
  }

  public async nextKey(_: any, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
