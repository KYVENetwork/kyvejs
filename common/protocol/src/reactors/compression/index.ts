import { ICompression, Validator } from "../..";
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
 * @return {ICompression}
 */
export function compressionFactory(this: Validator): ICompression {
  switch (this.pool.data?.current_compression_id ?? 0) {
    case 1:
      return new Gzip();
    default:
      return new NoCompression();
  }
}
