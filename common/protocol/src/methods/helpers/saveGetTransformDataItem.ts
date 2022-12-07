import {
  callWithBackoffStrategy,
  DataItem,
  Validator,
  standardizeJSON,
} from "../..";

/**
 * saveGetTransformDataItem gets the data item with a backoff strategy
 *
 * @method saveGetTransformDataItem
 * @param {Validator} this
 * @param {string} source
 * @param {string} key
 * @return {Promise<DataItem | null>}
 */
export async function saveGetTransformDataItem(
  this: Validator,
  source: string,
  key: string
): Promise<DataItem | null> {
  // if item does not exist in cache yet collect it
  return await callWithBackoffStrategy(
    async () => {
      // collect data item from runtime source
      this.logger.debug(`this.runtime.getDataItem($THIS,${source},${key})`);
      let item = await this.runtime.getDataItem(this, source, key);

      this.m.runtime_get_data_item_successful.inc();

      // prevalidate data item and reject if it fails
      this.logger.debug(`this.runtime.prevalidateDataItem($THIS,$ITEM)`);
      const valid = await this.runtime.prevalidateDataItem(this, item);

      if (!valid) {
        throw new Error(
          `Prevalidation of data item with key ${key} and source ${source} failed.`
        );
      }

      // transform data item
      try {
        this.logger.debug(`this.runtime.transformDataItem($ITEM)`);
        item = await this.runtime.transformDataItem(this, item);
      } catch (err) {
        this.logger.error(
          `Unexpected error transforming data item. Skipping transformation ...`
        );
        this.logger.error(standardizeJSON(err));
      }

      return standardizeJSON(item);
    },
    {
      limitTimeoutMs: 5 * 60 * 1000,
      increaseByMs: 10 * 1000,
    },
    (err, ctx) => {
      this.logger.info(
        `Requesting getDataItem from source ${source} was unsuccessful. Retrying in ${(
          ctx.nextTimeoutInMs / 1000
        ).toFixed(2)}s ...`
      );
      this.logger.debug(standardizeJSON(err));

      this.m.runtime_get_data_item_failed.inc();
    }
  );
}
