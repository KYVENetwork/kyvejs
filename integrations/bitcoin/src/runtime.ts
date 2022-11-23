import { DataItem, IRuntime, ProtocolNode, sha256 } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import { fetchBlock, fetchBlockHash } from "./utils";

export default class Bitcoin implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    core: ProtocolNode,
    source: string,
    key: string
  ): Promise<DataItem> {
    let hash: string;
    let block: any;

    const headers = await this.generateCoinbaseCloudHeaders(core);

    try {
      hash = await fetchBlockHash(source, +key, headers);
    } catch (err) {
      // The only time this should fail is if the height is out of range.
      throw err;
    }

    try {
      block = await fetchBlock(source, hash, headers);
    } catch (err) {
      throw err;
    }

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

  public async summarizeDataBundle(
    core: ProtocolNode,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? "";
  }

  public async nextKey(key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }

  private async generateCoinbaseCloudHeaders(core: ProtocolNode): Promise<any> {
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
