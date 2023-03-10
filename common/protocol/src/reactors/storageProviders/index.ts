import { IStorageProvider } from "../..";
import { Arweave } from "./Arweave";
import { Bundlr } from "./Bundlr";
import { NoStorageProvider } from "./NoStorageProvider";

/**
 * storageProviderFactory creates the correct storage provider class
 * from the specified id. Current storage providers are:
 *
 * 0 - NoStorageProvider
 * 1 - Arweave
 * 2 - Bundlr
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
    default:
      return new NoStorageProvider();
  }
};
