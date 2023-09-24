import { DataItem, IRuntime } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// TendermintBSync config
interface IConfig {
  network: string;
  rpc: string;
}

export default class TendermintBSync implements IRuntime {
  public config!: IConfig;

  async getName(): Promise<string> {
    return name;
  }

  async getVersion(): Promise<string> {
    return version;
  }

  async validateSetConfig(rawConfig: string): Promise<string> {
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

    this.config = config;
    return JSON.stringify(config)
  }

  async getDataItem(key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const { data } = await axios.get(`${this.config.rpc}/block?height=${key}`);
    const block = data.result.block;

    return { key, value: block };
  }

  async prevalidateDataItem(item: DataItem): Promise<boolean> {
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

  async transformDataItem(item: DataItem): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(bundle: DataItem[]): Promise<string> {
    // use latest block height as bundle summary
    return bundle.at(-1)?.value?.header?.height ?? '';
  }

  async nextKey(key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
