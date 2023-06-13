import { DataItem, IRuntime } from "@kyvejs/protocol";
import { spawnSync } from "child_process";
import { name, version } from "../package.json";

// TendermintBSync config
interface IConfig {
  network: string;
  rpc: string;
}

export default class Docker implements IRuntime {
  public name = name;
  public version = version;

  async validateGetConfig(rawConfig: string): Promise<any> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.network) {
      throw new Error(`Config does not have property "network" defined`);
    }

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_TENDERMINT_BSYNC_RPC) {
      config.rpc = process.env.KYVEJS_TENDERMINT_BSYNC_RPC;
    }

    return config;
  }

  async getDataItem(_: any, key: string): Promise<DataItem> {
    const result = spawnSync("docker", ["run", "runtime_test", "read", key]);
    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    } else {
      return { key, value: JSON.parse(result.stdout.toString()) };
    }
  }

  async prevalidateDataItem(_: any, item: DataItem): Promise<boolean> {
    return true;
  }

  async transformDataItem(_: any, item: DataItem): Promise<DataItem> {
    return item;
  }

  async validateDataItem(
    _: any,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  public async summarizeDataBundle(
    _: any,
    bundle: DataItem[]
  ): Promise<string> {
    return "";
  }

  public async nextKey(_: any, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
