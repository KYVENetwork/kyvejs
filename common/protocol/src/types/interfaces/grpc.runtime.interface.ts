import { Validator } from "../..";
import { DataItem } from "..";

/**
 * Interface of Runtime.
 *
 * The Runtime implements the custom logic of a pool and defines how data
 * items are fetched and which order they should have.
 *
 * @interface IgRPCRuntime
 */
export interface IgRPCRuntime {
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
   * Stringified config data used to communicate with gRPC methods
   *
   * @property serializedConfig
   * @type {string}
   */
  serializedConfig: string;

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
   * Parses the raw runtime config found on the pool, validates it, and sets
   * the "config" property in the runtime. A raw config can be an IPFS link to the
   * actual config or a stringified YAML or JSON string. This method will error if
   * the specific runtime config is not parsable or is invalid.
   *
   * @method validateSetConfig
   * @param {Object} options - An object containing the raw_config property.
   * @param {string} options.raw_config - The raw runtime configuration.
   * @return {Promise<string>} A promise that resolves to the validated raw_config string.
   */
  validateSetConfig(options: { raw_config: string }): Promise<string>;

  /**
   * Gets the data item from a specific key and returns both the key and the value.
   *
   * @method getDataItem
   * @param {Object} options - An object containing the serializedConfig and key properties.
   * @param {string} options.serializedConfig - The serialized configuration.
   * @param {string} options.key - The key of the data item.
   * @return {Promise<DataItem>} A promise that resolves to the data item associated with the key.
   */
  getDataItem(options: {
    serializedConfig: string;
    key: string;
  }): Promise<DataItem>;

  /**
   * Prevalidates a data item right after it was retrieved from the source.
   * If the prevalidation fails, the item gets rejected and never makes it to
   * the local cache. If the prevalidation succeeds, the item gets transformed
   * and written to the cache, where it is used for the submission of proposals
   * or bundle validation.
   *
   * @method prevalidateDataItem
   * @param {Object} options - An object containing the serializedConfig and data_item properties.
   * @param {string} options.serializedConfig - The serialized configuration.
   * @param {DataItem} options.data_item - The data item to be prevalidated.
   * @return {Promise<boolean>} A promise that resolves to a boolean, indicating
   *                           whether the prevalidation of the data item succeeded.
   */
  prevalidateDataItem(options: {
    serializedConfig: string;
    data_item: DataItem;
  }): Promise<boolean>;

  /**
   * Transforms a single data item and returns it. This method is used, for example,
   * to remove unnecessary data or format the data in a better way.
   *
   * @method transformDataItem
   * @param {Object} options - An object containing the serializedConfig and data_item properties.
   * @param {string} options.serializedConfig - The serialized configuration.
   * @param {DataItem} options.data_item - The data item to be transformed.
   * @return {Promise<DataItem>} A promise that resolves to the transformed data item.
   */
  transformDataItem(options: {
    serializedConfig: string;
    data_item: DataItem;
  }): Promise<DataItem>;

  /**
   * Validates a single data item of a bundle proposal.
   *
   * @method validateDataItem
   * @param {Object} options - An object containing the serializedConfig, proposed_data_item,
   *                            and validation_data_item properties.
   * @param {string} options.serializedConfig - The serialized configuration.
   * @param {DataItem} options.proposed_data_item - The data item proposed by the uploader.
   * @param {DataItem} options.validation_data_item - The data item created by the validator for
   *                                                  validation against the proposed data item.
   * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether
   *                           the proposed data item is valid compared to the validation data item.
   */
  validateDataItem(options: {
    serializedConfig: string;
    proposed_data_item: DataItem;
    validation_data_item: DataItem;
  }): Promise<boolean>;

  /**
   * Summarizes a data bundle to produce a formatted value string. This summary is
   * stored on-chain and must be kept short to avoid excessive gas costs.
   *
   * The formatted value string should not exceed 100 characters in length.
   *
   * @method summarizeDataBundle
   * @param {Object} options - An object containing the serializedConfig and bundle properties.
   * @param {string} options.serializedConfig - The serialized configuration.
   * @param {DataItem[]} options.bundle - The bundle to be summarized.
   * @return {Promise<string>} A promise that resolves to the formatted value string.
   */
  summarizeDataBundle(options: {
    serializedConfig: string;
    bundle: DataItem[];
  }): Promise<string>;

  /**
   * Gets the next key from the current key so that the data archived has an order.
   *
   * @method nextKey
   * @param {Object} options - An object containing the serializedConfig and key properties.
   * @param {string} options.serializedConfig - The serialized configuration.
   * @param {string} options.key - The key from which the next key should be derived.
   * @return {Promise<string>} A promise that resolves to the next key.
   */
  nextKey(options: { serializedConfig: string; key: string }): Promise<string>;
}
