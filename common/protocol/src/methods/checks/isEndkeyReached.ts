import { standardizeError, Validator } from "../..";

/**
 isEndkeyReached checks if the end key is reached.
 */
export async function isEndkeyReached(
  this: Validator,
  toKey: string
): Promise<boolean> {
  try {
    // No further checks are needed if the current_key is empty
    if (!this.pool.data!.current_key) {
      return false;
    }

    //  Check if the current_key or to_key equals the end_key
    if (
      this.pool.data!.current_key === this.pool.data!.end_key ||
      toKey === this.pool.data!.end_key
    ) {
      this.logger.info(`End key reached.`);
      return true;
    }
    return false;
  } catch (err) {
    this.logger.debug(standardizeError(err));

    return false;
  }
}
