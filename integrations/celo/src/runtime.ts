import { DataItem, IRuntime, ProtocolNode, sha256 } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import { fetchBlock } from './utils';

export default class Celo implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    core: ProtocolNode,
    source: string,
    key: string
  ): Promise<DataItem> {
    let block;

    try {
      block = await fetchBlock(source, +key);
    } catch (err) {
      throw err;
    }

    if (!block) throw new Error();

    return { key, value: block };
  }

  async transformDataItem(
    core: ProtocolNode,
    item: DataItem
  ): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    core: ProtocolNode,
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

  async summarizeDataBundle(
    core: ProtocolNode,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
