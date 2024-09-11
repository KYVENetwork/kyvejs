import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import { createHashesFromBundle, generateMerkleRoot } from "../utils/merkle";
import axios from "axios";

// Near config
interface IConfig {
  rpc: string;
}

export default class Near implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_NEAR_RPC) {
      config.rpc = process.env.KYVEJS_NEAR_RPC;
    }

    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    let value: any;
    try {
      const finalizedBlockResponse = await axios.post('https://rpc.mainnet.near.org', {
        jsonrpc: '2.0',
        id: '1',
        method: 'block',
        params: {
          "finality": "final"
        }
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (key > finalizedBlockResponse.data.result.header.height) {
        throw new Error('Caught up with chain, wait until height is finalized')
      }

      const blockResponse = await axios.post('https://rpc.mainnet.near.org', {
        jsonrpc: '2.0',
        id: '1',
        method: 'block',
        params: {
          block_id: Number(key)
        }
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      value = blockResponse.data.result;
    } catch (error: any) {
      throw new Error(error);
    }

    return {
      key,
      value: value,
    }
  }


  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    // apply equal comparison
    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }

    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    const hashes = createHashesFromBundle(bundle);
    const merkleRoot = generateMerkleRoot(hashes);

    return JSON.stringify({
      "merkle_root": merkleRoot
    })
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}