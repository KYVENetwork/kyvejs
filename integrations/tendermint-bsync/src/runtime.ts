import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';
import { createHashesFromTendermintBundle } from './utils/merkle';
import { generateMerkleRoot } from '@kyvejs/sdk';

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

    if (process.env.KYVEJS_TENDERMINT_BSYNC_RPC) {
      config.rpc = process.env.KYVEJS_TENDERMINT_BSYNC_RPC;
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
      throw new Error(`Value in data item is not defined: ${item.value}`);
    }

    // check if block height matches
    if (item.key !== item.value.header.height) {
      throw new Error(
        `Block height does not match: key${item.key} value:${item.value.header.height}`
      );
    }

    // check if network matches
    if (this.config.network != item.value.header.chain_id) {
      throw new Error(
        `Chain ID does not match: config${this.config.network} value:${item.value.header.chain_id}`
      );
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
    const hashes: Uint8Array[] = createHashesFromTendermintBundle(bundle);
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
