import { BigNumber } from "bignumber.js";
import { Validator, standardizeJSON } from "../../index.js";

/**
 * isStorageBalanceLow checks if the account of the storage provider
 * could pay for more than 10x of the current bundle size
 *
 * @method isStorageBalanceLow
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function isStorageBalanceLow(this: Validator): Promise<void> {
  try {
    this.logger.debug(`this.storageProviderFactory()`);
    const storageProvider = this.storageProviderFactory();

    this.logger.info(
      `Checking if uploader has sufficient funds to upload the bundle to the StorageProvider:${storageProvider.name}`
    );

    const { sufficient, message } = await storageProvider.isBalanceSufficient(
      parseInt(this.pool.bundle_proposal?.data_size ?? "0")
    );

    if (!sufficient) {
      this.logger.warn(
        `Upload can not upload to StorageProvider:${storageProvider.name}: ${message}`
      );
    }

    this.logger.info(
      `Account has sufficient balance on StorageProvider:${storageProvider.name}`
    );
  } catch (err) {
    this.logger.error(`Checking storage provider balance failed`);
    this.logger.error(standardizeJSON(err));
  }
}
