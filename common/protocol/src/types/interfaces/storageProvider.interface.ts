export type BundleTag = {
  name: string;
  value: string;
};

export type StorageReceipt = {
  storageId: string;
  storageData: Buffer;
};

/**
 * Interface of Storage Provider.
 *
 * The Storage Provider handles data storage and retrieval for a pool. Usually these
 * Storage Providers are decentralized and are meant to store pool data.
 *
 * @interface IStorageProvider
 */
export interface IStorageProvider {
  /**
   * Name of the storage provider. This should be unique for every storage provider.
   *
   * @property name
   * @type {string}
   */
  name: string;

  /**
   * How many decimals the native coin of the storage provider has
   *
   * @property coinDecimals
   * @type {number}
   */
  coinDecimals: number;

  /**
   * Gets the public account address of storage provider wallet
   *
   * @method getAddress
   * @return {Promise<string>}
   */
  getAddress(): Promise<string>;

  /**
   * Gets the balance of the storage provider wallet
   *
   * @method getBalance
   * @return {Promise<string>}
   */
  getBalance(): Promise<string>;

  /**
   * Gets the cost to uploader the specified number of bytes
   *
   * @method getPrice
   * @param {number} bytes
   * @return {Promise<string>}
   */
  getPrice(bytes: number): Promise<string>;

  /**
   * Saves a bundle on the storage provider and returns a Storage Id
   *
   * @method saveBundle
   * @param {Buffer} bundle data of the bundle which will get saved
   * @param {BundleTag[]} tags metadata that should be included
   * @return {Promise<StorageReceipt>} returns a storage receipt including the storage id
   * with which the data can be retrieved again and the stored data on the storage provider
   */
  saveBundle(bundle: Buffer, tags: BundleTag[]): Promise<StorageReceipt>;

  /**
   * Retrieves the bundle from the storage provider with the Storage Id
   *
   * @method retrieveBundle
   * @param {string} storageId storage Id from which the data of the bundle can be retrieved
   * @param {number} timeout timeout defines the download timeout in milliseconds
   * @return {Promise<StorageReceipt>} returns a storage receipt including the storage id
   * with which the data was retrieved with an the actual retrieved data on the storage provider
   */
  retrieveBundle(storageId: string, timeout: number): Promise<StorageReceipt>;
}
