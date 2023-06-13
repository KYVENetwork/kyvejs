import { DataItem, IRuntime } from "@kyvejs/protocol";
import { spawnSync } from "child_process";
import { name, version } from "../package.json";

export default class Docker implements IRuntime {
  public name = name;
  public version = version;

  private run(args: any[]): any {
    spawnSync("docker", ["run", "runtime", ...args]);
  }

  async validateGetConfig(rawConfig: string): Promise<any> {
    const result = this.run(["validateGetConfig", rawConfig]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }

  async getDataItem(c: any, key: string): Promise<DataItem> {
    const result = this.run(["getDataItem", c, key]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }

  async prevalidateDataItem(c: any, item: DataItem): Promise<boolean> {
    const result = this.run(["prevalidateDataItem", c, item]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }

  async transformDataItem(c: any, item: DataItem): Promise<DataItem> {
    const result = this.run(["transformDataItem", c, item]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }

  async validateDataItem(
    c: any,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    const result = this.run([
      "validateDataItem",
      c,
      proposedDataItem,
      validationDataItem,
    ]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }

  public async summarizeDataBundle(
    c: any,
    bundle: DataItem[]
  ): Promise<string> {
    const result = this.run(["summarizeDataBundle", c, bundle]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }

  public async nextKey(c: any, key: string): Promise<string> {
    const result = this.run(["nextKey", c, key]);

    if (result.status !== 0) {
      throw new Error(result.stderr.toString());
    }

    return JSON.parse(result.stdout.toString());
  }
}
