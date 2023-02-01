import seedrandom from "seedrandom";

import { DataItem, Validator } from "../..";
import { generateIndexPairs, sleep, standardizeJSON } from "../../utils";
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
      const poolConfigRound = clone(this.poolConfig);

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
          this.logger.error(standardizeJSON(err));
          continue;
        }
      }

      this.m.cache_index_tail.set(Math.max(0, currentIndex - 1));

      for (let i = currentIndex; i < targetIndex; i++) {
        // if there are no sources abort
        if ((poolConfigRound.sources ?? []).length === 0) {
          this.logger.info(
            `Abort collecting data items. No sources found on pool config`
          );
          break;
        }

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

        const nextKey = key
          ? await this.runtime.nextKey(this, key)
          : poolRound.data!.start_key;

        if (!itemFound) {
          // collect and transform data from every source at once
          const results: DataItem[] = await Promise.all(
            (poolConfigRound.sources ?? []).map((source: string) =>
              this.saveGetTransformDataItem(source, nextKey)
            )
          );

          // validate if data items from those multiple sources are
          // valid against each other
          let valid = true;

          // we generate all possible index pairs so we can cross-validate
          // each data item with every other data item to ensure that
          // everything is correct
          const indexPairs = generateIndexPairs(results.length);

          // validate every data item for each possible index pair
          for (const pair of indexPairs) {
            try {
              // validate pair of data items
              valid = await this.runtime.validateDataItem(
                this,
                results[pair[0]],
                results[pair[1]]
              );

              // if an invalid data item pair was found abort and don't save
              // to cache
              if (!valid) {
                this.logger.info(
                  `Found mismatching data item between sources ${
                    poolConfigRound.sources[pair[0]]
                  } and ${poolConfigRound.sources[pair[1]]}`
                );
                break;
              }
            } catch (err) {
              this.logger.error(
                `Unexpected error validating data items between sources ${
                  poolConfigRound.sources[pair[0]]
                } and ${poolConfigRound.sources[pair[1]]}`
              );
              this.logger.error(standardizeJSON(err));

              // if data item validation fails abort and don't save to cache
              valid = false;
              break;
            }
          }

          // if validation between sources fails we abort further data collection
          if (!valid) {
            break;
          }

          // a random item from the result gets chosen. seed is the current item key
          const seed = i.toString();
          // calculate randIndex in results range
          const randIndex = Math.floor(
            seedrandom(seed).quick() * results.length
          );

          this.logger.debug(
            `Storing item from seed:${seed} index:${randIndex} key:${nextKey} source:${poolConfigRound.sources[randIndex]}`
          );

          // add this data item to the cache
          this.logger.debug(`this.cacheProvider.put(${i.toString()},$ITEM)`);
          await this.cacheProvider.put(i.toString(), results[randIndex]);

          this.m.cache_current_items.inc();
          this.m.cache_index_head.set(i);

          // add a timeout so that the runtime data source
          // is not overloaded with requests
          await sleep(500);
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
      this.logger.error(standardizeJSON(err));

      try {
        // drop cache if an unexpected error occurs during caching
        this.logger.debug(`this.cacheProvider.drop()`);
        await this.cacheProvider.drop();

        this.m.cache_current_items.set(0);
      } catch (dropError) {
        this.logger.error(
          `Unexpected error dropping local cache. Continuing ...`
        );
        this.logger.error(standardizeJSON(dropError));
      }
    }
  }
}
