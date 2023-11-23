import {
  DataItem,
  PrevalidateDataItemResponse,
} from "../../proto/kyverdk/runtime/v1/runtime";

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
   * Config of the runtime. This config is set by calling the method
   * "validateSetConfig" which takes the raw config found on the pool,
   * parses it and sets the parsed value in this variable so it can
   * be reused in all other methods which need access to the config.
   *
   * @property config
   * @type {any}
   */
  config: any;

  /**
   * Returns the name of the runtime. Example "@kyvejs/tendermint"
   *
   * @method getName
   * @return {Promise<string>}
   */
  getName(): Promise<string>;

  /**
   * Returns the version of the runtime. Example "1.2.0"
   *
   * @method getVersion
   * @return {Promise<string>}
   */
  getVersion(): Promise<string>;

  /**
   * Parses the raw runtime config found on pool, validates it and finally sets
   * the property "config" in the runtime. A raw config could be an ipfs link to the
   * actual config or a stringified yaml or json string. This method should error if
   * the specific runtime config is not parsable or invalid.
   *
   * Deterministic behavior is required
   *
   * @method validateSetConfig
   * @param {string} rawConfig
   * @return {Promise<string>}
   */
  validateSetConfig(rawConfig: string): Promise<string>;

  /**
   * Gets the data item from a specific key and returns both key and the value.
   *
   * Deterministic behavior is required
   *
   * @method getDataItem
   * @param {string} key the key of the data item
   * @return {Promise<DataItem>}
   */
  getDataItem(key: string): Promise<DataItem>;

  /**
   * Prevalidates a data item right after is was retrieved from source.
   * If the prevalidation fails the item gets rejected and never makes
   * it to the local cache. If the prevalidation succeeds the item gets
   * transformed and written to cache were it is used from submission
   * of proposals or bundle validation.
   *
   * Deterministic behavior is required
   *
   * @method prevalidateDataItem
   * @param {DataItem} item data item which gets prevalidated
   * @return {Promise<boolean>}
   */
  prevalidateDataItem(item: DataItem): Promise<PrevalidateDataItemResponse>;

  /**
   * Transforms a single data item and return it. Used for example
   * to remove unecessary data or format the data in a better way.
   *
   * Deterministic behavior is required
   *
   * @method transformDataItem
   * @param {DataItem} item data item which gets transformed
   * @return {Promise<DataItem>}
   */
  transformDataItem(item: DataItem): Promise<DataItem>;

  /**
   * Validates a single data item of a bundle proposal
   *
   * Deterministic behavior is required
   *
   * @method validateDataItem
   * @param {DataItem} proposedDataItem the data item proposed by the uploader
   * @param {DataItem} validationDataItem the data item which the validator created himself for validation again the proposed data item
   * @return {Promise<number>} returns whether the vote is valid, invalid or abstain compared against the proposed data item
   */
  validateDataItem(
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number>;

  /**
   * Gets a formatted value string from a bundle. This produces a "summary" of
   * a bundle which gets stored on-chain and therefore needs to be short.
   *
   * String should not be longer than 100 characters, else gas costs might be too expensive.
   *
   * Deterministic behavior is required
   *
   * @method summarizeDataBundle
   * @param {DataItem[]} bundle is the bundle which needs to be summarized
   * @return {Promise<string>} returns a formatted value string
   */
  summarizeDataBundle(bundle: DataItem[]): Promise<string>;

  /**
   * Gets the next key from the current key so that the data archived has an order.
   *
   * Deterministic behavior is required
   *
   * @method nextKey
   * @param {string} key the key from which the next key should be derived from
   * @return {Promise<string>}
   */
  nextKey(key: string): Promise<string>;
}
