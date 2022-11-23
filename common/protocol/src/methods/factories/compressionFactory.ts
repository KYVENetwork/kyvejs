import { Node } from "../..";
import { NoCompression } from "../../reactors/compression/NoCompression";
import { Gzip } from "../../reactors/compression/Gzip";
import { ICompression } from "../..";

/**
 * compressionFactory creates the correct compression class
 * from the specified id. Current compression types are:
 *
 * 0 - NoCompression
 * 1 - Gzip
 * x - NoCompression (default)
 *
 * @method compressionFactory
 * @param {Node} this
 * @param {number} compressionId the id of the compression
 * @return {ICompression}
 */
export function compressionFactory(
  this: Node,
  compressionId: number
): ICompression {
  switch (compressionId) {
    case 1:
      return new Gzip();
    default:
      return new NoCompression();
  }
}
