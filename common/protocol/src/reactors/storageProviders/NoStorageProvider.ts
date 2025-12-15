import { sha256 } from "../../index.js";
import { BundleTag, IStorageProvider } from "../../types/index.js";

export class NoStorageProvider implements IStorageProvider {
  public name = "NoStorageProvider";

  async isBalanceSufficient(_size: number) {
    return {
      sufficient: true,
      message: "",
    };
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
