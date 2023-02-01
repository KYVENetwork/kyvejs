import { DataItem, IRuntime, sha256, Validator } from "@kyvejs/protocol";

import { name, version } from "../package.json";
import { fetchBlock, fetchBlockHash } from "./utils";

export default class Bitcoin implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    v: Validator,
    source: string,
    key: string
  ): Promise<DataItem> {
    // get auth headers for proxy endpoints
    const headers = await v.getProxyAuth();

    const hash = await fetchBlockHash(source, +key, headers);
    const block = await fetchBlock(source, hash, headers);

    return { key, value: block };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // TODO: maybe validate if PoW is valid
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // Remove confirmations to maintain determinism.
    delete item.value.confirmations;

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

  public async summarizeDataBundle(
    _: Validator,
    bundle: DataItem[]
  ): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? "";
  }

  public async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
