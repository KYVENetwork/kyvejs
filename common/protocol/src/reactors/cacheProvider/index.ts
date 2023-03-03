import { ICacheProvider } from "../..";
import { JsonFileCache } from "./JsonFileCache";
import { MemoryCache } from "./MemoryCache";

/**
 * cacheProviderFactory creates the correct cache class
 * from the specified id. Current cache types are:
 *
 * 0 - JsonFile
 * x - Memory (default)
 *
 * @method cacheProviderFactory
 * @param {string} cacheId the id of the compression
 * @return {ICacheProvider}
 */
export const cacheProviderFactory = (cacheId: string): ICacheProvider => {
  switch (cacheId) {
    case "jsonfile":
      return new JsonFileCache();
    default:
      return new MemoryCache();
  }
};
