import { sha256 } from "../..";
import { BundleTag, IStorageProvider } from "../../types";

export class NoStorageProvider implements IStorageProvider {
  public name = "NoStorageProvider";
  public coinDecimals = 0;

  async getAddress() {
    return "";
  }

  async getBalance() {
    return "0";
  }

  async getPrice(bytes: number) {
    return "0";
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
