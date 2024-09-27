import { IStorageProvider, Validator } from "../..";
import { Arweave } from "./Arweave";
import { Bundlr } from "./Bundlr";
import { Kyve } from "./Kyve";
import { NoStorageProvider } from "./NoStorageProvider";
import { Turbo } from "./Turbo";

/**
 * storageProviderFactory creates the correct storage provider class
 * from the specified id. Current storage providers are:
 *
 * 0 - NoStorageProvider
 * 1 - Arweave
 * 2 - Bundlr @deprecated
 * 3 - Kyve
 * 4 - Turbo
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
      return new Turbo(this.valaccount);
    default:
      return new NoStorageProvider();
  }
}
