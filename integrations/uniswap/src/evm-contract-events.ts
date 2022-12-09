import { DataItem, IRuntime, Validator, sha256 } from '@kyvejs/protocol';
import { providers, utils } from 'ethers';

// Method to get the named args
const parseArgs = (struct: any) => {
  const parsedStruct = { ...struct };
  const keyLength = Object.keys(struct).length / 2;

  for (let i = 0; i < keyLength; i++) {
    delete parsedStruct[i];
  }

  return parsedStruct;
};

import { name, version } from '../package.json';

export default class Evm implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    v: Validator,
    source: string,
    key: string
  ): Promise<DataItem> {
    const apiObj = JSON.parse(process.env.API_KEYS!);
    // setup web3 provider
    const provider = new providers.StaticJsonRpcProvider(
      source + apiObj[source]
    );

    // try to fetch data item
    const value = await provider.getLogs({
      address: v.poolConfig.contract.address,
      fromBlock: parseInt(key),
      toBlock: parseInt(key),
    });

    return {
      key,
      value,
    };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(v: Validator, item: DataItem): Promise<DataItem> {
    // interface of contract-ABI for decoding the logs
    const iface = new utils.Interface(v.poolConfig.contract.abi);

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

  async summarizeDataBundle(_: Validator, __: DataItem[]): Promise<string> {
    return '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
