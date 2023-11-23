import { Validator, standardizeError } from "../..";

/**
 * isDataAvailable checks if the current next data item
 * is available and therefore check if the node has done the setup correctly.
 * Method exits if data is not available, the prevalidation or the transform
 * fails.
 *
 * @method isDataAvailable
 * @param {Validator} this
 * @return {Promise<boolean>}
 */
export async function isDataAvailable(this: Validator): Promise<boolean> {
  try {
    // log debug method
    if (this.pool.data!.current_key) {
      this.logger.debug(`this.runtime.nextKey(${this.pool.data!.current_key})`);
    }

    // get the next key to node has to fetch
    const nextKey = this.pool.data!.current_key
      ? await this.runtime.nextKey(this.pool.data!.current_key)
      : this.pool.data!.start_key;

    this.logger.info(`Checking data availability for key ${nextKey}`);

    // collect data item for next key
    const dataItem = await this.runtime.getDataItem(nextKey);

    // prevalidate data item and reject if it fails
    this.logger.debug(`this.runtime.prevalidateDataItem($ITEM)`);
    const response = await this.runtime.preValidateDataItem(dataItem);

    if (!response.valid) {
      throw new Error(
        `Prevalidation of data item with key ${nextKey} failed. Reason: ${response.error}`
      );
    }

    // transform data item
    this.logger.debug(`this.runtime.transformDataItem($ITEM)`);
    await this.runtime.transformDataItem(dataItem);

    this.logger.info(
      `Data available and valid for next key ${nextKey}. Continuing ...`
    );

    return true;
  } catch (err) {
    this.logger.warn(`Data not available for next key. Retrying in 60s ...`);
    this.logger.debug(standardizeError(err));

    return false;
  }
}
