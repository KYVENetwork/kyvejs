import { IStorageProvider, Validator } from "../..";
import { Arweave } from "./Arweave";
import { Bundlr } from "./Bundlr";
import { Kyve } from "./Kyve";
import { Local } from "./Local";
import { NoStorageProvider } from "./NoStorageProvider";

/**
 * storageProviderFactory creates the correct storage provider class
 * from the specified id. Current storage providers are:
 *
 * 0 - NoStorageProvider
 * 1 - Arweave
 * 2 - Bundlr
 * 3 - Kyve
 * 4 - Local (only for testing)
 * x - NoStorageProvider (default)
 *
 * @method storageProviderFactory
 * @return {IStorageProvider}
 */
export function storageProviderFactory(this: Validator): IStorageProvider {
  switch (this.pool.data?.current_storage_provider_id ?? 0) {
    case 1:
      return new Arweave(this.storagePriv);
    case 2:
      return new Bundlr(this.storagePriv);
    case 3:
      return new Kyve(this.chainId, this.poolId, this.staker, this.valaccount);
    case 4:
      return new Local(this.valaccount, `/tmp/kyvestorage/${this.poolId}`);
    default:
      return new NoStorageProvider();
  }
}
