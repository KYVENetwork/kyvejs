import BigNumber from "bignumber.js";

import { Validator } from "../..";
import { sleep, standardizeError } from "../../utils";

/**
 * waitForUploadInterval waits until the upload interval of the current
 * round has passed. The node waits, because during this time no new round
 * will start. Only after the upload interval the next uploader can start
 * the next round.
 *
 * @method waitForUploadInterval
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function waitForUploadInterval(this: Validator): Promise<void> {
  try {
    // determine how long the upload interval is still taking
    let timeRemaining = new BigNumber(0);

    const unixNow = new BigNumber(Date.now());
    const unixIntervalEnd = new BigNumber(this.pool.bundle_proposal!.updated_at)
      .plus(this.pool.data!.upload_interval)
      .multipliedBy(1000);

    // if upload interval has already passed just wait zero seconds
    if (unixNow.lt(unixIntervalEnd)) {
      timeRemaining = unixIntervalEnd.minus(unixNow);
    }

    this.logger.info(
      `Waiting for remaining upload interval = ${timeRemaining
        .dividedBy(1000)
        .toFixed(2)}s ...`
    );

    // further track remaining upload interval time for metrics
    const endTimeRemaining =
      this.m.bundles_remaining_upload_interval_time.startTimer();

    // wait for the remaining time
    await sleep(timeRemaining.toNumber());

    endTimeRemaining();

    this.logger.info(`Reached upload interval of current bundle proposal`);
  } catch (err) {
    this.logger.error(`Failed to wait for upload interval. Continuing ...`);
    this.logger.error(standardizeError(err));
  }
}
