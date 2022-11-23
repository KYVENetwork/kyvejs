/**
 * Interface of Compression.
 *
 * The Compression is responsible for compressing data before its stored on the Storage Provider.
 * It is also responsible for decompressing data after retrieved from the Storage Provider.
 *
 * @interface ICache
 */
export interface ICompression {
  /**
   * Name of the compression. This should be unique for every compression type.
   *
   * @property name
   * @type {string}
   */
  name: string;

  /**
   * MIME type of the compressed data. Examples are 'application/json' for raw json or
   * 'application/gzip' for gzipped files
   *
   * @property mimeType
   * @type {string}
   */
  mimeType: string;

  /**
   * Compresses a bundle
   *
   * @method compress
   * @param {Buffer} data
   * @return {Promise<Buffer>}
   */
  compress(data: Buffer): Promise<Buffer>;

  /**
   * Decompresses a bundle
   *
   * @method decompress
   * @param {Buffer} data
   * @return {Promise<Buffer>}
   */
  decompress(data: Buffer): Promise<Buffer>;
}
