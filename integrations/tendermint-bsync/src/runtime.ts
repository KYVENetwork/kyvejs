import { DataItem, IRuntime } from '@kyvejs/protocol';
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

  async validateGetConfig(rawConfig: string): Promise<IConfig> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.network) {
      throw new Error(`Config does not have property "network" defined`);
    }

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_TENDERMINT_BSYNC_RPC) {
      config.rpc = process.env.KYVEJS_TENDERMINT_BSYNC_RPC;
    }

    return config;
  }

  async getDataItem(c: IConfig, key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const { data } = await axios.get(`${c.rpc}/block?height=${key}`);
    const block = data.result.block;

    return { key, value: block };
  }

  async prevalidateDataItem(c: IConfig, item: DataItem): Promise<boolean> {
    // check if block is defined
    if (!item.value) {
      return false;
    }

    // check if network matches
    if (c.network != item.value.header.chain_id) {
      return false;
    }

    return true;
  }

  async transformDataItem(_: IConfig, item: DataItem): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    _: IConfig,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(_: IConfig, bundle: DataItem[]): Promise<string> {
    // use latest block height as bundle summary
    return bundle.at(-1)?.value?.header?.height ?? '';
  }

  async nextKey(_: IConfig, key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
