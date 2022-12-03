import { existsSync, mkdirSync } from "fs";
import { Level } from "level";

import { DataItem, ICacheProvider } from "../../types";

export class LevelDBCache implements ICacheProvider {
  public name = "LevelDBCache";
  public path!: string;

  private db!: Level<string, DataItem>;

  async init(path: string): Promise<void> {
    this.path = path;

    if (!existsSync(this.path)) {
      mkdirSync(this.path, { recursive: true });
    }

    this.db = new Level(this.path, {
      valueEncoding: "json",
    });

    await this.drop();
  }

  public async put(key: string, value: DataItem): Promise<void> {
    await this.db.put(key, value);
  }

  public async get(key: string): Promise<DataItem> {
    return await this.db.get(key);
  }

  public async exists(key: string): Promise<boolean> {
    try {
      await this.db.get(key);
      return true;
    } catch {
      return false;
    }
  }

  public async del(key: string): Promise<void> {
    await this.db.del(key);
  }

  public async drop(): Promise<void> {
    await this.db.clear();
  }
}
