import { DataItem, Validator } from "../..";
import { callWithBackoffStrategy, sleep, standardizeError } from "../../utils";
import clone from "clone";

/**
 * runCache is the other main execution thread for collecting data items
 * which will get packed into bundles and submitted to the network
 * in order to archive them. This method should run indefinitely.
 *
 * This method stays in sync with the bundle proposal rounds
 * where the other main method "runNode" takes part. It works
 * by running in parallel to the validation and submission of
 * bundle proposals. When data needs to be validated or proposed
 * the other method simply looks in the globally available cache
 * and checks if this method already added some items into it.
 *
 * It starts by getting the current pool index and checking at
 * from which index to which the node has to collect the data items
 * in order to participate in the current proposal round.
 *
 * After a bundle proposal got finalized the cache gets cleared of
 * all finalized data items since they are not needed anymore and
 * starts collecting the data items which are needed for the
 * following round.
 *
 * @method runCache
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function runCache(this: Validator): Promise<void> {
  // run rounds indefinitely, continueRound returns always
  // true and is only used by unit tests to control the termination of
  // rounds by mocking it
  while (this.continueRound()) {
    try {
      // temp save current pool state because the runNode thread could
      // overwrite this value during runtime
      const poolRound = clone(this.pool);

      // if there is no storage id we can assume that the last
      // bundle has been dropped or invalidated. In that case we
      // reset the cache
      if (!poolRound.bundle_proposal!.storage_id) {
        this.logger.debug(`this.cacheProvider.drop()`);
        await this.cacheProvider.drop();

        this.m.cache_current_items.set(0);
      }

      // determine the creation time of the current bundle proposal
      // if the creation time ever increases this means a new bundle
      // proposal is available
      const updatedAt = parseInt(poolRound.bundle_proposal!.updated_at);

      // determine the current index of the pool. All data items
      // before the current index can be deleted since they are already
      // finalized. Data items should always be cached from this index
      // and not before
      const currentIndex = parseInt(poolRound.data!.current_index);

      // determine the target index. Here the target index is the
      // index the cache should collect data in this particular round.
      // We start from the current index and first index all the way
      // to the current bundle proposal. Since the next uploader
      // creates a bundle starting from the current bundle proposal
      // we further index to the maximum possible bundle size ahead
      const targetIndex =
        currentIndex +
        parseInt(poolRound.bundle_proposal!.bundle_size) +
        parseInt(poolRound.data!.max_bundle_size);

      // determine the start key for the current caching round
      // this key gets increased overtime to temp save the
      // current key while collecting the data items
      let key = poolRound.data!.current_key;

      // collect all data items from current pool index to
      // the target index starting with current key
      this.logger.debug(
        `Starting cache round from current index ${currentIndex} to target index ${targetIndex} with current key ${key}`
      );

      // delete all data items which came before the current index
      // because they got finalized and are not needed anymore
      this.logger.debug(
        `Deleting data from index ${Math.max(
          0,
          currentIndex - parseInt(poolRound.data!.max_bundle_size)
        )} to index ${currentIndex}`
      );

      for (
        let i = Math.max(
          0,
          currentIndex - parseInt(poolRound.data!.max_bundle_size)
        );
        i < currentIndex;
        i++
      ) {
        try {
          this.logger.debug(`this.cacheProvider.exists(${i.toString()})`);
          const itemFound = await this.cacheProvider.exists(i.toString());

          if (itemFound) {
            this.logger.debug(`this.cacheProvider.del(${i.toString()})`);
            await this.cacheProvider.del(i.toString());

            this.m.cache_current_items.dec();
          }
        } catch (err) {
          this.logger.error(
            `Unexpected error deleting data item ${i.toString()} from local cache. Continuing ...`
          );
          this.logger.error(standardizeError(err));
          continue;
        }
      }

      this.m.cache_index_tail.set(Math.max(0, currentIndex - 1));

      for (let i = currentIndex; i < targetIndex; i++) {
        // check if data item was already collected. If it was
        // already collected we don't need to retrieve it again
        this.logger.debug(`this.cacheProvider.exists(${i.toString()})`);
        const itemFound = await this.cacheProvider.exists(i.toString());

        // retrieve the next key from the deterministic runtime
        // specific implementation. If the start key is not defined
        // the pool is in genesis state and therefore the pool
        // specific start key should be used
        if (key) {
          this.logger.debug(`this.runtime.nextKey(${key})`);
        }

        // if nextKey fails we call with backoff strategy
        const nextKey = key
          ? await callWithBackoffStrategy(
              async () => {
                return await this.runtime.nextKey(this, key);
              },
              {
                limitTimeoutMs: 5 * 60 * 1000,
                increaseByMs: 10 * 1000,
              },
              (err, ctx) => {
                this.logger.info(
                  `Getting nextKey with key ${key} was unsuccessful. Retrying in ${(
                    ctx.nextTimeoutInMs / 1000
                  ).toFixed(2)}s ...`
                );
                this.logger.debug(standardizeError(err));
              }
            )
          : poolRound.data!.start_key;

        if (!itemFound) {
          // collect data item for next key
          const dataItem: DataItem = await callWithBackoffStrategy(
            async () => {
              // get the data item from the runtime by key
              this.logger.debug(`this.runtime.getDataItem($THIS,${nextKey})`);
              const data = await this.runtime.getDataItem(this, nextKey);

              this.m.runtime_get_data_item_successful.inc();

              // prevalidate data item and reject if it fails
              try {
                this.logger.debug(
                  `this.runtime.prevalidateDataItem($THIS,$ITEM)`
                );
                const valid = await this.runtime.prevalidateDataItem(
                  this,
                  data
                );

                if (!valid) {
                  this.logger.error(
                    `Prevalidation of data item with key ${nextKey} failed, only voting abstain from now on. Please check if you have configured your data source correctly.`
                  );
                  throw new Error();
                }
              } catch (err) {
                this.logger.error(standardizeError(err));
                this.logger.error(
                  `Prevalidation of data item with key ${nextKey} failed, only voting abstain from now on. Please check if you have configured your data source correctly.`
                );
                throw new Error();
              }

              // transform data item
              this.logger.debug(`this.runtime.transformDataItem($ITEM)`);
              return await this.runtime.transformDataItem(this, data);
            },
            {
              limitTimeoutMs: 5 * 60 * 1000,
              increaseByMs: 10 * 1000,
            },
            (err, ctx) => {
              this.logger.info(
                `Requesting getDataItem with key ${nextKey} was unsuccessful. Retrying in ${(
                  ctx.nextTimeoutInMs / 1000
                ).toFixed(2)}s ...`
              );
              this.logger.debug(standardizeError(err));

              this.m.runtime_get_data_item_failed.inc();
            }
          );

          // add this data item to the cache
          this.logger.debug(`this.cacheProvider.put(${i.toString()},$ITEM)`);
          await this.cacheProvider.put(i.toString(), dataItem);

          this.m.cache_current_items.inc();
          this.m.cache_index_head.set(i);

          // add a timeout so that the runtime data source
          // is not overloaded with requests, 50ms by default
          await sleep(this.requestBackoff);
        }

        // assign the next key for the next round
        key = nextKey;
      }

      // indicate that current caching round is done
      this.logger.debug(
        `Finished caching from index ${currentIndex} to ${targetIndex}. Waiting for next round ...`
      );

      // wait until a new bundle proposal is available. We don't need
      // to sync the pool here because the pool state already gets
      // synced in the other main function "runNode" so we only listen
      await this.waitForCacheContinuation(updatedAt);
    } catch (err) {
      this.logger.error(
        `Unexpected error collecting data items to local cache. Continuing ...`
      );
      this.logger.error(standardizeError(err));

      try {
        // drop cache if an unexpected error occurs during caching
        this.logger.debug(`this.cacheProvider.drop()`);
        await this.cacheProvider.drop();

        this.m.cache_current_items.set(0);
      } catch (dropError) {
        this.logger.error(
          `Unexpected error dropping local cache. Continuing ...`
        );
        this.logger.error(standardizeError(dropError));
      }
    }
  }
}
