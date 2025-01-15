import BigNumber from "bignumber.js";
import { Validator } from "../..";
import { DataItem } from "../../types";
import {
  bundleToBytes,
  MAX_BUNDLE_BYTE_SIZE,
  sha256,
  standardizeError,
} from "../../utils";
import { Coin, Coins } from "@kyvejs/coins";

/**
 * createBundleProposal assembles a bundle proposal by loading
 * data from the local cache and uploading it to a storage provider.
 * After the data was successfully saved the node submits the bundle
 * proposal with the storage id and other information to the network
 * so that other participants can validate and vote on it.
 *
 * If one of the steps fails the node should skip it's uploader role
 * to prevent slashes.
 *
 * @method createBundleProposal
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function createBundleProposal(this: Validator): Promise<void> {
  try {
    this.logger.info(
      `Creating a new bundle proposal for the next bundle proposal round`
    );

    // create bundle proposal from the current bundle proposal index
    const fromIndex =
      parseInt(this.pool.data!.current_index) +
      parseInt(this.pool.bundle_proposal!.bundle_size);

    // create the bundle proposal from the determined bundle start index
    // and index all the way until the maximum bundle size is reached
    const toIndex = fromIndex + parseInt(this.pool.data!.max_bundle_size);

    // load bundle proposal from local cache
    let bundleProposal: DataItem[] = [];

    // here we try to fetch data items from the current index
    // to the proposal index. If we fail before we simply
    // abort and and submit the data collected we have available
    // right now
    this.logger.debug(
      `Loading bundle from index ${fromIndex} to index ${toIndex}`
    );

    for (let i = fromIndex; i < toIndex; i++) {
      try {
        // try to get the data item from local cache
        this.logger.debug(`this.cacheProvider.get(${i.toString()})`);
        const item = await this.cacheProvider.get(i.toString());
        bundleProposal.push(item);
      } catch {
        // if the data item was not found simply abort
        // and submit what we just have now
        break;
      }
    }

    // if no data was found on the cache skip the uploader role
    // so that this node does not receive an upload slash
    if (!bundleProposal.length) {
      this.logger.info(`No data was found on local cache from required range`);

      await this.skipUploaderRole(fromIndex);
      return;
    }

    this.logger.info(`Data was found on local cache from required range`);

    // get current compression defined on pool
    this.logger.debug(`this.compressionFactory()`);
    const compression = this.compressionFactory();

    let maxBytes = MAX_BUNDLE_BYTE_SIZE;

    if (
      this.ensureNoLoss &&
      (this.sdk[0].isMainnet() || this.sdk[0].isLocal())
    ) {
      await this.syncParams();

      // calculate expected storage rewards to calculate
      // the maximum amount of bytes we can upload before
      // running into a loss
      let rewards = new Coins({
        denom: this.sdk[0].config.coinDenom,
        amount: new BigNumber(this.pool.account_balance)
          .times(this.params.pool_params?.pool_inflation_payout_rate ?? "0")
          .toFixed(0),
      });

      this.pool.fundings.forEach((f) => {
        rewards = rewards.add(
          new Coins(...f.amounts_per_bundle).min(...f.amounts)
        );
      });

      rewards = new Coins(
        ...rewards.toArray().map((coin) => ({
          denom: coin.denom,
          amount: new BigNumber(coin.amount)
            .multipliedBy(
              new BigNumber(1).minus(
                this.params.bundles_params?.network_fee ?? "0"
              )
            )
            .toFixed(0),
        }))
      );

      const rewardsUsd = rewards.toArray().reduce((acc: string, coin: Coin) => {
        const coin_entry = this.params.funders_params?.coin_whitelist.find(
          (w) => w.coin_denom === coin.denom
        );

        if (!coin_entry || coin_entry.coin_weight === "0") {
          return acc;
        }

        return new BigNumber(acc)
          .plus(
            new BigNumber(coin.amount)
              .dividedBy(
                new BigNumber(10).exponentiatedBy(coin_entry.coin_decimals)
              )
              .times(coin_entry.coin_weight)
          )
          .toString();
      }, "0");

      const storageCost =
        this.params.bundles_params?.storage_costs.find(
          (s) =>
            s.storage_provider_id ===
            (this.pool.data?.current_storage_provider_id ?? 0)
        )?.cost ?? "0";

      if (new BigNumber(storageCost).gt(0)) {
        const maxBytesWithNoLoss = +new BigNumber(rewardsUsd)
          .dividedBy(storageCost)
          .toFixed(0);

        if (new BigNumber(maxBytesWithNoLoss).lt(maxBytes)) {
          maxBytes = maxBytesWithNoLoss;
        }
      }
    }

    let low = 0;
    let high = bundleProposal.length - 1;
    let maxIndex = -1;
    let size;

    // use binary search to minimize the times we have to compress the bundle to
    // find the biggest bundle which is still below the max byte size
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      this.logger.debug(
        `this.compression.compress($RAW_BUNDLE_PROPOSAL[0:${mid}])`
      );
      const storageProviderData = await compression
        .compress(bundleToBytes(bundleProposal.slice(0, mid + 1)))
        .catch((err) => {
          this.logger.error(
            `Unexpected error compressing bundle. Skipping Uploader Role ...`
          );
          this.logger.error(standardizeError(err));

          return null;
        });

      // skip uploader role if compression returns null
      if (storageProviderData === null) {
        await this.skipUploaderRole(fromIndex);
        return;
      }

      size = storageProviderData.byteLength;

      this.logger.debug(
        `Bundle proposal with index range 0,${mid} has byte size ${size} of max allowed ${maxBytes} bytes`
      );

      if (size < maxBytes) {
        if (mid >= maxIndex) {
          maxIndex = mid;
        }
        low = mid + 1;
      } else if (size > maxBytes) {
        high = mid - 1;
      } else {
        if (mid >= maxIndex) {
          maxIndex = mid;
        }
        break;
      }
    }

    this.logger.debug(
      `Choosing bundle proposal with index range 0,${maxIndex} has biggest byte size ${size} still below max allowed ${maxBytes} bytes`
    );

    if (maxIndex + 1 === 0) {
      this.logger.info(
        `Skip uploader role since uploading at least one data item would exceed the maximum bytes limit`
      );

      await this.skipUploaderRole(fromIndex);
      return;
    }

    this.logger.info(
      `Dropping ${bundleProposal.length - (maxIndex + 1)} items from original ${
        bundleProposal.length
      } item bundle proposal to prevent exceeding the maximum bytes limit`
    );

    // cutoff any data items which would exceed the maximum data size which
    // does not lead to a loss
    bundleProposal = bundleProposal.slice(0, maxIndex + 1);

    // get the first key of the bundle proposal which gets
    // included in the bundle proposal and saved on chain
    // as from_key
    const fromKey = bundleProposal.at(0)?.key ?? "";

    // get the last key of the bundle proposal which gets
    // included in the bundle proposal and saved on chain
    // as to_key
    const toKey = bundleProposal.at(-1)?.key ?? "";

    // get the last value of the bundle proposal and format
    // it so it can be included in the bundle proposal and
    // saved on chain
    this.logger.debug(`this.runtime.summarizeDataBundle($BUNDLE_PROPOSAL)`);
    const bundleSummary = await this.runtime
      .summarizeDataBundle(this, bundleProposal)
      .catch((err) => {
        this.logger.error(
          `Unexpected error summarizing bundle. Skipping Uploader Role ...`
        );
        this.logger.error(standardizeError(err));

        return null;
      });

    // skip uploader role if bundleSummary is null
    if (bundleSummary === null) {
      await this.skipUploaderRole(fromIndex);
      return;
    }

    const uploadBundle = bundleToBytes(bundleProposal);

    // if data was found on the cache proceed with compressing the
    // bundle for the upload to the storage provider
    this.logger.debug(`this.compression.compress($RAW_BUNDLE_PROPOSAL)`);
    const storageProviderData = await compression
      .compress(uploadBundle)
      .catch((err) => {
        this.logger.error(
          `Unexpected error compressing bundle. Skipping Uploader Role ...`
        );
        this.logger.error(standardizeError(err));

        return null;
      });

    // skip uploader role if compression returns null
    if (storageProviderData === null) {
      await this.skipUploaderRole(fromIndex);
      return;
    }

    this.logger.info(
      `Successfully compressed bundle with Compression:${compression.name}`
    );

    // hash the raw data which gets uploaded to the storage provider
    // with sha256
    const dataSize = storageProviderData.byteLength;

    // hash the raw data which gets uploaded to the storage provider
    // with sha256
    const dataHash = sha256(storageProviderData);

    let storageId = "";

    // check if the same bundle was already uploaded the last round.
    // if we see that the exact same bundle was already uploaded (hash
    // comparison) we don't upload the data again and instead reuse the
    // storage id
    if (
      this.lastUploadedBundle &&
      this.lastUploadedBundle.dataHash === dataHash
    ) {
      storageId = this.lastUploadedBundle.storageId;

      this.logger.info(
        `Uploaded same bundle with data hash ${dataHash} already with storage id ${storageId}. Resubmitting ...`
      );
    } else {
      // try to upload the bundle proposal to the storage provider
      // if the upload fails the node should immediately skip the
      // uploader role to prevent upload slashes
      try {
        // get current storage provider defined on pool
        this.logger.debug(`this.storageProviderFactory()`);
        const storageProvider = this.storageProviderFactory();

        // if balance is less than the upload cost we skip the uploader
        // role with a warning
        const balance = await storageProvider.getBalance();
        const cost = await storageProvider.getPrice(storageProviderData.length);

        if (new BigNumber(balance).lt(cost)) {
          this.logger.warn(
            `Not enough balance on StorageProvider:${storageProvider.name}; balance = ${balance} required = ${cost}`
          );
          await this.skipUploaderRole(fromIndex);
          return;
        }

        // upload the bundle proposal to the storage provider
        // and get a storage id. With that other participants in the
        // network can retrieve the data again and validate it
        this.logger.debug(
          `this.storageProvider.saveBundle($STORAGE_PROVIDER_DATA,$TAGS)`
        );

        const uploadBundle = await storageProvider.saveBundle(
          storageProviderData,
          [
            {
              name: "Content-Type",
              value: compression.mimeType,
            },
            {
              name: "Application",
              value: "KYVE",
            },
            {
              name: "ChainId",
              value: this.chainId,
            },
            {
              name: "@kyvejs/protocol",
              value: this.protocolVersion,
            },
            {
              name: this.runtime.name,
              value: this.runtime.version,
            },
            {
              name: "Pool",
              value: this.poolId.toString(),
            },
            {
              name: "Uploader",
              value: this.client[0].account.address,
            },
            {
              name: "FromIndex",
              value: toIndex.toString(),
            },
            {
              name: "ToIndex",
              value: (toIndex + bundleProposal.length).toString(),
            },
            {
              name: "BundleSize",
              value: bundleProposal.length.toString(),
            },
            {
              name: "FromKey",
              value: fromKey,
            },
            {
              name: "ToKey",
              value: toKey,
            },
            {
              name: "BundleSummary",
              value: bundleSummary,
            },
          ]
        );

        this.m.storage_provider_save_successful.inc();

        this.logger.info(
          `Successfully saved bundle on StorageProvider:${storageProvider.name}`
        );

        storageId = uploadBundle.storageId;

        // save uploaded bundle details for next round
        this.lastUploadedBundle = {
          storageId,
          dataSize,
          dataHash,
        };
      } catch (err) {
        this.logger.info(
          `Saving bundle proposal on StorageProvider was unsuccessful`
        );
        this.logger.debug(standardizeError(err));

        this.m.storage_provider_save_failed.inc();

        // if the bundle fails to the uploaded to the storage provider
        // let the node skip the uploader role and continue
        await this.skipUploaderRole(fromIndex);
      }
    }

    // throw error if storage provider returns an empty storage id
    if (!storageId) {
      throw new Error("Storage Provider returned empty storageId");
    }

    // if the bundle was successfully uploaded to the storage provider
    // the node can finally submit the actual bundle proposal to
    // the network
    const success = await this.submitBundleProposal(
      storageId,
      dataSize,
      dataHash,
      fromIndex,
      bundleProposal.length,
      fromKey,
      toKey,
      bundleSummary
    );

    if (success) {
      this.logger.info(`Successfully submitted BundleProposal:${storageId}`);
    }
  } catch (err) {
    this.logger.error(
      `Unexpected error creating bundle proposal. Skipping proposal ...`
    );
    this.logger.error(standardizeError(err));
  }
}
