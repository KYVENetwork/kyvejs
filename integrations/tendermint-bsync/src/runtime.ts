import {
  DataItem,
  IRuntime,
  Validator,
  sha256FromJson,
} from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// TendermintBSync config
interface IConfig {
  network: string;
  rpc: string;
}

export default class TendermintBSync implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.network) {
      throw new Error(`Config does not have property "network" defined`);
    }

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVE_JS_TENDERMINT_BSYNC_RPC) {
      config.rpc = process.env.KYVE_JS_TENDERMINT_BSYNC_RPC;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const { data } = await axios.get(`${this.config.rpc}/block?height=${key}`);
    const block = data.result.block;

    return { key, value: block };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if block is defined
    if (!item.value) {
      return false;
    }

    // check if network matches
    if (this.config.network != item.value.header.chain_id) {
      return false;
    }

    return true;
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
    // apply hash comparison
    const proposedDataItemHash = sha256FromJson(proposedDataItem);
    const validationDataItemHash = sha256FromJson(validationDataItem);

    return proposedDataItemHash === validationDataItemHash;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // use latest block height as bundle summary
    return bundle.at(-1)?.value?.header?.height ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
