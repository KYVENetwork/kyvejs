import { PoolStatus } from "@kyvejs/types/lcd/kyve/pool/v1beta1/pool";

import { Validator } from "../..";

/**
 * isPoolActive checks if the pool is active or not.
 * It returns true or false, wether it is active or not.
 *
 * @method isPoolActive
 * @param {Validator} this
 * @return {boolean}
 */
export function isPoolActive(this: Validator): boolean {
  this.logger.debug(`Validating if pool is active: ${this.pool.status}`);

  switch (this.pool.status as PoolStatus) {
    case PoolStatus.POOL_STATUS_ACTIVE:
      return true;
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      return true;
    case PoolStatus.POOL_STATUS_DISABLED:
      this.logger.info(
        "Pool is disabled. Waiting for pool being enabled. Idling ..."
      );
      return false;
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      this.logger.info(
        "Not enough delegation in pool. Waiting for additional delegation. Idling ..."
      );
      return false;
    case PoolStatus.POOL_STATUS_UPGRADING:
      this.logger.info(
        "Pool is currently upgrading. Waiting for upgrade being applied. Idling ..."
      );
      return false;
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      this.logger.info("Pool status is currently unspecified. Idling ...");
      return false;
    case PoolStatus.POOL_STATUS_END_KEY_REACHED:
      this.logger.info("End key reached. Idling ...");
      return false;
    default:
      this.logger.info("Pool status is currently unknown. Idling ...");
      return false;
  }
}
