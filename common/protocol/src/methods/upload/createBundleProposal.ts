import { Validator } from "../..";
import { BundleTag, DataItem } from "../../types";
import {
  bundleToBytes,
  MAX_BUNDLE_BYTE_SIZE,
  sha256,
  standardizeJSON,
} from "../../utils";

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
    const bundleProposal: DataItem[] = [];

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
        this.logger.error(standardizeJSON(err));

        return null;
      });

    // skip uploader role if bundleSummary is null
    if (bundleSummary === null) {
      await this.skipUploaderRole(fromIndex);
      return;
    }

    // get current compression defined on pool
    this.logger.debug(
      `compressionFactory(${this.pool.data?.current_compression_id ?? 0})`
    );
    const compression = this.compressionFactory(
      this.pool.data?.current_compression_id ?? 0
    );

    const uploadBundle = bundleToBytes(bundleProposal);

    // check if raw bundle size is below the max limit
    if (uploadBundle.byteLength > MAX_BUNDLE_BYTE_SIZE) {
      this.logger.info(
        `Bundle with byte size ${uploadBundle.byteLength} is too big (MAX_BUNDLE_BYTE_SIZE=${MAX_BUNDLE_BYTE_SIZE})`
      );

      await this.skipUploaderRole(fromIndex);
      return;
    }

    // if data was found on the cache proceed with compressing the
    // bundle for the upload to the storage provider
    this.logger.debug(`this.compression.compress($RAW_BUNDLE_PROPOSAL)`);
    const storageProviderData = await compression
      .compress(uploadBundle)
      .catch((err) => {
        this.logger.error(
          `Unexpected error compressing bundle. Skipping Uploader Role ...`
        );
        this.logger.error(standardizeJSON(err));

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

    // create tags for bundle to make it easier to find KYVE data
    // on the storage provider itself
    const tags: BundleTag[] = [
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
    ];

    // try to upload the bundle proposal to the storage provider
    // if the upload fails the node should immediately skip the
    // uploader role to prevent upload slashes
    try {
      // get current storage provider defined on pool
      this.logger.debug(
        `storageProviderFactory(${
          this.pool.data?.current_storage_provider_id ?? 0
        }, $STORAGE_PRIV)`
      );
      const storageProvider = await this.storageProviderFactory(
        this.pool.data?.current_storage_provider_id ?? 0
      );

      // upload the bundle proposal to the storage provider
      // and get a storage id. With that other participants in the
      // network can retrieve the data again and validate it
      this.logger.debug(
        `this.storageProvider.saveBundle($STORAGE_PROVIDER_DATA,$TAGS)`
      );

      const { storageId, storageData } = await storageProvider.saveBundle(
        storageProviderData,
        tags
      );

      // throw error if storage provider returns an empty storage id
      if (!storageId) {
        throw new Error("Storage Provider returned empty storageId");
      }

      // hash the raw data which gets uploaded to the storage provider
      // with sha256
      const dataSize = storageData.byteLength;

      // hash the raw data which gets uploaded to the storage provider
      // with sha256
      const dataHash = sha256(storageData);

      this.m.storage_provider_save_successful.inc();

      this.logger.info(
        `Successfully saved bundle on StorageProvider:${storageProvider.name}`
      );

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
      this.logger.info(
        `Saving bundle proposal on StorageProvider was unsuccessful`
      );
      this.logger.debug(standardizeJSON(err));

      this.m.storage_provider_save_failed.inc();

      // if the bundle fails to the uploaded to the storage provider
      // let the node skip the uploader role and continue
      await this.skipUploaderRole(fromIndex);
    }
  } catch (err) {
    this.logger.error(
      `Unexpected error creating bundle proposal. Skipping proposal ...`
    );
    this.logger.error(standardizeJSON(err));
  }
}
