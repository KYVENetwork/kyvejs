import { existsSync, mkdirSync, createWriteStream } from "fs";
import path from "path";
import { DataItem, standardizeError, Validator } from "../..";
import JSZip from "jszip";
import jsonDiff from "json-diff";

/**
 * archiveDebugBundle is used for storing a bundle for debug
 * purposes if the validator voted with invalid
 *
 * @method archiveDebugBundle
 * @param {Validator} this
 * @param {DataItem[]} bundle local validation bundle which should get archived for debug purposes
 * @return {void}
 */
export function archiveDebugBundle(
  this: Validator,
  vote: number,
  proposedBundle: DataItem[],
  validationBundle: DataItem[],
  metadata: object
): void {
  try {
    // if "debug" folder under target path does not exist create it
    if (!existsSync(path.join(this.home, `debug`))) {
      mkdirSync(path.join(this.home, `debug`), { recursive: true });
    }

    const zip = new JSZip();

    // save metadata which includes vote reasons and args
    zip.file("metadata.json", JSON.stringify(metadata, null, 2));

    // save current pool state including the raw bundle proposal
    zip.file("pool.json", JSON.stringify(this.pool || {}, null, 2));

    // save the proposed bundle from the uploader
    zip.file("proposed_bundle.json", JSON.stringify(proposedBundle, null, 2));

    // save the locally created bundle from this node
    zip.file(
      "validation_bundle.json",
      JSON.stringify(validationBundle, null, 2)
    );

    // save the diff of the proposed and local bundle
    zip.file(
      "diff.txt",
      jsonDiff.diffString(proposedBundle, validationBundle, { color: false })
    );

    const storageId = this.pool?.bundle_proposal?.storage_id ?? "";
    const zipPath = path.join(
      this.home,
      `debug`,
      `${vote}_${Math.floor(Date.now() / 1000)}_${storageId.slice(0, 6)}.zip`
    );

    zip
      .generateNodeStream({ type: "nodebuffer", streamFiles: true })
      .pipe(createWriteStream(zipPath))
      .on("finish", () => {
        this.logger.info("Successfully saved debug information");
      });
  } catch (err) {
    this.logger.error("Failed to save debug information");
    this.logger.error(standardizeError(err));
  }
}
