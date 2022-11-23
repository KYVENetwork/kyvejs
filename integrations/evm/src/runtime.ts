import { DataItem, IRuntime, ProtocolNode, sha256 } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import { providers } from 'ethers';

export default class Evm implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    core: ProtocolNode,
    source: string,
    key: string
  ): Promise<DataItem> {
    try {
      // set network settings if available
      let network;

      if (core.poolConfig.chainId && core.poolConfig.chainName) {
        network = {
          chainId: core.poolConfig.chainId,
          name: core.poolConfig.chainName,
        };
      }

      // get auth headers for coinbase cloud endpoints
      const headers = await this.generateCoinbaseCloudHeaders(core);

      // setup web3 provider
      const provider = new providers.StaticJsonRpcProvider(
        {
          url: source,
          headers,
        },
        network
      );

      // fetch data item
      const value = await provider.getBlockWithTransactions(+key);

      // throw if data item is not available
      if (!value) throw new Error();

      return {
        key,
        value,
      };
    } catch (err) {
      throw err;
    }
  }

  async transformDataItem(
    core: ProtocolNode,
    item: DataItem
  ): Promise<DataItem> {
    // Delete the number of confirmations from a transaction to keep data deterministic.
    item.value.transactions.forEach(
      (tx: Partial<providers.TransactionResponse>) => delete tx.confirmations
    );

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

  private async generateCoinbaseCloudHeaders(core: ProtocolNode): Promise<any> {
    // requestSignature for coinbase cloud
    const address = core.client.account.address;
    const timestamp = new Date().valueOf().toString();
    const poolId = core.pool.id;

    const { signature, pub_key } = await core.client.signString(
      `${address}//${poolId}//${timestamp}`
    );

    return {
      'Content-Type': 'application/json',
      Signature: signature,
      'Public-Key': pub_key.value,
      'Pool-ID': poolId,
      Timestamp: timestamp,
    };
  }
}
