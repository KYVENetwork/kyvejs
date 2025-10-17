import { IStorageProvider, Validator } from "../../index.js";
import { Arweave } from "./Arweave.js";
import { Bundlr } from "./Bundlr.js";
import { Kyve } from "./Kyve.js";
import { Turbo } from "./Turbo.js";
import { Load } from "./Load.js";
import { NoStorageProvider } from "./NoStorageProvider.js";

/**
 * storageProviderFactory creates the correct storage provider class
 * from the specified id. Current storage providers are:
 *
 * 0 - NoStorageProvider
 * 2 - Bundlr
 * 3 - Kyve
 * 4 - Turbo
 * 5 - Load
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
      return new Kyve(this.chainId, this.poolId, this.staker, this.poolAccount);
    case 4:
      return new Turbo(this.storagePriv || this.poolAccount);
    case 5:
      return new Load(this.storagePriv);
    default:
      return new NoStorageProvider();
  }
}
