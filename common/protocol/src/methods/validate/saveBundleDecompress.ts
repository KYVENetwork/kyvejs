import { Validator } from "../..";
import { DataItem } from "../../types";
import { bytesToBundle, standardizeError } from "../../utils";

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
    this.logger.debug(`this.compressionFactory()`);
    const compression = this.compressionFactory();

    this.logger.debug(`this.compression.decompress($RAW_STORAGE_DATA)`);

    const storageBundle = bytesToBundle(
      await compression.decompress(rawStorageData)
    );

    this.logger.info(
      `Successfully decompressed bundle with Compression:${compression.name}`
    );

    return standardizeError(storageBundle);
  } catch (err) {
    this.logger.error(
      `Could not decompress bundle with Compression. Continuing ...`
    );
    this.logger.error(standardizeError(err));

    return [];
  }
}
