import { DataItem, IRuntime, sleep, Validator, VOTE } from '@kyvejs/protocol';
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
    const fromKey = parseInt(key);
    const toKey = fromKey + this.config.interval;
    const { data } = await axios.get(
      `${this.config.api}/get_item/${fromKey}/${toKey}`
    );
    console.log(
      `getDataItem:`,
      `${this.config.api}/get_item/${fromKey}/${toKey}`,
      (data || []).length
    );
    return { key, value: data || [] };
  }

  async prevalidateDataItem(_: Validator, __: DataItem): Promise<boolean> {
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
    console.log(
      'proposed',
      proposedDataItem.value.length,
      'validation',
      validationDataItem.value.length
    );
    // vote abstain if proposed data item has more entries than local one
    if (proposedDataItem.value.length != validationDataItem.value.length) {
      console.log(
        'proposedDataItem.value.length != validationDataItem.value.length',
        proposedDataItem.value.length,
        validationDataItem.value.length
      );
      return VOTE.VOTE_TYPE_ABSTAIN;
    }

    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }
    return VOTE.VOTE_TYPE_INVALID
  }

  async summarizeDataBundle(_: Validator, __: DataItem[]): Promise<string> {
    return '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    const nextKey = parseInt(key) + this.config.interval;
    const buffer = 5;
    let now = Math.floor(Date.now() / 1000);

    // we only return the next key if it is in the past
    while (nextKey + this.config.interval + buffer > now) {
      console.log('sleep', nextKey, now);
      await sleep(1000);
      now = Math.floor(Date.now() / 1000);
    }

    return nextKey.toString();
  }
}
