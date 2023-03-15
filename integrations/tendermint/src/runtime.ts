import {
  DataItem,
  IRuntime,
  Validator,
  sha256FromJson,
} from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// Tendermint config
interface IConfig {
  sources: string[];
}

export default class Tendermint implements IRuntime {
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

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    const results: any[] = [];

    for (let source of this.config.sources) {
      // fetch block from rpc at given block height
      const { data } = await axios.get(`${source}/block?height=${key}`);
      results.push(data.result.block);
    }

    // check if results from the different sources match
    if (
      !results.every((b) => sha256FromJson(b) === sha256FromJson(results[0]))
    ) {
      throw new Error(`Sources returned different results`);
    }

    return { key, value: results[0] };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    const proposedDataItemHash = sha256FromJson(proposedDataItem);
    const validationDataItemHash = sha256FromJson(validationDataItem);

    return proposedDataItemHash === validationDataItemHash;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.header?.height ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
