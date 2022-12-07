import { Validator } from "../..";
import { ICompression } from "../..";
import { Gzip } from "../../reactors/compression/Gzip";
import { NoCompression } from "../../reactors/compression/NoCompression";

/**
 * compressionFactory creates the correct compression class
 * from the specified id. Current compression types are:
 *
 * 0 - NoCompression
 * 1 - Gzip
 * x - NoCompression (default)
 *
 * @method compressionFactory
 * @param {Validator} this
 * @param {number} compressionId the id of the compression
 * @return {ICompression}
 */
export function compressionFactory(
  this: Validator,
  compressionId: number
): ICompression {
  switch (compressionId) {
    case 1:
      return new Gzip();
    default:
      return new NoCompression();
  }
}
