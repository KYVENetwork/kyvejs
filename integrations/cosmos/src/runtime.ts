import { DataItem, IRuntime, Validator, sha256 } from '@kyvejs/protocol';
import axios from 'axios';
import { name, version } from '../package.json';

export default class Cosmos implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    v: Validator,
    source: string,
    key: string
  ): Promise<DataItem> {
    // get auth headers for proxy endpoints
    const headers = await v.getProxyAuth();

    const { data } = await axios.get(
      `${source}/cosmos/base/tendermint/v1beta1/blocks/${key}`,
      {
        headers,
      }
    );

    return { key, value: data };
  }

  async prevalidateDataItem(_: Validator, __: DataItem): Promise<boolean> {
    // TODO: return valid for now
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
    return bundle.at(-1)?.value?.header?.app_hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
