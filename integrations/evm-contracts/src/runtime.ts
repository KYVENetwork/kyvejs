import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import { providers } from 'ethers';
import { createHashesFromBundle, generateMerkleRoot } from '../utils/merkle';

// EVM config
interface IConfig {
  rpc: string;
  finality: number;
  address: string;
  topics?: string[];
}

export default class EvmContracts implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_EVM_CONTRACTS_RPC) {
      config.rpc = process.env.KYVEJS_EVM_CONTRACTS_RPC;
    }

    if (!config.finality) {
      throw new Error(`Config does not have finality defined`);
    }

    if (!config.address) {
      throw new Error(`Config requires contract address`);
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<any> {
    const provider = new providers.StaticJsonRpcProvider({
      url: this.config.rpc,
    });

    const currentHeight = await provider.getBlockNumber();

    if (+key >= currentHeight - this.config.finality) {
      throw new Error(`Finality not reached yet; waiting for next block`);
    }

    const logs = await provider.getLogs({
      address: this.config.address,
      topics: this.config.topics || [],
      fromBlock: +key,
      toBlock: +key,
    });

    return {
      key,
      value: logs,
    };
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
      merkle_root: merkleRoot,
    });
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
