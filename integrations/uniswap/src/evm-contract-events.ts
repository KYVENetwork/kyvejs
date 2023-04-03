import { DataItem, IRuntime, Validator } from '@kyvejs/protocol';
import axios from 'axios';
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

// EVM config
interface IConfig {
  sources: string[];
  contract: {
    address: string;
    abi: any;
  };
}

export default class Evm implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    let url: string;

    // allow ipfs:// or ar:// as external config urls
    if (rawConfig.startsWith('ipfs://')) {
      url = rawConfig.replace('ipfs://', 'https://ipfs.io/');
    } else if (rawConfig.startsWith('ar://')) {
      url = rawConfig.replace('ar://', 'https://arweave.net/');
    } else {
      throw Error('Unsupported config link protocol');
    }

    const { data: config } = await axios.get<IConfig>(url);

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    if (!config.contract?.address) {
      throw new Error(`Config has not contract address`);
    }

    if (!config.contract?.abi) {
      throw new Error(`Config has not contract ABI`);
    }

    // check if required env variables are set
    if (!process.env.API_KEYS) {
      throw new Error(`Env variable API_KEYS not set`);
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    const results: providers.Log[][] = [];

    for (const source of this.config.sources) {
      const apiObj = JSON.parse(process.env.API_KEYS!);

      // setup web3 provider
      const provider = new providers.StaticJsonRpcProvider(
        source + apiObj[source]
      );

      // try to fetch logs
      const logs = await provider.getLogs({
        address: this.config.contract.address,
        fromBlock: parseInt(key),
        toBlock: parseInt(key),
      });

      results.push(logs);
    }

    // check if results from the different sources match
    if (
      !results.every((b) => JSON.stringify(b) === JSON.stringify(results[0]))
    ) {
      throw new Error(`Sources returned different results`);
    }

    return {
      key,
      value: results[0],
    };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // interface of contract-ABI for decoding the logs
    const iface = new utils.Interface(this.config.contract.abi);

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
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(_: Validator, __: DataItem[]): Promise<string> {
    return '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
