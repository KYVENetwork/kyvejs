import { DataItem, IRuntime, Validator, sha256 } from '@kyvejs/protocol';
import { providers } from 'ethers';

import { name, version } from '../package.json';

export default class Evm implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    v: Validator,
    source: string,
    key: string
  ): Promise<DataItem> {
    // get auth headers for proxy endpoints
    const headers = await v.getProxyAuth();

    const provider = new providers.StaticJsonRpcProvider({
      url: source,
      headers,
    });
    const value = await provider.getBlockWithTransactions(+key);

    return {
      key,
      value,
    };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // Delete the number of confirmations from a transaction to keep data deterministic.
    item.value.transactions.forEach(
      (tx: Partial<providers.TransactionResponse>) => delete tx.confirmations
    );

    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    const proposedDataItemHash = sha256(
      Buffer.from(JSON.stringify(proposedDataItem))
    );
    const validationDataItemHash = sha256(
      Buffer.from(JSON.stringify(validationDataItem))
    );

    return proposedDataItemHash === validationDataItemHash;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
