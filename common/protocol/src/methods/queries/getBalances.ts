import BigNumber from "bignumber.js";

import {
  Validator,
  standardizeJSON,
  KYVE_COIN_DENOM,
  KYVE_COIN_DECIMALS,
} from "../..";

/**
 * getBalances tries to retrieve the $KYVE balance of the staker account, the $KYVE
 * balance of the valaccount and the balance of the storage provider which
 * can be of any currency for metrics
 *
 * @method getBalances
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function getBalances(this: Validator): Promise<void> {
  for (let c = 0; c < this.client.length; c++) {
    try {
      this.logger.debug(this.rpc[c]);
      this.logger.debug(
        `this.client.nativeClient.getBalance(${this.staker},${KYVE_COIN_DENOM})`
      );

      const stakerBalanceRaw = await this.client[c].nativeClient.getBalance(
        this.staker,
        KYVE_COIN_DENOM
      );

      this.logger.debug(JSON.stringify(stakerBalanceRaw));

      const stakerBalance = new BigNumber(stakerBalanceRaw.amount)
        .dividedBy(new BigNumber(10).exponentiatedBy(KYVE_COIN_DECIMALS))
        .toNumber();

      this.m.balance_staker.set(stakerBalance);
      break;
    } catch (err) {
      this.logger.error(`Failed to get $KYVE balance of staker`);
      this.logger.error(standardizeJSON(err));
    }
  }

  for (let c = 0; c < this.client.length; c++) {
    try {
      this.logger.debug(this.rpc[c]);
      this.logger.debug(
        `this.client.nativeClient.getBalance(${this.client[0].account.address},${KYVE_COIN_DENOM})`
      );

      const valaccountBalanceRaw = await this.client[c].nativeClient.getBalance(
        this.client[0].account.address,
        KYVE_COIN_DENOM
      );

      this.logger.debug(JSON.stringify(valaccountBalanceRaw));

      const valaccountBalance = new BigNumber(valaccountBalanceRaw.amount)
        .dividedBy(new BigNumber(10).exponentiatedBy(KYVE_COIN_DECIMALS))
        .toNumber();

      this.m.balance_valaccount.set(valaccountBalance);
      break;
    } catch (err) {
      this.logger.error(`Failed to get $KYVE balance of valaccount`);
      this.logger.error(standardizeJSON(err));
    }
  }

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

    this.logger.debug(`this.storageProvider.getBalance()`);

    const storageProviderBalanceRaw = await storageProvider.getBalance();

    this.logger.debug(JSON.stringify(storageProviderBalanceRaw));

    const storageProviderBalance = new BigNumber(storageProviderBalanceRaw)
      .dividedBy(new BigNumber(10).exponentiatedBy(storageProvider.decimals))
      .toNumber();

    this.m.balance_storage_provider.set(storageProviderBalance);
  } catch (err) {
    this.logger.error(`Failed to get balance of storage provider`);
    this.logger.error(standardizeJSON(err));
  }
}
