import { existsSync, mkdirSync, promises as fs } from "fs";
import fse from "fs-extra";
import { readFile, writeFile } from "jsonfile";

import { DataItem, ICacheProvider } from "../../types";

export class JsonFileCache implements ICacheProvider {
  public name = "JsonFileCache";
  public path!: string;

  async init(path: string): Promise<void> {
    this.path = path;

    if (!existsSync(this.path)) {
      mkdirSync(this.path, { recursive: true });
    }

    await this.drop();
  }

  public async put(key: string, value: DataItem): Promise<void> {
    await writeFile(`${this.path}/${key}.json`, value);
  }

  public async get(key: string): Promise<DataItem> {
    return await readFile(`${this.path}/${key}.json`);
  }

  public async exists(key: string): Promise<boolean> {
    return await fse.pathExists(`${this.path}/${key}.json`);
  }

  public async del(key: string): Promise<void> {
    await fs.unlink(`${this.path}/${key}.json`);
  }

  public async drop(): Promise<void> {
    await fse.emptyDir(`${this.path}/`);
  }
}
