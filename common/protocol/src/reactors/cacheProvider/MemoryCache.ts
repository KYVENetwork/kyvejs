import { DataItem, ICacheProvider } from "../../types";

export class MemoryCache implements ICacheProvider {
  public name = "MemoryCache";
  public path!: string;

  private store: any = {};

  async init(): Promise<void> {
    await this.drop();
  }

  public async put(key: string, value: DataItem): Promise<void> {
    this.store[key] = value;
  }

  public async get(key: string): Promise<DataItem> {
    if (!this.store[key]) {
      throw new Error(`Entry with key ${key} not found`);
    }

    return this.store[key];
  }

  public async exists(key: string): Promise<boolean> {
    return !!this.store[key];
  }

  public async del(key: string): Promise<void> {
    if (!this.store[key]) {
      throw new Error(`Entry with key ${key} not found`);
    }

    delete this.store[key];
  }

  public async drop(): Promise<void> {
    this.store = {};
  }
}
