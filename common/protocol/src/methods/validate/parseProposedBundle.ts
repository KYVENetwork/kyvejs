import { Validator } from "../..";
import { DataItem } from "../../types";
import { bytesToBundle } from "../../utils";

/**
 * parseProposedBundle takes the raw data from the storage
 * provider and tries to decompress and parse it back to
 * the original JSON format
 *
 * @method parseProposedBundle
 * @param {Validator} this
 * @param {number} updatedAt
 * @return {Promise<DataItem[] | null>}
 */
export async function parseProposedBundle(
  this: Validator,
  storageProviderResult: Buffer
): Promise<DataItem[]> {
  // get current compression defined on pool
  this.logger.debug(`this.compressionFactory()`);
  const compression = this.compressionFactory();

  // decompress the bundle with the specified compression type
  this.logger.debug(`this.compression.decompress($STORAGE_PROVIDER_RESULT)`);
  const decompressed = await compression.decompress(storageProviderResult);

  this.logger.info(
    `Successfully decompressed bundle with Compression:${compression.name}`
  );

  // parse raw decompressed bundle back to json format
  return bytesToBundle(decompressed);
}
