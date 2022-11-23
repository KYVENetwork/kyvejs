import { DataItem, IRuntime, ProtocolNode, sha256 } from '@kyvejs/protocol';
import { providers, utils } from 'ethers';

// method to just get the named args
const parseArgs = (struct: any) => {
  const parsedStruct = { ...struct };
  const keyLength = Object.keys(struct).length / 2;

  for (let i = 0; i < keyLength; i++) {
    delete parsedStruct[i];
  }

  return parsedStruct;
};

export default class EvmContractEvents implements IRuntime {
  public name = '';
  public version = '';

  async getDataItem(
    core: ProtocolNode,
    source: string,
    key: string
  ): Promise<DataItem> {
    try {
      // setup web3 provider
      const provider = new providers.StaticJsonRpcProvider(
        source + process.env.INFURA_API_KEY
      );

      // try to fetch data item
      const value = await provider.getLogs({
        address: core.poolConfig.contract.address,
        fromBlock: parseInt(key),
        toBlock: parseInt(key),
      });

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
    // interface of contract-ABI for decoding the logs
    let iface = new utils.Interface(core.poolConfig.contract.abi);

    const result = item.value.map((log: any) => {
      const info = iface.parseLog(log);
      return {
        ...log,
        parsedEvent: {
          name: info.name,
          signature: info.signature,
          args: parseArgs(info.args),
        },
      };
    });

    return {
      key: item.key,
      value: result,
    };
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
    return '';
  }

  async nextKey(key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
