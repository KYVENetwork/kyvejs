import { DataItem } from "..";

/**
 * Interface of Cache.
 *
 * The Cache is responsible for caching data before its validated and stored on the Storage Provider.
 * It functiones like a simple key value store.
 *
 * @interface ICache
 */
export interface ICacheProvider {
  /**
   * Name of the cache. This should be unique for every cache.
   *
   * @property name
   * @type {string}
   */
  name: string;

  /**
   * Storage path of the cache. This should be the path to the folder where the data is cached.
   *
   * @property name
   * @type {string}
   */
  path: string;

  /**
   * Initializes the Cache with a storage path. This method is responsible
   * for setting up the folder where data will be cached.
   *
   * @method init
   * @param {string} path folder path where the data is cached
   * @return {Promise<void>}
   */
  init(path: string): Promise<void>;

  /**
   * Saves the value with a key
   *
   * @method put
   * @param {string | number} key
   * @param {DataItem} value
   * @return {Promise<void>}
   */
  put(key: string, value: DataItem): Promise<void>;

  /**
   * Loads the value from a key
   *
   * @method get
   * @param {string | number} key
   * @return {Promise<DataItem>}
   */
  get(key: string): Promise<DataItem>;

  /**
   * Checks whether a value exists for a key
   *
   * @method exists
   * @param {string | number} key
   * @return {Promise<boolean>}
   */
  exists(key: string): Promise<boolean>;

  /**
   * Deletes the value from a key
   *
   * @method del
   * @param {string | number} key
   * @return {Promise<void>}
   */
  del(key: string): Promise<void>;

  /**
   * Deletes the entire cache and therefore all values
   *
   * @method drop
   * @return {Promise<void>}
   */
  drop(): Promise<void>;
}
