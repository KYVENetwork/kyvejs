import { ICacheProvider, Validator } from "../../index.js";
import { JsonFileCache } from "./JsonFileCache.js";
import { MemoryCache } from "./MemoryCache.js";

/**
 * cacheProviderFactory creates the correct cache class
 * from the specified id. Current cache types are:
 *
 * 0 - JsonFile
 * x - Memory (default)
 *
 * @method cacheProviderFactory
 * @return {ICacheProvider}
 */
export function cacheProviderFactory(this: Validator): ICacheProvider {
  switch (this.cache) {
    case "jsonfile":
      return new JsonFileCache();
    default:
      return new MemoryCache();
  }
}
