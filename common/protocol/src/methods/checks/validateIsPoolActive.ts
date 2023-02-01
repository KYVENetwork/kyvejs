import { PoolStatus } from "@kyvejs/types/lcd/kyve/pool/v1beta1/pool";

import { Validator } from "../..";

/**
 * validateIsPoolActive checks if the pool is active or not.
 * It returns true or false, wether it is active or not.
 *
 * @method validateIsPoolActive
 * @param {Validator} this
 * @return {boolean}
 */
export function validateIsPoolActive(this: Validator): boolean {
  this.logger.debug(`Validating if pool is active: ${this.pool.status}`);

  switch (this.pool.status as PoolStatus) {
    case PoolStatus.POOL_STATUS_ACTIVE:
      return false;
    case PoolStatus.POOL_STATUS_DISABLED:
      this.logger.info(
        "Pool is disabled. Waiting for pool being enabled. Idling ..."
      );
      return true;
    case PoolStatus.POOL_STATUS_NO_FUNDS:
      this.logger.info(
        "Pool is out of funds. Waiting for additional funds. Idling ..."
      );
      return true;
    case PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION:
      this.logger.info(
        "Not enough delegation in pool. Waiting for additional delegation. Idling ..."
      );
      return true;
    case PoolStatus.POOL_STATUS_UPGRADING:
      this.logger.info(
        "Pool is currently upgrading. Waiting for upgrade being applied. Idling ..."
      );
      return true;
    case PoolStatus.POOL_STATUS_UNSPECIFIED:
      this.logger.info("Pool status is currently unspecified. Idling ...");
      return true;
    default:
      this.logger.info("Pool status is currently unknown. Idling ...");
      return true;
  }
}
