import { DataItem, IRuntime, Validator } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// Tendermint config
interface IConfig {
  network: string;
  rpc: string;
}

export default class Tendermint implements IRuntime {
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

    if (process.env.KYVEJS_TENDERMINT_RPC) {
      config.rpc = process.env.KYVEJS_TENDERMINT_RPC;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const {
      data: { result: block },
    } = await axios.get(`${this.config.rpc}/block?height=${key}`);

    // fetch block results from rpc at given block height
    const {
      data: { result: block_results },
    } = await axios.get(`${this.config.rpc}/block_results?height=${key}`);

    return { key, value: { block, block_results } };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if data item is defined
    if (!item.value) {
      return false;
    }

    // check if block and block results are defined
    if (!item.value.block || !item.value.block_results) {
      return false;
    }

    // check if network matches
    if (this.config.network != item.value.block.block.header.chain_id) {
      return false;
    }

    // check if block height matches
    if (item.key !== item.value.block.block.header.height) {
      return false;
    }

    // check if block results height matches
    if (item.key !== item.value.block_results.height) {
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
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // use latest block height as bundle summary
    return bundle.at(-1)?.value?.block?.block?.header?.height ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
