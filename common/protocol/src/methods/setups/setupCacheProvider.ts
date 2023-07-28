import path from "path";

import { Validator, standardizeError } from "../..";
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

    // create cache provider depending on chosen cache type
    this.cacheProvider = Validator.cacheProviderFactory(this.cache);

    // delete all contents of cache directory
    await fse.emptyDir(`${cachePath}/`);

    // init cache with work dir
    this.logger.debug(`this.cacheProvider.init(${cachePath})`);
    await this.cacheProvider.init(cachePath);

    this.logger.info(`Using cache provider: ${this.cacheProvider.name}`);
  } catch (err) {
    this.logger.fatal(`Failed to setup cache provider. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    process.exit(1);
  }
}
