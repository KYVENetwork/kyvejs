import { DataItem, IRuntime, Validator, sha256 } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

export default class TendermintBSync implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    _: Validator,
    source: string,
    key: string
  ): Promise<DataItem> {
    // fetch block from rpc at given block height
    const { data } = await axios.get(`${source}/block?height=${key}`);

    return { key, value: data?.result?.block ?? null };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
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
    const proposedDataItemHash = sha256(
      Buffer.from(JSON.stringify(proposedDataItem))
    );
    const validationDataItemHash = sha256(
      Buffer.from(JSON.stringify(validationDataItem))
    );

    return proposedDataItemHash === validationDataItemHash;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.header?.height ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
