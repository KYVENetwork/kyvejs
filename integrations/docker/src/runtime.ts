import { DataItem, IRuntime, Validator } from "@kyvejs/protocol";
import { spawnSync } from "child_process";

import { name, version } from "../package.json";
import http from 'http';



// Bitcoin config
interface IConfig {
  sources: string[];
}

export default class Docker implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);
    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<any> {
    const options: http.RequestOptions = {
      host: 'localhost',
      port: 3000,
      path: `/?arg1=${key}`, // Pass the arguments in the query string
    };
    const req = http.get(options, (res: any) => {
      let data = '';
      res.on('data', (chunk: any) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log('Response from server:', data);
      });
    });

    req.on('error', (error: any) => {
      console.error('Error connecting to server:', error);
    });
//     if (result.status !== 0) {
//       throw new Error(result.stderr);
//     } else {
//       return { key, value: JSON.parse(result.stdout.toString()) };
//     }
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    return item;
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

  public async summarizeDataBundle(
    _: Validator,
    bundle: DataItem[]
  ): Promise<string> {
    return "";
  }

  public async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
