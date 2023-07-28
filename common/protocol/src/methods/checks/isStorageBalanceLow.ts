import BigNumber from "bignumber.js";
import { Validator, standardizeJSON } from "../..";

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
    const storageProvider = Validator.storageProviderFactory(
      this.pool.data?.current_storage_provider_id ?? 0,
      this.storagePriv
    );

    this.logger.info(
      `Checking account balance on StorageProvider:${storageProvider.name}`
    );

    const address = await storageProvider.getAddress();
    const balance = await storageProvider.getBalance();

    // get upload cost of current data size
    const cost = await storageProvider.getPrice(
      parseInt(this.pool.bundle_proposal?.data_size ?? "0")
    );

    // if account can not pay for 10x the current bundle the balance is not sufficient
    if (new BigNumber(balance).lte(new BigNumber(cost).multipliedBy(10))) {
      this.logger.warn(
        `Low account balance on StorageProvider:${storageProvider.name}`
      );
    } else {
      this.logger.info(
        `Account has sufficient balance on StorageProvider:${storageProvider.name}`
      );
    }

    this.logger.debug(`Account "${address}" has balance of "${balance}"`);
  } catch (err) {
    this.logger.error(`Checking storage provider balance failed`);
    this.logger.error(standardizeJSON(err));
  }
}
