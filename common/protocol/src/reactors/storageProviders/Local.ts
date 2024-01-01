import KyveSDK from '@kyvejs/sdk';
import { v4 as uuidv4 } from 'uuid';
import { BundleTag, IStorageProvider } from '../../types';
import fs from 'fs';
import path from 'path';

export class Local implements IStorageProvider {
  public name = 'Local';
  public coinDecimals = 0;

  private readonly valaccount: string;
  private readonly storagePath: string;

  constructor(valaccount: string, storagePath: string) {
    if (!valaccount) {
      throw new Error('Valaccount mnemonic is empty.');
    }

    if (!storagePath) {
      throw new Error('Storage path is empty.');
    }

    this.valaccount = valaccount;
    this.storagePath = storagePath;
  }

  async getAddress() {
    return (await new KyveSDK().fromMnemonic(this.valaccount)).account.address;
  }

  async getBalance() {
    return '';
  }

  async getPrice(_: number) {
    return '0';
  }

  async saveBundle(bundle: Buffer, _: BundleTag[]) {
    const data = bundle.toString('base64');
    const storageId = uuidv4();
    const filePath = path.join(this.storagePath, storageId);

    // Create storage path if it doesn't exist
    if (!fs.existsSync(this.storagePath)) {
      fs.mkdirSync(this.storagePath, {recursive: true});
    }

    fs.writeFileSync(filePath, data);

    return {
      storageId: storageId,
      storageData: bundle
    };
  }

  async retrieveBundle(storageId: string, _: number) {
    const filePath = path.join(this.storagePath, storageId);
    const data = fs.readFileSync(filePath);
    const storageData = Buffer.from(data.toString(), 'base64');

    return {
      storageId,
      storageData
    };
  }
}
