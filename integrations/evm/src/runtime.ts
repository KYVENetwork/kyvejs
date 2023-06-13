import { BlockWithTransactions } from '@ethersproject/abstract-provider';
import { DataItem, IRuntime } from '@kyvejs/protocol';
import { providers } from 'ethers';

import { name, version } from '../package.json';

// EVM config
interface IConfig {
  sources: string[];
}

export default class Evm implements IRuntime {
  public name = name;
  public version = version;

  async validateGetConfig(rawConfig: string): Promise<any> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    return config;
  }

  async getDataItem(c: any, key: string): Promise<DataItem> {
    const results: BlockWithTransactions[] = [];

    for (const source of c.sources) {
      const provider = new providers.StaticJsonRpcProvider({
        url: source,
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
      !results.every((b) => JSON.stringify(b) === JSON.stringify(results[0]))
    ) {
      throw new Error(`Sources returned different results`);
    }

    return {
      key,
      value: results[0],
    };
  }

  async prevalidateDataItem(_: any, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: any, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
    _: any,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(_: any, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(_: any, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
