import { Node } from "../..";
import { NoStorageProvider } from "../../reactors/storageProviders/NoStorageProvider";
import { Arweave } from "../../reactors/storageProviders/Arweave";
import { Bundlr } from "../../reactors/storageProviders/Bundlr";
import { IStorageProvider } from "../..";

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
 * @param {Node} this
 * @param {number} storageProviderId the id of the storage provider
 * @return {Promise<IStorageProvider>}
 */
export async function storageProviderFactory(
  this: Node,
  storageProviderId: number
): Promise<IStorageProvider> {
  switch (storageProviderId) {
    case 1:
      return await new Arweave().init(this.storagePriv);
    case 2:
      return await new Bundlr().init(this.storagePriv);
    default:
      return await new NoStorageProvider().init(this.storagePriv);
  }
}
