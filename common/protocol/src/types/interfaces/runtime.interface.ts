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
   * Gets the data item from a specific key and returns both key and the value.
   *
   * Deterministic behavior is required
   *
   * @method getDataItem
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {string} source the source from which to get the data item from. usually an api or rpc endpoint
   * @param {string} key the key of the data item
   * @return {Promise<DataItem>}
   */
  getDataItem(v: Validator, source: string, key: string): Promise<DataItem>;

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
   * @method validateDataItem
   * @param {Validator} v the class of @kyvejs/protocol
   * @param {DataItem} proposedDataItem the data item proposed by the uploader
   * @param {DataItem} validationDataItem the data item which the validator created himself for validation again the proposed data item
   * @return {Promise<boolean>} returns whether the proposed data item is valid compared to the validation data item
   */
  validateDataItem(
    v: Validator,
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
   * @param {string} key which gets inserted by @kyvejs/protocol
   * @return {Promise<string>}
   */
  nextKey(v: Validator, key: string): Promise<string>;
}
