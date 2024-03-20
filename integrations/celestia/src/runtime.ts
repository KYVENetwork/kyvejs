import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// Celestia config
interface IConfig {
  namespaces: string[];
  rpc: string;
}

export default class Celestia implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (config.namespaces.length < 1) {
      throw new Error(`Config does not have any "namespaces" defined`);
    }

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_CELESTIA_RPC) {
      config.rpc = process.env.KYVEJS_CELESTIA_RPC;
    }

    if (!process.env.CELESTIA_NODE_AUTH_TOKEN) {
      throw new Error(`Environment variable CELESTIA_NODE_AUTH_TOKEN is not defined`)
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    let header;
    // fetch GetAll from namespace
    const headerResult = await axios.post(this.config.rpc, {
      id: 1,
      jsonrpc: '2.0',
      method: 'header.GetByHeight',
      params: [
        300,
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CELESTIA_NODE_AUTH_TOKEN}`
      }
    });

    if (headerResult.data.result) {
      header = headerResult.data.result
    } else {
      throw new Error(`Failed to query header`)
    }

    const eds = await axios.post(this.config.rpc, {
      id: 1,
      jsonrpc: '2.0',
      method: 'share.GetEDS',
      params: [
        header,
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CELESTIA_NODE_AUTH_TOKEN}`
      }
    });

    if (!eds.data.result) {
      throw new Error(`Failed to query EDS Header`)
    }

    const sharesByNamespaces: Map<string, any> = new Map<string, any>()

    for (const namespace of this.config.namespaces) {
      const sharesByNamespace = await axios.post(this.config.rpc, {
        id: 1,
        jsonrpc: '2.0',
        method: 'share.GetSharesByNamespace',
        params: [
          header,
          namespace
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CELESTIA_NODE_AUTH_TOKEN}`
        }
      });

      if (sharesByNamespace.data.result) {
        sharesByNamespaces.set(namespace, sharesByNamespace.data)
      } else {
        sharesByNamespaces.set(namespace, [])
      }
    }

    return {
      key,
      value: {
        eds: eds.data.result,
        sharesByNamespace: sharesByNamespaces
      }
    };
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
