import { DataItem, IRuntime } from '@kyvejs/protocol';
import { fetchBlock } from './utils';
import { name, version } from '../package.json';

// Celo config
interface IConfig {
  sources: string[];
}

export default class Cosmos implements IRuntime {
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

    for (let source of c.sources) {
      const block = await fetchBlock(source, +key, {});

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
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: any, item: DataItem): Promise<DataItem> {
    // don't transform data item
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

  async summarizeDataBundle(_: any, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.block?.header?.app_hash ?? '';
  }

  async nextKey(_: any, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
