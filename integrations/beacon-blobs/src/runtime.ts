import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import axios from 'axios';

// EVM config
interface IConfig {
  rpc: string;
  finality: number;
}

export default class BeaconBlobs implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_EVM_RPC) {
      config.rpc = process.env.KYVEJS_EVM_RPC;

      console.log("set config RPC to", config.rpc)
    }

    if (!config.finality) {
      throw new Error(`Config does not have finality defined`);
    }

    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    const headers = await axios.get(`${this.config.rpc}/eth/v1/beacon/headers`, {
      headers: {
        'accept': 'application/json'
      }
    });

    if ((parseInt(headers.data.data[0].header.message.slot)- parseInt(key)) < this.config.finality) {
      throw new Error(
        `Finality not reached yet; waiting for next slot`
      )
    }

    let dataItem;

    await axios.get(`${this.config.rpc}/eth/v1/beacon/blob_sidecars/${key}`, {
      headers: {
        'accept': 'application/json'
      }
    }).then((res) => {
      dataItem = {
        key,
        value: res.data.data,
      }
    }).catch(err => {
      if (err.response.status == 404) {
        dataItem = {
          key,
          value: null,
        }
      } else {
        throw new Error(
          `Failed to query '/eth/v1/beacon/blob_sidecars/${key}'`
        )
      }
    });

    return dataItem;
  }


  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
      _: Validator,
      proposedDataItem: DataItem,
      validationDataItem: DataItem
  ): Promise<number> {
    // apply equal comparison
    if (
        JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }
    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}