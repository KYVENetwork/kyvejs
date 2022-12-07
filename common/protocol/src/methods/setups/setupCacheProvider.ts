import path from "path";

import { Validator, standardizeJSON } from "../..";
import * as cacheProvider from "../../reactors/cacheProvider";
import fse from "fs-extra";

/**
 * setupCacheProvider creates the cache provider for the node
 *
 * @method setupCacheProvider
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function setupCacheProvider(this: Validator): Promise<void> {
  try {
    // define cache path where the cached data is saved
    // depending on work dir "home"
    const cachePath = path.join(this.home, "cache");

    this.logger.debug(`Initializing cache provider with path ${cachePath}`);

    // create cache provider depending on chosen cache type.
    // Default is leveldb cache
    switch (this.cache) {
      case "memory":
        this.cacheProvider = new cacheProvider.MemoryCache();
        break;
      case "jsonfile":
        this.cacheProvider = new cacheProvider.JsonFileCache();
        break;
      default:
        this.cacheProvider = new cacheProvider.JsonFileCache();
    }

    // delete all contents of cache directory
    await fse.emptyDir(`${cachePath}/`);

    // init cache with work dir
    this.logger.debug(`this.cacheProvider.init(${cachePath})`);
    await this.cacheProvider.init(cachePath);

    this.logger.info(`Using cache provider: ${this.cacheProvider.name}`);
  } catch (err) {
    this.logger.fatal(`Failed to setup cache provider. Exiting ...`);
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
