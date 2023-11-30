import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from "axios";

// Syntropy config
interface IConfig {
  rpc: string;
}

export default class Syntropy implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_SYNTROPY_RPC) {
      config.rpc = process.env.KYVEJS_SYNTROPY_RPC;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const { data } = await axios.get(`${this.config.rpc}/get_item/${key}`);

    return { key, value: data };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // TODO

    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // TODO

    return item;
  }

  async validateDataItem(
    v: Validator,
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

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // TODO
    return bundle.at(-1) ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // TODO
    return (parseInt(key) + 1).toString();
  }
}
