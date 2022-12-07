import { sha256 } from "../..";
import { BundleTag, IStorageProvider } from "../../types";

export class NoStorageProvider implements IStorageProvider {
  public name = "NoStorageProvider";
  public decimals = 0;

  async init(_storagePriv: string) {
    return this;
  }

  async getAddress() {
    return "";
  }

  async getBalance() {
    return "";
  }

  async saveBundle(bundle: Buffer, _tags: BundleTag[]) {
    return {
      storageId: sha256(bundle),
      storageData: Buffer.from(""),
    };
  }

  async retrieveBundle(storageId: string, _timeout: number) {
    return {
      storageId,
      storageData: Buffer.from(""),
    };
  }
}
