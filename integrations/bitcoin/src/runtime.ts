import { DataItem, IRuntime, Node, sha256 } from "@kyvejs/protocol";

import { name, version } from "../package.json";
import { fetchBlock, fetchBlockHash } from "./utils";

export default class Bitcoin implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    core: Node,
    source: string,
    key: string
  ): Promise<DataItem> {
    const headers = await this.generateCoinbaseCloudHeaders(core);
    const hash = await fetchBlockHash(source, +key, headers);
    const block = await fetchBlock(source, hash, headers);

    return { key, value: block };
  }

  async prevalidateDataItem(_: Node, __: DataItem): Promise<boolean> {
    // TODO: validate if PoW is valid, return valid for now
    return true;
  }

  async transformDataItem(_: Node, item: DataItem): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    _: Node,
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

  public async summarizeDataBundle(
    _: Node,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? "";
  }

  public async nextKey(_: Node, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }

  private async generateCoinbaseCloudHeaders(core: Node): Promise<any> {
    // requestSignature for coinbase cloud
    const address = core.client.account.address;
    const timestamp = new Date().valueOf().toString();
    const poolId = core.pool.id;

    const { signature, pub_key } = await core.client.signString(
      `${address}//${poolId}//${timestamp}`
    );

    return {
      "Content-Type": "application/json",
      Signature: signature,
      "Public-Key": pub_key.value,
      "Pool-ID": poolId,
      Timestamp: timestamp,
    };
  }
}
