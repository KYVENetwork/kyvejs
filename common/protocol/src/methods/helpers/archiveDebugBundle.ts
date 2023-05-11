import { appendFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import { DataItem, Validator } from "../..";

/**
 * archiveDebugBundle is used for storing a bundle for debug
 * purposes if the validator voted with invalid
 *
 * @method archiveDebugBundle
 * @param {Validator} this
 * @param {DataItem[]} bundle local validation bundle which should get archived for debug purposes
 * @return {void}
 */
export function archiveDebugBundle(this: Validator, bundle: DataItem[]): void {
  // if "debug" folder under target path does not exist create it
  if (!existsSync(path.join(this.home, `debug`))) {
    mkdirSync(path.join(this.home, `debug`), { recursive: true });
  }

  const storageId = this.pool?.bundle_proposal?.storage_id ?? "";

  // save current pool state to specified path target
  appendFileSync(
    path.join(this.home, `debug`, `pool_state_${storageId}.json`),
    JSON.stringify(this.pool || {})
  );

  // save local bundle to specified path target
  appendFileSync(
    path.join(this.home, `debug`, `validation_bundle_${storageId}.json`),
    JSON.stringify(bundle || {})
  );
}
