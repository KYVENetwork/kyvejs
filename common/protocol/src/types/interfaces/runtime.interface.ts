import { DataItem } from "..";

/**
 * Interface of Runtime.
 *
 * The Runtime implements the custom logic of a pool and defines how data
 * items are fetched and which order they should have.
 *
 * @interface IRuntime
 */
export interface IRuntime {
  /**
   * Name of the runtime. This should be unique for every runtime and should
   * later match the runtime of the pool
   *
   * @property name
   * @type {string}
   */
  name: string;

  /**
   * Version of the runtime. This is used for checking if the node runs the correct
   * runtime version specified by the pool
   *
   * @property version
   * @type {string}
   */
  version: string;

  /**
   * Parses the raw runtime config found on pool, validates it and finally gets
   * the actual config value since the raw one could be e.g. stored on Arweave or
   * be a stringified json value. If the config is invalid this method should throw
   * an error.
   *
   * Deterministic behavior is required
   *
   * @method validateGetConfig
   * @param {string} rawConfig
   * @return {Promise<any>}
   */
  validateGetConfig(rawConfig: string): Promise<any>;

  /**
   * Gets the data item from a specific key and returns both key and the value.
   *
   * Deterministic behavior is required
   *
   * @method getDataItem
   * @param {any} c runtime config
   * @param {string} key the key of the data item
   * @return {Promise<DataItem>}
   */
  getDataItem(c: any, key: string): Promise<DataItem>;

  /**
   * Prevalidates a data item right after is was retrieved from source.
   * If the prevalidation fails the item gets rejected and never makes
   * it to the local cache. If the prevalidation succeeds the item gets
   * transformed and written to cache were it is used from submission
   * of proposals or bundle validation.
   *
   * Deterministic behavior is required
   *
   * @method preValidateDataItem
   * @param {any} c runtime config
   * @param {DataItem} item data item which gets prevalidated
   * @return {Promise<boolean>}
   */
  prevalidateDataItem(c: any, item: DataItem): Promise<boolean>;

  /**
   * Transforms a single data item and return it. Used for example
   * to remove unecessary data or format the data in a better way.
   *
   * Deterministic behavior is required
   *
   * @method transformDataItem
   * @param {any} c runtime config
   * @param {DataItem} item data item which gets transformed
   * @return {Promise<DataItem>}
   */
  transformDataItem(c: any, item: DataItem): Promise<DataItem>;

  /**
   * Validates a single data item of a bundle proposal
   *
   * Deterministic behavior is required
   *
   * @method validateDataItem
   * @param {any} c runtime config
   * @param {DataItem} proposedDataItem the data item proposed by the uploader
   * @param {DataItem} validationDataItem the data item which the validator created himself for validation again the proposed data item
   * @return {Promise<boolean>} returns whether the proposed data item is valid compared to the validation data item
   */
  validateDataItem(
    c: any,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean>;

  /**
   * Gets a formatted value string from a bundle. This produces a "summary" of
   * a bundle which gets stored on-chain and therefore needs to be short.
   *
   * String should not be longer than 100 characters, else gas costs might be too expensive.
   *
   * Deterministic behavior is required
   *
   * @method summarizeDataBundle
   * @param {any} config runtime config
   * @param {DataItem[]} bundle is the bundle which needs to be summarized
   * @return {Promise<string>} returns a formatted value string
   */
  summarizeDataBundle(c: any, bundle: DataItem[]): Promise<string>;

  /**
   * Gets the next key from the current key so that the data archived has an order.
   *
   * Deterministic behavior is required
   *
   * @method nextKey
   * @param {any} c runtime config
   * @param {string} key the key from which the next key should be derived from
   * @return {Promise<string>}
   */
  nextKey(c: any, key: string): Promise<string>;
}
