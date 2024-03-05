import { existsSync, mkdirSync, createWriteStream, readFileSync } from "fs";
import path from "path";
import { DataItem, standardizeError, Validator } from "../..";
import JSZip from "jszip";
import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

/**
 * archiveDebugBundle is used for storing a bundle for debug
 * purposes if the validator voted with abstain or invalid
 *
 * @method archiveDebugBundle
 * @param {Validator} this
 * @param {number} vote type of the vote
 * @param {DataItem[]} proposedBundle the proposed bundle uploaded to the storage provider
 * @param {DataItem[]} validationBundle the local bundle from the node
 * @param {object} metadata additional info about the bundle
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
    this.logger.info("Archiving debug bundle");

    // if "debug" folder under target path does not exist create it
    if (!existsSync(path.join(this.home, `debug`))) {
      mkdirSync(path.join(this.home, `debug`), { recursive: true });
    }

    const zip = new JSZip();

    // save metadata which includes vote reasons and args
    const metadata_str = JSON.stringify(metadata || {}, null, 2);
    zip.file("metadata.json", metadata_str);

    // save current pool state including the raw bundle proposal
    const pool_str = JSON.stringify(this.pool || {}, null, 2);
    zip.file("pool.json", pool_str);

    // save the proposed bundle from the uploader
    const proposed_bundle_str = JSON.stringify(proposedBundle || [], null, 2);
    zip.file("proposed_bundle.json", proposed_bundle_str);

    // save the locally created bundle from this node
    const validation_bundle_str = JSON.stringify(
      validationBundle || [],
      null,
      2
    );
    zip.file("validation_bundle.json", validation_bundle_str);

    // save the logfile of the current session
    const debug_str = readFileSync(path.join(this.home, "logs", this.logFile));
    zip.file("debug.log", debug_str);

    // get human readable vote
    let voteType = "";

    switch (vote) {
      case VoteType.VOTE_TYPE_VALID:
        voteType = "valid";
        break;
      case VoteType.VOTE_TYPE_INVALID:
        voteType = "invalid";
        break;
      case VoteType.VOTE_TYPE_ABSTAIN:
        voteType = "abstain";
        break;
      case VoteType.VOTE_TYPE_UNSPECIFIED:
        voteType = "unspecified";
        break;
      default:
        voteType = "unrecognized";
    }

    const storageId = this.pool?.bundle_proposal?.storage_id ?? "";
    const zipPath = path.join(
      this.home,
      `debug`,
      `${voteType}_${this.pool.id}_${Math.floor(
        Date.now() / 1000
      )}_${storageId.slice(0, 6)}.zip`
    );

    // save zip file
    zip
      .generateNodeStream({ type: "nodebuffer", streamFiles: true })
      .pipe(createWriteStream(zipPath))
      .on("finish", () => {
        this.logger.info("Successfully saved debug information");
      })
      .on("error", (err) => {
        this.logger.error("Failed to save debug information");
        this.logger.error(standardizeError(err));
      });
  } catch (err) {
    this.logger.error("Failed to save debug information");
    this.logger.error(standardizeError(err));
  }
}
