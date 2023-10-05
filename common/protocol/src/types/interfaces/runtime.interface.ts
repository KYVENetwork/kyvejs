import { Validator } from "../..";
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
   * Config of the runtime. This config is derived and parsed from the raw config
   * found on the pool. A raw config could be an ipfs link to the actual config or
   * a stringified yaml or json config. The runtime method "parseConfig" should act
   * as a setter and further validate if the configuration is correct.
   *
   * @property config
   * @type {any}
   */
  config: any;

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
   * @return {Promise<any>}
   */
  validateSetConfig(rawConfig: string): Promise<void>;

  /**
   * Gets the data item from a specific key and returns both key and the value.
   *
   * Deterministic behavior is required
   *
   * @method getDataItem
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {string} key the key of the data item
   * @return {Promise<DataItem>}
   */
  getDataItem(v: Validator, key: string): Promise<DataItem>;

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
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {DataItem} item data item which gets prevalidated
   * @return {Promise<boolean>}
   */
  prevalidateDataItem(v: Validator, item: DataItem): Promise<boolean>;

  /**
   * Transforms a single data item and return it. Used for example
   * to remove unecessary data or format the data in a better way.
   *
   * Deterministic behavior is required
   *
   * @method transformDataItem
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {DataItem} item data item which gets transformed
   * @return {Promise<DataItem>}
   */
  transformDataItem(v: Validator, item: DataItem): Promise<DataItem>;

  /**
   * Validates a single data item of a bundle proposal
   *
   * Deterministic behavior is required
   *
   * @method validateDataItem
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {DataItem} proposedDataItem the data item proposed by the uploader
   * @param {DataItem} validationDataItem the data item which the validator created himself for validation again the proposed data item
   * @return {Promise<number>} returns whether the vote is valid, invalid or abstain compared against the proposed data item
   */
  validateDataItem(
    v: Validator,
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
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {DataItem[]} bundle is the bundle which needs to be summarized
   * @return {Promise<string>} returns a formatted value string
   */
  summarizeDataBundle(v: Validator, bundle: DataItem[]): Promise<string>;

  /**
   * Gets the next key from the current key so that the data archived has an order.
   *
   * Deterministic behavior is required
   *
   * @method nextKey
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {string} key the key from which the next key should be derived from
   * @return {Promise<string>}
   */
  nextKey(v: Validator, key: string): Promise<string>;
}
