import { Validator, standardizeError } from "../../index.js";

/**
 * testStorageProvider uploads one data item and retrieves it
 * again to verify the storage provider works
 *
 * @method testStorageProvider
 * @param {Validator} this
 * @param {string} data
 * @return {Promise<void>}
 */
export async function testStorageProvider(
  this: Validator,
  data: string
): Promise<void> {
  try {
    const storageProvider = this.storageProviderFactory();

    if (storageProvider.name === "NoStorageProvider") {
      throw new Error(
        `Storage provider id ${this.pool.data?.current_storage_provider_id} not found`
      );
    }

    const bundle = Buffer.from(data);

    this.logger.info(
      `Uploading to storage provider ${storageProvider.name} ...`
    );
    const { storageId } = await storageProvider.saveBundle(bundle, []);
    this.logger.info(
      `Successfully uploaded to storage provider ${storageProvider.name} with storage id: ${storageId}`
    );

    this.logger.info(
      `Retrieving from storage provider ${storageProvider.name} with storage id ${storageId} ...`
    );
    const { storageData } = await storageProvider.retrieveBundle(
      storageId,
      60 * 1000
    );
    this.logger.info(
      `Successfully retrieved bundle from storage provider ${storageProvider.name} with storage id: ${storageId}`
    );

    this.logger.info(`Comparing byte size with original data`);
    if (bundle.byteLength !== storageData.byteLength) {
      throw new Error(
        `Byte size does not match, uploaded ${bundle.byteLength} bytes, retrieved ${storageData.byteLength}`
      );
    }

    this.logger.info(`Comparing data content with original data`);
    if (bundle.toString() !== storageData.toString()) {
      throw new Error(
        `Data content does not match, uploaded \"${bundle.toString()}\", retrieved \"${storageData.toString()}\"`
      );
    }

    this.logger.info(
      `Successfully completed tests for storage provider ${storageProvider.name}, everything valid ✅`
    );
  } catch (err) {
    this.logger.fatal(`Failed test storage provider. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    process.exit(1);
  }
}
