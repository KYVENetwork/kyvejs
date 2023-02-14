import BigNumber from "bignumber.js";
import { Validator, standardizeJSON } from "../..";

/**
 * validateStorageBalance checks if the account of the storage provider
 * has more than 0$ funds available
 *
 * @method validateStorageBalance
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function validateStorageBalance(this: Validator): Promise<void> {
  try {
    const storageProvider = await this.storageProviderFactory(
      this.pool.data?.current_storage_provider_id ?? 0
    );

    this.logger.info(
      `Checking account balance on StorageProvider:${storageProvider.name}`
    );

    const address = await storageProvider.getAddress();
    const balance = await storageProvider.getBalance();

    this.logger.debug(`Account "${address}" has "${balance}" balance`);

    if (new BigNumber(balance).isZero()) {
      this.logger.fatal(
        `Account on StorageProvider:${storageProvider.name} has zero funds! Exiting ...`
      );
      this.logger.fatal(
        `Provide some funds to the following account: ${address}`
      );
      process.exit(1);
    }

    this.logger.info(
      `Account has available funds on StorageProvider:${storageProvider.name}\n`
    );
  } catch (err) {
    this.logger.fatal(
      `Error while validating storage provider funds. Exiting ...`
    );
    this.logger.fatal(standardizeJSON(err));

    process.exit(1);
  }
}
