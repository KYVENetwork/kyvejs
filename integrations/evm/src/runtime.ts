import { BlockWithTransactions } from '@ethersproject/abstract-provider';
import {
  DataItem,
  IRuntime,
  sha256FromJson,
  Validator,
} from '@kyvejs/protocol';
import { providers } from 'ethers';
import { name, version } from '../package.json';

// EVM config
interface IConfig {
  sources: string[];
}

export default class Evm implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    this.config = config;
  }

  async getDataItem(v: Validator, key: string): Promise<DataItem> {
    const results: BlockWithTransactions[] = [];

    for (let source of this.config.sources) {
      // get auth headers for proxy endpoints
      const headers = await v.getProxyAuth();

      const provider = new providers.StaticJsonRpcProvider({
        url: source,
        headers,
      });
      const block = await provider.getBlockWithTransactions(+key);

      // delete confirmations from transactions to keep data deterministic
      block.transactions.forEach(
        (tx: Partial<providers.TransactionResponse>) => delete tx.confirmations
      );

      results.push(block);
    }

    // check if results from the different sources match
    if (
      !results.every((b) => sha256FromJson(b) === sha256FromJson(results[0]))
    ) {
      throw new Error(`Sources returned different results`);
    }

    return {
      key,
      value: results[0],
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
  ): Promise<boolean> {
    const proposedDataItemHash = sha256FromJson(proposedDataItem);
    const validationDataItemHash = sha256FromJson(validationDataItem);

    return proposedDataItemHash === validationDataItemHash;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
