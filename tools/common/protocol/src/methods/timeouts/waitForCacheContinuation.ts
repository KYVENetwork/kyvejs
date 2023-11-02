import { Validator } from "../..";
import { sleep } from "../../utils";

/**
 * waitForCacheContinuation waits until a new bundle proposal is
 * available. We don't need to sync the pool because the pool
 * state already gets synced in the other main function "runNode"
 * so we only listen here
 *
 * @method waitForCacheContinuation
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function waitForCacheContinuation(
  this: Validator,
  updatedAt: number
): Promise<void> {
  // continue if a new proposal is available
  while (updatedAt === parseInt(this.pool.bundle_proposal!.updated_at)) {
    await sleep(1000);
  }
}
