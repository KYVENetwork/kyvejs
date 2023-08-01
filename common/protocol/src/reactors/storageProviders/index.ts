import { IStorageProvider } from "../..";
import { Arweave } from "./Arweave";
import { Bundlr } from "./Bundlr";
import { S3 } from "./S3";
import { NoStorageProvider } from "./NoStorageProvider";

/**
 * storageProviderFactory creates the correct storage provider class
 * from the specified id. Current storage providers are:
 *
 * 0 - NoStorageProvider
 * 1 - Arweave
 * 2 - Bundlr
 * 3 - AWS S3
 * x - NoStorageProvider (default)
 *
 * @method storageProviderFactory
 * @param {number} storageProviderId the id of the storage provider
 * @param {string} storagePriv the secret used for the storage provider
 * @return {IStorageProvider}
 */
export const storageProviderFactory = (
  storageProviderId: number,
  storagePriv: string
): IStorageProvider => {
  switch (storageProviderId) {
    case 1:
      return new Arweave(storagePriv);
    case 2:
      return new Bundlr(storagePriv);
    case 3:
      return new S3();
    default:
      return new NoStorageProvider();
  }
};
