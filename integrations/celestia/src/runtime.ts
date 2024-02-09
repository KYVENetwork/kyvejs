import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// Celestia config
interface IConfig {
  namespace: string;
  rpc: string;
}

export default class Celestia implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.namespace) {
      throw new Error(`Config does not have property "namespace" defined`);
    }

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_CELESTIA_RPC) {
      config.rpc = process.env.KYVEJS_CELESTIA_RPC;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch GetAll from namespace
    const { data } = await axios.post(this.config.rpc, {
      id: 1,
      jsonrpc: '2.0',
      method: 'blob.GetAll',
      params: [
        +key,
        [
          this.config.namespace
        ]
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CELESTIA_NODE_AUTH_TOKEN}`
      }
    });

    return { key, value: data.result };
  }

  async prevalidateDataItem(_: Validator, dataItem: DataItem): Promise<boolean> {
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    return item;
  }

  async validateDataItem(
    v: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      // vote valid if data matches
      return VOTE.VOTE_TYPE_VALID;
    }
    // vote invalid if data does not match
    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // use latest block height as bundle summary
    return ""
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
