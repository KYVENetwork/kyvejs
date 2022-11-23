import { Node, standardizeJSON } from "../..";
import path from "path";
import * as cacheProvider from "../../reactors/cacheProvider";

/**
 * setupCacheProvider creates the cache provider for the node
 *
 * @method setupCacheProvider
 * @param {Node} this
 * @return {Promise<void>}
 */
export async function setupCacheProvider(this: Node): Promise<void> {
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
      case "leveldb":
        this.cacheProvider = new cacheProvider.LevelDBCache();
        break;
      default:
        this.cacheProvider = new cacheProvider.LevelDBCache();
    }

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
