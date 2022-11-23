import { sha256 } from "../..";
import { BundleTag, IStorageProvider } from "../../types";

export class NoStorageProvider implements IStorageProvider {
  public name = "NoStorageProvider";
  public decimals = 0;

  async init(storagePriv: string) {
    return this;
  }

  async getBalance() {
    return "0";
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]) {
    return {
      storageId: sha256(bundle),
      storageData: Buffer.from(""),
    };
  }

  async retrieveBundle(storageId: string, timeout: number) {
    return {
      storageId,
      storageData: Buffer.from(""),
    };
  }
}
