import { IStorageProvider, Validator } from "../../index.js";
import { Arweave } from "./Arweave.js";
import { Kyve } from "./Kyve.js";
import { Turbo } from "./Turbo.js";
import { Load } from "./Load.js";
import { Walrus } from "./Walrus.js";
import { FilecoinOnchainCloud } from "./FilecoinOnchainCloud.js";
import { NoStorageProvider } from "./NoStorageProvider.js";

/**
 * storageProviderFactory creates the correct storage provider class
 * from the specified id. Current storage providers are:
 *
 * 0 - NoStorageProvider
 * 2 - Bundlr (deprecated)
 * 3 - Kyve
 * 4 - Turbo
 * 5 - Load
 * 6 - Walrus
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
      throw new Error(`Storage Provider "Bundlr" is deprecated`);
    case 3:
      return new Kyve(this.chainId, this.poolId, this.staker, this.poolAccount);
    case 4:
      return new Turbo(this.storagePriv || this.poolAccount);
    case 5:
      return new Load(this.storagePriv);
    case 6:
      return new Walrus(this.storagePriv);
    case 8:
      return new FilecoinOnchainCloud(this.storagePriv);
    default:
      return new NoStorageProvider();
  }
}
