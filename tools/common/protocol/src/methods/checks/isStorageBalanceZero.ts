import BigNumber from "bignumber.js";
import { Validator, standardizeError } from "../..";

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

    const address = await storageProvider.getAddress();
    const balance = await storageProvider.getBalance();

    // if storage provider has no balance we don't need to validate it
    if (!balance) {
      this.logger.info(
        `StorageProvider:${storageProvider.name} has no balance. Continuing...\n`
      );
      return false;
    }

    this.logger.debug(`Account "${address}" has "${balance}" balance`);

    if (new BigNumber(balance).isZero()) {
      this.logger.fatal(
        `Account on StorageProvider:${storageProvider.name} has zero funds! Exiting ...`
      );
      this.logger.fatal(
        `Provide some funds to the following account: ${address}`
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
