import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// Syntropy config
interface IConfig {
  api: string;
  interval: number;
}

export default class Syntropy implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.api) {
      throw new Error(`Config does not have property "api" defined`);
    }

    if (!config.interval) {
      throw new Error(`Config does not have property "interval" defined`);
    }

    if (process.env.KYVEJS_SYNTROPY_API) {
      config.api = process.env.KYVEJS_SYNTROPY_API;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const { data } = await axios.get(`${this.config.api}/get_item/${key}`);

    return { key, value: data };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    // TODO
    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }
    // vote invalid if data does not match
    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, __: DataItem[]): Promise<string> {
    return '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + this.config.interval).toString();
  }
}
