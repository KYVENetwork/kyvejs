import { ICompression } from "../..";
import { Gzip } from "./Gzip";
import { NoCompression } from "./NoCompression";

/**
 * compressionFactory creates the correct compression class
 * from the specified id. Current compression types are:
 *
 * 0 - NoCompression
 * 1 - Gzip
 * x - NoCompression (default)
 *
 * @method compressionFactory
 * @param {number} compressionId the id of the compression
 * @return {ICompression}
 */
export const compressionFactory = (compressionId: number): ICompression => {
  switch (compressionId) {
    case 1:
      return new Gzip();
    default:
      return new NoCompression();
  }
};
