import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';
import { generateMerkleRoot } from '@kyvejs/sdk';
import { createHashesFromBundle } from "@kyvejs/sdk";

// Cardano config
interface IConfig {
  network: string;
  rpc: string;
}

export default class Cardano implements IRuntime {
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

    if (process.env.KYVEJS_CARDANO_RPC) {
      config.rpc = process.env.KYVEJS_CARDANO_RPC;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    const params = {
      network_identifier: {
        blockchain: "cardano",
        network: this.config.network
      },
      block_identifier: {
        index: Number(key)
      }
    };
  
    try {
      const { data } = await axios.post(this.config.rpc, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return { key, value: data };
    } catch (e) {
      throw new Error(`Failed to query rpc: ${e}`);
    }
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if block is defined
    if (!item.value) {
      throw new Error(`Value in data item is not defined: ${item.value}`);
    }

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
      return VOTE.VOTE_TYPE_VALID;
    }
    // vote invalid if data does not match
    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    const hashes: Uint8Array[] = createHashesFromBundle(bundle);
    const merkleRoot: Uint8Array = generateMerkleRoot(hashes);

    return JSON.stringify({
      merkle_root: Buffer.from(merkleRoot).toString('hex'),
    });
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
