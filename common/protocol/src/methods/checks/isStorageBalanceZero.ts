import { Validator, standardizeError } from "../../index.js";

/**
 * isStorageBalanceZero checks if the account of the storage provider
 * has more than 0$ funds available
 *
 * @method isStorageBalanceZero
 * @param {Validator} this
 * @return {Promise<boolean>}
 */
export async function isStorageBalanceZero(this: Validator): Promise<boolean> {
  try {
    this.logger.debug(`this.storageProviderFactory()`);
    const storageProvider = this.storageProviderFactory();

    this.logger.info(
      `Checking account balance on StorageProvider:${storageProvider.name}`
    );

    const { sufficient, message } = await storageProvider.isBalanceSufficient(
      1
    );

    if (!sufficient) {
      this.logger.fatal(
        `Account on StorageProvider:${storageProvider.name} has not enough funds to upload at least 1 byte! Exiting ...`
      );
      this.logger.fatal(
        `Provide some funds to the storage provider account: ${message}`
      );
      return true;
    }

    this.logger.info(
      `Account has available funds on StorageProvider:${storageProvider.name}\n`
    );

    return false;
  } catch (err) {
    this.logger.fatal(
      `Error while checking storage provider balance. Exiting ...`
    );
    this.logger.fatal(standardizeError(err));

    return true;
  }
}
