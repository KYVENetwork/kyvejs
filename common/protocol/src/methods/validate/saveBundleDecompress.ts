import { Validator } from "../..";
import { DataItem } from "../../types";
import { bytesToBundle, standardizeJSON } from "../../utils";

/**
 * saveBundleDecompress decompresses a bundle with the specified compression.
 * It never throws an error and returns no data if one occurs.
 *
 * @method saveBundleDecompress
 * @param {Validator} this
 * @param {Buffer} rawStorageData
 * @return {Promise<DataItem[]>}
 */
export async function saveBundleDecompress(
  this: Validator,
  rawStorageData: Buffer
): Promise<DataItem[]> {
  try {
    // get compression the proposed bundle was compressed with
    this.logger.debug(
      `compressionFactory(${this.pool.bundle_proposal?.compression_id ?? 0})`
    );
    const compression = Validator.compressionFactory(
      this.pool.bundle_proposal?.compression_id ?? 0
    );

    this.logger.debug(`this.compression.decompress($RAW_STORAGE_DATA)`);

    const storageBundle = bytesToBundle(
      await compression.decompress(rawStorageData)
    );

    this.logger.info(
      `Successfully decompressed bundle with Compression:${compression.name}`
    );

    return standardizeJSON(storageBundle);
  } catch (err) {
    this.logger.error(
      `Could not decompress bundle with Compression. Continuing ...`
    );
    this.logger.error(standardizeJSON(err));

    return [];
  }
}
